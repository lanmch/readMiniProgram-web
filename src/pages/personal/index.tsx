
import { View, Image } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component, Config } from '@tarojs/taro'

import Toast from '../../components/toast/index';

import './index.less'

type PageState = {
    ifShowToast: boolean,
    toastText: string,
    userInfo: {
        img: string,
        userId: number,
        userName: string
    }
}
type PageProps = {}


interface Personal {
    props: PageProps,
    state: PageState
}

const url = Taro.getApp().global.url;
const userId =  Taro.getApp().global.userId;
class Personal extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {
            ifShowToast: false,
            toastText: '',
            userInfo: {}
        }
    }
    config: Config = {
        navigationBarTitleText: '我的'
    }
    componentDidMount() {
        Taro.request({
            url: url + '/userinfo',
            method: 'POST',
            data: {
                userId
            },
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                this.setState({
                    userInfo: res.data.data.userInfo
                })
            }
        })

    }
    getVersion() {
        var that = this;
        that.setState({
            ifShowToast: true,
            toastText: '版本编号 v0.0.1'
        }, function() {
            setTimeout(function() {
                that.setState({
                    ifShowToast: false
                })
            }, 1000)
        })
    }
    goFeedback() {
        Taro.navigateTo({ url: '/pages/feedback/index' })
    }
    goViewHistory() {
        Taro.navigateTo({ url: '/pages/viewHistory/index' })
    }
    render () {
        const { ifShowToast, toastText, userInfo } = this.state
        return (
            <View className='personal'>
                
                <View className='head'>
                    <View className='circle-back'></View>
                    
                </View>
                <View className='user'>
                    <Image
                      mode='widthFix'
                      className='user-head'
                      src={userInfo.img} />
                    <View className='user-name'>
                        { userInfo.userName }
                    </View>
                </View>
                <View className='other'>
                    <View className='item' onClick={this.goViewHistory.bind(this)}>
                        <Image src={require('./img/history.png')}  className='icon'/> 浏览历史
                    </View>
                    <View className='item' onClick={this.goFeedback.bind(this)}>
                        <Image src={require('./img/feedback.png')}  className='icon'/> 意见反馈
                    </View>
                    <View className='item' onClick={this.getVersion.bind(this)}>
                        <Image src={require('./img/version.png')}  className='icon'/> 版本信息
                    </View>
                </View>
                {
                    ifShowToast ? <Toast toastText={toastText} /> : null
                }
                
            </View>
        )
      }
}

export default Personal as ComponentClass;

