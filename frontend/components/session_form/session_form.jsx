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
    return (
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
    let formDisplay;
    if (this.props.formType === 'Login') {
      formDisplay = (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to DistanceTraveled!
            <br/>
            Don't have an account? {this.props.navLink}
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
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <br/>
          <input 
            className="session-submit" 
            type="submit" 
            value={this.props.formType}
          />
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault(); 
                this.props.processForm({
                  username: 'Guest',
                  password: '123456',
                  email: 'guest@guest.com'})
              }}> Demo
            </button>
          </div>
        </form>
      </div>  
      )} else {
        formDisplay = (
        <div className='signup-form-container'>
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            Welcome to DistanceTraveled!
            <br/>
              Already have an account? {this.props.navLink}
              {this.renderErrors()}
            <div className="signup-form">
              <br/>
              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="signup-input"
                  />
                </label>
                <br/>
              <div>
                  <label>Email:
                    <input type='text' 
                      value={this.state.email} 
                      onChange={this.update('email')}
                    />
                  <br/>
                  </label>
              </div>   
                <label>Password:
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="signup-input"
                />
                </label>
                <br/>
                <br/>
              <input 
                className="session-submit" 
                type="submit" 
                value={this.props.formType}
              />
            </div>
          </form>
        </div>  
      );
      
    }
    return (
      formDisplay
    )
}
}

export default SessionForm;
