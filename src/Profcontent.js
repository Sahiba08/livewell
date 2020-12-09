import React, { Component } from 'react';
import { useState } from "react";
import { Link, NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from "react-dom";
import axios from 'axios';


class Profcontent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Email:'',
            PlanName: '',
            Plan: '',
            Speciality: '',
            Gender: '',
            Location: '',
            Duration: '',
            Cost: '',
};


        this.handleChangen = this.handleChangen.bind(this)
        this.handleChangenn = this.handleChangenn.bind(this)

        this.handleChangennn = this.handleChangennn.bind(this)

        this.handleChangennnn = this.handleChangennnn.bind(this)
        this.handleChangennnnn = this.handleChangennnnn.bind(this)
        this.handleChangennnnnn = this.handleChangennnnnn.bind(this)
        this.handleChangenew = this.handleChangenew.bind(this)
        this.handleChangeneww = this.handleChangeneww.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    

    handleSubmit(e) {
      
        const data = {
            email: this.state.email,
            planname: this.state.planname,
            plantype: this.state.plantype,
            gender: this.state.gender,
            speciality: this.state.speciality,
            location: this.state.location,
            duration: this.state.duration,
            cost: this.state.cost,

        }

        alert("Submitted Successfully");
        console.log(data);

        
        axios.post('http://localhost:3001/api/post', data).then(res => res.data).then(res => {
            if (res.error) {
                this.setState({error: res.error, loading: false});
                return;
            }
        });


    }

    handleChangen(event) {
        this.setState({
            planname: event.target.value
        })
    }

    handleChangenn(event) {
        this.setState({

            plantype: event.target.value
        })
    }


    handleChangennn(event) {
        this.setState({

            speciality: event.target.value
        })
    }

    handleChangennnn(event) {
        this.setState({
            gender: event.target.value

        })
    }

    handleChangennnnn(event) {
        this.setState({

            location: event.target.value

        })
    }

    handleChangennnnnn(event) {
        this.setState({

            duration: event.target.value
        })
    }


    handleChangenew(event) {
        this.setState({

            cost: event.target.value
        })
    }

    handleChangeneww(event) {
        this.setState({

            email: event.target.value
        })
    }


render() {
        return (
            <div className="Dashboard2">
                
                <div className="navbar2">

                     <Link to="/HomeTrainer"><i class="fa fa-fw fa-home"></i>Home</Link>
                    

                </div>
               
                <div className="contentp">

                    <div className="trainer"><h3>Lead, Instruct and Motivate Individuals by providing the best Fitness Plans!</h3>
                    </div>
                    <form className="LoginF">
                        <div className="LoginN">
                            <label className="LoginL">EMAIL: </label>

                            <input type="text" className="LoginField" placeholder="*Enter your email" value={this.state.email} onChange={this.handleChangeneww} />
                        </div>
                        <div className="LoginN">
                            <label className="LoginL">PLAN NAME: </label>

                            <input type="text" className="LoginField" placeholder="*Enter plan name" value={this.state.planname} onChange={this.handleChangen} />
                        </div>

                        <div className="LoginN">
                            <label className="LoginL">PLAN TYPE:</label>

                            <select className="LoginField" name="plan" value={this.state.plan} onChange={this.handleChangenn}>
                                <option value="" disabled selected hidden>*Select Plan Category</option>
                                <option value="workout">Workout Plan</option>
                                <option value="diet">Diet Plan</option>

                            </select>
                        </div>

                        <div className="LoginN">
                            <label className="LoginL">SPECIALITY:</label>

                            <select className="LoginField" name="Speciality" value={this.state.speciality} onChange={this.handleChangennn}>
                                <option value="" disabled selected hidden>*Select speciality like Keto,Zumba</option>
                                <option value="Zumba">Zumba</option>
                                <option value="Yoga">Yoga</option>
                                <option value="Keto diet">Keto Diet</option>
                                <option value="Strength Training">Strength Training</option>
                                <option value="Spinning">Spinning</option>
                                <option value="Calisthenics">Calisthenics</option>
                                <option value="Parkour">Parkour</option>
                                <option value="Weight Training">Weight Training</option>
                                <option value="Floor Exercises">Floor Exercises</option>
                                <option value="Kettle Bell">Kettle Bell</option>
                                <option value="Intermittent fasting">Intermittent fasting</option>
                                <option value="Weight Watchers">Weight Watchers</option>
                                <option value="Atkins diet">Atkins diet</option>
                                <option value="Zone diet">Zone diet</option>
                                <option value="South Beach diet">South Beach diet</option>
                            </select>
                        </div>

                        <div className="LoginN">
                            <label className="LoginL">GENDER:</label>

                            <select className="LoginField" name="Gender" value={this.state.gender} onChange={this.handleChangennnn}>
                                <option value="" disabled selected hidden>*Select Gender that suits your plan</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Any">Any</option>
                            </select>
                        </div>




                        <div className="LoginN">
                            <label className="LoginL">LOCATION:</label>

                            <select className="LoginField" name="Location" value={this.state.location} onChange={this.handleChangennnnn}>
                                <option value="" disabled selected hidden>*Select Suitable Location</option>
                                <option value="Indoor">Indoor</option>
                                <option value="Outdoor">Outdoor</option>

                            </select>
                        </div>

                        <div className="LoginN">
                            <label className="LoginL">DURATION: </label>

                            <select className="LoginField" name="duration" value={this.state.duration} onChange={this.handleChangennnnnn} >
                                <option value="" disabled selected hidden>*Duration of the plan</option>
                                <option value="Less than 1 month">Less than 1 month</option>
                                <option value="Between 1-6 months">Between 1-6 months</option>
                                <option value="More than 6 months">More than 6 months</option>
                            </select>
                        </div>

                        <div className="LoginN">
                            <label className="LoginL">COST: </label>

                            <input type="text" className="LoginField" placeholder="*Cost of the plan($)" value={this.state.cost} onChange={this.handleChangenew} />
                        </div>
                        
                        <button className="filebutton2" onClick={this.handleSubmit}>Submit</button>
                        
                       
                
                    </form>


                </div>
              
            </div>
        );
    }
}


export default Profcontent;



