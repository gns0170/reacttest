import React, {useState} from 'react';



function Main(){

    const [values,setValues] = useState({
        id : "",
        password : ""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch('',{
            method : 'POST',
            body : JSON.stringify(values),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(res=>res.json())
        .then(response=>console.log('Success:', JSON.stringify(response)))
        .catch(error=>console.error('Error:',error));
    }

    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.id] : e.target.value
        })
    }

    return(
        <>
            <form method = "post"
            onSubmit = {handleSubmit}>
                <input type = "text" name = "id" onChange = {handleChange} autoFocus/>
                <input type = "password" name = "password" onChange = {handleChange}/>
                <button>Go</button>
            </form>
        </>
    )
}

export default Main;