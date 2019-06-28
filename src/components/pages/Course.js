import React from 'react';
import '../css/Course.css';
import catitude from '../../asset/Catitude.jpg';
import scratch from '../../asset/cats-scratch.jpg';
import earcleaning from '../../asset/cat-ear-cleaning.jpg';

export const Course = () => {
    const pageStyle = {
        marginTop: '90px'
    };
    return (
        <div style={pageStyle} className="course">
            <div className='course_descr'>
                <div className="training_header">Cat Training Course</div><hr />
                <div className='ui grid' id="course_body">
                    <div className='one wide column'></div>
                    <div className='eight wide column'>
                        <div className="training_img">
                        </div>
                    </div>
                    <div className='six wide column'>
                        <div className='intro_header'>Want To Train Your Cat?</div>
                        <p></p>
                        <div className='intro_content' style={{background: 'lightpink', padding: '15px'}}>
                            Catmosphere’s short courses are purrfect for pet owners, people working with animals or
                            those looking to get their paw in the door of the animal care industry. <br />
                            Our courses are fun, practical and informative and are taught by qualified trainers.
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height: "50px"}}></div>
            <div className='course_cards'>
                <div className='ui grid'>
                    <div className='two wide column'></div>
                    <div className='four wide column'>
                        <div className='ui card'>
                            <div className='content'><b>Catitude</b></div>
                            <div className='image'>
                                <img src={catitude} alt="catitude"/>
                            </div>
                            <div className='content'>
                                <div className='description'>
                                    Does your cat have catitude? Cat behaviour can be confusing, but this course
                                    will help you understand your feline friend’s quirks and why they might be
                                    acting a certain way. <p></p>
                                    <b>Price: $129</b><br />
                                    <b>Duration: 3 hours</b>
                                </div>
                            </div>
                            <div className='extra content'>
                                <button className="ui right labeled icon button">
                                    <i className="right pink paw icon" />
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='four wide column'>
                        <div className='ui card'>
                            <div className='content'><b>Starting From Scratch</b></div>
                            <div className='image'>
                                <img src={scratch} alt='cat_scratch' />
                            </div>
                            <div className='content'>
                                <div className='description'>
                                    This course can teach owners about how to deal with cat scratching. If you would
                                    like to express your interest in attending a future Starting from scratch course,
                                    please book here.<p></p>
                                    <b>Price: $129</b><br />
                                    <b>Duration: 3 hours</b>
                                </div>
                            </div>
                            <div className='extra content'>
                                <button className="ui right labeled icon button">
                                    <i className="right pink paw icon" />
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='ui card'>
                        <div className='content'><b>Cat Ear Cleaning</b></div>
                        <div className='image'>
                            <img src={earcleaning} alt='ear_cleaning'/>
                        </div>
                        <div className='content'>
                            <div className='description'>
                                This course teaches owners how to clean cat's ears properly. If you would
                                like to express your interest in attending a future Cat Ear Cleaning course,
                                please book here.<p></p>
                                <b>Price: $129</b><br />
                                <b>Duration: 3 hours</b>
                            </div>
                        </div>
                        <div className='extra content'>
                            <button className="ui right labeled icon button">
                                <i className="right pink paw icon" />
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className='two wide column'></div>
                </div>

            </div>

            <div style={{height: "50px"}}></div>
            <div className='notes ui grid'>
                <div className='four wide column'></div>
                <div className='eight wide column'>
                    <b>NOTE:</b><br/>
                    These courses are intended as a general guide only. Some of the information may not be applicable
                    to your pet. We recommend that you consult your vet or behaviourist for specialised advice about
                    your pet if you intend to modify its training, diet or you need a diagnosis of your pet’s health
                    condition. This course is not Government accredited.
                </div>
                <div className='two wide column'></div>
            </div>
            <div style={{height: "50px"}}></div>
        </div>
    )
};