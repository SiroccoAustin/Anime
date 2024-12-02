import React, {useState} from 'react'
import axios from 'axios'
import '../../styles/form.css';

function SignUp() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
})

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const data = await axios.post('http://localhost:8000/api/info/signup', formData);
      console.log("The data is sent")
    } catch (error) {
      console.error("There is an error over here so you have to fix it")
    }
  }

  return(
    <div>
        <form className="register" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <label>Username: </label>
            <input type="text" name="username" value={formData.username} onChange={handleChange}/>
            <label>Email: </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            <label>Password: </label>
            <input type='password' name="password" value={formData.password} onChange={handleChange}/>
            <input type='submit'/>
        </form>
        
        <p>If you have an account already login here</p>
    </div>
  )
}

export default SignUp