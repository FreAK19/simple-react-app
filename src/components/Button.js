import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

  }

  render() {
    return (
      <button className="waves-effect waves-light btn btn-submit disabled"
              type={this.props.type}>{this.props.value}</button>
    )
  }
}

export default Button;