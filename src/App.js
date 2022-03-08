import React,{useState} from "react";
import { Tours } from './data'

function App() {
  const [data, setData] = useState(Tours)
  const [more, setMore] = useState(true)
  
  const removeHandler = id => {
    let newData = data.filter(newData => newData.id !== id)
    setData(newData)
  }

  const readMore = () => {
    setMore(prevState => !prevState)
  }
  return (
    <div className="sm:w-2/5 w-full sm:px-0 px-5 mx-auto gap-y-2">
      <p className="capitalize border-b-2 border-[#243c5a] my-3 w-max text-center mx-auto text-3xl font-bold pb-1.5">Our Tours</p>
      {data.map(data => {
        const { id, picture, text, title, price } = data;
        const text1 = text.substring(0, 299)
        const text2 = text
        return (
          <div key={data.id} >
            <img className="w-full h-80 rounded-t-lg drop-shadow-2xl mt-5" src={picture} />
            <div className="px-5 py-5 bg-[#ffffff] rounded-b-lg drop-shadow-2xl">
            <div className="flex justify-between items-center">
              <p className="font-bold text-base">{title}</p>
              <p className="bg-[#ebf7ff] text-[#49a6e9] text-base rounded px-2 font-semibold">${price}</p>
            </div>
              <p className="text-sm mt-2">{more ? text1 : text2}
                <button className="text-[#49a6e9] font-medium ml-1" onClick={readMore}>{more ? 'Read More' : 'Show Less'}</button>
              </p>

              <div className="flex justify-center my-2">
                <button
                  onClick={() => { removeHandler(id) }}
                  className="capitalize border rounded px-5 py-0.5 border border-[#F35E5E] text-[#F35E5E]">
                  Not interested
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
