import React, { Component } from 'react';
import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from "react-dom";
import axios from 'axios';


function FitnessTrainers() {

    const [Speciality, setSpeciality] = useState('');
 
    const [Location, setLocation] = useState('');
    const [rowData, setRowData] = useState([]);
    const [count, setCount] = useState(0);
    // const count = 0;

    const searchTrainers = () => {

        axios.post("http://localhost:3001/api/searchtrainers", {
           
            speciality: Speciality,
          
            location: Location
        }).then((response) => {
            console.log("test search")
            console.log(Speciality)
            console.log(Location)
            setRowData(response.data)
            console.log(rowData)
        })

    }

    const buttonclicks = (e) => {
        e.preventDefault();
        setCount(count + 1);

    }

    useEffect(() => {
        searchTrainers()
        console.log("testing search")
        console.log(rowData)
        console.log("count is" + " " + count)
    }, [count])


    //, [setRowData]);

    /*
   

   */

    /*   
      useEffect(() => {
       //    searchPlans();
          //console.log(rowData);
           
           Axios.post("/api/users/searchplans", {
               type: PlanType,
               speciality: Speciality,
               gender: Gender,
               location: Location
           }).then((response) => {
               console.log(response)
               setRowData(response.data)
              
           }); 
   
       }); */





    return (


        <div className="Dashboard3">
            <div className="navbar2">

                <Link to="/HomeClient"><i class="fa fa-fw fa-home"></i>Home</Link>


            </div>


            <div className="contentp2">

                <div className="headernew">
                    <div className="heading1">
                        <h1 className="txts1">SEARCH FITNESS TRAINERS</h1>
                    </div>
                    <div className="heading2">
                        <h4 className="txts2">Get to know about the best fitness professionals around you.</h4>
                    </div>
                </div>
                <form className="LoginFS">
                    

                    <div className="LoginNS2">


                        <select className="LoginFieldS5" name="speciality" onChange={(e) => { setSpeciality(e.target.value) }}>
                            <option value="" disabled selected hidden>Select Speciality</option>
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

                    




                    <div className="LoginNS4">


                        <select className="LoginFieldS6" name="location" onChange={(e) => { setLocation(e.target.value) }}>
                            <option value="" disabled selected hidden>Select Location</option>
                            <option value="Austin">Austin</option>
                            <option value="Indiana">Indiana</option>
                            <option value="California">California</option>
                            <option value="New York">New York</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="Chicago">Chicago</option>
                            <option value="Houston">Houston</option>
                            <option value="San Antonio">San Antonio</option>
                            <option value="San Diego">San Diego</option>
                            <option value="Dallas">Dallas</option>
                            <option value="San Jose">San Jose</option>
                            <option value="Fort Worth">Fort Worth</option>
                            <option value="Columbus">Columbus</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="Indianapolis">Indianapolis</option>
                            <option value="Atlanta">Atlanta</option>
                            <option value="Miami">Miami</option>
                            <option value="Oakland">Oakland</option>
                            <option value="Arlington">Arlington</option>
                            <option value="Aurora">Aurora</option>
                            <option value="Stockton">Stockton</option>
                            <option value="Plano">Plano</option>
                            <option value="Orlando">Orlando</option>
                        </select>
                    </div>
                    <button className="filebutton1" onClick={buttonclicks}>Search</button>
                </form>
            </div>
            <div className="diet">


                <table className="table table-dark">

                    <thead className="tableheadnew">
                        <tr>

                            <th scope="col">Trainer Name</th>
                            <th scope="col">Trainer Email</th>
                            <th scope="col">Trainer Contact</th>
                            <th scope="col">Trainer Specialty</th>
                            <th scope="col">Trainer Experience</th>
                            <th scope="col">Trainer Location</th>
                           
                        </tr>
                    </thead>
                    <tbody className="tablebodynew">
                        {rowData.map((row, i) => <tr key={i}>
                            <td> {row['name']}</td>
                            <td> {row['email']}</td>
                            <td> {row['phone']}</td>
                            <td> {row['speciality']}</td>
                            <td> {row['experience']}</td>
                            <td> {row['location']}</td>
                    
                        </tr>)}


                    </tbody>
                </table>



            </div>
        </div>




    );


}

export default FitnessTrainers;



