import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSignUpForm = this.onSignUpForm.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin(){
    return this.props.formType === 'Login'
  }

  onSignUpForm(){
    return this.props.formType === 'Signup'
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to DistanceTravelled!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
                </label>
                <br/>
          <div>
            {this.onSignUpForm() ? 
              <label>Email:
              <input type='text' value={this.state.email} onChange={this.update('email')}/>
              <br/>
              </label>
              : null}
          </div>   
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          <div>
          {this.demoLogin() ? 
              
            <button
              onClick={(e) => {
                e.preventDefault(); 
                this.props.processForm({
                  username: 'Guest',
                  password: '123456',
                  email: 'guest@guest.com'})
                  }}> Demo</button>
              : null}
          </div>  
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
