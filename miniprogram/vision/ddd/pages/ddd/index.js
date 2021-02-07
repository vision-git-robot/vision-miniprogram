const mp = require('miniprogram-render')
const getBaseConfig = require('../base.js')
const config = require('../../config')

function init(window, document) {require('../../common/styles~ddd.js')(window, document);require('../../common/vendors~ddd.js')(window, document);require('../../common/ddd.js')(window, document)}

Page({
    ...getBaseConfig(mp, config, init),
    
    
    
})
