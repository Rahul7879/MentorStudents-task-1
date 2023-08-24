import React, { useEffect, useState} from 'react'
import Axios from "axios";
import {useNavigate} from "react-router-dom"

const initialValues = {
  email: "",
  name: ""
}
const Login = () => {
  const [login, setLogin] = useState(initialValues);
  const [data, setData] = useState("");
  const navigate = useNavigate();
  
  const onValueChange = (e)=>{
    setLogin({ ...login, [e.target.name]: e.target.value})
  }

  const LoginUser = async (e) =>{
    e.preventDefault();
      const response = await Axios.post("http://localhost:8000/register", {...login})
      navigate('/logedin')
  }
  return (
    <div className='container py-5'>
 
    <form>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' onChange={(e)=>onValueChange(e)} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' onChange={(e)=>onValueChange(e)} id="exampleInputPassword1"/>
  </div>
  <button onClick={LoginUser} className="btn btn-primary">Submit</button>
</form>
 <h1>{data}</h1>
    </div>
  )
}

export default Login