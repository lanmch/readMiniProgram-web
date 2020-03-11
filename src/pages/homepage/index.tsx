

import { ComponentClass } from 'react'
import { Component, Config } from '@tarojs/taro'
import { View, Input, Button, Image } from '@tarojs/components'
import Banner from '../../components/banner'
import BookRankItem from '../../components/bookRankItem'

import './index.less'

type PageState = {
    currentTabIndex: number,
    bookList: any,
    rankTabIndex: number
}
type PageProps = {
}


interface Homepage {
    props: PageProps,
    state: PageState
}


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

    handleClickTab(index) {
        this.setState({
            currentTabIndex: index
        })
    }
    handleClickRankTab(index) {
        this.setState({
            rankTabIndex: index
        })
    }
    render () {
        const { currentTabIndex, bookList, rankTabIndex } = this.state;
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

                            <View className='first'>
                                <Image
                                src={bookList[0].img}
                                className='img'
                                mode='widthFix'
                                />
                                <View className='text'>
                                    <View className='text-top'>
                                        <View className='title'>{ bookList[0].title }</View>
                                        <View className='type'>{ bookList[0].type }</View>
                                    </View>
                                    <View className='text-btm'>
                                        { bookList[0].abstract }
                                    </View>
                                </View>
                            </View>
                            <View className='others'>
                                {
                                    bookList.map((item, index) => {
                                        return(
                                            index ?
                                            <View className='others-item' key={index}>
                                                <View className='type'>{ item.type }</View>
                                                <View className='title'>{ item.title }</View>
                                            </View> : null
                                        )
                                        
                                    })
                                }
                            </View>
                        </View> : 
                        currentTabIndex == 1 ?
                        <View className='tab-content'>

                            <View className='first'>
                                <Image
                                src={bookList[0].img}
                                className='img'
                                mode='widthFix'
                                />
                                <View className='text'>
                                    <View className='text-top'>
                                        <View className='title'>{ bookList[0].title }</View>
                                        <View className='type'>{ bookList[0].type }</View>
                                    </View>
                                    <View className='text-btm'>
                                        { bookList[0].abstract }
                                    </View>
                                </View>
                            </View>
                            <View className='others'>
                                {
                                    bookList.map((item, index) => {
                                        return(
                                            index ?
                                            <View className='others-item' key={index}>
                                                <View className='type'>{ item.type }</View>
                                                <View className='title'>{ item.title }</View>
                                            </View> : null
                                        )
                                        
                                    })
                                }
                            </View>
                        </View> :
                        <View className='tab-rank'>
                            <View className='rank-type'>
                                {
                                    ['文学', '现代', '都市', '新闻', '技术'].map((item, index) => {
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
                                    bookList.map((item, index) => {
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

export default Homepage as ComponentClass;

