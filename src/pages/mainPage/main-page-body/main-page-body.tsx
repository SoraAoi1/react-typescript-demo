import React from 'react'
import './main-page-body.less'
import { Input } from 'antd'
import {SearchOutlined, SwapOutlined} from '@ant-design/icons';
interface TagInterface {
  name: string,
  props: string,
  url: string
}
export default class MainPageBody extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="main-page-body">
        <div className="main-page-body-wrapper">
          <div className="title">花瓣，陪你做生活的设计师</div>
          <div className="content">现在每天超过 100 万专业设计师和生活的设计师们使用花瓣浏览器采集工具从全球网站采集超过 200 万灵感图片，在花瓣上线以来，已有超过 20 亿的采集被数千万花瓣用户采集到花瓣上，他们是花瓣真正的创造者。</div>
          <div className="search-box">
            <Input className="input" suffix={<SearchOutlined />} placeholder="每天超过 3000 万人次通过花瓣搜索灵感"></Input>
          </div>
          <div className="search-tag clear">
            {this.searchTagComponent()}
          </div>
          <div className="change-tag">
            <SwapOutlined />
            <span>换一批</span>
          </div>
        </div>
      </div>
    )
  }
  searchTagComponent(): any {
    const {tagList} = require('./searchTag.json');
    const list = tagList.map((item: TagInterface, index: number) => {
      return (
        <span key={index} className="tag-style fl">{item.name}</span>
      )
    })
    return list;
  }
}