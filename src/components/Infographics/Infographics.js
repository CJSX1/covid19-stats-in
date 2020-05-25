import React from 'react';
import './Infographics.css';

import mygovlogo from '../../images/my_gov.png';
import symptoms from '../../images/symptoms.jpg';
import preventions from '../../images/preventions.jpg';
import distancing from '../../images/distancing.jpg';

const Infographics = () => {
    return (
        <div className="">
            <div className="row">
                <div className="col s12 m4">
                    <img src={ preventions } alt="" className="img-border responsive-img"/>
                </div>  
                <div className="col s12 m4">
                    <img src={ distancing } alt="" className="img-border responsive-img"/>
                </div>
                <div className="col s12 m4">
                    <img src={ symptoms } alt="" className="img-border responsive-img"/>
                </div>
            </div>
            <div className="row blue darken-4 border-bottom">
                <div className="col s12 m4 offset-m4 center-align">
                    <p className="white-text">for more information please visit</p>
                    <a target="_blank" href="https://www.mygov.in/covid-19">
                        <img src={ mygovlogo } alt="" className="img-border responsive-img"/>
                    </a>
                </div>  
            </div>
        </div>
    )
}

export default Infographics