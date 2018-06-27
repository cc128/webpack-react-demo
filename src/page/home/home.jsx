
import React from 'react';
import { TabBar } from 'antd-mobile';
import Tabs from './Tabs'
import { Link } from 'react-router-dom'
import { Route} from 'react-router-dom'
import { client_category_list } from 'req'
export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'toutiao',
      hidden: false,
      menu: [
        { title: '头条', key: 'toutiao',url:'/Home', Yicon: require('../../images/journalism1.png'), Nicon: require('../../images/journalism.png') },
        { title: '口碑', key: 'koubei',url:'/Home/music', Yicon: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg', Nicon: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg' },
        { title: 'friend', key: 'friend',url:'/a', Yicon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg', Nicon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg' },
        { title: 'my', key: 'my',url:'/b', Yicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg', Nicon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }
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
      menuData: []
    };
  }
  componentDidMount() {
    client_category_list({ categoryType: 2, siteHierarchy: 'A' })
      .then(res => {
        if (res.code === 0) {
          let Data = []
          res.data.map((e, i) => {
            Data.push({
              title: e.categoryTitle,
              id: e.categoryId,
              type: e.categoryType,
              parentId: e.parentId,
              children: e.children,
            })
          })
          this.setState({
            menuData: Data
          });
        }
      })
      let menu = this.state.menu
      console.log(this.props)
      for(let i = 0;i<menu.length;i++){
        if(menu[i].url === this.props.location.pathname){
          this.setState({
            selectedTab:menu[i].key
          })
          return
        }
      }
  }
  renderContent(title, key) {
    console.log(222)
    return (
      <div>
        {/* <Tabs name={this.state.menuData} /> */}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <Route to="/Home" name={this.state.menuData} component={Tabs}/>
        </div>

        <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
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
                  title={ this.state.selectedTab}
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
                    this.props.history.push(D.url);
                    this.setState({
                      selectedTab: D.key, //修改当前选中下标
                    });
                  }}
                  data-seed="logId"
                >
                  {/* {this.renderContent(D.title, i)} */}
                </TabBar.Item>
              )
            })}
          </TabBar>
        </div>
      </div>
    );
  }
}