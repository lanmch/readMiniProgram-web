

import { ComponentClass } from 'react'
import { Component, Config } from '@tarojs/taro'
import { View, Input, Button, Image } from '@tarojs/components'
import Banner from '../../components/banner'
import BookRankItem from '../../components/bookRankItem'
import { connect } from '@tarojs/redux';

import { getRankList } from '../../actions/rankList';
import { getBookList } from '../../actions/bookList';

import './index.less'

type PageState = {
    currentTabIndex: number,
    bookList: any,
    rankTabIndex: number,
    
}
type PageProps = {
    rankList: any,
    dispatch: any,
    bookList: any
}


interface Homepage {
    props: PageProps,
    state: PageState
}

const url = Taro.getApp().global.url;
const userId =  Taro.getApp().global.userId;
const bookType = ['文学','校园','实事','儿童']
class Homepage extends Component {
    
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {
            rankTabIndex: 0,
            currentTabIndex: 0,
            bookList: [{
                title: '天下第一',
                abstract: '就不给你写了封情书不给你写了封情书不给你写了封情书不给你写了封情书，竟然找人打我？行吧，老子看不上你了，老子找人打你',
                type: '现代',
                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638589730,539440484&fm=26&gp=0.jpg'
            },{
                title: '天下第2',
                abstract: '就不给你写了封情书，竟然找人打我？行吧，老子看不上你了，老子找人打你',
                type: '现代',
                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638589730,539440484&fm=26&gp=0.jpg'
            },{
                title: '天下第3',
                abstract: '就不给你写了封情书，竟然找人打我？行吧，老子看不上你了，老子找人打你',
                type: '现代',
                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638589730,539440484&fm=26&gp=0.jpg'
            },{
                title: '天下第一',
                abstract: '就不给你写了封情书，竟然找人打我？行吧，老子看不上你了，老子找人打你',
                type: '现代',
                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638589730,539440484&fm=26&gp=0.jpg'
            },{
                title: '天下第一',
                abstract: '就不给你写了封情书，竟然找人打我？行吧，老子看不上你了，老子找人打你',
                type: '现代',
                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638589730,539440484&fm=26&gp=0.jpg'
            },{
                title: '天下第一',
                abstract: '就不给你写了封情书，竟然找人打我？行吧，老子看不上你了，老子找人打你',
                type: '现代',
                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638589730,539440484&fm=26&gp=0.jpg'
            },{
                title: '天下第一',
                abstract: '就不给你写了封情书，竟然找人打我？行吧，老子看不上你了，老子找人打你',
                type: '现代',
                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638589730,539440484&fm=26&gp=0.jpg'
            },{
                title: '天下第一',
                abstract: '就不给你写了封情书，竟然找人打我？行吧，老子看不上你了，老子找人打你',
                type: '现代',
                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638589730,539440484&fm=26&gp=0.jpg'
            },{
                title: '天下第一',
                abstract: '就不给你写了封情书，竟然找人打我？行吧，老子看不上你了，老子找人打你',
                type: '现代',
                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638589730,539440484&fm=26&gp=0.jpg'
            }]
        }
    }
    config: Config = {
        navigationBarTitleText: '首页'
    }
    componentDidMount() {
        this.getRankList(0);
        this.getBookList(0);
    }
    getRankList(rankType) {
        Taro.request({
            url: url + '/bookrank',
            method: 'POST',
            data: {
                rankType
            },
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                const { dispatch } = this.props;
                dispatch(getRankList(res.data.data.rankList))
            }
        })
    }
    getBookList(bookType) {
        Taro.request({
            url: url + '/booklist',
            method: 'POST',
            data: {
                bookType
            },
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                const { dispatch } = this.props;
                dispatch(getBookList(res.data.data.bookList))
            }
        })
    }
    handleClickTab(index) {
        this.setState({
            currentTabIndex: index
        })
        this.getRankList(index);
    }
    handleClickRankTab(index) {
        this.setState({
            rankTabIndex: index
        })
        this.getBookList(index);
    }
    navBook(bookId) {
        console.log(bookId)
        Taro.navigateTo({ url: `/pages/bookIntroduce/index?bookId=${bookId}` })
    }
    render () {
        const { currentTabIndex, rankTabIndex } = this.state;
        const { rankList, bookList } = this.props;
        const { list } = rankList;
        const { booklist } = bookList;
        if(!list || !booklist) return;
        return (
            <View className='homepage'>
                <Banner />
                <View className='input'>
                    <Input
                      className='input-zone'
                      placeholder='请输入您要搜索的书籍' />
                    <Button className='btn'>搜索</Button>
                </View>
                <View className='tab'>
                    <View className='tab-head'>
                        {
                            ['热门', '上新', '排行'].map((item, index) => {
                                return (
                                    <View
                                      key={index}
                                      className={currentTabIndex == index ? 'tab-head-item-choose' : 'tab-head-item'}
                                      onClick={this.handleClickTab.bind(this, index)}
                                    >
                                    { item }
                                    </View>
                                )
                            })
                        }
                        
                    </View>
                    {/* 热门 上新 */}
                    {
                        currentTabIndex == 0 ? 
                        <View className='tab-content'>

                            <View className='first' onClick={this.navBook.bind(this, list[0].bookId)}>
                                <Image
                                src={list[0].img}
                                className='img'
                                mode='widthFix'
                                />
                                <View className='text'>
                                    <View className='text-top'>
                                        <View className='title'>{ list[0].bookName }</View>
                                        <View className='type'>{ bookType[list[0].type] }</View>
                                    </View>
                                    <View className='text-btm' style={{"WebkitBoxOrient": "vertical", "WebkitLineClamp": 4}}>
                                        { list[0].bookAbstract }
                                    </View>
                                </View>
                            </View>
                            <View className='others'>
                                {
                                    list.map((item, index) => {
                                        return(
                                            index ?
                                            <View className='others-item' key={index} onClick={this.navBook.bind(this, item.bookId)}>
                                                <View className='type'>{ bookType[item.type] }</View>
                                                <View className='title'>{ item.bookName }</View>
                                            </View> : null
                                        )
                                        
                                    })
                                }
                            </View>
                        </View> : 
                        currentTabIndex == 1 ?
                        <View className='tab-content'>

                            <View className='first' onClick={this.navBook.bind(this, list[0].bookId)}>
                                <Image
                                src={list[0].img}
                                className='img'
                                mode='widthFix'
                                />
                                <View className='text'>
                                    <View className='text-top'>
                                        <View className='title'>{ list[0].bookName }</View>
                                        <View className='type'>{ bookType[list[0].type] }</View>
                                    </View>
                                    <View className='text-btm' style={{"WebkitBoxOrient": "vertical", "WebkitLineClamp": 4}}>
                                        { list[0].bookAbstract }
                                    </View>
                                </View>
                            </View>
                            <View className='others'>
                                {
                                    list.map((item, index) => {
                                        return(
                                            index ?
                                            <View className='others-item' key={index} onClick={this.navBook.bind(this, item.bookId)}>
                                                <View className='type'>{ bookType[item.type] }</View>
                                                <View className='title'>{ item.bookName }</View>
                                            </View> : null
                                        )
                                        
                                    })
                                }
                            </View>
                        </View> :
                        <View className='tab-rank'>
                            <View className='rank-type'>
                                {
                                    bookType.map((item, index) => {
                                        return(
                                            <View
                                            className={ rankTabIndex == index ? 'item-choose item' : 'item' }
                                            key={index}
                                            onClick={this.handleClickRankTab.bind(this, index)}
                                            >
                                                { item }
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            <View className='rank-content'>
                                {
                                    booklist.map((item, index) => {
                                        return(
                                            <BookRankItem key={index} index={index} bookInfo={item} />
                                        )
                                    })
                                }
                                
                            </View>
                        </View>
                    }
                    
                    {/* 排行 */}
                    
                </View>
            </View>
        )
      }
}

// export default Homepage as ComponentClass;
const mapStateToProps = (state) => {
    return {
        rankList: state.rankList,
        bookList: state.bookList
    }
};
export default connect(mapStateToProps)(Homepage) as ComponentClass

