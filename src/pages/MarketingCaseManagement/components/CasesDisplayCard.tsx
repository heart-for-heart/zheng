import { InfoCircleOutlined } from '@ant-design/icons'
import React from 'react'

import { DataType, DataTypeLabel } from '@/constants/marketingCasesManagement'
import { DATA_COUNT } from '@/pages/mock'

import CasesSquare from './CasesSquare'

const dataCountSArr = [
  {
    key: DataType.LikeCount,
    label: DataTypeLabel[DataType.LikeCount],
    value: DATA_COUNT.likeCount,
  },
  {
    key: DataType.CommentCount,
    label: DataTypeLabel[DataType.CommentCount],
    value: DATA_COUNT.commentCount,
  },
  {
    key: DataType.CasesPublishedCount,
    label: DataTypeLabel[DataType.CasesPublishedCount],
    value: DATA_COUNT.casesPublishedCount,
  },
  {
    key: DataType.FansCount,
    label: DataTypeLabel[DataType.FansCount],
    value: DATA_COUNT.fansCount,
  },
  {
    key: DataType.Influence,
    label: DataTypeLabel[DataType.Influence],
    value: DATA_COUNT.influence,
  },
]

const getDataCountCard = () => (
  <div className='data-count-card'>
    <div className='pic'>
      <InfoCircleOutlined style={{ fontSize: 33 }} />
    </div>
    {dataCountSArr.map(data => (
      <div className='data-container' key={data.key}>
        <div className='label'>{data.label}</div>
        <div className='value'>{data.value}</div>
      </div>
    ))}
  </div>
)

const CasesDisplayCard: React.FC = () => (
    <div className='cases-display-card'>
      {getDataCountCard()}
      <CasesSquare />
    </div>
  )
export default CasesDisplayCard
