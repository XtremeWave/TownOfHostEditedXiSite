import comp from "/root/vuepress-tohex/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-cn\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://cn-sy1.rains3.com/xtremewave/TOHEX-BG.jpg\",\"externalLinkIcon\":false,\"actions\":[{\"text\":\"前往XtremeWave官方网站\",\"link\":\"https://www.xtreme.net.cn\",\"type\":\"primary\"},{\"text\":\"前往TONEX官方网站\",\"link\":\"https://tonex.cc\",\"type\":\"secondary\"}],\"footer\":\"Copyright © 2023-2024 Team-TOHEX\"},\"headers\":[{\"level\":3,\"title\":\"各位TownOfHostEditedXi的玩家们，祝您早上中午晚上好！\",\"slug\":\"各位townofhosteditedxi的玩家们-祝您早上中午晚上好\",\"link\":\"#各位townofhosteditedxi的玩家们-祝您早上中午晚上好\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
