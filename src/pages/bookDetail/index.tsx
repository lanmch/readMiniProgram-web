
import { View } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component } from '@tarojs/taro'


import './index.less'

type PageState = {
    bookDetail: {
        section: string,
        index: number,
        articleDetail: string
    },
    articleDetail: any,
    directory: any,
    ifShowDirectory: boolean
}
type PageProps = {}


interface BookDetail {
    props: PageProps,
    state: PageState
}


class BookDetail extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {
            bookDetail: {
                section: '花海',
                index: 1,
                articleDetail: '人的一生总有很多回忆是挥sadasd\n之不去的，青春的记忆就像五彩斑斓的花束，散发着淡雅的馨香，我曾小心翼翼地将它们修剪成干枝夹在《繁星诗集》里陈放多年。是昨夜的雷雨扰我无法入梦，才让我不经意间看到了这些文字，读着读着这些文字变得不安生起来，它们硬生生地将我拉回到了中考那年。\n 那年的夏天，我的中考成绩下来了，心里却开始犯了难。 高中和中专不知该如何选择。我很想去读高中，因为它是通往大学唯一的桥，那是我最向往的地方。可是，高中和大学一共要读六年，我的家境在当时是无法支付这高额的学费的。考虑再三还是决定去读中专。即便是选择中专，也是父亲咬紧牙答应下来的，我深知父亲的难处。'
            },
            articleDetail: [],
            directory: ['第一个系统登场', '欧神系统开始工作', '花花'],
            ifShowDirectory: false
        }
    }
    componentDidMount() {
        this.formatArticle();
    }
    formatArticle() {
        let article = this.state.bookDetail.articleDetail;
        let articleDetail = article.split('\n');
        this.setState({
            articleDetail
        })
    }
    goDirectory() {
        this.setState({
            ifShowDirectory: true
        })
    }
    navOtherSection() {
        this.setState({
            ifShowDirectory: false
        })
    }
    render () {
        const { bookDetail, articleDetail, directory, ifShowDirectory } = this.state;
        return (
            <View className='book-detail'>
                <View className='title'>
                    <View>第{ bookDetail.index + 1 }章</View><View className='title-detail'>{ bookDetail.section }</View>
                </View>
                <View className='detail' >
                    {
                        articleDetail.map((item, index) => {
                            return <View className='paragraph' key={index}>{ item }</View>
                        })
                    }
                </View>
                <View className='btn-zone'>
                    <View className='btn'>上一章</View>
                    <View className='btn' onClick={this.goDirectory.bind(this)}>目录</View>
                    <View className='btn'>下一章</View>
                </View>
                {/* 目录 */}
                {
                    ifShowDirectory ? 
                    <View className='directory'>
                    {
                        directory.map((item, index) => {
                            return(
                                <View
                                  key={index}
                                  className={bookDetail.index == index ? 'directory-item choose' : 'directory-item'}
                                  onClick={this.navOtherSection.bind(this)}
                                >
                                    第{index+1}章 {'  '+ item}
                                </View>
                            )
                        })
                    }
                    </View> : null
                }
                
            </View>
        )
      }
}

export default BookDetail as ComponentClass;

