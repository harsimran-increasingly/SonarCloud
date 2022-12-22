
function generateRandomString(bits1) {
    return (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15) + (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15);
}
function getCurrentFormattedTime() {
    let d = new Date();
    return (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
}

function getVisitorId() {
    function generateUniqueINCVisitorId(len, bits) {
        let bits1 = bits || 36;
        let outStr = "";
        let newStr;
        while (outStr.length < len) {
            newStr = generateRandomString(bits1).toString().slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr;
    }
    let clientdomain = window.location.host
    let arr = clientdomain.split(".");
    let d = new Date();
    let expires = "expires=" + d.toUTCString();
    let ivid = "";
    if(readCookie('ivid') != undefined){
        ivid = readCookie('ivid')
    }
    if (ivid.length == 0) {
        ivid = generateUniqueINCVisitorId(42, 16);
        arr.shift();
        clientdomain = arr.join(".");
        if(arr == 'com' || window.location.host.indexOf('www') == -1){
            clientdomain = window.location.host;
        }
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
    }else{
        arr.shift();
        clientdomain = arr.join(".");
        if(arr == 'com' || window.location.host.indexOf('www') == -1){
            clientdomain = window.location.host;
        }
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
    }
    return ivid;
}
getVisitorId()

function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let s of ca) {
        let c = s;
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    if (window.innerWidth < 1367 && window.innerWidth > 600) {
        document.querySelector('body').classList.add('safari_browser')
    } else if (window.innerWidth > 1367) {
        document.querySelector('body').classList.add('safari_browser_inc')
    }
}

if (readCookie('ivid') != null) {
    let cook_ids = readCookie("ivid");
    localStorage.setItem('inc_cookie', cook_ids);
    getCurrentFormattedTime()
}

if (window.location.host == 'www.thecakedecoratingcompany.co.uk' && window.location.href.indexOf("checkout/success") >= 0) {
    let conversion_pixel_flag = true;
    let optimisedtrack = "//optimizedby.increasingly.co"
    let client_id = '272'
    let products;
    let orderID = 0;
    let orderAmount = 0;
    let inctax = 0;
    let incship = 0;
    let curencyinc = "GBP"
    let couponcode=""
    let discountinc=0
    
    setTimeout(function(){
        try{
            setTimeout(function(){
                if(window.dataLayer != undefined){
                    for(let d=0;d<window.dataLayer.length;d++){
                    	if(window.dataLayer[d].currencyCode != undefined){
                    		curencyinc =  window.dataLayer[d].currencyCode;
                    	}
                        if(window.dataLayer[d].event == "purchase"){
                            if(window.dataLayer[d].ecommerce != undefined){
                                if(window.dataLayer[d].ecommerce.purchase != undefined){
                                    if(window.dataLayer[d].ecommerce.purchase.actionField != undefined){
                                        if(window.dataLayer[d].ecommerce.purchase.actionField.id != undefined){
                                            products = window.dataLayer[d].ecommerce.purchase.products;
                                            orderID = window.dataLayer[d].ecommerce.purchase.actionField.id;
                                            inctax = window.dataLayer[d].ecommerce.purchase.actionField.tax;
                                            incship = window.dataLayer[d].ecommerce.purchase.actionField.shipping;
                                            orderAmount = window.dataLayer[d].ecommerce.purchase.actionField.revenue;
                                            inctax = window.dataLayer[d].ecommerce.purchase.actionField.tax
                                            
                                            if(window.dataLayer[d].transactionDiscount != undefined){
                                            	discountinc = window.dataLayer[d].transactionDiscount;
                                            }
                                            if(window.dataLayer[d].transactionCoupon != undefined){
                                            	couponcode = window.dataLayer[d].transactionCoupon;
                                            }
                                            if (conversion_pixel_flag) {
                                                console.log("track conversion calling")
                                                trackConversion();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, 2000);
        }
        catch(er){
            console.log(er.stack)
        }

        function trackConversion() {
            try{
                conversion_pixel_flag = false
                let _incProductsInfo= ""; 
                let _ivid = "";
                    if (localStorage.getItem('inc_cookie') != null && localStorage.getItem('inc_cookie') != "" && localStorage.getItem('inc_cookie') != undefined) {
                    _ivid = localStorage.getItem('inc_cookie');
                    }

                    if (_ivid == null || _ivid == "" || _ivid == undefined) {
                    _ivid = readCookie('ivid');
                    } 

                if(products != undefined && products != null){ 
                    for (let prdetails of products) { 
                        if(prdetails.price != 0){
                            _incProductsInfo += "p1=" + prdetails.id + "&p2=" + prdetails.price + "&p3=" + prdetails.quantity + "&p4=" + prdetails.sku +"|"
                        }
                    }
                    _incProductsInfo = _incProductsInfo.replace(/\|$/, '');

                    let _incConvPixData = ''+optimisedtrack+'/track?CONVERSION_PIXEL/clientId='+client_id+'&orderId='+orderID+'&orderAmount='+orderAmount+'&orderStatus='+escape('complete')+'&currency='+curencyinc+'&discountAmount='+discountinc+'&transactionTax=' + inctax + '&transactionShipping=' + incship + '&couponCode='+couponcode+'&storeCode='+curencyinc+'&ivid='+_ivid+'&productsInfo='+escape(_incProductsInfo)+'&cb='+Math.floor(Math.random()*999999);
                        console.log("data -- " + _incConvPixData)
                    
                    let _incConvPixElm = document.createElement('img');
                    _incConvPixElm.setAttribute('border', '0');
                    _incConvPixElm.setAttribute('width', '1');
                    _incConvPixElm.setAttribute('height', '1');
                    _incConvPixElm.setAttribute('src',_incConvPixData);
                    _incConvPixElm.setAttribute('style','display:none');
                    let _incConvPixPlaceToSet = document.querySelector('body');
                    _incConvPixPlaceToSet.appendChild(_incConvPixElm);
                }
            } catch (err) {
                let formData = new FormData();
                formData.append("EmailId", "tech@increasingly.com");
                formData.append("Subject", 'Conversion pixel Error on The cake decorating');
                formData.append("Message", err.stack);
                let xhr = new XMLHttpRequest();
                xhr.open("POST", '//api.increasingly.co/SendEmail', true);
                xhr.send(formData);
            }
        }
    },3000);
}


function cookieopt_(){
    if(document.querySelector('#cookie_alert') != null){
        //cookie decline
        if(document.querySelector('#js-cookie_alert_button_decline') != null){
            let elcookedec=document.querySelector('#js-cookie_alert_button_decline')
            elcookedec.addEventListener("click", function () {
                console.log("User Declined Cookie");
                localStorage.setItem('cookie_dec', true)
                checkpagetype()
            })
        }

        //cookie accept
        if(document.querySelector('#cookie_alert').style.display != "none"){
            let elcookei=document.querySelector('#cookie_alert .button.cookie_alert__button')
            elcookei.addEventListener("click", function () {
                console.log("User Accepted Cookie");
                localStorage.setItem('cookie_dec', false)
                checkpagetype()
            })
        }else{
            checkpagetype()
        }
    }else{
        checkpagetype()
    } 
}

var cssfileload=false
function checkpagetype(){
    if (document.querySelector("#productWrapper") != null || document.querySelector(".body-basket") != null) {
        cssfileload = true;
    }

    function getCurrency() {
        let isUSD = false

        for (let i = 0; i < dataLayer.length; i++) {
            if (dataLayer[i].currencyCode == "GBP") {
                isUSD = true
            }
        }
        let t = document.querySelectorAll('meta')
        for (let i = 0; i < t.length; i++) {
            if (t[i].getAttribute("property") == 'og:price:currency') {
                if (t[i].getAttribute("content") == "GBP") {
                    isUSD = true
                }
            }
        }

        return isUSD
    }
    //var cookiedec = localStorage.getItem('cookie_dec');
    if (getCurrency()) {
        if(cssfileload && (readCookie('cookie_policy') == 'accepted' || readCookie('cookie_policy') == null)){
            if (document.querySelector("#inc_js_script") == null) {
                function addCSSFile() {
                    var cssFilePath = "https://www.increasingly.co/Implementation/272/css/c70k34o7s.css";
                    var linkTag = document.createElement('link');
                    linkTag.rel = "stylesheet";
                    linkTag.href = cssFilePath;
                    document.querySelector('head').appendChild(linkTag);
                }
                addCSSFile()
                var versionUpdate = (new Date()).getTime();
                var jsFilePath = "https://www.increasingly.co/Implementation/272/js/c70k34o7s.js"
                var scriptTag = document.createElement('script');
                scriptTag.type = 'text/javascript';
                scriptTag.id = "inc_js_script";
                scriptTag.src = jsFilePath;
                document.querySelector('body').appendChild(scriptTag);
            }
        }
    }
}
if(window.location.host == 'www.thecakedecoratingcompany.co.uk'){
    cookieopt_()
}