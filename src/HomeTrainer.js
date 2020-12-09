import React, { Component } from 'react';
import { Link, NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import grl2 from './grl2.png';
import ft from './ft.png';
import clie from './clie.png';

class HomeTrainer extends Component {

    render() {
        return (
            <div className="Dashboard2">
                <div className="navbar2">

                   
                     <Link to="/"><i class="fa fa-fw fa-home"></i>Home</Link>
                    

                </div>
               <div className="contentp3">
                
                <div className="video">

                  
                        <img className="pic1" src={grl2} width={1540} height={300} />
                   
                   
                </div>

                <div className="block">

                 <p>Welcome To LiveWell </p>

                    

                </div>

                <div className="contentblock">

                   
                     
                    <div className="image1">
                    <img className="pic1" src={ft} width={160} height={87} />
                    </div>
                       <Link to="/content"><h3>Add Your Plans</h3></Link>
                </div>
                <div className="clientblock">
                    <Link to="/details" className="acl"><h3>Add Your Information</h3></Link>
                    <div className="image3">
                  
                        <img className="pic3" src={clie} width={160} height={80} />
                   
                    </div>

                </div>
               

             </div>
              

            </div>
        );
    }
}

export default HomeTrainer;

