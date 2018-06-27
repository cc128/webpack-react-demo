import React from 'react';
import { article_list_guest } from 'req'

import { Tabs, WhiteSpace } from 'antd-mobile';

export default class Demo extends React.Component {
    state = {
        articleList: '123',
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
    };
    componentDidMount() {
        console.log(this.state.articleList)
        article_list_guest({
            pageNum: 1,
            pageSize: 20,
            sortField: 'update_time',
            siteHierarchy: 'A'
        }).then(res => {
            if (res.code === 0) {
                console.log
                this.setState({
                    articleList: res.data.result    
                })
            }
        })
    }
    renderContent = tab => {
        console.log(tab)
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                {/* <p>Content of {tab.title}</p> */}
                {/* <p>{this.state.articleList}</p> */}
            </div>
        );
    };
    render() {
        return (
            <div>
                <Tabs tabs={this.state.journalism} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />} prerenderingSiblingsNumber={0} >
                    {/* {this.renderContent} */}
                </Tabs>
                {/* <WhiteSpace /> */}
            </div>
        );
    }
}