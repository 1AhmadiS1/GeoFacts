import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import Search from '../molecule/Search';
import AllCards from '../organism/AllCards';
import countriesData from "./../data[1].json";
import { Country } from '../Data';
import { useLocation } from 'react-router-dom';

function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filterditem,setFilterditem]=useState<Country[]>([]);
  const [Rfilter,setRfilter]=useState<Country[]>([]);
  const location=useLocation();
  const {dark1}=location.state || {};
    const [dark,setDark]=useState<boolean>(dark1?dark1:false)
useEffect(() => {
    setCountries(countriesData as Country[]);
    setFilterditem(countriesData as Country[]);
    setRfilter(countriesData as Country[]);

    }, []);

const searchfunctionality=(value:string)=>{
  if(!value){
    setFilterditem(countries);
    return;
  }
  else{

    const filter:Country[]=countries.filter(item=>(item.name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())))
    setFilterditem(filter)
  }
}


const regionfilter=(value:string)=>{
  if(!value){
  setRfilter(filterditem)
  }
  else{

    const Regionfilter:Country[]=filterditem.filter((item)=>(item.region.toLocaleLowerCase()==value.toLocaleLowerCase()))
    
    setRfilter(Regionfilter)
  }

}


    const darkMode=()=>{
      setDark((prev) => !prev); 
    }
    return (
    <>  
      <NavBar dark={dark} darkmode={darkMode}/>
      <div className={`${dark?"bg-gray-900 ":""} h-[100%] pt-12`}>

    <Search dark={dark} searchfunctionality={searchfunctionality} regionfilter={regionfilter}/>
    <AllCards  dark={dark} countries={Rfilter}/>
    </div>

    </>
  )
}

export default Home
