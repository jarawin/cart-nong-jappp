import './App.css';
import Main from './components/Main';


import { login, logout } from './components/Line/Liff';
import React, { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import { getDataById } from './components/data/Cart'


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [textLoading, setTextLoading] = useState(null);
  const [userid, setUserId] = useState(null);

  const setFirstLoad = async () => {
    var uid = new URLSearchParams(window.location.search).get("userid")
    setUserId(uid)

    if (!uid) {

      setIsLoading(true)
      setTextLoading("please provide a userid")
    } else {
      const data = await getDataById(uid)
      if (data?.error) {

        setIsLoading(true)
        setTextLoading("qouta of sheetdb.io is limited")
        setTimeout(() => {
          logout()
        }, 1500)
      } else if (data.length == 0) {

        setIsLoading(true)
        setTextLoading("ตะกร้าสินค้าว่างเปล่า")
        setTimeout(() => {
          logout()
        }, 1500)
      } else {

        setIsLoading(false)
        setData(data)
        setIsLoading(false)
      }
    }
  }

  useEffect(async () => {
    // await login();
    await setFirstLoad();
  }, []);


  if (isLoading) {
    return <Loader text={textLoading} setFirstLoad={setFirstLoad} />
  } else {
    return <Main data={data} setData={setData} userid={userid} setIsLoading={setIsLoading} setTextLoading={setTextLoading} />
  }
}

export default App;
