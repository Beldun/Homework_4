import React from 'react';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, phoneNumber, email } = this.state;

    console.log('ФИО:', fullName);
    console.log('Номер телефона:', phoneNumber);
    console.log('Email:', email);

    alert(`ФИО: ${fullName}\nНомер телефона: ${phoneNumber}\nEmail: ${email}`);

    this.setState({
      fullName: '',
      phoneNumber: '',
      email: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { fullName, phoneNumber, email } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          ФИО:
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Номер телефона:
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default RegistrationForm;
