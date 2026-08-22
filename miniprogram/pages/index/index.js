const config = require('../../config.js')

Page({
  data: {
    url: '',
    status: '正在加载…',
    failed: false
  },

  onLoad() {
    const raw = (config.WEBVIEW_URL || '').trim()
    if (!raw || raw.indexOf('YOUR_DOMAIN_HERE') !== -1) {
      this.setData({
        url: '',
        failed: true,
        status: '请先在 miniprogram/config.js 中填写你部署好的站点 HTTPS 地址'
      })
      return
    }
    // 兜底：确保是 https
    const url = raw.indexOf('https://') === 0 ? raw : 'https://' + raw.replace(/^.*:\/\//, '')
    this.setData({ url })
  },

  onWebviewLoad() {
    this.setData({ status: '加载完成' })
  },

  onWebviewError(e) {
    const detail = (e && e.detail) ? e.detail : ''
    this.setData({
      failed: true,
      status: '网页加载失败：' + detail + '（请确认业务域名已配置且地址可访问）'
    })
  }
})
