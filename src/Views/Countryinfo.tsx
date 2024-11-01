import React, { useState } from 'react';
import NavBar from './NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function Countryinfo() {
    const location = useLocation();
    const navigate = useNavigate();
    const { dataitem } = location.state || {};
    const { dark } = location.state || {};
    const [dark1, setDark1] = useState<boolean>(dark?dark:false);

    
    const darkMode = () => {
        setDark1((prev) => !prev);
    };

    const back = () => {
        navigate("/",{state:{dark1}});
    };

    return (
        <>
            <NavBar dark={dark1} darkmode={darkMode} />
            <div className={`${dark1 ? "bg-gray-900 text-white" : " text-gray-800"} min-h-screen py-20 px-4 flex flex-col items-center`}>
                
                <button 
                    onClick={back} 
                    className={`flex items-center gap-2  mb-8 ${dark1 ? "bg-gray-800 text-white hover:scale-105" : "bg-gray-200 text-gray-800 hover:bg-gray-300"} font-semibold px-4 py-2 rounded-md transition-transform duration-300`}
                >
                    <FaArrowLeft className='text-lg' />
                    Back
                </button>

                <div className={`flex flex-col md:flex-row items-center ${dark1 ? "bg-gray-800 text-white" : "bg-white text-gray-800"} rounded-md shadow-md w-full max-w-4xl p-6`}>
                    <img src={dataitem.flag} alt={`${dataitem.name} flag`} className='w-[300px] h-auto rounded-md mb-6 md:mb-0 md:mr-6' />

                    <div className="flex flex-col">
                        <h1 className='text-3xl font-bold mb-4'>{dataitem.name}</h1>

                        <div className='space-y-2'>
                            <p><strong>Native Name:</strong> {dataitem.nativeName}</p>
                            <p><strong>Population:</strong> {dataitem.population.toLocaleString()}</p>
                            <p><strong>Region:</strong> {dataitem.region}</p>
                            <p><strong>Sub Region:</strong> {dataitem.subregion}</p>
                            <p><strong>Capital:</strong> {dataitem.capital}</p>
                            <p><strong>Top Level Domain:</strong> {dataitem.topLevelDomain.join(', ')}</p>
                            <p><strong>Currencies:</strong> {dataitem.currencies.map((item: { name: string; }) => item.name).join(', ')}</p>
                            <p><strong>Languages:</strong> {dataitem.languages.map((item: { name: string; }) => item.name).join(', ')}</p>
                        </div>

                        <div className='mt-6'>
                            <h2 className="font-semibold mb-2">Border Countries:</h2>
                            <div className="flex flex-wrap gap-2">
                                {dataitem.borders?.length ? 
                                    dataitem.borders.map((item:string, index: React.Key | null | undefined) => (
                                        <span key={index} className={`px-3 py-1 rounded-md ${dark1 ? "bg-gray-700" : "bg-gray-200"} text-sm`}>
                                            {item}
                                        </span>
                                    )) 
                                    : <span>None</span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Countryinfo;
