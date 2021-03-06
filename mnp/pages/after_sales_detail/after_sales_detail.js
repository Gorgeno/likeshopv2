// +----------------------------------------------------------------------
// | LikeShop100%开源免费商用电商系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | Gitee下载：https://gitee.com/likemarket/likeshopv2
// | 访问官网：https://www.likemarket.net
// | 访问社区：https://home.likemarket.net
// | 访问手册：http://doc.likemarket.net
// | 微信公众号：好象科技
// | 好象科技开发团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | Author: LikeShopTeam
// +----------------------------------------------------------------------
import {afterSaleDetail, cancelApply} from "../../api/user"
import { Tips, trottle } from "../../utils/util";
import event from "../../utils/events"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: {},
    reason: [],
    lists: {},
    copyContent: "",
    confirmDialog: false
  },

  onCopy() {
    let {lists, copyContent} = this.data;
    let {address} = lists.shop;
    copyContent = address
		wx.setClipboardData({
			data: copyContent
		})
	},

  goRefund(e) {
    let {lists} = this.data
    wx.navigateTo({
      url: '/pages/apply_refund/apply_refund?order_id=' + this.orderId + '&afterSaleId=' + this.afterSaleId + '&item_id=' + lists.order_goods.item_id,
    })
  },

  showDialog() {
    this.setData({
      confirmDialog: true
    })
  },

  hideDialog() {
    this.setData({
      confirmDialog: false,
    })
  },

  confirmCancel() {

  },

  $cancelApply() {
    cancelApply({id: this.afterSaleId}).then(res => {
      if(res.code == 1) {
        Tips({title: res.msg}, {tab: 5, url: '/pages/post_sale/post_sale'});
        event.emit('RESET_LIST');
       
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {afterSaleId, order_id} = options;
    this.afterSaleId = afterSaleId
    this.orderId = order_id
  },

  $afterSaleDetail() {
    afterSaleDetail({id: this.afterSaleId}).then(res => {
      if(res.code == 1) {
        this.setData({
          lists: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.$afterSaleDetail()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})