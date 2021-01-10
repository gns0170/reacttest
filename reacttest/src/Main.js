import React, {useState} from 'react';


function Main(){

    const [values,setValues] = useState({
        id : "",
        password : ""
    })


    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch('http://localhost:4000/api',{
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
            <form action = "http://localhost:4000/api"method = "post"
            onSubmit = {handleSubmit}>
                <input type = "text" name = "id" onChange = {handleChange} autoFocus/>
                <input type = "password" name = "password" onChange = {handleChange}/>
                <button>Go</button>
            </form>
        </>
    )
}

export default Main;