import moment from 'moment'

export const enum DataType {
  LikeCount = 'like_count',
  CommentCount = 'comment_count',
  CasesPublishedCount = 'cases_published_count',
  FansCount = 'fans_count',
  Influence = 'influence',
}

export const DataTypeLabel = {
  [DataType.LikeCount]: '点赞数',
  [DataType.CommentCount]: '评论数',
  [DataType.CasesPublishedCount]: '发布案例数',
  [DataType.FansCount]: '粉丝数',
  [DataType.Influence]: '影响力',
}

export const enum NavType {
  Marketing = 'marketing',
  Cases = 'cases',
}

export const NavTypeLabel = {
  [NavType.Marketing]: '营销广场',
  [NavType.Cases]: '案例广场',
}

export const enum DateType {
  Latest7Days = 'latest_7_days',
  Latest30Days = 'latest_30_days',
  Customize = ' customize',
}

export const DateTypeLabel = {
  [DateType.Latest7Days]: '近 7 日',
  [DateType.Latest30Days]: '近 30 日',
  [DateType.Customize]: '自定义',
}

export const DATE = {
  LATEST_7_DAYS: [moment().subtract(7, 'day'), moment()],
  LATEST_30_DAYS: [moment().subtract(30, 'day'), moment()],
}

export const enum Status {
  Online = 'online',
  Preparing = 'preparing',
}

export const StatusLabel = {
  [Status.Online]: '已上线',
  [Status.Preparing]: '准备中',
}
