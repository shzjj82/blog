import React, { Component } from "react";
import { Divider, Card, Avatar } from 'antd'

const { Meta } = Card

export default class About extends Component {
    render() {
        return (
            <div>
                <h3>基本介绍</h3>
                <p>这是一款狗粮博客日记 如果你没有吃饱请 点击收藏按钮 定期狗粮投送</p>
                <Divider />
                <div>
                    <h4>作者:</h4>
                    <div>
                        <Card style={{ width: '300px' }}>
                            <Meta avatar={<Avatar src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1532266518&di=25e89f0c281afa09a5cf7db83f8b13fe&src=http://img3.duitang.com/uploads/item/201508/18/20150818212758_JXLHZ.thumb.700_0.jpeg" />}
                                title={<span>张晶杰 < span style={{ fontSize: '12px' }}>web前端开发</span></span>}
                                description='人穷就要多努力' />
                            <div>梧桐我爱你</div>

                        </Card>
                        <Divider type='vertical' />
                        <Card style={{ width: '300px' }}>
                            <Meta avatar={<Avatar src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1532266518&di=25e89f0c281afa09a5cf7db83f8b13fe&src=http://img3.duitang.com/uploads/item/201508/18/20150818212758_JXLHZ.thumb.700_0.jpeg" />}
                                title="张晶杰"
                                description="Web前端开发者" />
                            <div>
                                <p>熟悉Vue、vuex、vue-router</p>
                                <p>熟悉React、React-Router</p>
                                <p>掌握ECMA2015语法</p>
                                <p>精通微信原生小程序开发</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}