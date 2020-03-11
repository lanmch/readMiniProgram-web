
import { View } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, Image } from '@tarojs/components';

import './index.less'

type PageState = {
    banner: any
}
type PageProps = {}


interface Banner {
    props: PageProps,
    state: PageState
}


class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: [{url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3233640932,2776790806&fm=26&gp=0.jpg'},
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583777959215&di=b3d86846a5e79ca5e9fdb22a1ae777fb&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D4047717572%2C2067067998%26fm%3D214%26gp%3D0.jpg' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583777947759&di=9dd5e46a63fd920b638cd287261af540&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0183cb5859e975a8012060c82510f6.jpg' }]
        }
    }
    render () {
        const { banner } = this.state
        return (
            <Swiper
                className='swiper-container'
                circular
                indicatorDots
                indicatorColor='#999'
                indicatorActiveColor='#bf708f'
                autoplay>

                { banner.map((item, index) => (
                <SwiperItem key={index}>
                    <Image className='swiper-img' mode='widthFix' src={item.url}></Image>
                    
                </SwiperItem>
                ))}
        </Swiper>
        )
      }
}

export default Banner as ComponentClass;

