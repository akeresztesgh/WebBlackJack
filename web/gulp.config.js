module.exports = function(){
     var tmp = './.tmp/';

    var config = {
        allJs: './app/**/*.js',
        appJs: './app/app.module.js',
        jsModules: ['./app/**/*.module.js', '!./app/app.module.js'],
        normalJs: ['./app/**/*.js', '!./app/**/*.module.js', '!./app/app.module.js'],
        templateIndex: './index.template.html',
        index: './index.html',
        less: './app/app.less',
        css: tmp + '*.css',
        tmp: tmp
    };
    return config;
};
