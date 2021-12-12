import React, { Component } from 'react';
import logo from './SpEARj01.svg';

class login extends React.Component {
    styles = {
        backgroundColor: "#379683"
    };

    render() { 
        return (
        <div style={this.styles}>
            <form className="p-5">
                <img src={logo} className="rounded mx-auto d-block" alt="logo" />
                <div className="form-group py-2">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group py-2">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check py-2">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Keep me logged in</label>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <button type="button" className="btn btn-primary">Login</button>
                        </div>
                        <div className='col'>
                            <button type="button" className="btn btn-primary">Sign Up</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>);
    }
}
 
export default login;