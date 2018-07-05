import React, { Component } from 'react'
import {api} from '../api/init'


export default class SignIn extends Component {

    state = {
        loginError: ''
    }   

    
    handleSignIn = async (event) =>{
        try{
          event.preventDefault()
          const form = event.target
          const response = await api.post('/user/login', {
            email: form.email.value ,
            password: form.password.value
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
            <form onSubmit={this.handleSignIn}>
            { loginError && <p>{ loginError }</p> }
            <label>Email: <input type="email" name="email" /></label><br /> 
            <label>Password: <input type="password" name="password" /></label><br />
            <button type="submit">Login</button>
          </form>    
        )
    
    }
        
}