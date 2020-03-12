
import { View, Image } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component, Config } from '@tarojs/taro'


import './index.less'
import { connect } from '@tarojs/redux';
import { getViewHistory } from '../../actions/viewHistory';
type book = {
    title: string,
    abstract: string,
    type: string,
    img: string
}

type PageState = {
    historyList: Array<book>
}
type PageProps = {
    viewHistory: any,
    dispatch: any
}


interface ViewHistory {
    props: PageProps,
    state: PageState
}
const url = Taro.getApp().global.url;
const userId =  Taro.getApp().global.userId;
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
    componentDidMount() {
        this.getHistoryList(userId);
    }
    getHistoryList(userId) {
        Taro.request({
            url: url + '/viewhistory',
            method: 'POST',
            data: {
                userId
            },
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                const { dispatch } = this.props;
                dispatch(getViewHistory(res.data.data.historyList))
            }
        })
    }
    navBook(bookId) {
        Taro.navigateTo({ url: `/pages/bookIntroduce/index?bookId=${bookId}` })
    }
    render () {
        const { viewHistory } = this.props;
        const { list } = viewHistory
        if(!list) return;
        return (
            <View className='view-history'>
            {
                list.map((item, index) => {
                    return (
                        <View className='view-history-item' key={index} onClick={this.navBook.bind(this, item.bookId)}>
                            <Image src={item.img} mode='widthFix' className='img' />
                            <View className='text'>
                                <View className='title'>{ item.bookName }</View>
                                <View className='abs' style={{"WebkitBoxOrient": "vertical", "WebkitLineClamp": 4}}>{ item.bookAbstract }</View>
                            </View>
                        </View>
                    )
                })
            }
                
            </View>
        )
      }
}

// export default ViewHistory as ComponentClass;

const mapStateToProps = (state) => {
    return {
        viewHistory: state.viewHistory
    }
};
export default connect(mapStateToProps)(ViewHistory) as ComponentClass
