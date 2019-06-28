import React from 'react';

export class AdoptionCard extends React.Component{

    componentDidMount() {
    }

    render() {

        const {cat, name, des} = this.props;
        return (
        <div className="ui card">
            <div className="image">
                <img src={require("../asset/" + cat)} alt="adoption card"/>
            </div>
            <div className="content">
                <b>{name}</b>
                <div className="description">
                    {des}
                </div>
            </div>
            <div className="extra">
                <button className="ui right labeled icon pink button">
                    <i className="right paw icon" />
                    Contact Us
                </button>
            </div>
        </div>
        )
    }

}