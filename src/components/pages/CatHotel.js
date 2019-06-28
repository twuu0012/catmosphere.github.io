import React from 'react';
import '../css/Hotel.css';
import avatar from '../../asset/avatar.png';

export const CatHotel = () => {
    const pageStyle = {
        marginTop: '60px'
    };

    const height = {height: window.innerHeight - 200 + "px"};

    return (
        <div style={pageStyle}>
            <div className='hotel_description'>
                <div className='front_page' style={height}>

                </div>

            </div>
            <div className='booking ui grid'>
                <div className='three wide column row header'>
                    <div className='header_1'>
                        Book A Unique Hotel For Your Cat:
                    </div>
                    <div className='header_2'>
                        Luxury Services And Second-To-None Experience
                    </div>
                </div>
                <div className='ten wide column'>
                        <div className='booking_bar large ui input'>
                            <label className='bar_label'>Your Name:</label>
                            <input type='text' className='booking_input' id='user_name' placeholder='Your Name'/>
                        </div>
                        <div className='booking_bar large ui input'>
                            <label className='bar_label'>Email:</label>
                            <input type='text' className='booking_input' id='email' placeholder='Email Address'/>
                        </div>
                        <div className='booking_bar large ui input'>
                            <label className='bar_label'>Date:</label>
                            <input type='text' className='booking_input' id='date' placeholder='Select Checkin Date'/>
                        </div>
                    <div className='booking_bar large ui input'>
                        <label className='bar_label'>Cat Gender:</label>
                        <select className="ui compact selection dropdown" defaultValue='female'>
                            <option value="male">Male</option>
                            <option selected="" value="female">Female</option>
                        </select>
                    </div>
                    <div className='booking_bar large ui input'>
                        <label className='bar_label'>Insurance:</label>
                        <select className="ui compact selection dropdown" defaultValue='no'>
                            <option value="yes">Yes</option>
                            <option selected="" value="no" >No</option>
                        </select>
                    </div>

                </div>

                <div className='two wide column'>
                    <button id='submit_booking' className='big ui orange button column'>SUBMIT</button>
                </div>
            </div>
            {/*Advertisement*/}
            <div className='advert ui grid'>
                <div className='six wide column'>
                    <img className="ui centered medium circular image" src={avatar} alt='avatar'/>
                </div>
                <div className='nine wide column'>
                    <div className='descr_header'>I’m Sir Louis Archibald the Third - The Guest Of Catmosphere Cat Hotel</div>
                    <br />
                    <div className='descr_content'>
                        If you’re anything like my human, you hate the thought of going away because you don’t want your
                        cat to miss out on the comforts of home. <p></p>
                        Well, take it from me… <b style={{color: "red"}}>CATMOSPHERE</b> is the purrrfect holiday destination for your feline. <p></p>
                        The owner of Catmosphere (and also my very special friend Tina) loves cats… we don’t call her a crazy
                        cat lady for nothing! More than that, she’s an expert in hospitality and animal care, meaning the
                        service at Catmosphere is <b style={{color: "red"}}>SECOND-TO-NONE.</b><p></p>
                        So how did you like my first acting purr-formace? I had so much fun showing our new guest around, now let me walk
                        you through the rest of the website.<p></p>
                        <b>Love Louis</b>
                    </div>
                </div>
            </div>
        </div>
    );
};
