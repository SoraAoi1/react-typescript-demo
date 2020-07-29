import React from 'react'
import MainPageHeader from './main-page-header/main-page-header'
import MainPageBody from './main-page-body/main-page-body'
import './mainPage.less'
export default class MainPage extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="main-page">
        <div className="main-page-header">
          <MainPageHeader></MainPageHeader>
        </div>
        <div className="main-page-body">
          <MainPageBody></MainPageBody>
        </div>
      </div>
    )
  }
}