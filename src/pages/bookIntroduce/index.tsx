
import { View, Image } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component } from '@tarojs/taro'


import './index.less'

type PageState = {
    bookInfo: {
        img: string,
        title: string,
        author: string,
        abstract: string
    }
}
type PageProps = {}


interface BookIntroduce {
    props: PageProps,
    state: PageState
}


class BookIntroduce extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {
            bookInfo: {
                img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=226849410,1799589538&fm=11&gp=0.jpg',
                title: '超级记忆训练法',
                author: '宫本武藏',
                abstract: '孔子说，“直而无礼则绞”。绞，尖刻。意思是，说话很直接、直爽却不符合礼仪要求，很可能显得尖刻。间接地表达，往往可以显示修养。两者关系直接是不经过中间事物，直接与既定对象而进行关联的。间接是在与既定对象发生关联的时候，必须借助一个中间媒介才能产生关联的，没有中间媒介就不会产生关联。'
            }
        }
    }
    render () {
        const { bookInfo } =this.state;
        return (
            <View className='book-introduce'>
                <View className='cover'>
                    <Image src={bookInfo.img} mode='widthFix' className='img' />
                    <View className='title'>{ bookInfo.title }</View>
                    <View className='author'>{ bookInfo.author }</View>
                </View>
                <View className='abs'>
                    <View className='title'>简介</View>
                    <View className='detail'>
                        { bookInfo.abstract }
                    </View>
                    <View className='btn-zone'>
                        <View className='btn'>
                            收藏
                        </View>
                        <View className='btn'>
                            开始阅读
                        </View>
                    </View>
                </View>
                
            </View>
        )
      }
}

export default BookIntroduce as ComponentClass;

