import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/covid-19-notice/',
  dest: './dist',

  // in head section, setting favicon
  head:[
    ['link', { rel : "apple-touch-icon", sizes : "57x57", href : "./favicon/apple-icon-57x57.png"}],
    ['link', { rel : "apple-touch-icon", sizes : "60x60", href : "./favicon/apple-icon-60x60.png"}],
    ['link', { rel : "apple-touch-icon", sizes : "72x72", href : "./favicon/apple-icon-72x72.png"}],
    ['link', { rel : "apple-touch-icon", sizes : "76x76", href : "./favicon/apple-icon-76x76.png"}],
    ['link', { rel : "apple-touch-icon", sizes : "114x114", href : "./favicon/apple-icon-114x114.png"}],
    ['link', { rel : "apple-touch-icon", sizes : "120x120", href : "./favicon/apple-icon-120x120.png"}],
    ['link', { rel : "apple-touch-icon", sizes : "144x144", href : "./favicon/apple-icon-144x144.png"}],
    ['link', { rel : "apple-touch-icon", sizes : "152x152", href : "./favicon/apple-icon-152x152.png"}],
    ['link', { rel : "apple-touch-icon", sizes : "180x180", href : "./favicon/apple-icon-180x180.png"}],
    ['link', { rel : "icon", type : "image/png", sizes : "192x192",  href : "./favicon/android-icon-192x192.png"}],
    ['link', { rel : "icon", type : "image/png", sizes : "32x32", href : "./favicon/favicon-32x32.png"}],
    ['link', { rel : "icon", type : "image/png", sizes : "96x96", href : "./favicon/favicon-96x96.png"}],
    ['link', { rel : "icon", type : "image/png", sizes : "16x16", href : "./favicon/favicon-16x16.png"}],
    ['link', { rel : "manifest", href : "./favicon/manifest.json"}],
    ['meta', { name : "msapplication-TileColor", content : "#ffffff"}],
    ['meta', { name : "msapplication-TileImage", content : "/ms-icon-144x144.png"}],
    ['meta', { name : "theme-color", content : "#ffffff"}],
  ],

  locales: {
    '/': {
      lang: 'ko-KR',
      title: '동두천시 코로나19 선별진료소 이용안내',
      description: '동두천시 코로나19 선별진료소 및 보건소 관련업무를 안내드리는 페이지입니다.',
    },
    '/en/':{
      lang: 'en-US',
      title: 'NOTICE for DDC COVID-19 TRIAGE BOOTH',
      description: "This is a page for notice DongDuCheon-si COVID-19 triage booth and health care center's business",
    },
    '/es/':{
      lang: 'es-ES',
      title: 'NOTICE de Booth TRIAGE DDC COVID-19',
      description: "Esta es una página para notificar la empresa del centro de atención de salud y la cabina de triaje DongDuCheon-si COVID-19",
    },
  },

  themeConfig: {
    locales:{
      '/': {
        selectLanguageName : '한글',

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
                    'contact.md',
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
                'dementia-center.md',
                'oral-health-care.md',
                'health-certification.md',
                'various-rental-service.md',
              ],
            },
          ],
    
        },
      },
      
      '/en/': {
        selectLanguageName : 'English',

        logo: './image/logo-en.png',
        lastUpdated: true,
        contributors: false,
        home: '/en/',
        notFound: ["I'm sorry, This page doesn't exist."],
        backToHome: 'Back to the home →',

        navbar: [
          {
            text: 'COVID-19 Triage',
            link: '/en/covid-19/'
          },
          {
            text: 'Other notice',
            link: '/en/other/'
          },
        ],
    
        sidebar: {
          // 가이드
          '/en/guide/': [
              {
                  text: 'How to use this page',
                  children: [
                    'README.md',
                    'contact.md',
                  ]
              }
          ],
    
          // 코로나19 선별진료 관련 안내
          '/en/covid-19/': [
            {
              text: 'COVID-19 Triage',
              children: [
                'README.md',
              ],
            },
          ],
    
          // 기타사항 안내
          '/en/other/': [
            {
              text: 'Other notice',
              children: [
                'README.md',
                'dementia-center.md',
                'oral-health-care.md',
                'health-certification.md',
                'various-rental-service.md',
              ],
            },
          ],
    
        },
      },
      
      '/es/': {
        selectLanguageName : 'Espagnol',

        logo: './image/logo-es.png',
        lastUpdated: true,
        contributors: false,
        home: '/es/',
        notFound: ["Lo siento, esa página no existe."],
        backToHome: 'De vuelta a la casa →',

        navbar: [
          {
            text: 'Trujamiento COVID-19',
            link: '/es/covid-19/'
          },
          {
            text: 'Otra noticia',
            link: '/es/other/'
          },
        ],
    
        sidebar: {
          // 가이드
          '/es/guide/': [
              {
                  text: 'Cómo usar esta página',
                  children: [
                    'README.md',
                    'contact.md',
                  ]
              }
          ],
    
          // 코로나19 선별진료 관련 안내
          '/es/covid-19/': [
            {
              text: 'Trujamiento COVID-19',
              children: [
                'README.md',
              ],
            },
          ],
    
          // 기타사항 안내
          '/es/other/': [
            {
              text: 'Otra noticia',
              children: [
                'README.md',
                'dementia-center.md',
                'oral-health-care.md',
                'health-certification.md',
                'various-rental-service.md',
              ],
            },
          ],
    
        },
      },
      
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
          '/en/': {
            placeholder: 'Search here',
          },
          '/es/': {
            placeholder: 'Busca aquí',
          },
        },
      },
    ],
  ],
})