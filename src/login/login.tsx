import React from 'react'
import LoginProps from './login.interface'
// import { Button } from 'antd'
import './login.less'
export default class Login extends React.Component {
  constructor(props: LoginProps) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="main-page-login fl">
        login
      </div>
    )
  }
}