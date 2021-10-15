import React, { useEffect, useState } from 'react'
import GooglePlay from "../../images/GooglePlay.png"
import "./Section6.css"
const Section6 = () => {

    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [phone,setPhone] = useState(null);

    const [error1,setError1] = useState(false);
    const [error2,setError2] = useState(false);
    const [error3,setError3] = useState(false);

    useEffect(() => {
        if(name === "")
        {
            setError1(true);
        }
        else
        {
            setError1(false);
        }
    }, [name])

    useEffect(() => {
        if(email === "")
        {
            setError2(true);
        }
        else
        {
            setError2(false);
        }
    }, [email])

    useEffect(() => {
        if(phone === "")
        {
            setError3(true);
        }
        else
        {
            setError3(false);
        }
    }, [phone])

    return (
        <div className="sec6-main-container" id="sec6">
            <div className="section6-row1">
                <div className="section6-reach">
                    <h2>Reach out to us</h2>
                    <input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{backgroundColor: error1 ? "rgba(255, 0, 0, 0.2)" : "transparent" , borderBottom: error1 ? "1px solid red" : "1px solid white"}}/>
                    <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{backgroundColor: error2 ? "rgba(255, 0, 0, 0.2)" : "transparent" , borderBottom: error2 ? "1px solid red" : "1px solid white"}}/>
                    <input placeholder="Phone" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{backgroundColor: error3 ? "rgba(255, 0, 0, 0.2)" : "transparent" , borderBottom: error3 ? "1px solid red" : "1px solid white"}}/>
                    <textarea placeholder="Type your message here..." name="Text1" cols="40" rows="5"/>
                    <div className="reach-btn-container">
                        <button className="sec6-btn">Submit</button>
                    </div>
                </div>
                <div className="section6-about">
                    <h2>About</h2>
                    <div className="about-btn-container">
                        <button className="sec6-btn bg-btn"><a href="#sec1" style={{textDecoration:'none',color:'inherit'}}>Home</a></button>
                        <button className="sec6-btn bg-btn"><a href="#sec3" style={{textDecoration:'none',color:'inherit'}}>Our Product</a></button>
                        <button className="sec6-btn bg-btn"><a href="#sec4" style={{textDecoration:'none',color:'inherit'}}>Why Us?</a></button>
                    </div>
                    <div className="section6-download">
                        <h3>Download Dezy It </h3>
                        <div className="sec6-img-con">
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.dezy.it.design.sprint.design_sprint"><img alt="GooglePlay" src={GooglePlay} style={{width:"150px"}}/></a>
                            <a target="_blank" href="https://apps.apple.com/in/app/dezy-it/id1549871606"><img alt="AppStore" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" className="app-img"/></a>
                        </div>
                    </div>
                </div>
                <div className="section6-contact">
                    <h2>Contact</h2>
                    <a href="mailto:support@dezyit.com" style={{textDecoration:"none",color:'white'}}><p>Email - support@dezyit.com</p></a>
                    <div className="contact-social-con">
                        <a target="_blank" href="https://www.instagram.com/dezy_it/"><img alt="img" src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_25,h_25,al_c,q_95/81af6121f84c41a5b4391d7d37fce12a.webp" height="25px" width="25px"/></a>
                        <a target="_blank" href="https://www.facebook.com/DezyIt/"><img alt="img" src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_25,h_25,al_c,q_95/23fd2a2be53141ed810f4d3dcdcd01fa.webp" height="25px" width="25px"/></a>
                        <a target="_blank" href="https://www.linkedin.com/company/dezy-it/"><img alt="img" src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_25,h_25,al_c,q_95/7528824071724d12a3e6c31eee0b40d4.webp" height="25px" width="25px"/></a>
                    </div>
                    <p>© 2020 by Dezy It</p>
                </div>
            </div>
        </div>
    )
}

export default Section6
