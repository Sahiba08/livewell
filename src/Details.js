import React, { Component } from 'react';
import { useState } from "react";
import { Link, NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from "react-dom";
import axios from 'axios';


class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Email: '',
            Name: '',
            Number: '',
            Location: '',
            Speciality: '',
            Experience: '',
        };


        this.handleChangename = this.handleChangename.bind(this)
        this.handleChangeemail = this.handleChangeemail.bind(this)

        this.handleChangenumber = this.handleChangenumber.bind(this)

        this.handleChangelocation = this.handleChangelocation.bind(this)
        this.handleChangespeciality = this.handleChangespeciality.bind(this)
        this.handleChangeexperience = this.handleChangeexperience.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)

    }



    handleSubmit(e) {

        const data = {
            email: this.state.email,
            name: this.state.name,
            phone: this.state.phone,
            speciality: this.state.speciality,
            location: this.state.location,
            experience: this.state.experience,
         
        }

        alert("Submitted Successfully");
        console.log("the data showed");


        axios.post('http://localhost:3001/api/details', data).then(res => res.data).then(res => {
            if (res.error) {
                this.setState({ error: res.error, loading: false });
                return;
            }
        });


    }

    handleChangename(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeemail(event) {
        this.setState({

            email: event.target.value
        })
    }


    handleChangespeciality(event) {
        this.setState({

            speciality: event.target.value
        })
    }

    handleChangenumber(event) {
        this.setState({
            phone: event.target.value

        })
    }

    handleChangelocation(event) {
        this.setState({

            location: event.target.value

        })
    }

    handleChangeexperience(event) {
        this.setState({

            experience: event.target.value
        })
    }


   

    render() {
        return (
            <div className="Dashboard2">
                <div className="navbar2">

                    <Link to="/HomeTrainer"><i class="fa fa-fw fa-home"></i>Home</Link>


                </div>

                <div className="contentp">
                    <div className="trainerdetails"><h3>MY INFORMATION</h3>
                    </div>
                    <form className="LoginF" >
                        <div className="LoginN">
                            <label className="LoginL">NAME: </label>

                            <input type="text" className="LoginField" placeholder="*Enter your name" value={this.state.name} onChange={this.handleChangename} />
                        </div>
                        <div className="LoginN">
                            <label className="LoginL">EMAIL: </label>

                            <input type="text" className="LoginField" placeholder="*Enter your email" value={this.state.email} onChange={this.handleChangeemail} />
                        </div>

                        <div className="LoginN">
                            <label className="LoginL">PHONE NUMBER: </label>

                            <input type="text" className="LoginField" placeholder="*Enter your contact number" value={this.state.phone} onChange={this.handleChangenumber} />
                        </div> 
                        <div className="LoginN">
                            <label className="LoginL">LOCATION: </label>

                            <input type="text" className="LoginField" placeholder="*Enter your city" value={this.state.location} onChange={this.handleChangelocation} />
                        </div>
                        <div className="LoginN">
                            <label className="LoginL">SPECIALITY:</label>

                            <select className="LoginField" name="Speciality" value={this.state.speciality} onChange={this.handleChangespeciality}>
                                <option value="" disabled selected hidden>*Select your speciality</option>
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
                            <label className="LoginL">EXPERIENCE: </label>

                            <input type="text" className="LoginField" placeholder="*Enter your years of experience in relevant field" value={this.state.experience} onChange={this.handleChangeexperience} />
                        </div>

                        <button className="filebuttond" onClick={this.handleSubmit}>Submit</button>



                    </form>


                </div>

            </div>
        );
    }
}


export default Details;



