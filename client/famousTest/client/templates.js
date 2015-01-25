(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof root === 'undefined' || root !== Object(root)) {
        throw new Error('templatizer: window does not exist or is not an object');
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function e(e){return null!=e&&""!==e}function n(t){return(Array.isArray(t)?t.map(n):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(e).join(" ")}var t={};return t.merge=function r(n,t){if(1===arguments.length){for(var a=n[0],i=1;i<n.length;i++)a=r(a,n[i]);return a}var o=n["class"],s=t["class"];(o||s)&&(o=o||[],s=s||[],Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]),n["class"]=o.concat(s).filter(e));for(var l in t)"class"!=l&&(n[l]=t[l]);return n},t.joinClasses=n,t.cls=function(e,r){for(var a=[],i=0;i<e.length;i++)a.push(r&&r[i]?t.escape(n([e[i]])):n(e[i]));var o=n(a);return o.length?' class="'+o+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,a){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(a?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,r){var a=[],i=Object.keys(e);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],l=e[s];"class"==s?(l=n(l))&&a.push(" "+s+'="'+l+'"'):a.push(t.attr(s,l,!1,r))}return a.join("")},t.escape=function(e){var n=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+e?e:n},t.rethrow=function a(e,n,t,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||r))throw e.message+=" on line "+t,e;try{r=r||require("fs").readFileSync(n,"utf8")}catch(i){a(e,null,t)}var o=3,s=r.split("\n"),l=Math.max(t-o,0),f=Math.min(s.length,t+o),o=s.slice(l,f).map(function(e,n){var r=n+l+1;return(r==t?"  > ":"    ")+r+"| "+e}).join("\n");throw e.path=n,e.message=(n||"Jade")+":"+t+"\n"+o+"\n\n"+e.message,e},t}();

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a href="/" class="navbar-brand">Dispense</a></div><!--ul.nav.navbar-nav--><!--  li--><!--      a(href="/") home--></div></nav><div class="container"><main data-hook="page-container"></main></div></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>';
    };

    // includes/code.jade compiled template
    templatizer["includes"]["code"] = function tmpl_includes_code() {
        return '<li class="code list-group-item container-fluid"><ul><li><a data-hook="code"></a></li><li><a data-hook="date"></a></li><li><a data-hook="representative"></a></li><li><a data-hook="chatOrTicket"></a></li><li><a data-hook="customerName"></a></li><li><a data-hook="customerEmail"></a></li><li><a data-hook="university"></a></li></ul></li>';
    };

    // includes/formInput.jade compiled template
    templatizer["includes"]["formInput"] = function tmpl_includes_formInput() {
        return '<div class="form-group"><label data-hook="label"></label><div data-hook="message-container"><div data-hook="message-text" class="alert alert-danger"></div></div><input class="form-control"/></div>';
    };

    // includes/product.jade compiled template
    templatizer["includes"]["product"] = function tmpl_includes_product() {
        return '<li class="product list-group-item container-fluid"><div data-hook="title"></div><div data-hook="isbn13" class="pull-right"></div></li>';
    };

    // pages/homeSearch.jade compiled template
    templatizer["pages"]["B_Home"] = function tmpl_pages_B_Home(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(container, message) {
            buf.push('<section class="page pageThree"><h4>Tell me what you\'re looking for...</h4><label><input data-hook="input" class="form-input"/><span data-hook~="label"></span><div' + jade.attr("data-hook~", message - container, true, false) + ' class="message message-below message-error"><p data-hook~="message-text"></p></div></label><ul data-hook="products-list" class="list-group"></ul></section>');
        }).call(this, "container" in locals_for_with ? locals_for_with.container : typeof container !== "undefined" ? container : undefined, "message" in locals_for_with ? locals_for_with.message : typeof message !== "undefined" ? message : undefined);
        return buf.join("");
    };

    // pages/codeReceived.jade compiled template
    templatizer["pages"]["codeReceived"] = function tmpl_pages_codeReceived() {
        return '<section class="page receivedCode"><h2>New Code:</h2><ul data-hook="code" class="list-group"></ul></section>';
    };

    // pages/requestCode.jade compiled template
    templatizer["pages"]["requestCode"] = function tmpl_pages_requestCode() {
        return '<section class="page request-code"><h4>Request Code for<h4 data-hook="title"></h4></h4><form data-hook="product-form"><fieldset data-hook="field-container"></fieldset><div class="buttons"><button data-hook="reset" type="submit" class="btn">Submit</button></div></form></section>';
    };

    return templatizer;
}));