import React from 'react'
import axios from 'axios'

const Table = (props) => {
    const {names, editStatus} = props
    const viewDetails = (id) => {
        axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${id}`)
        .then((response)=>{
            const result = response.data
            alert(`
            ${result.name} profile
            Status: ${result.status},
            Contact Number: ${result.phone},
            Email: ${result.email},
            Skills: ${result.skills},
            Experience: ${result.experience}
            `)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    const shortList = (id) => {
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`, {status:"shortlisted"})
        .then((response)=>{
            console.log(response)
            const result = {
                id: id,
                status: "shortlisted"
            }
            editStatus(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

        const rejected = (id) => {
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`, {status:"rejected"})
        .then((response)=>{
            console.log(response)
            const result = {
                id: id,
                status: "rejected"
            }
            editStatus(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    return (
            <div>
                <div className = "mt-3"><h2>{names[0].jobTitle} job</h2></div>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Technical Skills</th>
                            <th>Experience</th>
                            <th>Applied Data</th>
                            <th>View Details</th>
                            <th>Update Application Status</th>
                        </tr>
                    </thead>
                    <tbody>       
                            {names.map((students)=>{
                                return (
                            <tr key = {students._id}>  
                                <td>{students.name}</td>
                                <td>{students.skills}</td>
                                <td>{students.experience}</td>
                                <td>{students.createdAt.slice(0,9)}</td>
                                <td><button className="btn btn-primary" onClick = {()=>{viewDetails(students._id)}}>View Details</button></td>
                                <td>
                                    
                                    {(students.status === 'applied') ? 
                                     (<div><button className="btn btn-success"onClick = {()=>{shortList(students._id)}}>Short List</button> <button className="btn btn-danger" onClick = {()=>{rejected(students._id)}}>Reject</button></div>) : 
                                     (students.status==='shortlisted') ? 
                                     (<div><button className="btn btn-success">Shortlisted</button></div>) : 
                                     (<div><button className="btn btn-danger">Rejected</button></div>)}
                                     
                                     </td>
                                </tr>
                                )
                            })}
                    </tbody>
                </table>
                <ul>
                </ul>
            </div>
    )
}
export default Table