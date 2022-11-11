import moment from 'moment/moment'

import {
  DateType,
  MarketingType,
  Status,
} from '@/constants/marketingCasesManagement'
import { Case, DataCount, UserInfo } from '@/types/marketingCasesManagement'
import {
  DISPLAY_DATE_FULL_FORMAT,
  DISPLAY_TIME_FULL_FORMAT,
} from '@/utils/date'

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

export const categoryData = [
  {
    label: '火锅',
    key: '0-0',
    children: [
      { label: '川渝火锅', key: '0-0-0', isLeaf: true },
      { label: '云贵火锅', key: '0-0-1', isLeaf: true },
      { label: '老北京火锅', key: '0-0-2', isLeaf: true },
      { label: '港式火锅打边炉', key: '0-0-3', isLeaf: true },
      { label: '鱼火锅', key: '0-0-4', isLeaf: true },
      { label: '羊蝎子火锅', key: '0-0-5', isLeaf: true },
      { label: '小火锅', key: '0-0-6', isLeaf: true },
      { label: '潮汕火锅', key: '0-0-7', isLeaf: true },
      { label: '蛙类火锅', key: '0-0-8', isLeaf: true },
      { label: '其他火锅', key: '0-0-9', isLeaf: true },
    ],
  },
  {
    label: '快餐简餐',
    key: '0-1',
    children: [
      { label: '西式简餐', key: '0-1-0', isLeaf: true },
      { label: '日式简餐', key: '0-1-1', isLeaf: true },
      { label: '韩式简餐', key: '0-1-2', isLeaf: true },
      { label: '中式简餐', key: '0-1-3', isLeaf: true },
      { label: '麻辣烫冒菜', key: '0-1-4', isLeaf: true },
      { label: '饺子馄饨', key: '0-1-5', isLeaf: true },
      { label: '饼类', key: '0-1-6', isLeaf: true },
      { label: '米粉面馆', key: '0-1-7', isLeaf: true },
      { label: '汤类', key: '0-1-8', isLeaf: true },
      { label: '其他快餐', key: '0-1-9', isLeaf: true },
    ],
  },
  {
    label: '小吃',
    key: '0-2',
    children: [
      { label: '炸鸡炸串', key: '0-2-0', isLeaf: true },
      { label: '卤味类小吃', key: '0-2-1', isLeaf: true },
      { label: '铁板类小吃', key: '0-2-2', isLeaf: true },
      { label: '炒货类小吃', key: '0-2-3', isLeaf: true },
      { label: '冷串类小吃', key: '0-2-4', isLeaf: true },
      { label: '地方小吃', key: '0-2-5', isLeaf: true },
    ],
  },
  {
    label: '中式正餐',
    key: '0-3',
    children: [
      { label: '地方菜系', key: '0-3-0', isLeaf: true },
      { label: '海鲜', key: '0-3-1', isLeaf: true },
      { label: '特色菜', key: '0-3-2', isLeaf: true },
      { label: '香锅焖锅干锅', key: '0-3-3', isLeaf: true },
      { label: '烤鱼', key: '0-3-4', isLeaf: true },
      { label: '烧烤小龙虾', key: '0-3-5', isLeaf: true },
    ],
  },
  {
    label: '全球美食',
    key: '0-4',
    children: [
      { label: '东南亚菜', key: '0-4-0', isLeaf: true },
      { label: '西方料理', key: '0-4-1', isLeaf: true },
      { label: '中亚/中东菜', key: '0-4-2', isLeaf: true },
      { label: '日本料理', key: '0-4-3', isLeaf: true },
      { label: '韩国料理', key: '0-4-4', isLeaf: true },
    ],
  },
  {
    label: '甜点蛋糕',
    key: '0-5',
    children: [
      { label: '西式点心', key: '0-5-0', isLeaf: true },
      { label: '生日蛋糕', key: '0-5-1', isLeaf: true },
      { label: '中式糕点', key: '0-5-2', isLeaf: true },
      { label: '冰凉甜点', key: '0-5-3', isLeaf: true },
      { label: '水果捞', key: '0-5-4', isLeaf: true },
      { label: '其他甜点', key: '0-5-5', isLeaf: true },
    ],
  },
  {
    label: '饮品',
    key: '0-6',
    children: [
      { label: '其他饮品', key: '0-6-0', isLeaf: true },
      { label: '咖啡', key: '0-6-1', isLeaf: true },
      { label: '纯茶/凉茶', key: '0-6-2', isLeaf: true },
      { label: '奶茶果汁', key: '0-6-3', isLeaf: true },
    ],
  },
]

export const labelData = [
  '高客单价',
  '精准投放',
  '咖啡',
  '火锅',
  '拉新',
  '提高曝光',
  '日料',
]

