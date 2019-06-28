import React from 'react';
import '../css/Homepage.css';
import hotelimg from '../../asset/cat_hotel.jpg';
import courseimg from '../../asset/Catitude.jpg';
import adoptionimg from '../../asset/cat_adoption.jpg';
import shopimg from '../../asset/pet_shop.jpg';

class Homepage extends React.Component {

    height = window.innerHeight;
    font_style = {color: 'pink', fontWeight: 'bold'};
    title_style = {paddingTop: this.height/2.5};

    render() {
        return (
            <div className='homepage'>
                <div className='title_container' style={{'height': this.height}}>
                    <div className='homepage_title' style={this.title_style}>
                        Welcome To <b style={this.font_style}>CATMOSPHERE</b>
                        <p></p>
                        Best CAT CAFE In Melbourne
                    </div>

                </div>
                <div className='services'>
                    <div className="section_title">Our Services:</div>
                    <div className="ui four cards" style={{margin: "20px"}}>
                        <a className="red card" href="/hotel">
                            <div className="image">
                                <div className="card_title">Catmosphere</div>
                                <img src={hotelimg} alt="cat hotel" className="service_item"/>
                                <div className="service_title">Cat Hotel</div>
                            </div>
                        </a>
                        <a className="blue card" href="/training">
                            <div className="image">
                                <div className="card_title">Catmosphere</div>
                                <img src={courseimg} alt="train course"/>
                                <div className="service_title">Training Course</div>
                            </div>
                        </a>
                        <a className="orange card" href="/adoption">
                            <div className="image">
                                <div className="card_title">Catmosphere</div>
                                <img src={adoptionimg} alt="cat adoption"/>
                                <div className="service_title">Cat Adoption</div>
                            </div>
                        </a>
                        <a className="yellow card" href="/">
                            <div className="image">
                                <div className="card_title">Catmosphere</div>
                                <img src={shopimg} alt="pet shop"/>
                                <div className="service_title">Cat Merchandise</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Homepage;