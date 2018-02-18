import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
class Check extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handlePESEL = this.handlePESEL.bind(this);     
        this.handleNIP = this.handleNIP.bind(this);     
        this.handlepersonalID = this.handlepersonalID.bind(this);        
        this.handlepassportID = this.handlepassportID.bind(this);                
        
    }
 
    //Binding and localstorage

    handleChange(event) {                                    
        const email = event.target.value;
        this.setState({ email });
        localStorage.setItem('email',event.target.value);        
    }

    handlePESEL(event) {                                     
        const PESEL = event.target.value;
        this.setState({ PESEL });
        localStorage.setItem('PESEL',event.target.value);
    }

    handleNIP(event) {                                       
        const NIP = event.target.value;
        this.setState({ NIP });
        localStorage.setItem('NIP',event.target.value);
    }

    handlepersonalID(event) {                               
        const personalID = event.target.value;
        this.setState({ personalID });
        localStorage.setItem('personalID',event.target.value);
    }

    handlepassportID(event) {                               
        const passportID = event.target.value;
        this.setState({ passportID });
        localStorage.setItem('passportID',event.target.value);
    }
    
    //Handle Submit
 
    handleSubmit= () => {                                   
        
        this.props.submit(this.state.data);
        
    };
 
    render() {
        const { email } = this.state;
        const { PESEL } = this.state;
        const { NIP } = this.state;
        const { personalID } = this.state;
        const { passportID } = this.state;
        
        
        
        
        return (

            //Validations and Input Box

            <div>
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
            <div>
                <TextValidator
                    floatingLabelText="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br/>

                <TextValidator
                    floatingLabelText="PESEL 11 digit"
                    onChange={this.handlePESEL}
                    name="PESEL"
                    value={PESEL}
                    validators={['required','minNumber:10000000000','maxNumber:99999999999']}
                    errorMessages={['this field is required', 'PESEL is not valid','PESEL is not valid']}
                />
                <br/>

                <TextValidator
                    floatingLabelText="NIP"
                    onChange={this.handleNIP}
                    name="NIP"
                    value={NIP}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br/>

                <TextValidator
                    floatingLabelText="personal ID"
                    onChange={this.handlepersonalID}
                    name="personalID"
                    value={personalID}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br/>

                <TextValidator
                    floatingLabelText="passport ID"
                    onChange={this.handlepassportID}
                    name="passportID"
                    value={passportID}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
            </div>

            <RaisedButton type="submit"> Submit </RaisedButton>
            </ValidatorForm>
            </div>
        );
    }
}

export default Check;