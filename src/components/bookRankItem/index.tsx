
import { ComponentClass } from 'react'
import { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './index.less'

type PageState = {}
type PageProps = {
    bookInfo: {
        bookName: string,
        img: string,
        bookAbstract: string,
        bookId: number
    },
    index: number
}


interface BookRankItem {
    props: PageProps,
    state: PageState
}


class BookRankItem extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    navBook(bookId) {
       Taro.navigateTo({ url: `/pages/bookIntroduce/index?bookId=${bookId}` })
    }
    render () {
        const { bookInfo, index } = this.props;
        return (
            bookInfo ? 
            <View className='book-rank-item' onClick={this.navBook.bind(this, bookInfo.bookId)}>
                <Image mode='widthFix' className='img' src={bookInfo.img} />
                <View className='text'>
                    <View className='title'>{ bookInfo.bookName }</View>
                    <View className='abs' style={{"WebkitBoxOrient": "vertical", "WebkitLineClamp": 4}}>{ bookInfo.bookAbstract }</View>
                </View>
                <View className={index < 3 ? 'index index-top' : 'index'}>{ index+1 }</View>
            </View> : null
        )
      }
}

export default BookRankItem as ComponentClass;

