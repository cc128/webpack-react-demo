
import React from 'react';
import { TabBar } from 'antd-mobile';
import Tabs from './Tabs'
import { client_category_list } from 'req'
export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'toutiao',
      hidden: false,
      fullScreen: true,
      menu: [
        { title: '头条', key: 'toutiao', Yicon: require('../../images/journalism1.png'), Nicon: require('../../images/journalism.png') },
        // { title: '口碑', key: 'koubei', Yicon: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg', Nicon: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg' },
        // { title: 'friend', key: 'friend', Yicon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg', Nicon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg' },
        // { title: 'my', key: 'my', Yicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg', Nicon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }
      ],
      journalism: [
        { title: '推荐', tag: '__all__' },
        { title: '视频', tag: 'video' },
        { title: '热点', tag: 'news_hot' },
        { title: '社会', tag: 'news_society' },
        { title: '娱乐', tag: 'news_entertainment' },
        { title: '军事', tag: 'news_military' },
        { title: '科技', tag: 'news_tech' },
        { title: '体育', tag: 'news_sports' },
      ],
      menuData:[]
    };
  }
  componentDidMount() {
    client_category_list({ categoryType: 2, siteHierarchy: 'A' })
      .then(res => {
        if(res.code === 0){
          let Data = []
          res.data.map((e,i)=>{
            Data.push({
              title:e.categoryTitle,
              id:e.categoryId,
              type:e.categoryType,
              parentId:e.parentId,
              children:e.children,
            })
          })
          this.setState({
            menuData: Data
          });
        }
      })
  }
  renderContent(title, key) {
    return (
      <div>
        <Tabs name={this.state.menuData} />
      </div>
    );
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', bottom: 0 } : { height: '100%' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          prerenderingSiblingsNumber={0}
          hidden={this.state.hidden}
        >
          {this.state.menu.map((D, i) => {
            return (
              <TabBar.Item
                title={D.title}
                key={D.key}
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(' + D.Nicon + ') center center /  21px 21px no-repeat' //未选中icon
                  // background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(' + D.Yicon + ') center center /  21px 21px no-repeat' //选中icon
                  // background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                }}
                />
                }
                selected={this.state.selectedTab === D.key}//当前选中下标
                badge={1} //消息数量提示
                onPress={() => {
                  alert(123456)
                  this.setState({
                    selectedTab: D.key, //修改当前选中下标
                  });
                }}
                data-seed="logId"
              >
                {this.renderContent(D.title, i)}  {/* 默认加载页面 */}
              </TabBar.Item>
            )
          })}
        </TabBar>
      </div>
    );
  }
}