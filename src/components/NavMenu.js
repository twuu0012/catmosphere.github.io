import {Menu, Dropdown} from 'semantic-ui-react';
import {Route, Link, Switch} from 'react-router-dom';
import React from 'react';
import Home from './pages/Homepage';
import {Contact} from './pages/Contact';
import {CatHotel} from "./pages/CatHotel";
import {Course} from "./pages/Course";
import {Adoption} from "./pages/Adoption";
import {Food_Menu} from "./pages/Menu";
import Merchandise from "./pages/Merchandise";
import './css/NavMenu.css';

class NavMenu extends React.Component {

    state = {activeItem: 'home'};

    clickHandler = (e, {name}) => {
        this.setState({activeItem: name})
    };

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {

        const {activeItem} = this.state;

        return (
            <Route>
                <div className='nav menu'>
                    <Menu inverted fixed={'top'} color={'pink'}>
                        <Menu.Item>
                            <a href="/">
                                <img src={require('../asset/logo.png')} id='logo' alt='logo'/>
                                <div className='nav_title'>Catmosphere</div>
                            </a>

                        </Menu.Item>
                        <Menu.Menu position={'right'}>
                            <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'}
                                       onClick={this.clickHandler}>
                                <div className='nav_element'>Home</div>
                            </Menu.Item>
                            <Menu.Item as={Link} to='/menu' name='menu' active={activeItem === 'menu'}
                                       onClick={this.clickHandler}>
                                <div className='nav_element'>Our Menu</div>
                            </Menu.Item>

                            <Menu.Item as={Dropdown} item text='Special Services' id='secondary_dropdown'>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/hotel' name='hotel' id='hotel_option'
                                                   active={activeItem === 'hotel'}
                                                   onClick={this.clickHandler}>Cat Hotel</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/training' name='training' id='training_course'
                                                   active={activeItem === 'training'}
                                                   onClick={this.clickHandler}>Training Course</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/adoption' name='adoption' id="cat_adoption"
                                                    active={activeItem === 'adoption'}
                                                   onClick={this.clickHandler}>Cat Adoption</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/merchandise' name='merchandise' id="cat_merchandise"
                                                   active={activeItem === 'merchandise'}
                                                   onClick={this.clickHandler}>Cat Merchandise</Dropdown.Item>
                                </Dropdown.Menu>
                            </Menu.Item>
                            <Menu.Item as={Link} to='/contact' name='contact' active={activeItem === 'about'}
                                       onClick={this.clickHandler}>
                                <div className='nav_element'>Contact Us</div>
                            </Menu.Item>
                            <Menu.Item as={Link} to="/cart" name="cart" active={activeItem === 'cart'} onClick={this.clickHandler}>
                                <i className="shopping cart icon" />
                            </Menu.Item>
                            <Menu.Item>
                                <div className='nav_element last'></div>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/hotel' component = {CatHotel}/>
                    <Route exact path='/training' component={Course}/>
                    <Route exact path='/adoption' component={Adoption}/>
                    <Route eaxct path='/menu' component={Food_Menu}/>
                    <Route exact path="/merchandise" component={Merchandise}/>
                </Switch>
            </Route>

        );
    }
}

export default NavMenu;