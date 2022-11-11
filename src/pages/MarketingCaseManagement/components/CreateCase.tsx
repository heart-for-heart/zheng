import {
  FileWordOutlined,
  ImportOutlined,
  PayCircleOutlined,
  PieChartOutlined,
  RadarChartOutlined,
  StarOutlined,
  TrophyOutlined,
  VideoCameraAddOutlined,
  WechatOutlined,
} from '@ant-design/icons'
import { Form, Input, Menu, MenuProps } from 'antd'
import cx from 'classnames'
import React, { useState } from 'react'

import { NavType } from '@/constants/marketingCasesManagement'

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem =>
  ({
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem)

const items: MenuItem[] = [
  getItem('营销媒体', 'sub1', <StarOutlined />, [
    getItem('微信公众号', 'g1', <WechatOutlined />),
    getItem('小程序', 'g2', <RadarChartOutlined />),
    getItem('短视频', 'g3', <VideoCameraAddOutlined />),
  ]),
  getItem('营销类型', 'sub2', <PieChartOutlined />, [
    getItem('一键导入', 'g4', <ImportOutlined />),
    getItem('自动营销', 'g5', <PayCircleOutlined />),
    getItem('主动营销', 'g6', <TrophyOutlined />),
    getItem('软文营销', 'g7', <FileWordOutlined />),
  ]),
]

interface CreateCaseProps {
  onGoBack(): void
}

const CreateCase: React.FC<CreateCaseProps> = props => {
  const [selectedTab, setSelectedTab] = useState(NavType.CreateCase)
  const { onGoBack } = props

  const handleClickCases = () => {
    setSelectedTab(NavType.Cases)
    onGoBack()
  }

  return (
    <div className='create-case'>
      <div className='create-case-header'>
        <a
          style={{ marginRight: 5 }}
          className={cx('action-btn', {
            selected: selectedTab === NavType.Cases,
          })}
          onClick={handleClickCases}
        >
          案例广场
        </a>
        /
        <a
          style={{ marginLeft: 5 }}
          className={cx('action-btn', {
            selected: selectedTab === NavType.CreateCase,
          })}
          onClick={() => setSelectedTab(NavType.CreateCase)}
        >
          新建案例
        </a>
      </div>
      <div className='create-case-body'>
        <Menu
          mode='inline'
          style={{ width: 200 }}
          items={items}
          className='create-case-menu'
        />
        <div className='create-case-form'>
          <div className='action-btn'>
            <a className='btn cancel' onClick={handleClickCases}>
              取消
            </a>
            <a className='btn save'>保存</a>
          </div>
          <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} colon={false}>
            <Form.Item label='商户'>
              <Input />
            </Form.Item>
            <Form.Item label='门店'>
              <Input />
            </Form.Item>
            <Form.Item label='案例内容'>
              <Input.TextArea style={{ width: 500, height: 200 }} />
            </Form.Item>
            <Form.Item label='营销亮点'>
              <Input />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CreateCase
