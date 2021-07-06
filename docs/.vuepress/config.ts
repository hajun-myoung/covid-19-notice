import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'ko-KR',
  title: '동두천시 코로나19 선별진료소 이용안내',
  description: '동두천시 코로나19 선별진료소 및 관련업무를 안내드리는 페이지입니다.',

  themeConfig: {
    logo: './image/logo.png',
  },
})