import React from "react";
import PropTypes from "prop-types";

// core components
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import HeaderComponent from "../custom-components/sections/headercomponent";
import ContactComponent from "../custom-components/sections/contactcomponent";
import CallToAction from "../../components/call-to-action/CallToAction";

const AboutUs = () => {
    return (
        <div id="main-wrapper">
            <HeaderComponent />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <ContactComponent />
                    <CallToAction />
                </div>
            </div>
            <Footer />
        </div>
    );
}

AboutUs.propTypes = {
    classes: PropTypes.object
};

export default AboutUs;