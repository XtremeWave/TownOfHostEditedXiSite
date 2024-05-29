import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({

  lang: 'zh-cn',

  head: [['link', { rel: 'icon', href: 'https://cn-sy1.rains3.com/xtremewave/XtremeWave.png' }]],

  title: 'TownOfHostEditedXi',
  description: '为继承TOHE而衍生的分支',

  theme: defaultTheme({
    logo: null,

    navbar: [
      {
        text: '首页',
        link: '/'
      }
    ],
  }),

  bundler: viteBundler(),
})
