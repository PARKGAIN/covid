import React, { useEffect, useState } from 'react'
import { JsxElement } from 'typescript'
import './App.css'
import Barchart from './components/Barchart';

function App(): JSX.Element {
  const [cntConfirmations,setCnt] = useState(0)
  const [rateConfirmations,setRate] =useState(0)
  const[cntHospitalizations,setCntHos]= useState(0)
  const [date,setDate] = useState();
  useEffect(()=>{getData();},[])

  const apiUrl = "http://apis.data.go.kr/1790387/covid19CurrentStatusKorea/covid19CurrentStatusKoreaJason?";
  const serviceKey = "serviceKey=r5G6Nmk9er5D8IiddKwnNfJdz50cJ4UirOGa55bgfvcu9EXcFvniujfom9fJSIEfBeVnq4cC9EeiOdlWdf2LMQ==";
 
  async function getData() {
    const response:Response = await fetch(apiUrl + serviceKey);
    const fetchedData = await response.json();
    const  covidData = fetchedData.response.result[0];
    setCnt(covidData.cnt_confirmations);
    setRate(covidData.rate_confirmations);
    setCntHos(covidData.cnt_hospitalizations);
    setDate(covidData.mmddhh);
  }

  return (
    <div>
      <h3 className='text_center'>코로나 현황</h3>
      <div className='margin_auto'>
      <h4>데이터조회기준일시 :{date}</h4>
      <Barchart cntConfirmations={cntConfirmations} rateConfirmations={rateConfirmations} cntHospitalizations={cntHospitalizations}/>
      </div>
    </div>
  );
}

export default App;
