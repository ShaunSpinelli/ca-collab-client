import React, { Component } from 'react'
import {api} from '../api/init'


export default class SignUp extends Component {

    state = {
        loginError: ''
    }   

    
    handleSignUp = async (event) =>{
        try{
          event.preventDefault()
          const form = event.target
          const response = await api.post('/user/register', {
            email: form.email.value ,
            password: form.password.value,
            role: form.role.value
          })
          localStorage.setItem('token', response.data.token )
          this.props.loggedIn()
        }catch(err){
          this.setState({loginError: err.message})
        }
      }

    render(){
        let { loginError } = this.state
        return(
            <form onSubmit={this.handleSignUp}>
            { loginError && <p>{ loginError }</p> }
            <label>Email: <input type="email" name="email" /></label><br /> 
            <label>Password: <input type="password" name="password" /></label><br />
            <label>Role: <input type="role" name="role" /></label><br />
            <button type="submit">SignUp</button>
          </form>    
        )
    
    }
        
}