import React from 'react';
import './Footer.css';

class Footer extends React.Component{

render(){

return(

<div>


<footer class="new_footer_area bg_color">
            <div class="new_footer_top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" >

                                <form action="#" class="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                    <p class="mchimp-errmessage"></p>
                                    <p class="mchimp-sucmessage"></p>

                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" >
                                <ul class="list-unstyled f_list">

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" >
                                <ul class="list-unstyled f_list">

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" >
                                <div class="f_social_icon">
                                    <a href="https://www.codechef.com/users/hariom2516" className="fas fa-code"> </a>
                                    <a href="https://www.linkedin.com/in/hari-om-yadav-ab923a195/" className="fab fa-linkedin"> </a>
                                    <a href="https://github.com/hariom1625" className="fab fa-github"> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_bg">
                    <div class="footer_bg_one"></div>
                    <div class="footer_bg_two"></div>
                </div>
            </div>
            <div class="footer_bottom">
                <div class="container">
                    <div class=" align-items-center">

                            <p className="foot-note">Made with 💚 © Hari Om Yadav </p>

                    </div>
                </div>
            </div>
        </footer>
</div>
)
}
}

export default Footer;
