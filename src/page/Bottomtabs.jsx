import React from 'react';
import { TabBar } from 'antd-mobile';
export default class TabBarExample extends React.Component {
    state = {
        selectedTab: 'toutiao',
        menu: [
            { title: '头条', key: 'toutiao', url: '/Home', Yicon: require('../images/journalism1.png'), Nicon: require('../images/journalism.png') },
            { title: '口碑', key: 'koubei', url: '/music', Yicon: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg', Nicon: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg' },
            { title: 'friend', key: 'friend', url: '/a', Yicon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg', Nicon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg' },
            { title: 'my', key: 'my', url: '/b', Yicon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg', Nicon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }
        ],
        menuData: []
    };
    componentDidMount() {
        
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
        console.log(1234)
        return (
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
                                    console.log(this.props)
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
        );
    }
}