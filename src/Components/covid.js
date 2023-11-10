import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid=()=>{

    const [data,setData]=useState([]);

    const getCovidData = async()=>{
        try{
            const res= await fetch('https://data.covid19india.org/data.json');
            const actualData= await res.json();
            console.log(actualData.cases_time_series[50]);
            setData(actualData.cases_time_series[50]);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
       getCovidData();
    },[]);

    return (
    <div style={{backgroundColor:'black',height:651}}>
       <section>
       <h1>LIVE</h1>
       <h2>COVID-19 CORONAVIRUS TRACKER</h2>
       <ul>
          <li className='Card'>
            <div className='card_main'>
              <div className='card_inner'> 
                <p className='card_name'><span>OUR</span>   COUNTRY</p>
                <p className='card_total card_small' >INDIA</p>
              </div>
            </div>
          </li>
          <li className='Card'>
            <div className='card_main'>
              <div className='card_inner'> 
                <p className='card_name'><span>TOTAL</span>   RECOVERED</p>
                <p className='card_total card_small' >{data.totalrecovered}</p>
              </div>
            </div>
          </li>
          <li className='Card'>
            <div className='card_main'>
              <div className='card_inner'> 
                <p className='card_name'><span>TOTAL</span>   CONFIRMED</p>
                <p className='card_total card_small' >{data.totalconfirmed}</p>
              </div>
            </div>
          </li>
          </ul>
          <ul>
          <li className='Card'>
            <div className='card_main'>
              <div className='card_inner'> 
                <p className='card_name'><span>DATE</span></p>
                <p className='card_total card_small' >{data.date}</p>
              </div>
            </div>
          </li>
          <li className='Card'>
            <div className='card_main'>
              <div className='card_inner'> 
                <p className='card_name'><span>TOTAL</span>  DECEASED</p>
                <p className='card_total card_small' >{data.totaldeceased}</p>
              </div>
            </div>
          </li>
       </ul>
    </section>
    </div>
  )
}

export default Covid;