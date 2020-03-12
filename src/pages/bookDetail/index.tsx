
import { View } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component } from '@tarojs/taro'

import { connect } from '@tarojs/redux';
import { getDirectory } from '../../actions/directory'
import { getArticleDetail } from '../../actions/articleDetail'
import './index.less'
import Toast from '../../components/toast/index';

type PageState = {
    bookDetail: {
        section: string,
        index: number,
        articleDetail: string
    },
    articleDetail: any,
    directory: any,
    ifShowDirectory: boolean,
    sectionIndex: number,
    ifShowToast: boolean,
    toastText: string,
}
type PageProps = {
    directory: any,
    dispatch: any,
    articleDetail: any
}


interface BookDetail {
    props: PageProps,
    state: PageState
}

const url = Taro.getApp().global.url;
const userId =  Taro.getApp().global.userId;
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
            ifShowDirectory: false,
            sectionIndex: 1,
            ifShowToast: false,
            toastText: '',
        }
    }
    componentDidMount() {
        this.viewBook();
        this.getDirectory();
        this.getAriticle(this.state.sectionIndex);
    }
    viewBook() {
        Taro.request({
            url: url + '/viewbook',
            method: 'POST',
            data: {
                bookId: this.$router.params.bookId,
                userId,
                sectionId: 1
            },
            header: {
                'content-type': 'application/json'
            },
            success: () => {
            }
        })
    }
    getDirectory() {
        Taro.request({
            url: url + '/directory',
            method: 'POST',
            data: {
                bookId: this.$router.params.bookId,
            },
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                const { dispatch } = this.props;
                dispatch(getDirectory(res.data.data.directoryList))
            }
        })
    }
    getAriticle(sectionIndex) {
        Taro.request({
            url: url + '/bookdetail',
            method: 'POST',
            data: {
                bookId: this.$router.params.bookId,
                sectionIndex
            },
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                const { dispatch } = this.props;
                dispatch(getArticleDetail(res.data.data.bookDetail[0]))
            }
        })
    }
    formatArticle(content) {
        return content.split('\n');
        
    }
    goDirectory() {
        this.setState({
            ifShowDirectory: true
        })
    }
    navOtherSection(item) {
        this.getAriticle(item.sectionIndex);
        Taro.pageScrollTo({scrollTop: 0});
        this.setState({
            ifShowDirectory: false,
            sectionIndex: item.sectionIndex
        })
    }
    preArticle() {
        if(this.state.sectionIndex > 1) {
            this.getAriticle(this.state.sectionIndex - 1);
            Taro.pageScrollTo({scrollTop: 0});
            this.setState({
                ifShowDirectory: false,
                sectionIndex: this.state.sectionIndex - 1
            })
        } else {
            var that = this;
            that.setState({
                ifShowToast: true,
                toastText: '已经是第一页啦~'
            }, function() {
                setTimeout(function() {
                    that.setState({
                        ifShowToast: false
                    })
                }, 1000)
            })
        }
        
    }
    nextArticle() {
        if(this.state.sectionIndex < this.props.directory.directoryList.length) {
            this.getAriticle(this.state.sectionIndex + 1);
            Taro.pageScrollTo({scrollTop: 0});
            this.setState({
                ifShowDirectory: false,
                sectionIndex: this.state.sectionIndex + 1
            })
        } else {
            var that = this;
            that.setState({
                ifShowToast: true,
                toastText: '已经是最后一页啦~'
            }, function() {
                setTimeout(function() {
                    that.setState({
                        ifShowToast: false
                    })
                }, 1000)
            })
        }
        
    }
    render () {
        const { ifShowDirectory, sectionIndex, ifShowToast, toastText } = this.state;
        const { articleDetail, directory } = this.props;
        const { directoryList } = directory;
        const { detail } = articleDetail;
        if(!detail || !directoryList) return;
        let content = this.formatArticle(detail.sectionContent);
        return (
            <View className='book-detail'>
                <View className='title'>
                    <View>第{ detail.sectionId }章</View><View className='title-detail'>{ detail.sectionName }</View>
                </View>
                <View className='detail' >
                    {
                        content.map((item, index) => {
                            return <View className='paragraph' key={index}>{ item }</View>
                        })
                    }
                </View>
                <View className='btn-zone'>
                    <View className='btn' onClick={this.preArticle.bind(this)}>上一章</View>
                    <View className='btn' onClick={this.goDirectory.bind(this)}>目录</View>
                    <View className='btn' onClick={this.$componentType.nextArticle.bind(this)}>下一章</View>
                </View>
                {/* 目录 */}
                {
                    ifShowDirectory ? 
                    <View className='directory'>
                    {
                        directoryList.map((item, index) => {
                            return(
                                <View
                                  key={index}
                                  className={sectionIndex == item.sectionIndex ? 'directory-item choose' : 'directory-item'}
                                  onClick={this.navOtherSection.bind(this, item)}
                                >
                                    第{item.sectionIndex}章 {'  '+ item.sectionName}
                                </View>
                            )
                        })
                    }
                    </View> : null
                }
                {
                    ifShowToast ? <Toast toastText={toastText} /> : null
                }
            </View>
        )
      }
}

// export default BookDetail as ComponentClass;

const mapStateToProps = (state) => {
    return {
        directory: state.directory,
        articleDetail: state.articleDetail
    }
};
export default connect(mapStateToProps)(BookDetail) as ComponentClass

