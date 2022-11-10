import { LikeOutlined, ShareAltOutlined } from '@ant-design/icons'
import React, { ReactNode, useState } from 'react'

import { NavType, NavTypeLabel } from '@/constants/marketingCasesManagement'
import { Nav } from '@/types/marketingCasesManagement'

import CasesShowingCard from './CasesShowingCard'
import MarketingCard from './MarketingCard'
import NavItem from './NavItem'

const navOptions = [
  {
    icon: <ShareAltOutlined />,
    label: NavTypeLabel[NavType.Marketing],
    value: NavType.Marketing,
  },
  {
    icon: <LikeOutlined />,
    label: NavTypeLabel[NavType.Cases],
    value: NavType.Cases,
  },
]

const CasesSquare: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState<NavType>(NavType.Marketing)

  return (
    <div className='cases-square'>
      <div className='nav-items'>
        {navOptions.map(nav => (
          <NavItem
            key={nav.value}
            label={nav.label}
            icon={nav.icon}
            selected={selectedNav === nav.value}
            hover={false}
            onClick={() => setSelectedNav(nav.value)}
          />
        ))}
      </div>
      {selectedNav === NavType.Marketing && <MarketingCard />}
      {selectedNav == NavType.Cases && <CasesShowingCard />}
    </div>
  )
}

export default CasesSquare
