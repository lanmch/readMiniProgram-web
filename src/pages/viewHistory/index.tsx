
import { View, Image } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component, Config } from '@tarojs/taro'


import './index.less'
import { type } from 'os';

type book = {
    title: string,
    abstract: string,
    type: string,
    img: string
}

type PageState = {
    historyList: Array<book>
}
type PageProps = {}


interface ViewHistory {
    props: PageProps,
    state: PageState
}


class ViewHistory extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {
            historyList: [{
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
        navigationBarTitleText: '浏览历史'
    }
    render () {
        const { historyList } = this.state
        return (
            <View className='view-history'>
            {
                historyList.map((item, index) => {
                    return (
                        <View className='view-history-item' key={index}>
                            <Image src={item.img} mode='widthFix' className='img' />
                            <View className='text'>
                                <View className='title'>{ item.title }</View>
                                <View className='abs'>{ item.abstract }</View>
                            </View>
                        </View>
                    )
                })
            }
                
            </View>
        )
      }
}

export default ViewHistory as ComponentClass;