export const hotCaseData = [
  {
    title: '上海-茶聚场 外卖运营成功案例',
    star: 89,
    isStar: true,
  },
  {
    title: 'PASTA咖啡门店评分显著改善 3.2分提升到4.8分',
    star: 80,
    isStar: false,
  },
  {
    title: '大连海鲜烧烤 运营1个月 客源暴增143.6%',
    star: 76,
    isStar: false,
  },
  {
    title: '隆江猪脚饭 外卖平台运营2个月 实收增加80%',
    star: 74,
    isStar: true,
  },
  {
    title: '黄焖鸡米饭 运营第2个月 营收翻倍提升',
    star: 70,
    isStar: true,
  },
  {
    title: '金足印象勇夺成华区美食热门榜第一',
    star: 50,
    isStar: true,
  },
]

export const SHOWING_DATA = [
  {
    dateType: DateType.Latest7Days,
    time: moment()
      .subtract(3, 'day')
      .add(1, 'hour')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: '🐷 软文营销： LET US GO PARTY!!!',
    content: '小资轰趴 凡消费满 1000 减 200',
    businessGroup: '叮当又见轰趴馆',
    business: '天府大道25号',
    coupon: '每满 1000 减 200',
    status: Status.Online,
    type: MarketingType.Article,
  },
  {
    dateType: DateType.Latest7Days,
    time: moment()
      .subtract(4, 'day')
      .add(3, 'hour')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: '🐻 软文营销： LET US GO PARTY!!!',
    content: '小资轰趴 凡消费满 1000 减 200',
    businessGroup: '叮当又见轰趴馆',
    business: '天府大道25号',
    coupon: '每满 1000 减 200',
    status: Status.Online,
    type: MarketingType.Article,
  },
  {
    time: moment()
      .subtract(5, 'day')
      .add(2, 'hour')
      .add(22, 'minute')
      .format(DISPLAY_DATE_FULL_FORMAT),

    dateType: DateType.Latest7Days,
    title: '🐝 自动营销： 每周四CRAZY THURSDAY',
    content: '德克士会员 小程序可领一张全场第二份半价优惠券',
    businessGroup: '麦当劳',
    business: '财富又一城分店',
    coupon: '全场第二份半价',
    status: Status.Online,
    type: MarketingType.Manual,
  },
  {
    dateType: DateType.Latest30Days,
    time: moment()
      .subtract(10, 'day')
      .add(1, 'hour')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: '🐱 一键导入： 每天都有好心情',
    content: '小资轰趴 凡消费满 1000 减 200',
    businessGroup: '叮当又见轰趴馆',
    business: '天府大道25号',
    coupon: '每满 1000 减 200',
    status: Status.Online,
    type: MarketingType.Import,
  },
  {
    dateType: DateType.Latest30Days,
    time: moment()
      .subtract(11, 'day')
      .add(3, 'hour')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: '🐶 软文营销： LET US GO PARTY!!!',
    content: '小资轰趴 凡消费满 1000 减 200',
    businessGroup: '叮当又见轰趴馆',
    business: '天府大道25号',
    coupon: '每满 1000 减 200',
    status: Status.Checking,
    type: MarketingType.Article,
  },
  {
    time: moment()
      .subtract(12, 'day')
      .add(2, 'hour')
      .add(22, 'minute')
      .format(DISPLAY_DATE_FULL_FORMAT),

    dateType: DateType.Latest30Days,
    title: '🐰 自动营销： 每周四CRAZY THURSDAY',
    content: '德克士会员 小程序可领一张全场第二份半价优惠券',
    businessGroup: '麦当劳',
    business: '财富又一城分店',
    coupon: '全场第二份半价',
    status: Status.Online,
    type: MarketingType.Manual,
  },
  {
    dateType: DateType.Latest30Days,
    time: moment()
      .subtract(13, 'day')
      .add(1, 'hour')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: '🐴 一键导入： 每天都有好心情',
    content: '小资轰趴 凡消费满 1000 减 200',
    businessGroup: '叮当又见轰趴馆',
    business: '天府大道25号',
    coupon: '每满 1000 减 200',
    status: Status.ToCheck,
    type: MarketingType.Import,
  },

  {
    dateType: DateType.Latest30Days,
    time: moment()
      .subtract(14, 'day')
      .add(2, 'hour')
      .add(22, 'minute')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: '🍉 自动营销： 每周四CRAZY THURSDAY',
    content: '德克士会员 小程序可领一张全场第二份半价优惠券',
    businessGroup: '麦当劳',
    business: '财富又一城分店',
    coupon: '全场第二份半价',
    status: Status.Online,
    type: MarketingType.Manual,
  },
  {
    dateType: DateType.Latest30Days,
    time: moment()
      .subtract(15, 'day')
      .add(1, 'hour')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: ' 一键导入： 每天都有好心情',
    content: '小资轰趴 凡消费满 1000 减 200',
    businessGroup: '叮当又见轰趴馆',
    business: '天府大道25号',
    coupon: '每满 1000 减 200',
    status: Status.Online,
    type: MarketingType.Import,
  },
  {
    dateType: DateType.Latest30Days,
    time: moment()
      .subtract(16, 'day')
      .add(3, 'hour')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: '🍇 软文营销： LET US GO PARTY!!!',
    content: '小资轰趴 凡消费满 1000 减 200',
    businessGroup: '叮当又见轰趴馆',
    business: '天府大道25号',
    coupon: '每满 1000 减 200',
    status: Status.Checking,
    type: MarketingType.Article,
  },
  {
    time: moment()
      .subtract(17, 'day')
      .add(2, 'hour')
      .add(22, 'minute')
      .format(DISPLAY_DATE_FULL_FORMAT),

    dateType: DateType.Latest30Days,
    title: '🌽 自动营销： 每周四CRAZY THURSDAY',
    content: '德克士会员 小程序可领一张全场第二份半价优惠券',
    businessGroup: '麦当劳',
    business: '财富又一城分店',
    coupon: '全场第二份半价',
    status: Status.Online,
    type: MarketingType.Manual,
  },
  {
    dateType: DateType.Latest30Days,
    time: moment()
      .subtract(18, 'day')
      .add(1, 'hour')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: '🐴 一键导入： 每天都有好心情',
    content: '小资轰趴 凡消费满 1000 减 200',
    businessGroup: '叮当又见轰趴馆',
    business: '天府大道25号',
    coupon: '每满 1000 减 200',
    status: Status.ToCheck,
    type: MarketingType.Import,
  },
  {
    dateType: DateType.Latest30Days,
    time: moment()
      .subtract(19, 'day')
      .add(3, 'hour')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: '🍊 软文营销： LET US GO PARTY!!!',
    content: '小资轰趴 凡消费满 1000 减 200',
    businessGroup: '叮当又见轰趴馆',
    business: '天府大道25号',
    coupon: '每满 1000 减 200',
    status: Status.Online,
    type: MarketingType.Article,
  },
  {
    time: moment()
      .subtract(23, 'day')
      .add(2, 'hour')
      .add(22, 'minute')
      .format(DISPLAY_DATE_FULL_FORMAT),

    dateType: DateType.Latest30Days,
    title: '🍓 自动营销： 每周四CRAZY THURSDAY',
    content: '德克士会员 小程序可领一张全场第二份半价优惠券',
    businessGroup: '麦当劳',
    business: '财富又一城分店',
    coupon: '全场第二份半价',
    status: Status.ToCheck,
    type: MarketingType.Manual,
  },
  {
    dateType: DateType.Latest30Days,
    time: moment()
      .subtract(24, 'day')
      .add(1, 'hour')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: '🌹 一键导入： 每天都有好心情',
    content: '小资轰趴 凡消费满 1000 减 200',
    businessGroup: '叮当又见轰趴馆',
    business: '天府大道25号',
    coupon: '每满 1000 减 200',
    status: Status.Online,
    type: MarketingType.Import,
  },
  {
    dateType: DateType.Latest30Days,
    time: moment()
      .subtract(25, 'day')
      .add(3, 'hour')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: '💻 软文营销： LET US GO PARTY!!!',
    content: '小资轰趴 凡消费满 1000 减 200',
    businessGroup: '叮当又见轰趴馆',
    business: '天府大道25号',
    coupon: '每满 1000 减 200',
    status: Status.Checking,
    type: MarketingType.Article,
  },
  {
    time: moment()
      .subtract(26, 'day')
      .add(2, 'hour')
      .add(22, 'minute')
      .format(DISPLAY_DATE_FULL_FORMAT),

    dateType: DateType.Latest30Days,
    title: '🦋 自动营销： 每周四CRAZY THURSDAY',
    content: '德克士会员 小程序可领一张全场第二份半价优惠券',
    businessGroup: '麦当劳',
    business: '财富又一城分店',
    coupon: '全场第二份半价',
    status: Status.Checking,
    type: MarketingType.Manual,
  },
  {
    dateType: DateType.Latest30Days,
    time: moment()
      .subtract(27, 'day')
      .add(1, 'hour')
      .format(DISPLAY_DATE_FULL_FORMAT),
    title: '🐂 一键导入： 每天都有好心情',
    content: '小资轰趴 凡消费满 1000 减 200',
    businessGroup: '叮当又见轰趴馆',
    business: '天府大道25号',
    coupon: '每满 1000 减 200',
    status: Status.ToCheck,
    type: MarketingType.Import,
  },
]

export const CASES_DATA: Case[] = [
  {
    accountName: '火锅不辣',
    title: '赛百味疯狂星期四',
    content:
      '还是分手了 ，谢谢大家。我们最终和平分手，其实从朋友到恋人我们发生了挺多事情，能走到一起也是很不容易。我喜欢你，很喜欢你，也想和你幼稚。对啊，我总问我自己为什么还能坚持，可能没有答案，我没有备胎，也不玩暧昧，我所有的脾气爱笑爱哭都给了你，我能为你做的最后一件事竟然是走出你的人生。我一点都不后悔，更谢谢你教会我成长。 我也不知道这是谁写的，挺感动的我就复制下来了，看到这里说明你很在乎我，能v我80请我吃一顿疯狂星期四的套餐吗？',
    tagList: ['疯狂星期四', '炸鸡', '爆款'],
    like: 336,
    comment: 999,
  },
]
