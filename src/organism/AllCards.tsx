import { Country } from "../Data";
import Card from "./Card";

type SearchProps = {
    dark: boolean; 
    countries:Country[];
  };
function AllCards({ dark,countries }: SearchProps) {
  return (
    <div className="grid  2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 sm:grid-cols-1 place-items-center	">
      {countries.length>0?(countries?.map((item)=>(
              <Card dark={dark}  key={item.alpha3Code} dataitem={item}/>

      ))):(    <div className="my-10 text-center text-gray-600">
      <p className={`text-xl ${dark ? 'text-gray-300' : 'text-gray-800'}`}>
        There are no items
      </p>
      <p className={`${dark ? 'text-gray-400' : 'text-gray-500'}`}>
        Try adjusting your search.
      </p>
    </div>
    )}
    </div>
  )
}

export default AllCards
