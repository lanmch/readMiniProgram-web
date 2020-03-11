
import { View, Image } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component, Config } from '@tarojs/taro'


import './index.less'

type book = {
    img: string,
    title: string
}
type PageState = {

    bookList: Array<book>
}
type PageProps = {}


interface BookCity {
    props: PageProps,
    state: PageState
}


class BookCity extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {
            bookList: [{
                img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2981812900,1602556750&fm=11&gp=0.jpg',
                title: '终南山传'
            }, {
                img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1888528990,2875539793&fm=11&gp=0.jpg',
                title: '语文'
            }, {
                img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=226849410,1799589538&fm=11&gp=0.jpg',
                title: '超级记忆训练法'
            }, {
                img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3136869622,3597133951&fm=11&gp=0.jpg',
                title: '定位营销学'
            },{
                img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2981812900,1602556750&fm=11&gp=0.jpg',
                title: '终南山传'
            }, {
                img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1888528990,2875539793&fm=11&gp=0.jpg',
                title: '语文'
            }, {
                img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=226849410,1799589538&fm=11&gp=0.jpg',
                title: '超级记忆训练法'
            }, {
                img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3136869622,3597133951&fm=11&gp=0.jpg',
                title: '定位营销学'
            },{
                img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2981812900,1602556750&fm=11&gp=0.jpg',
                title: '终南山传'
            }, {
                img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1888528990,2875539793&fm=11&gp=0.jpg',
                title: '语文'
            }, {
                img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=226849410,1799589538&fm=11&gp=0.jpg',
                title: '超级记忆训练法'
            }, {
                img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3136869622,3597133951&fm=11&gp=0.jpg',
                title: '定位营销学'
            }]

        }
    }
    config: Config = {
        navigationBarTitleText: '书架'
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

