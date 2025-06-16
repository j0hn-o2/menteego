import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import image1 from '../assets/image-1.png'; // Adjust the path as necessary
import './landingpage.css'; // Assuming you have a CSS file for styling

function LandingPage() {
  return (
    <div className="container">
        <div className="page-content">
            <div className="section1">
                <div className="section1-text">
                    <h2> FIND THE RIGHT MENTOR FOR YOU</h2>
                    <p>
                    Connect with expereienced mentors for guidance and support in your personal and professional growth. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa soluta, alias repellendus officiis 
                    sunt delectus numquam sapiente quae ab corporis doloribus, id nihil odit porro odio nulla reprehenderit deleniti.
                    </p>
                    
                    <button>Login</button>
                    <button>Create Account</button>
                </div>
                <div className="section1-image">
                    <img src={image1} alt="Image" />
                
                </div>

            </div>

            <div className="section2">
                <div className="section2-header">
                    <h2>FEATURES</h2>
                </div>

                

                <div className="section2-features">
                    <div className="dark-overlay"></div>

                    <div className="section2-feature1">
                    <div className="section2-image">
                        <img src={image1} alt="Image" />       
                    </div>

                    <div className="section2-feature1-text">
                        <h3>
                        MEET AND CONNECT WITH ACES PROFESSIONALS
                        </h3>
                        <p>
                        Have one-on-one conversations with leading rofessionals from ACES.
                        </p>
                    </div>

                </div>

                <div className="section2-feature2">
                    <div className="section2-feature2-text">
                        <h3>
                        ATTEND MENTOR SESSIONS AND PARTICIPATE IN DISCUSSIONS
                        </h3>
                        <p>
                        Participating in discussions and attending sessions will gain you certificates and badges on your profile.
                        </p>
                    </div>
                
                    <div className="section2-image">
                        <img src={image1} alt="Image" />

                    </div>
                </div>

                <div className="section2-feature3">
                    <div className="section2-image">
                        <img src={image1} alt="Image" />

                    </div>

                <div className="section2-feature3-text">
                    <h3>JOIN DISCUSSION GROUPS</h3>    

                    <p>
                        Share and participate within your community to learn about the latest trends.
                        
                    </p>  

                </div>


                </div>

                
                </div>
            </div>

            <div className="section3">
                <div className="section3-header">
                    <h2>HEAR FROM OUR ALUMNI</h2>
                </div>

                <div className="section3-reviews">

                    <div className="section3-review1">
                    <div className="review-text">
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Quidem voluptatum sit accusantium eos mollitia ducimus nobis quod nihil. Eius nemo necessitatibus, exercitationem labore itaque expedita 
                        officia enim veritatis maiores fugit corporis molestiae iure, dicta quis minima. Doloribus praesentium dolorum perspiciatis, 
                        beatae asperiores tenetur nemo reiciendis vitae est ratione nostrum! Et?
                        </p>
                    </div>
                    <div className="review-profile">
                        <div className="review-image">
                        <img src={image1} alt="Image" />
                        </div>
                        <p className='review-name'>
                            John Doe<br/> Software Engineer
                        </p>
                    </div>


                </div>
                <div className="section3-review1">
                    <div className="review-text">
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Quidem voluptatum sit accusantium eos mollitia ducimus nobis quod nihil. Eius nemo necessitatibus, exercitationem labore itaque expedita 
                        officia enim veritatis maiores fugit corporis molestiae iure, dicta quis minima. Doloribus praesentium dolorum perspiciatis, 
                        beatae asperiores tenetur nemo reiciendis vitae est ratione nostrum! Et?
                        </p>
                    </div>
                    <div className="review-profile">
                        <div className="review-image">
                        <img src={image1} alt="Image" />
                        </div>
                        <p className='review-name'>
                            John Doe<br/> Software Engineer

                        </p>
                    </div>


                </div>
                <div className="section3-review1">
                    <div className="review-text">
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Quidem voluptatum sit accusantium eos mollitia ducimus nobis quod nihil. Eius nemo necessitatibus, exercitationem labore itaque expedita 
                        officia enim veritatis maiores fugit corporis molestiae iure, dicta quis minima. Doloribus praesentium dolorum perspiciatis, 
                        beatae asperiores tenetur nemo reiciendis vitae est ratione nostrum! Et?
                        </p>
                    </div>
                    <div className="review-profile">
                        <div className="review-image">
                        <img src={image1} alt="Image" />
                        </div>
                        <p className='review-name'>
                            John Doe<br/> Software Engineer
                        </p>
                    </div>

                </div>

               </div>


                

            </div>

        </div>

    </div>
  );

}

export default LandingPage;