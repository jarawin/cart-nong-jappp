import './App.css';
import Main from './components/Main';


import { login } from './components/Line/Liff';
import React, { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';


function App() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    const profile = await login();
    setProfile(profile);
    setIsLoading(false);
  }, []);


  if (isLoading) {
    return <Loader />
  } else {
    return <Main profile={profile} setIsLoading={setIsLoading} />
  }
}

export default App;
