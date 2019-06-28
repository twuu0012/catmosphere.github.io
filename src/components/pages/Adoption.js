import React from 'react';
import "../css/Adoption.css";
import {AdoptionCard} from "../AdoptionCard";

export const Adoption = () => {
    const pageStyle = {marginTop: "80px"};
    return (
        <div style={pageStyle}>
            <div className="adoption part1">
                <div className="adoption_header1"></div>
                <div className="adoption_header2">
                    Adopting a cat or kitten from us
                </div>
            </div>
            <div className="adoption part2" style={{margin: "10px 35px 40px 35px"}}>
                <div className="ui four cards">
                    <AdoptionCard cat={"cat1.jpg"} name={"Trey"} des={"Domestic Short Hair (crossed), 4 years and 1 month, Female"}/>
                    <AdoptionCard cat={"cat2.jpg"} name={"Co Co"} des={"Domestic Medium Hair (crossed), 3 months, Female"}/>
                    <AdoptionCard cat={"cat3.jpg"} name={"Lily"} des={"Domestic Short Hair (crossed), 11 months, Male"}/>
                    <AdoptionCard cat={"cat4.jpg"} name={"Norman"} des={"Domestic Short Hair (crossed), 12 months, Female"}/>
                    <AdoptionCard cat={"cat5.jpg"} name={"Wasabi"} des={"Domestic Orange Hair (short), 6 months, Female"}/>
                    <AdoptionCard cat={"cat6.jpg"} name={"Frank"} des={"Domestic Short Hair, 12 months, Male"}/>
                    <AdoptionCard cat={"cat7.jpg"} name={"Neroli"} des={"Domestic Short Hair (crossed), 8 months, Female"}/>
                </div>
            </div>

        </div>
    )
};