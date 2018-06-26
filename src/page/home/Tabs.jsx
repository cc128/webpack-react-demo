import React from 'react';
import { article_list_guest } from 'req'

import { Tabs, WhiteSpace } from 'antd-mobile';

export default class Demo extends React.Component {
    state = {
        articleList:''
    };
    renderContent = tab => {
        console.log(tab)
        article_list_guest({
            pageNum: 1,
            pageSize: 20,
            sortField: 'update_time',
            siteHierarchy: 'A'
        }).then(res=>{
            if(res.code === 0){
                // this.setState({
                //     articleList: 'res.data.result'
                // })
                // this.setState({
                //     articleList: res.data.result
                //   });
            }
        })
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                <p>Content of {tab.categoryTitle}</p>
            </div>
        );
    };
    render() {
        console.log(1234)
        return (
            <div>
                <Tabs tabs={this.props.name} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />} prerenderingSiblingsNumber={0} >
                    {this.renderContent}
                </Tabs>
                {/* <WhiteSpace /> */}
            </div>
        );
    }
}