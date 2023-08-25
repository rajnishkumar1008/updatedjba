import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className="main" style={{background:'#3e4751',padding:'40px 0px',marginTop:'40px'}}>
                
              
                <section className="section-padding footer-mid">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col">
                                <div
                                    className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="logo  mb-30">
                                        <Link href="/" className="mb-15"> 
                                            <img
                                                src="/img/themepic/jba-logo-white.png"
                                                alt="logo"
                                            />
                                         
                                        </Link>
                                        {/* <p className="font-lg text-heading">
                                          
                                        </p> */}
                                    </div>
                                    <div className="jab-mobile-social-icon">
                            
                                <a href="#">
                                    <img
                                        src="/img/themepic/icons/icon-facebook-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/img/themepic/icons/icon-twitter-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/img/themepic/icons/icon-instagram-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/img/themepic/icons/icon-pinterest-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/img/themepic/icons/icon-youtube-white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                                    {/* <ul className="contact-infor">
                                        <li>
                                            <img
                                                src="/imgs/theme/icons/icon-location.svg"
                                                alt=""
                                            />
                                            <strong>Address: </strong>{" "}
                                            <span>
                                                5171 W Campbell Ave undefined
                                                Kent, Utah 53127 United States
                                            </span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-contact.svg"
                                                alt=""
                                            />
                                            <strong>Call Us:</strong>
                                            <span>(+91) - 540-025-124553</span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-email-2.svg"
                                                alt=""
                                            />
                                            <strong>Email:</strong>
                                            <span>sale@Nest.com</span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-clock.svg"
                                                alt=""
                                            />
                                            <strong>Hours:</strong>
                                            <span>
                                                10:00 - 18:00, Mon - Sat
                                            </span>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <h4 className="widget-title">Quick Links</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Why Buy From Us?</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Certifications</a>
                                    </li>
                                    <li>
                                        <a href="#">Press Room</a>
                                    </li>
                                    <li>
                                        <a href="#">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="#">Corporate Gifting</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h4 className="widget-title ">Policies</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">30-Day Returns</a>
                                    </li>
                                    <li>
                                        <a href="#">Lifetime Exchange & Buy back</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <h4 className="widget-title ">Jewelry Guide</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Buying and Price Guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Certification Guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Diamond and Solitaire Guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Gemstone Guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Gifting Guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Jewellery Care Guide</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".4s"
                            >
                                <h4 className="widget-title ">News Letter</h4>
                               
                                <form className="jba-subscriber">
                                            <input
                                                type="email"
                                                placeholder="Email ID"
                                            />
                                            <button className="btn btm-md" type="submit">
                                            <i className="bi bi-arrow-up-right"></i>
                                            </button>
                                        </form>
                            </div>
                           
                        </div>
                    </div>
                </section>
                <div
                    className="container pb-30  wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    <div className="row align-items-center">
                        <div className="col-12 mb-30">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <p className="font-sm mb-0 my-p">
                                &copy; 2023,{" "}
                                <strong className="text-brand">Jewels by Anu</strong> - 
                                All rights reserved
                            </p>
                        </div>
                        {/* <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                            <div className="hotline d-lg-inline-flex mr-30">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                    1900 - 6666<span>Working 8:00 - 22:00</span>
                                </p>
                            </div>
                            <div className="hotline d-lg-inline-flex">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                    1900 - 8888<span>24/7 Support Center</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                            <div className="jab-mobile-social-icon">
                                <h6>Follow Us</h6>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <p className="font-sm">
                                Up to 15% discount on your first subscribe
                            </p>
                        </div> */}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
