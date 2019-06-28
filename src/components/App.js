import React from 'react';
import NavBar from './NavMenu';
import {Footer} from "./pages/Footer";
import {BrowserRouter} from "react-router-dom";


class App extends React.Component {


    render() {
        return (
            <div className='container'>
                <BrowserRouter>
                    <NavBar/>
                </BrowserRouter>
                <Footer/>
            </div>

        );
    }
}

export default App;