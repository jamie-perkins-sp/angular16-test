
const AngularCompilerPlugin = require('@ngtools/webpack');

module.exports = (config, options) => {
    /*  SCSS EXTEND */
    const scssRule = config.module.rules.find(x => x.test.toString().includes('scss'));
    // console.log('scssRule.rules', JSON.stringify(scssRule.rules));
    const postcssLoader = scssRule.rules[0].oneOf[0].use.find(x => x.loader.includes('postcss-loader'));
    // console.log('postcssLoader', JSON.stringify(postcssLoader));
    postcssLoader.options.plugins = { '@tailwindcss/postcss': {} };

    /*  HTML EXTEND */
    config.module.rules.unshift(
        {
            test: /\.html$/,
            use: [
                { loader: 'raw-loader' },
                {
                    loader: 'posthtml-loader',
                    options: {
                        config: {
                            path: './',
                            ctx: {
                                include: { ...options },
                                content: { ...options }
                            }
                        },
                    }
                },
            ]
        },
    );

    // console.log('config.plugins', JSON.stringify(config.plugins));
    // const index = config.plugins.findIndex(p => p instanceof AngularCompilerPlugin.AngularCompilerPlugin);
    // const oldOptions = config.plugins[index]._options;
    // oldOptions.directTemplateLoading = false;
    // config.plugins.splice(index);
    // config.plugins.push(new AngularCompilerPlugin.AngularCompilerPlugin(oldOptions));
    return config;
};
