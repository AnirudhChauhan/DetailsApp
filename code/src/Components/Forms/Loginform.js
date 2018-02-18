import React from "react";
import { Form, Button } from "semantic-ui-react";
import Label from "semantic-ui-react/dist/commonjs/elements/Label/Label";
import Inlineerror from "./../Messages/Inlineerror";
import propTypes from "prop-types";
import { TextField } from 'material-ui';

//Login Form

class Loginform extends React.Component {

  //Set State 

  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };
  onChange = (e) => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  //Handle Submit

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  //Validation

  validate = data => {
    const errors = {};
    if (!data.email) errors.email = "invalid email";
    if (!data.password) errors.password = "can't be blank";
    return errors;
  }

  //onChange Handle

  render() {
    return (

      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!this.state.errors.email}>
          <Label htmlFor="email"></Label>
          <TextField
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={this.state.data.email}
            onChange={this.onChange}
          />
          {this.state.errors.email && <Inlineerror text={this.state.errors.email} />}
        </Form.Field>
        <Form.Field error={!!this.state.errors.password}>
          <Label htmlFor="password"></Label>
          <TextField
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={this.state.data.password}
            onChange={this.onChange}
          />
          {this.state.errors.password && <Inlineerror text={this.state.errors.password} />}
        </Form.Field>
        <Button primary>Submit</Button>
      </Form>
    );
  }


}
Loginform.propTypes = {
  submit: propTypes.func.isRequired
};
export default Loginform;
