import React from 'react'
import {Link, Route} from 'react-router-dom'
import Form from './Form'
import AdminDashBoard from './AdminDashBoard'
const App = (props) => {

  return (
    <div className = "container">
      <div className = "mb-5">
      <Link to = '/Form'>Application Form</Link> | 
      | <Link to = '/AdminDashBoard'>Admin Dashboard</Link>
      </div>
      <div>
      <Route path = "/Form" component = {Form} exact = {true}/>
      <Route path = "/AdminDashBoard" component = {AdminDashBoard} ></Route>
      </div>
    </div>
  )
}
export default App