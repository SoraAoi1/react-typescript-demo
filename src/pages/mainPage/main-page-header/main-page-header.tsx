import React from 'react'
import './main-page-header.less'
import {Button} from 'antd'
interface NavInterface {
  name: string,
  isActive: Boolean
}

export default class MainPageHeader extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      navList: [
        {name: '首页', isActive: true},
        {name: '发现', isActive: false},
      ]
    }
  }
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-wrapper-content">
          <div className="header-wrapper-content-logo fl">
            <img src="" alt="" />
          </div>
          <div className="header-wrapper-content-nav fl">
            {this.navListComponent()}
          </div>
          <div className="header-wrapper-content-option fr">
            <Button type="primary" danger>登录/注册</Button>
          </div>
        </div>
      </div>
    )
  }
  changeNav(item: NavInterface) {
    const { navList } = this.state;
    navList.forEach((navItem: NavInterface) => {
      navItem.isActive = false;
      if (navItem.name === item.name) {
        navItem.isActive = true;
      }
    })
    this.setState({navList})
  }
  navListComponent(): any {
    const {navList} = this.state;
    const list = navList.map((item: NavInterface, index: number) => {
      return(
        <span key={index} onClick={() => this.changeNav(item)} className={item.isActive? 'header-wrapper-content-active header-wrapper-content-item cp' : 'header-wrapper-content-item cp'}>{item.name}</span>
      )
    })
    return list;
  }
  
}