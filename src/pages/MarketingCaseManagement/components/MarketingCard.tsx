import { DatePicker, Select } from 'antd'
import moment from 'moment'
import React, { useState } from 'react'

import {
  DataType,
  DATE,
  DateType,
  DateTypeLabel,
} from '@/constants/marketingCasesManagement'
import { DISPLAY_DATE_FORMAT } from '@/utils/date'

// TODO：王亚🍍

const { Option } = Select

const DateOptions = [
  {
    label: DateTypeLabel[DateType.Latest7Days],
    key: DateType.Latest7Days,
  },
  {
    label: DateTypeLabel[DateType.Latest30Days],
    key: DateType.Latest30Days,
  },
  {
    label: DateTypeLabel[DateType.Customize],
    key: DateType.Customize,
  },
]

const MarketingCard: React.FC = () => {
  const [selectedDateType, setSelectedDateType] = useState<DateType>(
    DateType.Latest7Days,
  )
  const [selectedDate, setSelectedDate] = useState<any>(DATE.LATEST_7_DAYS)

  const handleDateChange = (v: DateType) => {
    if (v === DateType.Latest7Days) {
      setSelectedDateType(DateType.Latest7Days)
      setSelectedDate(DATE.LATEST_7_DAYS)
    } else if (v === DateType.Latest30Days) {
      setSelectedDateType(DateType.Latest30Days)
      setSelectedDate(DATE.LATEST_30_DAYS)
    } else {
      setSelectedDateType(DateType.Customize)
      setSelectedDate(null)
    }
  }

  return (
    <div className='marketing-card'>
      <div className='serach-part'>
        <Select
          style={{ width: 95, marginRight: 10 }}
          defaultValue={DateType.Latest7Days}
          onChange={handleDateChange}
        >
          {DateOptions.map(opt => (
            <Option key={opt.key} value={opt.key}>
              {opt.label}
            </Option>
          ))}
        </Select>
        <DatePicker.RangePicker
          format={DISPLAY_DATE_FORMAT}
          placeholder={['开始时间', '结束时间']}
          value={selectedDate}
          disabled={
            selectedDateType === DateType.Latest7Days ||
            selectedDateType === DateType.Latest30Days
          }
          disabledDate={current => current > moment().endOf('day')}
          onChange={v => setSelectedDate(v)}
        />
      </div>
    </div>
  )
}

export default MarketingCard
