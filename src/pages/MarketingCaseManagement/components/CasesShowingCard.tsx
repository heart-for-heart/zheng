import {
  SearchOutlined,
  PlusOutlined,
  CommentOutlined,
  HeartOutlined,
} from '@ant-design/icons'
import { Button, Tag, Avatar, TreeSelect, Select } from 'antd'
import React from 'react'

import { LabelType, LabelTypeLabel } from '@/constants/marketingCasesManagement'

import { CASES_DATA, CATEGORY_DATA } from '../../mock'

const { Option } = Select

const greenColor = '#82BA67'

const labelData = [
  {
    key: LabelType.High,
    value: LabelTypeLabel[LabelType.High],
  },
  {
    key: LabelType.Specific,
    value: LabelTypeLabel[LabelType.Specific],
  },
  {
    key: LabelType.Coffee,
    value: LabelTypeLabel[LabelType.Coffee],
  },
  {
    key: LabelType.Hotpot,
    value: LabelTypeLabel[LabelType.Hotpot],
  },
  {
    key: LabelType.New,
    value: LabelTypeLabel[LabelType.New],
  },
  {
    key: LabelType.Explode,
    value: LabelTypeLabel[LabelType.Explode],
  },
  {
    key: LabelType.Japan,
    value: LabelTypeLabel[LabelType.Japan],
  },
]

interface CasesShowingCardProps {
  onCreateCase(): void
  onCaseDetail(): void
}

const CasesShowingCard: React.FC<CasesShowingCardProps> = props => {
  const { onCreateCase, onCaseDetail } = props

  return (
    <div className='cases-showing-card'>
      <div className='tab-bar'>
        <div className='search-area'>
          <div className='label'>
            分类：
            <TreeSelect
              allowClear
              placeholder='请选择分类'
              style={{ width: 160 }}
              treeData={CATEGORY_DATA}
            />
          </div>
          <div className='label'>
            标签：
            <Select style={{ width: 100 }} defaultValue={LabelType.Hotpot}>
              {labelData.map(l => (
                <Option key={l.key} value={l.key}>
                  {l.value}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div>
          <div className='create-case-btn' onClick={onCreateCase}>
            新建案例
          </div>
        </div>
      </div>

      <div className='cases-content'>
        {CASES_DATA.map((item, i) => (
          <div className='content-item' key={i}>
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
              <div
                className='chat'
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={onCaseDetail}
              >
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
