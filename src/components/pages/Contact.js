import React from 'react';
import '../css/Contact.css';

export const Contact = () => {
    const pageStyle = {
        marginTop: '60px'
    };
    return (
        <div style={pageStyle}>
            <div className="contact part1">
                <div className="contact_header1">
                    <div className="contact_header2">Contact Us</div>
                </div>

            </div>
            <div className="contact part2">
                <iframe title="contact map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12610.28421152942!2d144.9583385357708!3d-37.800091176075675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642d153982dd1%3A0x5045675218ce780!2sCarlton+VIC+3053!5e0!3m2!1sen!2sau!4v1559960664687!5m2!1sen!2sau"
                    width="100%" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen />
            </div>
            <div className="contact part3">
                <div className="ui grid">
                    <div className="two wide column">

                    </div>
                    <div className="five wide column">
                        <h4 className="ui dividing header">Contact Information</h4>
                        <p>
                            <i className="pink large map marker alternate icon" />
                            <span>Carlton VIC 3053</span>
                        </p>
                        <p>
                            <i className="pink large phone icon" />
                            <span><a href="tel: 0453657743">04 5365 7743</a></span>
                        </p>
                        <p>
                            <i className="pink large envelope icon"/>
                            <span>
                                <a href="mailto:info@melbournecatmosphere.com">info@melbournecatmosphere.com</a>
                            </span>
                        </p>
                    </div>
                    <div className="eight wide column">
                        <form className="ui form contact_form">
                            <h4 className="ui dividing header">Give Us Your Feedback</h4>
                            <div className="field">
                                <div className="fields">
                                    <div className="eight wide field">
                                        <label>Last Name</label>
                                        <input type='text' name="last-name" placeholder="Last Name"/>
                                    </div>
                                    <div className="eight wide field">
                                        <label>First Name</label>
                                        <input type="text" name="first-name" placeholder="First Name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label>Message</label>
                                <textarea placeholder="Enter your message" />
                            </div>
                            <button className="ui primary button"><i className="angle up icon"/>Send To Us</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
};