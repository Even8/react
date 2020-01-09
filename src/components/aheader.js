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
      {title:'行业方案', path: '', children: [
        {title: '保险机构'},
        {title: '银行机构'},
        {title: '整车厂商'},
        {title: '汽车服务商'},
      ]},
      {title:'一路通科技', path: '', children: [
        {title: '人工智能'},
        {title: '图形识别'},
        {title: '语音识别'},
        {title: '隐私安全'},
      ]},
      {title:'关于我们', path: '', children: [
        {title: '公司介绍'},
        {title: '合作加盟'},
        {title: '媒体报道'},
      ]},
    ]
  };
  render() {
    const {Documentations} = this.state;
    return (
      <div className="header-wrap vw_100 fixed_lt background_black20">
        <div className="header-content f-c-c">
          {this.state.list.map((item, index) => {
            return (
              <div className="f_1 color_fff f-c-c" key={index} >
                <div className="py_20 px_20 pointer header-item">
                  {item.title}
                  <div className="header-list background_black20">
                    {
                      item.children.map((listItem, index) => {
                        return (
                      <div className="header-list-item flex_d_c p_y10 f-c-c my_20">{listItem.title}</div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}


export default Aheader;
