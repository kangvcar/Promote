import { siteConfig } from './lib/site-config'

export default siteConfig({
    // 站点的根Notion页面（必填）
    rootNotionPageId: 'ef82ec002961426aa8e94e4c9a8493d5',

    // 如果您要将页面限制为单个Notion工作区（可选）
    // （这应该是一个Notion ID；请参阅文档以了解如何提取此信息）
    rootNotionSpaceId: null,

    // 基本站点信息（必填）
    name: '康创护网研习社',
    domain: 'hwyxs.vercel.app',
    author: '康创护网研习社',

    // 社交媒体用户名（可选）
    description: '💋 一个为安全工程师量身打造的终极学习社区！ ',

    // social usernames (optional)
    // twitter: 'transitive_bs',
    github: 'hvvyxs',
    zhihu: 'kang-chuang-hu-wang-yan-xi-she',
    // linkedin: 'fisch2',
    // mastodon: '#', // 可选的mastodon档案网址，提供链接验证
    // newsletter: '#', // 可选的新闻通讯网址
    // youtube: '#', // 可选的YouTube频道名称或`channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

    // 站点范围内的默认Notion图标和封面图像（可选）
    // 页面特定的值将覆盖这些站点范围的默认值
    defaultPageIcon: null,
    defaultPageCover: null,
    defaultPageCoverPosition: 0.5,

    // 是否启用LQIP预览图像支持（可选）
    isPreviewImageSupportEnabled: true,

    // 是否为生成的预览图像启用缓存redis（可选）
    // 注意：如果启用redis，则需要设置`REDIS_HOST`和`REDIS_PASSWORD`
    // 环境变量。有关更多信息，请参见自述文件
    isRedisEnabled: true,

    // Notion页面ID到URL路径的映射（可选）
    // 此处定义的任何页面都将覆盖其默认URL路径
    // 示例：
    //
    // pageUrlOverrides: {
    //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
    //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
    // }
    pageUrlOverrides: null,

    // 是否使用默认的Notion导航样式或具有链接到重要页面的自定义导航样式
    // navigationStyle: 'default'
    navigationStyle: 'custom',
    navigationLinks: [
        {
            title: 'Archive',
            pageId: 'ac40a4e1076b4891b4ec8eb0db71c047'
        },
        {
            title: 'About',
            pageId: '2279cc415c53447890a27820e4c4df43'
        }
    ]
})
