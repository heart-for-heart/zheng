import { EnvironmentOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

import CasesDisplayCard from './components/CasesDisplayCard'
import CreateCase from './components/CreateCase'
import UserInfoCard from './components/UserInfoCard'

import './style.scss'

const MarketingCaseManagement: React.FC = () => {
  const [showCreateCard, setShowCreateCard] = useState(false)

  return (
    <div className='marketing-case-management'>
      <div className='marketing-case-management-header'>
        <EnvironmentOutlined style={{ color: '#444', marginRight: 6 }} />
        首页
      </div>
      <div className='marketing-case-management-body'>
        <UserInfoCard />
        {showCreateCard ? (
          <CreateCase onGoBack={() => setShowCreateCard(false)} />
        ) : (
          <CasesDisplayCard onCreateCase={() => setShowCreateCard(true)} />
        )}
      </div>
    </div>
  )
}

export default MarketingCaseManagement
