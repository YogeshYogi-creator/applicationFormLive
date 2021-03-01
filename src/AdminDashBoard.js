import React, {useState, useEffect} from 'react'
import axios from 'axios'


import Table from './Table'
const AdminDashBoard = (props) => {
const [users, setUsers] = useState([])
const [names, setNames] = useState([])
useEffect(()=>{
    axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
    .then((response)=>{
        const result = response.data
        setUsers(result)
    })
    .catch((err)=>{
        alert(err.message)
    })
},[])

const frontEndClick = () => {
    const filterFront = users.filter((students=>{
        if(students.jobTitle === 'Front-End Developer'){
            return <li>{students.name}</li>
        }
    }))
setNames(filterFront)
}

const nodeClick = () => {
    const filterFront = users.filter((students=>{
        if(students.jobTitle === 'Node.js Developer'){
            return <li>{students.name}</li>
        }
    }))
setNames(filterFront)
}

const meanClick = () => {
    const filterFront = users.filter((students=>{
        if(students.jobTitle === 'MEAN Stack Developer'){
            return <li>{students.name}</li>
        }
    }))
setNames(filterFront)
}

const fullStackClick = () => {
    const filterFront = users.filter((students=>{
        if(students.jobTitle === 'FULL Stack Developer'){
            return <li>{students.name}</li>
        }
    }))
setNames(filterFront)
}

const editStatus = (user) => {
    const result = names.map(students=>{
        if(students._id === user.id){
            return {...students, ...user} // we are updating students object with the user object which contains status of the student
        }else{
            return {...students}
        }
    })
    setNames(result)
}

    return (
        <div className = "mt-3">
            <button type="button" className="btn btn-outline-primary" onClick = {frontEndClick}>Front-End Developer</button>
            <button type="button" style = {{marginLeft : "6px"}} className="btn btn-outline-success" onClick = {nodeClick}>Node.js Developer</button>
            <button type="button" style = {{marginLeft : "6px"}} className="btn btn-outline-danger" onClick = {meanClick}>MEAN Stack Developer</button>
            <button type="button" style = {{marginLeft : "6px"}} className="btn btn-outline-dark" onClick = {fullStackClick}>Full Stack Developer</button>
            {names.length===0 ? '' : <Table names = {names} editStatus = {editStatus}/>}
    </div>
    )
}
export default AdminDashBoard