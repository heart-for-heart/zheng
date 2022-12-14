import { NavType } from '@/constants/marketingCasesManagement'

export interface UserInfo {
  pic: string
  name: string
  email: string
}

export interface DataCount {
  likeCount: number
  commentCount: number
  casesPublishedCount: number
  fansCount: number
  influence: number
}

export interface Nav {
  label: string
  value: NavType
}

export interface Case {
  accountName: string
  title: string
  content: string
  tagList: string[]
  like: number
  comment: number
}
