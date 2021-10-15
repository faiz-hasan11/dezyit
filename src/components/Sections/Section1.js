import React, { useEffect } from 'react'
import "./Section1.css"
import GooglePlay from "../../images/GooglePlay.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
const Section1 = () => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])
    return (
        <div className="main-container" id="sec1">
            <div className="sec1-container">
                <div className="left-con">
                    <h1>Your personal <br/>Design Sprint Master!</h1>
                    <p>Time to innovate? let's Dezy it!</p>
                    <div className="download">
                        <h3>Download Now !</h3>
                        <p>And enjoy our Beta version for free!</p>
                        <div className="img-con">
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.dezy.it.design.sprint.design_sprint"><img alt="GooglePlay" src={GooglePlay} style={{width:"150px"}}/></a>
                            <a target="_blank" href="https://apps.apple.com/in/app/dezy-it/id1549871606"><img alt="AppStore" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" className="app-img"/></a>
                        </div>
                    </div>
                </div>
                <img data-aos="fade-right" data-aos-duration="1500" alt="Mobile" src="https://static.wixstatic.com/media/ec9816_7282ed9a7dae44e7b74f0e13bc081459~mv2.png/v1/fill/w_448,h_721,al_c,q_95/Login-DezyIt.webp" className="mob-img"/>
            </div>            
        </div>
    )
}

export default Section1
