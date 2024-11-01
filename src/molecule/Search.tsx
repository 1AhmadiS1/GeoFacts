import React, { useEffect, useState } from 'react'
type SearchProps = {
  dark: boolean; 
  searchfunctionality: (value: string) => void;
  regionfilter:(value:string)=>void;
  
};

function Search({ dark ,searchfunctionality,regionfilter}: SearchProps) {
    const [Svalue,SetSvalue]=useState<string>("")
    const [Rvalue,SetRvalue]=useState<string>("")

useEffect(()=>{
  searchfunctionality(Svalue);
regionfilter(Rvalue);

},
[Svalue,Rvalue])


const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  SetSvalue(e.target.value);}

  const handleRegion=(e:React.ChangeEvent<HTMLSelectElement>)=>{
SetRvalue(e.target.value)
  }

  return (
  <div className={`md:flex justify-between  `}>

<div     className={`${dark?"bg-gray-800 text-white":"bg-white"} shadow-xl  py-6 px-5 rounded-md mx-8 w-[300px]    ` }
>
<i className="fa fa-search text-gray-300 mr-5 "></i>
    <input
    type="text"
    placeholder={'search for a country'}
    value={Svalue}
    onChange={handleInputChange}
    className={`${dark?"bg-gray-800 text-white":"bg-white"} outline-0`}
    />
    </div>

    <select

        className={`${dark?"bg-gray-800 text-white":"bg-white"}  shadow-xl  rounded-lg py-6 px-16 pl-4 md:my-0 my-6 mb-6 mx-8 `}
        
value={Rvalue}
onChange={handleRegion}
>
        <option value="">
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

    </div>
  )
}

export default Search
