import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const App = () => {

  // Param : nama cookie, value cookie, expired time (minutes)
  const setCookie = (cName, cValue, expMinutes) => {
    let date = new Date();
    date.setTime(date.getTime() + (expMinutes*60*1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }


  // Param : nama cookie
  const getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    console.log(res);
}

  return (
    <div className="App">
      {/* Set cookie with name OTP value 123123 with expiration time 1 minute */}
      <button onClick={() => {setCookie("OTP", 123123, 1)}}>SET COOKIES</button>

      {/* Get cookie with name OTP in console log*/}
      <button onClick={() => {getCookie("OTP")}}>GET COOKIE</button>
    </div>
  );
}

export default App;
