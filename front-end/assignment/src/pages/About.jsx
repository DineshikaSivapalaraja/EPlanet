import React from 'react';
import "./AboutContact.css";
import { Link } from "react-router-dom";


export default function About() {
  return (
    <>
     <section class="about">
        <div className="about-top">
            <div className="aboutimg">
                <img src='./images/about.png' alt='' width="100%"/>
            </div>
            <div className="aboutcont">
                <h3>WHY CHOOSE US?</h3>
                <p>At EPlanet, we take great pleasure in providing each and every one of our clients with excellent service. 
                You can rely on us to deliver dependable and precise service since our staff has extensive experience and expertise 
                in the field of electricity. We also provide a broad range of premium goods from reputable manufacturers to provide 
                you the greatest alternatives. You can easily acquire the assistance you want when you require it thanks to our shop's 
                accessible location and long business hours. We are also committed to offering first-rate customer service and paying 
                attention to your requirements and concerns. We are certain that EPlanet is the ideal option for all of your electric
                needs because of its strong local reputation.</p>
                <div className="contbut">
                    <Link to="/contact" >Contact Us</Link>
                </div>
                
            </div>
        </div>
        
        <div className="about-bottom">
            <h1 class="revhead">Client's Reviews</h1>
            <div className="reviews">
                <div className="rev">
                <img src="./images/new.png" alt=""/>
                <div className="revcont">
                    <p>" I recently had some electrical work done at EPlanet and was blown away by the 
                    level of service and expertise I received. The team was knowledgeable, professional, 
                    and went above and beyond to make sure my needs were met. I will definitely be returning 
                    for all of my future electrical needs. "</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>John Deo</h3>
                </div>
                
                </div>
                <div className="rev">
                <img src="./images/new.png" alt=""/>
                <div className="revcont">
                    <p>" I was hesitant to have any electrical work done in my home, but EPlanet put my mind at 
                    ease with their professionalism and expertise. They explained the process clearly and 
                    were able to complete the work to my satisfaction. I am so grateful for their help and 
                    will be using them for all of my future electrical needs "</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>Sera Cliff</h3>
                </div>
                
                </div>
                <div className="rev">
                <img src="./images/new.png" alt=""/>
                <div className="revcont">
                    <p>" I've been a loyal customer of EPlanet for years and have always been impressed by the 
                    quality of service and products they offer. The staff is friendly and helpful, 
                    and they take the time to explain things in a way that is easy to understand. 
                    I highly recommend [EPlanet] to anyone in need of electrical work. "</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>Kevin Brian</h3>
                </div>
                
                </div>
                <div className="rev">
                <img src="./images/new.png" alt=""/>
                <div className="revcont">
                     <p>" I was hesitant to have any electrical work done in my home, but EPlanet put my mind at 
                    ease with their professionalism and expertise. They explained the process clearly and 
                    were able to complete the work to my satisfaction. I am so grateful for their help and 
                    will be using them for all of my future electrical needs "</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>Camila Smith</h3>
                </div>
               
                </div>
                <div className="rev">
                <img src="./images/new.png" alt=""/>
                <div className="revcont">
                    <p>" I had a great experience at EPlanet. The technician was prompt, courteous, and efficient. 
                    They completed the work on time and within budget, and I was very happy with the end result. 
                    I would definitely recommend [EPlanet] to others in need of electrical work "</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>Zain Malic</h3>
                </div>
                
                </div>
                <div className="rev">
                <img src="./images/new.png" alt=""/>
                <div className="revcont">
                    <p>" I recently had the pleasure of working with the team at EPlanet for an electrical project in my home,
                     and I couldn't be happier with the results. From the moment I walked into the shop, I was greeted 
                     with friendly and helpful service. The technicians were knowledgeable and professional, and they 
                     took the time to listen to my needs and concerns. The work was completed efficiently and to a 
                     high standard, and I feel confident in the quality of the service provided by EPlanet. I would highly 
                     recommend this shop to anyone in need of electrical work "</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>Jully Sherif</h3>
                </div>
                
                </div>
                
            </div>

        </div>
     </section>
    </>
  )
}
