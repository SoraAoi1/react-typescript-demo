import React from 'react'
import loginProps from './login.interface'
import './login.less'
export default class Login extends React.Component {
  constructor(props: loginProps) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="main-page-login">login</div>
    )
  }
}