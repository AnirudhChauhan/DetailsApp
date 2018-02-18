import React from 'react';
import './../../App.css';
import DetailsForm from './../Forms/DetailsForm';

class View extends React.Component {

    //Handling Submit
    
    submit=()=>{
        console.log("hi i m here");
        this.props.history.push("./ConfirmDetails");
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <p className="App-title">Details App</p>
                </header>
                <div className="App">
                    <DetailsForm submit={this.submit}/>
                </div>                  
            </div>
        );
    }
}
export default View;
