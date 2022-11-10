import React from 'react'
import { Input, Select, Button, Space, Tag, Avatar } from "antd";
import { SearchOutlined, PlusOutlined, CommentOutlined, HeartOutlined } from '@ant-design/icons';

// TODO：结平 + 文梁 🍓

const greenColor = "#82BA67"

const CasesShowingCard: React.FC = () => {
    const suffix = (
        <SearchOutlined
            style={{
                fontSize: 16,
                color: greenColor,
            }}
        />
    );

    const { CheckableTag } = Tag;


    return  <div className='cases-showing-card'>
        <Input suffix={suffix}/>
        <div className='tab-bar'>
            <div>
                <Select
                    defaultValue="分类"
                    bordered={false}
                    options={[
                        {
                            label: "分类",
                            value: "分类"
                        }
                    ]}
                />
                <Select
                    defaultValue="标签"
                    bordered={false}
                    options={[
                        {
                            label: "标签",
                            value: "标签"
                        }
                    ]}
                />
            </div>
            <div>
                <Button type="primary" shape="round" icon={<PlusOutlined />} style={{backgroundColor: greenColor, borderColor: greenColor}} size="small">
                    新建案例
                </Button>
            </div>
        </div>
        <div className="tag-bar">
            <Space>
                <CheckableTag checked={true} style={{backgroundColor: greenColor}}>最新</CheckableTag >
                <CheckableTag checked={false}>最热</CheckableTag >
            </Space>
        </div>
        <div className="cases-content">
            <div className="content-item">
                <Avatar src="https://joeschmoe.io/api/v1/random" className="avatar"/>
                <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <span className="name">火锅不辣</span>
                    <div className="chat" style={{
                        width: "100%",
                    }}>
                        <span className="title">营销新概念360°全方位打造网红餐厅</span>
                        <div className="chat-content">
                            以下是内容文本，以下是内容文本，以下是内容文本，以下是内容文本，以下是内容文本，以下是内容文本，以下是内容文本，以下是内容文本，以下是内容文本，以下是内容文本，以下是内容文本，以下是内容文本，以下是内容文本，以下是内容文本，以下是内容文本，
                        </div>
                        <div className="tag-group">
                            <span className="tag-item">#火锅</span>
                            <span className="tag-item">#烤肉</span>
                            <span className="tag-item">#音乐</span>
                            <span className="tag-item">#国潮</span>
                        </div>
                        <div className="comment">
                            <span><CommentOutlined style={{marginRight: "5px"}} />36</span>
                            <span><HeartOutlined style={{marginRight: "5px"}} />999</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-item">
                <Avatar src="https://joeschmoe.io/api/v1/random" className="avatar"/>
                <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <span className="name">火锅不辣</span>
                    <div className="chat" style={{
                        width: "100%",
                    }}>
                        <span className="title">赛百味疯狂星期四</span>
                        <div className="chat-content">
                            还是分手了 ，谢谢大家。我们最终和平分手，其实从朋友到恋人我们发生了挺多事情，能走到一起也是很不容易。我喜欢你，很喜欢你，也想和你幼稚。对啊，我总问我自己为什么还能坚持，可能没有答案，我没有备胎，也不玩暧昧，我所有的脾气爱笑爱哭都给了你，我能为你做的最后一件事竟然是走出你的人生。我一点都不后悔，更谢谢你教会我成长。 我也不知道这是谁写的，挺感动的我就复制下来了，看到这里说明你很在乎我，能v我80请我吃一顿疯狂星期四的套餐吗？
                        </div>
                        <div className="tag-group">
                            <span className="tag-item">#疯狂星期四</span>
                            <span className="tag-item">#炸鸡</span>
                            <span className="tag-item">#爆款</span>
                        </div>
                        <div className="comment">
                            <span><CommentOutlined style={{marginRight: "5px"}} />36</span>
                            <span><HeartOutlined style={{marginRight: "5px"}} />999</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CasesShowingCard
