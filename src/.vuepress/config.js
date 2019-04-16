module.exports = {
  dest: 'docs',
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: '萤火钱包文档',
      description: '萤火钱包文档网站'
    },
    '/en/': {
      lang: 'en-US',
      title: 'FireFly Doc',
      description: 'firefly wallet doc website'
    }
  },

  themeConfig: {
    repo: 'fchainio/fireflydoc',
    editLinks: true,
    docsDir: 'src',
    locales: {
      '/': {
        lang: 'zh-CN',
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/guide/': guideSideBar('指南'),
          '/jsapi/': jsAPISideBar('JS API'),
          '/urlschema/': urlSchemaSideBar('URL Schema'),
          '/stellar/': stellarSideBar('恒星基础知识')
        }
      },
      '/en/': {
        lang: 'en-US',
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': guideSideBar('Guide'),
          '/jsapi/': jsAPISideBar('JS API'),
          '/urlschema/': urlSchemaSideBar('URL Schema'),
          '/stellar/': stellarSideBar('Stellar')
        }
      }
    },

  }

}


function guideSideBar(title){
  return [
    {
      title: title,
      collapsable: false,
      children: [
        '',
        'example'
      ]
    }
  ]
}

function jsAPISideBar(title){
  return [
    {
      title: title,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}

function urlSchemaSideBar (title) {
  return [
    {
      title: title,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}

function stellarSideBar (title) {
  return [
    {
      title: title,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}