import './App.css';
import Main from './components/Main';


import { login, logout } from './components/Line/Liff';
import React, { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import { getDataById } from './components/data/Cart'


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [textLoading, setTextLoading] = useState(null);
  const [userid, setUserId] = useState(null);

  useEffect(async () => {
    const queryParams = new URLSearchParams(window.location.search)
    const uid = queryParams.get("userid")
    setUserId(uid)
    // login();

    if (!uid) {
      setTextLoading("please provide a userid")
    } else {
      const data = await getDataById(uid)
      if (data?.error) {
        setTextLoading("qouta of sheetdb.io is limited")
        setTimeout(() => {
          logout()
        }, 1500)
      } else if (data.length == 0) {
        setTextLoading("ตะกร้าสินค้าว่างเปล่า")
        setTimeout(() => {
          logout()
        }, 1500)
      } else {
        setData(data)
        setIsLoading(false)
      }
    }
  }, []);

  if (isLoading) {
    return <Loader text={textLoading} />
  } else {
    return <Main data={data} setData={setData} userid={userid} setIsLoading={setIsLoading} setTextLoading={setTextLoading} />
  }
}

export default App;
