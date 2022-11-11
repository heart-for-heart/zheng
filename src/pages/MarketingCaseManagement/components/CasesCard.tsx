import { HeartOutlined, HeartFilled, SearchOutlined } from '@ant-design/icons'
import { Radio, Menu, Input, Tag, List } from 'antd'
import { observer } from 'mobx-react'
import React, { ReactNode, useState } from 'react'


import store from '@/stores/index'

import { categoryData, labelData, hotCaseData } from '@/pages/mock'

const tabs = [
  {
    key: 'category',
    label: '案例分类',
  },
  {
    key: 'label',
    label: '案例标签',
  },
  {
    key: 'hotCase',
    label: '最热案例',
  },
]

const getRandomColor: () => string = () => {
  // eslint-disable-next-line no-bitwise
  const color = `#${((Math.random() * 0xffffff) << 0).toString(16)}`

  // 过滤掉白色及相近色，避免标签和背景融为一体
  const isWhite = color
    .slice(1)
    .split('')
    .filter((_, i) => i % 2 === 0)
    .every(i => ['f', 'e', 'd', 'c'].includes(i))
  if (color.length !== 7 || isWhite) {
    return getRandomColor()
  }
  return color
}

const CategoryCard: React.FC = () => (
  <div>
    <Menu
      className='category-card'
      // onClick={onClick}
      style={{ width: 256 }}
      // defaultOpenKeys={currentCategory.key}
      // selectedKeys={[currentCategory.key]}
      mode='inline'
      items={categoryData}
    />
  </div>
)

const LabelCard: React.FC = () => {
  const [searchText, setSearchText] = useState('')

  return (
    <div className='label-card'>
      <Input
        className='input'
        suffix={<SearchOutlined style={{ color: '#d4d4d4' }} />}
        placeholder='搜索已有标签'
        onChange={res => setSearchText(res.target.value)}
      />
      <div className='tag-wrapper'>
        {labelData
          .filter(i => i.includes(searchText))
          .map(i => (
            <Tag className='tag' closable color={getRandomColor()} key={i}>
              {i}
            </Tag>
          ))}
      </div>
    </div>
  )
}

const HotCaseCard: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const [hotCaseDataState, setHotCaseDataState] = useState(hotCaseData)

  return (
    <div className='hot-case-card'>
      <Input
        className='input'
        suffix={<SearchOutlined style={{ color: '#d4d4d4' }} />}
        placeholder='搜索案例'
        onChange={res => setSearchText(res.target.value)}
      />

      <div className='list'>
        {hotCaseDataState
          .filter(i => i.title.includes(searchText))
          .map((item, index) => (
            <div key={index} className='list-item'>
              <div className='title'>{`${index + 1}. ${item.title}`}</div>
              <div className='extra'>
                <div
                  onClick={() => {
                    setHotCaseDataState(value => {
                      const data = value.slice()
                      data[index] = {
                        title: item.title,
                        star: item.isStar ? item.star - 1 : item.star + 1,
                        isStar: !item.isStar,
                      }

                      return data
                    })
                  }}
                >
                  {item.isStar ? (
                    <HeartFilled className='icon' />
                  ) : (
                    <HeartOutlined className='icon' />
                  )}
                </div>
                <span>{item.star}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

const TabCard: React.FC<{ title: string; content?: ReactNode }> = props => {
  const { title, content } = props

  return (
    <div className='tab-card'>
      <div className='title'>{title}</div>

      <div className='content'>
        <div>{content}</div>
      </div>
    </div>
  )
}

const CasesCard: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0])

  const renderContent: { [key: string]: ReactNode } = {
    category: <CategoryCard key='category' />,
    label: <LabelCard key='label' />,
    hotCase: <HotCaseCard key='hotCase' />,
  }

  return (
    <div className='cases-card'>
      <Radio.Group
        className='radio-group'
        defaultValue={currentTab.key}
        size='small'
        buttonStyle='solid'
        onChange={res => {
          setCurrentTab(tabs.find(i => i.key === res.target.value) || tabs[0])
        }}
      >
        {tabs.map(i => (
          <Radio.Button key={i.key} className='radio-btn' value={i.key}>
            {i.label}
          </Radio.Button>
        ))}
      </Radio.Group>

      <TabCard
        title={currentTab.label}
        content={renderContent[currentTab.key]}
      />
    </div>
  )
}

export default observer(CasesCard)
