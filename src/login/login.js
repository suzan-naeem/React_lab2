import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            // username:'',
            password:'',
            email:''
        }
    }

    // setUsername = (e)=>{
    //     this.setState({username:e.target.value})
    // }
    setEmail = (e)=>{
        this.setState({email:e.target.value})
    }
    setPassword = (e)=>{
        this.setState({password:e.target.value})
    }

    // setInputValue = (e)=>{
    //     this.setState({[e.target.name]:e.target.value})
    // }

    login = async (e)=>{
        let user = {
            email : this.state.email,
            password: this.state.password
        }
        
        let res = await fetch('https://reqres.in/api/login',{
            method:'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        });
        let resJson = res.json();
        resJson.then((res)=>{
            if (res.token){
                alert('Login succes')
            }else{
                alert('User not found')
            }
        });
        
    }

    render() {
        return(
            <div>
                <h2>Login</h2><br/>
                <div className="form-group">
                {/* <label>Username : </label>
                <input type="text" className="form-control" onChange={this.setUsername}  value={this.state.username}/><br/> */}
                </div>
                <div className="form-group">
                <label>email : </label>
                <input type="email" className="form-control" onChange={this.setEmail} value={this.state.email}/><br/>
                </div>
                <div className="form-group">
                <label>password : </label>
                <input type="password" className="form-control" onChange={this.setPassword} value={this.state.password}/><br/>
                </div>
                <button className="btn btn-block btn-outline-success" onClick={this.login}>Login</button>
            </div>
        )
    }
}
export default Login;
