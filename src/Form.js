import React, {useState} from 'react'
import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid';
const Form = (props) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [experience, setExperience] = useState('')
    const [skills, setSkills] = useState('')
    // const [serData, setSerData] = useState([])
    // console.log(serData)
    // const [submited, setSubmited] = useState('')

    const handleNameChange = (e) => {
        // console.log(e.target.value)
        setFullName(e.target.value)
    }
    const handleEmailChange = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleSelectChange = (e) => {
        // console.log(e.target.value)
        setJobTitle(e.target.value)
    }
    const handleExperienceChange = (e) => {
        // console.log(e.target.value)
        setExperience(e.target.value)
    }
    const handleSkillChange = (e) => {
        // console.log(e.target.value)
        setSkills(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: fullName,
            email: email,
            phone: phone,
            skills: skills,
            jobTitle: jobTitle,
            experience: experience,
        }
        
        axios.post('http://dct-application-form.herokuapp.com/users/application-form', formData)
        .then((response)=>{
            const result = response.data
            console.log(result)
            // setSerData(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
        setFullName("")
        setEmail("")
        setPhone("")
        setJobTitle("")
        setExperience("")
        setSkills("")
    }

    return (
        <div className = "row" >
                <h1 className = "mb-4">Apply for Job</h1>
            <div className = "col-md-8" >
            <form onSubmit = {handleSubmit}  style = {{backgroundColor:"#FFD700", borderRadius: '15px'} } className = "container mb-5 shadow ">
                <label>Full name: </label><br/>
                <input type = 'text' value = {fullName} onChange = {handleNameChange} placeholder = "full-name" className="form-control mt-2" style = {{width:'300px'}}/> 
                
                <hr/>
                <label>Email address: </label><br/>
                <input type = 'email' value = {email} onChange = {handleEmailChange} placeholder = "email" className="form-control mt-2" style = {{width:'300px'}}/>

                <hr/>
                <label>Contact Number: </label><br/>
                <input type = 'number' value = {phone} onChange = {handlePhoneChange} placeholder = "10-digit mobile number" className="form-control mt-2" style = {{width:'300px'}}/>
                
                <hr/>
                <label>Applying for job: </label><br/>
                <select value = {jobTitle} onChange = {handleSelectChange} className="form-control mt-2" style = {{width:'300px'}}>
                    <option>Select-job</option>
                    <option>Front-End Developer</option>
                    <option>Node.js Developer</option>
                    <option>MEAN Stack Developer</option>
                    <option>FULL Stack Developer</option>
                </select>
                
                <hr/>
                <label>Experience: </label><br/>
                <input type = 'text' value = {experience} placeholder = 'experience(2 years, 3 months)' onChange = {handleExperienceChange} className="form-control mt-2" style = {{width:'300px'}}/>
                
                <hr/>
                <label>Technical Skills: </label><br/>
                <textarea type = 'text' value = {skills} placeholder = 'technical skills' onChange = {handleSkillChange} className="form-control mt-2" ></textarea>
                
                <hr/>
                <button  className="btn btn-dark mb-3" type = 'submit' onChange = {handleSubmit}>Send Application</button>
            </form>
            </div>
        </div>
    )
}
export default Form