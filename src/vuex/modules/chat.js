import msglist from '../data/msglist' //存放消息列表的数据

const chat = {
  state: {
    newMsgCount: 0, //新消息数量
    msgList: msglist, //消息列表
    emojis: [ //emoji表情
      { file: '100.gif', code: '/::)', title: '微笑',reg:/\/::\)/g },
      { file: '101.gif', code: '/::~', title: '伤心',reg:/\/::~/g },
      { file: '102.gif', code: '/::B', title: '美女',reg:/\/::B/g },
      { file: '103.gif', code: '/::|', title: '发呆',reg:/\/::\|/g },
      { file: '104.gif', code: '/:8-)', title: '墨镜',reg:/\/:8-\)/g },
      { file: '105.gif', code: '/::<', title: '哭',reg:/\/::</g },
      { file: '106.gif', code: '/::$', title: '羞',reg:/\/::\$/g },
      { file: '107.gif', code: '/::X', title: '哑',reg:/\/::X/g },
      { file: '108.gif', code: '/::Z', title: '睡',reg:/\/::Z/g },
      { file: '109.gif', code: '/::\'(', title: '哭',reg:/\/::'\(/g },
      { file: '110.gif', code: '/::-|', title: '囧',reg:/\/::-\|/g },
      { file: '111.gif', code: '/::@', title: '怒',reg:/\/::@/g },
      { file: '112.gif', code: '/::P', title: '调皮',reg:/\/::P/g },
      { file: '113.gif', code: '/::D', title: '笑',reg:/\/::D/g },
      { file: '114.gif', code: '/::O', title: '惊讶',reg:/\/::O/g },
      { file: '115.gif', code: '/::(', title: '难过',reg:/\/::\(/g },
      { file: '116.gif', code: '/::+', title: '酷',reg:/\/::\+/g },
      { file: '117.gif', code: '/:--b', title: '汗',reg:/\/:--b/g },
      { file: '118.gif', code: '/::Q', title: '抓狂',reg:/\/::Q/g },
      { file: '119.gif', code: '/::T', title: '吐',reg:/\/::T/g },
      { file: '120.gif', code: '/:,@P', title: '笑',reg:/\/:,@P/g },
      { file: '121.gif', code: '/:,@-D', title: '快乐',reg:/\/:,@-D/g },
      { file: '122.gif', code: '/::d', title: '奇',reg:/\/::d/g },
      { file: '123.gif', code: '/:,@o', title: '傲' ,reg:/\/:,@o/g},
      { file: '124.gif', code: '/::g', title: '饿',reg:/\/::g/g },
      { file: '125.gif', code: '/:|-)', title: '累' ,reg:/\/:\|-\)/g},
      { file: '126.gif', code: '/::!', title: '吓',reg:/\/::!/g },
      { file: '127.gif', code: '/::L', title: '汗',reg:/\/::L/g },
      { file: '128.gif', code: '/::>', title: '高兴',reg:/\/::>/g },
      { file: '129.gif', code: '/::,@', title: '闲',reg:/\/::,@/g },
      { file: '130.gif', code: '/:,@f', title: '努力',reg:/\/:,@f/g },
      { file: '131.gif', code: '/::-S', title: '骂',reg:/\/::-S/g },
      { file: '133.gif', code: '/:,@x', title: '秘密',reg:/\/:,@x/g },
      { file: '134.gif', code: '/:,@@', title: '乱',reg:/\/:,@@/g },
      { file: '135.gif', code: '/::8', title: '疯',reg:/\/::8/g },
      { file: '136.gif', code: '/:,@!', title: '哀',reg:/\/:,@!/g },
      { file: '137.gif', code: '/:!!!', title: '鬼',reg:/\/:!!!/g },
      { file: '138.gif', code: '/:xx', title: '打击',reg:/\/:xx/g },
      { file: '139.gif', code: '/:bye', title: 'bye',reg:/\/:bye/g },
      { file: '142.gif', code: '/:handclap', title: '鼓掌',reg:/\/:handclap/g },
      { file: '145.gif', code: '/:<@', title: '什么',reg:/\/:<@/g },
      { file: '147.gif', code: '/::-O', title: '累',reg:/\/::-O/g },
      { file: '153.gif', code: '/:@x', title: '吓',reg:/\/:@x/g },
      { file: '155.gif', code: '/:pd', title: '刀',reg:/\/:pd/g },
      { file: '156.gif', code: '/:<W>', title: '水果',reg:/\/:<W>/g },
      { file: '157.gif', code: '/:beer', title: '酒',reg:/\/:beer/g },
      { file: '158.gif', code: '/:basketb', title: '篮球',reg:/\/:basketb/g },
      { file: '159.gif', code: '/:oo', title: '乒乓',reg:/\/:oo/g },
      { file: '160.gif', code: '/:coffee', title: '咖啡',reg:/\/:coffee/g },
      { file: '195.gif', code: '/:circle', title: '跳舞',reg:/\/:circle/g }
    ],
  },
  getters: {
    doneEmojis: state => { //emoji表情带上图片路径
      return state.emojis.map((item, index) => {
        item.file = require("@/assets/images/emoji/"+item.file)
        return item
      })
    }
  },
  mutations: {

    //增加未读消息数
    addNewMsg(state) {
      state.newMsgCount > 99 ? state.newMsgCount = "99+" : state.newMsgCount++
    },
    //减少未读消息数
    minusNewMsg(state) {
      state.newMsgCount < 1 ? state.newMsgCount = 0 : state.newMsgCount--
    },

    //将消息置顶 待完成
    setMsgStick(state, mid) {

    },
    //取消置顶消息 待完成
    cancelMsgStick(state, mid) {

    },

    //新增一条发送消息
    addMsg: (state, params) => {
      state.msgList.baseMsg.forEach(function(item, index) {
        if(item.mid == params.mid) {
          item.lastMsgDate = params.item.date
          item.lastMsgContent = params.item.content
          item.msg.push(params.item)
        }
      })
    },

    //设置聊天数据排序（降序）
    setMsgSort: (state, pro) => {
      state.msgList.baseMsg.sort((a,b) => {
        var value1 = a[pro];
        var value2 = b[pro];
        return value2 - value1;
      })
    },
  }
}

export default chat
