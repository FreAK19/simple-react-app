import React from 'react'

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      checked: !this.state.checked
    });
    const btn = document.querySelector('.btn-submit');
    if (!this.state.checked === true) {
      btn.classList.remove('disabled')
    } else {
      btn.classList.add('disabled')
    }
  }


  /// handle onChange on input element only for hiding error message from React
  render() {
    return (
      <p className="checkbox_wrap" onClick={this.handleClick}>
        <input type="checkbox" name={this.props.name} checked={this.state.checked} id={this.props.id}
               onChange={this.handleClick}/>
        <label htmlFor={this.props.id}>{this.props.value}</label>
      </p>
    )
  }
}

export default Checkbox;