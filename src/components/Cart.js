import React from 'react';
import connect from 'react-redux';

class Cart extends React.Component{

    render() {

        let addedItem = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return(
                        <div className="item" key={item.id}>
                            <div className="image">
                                <img src={item.img} alt={item.title} id="cart_item_img"/>
                            </div>
                            <div className="content">
                                <div className="cart_item header">{item.title}</div>
                                <div className="meta">
                                    <span className="price">Price: ${item.price}</span>
                                </div>
                                <div className="description">
                                    <p className="item_quantity">Quantity: {item.quantity}</p>
                                    <p className="arrow_control">
                                        <a><i className="small caret square up icon" /></a>
                                        <a><i className="small caret square down icon" /></a>
                                    </p>
                                </div>
                                <div className="extra">
                                    <button className="remove negative ui button">Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            ):
            (
                <p>Your Cart Is Empty</p>
            )

        return(
            <div className="cart container">
                <div className="cart_title" style={{marginTop: "80px"}}>Your order:</div>
                <div className="ui divided items">
                    {addedItem}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
};

export default connect(mapStateToProps)(Cart)