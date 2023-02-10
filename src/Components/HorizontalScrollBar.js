import React,{useState,useEffect} from 'react'

function HorizontalScrollBar(props) {

    const [data,setData] = useState([])

    setData(props.data)
    console.log(data)
    return (
    <div>

        {/* {
              data.map((data)=>
              {
                <div className="flex flex-row ">

                </div>
              })      

            
         }                */}
    </div>
  )
}

export default HorizontalScrollBar