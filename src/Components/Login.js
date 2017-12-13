import React, { Component } from 'react'
import '../Components/loginpage.css';
import { ToastContainer } from "react-toastr";
import {connect} from 'react-redux';
let container;   

 class Login extends Component {
    

    constructor(){
        super();
        this.state={
            user:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target);
        this.setState({[event.target.name]: event.target.value});
        
      }
    
      handleSubmit=(event)=> {
        if(this.state.user=="Admin"&&this.state.password=="Password")
            {
                console.log("yesssss");
                this.props.dispatch({type: "auth",payload: {
                    authinticated: true
                }});    
                            console.log("after dispatch");
                
                this.props.history.push('/home');
            }
            else
                event.preventDefault();
      }
   
  render() {
console.log(this.props);
    return (
      <div className="container" style={{display:"flex",flexDirection:"row",margin:"0 auto",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
          <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input type="text" name="user" value={this.state.user} placeholder="שם משתמש" onChange={this.handleChange}/>
                    <input type="password" name="password" value={this.state.password} placeholder="סיסמה" onChange={this.handleChange}/>
                    { !this.state.user||!this.state.password ? <p style={{color:"red",fontSize:"7erm"}}>* נא למלא את כל השדות </p> : null }
                    <button onClick={this.handleSubmit}>כניסה</button>
                    <p className="message">אין לך חשבון?? <a href="#">צור חשבון עכשיו</a></p>
                </form>
            </div>
        </div>
        <div className="vl"></div>
      {/*   <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input type="text" placeholder="שם משתמש" onChange={this.handleChange}/>
                    <input type="password"  placeholder="סיסמה" onChange={this.handleChange}/>
                    { !this.state.user||!this.state.password ? <p style={{color:"red",fontSize:"7erm"}}>* נא למלא את כל השדות </p> : null }
                    <button onClick={this.handleSubmit}>כניסה</button>
                    <p className="message">אין לך חשבון?? <a href="#">צור חשבון עכשיו</a></p>
                </form>
            </div>
        </div> */}
        <div className="login-page">
       {/*  <div className="register">
        <form id="register-form" method="post" role="form" style={{display:"none"}} >
									<div class="form-group">
										<input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value=""/>
									</div>
									<div class="form-group">
										<input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value=""/>
									</div>
									<div class="form-group">
										<input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password"/>
									</div>
									<div class="form-group">
										<input type="password" name="confirm-password" id="confirm-password" tabindex="2" class="form-control" placeholder="Confirm Password"/>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now"/>
											</div>
										</div>
									</div>
								</form>
        </div> */}
        </div>
      </div>
    )
  }
}

const mapState=(state)=>{
    return {
        user: state.user,
        password: state.password,
        authinticated: state.authinticated
    }
}
export default connect(mapState)(Login)
