import axios from "axios";
import React from "react";
import { useEffect } from "react";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../redux/actions";
import "../App.css";

export default function Forms() {
    const dispatch = useDispatch();

    const manju = useSelector(store => store.todo);
    console.log(" SignUp "+manju);

    const [data, setData] = useState({
        name:"",
        country:"",
        email:"",
        persons:"",
        dollors:"",
        status:false,
    })

    const {name,country,email,persons,dollors} = data;

    useEffect(() => {
        // console.log("Last", manju)
        getTodo();
    },[])

    const handleChange = e => {
        setData({...data,[e.target.name]:e.target.value});
    }

    const getTodo = () => {
        axios.get("http://localhost:3001/details").then((res) => { dispatch(addTodo(res.data)) }).then(() => {console.log("Posted")})
    }

    const handleSubmit = e => {
        
     
            // axios.post("https://flatheads1.herokuapp.com/details",data).then(() => getTodo())
            console.log(data);
           
            postData();
        
    }

    const postData = () => {
        console.log("Data : ", data)
        axios.post("http://localhost:3001/details",data).then(() => getTodo())
    }

    return (
      
        <div id="main">
              <h1>Create a new account</h1>
            <div id="img">
               
               
                <form onSubmit={handleSubmit} autoComplete="off">
                 
                    <input type="text" name="name" value={name} placeholder="Enter your  name" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="email" name="email" value={email} placeholder="Enter your email" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                <select  name="country"  value={country} onChange={handleChange} style={{height:"30px",width:"80%", marginLeft:"5%"}} required >
                     <option  defaultValue>Select Country</option>
                     <option value="india">India</option>
                     <option value="usa">USA</option>
                     <option value="Europe">Europe</option>
                     <option value="Africa">Africa</option>
                    
               </select>
                    
                    <br />
                    <br />
                    <input  name="persons"  value={persons}  onChange={handleChange} style={{height:"30px",width:"80%", marginLeft:"5%"}} type = "Number" placeholder = "No of persons" required/>
                    <br />
                    <br />
                    <input type="Number" name="dollors" value={dollors} placeholder="Enter dollors" onChange={handleChange} style={{height:"30px",width:"80%", marginLeft:"5%"}} />
                    <br />
                    <br />
                    <input type="submit" style={{height:"30px",width:"80%", backgroundColor:"black",color:"white"}} SignUp/>
                </form>
            </div>
        </div>
    )
}


