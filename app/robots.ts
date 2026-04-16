import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/private/'],
            },
            {
                // GPTBot等のAIクローラーに対してコンテンツを読ませたい場合は allow 
                // 今回は認知拡大のため許可（llms.txtが存在するため）
                userAgent: 'GPTBot',
                allow: '/',
            }
        ],
        sitemap: 'https://ztex-japan.com/sitemap.xml',
    }
}
