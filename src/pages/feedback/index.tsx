
import { View, Input,  Textarea } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component } from '@tarojs/taro'


import './index.less'

type PageState = {}
type PageProps = {}


interface Feedback {
    props: PageProps,
    state: PageState
}


class Feedback extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return (
          <View className='feedback'>
              <Input placeholder='请输入反馈标题' className='input' />
              <Textarea placeholder='请输入反馈内容' value="" className='textarea' />
              <View className='btn'>提交反馈</View>
          </View>
        )
      }
}

export default Feedback as ComponentClass;

