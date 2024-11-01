import React from 'react'
import { Country } from '../Data';
import { useNavigate } from 'react-router-dom';
type SearchProps = {
    dark: boolean; 
    dataitem:Country;
  };
function Card({ dark,dataitem }: SearchProps) {
  const navigate = useNavigate();

  const countryinfo=()=>{
    navigate("/details",{state:{dataitem,dark}})
  }
  return (
    <>
    {
      <button onClick={countryinfo} className={`${dark?"bg-gray-800  border-gray-950 border-2 text-white":"bg-white"} flex flex-col rounded-xl my-12 mx-12 w-[300px] pb-6  `} >
<img className="h-[200px] w-[100%]" src={dataitem.flag} alt="" />
<div className='py-4 flex mx-4  flex-col gap-1'>
<p className='flex  mb-4 font-bold text-xl'>{dataitem.name}</p>
<p className='flex font-medium'>population: {dataitem.population}</p>
<p className='flex font-medium'>Region: {dataitem.region}</p>
<p className='flex font-medium'>capital: {dataitem.capital}</p>
</div>
    </button>
   }
    
    </>
  )
}

export default Card
