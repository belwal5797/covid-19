import React, { useEffect, useState } from 'react';

const Covid=()=>{
       
      const [api,getApi]=useState([]);

      const getCovidData=async()=>{
          
        try{
          const res= await fetch('https://api.covid19india.org/data.json');
          const data =await res.json();
          console.log(data);
          getApi(data.statewise[0]);

        }

        catch(err){
             console.log(err);
        }
            
          

      }

       useEffect(()=>{
        getCovidData();

       },[]);
       
      return(

        <>
          <h1>India Covid-19 Tracker : </h1>
          <br/>
          <div className='root'>

          <div className='cases'>
          <div className='covid'>COUNTRY<br/><br/>
          <span>INDIA</span></div>
          <div className='covid'>RECOVERED<br/><br/>
          <span>{api.recovered}</span></div>
          <div className='covid'>CONFIRMED<br/><br/>
          <span>{api.confirmed}</span></div>
          </div>

          <br/>

         
          <div className='cases'>
          <div className='covid'>DEATHS<br/><br/>
          <span>{api.deaths}</span></div>
          <div className='covid'>ACTIVE<br/><br/>
          <span>{api.active}</span></div>
          <div className='covid'>UPDATED<br/><br/>
          <span>{api.lastupdatedtime}</span></div>
          </div>
    
      
         </div>
          
            
          
        </>
      );
}

export default Covid;