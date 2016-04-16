module.exports = function(){
     var tmp = './.tmp/';

    var config = {
        allJs: './app/**/*.js',
        js: ['./app/**/*.module.js', './app/**/*.js'],
        templateIndex: './index.template.html',
        index: './index.html',
        less: './app/**/*.less',
        css: tmp + '*.css',
        tmp: tmp
    };
    return config;
};
