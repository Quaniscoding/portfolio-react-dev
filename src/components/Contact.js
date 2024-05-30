import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
    render() {
        if (this.props.sharedBasicInfo && this.props.resumeBasicInfo) {
            var phone = this.props.sharedBasicInfo.phone;
            var email = this.props.sharedBasicInfo.email;
            var github = this.props.sharedBasicInfo.github;
            var sectionName = this.props.resumeBasicInfo.section_name.contact;
        }
        return (
            <section id="contact">
                <div className="container">
                    <h1 className="section-title">
                        <span className="text-white">{sectionName}</span>
                    </h1>
                    <div className="contact-data">
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faPhone} className="icon" />
                            <span>Phone</span>
                            <a href={`tel:${phone}`}>{phone}</a>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            <span>Email</span>
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                            <span>Github</span>
                            <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
