// 全局mutations
const mutations = {

  //切换语言 后期需要
  switchLang(state, lang) {
    state.currentLang = lang
    Vue.config.lang = lang
    document.cookie = "VR_LANG=" + lang + "; path=/;domain=.snail.com"
    // location.reload()
  },

  //设置当前页面名字
  setPageName(state, name) {
    state.currentPageName = name
  },

  //当 search 组件全屏/非全屏时 切换公共头部状态
  toggleHeaderStatus(state, status) {
    state.headerStatus = status
  },

  //切换“微信”页中右上角菜单
  toggleTipsStatus(state, status) {
    if (status == -1) {
      state.tipsStatus = false
    } else {
      state.tipsStatus = !state.tipsStatus
    }
  },

}
export default mutations
