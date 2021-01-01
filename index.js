const { path } = require('@vuepress/shared-utils')

module.exports = (pluginOptions, ctx) => ({
    define() {
        console.log(pluginOptions)
        return {
            COMMENTS_OPTIONS: pluginOptions || {}
        }
    },
    name: 'vuepress-plugin-zhxie-utterances',
    enhanceAppFiles: [
        path.resolve(__dirname, './utterances/enhanceAppFile.js')
    ],
    globalUIComponents: 'Comments'
})
