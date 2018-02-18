import React from 'react';
import './../../App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Loginform from './../Forms/Loginform';

class Login extends React.Component {

    submit = data => {
       
        this.props.history.push('/View');
    }

        //Routes on getting Response

    render() {
        const responseGoogle = (response) => {                             
            
        }

        const setRespnseValue = (response) => {
            localStorage.setItem('loggedIn', '1');
            console.log("Left");
            this.props.history.push('/View');
        }

        const responseFacebook = (response) => {
            console.log("facebook console");
            console.log(response);          
            this.props.history.push('/View');
            
        }

        //Handling Google and Facebook login

        return (
            <div className="App">

                <header className="App-header">
                    <h1 className="App-title">Details App</h1>
                </header>

                <div className="FormPadding">
                    <Loginform submit={this.submit} />
                </div>

                <div className="LoginTitle">
                    AUTHENTICATE     USING
                </div>

                <div className="LoginAdjust">

                    <FacebookLogin

                        appId="1637832496310166"
                        autoLoad={false}
                        fields="name,email,picture"
                        onSuccess={setRespnseValue}
                        callback={responseFacebook}

                    />
                    <div className="LoginAdjusted">
                    </div>


                    <GoogleLogin

                        clientId="566516136207-u2fo1kmgolq36oa8h9omo53r67dppn0g.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={setRespnseValue}
                        onFailure={responseGoogle}
                    />
                    <br /><br />

                </div>
            </div>
        );
    }
}
export default Login;
