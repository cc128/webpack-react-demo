import React from 'react';
import { article_list_guest, client_category_list } from 'req'
import { Tabs, WhiteSpace, Toast, PullToRefresh, Button } from 'antd-mobile';
import Music from './music';
import ReactDOM from 'react-dom';
import Lists from './Lists';
export default class Demo extends React.Component {
    state = {
        articleList: [],
        menuData: []
    };
    article_list_guest_func = (orgCategoryId) => {
        this.loadingToast()
        this.setState({
            // articleList: []
        })
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
            Toast.hide()
        })
    }
    loadingToast() {
        Toast.loading('Loading...', 0, () => {
            console.log('Load complete !!!');
        }, true);
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
                    <PullToRefresh
                        damping={60}
                        ref={el => this.ptr = el}
                        style={{
                            height: this.state.height,
                            // overflow: 'auto',
                            width:'100%',
                        }}
                        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                        direction={this.state.down ? 'down' : 'up'}
                        refreshing={this.state.refreshing}
                        onRefresh={() => {
                            this.setState({ refreshing: true });
                            setTimeout(() => {
                                this.setState({ refreshing: false });
                            }, 1000);
                        }}
                    >
                        <Lists style={{ width: '100%',border:'1px solid red' }} name="aaaa" msg={this.state.articleList} />
                        {/* {this.state.data.map(i => (
            <div key={i} style={{ textAlign: 'center', padding: 20 }}>
              {this.state.down ? 'pull down' : 'pull up'} {i}
            </div>
          ))} */}
                    </PullToRefresh>
                    {/* <Lists style={{ width: '100%' }} name="aaaa" msg={this.state.articleList} /> */}
                </div>
            </Tabs>
        );
    }
}
function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
        dataArr.push(i);
    }
    return dataArr;
}
// export default class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             refreshing: false,
//             down: true,
//             height: document.documentElement.clientHeight,
//             data: [],
//         };
//     }

//     componentDidMount() {
//         const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
//         setTimeout(() => this.setState({
//             height: hei,
//             data: genData(),
//         }), 0);
//     }

//     render() {
//         return (<div>
//             <Button
//                 style={{ marginBottom: 15 }}
//                 onClick={() => this.setState({ down: !this.state.down })}
//             >
//                 direction: {this.state.down ? 'down' : 'up'}
//             </Button>
//             <PullToRefresh
//                 damping={60}
//                 ref={el => this.ptr = el}
//                 style={{
//                     height: this.state.height,
//                     overflow: 'auto',
//                 }}
//                 indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
//                 direction={this.state.down ? 'down' : 'up'}
//                 refreshing={this.state.refreshing}
//                 onRefresh={() => {
//                     this.setState({ refreshing: true });
//                     setTimeout(() => {
//                         this.setState({ refreshing: false });
//                     }, 1000);
//                 }}
//             >
//                 <Demo />
//                 {/* {this.state.data.map(i => (
//             <div key={i} style={{ textAlign: 'center', padding: 20 }}>
//               {this.state.down ? 'pull down' : 'pull up'} {i}
//             </div>
//           ))} */}
//             </PullToRefresh>
//         </div>);
//     }
// }