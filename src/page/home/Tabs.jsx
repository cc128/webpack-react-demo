import React from 'react';
import { article_list_guest, client_category_list } from 'req'

import { Tabs, WhiteSpace } from 'antd-mobile';

export default class Demo extends React.Component {
    state = {
        articleList: [],
        menuData: []
    };
    article_list_guest = () => {
        alert(1)
        return
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
    componentDidMount() {
        console.log(this.state.articleList)
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
        // this.article_list_guest()
    }
    renderContent = tab => {
        console.log(this.state.articleList)
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                <div>
                    {
                        this.state.articleList.map((e,i) => {
                            <div>{i}</div>
                        })
                    }
                </div>
            </div>
        );
    };
    render() {
        return (
            <div>
                <Tabs onTabClick={this.article_list_guest()} tabs={this.state.menuData} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />} prerenderingSiblingsNumber={0} >
                    {/* {this.renderContent} */}
                </Tabs>
                {/* <WhiteSpace /> */}
            </div>
        );
    }
}