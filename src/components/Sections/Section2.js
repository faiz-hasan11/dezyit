import React, { useEffect } from 'react'
import "./Section2.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section2 = () => {
        useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])
    return (
        <div className="main-container2" id="sec2">
            <div>
                <img data-aos="zoom-in" data-aos-duration="1500" alt="Sec2Img" src="https://static.wixstatic.com/media/ec9816_120f89a1570549e882031fbfb5ee5905~mv2.png/v1/fill/w_750,h_563,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp" className="sec2-img"/>
            </div>
            <div className="content">
                <h1>What is a Design Sprint?</h1>
                <p>The sprint is a five-day process for answering critical business questions through design, prototyping and testing ideas with customers. Developed at Google Ventures, it’s a “greatest hits” of business strategy, innovation, behaviour science, design thinking, and more—packaged into a battle-tested process that any team can use.</p>
            </div>
        </div>
    )
}

export default Section2
