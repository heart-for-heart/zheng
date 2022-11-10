import moment from 'moment'

import { Status } from '@/constants/marketingCasesManagement'
import { DataCount, UserInfo } from '@/types/marketingCasesManagement'
import { DISPLAY_TIME_FULL_FORMAT } from '@/utils/date'

export const USER_INFO: UserInfo = {
  pic: 'https://media.kezaihui.com/temp/7ff8d148051f461ead5891ea99de7450.jpeg',
  name: 'Charlotte',
  email: 'Jiang@kezaihui.com',
}

export const DATA_COUNT: DataCount = {
  likeCount: 66,
  commentCount: 23,
  casesPublishedCount: 9,
  fansCount: 128,
  influence: 1289,
}

export const SHOWING_DATA = [
  {
    time: moment().format(DISPLAY_TIME_FULL_FORMAT),
    title: '这是自动营销：12345',
    content: '嘻嘻嘻嘻嘻嘻',
    businessGroup: '惠吧烤鱼',
    business: '海亮大厦',
    coupon: '叮叮当',
    status: Status.Online,
  },
  {
    time: moment().format(DISPLAY_TIME_FULL_FORMAT),
    title: '这是自动营销：12345',
    content: '嘻嘻嘻嘻嘻嘻',
    businessGroup: '惠吧烤鱼',
    business: '海亮大厦',
    coupon: '叮叮当',
    status: Status.Online,
  },
  {
    time: moment().format(DISPLAY_TIME_FULL_FORMAT),
    title: '这是自动营销：12345',
    content: '嘻嘻嘻嘻嘻嘻',
    businessGroup: '惠吧烤鱼',
    business: '海亮大厦',
    coupon: '叮叮当',
    status: Status.Preparing,
  },
  {
    time: moment().format(DISPLAY_TIME_FULL_FORMAT),
    title: '这是自动营销：12345',
    content: '嘻嘻嘻嘻嘻嘻',
    businessGroup: '惠吧烤鱼',
    business: '海亮大厦',
    coupon: '叮叮当',
    status: Status.Online,
  },
  {
    time: moment().format(DISPLAY_TIME_FULL_FORMAT),
    title: '这是自动营销：12345',
    content: '嘻嘻嘻嘻嘻嘻',
    businessGroup: '惠吧烤鱼',
    business: '海亮大厦',
    coupon: '叮叮当',
    status: Status.Online,
  },
  {
    time: moment().format(DISPLAY_TIME_FULL_FORMAT),
    title: '这是自动营销：12345',
    content: '嘻嘻嘻嘻嘻嘻',
    businessGroup: '惠吧烤鱼',
    business: '海亮大厦',
    coupon: '叮叮当',
    status: Status.Online,
  },
  {
    time: moment().format(DISPLAY_TIME_FULL_FORMAT),
    title: '这是自动营销：12345',
    content: '嘻嘻嘻嘻嘻嘻',
    businessGroup: '惠吧烤鱼',
    business: '海亮大厦',
    coupon: '叮叮当',
    status: Status.Online,
  },
]
