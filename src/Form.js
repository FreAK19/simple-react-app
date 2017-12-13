import React from 'react';
import Button from './components/Button'
import Input from './components/Input'
import Checkbox from './components/Checkbox'


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form action={this.props.action} className="Form" onSubmit={this.handleSubmit}>
        <Input type="text" placeholder="First Name" icon="account_circle" name="password"/>
        <Input type="password" placeholder="password" icon="verified_user" name="user_name"/>
        <Checkbox id="policy" name="policy" checked={false} value="Agree with privacy policy"/>
        <Button as="button" value="Register" type="submit"/>
      </form>
    )
  }
}

export default Form;