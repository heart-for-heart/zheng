import { MailOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'

import { USER_INFO } from '@/pages/MarketingCaseManagement/mock'
import { UserInfo } from '@/types/marketingCasesManagement'

import CasesCard from './CasesCard'

const UserInfoDetail: React.FC<UserInfo> = props => {
  const { pic, name, email } = props

  return (
    <div className='user-info-detail'>
      <img src={pic} className='pic' />
      <div className='name'>
        <UserOutlined style={{ color: '#454545', marginRight: 6 }} />
        {name}
      </div>
      <div className='email'>
        <MailOutlined style={{ color: '#454545', marginRight: 6 }} />
        {email}
      </div>
    </div>
  )
}

const UserInfoCard: React.FC = () => (
  <div className='user-info-card'>
    <UserInfoDetail
      pic={USER_INFO.pic}
      name={USER_INFO.name}
      email={USER_INFO.email}
    />
    <CasesCard />
  </div>
)

export default UserInfoCard
