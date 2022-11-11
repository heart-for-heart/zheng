import { DatePicker, Popover, Select, Timeline } from 'antd'
import cx from 'classnames'
import moment from 'moment'
import React, { useState } from 'react'

import {
  DataType,
  DATE,
  DateType,
  DateTypeLabel,
  Status,
  StatusLabel,
} from '@/constants/marketingCasesManagement'
import { DISPLAY_DATE_FORMAT } from '@/utils/date'
import { SHOWING_DATA } from '@/pages/mock'

const { Option } = Select
const { Item } = Timeline

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

const StatusOptions = [
  {
    label: StatusLabel[Status.Online],
    key: Status.Online,
  },
  {
    label: StatusLabel[Status.Preparing],
    key: Status.Preparing,
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
      <div className='search-part'>
        <Select
          style={{ width: 95, marginRight: 15 }}
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
        <Select
          style={{ width: 95, marginLeft: 15 }}
          defaultValue={Status.Online}
        >
          {StatusOptions.map(opt => (
            <Option key={opt.key} value={opt.key}>
              {opt.label}
            </Option>
          ))}
        </Select>
      </div>
      <div className='showing-part'>
        <div className='showing-part-container'>
          <Timeline className='showing-part-timeline' mode='left'>
            {SHOWING_DATA.map((data, i) => (
              <Item label={data.time} key={i}>
                <div className='showing-part-timeline-item'>
                  <div className='timeline-item-container'>
                    <div className='title'>{data.title}</div>
                    <div className='content'>{data.content}</div>
                    <div className='big-container'>
                      <div
                        className='small-container'
                        style={{ marginRight: 30 }}
                      >
                        <div className='business-group'>
                          商户：{data.businessGroup}
                        </div>
                        <div className='coupon'>优惠券：{data.coupon}</div>
                      </div>
                      <div className='small-container'>
                        <div className='business'>门店：{data.business}</div>
                        <div className='status'>
                          状态：
                          <span
                            className={cx({
                              online: data.status === Status.Online,
                              prepare: data.status === Status.Preparing,
                            })}
                          >
                            {StatusLabel[data.status]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Item>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  )
}

export default MarketingCard
