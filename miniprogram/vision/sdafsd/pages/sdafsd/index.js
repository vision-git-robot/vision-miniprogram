const mp = require('miniprogram-render')
const getBaseConfig = require('../base.js')
const config = require('../../config')

function init(window, document) {require('../../common/styles~sdafsd.js')(window, document);require('../../common/vendors~sdafsd.js')(window, document);require('../../common/sdafsd.js')(window, document)}

Page({
    ...getBaseConfig(mp, config, init),
    
    
    
})
