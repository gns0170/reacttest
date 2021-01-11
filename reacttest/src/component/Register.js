import {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'

function Register(){

    const [values,setValues] = useState({
        id : "",
        password : "",
        name :"",
        bDate:"",
        sex: ""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
       
        console.log(values)
        fetch('http://localhost:4000/api/register',{
            method : 'POST',
            body : JSON.stringify(values),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log("Success : ",data);
            
        })
        .catch(error=>console.error('Error:',error));
        <Redirect to ="/login"/>
    }

    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }
    return(
        <>
            <h2>Register</h2>
            <form action = "http://localhost:4000/api/register"method = "post"
            onSubmit = {handleSubmit}>
                <label htmlFor = "id">ID :</label>
                <input type = "text" name = "id" onChange = {handleChange} autoFocus/>
                <br/>
                <label htmlFor = "password">PW :</label>
                <input type = "password" name = "password" onChange = {handleChange}/>
                <br/>
                <label htmlFor = "name">Name :</label>
                <input type = "text" name = "name" onChange = {handleChange}/>
                <br/>
                <label htmlFor = "bDate">BirthDate :</label>
                <input type = "date" name = "bDate" onChange = {handleChange}/>
                <br/>
                <div onChange = {handleChange}>
                    <label htmlFor = "sex">Sex :</label>
                    <label><input name = "sex" type = "radio" value = "male"/>Male</label>
                    <label><input name = "sex" type = "radio" value = "female"/>Female</label>
                </div>
                <br/>
                <button>Register</button>
            </form>
            <Link to = "/login">Login</Link>
        </>
    )
}

export default Register