'use strict';

var processInclude = require('base/util');

const item=document.getElementById("redireccion");
const customAttributes=item.dataset;
const url = customAttributes.url.toString();
const time = customAttributes.time;
const seconds = time *1000;


$(document).ready(function () {
    // setTimeout(() => {
    //     // var path =window.location.protocol + "//" + window.location.host + url;
    //     window.location = url;
    // }, seconds);
    console.log('Hi-Prueba');
    processInclude(require('base/product/quickView'));
})