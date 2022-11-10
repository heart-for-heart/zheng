import { EnvironmentOutlined } from '@ant-design/icons'
import React from 'react'

import CasesDisplayCard from './components/CasesDisplayCard'
import UserInfoCard from './components/UserInfoCard'

import './style.scss'

const MarketingCaseManagement: React.FC = () => (
  <div className='marketing-case-management'>
    <div className='marketing-case-management-header'>
      <EnvironmentOutlined style={{ color: '#444', marginRight: 6 }} />
      首页
    </div>
    <div className='marketing-case-management-body'>
      <UserInfoCard />
      <CasesDisplayCard />
    </div>
  </div>
)

export default MarketingCaseManagement
