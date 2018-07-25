import React, { Component } from 'react'
import Divider, { Button, Icon, Breadcrumb } from 'antd'
class MenuTop extends Component {

  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Application
    </Breadcrumb.Item>
        </Breadcrumb>
        <Button type="primary"> Antd </Button>
      </div>
    )
  }
}

export default MenuTop