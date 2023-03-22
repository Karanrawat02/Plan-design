import React from 'react';
import { FaAddressCard, FaEnvelope, FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {

  return (
        <>
         
        <div  className="container " style={{width:"100%",margin: "0px",padding:"0px"}}>

        <footer
                className=" text-lg-start text-white"
                style={{backgroundColor: "#1c2331",width:"113.3%"}}
                >

        <section 
                className="d-flex justify-content-between p-4"
                style={{backgroundColor: "#6351ce",width:"100%"}}
                >
            <div  className="me-5">
            <span>Get connected with us on social networks:</span>
            </div>

            <div>
            <a href=""  className="text-white me-4">
                <FaFacebook className="mr-3" />
            </a>
            <a href=""  className="text-white me-4">
                <FaTwitter className="mr-3" />
            </a>
            <a href=""  className="text-white me-4">
                <FaGoogle className="mr-3" />
            </a>
            <a href=""  className="text-white me-4">
                <FaYoutube className="mr-3" />
            </a>
            <a href=""  className="text-white me-4">
             <FaLinkedin className="mr-3" />
            </a>
            <a href=""  className="text-white me-4">
                <FaGithub className="mr-3" />
            </a>
            </div>

        </section>


        <section  className="" style={{width:"100%"}}>
            <div  className="container text-center text-md-start ">
            <div  className="row mt-3">
                <div  className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6  className="text-uppercase fw-bold"><img style={{"width": "142px"}} src="https://www.planndesign.com/pndlogo.png" /></h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                    />
                <p>
                    2023 Copyright: planndesign.com
                </p>
                </div>
                <div  className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6  className="text-uppercase fw-bold">Products</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                    />
                <p>
                    <a href="#!"  className="text-white">Autocad Drawing</a>
                </p>
                <p>
                    <a href="#!"  className="text-white">Autocad Store</a>
                </p>
                <p>
                    <a href="#!"  className="text-white">Design Ideas</a>
                </p>
                <p>
                    <a href="#!"  className="text-white">Videos</a>
                </p>
                </div>
            

                <div  className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
                <h6  className="text-uppercase fw-bold">Useful links</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                   
                    />
                <p>
                    <a href="#!"  className="text-white">Contact</a>
                </p>
                <p>
                    <a href="#!"  className="text-white">FAQ's</a>
                </p>
                <p>
                    <a href="#!"  className="text-white">Privacy Policy</a>
                </p>
                <p>
                    <a href="#!"  className="text-white">Subscription Plans</a>
                </p>
                <p>
                    <a href="#!"  className="text-white">Give your feedback</a>
                </p>
                <p>
                    <a href="#!"  className="text-white">Terms and Conditions</a>
                </p>
                </div>
            
                <div  className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
                <h6  className="text-uppercase fw-bold">Contact</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                   
                    />
                <p><FaAddressCard className="mr-3" /> Jaypee Klassic, Noida</p>
                <p><FaEnvelope className="mr-3" /> info@planndesign.com</p>
                <p><i  className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                </div>
            
            </div>
        
            </div>
        </section>
        </footer>
    </div>
   </>
 );
}

export default Footer;