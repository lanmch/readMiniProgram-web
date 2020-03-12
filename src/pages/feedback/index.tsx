
import { View, Input,  Textarea } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component } from '@tarojs/taro'


import './index.less'

type PageState = {
    title: string,
    content: string
}
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
            title: '',
            content: ''
        }
    }
    inputChange(e) {
        this.setState({
            title: e.detail.value
        })
    }
    areaChange(e) {
        this.setState({
            content:  e.detail.value
        })
        console.log(e)
    }
    submit() {
        console.log(this.state)
    }
    render () {
        const { title, content } = this.state
        return (
          <View className='feedback'>
              <Input placeholder='请输入反馈标题' className='input' value={title} onChange={this.inputChange.bind(this)}/>
              <Textarea placeholder='请输入反馈内容' className='textarea' value={content} onChange={this.areaChange.bind(this)}/>
              <View className='btn' onClick={this.submit.bind(this)}>提交反馈</View>
          </View>
        )
      }
}

export default Feedback as ComponentClass;

