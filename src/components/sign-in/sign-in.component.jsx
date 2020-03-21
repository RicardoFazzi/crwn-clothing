import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    const { name, value } = event;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            required
            label="Email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            value={this.state.password}
            label="Password"
            required
            handleChange={this.handleChange}
          />

          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
