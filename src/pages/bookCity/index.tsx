
import { View, Image } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component, Config } from '@tarojs/taro'
import { getCollectList } from '../../actions/collectList'
import './index.less'

type book = {
    bookId: number,
    bookAbstract: string,
    bookName: string,
    createTime: any,
    type: number,
    view: number,
    img: string
}
type PageState = {

    bookList: Array<book>
}
type PageProps = {
    dispatch: any,
    collectList: any
}


interface BookCity {
    props: PageProps,
    state: PageState
}

const url = Taro.getApp().global.url;
const userId =  Taro.getApp().global.userId;
class BookCity extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {
            bookList: []

        }
    }
    config: Config = {
        navigationBarTitleText: '书架'
    }
    componentDidMount() {
        this.getCollectList(userId);
    }
    getCollectList(userId) {
        Taro.request({
            url: url + '/collectlist',
            method: 'POST',
            data: {
                userId
            },
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                this.setState({
                    bookList: res.data.data.collectList
                })
            }
        })
    }
    navBook(bookId) {
        Taro.navigateTo({ url: `/pages/bookIntroduce/index?bookId=${bookId}` })
    }
    render () {
        const { bookList } = this.state;
        return (
            <View className='book-city'>
            {
                bookList.length ? 
                
                    bookList.map((item, index) => {
                        return (
                            <Image
                              onClick={this.navBook.bind(this, item.bookId)}
                              mode='widthFix'
                              className='img'
                              key={index}
                              src={item.img} />
                        )
                    }) : 
                    <View className='default-tips'>
                        <Image mode='widthFix' className='default-img' src={require('./img/empty.png')} />
                        <View className='default-text'>书架空空如也，快去收藏吧~</View>
                    </View>
                
            }
            </View>
        )
      }
}

export default BookCity as ComponentClass;

