import React, {useState} from 'react';


function Main(){
    var a = '';
    const [values,setValues] = useState({
        id : "",
        password : ""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values);
        fetch('http://localhost:4000/api',{
            method : 'POST',
            body : JSON.stringify({values}),
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
            [e.target.name] : e.target.value
        })
    }

    const Tester = (e) =>{
        e.preventDefault();
        fetch('http://localhost:4000/api',{method:'POST'})
        .then (res=>res.json())
        .then (data => {
            a= data;
            console.log(a);
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
            <button onClick= {Tester}>Test</button>
            {a}
        </>
    )
}

export default Main;