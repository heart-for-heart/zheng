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
