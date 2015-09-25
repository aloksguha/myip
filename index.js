/**
 * Created by alokguha on 25/09/15.
 */
'use strict'
var ni = require('os').networkInterfaces();
module.exports = {
    getLocalIP4: function() {
        for(var index in ni.en4){
            if(ni.en4[index].family === 'IPv4'){
                return ni.en4[index].address;
            }
        }
    },
    getLocalIP6: function() {
        for(var index in ni.en4){
            if(ni.en4[index].family === 'IPv6'){
                return ni.en4[index].address;
            }
        }
    }
};


