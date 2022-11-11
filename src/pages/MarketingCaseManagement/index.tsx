import { EnvironmentOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

import CaseDetail from './components/CaseDetail'
import CasesDisplayCard from './components/CasesDisplayCard'
import CreateCase from './components/CreateCase'
import UserInfoCard from './components/UserInfoCard'

import './style.scss'

const enum Page {
  Display = 'display',
  Detail = 'detail',
  Create = 'create',
}

const MarketingCaseManagement: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(Page.Display)

  return (
    <div className='marketing-case-management'>
      <div className='marketing-case-management-header'>
        <EnvironmentOutlined style={{ color: '#444', marginRight: 6 }} />
        首页
      </div>
      <div className='marketing-case-management-body'>
        <UserInfoCard onCaseDetail={() => setPageIndex(Page.Detail)} />
        {pageIndex === Page.Create && (
          <CreateCase onGoBack={() => setPageIndex(Page.Display)} />
        )}
        {pageIndex === Page.Display && (
          <CasesDisplayCard
            onCreateCase={() => setPageIndex(Page.Create)}
            onCaseDetail={() => setPageIndex(Page.Detail)}
          />
        )}
        {pageIndex === Page.Detail && (
          <CaseDetail onGoBack={() => setPageIndex(Page.Display)} />
        )}
      </div>
    </div>
  )
}

export default MarketingCaseManagement
