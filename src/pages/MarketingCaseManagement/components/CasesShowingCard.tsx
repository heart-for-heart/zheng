import {
  SearchOutlined,
  PlusOutlined,
  CommentOutlined,
  HeartOutlined,
} from '@ant-design/icons'
import { Input, Select, Button, Space, Tag, Avatar } from 'antd'
import { CASES_DATA } from '../../mock'
import React from 'react'

// TODO：结平 + 文梁 🍓

const greenColor = '#82BA67'
const { CheckableTag } = Tag
const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: greenColor,
    }}
  />
)

interface CasesShowingCardProps {
  onCreateCase(): void
}

const CasesShowingCard: React.FC<CasesShowingCardProps> = props => {
  const { onCreateCase } = props

  return (
    <div className='cases-showing-card'>
      <Input suffix={suffix} />
      <div className='tab-bar'>
        <div>
          <Select
            defaultValue='分类'
            bordered={false}
            options={[
              {
                label: '分类',
                value: '分类',
              },
            ]}
          />
          <Select
            defaultValue='标签'
            bordered={false}
            options={[
              {
                label: '标签',
                value: '标签',
              },
            ]}
          />
        </div>
        <div>
          <Button
            type='primary'
            shape='round'
            icon={<PlusOutlined />}
            style={{ backgroundColor: greenColor, borderColor: greenColor }}
            size='small'
            onClick={onCreateCase}
          >
            新建案例
          </Button>
        </div>
      </div>
      <div className='tag-bar'>
        <Space>
          <CheckableTag checked={true} style={{ backgroundColor: greenColor }}>
            最新
          </CheckableTag>
          <CheckableTag checked={false}>最热</CheckableTag>
        </Space>
      </div>
      <div className='cases-content'>
        {CASES_DATA.map(item => (
          <div className='content-item'>
            <Avatar
              src='https://joeschmoe.io/api/v1/random'
              className='avatar'
            />
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span className='name'>{item.accountName}</span>
              <div className='chat' style={{ width: '100%' }}>
                <span className='title'>{item.title}</span>
                <div className='chat-content'>{item.content}</div>
                <div className='tag-group'>
                  {item.tagList.map(tag => (
                    <span className='tag-item'>#{tag}</span>
                  ))}
                </div>
                <div className='comment'>
                  <span>
                    <CommentOutlined style={{ marginRight: '5px' }} />
                    {item.comment}
                  </span>
                  <span>
                    <HeartOutlined style={{ marginRight: '5px' }} />
                    {item.like}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CasesShowingCard
