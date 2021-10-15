import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import {data} from "../../data/data.js"
import "./Section5.css"
const Section5 = () => {

    const [startIndex,setStartIndex] = useState(0);
    const [winsize,setwinsize]=useState(window.screen.width);
    const [winheight,setwinheight]=useState(window.screen.height);
    
    const handleResize=()=>{
      if (window.innerWidth <1000) {
          setwinsize(window.innerWidth)
      }
      else{
          setwinsize(window.innerWidth)
      }
      if (window.innerHeight <1000) {
        setwinheight(window.innerHeight)
    }
    else{
      setwinheight(window.innerHeight)
    }
  }
  useEffect(() => {
      window.addEventListener("resize", handleResize)
      window.addEventListener("resize", handleResize)
  }, [window.screen.width,window.screen.height])

    return (
        <div className="sec5-main-container" id="sec5">
            <h1>Our Blog</h1>
            <div className="card-carousel">
                {
                    winsize > 800 ? 
                    <>
                                    <Card item={data[startIndex]}/> 
                                    <Card item={data[startIndex+1]}/> 
                                    <Card item={data[startIndex+2]}/>  
                    </>
                    :
                                        <>
                                    <Card item={data[startIndex]}/> 
                                    <Card item={data[startIndex+1]}/> 
                    </>
                }

            </div>
            <div className="pagination">
                {
                    winsize > 800 ? 
                    <>
                                    <p onClick={() => setStartIndex(0)}> {`<`} </p>
                                    <p onClick={() => setStartIndex(0)}>1</p>
                                    <p onClick={() => setStartIndex(3)}>2</p>
                                    <p onClick={() => setStartIndex(3)}>{`>`}</p>
                    </>
                    :
                    <>
                                    <p onClick={() => setStartIndex(startIndex !== 0 ? startIndex-2 : 0)}> {`<`} </p>
                                    <p onClick={() => setStartIndex(0)}>1</p>
                                    <p onClick={() => setStartIndex(2)}>2</p>
                                    <p onClick={() => setStartIndex(4)}>3</p>
                                    <p onClick={() => setStartIndex(startIndex !== 4 ? startIndex+2 : 0)}>{`>`}</p>
                    </>
                }

            </div>
        </div>
    )
}

export default Section5
