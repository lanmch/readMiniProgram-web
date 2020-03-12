
import { View, Image } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component } from '@tarojs/taro'

import { connect } from '@tarojs/redux'
import { getBookInfo } from '../../actions/bookInfo'
import './index.less'
import Toast from '../../components/toast/index';
type PageState = {
    bookInfo: {
        img: string,
        title: string,
        author: string,
        abstract: string
    },
    ifCollect: boolean,
    collectId: any,
    toastText: string,
    ifShowToast: boolean
}
type PageProps = {
    bookInfo: any,
    dispatch:any
}


interface BookIntroduce {
    props: PageProps,
    state: PageState
}

const url = Taro.getApp().global.url;
const userId =  Taro.getApp().global.userId;
class BookIntroduce extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {
            ifCollect: false,
            collectId: '',
            ifShowToast: false,
            toastText: '',
        }
    }
    componentDidMount() {
        this.viewBook();
        this.getBookInfo();
        this.getCollectInfo();
    }
    viewBook() {
        
        
        Taro.request({
            url: url + '/addview',
            method: 'POST',
            data: {
                bookId: this.$router.params.bookId
            },
            header: {
                'content-type': 'application/json'
            },
            success: () => {
            }
        })
    }
    getBookInfo() {
        Taro.request({
            url: url + '/bookinfo',
            method: 'POST',
            data: {
                bookId: this.$router.params.bookId
            },
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                const { dispatch } = this.props;
                dispatch(getBookInfo(res.data.data.bookInfo));
            }
        })
    }
    getCollectInfo() {
        
        Taro.request({
            url: url + '/getcollectinfo',
            method: 'POST',
            data: {
                bookId: this.$router.params.bookId,
                userId: userId
            },
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                this.setState({
                    ifCollect: res.data.data.ifCollect,
                    collectId: res.data.data.collectId
                })
            }
        })
    }
    changeCollect() {
        Taro.request({
            url: url + '/collectbook',
            method: 'POST',
            data: {
                bookId: this.$router.params.bookId,
                userId: userId,
                collectId: this.state.collectId,
                collectType: this.state.ifCollect ? 0 : 1
            },
            header: {
                'content-type': 'application/json'
            },
            success: () => {
                var that = this;
                that.setState({
                    ifShowToast: true,
                    toastText: this.state.ifCollect ? '取消成功': '收藏成功',
                    ifCollect: !this.state.ifCollect,
                }, function() {
                    setTimeout(function() {
                        that.setState({
                            ifShowToast: false
                        })
                    }, 1000)
                })
            }
        })
    }
    navBookDetail(bookId) {
        Taro.navigateTo({ url: `/pages/bookDetail/index?bookId=${bookId}` })
    }
    render () {
        const { bookInfo } = this.props;
        const { ifCollect, ifShowToast, toastText } = this.state;
        const { book } = bookInfo;
        if(!book) return;
        return (
            <View className='book-introduce'>
                <View className='cover'>
                    <Image src={book.img} mode='widthFix' className='img' />
                    <View className='title'>{ book.bookName }</View>
                    <View className='author'>{ book.author }</View>
                </View>
                <View className='abs'>
                    <View className='title'>简介</View>
                    <View className='detail'>
                        { book.bookAbstract }
                    </View>
                    <View className='btn-zone'>
                        <View className='btn' onClick={this.changeCollect.bind(this)}>
                        {
                            ifCollect ? '取消收藏' : '收藏'
                        }
                        </View>
                        <View className='btn' onClick={this.navBookDetail.bind(this, book.bookId)}>
                            开始阅读
                        </View>
                    </View>
                </View>
                {
                    ifShowToast ? <Toast toastText={toastText} /> : null
                }
            </View>
        )
      }
}

// export default BookIntroduce as ComponentClass;

const mapStateToProps = (state) => {
    return {
        bookInfo: state.bookInfo
    }
};
export default connect(mapStateToProps)(BookIntroduce) as ComponentClass
