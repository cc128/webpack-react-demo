import React from 'react';
import { article_list_guest, client_category_list } from 'req'
import { Tabs, WhiteSpace } from 'antd-mobile';
import Music from './music';
import Lists from './Lists';
export default class Demo extends React.Component {
    state = {
        articleList: [],
        menuData: []
    };
    article_list_guest_func = (orgCategoryId) => {
        article_list_guest({
            orgCategoryId: orgCategoryId,
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
                    this.article_list_guest_func(Data[0].id)
                }
            })

    }
    render() {
        let scrollWidth = document.body.scrollWidth * 2
        let boxStyle = {
            display: 'flex',
            // alignItems: 'center',
            justifyContent: 'center',
            // height: scrollWidth - 100,
            // paddingTop: '60px',
            paddingBottom: '50px',
        }
        return (
            <Tabs tabs={this.state.menuData}
                prerenderingSiblingsNumber={0}
                initialPage={0}
                tabBarPosition="top"
                tabBarBackgroundColor="#ffffff"
                onChange={(tab, index) => {
                    this.article_list_guest_func(tab.id)
                    console.log('onChange', index, tab);
                }}
                onTabClick={(tab, index) => {
                    console.log('onTabClick', index, tab);
                }}
            >
                <div style={boxStyle}>
                    {/* 123 */}
                    <Lists msg={this.state.articleList} />
                </div>
            </Tabs>
        );
    }
}