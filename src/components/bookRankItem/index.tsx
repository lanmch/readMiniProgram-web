
import { ComponentClass } from 'react'
import { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './index.less'

type PageState = {}
type PageProps = {
    bookInfo: {
        title: string,
        img: string,
        abstract: string
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
    render () {
        const { bookInfo, index } = this.props;
        return (
            bookInfo ? 
            <View className='book-rank-item'>
                <Image mode='widthFix' className='img' src={bookInfo.img} />
                <View className='text'>
                    <View className='title'>{ bookInfo.title }</View>
                    <View className='abs'>{ bookInfo.abstract }</View>
                </View>
                <View className={index < 3 ? 'index index-top' : 'index'}>{ index+1 }</View>
            </View> : null
        )
      }
}

export default BookRankItem as ComponentClass;

