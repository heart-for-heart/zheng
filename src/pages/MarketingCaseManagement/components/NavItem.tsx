import cx from 'classnames'
import React, { ReactNode } from 'react'

interface NavItemProps {
  label: string
  selected: boolean
  hover: boolean
  icon: ReactNode
  onClick(): void
}

const NavItem: React.FC<NavItemProps> = props => {
  const { label, selected, hover, icon, onClick } = props

  return (
    <div className={cx('nav-item', { selected, hover })} onClick={onClick}>
      <div className='icon'>{icon}</div>
      <div className='label'>{label}</div>
    </div>
  )
}

export default NavItem
