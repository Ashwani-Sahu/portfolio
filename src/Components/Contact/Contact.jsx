import React, { Component } from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className="contact-main">
                <div className="contact-heading-text-div">
                    <h1
                        className="contact-heading-text"
                        style={{ color: theme.text }}
                    >
                        {ContactData["title"]}
                    </h1>
                    <p
                        className="contact-header-detail-text subTitle"
                        style={{ color: theme.secondaryText }}
                    >
                        {ContactData["description"]}
                    </p>
                    <SocialMedia theme={theme} />
                    <div className="resume-btn-div">
                        <Button
                            text="See My Resume"
                            newTab={true}
                            href={greeting.resumeLink}
                            theme={theme}
                        />
                    </div>
                </div>
                {/* <Footer theme={this.props.theme} onToggle={this.props.onToggle} /> */}
                <p className="footer-text" style={{ color: "red" }}>
                    Made with <span>❤️ and JavaScript</span>
                </p>
                {/* <TopButton theme={this.props.theme} /> */}
            </div>
        );
    }
}

export default Contact;
