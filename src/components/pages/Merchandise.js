import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';
import "../css/Merchandise.css";


class Merchandise extends React.Component{


    handleClick = (id) => {
        this.props.addToCart(id);
    };

    render() {

        //List all items in redux
        const itemList = this.props.items.map(item => {
            return(
                <div className="ui card" key={item.id}>
                    <div className='image'>
                        <img src={item.img} alt={item.title} id="item"/>
                    </div>
                    <div className="content">
                        <b>{item.title}</b>
                        <div className="description">
                            {item.description}<br/>
                            Price: ${item.price}
                        </div>
                    </div>
                    <div className="extra">
                        <button className="ui right labeled icon pink button" onClick={() => this.handleClick(item.id)}>
                            <i className="right cart arrow down icon" />
                                Add To Cart
                        </button>
                    </div>

                </div>
            )
        });

        return(
            <div className="container">
                <div className="merchandise_title" style={{marginTop: "80px"}}>
                    Cat Merchandise
                </div><hr />
                <div className="meta_description">
                    Note: <br/>
                    All these special goods are only available at Catmosphere, and all of your assistance
                    will be helpful for those sweet kittens.
                </div>
                <div className="ui four cards" style={{margin: "10px 35px 40px 35px"}}>
                    {itemList}
                </div>
            </div>
        )

    }



}

const mapStateToProps = (state) => {

    return{
        items: state.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Merchandise);