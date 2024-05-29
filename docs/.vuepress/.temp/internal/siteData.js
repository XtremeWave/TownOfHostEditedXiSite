export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-cn\",\"title\":\"TownOfHostEditedXi\",\"description\":\"为继承TOHE而衍生的分支\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://cn-sy1.rains3.com/xtremewave/XtremeWave.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
