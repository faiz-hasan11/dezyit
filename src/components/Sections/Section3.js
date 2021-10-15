import React from 'react'
import "./Section3.css"
import GooglePlay from "../../images/GooglePlay.png"
const Section3 = () => {
    return (
        <div className="sec3-main-container" id="sec3">
            <h1>Our Product</h1>
            <p>Dezy It, is your personal design sprint master. It is your design thinking guide and companion to help you facilitate design sprints, to innovate, pivot and improve on the user experience of your product.</p>
            <div className="sec3-img-container">
                <img alt="img" src="https://static.wixstatic.com/media/ec9816_dd136736699b44c8ab0b11a72f01b06d~mv2.png/v1/fill/w_410,h_496,al_c,q_95/Design%2520Thinking%2520Sprint%2520-Right2_edi.webp" className="sec3-img"/>
                <img alt="img" src="https://static.wixstatic.com/media/ec9816_58d376c7bae642ff8c9bc2d22895f107~mv2.png/v1/fill/w_350,h_563,al_c,q_95/Design%20Thinking%20Sprint%20-%20Centre3.webp" className="sec3-img"/>
                <img alt="img" src="https://static.wixstatic.com/media/ec9816_2531c0fea4cd4527aa79c81270c48597~mv2.png/v1/fill/w_410,h_496,al_c,q_95/Design%2520Thinking%2520Sprint%2520-%2520Left2_e.webp" className="sec3-img"/>
            </div>
            <div className="sec3-download">
                <h3>Download Now !</h3>
                <p>And enjoy our Beta version for free!</p>
                <div className="sec3-img-con">
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.dezy.it.design.sprint.design_sprint"><img alt="GooglePlay" src={GooglePlay} style={{width:"150px"}} className="sec3-app-img"/></a>
                    <a target="_blank" href="https://apps.apple.com/in/app/dezy-it/id1549871606"><img alt="AppStore" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" className="sec3-app-img"/></a>
                </div>
            </div>
        </div>
    )
}

export default Section3
