import React from 'react';
import '../css/Menu.css';
import menu1 from "../../asset/coffee_menu.png"

const pageStyle = {
    marginTop: '90px'
};
export const Food_Menu = () => {
    return (
        <div style={pageStyle}>
            <div className='menu_header'>Our Menu</div><hr/>
            <div className='menu_subheader'>
                <div className='subheader1'>
                    Coffee, Cats, and Community —
                    Axum Coffee believes changing the world can happen one cup at a time!
                </div>
                <div className='subheader2'>
                    Enjoy a wide variety of coffees, teas, expressos, and MORE! Along with
                    these delicious beverages listed below, you can also enjoy a variety of
                    tasty food items, including Croissants, Quiche, Paninis, Bagels, Scones,
                    Muffins, Brownies, Cookies, and Cheesecake. Gluten Free Options are
                    available as well!
                </div>
            </div>
            <div className="menu_body">
                <div className="menu1">
                    <img src={menu1} alt="coffee menu" id="menu_pic_1"/>
                </div>
            </div>
        </div>
    )
};