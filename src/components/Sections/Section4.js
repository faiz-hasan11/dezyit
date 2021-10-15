import React, { useEffect } from 'react'
import "./Section4.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
const Section4 = () => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])
    return (
        <div className="sec4-main-container" id="sec4">
            <h1>Why Dezy It?</h1>
            <div className="sec4-content-container">
                <div className="sec4-content">
                    <h2>Collaboration</h2>
                    {/* <hr/> */}
                    <p>
                        The product development journey can become a linear process where there is very minimal interaction between the product team and all the other stakeholders, including the marketers, the sales team and customer service. Dezy It, brings in a collaborative space for your team to leverage design thinking and work together and participate in the ideation process, sharing valuable insights which would shape the product and its features. It's a process which truly gets your whole team invested!
                    </p>
                </div>
                <img data-aos="zoom-in" data-aos-duration="1500" alt="img" src="https://static.wixstatic.com/media/ec9816_d3949d97e43843b8a292ffe04eacce85~mv2.png/v1/fill/w_750,h_563,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp" className="sec4-img"/>
            </div>
            <div className="sec4-content-container special">
                <img data-aos="zoom-in" data-aos-duration="1500" alt="img" src="https://static.wixstatic.com/media/ec9816_02665f5bd8044684b66a011b3c3bd8ca~mv2.png/v1/fill/w_750,h_563,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp" className="sec4-img"/>
                <div className="sec4-content">
                    <h2>Creativity</h2>
                    {/* <hr/> */}
                    <p>
                        Design Sprints are a great way to quickly innovate. A structured agile process to streamline your innovation and come up with multiple creative ideas using the Crazy-8 framework. It boosts your morale and provokes you to think out of the box. Now, with a ton of ideas, the Impact vs Feasibility analysis is a simple yet effective criteria, to shortlist the winning ides and most importantly validate them with real users.
                    </p>
                </div>
            </div>
            <div className="sec4-content-container">
                <div className="sec4-content">
                    <h2>Empathy</h2>
                    {/* <hr/> */}
                    <p>
                        The first rule of design thinking is to keep your users in the centre and under a spotlight.All great ideas arrive from devastating problems. The design sprint focuses on getting each and every team member to be able to empathise and understand the user, map their journeys and identify their pain points. You have to truly step into the shoes of your users to understand their psychology and experience of what they feel and think; while using your product or service.
                    </p>
                </div>
                <img data-aos="zoom-in" data-aos-duration="1500" alt="img" src="https://static.wixstatic.com/media/ec9816_2f2c8bead30544a89198bb3d605d232a~mv2.png/v1/fill/w_750,h_563,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp" className="sec4-img"/>
            </div>
        </div>
    )
}

export default Section4
