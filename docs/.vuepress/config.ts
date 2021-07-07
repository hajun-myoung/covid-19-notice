import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'ko-KR',
  title: '동두천시 코로나19 선별진료소 이용안내',
  description: '동두천시 코로나19 선별진료소 및 관련업무를 안내드리는 페이지입니다.',
  base: '/covid-19-notice/',
  dest: './dist',

  themeConfig: {
    logo: './image/logo.png',
    lastUpdated: true,
    contributors: false,
    home: '/',
    notFound: ['없는 페이지입니다.'],
    backToHome: '홈 화면으로',

    navbar: [
      {
        text: '코로나19 선별진료',
        link: '/covid-19/'
      },
      {
        text: '기타 안내',
        link: '/other/'
      },
    ],

    sidebar: {

      // 가이드
      '/guide/': [
          {
              text: '페이지 열람 방법',
              children: [
                'README.md',
              ]
          }
      ],

      // 코로나19 선별진료 관련 안내
      '/covid-19/': [
        {
          text: '코로나19 선별진료 안내',
          children: [
            'README.md',
          ],
        },
      ],

      // 기타사항 안내
      '/other/': [
        {
          text: '기타 안내',
          children: [
            'README.md',
          ],
        },
      ],

    },
  },

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '여기서 검색',
          },
        },
      },
    ],
  ],
})