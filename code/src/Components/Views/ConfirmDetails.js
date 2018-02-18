import React from 'react';
import Media from "react-media";
import './../../App.css';
import { RaisedButton, TextField } from 'material-ui';
import { Card, CardText } from 'material-ui/Card';
import {Link} from 'react-router-dom';

//Data retrived from LocalStorage to be Confirmed

class ConfirmDetails extends React.Component {
    
    //Handling Submit of Print option

    submit = data => {
        window.print();
    }

    //Removal of Data on Exit

    removeData=()=>{
        localStorage.removeItem('NIP');
        localStorage.removeItem('PESEL');
        localStorage.removeItem('email');
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('passportID');
        localStorage.removeItem('personalID');
    }

    //Using Media to Provide Responsive

    render() {
        return (
            <div>
                <header className="App-header">
                    <p className="App-title">Details App</p>
                    <RaisedButton primary onClick={this.submit}>Print</RaisedButton>
                </header>

               <div >
                    <div className="FormPadding">
                        <Media query="(max-width: 599px)">
                            {matches =>
                                matches ? (

                                    //Data displayed over Card

                                    <div>
                                        <CardText>Emailji</CardText>
                                        <TextField className="confirmDetails" value={localStorage.getItem('email')} />
                                        <br />
                                        <br />
                                        <CardText>PESEL</CardText>
                                        <TextField className="confirmDetails" value={localStorage.getItem('PESEL')} />
                                        <br />
                                        <br />
                                        <CardText>PassportID</CardText>
                                        <TextField className="confirmDetails" value={localStorage.getItem('passportID')} />
                                        <br />
                                        <br />
                                        <CardText>PersonalID</CardText>
                                        <TextField className="confirmDetails" value={localStorage.getItem('personalID')} />
                                        <br />
                                        <br />
                                        <CardText>NIP</CardText>
                                        <TextField className="confirmDetails" value={localStorage.getItem('NIP')} />                                      
                                    </div>

                                ) : (
                                        <div className="CardPadding">
                                            

                                            <div class="col s6 offset-s3 valign">
                                                <Card className="CardWith">
                                                    <CardText>Email</CardText>

                                                    <TextField className="confirmDetails" value={localStorage.getItem('email')} />
                                                    <br />
                                                    
                                                    <CardText>PESEL</CardText>

                                                    <TextField className="confirmDetails" value={localStorage.getItem('PESEL')} />
                                                    <br />
                                                    
                                                    <CardText>PassportID</CardText>

                                                    <TextField className="confirmDetails" value={localStorage.getItem('passportID')} />
                                                    <br />
                                                
                                                    <CardText>PersonalID</CardText>

                                                    <TextField className="confirmDetails" value={localStorage.getItem('personalID')} />
                                                    <br />
                                                    
                                                    <CardText>NIP</CardText>

                                                    <TextField className="confirmDetails" value={localStorage.getItem('NIP')} />
                                                </Card>

                                            </div>
                                            
                                        </div>

                                    )
                            }
                        </Media>

                    </div>

                </div>
               

                <div className="CenTopPadd">
                <Link to="/Login">    <RaisedButton onClick={this.removeData}  primary >Submit</RaisedButton> </Link>
                </div>
            </div>
        );
    }
}
export default ConfirmDetails;
