import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../redux/reduces/home';
// 路由跳转使用
import { Link } from 'react-router-dom';
@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class Aheader extends Component {
  state = {
    list: [
      {title:'产品服务', path: '', children: [
        {title: '车主服务'},
        {title: '客户运维'},
        {title: '查勘定损'},
        {title: '门店管理'}
      ]},
      {title:'行业方案', path: '', children: [{}]},
      {title:'一路通科技', path: '', children: [{}]},
      {title:'关于我们', path: '', children: [{}]},
    ]
  };
  render() {
    const {Documentations} = this.state;
    return (
      <div className="header-wrap vw_100 fixed_lt background_black50">
        <div className="header-content py_20 f-c-c">
          {this.state.list.map((item, index) => {
            return <div className="f_1 color_fff f-c-c" key={index} >
              {item.title}
            </div>
          })}
        </div>
      </div>
    );
  }
}


export default Aheader;
