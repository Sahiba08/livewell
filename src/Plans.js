import React, { Component } from 'react';
import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from "react-dom";
import Axios from 'axios';


function Plans() {
    const [PlanType, setPlanType] = useState('');
    const [Speciality, setSpeciality] = useState('');
   // const [Gender, setGender] = useState('');
    const [Location, setLocation] = useState('');
    const [rowData, setRowData] = useState([]);
    const [count,setCount] = useState(0);
   // const count = 0;

    const searchPlans = () => {

        Axios.post("http://localhost:3001/api/searchplans", {
            type: PlanType,
            speciality: Speciality,
     //       gender: Gender,
            location: Location
        }).then((response) => {
            console.log("test search")

            setRowData(response.data)
            console.log(rowData)
        })

    }

    const buttonclicks = (e) => {
        e.preventDefault();
        setCount(count + 1);

    }

    useEffect(() => {
        searchPlans()
        console.log("testing search")
        console.log(rowData)
        console.log("count is"+" " +count)
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

                    <a href="/HomeClient"><i class="fa fa-fw fa-home"></i>Home</a>


                </div>


                <div className="contentp2">
            
                    <div className="headernew">
                        <div className="heading1">
                            <h1 className="txts1">SEARCH FITNESS PLANS</h1>
                        </div>
                        <div className="heading2">
                            <h4 className="txts2"> Learn about different approaches to workout and nutrition so you can choose the best plan that suits you.</h4>
                        </div>
                    </div>
            <form className="LoginFS"> 
                        <div className="LoginNS">


                    <select className="LoginFieldS" name="plantype" onChange={(e) => { setPlanType(e.target.value) }}>
                                <option value="" disabled selected hidden>Select Category</option>
                                <option value="workout">Workout Plan</option>
                                <option value="diet">Diet Plan</option>

                            </select>
                        </div>

                        <div className="LoginNS2">


                    <select className="LoginFieldS2" name="speciality" onChange={(e) => { setSpeciality(e.target.value) }}>
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


                    <select className="LoginFieldS4" name="location" onChange={(e) => { setLocation(e.target.value) }}>
                                <option value="" disabled selected hidden>Select Location</option>
                                <option value="Indoor">Indoor</option>
                                <option value="Outdoor">Outdoor</option>

                            </select>
                        </div>
                <button className="filebutton1" onClick={buttonclicks}>Search</button>
                    </form>
        </div>
        <div className="diet">
            

                <table className="table table-dark">

                    <thead className="tableheadnew">
                        <tr>

                            <th scope="col">Plan Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Cost($)</th>
                        <th scope="col">Trainer Name</th>
                        <th scope="col">Trainer Email</th>
                        <th scope="col">Trainer Contact</th>
                        <th scope="col">Trainer Location</th>
                        </tr>
                    </thead>
                    <tbody className="tablebodynew">
                        {rowData.map((row, i) => <tr key={i}>
                            <td> {row['plan']}</td>
                            <td> {row['gender']}</td>
                            <td> {row['duration']}</td>
                            <td> {row['cost']}</td>
                            <td> {row['name']}</td>
                            <td> {row['email']}</td>
                            <td> {row['phone']}</td>
                            <td> {row['location']}</td>
                        </tr>)}


                    </tbody>
                </table>

           
            
        </div>
            </div>




        );
    

}

export default Plans;



