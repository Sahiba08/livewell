import React,{Component} from 'react';
import { Link, NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import exercise2  from './exercise2.jpg';

class Home extends Component {
  render(){
 return(

<div className="Dashboard2">
                <div className="navbar2">
                    
                    
                     <Link to="/"><i class="fa fa-fw fa-home"></i>Home</Link>
                    <div className="logo">
                        
                    </div>

                </div>
               
     
               <div className="contentp2">
               <div className="blocknew2">
                 LiveWell

               </div>
             <div className="blocknew3">
                 A one stop guide to all your fitness needs

               </div>
                <div className="imagebg3">
                     <img className="pic_back" alt="" src={exercise2} width={1600} height={550} />
                    </div>
                
                <div className="requestblock">
                    <Link to="/HomeTrainer"><p>Trainers</p></Link>
                    
                </div>
                <div className="profblock">

                    <Link to="/HomeClient" ><p>Clients</p></Link>

                    
                    </div>

                    

                </div>
               

            </div>


  );



  }

}

export default Home;
