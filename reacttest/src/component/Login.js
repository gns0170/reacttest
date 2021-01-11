import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Login(){

    const [values,setValues] = useState({
        id : "",
        password : ""
    })


    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch('http://localhost:4000/api/login',{
            method : 'POST',
            body : JSON.stringify({values}),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log("Success : ",data);
        })
        .catch(error=>console.error('Error:',error));
    }

    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }



    return(
        <>
            <h2>Login</h2>
            <form action = "http://localhost:4000/api"method = "post"
            onSubmit = {handleSubmit}>
                <label htmlFor = "id">ID :</label>
                <input type = "text" name = "id" onChange = {handleChange} autoFocus/>
                <br/>
                <label htmlFor = "password">PW :</label>
                <input type = "password" name = "password" onChange = {handleChange}/>
                <br/>
                <button>Log in</button>
            </form>
            <Link to = "/register">
                Register
            </Link>
        </>
    )
}

export default Login;