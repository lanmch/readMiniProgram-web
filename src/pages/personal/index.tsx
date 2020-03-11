
import { View, Image } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component, Config } from '@tarojs/taro'

import Toast from '../../components/toast/index';

import './index.less'

type PageState = {
    ifShowToast: boolean,
    toastText: string
}
type PageProps = {}


interface Personal {
    props: PageProps,
    state: PageState
}


class Personal extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {
            ifShowToast: false,
            toastText: ''
        }
    }
    config: Config = {
        navigationBarTitleText: '我的'
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
        const { ifShowToast, toastText } = this.state
        return (
            <View className='personal'>
                
                <View className='head'>
                    <View className='circle-back'></View>
                    
                </View>
                <View className='user'>
                    <Image
                      mode='widthFix'
                      className='user-head'
                      src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1873588884,3781931310&fm=11&gp=0.jpg' />
                    <View className='user-name'>
                        LanMch
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

