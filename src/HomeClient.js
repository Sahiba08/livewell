import React,{Component} from 'react';
import './App.css';
import { Link, NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import backgg2 from './backgg2.png';

class HomeClient extends Component {
  render(){
 return(

<div className="Dashboard2">
                <div className="navbar2">
                    
                    
                     <Link to="/"><i class="fa fa-fw fa-home"></i>Home</Link>
                   

                </div>
               
     
               <div className="contentp2">
                <div className="blocknew">

                 <p>Welcome To LiveWell</p>

                    

                </div>

                <div className="imagebg3">
                     <img className="pic_back2" src={backgg2} width={1500} height={500} />
                    </div>
                
                <div className="workblock">
                    <Link to="/fitnesstrainers"><h4>Search Fitness Professionals</h4></Link>
                    
                </div>
                <div className="dtblock">

                    <Link to="/plans" ><h4>Seach Fitness Plans</h4></Link>

                    
                    </div>

                    

                

                </div>
               

            </div>


  );



  }

}

export default HomeClient;
