
var INC = (typeof (INC) == "undefined") ? {} : INC;
var init_flag=true;
var init_fun_flag = true;
var init_irb_flag = true;
INC.ENV = "prod";
INC.debug = 0;
INC.initStatus = "";
INC.initStatusCP = "";
var prefix = "inc_";
var postfix = "_block";
var onloadpdp = false;
var item_inc = []
var blue_code_promo = ['174683', '185251', '199394', '199395', '153356', '114021', '209889', '112777', '153773', '220238', '147124', '220131', '147122', '220130', '112779', '220000', '147121', '220003', '147123', '112778', '220002', '147125']
var black_code_promo = ['161181', '199609', '169594', '169596', '169600', '169601', '147516', '169602', '169604', '147582', '153356', '119797', '185253', '185252', '153343', '143489', '170273', '176001', '205556', '177710', '177709', '177722', '182809', '175172', '210333', '190977', '190978', '168938', '160472', '160631', '205572', '185927', '530028', '155292', '210359', '193788', '193789', '193790', '193791', '193792', '193793', '193794', '193795', '193796', '193797', '149119', '214699', '132031', '223115', '114008', '223116', '161790']
var sidebar_configurator_id=['144346','144347','144348','144351','144352','144353','144337','144338','144339','231810','231811','231812','231813','231814','231815','231816','231817','231818','231819','231820','231821','225791','225792','225793','225795','225794','225796','225797','225798','225918','225919','231822','231823','231824','231825','225799','231826','225800','225890','225896','225907','225909','225910','225911','231827','231828','231829','231830','231831','225912','225913','225914','225915','225916','225917','161605','161607','161611','161609','161632','161627','161626','161630','161639','161637','161633','161641','161635','161599','161601','161603','161652','161654','161644','161648','161649','161645','229418','229417','161619','161613','161615','161617','161588','161591','161590','161589','161694','161697','161671','161665','229419','229420','161706','220807','220808','100407','229441','229442','229440','229421','229422','229423','161701','212346','212347','233739','233740','233741','233742','233743','233744','233745','233746','220651','209146','110119','161764','161766','161769','161771','229476','229477','229485','229614','229621','161716','161718','161722','161724','229478','229479','229616','229617','161728','161730','161732','161734','161738','161740','229618','229619','161744','161746','161748','161750','161754','161756','161758','161762','229622','229615','229481','229482','161775','229620','229480','114008','229594','229595','229596','229597','229598','229599','229592','229593','229483','229484','229486','229487','229488','229600','229601','229602','229603','229604','229605','229606','229607','229608','229609','229610','229611','229612','229613','230225','230230','229492','229493','229489','229490','229491','230231','229494','233334','233335','233336','233339','233340','233341','233342','233343','233344','233345','233346','233347','233434','107321','233350','233354','233355','233356','233357','233358','233359','233414','233415','233416','233417','233418','233419','233420','233421','233422','233423','233424','233425','233426','233427','233428','233429','233447','233448','233449','223115','223117','101123','161860','160445','160444','233430','233431','233432','233433','233489','234641','230352','234583','224495','224493','233337','233338','224497','224498','233351','233352','233353','230350','230349','230348','142276','224495','224493','233348','233349','230346','230347','233360','233361','233362','230345','230344','229576','107325','107326','209138','230354','230355','230356','230357','230358','224502','224501','101122','223116','223118','161861','161904','161863','120902','120903','120904','120905','120907','120912','120913','120914','120916','120960','120961','120962','120963','120964','120965','120966','120967','120968','120969','120970','120971','120972','120927','120928','120951','120952','120953','120954','120955','120956','120957','120958','120959','175766','175764','175765','225102','225103','225244','225245','225246','225247','225248','225249','225250','225251','225252','225253','225254','225255','225256','225257','225258','225259','225276','225277','225278','176063','233653','225284','225285','175752','225286','225287','225288','225289','175763','225294','175762','225295','175753','225296','175754','225297','233674','233675','176119','176120','176121','176122','233676','233677','233678','233679','233680','233681','233682','233683','233684','233685','230273','230274','230275','230276','230277','230278','230279','233647','230280','230281','230282','230283','230284','230285','230286','230287','230288','230289','230290','230291','230946','229314','229278','229285','229271','229288','229291','229294','229296','230910','131167','131237','167696','167700','131156','131179','167717','167729','167754','167750','131159','167806','233131','233140','233149','233158','229505','229506','229507','229508','229509','229510','229511','229512','229513','229514','229515','229516','231408','231359','231759','231760','231761','231762','231763','231764','231765','231766','231767','231768','231769','231770','231771','231772','231773','231774','231775','233490','232748','232747','142256','142255','143025','143026','142251','142254','142253','142243','142244','161552','161553','142245','142252','161554','161555','142246','142247','161556','161557','161558','161559','161560','142248','161561','142249','142250','161394','161390','161392','229375','229376','229377','229381','229384','229378','229382','229379','229385','229383','229380','229386','229387','231225','231227','231399','231228','231229','231230','231231','231615','231398','231233','231240','231241','231395','231242','231397','231234','231235','231236','231237','231238','231396','231244','231245','231246','231247','231250','231219','231248','231619','231249','231251','231220','231221','231222','231253','231223','231224','231667','231406','231620','231621','231622','231627','231628','231629','231632','231633','231655','231656','231239','231616','231355','231356','231357','231617','231243','232252','231623','231624','231625','231630','231631','231638','231639','231640','231641','231642','231643','231646','231647','231648','231649','231650','231651','231652','231653','231654','231404','231297','231298','231299','231403','231294','231292','231291','231295','231296','231293','161416','161414','161421','161422','230037','230042','140713','118505','100016','185035','185036','185037','147806','147805','185038','185039','185040','185041','185042','233984','233985','233986','233987','232456','233979','233978','144364','230927','230929','230930','230926','230940','230928','230931','230935','230936','230934','230933','230932','230938','230918','230919','230937','144362','144363','233968','233969','233970','233971','233972','233973','233974','233975','233976','233977','233967','233980','233981','233982','233983','233966','230038','230043','232451','232452','232453','232454','232455','232457','232458','232459','232460','185051','185049','185050','185051','185052','185055','185056','185053','185054','233965','233687','233688','233698','233696','233697','225787','225788','233693','233694','233695','233700','231847','231846','144359','144360','144361','231843','231841','231844','231845','231848','233689','231842','231849','233699','233690','233691','233692','225785','225786','230946','229314','229278','229285','229271','229288','229291','229294','229296','230910','131167','131237','167696','167700','131156','131179','167717','167729','167754','167750','131159','167806','233131','233140','233149','233158']


INC.checkDevUserCookie = function () {
    if (INC.ENV == "prod") {
        setTimeout(function () {
            INC.config.pageType = INC.methods.detectPageType();
            if(init_flag){
                init_flag=false;
                INC.init();
            }
        }, 200);
    }
}
var inc_scroll_height=100
var item_inc=[]
INC.clientConfig = {};
INC.clientConfig.currencySymbol = "";
// INC.clientConfig.currencySymbol = "$";
INC.clientConfig.productPage = {};
INC.clientConfig.productPage.pdpElementSelector = "";
INC.clientConfig.productPage.amElementSelector = "";
INC.clientConfig.productPage.sbElementSelector = "";
INC.clientConfig.productListPage = {};
INC.clientConfig.productListPage.sbElementSelector = "";
INC.clientConfig.cartPage = {};
INC.clientConfig.cartPage.amElementSelector = "";
INC.clientConfig.statusVAT = "";
INC.clientConfig.regularPricePrefix = "";
INC.clientConfig.checkoutLink = "https://www.wickes.co.uk/cart";
INC.clientConfig.loggedInUser = "";
INC.clientConfig.offset = 0;
INC.clientConfig.slidevalue = 0;
INC.config = {};
INC.config.deviceType = "";
INC.config.clientToken = "wKS8xz";
INC.config.trackingURL = "https://optimizedby.increasingly.co/ImportData";
INC.config.addToBasketURL = "https://www.wickes.co.uk/cart/add";
INC.config.click_collect_addToBasketURL = "https://www.wickes.co.uk/store-pickup/cart/add";
INC.config.affiliateURL = "";
INC.config.crawlDataObj = {};
INC.config.pageType = "";
INC.config.ivid = "";
INC.config.language = "en";
INC.config.clientOverlayInterval = "";
INC.config.conversionPixelFileStatus = "";
INC.config.deviceMode = "";
INC.config.pdpaddedProductList = [];
INC.config.stopImgOver = false;
INC.config.tout = null;
INC.config.plpstorebtnclick = null;
INC.config.empty_prod_details=[]
INC.config.inc_slideIndex = 1;
INC.config.quick_view=true;
INC.config.user_interaction_modal= true;
INC.config.close_modal_time= 0;
INC.config.configcount= 0;
INC.config.bundle_tracking=[];
INC.config.bundle_trackingPushed = []
INC.config.bundle_skuPushed = []
INC.config.Product_id = null;
INC.config.dupBasket = [];
INC.config.dupDataObjectProducts = [];
INC.clientConfig.OOS=[]
INC.config.dataObjcount=0;
INC.config.uniqeProduct = []
INC.config.DealProducts=[];
INC.config.disablebtn = true;
INC.config.plpProductId = ""
INC.config.upsell_added_sku=[];
INC.config.added_categories=[];
INC.config.upsell_all_sku=[];
INC.config.AssociatedProducts=[];
INC.config.clientbtn = false
INC.config.noimage = "https://www.increasingly.co/Implementation/wKS8xz_R/no_image.jpg"
INC.clientConfig.OOS_COL = []
INC.clientConfig.scroll_offset = 0
INC.clientConfig.OOS_MESG = [];
INC.clientConfig.added_product_sku = [];
var ProductArr = [];
INC.config.storeId = ""
INC.config.mainProductid = ""
INC.config.category_sequance = []
INC.config.category_seqId = []
INC.config.product_seq = []
INC.config.childlevelprod=[]
INC.config.FBTTitle = "Frequently bought together"
INC.config.AddText = "Add"
INC.config.AddedText = "Added"
INC.config.TotalText = "Total"
INC.config.AddToCartText = "Add to basket"
INC.config.ItemAddedToCarttext = "You Just Added"
INC.config.ExcItemAlreadyinCartText = "(excludes items already in basket)"
INC.config.NosText = "items"
INC.config.OtherCustAlsoBoughtText = "Don't forget your essential items"
INC.config.ContinueShopping = "Back"
INC.config.CartText = "View Basket"
INC.config.BeforeYouChecktext = "Other customers also bought"
INC.config.ViewDetailsText = "View Details"
INC.config.DescriptionText = "Description"
INC.config.SeeOtherProdText = "See other products"
INC.config.ColorSizeText="Overview"
INC.config.EditText="Edit"
INC.config.UpdateText="Update"
INC.config.addingText = "Adding"
INC.config.qtyText = "Qty:"
INC.config.addtocartsecondarytext = "Add to basket"
INC.config.srcImgeLazy = "https://www.increasingly.co/Implementation/wKS8xz_R/images/img_placeholder.gif";

if (window.location.host == "instore.wickes.co.uk") {
    INC.config.clientToken = "wKS8ist"
}

if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
    INC.config.clientToken = "wKS8apl"
    sidebar_configurator_id= [];
}

if (window.location.host == "instore.wickes.co.uk") {
    INC.clientConfig.checkoutLink = "https://instore.wickes.co.uk/cart";
    INC.config.addToBasketURL = "https://instore.wickes.co.uk/cart/add"
} else if (window.location.host == "www-cand1.dev.wickes.co.uk") {
    INC.clientConfig.checkoutLink = "https://www-cand1.dev.wickes.co.uk/cart";
    INC.config.addToBasketURL = "https://www-cand1.dev.wickes.co.uk/cart/add"
}

function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}

var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    },
    decode: function(e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function(e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function(e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
}

function isBase64(str) {
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function generate_html_tag(element, className) {
    var generateEl = document.createElement(element);
    className ? generateEl.classList.add(className) : null;
    return generateEl;
}

function sorting_data(json_object, key_to_sort_by) {
    function sortByKey(a, b) {
        var x = a[key_to_sort_by];
        var y = b[key_to_sort_by];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }

    json_object.sort(sortByKey);
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key],
            y = b[key];
        if (typeof x === 'string') {
            x = x.toLowerCase();
            y = y.toLowerCase();
            if (!isNaN(x) && !isNaN(y)) {
                x = parseInt(x, 10);
                y = parseInt(y, 10);
            }
        }
        return (x < y ? -1 : (x > y ? 1 : 0));
    });
}



INC.init = function(init_call) {
    if (init_fun_flag == true || init_call == "init_call") {
        
        if (document.querySelector('form input[name="storeNamePost"]') != null) {
            INC.config.storeId = document.querySelector('form input[name="storeNamePost"]').value
            localStorage.setItem('inc_storeId', INC.config.storeId)
        } else if (document.querySelector('.card-store-collect__actions input[name="storeNamePost"]') != null) {
            INC.config.storeId = document.querySelector('.card-store-collect__actions input[name="storeNamePost"]').value
            localStorage.setItem('inc_storeId', INC.config.storeId)
        } else if (document.querySelector('#collectionGroup script') != null) {
            var allcollectel = document.querySelectorAll('#collectionGroup script')
            for (c = 0; c < allcollectel.length; c++) {
                if (allcollectel[c].innerText.indexOf('pointOfServiceId') >= 0) {
                    INC.config.storeId = allcollectel[c].innerText.split('pointOfServiceId')[1].split('var')[0].trim().replace(';', '').replace('= \"', '').replace('"', '').replace('"', '')
                    break;
                    localStorage.setItem('inc_storeId', INC.config.storeId)
                }
            }
        }
        if (INC.config.storeId == "" && localStorage.getItem('inc_storeId') != undefined) {
            INC.config.storeId = localStorage.getItem('inc_storeId')
        } else {
            
            // INC.config.storeId = "8263"
        }
        init_fun_flag = false;
        INC.methods.addVisitorID();
        INC.config.deviceType = INC.methods.detectDeviceType();
        INC.config.pageType = INC.methods.detectPageType();
        INC.config.language = INC.methods.detectLanguage();
        INC.clientConfig.statusVAT = INC.methods.checkStatusVAT();
        INC.clientConfig.statusLoggedIn = INC.methods.checkStatusLoggedIn();
        INC.methods.clear();

        switch (INC.config.pageType) {
            case "pdp":
                
                setTimeout(function() {
                    var productId = INC.methods.getProductIdFromWebPage();
                   
                    if (init_irb_flag) {
                        init_irb_flag = false;
                        var isInStock = document.getElementsByClassName('schinstock');
                        // if (isInStock.length > 0) {
                        if (document.querySelector('.click_pickupInStore_Button') == null && document.querySelector('.btn-add-to-basket') == null) {

                        } else {
                            INC.methods.irbReq(productId, 5, "catalog_product_view");
                        }
                    }
                }, 0);

                break;
            case "cartPage":
                    setTimeout(function() {
                        var productIds = [];
                        Array.prototype.forEach.call(document.querySelectorAll('.order-line .product-code strong'), function(elProductCode) {
                            productIds.push(elProductCode.innerText.trim());
                        });
                        if (productIds.length > 0) {
                            INC.methods.irbReq(productIds[0], 12, "catalog_product_view");
                        }
                    }, 0);

                    break;
                
            case "homePage":
                    setTimeout(function() {
                        var productIds = [];
                        productIds.push('154100');
                        if (productIds.length > 0) {
                            INC.methods.irbReq(productIds[0], 12, "catalog_product_view");
                        }
                    }, 0);

                    break;
            case "productList":
                Array.prototype.forEach.call(document.querySelectorAll('button[id="add-to-cart"]'), function(elBtn) {

                    elBtn.addEventListener("click", function() {

                    });
                });
                break;
        }



    }
}

INC.dataStore = {};
INC.dataStore.methods = function () {
    var incDataStore = INC.dataStore;
    var dataStoreObj = {};

    function buildDataStoreObj(bundleResponse,configurator) {
        INC.config.dupDataObjectProducts=[]
        INC.config.uniqeProduct = []
        // var incDataStore = {};
        INC.dataStore.clientProductDealsCategory = "";
        var bundles = bundleResponse.Bundles;
        var productDealCount = 0;
        if (bundleResponse.ProductDeals != null) {
            bundleResponse.ProductDeals.forEach(function(productDealObj) {

                bundles.push({
                    BundleId: bundles[0]["BundleId"],
                    Products: [bundles[0].Products[0], productDealObj]
                });

                INC.dataStore.clientProductDealsCategory = productDealObj.CategoryId;
            });
        }


        var dataStoreObj = {};
        var bundleProductsArray = [];
        var pdpProductId = '';
        if (window.location.pathname == "/cart" || window.location.pathname == "/cart/update") {
            var productIds_d = [];
            Array.prototype.forEach.call(document.querySelectorAll('.order-line .product-code strong'), function(elProductCode) {
                productIds_d.push(elProductCode.innerText.trim());
            });
        }
        var bundleproductarray={}
        for (var ib = 0; ib < bundleResponse.ProductsDetail.length; ib++) {
            bundleproductarray[bundleResponse.ProductsDetail[ib].ProductId] = bundleResponse.ProductsDetail[ib]
        }
        //var battery_data = get_upsell_battery_name();
        for (var i = 0; i < bundles.length; i++) {
            if(INC.config.dupDataObjectProducts.indexOf(bundles[i].BundleId) == -1){
                INC.config.dupDataObjectProducts.push(bundles[i].BundleId)
                var irbBundleObj = bundles[i];
                var bundleObj = {};
                bundleObj.id = irbBundleObj["BundleId"];
                bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                bundleObj.productCount = irbBundleObj["ProductCount"];
                
            
                var irbProductsArray = irbBundleObj["ProductIds"];

                if (irbProductsArray.length) {
                     INC.config.mainProductid =irbProductsArray[0]["ProductId"];
                    if (window.location.pathname == "/cart" || window.location.pathname == "/cart/update") {
                        if (productIds_d.indexOf(irbProductsArray[0]) >= 0) {
                            pdpProductId = irbProductsArray[0];
                            if (INC.clientConfig.statusLoggedIn == false) {
                                bundleProductsArray.push(irbProductsArray[1]);
                            }
                        } else if (productIds_d.indexOf(irbProductsArray[1]) >= 0) {
                            pdpProductId = irbProductsArray[1];
                            if (INC.clientConfig.statusLoggedIn == false) {
                                bundleProductsArray.push(irbProductsArray[0]);
                            }
                        }
                    } else {
                        pdpProductId = irbProductsArray[0];
                        bundleProductsArray.push(irbProductsArray[1]);
                    }
                }

                for (var j = 0; j < irbProductsArray.length; j++) {
                    var product = bundleproductarray[irbProductsArray[j]]
                    var battery_flag=true;
                    if(battery_flag){
                        if (INC.config.uniqeProduct.indexOf(product["ProductId"]) == -1  && INC.config.childlevelprod.indexOf(product["ProductId"]) == -1) {
                            if (isBase64(product["Description"]) == true) {
                                product["Description"] = Base64.decode(product["Description"])
                            } else {
                                product["Description"] = product["Description"]
                            }
                            
                            var pAttributes = product["Attributes"] || "";

                            if(configurator == "configurator"){
                                if(irbProductsArray[0]["ProductId"] != product["ProductId"]){
                                    if(INC.config.category_sequance.indexOf(product["CategoryName"]) == -1){
                                        INC.config.category_sequance.push(product["CategoryName"])
                                        INC.config.category_seqId.push({
                                            id:product["CategorySequenceId"],
                                            category:product["CategoryName"]
                                        })
                                    }
                                }
                            }

                            if(pAttributes != "" && pAttributes != null){
                                for (var h = 0; h < pAttributes.length; h++) {
                                    pAttributes[h].attributeCode = pAttributes[h].frontEndLabel;
                                }
                            }
                            var pAttObj = {};
                            for(t=0;t<pAttributes.length;t++){
                                pAttributes[t].attributeId = t
                                var attr_values = pAttributes[t].attributeValues;
                                for(v=0;v<attr_values.length;v++){
                                    attr_values[v].optionId = t;
                                }
                            }
                            
                            if (pAttributes.length) {
                                // INC.config.configcount = 0
                                for (var k = 0; k < pAttributes.length; k++) {
                                    var pAttributesObj = pAttributes[k];
                                    
                                    var pAttributesValues = pAttributesObj["attributeValues"];
                                    pAttributesObj["attributeCode"] = pAttributesObj["frontEndLabel"];
                                    //frontEndLabel
                                    for (var l = 0; l < pAttributesValues.length; l++) {
                                        var childProduct = pAttributesValues[l];
                                        if (childProduct["childProductId"] == null) {
                                            childProduct["childProductId"] = product["ProductId"];
                                            childProduct["childProductSku"] = product["ProductSku"];
                                            childProduct["childProductName"] = product["ProductName"];
                                            childProduct["childProductImageUrl"] = product["ImageURL"];
                                            childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                            childProduct["childProductUrl"] = product["ProductUrl"];
                                            childProduct["childProductPrice"] = product["Price"];
                                            childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                            childProduct["childProductDescription"] = product["Description"];
                                            childProduct["childInternalProductId"] = product["ProductId"]
                                        }
                                        if(childProduct["childProductImageUrl"] == "" || childProduct["childProductImageUrl"] == null){
                                            childProduct["childProductImageUrl"] = product["ImageURL"];
                                        }
                                        if (INC.config.uniqeProduct.indexOf(childProduct["childProductId"]) == -1) {
                                            
                                            // if(product["Size"] != null){
                                            //     childProduct["MainprodVariant"] = product["Color"].replace('ー','') + "ー" + product["Size"].replace('ー','');
                                            // }else{
                                            //     childProduct["MainprodVariant"] = product["Color"];
                                            // }
                                            childProduct["MainprodVariant"] = product.Attributes[0].attributeValues[0].optionText
                                            childProduct["childCategoryId"] = product["CategoryId"];
                                            childProduct["childCategoryName"] = product["CategoryName"];
                                            // childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                            childProduct["childProductDescription"] = product["Description"];
                                            childProduct["ShortDescription"] = product["ShortDescription"];
                                            childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                            childProduct["childProductPriceMain"] = product["Price"];
                                            childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                            childProduct["childProductNameMain"] = product["ProductName"];
                                            childProduct["childProductUrlMain"] = product["ProductUrl"];
                                            childProduct["mainSKU"] = product["ProductSku"];
                                            childProduct["ProductType"] = product["ProductType"];


                                            if (childProduct["childProductImageUrl"] == "") {
                                                childProduct["childProductImageUrl"] = product["ImageURL"];
                                            }
                                            childProduct["childProductSku"] = product["ProductId"];
                                            childProduct["childCategoryId"] = product["CategoryId"];
                                            childProduct["Field3"] = product["Field3"];
                                            childProduct["Field5"] = product["Field5"];
                                            if (childProduct["childProductField6"] == null) {
                                                childProduct["Field6"] = product["Field6"];
                                            } else {
                                                childProduct["Field6"] = childProduct["childProductField6"]
                                            }

                                            var productObj = new INC.classes.ProductAttObj(childProduct);
                                            
                                            productObj["bundledProductId"] = pdpProductId;
                                            productObj.mainId = product["ProductId"];
                                            productObj.bundleId = bundleObj.id;
                                            productObj.sku = productObj.id;
                                            productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                            productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                            productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                            productObj.Filed3 = product["Field5"] 
                                            if (!dataStoreObj.hasOwnProperty(product['ProductId'])) {
                                                dataStoreObj[product['ProductId']] = {};
                                            }
                                            if (!dataStoreObj[product['ProductId']].hasOwnProperty(productObj['id'])) {
                                                dataStoreObj[product['ProductId']][productObj['id']] = {}
                                            }
                                            pAttObj = dataStoreObj[product['ProductId']][productObj['id']];

                                            
                                            for (pAtt in productObj) {
                                                if (pAtt == "option") {
                                                    if (!pAttObj.hasOwnProperty('option')) {
                                                        pAttObj["option"] = {}
                                                    }
                                                    
                                                    Object.keys(productObj[pAtt]).forEach(function (key) {
                                                        pAttObj[pAtt][key] = productObj[pAtt][key];
                                                    });
                                                    // }
                                                } else {
                                                    pAttObj[pAtt] = productObj[pAtt];
                                                }
                                            }
                                        }
                                    }
                                    
                                }
                            }
                            
                            if (pAttributes.length == 0) {
                                // INC.config.uniqeProduct.push(product["ProductId"])
                                var productObj = new INC.classes.ProductObj(product);
                                productObj["bundleId"] = irbBundleObj["BundleId"];
                                productObj["bundledProductId"] = pdpProductId;
                                productObj.sku = productObj.id;
                                productObj.Filed3 = product["Field5"] 
                                if (!dataStoreObj.hasOwnProperty(productObj['mainId'])) {
                                    dataStoreObj[productObj['mainId']] = {};
                                }

                                // if(!dataStoreObj[product['mainId']].hasOwnProperty(product['id'])){
                                //     dataStoreObj[product['mainId']['id']] = {};
                                // }

                                dataStoreObj[productObj['mainId']][productObj['id']] = {};
                                if (!!window.MSInputMethodContext && !!document.documentMode) {
                                    dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                                }else {
                                    dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                                }
                                
                                // dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                            }
                        }
                    }
                    // productArray.push(pAttObj);
                }
            }
        }

        incDataStore.dataStoreObj = dataStoreObj;
        incDataStore.bundleProductsArray = bundleProductsArray;
        incDataStore.pdpProductId = pdpProductId;
        incDataStore.bundleCartProducts = {};
    }

    function getFirstProductObjByMainId(findObj) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        try {
            if(productListObj != undefined){
                childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];
            }
        } catch (e) {
        }

        return childProductObj;
    }

    function getProductById(findObj,client_add_btn) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        if (findObj.hasOwnProperty("id")) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    if(client_add_btn == "client_add_btn"){
                        var cpid = findObj["id"] //+ INC.config.configcount
                        if (productListObj[mainProductId][childProductId]["id"] == cpid) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    }else{
                        if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    }
                }
            }
        }
        if(Object.keys(childProductObj).length == 0){
            if (findObj.hasOwnProperty("id")) {
                for (mainProductId in productListObj) {
                    for (childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    }
                }
            }
        }
        return childProductObj;
    }

    function getProductBySKU(findObj) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;

        if (findObj.hasOwnProperty('sku')) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    if (productListObj[mainProductId][childProductId]["sku"] == findObj['sku']) {
                        childProductObj = productListObj[mainProductId][childProductId];
                    }
                }
            }
        }
        return childProductObj;
    }

    function getUniqueCatergories() {
        var catergoriesArray = [];

        var productListObj = INC.dataStore.dataStoreObj;
        var bundleProductsArray = INC.dataStore.bundleProductsArray;
        var count_category=0
        var deal_prd_pushed=true;
        if(INC.config.DealProducts.length > 0){
            deal_prd_pushed = false
        }
        var isdealprod=false
        bundleProductsArray.forEach(function (productId) {
            for (childProductId in productListObj[productId]) {
                if(productListObj[productId][childProductId]["categoryName"] == "Deal of the day"){
                    isdealprod=true
                }
            }
        });
        var deal_category=[]
        bundleProductsArray.forEach(function (productId) {
            for (childProductId in productListObj[productId]) {
                count_category++
                
                var indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryName"]);
                if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryName"] != INC.dataStore.clientProductDealsCategory) {
                    if(productListObj[productId][childProductId]["categoryName"] == "Deal of the day"){
                        deal_prd_pushed=true
                        if(catergoriesArray.indexOf('Deal of the day') == -1){
                            deal_category.push(productListObj[productId][childProductId]["categoryName"])
                        }
                    }else{
                        if(catergoriesArray.length < 4){
                            catergoriesArray.push(productListObj[productId][childProductId]["categoryName"]);
                        }else{
                            if(deal_category.length > 0){
                                if(catergoriesArray.indexOf('Deal of the day') == -1){
                                    catergoriesArray.push(deal_category[0]);
                                }
                            }else{
                                if(isdealprod == false){
                                    catergoriesArray.push(productListObj[productId][childProductId]["categoryName"]);
                                }else if(catergoriesArray.length < 4){
                                    catergoriesArray.push(productListObj[productId][childProductId]["categoryName"]);
                                }
                            }
                        }
                    }
                }
            }
        });
        
        if(catergoriesArray.indexOf('Deal of the day') == -1){
            if(deal_category.length > 0){
                if(catergoriesArray.length == 5){
                    if(catergoriesArray.indexOf('Deal of the day') == -1){
                        catergoriesArray[4] = "Deal of the day"
                    }
                }else{
                    if(catergoriesArray.indexOf('Deal of the day') == -1){
                        catergoriesArray.push(deal_category[0]);
                    }
                }
            }else if(deal_category[0] == "Deal of the day"){
                if(catergoriesArray.length == 5){
                    if(catergoriesArray.indexOf('Deal of the day') == -1){
                        catergoriesArray[4] = "Deal of the day"
                    }
                }else{
                    if(catergoriesArray.indexOf('Deal of the day') == -1){
                        catergoriesArray.push(deal_category[0]);
                    }
                }
            }
       }
        return catergoriesArray;
    }
    function sorting_data(json_object, key_to_sort_by) {
        function sortByKey(a, b) {
            var x = a[key_to_sort_by];
            var y = b[key_to_sort_by];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
    
        json_object.sort(sortByKey);
    }
    function sortByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key],
                y = b[key];
            if (typeof x === 'string') {
                x = x.toLowerCase();
                y = y.toLowerCase();
                if (!isNaN(x) && !isNaN(y)) {
                    x = parseInt(x, 10);
                    y = parseInt(y, 10);
                }
            }
            return (x < y ? -1 : (x > y ? 1 : 0));
        });
    }
    function getProductColorsObj(findObj,type_of) {
        var productColorObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productColorArrayObj = {}
        var productColorObjArray = [];
        var option_ids = ""
        
        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                       
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["0"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = "";
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = "";
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["child_img"] = productListObj[mainProductId][childProductId]["option"]["0"]["child_img"];
                        }
                    }
                }
            }
        }

        Object.keys(productColorArrayObj).forEach(function (colorText) {
            var colorObj = {}
            colorObj["text"] = colorText;
            // colorObj["imgSrc"] = productColorArrayObj[colorText];
            colorObj["colorCode"] = productColorArrayObj[colorText]["colorCode"];
            colorObj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            colorObj["titleText"] = productColorArrayObj[colorText]["titleText"];
            colorObj["code"] = productColorArrayObj[colorText]["code"];
            colorObj["child_img"] = productColorArrayObj[colorText]["child_img"];
            productColorObjArray.push(colorObj);
        });
        if(type_of == "size"){
            productColorObj["sizeArray"] = productColorObjArray;
        }else if(type_of == "zero"){
            productColorObj["att0Array"] = productColorObjArray;
        }else if(type_of == "third"){
            productColorObj["att3Array"] = productColorObjArray;
        }else{
            productColorObj["colorArray"] = productColorObjArray;
        }


        return productColorObj;

    }

    function getProductSizesObj(findObj,type_of) {
        var productSizeObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productSizesArrayObj = {};
        var productSizesObjArray = [];
        var sizesArray = ["S", "M", "L", "XL", "XX", "XXL"];
        var attr_code="";
        
        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        if(type_of != undefined){
                            var attr_block=null;
                            if(type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false){
                                attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                            }else{
                                attr_block = type_of.parentNode.parentNode.parentNode
                            }
                            var opt_text=attr_block.getAttribute('data-color');
                            var opt_size_text=attr_block.getAttribute('data-size');
                            var opt_zero_text=attr_block.getAttribute('data-zero');
                            // var opt_color_text=attr_block.getAttribute('data-color');
                            if(opt_zero_text == undefined){
                                var opt_zero_text=""
                            }
                            if(opt_size_text == undefined){
                                var opt_size_text=""
                            }
                            if(opt_text == undefined){
                                var opt_text=""
                            }
                            if(opt_color_text == undefined){
                                var opt_color_text=""
                            }
                           

                            if(opt_text != "" && opt_zero_text != ""){
                                if(productListObj[mainProductId][childProductId].option[0].text == opt_text && productListObj[mainProductId][childProductId].option[1].text == opt_zero_text){
                                    if (productListObj[mainProductId][childProductId]["option"] != null &&
                                        productListObj[mainProductId][childProductId]["option"] != undefined &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                        attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                    }
                                }
                            }else if (productListObj[mainProductId][childProductId]["option"] != null &&
                                productListObj[mainProductId][childProductId]["option"] != undefined &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                            }
                        }else if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                            productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                            attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                        }
                    }
                    
                }
            }
        }

        Object.keys(productSizesArrayObj).forEach(function (sizeText) {
            var sizeObj = {};
            sizeObj["text"] = sizeText;
            sizeObj["code"] = attr_code;
            productSizesObjArray.push(sizeObj);
            // productSizesObjArray.push(code);
        });
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) { return a["text"].split("-")[0].trim() - b["text"].split("-")[0].trim() });
        // productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) { return a["text"].split(" ")[1].trim() - b["text"].split(" ")[1].trim() });
        productSizeObj["sizeArray"] = productSizesObjArray.sort();
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) { return sizesArray.indexOf(a["text"]) - sizesArray.indexOf(b["text"]) });

        return productSizeObj;
    }
    function getProductopt0Obj(findObj,type_of) {
        var product0Obj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var product0ArrayObj = {}
        var product0ObjArray = [];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                    
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                            if(type_of != undefined){
                                var attr_block=null;
                                if(type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false){
                                    attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                }else{
                                    attr_block = type_of.parentNode.parentNode.parentNode
                                }
                                var opt_text=attr_block.getAttribute('data-color');
                                var opt_size_text=attr_block.getAttribute('data-size');
                                var opt_zero_text=attr_block.getAttribute('data-zero');
                                // var opt_color_text=attr_block.getAttribute('data-color');
                                if(opt_zero_text == undefined){
                                    var opt_zero_text=""
                                }
                                if(opt_size_text == undefined){
                                    var opt_size_text=""
                                }
                                if(opt_text == undefined){
                                    var opt_text=""
                                }
                                if(opt_color_text == undefined){
                                    var opt_color_text=""
                                }
                                if(opt_text != ""){
                                    if(productListObj[mainProductId][childProductId].option[0].text == opt_text){
                                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                                            productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                                            productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                                
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                        }
                                    }
                                }else if (productListObj[mainProductId][childProductId]["option"] != null &&
                                    productListObj[mainProductId][childProductId]["option"] != undefined &&
                                    productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                                    productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                        
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                }
                            }else{
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                            }
                        }

                        // colorObj["text"] = productListObj[mainProductId][childProductId]["option"]["1"]["text"];
                        // colorObj["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                        // product0ObjArray.push(colorObj)
                    }
                }
            }
        }

        Object.keys(product0ArrayObj).forEach(function (colorText) {
            var attr0Obj = {}
            attr0Obj["text"] = colorText;
            attr0Obj["imgSrc"] = product0ArrayObj[colorText]["imgSrc"];
            attr0Obj["titleText"] = product0ArrayObj[colorText]["titleText"];
            attr0Obj["code"] = product0ArrayObj[colorText]["code"];
            product0ObjArray.push(attr0Obj);
        });

        product0Obj["att0Array"] = product0ObjArray;

        return product0Obj;
    }
    function getProductopt3Obj(findObj,type_of) {
        var product3Obj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productColorArrayObj = {}
        var product3ObjArray = [];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                    
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["3"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["3"] != undefined) {
                            if(type_of != undefined){
                                var attr_block=null;
                                if(type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false){
                                    attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                }else{
                                    attr_block = type_of.parentNode.parentNode.parentNode
                                }
                                var opt_text=attr_block.getAttribute('data-zero');
                                var opt_size_text=attr_block.getAttribute('data-size');
                                var opt_color_text=attr_block.getAttribute('data-color');

                                if(opt_size_text == undefined){
                                    var opt_size_text=""
                                }
                                if(opt_color_text == undefined){
                                    var opt_color_text=""
                                }
                                // if(type_of.getAttribute('data-option') == "2"){
                                //     var opt_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-zero');
                                //     var opt_size_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-size');
                                //     var opt_color_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-color');
                                // }else{
                                //     var opt_text=type_of.innerText;
                                //     var opt_size_text=""
                                //     var opt_color_text=""
                                // }
                                if(opt_text != "" && opt_size_text != "" && opt_color_text != ""){
                                    if(productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined && productListObj[mainProductId][childProductId].option[0] != undefined){
                                        if(productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text && productListObj[mainProductId][childProductId].option[0].text == opt_color_text){
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                            
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                        }
                                    }
                                }else{
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                    
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                }
                            }else{
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                    
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                            }


                        }

                        // colorObj["text"] = productListObj[mainProductId][childProductId]["option"]["1"]["text"];
                        // colorObj["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                        // product3ObjArray.push(colorObj)
                    }
                }
            }
        }

        Object.keys(productColorArrayObj).forEach(function (colorText) {
            var attr3Obj = {}
            attr3Obj["text"] = colorText;
            attr3Obj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            attr3Obj["titleText"] = productColorArrayObj[colorText]["titleText"];
            attr3Obj["code"] = productColorArrayObj[colorText]["code"];
            product3ObjArray.push(attr3Obj);
        });

        product3Obj["att3Array"] = product3ObjArray;

        return product3Obj;
    }
    function getProductopt4Obj(findObj) {
        var product4Obj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productColorArrayObj = {}
        var product4ObjArray = [];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["4"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["4"] != undefined) {

                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]] = {};
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["colorCode"] = "";
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["imgSrc"] = "";
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["4"]["titleText"];
                            
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["4"]["imgSrc"];
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["4"]["code"];


                        }
                    }
                }
            }
        }

        Object.keys(productColorArrayObj).forEach(function (colorText) {
            var attr4Obj = {}
            attr4Obj["text"] = colorText;
            attr4Obj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            attr4Obj["titleText"] = productColorArrayObj[colorText]["titleText"];
            attr4Obj["code"] = productColorArrayObj[colorText]["code"];
            product4ObjArray.push(attr4Obj);
        });

        product4Obj["att4Array"] = product4ObjArray;

        return product4Obj;

    }
   
    function getProductByAtt(findObj) {
        
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var mainProductListObj = productListObj[findObj.mainId];
        for (childProductId in mainProductListObj) {
           
            if(findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && findObj.thirdText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined && mainProductListObj[childProductId]["option"]["3"] != undefined){
                if(findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text && findObj.thirdText == mainProductListObj[childProductId]["option"]["3"].text){
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if(findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined){
                if(findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text){
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if(findObj.zeroText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined){
                if(findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text){
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["0"] != null &&
                mainProductListObj[childProductId]["option"]["0"] != undefined &&
                (findObj.zeroText == mainProductListObj[childProductId]["option"]["0"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];
                
            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["0"] != null &&
                mainProductListObj[childProductId]["option"]["0"] != undefined &&
                (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];
                
            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["1"] != null &&
                mainProductListObj[childProductId]["option"]["1"] != undefined &&
                (findObj.sizeText == mainProductListObj[childProductId]["option"]["1"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];
                
            }
        }

        return childProductObj;
    }

    return {
        buildDataStoreObj: buildDataStoreObj,
        getFirstProductObjByMainId: getFirstProductObjByMainId,
        getProductById: getProductById,
        getProductBySKU: getProductBySKU,
        getUniqueCatergories: getUniqueCatergories,
        getProductColorsObj: getProductColorsObj,
        getProductSizesObj: getProductSizesObj,
        getProductopt3Obj: getProductopt3Obj,
        getProductopt4Obj: getProductopt4Obj,
        getProductopt0Obj: getProductopt0Obj,
        getProductByAtt: getProductByAtt
    }
}

INC.classes = {};
INC.classes.ProductObj = function (product) {
    this.bundleId = "";
    //+ INC.config.configcount
    this.id = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.sku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.mainsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.idAddtocart = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.childsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.name = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ProductName"] : product["Field4"]) : "";
    this.url = product["ProductUrl"];
    this.idAdd = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.imageURL = ((product != null) && (product != undefined)) ? product["ImageURL"] : "";
    this.regularPrice = ((product != null) && (product != undefined)) ? product["Price"] : "";
    this.activePrice = ((product != null) && (product != undefined)) ? ((product["SpecialPrice"] != null) ? product["SpecialPrice"] : product["Price"]) : "";
    //((product != null) && (product != undefined)) ? ((product["Field3"] != "") ? ((INC.config.language == "en") ? product["Field3"] : product["Field6"]) : "") : 
    this.activePriceMsg = "";
    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    
    this.size = ((product != null) && (product != undefined)) ? ((product["Size"] != null) ? product["Size"] : "") : "";
    if (this.ProductLevelDiscountMessage != null) {
        this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"]
    } else {
        this.promotionalMessage = product["PromotionalMessage"]
    }
    
    this.otherImageList = ((product != null) && (product != undefined)) ? product["OtherImageList"] : [];
    if(this.otherImageList != null){
        if(this.otherImageList.indexOf(product["ImageURL"]) == -1){
            this.otherImageList.unshift(product["ImageURL"])
        }
    }
    this.option = {};
    
    this.pointcollect = "";
    this.mainProdVariant = product["Color"]
    this.internalId = ((product != null) && (product != undefined)) ? product["InternalId"] : "";
    this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.categoryName = ((product != null) && (product != undefined)) ? product["CategoryName"] : "";
    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    this.categoryId = ((product != null) && (product != undefined)) ? product["CategoryId"] : "";
    this.description = ((product != null) && (product != undefined)) ? product["Description"] : "";
    this.shortDescription = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ShortDescription"] : product["Field5"]) : "";
    this.ratingsCount = ((product != null) && (product != undefined)) ? product["Field5"] : "";
    this.reviewsCount = ((product != null) && (product != undefined)) ? product["Field5"] : "";
    this.worthPrice = ((product != null) && (product != undefined)) ? product["Field5"] : "";
    this.ProductType = ((product != null) && (product != undefined)) ? product["ProductType"] : "";
    this.Field6 = ((product != null) && (product != undefined)) ? product["Field6"] : "";
    this.regularPriceMain = ((product != null) && (product != undefined)) ? product["Price"] : "";
    this.activePriceMain = ((product != null) && (product != undefined)) ? ((product["SpecialPrice"] != null) ? product["SpecialPrice"] : product["Price"]) : "";
    this.nameMain = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ProductName"] : product["ProductName"]) : "";
    this.imageURLMain = ((product != null) && (product != undefined)) ? product["ImageURL"] : "";
    this.urlMain = ((product != null) && (product != undefined)) ? product["ProductUrl"] : "";
    INC.config.dataObjcount++
    // if(INC.methods.getProductIdFromWebPage() == product["ProductId"]){
    //     this.regularPriceMain = "20.99";
    //     this.activePriceMain = "18.99";
    // }
}
INC.classes.ProductAttObj = function (product) {
    this.bundleId = "";
    //+ INC.config.configcount
    this.id = ((product != null) && (product != undefined)) ? product["childProductId"]  : "";
    this.idAdd = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
    this.idAddtocart = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
    this.sku = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
    this.mainsku = ((product != null) && (product != undefined)) ? product["mainSKU"] : "";
    this.mainProdVariant = ((product != null) && (product != undefined)) ? product["MainprodVariant"] : "";
    this.childsku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
    this.name = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["childProductName"] : product["Field4"]) : "";
    this.url = ((product != null) && (product != undefined)) ? product["childProductUrl"] : "";
    this.imageURL = ((product != null) && (product != undefined)) ? product["childProductImageUrl"] : "";
    this.regularPrice = ((product != null) && (product != undefined)) ? product["childProductPrice"] : "";
    this.activePrice = ((product != null) && (product != undefined)) ? ((product["childProductSpecialPrice"] != null) ? product["childProductSpecialPrice"] : product["childProductPrice"]) : "";
    this.activePriceMsg =  "";
    
    if(product["productLevelDiscountMessage"] != null){
        this.ProductLevelDiscountMessage = product["productLevelDiscountMessage"]
    }else{
        this.ProductLevelDiscountMessage = product["promotionalMessage"]
    }
    this.pointcollect = "";
    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    this.otherImageList = ((product != null) && (product != undefined)) ? product["childProductOtherImageUrl"] : [];
    
    this.size = "";
    this.option = {};
    if (((product != null) && (product != undefined))) {
        this.option[product["optionId"]] = {};
        this.option[product["optionId"]].text = product["optionText"];
        this.option[product["optionId"]].ImgURLC = product["childProductImageUrl"];
        this.option[product["optionId"]].titleText = (product["childProductName"] != null) ? product["childProductName"] : "";
        this.option[product["optionId"]].imgSrc = (product["optionImageUrl"] != null) ? product["optionImageUrl"] : "";
        this.option[product["optionId"]].colorCode = (product["colorCode"] != null) ? product["colorCode"] : "";
    }
    this.internalId = ((product != null) && (product != undefined)) ? product["childInternalProductId"] : "";
    // this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.categoryName = ((product != null) && (product != undefined)) ? product["childCategoryName"] : "";
    this.categoryId = ((product != null) && (product != undefined)) ? product["childCategoryId"] : "";
    this.description = ((product != null) && (product != undefined)) ? product["childProductDescription"] : "";
    this.shortDescription = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ShortDescription"] : product["Field5"]) : "";
    this.ratingsCount = ((product != null) && (product != undefined)) ? product["childProductField5"] : "";
    this.Field6 = ((product != null) && (product != undefined)) ? product["childProductField6"] : "";
    this.reviewsCount = ((product != null) && (product != undefined)) ? product["childProductField5"] : "";
    this.worthPrice = ((product != null) && (product != undefined)) ? product["childProductField5"] : "";
    this.ProductType = ((product != null) && (product != undefined)) ? product["ProductType"] : "";

    this.regularPriceMain = product["childProductPriceMain"];
    this.activePriceMain = ((product != null) && (product != undefined)) ? ((product["childProductSpecialPriceMain"] != null) ? product["childProductSpecialPriceMain"] : product["childProductPriceMain"]) : "";
    this.nameMain = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["childProductNameMain"] : product["childProductNameMain"]) : "";
    this.imageURLMain = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["childProductImageUrl"] : product["childProductImageUrl"]) : "";
    this.urlMain = ((product != null) && (product != undefined)) ? product["childProductUrlMain"] : "";
    INC.config.dataObjcount++
    if(INC.config.childlevelprod.indexOf(product["childProductId"]) == -1){
        INC.config.childlevelprod.push(product["childProductId"])
    }
}
INC.classes.FindObj = function (findObj) {
    this.id = (findObj != null && findObj != undefined) ? findObj.id : "";
    this.sku = (findObj != null && findObj != undefined) ? findObj.sku : "";
    this.mainId = (findObj != null && findObj != undefined) ? findObj.mainId : "";
    this.colorText = (findObj != null && findObj != undefined) ? findObj.colorText : "";
    this.sizeText = (findObj != null && findObj != undefined) ? findObj.sizeText : "";
}

INC.classes.NWConfig = function (nwConfigObj) {
    this.url = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.url : "";
    this.method = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.method : "GET";
    this.params = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.params : "";
}

INC.uiConfig = {
    pdp: {
        className: {
            pdpModalBlock: prefix + "pdp" + postfix,
            pdpModalTitleBlock: prefix + "pdp_title" + postfix,
            pdpModalTitleTextBlock: prefix + "pdp_title_text" + postfix,
            pdpModalTitleText: prefix + "pdp_title_text",
            pdpModalTitleImgBlock: prefix + "pdp_title_img" + postfix,
            pdpModalTitleImg: prefix + "pdp_title_img",

            pdpModalBundleBlock: prefix + "pdp_bundle" + postfix,
            pdpModalMainProductBlock: prefix + "pdp_product-main" + postfix,
            pdpModalAddIconBlock: prefix + "pdp_icon-add" + postfix,
            pdpModalBundleProductBlock: prefix + "pdp_bundle_product" + postfix,
            pdpModalBundleCartBlock: prefix + "pdp_bundle_cart" + postfix,
            pdpModalBundleCartOverlay: prefix + "pdp_bundle_cart_overlay" + postfix,

            pdpAddIconImgBlock: prefix + "pdp_icon-add_img" + postfix,
            pdpAddIconImg: prefix + "pdp_icon-add_img",
            pdpBundleProductHeaderBlock: prefix + "pdp_bundle_product_header" + postfix,
            pdpBundleProductHeaderText: prefix + "pdp_bundle_product_header_text",
            pdpBundleProductLeftBtnBlock: prefix + "pdp_bundle_product_left-btn" + postfix,
            pdpBundleProductLeftBtnImgBlock: prefix + "pdp_bundle_product_left-btn_img" + postfix,
            pdpBundleProductNavBlock: prefix + "pdp_bundle_product_nav" + postfix,
            pdpBundleProductLeftBtnImg: prefix + "pdp_bundle_product_left-btn_img",
            pdpBundleProductRightBtnBlock: prefix + "pdp_bundle_product_right-btn" + postfix,
            pdpBundleProductRightBtnImgBlock: prefix + "pdp_bundle_product_right-btn_img" + postfix,
            pdpBundleProductRightBtnImg: prefix + "pdp_bundle_product_right-btn_img",
            pdpBundleCartSummaryAddBtnImgText: prefix + "pdp_bundle_cart_summary_add_btn_img_text",
            pdpBundleProductListBlock: prefix + "pdp_bundle_product_list" + postfix,
            pdpBundleProductListMainBlock: prefix + "pdp_bundle_product_list_main" + postfix,
            pdpBundleProductListMainLeftBlock: prefix + "pdp_bundle_product_list_main_left" + postfix,
            pdpBundleProductListMainLeftBtnBlock: prefix + "pdp_bundle_product_list_main_left_btn" + postfix,
            pdpBundleProductListMainLeftBtnImgBlock: prefix + "pdp_bundle_product_list_main_left_btn_img" + postfix,
            pdpBundleProductListMainLeftBtnImg: prefix + "pdp_bundle_product_list_main_left_btn_img",
            pdpBundleProductListMainLeftBtnTextBlock: prefix + "pdp_bundle_product_list_main_left_btn_text" + postfix,
            pdpBundleProductListMainLeftBtnText: prefix + "pdp_bundle_product_list_main_left_btn_text",
            pdpBundleProductListMainListBlock: prefix + "pdp_bundle_product_list_main_list" + postfix,
            pdpBundleProductListMainRightBlock: prefix + "pdp_bundle_product_list_main_right" + postfix,
            pdpBundleProductListMainRightBtnBlock: prefix + "pdp_bundle_product_list_main_right_btn" + postfix,
            pdpBundleProductListMainRightBtnImgBlock: prefix + "pdp_bundle_product_list_main_right_btn_img" + postfix,
            pdpBundleProductListMainRightBtnImg: prefix + "pdp_bundle_product_list_main_right_btn_img",
            pdpBundleProductListMainRightBtnTextBlock: prefix + "pdp_bundle_product_list_main_right_btn_text" + postfix,
            pdpBundleProductListMainRightBtnText: prefix + "pdp_bundle_product_list_main_right_btn_text",
            pdpBundleProductListLeftBlock: prefix + "pdp_bundle_product_list_left" + postfix,
            pdpBundleProductListLeftBtnBlock: prefix + "pdp_bundle_product_list_left_btn" + postfix,
            pdpBundleProductListLeftBtnImgBlock: prefix + "pdp_bundle_product_list_left_btn_img" + postfix,
            pdpBundleProductListLeftBtnImg: prefix + "pdp_bundle_product_list_left_btn_img",
            pdpBundleProductListRightBlock: prefix + "pdp_bundle_product_list_right" + postfix,
            pdpBundleProductListRightBtnBlock: prefix + "pdp_bundle_product_list_right_btn" + postfix,
            pdpBundleProductListRightBtnImgBlock: prefix + "pdp_bundle_product_list_right_btn_img" + postfix,
            pdpBundleProductListRightBtnImg: prefix + "pdp_bundle_product_list_right_btn_img",
            pdpBundleProductListItemsBlockShowMoreLess: prefix + "pdp_bundle_product_list_items_show_more_less" + postfix,
            pdpBundleProductListItemsBlockShowMoreLessText:prefix + "pdp_bundle_product_list_items_show_more_less_text",
            pdpBundleProductListItemsWrapperBlock: prefix + "pdp_bundle_product_list_wrapper_items" + postfix,
            pdpBundleProductListItemsWrapperHeaderBlock: prefix + "pdp_bundle_product_list_wrapper_header" + postfix,
            pdpBundleProductListItemsWrapperHeaderText: prefix + "pdp_bundle_product_list_wrapper_header_text" + postfix,
            pdpBundleProductListItemsWrapperHeaderclose: prefix + "pdp_bundle_product_list_wrapper_header_close" + postfix,
            pdpBundleProductListItemsBlock: prefix + "pdp_bundle_product_list_items" + postfix,
            pdpBundleProductListItemBlock: prefix + "pdp_bundle_product_list_item" + postfix,
            pdpBundleProductListItemImgBlock: prefix + "pdp_bundle_product_list_item_img" + postfix,
            pdpBundleProductListItemImg: prefix + "pdp_bundle_product_list_item_img",
            pdpBundleProductListItemTitleBlock: prefix + "pdp_bundle_product_list_item_title" + postfix,
            pdpBundleProductListItemTitleTextBlock: prefix + "pdp_bundle_product_list_item_title_text" + postfix,
            pdpBundleProductListItemTitleText: prefix + "pdp_bundle_product_list_item_title_text",
            pdpBundleProductListItemPriceBlock: prefix + "pdp_bundle_product_list_item_price" + postfix,
            pdpBundleProductListItemPriceActiveBlock: prefix + "pdp_bundle_product_list_item_price_active" + postfix,
            pdpBundleProductListItemPriceActiveTextBlock: prefix + "pdp_bundle_product_list_item_price_active_text" + postfix,
            pdpBundleProductListItemPriceActiveText: prefix + "pdp_bundle_product_list_item_price_active_text",
            pdpBundleProductListItemAddedBlock: prefix + "pdp_bundle_product_list_item_added" + postfix,
            pdpBundleProductListItemAddedBtnBlock: prefix + "pdp_bundle_product_list_item_added_btn" + postfix,
            pdpBundleProductListItemAddedBtnImgBlock: prefix + "pdp_bundle_product_list_item_added_btn_img" + postfix,
            pdpBundleProductListItemAddedBtnImg: prefix + "pdp_bundle_product_list_item_added_btn_img",
            pdpBundleProductListItemAddedBtnTextBlock: prefix + "pdp_bundle_product_list_item_added_btn_text" + postfix,
            pdpBundleProductListItemAddedBtnText: prefix + "pdp_bundle_product_list_item_added_btn_text",

            pdpBundleCartTitleBlock: prefix + "pdp_bundle_cart_title" + postfix,
            pdpBundleCartTitleTextBlock: prefix + "pdp_bundle_cart_title_text" + postfix,
            pdpBundleCartTitleText: prefix + "pdp_bundle_cart_title_text",
            pdpBundleCartTitleImgBlock: prefix + "pdp_bundle_cart_title_img" + postfix,
            pdpBundleCartTitleImg: prefix + "pdp_bundle_cart_title_img",
            pdpBundleCartPriceBlock: prefix + "pdp_bundle-cart_price" + postfix,
            pdpBundleCartPriceMainBlock: prefix + "pdp_bundle-cart_price_main",
            pdpBundleCartPriceMainTitleBlock: prefix + "pdp_bundle-cart_price_main_title" + postfix,
            pdpBundleCartPriceMainTitleTextBlock: prefix + "pdp_bundle-cart_price_main_title_text" + postfix,
            pdpBundleCartPriceMainTitleText: prefix + "pdp_bundle-cart_price_main_title_text",
            pdpBundleCartPriceMainFigureBlock: prefix + "pdp_bundle-cart_price_main_figure" + postfix,
            pdpBundleCartPriceMainFigureTextBlock: prefix + "pdp_bundle-cart_price_main_figure_text" + postfix,
            pdpBundleCartPriceMainFigureText: prefix + "pdp_bundle-cart_price_main_figure_text",
            pdpBundleCartPriceAddonBlock: prefix + "pdp_bundle-cart_price_addon" + postfix,
            pdpBundleCartPriceAddonTitleBlock: prefix + "pdp_bundle-cart_price_addon_title" + postfix,
            pdpBundleCartPriceAddonTitleTextBlock: prefix + "pdp_bundle-cart_price_addon_title_text" + postfix,
            pdpBundleCartPriceAddonTitleText: prefix + "pdp_bundle-cart_price_addon_title_text",
            pdpBundleCartPriceAddonFigureBlock: prefix + "pdp_bundle-cart_price_addon_figure" + postfix,
            pdpBundleCartPriceAddonFigureTextBlock: prefix + "pdp_bundle-cart_price_addon_figure_text" + postfix,
            pdpBundleCartPriceAddonFigureText: prefix + "pdp_bundle-cart_price_addon_figure_text",
            pdpBundleCartAddedBlock: prefix + "pdp_bundle_cart_added" + postfix,
            pdpBundleCartAddedProductBlock: prefix + "pdp_bundle_cart_added_product" + postfix,
            pdpBundleCartAddedProductImgBlock: prefix + "pdp_bundle_cart_added_product_img" + postfix,
            pdpBundleCartAddedProductImg: prefix + "pdp_bundle_cart_added_product_img",
            pdpBundleCartAddedProductTitleBlock: prefix + "pdp_bundle_cart_added_product_title" + postfix,
            pdpBundleCartAddedProductTitleTextBlock: prefix + "pdp_bundle_cart_added_product_title_text" + postfix,
            pdpBundleCartAddedProductTitleText: prefix + "pdp_bundle_cart_added_product_title_text",
            pdpBundleCartAddedProductPriceBlock: prefix + "pdp_bundle_cart_added_product_price" + postfix,
            pdpBundleCartAddedProductPriceTextBlock: prefix + "pdp_bundle_cart_added_product_price_text" + postfix,
            pdpBundleCartAddedProductPriceText: prefix + "pdp_bundle_cart_added_product_price_text",
            pdpBundleCartAddedProductAttBlock: prefix + "pdp_bundle_cart_added_product_att" + postfix,
            pdpBundleCartAddedProductAttColorBlock: prefix + "pdp_bundle_cart_added_product_att_color" + postfix,
            pdpBundleCartAddedProductAttColorTextBlock: prefix + "pdp_bundle_cart_added_product_att_color_text" + postfix,
            pdpBundleCartAddedProductAttColorText: prefix + "pdp_bundle_cart_added_product_att_color_text" + postfix,
            pdpBundleCartAddedProductAttSizeBlock: prefix + "pdp_bundle_cart_added_product_att_size" + postfix,
            pdpBundleCartAddedProductAttSizeTextBlock: prefix + "pdp_bundle_cart_added_product_att_size_text" + postfix,
            pdpBundleCartAddedProductAttSizeText: prefix + "pdp_bundle_cart_added_product_att_size_text",
            pdpBundleCartAddedProductQtyBlock: prefix + "pdp_bundle_cart_added_product_qty" + postfix,
            pdpBundleCartAddedProductQtyTextBlock: prefix + "pdp_bundle_cart_added_product_qty_text" + postfix,
            pdpBundleCartAddedProductQtyText: prefix + "pdp_bundle_cart_addeed_product_qty_text",
            pdpBundleCartAddedProductEditBlock: prefix + "pdp_bundle_cart_added_product_edit" + postfix,
            pdpBundleCartAddedProductEditTextBlock: prefix + "pdp_bundle_cart_added_product_edit_text" + postfix,
            pdpBundleCartAddedProductEditText: prefix + "pdp_bundle_cart_added_product_edit_text",
            pdpBundleCartAddedProductEditImgBlock: prefix + "pdp_bundle_cart_added_product_edit_img" + postfix,
            pdpBundleCartAddedProductEditImg: prefix + "pdp_bundle_cart_added_product_edit_img",
            pdpBundleCartSummaryBlock: prefix + "pdp_bundle_cart_summary" + postfix,
            pdpBundleCartSummaryTitleBlock: prefix + "pdp_bundle_cart_summary_title" + postfix,
            pdpBundleCartSummaryTitleTextBlock: prefix + "pdp_bundle_cart_summary_title_text" + postfix,
            pdpBundleCartSummaryTitleText: prefix + "pdp_bundle_cart_summary_title_text",
            pdpBundleCartSummaryPriceBlock: prefix + "pdp_bundle_cart_summary_price" + postfix,
            pdpBundleCartSummaryPriceRegularBlock: prefix + "pdp_bundle_cart_summary_price_regular" + postfix,
            pdpBundleCartSummaryPriceRegularTextBlock: prefix + "pdp_bundle_cart_summary_price_regular_text" + postfix,
            pdpBundleCartSummaryPriceRegularText: prefix + "pdp_bundle_cart_summary_price_regular_text",
            pdpBundleCartSummaryPriceActiveBlock: prefix + "pdp_bundle_cart_summary_price_active" + postfix,
            pdpBundleCartSummaryPriceActiveTextBlock: prefix + "pdp_bundle_cart_summary_price_active_text" + postfix,
            pdpBundleCartSummaryPriceActiveText: prefix + "pdp_bundle_cart_summary_price_active_text",
            pdpBundleCartSummaryPriceSaveBlock: prefix + "pdp_bundle_cart_summary_price_save" + postfix,
            pdpBundleCartSummaryPriceSaveText: prefix + "pdp_bundle_cart_summary_price_save_text",
            pdpBundleCartSummaryViewBlock: prefix + "pdp_bundle_cart_summary_view" + postfix,
            pdpBundleCartSummaryViewBtnBlock: prefix + "pdp_bundle_cart_summary_view_btn" + postfix,
            pdpBundleCartSummaryViewBtnImgBlock: prefix + "pdp_bundle_cart_summary_view_btn_img" + postfix,
            pdpBundleCartSummaryViewBtnImg: prefix + "pdp_bundle_cart_summary_view_btn_img",
            pdpBundleCartSummaryViewBtnTextBlock: prefix + "pdp_bundle_cart_summary_view_btn_text" + postfix,
            pdpBundleCartSummaryViewBtnText: prefix + "pdp_bundle_cart_summary_view_btn_text",
            pdpBundleCartSummaryViewBtnCountBlock: prefix + "pdp_bundle_cart_summary_view_btn_count" + postfix,
            pdpBundleCartSummaryViewBtnCount: prefix + "pdp_bundle_cart_summary_view_btn_count",
            pdpBundleCartSummaryAddBlock: prefix + "pdp_bundle_cart_summary_add" + postfix,
            pdpBundleCartSummaryAddBtnBlock: prefix + "pdp_bundle_cart_summary_add_btn" + postfix,
            pdpBundleCartSummaryAddBtnTextBlock: prefix + "pdp_bundle_cart_summary_add_btn_text" + postfix,
            pdpBundleCartSummaryAddBtnText: prefix + "pdp_bundle_cart_summary_add_btn_text",
            pdpBundleCartSummaryAddBtnspan: prefix + "pdp_bundle_cart_summary_add_btn_span",
            pdpBundleCartSummaryAddBtnImgBlock: prefix + "pdp_bundle_cart_summary_add_btn_img" + postfix,
            pdpBundleCartSummaryAddBtnImg: prefix + "pdp_bundle_cart_summary_add_btn_img",
            pdpBundleCartSummarySaveAddBlock: prefix + "pdp_bundle_cart_summary_save" + postfix,
            pdpBundleCartSummarySaveAddText: prefix + "pdp_bundle_cart_summary_save_text",
            ///Click & Collect///////////

            // pdpBundleCartSummaryClickCollectBlock: prefix + "pdp_bundle_cart_summary_click_collect" + postfix,
            // pdpBundleCartSummaryClickCollectBtnBlock: prefix + "pdp_bundle_cart_summary_click_collect_btn" + postfix,
            // pdpBundleCartSummaryClickCollectBtnTextBlock: prefix + "pdp_bundle_cart_summary_click_collect_btn_text" + postfix,
            // pdpBundleCartSummaryClickCollectBtnText: prefix + "pdp_bundle_cart_summary_click_collect_btn_text",
            // pdpBundleCartSummaryClickCollectBtnspan: prefix + "pdp_bundle_cart_summary_click_collect_btn_span",
            // pdpBundleCartSummaryClickCollectBtnImgBlock: prefix + "pdp_bundle_cart_summary_click_collect_btn_img" + postfix,
            // pdpBundleCartSummaryClickCollectBtnImg: prefix + "pdp_bundle_cart_summary_click_collect_btn_img",

            
            pdpBundleCartSummaryAddBtnClickCollectBlock: prefix + "pdp_bundle_cart_summary_add_Click_Collect_btn" + postfix,
            pdpBundleCartSummaryAddBtnClickCollectTextBlock: prefix + "pdp_bundle_cart_summary_add_btn_Click_Collect_text" + postfix,
            pdpBundleCartSummaryAddBtnClickCollectText: prefix + "pdp_bundle_cart_summary_add_btn_Click_Collect_text",
            pdpBundleCartSummaryAddBtnClickCollectImgBlock: prefix + "pdp_bundle_cart_summary_add_btn_Click_Collect_img" + postfix,
            pdpBundleCartSummaryAddBtnClickCollectImg: prefix + "pdp_bundle_cart_summary_add_btn_Click_Collect_img",
            pdpBundleCartSummaryAddBtnClickCollectImgText: prefix + "pdp_bundle_cart_summary_add_btn_Click_Collect_img_text",

            productModuleBlock: prefix + "product_module" + postfix,
            productModalBlock: prefix + "product_modal" + postfix,
            productShowcaseBlock: prefix + "product_showcase" + postfix,
            productBlock: prefix + "product" + postfix,

            productHeaderMainBlock: prefix + "product_header_main" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",

            productDescriptionHeaderBlock: prefix + "product_Description_header" + postfix,
            productDescriptionHeaderTitleBlock: prefix + "product_Description_header_title" + postfix,
            productDescriptionHeaderTitleTextBlock: prefix + "product_Description_header_title_text" + postfix,
            productDescriptionHeaderTitleText: prefix + "product_Description_header_title_text",
            productDescriptionHeaderImgBlock: prefix + "product_Description_header_img" + postfix,
            productDescriptionHeaderImg: prefix + "product_Description_header_img",

            productInfoMainBlock: prefix + "product_info_main" + postfix,
            productViewInfoBlock: prefix + "product_view_info" + postfix,
            productViewImgDescBlock: prefix + "product_view_img_desc" + postfix,
            productViewshortDescBlock: prefix + "product_view_short_desc" + postfix,
            productViewshortDescText: prefix + "product_view_img_desc_text",
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,
            productImgMainImgBlock: prefix + "product_img_main_img" + postfix,
            productImgMainImg: prefix + "product_img_main_img",
            productImgMainZoomBlock: prefix + "product_img_main_zoom" + postfix,
            productImgMainZoomBtnBlock: prefix + "product_img_main_zoom_btn" + postfix,
            productImgMainZoomBtnImgBlock: prefix + "product_img_main_zoom_btn_img" + postfix,
            productImgMainZoomBtnImg: prefix + "product_img_main_zoom_btn_img",
            productImgMainZoomminusImg: prefix + "product_img_main_zoom_minus_img",
            productImgMainZoomRuturnImg: prefix + "product_img_main_zoom_return_img",
            productImgMainZoomBtnTextBlock: prefix + "product_img_main_zoom_btn_text" + postfix,
            productImgMainZoomBtnText: prefix + "product_img_main_zoom_btn_text",
            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,
            productImgGalleryHeaderBlock: prefix + "producy_img_gallery_header" + postfix,
            productImgGalleryHeaderTitleBlock: prefix + "product_img_gallery_header_title" + postfix,
            productImgGalleryHeaderTitleImgBlock: prefix + "product_img_gallery_header_title_img" + postfix,
            productImgGalleryHeaderTitleImg: prefix + "product_img_gallery_header_title_img",
            productImgGalleryHeaderTitleTextBlock: prefix + "product_img_gallery_header_title_text" + postfix,
            productImgGalleryHeaderTitleText: prefix + "product_img_gallery_header_title_text",
            productImgGalleryHeaderToggleBlock: prefix + "product_img_gallery_header_toggle" + postfix,
            productImgGalleryHeaderToggleImgBlock: prefix + "product_img_gallery_header_toggle_img" + postfix,
            productImgGalleryHeaderToggleImg: prefix + "product_img_gallery_header_toggle_img",
            productImgGalleryHeaderToggleTextBlock: prefix + "product_img_gallery_header_toggle_text" + postfix,
            productImgGalleryHeaderToggleText: prefix + "product_img_gallery_header_toggle_text",
            productImgGalleryLeftBlock: prefix + "product_img_gallery_left" + postfix,
            productImgGalleryLeftBtnBlock: prefix + "product_img_gallery_left_btn" + postfix,
            productImgGalleryLeftBtnImgBlock: prefix + "product_img_gallery_left_btn_img" + postfix,
            productImgGalleryLeftBtnImg: prefix + "product_img_gallery_left_btn_img",
            productImgGalleryLeftBtnTextBlock: prefix + "product_img_gallery_left_btn_text" + postfix,
            productImgGalleryLeftBtnText: prefix + "product_img_gallery_left_btn_text",
            productImgGalleryListBlock: prefix + "product_img_gallery_list" + postfix,
            productImgGalleryListItemBlock: prefix + "product_img_gallery_list_item" + postfix,
            productImgGalleryListItemImgBlock: prefix + "product_img_gallery_list_item_img" + postfix,
            productImgGalleryListItemImg: prefix + "product_img_gallery_list_item_img",
            productImgGalleryListItemTextBlock: prefix + "product_img_gallery_list_item_text" + postfix,
            productImgGalleryListItemText: prefix + "product_img_gallery_list_item_text",
            productImgGalleryRightBlock: prefix + "product_img_gallery_right" + postfix,
            productImgGalleryRightBtnBlock: prefix + "product_img_gallery_right_btn" + postfix,
            productImgGalleryRightBtnImgBlock: prefix + "product_img_gallery_right_btn_img" + postfix,
            productImgGalleryRightBtnImg: prefix + "product_img_gallery_right_btn_img",
            productImgGalleryRightBtnTextBlock: prefix + "product_img_gallery_right_btn_text" + postfix,
            productImgGalleryRightBtnText: prefix + "product_img_gallery_right_btn_text",
            productDescBlock: prefix + "product_desc" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",
            productMaufactureTextBlock: prefix + "product_manufacture_text" + postfix,
            productMaufactureText: prefix + "product_maufacture_text",
            productTitleTextHeader: prefix + "product_desc_title_text_header",
            productRatingsBlock: prefix + "product_desc_ratings" + postfix,
            productOfferBlock: prefix + "product_desc_offer" + postfix,
            productOfferHeaderBlock: prefix + "product_desc_offerheader" + postfix,
            productOfferTextBlock: prefix + "product_desc_offertext" + postfix,
            productInfoBlock: prefix + "product_desc_info" + postfix,
            productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
            productInfoImg: prefix + "product_desc_info_img",
            productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
            productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
            productInfoFullDescDescBlock: prefix + "Info_Full_desc_desc" + postfix,
            productInfoFullDescDescHeaderBlock: prefix + "Info_Full_desc_desc_header" + postfix,
            productInfoFullDescDescHeaderText: prefix + "Info_Full_desc_desc_header_text",
            productInfoFullDescShippingBlock: prefix + "Info_Full_desc_shipping" + postfix,
            productInfoFullDescShippingHeaderBlock: prefix + "Info_Full_desc_shipping_header" + postfix,
            productInfoFullDescShippingHeaderText: prefix + "Info_Full_desc_shipping_header_text",
            productInfoFullDescShippingText: prefix + "Info_Full_desc_shipping_text",
            productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
            productInfoText: prefix + "product_desc_info_text",
            productPriceBlock: prefix + "product_desc_price" + postfix,
            productPriceLabel: prefix + "product_price_label" + postfix,
            productPriceActiveBlock: prefix + "product_desc_price_active" + postfix,
            productPriceActiveTextBlock: prefix + "product_desc_price_active_text" + postfix,
            productPriceActiveText: prefix + "product_desc_price_active_text",
            productPriceActiveTextMsg: prefix + "product_desc_price_active_text_msg",
            productPriceRegularBlock: prefix + "product_desc_price_regular" + postfix,
            productPriceRegularTextBlock: prefix + "product_desc_price_regular_text" + postfix,
            productPriceRegularText: prefix + "product_desc_price_regular_text",
            productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
            productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
            productPriceWorthText: prefix + "product_desc_price_worth_text",
            productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
            productAttDetailsBlock: prefix + "product_desc_att_details" + postfix,
            productDetailsBlock: prefix + "product_details_prod" + postfix,
            productDetailstext: prefix + "product_details_prod_text",
            productvariantSimpleBlock: prefix + "product_variant_simple" + postfix,
            productvariantSimpleText: prefix + "product_variant_simple_text",
            productAttBlock: prefix + "product_desc_att" + postfix,
            productAttColorBlock: prefix + "product_desc_att_color" + postfix,
            productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
            productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
            productAttColorTitleText: prefix + "product_desc_att_color_title_text",
            productAttColorTitleTextSelected: prefix + "product_desc_att_color_title_text_selected",
            productAttColorListBlock: prefix + "product_desc_att_color_list" + postfix,
            productAttColorListItemBlock: prefix + "product_desc_att_color_list_item" + postfix,
            productAttColorListItemImgBlock: prefix + "product_desc_att_color_list_item_img" + postfix,
            productAttColorListItemImg: prefix + "product_desc_att_color_list_item_img",
            productAttColorListItemTextBlock: prefix + "product_desc_att_color_list_item_text" + postfix,
            productAttColorListItemText: prefix + "product_desc_att_color_list_item_text",
            productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
            productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
            productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
            productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
            productAttSizeTitleTextSelected: prefix + "product_desc_att_size_title_text_selected",
            productAttSizeListBlock: prefix + "product_desc_att_size_list" + postfix,
            productAttSizeListItemBlock: prefix + "product_desc_att_size_list_item" + postfix,
            productAttSizeListItemImgBlock: prefix + "product_desc_att_size_list_item_img" + postfix,
            productAttSizeListItemImg: prefix + "product_desc_att_size_list_item_img",
            productAttSizeListItemTextBlock: prefix + "product_desc_att_size_list_item_text" + postfix,
            productAttSizeListItemText: prefix + "product_desc_att_size_list_item_text",
            productAttzeroBlock: prefix + "product_desc_att_zero" + postfix,
            productAttzeroTitleBlock: prefix + "product_desc_att_zero_title" + postfix,
            productAttzeroTitleTextBlock: prefix + "product_desc_att_zero_title_text" + postfix,
            productAttzeroTitleText: prefix + "product_desc_att_zero_title_text",
            productAttzeroTitleTextSelected: prefix + "product_desc_att_zero_title_text_selected",
            productAttzeroListBlock: prefix + "product_desc_att_zero_list" + postfix,
            productAttzeroListItemBlock: prefix + "product_desc_att_zero_list_item" + postfix,
            productAttzeroListItemImgBlock: prefix + "product_desc_att_zero_list_item_img" + postfix,
            productAttzeroListItemImg: prefix + "product_desc_att_zero_list_item_img",
            productAttzeroListItemTextBlock: prefix + "product_desc_att_zero_list_item_text" + postfix,
            productAttzeroListItemText: prefix + "product_desc_att_zero_list_item_text",
            productAttthirdBlock: prefix + "product_desc_att_third" + postfix,
            productAttthirdTitleBlock: prefix + "product_desc_att_third_title" + postfix,
            productAttthirdTitleTextBlock: prefix + "product_desc_att_third_title_text" + postfix,
            productAttthirdTitleText: prefix + "product_desc_att_third_title_text",
            productAttthirdTitleTextSelected: prefix + "product_desc_att_third_title_text_selected",
            productAttthirdListBlock: prefix + "product_desc_att_third_list" + postfix,
            productAttthirdListItemBlock: prefix + "product_desc_att_third_list_item" + postfix,
            productAttthirdListItemImgBlock: prefix + "product_desc_att_third_list_item_img" + postfix,
            productAttthirdListItemImg: prefix + "product_desc_att_third_list_item_img",
            productAttthirdListItemTextBlock: prefix + "product_desc_att_third_list_item_text" + postfix,
            productAttthirdListItemText: prefix + "product_desc_att_third_list_item_text",
            productAttfourthBlock: prefix + "product_desc_att_fourth" + postfix,
            productAttfourthTitleBlock: prefix + "product_desc_att_fourth_title" + postfix,
            productAttfourthTitleTextBlock: prefix + "product_desc_att_fourth_title_text" + postfix,
            productAttfourthTitleText: prefix + "product_desc_att_fourth_title_text",
            productAttfourthTitleTextSelected: prefix + "product_desc_att_fourth_title_text_selected",
            productAttfourthListBlock: prefix + "product_desc_att_fourth_list" + postfix,
            productAttfourthListItemBlock: prefix + "product_desc_att_fourth_list_item" + postfix,
            productAttfourthListItemImgBlock: prefix + "product_desc_att_fourth_list_item_img" + postfix,
            productAttfourthListItemImg: prefix + "product_desc_att_fourth_list_item_img",
            productAttfourthListItemTextBlock: prefix + "product_desc_att_fourth_list_item_text" + postfix,
            productAttfourthListItemText: prefix + "product_desc_att_fourth_list_item_text",
            productAttvariantaddBlock: prefix + "product_desc_att_variant_add" + postfix,
            productAttvariantaddText: prefix + "product_desc_att_variant_text",
            productAttvariantviewdetailsBlock: prefix + "product_desc_att_variant_view_details" + postfix,
            productAttvariantviewdetailsText: prefix + "product_desc_att_variant_view_details_text",
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
            productPackOfBlock: prefix + "product_desc_pack_of" + postfix,
            productPackOfLeftBlock: prefix + "product_desc_pack_of_left" + postfix,
            productPackOfListBlock: prefix + "product_desc_pack_of_list" + postfix,
            productPackOfRightBlock: prefix + "product_desc_pack_of_right" + postfix,
            productPackOfLeftBtnBlock: prefix + "product_desc_pack_of_left_btn" + postfix,
            productPackOfLeftBtnImgBlock: prefix + "product_desc_pack_of_left_btn_img" + postfix,
            productPackOfLeftBtnImg: prefix + "product_desc_pack_of_left_btn_img",
            productPackOfRightBtnBlock: prefix + "product_desc_pack_of_right_btn" + postfix,
            productPackOfRightBtnImgBlock: prefix + "product_desc_pack_of_right_btn_img" + postfix,
            productPackOfRightBtnImg: prefix + "product_desc_pack_of_right_btn_img",
            productPackOfItemBlock: prefix + "product_desc_pack_of_item" + postfix,
            productPackOfItemTitleBlock: prefix + "product_desc_pack_of_item_title" + postfix,
            productPackOfItemTitleTextBlock: prefix + "product_desc_pack_of_item_title_text" + postfix,
            productPackOfItemTitleText: prefix + "product_desc_pack_of_item_title_text",
            productPackOfItemImgBlock: prefix + "product_desc_pack_of_item_img" + postfix,
            productPackOfItemImg: prefix + "product_desc_pack_of_item_img",
            productPackOfItemQuantityBlock: prefix + "product_desc_pack_of_item_quantity" + postfix,
            productPackOfItemQuantityTextBlock: prefix + "product_desc_pack_of_item_quantity_text" + postfix,
            productPackOfItemQuantityText: prefix + "product_desc_pack_of_item_quantity_text",
            productPackOfItemPriceBlock: prefix + "product_desc_pack_of_item_price" + postfix,
            productPackOfItemPriceRegularBlock: prefix + "product_desc_pack_of_item_price_regular" + postfix,
            productPackOfItemPriceRegularTextBlock: prefix + "product_desc_pack_of_item_price_regular_text" + postfix,
            productPackOfItemPriceRegularText: prefix + "product_desc_pack_of_item_price_regular_text",
            productPackOfItemPriceActiveBlock: prefix + "product_desc_pack_of_item_price_active" + postfix,
            productPackOfItemPriceActiveTextBlock: prefix + "product_desc_pack_of_item_price_active_text" + postfix,
            productPackOfItemPriceActiveText: prefix + "product_desc_pack_of_item_price_active_text",
            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productQtyBlock: prefix + "product_desc_qty" + postfix,
            productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
            productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
            productQtyDownBtn: prefix + "product_desc_qty_down_btn",
            productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
            productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
            productQtyInputText: prefix + "product_desc_qty_input_text",
            productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
            productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
            productQtyUpBtn: prefix + "product_desc_qty_up_btn",
            productAddBlock: prefix + "product_desc_add" + postfix,
            productAddTextBlock: prefix + "product_desc_add_text" + postfix,
            productAddText: prefix + "product_desc_add_text",
            productAddspan: prefix + "product_desc_add_span",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",
            productvariantPopupClose: prefix + "product_desc_variant_popup_close" + postfix,
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            productAddTitle: prefix + "product_desc_add_title_text" + postfix,
            productDescriptionMainBlock: prefix + "product_description_main" + postfix,

            productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
            productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
            productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
            productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
            productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
        },
        dom: {
            pdpModalBlock: ["pdpModalTitleBlock", "pdpModalBundleBlock"],
            pdpModalTitleBlock: ["pdpModalTitleTextBlock", "pdpModalTitleImgBlock"],
            pdpModalTitleTextBlock: ["pdpModalTitleText"],
            pdpModalTitleImgBlock: ["pdpModalTitleImg"],
            pdpModalBundleBlock: ["pdpModalMainProductBlock", "pdpModalAddIconBlock", "pdpModalBundleProductBlock","pdpModalBundleCartOverlay", "pdpModalBundleCartBlock"],
            pdpModalMainProductBlock: ["productModuleBlock"],
            pdpModalAddIconBlock: ["pdpAddIconImgBlock"],
            pdpAddIconImgBlock: ["pdpAddIconImg"],

            pdpModalBundleProductBlock: ["pdpBundleProductHeaderBlock", "pdpBundleProductLeftBtnBlock", "pdpBundleProductListBlock", "pdpBundleProductNavBlock", "pdpBundleProductRightBtnBlock"],
            pdpBundleProductHeaderBlock: ["pdpBundleProductHeaderText"],
            pdpBundleProductLeftBtnBlock: ["pdpBundleProductLeftBtnImgBlock"],
            pdpBundleProductLeftBtnImgBlock: ["pdpBundleProductLeftBtnImg"],
            pdpBundleProductRightBtnBlock: ["pdpBundleProductRightBtnImgBlock"],
            pdpBundleProductRightBtnImgBlock: ["pdpBundleProductRightBtnImg"],
            pdpBundleProductListBlock: ["pdpBundleProductListMainBlock", "pdpBundleProductListLeftBlock", "pdpBundleProductListItemsBlockShowMoreLess","pdpBundleProductListItemsWrapperBlock", "pdpBundleProductListRightBlock"],
            pdpBundleProductListItemsWrapperBlock:["pdpBundleProductListItemsWrapperHeaderBlock","pdpBundleProductListItemsBlock"],
            pdpBundleProductListItemsWrapperHeaderBlock:["pdpBundleProductListItemsWrapperHeaderText","pdpBundleProductListItemsWrapperHeaderclose"],
            pdpBundleProductListMainBlock: ["pdpBundleProductListMainLeftBlock", "pdpBundleProductListMainListBlock", "pdpBundleProductListMainRightBlock"],
            pdpBundleProductListMainLeftBlock: ["pdpBundleProductListMainLeftBtnBlock"],
            pdpBundleProductListMainLeftBtnBlock: ["pdpBundleProductListMainLeftBtnImgBlock", "pdpBundleProductListMainLeftBtnTextBlock"],
            pdpBundleProductListMainLeftBtnImgBlock: ["pdpBundleProductListMainLeftBtnImg"],
            pdpBundleProductListMainLeftBtnTextBlock: ["pdpBundleProductListMainLeftBtnText"],
            pdpBundleProductListMainListBlock: ["productModuleBlock"],
            pdpBundleProductListMainRightBlock: ["pdpBundleProductListMainRightBtnBlock"],
            pdpBundleProductListMainRightBtnBlock: ["pdpBundleProductListMainRightBtnImgBlock", "pdpBundleProductListMainRightBtnTextBlock"],
            pdpBundleProductListMainRightBtnImgBlock: ["pdpBundleProductListMainRightBtnImg"],
            pdpBundleProductListMainRightBtnTextBlock: ["pdpBundleProductListMainRightBtnText"],
            pdpBundleProductListLeftBlock: ["pdpBundleProductListLeftBtnBlock"],
            pdpBundleProductListLeftBtnBlock: ["pdpBundleProductListLeftBtnImgBlock"],
            pdpBundleProductListLeftBtnImgBlock: ["pdpBundleProductListLeftBtnImg"],
            pdpBundleProductListRightBlock: ["pdpBundleProductListRightBtnBlock"],
            pdpBundleProductListRightBtnBlock: ["pdpBundleProductListRightBtnImgBlock"],
            pdpBundleProductListRightBtnImgBlock: ["pdpBundleProductListRightBtnImg"],
            pdpBundleProductListItemsBlockShowMoreLess:["pdpBundleProductListItemsBlockShowMoreLessText"],
            pdpBundleProductListItemsBlock: ["pdpBundleProductListItemBlock"],
            pdpBundleProductListItemBlock: ["pdpBundleProductListItemAddedBlock", "pdpBundleProductListItemImgBlock", "pdpBundleProductListItemTitleBlock", "pdpBundleProductListItemPriceBlock"],
            pdpBundleProductListItemAddedBlock: ["pdpBundleProductListItemAddedBtnBlock"],
            pdpBundleProductListItemAddedBtnBlock: ["pdpBundleProductListItemAddedBtnImgBlock", "pdpBundleProductListItemAddedBtnTextBlock"],
            pdpBundleProductListItemAddedBtnImgBlock: ["pdpBundleProductListItemAddedBtnImg"],
            pdpBundleProductListItemAddedBtnTextBlock: ["pdpBundleProductListItemAddedBtnText"],
            pdpBundleProductListItemImgBlock: ["pdpBundleProductListItemImg"],
            pdpBundleProductListItemTitleBlock: ["pdpBundleProductListItemTitleTextBlock"],
            pdpBundleProductListItemTitleTextBlock: ["pdpBundleProductListItemTitleText"],
            pdpBundleProductListItemPriceBlock: ["pdpBundleProductListItemPriceActiveBlock"],
            pdpBundleProductListItemPriceActiveBlock: ["pdpBundleProductListItemPriceActiveTextBlock"],
            pdpBundleProductListItemPriceActiveTextBlock: ["pdpBundleProductListItemPriceActiveText"],

            pdpModalBundleCartBlock: ["pdpBundleCartTitleBlock", "pdpBundleCartPriceBlock", "pdpBundleCartAddedBlock", "pdpBundleCartSummaryBlock"],
            pdpBundleCartTitleBlock: ["pdpBundleCartTitleTextBlock", "pdpBundleCartTitleImgBlock"],
            pdpBundleCartTitleTextBlock: ["pdpBundleCartTitleText"],
            pdpBundleCartTitleImgBlock: ["pdpBundleCartTitleImg"],
            pdpBundleCartPriceBlock: ["pdpBundleCartPriceMainBlock", "pdpBundleCartPriceAddonBlock"],
            pdpBundleCartPriceMainBlock: ["pdpBundleCartPriceMainTitleBlock", "pdpBundleCartPriceMainFigureBlock"],
            pdpBundleCartPriceMainTitleBlock: ["pdpBundleCartPriceMainTitleTextBlock"],
            pdpBundleCartPriceMainTitleTextBlock: ["pdpBundleCartPriceMainTitleText"],
            pdpBundleCartPriceMainFigureBlock: ["pdpBundleCartPriceMainFigureTextBlock"],
            pdpBundleCartPriceMainFigureTextBlock: ["pdpBundleCartPriceMainFigureText"],
            pdpBundleCartPriceAddonBlock: ["pdpBundleCartPriceAddonTitleBlock", "pdpBundleCartPriceAddonFigureBlock"],
            pdpBundleCartPriceAddonTitleBlock: ["pdpBundleCartPriceAddonTitleTextBlock"],
            pdpBundleCartPriceAddonTitleTextBlock: ["pdpBundleCartPriceAddonTitleText"],
            pdpBundleCartPriceAddonFigureBlock: ["pdpBundleCartPriceAddonFigureTextBlock"],
            pdpBundleCartPriceAddonFigureTextBlock: ["pdpBundleCartPriceAddonFigureText"],
            pdpBundleCartAddedBlock: ["pdpBundleCartAddedProductBlock"],
            pdpBundleCartAddedProductBlock: ["pdpBundleCartAddedProductImgBlock", "pdpBundleCartAddedProductTitleBlock", "pdpBundleCartAddedProductQtyBlock",  "pdpBundleCartAddedProductPriceBlock","pdpBundleCartAddedProductAttBlock", "pdpBundleCartAddedProductEditBlock"],
            pdpBundleCartAddedProductImgBlock: ["pdpBundleCartAddedProductImg"],
            pdpBundleCartAddedProductTitleBlock: ["pdpBundleCartAddedProductTitleTextBlock"],
            pdpBundleCartAddedProductTitleTextBlock: ["pdpBundleCartAddedProductTitleText"],
            pdpBundleCartAddedProductPriceBlock: ["pdpBundleCartAddedProductPriceTextBlock"],
            pdpBundleCartAddedProductPriceTextBlock: ["pdpBundleCartAddedProductPriceText"],
            pdpBundleCartAddedProductAttBlock: ["pdpBundleCartAddedProductAttColorBlock", "pdpBundleCartAddedProductAttSizeBlock"],
            pdpBundleCartAddedProductAttColorBlock: ["pdpBundleCartAddedProductAttColorTextBlock"],
            pdpBundleCartAddedProductAttColorTextBlock: ["pdpBundleCartAddedProductAttColorText"],
            pdpBundleCartAddedProductAttSizeBlock: ["pdpBundleCartAddedProductAttSizeTextBlock"],
            pdpBundleCartAddedProductAttSizeTextBlock: ["pdpBundleCartAddedProductAttSizeText"],
            pdpBundleCartAddedProductQtyBlock: ["pdpBundleCartAddedProductQtyTextBlock"],
            pdpBundleCartAddedProductQtyTextBlock: ["pdpBundleCartAddedProductQtyText"],
            pdpBundleCartAddedProductEditBlock: ["pdpBundleCartAddedProductEditTextBlock", "pdpBundleCartAddedProductEditImgBlock"],
            pdpBundleCartAddedProductEditTextBlock: ["pdpBundleCartAddedProductEditText"],
            pdpBundleCartAddedProductEditImgBlock: ["pdpBundleCartAddedProductEditImg"],
            pdpBundleCartSummaryBlock: ["pdpBundleCartSummaryTitleBlock","pdpBundleCartSummaryPriceSaveBlock", "pdpBundleCartSummaryViewBlock", "pdpBundleCartSummaryAddBlock","pdpBundleCartSummarySaveAddBlock"],
            pdpBundleCartSummarySaveAddBlock:["pdpBundleCartSummarySaveAddText"],
            pdpBundleCartSummaryTitleBlock: ["pdpBundleCartSummaryTitleTextBlock","pdpBundleCartSummaryPriceBlock"],
            pdpBundleCartSummaryTitleTextBlock: ["pdpBundleCartSummaryTitleText"],
            pdpBundleCartSummaryViewBlock: ["pdpBundleCartSummaryViewBtnBlock"],
            pdpBundleCartSummaryViewBtnBlock: ["pdpBundleCartSummaryViewBtnImgBlock", "pdpBundleCartSummaryViewBtnTextBlock", "pdpBundleCartSummaryViewBtnCountBlock"],
            pdpBundleCartSummaryViewBtnImgBlock: ["pdpBundleCartSummaryViewBtnImg"],
            pdpBundleCartSummaryViewBtnTextBlock: ["pdpBundleCartSummaryViewBtnText"],
            pdpBundleCartSummaryViewBtnCountBlock: ["pdpBundleCartSummaryViewBtnCount"],
            pdpBundleCartSummaryPriceBlock: ["pdpBundleCartSummaryPriceActiveBlock", "pdpBundleCartSummaryPriceRegularBlock"],
            pdpBundleCartSummaryPriceSaveBlock:["pdpBundleCartSummaryPriceSaveText"],
            pdpBundleCartSummaryPriceRegularBlock: ["pdpBundleCartSummaryPriceRegularTextBlock"],
            pdpBundleCartSummaryPriceRegularTextBlock: ["pdpBundleCartSummaryPriceRegularText"],
            pdpBundleCartSummaryPriceActiveBlock: ["pdpBundleCartSummaryPriceActiveTextBlock"],
            pdpBundleCartSummaryPriceActiveTextBlock: ["pdpBundleCartSummaryPriceActiveText"],
            // pdpBundleCartSummaryAddBlock: ["pdpBundleCartSummaryAddBtnBlock"],
            pdpBundleCartSummaryAddBlock: ["pdpBundleCartSummaryAddBtnBlock", "pdpBundleCartSummaryAddBtnClickCollectBlock", "pdpBundleCartSummaryAddBtnImgText"],
            pdpBundleCartSummaryAddBtnBlock: ["pdpBundleCartSummaryAddBtnTextBlock", "pdpBundleCartSummaryAddBtnImgBlock"],
            pdpBundleCartSummaryAddBtnTextBlock: ["pdpBundleCartSummaryAddBtnText","pdpBundleCartSummaryAddBtnspan"],
            // pdpBundleCartSummaryAddBtnText:["pdpBundleCartSummaryAddBtnspan"],
            pdpBundleCartSummaryAddBtnImgBlock: ["pdpBundleCartSummaryAddBtnImg"],

            pdpBundleCartSummaryAddBtnClickCollectBlock: ["pdpBundleCartSummaryAddBtnClickCollectTextBlock", "pdpBundleCartSummaryAddBtnClickCollectImgBlock"],
            //,"pdpBundleCartSummaryAddBtnClickCollectImgText"
            pdpBundleCartSummaryAddBtnClickCollectTextBlock: ["pdpBundleCartSummaryAddBtnClickCollectText"],
            pdpBundleCartSummaryAddBtnClickCollectImgBlock: ["pdpBundleCartSummaryAddBtnClickCollectImg"],

            /////////////Click & Collect/////////

            // pdpBundleCartSummaryClickCollectBlock: ["pdpBundleCartSummaryClickCollectBtnBlock"],
            // pdpBundleCartSummaryClickCollectBtnBlock: ["pdpBundleCartSummaryClickCollectBtnTextBlock", "pdpBundleCartSummaryClickCollectBtnImgBlock"],
            // pdpBundleCartSummaryClickCollectBtnTextBlock: ["pdpBundleCartSummaryClickCollectBtnText","pdpBundleCartSummaryClickCollectBtnspan"],
            // // pdpBundleCartSummaryAddBtnText:["pdpBundleCartSummaryAddBtnspan"],
            // pdpBundleCartSummaryClickCollectBtnImgBlock: ["pdpBundleCartSummaryClickCollectBtnImg"],


            productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
            productShowcaseBlock: ["productBlock"],
            productModalBlock: ["productBlock"],
            productBlock: ["productHeaderMainBlock", "productInfoMainBlock","productDescriptionMainBlock"],
            productInfoMainBlock:["productViewInfoBlock","productDescBlock"],
            productHeaderMainBlock:["productHeaderBlock","productDescriptionHeaderBlock", "productHeaderImgBlock"],
            productHeaderBlock: ["productHeaderTitleBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],

            productDescriptionHeaderBlock: ["productDescriptionHeaderTitleBlock"],
            productDescriptionHeaderTitleBlock: ["productDescriptionHeaderTitleTextBlock"],
            productDescriptionHeaderTitleTextBlock: ["productDescriptionHeaderTitleText"],
            productDescriptionHeaderImgBlock: ["productDescriptionHeaderImg"],
            productViewInfoBlock:["productViewImgDescBlock"],
            productViewImgDescBlock:["productImgBlock","productViewshortDescBlock"],
            productViewshortDescBlock:["productViewshortDescText"],
            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImgBlock", "productImgMainZoomBlock"],
            productImgMainImgBlock: ["productImgMainImg"],
            productImgMainZoomBlock: ["productImgMainZoomBtnBlock"],
            productImgMainZoomBtnBlock: ["productImgMainZoomBtnImgBlock", "productImgMainZoomBtnTextBlock"],
            productImgMainZoomBtnImgBlock: ["productImgMainZoomBtnImg","productImgMainZoomminusImg","productImgMainZoomRuturnImg"],
            productImgMainZoomBtnTextBlock: ["productImgMainZoomBtnText"],
            productImgGalleryBlock: ["productImgGalleryHeaderBlock", "productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryHeaderBlock: ["productImgGalleryHeaderTitleBlock", "productImgGalleryHeaderToggleBlock"],
            productImgGalleryHeaderTitleBlock: ["productImgGalleryHeaderTitleImgBlock", "productImgGalleryHeaderTitleTextBlock"],
            productImgGalleryHeaderTitleImgBlock: ["productImgGalleryHeaderTitleImg"],
            productImgGalleryHeaderTitleTextBlock: ["productImgGalleryHeaderTitleText"],
            productImgGalleryHeaderToggleBlock: ["productImgGalleryHeaderToggleImgBlock", "productImgGalleryHeaderToggleTextBlock"],
            productImgGalleryHeaderToggleImgBlock: ["productImgGalleryHeaderToggleImg"],
            productImgGalleryHeaderToggleTextBlock: ["productImgGalleryHeaderToggleText"],
            productImgGalleryLeftBlock: ["productImgGalleryLeftBtnBlock"],
            productImgGalleryLeftBtnBlock: ["productImgGalleryLeftBtnImgBlock", "productImgGalleryLeftBtnTextBlock"],
            productImgGalleryLeftBtnImgBlock: ["productImgGalleryLeftBtnImg"],
            productImgGalleryLeftBtnTextBlock: ["productImgGalleryLeftBtnText"],
            productImgGalleryListBlock: ["productImgGalleryListItemBlock"],
            productImgGalleryListItemBlock: ["productImgGalleryListItemImgBlock", "productImgGalleryListItemTextBlock"],
            productImgGalleryListItemImgBlock: ["productImgGalleryListItemImg"],
            productImgGalleryListItemTextBlock: ["productImgGalleryListItemText"],
            productImgGalleryRightBlock: ["productImgGalleryRightBtnBlock"],
            productImgGalleryRightBtnBlock: ["productImgGalleryRightBtnImgBlock", "productImgGalleryRightBtnTextBlock"],
            productImgGalleryRightBtnImgBlock: ["productImgGalleryRightBtnImg"],
            productImgGalleryRightBtnTextBlock: ["productImgGalleryRightBtnText"],
            productDescBlock: ["productTitleBlock","productRatingsBlock","productPriceBlock","productOfferBlock","productAttDetailsBlock", "productInfoBlock", "productPackOfBlock","productQtyAddBtnBlock"],
            productAttDetailsBlock:["productAttBlock","productvariantSimpleBlock","productDetailsBlock"],
            productOfferBlock: ["productOfferHeaderBlock", "productOfferTextBlock"],
            productDetailsBlock:["productDetailstext"],
            productvariantSimpleBlock:["productvariantSimpleText"],
            productTitleBlock: ["productTitleTextBlock","productMaufactureTextBlock"],
            productTitleTextBlock: ["productTitleTextHeader","productTitleText"],
            productMaufactureTextBlock: ["productMaufactureText"],
            productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock","productInfoFullDescBlock"],
            productInfoImgBlock: ["productInfoImg"],
            productInfoTextBlock: ["productInfoText"],
            productInfoFullDescBlock: ["productInfoFullDescDescBlock","productInfoFullDescShippingBlock"],
            productInfoFullDescDescBlock:["productInfoFullDescDescHeaderBlock","productInfoFullDescText"],
            productInfoFullDescDescHeaderBlock: ["productInfoFullDescDescHeaderText"],
            productInfoFullDescShippingBlock: ["productInfoFullDescShippingHeaderBlock", "productInfoFullDescShippingText"],
            productInfoFullDescShippingHeaderBlock: ["productInfoFullDescShippingHeaderText"],
            productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock","productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText","productPriceWorthTextMsg"],
            productAttBlock: ["productvariantPopupClose","productAddErrText","productAddTitle","productAttzeroBlock","productAttSizeBlock", "productAttColorBlock","productAttthirdBlock","productAttfourthBlock","productAttEditBlock","productAttvariantaddBlock","productAttvariantviewdetailsBlock"],
            productAttvariantaddBlock:["productAttvariantaddText"],
            productAttvariantviewdetailsBlock:["productAttvariantviewdetailsText"],
            productAttColorBlock: ["productAttColorTitleBlock", "productAttColorListBlock"],
            productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
            productAttColorTitleTextBlock: ["productAttColorTitleText", "productAttColorTitleTextSelected"],
            productAttColorListBlock: ["productAttColorListItemBlock"],
            productAttColorListItemBlock: ["productAttColorListItemImgBlock", "productAttColorListItemTextBlock"],
            productAttColorListItemImgBlock: ["productAttColorListItemImg"],
            productAttColorListItemTextBlock: ["productAttColorListItemText"],
            
            productAttzeroBlock: ["productAttzeroTitleBlock", "productAttzeroListBlock"],
            productAttzeroTitleBlock: ["productAttzeroTitleTextBlock"],
            productAttzeroTitleTextBlock: ["productAttzeroTitleText", "productAttzeroTitleTextSelected"],
            productAttzeroListBlock: ["productAttzeroListItemBlock"],
            productAttzeroListItemBlock: ["productAttzeroListItemImgBlock", "productAttzeroListItemTextBlock"],
            productAttzeroListItemImgBlock: ["productAttzeroListItemImg"],
            productAttzeroListItemTextBlock: ["productAttzeroListItemText"],

            productAttthirdBlock: ["productAttthirdTitleBlock", "productAttthirdListBlock"],
            productAttthirdTitleBlock: ["productAttthirdTitleTextBlock"],
            productAttthirdTitleTextBlock: ["productAttthirdTitleText", "productAttthirdTitleTextSelected"],
            productAttthirdListBlock: ["productAttthirdListItemBlock"],
            productAttthirdListItemBlock: ["productAttthirdListItemImgBlock", "productAttthirdListItemTextBlock"],
            productAttthirdListItemImgBlock: ["productAttthirdListItemImg"],
            productAttthirdListItemTextBlock: ["productAttthirdListItemText"],

            productAttfourthBlock: ["productAttfourthTitleBlock", "productAttfourthListBlock"],
            productAttfourthTitleBlock: ["productAttfourthTitleTextBlock"],
            productAttfourthTitleTextBlock: ["productAttfourthTitleText", "productAttfourthTitleTextSelected"],
            productAttfourthListBlock: ["productAttfourthListItemBlock"],
            productAttfourthListItemBlock: ["productAttfourthListItemImgBlock", "productAttfourthListItemTextBlock"],
            productAttfourthListItemImgBlock: ["productAttfourthListItemImg"],
            productAttfourthListItemTextBlock: ["productAttfourthListItemText"],

            productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeListBlock"],
            productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
            productAttSizeTitleTextBlock: ["productAttSizeTitleText", "productAttSizeTitleTextSelected"],
            productAttSizeListBlock: ["productAttSizeListItemBlock"],
            productAttSizeListItemBlock: ["productAttSizeListItemImgBlock", "productAttSizeListItemTextBlock"],
            productAttSizeListItemImgBlock: ["productAttSizeListItemImg"],
            productAttSizeListItemTextBlock: ["productAttSizeListItemText"],
            productAttEditBlock: ["productAttEditText"],
            productPackOfBlock: ["productPackOfLeftBlock", "productPackOfListBlock", "productPackOfRightBlock"],
            productPackOfLeftBlock: ["productPackOfLeftBtnBlock"],
            productPackOfLeftBtnBlock: ["productPackOfLeftBtnImgBlock"],
            productPackOfLeftBtnImgBlock: ["productPackOfLeftBtnImg"],
            productPackOfRightBlock: ["productPackOfRightBtnBlock"],
            productPackOfRightBtnBlock: ["productPackOfRightBtnImgBlock"],
            productPackOfRightBtnImgBlock: ["productPackOfRightBtnImg"],
            productPackOfListBlock: ["productPackOfItemBlock"],
            productPackOfItemBlock: ["productPackOfItemImgBlock", "productPackOfItemTitleBlock", "productPackOfItemQuantityBlock", "productPackOfItemPriceBlock"],
            productPackOfItemImgBlock: ["productPackOfItemImg"],
            productPackOfItemTitleBlock: ["productPackOfItemTitleTextBlock"],
            productPackOfItemTitleTextBlock: ["productPackOfItemTitleText"],
            productPackOfItemQuantityBlock: ["productPackOfItemQuantityTextBlock"],
            productPackOfItemQuantityTextBlock: ["productPackOfItemQuantityText"],
            productPackOfItemPriceBlock: ["productPackOfItemPriceActiveBlock", "productPackOfItemPriceRegularBlock"],
            productPackOfItemPriceActiveBlock: ["productPackOfItemPriceActiveTextBlock"],
            productPackOfItemPriceActiveTextBlock: ["productPackOfItemPriceActiveText"],
            productPackOfItemPriceRegularBlock: ["productPackOfItemPriceRegularTextBlock"],
            productPackOfItemPriceRegularTextBlock: ["productPackOfItemPriceRegularText"],
            productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock","productAddBlockclickcollect"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText","productAddspan"],
            productAddImgBlock: ["productAddImg"],
            productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
            productAddTextBlockclickcollect: ["productAddTextclickcollect"],
            productAddImgBlockclickcollect: ["productAddImgclickcollect"],
        }

    },
    sidebar: {
        className: {
            sidebarModalBlock: prefix + "sidebar_modal" + postfix,
            sidebarHeaderBlock: prefix + "sidebar_header" + postfix,
            sidebarCartAddedBlock: prefix + "sidebar_cart_added" + postfix,
            sidebarRecommendedBlock: prefix + "sidebar_recommended" + postfix,
            sidebarCheckoutBlock: prefix + "sidebar_checkout" + postfix,
            sidebarHeaderContinueBlock: prefix + "header_continue" + postfix,
            sidebarHeaderContinueImgBlock: prefix + "header_continue_img" + postfix,
            sidebarHeaderContinueImg: prefix + "header_continue_img",
            sidebarHeaderContinueTextBlock: prefix + "header_continue_text" + postfix,
            sidebarHeaderContinueText: prefix + "header_continue_text",
            sidebarHeaderTitleBlock: prefix + "header_title" + postfix,
            sidebarHeaderTitleTextBlock: prefix + "header_title_text" + postfix,
            sidebarHeaderTitleText: prefix + "header_title_text",
            sidebarHeaderSubTitleTextBlock: prefix + "header_sub_title_text" + postfix,
            sidebarHeaderSubTitleText: prefix + "header_sub_title_text",
            sidebarHeaderItemBlock: prefix + "header_item" + postfix,
            sidebarHeaderItemCountBlock: prefix + "header_item_count" + postfix,
            sidebarHeaderItemCountTitleBlock: prefix + "header_item_count_title" + postfix,
            sidebarHeaderItemCountTitleTextBlock: prefix + "header_item_count_title_text" + postfix,
            sidebarHeaderItemCountTitleText: prefix + "header_item_count_title_text",
            sidebarHeaderItemCountFigureBlock: prefix + "header_item_count_figure" + postfix,
            sidebarHeaderItemCountFigureTextBlock: prefix + "header_item_count_figure_text" + postfix,
            sidebarHeaderItemCountFigureText: prefix + "header_item_count_figure_text",
            sidebarCartAddedProductDescSubTotalPriceBlock: prefix + "cart_added_product_desc_subtotal_price" + postfix,
            sidebarCartAddedProductDescSubTotalPriceRegularBlock: prefix + "cart_added_product_desc_subtotal_price_regular" + postfix,
            sidebarCartAddedProductDescSubTotalRegularTextBlock: prefix + "cart_added_product_desc_subtotal_price_regular_text" + postfix,
            sidebarCartAddedProductDescSubTotalRegularText: prefix + "cart_added_product_desc_subtotal_price_regular_text",
            sidebarCartAddedProductDescSubTotalActiveBlock: prefix + "cart_added_product_desc_subtotal_price_active" + postfix,
            sidebarCartAddedProductDescSubTotalActiveTextBlock: prefix + "cart_added_product_desc_subtotal_price_active_text" + postfix,
            sidebarCartAddedProductDescSubTotalActiveText: prefix + "cart_added_product_desc_subtotal_price_active_text",
            sidebarCartAddedProductDescSubTotalActiveTextMsg: prefix + "cart_added_product_desc_subtotal_price_active_text_msg",

            sidebarCartAddedLeftBlock: prefix + "cart_added_left" + postfix,
            sidebarCartAddedLeftBtnBlock: prefix + "cart_added_left_btn" + postfix,
            sidebarCartAddedLeftBtnImgBlock: prefix + "cart_added_left_btn_img" + postfix,
            sidebarCartAddedLeftBtnImg: prefix + "cart_added_left_btn_img",
            sidebarCartAddedRightBlock: prefix + "cart_added_right" + postfix,
            sidebarCartAddedRightBtnBlock: prefix + "cart_added_right_btn" + postfix,
            sidebarCartAddedRightBtnImgBlock: prefix + "cart_added_right_btn_img" + postfix,
            sidebarCartAddedRightBtnImg: prefix + "cart_added_right_btn_img",
            sidebarCartAddedListParentBlock: prefix + "cart_added_list_parent" + postfix,
            sidebarCartAddedListBlock: prefix + "cart_added_list" + postfix,
            sidebarCartAddedProductBlock: prefix + "cart_added_product" + postfix,
            sidebarCartAddedProductImgBlock: prefix + "cart_added_product_img" + postfix,
            sidebarCartAddedProductImg: prefix + "cart_added_product_img",
            sidebarCartAddedProductDescBlock: prefix + "cart_added_product_desc" + postfix,
            sidebarCartAddedProductqtyBlock: prefix + "cart_added_product_qty" + postfix,
            sidebarCartAddedProductDescTitleBlock: prefix + "cart_added_product_desc_title" + postfix,
            sidebarCartAddedProductDescTitleTextBlock: prefix + "cart_added_product_desc_title_text" + postfix,
            sidebarCartAddedProductDescTitleText: prefix + "cart_added_product_desc_title_text",
            sidebarCartAddedProductDescQTYPriceBlock: prefix + "cart_added_product_desc_qty_price" + postfix,
            sidebarCartAddedProductDescPriceBlock: prefix + "cart_added_product_desc_price" + postfix,
            sidebarCartAddedProductDescPriceRegularBlock: prefix + "cart_added_product_desc_price_regular" + postfix,
            sidebarCartAddedProductDescPriceRegularTextBlock: prefix + "cart_added_product_desc_price_regular_text" + postfix,
            sidebarCartAddedProductDescPriceRegularText: prefix + "cart_added_product_desc_price_regular_text",
            sidebarCartAddedProductDescPriceActiveBlock: prefix + "cart_added_product_desc_price_active" + postfix,
            sidebarCartAddedProductDescPriceActiveTextBlock: prefix + "cart_added_product_desc_price_active_text" + postfix,
            sidebarCartAddedProductDescPriceActiveText: prefix + "cart_added_product_desc_price_active_text",
            sidebarCartAddedProductDescPriceActiveTextMsg: prefix + "cart_added_product_desc_price_active_text_msg",
            sidebarCartAddedProductDescAttBlock: prefix + "cart_added_product_desc_att" + postfix,
            sidebarCartAddedProductDescAttColorBlock: prefix + "cart_added_product_desc_att_color" + postfix,
            sidebarCartAddedProductDescAttColorTextBlock: prefix + "cart_added_product_desc_att_color_text" + postfix,
            sidebarCartAddedProductDescAttColorText: prefix + "cart_added_product_desc_att_color_text" + postfix,
            sidebarCartAddedProductDescAttSizeBlock: prefix + "cart_added_product_desc_att_size" + postfix,
            sidebarCartAddedProductDescAttSizeTextBlock: prefix + "cart_added_product_desc_att_size_text" + postfix,
            sidebarCartAddedProductDescAttSizeText: prefix + "cart_added_product_desc_att_size_text",
            

            sidebarRecommendedTitleBlock: prefix + "recommended_title" + postfix,
            sidebarRecommendedTitleTextBlock: prefix + "recommended_title_text" + postfix,
            sidebarRecommendedTitleText: prefix + "recommended_title_text",
            sidebarRecommendedTitleImgBlock: prefix + "recommended_title_img" + postfix,
            sidebarRecommendedTitleImg: prefix + "recommended_title_img",
            sidebarRecommendedTabsBlock: prefix + "recommended_tabs" + postfix,
            sidebarRecommendedTabsTitleBlock: prefix + "recommended_tabs_title" + postfix,
            sidebarRecommendedTabsTitleTextBlock: prefix + "recommended_tabs_title_text" + postfix,
            sidebarRecommendedTabsTitleText: prefix + "recommended_tabs_title_text",
            sidebarRecommendedTabsLeftBlock: prefix + "recommended_tabs_left" + postfix,
            sidebarRecommendedTabsListBlock: prefix + "recommended_tabs_list" + postfix,
            sidebarRecommendedTabsRightBlock: prefix + "recommended_tabs_right" + postfix,
            sidebarRecommendedTabsLeftBtnBlock: prefix + "recommended_tabs_left_btn" + postfix,
            sidebarRecommendedTabsLeftBtnImgBlock: prefix + "recommended_tabs_left_btn_img" + postfix,
            sidebarRecommendedTabsLeftBtnImg: prefix + "recommended_tabs_left_btn_img",
            sidebarRecommendedTabsRightBtnBlock: prefix + "recommended_tabs_right_btn" + postfix,
            sidebarRecommendedTabsRightBtnImgBlock: prefix + "recommended_tabs_right_btn_img" + postfix,
            sidebarRecommendedTabsRightBtnImg: prefix + "recommended_tabs_right_btn_img",
            sidebarRecommendedTabsListItemBlock: prefix + "recommended_tabs_list_item" + postfix,
            sidebarRecommendedTabsListItemTextBlock: prefix + "recommended_tabs_list_item_text" + postfix,
            sidebarRecommendedTabsListItemText: prefix + "recommended_tabs_list_item_text",
            sidebarRecommendedProductsBlock: prefix + "recommended_products" + postfix,
            sidebarRecommendedProductsLeftBlock: prefix + "recommended_products_left" + postfix,
            sidebarRecommendedProductsListBlock: prefix + "recommended_products_list" + postfix,
            sidebarRecommendedProductsItemThumbBlock: prefix + "recommended_products_item_thumb" + postfix,
            sidebarRecommendedProductsListItemThumbBlock: prefix + "recommended_products_list_item_thumb" + postfix,
            sidebarRecommendedProductsListMainBlock: prefix + "recommended_products_list_main" + postfix,
            sidebarRecommendedProductsRightBlock: prefix + "recommended_products_right" + postfix,
            sidebarRecommendedProductsLeftBtnBlock: prefix + "recommended_products_left_btn" + postfix,
            sidebarRecommendedProductsLeftBtnImgBlock: prefix + "recommended_products_left_btn_img" + postfix,
            sidebarRecommendedProductsLeftBtnImg: prefix + "recommended_products_left_btn_img",
            sidebarRecommendedProductsRightBtnBlock: prefix + "recommeded_products_right_btn" + postfix,
            sidebarRecommendedProductsRightBtnImgBlock: prefix + "recommended_products_right_btn_img" + postfix,
            sidebarRecommendedProductsRightBtnImg: prefix + "recommended_products_right_btn_img",
            sidebarCheckoutContinueBlock: prefix + "checkout_continue" + postfix,
            sidebarCheckoutContinueBtnBlock: prefix + "checkout_continue_btn" + postfix,
            sidebarCheckoutContinueBtnTextBlock: prefix + "checkout_continue_btn_text" + postfix,
            sidebarCheckoutContinueBtnText: prefix + "checkout_continue_btn_text",
            sidebarCheckoutContinueBtnspan: prefix + "checkout_continue_btn_span",
            sidebarCheckoutContinueBtnImgBlock: prefix + "checkout_continue_btn_img" + postfix,
            sidebarCheckoutContinueBtnImg: prefix + "checkout_continue_btn_img",
            sidebarCheckoutBasketBlock: prefix + "checkout_basket" + postfix,
            sidebarCheckoutBasketBtnBlock: prefix + "checkout_basket_btn" + postfix,
            sidebarCheckoutBasketBtnTextBlock: prefix + "checkout_basket_btn_text" + postfix,
            sidebarCheckoutBasketBtnText: prefix + "checkout_basket_btn_text",
            sidebarCheckoutBasketBtnspan: prefix + "checkout_basket_btn_span",
            sidebarCheckoutBasketBtnImgBlock: prefix + "checkout_basket_btn_img" + postfix,
            sidebarCheckoutBasketBtnImg: prefix + "checkout_basket_btn_img",

            productModuleBlock: prefix + "product_module" + postfix,
            productModalBlock: prefix + "product_modal" + postfix,
            productShowcaseBlock: prefix + "product_showcase" + postfix,
            productBlock: prefix + "product" + postfix,
            productHeaderMainBlock: prefix + "product_header_main" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",

            productDescriptionHeaderBlock: prefix + "product_Description_header" + postfix,
            productDescriptionHeaderTitleBlock: prefix + "product_Description_header_title" + postfix,
            productDescriptionHeaderTitleTextBlock: prefix + "product_Description_header_title_text" + postfix,
            productDescriptionHeaderTitleText: prefix + "product_Description_header_title_text",
            productDescriptionHeaderImgBlock: prefix + "product_Description_header_img" + postfix,
            productDescriptionHeaderImg: prefix + "product_Description_header_img",

            productInfoMainBlock: prefix + "product_info_main" + postfix,
            productViewInfoBlock: prefix + "product_view_info" + postfix,
            productViewImgDescBlock: prefix + "product_view_img_desc" + postfix,
            productViewshortDescBlock: prefix + "product_view_short_desc" + postfix,
            productViewshortDescText: prefix + "product_view_img_desc_text",
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,
            productImgMainImgBlock: prefix + "product_img_main_img" + postfix,
            productImgMainImg: prefix + "product_img_main_img",
            productImgMainZoomBlock: prefix + "product_img_main_zoom" + postfix,
            productImgMainZoomBtnBlock: prefix + "product_img_main_zoom_btn" + postfix,
            productImgMainZoomBtnImgBlock: prefix + "product_img_main_zoom_btn_img" + postfix,
            productImgMainZoomBtnImg: prefix + "product_img_main_zoom_btn_img",
            productImgMainZoomminusImg: prefix + "product_img_main_zoom_minus_img",
            productImgMainZoomRuturnImg: prefix + "product_img_main_zoom_return_img",
            productImgMainZoomBtnTextBlock: prefix + "product_img_main_zoom_btn_text" + postfix,
            productImgMainZoomBtnText: prefix + "product_img_main_zoom_btn_text",
            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,
            productImgGalleryHeaderBlock: prefix + "producy_img_gallery_header" + postfix,
            productImgGalleryHeaderTitleBlock: prefix + "product_img_gallery_header_title" + postfix,
            productImgGalleryHeaderTitleImgBlock: prefix + "product_img_gallery_header_title_img" + postfix,
            productImgGalleryHeaderTitleImg: prefix + "product_img_gallery_header_title_img",
            productImgGalleryHeaderTitleTextBlock: prefix + "product_img_gallery_header_title_text" + postfix,
            productImgGalleryHeaderTitleText: prefix + "product_img_gallery_header_title_text",
            productImgGalleryHeaderToggleBlock: prefix + "product_img_gallery_header_toggle" + postfix,
            productImgGalleryHeaderToggleImgBlock: prefix + "product_img_gallery_header_toggle_img" + postfix,
            productImgGalleryHeaderToggleImg: prefix + "product_img_gallery_header_toggle_img",
            productImgGalleryHeaderToggleTextBlock: prefix + "product_img_gallery_header_toggle_text" + postfix,
            productImgGalleryHeaderToggleText: prefix + "product_img_gallery_header_toggle_text",
            productImgGalleryLeftBlock: prefix + "product_img_gallery_left" + postfix,
            productImgGalleryLeftBtnBlock: prefix + "product_img_gallery_left_btn" + postfix,
            productImgGalleryLeftBtnImgBlock: prefix + "product_img_gallery_left_btn_img" + postfix,
            productImgGalleryLeftBtnImg: prefix + "product_img_gallery_left_btn_img",
            productImgGalleryLeftBtnTextBlock: prefix + "product_img_gallery_left_btn_text" + postfix,
            productImgGalleryLeftBtnText: prefix + "product_img_gallery_left_btn_text",
            productImgGalleryListBlock: prefix + "product_img_gallery_list" + postfix,
            productImgGalleryListItemBlock: prefix + "product_img_gallery_list_item" + postfix,
            productImgGalleryListItemImgBlock: prefix + "product_img_gallery_list_item_img" + postfix,
            productImgGalleryListItemImg: prefix + "product_img_gallery_list_item_img",
            productImgGalleryListItemTextBlock: prefix + "product_img_gallery_list_item_text" + postfix,
            productImgGalleryListItemText: prefix + "product_img_gallery_list_item_text",
            productImgGalleryRightBlock: prefix + "product_img_gallery_right" + postfix,
            productImgGalleryRightBtnBlock: prefix + "product_img_gallery_right_btn" + postfix,
            productImgGalleryRightBtnImgBlock: prefix + "product_img_gallery_right_btn_img" + postfix,
            productImgGalleryRightBtnImg: prefix + "product_img_gallery_right_btn_img",
            productImgGalleryRightBtnTextBlock: prefix + "product_img_gallery_right_btn_text" + postfix,
            productImgGalleryRightBtnText: prefix + "product_img_gallery_right_btn_text",
            productDescBlock: prefix + "product_desc" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",
            productMaufactureTextBlock: prefix + "product_manufacture_text" + postfix,
            productMaufactureText: prefix + "product_maufacture_text",
            productRatingsBlock: prefix + "product_desc_ratings" + postfix,
            productOfferBlock: prefix + "product_desc_offer" + postfix,
            productOfferHeaderBlock: prefix + "product_desc_offerheader" + postfix,
            productOfferTextBlock: prefix + "product_desc_offertext" + postfix,
            productInfoBlock: prefix + "product_desc_info" + postfix,
            productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
            productInfoImg: prefix + "product_desc_info_img",
            productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
            productInfoText: prefix + "product_desc_info_text",
            productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
            productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
            productInfoFullDescDescBlock: prefix + "Info_Full_desc_desc" + postfix,
            productInfoFullDescDescHeaderBlock: prefix + "Info_Full_desc_desc_header" + postfix,
            productInfoFullDescDescHeaderText: prefix + "Info_Full_desc_desc_header_text",
            productInfoFullDescShippingBlock: prefix + "Info_Full_desc_shipping" + postfix,
            productInfoFullDescShippingHeaderBlock: prefix + "Info_Full_desc_shipping_header" + postfix,
            productInfoFullDescShippingHeaderText: prefix + "Info_Full_desc_shipping_header_text",
            productInfoFullDescShippingText: prefix + "Info_Full_desc_shipping_text",
            productPriceBlock: prefix + "product_desc_price" + postfix,
            productPriceLabel: prefix + "product_price_label" + postfix,
            productPriceActiveBlock: prefix + "product_desc_price_active" + postfix,
            productPriceActiveTextBlock: prefix + "product_desc_price_active_text" + postfix,
            productPriceActiveText: prefix + "product_desc_price_active_text",
            productPriceActiveTextMsg: prefix + "product_desc_price_active_text_msg",
            productPriceRegularBlock: prefix + "product_desc_price_regular" + postfix,
            productPriceRegularTextBlock: prefix + "product_desc_price_regular_text" + postfix,
            productPriceRegularText: prefix + "product_desc_price_regular_text",
            productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
            productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
            productPriceWorthText: prefix + "product_desc_price_worth_text",
            productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
            productAttDetailsBlock: prefix + "product_desc_att_details" + postfix,
            productDetailsBlock: prefix + "product_details_prod" + postfix,
            productDetailstext: prefix + "product_details_prod_text",
            productvariantSimpleBlock: prefix + "product_variant_simple" + postfix,
            productvariantSimpleText: prefix + "product_variant_simple_text",
            productAttBlock: prefix + "product_desc_att" + postfix,
            productAttColorBlock: prefix + "product_desc_att_color" + postfix,
            productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
            productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
            productAttColorTitleText: prefix + "product_desc_att_color_title_text",
            productAttColorTitleTextSelected: prefix + "product_desc_att_color_title_text_selected",
            productAttColorListBlock: prefix + "product_desc_att_color_list" + postfix,
            productAttColorListItemBlock: prefix + "product_desc_att_color_list_item" + postfix,
            productAttColorListItemImgBlock: prefix + "product_desc_att_color_list_item_img" + postfix,
            productAttColorListItemImg: prefix + "product_desc_att_color_list_item_img",
            productAttColorListItemTextBlock: prefix + "product_desc_att_color_list_item_text" + postfix,
            productAttColorListItemText: prefix + "product_desc_att_color_list_item_text",
            productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
            productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
            productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
            productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
            productAttSizeTitleTextSelected: prefix + "product_desc_att_size_title_text_selected",
            productAttSizeListBlock: prefix + "product_desc_att_size_list" + postfix,
            productAttSizeListItemBlock: prefix + "product_desc_att_size_list_item" + postfix,
            productAttSizeListItemImgBlock: prefix + "product_desc_att_size_list_item_img" + postfix,
            productAttSizeListItemImg: prefix + "product_desc_att_size_list_item_img",
            productAttSizeListItemTextBlock: prefix + "product_desc_att_size_list_item_text" + postfix,
            productAttSizeListItemText: prefix + "product_desc_att_size_list_item_text",
            productAttzeroBlock: prefix + "product_desc_att_zero" + postfix,
            productAttzeroTitleBlock: prefix + "product_desc_att_zero_title" + postfix,
            productAttzeroTitleTextBlock: prefix + "product_desc_att_zero_title_text" + postfix,
            productAttzeroTitleText: prefix + "product_desc_att_zero_title_text",
            productAttzeroTitleTextSelected: prefix + "product_desc_att_zero_title_text_selected",
            productAttzeroListBlock: prefix + "product_desc_att_zero_list" + postfix,
            productAttzeroListItemBlock: prefix + "product_desc_att_zero_list_item" + postfix,
            productAttzeroListItemImgBlock: prefix + "product_desc_att_zero_list_item_img" + postfix,
            productAttzeroListItemImg: prefix + "product_desc_att_zero_list_item_img",
            productAttzeroListItemTextBlock: prefix + "product_desc_att_zero_list_item_text" + postfix,
            productAttzeroListItemText: prefix + "product_desc_att_zero_list_item_text",
            productAttthirdBlock: prefix + "product_desc_att_third" + postfix,
            productAttthirdTitleBlock: prefix + "product_desc_att_third_title" + postfix,
            productAttthirdTitleTextBlock: prefix + "product_desc_att_third_title_text" + postfix,
            productAttthirdTitleText: prefix + "product_desc_att_third_title_text",
            productAttthirdTitleTextSelected: prefix + "product_desc_att_third_title_text_selected",
            productAttthirdListBlock: prefix + "product_desc_att_third_list" + postfix,
            productAttthirdListItemBlock: prefix + "product_desc_att_third_list_item" + postfix,
            productAttthirdListItemImgBlock: prefix + "product_desc_att_third_list_item_img" + postfix,
            productAttthirdListItemImg: prefix + "product_desc_att_third_list_item_img",
            productAttthirdListItemTextBlock: prefix + "product_desc_att_third_list_item_text" + postfix,
            productAttthirdListItemText: prefix + "product_desc_att_third_list_item_text",
            productAttfourthBlock: prefix + "product_desc_att_fourth" + postfix,
            productAttfourthTitleBlock: prefix + "product_desc_att_fourth_title" + postfix,
            productAttfourthTitleTextBlock: prefix + "product_desc_att_fourth_title_text" + postfix,
            productAttfourthTitleText: prefix + "product_desc_att_fourth_title_text",
            productAttfourthTitleTextSelected: prefix + "product_desc_att_fourth_title_text_selected",
            productAttfourthListBlock: prefix + "product_desc_att_fourth_list" + postfix,
            productAttfourthListItemBlock: prefix + "product_desc_att_fourth_list_item" + postfix,
            productAttfourthListItemImgBlock: prefix + "product_desc_att_fourth_list_item_img" + postfix,
            productAttfourthListItemImg: prefix + "product_desc_att_fourth_list_item_img",
            productAttfourthListItemTextBlock: prefix + "product_desc_att_fourth_list_item_text" + postfix,
            productAttfourthListItemText: prefix + "product_desc_att_fourth_list_item_text",

            productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
            productAttEditTextBlock: prefix + "product_desc_att_edit_text" + postfix,
            productAttvariantaddBlock: prefix + "product_desc_att_variant_add" + postfix,
            productAttvariantaddText: prefix + "product_desc_att_variant_text",
            productAttvariantviewdetailsBlock: prefix + "product_desc_att_variant_view_details" + postfix,
            productAttvariantviewdetailsText: prefix + "product_desc_att_variant_view_details_text",
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditImgBlock: prefix + "product_desc_att_edit_img" + postfix,
            productAttEditImg: prefix + "product_desc_att_edit_img",
            productPackOfBlock: prefix + "product_desc_pack_of" + postfix,
            productPackOfLeftBlock: prefix + "product_desc_pack_of_left" + postfix,
            productPackOfListBlock: prefix + "product_desc_pack_of_list" + postfix,
            productPackOfRightBlock: prefix + "product_desc_pack_of_right" + postfix,
            productPackOfLeftBtnBlock: prefix + "product_desc_pack_of_left_btn" + postfix,
            productPackOfLeftBtnImgBlock: prefix + "product_desc_pack_of_left_btn_img" + postfix,
            productPackOfLeftBtnImg: prefix + "product_desc_pack_of_left_btn_img",
            productPackOfRightBtnBlock: prefix + "product_desc_pack_of_right_btn" + postfix,
            productPackOfRightBtnImgBlock: prefix + "product_desc_pack_of_right_btn_img" + postfix,
            productPackOfRightBtnImg: prefix + "product_desc_pack_of_right_btn_img",
            productPackOfItemBlock: prefix + "product_desc_pack_of_item" + postfix,
            productPackOfItemTitleBlock: prefix + "product_desc_pack_of_item_title" + postfix,
            productPackOfItemTitleTextBlock: prefix + "product_desc_pack_of_item_title_text" + postfix,
            productPackOfItemTitleText: prefix + "product_desc_pack_of_item_title_text",
            productPackOfItemImgBlock: prefix + "product_desc_pack_of_item_img" + postfix,
            productPackOfItemImg: prefix + "product_desc_pack_of_item_img",
            productPackOfItemQuantityBlock: prefix + "product_desc_pack_of_item_quantity" + postfix,
            productPackOfItemQuantityTextBlock: prefix + "product_desc_pack_of_item_quantity_text" + postfix,
            productPackOfItemQuantityText: prefix + "product_desc_pack_of_item_quantity_text",
            productPackOfItemPriceBlock: prefix + "product_desc_pack_of_item_price" + postfix,
            productPackOfItemPriceRegularBlock: prefix + "product_desc_pack_of_item_price_regular" + postfix,
            productPackOfItemPriceRegularTextBlock: prefix + "product_desc_pack_of_item_price_regular_text" + postfix,
            productPackOfItemPriceRegularText: prefix + "product_desc_pack_of_item_price_regular_text",
            productPackOfItemPriceActiveBlock: prefix + "product_desc_pack_of_item_price_active" + postfix,
            productPackOfItemPriceActiveTextBlock: prefix + "product_desc_pack_of_item_price_active_text" + postfix,
            productPackOfItemPriceActiveText: prefix + "product_desc_pack_of_item_price_active_text",
            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productQtyBlock: prefix + "product_desc_qty" + postfix,
            productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
            productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
            productQtyDownBtn: prefix + "product_desc_qty_down_btn",
            productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
            productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
            productQtyInputText: prefix + "product_desc_qty_input_text",
            productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
            productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
            productQtyUpBtn: prefix + "product_desc_qty_up_btn",
            productAddBlock: prefix + "product_desc_add" + postfix,
            productAddTextBlock: prefix + "product_desc_add_text" + postfix,
            productAddText: prefix + "product_desc_add_text",
            productAddspan: prefix + "product_desc_add_span",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",
            productvariantPopupClose: prefix + "product_desc_variant_popup_close" + postfix,
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            productAddTitle: prefix + "product_desc_add_title_text" + postfix,
            productDescriptionMainBlock: prefix + "product_description_main" + postfix,
            productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
            productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
            productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
            productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
            productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
        },
        dom: {
            sidebarModalBlock: ["sidebarHeaderTitleBlock","sidebarHeaderBlock","sidebarCartAddedBlock", "sidebarCheckoutBlock", "sidebarRecommendedBlock"],
            sidebarHeaderBlock: ["sidebarHeaderContinueBlock",  "sidebarHeaderItemBlock"],
            sidebarHeaderContinueBlock: ["sidebarHeaderContinueImgBlock", "sidebarHeaderContinueTextBlock"],
            sidebarHeaderContinueImgBlock: ["sidebarHeaderContinueImg"],
            sidebarHeaderContinueTextBlock: ["sidebarHeaderContinueText"],
            sidebarHeaderTitleBlock: ["sidebarHeaderTitleTextBlock", "sidebarHeaderSubTitleTextBlock"],
            sidebarHeaderTitleTextBlock: ["sidebarHeaderTitleText"],
            sidebarHeaderSubTitleTextBlock: ["sidebarHeaderSubTitleText"],
            sidebarHeaderItemBlock: ["sidebarHeaderItemCountBlock"],
            sidebarHeaderItemCountBlock: ["sidebarHeaderItemCountTitleBlock", "sidebarHeaderItemCountFigureBlock","sidebarCartAddedProductDescSubTotalPriceBlock"],
            sidebarHeaderItemCountTitleBlock: ["sidebarHeaderItemCountTitleTextBlock"],
            sidebarHeaderItemCountTitleTextBlock: ["sidebarHeaderItemCountTitleText"],
            sidebarHeaderItemCountFigureBlock: ["sidebarHeaderItemCountFigureTextBlock"],
            sidebarHeaderItemCountFigureTextBlock: ["sidebarHeaderItemCountFigureText"],

            sidebarCartAddedProductDescSubTotalPriceBlock: ["sidebarCartAddedProductDescSubTotalActiveBlock", "sidebarCartAddedProductDescSubTotalPriceRegularBlock"],
            sidebarCartAddedProductDescSubTotalActiveBlock: ["sidebarCartAddedProductDescSubTotalActiveTextBlock"],
            sidebarCartAddedProductDescSubTotalActiveTextBlock: ["sidebarCartAddedProductDescSubTotalActiveText", "sidebarCartAddedProductDescPriceActiveTextMsg"],
            sidebarCartAddedProductDescSubTotalPriceRegularBlock: ["sidebarCartAddedProductDescSubTotalRegularTextBlock"],
            sidebarCartAddedProductDescSubTotalRegularTextBlock: ["sidebarCartAddedProductDescSubTotalRegularText"],
            
            sidebarCartAddedBlock: ["sidebarCartAddedLeftBlock", "sidebarCartAddedListParentBlock", "sidebarCartAddedRightBlock"],
            sidebarCartAddedListParentBlock:["sidebarCartAddedListBlock"],
            sidebarCartAddedLeftBlock: ["sidebarCartAddedLeftBtnBlock"],
            sidebarCartAddedLeftBtnBlock: ["sidebarCartAddedLeftBtnImgBlock"],
            sidebarCartAddedLeftBtnImgBlock: ["sidebarCartAddedLeftBtnImg"],
            sidebarCartAddedRightBlock: ["sidebarCartAddedRightBtnBlock"],
            sidebarCartAddedRightBtnBlock: ["sidebarCartAddedRightBtnImgBlock"],
            sidebarCartAddedRightBtnImgBlock: ["sidebarCartAddedRightBtnImg"],
            sidebarCartAddedListBlock: ["sidebarCartAddedProductBlock"],
            sidebarCartAddedProductBlock: ["sidebarCartAddedProductImgBlock", "sidebarCartAddedProductDescBlock"],
            sidebarCartAddedProductImgBlock: ["sidebarCartAddedProductImg"],
            sidebarCartAddedProductDescBlock: ["sidebarCartAddedProductDescTitleBlock","sidebarCartAddedProductDescAttBlock", "sidebarCartAddedProductDescQTYPriceBlock"],
            sidebarCartAddedProductDescQTYPriceBlock:["sidebarCartAddedProductDescPriceBlock","sidebarCartAddedProductqtyBlock"],
            sidebarCartAddedProductDescTitleBlock: ["sidebarCartAddedProductDescTitleTextBlock"],
            sidebarCartAddedProductDescTitleTextBlock: ["sidebarCartAddedProductDescTitleText"],
            sidebarCartAddedProductDescPriceBlock: ["sidebarCartAddedProductDescPriceActiveBlock", "sidebarCartAddedProductDescPriceRegularBlock"],
            sidebarCartAddedProductDescPriceActiveBlock: ["sidebarCartAddedProductDescPriceActiveTextBlock"],
            sidebarCartAddedProductDescPriceActiveTextBlock: ["sidebarCartAddedProductDescPriceActiveText", "sidebarCartAddedProductDescPriceActiveTextMsg"],
            sidebarCartAddedProductDescPriceRegularBlock: ["sidebarCartAddedProductDescPriceRegularTextBlock"],
            sidebarCartAddedProductDescPriceRegularTextBlock: ["sidebarCartAddedProductDescPriceRegularText"],

            sidebarCartAddedProductDescAttBlock: ["sidebarCartAddedProductDescAttColorBlock", "sidebarCartAddedProductDescAttSizeBlock"],
            sidebarCartAddedProductDescAttColorBlock: ["sidebarCartAddedProductDescAttColorTextBlock"],
            sidebarCartAddedProductDescAttColorTextBlock: ["sidebarCartAddedProductDescAttColorText"],
            sidebarCartAddedProductDescAttSizeBlock: ["sidebarCartAddedProductDescAttSizeTextBlock"],
            sidebarCartAddedProductDescAttSizeTextBlock: ["sidebarCartAddedProductDescAttSizeText"],

            sidebarRecommendedBlock: ["sidebarRecommendedTitleBlock", "sidebarRecommendedTabsBlock", "sidebarRecommendedProductsBlock"],
            sidebarRecommendedTitleBlock: ["sidebarRecommendedTitleTextBlock", "sidebarRecommendedTitleImgBlock"],
            sidebarRecommendedTitleTextBlock: ["sidebarRecommendedTitleText"],
            sidebarRecommendedTitleImgBlock: ["sidebarRecommendedTitleImg"],
            sidebarRecommendedTabsBlock: ["sidebarRecommendedTabsTitleBlock", "sidebarRecommendedTabsLeftBlock", "sidebarRecommendedTabsListBlock", "sidebarRecommendedTabsRightBlock"],
            sidebarRecommendedTabsTitleBlock: ["sidebarRecommendedTabsTitleTextBlock"],
            sidebarRecommendedTabsTitleTextBlock: ["sidebarRecommendedTabsTitleText"],
            sidebarRecommendedTabsLeftBlock: ["sidebarRecommendedTabsLeftBtnBlock"],
            sidebarRecommendedTabsLeftBtnBlock: ["sidebarRecommendedTabsLeftBtnImgBlock"],
            sidebarRecommendedTabsLeftBtnImgBlock: ["sidebarRecommendedTabsLeftBtnImg"],
            sidebarRecommendedTabsRightBlock: ["sidebarRecommendedTabsRightBtnBlock"],
            sidebarRecommendedTabsRightBtnBlock: ["sidebarRecommendedTabsRightBtnImgBlock"],
            sidebarRecommendedTabsRightBtnImgBlock: ["sidebarRecommendedTabsRightBtnImg"],
            sidebarRecommendedTabsListBlock: ["sidebarRecommendedTabsListItemBlock"],
            sidebarRecommendedTabsListItemBlock: ["sidebarRecommendedTabsListItemTextBlock"],
            sidebarRecommendedTabsListItemTextBlock: ["sidebarRecommendedTabsListItemText"],
            sidebarRecommendedProductsBlock: ["sidebarRecommendedProductsLeftBlock", "sidebarRecommendedProductsListMainBlock","sidebarRecommendedProductsItemThumbBlock", "sidebarRecommendedProductsRightBlock"],
            sidebarRecommendedProductsLeftBlock: ["sidebarRecommendedProductsLeftBtnBlock"],
            sidebarRecommendedProductsLeftBtnBlock: ["sidebarRecommendedProductsLeftBtnImgBlock"],
            sidebarRecommendedProductsLeftBtnImgBlock: ["sidebarRecommendedProductsLeftBtnImg"],
            sidebarRecommendedProductsItemThumbBlock:["sidebarRecommendedProductsListItemThumbBlock"],
            sidebarRecommendedProductsRightBlock: ["sidebarRecommendedProductsRightBtnBlock"],
            sidebarRecommendedProductsRightBtnBlock: ["sidebarRecommendedProductsRightBtnImgBlock"],
            sidebarRecommendedProductsRightBtnImgBlock: ["sidebarRecommendedProductsRightBtnImg"],
            sidebarRecommendedProductsListMainBlock: ["sidebarRecommendedProductsListBlock"],
            sidebarRecommendedProductsListBlock: ["productModuleBlock"],
            sidebarCheckoutBlock: ["sidebarCheckoutContinueBlock", "sidebarCheckoutBasketBlock"],
            sidebarCheckoutContinueBlock: ["sidebarCheckoutContinueBtnBlock"],
            sidebarCheckoutContinueBtnBlock: ["sidebarCheckoutContinueBtnImgBlock", "sidebarCheckoutContinueBtnTextBlock"],
            sidebarCheckoutContinueBtnImgBlock: ["sidebarCheckoutContinueBtnImg"],
            sidebarCheckoutContinueBtnTextBlock: ["sidebarCheckoutContinueBtnText","sidebarCheckoutContinueBtnspan"],
            sidebarCheckoutBasketBlock: ["sidebarCheckoutBasketBtnBlock"],
            sidebarCheckoutBasketBtnBlock: ["sidebarCheckoutBasketBtnImgBlock", "sidebarCheckoutBasketBtnTextBlock"],
            sidebarCheckoutBasketBtnImgBlock: ["sidebarCheckoutBasketBtnImg"],
            sidebarCheckoutBasketBtnTextBlock: ["sidebarCheckoutBasketBtnspan","sidebarCheckoutBasketBtnText"],

            productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
            productShowcaseBlock: ["productBlock"],
            productModalBlock: ["productBlock"],
            productBlock: ["productHeaderMainBlock", "productInfoMainBlock","productDescriptionMainBlock"],
            productInfoMainBlock:["productViewInfoBlock","productDescBlock"],
            productHeaderMainBlock:["productHeaderBlock","productDescriptionHeaderBlock", "productHeaderImgBlock"],
            productHeaderBlock: ["productHeaderTitleBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],

            productDescriptionHeaderBlock: ["productDescriptionHeaderTitleBlock"],
            productDescriptionHeaderTitleBlock: ["productDescriptionHeaderTitleTextBlock"],
            productDescriptionHeaderTitleTextBlock: ["productDescriptionHeaderTitleText"],
            productDescriptionHeaderImgBlock: ["productDescriptionHeaderImg"],
            productViewInfoBlock:["productViewImgDescBlock"],
            productViewImgDescBlock:["productImgBlock","productViewshortDescBlock"],
            productViewshortDescBlock:["productViewshortDescText"],
            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImgBlock", "productImgMainZoomBlock"],
            productImgMainImgBlock: ["productImgMainImg"],
            productImgMainZoomBlock: ["productImgMainZoomBtnBlock"],
            productImgMainZoomBtnBlock: ["productImgMainZoomBtnImgBlock", "productImgMainZoomBtnTextBlock"],
            productImgMainZoomBtnImgBlock: ["productImgMainZoomBtnImg","productImgMainZoomminusImg","productImgMainZoomRuturnImg"],
            productImgMainZoomBtnTextBlock: ["productImgMainZoomBtnText"],
            productImgGalleryBlock: ["productImgGalleryHeaderBlock", "productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryHeaderBlock: ["productImgGalleryHeaderTitleBlock", "productImgGalleryHeaderToggleBlock"],
            productImgGalleryHeaderTitleBlock: ["productImgGalleryHeaderTitleImgBlock", "productImgGalleryHeaderTitleTextBlock"],
            productImgGalleryHeaderTitleImgBlock: ["productImgGalleryHeaderTitleImg"],
            productImgGalleryHeaderTitleTextBlock: ["productImgGalleryHeaderTitleText"],
            productImgGalleryHeaderToggleBlock: ["productImgGalleryHeaderToggleImgBlock", "productImgGalleryHeaderToggleTextBlock"],
            productImgGalleryHeaderToggleImgBlock: ["productImgGalleryHeaderToggleImg"],
            productImgGalleryHeaderToggleTextBlock: ["productImgGalleryHeaderToggleText"],
            productImgGalleryBlock: ["productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryLeftBlock: ["productImgGalleryLeftBtnBlock"],
            productImgGalleryLeftBtnBlock: ["productImgGalleryLeftBtnImgBlock", "productImgGalleryLeftBtnTextBlock"],
            productImgGalleryLeftBtnImgBlock: ["productImgGalleryLeftBtnImg"],
            productImgGalleryLeftBtnTextBlock: ["productImgGalleryLeftBtnText"],
            productImgGalleryListBlock: ["productImgGalleryListItemBlock"],
            productImgGalleryListItemBlock: ["productImgGalleryListItemImgBlock", "productImgGalleryListItemTextBlock"],
            productImgGalleryListItemImgBlock: ["productImgGalleryListItemImg"],
            productImgGalleryListItemTextBlock: ["productImgGalleryListItemText"],
            productImgGalleryRightBlock: ["productImgGalleryRightBtnBlock"],
            productImgGalleryRightBtnBlock: ["productImgGalleryRightBtnImgBlock", "productImgGalleryRightBtnTextBlock"],
            productImgGalleryRightBtnImgBlock: ["productImgGalleryRightBtnImg"],
            productImgGalleryRightBtnTextBlock: ["productImgGalleryRightBtnText"],
            productDescBlock: ["productTitleBlock","productRatingsBlock","productPriceBlock", "productOfferBlock","productInfoBlock", "productPackOfBlock","productAttDetailsBlock","productQtyAddBtnBlock"],
            // productAttDetailsBlock:["productvariantSimpleBlock","productAttBlock","productDetailsBlock"],
            productOfferBlock: ["productOfferHeaderBlock", "productOfferTextBlock"],
            productAttDetailsBlock:["productAttBlock","productvariantSimpleBlock","productDetailsBlock"],
            productDetailsBlock:["productDetailstext"],
            productvariantSimpleBlock:["productvariantSimpleText"],
            productTitleBlock: ["productTitleTextBlock","productMaufactureTextBlock"],
            productTitleTextBlock: ["productTitleText"],
            productMaufactureTextBlock: ["productMaufactureText"],
            productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock","productInfoFullDescBlock"],
            productInfoImgBlock: ["productInfoImg"],
            productInfoTextBlock: ["productInfoText"],
            productInfoFullDescBlock: ["productInfoFullDescDescBlock","productInfoFullDescShippingBlock"],
            productInfoFullDescDescBlock:["productInfoFullDescDescHeaderBlock","productInfoFullDescText"],
            productInfoFullDescDescHeaderBlock: ["productInfoFullDescDescHeaderText"],
            productInfoFullDescShippingBlock: ["productInfoFullDescShippingHeaderBlock", "productInfoFullDescShippingText"],
            productInfoFullDescShippingHeaderBlock: ["productInfoFullDescShippingHeaderText"],
            productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock","productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText","productPriceWorthTextMsg"],
            
            productAttBlock: ["productvariantPopupClose","productAddErrText","productAddTitle","productAttzeroBlock","productAttSizeBlock", "productAttColorBlock","productAttthirdBlock","productAttfourthBlock","productAttEditBlock","productAttvariantaddBlock","productAttvariantviewdetailsBlock"],
            productAttvariantaddBlock:["productAttvariantaddText"],
            productAttvariantviewdetailsBlock:["productAttvariantviewdetailsText"],
            productAttColorBlock: ["productAttColorTitleBlock", "productAttColorListBlock"],
            productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
            productAttColorTitleTextBlock: ["productAttColorTitleText", "productAttColorTitleTextSelected"],
            productAttColorListBlock: ["productAttColorListItemBlock"],
            productAttColorListItemBlock: ["productAttColorListItemImgBlock", "productAttColorListItemTextBlock"],
            productAttColorListItemImgBlock: ["productAttColorListItemImg"],
            productAttColorListItemTextBlock: ["productAttColorListItemText"],
            
            productAttzeroBlock: ["productAttzeroTitleBlock", "productAttzeroListBlock"],
            productAttzeroTitleBlock: ["productAttzeroTitleTextBlock"],
            productAttzeroTitleTextBlock: ["productAttzeroTitleText", "productAttzeroTitleTextSelected"],
            productAttzeroListBlock: ["productAttzeroListItemBlock"],
            productAttzeroListItemBlock: ["productAttzeroListItemImgBlock", "productAttzeroListItemTextBlock"],
            productAttzeroListItemImgBlock: ["productAttzeroListItemImg"],
            productAttzeroListItemTextBlock: ["productAttzeroListItemText"],

            productAttthirdBlock: ["productAttthirdTitleBlock", "productAttthirdListBlock"],
            productAttthirdTitleBlock: ["productAttthirdTitleTextBlock"],
            productAttthirdTitleTextBlock: ["productAttthirdTitleText", "productAttthirdTitleTextSelected"],
            productAttthirdListBlock: ["productAttthirdListItemBlock"],
            productAttthirdListItemBlock: ["productAttthirdListItemImgBlock", "productAttthirdListItemTextBlock"],
            productAttthirdListItemImgBlock: ["productAttthirdListItemImg"],
            productAttthirdListItemTextBlock: ["productAttthirdListItemText"],

            productAttfourthBlock: ["productAttfourthTitleBlock", "productAttfourthListBlock"],
            productAttfourthTitleBlock: ["productAttfourthTitleTextBlock"],
            productAttfourthTitleTextBlock: ["productAttfourthTitleText", "productAttfourthTitleTextSelected"],
            productAttfourthListBlock: ["productAttfourthListItemBlock"],
            productAttfourthListItemBlock: ["productAttfourthListItemImgBlock", "productAttfourthListItemTextBlock"],
            productAttfourthListItemImgBlock: ["productAttfourthListItemImg"],
            productAttfourthListItemTextBlock: ["productAttfourthListItemText"],

            productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeListBlock"],
            productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
            productAttSizeTitleTextBlock: ["productAttSizeTitleText", "productAttSizeTitleTextSelected"],
            productAttSizeListBlock: ["productAttSizeListItemBlock"],
            productAttSizeListItemBlock: ["productAttSizeListItemImgBlock", "productAttSizeListItemTextBlock"],
            productAttSizeListItemImgBlock: ["productAttSizeListItemImg"],
            productAttSizeListItemTextBlock: ["productAttSizeListItemText"],
            
            productAttEditBlock: ["productAttEditText"],
            productPackOfBlock: ["productPackOfLeftBlock", "productPackOfListBlock", "productPackOfRightBlock"],
            productPackOfLeftBlock: ["productPackOfLeftBtnBlock"],
            productPackOfLeftBtnBlock: ["productPackOfLeftBtnImgBlock"],
            productPackOfLeftBtnImgBlock: ["productPackOfLeftBtnImg"],
            productPackOfRightBlock: ["productPackOfRightBtnBlock"],
            productPackOfRightBtnBlock: ["productPackOfRightBtnImgBlock"],
            productPackOfRightBtnImgBlock: ["productPackOfRightBtnImg"],
            productPackOfListBlock: ["productPackOfItemBlock"],
            productPackOfItemBlock: ["productPackOfItemImgBlock", "productPackOfItemTitleBlock", "productPackOfItemQuantityBlock", "productPackOfItemPriceBlock"],
            productPackOfItemImgBlock: ["productPackOfItemImg"],
            productPackOfItemTitleBlock: ["productPackOfItemTitleTextBlock"],
            productPackOfItemTitleTextBlock: ["productPackOfItemTitleText"],
            productPackOfItemQuantityBlock: ["productPackOfItemQuantityTextBlock"],
            productPackOfItemQuantityTextBlock: ["productPackOfItemQuantityText"],
            productPackOfItemPriceBlock: ["productPackOfItemPriceActiveBlock", "productPackOfItemPriceRegularBlock"],
            productPackOfItemPriceActiveBlock: ["productPackOfItemPriceActiveTextBlock"],
            productPackOfItemPriceActiveTextBlock: ["productPackOfItemPriceActiveText"],
            productPackOfItemPriceRegularBlock: ["productPackOfItemPriceRegularTextBlock"],
            productPackOfItemPriceRegularTextBlock: ["productPackOfItemPriceRegularText"],
            productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock","productAddBlockclickcollect"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText","productAddspan"],
            productAddImgBlock: ["productAddImg"],
            productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
            productAddTextBlockclickcollect: ["productAddTextclickcollect"],
            productAddImgBlockclickcollect: ["productAddImgclickcollect"],
        }
    },
    am: {
        className: {
            afModalBlock: prefix + "af" + postfix,
            afModalTitleBlock: prefix + "af_title" + postfix,
            afModalTitleTextBlock: prefix + "af_title_text" + postfix,
            afModalTitleText: prefix + "af_title_text",
            afModalClose: prefix + "af_modal_close",
            afModalBundlesBlock: prefix + "af_bundles" + postfix,
            afLeftBlock: prefix + "af_left" + postfix,
            afLeftBtnBlock: prefix + "af_left_btn" + postfix,
            afLeftBtnImgBlock: prefix + "af_left_btn_img" + postfix,
            afLeftBtnImg: prefix + "af_left_btn_img",
            afProductListMainBlock: prefix + "af_product-list-main" + postfix,
            afProductListBlock: prefix + "af_product-list" + postfix,
            afRightBlock: prefix + "af_right" + postfix,
            afRightBtnBlock: prefix + "af_right_btn" + postfix,
            afRightBtnImgBlock: prefix + "af_right_btn_img" + postfix,
            afRightBtnImg: prefix + "af_right_btn_img",

            productModuleBlock: prefix + "product_module" + postfix,
            productModalBlock: prefix + "product_modal" + postfix,
            productShowcaseBlock: prefix + "product_showcase" + postfix,
            productBlock: prefix + "product" + postfix,
            productHeaderMainBlock: prefix + "product_header_main" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",

            productDescriptionHeaderBlock: prefix + "product_Description_header" + postfix,
            productDescriptionHeaderTitleBlock: prefix + "product_Description_header_title" + postfix,
            productDescriptionHeaderTitleTextBlock: prefix + "product_Description_header_title_text" + postfix,
            productDescriptionHeaderTitleText: prefix + "product_Description_header_title_text",
            productDescriptionHeaderImgBlock: prefix + "product_Description_header_img" + postfix,
            productDescriptionHeaderImg: prefix + "product_Description_header_img",
            productInfoMainBlock: prefix + "product_info_main" + postfix,
            productViewInfoBlock: prefix + "product_view_info" + postfix,
            productViewImgDescBlock: prefix + "product_view_img_desc" + postfix,
            productViewshortDescBlock: prefix + "product_view_short_desc" + postfix,
            productViewshortDescText: prefix + "product_view_img_desc_text",
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,
            productImgMainImgBlock: prefix + "product_img_main_img" + postfix,
            productImgMainImg: prefix + "product_img_main_img",
            productImgMainZoomBlock: prefix + "product_img_main_zoom" + postfix,
            productImgMainZoomBtnBlock: prefix + "product_img_main_zoom_btn" + postfix,
            productImgMainZoomBtnImgBlock: prefix + "product_img_main_zoom_btn_img" + postfix,
            productImgMainZoomBtnImg: prefix + "product_img_main_zoom_btn_img",
            productImgMainZoomminusImg: prefix + "product_img_main_zoom_minus_img",
            productImgMainZoomRuturnImg: prefix + "product_img_main_zoom_return_img",
            productImgMainZoomBtnTextBlock: prefix + "product_img_main_zoom_btn_text" + postfix,
            productImgMainZoomBtnText: prefix + "product_img_main_zoom_btn_text",
            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,
            productImgGalleryHeaderBlock: prefix + "producy_img_gallery_header" + postfix,
            productImgGalleryHeaderTitleBlock: prefix + "product_img_gallery_header_title" + postfix,
            productImgGalleryHeaderTitleImgBlock: prefix + "product_img_gallery_header_title_img" + postfix,
            productImgGalleryHeaderTitleImg: prefix + "product_img_gallery_header_title_img",
            productImgGalleryHeaderTitleTextBlock: prefix + "product_img_gallery_header_title_text" + postfix,
            productImgGalleryHeaderTitleText: prefix + "product_img_gallery_header_title_text",
            productImgGalleryHeaderToggleBlock: prefix + "product_img_gallery_header_toggle" + postfix,
            productImgGalleryHeaderToggleImgBlock: prefix + "product_img_gallery_header_toggle_img" + postfix,
            productImgGalleryHeaderToggleImg: prefix + "product_img_gallery_header_toggle_img",
            productImgGalleryHeaderToggleTextBlock: prefix + "product_img_gallery_header_toggle_text" + postfix,
            productImgGalleryHeaderToggleText: prefix + "product_img_gallery_header_toggle_text",
            productImgGalleryLeftBlock: prefix + "product_img_gallery_left" + postfix,
            productImgGalleryLeftBtnBlock: prefix + "product_img_gallery_left_btn" + postfix,
            productImgGalleryLeftBtnImgBlock: prefix + "product_img_gallery_left_btn_img" + postfix,
            productImgGalleryLeftBtnImg: prefix + "product_img_gallery_left_btn_img",
            productImgGalleryLeftBtnTextBlock: prefix + "product_img_gallery_left_btn_text" + postfix,
            productImgGalleryLeftBtnText: prefix + "product_img_gallery_left_btn_text",
            productImgGalleryListBlock: prefix + "product_img_gallery_list" + postfix,
            productImgGalleryListItemBlock: prefix + "product_img_gallery_list_item" + postfix,
            productImgGalleryListItemImgBlock: prefix + "product_img_gallery_list_item_img" + postfix,
            productImgGalleryListItemImg: prefix + "product_img_gallery_list_item_img",
            productImgGalleryListItemTextBlock: prefix + "product_img_gallery_list_item_text" + postfix,
            productImgGalleryListItemText: prefix + "product_img_gallery_list_item_text",
            productImgGalleryRightBlock: prefix + "product_img_gallery_right" + postfix,
            productImgGalleryRightBtnBlock: prefix + "product_img_gallery_right_btn" + postfix,
            productImgGalleryRightBtnImgBlock: prefix + "product_img_gallery_right_btn_img" + postfix,
            productImgGalleryRightBtnImg: prefix + "product_img_gallery_right_btn_img",
            productImgGalleryRightBtnTextBlock: prefix + "product_img_gallery_right_btn_text" + postfix,
            productImgGalleryRightBtnText: prefix + "product_img_gallery_right_btn_text",
            productDescBlock: prefix + "product_desc" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",
            productMaufactureTextBlock: prefix + "product_manufacture_text" + postfix,
            productMaufactureText: prefix + "product_maufacture_text",
            productRatingsBlock: prefix + "product_desc_ratings" + postfix,
            productOfferBlock: prefix + "product_desc_offer" + postfix,
            productOfferHeaderBlock: prefix + "product_desc_offerheader" + postfix,
            productOfferTextBlock: prefix + "product_desc_offertext" + postfix,
            productInfoBlock: prefix + "product_desc_info" + postfix,
            productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
            productInfoImg: prefix + "product_desc_info_img",
            productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
            productInfoText: prefix + "product_desc_info_text",
            productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
            productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
            productInfoFullDescDescBlock: prefix + "Info_Full_desc_desc" + postfix,
            productInfoFullDescDescHeaderBlock: prefix + "Info_Full_desc_desc_header" + postfix,
            productInfoFullDescDescHeaderText: prefix + "Info_Full_desc_desc_header_text",
            productInfoFullDescShippingBlock: prefix + "Info_Full_desc_shipping" + postfix,
            productInfoFullDescShippingHeaderBlock: prefix + "Info_Full_desc_shipping_header" + postfix,
            productInfoFullDescShippingHeaderText: prefix + "Info_Full_desc_shipping_header_text",
            productInfoFullDescShippingText: prefix + "Info_Full_desc_shipping_text",
            productPriceBlock: prefix + "product_desc_price" + postfix,
            productPriceLabel: prefix + "product_price_label" + postfix,
            productPriceActiveBlock: prefix + "product_desc_price_active" + postfix,
            productPriceActiveTextBlock: prefix + "product_desc_price_active_text" + postfix,
            productPriceActiveText: prefix + "product_desc_price_active_text",
            productPriceActiveTextMsg: prefix + "product_desc_price_active_text_msg",
            productPriceRegularBlock: prefix + "product_desc_price_regular" + postfix,
            productPriceRegularTextBlock: prefix + "product_desc_price_regular_text" + postfix,
            productPriceRegularText: prefix + "product_desc_price_regular_text",
            productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
            productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
            productPriceWorthText: prefix + "product_desc_price_worth_text",
            productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
            productAttDetailsBlock: prefix + "product_desc_att_details" + postfix,
            productDetailsBlock: prefix + "product_details_prod" + postfix,
            productDetailstext: prefix + "product_details_prod_text",
            productvariantSimpleBlock: prefix + "product_variant_simple" + postfix,
            productvariantSimpleText: prefix + "product_variant_simple_text",
            productAttBlock: prefix + "product_desc_att" + postfix,
            productAttColorBlock: prefix + "product_desc_att_color" + postfix,
            productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
            productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
            productAttColorTitleText: prefix + "product_desc_att_color_title_text",
            productAttColorTitleTextSelected: prefix + "product_desc_att_color_title_text_selected",
            productAttColorListBlock: prefix + "product_desc_att_color_list" + postfix,
            productAttColorListItemBlock: prefix + "product_desc_att_color_list_item" + postfix,
            productAttColorListItemImgBlock: prefix + "product_desc_att_color_list_item_img" + postfix,
            productAttColorListItemImg: prefix + "product_desc_att_color_list_item_img",
            productAttColorListItemTextBlock: prefix + "product_desc_att_color_list_item_text" + postfix,
            productAttColorListItemText: prefix + "product_desc_att_color_list_item_text",
            productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
            productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
            productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
            productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
            productAttSizeTitleTextSelected: prefix + "product_desc_att_size_title_text_selected",
            productAttSizeListBlock: prefix + "product_desc_att_size_list" + postfix,
            productAttSizeListItemBlock: prefix + "product_desc_att_size_list_item" + postfix,
            productAttSizeListItemImgBlock: prefix + "product_desc_att_size_list_item_img" + postfix,
            productAttSizeListItemImg: prefix + "product_desc_att_size_list_item_img",
            productAttSizeListItemTextBlock: prefix + "product_desc_att_size_list_item_text" + postfix,
            productAttSizeListItemText: prefix + "product_desc_att_size_list_item_text",
            productAttzeroBlock: prefix + "product_desc_att_zero" + postfix,
            productAttzeroTitleBlock: prefix + "product_desc_att_zero_title" + postfix,
            productAttzeroTitleTextBlock: prefix + "product_desc_att_zero_title_text" + postfix,
            productAttzeroTitleText: prefix + "product_desc_att_zero_title_text",
            productAttzeroTitleTextSelected: prefix + "product_desc_att_zero_title_text_selected",
            productAttzeroListBlock: prefix + "product_desc_att_zero_list" + postfix,
            productAttzeroListItemBlock: prefix + "product_desc_att_zero_list_item" + postfix,
            productAttzeroListItemImgBlock: prefix + "product_desc_att_zero_list_item_img" + postfix,
            productAttzeroListItemImg: prefix + "product_desc_att_zero_list_item_img",
            productAttzeroListItemTextBlock: prefix + "product_desc_att_zero_list_item_text" + postfix,
            productAttzeroListItemText: prefix + "product_desc_att_zero_list_item_text",
            productAttthirdBlock: prefix + "product_desc_att_third" + postfix,
            productAttthirdTitleBlock: prefix + "product_desc_att_third_title" + postfix,
            productAttthirdTitleTextBlock: prefix + "product_desc_att_third_title_text" + postfix,
            productAttthirdTitleText: prefix + "product_desc_att_third_title_text",
            productAttthirdTitleTextSelected: prefix + "product_desc_att_third_title_text_selected",
            productAttthirdListBlock: prefix + "product_desc_att_third_list" + postfix,
            productAttthirdListItemBlock: prefix + "product_desc_att_third_list_item" + postfix,
            productAttthirdListItemImgBlock: prefix + "product_desc_att_third_list_item_img" + postfix,
            productAttthirdListItemImg: prefix + "product_desc_att_third_list_item_img",
            productAttthirdListItemTextBlock: prefix + "product_desc_att_third_list_item_text" + postfix,
            productAttthirdListItemText: prefix + "product_desc_att_third_list_item_text",
            productAttfourthBlock: prefix + "product_desc_att_fourth" + postfix,
            productAttfourthTitleBlock: prefix + "product_desc_att_fourth_title" + postfix,
            productAttfourthTitleTextBlock: prefix + "product_desc_att_fourth_title_text" + postfix,
            productAttfourthTitleText: prefix + "product_desc_att_fourth_title_text",
            productAttfourthTitleTextSelected: prefix + "product_desc_att_fourth_title_text_selected",
            productAttfourthListBlock: prefix + "product_desc_att_fourth_list" + postfix,
            productAttfourthListItemBlock: prefix + "product_desc_att_fourth_list_item" + postfix,
            productAttfourthListItemImgBlock: prefix + "product_desc_att_fourth_list_item_img" + postfix,
            productAttfourthListItemImg: prefix + "product_desc_att_fourth_list_item_img",
            productAttfourthListItemTextBlock: prefix + "product_desc_att_fourth_list_item_text" + postfix,
            productAttfourthListItemText: prefix + "product_desc_att_fourth_list_item_text",
            productAttvariantaddBlock: prefix + "product_desc_att_variant_add" + postfix,
            productAttvariantaddText: prefix + "product_desc_att_variant_text",
            productAttvariantviewdetailsBlock: prefix + "product_desc_att_variant_view_details" + postfix,
            productAttvariantviewdetailsText: prefix + "product_desc_att_variant_view_details_text",
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
            productPackOfBlock: prefix + "product_desc_pack_of" + postfix,
            productPackOfLeftBlock: prefix + "product_desc_pack_of_left" + postfix,
            productPackOfListBlock: prefix + "product_desc_pack_of_list" + postfix,
            productPackOfRightBlock: prefix + "product_desc_pack_of_right" + postfix,
            productPackOfLeftBtnBlock: prefix + "product_desc_pack_of_left_btn" + postfix,
            productPackOfLeftBtnImgBlock: prefix + "product_desc_pack_of_left_btn_img" + postfix,
            productPackOfLeftBtnImg: prefix + "product_desc_pack_of_left_btn_img",
            productPackOfRightBtnBlock: prefix + "product_desc_pack_of_right_btn" + postfix,
            productPackOfRightBtnImgBlock: prefix + "product_desc_pack_of_right_btn_img" + postfix,
            productPackOfRightBtnImg: prefix + "product_desc_pack_of_right_btn_img",
            productPackOfItemBlock: prefix + "product_desc_pack_of_item" + postfix,
            productPackOfItemTitleBlock: prefix + "product_desc_pack_of_item_title" + postfix,
            productPackOfItemTitleTextBlock: prefix + "product_desc_pack_of_item_title_text" + postfix,
            productPackOfItemTitleText: prefix + "product_desc_pack_of_item_title_text",
            productPackOfItemImgBlock: prefix + "product_desc_pack_of_item_img" + postfix,
            productPackOfItemImg: prefix + "product_desc_pack_of_item_img",
            productPackOfItemQuantityBlock: prefix + "product_desc_pack_of_item_quantity" + postfix,
            productPackOfItemQuantityTextBlock: prefix + "product_desc_pack_of_item_quantity_text" + postfix,
            productPackOfItemQuantityText: prefix + "product_desc_pack_of_item_quantity_text",
            productPackOfItemPriceBlock: prefix + "product_desc_pack_of_item_price" + postfix,
            productPackOfItemPriceRegularBlock: prefix + "product_desc_pack_of_item_price_regular" + postfix,
            productPackOfItemPriceRegularTextBlock: prefix + "product_desc_pack_of_item_price_regular_text" + postfix,
            productPackOfItemPriceRegularText: prefix + "product_desc_pack_of_item_price_regular_text",
            productPackOfItemPriceActiveBlock: prefix + "product_desc_pack_of_item_price_active" + postfix,
            productPackOfItemPriceActiveTextBlock: prefix + "product_desc_pack_of_item_price_active_text" + postfix,
            productPackOfItemPriceActiveText: prefix + "product_desc_pack_of_item_price_active_text",
            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productQtyBlock: prefix + "product_desc_qty" + postfix,
            productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
            productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
            productQtyDownBtn: prefix + "product_desc_qty_down_btn",
            productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
            productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
            productQtyInputText: prefix + "product_desc_qty_input_text",
            productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
            productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
            productQtyUpBtn: prefix + "product_desc_qty_up_btn",
            productAddBlock: prefix + "product_desc_add" + postfix,
            productAddTextBlock: prefix + "product_desc_add_text" + postfix,
            productAddText: prefix + "product_desc_add_text",
            productAddspan: prefix + "product_desc_add_span",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",
            productvariantPopupClose: prefix + "product_desc_variant_popup_close" + postfix,
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            productAddTitle: prefix + "product_desc_add_title_text" + postfix,
            productDescriptionMainBlock: prefix + "product_description_main" + postfix,
            productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
            productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
            productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
            productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
            productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
        },
        dom: {
            afModalBlock: ["afModalTitleBlock", "afModalBundlesBlock"],
            afModalTitleBlock: ["afModalTitleTextBlock"],
            afModalTitleTextBlock: ["afModalTitleText","afModalClose"],
            afModalBundlesBlock: ["afLeftBlock", "afProductListMainBlock", "afRightBlock"],
            afLeftBlock: ["afLeftBtnBlock"],
            afLeftBtnBlock: ["afLeftBtnImgBlock"],
            afLeftBtnImgBlock: ["afLeftBtnImg"],
            afProductListMainBlock: ["afProductListBlock"],
            afProductListBlock: ["productModuleBlock", "productModuleBlock", "productModuleBlock"],
            afRightBlock: ["afRightBtnBlock"],
            afRightBtnBlock: ["afRightBtnImgBlock"],
            afRightBtnImgBlock: ["afRightBtnImg"],

            productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
            productShowcaseBlock: ["productBlock"],
            productModalBlock: ["productBlock"],
            productBlock: ["productHeaderMainBlock", "productInfoMainBlock","productDescriptionMainBlock"],
            productInfoMainBlock:["productViewInfoBlock","productDescBlock"],
            productHeaderMainBlock:["productHeaderBlock","productDescriptionHeaderBlock", "productHeaderImgBlock"],
            productHeaderBlock: ["productHeaderTitleBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],

            productDescriptionHeaderBlock: ["productDescriptionHeaderTitleBlock"],
            productDescriptionHeaderTitleBlock: ["productDescriptionHeaderTitleTextBlock"],
            productDescriptionHeaderTitleTextBlock: ["productDescriptionHeaderTitleText"],
            productDescriptionHeaderImgBlock: ["productDescriptionHeaderImg"],
            productViewInfoBlock:["productViewImgDescBlock"],
            productViewImgDescBlock:["productImgBlock","productViewshortDescBlock"],
            productViewshortDescBlock:["productViewshortDescText"],
            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImgBlock", "productImgMainZoomBlock"],
            productImgMainImgBlock: ["productImgMainImg"],
            productImgMainZoomBlock: ["productImgMainZoomBtnBlock"],
            productImgMainZoomBtnBlock: ["productImgMainZoomBtnImgBlock", "productImgMainZoomBtnTextBlock"],
            productImgMainZoomBtnImgBlock: ["productImgMainZoomBtnImg","productImgMainZoomminusImg","productImgMainZoomRuturnImg"],
            productImgMainZoomBtnTextBlock: ["productImgMainZoomBtnText"],
            productImgGalleryBlock: ["productImgGalleryHeaderBlock", "productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryHeaderBlock: ["productImgGalleryHeaderTitleBlock", "productImgGalleryHeaderToggleBlock"],
            productImgGalleryHeaderTitleBlock: ["productImgGalleryHeaderTitleImgBlock", "productImgGalleryHeaderTitleTextBlock"],
            productImgGalleryHeaderTitleImgBlock: ["productImgGalleryHeaderTitleImg"],
            productImgGalleryHeaderTitleTextBlock: ["productImgGalleryHeaderTitleText"],
            productImgGalleryHeaderToggleBlock: ["productImgGalleryHeaderToggleImgBlock", "productImgGalleryHeaderToggleTextBlock"],
            productImgGalleryHeaderToggleImgBlock: ["productImgGalleryHeaderToggleImg"],
            productImgGalleryHeaderToggleTextBlock: ["productImgGalleryHeaderToggleText"],
            productImgGalleryBlock: ["productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
            productImgGalleryLeftBlock: ["productImgGalleryLeftBtnBlock"],
            productImgGalleryLeftBtnBlock: ["productImgGalleryLeftBtnImgBlock", "productImgGalleryLeftBtnTextBlock"],
            productImgGalleryLeftBtnImgBlock: ["productImgGalleryLeftBtnImg"],
            productImgGalleryLeftBtnTextBlock: ["productImgGalleryLeftBtnText"],
            productImgGalleryListBlock: ["productImgGalleryListItemBlock"],
            productImgGalleryListItemBlock: ["productImgGalleryListItemImgBlock", "productImgGalleryListItemTextBlock"],
            productImgGalleryListItemImgBlock: ["productImgGalleryListItemImg"],
            productImgGalleryListItemTextBlock: ["productImgGalleryListItemText"],
            productImgGalleryRightBlock: ["productImgGalleryRightBtnBlock"],
            productImgGalleryRightBtnBlock: ["productImgGalleryRightBtnImgBlock", "productImgGalleryRightBtnTextBlock"],
            productImgGalleryRightBtnImgBlock: ["productImgGalleryRightBtnImg"],
            productImgGalleryRightBtnTextBlock: ["productImgGalleryRightBtnText"],
            productDescBlock: ["productTitleBlock","productRatingsBlock","productPriceBlock", "productOfferBlock", "productInfoBlock", "productPackOfBlock","productAttDetailsBlock","productQtyAddBtnBlock"],
            // productAttDetailsBlock:["productvariantSimpleBlock","productAttBlock","productDetailsBlock"],
            productOfferBlock: ["productOfferHeaderBlock", "productOfferTextBlock"],
            productAttDetailsBlock:["productAttBlock","productvariantSimpleBlock","productDetailsBlock"],
            productDetailsBlock:["productDetailstext"],
            productvariantSimpleBlock:["productvariantSimpleText"],
            productTitleBlock: ["productTitleTextBlock","productMaufactureTextBlock"],
            productTitleTextBlock: ["productTitleText"],
            productMaufactureTextBlock: ["productMaufactureText"],
            productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock","productInfoFullDescBlock"],
            productInfoImgBlock: ["productInfoImg"],
            productInfoTextBlock: ["productInfoText"],
            productInfoFullDescBlock: ["productInfoFullDescDescBlock","productInfoFullDescShippingBlock"],
            productInfoFullDescDescBlock:["productInfoFullDescDescHeaderBlock","productInfoFullDescText"],
            productInfoFullDescDescHeaderBlock: ["productInfoFullDescDescHeaderText"],
            productInfoFullDescShippingBlock: ["productInfoFullDescShippingHeaderBlock", "productInfoFullDescShippingText"],
            productInfoFullDescShippingHeaderBlock: ["productInfoFullDescShippingHeaderText"],
            productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock","productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText","productPriceWorthTextMsg"],
            
            productAttBlock: ["productvariantPopupClose","productAddErrText","productAddTitle","productAttzeroBlock","productAttSizeBlock", "productAttColorBlock","productAttthirdBlock","productAttfourthBlock","productAttEditBlock","productAttvariantaddBlock","productAttvariantviewdetailsBlock"],
            productAttvariantaddBlock:["productAttvariantaddText"],
            productAttvariantviewdetailsBlock:["productAttvariantviewdetailsText"],
            productAttColorBlock: ["productAttColorTitleBlock", "productAttColorListBlock"],
            productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
            productAttColorTitleTextBlock: ["productAttColorTitleText", "productAttColorTitleTextSelected"],
            productAttColorListBlock: ["productAttColorListItemBlock"],
            productAttColorListItemBlock: ["productAttColorListItemImgBlock", "productAttColorListItemTextBlock"],
            productAttColorListItemImgBlock: ["productAttColorListItemImg"],
            productAttColorListItemTextBlock: ["productAttColorListItemText"],
            
            productAttzeroBlock: ["productAttzeroTitleBlock", "productAttzeroListBlock"],
            productAttzeroTitleBlock: ["productAttzeroTitleTextBlock"],
            productAttzeroTitleTextBlock: ["productAttzeroTitleText", "productAttzeroTitleTextSelected"],
            productAttzeroListBlock: ["productAttzeroListItemBlock"],
            productAttzeroListItemBlock: ["productAttzeroListItemImgBlock", "productAttzeroListItemTextBlock"],
            productAttzeroListItemImgBlock: ["productAttzeroListItemImg"],
            productAttzeroListItemTextBlock: ["productAttzeroListItemText"],

            productAttthirdBlock: ["productAttthirdTitleBlock", "productAttthirdListBlock"],
            productAttthirdTitleBlock: ["productAttthirdTitleTextBlock"],
            productAttthirdTitleTextBlock: ["productAttthirdTitleText", "productAttthirdTitleTextSelected"],
            productAttthirdListBlock: ["productAttthirdListItemBlock"],
            productAttthirdListItemBlock: ["productAttthirdListItemImgBlock", "productAttthirdListItemTextBlock"],
            productAttthirdListItemImgBlock: ["productAttthirdListItemImg"],
            productAttthirdListItemTextBlock: ["productAttthirdListItemText"],

            productAttfourthBlock: ["productAttfourthTitleBlock", "productAttfourthListBlock"],
            productAttfourthTitleBlock: ["productAttfourthTitleTextBlock"],
            productAttfourthTitleTextBlock: ["productAttfourthTitleText", "productAttfourthTitleTextSelected"],
            productAttfourthListBlock: ["productAttfourthListItemBlock"],
            productAttfourthListItemBlock: ["productAttfourthListItemImgBlock", "productAttfourthListItemTextBlock"],
            productAttfourthListItemImgBlock: ["productAttfourthListItemImg"],
            productAttfourthListItemTextBlock: ["productAttfourthListItemText"],

            productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeListBlock"],
            productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
            productAttSizeTitleTextBlock: ["productAttSizeTitleText", "productAttSizeTitleTextSelected"],
            productAttSizeListBlock: ["productAttSizeListItemBlock"],
            productAttSizeListItemBlock: ["productAttSizeListItemImgBlock", "productAttSizeListItemTextBlock"],
            productAttSizeListItemImgBlock: ["productAttSizeListItemImg"],
            productAttSizeListItemTextBlock: ["productAttSizeListItemText"],

            productAttEditBlock: ["productAttEditText"],
            productPackOfBlock: ["productPackOfLeftBlock", "productPackOfListBlock", "productPackOfRightBlock"],
            productPackOfLeftBlock: ["productPackOfLeftBtnBlock"],
            productPackOfLeftBtnBlock: ["productPackOfLeftBtnImgBlock"],
            productPackOfLeftBtnImgBlock: ["productPackOfLeftBtnImg"],
            productPackOfRightBlock: ["productPackOfRightBtnBlock"],
            productPackOfRightBtnBlock: ["productPackOfRightBtnImgBlock"],
            productPackOfRightBtnImgBlock: ["productPackOfRightBtnImg"],
            productPackOfListBlock: ["productPackOfItemBlock"],
            productPackOfItemBlock: ["productPackOfItemImgBlock", "productPackOfItemTitleBlock", "productPackOfItemQuantityBlock", "productPackOfItemPriceBlock"],
            productPackOfItemImgBlock: ["productPackOfItemImg"],
            productPackOfItemTitleBlock: ["productPackOfItemTitleTextBlock"],
            productPackOfItemTitleTextBlock: ["productPackOfItemTitleText"],
            productPackOfItemQuantityBlock: ["productPackOfItemQuantityTextBlock"],
            productPackOfItemQuantityTextBlock: ["productPackOfItemQuantityText"],
            productPackOfItemPriceBlock: ["productPackOfItemPriceActiveBlock", "productPackOfItemPriceRegularBlock"],
            productPackOfItemPriceActiveBlock: ["productPackOfItemPriceActiveTextBlock"],
            productPackOfItemPriceActiveTextBlock: ["productPackOfItemPriceActiveText"],
            productPackOfItemPriceRegularBlock: ["productPackOfItemPriceRegularTextBlock"],
            productPackOfItemPriceRegularTextBlock: ["productPackOfItemPriceRegularText"],
            productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock","productAddBlockclickcollect"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText","productAddspan"],
            productAddImgBlock: ["productAddImg"],
            productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
            productAddTextBlockclickcollect: ["productAddTextclickcollect"],
            productAddImgBlockclickcollect: ["productAddImgclickcollect"],
        }
    },
}

INC.methods = {};
INC.methods.networkReq = function (nwConfigObj, cb) {

    var nwConfigObj = new INC.classes.NWConfig(nwConfigObj);
    var xhr = new XMLHttpRequest();
    xhr.open(nwConfigObj.method, nwConfigObj.url, true);

    xhr.onload = function () { }
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if(xhr.response != ""){
                if(INC.config.pageType == "pdp" && document.querySelector('.add-to-customize') == null){
                    cb(xhr.response);
                }else{
                    cb(xhr.response);
                }
                if(INC.config.pageType == "pdp"){
                    var p_ids=INC.methods.getProductIdFromWebPage()
                    INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view");
                }
                sessionStorage.setItem('bundleJSON',xhr.response)
            }else {

                var p_ids = INC.methods.getProductIdFromWebPage()
                if(sidebar_configurator_id.indexOf(p_ids) >= 0){
                    if (INC.config.pageType == "pdp") {
                        //var p_ids = INC.methods.getProductIdFromWebPage()
                        INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view",'configurator');
                    }
                }
            }
        }
    }

    xhr.send(JSON.stringify(nwConfigObj.params));
}

INC.methods.irbReq = function (productId, bundleCount, elementName) {

    var elementName = elementName || "";
    var productId = productId;
    var apiKey = INC.config.clientToken;
    var bundleReqCount = bundleCount || 5;
    var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
    if(INC.config.pageType == "pdp" || INC.config.pageType == "cartPage"){
        var irbReqParams =
        "product_ids=" + productId +
        "&category_id=" +
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + elementName +
        "&fr=" + "1" + 
        "&client_visitor_id=" + INC.config.ivid //+
        // "&is_tc=" + "1" +
        // "&no_of_bundles=" + bundleReqCount
        ;
    }else {
        var irbReqParams =
        "product_ids=" + productId +
        "&category_id=" +
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + elementName +
        "&client_visitor_id=" + INC.config.ivid +
        "&is_tc=" + "1" +
        "&fr=" + "1" + 
        "&no_of_bundles=" + bundleReqCount
        ;
    }
    
    var irbReqURL = decodeURI(irbPATH + btoa(irbReqParams));
    var networkConfigObj = new INC.classes.NWConfig();
    networkConfigObj["url"] = irbReqURL;

    return this.refreshBundles(networkConfigObj);
}

INC.methods.refreshBundles = function (nwConfigObj) {
    var incDataStore = INC.dataStore;

    INC.methods.networkReq(nwConfigObj, function (response) {
        
        if (response.length == 0) return;

        if(typeof(response) != "object"){
            var responseJSON = JSON.parse(response);
        }else{
            var responseJSON = response;
        }
        
        if (responseJSON.hasOwnProperty('Bundles') && (responseJSON.Bundles.length > 0)) {
            INC.config.AssociatedProducts = responseJSON.AssociatedProducts
            responseJSON.timeStamp = Date.now();
            var bundleResponse = responseJSON;
            INC.dataStore.methods().buildDataStoreObj(bundleResponse);

            if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;

            switch (INC.config.pageType) {
                case "pdp": INC.methods.createPDPBlock(); break;
                case "cartPage": INC.methods.createAMBlock(); break;
                case "homePage":
                    INC.methods.createAMBlock();
                    break;
                case "productList":
                    INC.config.dupDataObjectProducts=[]
                    INC.methods.createSidebarBlock();
                    var findObj = new INC.classes.FindObj();
                    findObj["id"] = INC.config.plpProductId;
                    
                    var sbBlock = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock"));
                    sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedBlock")).style.visibilty = "hidden";
                    document.querySelector(".inc_sidebar_modal_block .inc_sidebar_cart_added_block").style.borderBottom = "0px";
                    sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarHeaderItemCountFigureText")).innerText = "|";
                    sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedListBlock")).innerHTML = "";
                    if(INC.dataStore.plpProductQty == 0){
                        INC.dataStore.plpProductQty = 1
                    }
                    INC.methods.addProductToSidebarCart(findObj, INC.dataStore.plpProductQty,null,"client_add_btn");
                    if(document.querySelector('.ic_popup_module_wrapper.active .inc_popup_close') != null){
                        document.querySelector('.ic_popup_module_wrapper.active .inc_popup_close').click();
                    }
                    INC.methods.showSidebar();
                   
                    // INC.config.empty_prod_details.push({
                    //     p_id:productId,
                    //     p_name:p_name,
                    //     p_img:p_img,
                    //     p_activePrice:p_activePrice,
                    //     regularPrice:regularPrice
                    // })
                    var img_elem = setInterval(function(){
                        var circle_img=document.querySelector('.inc_cart_added_product_img img')
                        if(circle_img != null){
                            clearInterval(img_elem)
                            var subtotalinc_active=document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text');
                            if(INC.config.empty_prod_details[0] != undefined){
                                if(INC.config.empty_prod_details[0].p_activePrice != undefined){
                                    if(subtotalinc_active != null){
                                        var subt=(+INC.config.empty_prod_details[0].p_activePrice * INC.dataStore.plpProductQty)
                                        subtotalinc_active.innerHTML=formatter.format(subt)
                                        subtotalinc_active.setAttribute('subtotalactiveprice',subt)
                                        subtotalinc_active.setAttribute('subtotalactiveprice',subt)
                                        var subtotalregular=document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text_block')
                                        subtotalregular. setAttribute('subtotalregularprice',0)
                                    }
                                    var prd_names=document.querySelector('.inc_cart_added_product_desc_title_text')
                                    // prd_names.innerHTML = p_name
                                    if(INC.config.empty_prod_details[0].p_name != undefined){
                                        prd_names.innerHTML =  INC.dataStore.plpProductQty + "<small>x </small>" +  INC.config.empty_prod_details[0].p_name
                                    }
                                    if(INC.config.empty_prod_details[0].p_name != undefined){
                                        circle_img.src = INC.config.empty_prod_details[0].p_img
                                    }
                                    var prd_price=document.querySelector('.inc_cart_added_product_desc_price_active_text')
                                    if(prd_price != null && INC.config.empty_prod_details[0].p_activePrice != null){
                                        prd_price.innerHTML=formatter.format(INC.config.empty_prod_details[0].p_activePrice)
                                    }
                                }
                            }
                            setTimeout(function(){
                                if(document.querySelector('#colorbox') != null){
                                    if(document.querySelector('#colorbox').style.display == "block"){
                                        // clearInterval(succesalert)
                                        document.querySelector('#cboxClose').click()
                                    }
                                }
                            },2000)
                            
                        }
                    },100)
                    break;
            }

            
        }
    });
}

INC.methods.irbReq_is_tc = function (productId, bundleCount, elementName,configurator) {

    var elementName = elementName || "";
    var productId = productId;
    var apiKey = INC.config.clientToken;
    var bundleReqCount = bundleCount || 5;
    var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
    if(sidebar_configurator_id.indexOf(productId) >= 0){
        bundleReqCount = 30
    }
    // if (INC.clientConfig.statusLoggedIn) {
    //     irbPATH = "//www.travisperkins.co.uk/bundles/increasingly_bundles?irb/"
    // }
    var irbReqParams =
        "product_ids=" + productId +
        "&category_id=" +
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + elementName +
        "&client_visitor_id=" + INC.config.ivid +
        "&fr=" + "1" + 
        "&is_tc=" + "1" +
        "&no_of_bundles=" + bundleReqCount
        ;

        if(sidebar_configurator_id.indexOf(productId) >= 0){
            irbReqParams = irbReqParams + "&bt=23";
        }

    var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
    var networkConfigObj = new INC.classes.NWConfig();
    networkConfigObj["url"] = irbReqURL1;
    
    // var param = networkConfigObj[params];
    // var nwConfigObj = new INC.classes.NWConfig(nwConfigObj);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", networkConfigObj["url"], true);

    xhr.onload = function () { }
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if(xhr.response != ""){
                if(configurator == "configurator"){
                    if (typeof(response) != "object") {
                        var responseJSONt = JSON.parse(xhr.response);
                    } 
                    var bundleResponset = responseJSONt;
                   
                    INC.dataStore.methods().buildDataStoreObj(bundleResponset,'configurator');
                    setTimeout(function(){
                        cb_tc(JSON.parse(xhr.response));
                    },200)
                }
                else{
                    if(INC.config.pageType == "pdp" && document.querySelector('.add-to-customize') == null){
                        cb_tc(JSON.parse(xhr.response));
                    }
                }
            }else {
                
            }
        }
    }

    xhr.send(JSON.stringify(networkConfigObj["params"]));
}


INC.methods.getSelectorClassName = function (classNames, className) {
    return "." + classNames[className];
}
INC.methods.get_product_ratings = function(filed3, rating_containers, page_type) {
    if(filed3 != undefined && filed3 != "" && filed3 != 0 && filed3.split('|')[0] != "0.0" && filed3.split('|')[0] != "0"){
        var rating = filed3.split('|')[0];
        var reviewc = filed3.split('|')[1];
        if (rating == "" || rating == undefined) {
            rating = 0
        }
        // var gave_rat = filed4;
        var ratingAvg = filed3
        // rating = Math.round(rating * 2) / 2;
        rating = parseFloat(rating).toFixed(1)
        rating = rating.toString();
        var rating_m = null;
        //if (rating != 0 && rating != "" && rating != null) {
        var rating_container = rating_containers;
        if (rating != 0 && rating != 1 && rating != 2 && rating != 3 && rating != 4 && rating != 5) {
            rating_m = rating.replace(".", "-");
        }
        if (rating == 0) {
            rating = "0-0"
        }
        if (rating == 1) {
            rating = "1-0"
        }
        if (rating == 2) {
            rating = "2-0"
        }
        if (rating == 3) {
            rating = "3-0"
        }
        if (rating == 4) {
            rating = "4-0"
        }
        if (rating == 5) {
            rating = "5-0"
        }
        if (rating == "") {
            rating = 0;
        }
        if (rating_m != null) {
            rating_containers.classList.add("rating_" + rating_m);
        } else {
            rating_containers.classList.add("rating_" + rating);
        }


        var count = document.createElement('span');
        count.classList.add('rating_count')
        rating_containers.appendChild(count);
        var avg = document.createElement('span');
        avg.classList.add('rating_avg')
        if (rating == undefined) {
            
            count.textContent = "(0)";
        } else {
            if(page_type != "modal"){
                if(rating.replace('-', '.').trim() != ""){
                    count.textContent = "("+ rating.replace('-', '.').trim() +")"
                }
            }else{
                if(rating.replace('-', '.').trim() != ""){
                    count.textContent =  rating.replace('-', '.').trim() 
                }
            }
            
        }
        var stars = document.createElement('span');
        stars.classList.add('rating_stars');
        stars.innerHTML = ""
        // if(page_type == "modal"){
        //     stars.innerHTML = '';
        //     //rating_containers.removeChild(stars);
        // }else{stars.innerHTML = "★★★★★";}
        rating_containers.appendChild(stars);
    }else{
        var count = document.createElement('span');
        count.classList.add('rating_count')
        rating_containers.appendChild(count);
        if(page_type != "modal"){
            count.innerHTML = "(0)"
        }else{
            count.innerHTML = "0.0"
        }
        var stars = document.createElement('span');
        stars.innerHTML=""
        stars.style.color="#fff"
        stars.classList.add('rating_stars');
        stars.classList.add('noratings');
        rating_containers.appendChild(stars);
    }
}
INC.methods.getProductIdFromWebPage = function() {
    if (INC.config.pageType == "pdp") {
        if (document.querySelector('#productCode') != null) {
            var el = document.querySelector('#productCode').value
        } else {

            if(document.querySelector(".product-code #product-code-val") != null){
                var el = document.querySelector(".product-code #product-code-val").innerText;
            }
            
        }
    }
    var prod_code = document.querySelectorAll('form input[name="productCodePost"]')
    var prod_id = []
    pr_id = "";
    for (p = 0; p < prod_code.length; p++) {
        if (prod_code[p].value != "") {
            pr_id = prod_code[p].value;
            prod_id.push(pr_id)
            break;
        }
    }

    if (prod_id[0] == undefined) {
        INC.config.Product_id = el;
        INC.config.mainProductid = el
        return el || "";

    } else {
        INC.config.Product_id = prod_id[0];
        INC.config.mainProductid = prod_id[0]
        return prod_id[0] || "";

    }
}


INC.methods.detectPageType = function() {
    if (document.querySelector('body.pageLabel-homepage') != null) return "homePage";
    if (document.querySelector('body.page-responsiveCartPage') != null) return "cartPage";
    if (document.querySelector('body.page_basket') != null) return "cartPage";
    if (document.querySelector('body') != null) return "pdp";
}
INC.methods.detectDeviceType = function () {
    if (window.innerWidth > 1590) {
        
    }
    return (window.innerWidth > 768) ? "desktop" : "mobile";
}
INC.methods.detectLanguage = function detectLanguage() { return "en"; }
INC.methods.showSidebar = function () {
    if(document.querySelector('.inc_sidebar_modal_block') != null){
        
        var seidebar_pr_length=document.querySelectorAll('.inc_sidebar_modal_block .inc_product_module_block').length;
        if(document.querySelector('.inc_sidebar_cart_added_block') != null){
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('active')
        }

        var slider_variable;
        
        if(sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0){
            slider_variable = 3;
        }else{
            slider_variable = 2;
        }
        
        if (!(seidebar_pr_length > slider_variable)) {
            document.querySelector('.inc_recommended_products_right_block').style.visibility = "hidden";
            document.querySelector('.inc_recommended_products_left_block').style.visibility = "hidden";
            
        }
    
        if (seidebar_pr_length > slider_variable) {
            INC.clientConfig.slidevalue=0
            document.querySelector('.inc_recommended_products_list_block').setAttribute('style','margin-left:0;')
            document.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
            document.querySelector('.inc_recommended_products_right_block .inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
            document.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
            document.querySelector('.inc_recommended_products_right_block .inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
            document.querySelector('.inc_recommended_products_left_block').style.visibility = "visible";
            document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block').style.visibility = "visible";
            document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block .inc_recommended_products_left_btn_img').style.visibility = "visible";
            
            document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block .inc_recommended_products_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            document.querySelector('.inc_recommended_products_left_block').setAttribute("style", "opacity:0.5");
        }
        var total_added_product = INC.config.pdpaddedProductList;
        
        var all_cate_tab = document.querySelectorAll('.inc_recommended_tabs_list_block .inc_recommended_tabs_list_item_text');
        
        if(all_cate_tab.length == 0){
            if(document.querySelector('.inc_sidebar_modal_block') != null){
                document.querySelector('.inc_sidebar_modal_block').setAttribute('id','inc_empty_sidebar')
            }
        }
        if(document.querySelector('#progress_bar_dialog') != null){
            document.querySelector('#progress_bar_dialog').style.display="none"
        }
        if(document.querySelector('.inc_header_item_count_figure_text') != null){
            document.querySelector('.inc_header_item_count_figure_text').innerHTML = "|"
        }
        if(document.querySelector('.inc_sidebar_modal_block .inc_product_module_block') != null){
            if (document.querySelector('.inc_cart_added_product_desc_title_text') != null && document.querySelector('.inc_cart_added_product_desc_title_text').innerText == "undefined") return;
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                    setTimeout(function(){
                        if(document.querySelector('.inc_pdp_block') != null){
                            inc_scroll_height= $(".inc_pdp_block").offset().top
                        }else if(document.querySelector('.inc_af_block') != null){
                            inc_scroll_height=  $(".inc_af_block").offset().top
                        }
                        document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                    },100)
                }
            }else if(INC.config.pageType == "productList"  && window.innerWidth < 1337){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                    setTimeout(function(){
                        document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                    },100)
                }
            }
            if(document.querySelector('.sidebar_outer') != null){
                document.querySelector('.sidebar_outer').style.display="block"
                document.querySelector('.inc_sidebar_modal_block').style.display="block"
                document.querySelector('.inc_sidebar_modal_block').classList.add('active')
                document.querySelector('.sidebar_outer').classList.add('sidebar_outer_active')
            }
            document.querySelector('html').classList.add('inc_overlay');
            var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
            if(elSidebarOverlay != null){
                elSidebarOverlay.style.display = "block";
            }
            document.querySelector('.inc_sidebar_modal_block').style.display = "block";
            var classNames = INC.uiConfig.sidebar.className;
            var getSelectorClassName = INC.methods.getSelectorClassName;
            document.querySelector('.inc_sidebar_modal_block').classList.add("active");
            
            
            if(document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null){
                if(document.querySelector('.inc_recommended_tabs_list_item_text') != null){
                    document.querySelector('.inc_recommended_tabs_list_item_text').click()
                }
            }
        }
        if(seidebar_pr_length == 0){
            document.querySelector('html').classList.remove('inc_overlay')
            document.querySelector('body').setAttribute('style','')
        }
        document.querySelector('.sidebar_outer .inc_sidebar_modal_block .inc_header_title_block').setAttribute('style','display: flex;')
        document.querySelector('.inc_header_sub_title_text_block').setAttribute('style','margin-left: 10px;')
        setTimeout(function(){
            var sel_variant = document.querySelectorAll('.inc_recommended_products_list_main_block .inc_variant_new1 .inc_variant_tag')
            for(x=0;x<sel_variant.length;x++){
                if(sel_variant[x] != undefined){
                    if(sel_variant[x].parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail') != null){
                        sel_variant[x].parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail').click()
                    }
                    var sel_var = sel_variant[x].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                    var selv = sel_variant[x]
                    var alloptionss = sel_variant[x].querySelectorAll('option')
                    for(j=0;j<alloptionss.length;j++){
                        var texttocheck = alloptionss[j].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')
                        if(sel_var != undefined){
                            if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                                alloptionss[j].selected = 'selected'
                            }else{
                                if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                    alloptionss[j].selected = 'selected'
                                }
                            }
                        }
                    }
                }
            }

            for(y=0;y<sel_variant.length;y++){
                if(sel_variant[y] != undefined){
                    var sel_var = sel_variant[y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                    var selv = sel_variant[y]
                    var alloptionss = sel_variant[y].querySelectorAll('option')
                    for(m=0;m<alloptionss.length;m++){
                        if(sel_var != undefined){
                            var texttocheck = alloptionss[m].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')

                            if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                                inc_onchange_color_variant(selv)
                            }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                inc_onchange_color_variant(selv)
                            }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','ー/').toLocaleLowerCase()) >= 0){
                                inc_onchange_color_variant(selv)
                            }
                        }
                    }
                }
            }
        },2000)
    }
    // document.querySelector('body').style.overflowY = "hidden";
}
INC.methods.hideSidebar = function () {
    var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
    INC.config.pdpaddedProductList = []
    elSidebarOverlay.style.display = "none";
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = INC.methods.getSelectorClassName;
    document.querySelector('html').classList.remove('inc_overlay')
    document.querySelector('html').classList.remove('inc_popup_open')
    document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).classList.remove("active");
    document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).style.display="none"
    if(document.querySelector('#widget_minishopcart') != null){
        // document.querySelector('#widget_minishopcart').click()
    }
    if(document.querySelector('.sidebar_outer') != null){
        document.querySelector('.inc_sidebar_modal_block').style.display="none"
        document.querySelector('.sidebar_outer').style.display="none"
        document.querySelector('.sidebar_outer').classList.remove('sidebar_outer_active')
    }
    if(document.querySelector('#minishopcart_total') != null && document.querySelector('#miniBasketTabProdCount') != null){
        document.querySelector('#minishopcart_total').innerText = document.querySelector('#miniBasketTabProdCount').innerText.trim()
    }
    document.querySelector('body').setAttribute('style','')
}
INC.methods.addProductToSidebarCart = function(findObj, qty, productBlock, client_add_btn, type_bundle) {
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = this.getSelectorClassName;

    var sbBlock = document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock"));

    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var subtotal_activeprice = 0;
    var subtotal_regular = 0;
    if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text') != null) {
        var subtotal_activeprice = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text').getAttribute('subtotalactiveprice')
    }
    if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text') != null) {
        var subtotal_regular = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text').getAttribute('subtotalregularprice')
    }
    if (subtotal_activeprice == null) {
        subtotal_activeprice = 0
    }
    if (subtotal_regular == null) {
        subtotal_regular = 0
    }
    if (client_add_btn == "client_add_btn") {
        var subtotal_activeprice = 0;
        var subtotal_regular = 0;
    }

    var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
    var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
    var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
    var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var sbCartBlock = getViewElement("sidebarCartAddedListBlock");

    var productObj = dataStore.methods().getProductById(findObj);

    var qty_sub_tside = ""
    for (q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
        if (INC.clientConfig.added_product_sku[q].skus == productObj.id) {
            qty_sub_tside = INC.clientConfig.added_product_sku[q].qtys
            break;
        }
    }
    if (client_add_btn == "client_add_btn") {
        qty_sub_tside = qty
    } else {
        if (qty_sub_tside == "" || qty_sub_tside == 0) {
            qty_sub_tside = qty
            // qty_sub_tside = 0
        }
    }

    var productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");
    productBlock.setAttribute('id', productObj.id)
    productBlock.setAttribute('sku', productObj.sku)
    productBlock.setAttribute('mainId', productObj.mainId)
    productBlock.setAttribute('qty', '1')
    productBlock.setAttribute('type_bundle', type_bundle)
    productBlock.classList.add(type_bundle)
    var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
    var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
    var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
    var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
    var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
    var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));
    var eltextmesg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveTextMsg"));
    var elmoreproducttext = document.querySelector('.inc_cart_added_right_btn_img')
    var eladdedqtyblock = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductqtyBlock"));

    if (client_add_btn == "client_add_btn") {
        var subtotal_activeprice = 0;
        var subtotal_regular = 0;
    }
    sbCartBlock.setAttribute("style", "justify-content: flex-start;");
    if(productObj.imageURL.indexOf('undefined') == -1){
        var elImgTag = INC.methods.generateHTMLTags('img', {
            src: productObj.imageURL
        });
        if(onloadpdp == true){
            elImgTag.src = productObj.imageURL
        }
    }else{
        var elImgTag = document.createElement('img')
    }
    elImg.appendChild(elImgTag);

    elTitleText.innerHTML = productObj.name;
    //qty + "<small>x </small>" +
    //current  active prod
    var color = "";
    var size = "";
    if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
        var just_check_prod_block = document.querySelector('.inc_sidebar_modal_block .inc_product_module_block[data-id=' + '"' + productObj.sku + '"' + ']')
    } else {
        var just_check_prod_block = document.querySelector('.inc_product_module_block[data-id=' + '"' + productObj.sku + '"' + ']')
    }
    if (just_check_prod_block != null) {
        if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null) {
            size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
        }
        if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null) {
            color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
        }
    }

    if (color != "") {

        elAttColorText.innerText = color;
    }

    elAttsizeText.innerText = size;
    var p_type_details = document.createElement('div');
    p_type_details.classList.add('del_message')
    if (type_bundle == "collection") {
        p_type_details.innerText = "Click & Collect"
    } else {
        p_type_details.innerText = "Added for delivery"
    }
    if (INC.clientConfig.OOS.indexOf(productObj.id) >= 0) {
        productBlock.classList.add('cross')
        for (e = 0; e < INC.clientConfig.OOS.length; e++) {
            if (INC.clientConfig.OOS[e] == productObj.id.split('-')[0]) {
                if (INC.clientConfig.OOS_MESG[e] != undefined) {

                    eltextmesg.classList.add('inc_error_msg')
                    
                    if (type_bundle == "collection") {
                        if (productObj.Field6 == "CollectOnly") {
                            p_type_details.innerText = "Not Added"
                            eltextmesg.innerText = "Sorry, not added for collection, insufficient stock"
                        } else {
                            p_type_details.innerText = "Not Added"
                            eltextmesg.innerText = "Note: Not available in store. Item added for delivery."
                        }
                        eltextmesg.style.color = "#555"
                    } else {
                        p_type_details.innerText = "Not Added"
                        eltextmesg.innerText = INC.clientConfig.OOS_MESG[e]
                        eltextmesg.style.color = "#c3332e"
                    }
                }
            }
        }
    }

    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
    // debugger
    if (activePrice != regularPrice) {
        elHeadersubtotalactivetext.classList.add('priceRed');
    } 
    // else {
    //     if (elHeadersubtotalactivetext.classList.contains('priceRed')) {
    //         elHeadersubtotalactivetext.classList.remove('priceRed');
    //     }
    // }

    elPriceActiveText.innerText = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
    //parseFloat(activePrice).toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,');
    elPriceActiveText.innerText = elPriceActiveText.innerText;


    if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
        if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
            var subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty_sub_tside)
            var subtotalregukarprice = +subtotal_activeprice + (+regularPrice * qty_sub_tside)
        } else {
            var subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty_sub_tside)
            var subtotalregukarprice = +subtotal_regular + (+regularPrice * qty_sub_tside)
        }
    } else {
        if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
            var subtotalactiveprice = +subtotal_activeprice
            var subtotalregukarprice = +subtotal_activeprice
        } else {
            var subtotalactiveprice = +subtotal_activeprice
            var subtotalregukarprice = +subtotal_regular
        }
    }
    //qty block
    var inc_product_desc_qty_block = generate_html_tag('div', 'inc_product_desc_qty_block');
    eladdedqtyblock.appendChild(inc_product_desc_qty_block)

    if (qty_sub_tside == 0) {
        // inc_product_desc_qty_block.style.display = "none"
    }
    inc_product_desc_qty_block.classList.add('singleqty')
    var inc_product_desc_qty_down_block = generate_html_tag('div', 'inc_product_desc_qty_down_block');
    inc_product_desc_qty_block.appendChild(inc_product_desc_qty_down_block)
    var inc_product_desc_qty_down_btn = generate_html_tag('div', 'inc_product_desc_qty_down_btn');
    inc_product_desc_qty_down_block.appendChild(inc_product_desc_qty_down_btn)

    var inc_product_desc_qty_input_block = generate_html_tag('div', 'inc_product_desc_qty_input_block');
    inc_product_desc_qty_block.appendChild(inc_product_desc_qty_input_block)
    var elQtyInput = this.generateHTMLTags('input');
    elQtyInput.setAttribute('type', "number");
    elQtyInput.setAttribute('aria-label', "quantity");
    elQtyInput.setAttribute('min', 1);
    elQtyInput.setAttribute('max', 999);
    elQtyInput.setAttribute('maxlength', 3);
    elQtyInput.setAttribute('readonly', '');
    elQtyInput.value = qty_sub_tside;
    elQtyInput.setAttribute('old_qty', '1');
    elQtyInput.setAttribute('pattern', '[0-9]');
    elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
    elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==2) return false;');
    inc_product_desc_qty_input_block.appendChild(elQtyInput)



    var inc_product_desc_qty_up_block = generate_html_tag('div', 'inc_product_desc_qty_up_block');
    inc_product_desc_qty_block.appendChild(inc_product_desc_qty_up_block)
    var inc_product_desc_qty_up_btn = generate_html_tag('div', 'inc_product_desc_qty_up_btn');
    inc_product_desc_qty_up_block.appendChild(inc_product_desc_qty_up_btn)

    if(document.querySelector('.inc_header_item_count_title_text').innerText.indexOf('ITEM(s)') >= 0){
        var old_qty = document.querySelector('.inc_header_item_count_title_text').innerText.split('ITEM(s)')[0].replace('(', '').trim()
    }else{
        var old_qty = document.querySelector('.inc_header_item_count_title_text').innerText.split('Item(s)')[0].replace('(', '').trim()
    }
    
    var qtyDiv = document.createElement('div');
    qtyDiv.setAttribute("id", productObj.id);
    qtyDiv.innerText = 'x' + parseInt(qty);
    qtyDiv.style.display = "none"
    qtyDiv.classList.add("inc_qty_number_block");

    productBlock.childNodes[0].appendChild(qtyDiv)
    
    p_type_details.classList.add('p_type_details')
    p_type_details.setAttribute('style', 'display:block;width:100%')
    productBlock.querySelector('.inc_cart_added_product_desc_block').appendChild(p_type_details)
    if (document.querySelector('.inc_cart_added_product_block[type_bundle="' + type_bundle + '"][id="' + productObj.id + '"]') == null) {
        sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
        productBlock.classList.add('just_added')
        setTimeout(function(){
            productBlock.classList.remove('just_added')
        },3000)
        if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
            if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
                if (client_add_btn == "client_add_btn") {
                    if(sidebar_configurator_id.indexOf(INC.config.mainProductid) >= 0){
                        sidebarHeaderItemCountTitleText.innerHTML = "1 ITEM(s)"
                    }else{
                        sidebarHeaderItemCountTitleText.innerHTML = "1 Item(s)"
                    }
                } else {
                    if(sidebar_configurator_id.indexOf(INC.config.mainProductid) >= 0){
                        sidebarHeaderItemCountTitleText.innerHTML = (parseInt(old_qty) + 1) + " ITEM(s)"
                    }else{
                        sidebarHeaderItemCountTitleText.innerHTML = (parseInt(old_qty) + 1) + " Item(s)"
                    }
                }
            }
        }
    } else {
        var addedel = document.querySelector('.inc_cart_added_product_block[type_bundle="' + type_bundle + '"][id="' + productObj.id + '"]')
        if (INC.clientConfig.OOS.indexOf(productObj.id) >= 0) {
            if (addedel.classList.contains('cross') == false) {
                sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
            } else {
                addedel.parentNode.removeChild(addedel)
                sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
            }
        } else if (addedel.classList.contains('cross') == false) {
            var qtys = addedel.querySelector('.inc_cart_added_product_qty_block input').value
            // addedel.querySelector('.inc_qty_number_block').innerText= 'x' + (+parseInt(qtys) + +parseInt(qty))
            // addedel.querySelector('.inc_cart_added_product_desc_title_text').innerHTML =  productObj.name;
            // if(INC.clientConfig.OOS.indexOf(productObj.id) == -1){
            //     if(client_add_btn == "client_add_btn"){
            //         addedel.querySelector('.inc_product_desc_qty_input_block input').value = parseInt(qty)
            //     }else{
            //         var c_qty = addedel.querySelector('.inc_product_desc_qty_input_block input').value
            //         addedel.querySelector('.inc_product_desc_qty_input_block input').value = (parseInt(qty) + parseInt(old_qty))
            //     }
            // }
            elQtyInput.value = (+parseInt(qtys) + +parseInt(qty));
            addedel.querySelector('.inc_product_desc_qty_input_block input').value = (+parseInt(qtys) + +parseInt(qty));
            addedel.parentNode.removeChild(addedel)
            sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));

        } else {
            sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
        }

    }
    sbCartBlock.style.justifyContent = "flex-start"
    // elHeaderItemCountFigureText.style.display = "none";


    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_1')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_2')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_3')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_4')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_11')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_21')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_31')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_41')
    if (client_add_btn == "client_add_btn") {
        // document.querySelector('.inc_cart_added_right_btn_img').setAttribute('added_counts','1')
        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_11')
        var alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
        var morecount = 2
        if (window.innerWidth < 820) {
            morecount = 1
        }
        var tcount = alladdedprodlength - morecount + " More Item(s)"
        elmoreproducttext.innerHTML = "+" + tcount
        document.querySelector('.inc_header_item_count_title_text').setAttribute('added_counts', (alladdedprodlength - morecount))
    } else {
        if (old_qty != undefined) {
            if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
                var morecount = 2
                if (window.innerWidth < 820) {
                    morecount = 1
                }
                var alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
                if (alladdedprodlength > morecount) {
                    var tcount = alladdedprodlength - morecount + " More Item(s)"
                    
                    if(document.querySelector('.inc_sidebar_cart_added_block.active') != null){
                        elmoreproducttext.innerHTML = "Show Less"
                    }else{
                        elmoreproducttext.innerHTML = "+" + tcount
                    }
                    document.querySelector('.inc_header_item_count_title_text').setAttribute('added_counts', (alladdedprodlength - morecount))
                    document.querySelector('.inc_cart_added_right_btn_block').style.visibility = "visible"
                } else {
                    elmoreproducttext.innerHTML = ""
                }
                
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_' + alladdedprodlength)
                if (alladdedprodlength == 1) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_11')
                } else if (alladdedprodlength == 2) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_21')
                } else if (alladdedprodlength == 3) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_31')
                } else if (alladdedprodlength > 3) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_41')
                }
            }
        }
    }
    var alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
    // if(alladdedprodlength > morecount){
    //     var tcount=alladdedprodlength - morecount + " more item(s)"
    //     elmoreproducttext.innerHTML =   "+" + tcount
    //     document.querySelector('.inc_header_item_count_title_text').setAttribute('added_counts',(alladdedprodlength - morecount))
    // }else{
    //     elmoreproducttext.innerHTML = ""
    // }
    document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_' + alladdedprodlength)
    if (alladdedprodlength == 1) {
        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_11')
    } else if (alladdedprodlength == 2) {
        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_21')
    } else if (alladdedprodlength == 3) {
        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_31')
    } else if (alladdedprodlength > 3) {
        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_41')
    }

    

    if (sbCartBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")).length > 2) {
        // getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "visible";
        getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "visible";
    }

    elHeadersubtotalactivetext.setAttribute('subtotalactiveprice', subtotalactiveprice)
    elHeadersubtotalregulartext.setAttribute('subtotalregularprice', subtotalregukarprice)

    if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
        elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalactiveprice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        //parseFloat(subtotalactiveprice).toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,');
        elHeadersubtotalregulartext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalregukarprice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        //parseFloat(subtotalregukarprice).toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,');
    } else {
        
        elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalactiveprice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        //parseFloat(subtotalactiveprice).toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,');
        elHeadersubtotalregulartext.innerHTML = ""
    }
    if (window.innerWidth > 819) {
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 5) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
            document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: flex-start;')
        } else {
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('flex-start')
            document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: center;')
        }
    } else {
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
            document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: flex-start;')
        } else {
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('flex-start')
            document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: center;')
        }
    }

}

INC.methods.createAMBlock = function (ticket) {
    document.querySelector('body').classList.add('inc_bundles');
    if(INC.dataStore.dataStoreObj.undefined == undefined){
        var classNames = INC.uiConfig.am.className;
        var amBlock = this.getElementChilds("afModalBlock", "am");
        var getSelectorClassName = INC.methods.getSelectorClassName;
       
        function getViewElement(className) {
            return amBlock.querySelector(getSelectorClassName(classNames, className));
        }
        getViewElement("afProductListBlock").innerHTML = "";

        var elAmTitleText = getViewElement("afModalTitleText");

        var productListObj = INC.dataStore.dataStoreObj;
        var productListArray = Object.keys(productListObj);

        var amProductListBlock = getViewElement("afProductListBlock");

        var productIds = [];
        
        Array.prototype.forEach.call(document.querySelectorAll('.item-delite button'), function (elProductCode) {
            productIds.push(elProductCode.getAttribute('onclick').split("('")[1].split("')")[0]);
        });
        if(productIds.length == 0){
            Array.prototype.forEach.call(document.querySelectorAll('#itemList .item .delete a'), function (elProductCode) {
                productIds.push(elProductCode.getAttribute('onclick').split("GaTagAdapterRemoveToCart(")[1].split(')')[0].replace("'","").replace("'","").replace('"','"').replace('"','"'));
            });
        }
        var bundleProductsArray = INC.dataStore.bundleProductsArray;

        // productListArray.forEach(function (mainProductId) {
        bundleProductsArray.forEach(function (mainProductId) {
            if (productIds.indexOf(mainProductId) == -1) {
                elAmTitleText.innerText = INC.config.BeforeYouChecktext;
                var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: mainProductId });
                amProductListBlock.appendChild(INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false,amBlock));
            }
        });

        var amProductBlocks = amBlock.querySelectorAll(getSelectorClassName(classNames, "productBlock"));
        Array.prototype.forEach.call(amProductBlocks, function(productBlock) {
            productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function(e) {
                var productBlockNode = this.parentNode.parentNode;
                if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('simple') == false){
                    productBlockNode = productBlockNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('inc_recommended_products_list_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }

                if(productBlockNode.classList.contains('inc_product_showcase_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('inc_af_product-list_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('inc_product_module_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('inc_product_modal_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode
                }
                var sku = productBlockNode.getAttribute('data-sku');
                var findObj = new INC.classes.FindObj({
                    id: sku
                });
                var qty = productBlockNode.querySelector('input').value;
                if (qty == undefined || qty == "") {
                    qty = 1
                }
                var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
                var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
                var productModuleBlock = productBlockNode.parentNode.parentNode
                var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
                if(flag_check == 1){
                    INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn, "delevery");
                }else{
                    
                    if(productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block') != null){
                        productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block').classList.add('error_inc_message')
                    }
                    if(productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block') != null){
                        productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block').classList.add('error_inc_message')
                    }
                }
                
            });
        });
        Array.prototype.forEach.call(amProductBlocks, function(productBlock) {
            productBlock.querySelector(getSelectorClassName(classNames, "productAddBlockclickcollect")).addEventListener("click", function(e) {

                var productBlockNode = this.parentNode.parentNode;
                if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('simple') == false){
                    productBlockNode = productBlockNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('inc_recommended_products_list_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }

                if(productBlockNode.classList.contains('inc_product_showcase_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                if(productBlockNode.classList.contains('inc_product_module_block') == true){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                var sku = productBlockNode.getAttribute('data-sku');
                var findObj = new INC.classes.FindObj({
                    id: sku
                });
                var qty = productBlockNode.querySelector('input').value;
                if (qty == undefined || qty == "") {
                    qty = 1
                }
                var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
                var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
                if (productBlockNode.querySelector('.img_color_swatch') != null) {
                    if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                        INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                    } else {
                        productBlockNode.querySelector('.img_color_swatch').click()
                    }
                } else {
                    INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                }
            });
        });
        //s-cartpush
        if(amProductListBlock.querySelector('.inc_product_module_block') != null){
            INC.methods.clear();
            if(INC.config.pageType == "cartPage"){
                var elAMPosition = document.querySelector('#cart-items-form');
                var elAMPosition_mobile = document.querySelector('.container .row .right-aside .checkout-widget__basket-block');
                var elAMPosition_tab = document.querySelector('#tealium-pageload-data');
                var elmaintab = document.querySelector('main');
                var elAMposition_before = document.querySelector('.cart-recentlyviewed');
    
                var elAMPosition123 = document.querySelector('.container .row');
                INC.methods.clear();
                var amBlockSelector = elAMPosition;
    
                if (window.innerWidth > 819) {
                    elAMPosition123.parentNode.appendChild(amBlock)
    
                } else if (window.innerWidth > 767) {
                    if (elAMposition_before != null) {
                        var parentDiv = elAMposition_before.parentNode
                        parentDiv.insertBefore(amBlock, elAMposition_before)
                    } else {
                        if(elAMPosition_tab != null){
                            elAMPosition_tab.appendChild(amBlock);
                        }else{
                            elmaintab.appendChild(amBlock);
                        }
                    }
                } else {
                    var elAMposition_before = document.querySelector('.container .row aside.right-aside');
                    elAMposition_before.appendChild(amBlock)
                    // if (elAMposition_before != null) {
                    //     var parentDiv = elAMposition_before.parentNode
                    //     parentDiv.insertBefore(amBlock, elAMposition_before)
                    // } else {
                    //     elAMPosition_mobile.appendChild(amBlock);
                    // }
                }
            }else if(INC.config.pageType == "homePage"){

                ////////Creating HR line/////////////
                INC.methods.clear();
                var hr_container = document.createElement('div');
                hr_container.classList.add('container','inc_hr');
                var hr_line = document.createElement('hr');
                hr_line.classList.add('fullwidth-blue-hr','mt-0');
                INC.methods.clear();
                hr_container.append(hr_line);

                //////////////Appending////////////////
                var reference_node = document.querySelector('.component__actions');
                reference_node.parentNode.insertBefore(hr_container, reference_node.nextSibling);

                var am_container = document.createElement('div');
                am_container.classList.add('container');
                am_container.appendChild(amBlock);
                
                var elAMPosition = document.querySelector('.inc_hr');
                INC.methods.clear();
                var amBlockSelector = elAMPosition;
                elAMPosition.parentNode.insertBefore(am_container,elAMPosition.nextSibling);
                document.querySelector('.inc_af_block .inc_af_title_block .inc_af_title_text_block .inc_af_title_text').innerText = "Featured Products";

                //////////////Styling for Home Page////////////////
            }

            var prd_length=3
            if(window.innerWidth > 1199){
                var prd_length=4
            }

            amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).style.visibility = "hidden";
            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).style.visibility = "hidden";
            
            if(amBlock.parentNode != null){
                var productBlocks = amProductListBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
                var sliderBtnCounter = 0;

                if (productBlocks.length >= (prd_length+1)) {
                    amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).style.visibility = "visible";
                    amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).style.visibility = "visible";
                    amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");

                    amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).style.visibility = "visible";
                    amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).style.visibility = "visible";
                    amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
                }

                amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).addEventListener("click", function () {
                    sliderBtnCounter++;
                    if (sliderBtnCounter >= productBlocks.length - (prd_length+1)) {
                        sliderBtnCounter--;
                    }
                    var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
                    // productBlocks[sliderBtnCounter - 1].style.display = "none";
                    var cc_ount=3;
                    if(window.innerWidth > 1199){
                        cc_ount = 4
                        if(window.innerWidth > 1449){
                            cc_ount = 4
                        }
                    }
                    var wid_sld=270
                    
                    if(window.innerWidth > 1199){
                            var wid_sld=280
                    }
                    if(+INC.clientConfig.slidevalue + +cc_ount < all_p_length){
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: auto;opacity:1");
                        INC.clientConfig.slidevalue++
                        INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - wid_sld) + 'px';
                        var menu = amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afProductListBlock"));
                        // menu.style['transitionDuration'] = '0.5s'
                        // menu.style['marginLeft'] = INC.clientConfig.offset
                        menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    }
                    
                    if(+INC.clientConfig.slidevalue + +cc_ount == all_p_length){
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
                    }
                });

                amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).addEventListener("click", function () {
                    sliderBtnCounter--;
                    if (sliderBtnCounter == -1) sliderBtnCounter = 0;
                    // productBlocks[sliderBtnCounter].style.display = "flex";
                    var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
                   
                    var wid_sld=270;

                    if(window.innerWidth > 1199){
                        var wid_sld=280
                    }
                    if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
                    if(INC.clientConfig.slidevalue > 0){
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).setAttribute("style", "pointer-events: auto;opacity:1");
                        INC.clientConfig.slidevalue--
                        INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + wid_sld) + 'px';
                        var menu = amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afProductListBlock"));
                        // menu.style['transitionDuration'] = '0.5s'
                        // menu.style['marginLeft'] = INC.clientConfig.offset
                        menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    }
                    if(INC.clientConfig.slidevalue == 0){
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
                        amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
                    }
                });
                setTimeout(function(){
                    if(document.querySelector('.inc_af_title_block') != null){
                        document.querySelector('.inc_af_title_block').setAttribute('role',"contentinfo")
                    }
                    setTimeout(function(){
                        var sel_variant = document.querySelectorAll('.inc_af_block .inc_variant_new1 .inc_variant_tag')
                        for(b=0;b<sel_variant.length;b++){
                            if(sel_variant[b] != undefined){
                                if(sel_variant[b].parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail') != null){
                                    sel_variant[b].parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail').click()
                                }
                                var sel_var = sel_variant[b].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                                var selv = sel_variant[b]
                                var alloptionss = sel_variant[b].querySelectorAll('option')
                                for(j=0;j<alloptionss.length;j++){
                                    var texttocheck = alloptionss[j].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')
                                    if(sel_var != undefined){
                                        if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                                            alloptionss[j].selected = 'selected'
                                        }else{
                                            if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                                alloptionss[j].selected = 'selected'
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        for(l=0;l<sel_variant.length;l++){
                            if(sel_variant[l] != undefined){
                                var sel_var = sel_variant[l].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                                var selv = sel_variant[l]
                                var alloptionss = sel_variant[l].querySelectorAll('option')
                                for(m=0;m<alloptionss.length;m++){
                                    if(sel_var != undefined){
                                        var texttocheck = alloptionss[m].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')

                                        if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                                            inc_onchange_color_variant(selv)
                                        }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                            inc_onchange_color_variant(selv)
                                        }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','ー/').toLocaleLowerCase()) >= 0){
                                            inc_onchange_color_variant(selv)
                                        }
                                    }
                                }
                            }
                        }
                        onloadpdp = true
                    },1000)
                },100)
            }
        }

        if(sidebar_configurator_id.indexOf(INC.config.mainProductid) >= 0){
            document.querySelector('html').classList.add('wickes_inc_configurator')
        }else{
            document.querySelector('html').classList.add('wickes_inc_no_configurator')
        }
    }

}
INC.methods.createPDPBlock = function (sidebar) {
    document.querySelector('body').classList.add('inc_bundles');
    var empty_sidebarflag=false
    if(INC.dataStore.dataStoreObj[INC.config.Product_id] != undefined){
        if(INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id] != undefined){
            if(INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id].bundleId == "12345679"){
                empty_sidebarflag  = true
            }
        }
    }
    if(sidebar != "sidebar"){
        if(INC.dataStore.dataStoreObj.undefined != undefined || empty_sidebarflag == false){
            var classNames = INC.uiConfig.pdp.className;
            var pdpBlock = this.getElementChilds("pdpModalBlock", "pdp");
            //add-to-cart-product btn-fullwidth btn-primary disabled
            // if(window.innerWidth < 820){
            //     var clientaddtocartbtn1=document.querySelector('.add-to-cart-product')
            //     if(clientaddtocartbtn1 == null){
            //         pdpBlock.style.display = "none"
            //     }
            // }
            
            var getSelectorClassName = INC.methods.getSelectorClassName;
            Array.prototype.forEach.call(pdpBlock.querySelectorAll(getSelectorClassName(classNames, "productBlock")), function (block) {
                block.parentNode.removeChild(block);
            });

            function getViewElement(className) {
                return pdpBlock.querySelector(getSelectorClassName(classNames, className));
            }
            
            var modalTitle = getViewElement("pdpModalTitleText");
            modalTitle.innerText = INC.config.FBTTitle;
            

            var productListObj = INC.dataStore.dataStoreObj;
            // var pdpProductId = INC.dataStore.pdpProductId;
            var pdpProductId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: INC.dataStore.pdpProductId }).id;

            var mainProductBlock = this.createProductModuleBlock(pdpProductId, "pdp", false,pdpBlock);
            var bundleProductsArray = INC.dataStore.bundleProductsArray;
            var elPdpMainProductBlock = getViewElement("pdpModalMainProductBlock");
            var pdpBundleProductListItemsBlock = getViewElement("pdpBundleProductListItemsBlock");
            pdpBundleProductListItemsBlock.innerHTML = "";
            var pdpmainid=INC.dataStore.methods().getFirstProductObjByMainId({ mainId: INC.dataStore.pdpProductId })
            // var productListItemBlock1 = this.createProductListItemBlock(pdpmainid, "pdp");
            // pdpBundleProductListItemsBlock.appendChild(productListItemBlock1);
            
            elPdpMainProductBlock.innerHTML = "";
            var mainprodtitletext = document.createElement('div')
            mainprodtitletext.classList.add('mainprodtitletext')
            mainprodtitletext.innerText = "Current Item"
            // mainprodtitletext.style.display = "none"
            elPdpMainProductBlock.appendChild(mainprodtitletext)
            elPdpMainProductBlock.appendChild(mainProductBlock);
            var mainProductHeader = getViewElement("productHeaderTitleText");
            mainProductHeader.innerText = "Main Product".toUpperCase();
            var elAttColorListBlock = getViewElement("productAttColorListBlock");

            var pdpBundleProductListMainBlock = getViewElement("pdpBundleProductListMainBlock");
            pdpBundleProductListMainBlock.innerHTML = "";

            

            var productVisibleCount = (bundleProductsArray.length > 5) ? 5 : bundleProductsArray.length;

            
            for (var i = 0; i < productVisibleCount; i++) {
                var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: bundleProductsArray[i] });
                var productBlock = this.createProductModuleBlock(firstProductObjByMainId.id, "pdp", true,pdpBlock);
                if (INC.config.deviceType == "mobile") {productBlock.style.display = "none"};
                pdpBundleProductListMainBlock.appendChild(productBlock);
                
                var productListItemBlock = this.createProductListItemBlock(firstProductObjByMainId, "pdp");
                pdpBundleProductListItemsBlock.appendChild(productListItemBlock);
                var item_title_head = productBlock.querySelector('.inc_product_desc_title_text_header')
                item_title_head.innerHTML = "Current item"
                item_title_head.style.textTransform = "none"
            }
            var header = getViewElement("pdpBundleProductHeaderText");
            if (header != null) {
                header.innerText = "Frequently bought with"
                // header.style.display = "none"
                header.style.textTransform = "none"
            }
            // if (INC.config.deviceType == "mobile") 
            // pdpBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock")).classList.add("active");
            pdpBundleProductListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock")).style.display = "block";

            var pdpBundleCartBlock = this.createPDPBundleCartBlock();
            var rpdpBundleCartBlock = pdpBlock.querySelector(getSelectorClassName(classNames, "pdpModalBundleCartBlock"));
            rpdpBundleCartBlock.parentNode.removeChild(rpdpBundleCartBlock);
            pdpBlock.querySelector(getSelectorClassName(classNames, "pdpModalBundleBlock")).appendChild(pdpBundleCartBlock);

           
            INC.methods.clear();
            

            var pdpBlockSibling = document.querySelector('.pdp__main .pdp__description') || document.querySelector('.pdp .pdp__description') || document.querySelector('body');
            if (window.innerWidth < 768) {
                var pdpBlockSiblingss = document.querySelector('.pdp')
                pdpBlockSiblingss.insertBefore(pdpBlock, pdpBlockSiblingss.childNodes[11]);
            } else {
                var sib_parsys = document.querySelector('.pdp');
                sib_parsys.parentNode.insertBefore(pdpBlock, sib_parsys.nextSibling);
            }


            var elProductAddBlock = document.querySelectorAll(getSelectorClassName(classNames, "productAddBlock"));

            

            var productBlocks = getViewElement("pdpBundleProductListBlock").querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
            var inc_close_moreprod = getViewElement("pdpBundleProductListItemsWrapperHeaderclose")
            var show_more_less_block = getViewElement("pdpBundleProductListItemsBlockShowMoreLess")
            var show_more_less_text =  getViewElement("pdpBundleProductListItemsBlockShowMoreLessText");
            show_more_less_text.innerHTML = INC.config.SeeOtherProdText;
            show_more_less_text.classList.add('down_wrrow');
            
            if (INC.config.deviceType == "mobile") {
                if(document.querySelectorAll('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block')[1] != undefined){
                    document.querySelectorAll('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block')[1].click()
                }
                var eltitletext = document.querySelector('.inc_pdp_bundle_product_list_wrapper_header_text_block')
                var spanText = document.createElement('span')
                spanText.innerText = INC.config.SeeOtherProdText
                eltitletext.appendChild(spanText)
            }

            inc_close_moreprod.addEventListener('click',function(){
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('html').classList.remove('inc_popup_open')
                // document.querySelector('.inc_pdp_bundle_product_list_wrapper_items_block').classList.remove('active');
                document.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_block').click()
            })

            // getViewElement("pdpBundleProductListMainBlock").classList.add('active')pdpBundleProductListMainBlock
            getViewElement("pdpBundleProductListItemsBlockShowMoreLess").addEventListener("click", function (ev) {
                var show_more_less_text =  getViewElement("pdpBundleProductListItemsBlockShowMoreLessText");
                var clickshowmore=ev.target.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_text')
                if(clickshowmore == null){
                    clickshowmore = ev.target
                }
                if(clickshowmore.classList.contains('down_wrrow') == true){
                    show_more_less_text.innerHTML = INC.config.SeeOtherProdText;
                    show_more_less_text.classList.remove('down_wrrow');
                    show_more_less_text.classList.add('up_wrrow');
                    if(document.querySelector('.inc_pdp_block') != null){
                        inc_scroll_height= $(".inc_pdp_block").offset().top
                    }
                    document.querySelector('html').classList.add('inc_overlay');
                    document.querySelector('.inc_pdp_bundle_product_list_wrapper_items_block').classList.add('active');
                    if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                            setTimeout(function(){
                                if(document.querySelector('.inc_pdp_block') != null){
                                    inc_scroll_height= $(".inc_pdp_block").offset().top
                                }
                                document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                            },100)
                        }
                    }
                }else{
                    show_more_less_text.innerHTML = INC.config.SeeOtherProdText;
                    show_more_less_text.classList.remove('up_wrrow');
                    show_more_less_text.classList.add('down_wrrow');
                    if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true && INC.config.clientbtn == false){
                        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                            document.querySelector('body').style.position = "relative"
                            jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                    document.querySelector('body').style.position = "relative"
                    document.querySelector('html').classList.remove('inc_overlay');
                    document.querySelector('html').classList.remove('inc_popup_open')
                    document.querySelector('.inc_pdp_bundle_product_list_wrapper_items_block').classList.remove('active');
                }
            });
            getViewElement("pdpBundleProductLeftBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
            // if (isIE()){
                getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity:0.5");
            // }
            var sliderBtnCounter = 0;
            var lengthCount = productBlocks.length + 1;
            if(window.innerWidth < 1190){
                var prd_length = 1
            }else{
                var prd_length = 2
            }
            if (productBlocks.length > prd_length) {
                getViewElement("pdpBundleProductRightBtnBlock").addEventListener("click", function () {
                    var prod_c = 1;
                    var width_prod = 260;
                    if(window.innerWidth > 1189){
                        prod_c = 2
                        width_prod = 270;
                    }else if(window.innerWidth > 900){
                        prod_c = 1
                        width_prod = 260;
                    }else if(window.innerWidth < 901){
                        prod_c = 1
                        width_prod = 240;
                    }
                    
                    if(INC.clientConfig.slidevalue+prod_c < productBlocks.length){
                        getViewElement("pdpBundleProductLeftBtnBlock").setAttribute("style", "pointer-events: auto;opacity:1");
                        getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity:1");
                        INC.clientConfig.slidevalue++
                        INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - width_prod) + 'px';
                        var menu = getViewElement("pdpBundleProductListMainBlock");
                        menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    }
                    if(INC.clientConfig.slidevalue+prod_c == productBlocks.length){
                        getViewElement("pdpBundleProductRightBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
                        getViewElement("pdpBundleProductRightBtnImg").setAttribute("style", "opacity:0.5");
                    }
                    sliderBtnCounter++;
                    if (sliderBtnCounter > lengthCount - 3) {
                        sliderBtnCounter--;
                    }
                });
                

                getViewElement("pdpBundleProductLeftBtnBlock").addEventListener("click", function () {
                    var prod_c = 1;
                    var width_prod = 260;
                    if(window.innerWidth > 1189){
                        prod_c = 2
                        width_prod = 270;
                    }else if(window.innerWidth > 900){
                        prod_c = 1
                        width_prod = 260;
                    }else if(window.innerWidth < 901){
                        prod_c = 1
                        width_prod = 240;
                    }
                    if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
                    if(INC.clientConfig.slidevalue > 0){
                        getViewElement("pdpBundleProductRightBtnBlock").setAttribute("style", "pointer-events: auto;opacity:1");
                        getViewElement("pdpBundleProductRightBtnImg").setAttribute("style", "opacity:1");
                        INC.clientConfig.slidevalue--
                        INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + width_prod) + 'px';
                        var menu = getViewElement("pdpBundleProductListMainBlock");
                        menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    }
                    if(INC.clientConfig.slidevalue == 0){
                        getViewElement("pdpBundleProductLeftBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
                        getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity:0.5");
                    }
                    sliderBtnCounter--;
                    if (sliderBtnCounter == -1) sliderBtnCounter = 0;
                });
            }
            
            if (!(productBlocks.length > prd_length)) {
                getViewElement("pdpBundleProductRightBtnBlock").style.visibility = "hidden";
                getViewElement("pdpBundleProductLeftBtnBlock").style.visibility = "hidden";
            }
            setTimeout(function(){
                for (var i = 0; i < 8; i++) {
                    if (typeof (elProductAddBlock[i]) != "undefined" && i % 2 != 0){
                        var productBlockNode = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                        if(window.innerWidth > 1139){
                            if(i == 1 || i == 3 || i == 5){
                                var module_block=elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                                if(module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img') != null){
                                    module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img').click()
                                } 
                                if(module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img_block.avail') != null){
                                    module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img').click()
                                }
                                elProductAddBlock[i].click();
                            }
                        }else if(i == 1 || i == 3){
                            var module_block=elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                            if(module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img') != null){
                                module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img').click()
                            } 
                            if(module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img_block.avail') != null){
                                module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img').click()
                            }
                            elProductAddBlock[i].click();
                            
                        }
                    } 
                }
            },50)
            setTimeout(function(){
                var clientselectelm = document.querySelector('.pdp-price-container select#variant')
                var client_var = ""
                var sel_variant = ""
                var sel_varianttext = ""
                if(clientselectelm != null){
                    var selvar = clientselectelm;
                    sel_variant = selvar.options[selvar.selectedIndex].getAttribute("value");
                    client_var = selvar.options[selvar.selectedIndex].innerText.toLocaleLowerCase();
                }
                
                var sel_variant = document.querySelector('.inc_pdp_product-main_block .inc_variant_tag')
                if(sel_variant != null){
                    var alloptionss = sel_variant.querySelectorAll('option')
                    for(j=0;j<alloptionss.length;j++){
                        if(client_var.indexOf('please select') >= 0 || client_var == ""){
                            if(j == 1){
                                alloptionss[j].selected = 'selected'
                                inc_onchange_color_variant(sel_variant)
                                break;
                            }
                        }else{
                            if(alloptionss[j].getAttribute('datasize') == client_var.toLocaleLowerCase()){
                                alloptionss[j].selected = 'selected'
                                inc_onchange_color_variant(sel_variant)
                                break;
                            }
                        }
                    }
                }
                var sel_variant1 = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block')
                //inc_variant_tag
                
                for(b=0;b<sel_variant1.length;b++){
                    if(b < 2 || sel_variant1[b].querySelector('.inc_variant_new1') != null){
                        if(sel_variant1[b].querySelector('.inc_variant_tag') != null){
                            if(sel_variant1[b] != undefined){
                                var seltag=sel_variant1[b].querySelector('.inc_variant_tag')
                                if(seltag.parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail') != null){
                                    seltag.parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail').click()
                                }
                                var sel_var = seltag.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                                var selv = seltag
                                var alloptionss = seltag.querySelectorAll('option')
                                for(j=0;j<alloptionss.length;j++){
                                    var texttocheck = alloptionss[j].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')
                                    if(sel_var != undefined){
                                        if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                                            alloptionss[j].selected = 'selected'
                                        }else{
                                            if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                                alloptionss[j].selected = 'selected'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                for(l=0;l<sel_variant1.length;l++){
                    if(sel_variant1[l].querySelector('.inc_variant_tag') != null){
                        if(l < 2 || sel_variant1[l].querySelector('.inc_variant_new1') != null){
                            if(sel_variant1[l] != undefined){
                                var seltagsa=sel_variant1[l].querySelector('.inc_variant_tag')
                                var sel_var = seltagsa.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                                var selv = seltagsa
                                var alloptionss = seltagsa.querySelectorAll('option')
                                for(m=0;m<alloptionss.length;m++){
                                    if(sel_var != undefined){
                                        var texttocheck = alloptionss[m].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')

                                        if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                                            inc_onchange_color_variant(selv)
                                        }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                            inc_onchange_color_variant(selv)
                                        }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','ー/').toLocaleLowerCase()) >= 0){
                                            inc_onchange_color_variant(selv)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
            },200)
            
            
            setTimeout(function(){
                onloadpdp = true
            },1000)
        }
    }
    
    if(sidebar == "sidebar"){
        this.createSidebarBlock();
    }

    // this.trackingEvents("productPageVisit", { "product_id": INC.dataStore.pdpProductId });
    // this.trackingEvents("catalogProductView", { "product_id": INC.dataStore.pdpProductId });
}

INC.methods.createPDPBundleCartBlock = function () {
    var classNames = INC.uiConfig.pdp.className;
    var pdpBundleCartBlock = this.getElementChilds("pdpModalBundleCartBlock", "pdp");
    var getSelectorClassName = INC.methods.getSelectorClassName;
    function getViewElement(className) {
        return pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, className));
    }
    

    var elBundleCartTitleBlock = getViewElement("pdpBundleCartTitleBlock");
    var elBundleCartTitleText = getViewElement("pdpBundleCartTitleText");
    var elBundleCartAddedBlock = getViewElement("pdpBundleCartAddedBlock");
    var elBundleCartSummaryViewBlock = getViewElement("pdpBundleCartSummaryViewBlock");
    var elBundleCartSummaryViewBtnText = getViewElement("pdpBundleCartSummaryViewBtnText");
    var elBundleCartAddBtnBlock = getViewElement("pdpBundleCartSummaryAddBtnBlock");
    var elBundleCartAddBlock = getViewElement("pdpBundleCartSummaryAddBlock");
    var elBundleCartsummaryBlock = getViewElement("pdpBundleCartSummaryBlock");
    var elBundleCartTitleTextblock = getViewElement("pdpBundleCartTitleTextBlock");
    var elBundleCartAddBtnclickcollectBlock = getViewElement("pdpBundleCartSummaryAddBtnClickCollectBlock");

    // elBundleCartAddBtnBlock.classList.add('inc_loading')
    // setTimeout(function() {
    //      elBundleCartAddBtnBlock.classList.remove('inc_loading')
    // }, 200);

    //Click & COllect
    //var elBundleCartClickCollectBtnBlock = getViewElement("pdpBundleCartSummaryClickCollectBlock");

    elBundleCartTitleText.innerText = "Price summary";

    // if(window.innerWidth < 820){
        elBundleCartTitleTextblock.addEventListener('click',function(){
            if(window.innerWidth < 820){
                var cartsummaryel = this.parentNode.parentNode.parentNode;
                this.classList.toggle('inc_active')
                cartsummaryel.classList.toggle('inc_active')
                if(document.querySelector('.inc_pdp_block') != null && onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        setTimeout(function(){
                            if(document.querySelector('.inc_pdp_block') != null){
                                inc_scroll_height= $(".inc_pdp_block").offset().top
                            }else if(document.querySelector('.inc_af_block') != null){
                                inc_scroll_height=  $(".inc_af_block").offset().top
                            }
                        },100)
                    }
                }
                cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').classList.toggle('active')  

                    if(cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.contains('inc_active')){
                        cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').style.display ="block";
                    }else{
                        cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').style.display ="none";
                    }
                
            }
        })
    // }

    var inc_checkout_exclude_item_block = generate_html_tag('div','inc_checkout_exclude_item_block')
    var inc_checkout_exclude_item_text = generate_html_tag('div','inc_checkout_exclude_item_text')
    inc_checkout_exclude_item_text.innerText = INC.config.ExcItemAlreadyinCartText
    inc_checkout_exclude_item_block.appendChild(inc_checkout_exclude_item_text)
    elBundleCartAddBlock.parentNode.insertBefore(inc_checkout_exclude_item_block,elBundleCartAddBlock)

    var inc_collect_point_checkout_block = generate_html_tag('div','inc_collect_point_checkout_block')
    var inc_collect_point_text = generate_html_tag('div','inc_collect_point_text')
    inc_collect_point_checkout_block.appendChild(inc_collect_point_text)

    // elBundleCartsummaryBlock.appendChild(inc_collect_point_checkout_block)

    //elBundleCartsummaryBlock
    var elBundleCartTitleImgBlock = getViewElement("pdpBundleCartTitleImgBlock");
    elBundleCartTitleImgBlock.addEventListener('click', function () {
        var cartsummaryel = this.parentNode.parentNode.parentNode;
        this.classList.remove('inc_active')
        cartsummaryel.classList.remove('inc_active')
        if(document.querySelector('.inc_pdp_block') != null &&  onloadpdp == true  && window.innerWidth < 1337){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
                if(inc_scroll_height > 100){
                    //jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').classList.remove('active')
        
        if(cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.contains('inc_active')){
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').style.display ="none";
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.remove('inc_active');
        }else{
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').style.display ="block";
        }
    });

    elBundleCartSummaryViewBtnText.innerText = "Added items";
    elBundleCartSummaryViewBlock.addEventListener('click', function () {
        // document.querySelector('body').classList.toggle('inc_mobile_overlay');
        // elBundleCartTitleBlock.classList.toggle('active');
        // elBundleCartAddedBlock.classList.toggle('active');
        // elBundleCartSummaryViewBlock.classList.toggle('active');
        // pdpBundleCartBlock.classList.toggle('active');
        // document.querySelector('.inc_pdp_bundle_cart_overlay_block').classList.toggle('active');
    });

    elBundleCartAddBtnBlock.addEventListener("click", function(e) {
        //new sidebar functionality//
        var mainpageIds = []
        for (var i in INC.dataStore.bundleCartProducts) {
            for (x = 0; x < INC.dataStore.bundleCartProducts[i]; x++) {
                mainpageIds.push(i);
            }
        }
        if(document.querySelector('.inc_recommended_tabs_list_item_text') != null){
            document.querySelector('.inc_recommended_tabs_list_item_text').click()
        }
        //var mainpageIds = Object.keys(INC.dataStore.bundleCartProducts)

        var children = ProductArr.concat(mainpageIds);

        ProductArr = children
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
            document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
        }
        if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
            document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
            document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
        }
       
        var btn_cart = e.target
        //inc_pdp_bundle_cart_summary_add_btn_text//
        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text" ){
            btn_cart.parentNode.parentNode.classList.add('inc_loading')
        }else{
            btn_cart.classList.add('inc_loading')
        }
        
        if (window.innerWidth > 819) {} else {
            btn_cart.parentNode.parentNode.classList.add('inc_loading')
        }
        setTimeout(function(){
            INC.methods.addBundleToCart(btn_cart, "delevery");
        },500)


        if(window.innerWidth < 820){
            document.querySelector('.inc_pdp_bundle_block').classList.remove('inc_active');
            var cartsummaryel = this.parentNode.parentNode.parentNode;
        this.classList.remove('inc_active')
        cartsummaryel.classList.remove('inc_active')
        if(document.querySelector('.inc_pdp_block') != null &&  onloadpdp == true  && window.innerWidth < 1337){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
                if(inc_scroll_height > 100){
                    //jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').classList.remove('active')
        
        if(cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.contains('inc_active')){
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').style.display ="none";
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.remove('inc_active');
        }
               
            
        }
        

    });
    elBundleCartAddBtnclickcollectBlock.addEventListener("click", function(e) {
        //new sidebar functionality//
        var mainpageIds = []
        for (var i in INC.dataStore.bundleCartProducts) {
            for (x = 0; x < INC.dataStore.bundleCartProducts[i]; x++) {
                mainpageIds.push(i);
            }
        }
        //var mainpageIds = Object.keys(INC.dataStore.bundleCartProducts)

        var children = ProductArr.concat(mainpageIds);

        ProductArr = children
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
            document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
        }
        if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
            document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
            document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
        }
       
        var btn_cart = e.target
        
        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
            btn_cart.parentNode.classList.add('inc_loading')
        }else{
            btn_cart.classList.add('inc_loading')
        }
        if (window.innerWidth > 819) {} else {
            btn_cart.parentNode.parentNode.classList.add('inc_loading')
        }
        
        setTimeout(function(){
            INC.methods.addBundleToCart(btn_cart, "collection");
        },500)


        if(window.innerWidth < 820){
            document.querySelector('.inc_pdp_bundle_block').classList.remove('inc_active');
            var cartsummaryel = this.parentNode.parentNode.parentNode;
        this.classList.remove('inc_active')
        cartsummaryel.classList.remove('inc_active')
        if(document.querySelector('.inc_pdp_block') != null &&  onloadpdp == true  && window.innerWidth < 1337){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
                if(inc_scroll_height > 100){
                    //jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').classList.remove('active')
        
        if(cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.contains('inc_active')){
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').style.display ="none";
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_title_text_block').classList.remove('inc_active');
        }
               
            
        }

    });

    return pdpBundleCartBlock;
}
INC.methods.createSidebarBlock = function () {
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var sbBlock = this.getElementChilds("sidebarModalBlock", "sidebar");
    var sidebar_dialoge_block =  document.createElement('div')
    sidebar_dialoge_block.classList.add('sidebar_outer')
    // var close_sisebar_icon  = generate_html_tag('span','close_sisebar_icon')
    // sidebar_dialoge_block.appendChild(close_sisebar_icon)
    sidebar_dialoge_block.appendChild(sbBlock)
    var getSelectorClassName = INC.methods.getSelectorClassName;
    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }
    
    getViewElement("sidebarCartAddedListBlock").innerHTML = "";

    var elHeaderContinueText = getViewElement("sidebarHeaderContinueText");
    var elHeaderTitleText = getViewElement("sidebarHeaderTitleText");
    var elHeaderTitleSubText = getViewElement("sidebarHeaderSubTitleText");
    var elHeaderItemCountBlock = getViewElement("sidebarHeaderItemCountBlock");
    var elHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
    var elRecommendedTitleText = getViewElement("sidebarRecommendedTitleText");
    var elRecommendedTabsListBlock = getViewElement("sidebarRecommendedTabsListBlock");
    var elRecommendedProductsBlock = getViewElement("sidebarRecommendedProductsBlock");
    var elRecommendedProductsListBlock = getViewElement("sidebarRecommendedProductsListBlock");
    var elCheckoutContinueBtnText = getViewElement("sidebarCheckoutContinueBtnText");
    var elCheckoutBasketBtnText = getViewElement("sidebarCheckoutBasketBtnText");
    var elheaditemblock = getViewElement("sidebarHeaderItemBlock");
    var elheadtitleblock = getViewElement("sidebarHeaderTitleBlock");
    var elrectitleblock = getViewElement("sidebarRecommendedTitleBlock");
    var elcheckoutblock = getViewElement("sidebarCheckoutBlock");
    var elrecblock = getViewElement("sidebarRecommendedTabsBlock");
    var elcardaddelist = getViewElement("sidebarRecommendedProductsListBlock")
    var eladedblk = getViewElement("sidebarCartAddedListBlock")
    var elsidebarheadblock = getViewElement("sidebarHeaderBlock")
    var elsidebarthumlistblock = getViewElement("sidebarRecommendedProductsListItemThumbBlock");

    var elrecomendblock = getViewElement("sidebarRecommendedBlock");
    
    // var sidebarHeaderitemblock = getViewElement("sidebarHeaderItemBlock");
    
    // elheaditemblock.addEventListener('click',function(){
        
    //     // var cnt = document.querySelector('.inc_header_item_count_title_text').innerText.toLocaleLowerCase().split('more')[0]
    //     var cnt = document.querySelector('.inc_header_item_count_title_text').getAttribute('added_counts')
        
    //     if(cnt >= 1){
    //         if(document.querySelector('.inc_sidebar_cart_added_block').classList.contains('active') == true){
    //             document.querySelector('.inc_sidebar_cart_added_block').classList.remove('active')
    //             var alladdedprodlength=document.querySelectorAll('.inc_cart_added_product_block').length;
    //             var morecount = 2
    //             if(window.innerWidth < 820){
    //                 morecount = 1
    //             }
                
    //             if(alladdedprodlength > morecount){
    //                 var tcount= alladdedprodlength - morecount + " more item(s)"
    //                 document.querySelector('.inc_header_item_count_title_text').innerText =  "+" + tcount
    //                 document.querySelector('.inc_header_item_count_title_text').setAttribute('added_counts',(alladdedprodlength - morecount))
    //             }else{
    //                 document.querySelector('.inc_header_item_count_title_text').innerText = ""
    //             }
    //         }else{
    //             document.querySelector('.inc_header_item_count_title_text').innerText = "Show less"
    //             document.querySelector('.inc_sidebar_cart_added_block').classList.add('active')
    //         }
    //     }
    // })


    var close_sisebar_icon  = generate_html_tag('span','close_sisebar_icon')
    elheadtitleblock.appendChild(close_sisebar_icon)

//role="contentinfo"
    elheaditemblock.setAttribute('role',"banner")
    elrectitleblock.setAttribute('role',"banner")
    elheadtitleblock.setAttribute('role',"banner")
    // elheadtitleblock.setAttribute('aria-level',"1")
    // elheaditemblock.setAttribute('aria-level',"2")
    // elrectitleblock.setAttribute('aria-level',"3")
    elcheckoutblock.setAttribute('role',"contentinfo")
    elRecommendedProductsListBlock.setAttribute('role',"contentinfo")
    elRecommendedProductsListBlock.setAttribute('tabindex',0)
    elrecblock.setAttribute('role',"contentinfo")
    eladedblk.setAttribute('role',"contentinfo")

    
    
    elHeaderContinueText.innerText = "Back";
    elHeaderTitleText.innerText = INC.config.ItemAddedToCarttext;
    elHeaderTitleText.style.textTransform = "none"
    elHeaderTitleSubText.innerText = INC.config.ExcItemAlreadyinCartText
    elHeaderItemCountTitleText.setAttribute('style','text-transform: none;')
    if(Object.keys(dataStore.bundleCartProducts).length == 1){
        // elHeaderItemCountTitleText.innerText = "(" + Object.keys(dataStore.bundleCartProducts).length+" Item)";
    }else{
        // elHeaderItemCountTitleText.innerText = "(" + Object.keys(dataStore.bundleCartProducts).length+" Items)";
    }
    elRecommendedTitleText.innerText = INC.config.OtherCustAlsoBoughtText;
    elRecommendedTitleText.style.textTransform = "none"
    elCheckoutContinueBtnText.innerText = INC.config.ContinueShopping;
    elCheckoutContinueBtnText.style.textTransform="none"

    var elCheckoutLink = document.createElement('a');
    elCheckoutLink.href = INC.clientConfig.checkoutLink;
    var elCheckoutTextDiv = document.createElement('div');
    elCheckoutTextDiv.innerText = INC.config.CartText;
    elCheckoutTextDiv.style.textTransform="none"
    elCheckoutTextDiv.setAttribute('draggable', 'false');
    elCheckoutLink.appendChild(elCheckoutTextDiv);
    elCheckoutBasketBtnText.appendChild(elCheckoutLink);
    

    // elHeaderItemCountBlock.addEventListener("click", function () {
    //     // document.cookie = "openCartSlider=1; path=/";
    //     // window.location.href = INC.clientConfig.checkoutLink;
    // });

    // elRecommendedProductsListBlock.innerHTML = "";

    var productCategoriesArray = dataStore.methods().getUniqueCatergories();
    var catlength = 0
    var categ_list = sortByKey(INC.config.category_seqId, 'id')
    
    var category_sequance = []
    if(sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0){
        elRecommendedTitleText.innerText = "You may need these to complete your project";
        catlength = 5
        category_sequance = INC.config.category_sequance
        // elHeaderContinueText.innerText = "Continue Shopping";
        elCheckoutTextDiv.innerText = "Checkout";
        elCheckoutContinueBtnText.innerText = "Continue Shopping";
    } else{
        category_sequance = productCategoriesArray
        catlength = 5
    }

    var progress_bar_block = document.createElement('div')
    progress_bar_block.classList.add('inc_recommended_tabs_list_progressbar_block')
    progress_bar_block.classList.add('inc_progress_1')
    elRecommendedTabsListBlock.parentNode.insertBefore(progress_bar_block,elRecommendedTabsListBlock)


    elRecommendedTabsListBlock.innerHTML = "";
    var category_count=0
   
    var tot_cat_length = Object.keys(productCategoriesArray).length
    elRecommendedTabsListBlock.classList.add('inc_categ_'+Object.keys(productCategoriesArray).length)


    if(sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0){
        for(c=0;c<categ_list.length;c++){
            productCategoriesArray.forEach(function(productCategory) {
                if (category_count < catlength && productCategory != undefined) {
                    if(categ_list[c].category == productCategory){
                        if(category_sequance.indexOf(productCategory) >= 0){
                            category_count++
                            var sidebarTabsListItemBlock = INC.methods.getElementChilds("sidebarRecommendedTabsListItemBlock", "sidebar");
                            var sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemText"));
                            
                            sidebarTabsListItemText.innerText = productCategory;
                            
                            sidebarTabsListItemBlock.setAttribute('index',category_count);

                            
                            
                            

                            sidebarTabsListItemBlock.addEventListener("click", function() {
                                elRecommendedProductsBlock.innerHTML = "";
                                elRecommendedProductsBlock.innerHTML = INC.methods.getElementChilds("sidebarRecommendedProductsBlock", "sidebar").innerHTML;
                                var elRecommendedProductsListBlock = elRecommendedProductsBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
                                elRecommendedProductsListBlock.innerHTML = "";
                                Array.prototype.forEach.call(elRecommendedTabsListBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")), function(elTabsItemBlock) {
                                    elTabsItemBlock.classList.remove("active");
                                });
                                sidebarTabsListItemBlock.classList.add("active");
                                INC.methods.updateSidebarProductsList(elRecommendedProductsListBlock, productCategory);
                        

                            });
                            
                            
                            var inc_progress_list_block = document.createElement('div');
                            inc_progress_list_block.classList.add('inc_progress_list_block')
                            progress_bar_block.appendChild(inc_progress_list_block);


                            var inc_progress_list_text = document.createElement('div');
                            if(tot_cat_length == category_count || category_count == 4){
                                // inc_progress_list_text.innerText = 'Checkout';
                            }else{
                                // inc_progress_list_text.innerText = productCategory;
                            }
                            inc_progress_list_text.innerText = productCategory;
                            inc_progress_list_text.classList.add('inc_progress_list_text')
                            inc_progress_list_block.appendChild(inc_progress_list_text);
                            inc_progress_list_block.setAttribute('index',category_count)
                            elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);
                        
                            var category_progress_count_block = document.createElement('div')
                            category_progress_count_block.classList.add('category_progress_count_block')
                            var category_progress_count_text = document.createElement('div')
                            category_progress_count_text.classList.add('category_progress_count_text')
                            if(tot_cat_length == category_count || category_count == 4){
                                category_progress_count_text.innerText = category_count
                            }else{
                                category_progress_count_text.innerText = category_count
                            }
                            if(category_count == 1){
                                inc_progress_list_block.classList.add('inc_active')
                                inc_progress_list_block.classList.add('progress_show')
                            }
                            category_progress_count_block.appendChild(category_progress_count_text)
                            inc_progress_list_text.parentNode.insertBefore(category_progress_count_block,inc_progress_list_text)
                        }
                    }
                    
                } else if (category_count == 0 && productCategory == undefined) {
                    var elRecommendedProductsListBlock = elRecommendedProductsBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
                    elRecommendedProductsListBlock.innerHTML = ""
                }
            });
        }
    }else{
    productCategoriesArray.forEach(function (productCategory) {
        if(category_count < 5 && productCategory != undefined){
            category_count++
           
            var sidebarTabsListItemBlock = INC.methods.getElementChilds("sidebarRecommendedTabsListItemBlock", "sidebar");
            var sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemText"));
            sidebarTabsListItemText.parentNode.parentNode.setAttribute('title',productCategory)
            // if(INC.config.pageType != "productList"){
                sidebarTabsListItemText.innerText = productCategory.toLocaleLowerCase();
            // }
            sidebarTabsListItemText.setAttribute('style','text-transform:capitalize;')
            // sidebarTabsListItemBlock.setAttribute('tabindex',category_count)
            sidebarTabsListItemBlock.addEventListener("click", function () {

                elRecommendedProductsBlock.innerHTML = "";
                elRecommendedProductsBlock.innerHTML = INC.methods.getElementChilds("sidebarRecommendedProductsBlock", "sidebar").innerHTML;
                var elRecommendedProductsListBlock = elRecommendedProductsBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
                elRecommendedProductsListBlock.innerHTML = "";
                elsidebarthumlistblock.innerHTML = "";
                Array.prototype.forEach.call(elRecommendedTabsListBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")), function (elTabsItemBlock) {
                    elTabsItemBlock.classList.remove("active");
                });
                sidebarTabsListItemBlock.classList.add("active");
                INC.methods.updateSidebarProductsList(elRecommendedProductsListBlock, productCategory,elsidebarthumlistblock);
            });
            elRecommendedTabsListBlock.setAttribute('tabindex',0)
            elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);
        }
    });
}

    if(elRecommendedTabsListBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")) != null){
        elRecommendedTabsListBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")).click();
    }else{
        elRecommendedTitleText.style.display="none";
    }

    if (elRecommendedTabsListBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")) != null) {
        elRecommendedTabsListBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")).click();
    } else {
        elRecommendedTitleText.style.display = "none";
    }


    var inc_next_previous_block = document.createElement('div')
    inc_next_previous_block.classList.add('inc_next_previous_block')
    inc_next_previous_block.style.marginBottom = "12px"
    var inc_previous_block = document.createElement('div')
    inc_previous_block.classList.add('inc_previous_block')
    inc_previous_block.innerText = "Previous"
    inc_previous_block.setAttribute("style", "pointer-events: none;opacity:0.5;");
    inc_next_previous_block.appendChild(inc_previous_block)

    var inc_next_block = document.createElement('div')
    inc_next_block.classList.add('inc_next_block')
    inc_next_block.innerText = "Next"
    inc_next_previous_block.appendChild(inc_next_block)

    var inc_click_checkout = document.createElement('div')
    inc_click_checkout.classList.add('inc_click_checkout')
    inc_click_checkout.innerText = "View Basket"
    inc_click_checkout.style.display ='none';
    inc_next_previous_block.appendChild(inc_click_checkout)

    elrecomendblock.appendChild(inc_next_previous_block)

    
    
    inc_next_block.addEventListener('click',function(e){
        document.querySelector('.inc_recommended_products_block').setAttribute('style','min-height: 170px;')
        var elnext = document.querySelector('.inc_recommended_tabs_list_progressbar_block')
        var elnextcurrentactive = elnext.querySelector('.inc_progress_list_block.inc_active')
        var activetab=document.querySelector(".inc_recommended_tabs_list_item_block.active")
        if(elnextcurrentactive == null){
            if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                if(elnext.querySelector('.inc_progress_list_block.inc_active') != null){
                    elnext.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                }
                elnext.querySelector('.inc_progress_list_block').classList.add('progress_show')
                elnext.querySelector('.inc_progress_list_block').classList.add('inc_active')
                document.querySelector('.inc_recommended_tabs_list_item_block').click()
            }
        }else if(elnextcurrentactive.nextElementSibling != null){
            if(elnextcurrentactive.nextElementSibling.innerText != "Checkout"){
                if(activetab.nextElementSibling != null){
                    activetab.nextElementSibling.click()
                }
            }
            if(elnext.querySelector('.inc_progress_list_block.inc_active') != null){
                elnext.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
            }
            elnextcurrentactive.nextElementSibling.classList.add('progress_show')
            elnextcurrentactive.nextElementSibling.classList.add('inc_active')
            
            document.querySelector('.inc_previous_block').setAttribute('style','')
            document.querySelector('.inc_previous_block').classList.remove('inc_prev_disable')
            if(elnextcurrentactive.nextElementSibling.nextElementSibling == null){
                document.querySelector('.inc_next_block').classList.add('inc_next_disable')
                document.querySelector('.inc_next_block').setAttribute('style','opacity:0.5;pointer-events: none;')
                document.querySelector('.inc_next_block').setAttribute('style', 'display:none;')
                document.querySelector('.inc_click_checkout').style.display = 'flex';
                
            }
            if(elnextcurrentactive.nextElementSibling.innerText == "Checkout"){
                document.querySelector('.inc_next_block').classList.add('inc_next_disable')
                document.querySelector('.inc_click_checkout').innerText = "Please click on checkout"
                document.querySelector('.inc_next_block').setAttribute('style','opacity:0.5;pointer-events: none;')
            }
        }else{
            document.querySelector('.inc_next_block').classList.add('inc_next_disable')
            document.querySelector('.inc_next_block').setAttribute('style','opacity:0.5;pointer-events: none;')
        }
        if(typeof(jQuery) != "undefined"){
            // jQuery('.inc_sidebar_modal_block.active').animate({ scrollTop: jQuery('.inc_sidebar_modal_block.active').height() }, 'slow');
        }
        setTimeout(function(){
            var all_length_progress = document.querySelectorAll('.progress_show').length
            if(document.querySelector('.inc_recommended_tabs_list_progressbar_block') != null){
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_1')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_2')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_3')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_4')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_5')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.add('inc_progress_' + all_length_progress)
            }
            document.querySelector('.inc_recommended_products_block').setAttribute('style','')//min-height: auto;
        },100)
        //document.querySelector('.inc_recommended_tabs_list_item_block[index="2"]').click()
    });

    inc_previous_block.addEventListener('click',function(e){
        document.querySelector('.inc_recommended_products_block').setAttribute('style','min-height: 170px;')
        var elprev = document.querySelector('.inc_recommended_tabs_list_progressbar_block')
        var elprevcurrentactive = elprev.querySelector('.inc_progress_list_block.inc_active')
        var activetab=document.querySelector(".inc_recommended_tabs_list_item_block.active")
        if(elprevcurrentactive.previousElementSibling != null){
            if(elprevcurrentactive.innerText != "Checkout"){
                if(elprev.querySelector('.inc_progress_list_block.inc_active') != null){
                    elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('progress_show')
                    elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                }
                
                elprevcurrentactive.previousElementSibling.classList.add('inc_active')
                activetab.previousElementSibling.click()
                document.querySelector('.inc_next_block').setAttribute('style','display:flex;')
                document.querySelector('.inc_click_checkout').setAttribute('style','display:none;')
                if(elprevcurrentactive.previousElementSibling.previousElementSibling == null){
                    document.querySelector('.inc_previous_block').setAttribute('style','opacity:0.5;pointer-events: none;')
                    document.querySelector('.inc_previous_block').classList.add('inc_prev_disable')
                    document.querySelector('.inc_next_block').classList.remove('inc_next_disable')
                    document.querySelector('.inc_next_block').setAttribute('style','')
                    
                }
            }else{
                if(elprev.querySelector('.inc_progress_list_block.inc_active') != null){
                    elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('progress_show')
                    elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                }
                document.querySelector('.inc_click_checkout').innerText = ""
                elprevcurrentactive.previousElementSibling.classList.add('inc_active')
            }
        }else{
            if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                if(elprev.querySelector('.inc_progress_list_block.inc_active') != null){
                    elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('progress_show')
                    elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                }
                document.querySelector('.inc_progress_list_block').classList.add('inc_active')
                document.querySelector('.inc_recommended_tabs_list_item_block').click()
            }
            document.querySelector('.inc_previous_block').setAttribute('style','opacity:0.5;pointer-events: none;')
            document.querySelector('.inc_next_block').setAttribute('style','')
            
            document.querySelector('.inc_previous_block').classList.add('inc_prev_disable')
            document.querySelector('.inc_next_block').classList.remove('inc_next_disable')
        }
        if(typeof(jQuery) != "undefined"){
            // jQuery('.inc_sidebar_modal_block.active').animate({ scrollTop: jQuery('.inc_sidebar_modal_block.active').height() }, 'slow');
        }
        setTimeout(function(){

            var all_length_progress = document.querySelectorAll('.progress_show').length
            if(document.querySelector('.inc_recommended_tabs_list_progressbar_block') != null){
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_1')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_2')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_3')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_4')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_5')
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.add('inc_progress_' + all_length_progress)
            }
            document.querySelector('.inc_recommended_products_block').setAttribute('style','')//min-height: auto;
        },100)
    });

    inc_click_checkout.addEventListener("click", function () {
        window.location.href = INC.clientConfig.checkoutLink;
        // document.cookie = "openCartSlider=1; path=/";
        // window.location.reload();
    });


    
    
    getViewElement("sidebarHeaderContinueBlock").addEventListener("click", function () {
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337 && INC.config.clientbtn == false){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
                if(inc_scroll_height > 100){
                    jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true && INC.config.clientbtn == false){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                if(inc_scroll_height > 100){
                    jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        document.querySelector('html').classList.remove('inc_overlay');
        document.querySelector('html').classList.remove('inc_popup_open')
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = []
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    });

    getViewElement("sidebarCheckoutContinueBlock").addEventListener("click", function () {
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337 && INC.config.clientbtn == false){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
                if(inc_scroll_height > 100){
                    jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true && INC.config.clientbtn == false && INC.config.clientbtn == false){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                if(inc_scroll_height > 100){
                    jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        document.querySelector('html').classList.remove('inc_overlay');
        document.querySelector('html').classList.remove('inc_popup_open')
        INC.clientConfig.offset = 0;
        INC.config.pdpaddedProductList = []
        INC.clientConfig.slidevalue = 0;
        INC.methods.hideSidebar();
    });

    getViewElement("sidebarCheckoutBasketBlock").addEventListener("click", function () {
        window.location.href = INC.clientConfig.checkoutLink;
        // document.cookie = "openCartSlider=1; path=/";
        // window.location.reload();
    });

    if(sidebar_configurator_id.indexOf(INC.config.mainProductid) >= 0){
        document.querySelector('html').classList.add('wickes_inc_configurator')
        elRecommendedTabsListBlock.style.display = "none";
    }else{
        document.querySelector('html').classList.add('wickes_inc_no_configurator')
        inc_next_previous_block.style.display = "none"
        progress_bar_block.style.display = "none"
    }

    var addedProductBlocks = "";
    var addedSliderBtnCounter = 0;

    getViewElement("sidebarCartAddedRightBtnBlock").addEventListener("click", function () {
        addedProductBlocks = getViewElement("sidebarCartAddedListBlock").querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock"));
        addedSliderBtnCounter++;
        if (addedSliderBtnCounter > addedProductBlocks.length - 2) {
            addedSliderBtnCounter--;
        }
        if (addedProductBlocks.length > 2) {
            addedProductBlocks[addedSliderBtnCounter - 1].style.display = "none";
        }
    });

    getViewElement("sidebarCartAddedLeftBtnBlock").addEventListener("click", function () {
        addedProductBlocks = getViewElement("sidebarCartAddedListBlock").querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock"));
        addedSliderBtnCounter--;
        if (addedSliderBtnCounter == -1) addedSliderBtnCounter = 0;
        addedProductBlocks[addedSliderBtnCounter].style.display = "flex";
    });

    getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "hidden";
    getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "hidden";
    getViewElement("sidebarCartAddedLeftBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");

    var body = document.querySelector('body');
    body.appendChild(sidebar_dialoge_block);
    var elSideBarOverlayBlock = document.createElement('div');
    elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
    elSideBarOverlayBlock.addEventListener("click", function () {
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
                if(inc_scroll_height > 100){
                    jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        // if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
        //     if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
        //         jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
        //     }
        // }
        document.querySelector('html').classList.remove('inc_overlay');
        document.querySelector('html').classList.remove('inc_popup_open')
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = []
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    });
    close_sisebar_icon.addEventListener("click", function () {
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337 && INC.config.clientbtn == false){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
                if(inc_scroll_height > 100){
                    jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true && INC.config.clientbtn == false){
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                if(inc_scroll_height > 100){
                    jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                }
            }
        }
        
        document.querySelector('html').classList.remove('inc_overlay');
        document.querySelector('html').classList.remove('inc_popup_open')
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = []
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    });
    elSideBarOverlayBlock.style.display = "none";
    body.appendChild(elSideBarOverlayBlock);
    
    if(INC.dataStore.dataStoreObj.undefined != undefined ){
        if(document.querySelector('.inc_recommended_products_block') != null){
            document.querySelector('.inc_recommended_products_block').style.display="none"
        }
        if(document.querySelector('.s7staticimage img') != null && document.querySelector('.inc_cart_added_product_img') != null){
            var p_img=document.querySelector('.s7staticimage img').src
            document.querySelector('.inc_cart_added_product_img').src=p_img
        }
    }
    setTimeout(function(){
        if(document.querySelector('.inc_recommended_products_list_block') != null){
            document.querySelector('.inc_recommended_products_list_block').setAttribute('role',"contentinfo")
        }
    },100)

    setTimeout(function(){
        // if(document.querySelector('.inc_progress_list_block') != null){
            if(document.querySelectorAll('.inc_progress_list_block').length == 1 || document.querySelectorAll('.inc_progress_list_block').length == 0){
                
                    document.querySelector('.inc_next_block').style.display="none"
                    document.querySelector('.inc_previous_block').style.display ="none"
                    document.querySelector('.inc_click_checkout').style.display ="flex"
                
                // 
                if(document.querySelector('.category_progress_count_block') != null){
                    document.querySelector('.category_progress_count_block').style.display="none"
                }
                //document.querySelector('.inc_next_block').setAttribute("style", "pointer-events: none;opacity:0.5;");
                //document.querySelector('.inc_previous_block').setAttribute("style", "pointer-events: none;opacity:0.5;");

                
                //
            }
            if(document.querySelector('.inc_recommended_tabs_list_progressbar_block') != null){
                var leng_categ=document.querySelectorAll('.inc_progress_list_block').length
                document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.add('category_'+leng_categ)
            }
        // }
    },10)
    
}

INC.methods.updateSidebarBlock = function(type_bundle) {
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = this.getSelectorClassName;
    var sbBlock = document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock"));

    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
    var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
    var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
    var sbCartBlock = getViewElement("sidebarCartAddedListBlock");
    var elmoreproducttext = document.querySelector('.inc_cart_added_right_btn_img')
    sbCartBlock.innerHTML = "";

    var bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
    
    if(sidebar_configurator_id.indexOf(INC.config.mainProductid) >= 0){
        sidebarHeaderItemCountTitleText.innerHTML = bundleCartProductsArray.length - INC.clientConfig.OOS.length + " ITEM(s)"
    }else{
        sidebarHeaderItemCountTitleText.innerHTML = bundleCartProductsArray.length - INC.clientConfig.OOS.length + " Item(s)"
    }
    var headerItemCountFigureText = 0;
    var subtotalactiveprice = 0
    var subtotalregukarprice = 0
    bundleCartProductsArray.forEach(function(productSKU) {
        var findObj = new INC.classes.FindObj({
            sku: productSKU
        });
        var productObj = INC.dataStore.methods().getProductBySKU(findObj);
        var productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");
        //current  active prod
        var qty_sub_t = ""
        for (q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
            if (INC.clientConfig.added_product_sku[q].skus == productObj.id) {
                qty_sub_t = INC.clientConfig.added_product_sku[q].qtys
                break;
            }
        }

        if (qty_sub_t == "") {
            // qty_sub_t = 0
            qty_sub_t = INC.dataStore.bundleCartProducts[productSKU]
        }
        if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
            headerItemCountFigureText = headerItemCountFigureText + parseInt(qty_sub_t);
        }
        var color = "";
        var size = "";
        var just_check_prod_block = document.querySelector('.inc_product_module_block[data-id=' + '"' + productSKU + '"' + ']')
        if (just_check_prod_block != null) {
            if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null) {
                size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
            }
            if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null) {
                color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
            }
        }

        productBlock.style.userSelect = "none";

        var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
        var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
        var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
        var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
        var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));
        var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
        var eltextmesg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveTextMsg"));
        var eladdedqtyblock = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductqtyBlock"));



        
        if(productObj.imageURL.indexOf('undefined') == -1){
            var elImgTag = INC.methods.generateHTMLTags('img', {
                src: productObj.imageURL
            });
            if(onloadpdp == true){
                elImgTag.src = productObj.imageURL
            }
        }else{
            var elImgTag = document.createElement('img')
        }
        elImg.appendChild(elImgTag);

        elTitleText.innerHTML = productObj.name;
        //parseInt(qty_sub_t) +"<small>x</small>"+
        if (color != "") {

            elAttColorText.innerText = color;
        }

        elAttsizeText.innerText = size;
        var p_type_details = document.createElement('div');
        p_type_details.classList.add('del_message')
        if (type_bundle == "collection") {
            p_type_details.innerText = "Click & Collect"
        } else {
            p_type_details.innerText = "Added for delivery"
        }

        var activePrice = formatter.format(productObj.activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()//parseFloat(productObj.activePrice).toFixed(2).toString();
        var regularPrice = formatter.format(productObj.regularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()//parseFloat(productObj.regularPrice).toFixed(2).toString();
        if (activePrice != regularPrice) {
            elHeadersubtotalactivetext.classList.add('priceRed');
        } else {
            if (elHeadersubtotalactivetext.classList.contains('priceRed')) {
                elHeadersubtotalactivetext.classList.remove('priceRed');
            }
        }

        if (INC.clientConfig.OOS.indexOf(productObj.id) == -1 || (type_bundle == "collection" && INC.clientConfig.OOS_COL.indexOf(productObj.id) == -1)) {
            subtotalactiveprice = (+subtotalactiveprice + +productObj.activePrice * parseInt(qty_sub_t));
            subtotalregukarprice = (+subtotalregukarprice + +productObj.regularPrice * parseInt(qty_sub_t));

        }
        if (subtotalactiveprice != subtotalregukarprice) {
            elHeadersubtotalactivetext.classList.add('priceRed');
        } else {
            if (elHeadersubtotalactivetext.classList.contains('priceRed')) {
                elHeadersubtotalactivetext.classList.remove('priceRed');
            }
        }
        elPriceActiveText.innerText = INC.clientConfig.currencySymbol + activePrice;
        elPriceActiveText.innerText = elPriceActiveText.innerText;
        if (INC.clientConfig.OOS.indexOf(productObj.id) >= 0) {
            productBlock.classList.add('cross')
            for (e = 0; e < INC.clientConfig.OOS.length; e++) {
                if (INC.clientConfig.OOS[e] == productObj.id.split('-')[0]) {
                    if (INC.clientConfig.OOS_MESG[e] != undefined) {
                        eltextmesg.classList.add('inc_error_msg')
                        if (type_bundle == "collection") {
                            if (productObj.Field6 == "CollectOnly") {
                                p_type_details.innerText = "Not Added"
                                eltextmesg.innerText = "Sorry, not added for collection, insufficient stock"
                            } else {
                                p_type_details.innerText = "Not Added"
                                eltextmesg.innerText = "Note: Not available in store. Item added for delivery."
                            }
                            eltextmesg.style.color = "#555"
                        } else {
                            p_type_details.innerText = "Not Added"
                            eltextmesg.innerText = INC.clientConfig.OOS_MESG[e]
                            eltextmesg.style.color = "#c3332e"
                        }
                    }
                }
            }
        }
        productBlock.setAttribute('id', productObj.id)
        productBlock.setAttribute('sku', productObj.sku)
        productBlock.setAttribute('mainId', productObj.mainId)
        productBlock.setAttribute('qty', '1')
        productBlock.setAttribute('type_bundle', type_bundle)
        productBlock.classList.add(type_bundle)

        var qtyDiv = document.createElement('div');
        qtyDiv.setAttribute("id", productObj.id);
        qtyDiv.style.display = "none"
        qtyDiv.classList.add("inc_qty_number_block");
        qtyDiv.innerText = 'x' + INC.dataStore.bundleCartProducts[productObj.id];
        productBlock.childNodes[0].appendChild(qtyDiv)

        
        p_type_details.classList.add('p_type_details')
        p_type_details.setAttribute('style', 'display:block;width:100%')
        productBlock.querySelector('.inc_cart_added_product_desc_block').appendChild(p_type_details)

        //qty block
        var inc_product_desc_qty_block = generate_html_tag('div', 'inc_product_desc_qty_block');
        eladdedqtyblock.appendChild(inc_product_desc_qty_block)
        inc_product_desc_qty_block.classList.add('singleqty')
        var inc_product_desc_qty_down_block = generate_html_tag('div', 'inc_product_desc_qty_down_block');
        inc_product_desc_qty_block.appendChild(inc_product_desc_qty_down_block)
        var inc_product_desc_qty_down_btn = generate_html_tag('div', 'inc_product_desc_qty_down_btn');
        inc_product_desc_qty_down_block.appendChild(inc_product_desc_qty_down_btn)
        if (qty_sub_t == 0) {
            // inc_product_desc_qty_block.style.display = "none"
        }
        var inc_product_desc_qty_input_block = generate_html_tag('div', 'inc_product_desc_qty_input_block');
        inc_product_desc_qty_block.appendChild(inc_product_desc_qty_input_block)
        var elQtyInput = generate_html_tag('input');
        elQtyInput.setAttribute('type', "number");
        elQtyInput.setAttribute('aria-label', "quantity");
        elQtyInput.setAttribute('min', 1);
        elQtyInput.setAttribute('max', 999);
        elQtyInput.setAttribute('readonly', '');
        elQtyInput.setAttribute('maxlength', 3);
        elQtyInput.value = parseInt(qty_sub_t);
        elQtyInput.setAttribute('old_qty', '1');
        elQtyInput.setAttribute('pattern', '[0-9]');
        elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
        elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==2) return false;');
        inc_product_desc_qty_input_block.appendChild(elQtyInput)



        var inc_product_desc_qty_up_block = generate_html_tag('div', 'inc_product_desc_qty_up_block');
        inc_product_desc_qty_block.appendChild(inc_product_desc_qty_up_block)
        var inc_product_desc_qty_up_btn = generate_html_tag('div', 'inc_product_desc_qty_up_btn');
        inc_product_desc_qty_up_block.appendChild(inc_product_desc_qty_up_btn)



        inc_product_desc_qty_down_block.addEventListener('click', function() {

            var el_qty_input = this.parentNode.querySelector('input')
            var elitemblock = this.parentNode.parentNode.parentNode
            el_qty_input.value = (el_qty_input.value - 1 < 1) ? 1 : el_qty_input.value - 1;

            var id = elitemblock.getAttribute('data-id');
            var sku = elitemblock.getAttribute('data-sku');
            var qty = parseInt(el_qty_input.value);
            var bundle_id = elitemblock.getAttribute('data-bundle_id');
            var main_id = elitemblock.getAttribute('data-main_id');


            if (parseInt(el_qty_input.value) == 1 && elitemblock.querySelector('.inc_product_desc_qty_block').classList.contains('singleqty') == true) {
                // var itemcatentryid = elitemblock.getAttribute('itemcatentryid')
                // if(itemcatentryid != ""){
                //     document.querySelector('.inc_sidebar_modal_block').classList.add('delete_popup')
                //     elitemblock.classList.add('remove_product_conf_modal')
                //     document.querySelector('.inc_sidebar_modal_block').classList.add('overflow_visible')
                // }
                var data__id = elitemblock.getAttribute('data__id')
                var data__position = elitemblock.getAttribute('data__position')
                var added_qty = elitemblock.getAttribute('added_qty')
                var qtys = elitemblock.querySelector('.inc_product_desc_qty_input_block input').value
                elitemblock.classList.add('show_loader')
                if (data__id == null) {
                    var data__id = elitemblock.getAttribute('id')
                }
                if (data__position == null) {
                    var data__position = ""
                }
                INC.methods.updateaddedProduct(data__position, data__id, 0, 0, elitemblock, 'yes')
            } else {
                var data__id = elitemblock.getAttribute('data__id')
                var data__position = elitemblock.getAttribute('data__position')
                var added_qty = elitemblock.getAttribute('added_qty')
                var qtys = elitemblock.querySelector('.inc_product_desc_qty_input_block input').value
                elitemblock.classList.add('show_loader')
                if (data__id == null) {
                    var data__id = elitemblock.getAttribute('id')
                }
                if (data__position == null) {
                    var data__position = ""
                }
                INC.methods.updateaddedProduct(data__position, data__id, added_qty, +added_qty - 1, elitemblock, null)
            }

            if (parseInt(el_qty_input.value) > 1) {
                elitemblock.querySelector('.inc_product_desc_qty_block').classList.remove('singleqty')
            } else {
                elitemblock.querySelector('.inc_product_desc_qty_block').classList.add('singleqty')
            }
        });

        inc_product_desc_qty_up_block.addEventListener('click', function() {
            var elitemblock = this.parentNode.parentNode.parentNode

            var el_qty_input = this.parentNode.querySelector('input')
            el_qty_input.value = (parseInt(el_qty_input.value) + 1 > 99) ? 99 : parseInt(el_qty_input.value) + 1;

            if (parseInt(el_qty_input.value) > 1) {
                elitemblock.querySelector('.inc_product_desc_qty_block').classList.remove('singleqty')
            } else {
                elitemblock.querySelector('.inc_product_desc_qty_block').classList.add('singleqty')
            }
            var id = elitemblock.getAttribute('data-id');
            var sku = elitemblock.getAttribute('data-sku');
            var qty = parseInt(el_qty_input.value);
            var bundle_id = elitemblock.getAttribute('data-bundle_id');
            var main_id = elitemblock.getAttribute('data-main_id');
            var data__id = elitemblock.getAttribute('data__id')
            var data__position = elitemblock.getAttribute('data__position')
            var added_qty = elitemblock.getAttribute('added_qty')
            var qtys = elitemblock.querySelector('.inc_product_desc_qty_input_block input').value
            elitemblock.classList.add('show_loader')
            if (data__id == null) {
                var data__id = elitemblock.getAttribute('id')
            }
            if (data__position == null) {
                var data__position = ""
            }
            INC.methods.updateaddedProduct(data__position, data__id, added_qty, +added_qty + 1, elitemblock, null)

        });
        

        sbCartBlock.appendChild(productBlock);

    });

    if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
        elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalactiveprice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        //parseFloat(subtotalactiveprice).toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,');
        elHeadersubtotalregulartext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalregukarprice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        //parseFloat(subtotalregukarprice).toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,');
        elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
        elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
    } else {
        elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
        elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', 0)
        elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalregukarprice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        //parseFloat(subtotalregukarprice).toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,');
        elHeadersubtotalregulartext.innerHTML = ""
    }
    
    if(sidebar_configurator_id.indexOf(INC.config.mainProductid) >= 0){
        sidebarHeaderItemCountTitleText.innerHTML = headerItemCountFigureText + " ITEM(s)"
    }else{
        sidebarHeaderItemCountTitleText.innerHTML = headerItemCountFigureText + " Item(s)"
    }
    var morecount = 2
    if (window.innerWidth < 820) {
        morecount = 1
    }
    if (bundleCartProductsArray.length > 2) {
        getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "visible";
        getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "visible";
    }

    if (!(bundleCartProductsArray.length > 2)) {
        getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "hidden";
        getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "hidden";
    }
    if (Object.keys(dataStore.bundleCartProducts).length > morecount) {
        var tcount = Object.keys(dataStore.bundleCartProducts).length - morecount + " More Item(s)"
        elmoreproducttext.innerHTML = "+" + tcount
        document.querySelector('.inc_cart_added_right_btn_img').setAttribute('added_counts', (Object.keys(dataStore.bundleCartProducts).length - morecount))
        if(document.querySelector('.inc_cart_added_right_btn_block') != null){
            document.querySelector('.inc_cart_added_right_btn_block').style.visibility = "visible"
        }
        getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "visible";
    } else {
        elmoreproducttext.innerHTML = ""
    }
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_1')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_2')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_3')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_4')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_11')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_21')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_31')
    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_41')

    if (Object.keys(dataStore.bundleCartProducts).length == 1) {
        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_11')
    } else if (Object.keys(dataStore.bundleCartProducts).length == 2) {
        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_21')
    } else if (Object.keys(dataStore.bundleCartProducts).length == 3) {
        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_31')
    } else if (Object.keys(dataStore.bundleCartProducts).length > 3) {
        document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_41')
    }
    

    if (window.innerWidth > 819) {
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 5) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
            document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: flex-start;')
        } else {
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('flex-start')
            document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: center;')
        }
    } else {
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
            document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: flex-start;')
        } else {
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('flex-start')
            document.querySelector('.inc_cart_added_list_block').setAttribute('style', 'justify-content: center;')
        }
    }
}
INC.methods.updateSidebarProductsList = function (elRecommendedProductsListBlock, productCategory,elsidebarthumlistblock) {

    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = INC.methods.getSelectorClassName;
    var productListArray = INC.dataStore.bundleProductsArray;
    var dupl_sidebar_prod=[]
    var recthumnblock=elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_list_item_thumb_block')
    recthumnblock.innerHTML = ""
    var ccount=0
    
    for (var i = 0; i < productListArray.length; i++) {
        // var findObj = new INC.classes.FindObj({ id: productListArray[i] });
        var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: productListArray[i] });
        if (firstProductObjByMainId["categoryName"] == productCategory) {
            if(INC.dataStore.dataStoreObj.undefined == undefined ){
                //|| INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id].bundleId != "12345679"
                if(dupl_sidebar_prod.indexOf(firstProductObjByMainId.id) == -1){
                    dupl_sidebar_prod.push(firstProductObjByMainId.id)
                    var productBlock = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "sidebar", false,elRecommendedProductsListBlock,elsidebarthumlistblock);
                    var findObj = new INC.classes.FindObj({ id: firstProductObjByMainId.id });
                    var productObj = INC.dataStore.methods().getProductById(findObj);
                    if(recthumnblock != undefined){
                        var thumnail_product_list = generate_html_tag('div','thumnail_product_list')
                        recthumnblock.appendChild(thumnail_product_list)
                        var thumnail_product_list_img = generate_html_tag('img')
                        thumnail_product_list_img.src = productObj.imageURL
                        thumnail_product_list_img.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
                        thumnail_product_list.appendChild(thumnail_product_list_img)
                        thumnail_product_list.setAttribute('data-id', productObj.id);
                        thumnail_product_list.setAttribute('data-sku', productObj.sku);
                        thumnail_product_list.setAttribute('data-main_id', productObj.mainId);
                        thumnail_product_list.setAttribute('data-bundle_id', productObj.bundleId);
                        thumnail_product_list.setAttribute('data_main_variant', productObj.mainProdVariant);
                        thumnail_product_list.setAttribute('index', ccount);
                        // productBlock.setAttribute('index', ccount);
                        ccount++
                        thumnail_product_list.addEventListener('click',function(){
                            if(this.parentNode.querySelector('.thumnail_product_list.active') != null){
                                this.parentNode.querySelector('.thumnail_product_list.active').classList.remove('active')
                            }
                            this.classList.add('active')
                            INC.clientConfig.offset = 0;
                            INC.clientConfig.slidevalue = 0;
                            var slide_w=540
                            if(window.innerWidth > 1590){
                                var slide_w=540
                            }
                            var dataId = this.getAttribute('data-id')
                            var ind = this.getAttribute('index');
                            INC.clientConfig.slidevalue = parseInt(ind) - 1
                            var prodlength = document.querySelectorAll('.inc_recommended_products_list_main_block .inc_product_module_block')
                            if(document.querySelector('.inc_recommended_products_list_main_block .inc_product_module_block[data-id="'+dataId+'"]') != null){
                                document.querySelector('.inc_recommended_products_list_main_block .inc_product_module_block[data-id="'+dataId+'"]')
                            }
                            INC.clientConfig.offset = -(INC.clientConfig.slidevalue * slide_w) + 'px';
                            if(INC.clientConfig.slidevalue+1 < prodlength.length){
                                document.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                                document.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: auto;opacity:1");
                                document.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:1");
                            }
                            INC.clientConfig.slidevalue++
                            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - slide_w) + 'px';
                            var menu = document.querySelector('.inc_recommended_products_list_block')
                            menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                            if(+INC.clientConfig.slidevalue + 1 == prodlength.length){
                                document.querySelector('.inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                                document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                            }else{
                                document.querySelector('.inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                                document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                            }
                            if(INC.clientConfig.slidevalue == 0){
                                document.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                                document.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                                document.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:0.5");
                            }
                        })
                    }
                    productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function(e) {
                        var productBlockNode = this.parentNode.parentNode;
                        if (this.parentNode.parentNode.className == "inc_product_desc_block" || this.parentNode.parentNode.className == "inc_product_desc_block promo_attr_avail") {
                            productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                        }
                        if(productBlockNode.classList.contains('simple') == false){
                            productBlockNode = productBlockNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                        }
                        if(productBlockNode.classList.contains('inc_recommended_products_list_block') == true){
                            productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                        }
                        if(productBlockNode.classList.contains('inc_product_module_block') == true){
                            productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                        }
                        if(productBlockNode.classList.contains('inc_product_showcase_block') == true){
                            productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                        }
                        if(productBlockNode.classList.contains('inc_product_modal_block') == true){
                            productBlockNode = this.parentNode.parentNode.parentNode.parentNode
                        }
                        var sku = productBlockNode.getAttribute('data-sku');
                        var findObj = new INC.classes.FindObj({
                            id: sku
                        });
                        // productQtyInputText.innerText="QTY";
                        var qty = productBlockNode.querySelector('input').value;
                        if (qty == undefined || qty == "") {
                            qty = 1
                        }
                        var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                        var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
                        // productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "ADDED";

                        setTimeout(function() {
                            // var elAddImg = getViewElement("productAddImg");
                            Array.prototype.forEach.call(productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg")), function(el) {
                                el.classList.remove("checked");
                            });

                        }, 2000);
                        var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')

                        var productModuleBlock = productBlockNode.parentNode.parentNode
                        var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
                        if(flag_check == 1){
                            INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "delevery");
                        }else{
                            if(productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block') != null){
                                productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block').classList.add('error_inc_message')
                            }
                            if(productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block') != null){
                                productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block').classList.add('error_inc_message')
                            }
                        }
                        // if (productBlockNode.querySelector('.img_color_swatch') != null) {
                        //     if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                        //         INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "delevery");
                        //     } else {
                        //         productBlockNode.querySelector('.img_color_swatch').click()
                        //     }
                        // } else {
                        //     INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "delevery");
                        //     var elmnt = document.querySelector(".inc_header_title_block");
                        //     elmnt.scrollIntoView();
                        // }
                    });
                    productBlock.querySelector(getSelectorClassName(classNames, "productAddBlockclickcollect")).addEventListener("click", function(e) {

                        var productBlockNode = this.parentNode.parentNode;
                        if (this.parentNode.parentNode.className == "inc_product_desc_block" || this.parentNode.parentNode.className == "inc_product_desc_block promo_attr_avail") {
                           
                            productBlockNode = this.parentNode.parentNode.parentNode.parentNode;
                        }
                        if(productBlockNode.classList.contains('simple') == false){
                            productBlockNode = productBlockNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                        }
                        if(productBlockNode.classList.contains('inc_recommended_products_list_block') == true){
                            productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                        }
                        var sku = productBlockNode.getAttribute('data-sku');
                        var findObj = new INC.classes.FindObj({
                            id: sku
                        });
                        // productQtyInputText.innerText="QTY";
                        var qty = productBlockNode.querySelector('input').value;
                        if (qty == undefined || qty == "") {
                            qty = 1
                        }
                        var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddTextclickcollect"));
                        var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImgclickcollect"));
                        // productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "ADDED";

                        setTimeout(function() {
                            // var elAddImg = getViewElement("productAddImg");
                            Array.prototype.forEach.call(productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg")), function(el) {
                                el.classList.remove("checked");
                            });

                        }, 2000);
                        var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text_click_collect')
                        if (productBlockNode.querySelector('.img_color_swatch') != null) {
                            if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                               
                                INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                            } else {
                                productBlockNode.querySelector('.img_color_swatch').click()
                            }
                        } else {
                              
                            INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                            var elmnt = document.querySelector(".inc_header_title_block");
                            elmnt.scrollIntoView();
                        }
                    });
                    elRecommendedProductsListBlock.appendChild(productBlock);
                }
            }
        };
    }

    INC.clientConfig.offset = 0;
    INC.clientConfig.slidevalue = 0;
    elRecommendedProductsListBlock.setAttribute('style','margin-left: 0')

    if (!(elRecommendedProductsListBlock.childNodes.length > 3)) {
        recthumnblock.style.display="none"
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "hidden";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "hidden";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden;");
    }

    if (elRecommendedProductsListBlock.childNodes.length > 3) {
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "visible";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "visible";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
    }
    // if (isIE()){
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "opacity:0.5");
    // }
    var sliderBtnCounter = 0;


    var productBlocks = elRecommendedProductsListBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).addEventListener("click", function () {
        var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
        if(INC.clientConfig.slidevalue+1 < productBlocks.length){
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            // if (isIE()){
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "opacity:1");
            // }
            INC.clientConfig.slidevalue++
            var slide_w=270
            if(window.innerWidth > 1590){
                var slide_w=270
            }
            if(sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0){
                var slide_w=342
                if(window.innerWidth > 1590){
                    var slide_w=342
                }
            }
            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - slide_w) + 'px';
            var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
            menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
        }
        var cc_ount=2;
        if (window.innerWidth > 819) {
            if(sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0){
                cc_ount = 3
            }else{
                cc_ount = 2;
            }
            
        }

        if(+INC.clientConfig.slidevalue + +cc_ount == productBlocks.length){
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
            document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            // if (isIE()){
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnImg")).setAttribute("style", "opacity:0.5");
            // }
        }
        sliderBtnCounter++;
        if (sliderBtnCounter > productBlocks.length - cc_ount) {
            sliderBtnCounter--;
        }
    });

    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).addEventListener("click", function () {
        var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
        if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
        if(INC.clientConfig.slidevalue > 0){
            var slide_w=270
            if(window.innerWidth > 1590){
                var slide_w=270
            }
            if(sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0){
                var slide_w=342
                if(window.innerWidth > 1590){
                    var slide_w=342
                }
            }
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
            // if (isIE()){
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnImg")).setAttribute("style", "opacity:1");
            // }
            INC.clientConfig.slidevalue--
            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + slide_w) + 'px';
            var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
            // menu.style['transitionDuration'] = '0.5s'
            // menu.style['marginLeft'] = INC.clientConfig.offset
            menu.setAttribute('style','margin-left:'+INC.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
        }
        if(INC.clientConfig.slidevalue == 0){
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
            // if (isIE()){
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "opacity:0.5");
            // }
        }
        sliderBtnCounter--;
        if (sliderBtnCounter == -1) sliderBtnCounter = 0;
    });
    setTimeout(function(){
        var sel_variant = document.querySelectorAll('.inc_recommended_products_list_main_block .inc_variant_new1 .inc_variant_tag')
        for(x=0;x<sel_variant.length;x++){
            if(sel_variant[x] != undefined){
                if(sel_variant[x].parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail') != null){
                    sel_variant[x].parentNode.querySelector('.inc_product_desc_att_zero_block.inc_total_variant_1 .inc_product_desc_att_size_list_item_img_block.avail').click()
                }
                var sel_var = sel_variant[x].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                var selv = sel_variant[x]
                var alloptionss = sel_variant[x].querySelectorAll('option')
                for(j=0;j<alloptionss.length;j++){
                    var texttocheck = alloptionss[j].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')
                    if(sel_var != undefined){
                        if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                            alloptionss[j].selected = 'selected'
                        }else{
                            if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                                alloptionss[j].selected = 'selected'
                            }
                        }
                    }
                }
            }
        }

        for(y=0;y<sel_variant.length;y++){
            if(sel_variant[y] != undefined){
                var sel_var = sel_variant[y].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data_main_variant').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','').toLocaleLowerCase()
                var selv = sel_variant[y]
                var alloptionss = sel_variant[y].querySelectorAll('option')
                for(m=0;m<alloptionss.length;m++){
                    if(sel_var != undefined){
                        var texttocheck = alloptionss[m].getAttribute('datasize').replace('ー','').replace('ー','').replace('ー','').replace('ー','').replace('ー/','').replace('ー/','').replace('ー/','').replace('/','').replace('/','').replace('/','')

                        if(texttocheck.toLocaleLowerCase().indexOf(sel_var.toLocaleLowerCase()) >= 0){
                            inc_onchange_color_variant(selv)
                        }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','/').toLocaleLowerCase()) >= 0){
                            inc_onchange_color_variant(selv)
                        }else if(texttocheck.toLocaleLowerCase().indexOf(sel_var.replace('ー','ー/').toLocaleLowerCase()) >= 0){
                            inc_onchange_color_variant(selv)
                        }
                    }
                }
            }
        }
    },1000)
}
INC.methods.sendBundleClickTracking = function(productId,producttype) {

    var pageType = "";
    var getSelectorClassName = INC.methods.getSelectorClassName;

    switch (INC.config.pageType) {
        case "pdp":
            pageType = "107";
            break;
        case "productList":
            pageType = "101";
            break;
        case "cartPage":
            pageType = "103";
            break;
        case "other":
            pageType = "101";
    }

    if (document.querySelector('.inc_sidebar_modal_block.active') == null && INC.config.pageType == "pdp") {
        pageType = "100";
    }

    INC.methods.trackingEvents("bundleProductClickTracking", {
        "product_id": productId,
        "core_product_id": INC.dataStore.pdpProductId
    }, pageType,producttype);

}

INC.methods.createProductModuleBlock = function (pdpProductId, blockType, bundleProductListCheck,parentblock) {
    if(INC.dataStore.dataStoreObj.undefined == undefined){
        var producttocreateflag=true;
        var classNames = INC.uiConfig[blockType].className;
        var findObj = new INC.classes.FindObj({ id: pdpProductId });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        var getSelectorClassName = this.getSelectorClassName;
        
        if((blockType == "pdp" && INC.config.DealProducts.indexOf(productObj.mainId) >= 0) || (blockType == "cartPage" && INC.config.DealProducts.indexOf(productObj.mainId) >= 0)){
            producttocreateflag = false
        }
        if(producttocreateflag){
            var productModuleBlock = this.getElementChilds("productModuleBlock", blockType);
            productModuleBlock.style.userSelect = "none";
            productModuleBlock.setAttribute('data-id', productObj.id);
            productModuleBlock.setAttribute('data-sku', productObj.sku);
            productModuleBlock.setAttribute('data-main_id', productObj.mainId);
            productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);
            productModuleBlock.setAttribute('data_main_variant', productObj.mainProdVariant);
            productModuleBlock.setAttribute('data-category_name', productObj.categoryName);
            productModuleBlock.setAttribute('product_type', productObj.ProductType);
            productModuleBlock.classList.add(productObj.ProductType)
            productModuleBlock.setAttribute('id', 'inc'+productObj.mainId);
            function getViewElement(className) {
                return productModuleBlock.querySelector(getSelectorClassName(classNames, className));
            }
            
            var elProductShowcaseBlock = getViewElement("productShowcaseBlock");
            var elProductModalBlock = getViewElement("productModalBlock");

            elProductShowcaseBlock.innerHTML = "";
            elProductModalBlock.innerHTML = "";
            if(elProductShowcaseBlock != null){
                elProductShowcaseBlock.setAttribute('role',"contentinfo")
            }
            if(elProductModalBlock != null){
                elProductModalBlock.setAttribute('role',"contentinfo")
            }
            var productShowcaseBlock = INC.methods.createProductShowcaseBlock(pdpProductId, blockType, bundleProductListCheck,parentblock);
            // var productShowcaseBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck);
            var productModalBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck,parentblock);

            elProductShowcaseBlock.appendChild(productShowcaseBlock);
            elProductModalBlock.appendChild(productModalBlock);
            return productModuleBlock;
        }
    }
}

INC.methods.createProductShowcaseBlock = function (pdpProductId, blockType, bundleProductListCheck,parentblock) {
    var classNames = INC.uiConfig[blockType].className;
    var productBlock = this.getElementChilds("productBlock", blockType);
    var findObj = new INC.classes.FindObj({ id: pdpProductId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    
    findObj = new INC.classes.FindObj({ mainId: productObj.mainId });

    var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
    if(productColorsObj.colorArray.length == 0){
        var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);
    }
    var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

    var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);

    var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
    
    var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

    var product4Obj = INC.dataStore.methods().getProductopt4Obj(findObj);
    
    var getSelectorClassName = this.getSelectorClassName;

    //inc_product_desc_qty_block
    //sidebar
    if(window.innerWidth > 819 && blockType == "pdp"){
        var price_htmlprc = productBlock.querySelector('.inc_product_desc_qty_block').innerHTML
        if(productColorsObj["colorArray"].length == 1 || product0Obj["att0Array"].length == 1){
            var price_siblingprc=productBlock.querySelector('.inc_product_desc_offer_block')
        }else{
            var price_siblingprc=productBlock.querySelector('.inc_product_desc_variant_popup_close_block')
        }
        var html_prc_blockprc = document.createElement('div');
        html_prc_blockprc.classList.add('inc_product_desc_qty_block')
        html_prc_blockprc.innerHTML = price_htmlprc
        var price_html_remrd = productBlock.querySelector('.inc_product_desc_qty_block');
        price_html_remrd.parentNode.removeChild(price_html_remrd);
        price_siblingprc.parentNode.insertBefore(html_prc_blockprc,price_siblingprc)
    }else{
        var price_htmlprc = productBlock.querySelector('.inc_product_desc_qty_block').innerHTML
        if(productObj.ProductType == "simple" || productColorsObj["colorArray"].length == 1 || product0Obj["att0Array"].length == 1){
            var price_siblingprc=productBlock.querySelector('.inc_product_desc_offer_block')
        }else{
            var price_siblingprc=productBlock.querySelector('.inc_product_desc_variant_popup_close_block')
        }
        var html_prc_blockprc = document.createElement('div');
        html_prc_blockprc.classList.add('inc_product_desc_qty_block')
        html_prc_blockprc.innerHTML = price_htmlprc
        var price_html_remrd = productBlock.querySelector('.inc_product_desc_qty_block');
        price_html_remrd.parentNode.removeChild(price_html_remrd);
        price_siblingprc.parentNode.insertBefore(html_prc_blockprc,price_siblingprc)
    }

    //var promo_sibling = productBlock.querySelector('inc_product_desc_offer_block')

    

    if(productObj.ProductType != "simple" && blockType != "pdp"){
        findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
        var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
        var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);
        var flagsimple=false
        if (productColorsObj["colorArray"].length == 0 && product0Obj["att0Array"].length == 0) {
            flagsimple = true
        }
        if(flagsimple == false){
            var btn_htmlprc = productBlock.querySelector('.inc_product_desc_qty_add_btn_block').innerHTML
            var btn_siblingprc=productBlock.querySelector('.inc_product_desc_att_variant_view_details_block')
            var html_prc_btn = document.createElement('div');
            html_prc_btn.classList.add('inc_product_desc_qty_add_btn_block')
            html_prc_btn.innerHTML = btn_htmlprc
            var btn_html_remrd = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
            btn_html_remrd.parentNode.removeChild(btn_html_remrd);
            //btn_siblingprc.appendChild(html_prc_btn)
            btn_siblingprc.parentNode.insertBefore(html_prc_btn,btn_siblingprc);
            if(window.innerWidth < 820){
                html_prc_btn.setAttribute('style','display:flex;')
              
            }else{
                html_prc_btn.setAttribute('style','display:flex;')
               
            }

            
        }else if(blockType != "pdp"){
            var btn_htmlprc = productBlock.querySelector('.inc_product_desc_qty_add_btn_block').innerHTML
            var btn_siblingprc=productBlock.querySelector('.inc_product_desc_att_block')
            var html_prc_btn = document.createElement('div');
            html_prc_btn.classList.add('inc_product_desc_qty_add_btn_block')
            html_prc_btn.innerHTML = btn_htmlprc
            var btn_html_remrd = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
            btn_html_remrd.parentNode.removeChild(btn_html_remrd);
            btn_siblingprc.parentNode.insertBefore(html_prc_btn,btn_siblingprc)
            if(window.innerWidth < 820){
                html_prc_btn.setAttribute('style','display:flex;')
            }else{
                html_prc_btn.setAttribute('style','display:flex;')
            }
        }
    }else if(blockType != "pdp"){
        var btn_htmlprc = productBlock.querySelector('.inc_product_desc_qty_add_btn_block').innerHTML
        var btn_siblingprc=productBlock.querySelector('.inc_product_desc_att_block')
        var html_prc_btn = document.createElement('div');
        html_prc_btn.classList.add('inc_product_desc_qty_add_btn_block')
        html_prc_btn.innerHTML = btn_htmlprc
        var btn_html_remrd = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
        btn_html_remrd.parentNode.removeChild(btn_html_remrd);
        btn_siblingprc.parentNode.insertBefore(html_prc_btn,btn_siblingprc)
        if(window.innerWidth < 820){
            html_prc_btn.setAttribute('style','display:flex;')
        }else{
            html_prc_btn.setAttribute('style','display:flex;')
        }
    }


    productBlock.setAttribute('data-id', productObj.id);
    productBlock.setAttribute('data-sku', productObj.sku);
    productBlock.setAttribute('data-main_id', productObj.mainId);
    productBlock.setAttribute('data-bundle_id', productObj.bundleId);
    productBlock.setAttribute('data_main_variant', productObj.mainProdVariant);
    productBlock.setAttribute('data-category_name', productObj.categoryName);
    productBlock.setAttribute('product_type', productObj.ProductType);
    productBlock.classList.add(productObj.ProductType)
    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }
    var elHeaderInfoBlck = getViewElement("productInfoMainBlock");
    var elHeader = getViewElement("productHeaderMainBlock");
    var elInfoText = getViewElement("productInfoText");
    var elImgBlock = getViewElement("productImgBlock");
    var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
    var elTitleBlock = getViewElement("productTitleBlock");
    var elTitleTextBlock = getViewElement("productTitleTextBlock");
    var elTitleText = getViewElement("productTitleText");
    var elMTitleBlock = getViewElement("productMaufactureTextBlock");
    var elMTitleText = getViewElement("productMaufactureText")
    var elproductPriceBlock = getViewElement("productPriceBlock");
    var elproductPriceLabel = getViewElement("productPriceLabel");
    var elPriceActiveText = getViewElement("productPriceActiveText");
    var elPriceActiveMsg = getViewElement("productPriceActiveTextMsg");
    var elPriceRegularText = getViewElement("productPriceRegularText");
    var eleditblock = getViewElement("productAttEditBlock");
    var elAttBlock = getViewElement("productAttBlock");
    var elAttColorBlock = getViewElement("productAttColorBlock");
    var elAttColorTitleText = getViewElement("productAttColorTitleText");
    var elAttColorTitleTextSelected = getViewElement("productAttColorTitleTextSelected");
    var elAttColorListBlock = getViewElement("productAttColorListBlock");
    var elAttSizeBlock = getViewElement("productAttSizeBlock");
    var elAttSizeTitleBlock = getViewElement("productAttSizeTitleBlock");
    var elAttSizeTitleText = getViewElement("productAttSizeTitleText");
    var elAttSizeTitleTextSelected = getViewElement("productAttSizeTitleTextSelected");
    var elAttSizeListBlock = getViewElement("productAttSizeListBlock");
    var elAtt0ListBlock = getViewElement("productAttzeroListBlock");
    var elAtt3ListBlock = getViewElement("productAttthirdListBlock");
    var elAtt4ListBlock = getViewElement("productAttfourthListBlock");
    var elOfferTextBlock = getViewElement("productOfferTextBlock");
    var elAtt0Block = getViewElement("productAttzeroBlock");
    var elAtt3Block = getViewElement("productAttthirdBlock");
    var elAtt4Block = getViewElement("productAttfourthBlock");
    var elAtt0TitleTextSelected = getViewElement("productAttzeroTitleTextSelected");
    var elAtt0TitleText = getViewElement("productAttzeroTitleText");
    var elAtt3TitleTextSelected = getViewElement("productAttthirdTitleTextSelected");
    var elAtt3TitleText = getViewElement("productAttthirdTitleText");
    var elAtt4TitleTextSelected = getViewElement("productAttfourthTitleTextSelected");
    var elAtt4TitleText = getViewElement("productAttfourthTitleText");
    var elPackOfListBlock = getViewElement("productPackOfListBlock");
    var elQtyBlock = getViewElement("productQtyBlock");
    var elQtyInputText = getViewElement("productQtyInputText");
    var elQtyDownBlock = getViewElement("productQtyDownBlock");
    var elQtyUpBlock = getViewElement("productQtyUpBlock");
    var elAddBlock = getViewElement("productAddBlock");
    var elAddText = getViewElement("productAddText");
    var elAddImg = getViewElement("productAddImg");
    var elratingsBlock = getViewElement("productRatingsBlock");
    var elFullDesctext = getViewElement("productInfoFullDescText");
    var elworthPrice = getViewElement("productPriceWorthText");
    var elzoomicon = getViewElement("productImgMainZoomBtnImg");
    var elzoomtext = getViewElement("productImgMainZoomBtnText");
    var fulldescblock = getViewElement("productInfoFullDescBlock");
    var img_block = getViewElement("productImgMainImgBlock");
    var elzoomblock = getViewElement("productImgMainZoomBlock");
    var elpackof = getViewElement("productPackOfBlock")
    var eldetailsprodblock = getViewElement("productAttDetailsBlock")
    var elviewdetails = getViewElement("productDetailstext")
    var elviewdetailsBlock = getViewElement("productDetailsBlock")
    var eladdvarianttext = getViewElement("productvariantSimpleText")
    var elconfigtitle = getViewElement("productAddTitle")
    var elvariantaddbtn = getViewElement("productAttvariantaddBlock")
    var elvariantaddbtntext = getViewElement("productAttvariantaddText")
    var elvariantviewdetails = getViewElement("productAttvariantviewdetailsBlock")
    var elvariantviewdetailstext = getViewElement("productAttvariantviewdetailsText")
    var eldescblock = getViewElement("productDescBlock");
    var elvariantpopupclose = getViewElement("productvariantPopupClose")
    var elselectoptaddbtn = getViewElement("productvariantSimpleBlock")
    var elofferBlock = getViewElement("productOfferBlock");
    var elproductOfferHeaderBlock = getViewElement("productOfferHeaderBlock");
    var elOfferTextBlock = getViewElement("productOfferTextBlock");
    elviewdetails.innerText = "View details"
    elzoomblock.style.display="none"
    elpackof.style.display="none"
    var elAddTextclickcollect = getViewElement("productAddTextclickcollect");
    var elAddBlockclickcollect = getViewElement("productAddBlockclickcollect");


    if(productObj.ProductType == "simple"){
        elofferBlock.parentNode.insertBefore(elQtyBlock,elofferBlock);
    }

   
    

    // if (blockType != "pdp") {
    //     // elAddBlockclickcollect.style.display = "none"
    //     if (productObj.Field6 == "CollectOnly" && INC.config.storeId != "") {
    //         productBlock.classList.add('is_click_collect_only')
    //         productBlock.classList.add('is_click_collect_only_available')
    //        // elAddBlockclickcollect.style.width = "100%";
    //         elAddBlock.style.display = "none"
    //     } else if (productObj.Field6 == "CollectOnly" && INC.config.storeId == "") {
    //         elAddBlockclickcollect.style.display = "none"
    //         elAddBlock.style.display = "none"
    //         productBlock.classList.add('inc_click_collect_nodisplay');
    //     } else if (productObj.Field6 == "DeliveryOnly") {
    //         productBlock.classList.add('is_delivery_only')
    //         //elAddBlock.style.width = "100%";
    //         elAddBlockclickcollect.style.display = "none"
            
    //     } else if (productObj.Field6 == "Both") {
    //         // productBlock.classList.add('is_click_collect_only')
    //         productBlock.classList.add('is_both_avail')
    //         if(INC.config.pageType == "cartPage"){
    //             if(productObj.ProductType != "simple"){
    //                 elAddBlockclickcollect.style.display = "block"
    //             }
    //         }
    //     } else if (INC.config.storeId == "") {
    //         productBlock.classList.add('is_delivery_only')
    //         elAddBlockclickcollect.style.display = "none"
    //     }else if (productObj.Field6 == "oos") {
    //         // productBlock.classList.add('is_click_collect_only')
    //         productBlock.classList.add('is_both_avail')
    //     } else {
    //         productBlock.classList.add('is_click_collect_only')
    //     }
    //     // productBlock.classList.add('is_delivery_only')
    // }
    // productBlock.classList.add('is_delivery_only')
    elAddBlockclickcollect.style.display = "none"
    // if(sidebar_configurator_id.indexOf(productObj.id) >= 0){
    //     elAddBlockclickcollect.style.marginLeft = "5px"
    // }
    // var eldescrpionblock = getViewElement("productDescBlock");

    elvariantpopupclose.addEventListener('click',function(){
        this.parentNode.classList.remove('active')
        productBlock.classList.remove('show_overlay')
        document.querySelector('html').classList.remove('inc_overlay');
    });
    elviewdetailsBlock.addEventListener('click',function(){
        
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
        }
        if(document.querySelector('.inc_sidebar_modal_block.active') == null){
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                    document.querySelector('body').style.position = "relative"
                    if(inc_scroll_height > 100){
                        jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                    }
                }
            }
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                    if(inc_scroll_height > 100){
                        jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                    }
                }
            }
            document.querySelector('html').classList.remove('inc_overlay');
            document.querySelector('html').classList.remove('inc_popup_open')
        }
        if(document.querySelector('.inc_sidebar_modal_block.active') != null){
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
            el.classList.remove("active");
        });
        
        if(document.querySelector('.inc_sidebar_modal_block.active') == null){
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                    setTimeout(function(){
                        if(document.querySelector('.inc_pdp_block') != null){
                            inc_scroll_height= $(".inc_pdp_block").offset().top
                        }else if(document.querySelector('.inc_af_block') != null){
                            inc_scroll_height=  $(".inc_af_block").offset().top
                        }
                        document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                    },100)
                }
            }
            document.querySelector('html').classList.add('inc_overlay');
        }
        if(document.querySelector('.inc_sidebar_modal_block.active') != null){
            document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
        }
        document.querySelector('html').classList.add('inc_popup_open')
        this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
        if(window.innerWidth < 820){
            $('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: $('.inc_product_img_block').height() - 300}, 'fast');
        }
    })
    
    
    elHeaderInfoBlck.setAttribute('data-id', productObj.id);
    elHeaderInfoBlck.setAttribute('data-sku', productObj.sku);
    elHeaderInfoBlck.setAttribute('data-main_id', productObj.mainId);
    elHeaderInfoBlck.setAttribute('data-bundle_id', productObj.bundleId);

    elHeader.querySelector(getSelectorClassName(classNames, "productHeaderImgBlock")).addEventListener("click", function () {
        productBlock.parentNode.classList.remove("active");
    });
    
    
    
    // elworthPrice.innerText = productObj.reviewsCount
    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));
    if(productObj.imageURLMain != undefined){
        if(productObj.imageURLMain.indexOf('undefined') == -1){
            var elImgTag1 = this.generateHTMLTags('img', { src: productObj.imageURLMain });
            if(onloadpdp == true){
                elImgTag1.src = productObj.imageURLMain
            }
        }else{
            var elImgTag1 = document.createElement('img')
        }
    }else{
        var elImgTag1 = document.createElement('img')
    }
    elImgTag1.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
    elImgTag1.setAttribute('role','img')
    elImgTag1.setAttribute('aria-label','Image')
    if(productObj.nameMain != null){
        elImgTag1.setAttribute('alt',productObj.nameMain.toLocaleLowerCase())
    }
    elImgTag1.setAttribute('data-mouseover',productObj["otherImageList"])
    elImgTag1.setAttribute('data-imageURL',productObj["imageURLMain"])
    var productLink = document.createElement('a');
   
    productLink.href = productObj.url;
    if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {

    }else{
        // productLink.href = productObj.url;
    }
    productLink.appendChild(elImgTag1);
    productLink.setAttribute('otherImageList',productObj["otherImageList"])
    productLink.setAttribute('imageURL',productObj["imageURLMain"])
    productLink.addEventListener('click',function(e){
        e.preventDefault()
    })
    add_swipe(productLink)

    elImgMainImg.appendChild(productLink);
    
    elImgMainImg.addEventListener("click", function () {
       
        var producttype=productObj.Field6;

        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'),producttype)   ;


            if(productBlock.querySelector('.close_read_more') != null){
                productBlock.querySelector('.close_read_more').click()
            }
            
            if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        document.querySelector('body').style.position = "relative"
                        if(inc_scroll_height > 100){
                            jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                        if(inc_scroll_height > 100){
                            jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('html').classList.remove('inc_popup_open')
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
            }
            Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
                el.classList.remove("active");
            });
            
            if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        setTimeout(function(){
                            if(document.querySelector('.inc_pdp_block') != null){
                                inc_scroll_height= $(".inc_pdp_block").offset().top
                            }else if(document.querySelector('.inc_af_block') != null){
                                inc_scroll_height=  $(".inc_af_block").offset().top
                            }
                            document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                        },100)
                    }
                }
                document.querySelector('html').classList.add('inc_overlay');
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
            }
            document.querySelector('html').classList.add('inc_popup_open')
            
            this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
            if(window.innerWidth < 820){
                $('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: $('.inc_product_img_block').height() - 300}, 'fast');
            }
        // }
    });
    elzoomicon.setAttribute('title',INC.config.ViewDetailsText)
    var elImgMainZoomImgBlock = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainZoomBtnImgBlock"));
    elzoomtext.innerText = "Quick view"

    elImgMainZoomImgBlock.addEventListener('click', function () {
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        
        if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
        }
        if(document.querySelector('.inc_sidebar_modal_block.active') == null){
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                    document.querySelector('body').style.position = "relative"
                    if(inc_scroll_height > 100){
                        jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                    }
                }
            }
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                    if(inc_scroll_height > 100){
                        jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                    }
                }
            }
            document.querySelector('html').classList.remove('inc_overlay');
            document.querySelector('html').classList.remove('inc_popup_open')
        }
        if(document.querySelector('.inc_sidebar_modal_block.active') != null){
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
            el.classList.remove("active");
        });

        if(document.querySelector('.inc_sidebar_modal_block.active') == null){
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                    setTimeout(function(){
                        if(document.querySelector('.inc_pdp_block') != null){
                            inc_scroll_height= $(".inc_pdp_block").offset().top
                        }else if(document.querySelector('.inc_af_block') != null){
                            inc_scroll_height=  $(".inc_af_block").offset().top
                        }
                        document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                    },100)
                }
            }
            document.querySelector('html').classList.add('inc_overlay');
        }
        if(document.querySelector('.inc_sidebar_modal_block.active') != null){
            document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
        }
        document.querySelector('html').classList.add('inc_popup_open')
        this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
        if(window.innerWidth < 820){
            $('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: $('.inc_product_img_block').height() - 300}, 'fast');
        }
    });

    var elImgMainZoomTextBlock = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainZoomBtnTextBlock"));

    // elImgMainZoomTextBlock.style.display = "none";
    elImgMainZoomTextBlock.addEventListener('click', function () {
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
        }
        if(document.querySelector('.inc_sidebar_modal_block.active') == null){
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                    document.querySelector('body').style.position = "relative"
                    if(inc_scroll_height > 100){
                        jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                    }
                }
            }
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                    if(inc_scroll_height > 100){
                        jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                    }
                }
            }
            document.querySelector('html').classList.remove('inc_overlay');
            document.querySelector('html').classList.remove('inc_popup_open')
        }
        if(document.querySelector('.inc_sidebar_modal_block.active') != null){
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
            el.classList.remove("active");
        });
        if(document.querySelector('.inc_sidebar_modal_block.active') == null){
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                    setTimeout(function(){
                        if(document.querySelector('.inc_pdp_block') != null){
                            inc_scroll_height= $(".inc_pdp_block").offset().top
                        }else if(document.querySelector('.inc_af_block') != null){
                            inc_scroll_height=  $(".inc_af_block").offset().top
                        }
                        document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                    },100)
                }
            }
            document.querySelector('html').classList.add('inc_overlay');
        }
        if(document.querySelector('.inc_sidebar_modal_block.active') != null){
            document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
        }
        document.querySelector('html').classList.add('inc_popup_open')
        this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
        if(window.innerWidth < 820){
            $('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: $('.inc_product_img_block').height() - 300}, 'fast');
        }
    });

    var elImgMainZoomText = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainZoomBtnText"));

    elImgGalleryListBlock.innerHTML = "";

    if ((productObj.otherImageList != null) && (productObj.otherImageList.length > 1) && (productObj.otherImageList[productObj.otherImageList.length-1] != "")) {
        var otimg = 0;
        productObj.otherImageList.forEach(function (otherImgURL) {
            
            if(productObj.otherImgURL.indexOf('undefined') == -1){
                var elOtherImgTag = INC.methods.generateHTMLTags('img', { src: otherImgURL });
                if(onloadpdp == true){
                    elOtherImgTag.src = otherImgURL
                }
            }else{
                var elOtherImgTag = document.createElement('img')
            }
            elOtherImgTag.setAttribute('role','img')
            elOtherImgTag.setAttribute('aria-label','Image')
            elOtherImgTag.setAttribute('alt',productObj.name)
            elOtherImgTag.setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );
            
            var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));
            
            elImgGalleryListItemImg.appendChild(elOtherImgTag);
            elImgGalleryListItemBlock.setAttribute('index',otimg)
            elImgGalleryListItemBlock.addEventListener("click", function () {

                Array.prototype.forEach.call(productBlock.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("active");
                });

                elImgGalleryListItemBlock.classList.add("active");

                elImgMainImg.querySelector('img').src = otherImgURL;
                elImgMainImg.querySelector('img').setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if(otimg == 0){
                elImgGalleryListItemBlock.classList.add('active')
            }
            otimg++;
            if(productObj.otherImageList.length > 5){
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
        });
        
        // elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")).click();
    }else{
        elImgMainZoomImgBlock.style.display="none"
    }

    elTitleBlock.addEventListener("click", function() {
        var producttype=productObj.Field6;
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'),producttype);
    });

    elTitleTextBlock.addEventListener("click", function () {
        // if (productBlock.parentNode.parentNode.parentNode.classList.contains('inc_pdp_product-main_block') != true){
        // 	INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
        // }else{
            if(productBlock.querySelector('.close_read_more') != null){
                productBlock.querySelector('.close_read_more').click()
            }
            
            if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        document.querySelector('body').style.position = "relative"
                        if(inc_scroll_height > 100){
                            jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                        if(inc_scroll_height > 100){
                            jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('html').classList.remove('inc_popup_open')
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
            }
            Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
                el.classList.remove("active");
            });
            if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        setTimeout(function(){
                            if(document.querySelector('.inc_pdp_block') != null){
                                inc_scroll_height= $(".inc_pdp_block").offset().top
                            }else if(document.querySelector('.inc_af_block') != null){
                                inc_scroll_height=  $(".inc_af_block").offset().top
                            }
                            document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
                        },100)
                    }
                }
                document.querySelector('html').classList.add('inc_overlay');
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
            }
            document.querySelector('html').classList.add('inc_popup_open')
            this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
            if(window.innerWidth < 820){
                $('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: $('.inc_product_img_block').height() - 300}, 'fast');
            }
        // }
    });

    var pTitleDiv = document.createElement('div');
    pTitleDiv.innerText = productObj.nameMain;
    //elratingsBlock
    var field1 = productObj.Filed3;   
    INC.methods.get_product_ratings(field1,elratingsBlock);
    var pLink = document.createElement('a');
    pLink.href = productObj.url;
    pLink.addEventListener('click',function(e){
        e.preventDefault()
    })
    if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {
        pLink.setAttribute('style','cursor: default;text-decoration: none;')
    }else{
        // pLink.href = productObj.url;
    }
    pLink.setAttribute('style','text-transform: unset;')
    pLink.setAttribute('title',productObj.nameMain)
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);
    
    
    var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
    // var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();
    var totalsaveprc =  get_discount_price(productObj.regularPriceMain,productObj.activePriceMain)
    var totalsaveper =  get_discount_price_percentage(productObj.regularPriceMain, productObj.activePriceMain)
    
    // elPriceActiveMsg.innerText = " + VAT"
    elPriceRegularText.innerText = "";
    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
        elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
        elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        elPriceRegularText.innerHTML = INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + formatter.format(regularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        elworthPrice.innerHTML = "You save: "+formatter.format(totalsaveprc)+" ("+(totalsaveper)+"%)";
    }else{
        elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        elworthPrice.innerHTML = ""
    }

    if (productObj.promotionalMessage != null && productObj.promotionalMessage != "" && productObj.promotionalMessage != "Click & Collect") {

        if (productObj.promotionalMessage.indexOf('|') >= 0) {
            // elofferBlock.classList.add('active');
            var Promos = productObj.promotionalMessage.split('|')[0];
        } else {
            var Promos = productObj.promotionalMessage
        }

  
        var promo_div = document.createElement('div')
        promo_div.classList.add('promo_div_block')
        promo_div.innerText = Promos

        if (black_code_promo.indexOf(productObj.mainId) >= 0) {
            elproductOfferHeaderBlock.classList.add('black_promo');
        } else if (Promos == "Clearance") {
            elproductOfferHeaderBlock.parentNode.classList.add('yellow_promo');
        } else if (Promos == "New Lower Price" || Promos == "New" || Promos == "Introductory Offer") {
            elproductOfferHeaderBlock.parentNode.classList.add('green_promo');
        } else if (blue_code_promo.indexOf(productObj.mainId) >= 0) {
            elproductOfferHeaderBlock.parentNode.classList.add('blue_promo');

        } else {
            elproductOfferHeaderBlock.parentNode.classList.add('red_promo');
        }
        
        
        if(productObj.promotionalMessage.split('|')[1] != undefined){
            elproductOfferHeaderBlock.appendChild(promo_div)
            productBlock.classList.add('pipeline_promo')
            var promo_div1 = document.createElement('div')
            promo_div1.classList.add('promo_div_block')
            promo_div1.innerText = productObj.promotionalMessage.split('|')[1]
    
            if (black_code_promo.indexOf(productObj.mainId) >= 0) {
                elOfferTextBlock.classList.add('black_promo');
            } else if (Promos == "Clearance") {
                elOfferTextBlock.parentNode.classList.add('yellow_promo');
            } else if (Promos == "New Lower Price" || Promos == "New" || Promos == "Introductory Offer") {
                elOfferTextBlock.parentNode.classList.add('green_promo');
            } else if (blue_code_promo.indexOf(productObj.mainId) >= 0) {
                elOfferTextBlock.parentNode.classList.add('blue_promo');
            } else {
                elOfferTextBlock.parentNode.classList.add('red_promo');
            }
            elOfferTextBlock.appendChild(promo_div1)
        }else{
            if(productObj.promotionalMessage.split('|')[0].indexOf('Minimum') >= 0 || productObj.promotionalMessage.split('|')[0].indexOf('minimum') >= 0){
                elOfferTextBlock.appendChild(promo_div)
            }else{
                elproductOfferHeaderBlock.appendChild(promo_div)
            }
        }

    } else {
        elofferBlock.classList.add('Nopromo');
    }
    
    // elAttBlock.addEventListener("click", function () {
    //     if(productBlock.querySelector('.close_read_more') != null){
    //         productBlock.querySelector('.close_read_more').click()
    //     }
        
    //     if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
    //         productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
    //     }
    //     if(document.querySelector('.inc_sidebar_modal_block.active') == null){
    //         if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
    //             if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
    //                 document.querySelector('body').style.position = "relative"
    //             }
    //         }
    //         if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
    //             if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
    //                 jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
    //             }
    //         }
    //         document.querySelector('html').classList.remove('inc_overlay');
    //     }
    //     if(document.querySelector('.inc_sidebar_modal_block.active') != null){
    //         document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
    //     }
    //     Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
    //         el.classList.remove("active");
    //     });
    //     if(document.querySelector('.inc_sidebar_modal_block.active') == null){
    //         if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
    //             if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
    //                 setTimeout(function(){
    //                     if(document.querySelector('.inc_pdp_block') != null){
    //                         var doc = document.querySelector('.inc_pdp_block');
                            // inc_scroll_height = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    //                     }else if(document.querySelector('.inc_af_block') != null){
    //                         var doc = document.querySelector('.inc_af_block');
                            // inc_scroll_height = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    //                     }
    //                     document.querySelector('body').setAttribute('style','position: fixed;width:100%;')
    //                 },100)
    //             }
    //         }
    //         document.querySelector('html').classList.add('inc_overlay');
    //     }
    //     if(document.querySelector('.inc_sidebar_modal_block.active') != null){
    //         document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
    //     }
    //     if(this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
    //         this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active")
    //     }else{
    //         this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active")
    //     }
            
    //     if(window.innerWidth < 820){
    //         $('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: $('.inc_product_img_block').height() - 100}, 'fast');
    //     }
    // });
    var qty_title=document.createElement('label')
    qty_title.innerText = INC.config.qtyText
    elQtyBlock.appendChild(qty_title);
    var elQtyInput = this.generateHTMLTags('input');
    elQtyInput.setAttribute('type', "number");
    elQtyInput.setAttribute('aria-label', "quantity");
    elQtyInput.setAttribute('min', 1);
    elQtyInput.setAttribute('max', 99);
    elQtyInput.setAttribute('maxlength', 2);
    elQtyInput.value = 1;
    elQtyInput.setAttribute('old_qty', '1');
    elQtyInput.setAttribute('pattern', '[0-9]');
    elQtyInput.setAttribute("onkeydown", "if(event.key==='.' || event.key==='-'){event.preventDefault();}");
    elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==2) return false;');
    elQtyInput.setAttribute("oninput", "validity.valid||(value='');");
    if (productObj.promotionalMessage != null) {
        if (productObj.promotionalMessage.indexOf('Minimum order') >= 0) {
            var min_q = productObj.promotionalMessage.match(/(\d+)/)[0];

            elQtyInput.setAttribute('type', 'number');
            elQtyInput.setAttribute('min', min_q);
            elQtyInput.setAttribute('value', min_q);
            elQtyInput.value = min_q;
            elQtyInput.setAttribute('old_qty', min_q);
            // elQtyInput.setAttribute('maxlength', 2);
            elQtyDownBlock.style.pointerEvents = "none";

        }
    }
    elQtyBlock.addEventListener("click", function () {
         if (elQtyInput.value == undefined || elQtyInput.value == "0" || elQtyInput.value == "" || elQtyInput.value < 0) {
            elQtyInput.value = 1;
        }
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
        }
        
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function (el) {
            el.classList.remove("active");
        });
        elQtyBlock.classList.toggle("active");
    });

    elQtyBlock.addEventListener("change", function() {
        if (elQtyInput.value == undefined || elQtyInput.value == "0" || elQtyInput.value == "" || elQtyInput.value < 0) {
            elQtyInput.value = 1;
        }
    });

    elQtyInputText.appendChild(elQtyInput);

   

    elQtyInput.addEventListener("keydown", function () {
        var prod_card=elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elPackOfListBlock.classList.remove("active");
        setTimeout(function () {
            if (productObj.promotionalMessage != null) {
                if (productObj.promotionalMessage.indexOf('Minimum order') >= 0) {
                    var min_q = productObj.promotionalMessage.match(/(\d+)/)[0];
                    if (elQtyInput.value.length == 0) elQtyInput.value = min_q;
                    if (elQtyInput.value == 0) elQtyInput.value = min_q;
                    if (elQtyInput.value > 99) elQtyInput.value = 99;
                }
            }else if(productObj.promotionalMessage != undefined){
                if (elQtyInput.value.length == 0) elQtyInput.value = 1;
                if (elQtyInput.value == 0) elQtyInput.value = 1;
                if (elQtyInput.value > 99) elQtyInput.value = 99;
            }


            var productModuleBlock = productBlock.parentNode.parentNode;
            

            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

            var productModalBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            productModalBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
            
            if(elQtyInput.value == ""){
                qty = 1
                prod_card.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input').value=qty
            }else if(elQtyInput.value.indexOf('.') >= 0){
                qty = elQtyInput.value.replace('.','')
                prod_card.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input').value=qty
            }
            if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == "UPDATE") {
                INC.methods.updateBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,pname,pprice);
            }
        }, 50);

    });

   

    

    elQtyInputText.appendChild(elQtyInput);

    elQtyDownBlock.addEventListener('click', function () {
        // if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
        //     INC.config.user_interaction_modal = false
        //     if(typeof(clear_modal) != "undefined"){
        //         clearInterval(clear_modal)
        //     }
        // }
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
        }
        var prod_card=elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        var productModalBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            productModalBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);
        if(prod_card.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input') != null){
            prod_card.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input').value=elQtyInput.value
        }
        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput.value);
        var main_id = productBlock.getAttribute('data-main_id');
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
        if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == INC.config.AddedText || elAddText.innerText == INC.config.UpdateText) {
            INC.methods.updateBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,pname,pprice);
        }
    });

    elQtyUpBlock.addEventListener('click', function () {
        // if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
        //     INC.config.user_interaction_modal = false
        //     if(typeof(clear_modal) != "undefined"){
        //         clearInterval(clear_modal)
        //     }
        // }
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
        }
        var prod_card=elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elQtyInput.value = (parseInt(elQtyInput.value) + 1 > 99) ? 99 : parseInt(elQtyInput.value) + 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        var productModalBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            productModalBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);
        prod_card.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input').value=elQtyInput.value
        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput.value);
        var main_id = productBlock.getAttribute('data-main_id');
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
        if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == INC.config.AddedText || elAddText.innerText == INC.config.UpdateText) {
            INC.methods.updateBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,pname,pprice);
        }
    });

    

    
    if(productColorsObj.colorArray.length > 0){
        eldescblock.classList.add('promo_attr_avail')
        elAttColorListBlock.innerHTML = "";
        var one_attr_flag=false
        if(productColorsObj["colorArray"].length == 1){
            one_attr_flag = true
        }
        var colrcount=0;
        if (productColorsObj["colorArray"].length > 0) {
            if(productColorsObj["colorArray"][0].code != "Color"){
                productBlock.classList.add('inc_variant_new'+productColorsObj["colorArray"].length)
                var select_option_inc_block = generate_html_tag('div','select_option_inc_block')
                var select_option_inc_title = generate_html_tag('div','select_option_inc_title')
                //select_option_inc_title.innerText = ""+productColorsObj["colorArray"][0].code+":"
                select_option_inc_block.appendChild(select_option_inc_title)
                var selectvariant = generate_html_tag('select','inc_variant_tag')
                select_option_inc_block.appendChild(selectvariant)
                selectvariant.setAttribute('id','variant_inc_avail')
                selectvariant.setAttribute('onchange','inc_onchange_color_variant(this)')
                elAtt3Block.parentNode.insertBefore(select_option_inc_block,elAtt3Block)
                var variantoption1 = generate_html_tag('option','variantoption')
                variantoption1.innerText = "Please select: " + productColorsObj["colorArray"][0].code;
                eladdvarianttext.innerText = "Select " + productColorsObj["colorArray"][0].code;
                variantoption1.setAttribute('disabled','disabled')
                variantoption1.setAttribute('selected','selected')
                variantoption1.setAttribute('data-size', "");
                variantoption1.setAttribute("datasize", "");
                variantoption1.setAttribute('data-option', "");
                selectvariant.appendChild(variantoption1)
                // elAtt3Block.parentNode.insertBefore(selectvariant,elAtt3Block)
                productColorsObj["colorArray"].forEach(function (sizeObj) {
                    var variantoption = generate_html_tag('option','variantoption')
                    variantoption.innerText = sizeObj["text"];
                    variantoption.setAttribute('data-size', sizeObj["text"]);
                    variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    variantoption.setAttribute('data-option', "1");
                    variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                    variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                    selectvariant.appendChild(variantoption)
                    
                });
            }
            productColorsObj["colorArray"].forEach(function (colorObj) {
                elAttColorBlock.style.display="none"
                colrcount++
                elAttColorBlock.classList.add("active");
                elAttColorTitleText.innerText = "Colour:";
                var attColorBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemBlock"] })
                var attColorImgBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgBlock"] });
                var attColorImg = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImg"] });
                var attColorTextBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemTextBlock"] });
                var attColorText = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemText"] });
    
                attColorImgBlock.addEventListener("click", function () {
                    var product_module_block = productBlock.parentNode.parentNode
                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                    var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                    if(atteditbutton != null){
                        // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                        atteditbutton.innerText = INC.config.EditText
                    }
                    elAttColorBlock.classList.remove('show_dropdown')
                    
                    if(productBlock.querySelector('.close_read_more') != null){
                        productBlock.querySelector('.close_read_more').click()
                    }
                    var colorText = this.getAttribute("data-color")
                    elAttBlock.setAttribute("data-color", colorText);

                    if(atteditbutton != null){
                        // atteditbutton.parentNode.classList.add('active')
                    }
                    
                    var all_color_list_item_img = this.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')

                    for(cl=0;cl<all_color_list_item_img.length;cl++){
                        all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                    }
                    
                    this.parentNode.classList.add("active");

                    elAttColorTitleTextSelected.innerText = colorText;
                    
                    //third
                    var sel_size = elAttBlock.getAttribute('data-size')
                    findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: colorText });
                    var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);
                    if(product0Obj.att0Array.length > 0){
                        eldescblock.classList.add('promo_attr_avail')
                        if(product0Obj["att0Array"][0].code != "Color"){
                            elAttBlock.classList.add('config_avail')
                            elAttBlock.classList.add('elipsis_inc')
                            // elp_var_title.innerHTML = INC.config.ColorSizeText
                            findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
                            var selcop = elAtt0ListBlock.parentNode.parentNode.querySelector('.select_option_inc_block')
                            if(selcop != null){
                                selcop.parentNode.removeChild(selcop)
                            }
                            elAtt0ListBlock.innerHTML = "";
                            var product0Obj = product0Obj;
                            var productSizeText = "";
                            var select_option_inc_block = generate_html_tag('div','select_option_inc_block')
                            var select_option_inc_title = generate_html_tag('div','select_option_inc_title')
                            //select_option_inc_title.innerText = "Body Size:"
                            select_option_inc_block.appendChild(select_option_inc_title)
                            var selectvariant = generate_html_tag('select','inc_variant_tag')
                            select_option_inc_block.appendChild(selectvariant)
                            selectvariant.setAttribute('id','variant_inc_avail')
                            selectvariant.setAttribute('onchange','inc_onchange_variant(this)')
                            elAtt4Block.parentNode.insertBefore(select_option_inc_block,elAtt4Block)
                            var variantoption1 = generate_html_tag('option','variantoption')
                            variantoption1.innerText = "Select your option";
                            variantoption1.setAttribute('data-size', "");
                            variantoption1.setAttribute("datasize", "");
                            variantoption1.setAttribute('data-option', "");
                            selectvariant.appendChild(variantoption1)
                            product0Obj["att0Array"].forEach(function (sizeObj) {
                                var variantoption = generate_html_tag('option','variantoption')
                                variantoption.innerText = sizeObj["text"];
                                variantoption.setAttribute('data-size', sizeObj["text"]);
                                variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                variantoption.setAttribute('data-option', "1");
                                variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                                variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                                if(elAtt0Block.parentNode.getAttribute('data-zero') != null){
                                    if(sizeObj["text"].toLocaleLowerCase() == elAtt0Block.parentNode.getAttribute('data-zero').toLocaleLowerCase()){
                                        variantoption.selected = 'selected'
                                    }
                                }
                                selectvariant.appendChild(variantoption)
                                
                            });
                            if (product0Obj["att0Array"].length > 0) {
                                elAtt0TitleText.innerText = product0Obj["att0Array"][0].code;
                                elAtt0Block.classList.add("active");
                                var sizecount = 0
                                product0Obj["att0Array"].forEach(function (sizeObj) {
                                    sizecount++
                                    var attSizeBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                                    var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                                    var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                                    attSizeImgBlock0.addEventListener("click", function (e) {
                                        if(elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
                                            var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                                            var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                        }else{
                                            var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                            var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                        }
                                        
                                        var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                        if(atteditbutton != null){
                                            // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                            atteditbutton.innerText = INC.config.EditText
                                        }
                                        elAtt0Block.classList.remove('show_dropdown')
                                        
                                        if(productBlock.querySelector('.close_read_more') != null){
                                            productBlock.querySelector('.close_read_more').click()
                                        }
                                        var attr_text = this.getAttribute("data-size");
                
                                        elAttBlock.setAttribute("data-zero", attr_text);
                
                                        if(atteditbutton != null){
                                            // atteditbutton.parentNode.classList.add('active')
                                        }
                                        
                                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')
                
                                        for(cl=0;cl<all_color_list_item_img.length;cl++){
                                            all_color_list_item_img[cl].classList.remove("active");
                                        }
                                        
                                        this.classList.add("active");
                                        
                                        elAtt0TitleText.innerText = attr_text;
                
                                        var sel_size = elAttBlock.getAttribute('data-size')
                                        findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                                        findObj.sizeText=sel_size
                                        
                
                                        INC.methods.updateProductBlock(productBlock, findObj, blockType);
                
                                        var productModuleBlock = productBlock.parentNode.parentNode;
                
                                        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
                
                                        INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                        var zero_text = elAttBlock.getAttribute('data-zero');
                                        var size_text = elAttBlock.getAttribute('data-size');
                                        var color_text = elAttBlock.getAttribute('data-color');
                                        var third_text = elAttBlock.getAttribute('data-third');
                                        
                                        var sel_attr_text=""
                                        if(color_text != undefined){
                                            sel_attr_text = color_text
                                        }
                                        if(zero_text != undefined){
                                            if(sel_attr_text == ""){
                                                sel_attr_text = zero_text
                                            }else{
                                                sel_attr_text = sel_attr_text + " / " + zero_text
                                            }
                                        }
                                        if(size_text != undefined){
                                            sel_attr_text = sel_attr_text + " / " + size_text
                                        }
                                        if(third_text != undefined){
                                            sel_attr_text = sel_attr_text + " / " + third_text
                                        }
                                        var pr_mod_elm = productBlock.parentNode.parentNode
                                        if(pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
                                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
                                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                                        }
                                        
                                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText=""
                                        
                                    });
                                    
                                    attSizeImgBlock0.classList.add('avail')
                                    if (productSizeText.length == 0) {
                                        productSizeText = sizeObj["text"];
                                    }
                                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                                    var chckType = sizeObj["text"];
                                    
                                    reg.test(chckType);
                                    
                                    
                                    attSizeImg0.innerText = sizeObj["text"];
                                    attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                                    attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                    attSizeImgBlock0.setAttribute('data-option', "1");
                                    if(product0Obj["att0Array"][0].code == "Size"){
                                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                                    }else if(product0Obj["att0Array"][0].code == "letter"){
                                        attSizeImgBlock0.setAttribute('title', "Letter" + " "+ sizeObj["text"].toUpperCase());
                                    } else if(product0Obj["att0Array"][0].code == "choose"){
                                        attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                                    }else{
                                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                                    }
                                        
                                    attSizeImgBlock0.appendChild(attSizeImg0);
                                    elAtt0ListBlock.appendChild(attSizeImgBlock0);
                                    if(elAtt0Block.parentNode.getAttribute('data-zero') != null){
                                        if(attSizeImgBlock0.getAttribute('data-size').toLocaleLowerCase() == elAtt0Block.parentNode.getAttribute('data-zero').toLocaleLowerCase()){
                                            attSizeImgBlock0.classList.add('active')
                                        }
                                    }
                                });
                                
                            }
                        }
                    }
                    
                    //end 

                    INC.methods.updateProductBlock(productBlock, findObj, blockType);

                    var productModuleBlock = productBlock.parentNode.parentNode;

                    var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                    INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                    var zero_text = elAttBlock.getAttribute('data-zero');
                    var size_text = elAttBlock.getAttribute('data-size');
                    var color_text = elAttBlock.getAttribute('data-color');
                    var third_text = elAttBlock.getAttribute('data-third');
                    productModuleBlock.querySelector('.inc_product_desc_att_color_list_item_img_block')
                    var sel_attr_text=""
                    if(color_text != undefined){
                        sel_attr_text = color_text
                    }
                    var selcolor=color_text.toLowerCase()
                    var sel_color = productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+selcolor+'"]')
                    if(sel_color != null){
                        var all_color_list_item_imgs = productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img')

                        for(cls=0;cls<all_color_list_item_imgs.length;cls++){
                            all_color_list_item_imgs[cls].parentNode.parentNode.classList.remove("active");
                        }
                        sel_color.classList.add('active')
                    }
                    if(zero_text != undefined){
                        if(sel_attr_text == ""){
                            sel_attr_text = zero_text
                        }else{
                            sel_attr_text = sel_attr_text + " / " + zero_text
                        }
                    }
                    if(size_text != undefined){
                        sel_attr_text = sel_attr_text + " / " + size_text
                    }
                    if(third_text != undefined){
                        sel_attr_text = sel_attr_text + " / " + third_text
                    }
                    var pr_mod_elm = productBlock.parentNode.parentNode
                    if(pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
                        if(this.querySelector('img') != null){
                            var attr_src = this.querySelector('img').src
                            elAttColorTitleTextSelected.parentNode.querySelector('img').src=attr_src
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').parentNode.querySelector('img').src = attr_src
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').parentNode.querySelector('img').style.display="block"
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                        }
                    }
                    
                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText=""
                });
    
                
    
                attColorImg.style.backgroundColor = colorObj["colorCode"];
    
                
                // if (colorObj["imgSrc"].length > 0) {
                //     if(colorObj["colorCode"] == ""){
                //         //{ src: colorObj["imgSrc"] }
                //         var colorImg = INC.methods.generateHTMLTags('img');
                //         colorImg.setAttribute('alt', colorObj["text"])
                //         // colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                //         colorImg.setAttribute('src',colorObj["imgSrc"])
                //         if(productObj.categoryName != ""){
                //             colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                //         }
                //         //
                //         attColorImg.appendChild(colorImg);
                //     }
                // }
    
                var colorTitle = INC.methods.generateHTMLTags('a');
                colorTitle.innerText = colorObj["text"]
                colorTitle.title = colorObj["text"].toUpperCase();
                colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                attColorImg.appendChild(colorTitle);
                attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                attColorImgBlock.setAttribute('data-option', "0");
               
                
                attColorImgBlock.appendChild(attColorImg);
                attColorBlock.appendChild(attColorImgBlock);
                elAttColorListBlock.appendChild(attColorBlock);
                var prod_id = productBlock.getAttribute('data-main_id');
                if(one_attr_flag == true){
                    setTimeout(function(){
                        if(INC.methods.getProductIdFromWebPage() == prod_id){  
                            attColorImgBlock.click()
                        }
                    },0)
                }
            });
        }
    }
    if(product0Obj.att0Array.length > 0){
        eldescblock.classList.add('promo_attr_avail')
        if(product0Obj["att0Array"][0].code != "Color"){
            elAttBlock.classList.add('config_avail')
            elAttBlock.classList.add('elipsis_inc')
            productBlock.classList.add('inc_variant_new'+product0Obj.att0Array)
            // elp_var_title.innerHTML = INC.config.ColorSizeText
            findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
            elAtt0ListBlock.innerHTML = "";
            var product0Obj = product0Obj;
            var productSizeText = "";
            var select_option_inc_block = generate_html_tag('div','select_option_inc_block')
            var select_option_inc_title = generate_html_tag('div','select_option_inc_title')
           // select_option_inc_title.innerText = "Body Size:"
            select_option_inc_block.appendChild(select_option_inc_title)
            var selectvariant = generate_html_tag('select','inc_variant_tag')
            select_option_inc_block.appendChild(selectvariant)
            selectvariant.setAttribute('id','variant_inc_avail')
            selectvariant.setAttribute('onchange','inc_onchange_variant(this)')
            elAtt4Block.parentNode.insertBefore(select_option_inc_block,elAtt4Block)
            var variantoption1 = generate_html_tag('option','variantoption')
            variantoption1.innerText = "Select your option";
            variantoption1.setAttribute('data-size', "");
            variantoption1.setAttribute("datasize", "");
            variantoption1.setAttribute('data-option', "");
            selectvariant.appendChild(variantoption1)
            product0Obj["att0Array"].forEach(function (sizeObj) {
                var variantoption = generate_html_tag('option','variantoption')
                variantoption.innerText = sizeObj["text"];
                variantoption.setAttribute('data-size', sizeObj["text"]);
                variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                variantoption.setAttribute('data-option', "1");
                variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                if(product0Obj["att0Array"].length == 1){
                    variantoption.selected = 'selected'
                }
                selectvariant.appendChild(variantoption)
                
            });
            if (product0Obj["att0Array"].length > 0) {
                elAtt0TitleText.innerText = product0Obj["att0Array"][0].code;
                elAtt0Block.classList.add("active");
                var sizecount = 0
                product0Obj["att0Array"].forEach(function (sizeObj) {
                    sizecount++
                    var attSizeBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                    var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                    var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                    attSizeImgBlock0.addEventListener("click", function (e) {
                        if(elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
                            var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                            var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                        }else{
                            var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                            var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                        }
                        
                        var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                        if(atteditbutton != null){
                            // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                            atteditbutton.innerText = INC.config.EditText
                        }
                        elAtt0Block.classList.remove('show_dropdown')
                        
                        if(productBlock.querySelector('.close_read_more') != null){
                            productBlock.querySelector('.close_read_more').click()
                        }
                        var attr_text = this.getAttribute("data-size");

                        elAttBlock.setAttribute("data-zero", attr_text);

                        if(atteditbutton != null){
                            // atteditbutton.parentNode.classList.add('active')
                        }
                        
                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                        for(cl=0;cl<all_color_list_item_img.length;cl++){
                            all_color_list_item_img[cl].classList.remove("active");
                        }
                        
                        this.classList.add("active");
                        
                        elAtt0TitleText.innerText = attr_text;

                        var sel_size = elAttBlock.getAttribute('data-size')
                        findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                        findObj.sizeText=sel_size
                        

                        INC.methods.updateProductBlock(productBlock, findObj, blockType);

                        var productModuleBlock = productBlock.parentNode.parentNode;

                        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                        INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                        var zero_text = elAttBlock.getAttribute('data-zero');
                        var size_text = elAttBlock.getAttribute('data-size');
                        var color_text = elAttBlock.getAttribute('data-color');
                        var third_text = elAttBlock.getAttribute('data-third');
                        
                        var sel_attr_text=""
                        if(color_text != undefined){
                            sel_attr_text = color_text
                        }
                        if(zero_text != undefined){
                            if(sel_attr_text == ""){
                                sel_attr_text = zero_text
                            }else{
                                sel_attr_text = sel_attr_text + " / " + zero_text
                            }
                        }
                        if(size_text != undefined){
                            sel_attr_text = sel_attr_text + " / " + size_text
                        }
                        if(third_text != undefined){
                            sel_attr_text = sel_attr_text + " / " + third_text
                        }
                        var pr_mod_elm = productBlock.parentNode.parentNode
                        if(pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                        }
                        
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText=""
                        
                    });
                    
                    attSizeImgBlock0.classList.add('avail')
                    if (productSizeText.length == 0) {
                        productSizeText = sizeObj["text"];
                    }
                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                    var chckType = sizeObj["text"];
                    
                    reg.test(chckType);
                    
                    
                    attSizeImg0.innerText = sizeObj["text"];
                    attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock0.setAttribute('data-option', "1");
                    if(product0Obj["att0Array"][0].code == "Size"){
                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                    }else if(product0Obj["att0Array"][0].code == "letter"){
                        attSizeImgBlock0.setAttribute('title', "Letter" + " "+ sizeObj["text"].toUpperCase());
                    } else if(product0Obj["att0Array"][0].code == "choose"){
                        attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                    }else{
                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                    }
                        
                    attSizeImgBlock0.appendChild(attSizeImg0);
                    elAtt0ListBlock.appendChild(attSizeImgBlock0);
                    
                });
                
            }
        }
    }
    
    var sizezero=INC.dataStore.methods().getProductopt0Obj(findObj)
    
    if (productColorsObj["colorArray"].length == 0 && sizezero["att0Array"].length == 0) {
        elAttBlock.classList.add('attributes_not_avail')
        eladdvarianttext.innerText = "Add"
        switch (blockType) {
            case "pdp":  eladdvarianttext.innerText = "Add"; break;
            case "sidebar":
            case "am":  eladdvarianttext.innerText = "Add for Delivery"; break;
        }
        productBlock.classList.remove('simple')
        productBlock.classList.remove('configurable')
        productBlock.classList.add('simple')
        eladdvarianttext.classList.add('simple')
    }else if (productColorsObj["colorArray"].length > 0) {
        elAttBlock.classList.add('attributes_avail')
        elAttSizeTitleText.innerText = "View colours";
        eladdvarianttext.innerText = "Select" +" "+productColorsObj["colorArray"][0].code;
        eladdvarianttext.classList.add('config')
        elconfigtitle.innerText = "Please select:" +" "+productColorsObj["colorArray"][0].code;
        elconfigtitle.setAttribute('style','color: #000;')
        elvariantaddbtntext.innerText = "Add";
        if(blockType == "pdp"){
            elvariantaddbtntext.setAttribute('style','display: block !important;')
        }
        productBlock.classList.remove('simple')
        productBlock.classList.remove('configurable')
        productBlock.classList.add('configurable')
        elvariantviewdetailstext.innerText = "View Details";
    }else if (sizezero["att0Array"].length > 0) {
        eladdvarianttext.innerText = "Select" +" "+productColorsObj["colorArray"][0].code;
        eladdvarianttext.classList.add('config')
        if(blockType == "pdp"){
            elvariantaddbtntext.setAttribute('style','display: block !important;')
        }
        elAttBlock.classList.add('attributes_avail')
        elAttSizeTitleText.innerText = "View Sizes";
        elconfigtitle.innerText = "Please select:" +" "+productColorsObj["colorArray"][0].code;
        elconfigtitle.setAttribute('style','color: #000;')
        elvariantviewdetailstext.innerText = "View Details";
        productBlock.classList.remove('simple')
        productBlock.classList.remove('configurable')
        productBlock.classList.add('configurable')
    }
    if(productColorsObj["colorArray"].length == 1 || sizezero["att0Array"].length == 1){
        // eladdvarianttext.innerText = "Add";
        switch (blockType) {
            case "pdp":  eladdvarianttext.innerText = "Add"; break;
            case "sidebar":
            case "am":  eladdvarianttext.innerText = "Add for Delivery"; break;
        }
        eladdvarianttext.classList.add('simple')
    }
    elvariantaddbtn.addEventListener('click',function(){
        var productModuleBlock = productBlock.parentNode.parentNode
        if((this.textContent.trim() == "Update" || this.parentNode.classList.contains('config_avail') == true) && this.innerText.trim() != "Add for Delivery"){
            var moduleblk=productModuleBlock
            var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
            if(flag_check == 1){
                if(document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null){
                    document.querySelector('html').classList.remove('inc_overlay')
                    document.querySelector('html').classList.remove('inc_popup_open')
                }
                this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                var delayset = 0
                if(window.innerWidth < 820){
                    if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                        if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                            if(document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null){
                                document.querySelector('body').style.position = "relative"
                            }
                            if(inc_scroll_height > 100){
                                delayset = 500
                                window.scrollTo(0,inc_scroll_height);
                            }
                        }
                    }
                }
                productBlock.classList.remove('show_overlay')
                if(this.textContent.trim() == "Add"){
                    this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                    if(document.querySelector('.inc_product_modal_block.active') != null){
                        document.querySelector('html').classList.add('inc_popup_open')
                    }
                }
            }else{
                if(productModuleBlock.querySelector('.select_option_inc_block') != null){
                    productModuleBlock.querySelector('.select_option_inc_block').classList.add('error_inc_message')
                }
            }
        }else{
            if(this.innerText.trim() == "Add for Delivery"){
                var moduleblk=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                var flag_check = INC.methods.checkVariantSelection(moduleblk)
                if(flag_check == 1){
                    if(document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null){
                        document.querySelector('html').classList.remove('inc_overlay')
                    }
                    this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    var delayset = 0
                    if(window.innerWidth < 820){
                        if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                                if(document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null){
                                    document.querySelector('body').style.position = "relative"
                                }
                                if(inc_scroll_height > 100){
                                    delayset = 500
                                    window.scrollTo(0,inc_scroll_height);
                                }
                            }
                        }
                    }
                    productBlock.classList.remove('show_overlay')
                    if(this.textContent.trim() == "Add to basket"){
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                        if(document.querySelector('.inc_product_modal_block.active') != null){
                            document.querySelector('html').classList.add('inc_popup_open')
                        }
                    }
                }else{
                    if(productModuleBlock.querySelector('.select_option_inc_block') != null){
                        productModuleBlock.querySelector('.select_option_inc_block').classList.add('error_inc_message')
                    }
                }
            }else{
                var moduleblk=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                var flag_check = INC.methods.checkVariantSelection(moduleblk)
                if(flag_check == 1){
                    this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                    this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    if(document.querySelector('.inc_product_modal_block.active') != null){
                        document.querySelector('html').classList.add('inc_popup_open')
                    }
                    
                } else{
                    if(productModuleBlock.querySelector('.select_option_inc_block') != null){
                        productModuleBlock.querySelector('.select_option_inc_block').classList.add('error_inc_message')
                    }
                }
            }
            
        }
    })
    // elvariantaddbtn.addEventListener('click',function(){
    //     if(this.innerText == "Update" || this.innerText.trim() == "Update"){
    //         this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
    //         this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
    //         productBlock.classList.remove('show_overlay')
    //     }else{
    //         var productModuleBlock = productBlock.parentNode.parentNode
    //         //productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block')
    //         if(productModuleBlock.querySelector('.select_option_inc_block') != null){
    //             productModuleBlock.querySelector('.select_option_inc_block').classList.add('error_inc_message')
    //         }
    //     }
    // })

    elvariantviewdetails.addEventListener('click',function(){
        productBlock.classList.remove('show_overlay')
        this.parentNode.parentNode.querySelector('.inc_product_desc_att_block').classList.remove('active')
        this.parentNode.parentNode.parentNode.querySelector('.inc_product_details_prod_block').click()
    })
    elselectoptaddbtn.addEventListener('click',function(){
        if(document.querySelector('.inc_product_desc_att_block.active') != null){
            document.querySelector('.inc_product_desc_att_block.active').classList.remove('active')
        }
        if(this.querySelector('.inc_product_variant_simple_text.simple') != null){
            this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
        }else{
            productBlock.classList.add('show_overlay')
            this.parentNode.querySelector('.inc_product_desc_att_block').classList.add('active')
            // if(window.innerWidth < 820){
            //     productBlock.classList.add('show_overlay')
            //     this.parentNode.querySelector('.inc_product_desc_att_block').classList.add('active')
            // }else{
            //     if(productBlock.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_pdp_bundle_block') == true){
            //         this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
            //     }else{
            //         if(this.querySelector('.inc_product_variant_simple_text.simple') != null){
            //             this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
            //         }else{
            //             productBlock.classList.add('show_overlay')
            //             this.parentNode.querySelector('.inc_product_desc_att_block').classList.add('active')
            //         }
            //     }
                
            // }
        }
        if(window.innerWidth < 820){
            if(document.querySelector('.inc_product_variant_simple_text.config') != null)
            document.querySelector('html').classList.add('inc_overlay')
        }
    })
    // switch (blockType) {
    //     case "pdp": elAddText.innerText = INC.config.AddText; break;
    //     case "sidebar":
    //     case "am": elAddText.innerText = INC.config.AddToCartText; break;
    // }
    switch (blockType) {
        case "pdp":
            elAddText.innerText = INC.config.AddText;
            break;
        case "sidebar":
            elAddText.innerText = "Add for Delivery";
            elAddTextclickcollect.innerText = "Click & Collect";
            break;
        case "am":
            elAddText.innerText = "Add for Delivery";
            elAddTextclickcollect.innerText = "Click & Collect";
            break;
    }
    elAddBlock.addEventListener("click", function () {
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        var productModuleBlock = productBlock.parentNode.parentNode;

        var modalProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
        var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
        var sku = productBlock.getAttribute('data-sku');
        var mainId = productBlock.getAttribute('data-main_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
        var qty = parseInt(elQtyInput.value);
        var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        INC.config.product_seq.remove_prod_list = function() {
            var what, a = arguments, L = a.length, ax;
            while (L && this.length) {
                what = a[--L];
                while ((ax = this.indexOf(what)) !== -1) {
                    this.splice(ax, 1);
                }
            }
            return this;
        };
        if(document.querySelector('.inc_sidebar_modal_block.active') == null && document.querySelector('.inc_af_block') == null){
            if(flag_check == 1 || onloadpdp == false){
                switch (elAddText.innerText) {
                    case "Add": elAddText.innerText = "Added";
                        elAddText.classList.add('added');
                        elAddText.parentNode.parentNode.classList.add('Inc_checked');
                        modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "Update";
                        var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                        if (pListItemBlock != null) {
                            pListItemBlock.classList.add('product_added');
                            pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.add("checked");
                        }
                        elAddImg.classList.add("checked");
                        modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.add("checked");
                        INC.config.product_seq.push(main_id)
                        if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty}, "add",main_id,bundle_id,pname,pprice);
                        if(prod_card != null){
                            if(prod_card.querySelector('.inc_product_modal_block.active') != null){
                                document.querySelector('body').style.position = "relative"
                                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                                        document.querySelector('body').style.position = "relative"
                                        if(inc_scroll_height > 100){
                                            jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                                        }
                                    }
                                }
                                prod_card.querySelector('.inc_product_modal_block.active').classList.remove('active')
                            }
                            
                        }
                        if(productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null){
                            productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').innerText = "Added"
                            if(productModuleBlock.querySelector('.inc_product_variant_simple_block') != null){
                                productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('added_inc')
                            }
                        }
                        productModuleBlock.querySelector('.inc_product_desc_add_block').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_block').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_product_desc_att_variant_text').innerText = "Update"
                        productModuleBlock.querySelector('.inc_product_desc_att_variant_text').classList.add('inc_green')
                        break;
                    case "Added":
                        if(modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText != "Update" && prod_card.querySelector('.inc_product_modal_block.active') != null){
                                                        
                            elAddText.innerText = "Add";
                            elAddText.classList.remove('added');
                            elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "Add";
                            var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock != null) {
                                pListItemBlock.classList.remove('product_added');
                                pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                            }
                            elAddImg.classList.remove("checked");
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                            if(productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null){
                                productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').innerText = "Add"
                            }
                            if(productModuleBlock.querySelector('.inc_product_variant_simple_block') != null){
                                productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('added_inc')
                            }
                            productModuleBlock.querySelector('.inc_product_desc_add_block').classList.remove('added_inc')
                            productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_block').classList.remove('added_inc')
                            productModuleBlock.querySelector('.inc_product_desc_att_variant_text').innerText = "Add"
                            productModuleBlock.querySelector('.inc_product_desc_att_variant_text').classList.remove('inc_green')
                            INC.config.product_seq.remove_prod_list(main_id);
                            if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub",main_id,bundle_id,pname,pprice);


                        }else{
                            if(prod_card.querySelector('.inc_product_modal_block.active') == null){
                                elAddText.innerText = "Add";
                                elAddText.classList.remove('added');
                                elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "Add";
                                var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                if (pListItemBlock != null) {
                                    pListItemBlock.classList.remove('product_added');
                                    pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                }
                                if(productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null){
                                    productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').innerText = "Add"
                                }
                                if(productModuleBlock.querySelector('.inc_product_variant_simple_block') != null){
                                    productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('added_inc')
                                }
                                productModuleBlock.querySelector('.inc_product_desc_add_block').classList.remove('added_inc')
                                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_block').classList.remove('added_inc')
                                productModuleBlock.querySelector('.inc_product_desc_att_variant_text').innerText = "Add"
                                productModuleBlock.querySelector('.inc_product_desc_att_variant_text').classList.remove('inc_green')
                                elAddImg.classList.remove("checked");
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                INC.config.product_seq.remove_prod_list(main_id);
                                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub",main_id,bundle_id,pname,pprice);
                            }
                        }
                        // if(prod_card.querySelector('.inc_product_modal_block.active') == null){
                        //     if(document.querySelector('.inc_pdp_block') != null){
                        //         inc_scroll_height= $(".inc_pdp_block").offset().top
                        //     }
                        // }
                        if(prod_card != null){
                            if(prod_card.querySelector('.inc_product_modal_block.active') != null){
                                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                                        document.querySelector('body').style.position = "relative"
                                        if(inc_scroll_height > 100){
                                            jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                                        }
                                    }
                                }
                                prod_card.querySelector('.inc_product_modal_block.active').classList.remove('active')
                            }
                        }
                        break;
                }
            }else{
                // if(productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_details_prod_text') != null){
                //     productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_details_prod_text').click()
                //     document.querySelector('html').classList.remove('inc_overlay');
                //     document.querySelector('html').classList.remove('inc_popup_open');
                // }
                if(document.querySelector('.inc_product_desc_att_block.attributes_avail.active') == null){
                    if(productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_details_prod_text') != null){
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_details_prod_text').click()
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('html').classList.remove('inc_popup_open');
                    }
                }else{
                    if(productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block') != null){
                        productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block').classList.add('error_inc_message')
                    }
                    if(productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block') != null){
                        productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block').classList.add('error_inc_message')
                    }
                }
                
            }
        }else{
            if(flag_check == 1){
                elAddText.innerText = "Adding...";
                elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
            }else{
                // if(productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_details_prod_text') != null){
                //     productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_details_prod_text').click()
                //     if(document.querySelector('.sidebar_outer.sidebar_outer_active') == null && document.querySelector('.inc_product_modal_block.active') == null){
                //         document.querySelector('html').classList.remove('inc_overlay');
                //         document.querySelector('html').classList.remove('inc_popup_open');
                //     }
                // }
                if(productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block') != null){
                    productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block').classList.add('error_inc_message')
                }
                if(productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block') != null){
                    productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block').classList.add('error_inc_message')
                }
            }
        }
        setTimeout(function(){
            if(document.querySelector('.inc_product_modal_block.active') == null){
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('html').classList.remove('inc_popup_open');
            }
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('html').classList.add('inc_overlay');
            }
        },100)
    });


    elAddBlockclickcollect.addEventListener("click", function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var productModuleBlock = productBlock.parentNode.parentNode;

        var modalProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        var sku = productBlock.getAttribute('data-sku');
        var mainId = productBlock.getAttribute('data-main_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var qty = parseInt(elQtyInput.value);
        var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        if (document.querySelector('.inc_sidebar_modal_block.active') == null && document.querySelector('.inc_af_block') == null) {

        } else {

            if (productModuleBlock.querySelector('.img_color_swatch') != null) {
                if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                    elAddTextclickcollect.innerText = "Adding...";
                    elAddTextclickcollect.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                } else {
                    productModuleBlock.querySelector('.img_color_swatch').click()
                }
            } else {
                elAddTextclickcollect.innerText = "Adding...";
                elAddTextclickcollect.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
            }
        }

    });

    
    return productBlock;
}

INC.methods.checkVariantSelection = function(prod_module_block){
    var attr_flag_size = false;
    var attr_flag_color = false;
    var elSize = prod_module_block.querySelector('#variant_inc_avail')
    var elColor = prod_module_block.querySelector('.inc_product_desc_att_color_block.active')
    if(elSize != null){
        var eldataOption = elSize.options[elSize.selectedIndex].getAttribute("data-option");
        if(eldataOption != ""){
            attr_flag_size = true
        }
    }else{
        attr_flag_size = true
    }
    if(elColor != null){
        //inc_product_desc_att_color_list_item_block active
        if(elColor.querySelector('.inc_product_desc_att_color_list_item_img_block.active') != null || elColor.querySelector('.inc_product_desc_att_color_list_item_block.active') != null){
            attr_flag_color = true
        }
    }else{
        attr_flag_color = true
    }
    if(attr_flag_color == true && attr_flag_size == true){
        return 1
    }else{
        return 0
    }
}

INC.methods.createProductModalBlock = function (pdpProductId, blockType, bundleProductListCheck,parentblock) {
    var classNames = INC.uiConfig[blockType].className;
    var productBlock = this.getElementChilds("productBlock", blockType);
    var findObj = new INC.classes.FindObj({ id: pdpProductId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    // var productColorText = productObj["option"]["0"].text;
    var getSelectorClassName = this.getSelectorClassName;

    var price_htmlprc = productBlock.querySelector('.inc_product_desc_title_block').innerHTML
    var price_siblingprc=productBlock.querySelector('.inc_product_view_img_desc_block')
    var html_prc_blockprc = document.createElement('div');
    html_prc_blockprc.classList.add('inc_product_desc_title_block')
    html_prc_blockprc.innerHTML = price_htmlprc
    var price_html_remrd = productBlock.querySelector('.inc_product_desc_title_block');
    price_html_remrd.parentNode.removeChild(price_html_remrd);
    price_siblingprc.parentNode.insertBefore(html_prc_blockprc,price_siblingprc)

    var price_html = productBlock.querySelector('.inc_product_desc_ratings_block').innerHTML
    var price_sibling=productBlock.querySelector('.inc_product_manufacture_text_block')
    var html_prc_block = document.createElement('div');
    html_prc_block.classList.add('inc_product_desc_ratings_block')
    html_prc_block.innerHTML = price_html
    var price_html_rem = productBlock.querySelector('.inc_product_desc_ratings_block');
    price_html_rem.parentNode.removeChild(price_html_rem);
   // price_sibling.parentNode.insertBefore(html_prc_block,price_sibling)
   price_sibling.appendChild(html_prc_block);

   if(window.innerWidth < 820){
        var desc_htmlprc = productBlock.querySelector('.inc_product_view_short_desc_block').innerHTML
        var desc_siblingprc=productBlock.querySelector('.inc_product_desc_block')
        var html_prc_descblock = document.createElement('div');
        html_prc_descblock.classList.add('inc_product_view_short_desc_block')
        html_prc_descblock.setAttribute('style','margin-top: 20px;border-top: 6px solid #f1f1f1;')
        html_prc_descblock.innerHTML = desc_htmlprc
        html_prc_descblock.querySelector('.inc_product_view_img_desc_text').setAttribute('style','margin-top: 12px;')
        var desc_html_remrd = productBlock.querySelector('.inc_product_view_short_desc_block');
        desc_html_remrd.parentNode.removeChild(desc_html_remrd);
        desc_siblingprc.appendChild(html_prc_descblock)

        productBlock.querySelector('.inc_product_view_short_desc_block').style.display = "none";

        

        // desc_siblingprc.parentNode.insertBefore(html_prc_descblock,desc_siblingprc)
   }
    //Review_Block 
    if(productObj.reviewsCount != null && productObj.reviewsCount != ""){
        // var product_reviews = document.createElement('div');
        // product_reviews.innerHTML =  productObj.reviewsCount + "<span> Reviews</span>";
        // product_reviews.classList.add('inc_product_desc_reviews');
        // price_sibling.append(product_reviews);
    }else{
        // var product_reviews = document.createElement('div');
        // product_reviews.innerHTML =   "0" + "<span> Reviews</span>";
        // product_reviews.classList.add('inc_product_desc_reviews');
        // price_sibling.append(product_reviews);
    }




    productBlock.setAttribute('data-id', productObj.id);
    productBlock.setAttribute('data-sku', productObj.sku);
    productBlock.setAttribute('data-main_id', productObj.mainId);
    productBlock.setAttribute('data-bundle_id', productObj.bundleId);
    productBlock.setAttribute('data_main_variant', productObj.mainProdVariant);
    productBlock.setAttribute('data-category_name', productObj.categoryName);
    productBlock.setAttribute('product_type', productObj.ProductType);
    productBlock.classList.add(productObj.ProductType)

    var main_prod_id = productObj.mainId
    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elHeaderInfoBlck = getViewElement("productInfoMainBlock");
    var elHeader = getViewElement("productHeaderMainBlock");
    var elInfoText = getViewElement("productInfoText");
    var elImgBlock = getViewElement("productImgBlock");
    var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
    var elTitleBlock = getViewElement("productTitleBlock");
    var elTitleText = getViewElement("productTitleText");
    var elMTitleBlock = getViewElement("productMaufactureTextBlock");
    var elMTitleText = getViewElement("productMaufactureText")
    var elPriceActiveText = getViewElement("productPriceActiveText");
    var elPriceActiveMsg = getViewElement("productPriceActiveTextMsg");
    var elPriceRegularText = getViewElement("productPriceRegularText");
    var elAttBlock = getViewElement("productAttBlock");
    var elAttColorBlock = getViewElement("productAttColorBlock");
    var elAttColorTitleText = getViewElement("productAttColorTitleText");
    var elAttColorTitleTextSelected = getViewElement("productAttColorTitleTextSelected");
    var elAttColorListBlock = getViewElement("productAttColorListBlock");
    var elAttSizeBlock = getViewElement("productAttSizeBlock");
    var elAttSizeTitleBlock = getViewElement("productAttSizeTitleBlock");
    var elAttSizeTitleText = getViewElement("productAttSizeTitleText");
    var elAttSizeTitleTextSelected = getViewElement("productAttSizeTitleTextSelected");
    var elAttSizeListBlock = getViewElement("productAttSizeListBlock");
    var elAtt0ListBlock = getViewElement("productAttzeroListBlock");
    var elAtt3ListBlock = getViewElement("productAttthirdListBlock");
    var elAtt4ListBlock = getViewElement("productAttfourthListBlock");
    var elOfferTextBlock = getViewElement("productOfferTextBlock");
    var elAtt0Block = getViewElement("productAttzeroBlock");
    var elAtt3Block = getViewElement("productAttthirdBlock");
    var elAtt4Block = getViewElement("productAttfourthBlock");
    var elAtt0TitleTextSelected = getViewElement("productAttzeroTitleTextSelected");
    var elAtt0TitleText = getViewElement("productAttzeroTitleText");
    var elAtt3TitleTextSelected = getViewElement("productAttthirdTitleTextSelected");
    var elAtt3TitleText = getViewElement("productAttthirdTitleText");
    var elAtt4TitleTextSelected = getViewElement("productAttfourthTitleTextSelected");
    var elAtt4TitleText = getViewElement("productAttfourthTitleText");

    var elPackOfListBlock = getViewElement("productPackOfListBlock");
    var elQtyBlock = getViewElement("productQtyBlock");
    var elQtyInputText = getViewElement("productQtyInputText");
    var elQtyDownBlock = getViewElement("productQtyDownBlock");
    var elQtyUpBlock = getViewElement("productQtyUpBlock");
    var elAddBlock = getViewElement("productAddBlock");
    var elAddText = getViewElement("productAddText");
    var elAddImg = getViewElement("productAddImg");
    var elratingsBlock = getViewElement("productRatingsBlock");
    var elFullDesctext = getViewElement("productInfoFullDescText");
    var elworthPrice = getViewElement("productPriceWorthText");
    var elGalleryRightArrow = getViewElement("productImgGalleryRightBlock");
    var elGallerylefttArrow = getViewElement("productImgGalleryLeftBlock");
    var fulldescblock = getViewElement("productInfoFullDescBlock");
    var fullDescHeaderText = getViewElement("productInfoFullDescDescHeaderText")
    var fullDescShippingHeaderText = getViewElement("productInfoFullDescShippingHeaderText")
    var fullDescShippingText = getViewElement("productInfoFullDescShippingText")
    var elzoomplus = getViewElement("productImgMainZoomBtnImg");
    var elzoomminus = getViewElement("productImgMainZoomminusImg");
    var elzoomreturn = getViewElement("productImgMainZoomRuturnImg");
    var img_block = getViewElement("productImgMainImgBlock");
    var elcolortitleblock = getViewElement("productAttColorTitleBlock");
    var elsizetitleblock = getViewElement("productAttzeroTitleBlock");
    var eldescrpionblock = getViewElement("productDescBlock");
    var elProductDescriptionText=getViewElement("productDescriptionHeaderTitleText")
    var elMaindescription = getViewElement("productDescriptionMainBlock")
    var elviewdetailheader = getViewElement("productHeaderBlock")
    var eldescheader = getViewElement("productDescriptionHeaderBlock")
    var elInfomain = getViewElement("productInfoMainBlock")
    var elcloseblk = getViewElement("productHeaderImgBlock")
    var elprdqtyinputblock = getViewElement("productQtyInputBlock");
    var elp_var_title = getViewElement("productAddTitle");
    var eldescblock = getViewElement("productDescBlock");
    var eldetailsprodblock = getViewElement("productAttDetailsBlock")
    var elshortdesc = getViewElement("productViewshortDescText")
    var elQtyBlock = getViewElement("productQtyBlock");
    var elAddTextclickcollect = getViewElement("productAddTextclickcollect");
    var elAddBlockclickcollect = getViewElement("productAddBlockclickcollect");
    var elofferBlock = getViewElement("productOfferBlock");
    var elproductOfferHeaderBlock = getViewElement("productOfferHeaderBlock");
    var elOfferTextBlock = getViewElement("productOfferTextBlock");
    
    elMTitleText.innerHTML = "<span>Product code:</span>" + productObj.idAdd; 
    //elAddText.innerText = "Add for Delivery";
    elAddTextclickcollect.innerText = "Click & Collect";

    // if (blockType != "pdp") {
    //     // elAddBlockclickcollect.style.display = "none"
    //     if (productObj.Field6 == "CollectOnly" && INC.config.storeId != "") {
    //         productBlock.classList.add('is_click_collect_only')
    //         productBlock.classList.add('is_click_collect_only_available')
    //         elAddBlock.style.display = "none"
    //     } else if (productObj.Field6 == "CollectOnly" && INC.config.storeId == "") {
    //         elAddBlockclickcollect.style.display = "none"
    //         elAddBlock.style.display = "none"
    //     } else if (productObj.Field6 == "DeliveryOnly") {
    //         productBlock.classList.add('is_delivery_only')
    //         elAddBlockclickcollect.style.display = "none"
    //     } else if (productObj.Field6 == "Both") {
    //         // if(INC.config.pageType == "cartPage"){
    //         //     if(productBlock.parentNode.className.indexOf('inc_product_showcase_block') >= 0){
    //         //         elAddBlockclickcollect.style.display = "block"
    //         //     }
    //         // }
    //         // productBlock.classList.add('is_click_collect_only')
    //         productBlock.classList.add('is_both_avail')
    //     } else if (INC.config.storeId == "") {
    //         productBlock.classList.add('is_delivery_only')
    //         elAddBlockclickcollect.style.display = "none"
    //     } else if (productObj.Field6 == "oos") {
    //         // productBlock.classList.add('is_click_collect_only')
    //         productBlock.classList.add('is_both_avail')
    //     } else {
    //         productBlock.classList.add('is_click_collect_only')
    //     }
    //     // productBlock.classList.add('is_delivery_only')
    // }
    // productBlock.classList.add('is_delivery_only')
    elAddBlockclickcollect.style.display = "none"

    elHeaderInfoBlck.setAttribute('data-id', productObj.id);
    elHeaderInfoBlck.setAttribute('data-sku', productObj.sku);
    elHeaderInfoBlck.setAttribute('data-main_id', productObj.mainId);
    elHeaderInfoBlck.setAttribute('data-bundle_id', productObj.bundleId);

    elviewdetailheader.classList.add('active')
    elInfomain.classList.add('active')
    elcloseblk.classList.add('outer')
    elviewdetailheader.addEventListener('click',function(e){
        if(productBlock.querySelector('.inc_product_description_main_block.desc_avail') != null){
            productBlock.querySelector('.inc_product_description_main_block.desc_avail').classList.remove('active')
        }
        productBlock.querySelector('.inc_product_Description_header_block').classList.remove('active')
        this.classList.add('active')
        productBlock.querySelector('.inc_product_info_main_block').classList.add('active')  
    })

    eldescheader.addEventListener('click',function(e){
        if(productBlock.querySelector('.inc_product_description_main_block.desc_avail') != null){
            productBlock.querySelector('.inc_product_info_main_block').classList.remove('active')  
            productBlock.querySelector('.inc_product_description_main_block').classList.add('active')  
        }
        
        productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').classList.remove('active')
        this.classList.add('active')

        $(".inc_product_modal_block.active .inc_product_block .inc_product_description_main_block").animate({ scrollTop:  0 }, 0);
    })

    if(window.innerWidth < 820){
        elHeader.addEventListener("click", function () {
            if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                document.querySelector('html').classList.remove('inc_overlay');
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        document.querySelector('body').style.position = "relative"
                        if(inc_scroll_height > 100){
                            jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                        if(inc_scroll_height > 100){
                            jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                
            }
            document.querySelector('html').classList.remove('inc_popup_open')
            if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
            }
            if(productBlock.querySelector('.close_read_more') != null){
                productBlock.querySelector('.close_read_more').click()
            }
            if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value != productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value) {
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value
            }
            productBlock.parentNode.classList.remove("active");
        });
    }

    

    img_block.setAttribute('role','img')
    img_block.setAttribute('aria-label','Image')
    
    elzoomplus.addEventListener('click',function(){
        this.parentNode.classList.add('active')
        var mainimgel = this.parentNode.parentNode.parentNode.parentNode
        if(window.innerWidth < 1200){
            mainimgel.querySelector('.inc_product_img_main_img img').setAttribute('style','height:200%;')
            mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = "300px"
        }else{
            mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = "272px"
        }
    })
    elzoomminus.addEventListener('click',function(){
        this.parentNode.classList.remove('active')
        var mainimgel = this.parentNode.parentNode.parentNode.parentNode
        if(window.innerWidth < 1200){
            mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = ""
            mainimgel.querySelector('.inc_product_img_main_img img').setAttribute('style','height:100%;')
        }else{
            mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = ""
        }
    })
    elzoomreturn.addEventListener('click',function(){
        this.parentNode.classList.remove('active')
        var mainimgel = this.parentNode.parentNode.parentNode.parentNode
        mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = ""
        if(window.innerWidth < 1200){
            mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = ""
            mainimgel.querySelector('.inc_product_img_main_img img').setAttribute('style','height:100%;')
        }else{
            mainimgel.querySelector('.inc_product_img_main_img img').style.maxWidth = ""
        }
    })

    elHeader.querySelector(getSelectorClassName(classNames, "productHeaderImgBlock")).addEventListener("click", function () {
        if(document.querySelector('.inc_sidebar_modal_block.active') == null){
            document.querySelector('html').classList.remove('inc_overlay');
            document.querySelector('html').classList.remove('inc_popup_open')
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                    document.querySelector('body').style.position = "relative"
                    if(inc_scroll_height > 100){
                        jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                    }
                }
            }
            if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                    if(inc_scroll_height > 100){
                        jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                    }
                }
            }
            
        }
        if(document.querySelector('.inc_sidebar_modal_block.active') != null){
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null){
            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
        }
        var docpdpinc = document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_block');
        if(docpdpinc != null){
            if(window.innerWidth < 1025 && window.innerWidth > 819){
                docpdpinc.scrollLeft = 0
                INC.clientConfig.offset = 0;
                INC.clientConfig.slidevalue = 0;
                if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                    document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                }
                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                    document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                }
            }
        }
        if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value != productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value) {
            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value
        }
        productBlock.parentNode.classList.remove("active");
    });

    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));
    var elImgTag1 = this.generateHTMLTags('img', { src: productObj.imageURLMain });
    if(onloadpdp == true){
        elImgTag1.src = productObj.imageURLMain
    }
    elImgTag1.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
    elImgTag1.setAttribute('role','img')
    elImgTag1.setAttribute('aria-label','Image')
    elImgTag1.setAttribute('alt',productObj.nameMain.toLocaleLowerCase())

    var productLink = document.createElement('a');

    
    if(productObj.url.indexOf('undefined') == -1){
        productLink.href = productObj.url;
    }
    productLink.appendChild(elImgTag1);
    productLink.setAttribute('otherImageList',productObj["otherImageList"])
    productLink.setAttribute('imageURL',productObj["imageURLMain"])
    add_swipe(productLink)
    
    

    elImgMainImg.appendChild(productLink);
    elImgMainImg.addEventListener("click", function () {
        var producttype=productObj.Field6;
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id',producttype));
    });

    elImgGalleryListBlock.innerHTML = "";

    if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
        var otimg=0
        productObj.otherImageList.forEach(function (otherImgURL) {
            
            if(productObj.otherImgURL.indexOf('undefined') == -1){
                var elOtherImgTag = INC.methods.generateHTMLTags('img', { src: otherImgURL });
                if(onloadpdp == true){
                    elOtherImgTag.src = otherImgURL
                }
            }else{
                var elOtherImgTag = document.createElement('img')
            }
            elOtherImgTag.setAttribute('alt',productObj.name)
            elOtherImgTag.setAttribute('role','img')
            elOtherImgTag.setAttribute('aria-label','Image')
            elOtherImgTag.setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );

            var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

            elImgGalleryListItemImg.appendChild(elOtherImgTag);
            elImgGalleryListItemBlock.setAttribute('index',otimg)
            elImgGalleryListItemBlock.addEventListener("click", function () {
                Array.prototype.forEach.call(productBlock.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("active");
                });

                elImgGalleryListItemBlock.classList.add("active");

                elImgMainImg.querySelector('img').src = otherImgURL;
                elImgMainImg.querySelector('img').setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );
                var activedots=elImgGalleryListItemBlock
                if(activedots != null){
                    INC.config.inc_slideIndex = +activedots.getAttribute('index') + 1
                }
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if(otimg == 0){
                elImgGalleryListItemBlock.classList.add('active')
            }
            otimg++;
            if(productObj.otherImageList.length > 5){
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
        });

        // elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")).click();
    }

    elTitleBlock.addEventListener("click", function () {
        var producttype=productObj.Field6;
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'),producttype);
    });

    var pTitleDiv = document.createElement('div');
    pTitleDiv.innerText = productObj.nameMain;

    
    var field1 = productObj.Filed3;
    INC.methods.get_product_ratings(field1,elratingsBlock, "modal");
    var pLink = document.createElement('a');
    // pLink.href = productObj.url;
    if(productObj.url.indexOf('undefined') == -1){
        pLink.href = productObj.url;
    }
    pLink.setAttribute('style','text-transform: unset;')
    pLink.setAttribute('title',productObj.nameMain)
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);
    
    if(productObj.description != ""){
        elProductDescriptionText.innerHTML = "Product Details";
        elProductDescriptionText.classList.add('desc_avail')
        elMaindescription.classList.add('desc_avail')
        
        if(window.innerWidth < 820){
            elMaindescription.innerHTML = productObj.description;
        }else{
            elMaindescription.innerHTML = productObj.description;
        }
        


        var short_desc=productObj.description;
        var deschtml =document.createElement('div')
        deschtml.innerHTML=short_desc;
        
        var desctext =""
        var descrtotext=""
        if(deschtml != null){
            var desctext = deschtml.innerText.trim().split('\n')[0]
        }
        var newdescription = ""
        if(deschtml.innerText.length > 110) {
            var mainheaddesc=""
            if(deschtml.querySelector('h2') != null){
                var remh2=deschtml.querySelector('h2')
                remh2.parentNode.removeChild(remh2)
            }
            if(deschtml.querySelector('#product_long_description') != null){
                var mainheaddesc = ""
                if(deschtml.querySelector('#product_long_description').childNodes[0] != undefined){
                    mainheaddesc = deschtml.querySelector('#product_long_description').childNodes[0].innerText
                }
                
                if(mainheaddesc != undefined && mainheaddesc != ""){
                    var remspan2=deschtml.querySelector('#product_long_description').childNodes[0]
                    remspan2.parentNode.removeChild(remspan2)
                }else{
                    mainheaddesc = ""
                }
                
            }
            if(mainheaddesc != ""){
                newdescription = "<span style='font-weight:bold;line-height: 24px;'>" + mainheaddesc + "</span><br>" + deschtml.innerText.trim().substring(0,220) +"<span style='margin-left: -1px;'>...</span>" ;
            }else{
                newdescription =  deschtml.innerText.trim().substring(0,220) +"<span style='margin-left: -1px;'>...</span>" ;
            }
            
        }else{
            newdescription = deschtml.innerText
        }
        elshortdesc.innerHTML = newdescription
        if(elInfoText.querySelector('h3') != null){
            elInfoText.querySelector('h3').style.display="none"
        }
        var red_m = document.createElement('a')
        red_m.classList.add('inc_readMore')
        red_m.innerHTML = "View product details" 
        red_m.setAttribute('style','text-decoration: underline;')
        red_m.setAttribute('onClick','read_more_inc(this)')
       
        
        if(productObj.description.length > 110){
            elshortdesc.parentNode.appendChild(red_m)
        }
        
        // var close_read_more = document.createElement('div');
        // close_read_more.classList.add('close_read_more');
        // elFullDesctext.parentNode.appendChild(close_read_more)

        // close_read_more.addEventListener('click',function(e){
            
        // });
    }
    
    var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
    // var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();
    var totalsaveprc =  get_discount_price(productObj.regularPriceMain,productObj.activePriceMain)
    var totalsaveper =  get_discount_price_percentage(productObj.regularPriceMain, productObj.activePriceMain)

    elPriceRegularText.innerText = "";
    
    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
        elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
        elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        elPriceRegularText.innerHTML = INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + 
        formatter.format(regularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() 
        elworthPrice.innerHTML = "You save: "+formatter.format(totalsaveprc)+" ("+(totalsaveper)+"%)";
    }else{
        elworthPrice.innerHTML =""
        elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
    }
//
    

    if (productObj.promotionalMessage != null && productObj.promotionalMessage != "" && productObj.promotionalMessage != "Click & Collect") {
        if (productObj.promotionalMessage.indexOf('|') >= 0) {
            // elofferBlock.classList.add('active');
            var Promos = productObj.promotionalMessage.split('|')[0];
        } else {
            var Promos = productObj.promotionalMessage
        }

        var promo_div = document.createElement('div')
        promo_div.classList.add('promo_div_block')
        promo_div.innerText = Promos

        if (black_code_promo.indexOf(productObj.mainId) >= 0) {
            elproductOfferHeaderBlock.classList.add('black_promo');
        } else if (Promos == "Clearance") {
            elproductOfferHeaderBlock.parentNode.classList.add('yellow_promo');
        } else if (Promos == "New Lower Price" || Promos == "New" || Promos == "Introductory Offer") {
            elproductOfferHeaderBlock.parentNode.classList.add('green_promo');
        } else if (blue_code_promo.indexOf(productObj.mainId) >= 0) {
            elproductOfferHeaderBlock.parentNode.classList.add('blue_promo');

        } else {
            elproductOfferHeaderBlock.parentNode.classList.add('red_promo');
        }
        
        
        if(productObj.promotionalMessage.split('|')[1] != undefined){
            elproductOfferHeaderBlock.appendChild(promo_div)
            productBlock.classList.add('pipeline_promo')
            var promo_div1 = document.createElement('div')
            promo_div1.classList.add('promo_div_block')
            promo_div1.innerText = productObj.promotionalMessage.split('|')[1]
    
            if (black_code_promo.indexOf(productObj.mainId) >= 0) {
                elOfferTextBlock.classList.add('black_promo');
            } else if (Promos == "Clearance") {
                elOfferTextBlock.parentNode.classList.add('yellow_promo');
            } else if (Promos == "New Lower Price" || Promos == "New" || Promos == "Introductory Offer") {
                elOfferTextBlock.parentNode.classList.add('green_promo');
            } else if (blue_code_promo.indexOf(productObj.mainId) >= 0) {
                elOfferTextBlock.parentNode.classList.add('blue_promo');
            } else {
                elOfferTextBlock.parentNode.classList.add('red_promo');
            }
            elOfferTextBlock.appendChild(promo_div1)
        }else{
            if(productObj.promotionalMessage.split('|')[0].indexOf('Minimum') >= 0 || productObj.promotionalMessage.split('|')[0].indexOf('minimum') >= 0){
                elOfferTextBlock.appendChild(promo_div)
            }else{
                elproductOfferHeaderBlock.appendChild(promo_div)
            }
        }

    } else {
        elofferBlock.classList.add('Nopromo');
    }

    
    var qty_title=document.createElement('label')
    qty_title.innerText = INC.config.qtyText
    elQtyBlock.appendChild(qty_title);
    //elQtyBlock.parentNode.insertBefore(qty_title, elQtyBlock);


    var elQtyInput = this.generateHTMLTags('input');
   // elQtyInput.setAttribute("readonly", "");s
    elQtyInput.setAttribute('type', 'number');
    elQtyInput.setAttribute('min', 1);
    elQtyInput.setAttribute('max', 99);
    elQtyInput.setAttribute('maxlength', 2);
    elQtyInput.value = 1;
    elQtyInput.setAttribute('old_qty', '1');
    elQtyInput.setAttribute('pattern', '[0-9]');
    elQtyInput.setAttribute("onkeydown", "if(event.key==='.' || event.key==='-'){event.preventDefault();}");
    elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==2) return false;');
    elQtyInput.setAttribute("oninput", "validity.valid||(value='');");

    

    if (productObj.promotionalMessage != null) {
        if (productObj.promotionalMessage.indexOf('Minimum order') >= 0) {
            var min_q = productObj.promotionalMessage.match(/(\d+)/)[0];

            elQtyInput.setAttribute('type', 'number');
            elQtyInput.setAttribute('min', min_q);
            elQtyInput.setAttribute('value', min_q);
            elQtyInput.value = min_q;
            elQtyInput.setAttribute('old_qty', min_q);
            // elQtyInput.setAttribute('maxlength', 2);
            elQtyDownBlock.style.pointerEvents = "none";

        }
    }

    elQtyBlock.addEventListener("click", function () {
        if (elQtyInput.value == undefined || elQtyInput.value == "0" || elQtyInput.value == "" || elQtyInput.value < 0) {
            elQtyInput.value = 1;
        }
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function(el) {
            el.classList.remove("active");
        });
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function(attSizeListBlock) {
            attSizeListBlock.classList.remove("active");
        });
        elPackOfListBlock.classList.toggle("active");
    });

    elQtyBlock.addEventListener("change", function() {
        if (elQtyInput.value == undefined || elQtyInput.value == "0" || elQtyInput.value == "" || elQtyInput.value < 0) {
            elQtyInput.value = 1;
        }

        elPackOfListBlock.classList.remove("active");
        setTimeout(function() {
            if (productObj.promotionalMessage != null) {
                if (productObj.promotionalMessage.indexOf('Minimum order') >= 0) {
                    var min_q = productObj.promotionalMessage.match(/(\d+)/)[0];
                    if (elQtyInput.value.length == 0) elQtyInput.value = min_q;
                    if (elQtyInput.value == 0) elQtyInput.value = min_q;
                    if (elQtyInput.value > 99) elQtyInput.value = 99;
                }
            } else {
                if (elQtyInput.value.length == 0) elQtyInput.value = 1;
                if (elQtyInput.value == 0) elQtyInput.value = 1;
                if (elQtyInput.value > 99) elQtyInput.value = 99;
            }

            var productModuleBlock = productBlock.parentNode.parentNode;

            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var main_id = productBlock.getAttribute('data-main_id');
            if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == "UPDATE") {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id);
            }
        }, 50);


    });


    elQtyInput.addEventListener("keydown", function (e) {
        
        elPackOfListBlock.classList.remove("active");
        setTimeout(function() {
            if (productObj.promotionalMessage != null) {
                if (productObj.promotionalMessage.indexOf('Minimum order') >= 0) {
                    var min_q = productObj.promotionalMessage.match(/(\d+)/)[0];
                    if (elQtyInput.value.length == 0) elQtyInput.value = min_q;
                    if (elQtyInput.value == 0) elQtyInput.value = min_q;
                    if (elQtyInput.value > 99) elQtyInput.value = 99;
                }
            }else if(productObj.promotionalMessage != undefined){
                if (elQtyInput.value.length == 0 ) elQtyInput.value = 1;
                if (elQtyInput.value == 0) elQtyInput.value = 1;
                if (elQtyInput.value > 99) elQtyInput.value = 99;
            }

            

            var productModuleBlock = productBlock.parentNode.parentNode;

            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var main_id = productBlock.getAttribute('data-main_id');
            if(elQtyInput.value == ""){
                qty = 1
            }else if(elQtyInput.value.indexOf('.') >= 0){
                qty = elQtyInput.value.replace('.','')
            }
            if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == "UPDATE") {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id);
            }
        }, 50);

    });


    var elPackOfArrray = [];
    var qty_c = 99
    var product_desc_qty = productBlock.querySelector('.inc_product_desc_qty_block')
    var optionqtyblock = document.createElement('div')
    optionqtyblock.classList.add('optionqtyblock')
    optionqtyblock.setAttribute('style','display: flex;position: relative;width: auto;height: auto;justify-content: center;align-items: center;margin-right: 20px;')
    var selectoptionel = document.createElement('select')
    selectoptionel.classList.add('qty_select_tag')
    selectoptionel.setAttribute('onchange','quantity_dropdown_change(this)')
    selectoptionel.setAttribute('id','select_qty_inc')
    optionqtyblock.appendChild(selectoptionel)
    product_desc_qty.style.display = "block";
    selectoptionel.setAttribute('style','width: 50px;height: 15px;')
    // product_desc_qty.parentNode.insertBefore(optionqtyblock,product_desc_qty)
    // for (var i = 0; i < qty_c; i++) elPackOfArrray.push(i);
    // elPackOfArrray.forEach(function(i) {
    //     var option_create = document.createElement('option')
    //     option_create.setAttribute('value',i + 1)
    //     option_create.textContent = i + 1
    //     selectoptionel.appendChild(option_create);
    // });
    elQtyInputText.appendChild(elQtyInput);

    elQtyDownBlock.addEventListener('click', function () {

        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput.value);
        var main_id = productBlock.getAttribute('data-main_id');
        if (elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {
            INC.methods.updateBundleCart({
                sku: id,
                qty: qty
            }, "add", main_id);
        }
    });

    elQtyUpBlock.addEventListener('click', function () {

        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        elQtyInput.value = (parseInt(elQtyInput.value) + 1 > 99) ? 99 : parseInt(elQtyInput.value) + 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput.value);
        var main_id = productBlock.getAttribute('data-main_id');
        if (elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {
            INC.methods.updateBundleCart({
                sku: id,
                qty: qty
            }, "add", main_id);
        }
    });
    findObj = new INC.classes.FindObj({ mainId: productObj.mainId });

    if(INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length == 0 && INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length == 0){
        elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "Overview";
    }else{
        if(INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length > 0){
            if(INC.dataStore.methods().getProductopt0Obj(findObj).att0Array[0] != undefined){
                elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = INC.config.ColorSizeText;
            }else{
                elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = INC.config.ColorSizeText;
            }
        }else if(INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length > 0) {
            elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = INC.config.ColorSizeText;
        }
    }
    
    var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

    var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);

    var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
    
    var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

    var product4Obj = INC.dataStore.methods().getProductopt4Obj(findObj);

    
    if(productColorsObj.colorArray.length > 0){
        eldescblock.classList.add('promo_attr_avail')
        elAttColorListBlock.innerHTML = "";
        var one_attr_flag=false
        if(productColorsObj["colorArray"].length == 1){
            one_attr_flag = true
        }
        var colrcount=0;
        if (productColorsObj["colorArray"].length > 0) {
            productBlock.classList.add('inc_variant_new'+productColorsObj["colorArray"].length)
            if(productColorsObj["colorArray"][0].code != "Color"){
                var select_option_inc_block = generate_html_tag('div','select_option_inc_block')
                var select_option_inc_title = generate_html_tag('div','select_option_inc_title')
               // select_option_inc_title.innerText = ""+productColorsObj["colorArray"][0].code+":"
                select_option_inc_block.appendChild(select_option_inc_title)
                var selectvariant = generate_html_tag('select','inc_variant_tag')
                select_option_inc_block.appendChild(selectvariant)
                selectvariant.setAttribute('id','variant_inc_avail')
                selectvariant.setAttribute('onchange','inc_onchange_color_variant(this)')
                elAtt3Block.parentNode.insertBefore(select_option_inc_block,elAtt3Block)
                var variantoption1 = generate_html_tag('option','variantoption')
                // variantoption1.innerText = "Select your option";
                variantoption1.innerText = "Please select: " + productColorsObj["colorArray"][0].code;
                variantoption1.setAttribute('disabled','disabled')
                variantoption1.setAttribute('selected','selected')
                variantoption1.setAttribute('data-size', "");
                variantoption1.setAttribute("datasize", "");
                variantoption1.setAttribute('data-option', "");
                selectvariant.appendChild(variantoption1)
                // elAtt3Block.parentNode.insertBefore(selectvariant,elAtt3Block)
                productColorsObj["colorArray"].forEach(function (sizeObj) {
                    var variantoption = generate_html_tag('option','variantoption')
                    variantoption.innerText = sizeObj["text"];
                    variantoption.setAttribute('data-size', sizeObj["text"]);
                    variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    variantoption.setAttribute('data-option', "1");
                    variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                    variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                    selectvariant.appendChild(variantoption)
                    
                });
            }
            productColorsObj["colorArray"].forEach(function (colorObj) {
                elAttColorBlock.style.display="none"
                colrcount++
                elAttColorBlock.classList.add("active");
                elAttColorTitleText.innerText = "Colour:";
                var attColorBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemBlock"] })
                var attColorImgBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgBlock"] });
                var attColorImg = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImg"] });
                var attColorTextBlock = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemTextBlock"] });
                var attColorText = INC.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemText"] });
    
                attColorImgBlock.addEventListener("click", function () {
                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                    var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                    if(atteditbutton != null){
                        // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                        atteditbutton.innerText = INC.config.EditText
                    }
                    elAttColorBlock.classList.remove('show_dropdown')
                    
                    if(productBlock.querySelector('.close_read_more') != null){
                        productBlock.querySelector('.close_read_more').click()
                    }
                    var colorText = this.getAttribute("data-color")
                    elAttBlock.setAttribute("data-color", colorText);

                    if(atteditbutton != null){
                        // atteditbutton.parentNode.classList.add('active')
                    }
                    
                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')

                    for(cl=0;cl<all_color_list_item_img.length;cl++){
                        all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                    }
                    
                    this.parentNode.classList.add("active");

                    elAttColorTitleTextSelected.innerText = colorText;
                    
                    //third
                    var sel_size = elAttBlock.getAttribute('data-size')
                    findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: colorText });
                    var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);
                    if(product0Obj.att0Array.length > 0){
                        eldescblock.classList.add('promo_attr_avail')
                        if(product0Obj["att0Array"][0].code != "Color"){
                            elAttBlock.classList.add('config_avail')
                            elAttBlock.classList.add('elipsis_inc')
                            // elp_var_title.innerHTML = INC.config.ColorSizeText
                            findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
                            var selcop = elAtt0ListBlock.parentNode.parentNode.querySelector('.select_option_inc_block')
                            if(selcop != null){
                                selcop.parentNode.removeChild(selcop)
                            }
                            elAtt0ListBlock.innerHTML = "";
                            var product0Obj = product0Obj;
                            var productSizeText = "";
                            var select_option_inc_block = generate_html_tag('div','select_option_inc_block')
                            var select_option_inc_title = generate_html_tag('div','select_option_inc_title')
                           // select_option_inc_title.innerText = "Body Size:"
                            select_option_inc_block.appendChild(select_option_inc_title)
                            var selectvariant = generate_html_tag('select','inc_variant_tag')
                            select_option_inc_block.appendChild(selectvariant)
                            selectvariant.setAttribute('id','variant_inc_avail')
                            selectvariant.setAttribute('onchange','inc_onchange_variant(this)')
                            elAtt4Block.parentNode.insertBefore(select_option_inc_block,elAtt4Block)
                            var variantoption1 = generate_html_tag('option','variantoption')
                            variantoption1.innerText = "Select your option";
                            variantoption1.setAttribute('data-size', "");
                            variantoption1.setAttribute("datasize", "");
                            variantoption1.setAttribute('data-option', "");
                            selectvariant.appendChild(variantoption1)
                            product0Obj["att0Array"].forEach(function (sizeObj) {
                                var variantoption = generate_html_tag('option','variantoption')
                                variantoption.innerText = sizeObj["text"];
                                variantoption.setAttribute('data-size', sizeObj["text"]);
                                variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                variantoption.setAttribute('data-option', "1");
                                variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                                variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                                if(elAtt0Block.parentNode.getAttribute('data-zero') != null){
                                    if(sizeObj["text"].toLocaleLowerCase() == elAtt0Block.parentNode.getAttribute('data-zero').toLocaleLowerCase()){
                                        variantoption.selected = 'selected'
                                    }
                                }
                                selectvariant.appendChild(variantoption)
                                
                            });
                            if (product0Obj["att0Array"].length > 0) {
                                elAtt0TitleText.innerText = product0Obj["att0Array"][0].code;
                                elAtt0Block.classList.add("active");
                                var sizecount = 0
                                product0Obj["att0Array"].forEach(function (sizeObj) {
                                    sizecount++
                                    var attSizeBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                                    var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                                    var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                                    attSizeImgBlock0.addEventListener("click", function (e) {
                                        if(elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
                                            var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                                            var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                        }else{
                                            var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                            var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                        }
                                        
                                        var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                        if(atteditbutton != null){
                                            // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                            atteditbutton.innerText = INC.config.EditText
                                        }
                                        elAtt0Block.classList.remove('show_dropdown')
                                        
                                        if(productBlock.querySelector('.close_read_more') != null){
                                            productBlock.querySelector('.close_read_more').click()
                                        }
                                        var attr_text = this.getAttribute("data-size");
                
                                        elAttBlock.setAttribute("data-zero", attr_text);
                
                                        if(atteditbutton != null){
                                            // atteditbutton.parentNode.classList.add('active')
                                        }
                                        
                                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')
                
                                        for(cl=0;cl<all_color_list_item_img.length;cl++){
                                            all_color_list_item_img[cl].classList.remove("active");
                                        }
                                        
                                        this.classList.add("active");
                                        
                                        elAtt0TitleText.innerText = attr_text;
                
                                        var sel_size = elAttBlock.getAttribute('data-size')
                                        findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                                        findObj.sizeText=sel_size
                                        
                
                                        INC.methods.updateProductBlock(productBlock, findObj, blockType);
                
                                        var productModuleBlock = productBlock.parentNode.parentNode;
                
                                        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
                
                                        INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                        var zero_text = elAttBlock.getAttribute('data-zero');
                                        var size_text = elAttBlock.getAttribute('data-size');
                                        var color_text = elAttBlock.getAttribute('data-color');
                                        var third_text = elAttBlock.getAttribute('data-third');
                                        
                                        var sel_attr_text=""
                                        if(color_text != undefined){
                                            sel_attr_text = color_text
                                        }
                                        if(zero_text != undefined){
                                            if(sel_attr_text == ""){
                                                sel_attr_text = zero_text
                                            }else{
                                                sel_attr_text = sel_attr_text + " / " + zero_text
                                            }
                                        }
                                        if(size_text != undefined){
                                            sel_attr_text = sel_attr_text + " / " + size_text
                                        }
                                        if(third_text != undefined){
                                            sel_attr_text = sel_attr_text + " / " + third_text
                                        }
                                        var pr_mod_elm = productBlock.parentNode.parentNode
                                        if(pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
                                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
                                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                                        }
                                        
                                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText=""
                                        
                                    });
                                    
                                    attSizeImgBlock0.classList.add('avail')
                                    if (productSizeText.length == 0) {
                                        productSizeText = sizeObj["text"];
                                    }
                                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                                    var chckType = sizeObj["text"];
                                    
                                    reg.test(chckType);
                                    
                                    
                                    attSizeImg0.innerText = sizeObj["text"];
                                    attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                                    attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                    attSizeImgBlock0.setAttribute('data-option', "1");
                                    if(product0Obj["att0Array"][0].code == "Size"){
                                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                                    }else if(product0Obj["att0Array"][0].code == "letter"){
                                        attSizeImgBlock0.setAttribute('title', "Letter" + " "+ sizeObj["text"].toUpperCase());
                                    } else if(product0Obj["att0Array"][0].code == "choose"){
                                        attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                                    }else{
                                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                                    }
                                        
                                    attSizeImgBlock0.appendChild(attSizeImg0);
                                    elAtt0ListBlock.appendChild(attSizeImgBlock0);
                                    if(elAtt0Block.parentNode.getAttribute('data-zero') != null){
                                        if(attSizeImgBlock0.getAttribute('data-size').toLocaleLowerCase() == elAtt0Block.parentNode.getAttribute('data-zero').toLocaleLowerCase()){
                                            attSizeImgBlock0.classList.add('active')
                                        }
                                    }
                                });
                                
                            }
                        }
                    }
                    
                    //end 

                    INC.methods.updateProductBlock(productBlock, findObj, blockType);

                    var productModuleBlock = productBlock.parentNode.parentNode;

                    var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                    INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                    var zero_text = elAttBlock.getAttribute('data-zero');
                    var size_text = elAttBlock.getAttribute('data-size');
                    var color_text = elAttBlock.getAttribute('data-color');
                    var third_text = elAttBlock.getAttribute('data-third');
                    
                    var selcolor=color_text.toLowerCase()
                    var sel_color = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+selcolor+'"]')
                    if(sel_color != null){
                        var all_color_list_item_imgs = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_color_list_item_img')

                        for(cls=0;cls<all_color_list_item_imgs.length;cls++){
                            all_color_list_item_imgs[cls].parentNode.parentNode.classList.remove("active");
                        }
                        sel_color.classList.add('active')
                    }
                    
                    var sel_attr_text=""
                    if(color_text != undefined){
                        sel_attr_text = color_text
                    }
                    if(zero_text != undefined){
                        if(sel_attr_text == ""){
                            sel_attr_text = zero_text
                        }else{
                            sel_attr_text = sel_attr_text + " / " + zero_text
                        }
                    }
                    if(size_text != undefined){
                        sel_attr_text = sel_attr_text + " / " + size_text
                    }
                    if(third_text != undefined){
                        sel_attr_text = sel_attr_text + " / " + third_text
                    }
                    var pr_mod_elm = productBlock.parentNode.parentNode
                    if(pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
                        if(this.querySelector('img') != null){
                            var attr_src = this.querySelector('img').src
                            elAttColorTitleTextSelected.parentNode.querySelector('img').src=attr_src
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').parentNode.querySelector('img').src = attr_src
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').parentNode.querySelector('img').style.display="block"
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                        }
                    }
                    
                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText=""
                });
    
                
    
                attColorImg.style.backgroundColor = colorObj["colorCode"];
    
                
                // if (colorObj["imgSrc"].length > 0) {
                //     if(colorObj["colorCode"] == ""){
                //         //{ src: colorObj["imgSrc"] }
                //         var colorImg = INC.methods.generateHTMLTags('img');
                //         colorImg.setAttribute('alt', colorObj["text"])
                //         // colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                //         colorImg.setAttribute('src',colorObj["imgSrc"])
                //         if(productObj.categoryName != ""){
                //             colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                //         }
                //         //
                //         attColorImg.appendChild(colorImg);
                //     }
                // }
    
                var colorTitle = INC.methods.generateHTMLTags('a');
                colorTitle.innerText = colorObj["text"]
                colorTitle.title = colorObj["text"].toUpperCase();
                colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                attColorImg.appendChild(colorTitle);
                attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                attColorImgBlock.setAttribute('data-option', "0");
               
                
                attColorImgBlock.appendChild(attColorImg);
                attColorBlock.appendChild(attColorImgBlock);
                elAttColorListBlock.appendChild(attColorBlock);
                var prod_id = productBlock.getAttribute('data-main_id');
                if(one_attr_flag == true){
                    setTimeout(function(){
                        if(INC.methods.getProductIdFromWebPage() == prod_id){  
                            attColorImgBlock.click()
                        }
                    },0)
                }
            });
        }
    }
    if(product0Obj.att0Array.length > 0){
        eldescblock.classList.add('promo_attr_avail')
        productBlock.classList.add('inc_variant_new'+product0Obj.att0Array.length)
        if(product0Obj["att0Array"][0].code != "Color"){
            elAttBlock.classList.add('config_avail')
            elAttBlock.classList.add('elipsis_inc')
            // elp_var_title.innerHTML = INC.config.ColorSizeText
            findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
            elAtt0ListBlock.innerHTML = "";
            var product0Obj = product0Obj;
            var productSizeText = "";
            var select_option_inc_block = generate_html_tag('div','select_option_inc_block')
            var select_option_inc_title = generate_html_tag('div','select_option_inc_title')
          //  select_option_inc_title.innerText = "Body Size:"
            select_option_inc_block.appendChild(select_option_inc_title)
            var selectvariant = generate_html_tag('select','inc_variant_tag')
            select_option_inc_block.appendChild(selectvariant)
            selectvariant.setAttribute('id','variant_inc_avail')
            selectvariant.setAttribute('onchange','inc_onchange_variant(this)')
            elAtt4Block.parentNode.insertBefore(select_option_inc_block,elAtt4Block)
            var variantoption1 = generate_html_tag('option','variantoption')
            variantoption1.innerText = "Select your option";
            variantoption1.setAttribute('data-size', "");
            variantoption1.setAttribute("datasize", "");
            variantoption1.setAttribute('data-option', "");
            selectvariant.appendChild(variantoption1)
            product0Obj["att0Array"].forEach(function (sizeObj) {
                var variantoption = generate_html_tag('option','variantoption')
                variantoption.innerText = sizeObj["text"];
                variantoption.setAttribute('data-size', sizeObj["text"]);
                variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                variantoption.setAttribute('data-option', "1");
                variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                if(product0Obj["att0Array"].length == 1){
                    variantoption.selected = 'selected'
                }
                selectvariant.appendChild(variantoption)
                
            });
            if (product0Obj["att0Array"].length > 0) {
                elAtt0TitleText.innerText = product0Obj["att0Array"][0].code;
                elAtt0Block.classList.add("active");
                var sizecount = 0
                product0Obj["att0Array"].forEach(function (sizeObj) {
                    sizecount++
                    var attSizeBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                    var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                    var attSizeImg0 = INC.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                    attSizeImgBlock0.addEventListener("click", function (e) {
                        if(elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
                            var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                            var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                        }else{
                            var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                            var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                        }
                        
                        var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                        if(atteditbutton != null){
                            // atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                            atteditbutton.innerText = INC.config.EditText
                        }
                        elAtt0Block.classList.remove('show_dropdown')
                        
                        if(productBlock.querySelector('.close_read_more') != null){
                            productBlock.querySelector('.close_read_more').click()
                        }
                        var attr_text = this.getAttribute("data-size");

                        elAttBlock.setAttribute("data-zero", attr_text);

                        if(atteditbutton != null){
                            // atteditbutton.parentNode.classList.add('active')
                        }
                        
                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                        for(cl=0;cl<all_color_list_item_img.length;cl++){
                            all_color_list_item_img[cl].classList.remove("active");
                        }
                        
                        this.classList.add("active");
                        
                        elAtt0TitleText.innerText = attr_text;

                        var sel_size = elAttBlock.getAttribute('data-size')
                        findObj = new INC.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                        findObj.sizeText=sel_size
                        

                        INC.methods.updateProductBlock(productBlock, findObj, blockType);

                        var productModuleBlock = productBlock.parentNode.parentNode;

                        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                        INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                        var zero_text = elAttBlock.getAttribute('data-zero');
                        var size_text = elAttBlock.getAttribute('data-size');
                        var color_text = elAttBlock.getAttribute('data-color');
                        var third_text = elAttBlock.getAttribute('data-third');
                        
                        var sel_attr_text=""
                        if(color_text != undefined){
                            sel_attr_text = color_text
                        }
                        if(zero_text != undefined){
                            if(sel_attr_text == ""){
                                sel_attr_text = zero_text
                            }else{
                                sel_attr_text = sel_attr_text + " / " + zero_text
                            }
                        }
                        if(size_text != undefined){
                            sel_attr_text = sel_attr_text + " / " + size_text
                        }
                        if(third_text != undefined){
                            sel_attr_text = sel_attr_text + " / " + third_text
                        }
                        var pr_mod_elm = productBlock.parentNode.parentNode
                        if(pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                        }
                        
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText=""
                        
                    });
                    
                    attSizeImgBlock0.classList.add('avail')
                    if (productSizeText.length == 0) {
                        productSizeText = sizeObj["text"];
                    }
                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                    var chckType = sizeObj["text"];
                    
                    reg.test(chckType);
                    
                    
                    attSizeImg0.innerText = sizeObj["text"];
                    attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock0.setAttribute('data-option', "1");
                    if(product0Obj["att0Array"][0].code == "Size"){
                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                    }else if(product0Obj["att0Array"][0].code == "letter"){
                        attSizeImgBlock0.setAttribute('title', "Letter" + " "+ sizeObj["text"].toUpperCase());
                    } else if(product0Obj["att0Array"][0].code == "choose"){
                        attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                    }else{
                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                    }
                        
                    attSizeImgBlock0.appendChild(attSizeImg0);
                    elAtt0ListBlock.appendChild(attSizeImgBlock0);
                    
                });
                
            }
        }
    }
    
    if (productColorsObj["colorArray"].length == 0 && product0Obj.att0Array.length == 0) {
        // elAttSizeTitleText.innerText = INC.config.ViewDetailsText;
        elAttBlock.classList.add('attributes_not_avail')
    }else if (productColorsObj["colorArray"].length > 0) {
        elAttColorTitleTextSelected.innerText = 'Choose colour first';
        elcolortitleblock.addEventListener('click',function(){
            this.parentNode.classList.toggle('show_dropdown')
        })
        elAttBlock.classList.add('attributes_avail')
    }else if (product0Obj.att0Array.length > 0) {
        elAtt0TitleText.innerText = 'Choose size first';
        elsizetitleblock.addEventListener('click',function(){
            this.parentNode.classList.toggle('show_dropdown')
        })
        elAttBlock.classList.add('attributes_avail')
    }
    // elGallerylefttArrow.setAttribute('title','Scroll left')
    // elGalleryRightArrow.setAttribute('title','Scroll right')

    elGalleryRightArrow.addEventListener("click", function (e) {
        var prod_card=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        if(prod_card.classList.contains('inc_product_module_block') == false){
            prod_card = prod_card.parentNode.parentNode
        }
        var pr_id=prod_card.getAttribute('data-main_id')
        slideTo(pr_id,0,prod_card,"right","arrow")
    });
    elGallerylefttArrow.addEventListener("click", function (e) {
        var prod_card=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        if(prod_card.classList.contains('inc_product_module_block') == false){
            prod_card = prod_card.parentNode.parentNode
        }
        var pr_id=prod_card.getAttribute('data-main_id')
        slideTo(pr_id,0,prod_card,"left","arrow")
    });
    
    if(window.innerWidth > 819){
        if ((productObj.otherImageList == null) || productObj.otherImageList.length < 2 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
            elGalleryRightArrow.style.display="none"
            elGallerylefttArrow.style.display="none"
        }
    }else{
        if ((productObj.otherImageList == null) || productObj.otherImageList.length < 1 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
            elGalleryRightArrow.style.display="none"
            elGallerylefttArrow.style.display="none"
        }
    }
    switch (blockType) {
        case "pdp":
            elAddText.innerText = "Add";
            elAddBlockclickcollect.style.display = "none"
            break;
        case "sidebar":
        case "am":
            elAddText.innerText = "Add for Delivery";
            elAddTextclickcollect.innerText = "Click & Collect";
            break;
    }

    elAddBlock.addEventListener("click", function () {
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        var productModuleBlock = productBlock.parentNode.parentNode;
        var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
        if(document.querySelector('.sidebar_outer.sidebar_outer_active') == null && document.querySelector('.inc_product_modal_block.active') == null){
            document.querySelector('html').classList.remove('inc_overlay');
        }
        if(document.querySelector('.inc_product_modal_block.active') == null){
            document.querySelector('html').classList.remove('inc_popup_open')
        }
        if(document.querySelector('.inc_sidebar_modal_block.active') != null && document.querySelector('.inc_product_modal_block.active') == null){
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
        if(INC.config.pageType != "cartPage" && INC.config.pageType != "ticket"){
            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
        }
        // var error_element = document.createElement('a')
        if(productModuleBlock.classList.contains('configurable') == true){
            if(flag_check == 1){
                setTimeout(function(){
                    if(document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null){
                        var docpdpinc = document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_block');
                        if(docpdpinc != null){
                            if(window.innerWidth < 1025 && window.innerWidth > 819){
                                docpdpinc.scrollLeft = 0
                                INC.clientConfig.offset = 0;
                                INC.clientConfig.slidevalue = 0;
                                if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                                    document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                                }
                                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                                    document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                                    document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                                }
                            }
                        }
                        document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')

                    }
                },100)
            }else{
                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText="Please Select option"
                if(productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block') != null){
                    productModuleBlock.querySelector('.inc_product_showcase_block .select_option_inc_block').classList.add('error_inc_message')
                }
                if(productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block') != null){
                    productModuleBlock.querySelector('.inc_product_modal_block .select_option_inc_block').classList.add('error_inc_message')
                }
            }
        
        }else{
            setTimeout(function(){
                if(document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null){
                    document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')
                }
            },100)
        }

        var docpdpinc = document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_block');
        if(docpdpinc != null){
            if(window.innerWidth < 1025 && window.innerWidth > 819){
                docpdpinc.scrollLeft = 0
                INC.clientConfig.offset = 0;
                INC.clientConfig.slidevalue = 0;
                if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                    document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                }
                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                    document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                }
            }
        }
        setTimeout(function(){
            if(document.querySelector('.inc_product_modal_block.active') == null){
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('html').classList.remove('inc_popup_open');
                if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                    document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
                }
            }
            if(document.querySelector('.sidebar_outer.sidebar_outer_active') != null){
                document.querySelector('html').classList.add('inc_overlay');
            }
        },100)
    });

    elAddBlockclickcollect.addEventListener("click", function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var productModuleBlock = productBlock.parentNode.parentNode;
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('html').classList.remove('inc_overlay');
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
        if (INC.config.pageType != "cartPage") {
            showcaseProductBlock.querySelector('.inc_product_desc_add_click_collect_block').click()
        }
        // var error_element = document.createElement('a')
        if (productModuleBlock.querySelector('.img_color_swatch') != null) {
            if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                setTimeout(function() {
                    if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null) {
                        var docpdpinc = document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_block');
                        if(docpdpinc != null){
                            if(window.innerWidth < 1025 && window.innerWidth > 819){
                                docpdpinc.scrollLeft = 0
                                INC.clientConfig.offset = 0;
                                INC.clientConfig.slidevalue = 0;
                                if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                                    document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                                }
                                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                                    document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                                    document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                                }
                            }
                        }
                        document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')
                    }
                }, 100)
            } else {
                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please select option"
            }
        } else {
            setTimeout(function() {
                if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null) {
                    document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')
                }
            }, 100)
        }

    });

    return productBlock;
}
function inc_onchange_variant(elattrblock){
    if(elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
        var elmainblock=elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    }else{
        var elmainblock=elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    }
    if(elmainblock.querySelector('.inc_product_modal_block.active') == null){
        var sel_varel = elmainblock.querySelector('.inc_product_modal_block')
    }else{
        var sel_varel = elmainblock.querySelector('.inc_product_showcase_block')
    }
    var elAttBlock = elattrblock.parentNode.parentNode
    var productBlock = elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode
    var attrImng = elattrblock.options[elattrblock.selectedIndex].getAttribute('imgurlc')
    

    var elAtt0TitleText = elAttBlock.querySelector('.inc_product_desc_att_zero_title_text')
    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
    
    if(productBlock.querySelector('.close_read_more') != null){
        productBlock.querySelector('.close_read_more').click()
    }
    var attr_text = elattrblock.options[elattrblock.selectedIndex].getAttribute("datasize");
    var attr_text_small = elattrblock.options[elattrblock.selectedIndex].getAttribute("datasize");
    
    if(elAttBlock.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="'+attr_text_small+'"]') != null){
        elAttBlock.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="'+attr_text_small+'"]').click()
    }
    if(sel_varel != null){
        var sel_variant = sel_varel.querySelector('.inc_variant_tag')
        if(sel_variant != null){
            var alloptionss = sel_variant.querySelectorAll('option')
            for(j=0;j<alloptionss.length;j++){
                if(alloptionss[j].getAttribute('datasize') == attr_text_small.toLocaleLowerCase()){
                    alloptionss[j].selected = 'selected'
                    break;
                }
            }
        }
    }
}
INC.methods.updateProductBlock = function (productBlock, findObj, blockType, bundleProductListCheck) {
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig[blockType].className;
    var productBlock = productBlock;
    var productModuleBlock = productBlock.parentNode.parentNode;

    //
    var modal_attr_block = productModuleBlock.querySelector('.inc_product_modal_block')
    var zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
    var size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
    var color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
    var third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');
    
    var sel_attr_text=""
    if(color_text != undefined){
        findObj.colorText = color_text
        sel_attr_text = color_text
    }else{
        findObj.colorText = ""
    }
    if(zero_text != undefined){
        findObj.zeroText = zero_text
        if(sel_attr_text == ""){
            sel_attr_text = zero_text
        }else{
            sel_attr_text = sel_attr_text + " / " + zero_text
        }
    }else{
        findObj.zeroText = ""
    }
    if(size_text != undefined){
        findObj.sizeText = size_text
        sel_attr_text = sel_attr_text + " / " + size_text
    }else{
        findObj.sizeText = ""
    }
    
    if(third_text != undefined){
        findObj.thirdText = third_text
        sel_attr_text = sel_attr_text + " / " + third_text
    }else{
        findObj.thirdText = ""
    }
    
    
    

    var productObj = INC.dataStore.methods().getProductByAtt(findObj);
    var previousSKU = "";
    var getSelectorClassName = this.getSelectorClassName;
    
    previousSKU = productBlock.getAttribute('data-sku');
    productBlock.setAttribute('data-id', productObj.id);
    productBlock.setAttribute('data-sku', productObj.sku);
    productBlock.setAttribute('data-main_id', productObj.mainId);
    productBlock.setAttribute('data-bundle_id', productObj.bundleId);

    productModuleBlock.setAttribute('data-id', productObj.id);
    productModuleBlock.setAttribute('data-sku', productObj.sku);
    productModuleBlock.setAttribute('data-main_id', productObj.mainId);
    productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);

    if(document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="'+productObj.mainId+'"]') != null && sel_attr_text != ""){
        var added_sum_prod=document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="'+productObj.mainId+'"]')
        added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').innerText  = productObj.option[0].code + " " + sel_attr_text
        added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_block').setAttribute('title',sel_attr_text)
    }
    if(productModuleBlock.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
        productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
        productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
    }
    
    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elImgBlock = getViewElement("productImgBlock");
    var elInfoText = getViewElement("productInfoText");
    var elImgBlock = getViewElement("productImgBlock");
    var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
    var elTitleBlock = getViewElement("productTitleBlock");
    var elTitleText = getViewElement("productTitleText");
    var elMTitleBlock = getViewElement("productMaufactureTextBlock");
    var elMTitleText = getViewElement("productMaufactureText")
    var elPriceActiveText = getViewElement("productPriceActiveText");
    var elPriceActiveMsg = getViewElement("productPriceActiveTextMsg");
    var elPriceRegularText = getViewElement("productPriceRegularText");
    var elAttBlock = getViewElement("productAttBlock");
    var elAttColorTitleText = getViewElement("productAttColorTitleText");
    var elAttColorTitleTextSelected = getViewElement("productAttColorTitleTextSelected");
    var elAttColorListBlock = getViewElement("productAttColorListBlock");
    var elAttSizeTitleText = getViewElement("productAttSizeTitleText");
    var elAttSizeTitleTextSelected = getViewElement("productAttSizeTitleTextSelected");
    var elPackOfListBlock = getViewElement("productPackOfListBlock");
    var elQtyInputText = getViewElement("productQtyInputText");
    var elQtyDownBlock = getViewElement("productQtyDownBlock");
    var elQtyUpBlock = getViewElement("productQtyUpBlock");
    var elAddBlock = getViewElement("productAddBlock");
    var elAddText = getViewElement("productAddText");
    var elAddImg = getViewElement("productAddImg");
    var elworthPrice = getViewElement("productPriceWorthText");
    var elFullDesctext = getViewElement("productInfoFullDescText");
    var elGalleryRightArrow = getViewElement("productImgGalleryRightBlock");
    var elGallerylefttArrow = getViewElement("productImgGalleryLeftBlock");
    var elAddTextclickcollect = getViewElement("productAddTextclickcollect");
    var elAddBlockclickcollect = getViewElement("productAddBlockclickcollect");
    var elOfferTextBlock = getViewElement("productOfferTextBlock");
    var elofferBlock = getViewElement("productOfferBlock");
    var elproductOfferHeaderBlock = getViewElement("productOfferHeaderBlock");
    var elOfferTextBlock = getViewElement("productOfferTextBlock");
    productBlock.classList.remove('is_click_collect_only')
    productBlock.classList.remove('is_both_avail')
    productBlock.classList.remove('is_delivery_only')
     
    // if (blockType != "pdp") {
    //     elAddBlock.style.display = "flex"
    //     elAddBlockclickcollect.style.display = "flex"
    //     elAddBlock.style.visibility = "visible"
    //     if(blockType == "am"){
    //         elAddBlock.style.visibility = "visible"
    //     }
    //     if (productObj.Field6 == "CollectOnly" && INC.config.storeId != "") {
    //         productBlock.classList.add('is_click_collect_only')
    //         productBlock.classList.add('is_click_collect_only_available')
    //         if(blockType == "am"){
    //             elAddBlock.style.visibility = "hidden"
    //         }else{
    //             elAddBlock.style.display = "none"
    //         }
    //         //elAddBlockclickcollect.style.display = "block"
    //     } else if (productObj.Field6 == "CollectOnly" && INC.config.storeId == "") {
    //         elAddBlockclickcollect.style.display = "none"
    //         if(blockType == "am"){
    //             elAddBlock.style.visibility = "hidden"
    //         }else{
    //             elAddBlock.style.display = "none"
    //         }
    //     } else if (productObj.Field6 == "DeliveryOnly") {
    //         productBlock.classList.add('is_delivery_only')
    //         elAddBlockclickcollect.style.display = "none"
    //     } else if (productObj.Field6 == "Both") {
    //         // productBlock.classList.add('is_click_collect_only')
    //         productBlock.classList.add('is_both_avail')
    //         elAddBlock.style.display = "flex"
            
    //         if(INC.config.pageType == "cartPage"){
    //             if(productObj.ProductType != "simple"){
    //                 elAddBlockclickcollect.style.display = "block"
    //             }else{
    //                 elAddBlockclickcollect.style.display = "flex"
    //             }
    //         }else{
    //             elAddBlockclickcollect.style.display = "flex"
    //         }
    //     } else if (INC.config.storeId == "") {
    //         productBlock.classList.add('is_delivery_only')
    //         elAddBlockclickcollect.style.display = "none"
    //     } else if (productObj.Field6 == "oos") {
    //         // productBlock.classList.add('is_click_collect_only')
    //         productBlock.classList.add('is_both_avail')
    //         elAddBlock.style.display = "flex"
    //         elAddBlockclickcollect.style.display = "flex"
    //     } else {
    //         productBlock.classList.add('is_click_collect_only')
    //     }
    //     // productBlock.classList.add('is_delivery_only')
    // }
    // productBlock.classList.add('is_delivery_only')
    elAddBlockclickcollect.style.display = "none"
    var eladdbtnqtyblock = getViewElement("productQtyAddBtnBlock");
    if(productBlock.parentNode.className.indexOf('inc_product_showcase_block') >= 0){
        if(blockType != "pdp"){
            eladdbtnqtyblock.classList.add('active')
        }
    }else{
        elMTitleText.innerHTML = "<span>Product code:</span>" + productObj.idAdd;
    }
    var prod_modal=productModuleBlock.querySelector('.inc_product_modal_block')
    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));

    elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURL"]);
   
    if(productBlock.parentNode.className.indexOf('inc_product_showcase_block') == -1){
        elImgMainImg.querySelector('a').setAttribute('href', productObj["url"]);
    }
    if(productBlock.classList.contains('inc_product_modal_block') == false){
        if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {

        }else{
            // elImgMainImg.querySelector('a').setAttribute('href', productObj["url"]);
        }
        
    }
    elImgMainImg.querySelector('a').setAttribute('href', productObj["url"]);
    elImgMainImg.querySelector('a').setAttribute('otherImageList',productObj["otherImageList"])
    elImgMainImg.querySelector('a').setAttribute('imageURL',productObj["imageURL"])

    elImgMainImg.querySelectorAll('img')[0].setAttribute('data-mouseover',productObj["otherImageList"])
    elImgMainImg.querySelectorAll('img')[0].setAttribute('data-imageURL',productObj["imageURL"])
    
    var prod_ids = productModuleBlock.getAttribute('data-main_id')
    if(document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="'+prod_ids+'"]') != null){
        var tab_img = document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="'+prod_ids+'"]');
        if(tab_img.querySelector('img') != null){
            tab_img.querySelector('img').src=productObj["imageURL"]
        }
    }

    // elworthPrice.innerText = productObj.reviewsCount

    elImgGalleryListBlock.innerHTML = "";

    if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
        var otimg=0;
        productObj.otherImageList.forEach(function (otherImgURL) {
            // var elOtherImgTag = INC.methods.generateHTMLTags('img', { src: otherImgURL });
            if(productObj.otherImgURL.indexOf('undefined') == -1){
                var elOtherImgTag = INC.methods.generateHTMLTags('img', { src: otherImgURL });
                if(onloadpdp == true){
                    elOtherImgTag.src = otherImgURL
                }
            }else{
                var elOtherImgTag = document.createElement('img')
            }
            elOtherImgTag.setAttribute('alt', productObj.name)
            elOtherImgTag.setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );
            var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

            elImgGalleryListItemImg.appendChild(elOtherImgTag);
            elImgGalleryListItemBlock.setAttribute('index',otimg)
            elImgGalleryListItemBlock.addEventListener("click", function () {

                Array.prototype.forEach.call(productBlock.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("active");
                });

                elImgGalleryListItemBlock.classList.add("active");

                elImgMainImg.querySelector('img').src = otherImgURL;
                elImgMainImg.querySelector('img').setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if(otimg == 0){
                elImgGalleryListItemBlock.classList.add('active')
            }
            otimg++;
            if(productObj.otherImageList.length > 5){
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }

        });

    }

    if(window.innerWidth > 819){
        if ((productObj.otherImageList == null) || productObj.otherImageList.length < 2 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
            elGalleryRightArrow.style.display="none"
            elGallerylefttArrow.style.display="none"
        }
    }else{
        if (productObj.otherImageList == null || productObj.otherImageList.length < 1 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
            elGalleryRightArrow.style.display="none"
            elGallerylefttArrow.style.display="none"
        }
    }

    elTitleText.querySelector('div').innerText = productObj.name
    elTitleText.querySelector('a').setAttribute('href', productObj["url"]);
    if(productBlock.parentNode.className.indexOf('inc_product_showcase_block') == -1){
        elTitleText.querySelector('a').setAttribute('href', productObj["url"]);
    }
    if(productBlock.classList.contains('inc_product_modal_block') == false){
        
        if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {
            elTitleText.setAttribute('style','cursor: default;text-decoration: none;')
        }else{
            // elTitleText.querySelector('a').setAttribute('href', productObj["url"]);
        }
    }
    elTitleText.querySelector('a').setAttribute('title',productObj.name)

    
    elFullDesctext.setAttribute('aria-hidden','true')
    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
    // var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();

    var totalsaveprc =  get_discount_price(productObj.regularPrice,productObj.activePrice)
    var totalsaveper =  get_discount_price_percentage(productObj.regularPrice, productObj.activePrice)

    
    // elPriceActiveMsg.innerText = " + VAT"
    elPriceRegularText.innerText = "";
    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
        elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        elPriceRegularText.innerHTML = INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + 
        formatter.format(regularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
        elworthPrice.innerHTML = "You save: "+formatter.format(totalsaveprc)+" ("+(totalsaveper)+"%)";
    }else{
        elworthPrice.innerHTML = "";
        elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
    }
    if (productBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText == "Added" || productBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText == INC.config.AddedText || productBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productAddText")).innerText == INC.config.AddedText) {
        if (!dataStore.hasOwnProperty('bundleCartProducts')) {
            dataStore['bundleCartProducts'] = {};
            INC.config.bundle_trackingPushed = []
            INC.config.bundle_trackingPushed=[]
            INC.config.bundle_skuPushed=[]
        }

        dataStore["bundleCartProducts"][productObj["sku"]] = dataStore["bundleCartProducts"][previousSKU];
        if (productObj["sku"] != previousSKU) {
            delete dataStore["bundleCartProducts"][previousSKU];
            // var listToDelete=[]
            // INC.config.bundle_trackingPushed.remove_prod_list = function() {
            //     var what, a = arguments, L = a.length, ax;
            //     while (L && this.length) {
            //         what = a[--L];
            //         while ((ax = this.indexOf(what)) !== -1) {
            //             this.splice(ax, 1);
            //         }
            //     }
            //     return this;
            // };
            
            // listToDelete[0] = productObj["mainId"]
            // for (var i = 0; i < INC.config.bundle_tracking.length; i++) {
            //     var obj = INC.config.bundle_tracking[i];
            //     if(obj != undefined){
            //         if (listToDelete.indexOf(obj.id) !== -1) {
            //             INC.config.bundle_tracking.splice(i, 1);
            //         }
            //     }
            // }
            
            // INC.config.bundle_tracking = INC.config.bundle_tracking
            // INC.config.bundle_trackingPushed.remove_prod_list(productObj["mainId"]);
        }
    }

    var elQtyInput = elQtyInputText.querySelector('input');
    var sku = productBlock.getAttribute('data-sku');
    var bundle_id = productBlock.getAttribute('data-bundle_id');
    var main_id = productBlock.getAttribute('data-main_id');
    var qty = parseInt(elQtyInput.value);
    var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
    var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
    //inc_product_desc_add_img checked
  
    // if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == INC.config.AddedText || elAddText.innerText == INC.config.UpdateText) {
    //     INC.methods.updateBundleCart({ sku: sku, qty: qty}, "add",main_id,bundle_id,pname,pprice);
    // }
    if(elAddText.parentNode.parentNode.querySelector('.inc_product_desc_add_img.checked') != null){
        INC.methods.updateBundleCart({ sku: sku, qty: qty}, "add",main_id,bundle_id,pname,pprice);
    }
    setTimeout(function(){
       
        if(elImgMainImg.querySelectorAll('img')[0].naturalWidth == 360){
            elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURLMain"]);
        }
    },200);
    
    // elPackOfListBlock.innerHTML = "";

    
}

INC.methods.createProductListItemBlock = function (productObj, blockType) {
    var classNames = INC.uiConfig[blockType].className;
    var productListItemBlock = this.getElementChilds("pdpBundleProductListItemBlock", blockType);
    var findObj = new INC.classes.FindObj({ id: productObj.id, mainId: productObj.mainId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    // var productColorText = productObj["option"]["0"].text;
    // var productColorsCount = INC.dataStore.methods().getProductColorsObj(findObj)["colorArray"].length;
    var getSelectorClassName = this.getSelectorClassName;
    productListItemBlock.style.userSelect = "none";
    productListItemBlock.setAttribute('data-id', productObj.id);
    productListItemBlock.setAttribute('data-sku', productObj.sku);
    productListItemBlock.setAttribute('data-main_id', productObj.mainId);
    productListItemBlock.setAttribute('data-bundle_id', productObj.bundleId);
    if(productObj.ProductLevelDiscountMessage != null){
        productListItemBlock.classList.add('promo_available')
    }
    function getViewElement(className) {
        return productListItemBlock.querySelector(getSelectorClassName(classNames, className));
    }
    var elTitleBlockMob = getViewElement("pdpBundleProductListItemTitleBlock");
    var elImgBlockMob = getViewElement("pdpBundleProductListItemImgBlock");
    var elcheckblock = getViewElement("pdpBundleProductListItemAddedBlock");
    var elImg = getViewElement("pdpBundleProductListItemImg");
    var elTitleText = getViewElement("pdpBundleProductListItemTitleText");
    var elPriceActive = getViewElement("pdpBundleProductListItemPriceActiveText");
    
    if(productObj.imageURL.indexOf('undefined') == -1){
        var elImgTag1 = INC.methods.generateHTMLTags('img', { src: productObj.imageURL });
        if(onloadpdp == true){
            elImgTag1.src = productObj.imageURL
        }
    }else{
        var elImgTag1 = document.createElement('img')
    }
    elImgTag1.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
    elImgTag1.setAttribute('alt', productObj.name)
    elImg.appendChild(elImgTag1);
    if(productObj.ProductLevelDiscountMessage != null){
        elImg.classList.add('Inc_offer')
    }
    productListItemBlock.addEventListener("click", function () {
      
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function (el) {
            el.classList.remove("active");
        });
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function (attSizeListBlock) {
            attSizeListBlock.classList.remove("active");
        });

        var elListMainBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListMainBlock"));
        Array.prototype.forEach.call(elListMainBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock")), function (productBlock) {
            productBlock.style.display = "none";
        });
        if(elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]") != null){
            elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").style.display = "block";
            if(elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").nextElementSibling != null){
                elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").nextElementSibling.style.display = "block";
            }else{
                if(elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").previousElementSibling != null){
                    elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").previousElementSibling.style.display = "block";
                }
            }
        }else if(document.querySelector(".inc_pdp_block .inc_product_module_block[data-main_id=\"" + productObj.mainId + "\"]") != null){
            document.querySelector(".inc_pdp_block .inc_product_module_block[data-main_id=\"" + productObj.mainId + "\"]").style.display = "block";
            if(document.querySelectorAll(".inc_pdp_block .inc_pdp_bundle_product_list_main_block .inc_product_module_block")[0] != null){
                document.querySelectorAll(".inc_pdp_block .inc_pdp_bundle_product_list_main_block .inc_product_module_block")[0].style.display = "block";
            }
            if(document.querySelectorAll(".inc_pdp_block .inc_pdp_bundle_product_list_main_block .inc_product_module_block")[1] != null){
                document.querySelectorAll(".inc_pdp_block .inc_pdp_bundle_product_list_main_block .inc_product_module_block")[1].style.display = "block";
            }
        }
        
        Array.prototype.forEach.call(productListItemBlock.parentNode.querySelectorAll(getSelectorClassName(classNames, "pdpBundleProductListItemBlock")), function (pListItemBlock) {
            pListItemBlock.classList.remove("active");
        });

        productListItemBlock.classList.add("active");
    });
    elcheckblock.addEventListener("click", function () {
        if(document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]') != null){
            var elselprod=document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]')
            elselprod.querySelector('.inc_product_desc_add_block').click()
            document.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_block').click()
        }
    });
    elTitleBlockMob.addEventListener("click", function () {
        if(document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]') != null){
            var elselprod=document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]')
            elselprod.querySelector('.inc_product_desc_add_block').click()
            document.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_block').click()
        }
    });
    elImgBlockMob.addEventListener("click", function () {
        if(document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]') != null){
            var elselprod=document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]')
            elselprod.querySelector('.inc_product_desc_add_block').click()
            document.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_block').click()
        }
    });
    elTitleText.innerText = productObj.name
    elPriceActive.innerHTML = INC.clientConfig.currencySymbol + formatter.format(productObj.activePrice)
    


    return productListItemBlock;
}

INC.methods.updateProductListItem = function (productObj, blockType) {

    if (blockType != "pdp") return;
    var classNames = INC.uiConfig[blockType].className;
    var findObj = new INC.classes.FindObj({ id: productObj.id, mainId: productObj.mainId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var getSelectorClassName = this.getSelectorClassName;

    var querySelectorString = getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-id=\"" + productObj.id + "\"]";
    var productListItemBlock = document.querySelector(querySelectorString);
    function getViewElement(className) {
        return productListItemBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elImg = getViewElement("pdpBundleProductListItemImg");

    elImg.querySelector('img').setAttribute('src', productObj.imageURL);
    elImg.querySelector('img').setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
}

INC.methods.updateBundleCart = function (bundleCartObj, type,main_id,bundle_id,pname,pprice) {
    var dataStore = INC.dataStore;
    var listToDelete=[]
    if (!dataStore.hasOwnProperty('bundleCartProducts')) {
        dataStore['bundleCartProducts'] = {};
        INC.config.bundle_trackingPushed=[]
        INC.config.bundle_skuPushed=[]
        INC.config.bundle_tracking=[]
        INC.config.dupBasket=[]
    }

    switch (type) {
        case "add": dataStore["bundleCartProducts"][bundleCartObj["sku"]] = bundleCartObj["qty"];
            for(li=0;li<INC.config.bundle_tracking.length;li++){
                if(INC.config.bundle_tracking[li].id == main_id){
                    INC.config.bundle_tracking[li].id = bundleCartObj["sku"]
                }
            }
            if(INC.config.bundle_skuPushed.indexOf(bundleCartObj["sku"]) == -1){
                INC.config.bundle_skuPushed.push(bundleCartObj["sku"])
            }
            if(INC.config.bundle_trackingPushed.indexOf(main_id) == -1){
                INC.config.bundle_trackingPushed.push(main_id)
                INC.config.bundle_tracking.push({
                    id:main_id,
                    bid:bundle_id,
                    pname:pname,
                    sku:bundleCartObj["sku"],
                    prc:pprice,
                    qty:bundleCartObj["qty"]

                });
            }
            break;
        case "sub": delete dataStore["bundleCartProducts"][bundleCartObj["sku"]];
            INC.config.bundle_trackingPushed.remove_prod_list = function() {
                var what, a = arguments, L = a.length, ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };
            INC.config.bundle_skuPushed.remove_prod_list = function() {
                var what, a = arguments, L = a.length, ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };
            listToDelete[0] = main_id
            for (var i = 0; i < INC.config.bundle_tracking.length; i++) {
                var obj = INC.config.bundle_tracking[i];
                if(obj != undefined){
                    if (listToDelete.indexOf(obj.id) !== -1) {
                        INC.config.bundle_tracking.splice(i, 1);
                    }
                }
            }
            INC.config.bundle_tracking = INC.config.bundle_tracking
            INC.config.bundle_trackingPushed.remove_prod_list(main_id);
            INC.config.bundle_skuPushed.remove_prod_list(bundleCartObj["sku"]);
            break;
    }

    if (INC.config.pageType == "pdp") this.calculateBundleTotal();
}

INC.methods.calculateBundleTotal = function () {
    var dataStore = INC.dataStore;
    var bundleCartProducts = dataStore["bundleCartProducts"];
    var productListObj = dataStore.dataStoreObj;
    var duplicate_check_produ=[]
    var totalRegularPrice = 0;
    var totalActivePrice = 0;
    var totalMainProduct = 0;
    var totalAddonProducts = 0;
    var totalAddonProductsCount = 0;
    var totalProductCount = 0;
    var total_qty=0
    var total_collect_point=0
    var mainId = INC.methods.getProductIdFromWebPage();

    if (bundleCartProducts != null && bundleCartProducts != undefined) {
        Object.keys(bundleCartProducts).forEach(function (sku) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    if (sku == productListObj[mainProductId][childProductId]["sku"]) {
                        if(duplicate_check_produ.indexOf(productListObj[mainProductId][childProductId]["sku"]) == -1){
                            duplicate_check_produ.push(productListObj[mainProductId][childProductId]["sku"])
                            var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                            var activePrice = productListObj[mainProductId][childProductId]["activePrice"];
                            totalRegularPrice = totalRegularPrice + (parseFloat(bundleCartProducts[sku]) * regularPrice);
                            totalActivePrice = totalActivePrice + (parseFloat(bundleCartProducts[sku])) * activePrice;

                            total_qty = total_qty + parseInt(bundleCartProducts[sku])

                            if(productListObj[mainProductId][childProductId]["worthPrice"] != "" && productListObj[mainProductId][childProductId]["worthPrice"] != null){
                                total_collect_point = total_collect_point + +(productListObj[mainProductId][childProductId]["worthPrice"] * parseInt(bundleCartProducts[sku]))
                            }
                            if (productListObj[mainProductId][childProductId].mainId == mainId) {
                                totalProductCount++;
                                totalMainProduct = totalMainProduct + (parseInt(bundleCartProducts[sku]) * activePrice);
                            }

                            // if (getProductBySKU(findObj).mainId != mainId) {
                            if (productListObj[mainProductId][childProductId].mainId != mainId) {
                                totalProductCount++;
                                totalAddonProductsCount++;
                                totalAddonProducts = totalAddonProducts + (parseInt(bundleCartProducts[sku]) * activePrice);
                            }
                        }
                    }
                }
            }
        });
    }


    var priceObj = {
        totalActivePrice: parseFloat(totalActivePrice).toFixed(2),
        totalRegularPrice: parseFloat(totalRegularPrice).toFixed(2),
        totalMainProduct: totalMainProduct,
        totalAddonProducts: totalAddonProducts,
        totalAddonProductsCount: totalAddonProductsCount,
        totalProductCount: totalProductCount,
        total_qty:total_qty,
        total_collect_point:total_collect_point
    }

    this.updateBundleCartBlock(priceObj);
}

INC.methods.updateBundleCartBlock = function (priceObj) {
    var classNames = INC.uiConfig.pdp.className;
    var dataStore = INC.dataStore;
    var bundleCartProducts = dataStore["bundleCartProducts"];
    var getSelectorClassName = INC.methods.getSelectorClassName;

    var totalRegularPrice = priceObj.totalRegularPrice;
    var totalActivePrice = priceObj.totalActivePrice;
    var totalMainProduct = priceObj.totalMainProduct;
    var totalAddonProducts = priceObj.totalAddonProducts;
    var totalAddonProductsCount = priceObj.totalAddonProductsCount;
    var totalProductCount = priceObj.totalProductCount;
    var total_qty_item=priceObj.total_qty
    var total_col_point=priceObj.total_collect_point

    var click_adn_collect_flag = false;
    var click_adn_delivery_flag = false;

    var elPdpBundleCartBlock = document.querySelector(this.getSelectorClassName(classNames, "pdpModalBundleCartBlock"));

    function getViewElement(className) {
        return elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, className));
    }
    
    
    var elBundleCartAddedBlock = getViewElement("pdpBundleCartAddedBlock");
    var elBundleCartSummaryViewBtnCount = getViewElement("pdpBundleCartSummaryViewBtnCount");
    var elBundleCartPriceRegularText = getViewElement("pdpBundleCartSummaryPriceRegularText");
    var elBundleCartPriceActiveText = getViewElement("pdpBundleCartSummaryPriceActiveText");
    var elBundleCartPriceActiveTextMsg = getViewElement("pdpBundleCartSummaryPriceActiveTextMsg");
    var elBundleCartTitleTextcount = getViewElement("pdpBundleCartTitleText");
    var elBundleCartTitleTextblock = getViewElement("pdpBundleCartTitleTextBlock");
    var elbundlesavetext = getViewElement("pdpBundleCartSummaryPriceSaveText");
    var eloffersection = getViewElement("pdpBundleCartSummarySaveAddText");

    eloffersection.innerText = "*any offers/discounts will be applied in basket";
    elbundlesavetext.style.display = "none"
    
    elBundleCartAddedBlock.innerHTML = "";

    var countcollect=0;
    var totol_qty_item=0;
    var bundleCartProductsArray = Object.keys(bundleCartProducts);
    elBundleCartSummaryViewBtnCount.innerText = bundleCartProductsArray.length;

    if(window.innerWidth < 820){
        elBundleCartTitleTextcount.innerText = "Price summary" //total_qty_item + 
    }
    var total_added_products=[]
    for (var ii = 0; ii < bundleCartProductsArray.length; ii++) {
        for (var ij = 0; ij < INC.config.bundle_tracking.length; ij++) {
            if(total_added_products.indexOf(bundleCartProductsArray[ii]) == -1){
                total_added_products.push(bundleCartProductsArray[ii])
            }
            
            if(INC.config.bundle_tracking[ij].sku == bundleCartProductsArray[ii]){
                INC.config.bundle_tracking[ij].qty = bundleCartProducts[bundleCartProductsArray[ii]]
            }
        }
    }
    var alladdedprod = INC.config.product_seq//INC.config.bundle_skuPushed
    if(alladdedprod != null){
        for (var m = 0; m < alladdedprod.length; m++) {
            var elcont = alladdedprod[m]//.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            for (var i = 0; i < bundleCartProductsArray.length; i++) {
                var findObj = new INC.classes.FindObj({
                    sku: bundleCartProductsArray[i]
                });
                var productObj = INC.dataStore.methods().getProductBySKU(findObj);
                if(elcont == productObj.mainId){
                    if (Object.keys(bundleCartProducts).indexOf(INC.config.Product_id) >= 0) {
                        if (INC.config.Product_id == productObj.mainId) {
                            if (productObj.Field6 == "CollectOnly") {
                                if(click_adn_delivery_flag == true && click_adn_collect_flag == true && bundleCartProductsArray.length > 1){
                                    click_adn_delivery_flag = true
                                    click_adn_collect_flag = true
                                }else{
                                    click_adn_collect_flag = true
                                    click_adn_delivery_flag = false
                                }
                            } else if (productObj.Field6 == "DeliveryOnly") {
                                if(click_adn_delivery_flag == true && click_adn_collect_flag == true  && bundleCartProductsArray.length > 1){
                                    click_adn_delivery_flag = true
                                    click_adn_collect_flag = true
                                }else{
                                    click_adn_collect_flag = false
                                    click_adn_delivery_flag = true
                                }
                            } else if (productObj.Field6 == "Both") {
                                click_adn_collect_flag = true
                                click_adn_delivery_flag = true
                            }
                        }
                    } else {
                        if (productObj.Field6 == "CollectOnly") {
                            if(click_adn_delivery_flag == true && click_adn_collect_flag == true  && bundleCartProductsArray.length > 1){
                                click_adn_delivery_flag = true
                                click_adn_collect_flag = true
                            }else{
                                click_adn_collect_flag = true
                                click_adn_delivery_flag = false
                            }
                            
                        } else if (productObj.Field6 == "DeliveryOnly") {
                            if(click_adn_delivery_flag == true && click_adn_collect_flag == true  && bundleCartProductsArray.length > 1){
                                click_adn_delivery_flag = true
                                click_adn_collect_flag = true
                            }else{
                                click_adn_collect_flag = false
                                click_adn_delivery_flag = true
                            }
                        } else if (productObj.Field6 == "Both") {
                            click_adn_collect_flag = true
                            click_adn_delivery_flag = true
                        }
                    }
                    
                    var productId = productObj.id;
                    
                    
                    var prepen_elm = this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundleCartProductsArray[i]], "pdp")
                    var alllength = document.querySelectorAll('.inc_pdp_collection_cart_added_block .inc_pdp_collection_cart_added_product_block').length
                    
                    if (elBundleCartAddedBlock != null || elBundleCartAddedBlock != undefined) {
                        // elBundleCartAddedBlock.appendChild(prepen_elm)
                        elBundleCartAddedBlock.insertBefore(prepen_elm, elBundleCartAddedBlock.childNodes[alllength]);
                        // elBundleCartAddedBlock.appendChild(prepen_elm)
                    }
                }
                
            }
        }
    }else{
        for (var i = 0; i < bundleCartProductsArray.length; i++) {
            var findObj = new INC.classes.FindObj({
                sku: bundleCartProductsArray[i]
            });
            var productObj = INC.dataStore.methods().getProductBySKU(findObj);
            if (Object.keys(bundleCartProducts).indexOf(INC.config.Product_id) >= 0) {
                if (INC.config.Product_id == productObj.mainId) {
                    if (productObj.Field6 == "CollectOnly") {
                        if(click_adn_delivery_flag == true && click_adn_collect_flag == true && bundleCartProductsArray.length > 1){
                            click_adn_delivery_flag = true
                            click_adn_collect_flag = true
                        }else{
                            click_adn_collect_flag = true
                            click_adn_delivery_flag = false
                        }
                    } else if (productObj.Field6 == "DeliveryOnly") {
                        if(click_adn_delivery_flag == true && click_adn_collect_flag == true  && bundleCartProductsArray.length > 1){
                            click_adn_delivery_flag = true
                            click_adn_collect_flag = true
                        }else{
                            click_adn_collect_flag = false
                            click_adn_delivery_flag = true
                        }
                    } else if (productObj.Field6 == "Both") {
                        click_adn_collect_flag = true
                        click_adn_delivery_flag = true
                    }
                }
            } else {
                if (productObj.Field6 == "CollectOnly") {
                    if(click_adn_delivery_flag == true && click_adn_collect_flag == true  && bundleCartProductsArray.length > 1){
                        click_adn_delivery_flag = true
                        click_adn_collect_flag = true
                    }else{
                        click_adn_collect_flag = true
                        click_adn_delivery_flag = false
                    }
                    
                } else if (productObj.Field6 == "DeliveryOnly") {
                    if(click_adn_delivery_flag == true && click_adn_collect_flag == true  && bundleCartProductsArray.length > 1){
                        click_adn_delivery_flag = true
                        click_adn_collect_flag = true
                    }else{
                        click_adn_collect_flag = false
                        click_adn_delivery_flag = true
                    }
                } else if (productObj.Field6 == "Both") {
                    click_adn_collect_flag = true
                    click_adn_delivery_flag = true
                }
            }
            
            var productId = productObj.id;
            
            
            var prepen_elm = this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundleCartProductsArray[i]], "pdp")
            var elBundleCartAddedBlock = document.querySelector('.inc_pdp_collection_cart_added_block');
            var alllength = document.querySelectorAll('.inc_pdp_collection_cart_added_block .inc_pdp_collection_cart_added_product_block').length
            
            if (elBundleCartAddedBlock != null || elBundleCartAddedBlock != undefined) {
                // elBundleCartAddedBlock.appendChild(prepen_elm)
                elBundleCartAddedBlock.insertBefore(prepen_elm, elBundleCartAddedBlock.childNodes[alllength]);
            }
        }
    }
    //$('.inc_pdp_bundle_cart_added_block').animate({ scrollTop: $('.inc_pdp_bundle_cart_added_block').height() + 500}, 'fast');  
    if (!(bundleCartProductsArray.length > 4)) {
        var elBundleCartAddedProductDiv = document.createElement('div');
        elBundleCartAddedProductDiv.classList.add("bundle_cart_added_product_div");
        elBundleCartAddedProductDiv.innerText = "ADD PRODUCT";
        elBundleCartAddedBlock.appendChild(elBundleCartAddedProductDiv);
    }

    elBundleCartPriceRegularText.style.display = "none";
    if (totalActivePrice != totalRegularPrice) {
        elBundleCartPriceActiveText.classList.add("priceRed");
        elBundleCartPriceRegularText.style.display = "flex";
    } else {
        if (elBundleCartPriceActiveText.classList.contains('priceRed')) {
            elBundleCartPriceActiveText.classList.remove("priceRed");
        }
    }
    
    elBundleCartPriceActiveText.innerText = INC.clientConfig.currencySymbol + formatter.format(totalActivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
    elBundleCartPriceRegularText.innerText = INC.clientConfig.currencySymbol + formatter.format(totalRegularPrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
    //parseFloat(totalRegularPrice).toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,');
    var elpricesummaryblock = getViewElement("pdpBundleCartSummaryBlock");
    if (elPdpBundleCartBlock != null && elPdpBundleCartBlock != undefined) {
        var bundleCartProductsLength = Object.keys(bundleCartProducts).length;

        var elBundleCartTitleText = getViewElement("pdpBundleCartSummaryTitleText");
        var elBundleCartAddBtnText = getViewElement("pdpBundleCartSummaryAddBtnText");

        var elBundleCartAddBtnclickcollectText = getViewElement("pdpBundleCartSummaryAddBtnClickCollectText");
        var elBundleCartclickcollectbtnblock = getViewElement("pdpBundleCartSummaryAddBtnClickCollectBlock");
        var elBundleCartbtnblock = getViewElement("pdpBundleCartSummaryAddBtnBlock");
        elpricesummaryblock.classList.remove('is_click_collect_available')
        elpricesummaryblock.classList.remove('is_delivery_only')
        elpricesummaryblock.classList.remove('is_delivery_only')
        elpricesummaryblock.classList.remove('is_delivery_only_both')
        if (window.innerWidth > 819) {
            elBundleCartbtnblock.style.display = "block"
            elBundleCartclickcollectbtnblock.style.display = "block"
        } else {
            elBundleCartbtnblock.style.display = "flex"
            elBundleCartclickcollectbtnblock.style.display = "flex"
        }
        if (click_adn_collect_flag == true && INC.config.storeId != "" && click_adn_delivery_flag == false) {
            elpricesummaryblock.classList.add('is_click_collect_only')
            elBundleCartbtnblock.style.display = "none"
        } else if (click_adn_collect_flag == true && INC.config.storeId == "" && click_adn_delivery_flag == false) {
            elBundleCartbtnblock.style.display = "none"
            elBundleCartclickcollectbtnblock.style.display = "none"
        } else if (click_adn_collect_flag == true && click_adn_delivery_flag == true && INC.config.storeId != "") {
            // elpricesummaryblock.classList.add('is_delivery_only')
            elpricesummaryblock.classList.add('is_delivery_only_both')
            elpricesummaryblock.classList.add('is_click_collect_only')
            if (window.innerWidth > 819) {
                elBundleCartbtnblock.style.display = "block"
                elBundleCartclickcollectbtnblock.style.display = "block"
            } else {
                elBundleCartbtnblock.style.display = "flex"
                elBundleCartclickcollectbtnblock.style.display = "flex"
            }
        } else if (click_adn_collect_flag == true && click_adn_delivery_flag == true && INC.config.storeId == "") {
            elpricesummaryblock.classList.add('is_delivery_only')
            elBundleCartclickcollectbtnblock.style.display = "none"
        } else if (click_adn_collect_flag == false && click_adn_delivery_flag == true) {
            elpricesummaryblock.classList.add('is_delivery_only')
            elBundleCartclickcollectbtnblock.style.display = "none"
        } else if (INC.config.storeId == "") {
            elpricesummaryblock.classList.add('is_delivery_only')
            elBundleCartclickcollectbtnblock.style.display = "none"
        } else {
            elpricesummaryblock.classList.add('is_click_collect_only')
        }
        elpricesummaryblock.classList.add('is_delivery_only')
        elBundleCartclickcollectbtnblock.style.display = "none"
        if (window.innerWidth < 819) {
            if (bundleCartProductsLength > 1) {
                elBundleCartTitleText.innerText = "Total Price : ";
                elBundleCartAddBtnText.innerText = "Add " + bundleCartProductsArray.length + " item(s) for Delivery";
                elBundleCartAddBtnclickcollectText.innerText = "Click & Collect " + bundleCartProductsArray.length + " item(s)";
            }

            if (!(bundleCartProductsLength > 1)) {
                elBundleCartTitleText.innerText = "Total Price : ";
                elBundleCartAddBtnText.innerText = "Add 1 item(s) for Delivery";
                elBundleCartAddBtnclickcollectText.innerText = "Click & Collect 1 item(s)";
            }
        } else {
            if (bundleCartProductsLength > 1) {
                elBundleCartTitleText.innerText = "Total Price : ";
                elBundleCartAddBtnText.innerText = "Add " + bundleCartProductsArray.length + " item(s) for Delivery";
                elBundleCartAddBtnclickcollectText.innerText = "Click & Collect " + bundleCartProductsArray.length + " item(s)";
            }

            if (!(bundleCartProductsLength > 1)) {
                elBundleCartTitleText.innerText = "Total Price : ";
                elBundleCartAddBtnText.innerText = "Add 1 item for Delivery";
                elBundleCartAddBtnclickcollectText.innerText = "Click & Collect 1 item";
            }
        }
    }

    var elPriceMainTitleText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainTitleText"));
    var elPriceMainFigureText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainFigureText"));
    var elPriceAddonTitleText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonTitleText"));
    var elPriceAddonFigureText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonFigureText"));
    var elPriceRegularText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceRegularText"));
    var elPriceActiveText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceActiveText"));

    elPriceMainTitleText.innerText = "Main Product Price";
    elPriceAddonTitleText.innerText = ((totalAddonProductsCount > 0) ? totalAddonProductsCount : "") + " Add-on(s) Selected  ";
    
    elPriceMainFigureText.innerText = INC.clientConfig.currencySymbol + formatter.format(totalMainProduct).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
    
    elPriceAddonFigureText.innerText = INC.clientConfig.currencySymbol + formatter.format(totalAddonProducts).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
    elPriceActiveText.innerText = INC.clientConfig.currencySymbol + formatter.format(totalActivePrice).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
    if (totalActivePrice == 0) {
        setTimeout(function() {
            document.querySelectorAll(getSelectorClassName(classNames, "productAddBlock"))[1].click();
        }, 5);
    }
}

INC.methods.createBundleCartAddedProductBlock = function (productId, qty, blockType) {
    var classNames = INC.uiConfig[blockType].className;
    var addedProductBlock = this.getElementChilds("pdpBundleCartAddedProductBlock", blockType);
    var findObj = new INC.classes.FindObj({ id: productId });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var getSelectorClassName = INC.methods.getSelectorClassName;
    addedProductBlock.setAttribute('data-id', productObj.id);
    addedProductBlock.setAttribute('data-sku', productObj.sku);
    addedProductBlock.setAttribute('data-main_id', productObj.mainId);
    addedProductBlock.setAttribute('data-bundle_id', productObj.bundleId);

    //current  active prod
    var color="";
    var size="";
    var just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="'+productObj.mainId+'"]')
    if(just_check_prod_block != null){
        if(just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null){
            size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
        }
        if(just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null){
            color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
        }
    }
    
    //end
    function getViewElement(className) {
        return addedProductBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elTitleText = getViewElement("pdpBundleCartAddedProductTitleText");
    var elImg = getViewElement("pdpBundleCartAddedProductImg");
    var elPriceActiveText = getViewElement("pdpBundleCartAddedProductPriceText");
    var elAttColorText = getViewElement("pdpBundleCartAddedProductAttColorText");
    var elAttsizeText = getViewElement("pdpBundleCartAddedProductAttSizeText");
    var elQtyText = getViewElement("pdpBundleCartAddedProductQtyText");
    var elEditTextBlock = getViewElement("pdpBundleCartAddedProductEditTextBlock");
    var elEditText = getViewElement("pdpBundleCartAddedProductEditText");
    var elEditImgBlock = getViewElement("pdpBundleCartAddedProductEditImgBlock");
    var elEditImg = getViewElement("pdpBundleCartAddedProductEditImg");

    // elTitleText.innerText = productObj.name;
    var elImgTag1 = this.generateHTMLTags('img', { src: productObj.imageURL });
    if(onloadpdp == true){
        elImgTag1.src = productObj.imageURL
    }
    elImgTag1.setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
    elImgTag1.setAttribute('alt', productObj.name)
    elImg.appendChild(elImgTag1);
    
    var prod_module_elm = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]')
    var zero_text = ""
    var size_text = ""
    var color_text = ""
    var third_text = ""
    if(prod_module_elm != null){
        var modal_attr_block = prod_module_elm.querySelector('.inc_product_modal_block')
        zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
        size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
        color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
        third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');
    }
    var sel_attr_text=""
    if(color_text != undefined){
        sel_attr_text = color_text
    }
    if(zero_text != undefined){
        if(sel_attr_text == ""){
            sel_attr_text = zero_text
        }else{
            sel_attr_text = sel_attr_text //+ " / " + zero_text
        }
    }
    if(size_text != undefined){
        sel_attr_text = sel_attr_text //+ " / " + size_text
    }
    if(third_text != undefined){
        sel_attr_text = sel_attr_text //+ " / " + third_text
    }

    if(color_text != "" && color_text != undefined && color_text != null){
        if(productObj.option[0] != undefined){
            elAttColorText.innerText = productObj.option[0].code  + " : " + sel_attr_text;
        }else{
            elAttColorText.innerText =  sel_attr_text;
        }
        elAttColorText.parentNode.parentNode.setAttribute('title',sel_attr_text)
    }else if(size_text != "" && size_text != null || zero_text != "" && zero_text != null){
        // elAttColorText.innerText = productObj.option[0].code + " " + sel_attr_text;
        if(productObj.option[0] != undefined){
            elAttColorText.innerText = productObj.option[0].code + " " + sel_attr_text;
        }else{
            elAttColorText.innerText =  sel_attr_text;
        }
        elAttColorText.parentNode.parentNode.setAttribute('title',sel_attr_text)
    }

    elAttColorText.style.textTransform = "none"
    var pTitleDiv = document.createElement('div');
    pTitleDiv.innerHTML =  qty + "<small>x </small>" + productObj.name;
    pTitleDiv.setAttribute('style','text-transform: unset;')
    elQtyText.innerHTML = qty 

    var pLink = document.createElement('a');
    pLink.title = productObj.name //+ ((attColorText.length > 0) ? (" | " + attColorText) : "");
    
    // pLink.setAttribute('href', productObj["url"]);
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);

    elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(productObj.activePrice * qty)
    

    elEditTextBlock.addEventListener("click", function () {
        if (INC.config.deviceType == "mobile") {

            if (document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]') != null)
                document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]').click();
        }

        if (INC.config.deviceType == "desktop") {
            Array.prototype.forEach.call(document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListMainBlock")).querySelectorAll(getSelectorClassName(classNames, "productModuleBlock")), function (el, index) {
                if (el.getAttribute('data-id') == productObj.id) {
                    if (index > 1) {
                        for (var i = 0; i < 2; i++) {
                            document.querySelector(getSelectorClassName(classNames, "pdpBundleProductRightBtnBlock")).click()
                        }
                    }

                    if (!(index > 1)) {
                        for (var i = 0; i < 2; i++) {
                            document.querySelector(getSelectorClassName(classNames, "pdpBundleProductLeftBtnBlock")).click()
                        }
                    }
                }
            });
            // }
        }

        setTimeout(function () {
            // document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').querySelector(getSelectorClassName(classNames, "productAttBlock")).click();
            document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"] .inc_product_details_prod_block').click()
        }, 50);
    });
    //if(INC.methods.getProductIdFromWebPage() == productObj.bundledProductId){
        elEditText.parentNode.parentNode.classList.add('elipsis_inc')
        elEditText.innerText = INC.config.EditText;
    //}
    elEditImgBlock.addEventListener("click", function () {
        document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
    });
    elEditImg.innerText = "";
    return addedProductBlock;
}

INC.methods.clear = function () {
    if (document.querySelector('.sidebar_outer') != null) {
        Array.prototype.forEach.call(document.querySelectorAll('.sidebar_outer'), function (el) {
            el.parentNode.removeChild(el);
        });

        Array.prototype.forEach.call(document.querySelectorAll(".sidebar_outer"), function (el) {
            el.parentNode.removeChild(el);
        });
    }
    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock")) != null) {
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock")), function (el) {
            el.parentNode.removeChild(el);
        });

        Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (el) {
            el.parentNode.removeChild(el);
        });
    }

    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")) != null) {
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")), function (el) {
            el.parentNode.removeChild(el);
        });
    }

    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "pdpModalBlock")) != null) {
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "pdpModalBlock")), function (el) {
            el.parentNode.removeChild(el);
        });
    }
}

INC.methods.getElementChilds = function (child, pageType) {
    var uiConfig = INC.uiConfig;
    var pType = pageType;
    var vDOM = uiConfig[pType]["dom"];
    var elementHTML = this.generateHTMLTags('div', { class: uiConfig[pType]["className"][child] })
    if (vDOM.hasOwnProperty(child)) {
        vDOM[child].forEach(function (subChild) {
            elementHTML.appendChild(INC.methods.getElementChilds(subChild, pType));
        });
    }

    return elementHTML;
}

INC.methods.generateHTMLTags = function (tagName, attributeObj, childNode, eventListner, callback) {
    var element = document.createElement(tagName);
    for (attr in attributeObj) {
        switch (attr) {
            case "class": {
                element.setAttribute('class', attributeObj[attr]);
            }
                break;
            case "style": {
                for (styleAttr in attributeObj[attr]) {
                    element.style[styleAttr] = attributeObj[attr][styleAttr];
                }
            }
                break;
            default: {
                if(attributeObj[attr] != undefined){
                    if(tagName == 'img'){
                        element.classList.add('inc_lazy')
                        element.setAttribute('data-src', attributeObj[attr]);
                        element.setAttribute('src', INC.config.srcImgeLazy);
                    }else{
                        element.setAttribute(attr, attributeObj[attr]);
                    }
                    // element.setAttribute(attr, attributeObj[attr]);
                }
            }
        }
    }

    if (childNode != null && childNode != undefined) element.appendChild(childNode);
    if (eventListner != null && childNode != undefined) element.addEventListener(eventListner, callback);

    return element;
}

INC.methods.addProductToCart = function(findObj, qty, pageType, productBlock, add_btn_click, add_prod_im, btn_addtocartn, type_bundle) {
    INC.clientConfig.added_product_sku = []
    var del_is_oos = false
    INC.clientConfig.OOS = []
    INC.clientConfig.OOS_COL = []
    INC.clientConfig.OOS_MESG = []
    // var addProductURL = INC.config.addToBasketURL;
    if (type_bundle == "delevery") {
        var addProductURL = INC.config.addToBasketURL;
    } else {
        var addProductURL = INC.config.click_collect_addToBasketURL;
    }
    if (document.querySelectorAll('input[name="CSRFToken"]')[0] != undefined) {
        csrf_token = document.querySelectorAll('input[name="CSRFToken"]')[0].value;
    }
    var findObj = new INC.classes.FindObj(findObj);
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var addProductURL_c_f = INC.config.addToBasketURL;
    var searchParamObjString_c_f = "CSRFToken=" + csrf_token + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "qty=" + qty;
    if (type_bundle == "delevery") {
        var searchParamObjString = "CSRFToken=" + csrf_token + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "qty=" + qty;
    } else {
        var searchParamObjString = "storeNamePost=" + INC.config.storeId + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "hiddenPickupQty=" + qty;
    }
    var p_type_cole = productObj.Field6 

    var params = searchParamObjString;

  

    var nwConfigObj = new INC.classes.NWConfig();
    nwConfigObj["url"] = addProductURL;
    nwConfigObj["method"] = 'POST';
    nwConfigObj["params"] = params;
   
    var xhr = new XMLHttpRequest();
    xhr.open(nwConfigObj.method, addProductURL, true);

    xhr.onload = function() {}
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {


            if (INC.config.pageType == "cartPage") {
                productBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "productAddText")).innerText = "Added";
                // productBlock.remove();
                if (productBlock != null) {
                    productBlock.parentNode.removeChild(productBlock);
                }
                if (type_bundle == "delevery") {
                    jQuery("html, body").animate({ scrollTop: 0 }, "fast");
                    window.location.reload();
                }
            }

            //if (pageType == "sidebar") {if(document.querySelector('.inc_sidebar_modal_block.active') == null){
            add_btn_click.innerText = "Added";
            if (this.responseText != "") {
                respons = this.responseText
                var result_data = []
                if (respons.indexOf('doctype html') == -1) {
                    var result_data = JSON.parse(this.responseText);
                }
                if (type_bundle != "delevery" && p_type_cole != "CollectOnly") {
                    if (qty != undefined) {
                        if (result_data.addedProducts != undefined) {
                            if (result_data.addedProducts[0].qty != undefined && result_data.addedProducts[0].qty != "") {
                                if (parseInt(qty) > result_data.addedProducts[0].qty) {
                                    if (INC.clientConfig.OOS.indexOf(productObj.id) == -1) {
                                        // INC.clientConfig.OOS_MESG.push("Note: Not available in store. Item added for delivery.")
                                        INC.clientConfig.OOS.push(productObj.id)
                                    }
                                    var qtyss = parseInt(qty) - result_data.addedProducts[0].qty
                                    var param_d = searchParamObjString_c_f.split('&qty')[0] + "&qty=" + qtyss + ""
                                    INC.methods.collectionfaildtoadd(param_d, addProductURL_c_f, result_data.addedProducts[0].qty, del_is_oos)
                                } else {

                                    if (INC.config.pageType == "cartPage") {
                                        jQuery("html, body").animate({ scrollTop: 0 }, "fast");
                                        setTimeout(function() {
                                            window.location.reload();
                                        }, 1000)
                                    }
                                }
                            } else if (result_data.addedProducts[0].qty == "") {
                                if (INC.clientConfig.OOS.indexOf(productObj.id) == -1) {
                                    // INC.clientConfig.OOS_MESG.push("Note: Not available in store. Item added for delivery.")
                                    INC.clientConfig.OOS.push(productObj.id)
                                }

                                //
                                var qtyss = qty
                                var param_d = searchParamObjString_c_f.split('&qty')[0] + "&qty=" + qtyss + ""
                                INC.methods.collectionfaildtoadd(param_d, addProductURL_c_f, result_data.addedProducts[0].qty, del_is_oos)
                            } else {
                                if (INC.config.pageType == "cartPage") {
                                    jQuery("html, body").animate({ scrollTop: 0 }, "fast");
                                    setTimeout(function() {
                                        window.location.reload();
                                    }, 1000)
                                }
                            }
                        } else {
                            if (INC.config.pageType == "cartPage") {
                                jQuery("html, body").animate({ scrollTop: 0 }, "fast");
                                setTimeout(function() {
                                    window.location.reload();
                                }, 1000)
                            }
                        }
                    }
                } else {
                    if (result_data.addedProducts != undefined && p_type_cole == "CollectOnly") {
                        if (result_data.addedProducts[0].qty == "" || result_data.addedProducts[0].qty == 0) {
                            if (INC.clientConfig.OOS.indexOf(productObj.id) == -1) {
                                INC.clientConfig.OOS.push(productObj.id)
                                INC.clientConfig.OOS_MESG.push("Sorry, not added for collection, insufficient stock")
                            }
                        }
                        if (INC.config.pageType == "cartPage") {
                            if(p_type_cole == "CollectOnly"){
                                jQuery("html, body").animate({ scrollTop: 0 }, "fast");
                                window.location.reload();
                            }
                        }
                    }else{
                        if (INC.config.pageType == "cartPage") {
                            if(p_type_cole == "CollectOnly"){
                                jQuery("html, body").animate({ scrollTop: 0 }, "fast");
                                window.location.reload();
                            }
                        }
                    }
                }
                if (result_data.addedProducts != undefined) {
                    if (INC.clientConfig.added_product_sku.indexOf(result_data.addedProducts[0].sku) == -1) {
                        INC.clientConfig.added_product_sku.push({
                            skus: result_data.addedProducts[0].sku,
                            qtys: result_data.addedProducts[0].qty
                        })
                    }
                }
                if (this.responseText.indexOf('error-page') == -1) {
                    if (result_data.cartData != undefined) {
                        var cart_qty = result_data.cartData.totalQty
                        if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                            if (document.querySelector('.header-minicart__counter') != null) {
                                if(cart_qty != undefined){
                                    document.querySelector('.header-minicart__counter').innerText = cart_qty;
                                }
                            }
                        } else {
                            if (document.querySelector('.header-wrapper .header-minicart .header-minicart__counter') != null) {
                                if(cart_qty != undefined){
                                    document.querySelector('.header-wrapper .header-minicart .header-minicart__counter').innerText = cart_qty;
                                }
                            }
                        }
                        var cart_qty = result_data.cartData.totalQty
                        if (result_data.addedProducts[0].qty == "0" || result_data.addedProducts[0].qty == "") {
                            var popcart = document.createElement('div')
                            popcart.innerHTML = result_data.cartPopupHtml

                            if (type_bundle != "delevery") {
                                if (popcart.querySelector('.product-card__bad-quantity') != null) {
                                    var errmsg = popcart.querySelector('.product-card__bad-quantity').innerText.split('to basket')[1].trim()

                                    if (del_is_oos == true) {
                                        INC.clientConfig.OOS_MESG.push("Sorry, Product is out of stock")
                                    } else {
                                        INC.clientConfig.OOS_MESG.push("Sorry, not added for delivery, insufficient stock")
                                    }
                                }
                                if (INC.clientConfig.OOS.indexOf(productObj.id) == -1) {
                                    INC.clientConfig.OOS.push(productObj.id)
                                }
                                // INC.methods.collectionfaildtoadd(searchParamObjString_c_f,addProductURL_c_f)
                            } else {
                                if (popcart.querySelector('.product-card__bad-quantity') != null) {
                                    var errmsg = popcart.querySelector('.product-card__bad-quantity').innerText.split('to basket')[1].trim()

                                    if (del_is_oos == true) {
                                        INC.clientConfig.OOS_MESG.push("Sorry, Product is out of stock")
                                    } else {
                                        INC.clientConfig.OOS_MESG.push("Sorry, not added for delivery, insufficient stock")
                                    }
                                }
                                if (INC.clientConfig.OOS.indexOf(productObj.id) == -1) {
                                    INC.clientConfig.OOS.push(productObj.id)
                                }
                            }
                        }
                    } 
                } 

                if (result_data.cartData != undefined) {
                    setTimeout(function() {
                        if (result_data.cartData != undefined) {
                            for (h = 0; h < result_data.cartData.products.length; h++) {
                                var data__id = result_data.cartData.products[h].sku
                                var data__position = ""
                                var added_qty = result_data.cartData.products[h].qty
                                var adde_items = document.querySelector('.inc_cart_added_product_block[id="' + data__id + '"]')

                                if (adde_items != null) {
                                    adde_items.setAttribute('data__id', data__id)
                                    adde_items.setAttribute('data__position', data__position)
                                    adde_items.setAttribute('added_qty', added_qty)
                                }

                                item_inc.push({
                                    data__id: data__id,
                                    data__position: data__position,
                                    added_qty: added_qty
                                })
                            }
                        }
                    }, 10)
                }
                if(type_bundle != "delevery" && result_data.addedProducts != undefined && p_type_cole == "CollectOnly"){
                    var added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_data.addedProducts[0].sku + '"]')
                    if (added_el != null) {
                        var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_data.addedProducts[0].sku + '"]')
                        var qtysub = result_data.addedProducts[0].qty
                        if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                            added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                        }
                    }
                }
            } 
            if (INC.config.pageType != "cartPage") INC.methods.addProductToSidebarCart(findObj, qty, productBlock, null, type_bundle);
            setTimeout(function() {
                if (type_bundle == "delevery") {
                    add_btn_click.innerText = "Add for Delivery";
                } else {
                    add_btn_click.innerText = "Click & Collect";
                }
                Array.prototype.forEach.call(add_btn_click, function(el) {
                    if (type_bundle == "delevery") {
                        el.innerText = "Add for Delivery";
                    } else {
                        el.innerText = "Click & Collect";
                    }
                });
                if (btn_addtocartn != undefined) {
                    btn_addtocartn.setAttribute("style", "pointer-events: auto;opacity: 1;");
                }
                if (btn_addtocartn != undefined) {
                    btn_addtocartn.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                }
            }, 2000);
            //}
        }
    }
    xhr.send(nwConfigObj.params);


    var pageType = "";
    switch (INC.config.pageType) {
        case "pdp":
            pageType = "107";
            break;
        case "productList":
            pageType = "101";
            break;
        case "cartPage":
            pageType = "103";
            break;
        case "other":
            pageType = "101";
            break;
    }
    if (INC.config.pageType != "cartPage") {
        var eventDataObj = {};
        eventDataObj["bundle_data"] = {
            "id": productObj.bundleId,
            "product_ids": [productObj.bundledProductId, productObj.idAdd],
            "product_id": productObj.bundledProductId
        }
    } else {
        var eventDataObj = {};
        eventDataObj["bundle_data"] = {
            "id": productObj.bundleId,
            "product_ids": [productObj.bundledProductId, productObj.idAdd],
            "product_id": productObj.bundledProductId
        }
    }
    var producttype=productObj.Field6
    INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType, producttype);

}
INC.methods.addBundleToCart = function(btn_cart, type_bundle) {
    INC.config.clientbtn =false
    var del_is_oos = false
    INC.clientConfig.OOS = []
    INC.clientConfig.OOS_COL = []
    INC.clientConfig.OOS_MESG = []
    INC.clientConfig.added_product_sku = []

    if (type_bundle == "delevery") {
        var addProductURL = INC.config.addToBasketURL;
        var add_type = "delevery"
    } else {
        var addProductURL = INC.config.click_collect_addToBasketURL;
        var add_type = "collection"
    }

    if (document.querySelectorAll('input[name="CSRFToken"]')[0] != undefined) {
        csrf_token = document.querySelectorAll('input[name="CSRFToken"]')[0].value;
    }
    var addProductURL_c_f = INC.config.addToBasketURL;

    var dataStore = INC.dataStore;
    var mainProductId = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "productBlock")).getAttribute('data-main_id');
    var pr_ids = []
    Object.keys(dataStore.bundleCartProducts).forEach(function(bundleCartProduct) {
        pr_ids.push("1")
    })

    var success_length = 0;
    var formData = []
    formData = new FormData();
    var t = 0;
    paddtype0 = "";
    paddtype1 = "";
    paddtype2 = "";
    paddtype3 = "";
    paddtype4 = "";
    paddtype5 = "";
    var data0 = {};
    var data1 = {};
    var data2 = {};
    var data3 = {};
    var data4 = {};
    var data5 = {};
    var data6 = {};
    var url0 = null;
    var url1 = null;
    var url2 = null;
    var url3 = null;
    var url4 = null;
    var url5 = null;
    var url6 = null;
    var parame0 = "";
    var parame1 = "";
    var parame2 = "";
    var parame3 = "";
    var parame4 = "";
    var parame5 = "";
    var parame6 = "";
    var formData = []
    var form_data_json = []
    var count_pr_to_add = 0
    var searchParamsObjArray = [];
    var timeoutOffset = 0;
    var total_length=Object.keys(dataStore.bundleCartProducts);
    Object.keys(dataStore.bundleCartProducts).forEach(function(bundleCartProduct) {
        var findObj = new INC.classes.FindObj({
            id: bundleCartProduct
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);

        var searchParamObjString_c_f = "CSRFToken=" + csrf_token + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "qty=" + dataStore.bundleCartProducts[bundleCartProduct];

        if (type_bundle == "delevery") {
            var searchParamObjString = "CSRFToken=" + csrf_token + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "qty=" + dataStore.bundleCartProducts[bundleCartProduct];
        } else {
            var searchParamObjString = "storeNamePost=" + INC.config.storeId + "&" + "productCodePost=" + productObj['idAdd'] + "&" + "hiddenPickupQty=" + dataStore.bundleCartProducts[bundleCartProduct];
        }

        if (count_pr_to_add == 0) {
            if (type_bundle == "delevery") {
                data0["CSRFToken"] = csrf_token;
                data0["productCodePost"] = productObj['idAdd'];
                data0["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame0 = searchParamObjString_c_f
            } else {
                data0["storeNamePost"] = INC.config.storeId;
                data0["productCodePost"] = productObj['idAdd'];
                data0["hiddenPickupQty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame0 = searchParamObjString_c_f
            }
            paddtype0 = productObj.Field6
            var url0 = addProductURL;
            formData.push(data0)
        } else if (count_pr_to_add == 1) {
            if (type_bundle == "delevery") {
                data1["CSRFToken"] = csrf_token;
                data1["productCodePost"] = productObj['idAdd'];
                data1["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame1 = searchParamObjString_c_f
            } else {
                data1["storeNamePost"] = INC.config.storeId;
                data1["productCodePost"] = productObj['idAdd'];
                data1["hiddenPickupQty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame1 = searchParamObjString_c_f
            }
            paddtype1 = productObj.Field6
            var url1 = addProductURL;
            formData.push(data1)
        } else if (count_pr_to_add == 2) {
            if (type_bundle == "delevery") {
                data2["CSRFToken"] = csrf_token;
                data2["productCodePost"] = productObj['idAdd'];
                data2["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame2 = searchParamObjString_c_f
            } else {
                data2["storeNamePost"] = INC.config.storeId;
                data2["productCodePost"] = productObj['idAdd'];
                data2["hiddenPickupQty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame2 = searchParamObjString_c_f
            }
            paddtype2 = productObj.Field6
            var url2 = addProductURL;
            formData.push(data2)
        } else if (count_pr_to_add == 3) {
            if (type_bundle == "delevery") {
                data3["CSRFToken"] = csrf_token;
                data3["productCodePost"] = productObj['idAdd'];
                data3["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame3 = searchParamObjString_c_f
            } else {
                data3["storeNamePost"] = INC.config.storeId;
                data3["productCodePost"] = productObj['idAdd'];
                data3["hiddenPickupQty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame3 = searchParamObjString_c_f
            }
            paddtype3 = productObj.Field6
            var url3 = addProductURL;
            formData.push(data3)
        } else if (count_pr_to_add == 4) {
            if (type_bundle == "delevery") {
                data4["CSRFToken"] = csrf_token;
                data4["productCodePost"] = productObj['idAdd'];
                data4["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame4 = searchParamObjString_c_f
            } else {
                data4["storeNamePost"] = INC.config.storeId;
                data4["productCodePost"] = productObj['idAdd'];
                data4["hiddenPickupQty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame4 = searchParamObjString_c_f
            }
            paddtype4 = productObj.Field6
            var url4 = addProductURL;
            formData.push(data4)
        } else if (count_pr_to_add == 5) {
            if (type_bundle == "delevery") {
                data5["CSRFToken"] = csrf_token;
                data5["productCodePost"] = productObj['idAdd'];
                data5["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame5 = searchParamObjString_c_f
            } else {
                data5["storeNamePost"] = INC.config.storeId;
                data5["productCodePost"] = productObj['idAdd'];
                data5["hiddenPickupQty"] = dataStore.bundleCartProducts[bundleCartProduct];
                parame5 = searchParamObjString_c_f
            }
            paddtype5 = productObj.Field6
            var url5 = addProductURL;
            formData.push(data5)
        }
        count_pr_to_add++
        if (total_length.length == count_pr_to_add) {
            ajax_add_to_cart(formData, btn_cart, mainProductId, addProductURL, add_type, paddtype0, paddtype1, paddtype2, paddtype3, paddtype4, paddtype5,parame0,parame1,parame2,parame3,parame4,parame5,addProductURL_c_f)
        }
    });


    Object.keys(dataStore.bundleCartProducts).forEach(function(bundleCartProduct) {
        var findObj = new INC.classes.FindObj({
            id: bundleCartProduct
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);

        var eventDataObj = {};
        var pageType = "100";

        eventDataObj["bundle_data"] = {
            "id": productObj.bundleId,
            "product_ids": [productObj.bundledProductId, productObj.id],
            "product_id": productObj.bundledProductId
        }
        var producttype=productObj.Field6
        if (Object.keys(dataStore.bundleCartProducts).length > 1 && INC.methods.getProductIdFromWebPage() != productObj.mainId) {
            INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType, producttype);
        }

        if (Object.keys(dataStore.bundleCartProducts).length == 1) {
            INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType, producttype);
        }
    });
}

function ajax_add_to_cart(formData, btn_cart, mainProductId, url_add, add_type, paddtype0, paddtype1, paddtype2, paddtype3, paddtype4, paddtype5,parame0,parame1,parame2,parame3,parame4,parame5,addProductURL_c_f) {
    INC.clientConfig.OOS = []
    INC.clientConfig.OOS_MESG = []

    callprodA()

    function callprodA() {
        jQuery.ajax({
            type: "POST",
            url: url_add,
            data: formData[0],
            error: function(jqXHR, textStatus, errorMessage) {

                if (formData[1] == undefined) {
                    if (btn_cart != undefined) {
                        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
							btn_cart.parentNode.classList.remove('inc_loading')
						}else{
                            btn_cart.classList.remove('inc_loading')
                        }
                       
                    }
                    if (window.innerWidth > 819) {} else {
                        btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                    }
                    INC.config.disablebtn = true
                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock();
                }

                if (formData[1] != undefined) {
                    callprodB()
                }
            },
            success: function(data) {
                var res_data = data
                INC.methods.response_callback(res_data,add_type,paddtype0,parame0,addProductURL_c_f)
                if (formData[1] == undefined) {
                    if(add_type != "delevery" && paddtype0 != "CollectOnly"){
                        var delay_add = 3000
                    }else{
                        var delay_add = 0
                    }
                    setTimeout(function(){
                        INC.config.disablebtn = true
                        if (btn_cart != undefined) {
                            if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
							btn_cart.parentNode.classList.remove('inc_loading')
						}else{
                            btn_cart.classList.remove('inc_loading')
                        }
                            if (window.innerWidth > 819) {} else {
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }
                        }
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock(add_type);
                    },delay_add);
                }

                if (formData[1] != undefined) {
                    callprodB()
                }
            }
        });
    }

    function callprodB() {
        jQuery.ajax({
            type: "POST",
            url: url_add,
            data: formData[1],
            error: function(jqXHR, textStatus, errorMessage) {
                if (formData[2] == undefined) {
                    if (btn_cart != undefined) {
                        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
							btn_cart.parentNode.classList.remove('inc_loading')
						}else{
                            btn_cart.classList.remove('inc_loading')
                        }
                        if (window.innerWidth > 819) {} else {
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }
                    }
                    INC.config.disablebtn = true
                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(add_type);
                }

                if (formData[2] != undefined) {
                    callprodC()
                }
            },
            success: function(data) {
                var res_data = data
                INC.methods.response_callback(res_data, add_type,paddtype1,parame1,addProductURL_c_f)
                if (formData[2] == undefined) {
                    if(add_type != "delevery" && paddtype0 != "CollectOnly"){
                        var delay_add = 3000
                    }else{
                        var delay_add = 0
                    }
                    setTimeout(function(){
                        INC.config.disablebtn = true
                        if (btn_cart != undefined) {
                            if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
							btn_cart.parentNode.classList.remove('inc_loading')
						}else{
                            btn_cart.classList.remove('inc_loading')
                        }
                            if (window.innerWidth > 819) {} else {
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }
                        }
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock(add_type);
                    },delay_add);

                }

                if (formData[2] != undefined) {
                    callprodC()
                }
            }
        });
    }

    function callprodC() {
        jQuery.ajax({
            type: "POST",
            url: url_add,
            data: formData[2],
            error: function(jqXHR, textStatus, errorMessage) {
                if (formData[3] == undefined) {
                    if (btn_cart != undefined) {
                        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
							btn_cart.parentNode.classList.remove('inc_loading')
						}else{
                            btn_cart.classList.remove('inc_loading')
                        }
                        if (window.innerWidth > 819) {} else {
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }
                    }
                    INC.config.disablebtn = true
                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(add_type);
                }

                if (formData[3] != undefined) {
                    callprodD()
                }
            },
            success: function(data) {
                var res_data = data
                INC.methods.response_callback(res_data, add_type,paddtype2,parame2,addProductURL_c_f)
                if (formData[3] == undefined) {
                    if(add_type != "delevery" && paddtype0 != "CollectOnly"){
                        var delay_add = 3000
                    }else{
                        var delay_add = 0
                    }
                    setTimeout(function(){
                        INC.config.disablebtn = true
                        if (btn_cart != undefined) {
                            if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
							btn_cart.parentNode.classList.remove('inc_loading')
						}else{
                            btn_cart.classList.remove('inc_loading')
                        }
                            if (window.innerWidth > 819) {} else {
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }
                        }
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock(add_type);
                    },delay_add);

                }

                if (formData[3] != undefined) {
                    callprodD()
                }
            }
        });
    }

    function callprodD() {
        jQuery.ajax({
            type: "POST",
            url: url_add,
            data: formData[3],
            error: function(jqXHR, textStatus, errorMessage) {
                if (formData[4] == undefined) {
                    INC.config.disablebtn = true
                    if (btn_cart != undefined) {
                        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
							btn_cart.parentNode.classList.remove('inc_loading')
						}else{
                            btn_cart.classList.remove('inc_loading')
                        }
                        if (window.innerWidth > 819) {} else {
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }
                    }

                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(add_type);
                }

                if (formData[4] != undefined) {
                    callprodE()
                }
            },
            success: function(data) {
                var res_data = data
                INC.methods.response_callback(res_data, add_type,paddtype3,parame3,addProductURL_c_f)
                if (formData[4] == undefined) {
                    if(add_type != "delevery" && paddtype0 != "CollectOnly"){
                        var delay_add = 3000
                    }else{
                        var delay_add = 0
                    }
                    setTimeout(function(){
                        INC.config.disablebtn = true
                        if (btn_cart != undefined) {
                            if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
							btn_cart.parentNode.classList.remove('inc_loading')
						}else{
                            btn_cart.classList.remove('inc_loading')
                        }
                            if (window.innerWidth > 819) {} else {
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }
                        }
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock(add_type);
                    },delay_add);
                }

                if (formData[4] != undefined) {
                    callprodE()
                }
            }
        });
    }

    function callprodE() {
        jQuery.ajax({
            type: "POST",
            url: url_add,
            data: formData[4],
            error: function(jqXHR, textStatus, errorMessage) {
                if (formData[5] == undefined) {
                    INC.config.disablebtn = true
                    if (btn_cart != undefined) {
                        if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
							btn_cart.parentNode.classList.remove('inc_loading')
						}else{
                            btn_cart.classList.remove('inc_loading')
                        }
                        if (window.innerWidth > 819) {} else {
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }
                    }

                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(add_type);
                }

                if (formData[5] != undefined) {
                    callprodF()
                }
            },
            success: function(data) {
                var res_data = data

                INC.methods.response_callback(res_data, add_type,paddtype4,parame4,addProductURL_c_f)
                if (formData[5] == undefined) {
                    if(add_type != "delevery" && paddtype0 != "CollectOnly"){
                        var delay_add = 3000
                    }else{
                        var delay_add = 0
                    }
                    setTimeout(function(){
                        INC.config.disablebtn = true
                        if (btn_cart != undefined) {
                            if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
							btn_cart.parentNode.classList.remove('inc_loading')
						}else{
                            btn_cart.classList.remove('inc_loading')
                        }
                            if (window.innerWidth > 819) {} else {
                                btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                            }
                        }
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock(add_type);
                    },delay_add);
                }

                if (formData[5] != undefined) {
                    callprodF()
                }
            }
        });
    }

    function callprodF() {
        jQuery.ajax({
            type: "POST",
            url: url_add,
            data: formData[5],
            error: function(jqXHR, textStatus, errorMessage) {
                INC.config.disablebtn = true
                if (btn_cart != undefined) {
                    if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
							btn_cart.parentNode.classList.remove('inc_loading')
						}else{
                            btn_cart.classList.remove('inc_loading')
                        }
                    if (window.innerWidth > 819) {} else {
                        btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                    }
                }

                document.querySelector('html').classList.add('inc_overlay');
                INC.methods.showSidebar();
                INC.methods.updateSidebarBlock(add_type);
            },
            success: function(data) {
                
                
                if(add_type != "delevery" && paddtype0 != "CollectOnly"){
                    var delay_add = 3000
                }else{
                    var delay_add = 0
                }
                setTimeout(function(){
                    if (btn_cart != undefined) {
                       if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_text"){
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }else if(btn_cart.classList == "inc_pdp_bundle_cart_summary_add_btn_Click_Collect_text_block"){
							btn_cart.parentNode.classList.remove('inc_loading')
						}else{
                            btn_cart.classList.remove('inc_loading')
                        }
                        if (window.innerWidth > 819) {} else {
                            btn_cart.parentNode.parentNode.classList.remove('inc_loading')
                        }
                    }
    
                    var res_data = data
                    INC.methods.response_callback(res_data, add_type,paddtype5,parame5,addProductURL_c_f)
    
                    INC.config.disablebtn = true
                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(add_type);
                },delay_add);

            }
        });
    }
}

INC.methods.response_callback = function(json_data, add_type,prod_type,searchParamObjString_c_f,addProductURL_c_f) {
    var del_is_oos = false
    
    var product_id_ad= searchParamObjString_c_f.split('productCodePost')[1].split('&qty')[0].replace('=','')
    if(add_type != "delevery" && prod_type != "CollectOnly"){
        if(json_data.addedProducts != undefined){
            if(document.querySelector('.inc_pdp_block .inc_product_module_block[data-id="'+json_data.addedProducts[0].sku+'"] .inc_product_desc_qty_input_text input') != undefined){
                if(json_data.addedProducts[0].qty != undefined && json_data.addedProducts[0].qty != ""){
                    var qty_sel=document.querySelector('.inc_pdp_block .inc_product_module_block[data-id="'+json_data.addedProducts[0].sku+'"] .inc_product_desc_qty_input_text input').value
                    if(parseInt(qty_sel) > json_data.addedProducts[0].qty){
                        if (INC.clientConfig.OOS.indexOf(product_id_ad) == -1) {
                            INC.clientConfig.OOS.push(product_id_ad)
                        }
                        var qtyss = parseInt(qty_sel)  - json_data.addedProducts[0].qty
                        var param_d = searchParamObjString_c_f.split('&qty')[0] + "&qty="+qtyss+""
                        INC.methods.collectionfaildtoadd(param_d,addProductURL_c_f,json_data.addedProducts[0].qty,del_is_oos)
                    }
                }else if(json_data.addedProducts[0].qty == ""){
                    if (INC.clientConfig.OOS.indexOf(product_id_ad) == -1) {
                        INC.clientConfig.OOS.push(product_id_ad)
                    }
                    var qty_sel=document.querySelector('.inc_pdp_block .inc_product_module_block[data-id="'+json_data.addedProducts[0].sku+'"] .inc_product_desc_qty_input_text input').value
                    var qtyss = parseInt(qty_sel)
                    var param_d = searchParamObjString_c_f.split('&qty')[0] + "&qty="+qtyss+""
                    INC.methods.collectionfaildtoadd(param_d,addProductURL_c_f,json_data.addedProducts[0].qty,del_is_oos)
                }
            }
        }
    }else{
        if(json_data.addedProducts != undefined && prod_type == "CollectOnly"){
            var added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + json_data.addedProducts[0].sku + '"]')
            if (added_el != null) {
                var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + json_data.addedProducts[0].sku + '"]')
                var qtysub = json_data.addedProducts[0].qty
                if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                    added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                }
            }
            if(json_data.addedProducts[0].qty == "" || json_data.addedProducts[0].qty == 0){
                if (INC.clientConfig.OOS.indexOf(product_id_ad) == -1) {
                    INC.clientConfig.OOS.push(product_id_ad)
                    INC.clientConfig.OOS_MESG.push("Sorry, not added for collection, insufficient stock")
                }
            }
        }
    }

    if(json_data.addedProducts != undefined){
        if(INC.clientConfig.added_product_sku.indexOf(json_data.addedProducts[0].sku) == -1){
            INC.clientConfig.added_product_sku.push({
                skus : json_data.addedProducts[0].sku,
                qtys:json_data.addedProducts[0].qty 
            })
        }
    }
    // if (json_data.indexOf('error-page') == -1) {
        if(json_data.cartData != undefined){
            var cart_qty = json_data.cartData.totalQty
            if (json_data.addedProducts[0].qty == "0" || json_data.addedProducts[0].qty == "") {
                var popcart = document.createElement('div')
                popcart.innerHTML = json_data.cartPopupHtml
                
                if(add_type != "delevery"){
                    if(popcart.querySelector('.product-card__bad-quantity') != null){
                        var errmsg = popcart.querySelector('.product-card__bad-quantity').innerText.split('to basket')[1].trim()
                       
                        if(del_is_oos == true){
                            INC.clientConfig.OOS_MESG.push("Sorry, Product is out of stock")
                        }else{
                            INC.clientConfig.OOS_MESG.push("Sorry, not added for delivery, insufficient stock")
                        }
                    }
                    if (INC.clientConfig.OOS.indexOf(product_id_ad) == -1) {
                        INC.clientConfig.OOS.push(product_id_ad)
                    }
                }else{
                    if(popcart.querySelector('.product-card__bad-quantity') != null){
                        var errmsg = popcart.querySelector('.product-card__bad-quantity').innerText.split('to basket')[1].trim()
                        if(del_is_oos == true){
                            INC.clientConfig.OOS_MESG.push("Sorry, Product is out of stock")
                        }else{
                            INC.clientConfig.OOS_MESG.push("Sorry, not added for delivery, insufficient stock")
                        }
                    }
                    if (INC.clientConfig.OOS.indexOf(product_id_ad) == -1) {
                        INC.clientConfig.OOS.push(product_id_ad)
                    }
                }
            }
        }
        if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {

            if (document.querySelector('.header-minicart__counter') != null && cart_qty != undefined) {
                document.querySelector('.header-minicart__counter').innerText = cart_qty;
            }
        } else {
            if (document.querySelector('.header-wrapper .header-minicart .header-minicart__counter') != null && cart_qty != undefined) {
                document.querySelector('.header-wrapper .header-minicart .header-minicart__counter').innerText = cart_qty;
            }
        }
    // }
}

INC.methods.collectionfaildtoadd = function(param, addProductURL, qty_ad, del_is_oos) {
    var xhr1 = new XMLHttpRequest();
    xhr1.open('POST', addProductURL, true);
    xhr1.onload = function() {}
    xhr1.setRequestHeader('content-type', 'application/x-www-form-urlencoded');


    xhr1.onreadystatechange = function() {
        if (xhr1.readyState === XMLHttpRequest.DONE && xhr1.status === 200) {
            if (xhr1.status == 200) {
                if (xhr1.responseText != "") {
                    respons = this.responseText
                    var result_datas = []
                    var respons12 = xhr1.responseText
                    setTimeout(function(){
                        if (typeof(respons12) != "object") {
                            if (respons12.indexOf('doctype html') == -1) {
                                var result_datas = JSON.parse(respons12);
                                var qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
                                for (q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                                    if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                                        INC.clientConfig.added_product_sku[q].qtys = qtysub
                                        break;
                                    }
                                }
                                if (result_datas.addedProducts != undefined && (qty_ad == 0 || qty_ad == "")) {
                                    if (result_datas.addedProducts[0].qty != undefined) {
                                        if (result_datas.addedProducts[0].qty == 0 || result_datas.addedProducts[0].qty == "") {
                                            if (INC.clientConfig.OOS_COL.indexOf(result_datas.addedProducts[0].sku) == -1) {
                                                INC.clientConfig.OOS_COL.push(result_datas.addedProducts[0].sku)
                                            }
                                            del_is_oos = true
                                            INC.clientConfig.OOS_MESG.push("Sorry, Product is out of stock")
                                            var added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')

                                            if (added_el != null) {
                                                if (added_el.querySelector('.inc_error_msg') != null) {
                                                    added_el.querySelector('.inc_error_msg').innerText = "Sorry, Product is out of stock."
                                                }
                                                if (added_el.querySelector('.inc_product_desc_qty_input_block input') != null) {
                                                    // added_el.querySelector('.inc_product_desc_qty_input_block').style.display = "none"
                                                }
                                            } else {
                                                if (added_el != null) {
                                                    if (added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg') != null) {
                                                        added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').classList.add('inc_error_msg')
                                                        added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').innerText = "Sorry, Product is out of stock."
                                                    }
                                                }
                                            }
                                        } else {
                                            if (result_datas.addedProducts != undefined) {
                                                if (result_datas.addedProducts[0].sku != undefined) {
                                                    var added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                                    if (added_el != null) {
                                                        var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                                        var qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
                                                        if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                                                            added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                                                        }
                                                        for (q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                                                            if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                                                                INC.clientConfig.added_product_sku[q].qtys = qtysub
                                                                break;
                                                            }
                                                        }
                                                        if (added_el.querySelector('.inc_error_msg') != null) {
                                                            added_el.querySelector('.inc_error_msg').innerText = "Note: Not available in store. Item added for delivery."
                                                        } else {
                                                            if (added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg') != null) {
                                                                added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').classList.add('inc_error_msg')
                                                                added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').innerText = "Note: Not available in store. Item added for delivery."
                                                            }
                                                        }
                                                    }
                                                }
                                                if (result_datas.addedProducts != undefined && qty_ad != 0 && result_datas.addedProducts[0].qty != 0) {
                                                    var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                                    var qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
                                                    if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                                                        added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                                                    }
                                                    for (q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                                                        if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                                                            INC.clientConfig.added_product_sku[q].qtys = qtysub
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                            if (result_datas.addedProducts != undefined && qty_ad != 0 && result_datas.addedProducts[0].qty != 0) {
                                                var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                                var qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
                                                if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                                                    added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                                                }
                                                for (q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                                                    if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                                                        INC.clientConfig.added_product_sku[q].qtys = qtysub
                                                        break;
                                                    }
                                                }
                                            }
                                            INC.clientConfig.OOS_MESG.push("Note: Not available in store. Item added for delivery.")
                                        }
                                    } else {
                                        if (result_datas.addedProducts != undefined) {
                                            if (result_datas.addedProducts[0].sku != undefined) {
                                                var added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                                var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                                var qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
                                                if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                                                    added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                                                }
                                                for (q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                                                    if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                                                        INC.clientConfig.added_product_sku[q].qtys = qtysub
                                                        break;
                                                    }
                                                }
                                                if (added_el != null) {
                                                    if (added_el.querySelector('.inc_error_msg') != null) {
                                                        added_el.querySelector('.inc_error_msg').innerText = "Note: Not available in store. Item added for delivery."
                                                    } else {
                                                        if (added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg') != null) {
                                                            added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').classList.add('inc_error_msg')
                                                            added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').innerText = "Note: Not available in store. Item added for delivery."
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        if (result_datas.addedProducts != undefined && qty_ad != 0 && result_datas.addedProducts[0].qty != 0) {
                                            var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                            var qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
                                            if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                                                added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                                            }
                                            for (q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                                                if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                                                    INC.clientConfig.added_product_sku[q].qtys = qtysub
                                                    break;
                                                }
                                            }
                                        }
                                        INC.clientConfig.OOS_MESG.push("Note: Not available in store. Item added for delivery.")
                                    }
                                } else {
                                    if (result_datas.addedProducts != undefined) {
                                        if (result_datas.addedProducts[0].sku != undefined) {
                                            var added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                            if (added_el != null) {
                                                if (added_el.querySelector('.inc_error_msg') != null) {
                                                    added_el.querySelector('.inc_error_msg').innerText = "Note: Not available in store. Item added for delivery."
                                                } else {
                                                    if (added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg') != null) {
                                                        added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').classList.add('inc_error_msg')
                                                        added_el.querySelector('.inc_cart_added_product_desc_price_active_text_msg').innerText = "Note: Not available in store. Item added for delivery."
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (result_datas.addedProducts != undefined && qty_ad != 0 && result_datas.addedProducts[0].qty != 0) {
                                        var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                        var qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
                                        if(added_elment != null){
                                            if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                                                added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                                            }
                                        }
                                        for (q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                                            if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                                                INC.clientConfig.added_product_sku[q].qtys = qtysub
                                                break;
                                            }
                                        }
                                    }
                                    INC.clientConfig.OOS_MESG.push("Note: Not available in store. Item added for delivery.")
                                }

                                if (result_datas.addedProducts != undefined && qty_ad != 0 && result_datas.addedProducts[0].qty != 0) {
                                    var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                    var qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
                                    if(added_elment != null){
                                        if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                                            added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                                        }
                                    }
                                    for (q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                                        if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                                            INC.clientConfig.added_product_sku[q].qtys = qtysub
                                            break;
                                        }
                                    }
                                }
                            } else {
                                if (result_datas.addedProducts != undefined) {
                                    if (result_datas.addedProducts[0].sku != undefined) {
                                        var added_el = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                        if (added_el != null) {
                                            if (added_el.querySelector('.inc_error_msg') != null) {
                                                added_el.querySelector('.inc_error_msg').innerText = "Note: Not available in store. Item added for delivery."
                                            }
                                        }
                                    }
                                }
                                if (result_datas.addedProducts != undefined && qty_ad != 0 && result_datas.addedProducts[0].qty != 0) {
                                    var added_elment = document.querySelector('.inc_cart_added_product_block.cross.collection[id="' + result_datas.addedProducts[0].sku + '"]')
                                    var qtysub = parseInt(result_datas.addedProducts[0].qty) + parseInt(qty_ad)
                                    if(added_elment != null){
                                        if (added_elment.querySelector('.inc_product_desc_qty_input_block input') != null) {
                                            added_elment.querySelector('.inc_product_desc_qty_input_block input').value = qtysub
                                        }
                                    }
                                    for (q = 0; q < INC.clientConfig.added_product_sku.length; q++) {
                                        if (INC.clientConfig.added_product_sku[q].skus == result_datas.addedProducts[0].sku) {
                                            INC.clientConfig.added_product_sku[q].qtys = qtysub
                                            break;
                                        }
                                    }
                                }
                                INC.clientConfig.OOS_MESG.push("Note: Not available in store. Item added for delivery.")
                            }
                        } else {

                            INC.clientConfig.OOS_MESG.push("Note: Not available in store. Item added for delivery.")
                            var result_datas = response;
                        }
                    },100)
                }
                if (INC.config.pageType == "cartPage") {
                    setTimeout(function() {
                        window.location.reload();
                    }, 1000)
                }
            }
        }
    }
    xhr1.send(param);
}
INC.methods.updateaddedProduct = function(data__position, data__id, added_qty, qty, elloader, yes) {
    var csrf_token = ""
    if (document.querySelectorAll('input[name="CSRFToken"]')[0] != undefined) {
        csrf_token = document.querySelectorAll('input[name="CSRFToken"]')[0].value;
    }
    var formData = []
    var data0 = {};
    data0["entryNumber"] = data__position;
    data0["productCode"] = data__id;

    if (yes == "yes") {
        data0["initialQuantity"] = 0;
        data0["quantity"] = 0;
    } else {
        data0["initialQuantity"] = added_qty;
        data0["quantity"] = qty;
    }
    data0["CSRFToken"] = csrf_token;
    formData.push(data0);
    jQuery.ajax({
        type: "POST",
        url: 'https://www.wickes.co.uk/cart/update',
        data: formData[0],
        error: function(jqXHR, textStatus, errorMessage) {},
        success: function(data) {
            elloader.classList.remove('show_loader')
            if (yes == "yes") {
                elloader.parentNode.removeChild(elloader)
            }
            var alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
            var morecount = 2
            if (window.innerWidth < 820) {
                morecount = 1
            }
            INC.methods.updateminicart(elloader)
            if (alladdedprodlength > morecount) {
                var tcount = alladdedprodlength - morecount + " More Item(s)"
                
                if(document.querySelector('.inc_sidebar_cart_added_block.active') != null){
                    document.querySelector('.inc_cart_added_right_btn_img').innerText =  "Show less"
                }else{
                    document.querySelector('.inc_cart_added_right_btn_img').innerText = "+" + tcount
                }
                document.querySelector('.inc_cart_added_right_btn_img').setAttribute('added_counts', (alladdedprodlength - morecount))
            } else {
                document.querySelector('.inc_cart_added_right_btn_img').innerText = ""
            }
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_1')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_2')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_3')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_4')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_00')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_11')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_21')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_31')
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_total_added_41')

            if (alladdedprodlength == 0) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_00')
            } else if (alladdedprodlength == 1) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_11')
            } else if (alladdedprodlength == 2) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_21')
            } else if (alladdedprodlength == 3) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_31')
            } else if (alladdedprodlength > 3) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_total_added_41')
            }
        }
    });
}

INC.methods.updateminicart = function(elloader) {
    item_inc = []
    var curtime = ""
    var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
    curtime = Date.now()
    var minicarturl = 'https://www.wickes.co.uk/cart/rollover/ResponsiveMiniCart?_=' + curtime + ''
    jQuery.ajax({
        url: minicarturl,
        cache: false,
        type: 'GET',
        async: false,
        error: function(jqXHR, textStatus, errorMessage) {},
        success: function(datarel) {
            var datahtml = datarel
            var dochtml = document.createElement('div')
            dochtml.innerHTML = datarel
            var htmlminicart = dochtml.querySelector('.popover-mini-basket')
            if (htmlminicart != null) {
                var poplayer = htmlminicart.querySelectorAll('.card')
                var alladdedp = poplayer
                for (k = 0; k < alladdedp.length; k++) {
                    var data__id = alladdedp[k].querySelector('.card__inner').getAttribute('data-id')
                    var data__position = alladdedp[k].querySelector('.card__inner').getAttribute('data-position')
                    var added_qty = alladdedp[k].querySelector('.product-card__quantity-value').innerText
                    var adde_items = document.querySelector('.inc_cart_added_product_block[id="' + data__id + '"]')

                    if (adde_items != null) {
                        adde_items.setAttribute('data__id', data__id)
                        adde_items.setAttribute('data__position', data__position)
                        adde_items.setAttribute('added_qty', added_qty)
                    }

                    item_inc.push({
                        data__id: data__id,
                        data__position: data__position,
                        added_qty: added_qty
                    })
                }
            }
            // if(elloader != undefined){
            // elloader.classList.remove('show_loader')
            // elloader.setAttribute('style','pointer-events: auto;opacity: 1;')
            // }

        }
    });
}
function add_to_cart_tracking_multiple(mainProductId) {
    var event_type = "bundle_add_to_cart";
    var core_prod_id = "";
    var productIdsforTracking = []
    core_prod_id = mainProductId;

    pageType = "100";
    // eventdata = { "id": bundleId, "product_ids": productIdsforTracking, "product_id": core_prod_id.toString() }
    var all_data = [];
    for (var k = 0; k < INC.config.bundle_tracking.length; k++) {
        if (INC.config.bundle_tracking.length == 1) {
            productIdsforTracking.push(mainProductId)
            productIdsforTracking.push(INC.config.bundle_tracking[k].id)
            all_data.push({
                id: parseInt(INC.config.bundle_tracking[k].bid),
                product_ids: productIdsforTracking,
                product_id: core_prod_id
            })
            productIdsforTracking = []
        } else {
            if (mainProductId != INC.config.bundle_tracking[k].id) {
                productIdsforTracking.push(mainProductId)
                productIdsforTracking.push(INC.config.bundle_tracking[k].id)
                all_data.push({
                    id: parseInt(INC.config.bundle_tracking[k].bid),
                    product_ids: productIdsforTracking,
                    product_id: core_prod_id
                })
                productIdsforTracking = []
            }
        }
    }
    data = {
        "eventData": btoa((JSON.stringify({
            "event_data": {
                "bundle_data": all_data
            },
            "page_type": pageType.toString(),
            "event_type": event_type,
            "method": "track",
            "platform": "",
            "token": INC.config.clientToken,
            "mb": "1"
        }))),
        "vid": INC.config.ivid,
        "time": getCurrentFormattedTime(),
        "uri": document.location.href
    };
    makeTrackingApiCall(JSON.stringify(data));


}
function makeTrackingApiCall(eventdata) {
    p_url = '//optimizedby.increasingly.co/ImportData';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    // m_incBndle.DataModel.jsonData = xhr.responseText;
                    // callback(m_incBndle.DataModel.jsonData)
                } else {
                }
            }
        }
    };
    xhr.open("POST", p_url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(eventdata);
}
function getCurrentFormattedTime() {
    var d = new Date();
    var currentTime = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
    return currentTime;
}

INC.methods.checkStatusVAT = function () {
    if (INC.methods.checkStatusLoggedIn()) return "false";
    var cookieArray = document.cookie.split(";");
    var statusVAT = "true";
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "includeVat") {
            statusVAT = cookieSplit[1].trim();
        }
    });

    return statusVAT;
}

INC.methods.checkStatusLoggedIn = function () {
    var cookieArray = document.cookie.split(";");
    var statusLoggedIn = false;
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "customer_name") {
            statusLoggedIn = true;
        }
    });

    return statusLoggedIn;
}

INC.methods.trackingEvents = function(eventType, eventDataObj, pageType, producttype) {
    // var importEventDataObj = new INC.classes.EventData(eventDataObj);
    var importEventDataObj = {};
    var importDataObj = {};

    importEventDataObj["event_data"] = eventDataObj;
    var prd_type=""
    if (producttype == "Both") {
        prd_type = "1"
    } else if (producttype == "DeliveryOnly") {
        prd_type = "2"
    } else if (producttype == "CollectOnly") {
        prd_type = "3"
    }  else if (producttype == "oos") {
        prd_type = ""
    } 
    switch (eventType) {

        case "catalogProductView":
            if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                importEventDataObj["event_type"] = "catalog_product_view";
                importEventDataObj["page_type"] = "catalog_product_view";
                importEventDataObj["method"] = "track";
                importEventDataObj["store_code"] = "wickes_app";
            } else {
                importEventDataObj["event_type"] = "catalog_product_view";
                importEventDataObj["page_type"] = "catalog_product_view";
                importEventDataObj["method"] = "track";
            }
            break;
        case "bundleProductClickTracking":
            if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                importEventDataObj["event_type"] = "bundle_product_click_tracking";
                importEventDataObj["page_type"] = pageType;

                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                importEventDataObj["store_code"] = "wickes_app";
                INC.methods.sendAffiliateRequest();
            } else {
                importEventDataObj["event_type"] = "bundle_product_click_tracking";
                importEventDataObj["page_type"] = pageType;

                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                INC.methods.sendAffiliateRequest();
            }
            break;
        case "bundleAddToCart":
            if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                importEventDataObj["event_type"] = "bundle_add_to_cart";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["is_logged"] = (INC.clientConfig.statusLoggedIn == true) ? "1" : "0";
                importEventDataObj["method"] = "track";
                importEventDataObj["store_code"] = "wickes_app";
                INC.methods.sendAffiliateRequest();
            } else {
                importEventDataObj["event_type"] = "bundle_add_to_cart";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["is_logged"] = (INC.clientConfig.statusLoggedIn == true) ? "1" : "0";
                importEventDataObj["method"] = "track";
                INC.methods.sendAffiliateRequest();
            }
            break;
    }
    importEventDataObj["purchase_type"] = prd_type;
    importEventDataObj["platform"] = "";
    importEventDataObj["token"] = INC.config.clientToken;
    importDataObj["eventData"] = btoa(JSON.stringify(importEventDataObj));
    importDataObj["uri"] = window.location.href;
    importDataObj["vid"] = INC.config.ivid;
    INC.methods.sendTrackingEvents(importDataObj);
}
INC.methods.sendTrackingEvents = function (importDataObj) {
    var xhr = new XMLHttpRequest();
    var method = "POST";
    var url = INC.config.trackingURL;
    xhr.onreadystatechange = handleStateChange;

    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    function handleStateChange() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // logger(xhr.responseText);
        }
    }

    xhr.send(JSON.stringify(importDataObj));
}

INC.methods.sendAffiliateRequest = function () {
    var url = INC.config.affiliateURL;
    var oImg = document.createElement("img");
    oImg.setAttribute('id', 'cstracking')
    oImg.setAttribute('src', url);
    oImg.setAttribute('height', '1px');
    oImg.setAttribute('width', '1px');
    oImg.setAttribute('style', 'display:none')
    document.body.appendChild(oImg);
}
INC.methods.addVisitorID = function () {

    function generateUniqueINCVisitorId(len, bits) {

        var bits = bits || 36;
        var outStr = "";
        var newStr;
        while (outStr.length < len) {
            newStr = Math.random().toString(bits).slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr;
    }

    var cookieArray = document.cookie.split(";");
    var ivid = "";
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "ivid") {
            ivid = cookieSplit[1].trim();
        }
    });

    if (ivid.length == 0) {
        ivid = generateUniqueINCVisitorId(42, 16);
        document.cookie = "ivid=" + ivid + ";" + "expires=16 Jul 2021 06:23:41 GMT;" + "path=/";
    }
    

    // var oImg = document.createElement("img");
    // oImg.setAttribute('src', "///optimizedby.increasingly.co/GetVisitorId?ivid=" + ivid);
    // oImg.setAttribute('height', '1px');
    // oImg.setAttribute('width', '1px');
    // oImg.setAttribute('style', 'display:none');
    // document.body.appendChild(oImg);

    INC.config.ivid = ivid;

    return ivid;
}


INC.checkDevUserCookie();


$( ".mh-atb" ).click(function() {
    document.querySelector('body').classList.add('calc')
});

document.onclick = clickListener;
    
function clickListener(e) {
    var clickedElement = e.target;
    if(clickedElement != null){
        tags = document.getElementsByTagName(clickedElement.tagName);
        try{

            if(clickedElement.className == "inc_product_modal_block active"){
                if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) &&  onloadpdp == true  && window.innerWidth < 1337){
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        document.querySelector('body').style.position = "relative"
                        if(inc_scroll_height > 100){
                            jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                        }
                    }
                }
                var docpdpinc = document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_block');
                if(docpdpinc != null){
                    if(window.innerWidth < 1025 && window.innerWidth > 819){
                        docpdpinc.scrollLeft = 0
                        INC.clientConfig.offset = 0;
                        INC.clientConfig.slidevalue = 0;
                        if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                            document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                        }
                        if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                            document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                            document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                            document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                            document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                        }
                    }
                }
                if(clickedElement.className == "inc_pdp_bundle_cart_overlay_block"){
                    document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
                }
                // if((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true){
                //     if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                //         // jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                //         jQuery("html, body").animate({ scrollTop:  inc_scroll_height }, 0);
                //     }
                // }
                if(document.querySelector('.inc_sidebar_modal_block.active') == null){
                    document.querySelector('html').classList.remove('inc_overlay');
                }

                document.querySelector('html').classList.remove('inc_popup_open')
                if(document.querySelector('.inc_product_Info_Full_desc_info_block.show_full_desc') != null){
                    document.querySelector('.inc_product_Info_Full_desc_info_block.show_full_desc .close_read_more').click()
                }
                clickedElement.classList.remove('active')
            }
            if(window.innerWidth <820){
            if(clickedElement.className !="inc_product_variant_simple_text config"){
                if(document.querySelector(".inc_product_block.configurable") != null){
                    document.querySelector('html').classList.remove('inc_overlay');
                }
            }
        }

            if(clickedElement.className == "sidebar_outer sidebar_outer_active"){
                document.querySelector('.inc_header_continue_img').click()
            }
            if(clickedElement.className != "inc_product_variant_simple_text config" && clickedElement.className != "inc_product_desc_variant_popup_close_block" && clickedElement.className != "inc_product_desc_add_title_text_block" && clickedElement.tagName != "SELECT" && clickedElement.className != "inc_product_header_block active" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block active" && clickedElement.className != "inc_product_desc_att_block attributes_avail active" && clickedElement.className != "inc_product_desc_qty_block active" && clickedElement.tagName != "LABEL" && clickedElement.tagName != "INPUT" && clickedElement.className != "inc_product_desc_qty_block" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block" && clickedElement.className != "inc_product_header_block" && clickedElement.className != "inc_product_desc_att_variant_text" && clickedElement.className != "inc_product_desc_att_variant_add_block"){
                if(clickedElement.classList != undefined){
                    if(clickedElement.classList.contains('variantoption') == false && clickedElement.parentNode.parentNode.parentNode.parentNode.querySelector('.error_inc_message') == null){
                        var allact = document.querySelectorAll('.inc_product_desc_att_block.active')
                        for(q=0;q<allact.length;q++){
                            allact[q].classList.remove('active')
                        }
                        if(document.querySelector('.inc_product_block.show_overlay') != null){
                            document.querySelector('.inc_product_block.show_overlay').classList.remove('show_overlay')
                        }
                    }
                }
            }
            if(clickedElement.className == "inc_pdp_bundle_cart_overlay_block active"){
                document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
            }
            if(clickedElement.className == "inc_pdp_bundle_cart_overlay_block"){
                document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
            }
            if(clickedElement.className == "inc_promo_popup inc_active"){
                document.querySelector('html').classList.remove('inc_overlay_promo');
                clickedElement.classList.remove('inc_active')
                if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                    document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
                }
            }
            if(clickedElement.parentNode != null){
                if(clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_color_title_text_selected" && clickedElement.parentNode.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_zero_title_text" &&  clickedElement.className != "inc_product_desc_att_zero_title_text_block" && clickedElement.className != "inc_product_desc_add_block" && clickedElement.className != "inc_product_desc_add_text" && clickedElement.className != "img_color_swatch"){
                    if(document.querySelector('.inc_product_desc_att_block .show_dropdown') != null){
                        document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
                    }
                }
            }
            if(document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') == null){
                if(document.querySelector('.inc_sidebar_modal_block.active') != null){
                    if(document.querySelector('.close_read_more') != null){
                        document.querySelector('.close_read_more').click()
                    }
                    if(document.querySelector('.inc_cart_added_product_block.remove_product_conf_modal') == null){
                        if(document.querySelector('.inc_promo_popup.inc_active') == null){
                            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
                        }
                    }
                }
            }
            if(clickedElement.className == "inc_pdp_bundle_product_list_wrapper_items_block active"){
                document.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_block').click()
            }

            if (clickedElement.className == "mt-calc-link"){
                document.querySelector('body').classList.add('calc')
            }

            if (clickedElement.classList.contains("mh-atb") != true){
                if ((clickedElement.className == "btn btn-action btn_full btn-add-to-basket" || clickedElement.className == "btn__text") && document.querySelector('body').classList.contains('calc') != true && clickedElement.classList.contains("mh-atb") != true && INC.config.pageType == "pdp") {
                    var checking_popup = setInterval(function() {
                        if (document.querySelector('.mini-cart-content') != null) {
                            var rem_pop = document.querySelector('.mini-cart-content').style.display
                            if (rem_pop == "block") {
                                clearInterval(checking_popup)
                                document.querySelector('.mini-cart-content').setAttribute('style', 'display:none');
                            }
                        }
                    }, 0)
                    if (clickedElement.className == "btn btn-action btn_full btn-add-to-basket" || clickedElement.parentNode.className == "btn btn-action btn_full btn-add-to-basket") {
                        // window.scrollBy(0, -100)
                        if (clickedElement.parentNode.parentNode.className == "add_to_cart_form" || clickedElement.parentNode.parentNode.className){
                            var elClientAddToCartBtn = document.querySelector('.btn-add-to-basket');
                            var findObj = new INC.classes.FindObj();
                            findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({
                                mainId: INC.dataStore.pdpProductId
                            }).id;
                            var sbBlock = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock"));
                            if (sbBlock != null) {
                                sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedListBlock")).innerHTML = "";
                                sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarHeaderItemCountFigureText")).innerText = 0;
                                var qty = 1;
                                if (INC.config.deviceType == "desktop") {
                                    qty = elClientAddToCartBtn.parentNode.parentNode.querySelector('#quantity-field').value;
                
                                    // qty = elClientAddToCartBtn.parentNode.parentNode.parentNode.parentNode.querySelector('.quantity button[data-id="Quantity"] span').innerText;
                                }
                                if (INC.config.deviceType == "mobile") {
                                    qty = elClientAddToCartBtn.parentNode.parentNode.querySelector('#quantity-field').value;
                
                                }
                
                
                
                                if (elClientAddToCartBtn.parentNode.parentNode.parentNode.querySelector('div[data-test-id="selected-option"]') == null) {
                                    if (document.querySelector('.pdp-price__size .pdp-price__notification.error') != null) {
                                        if (document.querySelector('.pdp-price__size .pdp-price__notification.error').getAttribute('style') == "display:none" || document.querySelector('.pdp-price__size .pdp-price__notification.error').getAttribute('style') == "display: none;") {
                                            INC.clientConfig.OOS = []
                                            INC.clientConfig.OOS_COL = []
                                            INC.clientConfig.OOS_MESG = []
                                            INC.config.clientbtn =true
                                            if (qty != undefined) {
                                                if (qty != "0") {
                                                    if (qty != "") {
                                                        if (qty > 0) {
                                                            if (qty != "-0") {
                                                                if (qty.startsWith("0") == false) {
                                                                    if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                                                                        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                                                                    }
                                                                    if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                                                                        document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                                                        document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                                                                        document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                                                                        document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                                                                    }
                                                                    // document.querySelector('html').classList.add('inc_overlay');
                                                                    INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn", "delevery");
                                                                    document.querySelector('.inc_header_item_count_figure_text').innerText = "|"
                                                                    INC.methods.showSidebar();
                                                                    if (document.querySelector('.s7staticimage img') != null && document.querySelector('.inc_cart_added_product_img') != null) {
                                                                        var p_img = document.querySelector('.s7staticimage img').src
                                                                        if (document.querySelector('.inc_cart_added_product_img img') != null) {
                                                                            document.querySelector('.inc_cart_added_product_img img').src = p_img
                                                                        }
                                                                    }
                                                                    if (document.querySelector('#variant') != null) {
                                                                        var sel_elm_cl = document.querySelector('#variant')
                                                                        optionSelected = sel_elm_cl.options[sel_elm_cl.selectedIndex].innerText.trim();
                                                                        var client_var = optionSelected
                                                                        if (document.querySelector('.inc_cart_added_product_desc_att_color_text_block') != null) {
                                                                            document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerText = client_var
                                                                        }
                                                                        var pname = document.querySelector('.pdp__heading').innerText
                                                                        if (document.querySelector('.inc_cart_added_product_desc_title_text') != null) {
                                                                            document.querySelector('.inc_cart_added_product_desc_title_text').innerHTML = pname
                                                                        }
                                                                        var product_price = 0
                                                                        if (document.querySelector('.pdp-price-container .pdp-price__old-price') == null) {
                                                                            var product_price = $('.pdp-price-container .pdp-price__new-price').text().replace('£', '').replace(',', '').trim();
                
                                                                            if (product_price.indexOf('From') >= 0) {
                                                                                product_price.replace('From', '').trim()
                                                                            }
                                                                            var prodPricing = product_price;
                                                                            product_price = product_price * qty
                                                                            var old_price = null;
                                                                        } else {
                                                                            var product_price = jQuery('.pdp-price-container .pdp-price__old-price').text().toString().replace('£', '').replace(',', '').trim();
                
                                                                            if (product_price.indexOf('From') >= 0) {
                                                                                product_price.replace('From', '').trim()
                                                                            }
                                                                            var prodPricing = product_price;
                                                                            product_price = product_price * qty
                                                                            var old_price = $('.pdp-price-container .pdp-price__new-price').text().replace(',', '').replace('£', '').trim();
                                                                        }
                                                                        if (old_price != null) {
                                                                            if (document.querySelector('.inc_cart_added_product_desc_price_active_text') != null) {
                                                                                document.querySelector('.inc_cart_added_product_desc_price_active_text').innerText = formatter.format(old_price).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
                                                                            }
                                                                            if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                                                                                document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').innerText = formatter.format(old_price * parseInt(qty)).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
                                                                                
                                                                                document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').setAttribute('subtotalactiveprice', old_price)
                                                                            }
                                                                        } else if (product_price != 0) {
                                                                            if (document.querySelector('.inc_cart_added_product_desc_price_active_text') != null) {
                                                                                document.querySelector('.inc_cart_added_product_desc_att_block').classList.add('active');
                                                                                document.querySelector('.inc_cart_added_product_desc_price_active_text').innerText = formatter.format(prodPricing).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
                                                                            }
                                                                            if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                                                                                document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').innerText = "" + formatter.format(product_price).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
                                                                                document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').setAttribute('subtotalactiveprice', product_price)
                                                                            }
                                                                        }
                                                                        checkoosmainproduct()
                
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                
                                            INC.clientConfig.offset = 0;
                                            INC.clientConfig.slidevalue = 0;
                                            if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                                                document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                                                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                                                    document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                                                    document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                                                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                                                }
                                            }
                                        }
                                    } else {

                                    
                
                                        INC.config.clientbtn =true
                                        INC.clientConfig.OOS = []
                                        INC.clientConfig.OOS_COL = []
                                        INC.clientConfig.OOS_MESG = []
                                        if (qty != undefined) {
                                            if (qty != "0") {
                                                if (qty != "") {
                                                    if (qty > 0) {
                                                        if (qty != "-0") {
                                                            if (qty.startsWith("0") == false) {
                                                                if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                                                                    document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                                                                }
                                                                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                                                                    document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                                                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                                                                    document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                                                                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                                                                }
                                                                // document.querySelector('html').classList.add('inc_overlay');
                                                                document.querySelector('.inc_header_item_count_figure_text').innerText = "|"
                                                                INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn", "delevery");
                                                                document.querySelector('.inc_header_item_count_figure_text').innerText = "|"
                                                                INC.methods.showSidebar();
                                                                if (document.querySelector('.s7staticimage img') != null && document.querySelector('.inc_cart_added_product_img') != null) {
                                                                    var p_img = document.querySelector('.s7staticimage img').src
                                                                    if (document.querySelector('.inc_cart_added_product_img img') != null) {
                                                                        document.querySelector('.inc_cart_added_product_img img').src = p_img
                                                                    }
                                                                }
                                                                if (document.querySelector('#variant') != null) {
                                                                    var sel_elm_cl = document.querySelector('#variant')
                                                                    optionSelected = sel_elm_cl.options[sel_elm_cl.selectedIndex].innerText.trim();
                                                                    var client_var = optionSelected
                                                                    if (document.querySelector('.inc_cart_added_product_desc_att_color_text_block') != null) {
                                                                        document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerText = client_var
                                                                    }
                                                                    var pname = document.querySelector('.pdp__heading').innerText
                                                                    if (document.querySelector('.inc_cart_added_product_desc_title_text') != null) {
                                                                        document.querySelector('.inc_cart_added_product_desc_title_text').innerHTML = pname
                                                                    }
                                                                    var product_price = 0
                                                                    if (document.querySelector('.pdp-price-container .pdp-price__old-price') == null) {
                                                                        var product_price = $('.pdp-price-container .pdp-price__new-price').text().replace('£', '').trim();
                                                                        if (product_price.indexOf('From') >= 0) {
                                                                            product_price.replace('From', '').trim()
                                                                        }
                                                                        var old_price = null;
                                                                    } else {
                                                                        var product_price = jQuery('.pdp-price-container .pdp-price__old-price').text().toString().replace('£', '').trim();
                                                                        if (product_price.indexOf('From') >= 0) {
                                                                            product_price.replace('From', '').trim()
                                                                        }
                                                                        var old_price = $('.pdp-price-container .pdp-price__new-price').text().replace('£', '').trim();
                                                                    }
                                                                    if (old_price != null) {
                                                                        if (document.querySelector('.inc_cart_added_product_desc_price_active_text') != null) {
                                                                            document.querySelector('.inc_cart_added_product_desc_price_active_text').innerText = "  " + INC.clientConfig.currencySymbol + formatter.format(old_price).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
                                                                        }
                                                                        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                                                                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').innerText = " " + INC.clientConfig.currencySymbol + formatter.format(old_price).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString()
                                                                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').setAttribute('subtotalactiveprice', old_price)
                                                                        }
                                                                    } else if (product_price != 0) {
                                                                        if (document.querySelector('.inc_cart_added_product_desc_price_active_text') != null) {
                                                                            document.querySelector('.inc_cart_added_product_desc_price_active_text').innerText = " " + INC.clientConfig.currencySymbol + formatter.format(product_price).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() 
                                                                        }
                                                                        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                                                                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').innerText = " " + INC.clientConfig.currencySymbol + formatter.format(product_price * parseInt(qty)).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() 
                                                                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').setAttribute('subtotalactiveprice', product_price)
                                                                        }
                                                                    }
                                                                    checkoosmainproduct()
                                                                }
                                                            }
                
                                                        }
                                                    }
                                                }
                                            }
                                        }
                
                                        INC.clientConfig.offset = 0;
                                        INC.clientConfig.slidevalue = 0;
                                        if (document.querySelector('.inc_pdp_bundle_product_list_main_block') != null) {
                                            var bundln = Object.keys(INC.dataStore.dataStoreObj).length;
                
                                            if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                                                document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                                                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                                                    document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                                                    document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                                                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
            
                } else if (document.querySelector('#modal-click-and-collect.show') != null) {
                    if (INC.config.storeId == "") {
                        var storeids = setInterval(function() {
                            if (document.querySelector('.card-store-collect__actions input[name="storeNamePost"]') != null) {
                                clearInterval(storeids)
                                if (document.querySelector('form input[name="storeNamePost"]') != null) {
                                    INC.config.storeId = document.querySelector('form input[name="storeNamePost"]').value
                                    localStorage.setItem('inc_storeId', INC.config.storeId)
                                }
            
                                var overl = document.querySelector('.inc_sidebar_overlay_block')
                                var out_el = document.querySelector('.sidebar_outer')
                                if (overl != null) {
                                    overl.parentNode.removeChild(overl)
                                }
                                if (out_el != null) {
                                    out_el.parentNode.removeChild(out_el)
                                }
                                init_flag = true
                                init_fun_flag = true
                                init_irb_flag = true
                                onloadpdp = false
                                INC.init('init_call');
                            }
                        }, 10);
                    } else {
                        if (document.querySelector('form input[name="storeNamePost"]') != null) {
                            INC.config.storeId = document.querySelector('form input[name="storeNamePost"]').value
                            localStorage.setItem('inc_storeId', INC.config.storeId)
                        }
            
                    }
            
                    if (clickedElement.classList.contains('card-store-collect__btn') == true) {
                        setTimeout(function() {
                            var elClientAddToCartBtn = document.querySelector('.btn-add-to-basket');
                            if (elClientAddToCartBtn == null) {
                                elClientAddToCartBtn = document.querySelector('.click_pickupInStore_Button')
                            }
                            INC.config.clientbtn =true
                            if (clickedElement.parentNode.querySelector('form input[name="storeNamePost"]') != null) {
                                INC.config.storeId = clickedElement.parentNode.querySelector('form input[name="storeNamePost"]').value
                                localStorage.setItem('inc_storeId', INC.config.storeId)
                            }
                            var findObj = new INC.classes.FindObj();
                            findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({
                                mainId: INC.dataStore.pdpProductId
                            }).id;
                            var sbBlock = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock"));
                            if (sbBlock != null) {
                                sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedListBlock")).innerHTML = "";
                                sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarHeaderItemCountFigureText")).innerText = 0;
                                var qty = "1";
                                if (INC.config.deviceType == "desktop" && elClientAddToCartBtn != null) {
                                    if (elClientAddToCartBtn.parentNode.parentNode.querySelector('#quantity-field') != null) {
                                        qty = elClientAddToCartBtn.parentNode.parentNode.querySelector('#quantity-field').value;
                                    }
                                }
                                if (INC.config.deviceType == "mobile" && elClientAddToCartBtn != null) {
                                    if (elClientAddToCartBtn.parentNode.parentNode.querySelector('#quantity-field') != null) {
                                        qty = elClientAddToCartBtn.parentNode.parentNode.querySelector('#quantity-field').value;
                                    }
                                }
            
                                if (elClientAddToCartBtn.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.click-and-collect__product input') != null) {
                                    qty = elClientAddToCartBtn.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.click-and-collect__product input').value
                                }
            
                                if (elClientAddToCartBtn.parentNode.parentNode.parentNode.querySelector('div[data-test-id="selected-option"]') == null) {
                                    if (document.querySelector('.pdp-price__size .pdp-price__notification.error') != null) {
                                        if (document.querySelector('.pdp-price__size .pdp-price__notification.error').getAttribute('style') == "display:none" || document.querySelector('.pdp-price__size .pdp-price__notification.error').getAttribute('style') == "display: none;") {
            
                                            INC.clientConfig.OOS = []
                                            INC.clientConfig.OOS_COL = []
                                            INC.clientConfig.OOS_MESG = []
                                            if (qty != undefined) {
                                                if (qty != "0") {
                                                    if (qty != "") {
                                                        if (qty > 0) {
                                                            if (qty != "-0") {
                                                                if (qty.startsWith("0") == false) {
                                                                    if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                                                                        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                                                                    }
                                                                    if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                                                                        document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                                                        document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                                                                        document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                                                                        document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                                                                    }
                                                                    // document.querySelector('html').classList.add('inc_overlay');

                                                                    INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn", "collection");
                                                                    document.querySelector('.inc_header_item_count_figure_text').innerText = "|"
                                                                    INC.methods.showSidebar();
                                                                    if (document.querySelector('.s7staticimage img') != null && document.querySelector('.inc_cart_added_product_img') != null) {
                                                                        var p_img = document.querySelector('.s7staticimage img').src
                                                                        if (document.querySelector('.inc_cart_added_product_img img') != null) {
                                                                            document.querySelector('.inc_cart_added_product_img img').src = p_img
                                                                        }
                                                                    }
                                                                    if (document.querySelector('#variant') != null) {
                                                                        var sel_elm_cl = document.querySelector('#variant')
                                                                        optionSelected = sel_elm_cl.options[sel_elm_cl.selectedIndex].innerText.trim();
                                                                        var client_var = optionSelected
                                                                        if (document.querySelector('.inc_cart_added_product_desc_att_color_text_block') != null) {
                                                                            document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerText = client_var
                                                                        }
                                                                        var pname = document.querySelector('.pdp__heading').innerText
                                                                        if (document.querySelector('.inc_cart_added_product_desc_title_text') != null) {
                                                                            document.querySelector('.inc_cart_added_product_desc_title_text').innerHTML = pname
                                                                        }
                                                                        var product_price = 0
                                                                        if (document.querySelector('.pdp-price-container .pdp-price__old-price') == null) {
                                                                            var product_price = $('.pdp-price-container .pdp-price__new-price').text().replace('£', '').replace(',', '').trim();
            
                                                                            if (product_price.indexOf('From') >= 0) {
                                                                                product_price.replace('From', '').trim()
                                                                            }
                                                                            var prodPricing = product_price;
                                                                            product_price = product_price * qty
                                                                            var old_price = null;
                                                                        } else {
                                                                            var product_price = jQuery('.pdp-price-container .pdp-price__old-price').text().toString().replace('£', '').replace(',', '').trim();
            
                                                                            if (product_price.indexOf('From') >= 0) {
                                                                                product_price.replace('From', '').trim()
                                                                            }
                                                                            var prodPricing = product_price;
                                                                            product_price = product_price * qty
                                                                            var old_price = $('.pdp-price-container .pdp-price__new-price').text().replace(',', '').replace('£', '').trim();
                                                                        }
                                                                        if (old_price != null) {
                                                                            if (document.querySelector('.inc_cart_added_product_desc_price_active_text') != null) {
                                                                                document.querySelector('.inc_cart_added_product_desc_price_active_text').innerText = INC.clientConfig.currencySymbol + formatter.format(old_price ).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() 
                                                                            }
                                                                            if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                                                                                document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').innerText = INC.clientConfig.currencySymbol + formatter.format(old_price * parseInt(qty)).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() 
                                                                                document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').setAttribute('subtotalactiveprice', old_price)
                                                                            }
                                                                        } else if (product_price != 0) {
                                                                            if (document.querySelector('.inc_cart_added_product_desc_price_active_text') != null) {
                                                                                document.querySelector('.inc_cart_added_product_desc_att_block').classList.add('active');
                                                                                document.querySelector('.inc_cart_added_product_desc_price_active_text').innerText = INC.clientConfig.currencySymbol + formatter.format(prodPricing).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() 
                                                                            }
                                                                            if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                                                                                document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').innerText = "" + INC.clientConfig.currencySymbol + formatter.format(product_price).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() 
                                                                                document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').setAttribute('subtotalactiveprice', product_price)
                                                                            }
                                                                        }
                                                                        checkoosmainproduct()
            
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
            
                                            INC.clientConfig.offset = 0;
                                            INC.clientConfig.slidevalue = 0;
                                            if (document.querySelector('.inc_pdp_bundle_product_list_main_block') != null) {
                                                document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                                                document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                                document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', '')
                                            }
                                        }
                                    } else {
            
                                        INC.clientConfig.OOS = []
                                        INC.clientConfig.OOS_COL = []
                                        INC.clientConfig.OOS_MESG = []
            
                                        if (qty != undefined) {
                                            if (qty != "0") {
                                                if (qty != "") {
                                                    if (qty > 0) {
                                                        if (qty != "-0") {
                                                            if (qty.startsWith("0") == false) {
                                                                if(document.querySelector('.inc_pdp_bundle_product_list_main_block') != null){
                                                                    document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                                                                }
                                                                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                                                                    document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                                                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                                                                    document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                                                                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                                                                }
                                                                // document.querySelector('html').classList.add('inc_overlay');
                                                                INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn", "collection");
                                                                document.querySelector('.inc_header_item_count_figure_text').innerText = "|"
                                                                INC.methods.showSidebar();
                                                                if (document.querySelector('.s7staticimage img') != null && document.querySelector('.inc_cart_added_product_img') != null) {
                                                                    var p_img = document.querySelector('.s7staticimage img').src
                                                                    if (document.querySelector('.inc_cart_added_product_img img') != null) {
                                                                        document.querySelector('.inc_cart_added_product_img img').src = p_img
                                                                    }
                                                                }
                                                                if (document.querySelector('#variant') != null) {
                                                                    var sel_elm_cl = document.querySelector('#variant')
                                                                    optionSelected = sel_elm_cl.options[sel_elm_cl.selectedIndex].innerText.trim();
                                                                    var client_var = optionSelected
                                                                    if (document.querySelector('.inc_cart_added_product_desc_att_color_text_block') != null) {
                                                                        document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerText = client_var
                                                                    }
                                                                    var pname = document.querySelector('.pdp__heading').innerText
                                                                    if (document.querySelector('.inc_cart_added_product_desc_title_text') != null) {
                                                                        document.querySelector('.inc_cart_added_product_desc_title_text').innerHTML = pname
                                                                    }
                                                                    var product_price = 0
                                                                    if (document.querySelector('.pdp-price-container .pdp-price__old-price') == null) {
                                                                        var product_price = $('.pdp-price-container .pdp-price__new-price').text().replace('£', '').trim();
                                                                        if (product_price.indexOf('From') >= 0) {
                                                                            product_price.replace('From', '').trim()
                                                                        }
                                                                        var old_price = null;
                                                                    } else {
                                                                        var product_price = jQuery('.pdp-price-container .pdp-price__old-price').text().toString().replace('£', '').trim();
                                                                        if (product_price.indexOf('From') >= 0) {
                                                                            product_price.replace('From', '').trim()
                                                                        }
                                                                        var old_price = $('.pdp-price-container .pdp-price__new-price').text().replace('£', '').trim();
                                                                    }
                                                                    if (old_price != null) {
                                                                        if (document.querySelector('.inc_cart_added_product_desc_price_active_text') != null) {
                                                                            document.querySelector('.inc_cart_added_product_desc_price_active_text').innerText = INC.clientConfig.currencySymbol + formatter.format(old_price).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() 
                                                                        }
                                                                        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                                                                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').innerText = INC.clientConfig.currencySymbol + formatter.format(old_price * parseInt(qty)).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() 
                                                                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').setAttribute('subtotalactiveprice', old_price)
                                                                        }
                                                                    } else if (product_price != 0) {
                                                                        if (document.querySelector('.inc_cart_added_product_desc_price_active_text') != null) {
                                                                            document.querySelector('.inc_cart_added_product_desc_price_active_text').innerText = INC.clientConfig.currencySymbol + formatter.format(product_price).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() 
                                                                        }
                                                                        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                                                                            
                                                                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').innerText = INC.clientConfig.currencySymbol + formatter.format(product_price * parseInt(qty)).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$&,').replace(/\.00$/,'').toString() 
                                                                            document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').setAttribute('subtotalactiveprice', product_price)
                                                                        }
                                                                    }
                                                                    checkoosmainproduct()
                                                                }
            
                                                            }
            
                                                        }
                                                    }
                                                }
                                            }
                                        }
            
                                        INC.clientConfig.offset = 0;
                                        INC.clientConfig.slidevalue = 0;
                                        if (document.querySelector('.inc_pdp_bundle_product_list_main_block') != null) {
                                            document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                                            if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                                                document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                                                document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                                                document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                                                document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                                            }
                                        }
                                    }
                                    checkoosmainproduct()
                            }
                            }
                        }, 1000)
                    }
                } else if (clickedElement.id == "add-to-cart" && INC.config.pageType == "productList") {
                    // window.scrollBy(0, -100)
                    var productId = clickedElement.parentNode.parentNode.parentNode.querySelector('[id="pid"]').value;
                    var qty = 1;
                    if (INC.config.deviceType == "desktop") {
                        qty = clickedElement.parentNode.parentNode.parentNode.parentNode.querySelector('.Quantity button[data-id="Quantity"] span').innerText;
                    }
                    if (INC.config.deviceType == "mobile") {
                        qty = clickedElement.parentNode.parentNode.parentNode.parentNode.querySelector('.Quantity button[data-id="Quantity"] span').innerText;
                    }
                    INC.config.clientbtn =true
                    INC.dataStore.plpProductQty = qty;
                    var plp_wrap = clickedElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    INC.config.empty_prod_details = []
                    var p_id = productId
                    var p_name = plp_wrap.querySelector('.product-name').innerText
                    var p_img = plp_wrap.querySelector('img').src
                    var elActivePrice = plp_wrap.querySelector('.price-text');
                    var elRegularPrice = plp_wrap.querySelector('.price-text');
                    var regularPrice = "";
                    if (elRegularPrice.innerText.split('£')[2] != undefined) {
                        var regularPrice = parseFloat(elRegularPrice.innerText.split('£')[2].replace(',', ''));
                    } else {
                        var regularPrice = parseFloat(elActivePrice.innerText.split('£')[1].replace(',', ''));
                    }
                    var p_activePrice = parseFloat(elActivePrice.innerText.split('£')[1].replace(',', ''));
                    INC.config.empty_prod_details.push({
                        p_id: p_id,
                        p_name: p_name,
                        p_img: p_img,
                        p_activePrice: p_activePrice,
                        regularPrice: regularPrice
                    })
                    INC.clientConfig.OOS = []
                    INC.clientConfig.OOS_COL = []
                    INC.clientConfig.OOS_MESG = []
                    INC.methods.clear();
                    setTimeout(function() {
                        if (document.querySelector('#QuickViewDialog') != null) {
                            if (document.querySelector('button[id="add-to-cart"]') == null) {
            
                                document.querySelector('#QuickViewDialog').style.visibility = "hidden";
            
                            }
                        }
                    }, 50);
            
                    setTimeout(function() {
                        INC.methods.irbReq(productId, 5, "catalog_product_view");
                        checkoosmainproduct()
                    }, 100);
                }
            }
            setTimeout(function() {
                if (clickedElement.className == "btn btn-action btn_full btn-add-to-basket"){
                    if (document.querySelector('body').classList.contains('calc')){
                        document.querySelector('body').classList.remove('calc')
                    }
                }
            }, 500);
            if (clickedElement.parentNode != null) {
                if (clickedElement.parentNode.parentNode != null) {
                    if (clickedElement.parentNode.parentNode.parentNode != null) {
                        if ((INC.config.pageType == "pdp" && clickedElement.parentNode.parentNode.parentNode != undefined) && (clickedElement.className != "inc_product_desc_att_size_list_item_img_block active" || clickedElement.className != "inc_product_desc_att_size_list_item_img_block")) {
                            if (clickedElement.parentNode.parentNode.parentNode.parentNode != null) {
                                if (clickedElement.parentNode.parentNode.id == "swatchList" || clickedElement.parentNode.parentNode.parentNode.parentNode.id == "swatchList" || clickedElement.parentNode.parentNode.id == "swatchList") {
                                    setTimeout(function() {
                                        if (document.querySelector('.inc_pdp_block') != null) {
                                            if (document.querySelector('#add-to-cart') != null) {
                                                if (document.querySelector('#add-to-cart').getAttribute('disabled') != "disabled") {
                                                    document.querySelector('.inc_pdp_block').style.display = "block"
                                                    var selected_shades = "";
                                                    if (clickedElement.querySelector('img') != null) {
                                                        var selected_shades = clickedElement.querySelector('img').alt;
                                                    } else if (clickedElement.parentNode.parentNode.querySelector('img') != null) {
                                                        var selected_shades = clickedElement.parentNode.parentNode.querySelector('img').alt;
                                                    }
                                                    var main_prod_attr = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block a');
                                                    if (selected_shades != "") {
                                                        for (a = 0; a < main_prod_attr.length; a++) {
                                                            if (main_prod_attr[a].getAttribute('title').indexOf(selected_shades) >= 0) {
                                                                if (main_prod_attr[a].parentNode.classList.contains('active') == false) {
                                                                    main_prod_attr[a].click();
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    // INC.methods.autoSelectMainProductColorVarient()
                                                } else {
                                                    document.querySelector('.inc_pdp_block').style.display = "none"
                                                }
                                            } else {
                                                document.querySelector('.inc_pdp_block').style.display = "none"
                                            }
                                        } else {
                                            // INC.init();
                                        }
                                    }, 2500)
                                }
                            }
                            if (clickedElement.parentNode.parentNode.parentNode.parentNode != null) {
                                if (clickedElement.parentNode.parentNode.id == "swatchList" || clickedElement.parentNode.parentNode.parentNode.parentNode.id == "swatchList" || clickedElement.parentNode.parentNode.id == "swatchList") {
                                    setTimeout(function() {
                                        if (document.querySelector('.inc_pdp_block') != null) {
                                            if (document.querySelector('#add-to-cart') != null) {
                                                if (document.querySelector('#add-to-cart').getAttribute('disabled') != "disabled") {
                                                    document.querySelector('.inc_pdp_block').style.display = "block"
                                                    var selected_shades = "";
                                                    if (clickedElement.querySelector('img') != null) {
                                                        var selected_shades = clickedElement.querySelector('img').alt;
                                                    } else if (clickedElement.parentNode.parentNode.querySelector('img') != null) {
                                                        var selected_shades = clickedElement.parentNode.parentNode.querySelector('img').alt;
                                                    }
                                                    var main_prod_attr = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block a');
                                                    if (selected_shades != "") {
                                                        for (a = 0; a < main_prod_attr.length; a++) {
                                                            if (main_prod_attr[a].getAttribute('title').indexOf(selected_shades) >= 0) {
                                                                if (main_prod_attr[a].parentNode.classList.contains('active') == false) {
                                                                    main_prod_attr[a].click();
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    // INC.methods.autoSelectMainProductColorVarient()
                                                } else {
                                                    document.querySelector('.inc_pdp_block').style.display = "none"
                                                }
                                            } else {
                                                document.querySelector('.inc_pdp_block').style.display = "none"
                                            }
                                        } else {
                                            // INC.init();
                                        }
                                    }, 2500)
                                }
                            }
                        }
                    }
                }
            }
        }
        catch (err) {
            var formData = new FormData();
            formData.append("EmailId", "shashi@increasingly.com");
            formData.append("Subject", 'JS Error on Wickes Staging');
            formData.append("Message", err + 'Error Stack' + err.stack);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", '//api.increasingly.co/SendEmail', true);
            xhr.send(formData);
        } 
    }
}

function checkoosmainproduct() {
    var timer_counts = 0
    var checkoos = setInterval(function() {
        timer_counts++
        if (document.querySelector('.popover-mini-basket__not-added p') != null) {
            clearInterval(checkoos)
            var error_mes = document.querySelector('.popover-mini-basket__not-added p').innerText
            var error_texts = document.querySelector('.product-card__bad-quantity').innerText
            if (error_mes.indexOf('Not added to basket') >= 0 || error_mes.innerText.toLocaleLowerCase() == "not added to basket") {
                
                if (document.querySelector('.inc_header_item_count_title_text') != null) {
                    document.querySelector('.inc_header_item_count_title_text').innerText = "0 item,"
                }
                if (document.querySelector('.inc_cart_added_product_block .inc_cart_added_product_desc_price_active_text_msg') != null) {
                    document.querySelector('.inc_cart_added_product_block .inc_cart_added_product_desc_price_active_text_msg').innerText = 'Sorry, there is insufficient stock for your basket.'
                    document.querySelector('.inc_cart_added_product_block .inc_cart_added_product_desc_price_active_text_msg').style.color = "#c3332e"
                    document.querySelector('.inc_cart_added_product_block .inc_cart_added_product_desc_price_active_text_msg').classList.add('inc_error_msg')
                }
                if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text') != null) {
                    document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').innerText = "£0.00"
                    document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text').setAttribute('subtotalactiveprice', 0)
                    document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text').setAttribute('subtotalregularprice', 0)

                }
                if(document.querySelector('.inc_cart_added_product_block') != null){
                    document.querySelector('.inc_cart_added_product_block').classList.add('cross')
                }
            }
        }
        if (timer_counts * 100 > 40000) {
            clearInterval(checkoos)
        }
    }, 100)
}


function read_more_inc(element){
    var prod_desc_block = element.parentNode.parentNode.parentNode.parentNode.parentNode;
    if(prod_desc_block.querySelector('.inc_product_description_main_block').classList.contains('active') == false){
        prod_desc_block.querySelector('.inc_product_header_block').classList.remove('active');
        prod_desc_block.querySelector('.inc_product_description_main_block').classList.add('active');
        prod_desc_block.querySelector('.inc_product_Description_header_block').classList.add('active');
        element.classList.add('active')
        if(element.parentNode.querySelector('.inc_prod_details') != null){
            element.parentNode.querySelector('.inc_prod_details').classList.remove('active')
        }
        if(window.innerWidth < 820){
            $('.inc_product_modal_block.active .inc_product_block').animate({ scrollTop: $('.inc_product_desc_qty_add_btn_block').height() + 500}, 'fast');
        }
    }else{
        prod_desc_block.querySelector('.inc_product_Info_Full_desc_info_block').classList.remove('show_full_desc')
        element.classList.remove('active')
    }
}


//window.location.pathname.indexOf('/ca/')

function slideTo(id, n, elm, type_of,arrow) {
    if (elm.className == "left_arrow" || elm.className == "left_arrow active" || type_of == "left") {
        var nn = -1
        inc_showSlides(INC.config.inc_slideIndex += nn, nn, elm, type_of,arrow);
    } else {
        var nn = 1
        inc_showSlides(INC.config.inc_slideIndex += nn, nn, elm, type_of,arrow);
    }
}

function inc_showSlides(n, ind, elm,type_of,arrow) {
    var i;
    var showcase_other_img_list = elm.querySelector('.inc_product_module_block .inc_product_showcase_block .inc_product_img_main_img a')
    var modal_other_img_list=elm.querySelector('.inc_product_module_block .inc_product_modal_block .inc_product_img_main_img a')
    var showcase_dots=elm.querySelectorAll('.inc_product_module_block .inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')
    var modal_dots=elm.querySelectorAll('.inc_product_module_block .inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')

    var showcase_other_img = elm.querySelector('.inc_product_module_block .inc_product_showcase_block .inc_product_img_main_img a img')

    var modal_other_img = elm.querySelector('.inc_product_module_block .inc_product_modal_block .inc_product_img_main_img a img')

    var otherImg_list=showcase_other_img_list.getAttribute('otherImageList');
    var additional_img=[]
    var additional_img = otherImg_list.split(',');
    var get_org_img = showcase_other_img_list.getAttribute('imageURL')
    if (n > additional_img.length) {
        INC.config.inc_slideIndex = 1
    }
    if (n < 1) {
        INC.config.inc_slideIndex = additional_img.length
    }
    
    for (i = 0; i < showcase_dots.length; i++) {
        showcase_dots[i].classList.remove('active')
        if(modal_dots[i] != undefined){
            modal_dots[i].classList.remove('active')
        }
    }
    var img_src = additional_img[INC.config.inc_slideIndex - 1];
    if(img_src != "null"){
        showcase_other_img.setAttribute('src',img_src);
        modal_other_img.setAttribute('src',img_src)
        showcase_other_img.setAttribute('onerror',"this.src='"+get_org_img+"'" );
        modal_other_img.setAttribute('onerror',"this.src='"+get_org_img+"'" );
        
        for (var r = 0; r < showcase_dots.length; r++) {
            showcase_dots[r].classList.remove('active');
            modal_dots[r].classList.remove('active');
        }
        if (showcase_dots[INC.config.inc_slideIndex - 1] != null) {
            showcase_dots[INC.config.inc_slideIndex - 1].classList.add('active');
        }
        if (modal_dots[INC.config.inc_slideIndex - 1] != null) {
            modal_dots[INC.config.inc_slideIndex - 1].classList.add('active');
        }
        if(arrow == "arrow"){
            if(modal_dots.length > 4){
                var activedots=elm.querySelector('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block.active')
                if(activedots != null){
                    var actind = activedots.getAttribute('index')
                    // if(type_of == "right"){
                        if(actind == 4){
                            if(modal_dots.length >= 5){
                                modal_dots[0].style.display = "none"
                            }
                        }else if(actind == 5){
                            if(modal_dots.length >= 6){
                                modal_dots[0].style.display = "none"
                                modal_dots[1].style.display = "none"
                            }
                        }else if(actind == 6){
                            if(modal_dots.length >= 7){
                                modal_dots[0].style.display = "none"
                                modal_dots[1].style.display = "none"
                                modal_dots[2].style.display = "none"
                            }
                        }else if(actind == 7){
                            if(modal_dots.length >= 8){
                                modal_dots[0].style.display = "none"
                                modal_dots[1].style.display = "none"
                                modal_dots[2].style.display = "none"
                                modal_dots[3].style.display = "none"
                            }
                        }else if(actind == 8){
                            if(modal_dots.length >= 9){
                                modal_dots[0].style.display = "none"
                                modal_dots[1].style.display = "none"
                                modal_dots[2].style.display = "none"
                                modal_dots[3].style.display = "none"
                                modal_dots[4].style.display = "none"
                            }
                        }else if(actind == 9){
                            if(modal_dots.length >= 10){
                                modal_dots[0].style.display = "none"
                                modal_dots[1].style.display = "none"
                                modal_dots[2].style.display = "none"
                                modal_dots[3].style.display = "none"
                                modal_dots[4].style.display = "none"
                                modal_dots[5].style.display = "none"
                            }
                        }else if(actind == 10){
                            if(modal_dots.length >= 11){
                                modal_dots[0].style.display = "none"
                                modal_dots[1].style.display = "none"
                                modal_dots[2].style.display = "none"
                                modal_dots[3].style.display = "none"
                                modal_dots[4].style.display = "none"
                                modal_dots[5].style.display = "none"
                                modal_dots[6].style.display = "none"
                            }
                        }else {
                            modal_dots[0].style.display = "block"
                            modal_dots[1].style.display = "block"
                            modal_dots[2].style.display = "block"
                            modal_dots[3].style.display = "block"
                            if(modal_dots[4] != undefined){
                                modal_dots[4].style.display = "block"
                            }
                            if(modal_dots[5] != undefined){
                                modal_dots[5].style.display = "block"
                            }
                            if(modal_dots[6] != undefined){
                                modal_dots[6].style.display = "block"
                            }
                        }
                    // }
                }
            }
        }
    }
}
// SWIPE FEATURE
var xDown = null;
var yDown = null;

function add_swipe(element) {
    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener('touchmove', handleTouchMove, false);
}

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if (Math.abs(xDiff) + Math.abs(yDiff) > 150) { //to deal with to short swipes
        if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
            if (xDiff > 0) {
                var prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                if(prod_card.classList.contains('inc_product_module_block') == false){
                    prod_card = prod_card.parentNode.parentNode
                }
                slideTo(null,0,prod_card,"left")
            } else { /* right swipe */
                var prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                if(prod_card.classList.contains('inc_product_module_block') == false){
                    prod_card = prod_card.parentNode.parentNode
                }
                slideTo(null,0,prod_card,"right")
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
    if (Math.abs(xDiff) + Math.abs(yDiff) < 150) {
        if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
            if (xDiff > 0) { /* left swipe */
                var prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                if(prod_card.classList.contains('inc_product_module_block') == false){
                    prod_card = prod_card.parentNode.parentNode
                }
                slideTo(null,0,prod_card,"left")
            } else { /* right swipe */
                var prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                if(prod_card.classList.contains('inc_product_module_block') == false){
                    prod_card = prod_card.parentNode.parentNode
                }
                slideTo(null,0,prod_card,"right")
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
}

var formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
});


function cb_tc(bundle_response){
    var bundles_tc = bundle_response.Bundles;
    var pdpProductId = INC.config.Product_id
    //var battery_datas = get_upsell_battery_name();
    var bundleproductarrayTC={}
    for (var ibT = 0; ibT < bundle_response.ProductsDetail.length; ibT++) {
        bundleproductarrayTC[bundle_response.ProductsDetail[ibT].ProductId] = bundle_response.ProductsDetail[ibT]
    }
    for (var i = 0; i < bundles_tc.length; i++) {
        if(INC.config.dupDataObjectProducts.indexOf(bundles_tc[i].BundleId) == -1){
            INC.config.dupDataObjectProducts.push(bundles_tc[i].BundleId)
            var irbBundleObj = bundles_tc[i];
            var bundleObj = {};
            bundleObj.id = irbBundleObj["BundleId"];
            bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
            bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
            bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
            bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
            bundleObj.productCount = irbBundleObj["ProductCount"];
            
        
            var irbProductsArray = irbBundleObj["ProductIds"];
            if (irbProductsArray.length) {
                pdpProductId = irbProductsArray[0];
                if (INC.dataStore.bundleProductsArray != undefined) {
                    INC.dataStore.bundleProductsArray.push(irbProductsArray[1]);
                }
            }
    
            for (var j = 0; j < irbProductsArray.length; j++) {
                var product = bundleproductarrayTC[irbProductsArray[j]]
                var battery_flag=false;
                battery_flag = true
                if(battery_flag){
                    if (INC.config.uniqeProduct.indexOf(product["ProductId"]) == -1  && INC.config.childlevelprod.indexOf(product["ProductId"]) == -1) {

                        if(irbProductsArray[0]["ProductId"] != product["ProductId"]){
                            if(INC.config.category_sequance.indexOf(product["CategoryName"]) == -1){
                                INC.config.category_sequance.push(product["CategoryName"])
                                INC.config.category_seqId.push({
                                    id:product["CategorySequenceId"],
                                    category:product["CategoryName"]
                                })
                            }
                        }

                        product["ProductSku"] = product["ProductId"];

                        if (isBase64(product["Description"]) == true) {
                            product["Description"] = Base64.decode(product["Description"])
                        } else {
                            product["Description"] = product["Description"]
                        }
                        
                        var pAttributes = product["Attributes"] || "";
                        if(pAttributes != "" && pAttributes != null){
                            for (var h = 0; h < pAttributes.length; h++) {
                                pAttributes[h].attributeCode = pAttributes[h].frontEndLabel;
                            }
                        }
                        
                        var pAttObj = {};
                        for(t=0;t<pAttributes.length;t++){
                            pAttributes[t].attributeId = t
                            var attr_values = pAttributes[t].attributeValues;
                            for(v=0;v<attr_values.length;v++){
                                attr_values[v].optionId = t;
                            }
                        }
                        
                        if (pAttributes.length) {
                            // INC.config.configcount = 0
                            for (var k = 0; k < pAttributes.length; k++) {
                                var pAttributesObj = pAttributes[k];
                                
                                var pAttributesValues = pAttributesObj["attributeValues"];
                                pAttributesObj["attributeCode"] = pAttributesObj["frontEndLabel"];
                                for (var l = 0; l < pAttributesValues.length; l++) {
                                    var childProduct = pAttributesValues[l];
                                    if (childProduct["childProductId"] == null) {
                                        childProduct["childProductId"] = product["ProductId"];
                                        childProduct["childProductSku"] = product["ProductSku"];
                                        childProduct["childProductName"] = product["ProductName"];
                                        childProduct["childProductImageUrl"] = product["ImageURL"];
                                        childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                        childProduct["childProductUrl"] = product["ProductUrl"];
                                        childProduct["childProductPrice"] = product["Price"];
                                        childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                        childProduct["childProductDescription"] = product["Description"];
                                        childProduct["childInternalProductId"] = product["ProductId"]
                                    }
                                    if(childProduct["childProductImageUrl"] == "" || childProduct["childProductImageUrl"] == null){
                                        childProduct["childProductImageUrl"] = product["ImageURL"];
                                    }
                                    if (INC.config.uniqeProduct.indexOf(childProduct["childProductId"]) == -1) {
                                        
                                        // if(product["Size"] != null){
                                        //     childProduct["MainprodVariant"] = product["Color"].replace('ー','') + "ー" + product["Size"].replace('ー','');
                                        // }else{
                                        //     childProduct["MainprodVariant"] = product["Color"];
                                        // }
                                        childProduct["MainprodVariant"] = product.Attributes[0].attributeValues[0].optionText
                                        // childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                        childProduct["childProductDescription"] = product["Description"];
                                        childProduct["ShortDescription"] = product["ShortDescription"];
                                        childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                        childProduct["childProductPriceMain"] = product["Price"];
                                        childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                        childProduct["childProductNameMain"] = product["ProductName"];
                                        childProduct["childProductUrlMain"] = product["ProductUrl"];
                                        childProduct["mainSKU"] = product["ProductSku"];
                                        childProduct["ProductType"] = product["ProductType"];
                                        childProduct["childCategoryId"] = product["CategoryId"];
                                        childProduct["childCategoryName"] = product["CategoryName"];

                                        childProduct["childProductSku"] = product["ProductId"];
                                        childProduct["childCategoryId"] = product["CategoryId"];
                                        childProduct["Field3"] = product["Field3"];
                                        childProduct["Field5"] = product["Field5"];
                                        if (childProduct["childProductField6"] == null) {
                                            childProduct["Field6"] = product["Field6"];
                                        } else {
                                            childProduct["Field6"] = childProduct["childProductField6"]
                                        }

                                        var productObj = new INC.classes.ProductAttObj(childProduct);
                                        
                                        productObj["bundledProductId"] = pdpProductId;
                                        productObj.mainId = product["ProductId"];
                                        productObj.bundleId = bundleObj.id;
                                        productObj.sku = productObj.id;
                                        productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                        productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                        productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                        productObj.Filed3 = product["Field5"] 
                                        if (!INC.dataStore.dataStoreObj.hasOwnProperty(product['ProductId'])) {
                                            INC.dataStore.dataStoreObj[product['ProductId']] = {};
                                        }
                                        if (!INC.dataStore.dataStoreObj[product['ProductId']].hasOwnProperty(productObj['id'])) {
                                            INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']] = {}
                                        }
                                        pAttObj = INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']];
                            
                                        
                                        for (pAtt in productObj) {
                                            if (pAtt == "option") {
                                                if (!pAttObj.hasOwnProperty('option')) {
                                                    pAttObj["option"] = {}
                                                }
                                                
                                                Object.keys(productObj[pAtt]).forEach(function (key) {
                                                    pAttObj[pAtt][key] = productObj[pAtt][key];
                                                });
                                                // }
                                            } else {
                                                pAttObj[pAtt] = productObj[pAtt];
                                            }
                                        }
                                    }
                                }
                                
                            }
                        }
                        
                        if (pAttributes.length == 0) {
                            // INC.config.uniqeProduct.push(product["ProductId"])
                            var productObj = new INC.classes.ProductObj(product);
                            productObj["bundleId"] = irbBundleObj["BundleId"];
                            productObj["bundledProductId"] = pdpProductId;
                            productObj.sku = productObj.id;
                            productObj.Filed3 = product["Field5"]
                            if ((INC.dataStore.dataStoreObj != undefined) && (!INC.dataStore.dataStoreObj.hasOwnProperty(productObj['mainId']))) {
                                INC.dataStore.dataStoreObj[productObj['mainId']] = {};
                            }
            
                            
                            if (INC.dataStore.dataStoreObj != undefined){
                            INC.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = {};
                            if (!!window.MSInputMethodContext && !!document.documentMode) {
                                INC.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                            }else {
                                INC.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                            }
                        }
                        }
                    }
                }
            }
        }
    }
    
    setTimeout(function(){
        INC.methods.createPDPBlock("sidebar")
    })
    
}


function getTrackingPixel() {
    // url = ''
    // /*-------------------Tracking with Image Pixel---------------------------*/
    // var oImg = document.createElement("img");
    // oImg.setAttribute('id', 'cstracking')
    // oImg.setAttribute('src', url);
    // oImg.setAttribute('height', '1px');
    // oImg.setAttribute('width', '1px');
    // oImg.setAttribute('style', 'display:none')
    // document.body.appendChild(oImg);
    /* -----------------------------------------------------------------------*/
}


function quantity_dropdown_change(elm) {
    var qtyop = elm.options[elm.selectedIndex].getAttribute("value");
    var qty =  parseInt(qtyop)
    elm.parentNode.parentNode.querySelector('.inc_product_desc_qty_input_text input').value = qty
    var prod_block = elm.parentNode.parentNode.parentNode.parentNode.parentNode
    var sku = prod_block.getAttribute('data-sku');
    prod_block.querySelector('.inc_product_desc_qty_block').classList.remove('active')
    prod_block.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value = qty;
    var elAddTexts = prod_block.querySelector('.inc_product_desc_add_text')
    if (elAddTexts.innerText == "Added" || elAddTexts.innerText == "Update" || elAddTexts.innerText == INC.config.AddedText || elAddTexts.innerText == INC.config.UpdateText) {
        INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add");
    }
}



function get_discount_price(p_original_price, p_sale_price) {
    //Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
    return parseFloat(+p_original_price - +p_sale_price)
}
function get_discount_price_percentage(p_original_price, p_sale_price) {
    return Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
}



function inc_onchange_variant(elattrblock){
    if(elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
        var elmainblock=elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    }else{
        var elmainblock=elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    }
    if(elmainblock.querySelector('.inc_product_modal_block.active') == null){
        var sel_varel = elmainblock.querySelector('.inc_product_modal_block')
    }else{
        var sel_varel = elmainblock.querySelector('.inc_product_showcase_block')
    }
    var elAttBlock = elattrblock.parentNode.parentNode
    var productBlock = elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode
    var attrImng = elattrblock.options[elattrblock.selectedIndex].getAttribute('imgurlc')
    // if(attrImng != undefined || attrImng != null){
    //     productBlock.querySelector('.inc_product_img_main_img img').src = attrImng
    //     productBlock.querySelector('.inc_product_img_main_img a').setAttribute('imageurl',attrImng)
    //     productBlock.querySelector('.inc_product_img_main_img img').setAttribute('data-imageurl',attrImng)
    // }

    var elAtt0TitleText = elAttBlock.querySelector('.inc_product_desc_att_zero_title_text')
    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
    
    if(productBlock.querySelector('.close_read_more') != null){
        productBlock.querySelector('.close_read_more').click()
    }
    var attr_text = elattrblock.options[elattrblock.selectedIndex].getAttribute("datasize");
    var attr_text_small = elattrblock.options[elattrblock.selectedIndex].getAttribute("datasize");
    
    if(elAttBlock.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="'+attr_text_small+'"]') != null){
        elAttBlock.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="'+attr_text_small+'"]').click()
    }
    if(sel_varel != null){
        var sel_variant = sel_varel.querySelector('.inc_variant_tag')
        if(sel_variant != null){
            var alloptionss = sel_variant.querySelectorAll('option')
            for(j=0;j<alloptionss.length;j++){
                if(alloptionss[j].getAttribute('datasize') == attr_text_small.toLocaleLowerCase()){
                    alloptionss[j].selected = 'selected'
                    break;
                }
            }
        }
    }
}
function inc_onchange_color_variant(elattrblock){
    if(elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
        var elmainblock=elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    }else{
        var elmainblock=elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    }
    
    var elAttBlock = elattrblock.parentNode.parentNode
    var productBlock = elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    var attrImng = elattrblock.options[elattrblock.selectedIndex].getAttribute('imgurlc')

    var elAtt0TitleText = elAttBlock.querySelector('.inc_product_desc_att_color_title_text')
    var prod_card_attr_block = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
    var prod_modal_attr_block = productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_color_title_text')
    
    var textsel = ""
    
    var attr_text = elattrblock.options[elattrblock.selectedIndex].getAttribute("datasize");
    var attr_text_small = elattrblock.options[elattrblock.selectedIndex].getAttribute("datasize");
    var attr_text_org = elattrblock.options[elattrblock.selectedIndex].getAttribute("data-size");

    if(productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .select_option_inc_block') != null){
        productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .select_option_inc_block').classList.remove('error_inc_message')
    }
    if(productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .select_option_inc_block') != null){
        productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .select_option_inc_block').classList.remove('error_inc_message')
    }
    if(prod_modal_attr_block.querySelector('.inc_product_desc_att_color_list_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+attr_text_small+'"]') != null){
        prod_modal_attr_block.querySelector('.inc_product_desc_att_color_list_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+attr_text_small+'"]').click()
        if(prod_modal_attr_block != null){
            var sel_variant = prod_modal_attr_block.querySelector('.inc_variant_tag')
            if(sel_variant != null){
                var textselOp = sel_variant.querySelector('option').textContent
                if(attr_text_org.toLocaleLowerCase() == "yes" || attr_text_org.toLocaleLowerCase() == "no"){
                    if(attr_text_org.toLocaleLowerCase() == "yes"){
                        attr_text_org = "Yes"
                    }else if(attr_text_org.toLocaleLowerCase() == "no"){
                        attr_text_org = "No"
                    }
                    textsel = textselOp + " : " + attr_text_org
                }
                var alloptionss = sel_variant.querySelectorAll('option')
                for(j=0;j<alloptionss.length;j++){
                    if(alloptionss[j].getAttribute('datasize') == attr_text_small.toLocaleLowerCase()){
                        alloptionss[j].selected = 'selected'
                        break;
                    }
                }
            }
        }
    }
    if(textsel == ""){
        textsel = attr_text_org
    }
    if(prod_card_attr_block.querySelector('.inc_product_desc_att_color_list_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+attr_text_small+'"]') != null){
        prod_card_attr_block.querySelector('.inc_product_desc_att_color_list_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+attr_text_small+'"]').click()
        if(prod_card_attr_block != null){
            var sel_variant = prod_card_attr_block.querySelector('.inc_variant_tag')
            if(sel_variant != null){
                var alloptionss = sel_variant.querySelectorAll('option')
                for(j=0;j<alloptionss.length;j++){
                    if(alloptionss[j].getAttribute('datasize') == attr_text_small.toLocaleLowerCase()){
                        alloptionss[j].selected = 'selected'
                        break;
                    }
                }
            }
        }
    }
    if(productBlock.parentNode.parentNode.parentNode.classList.contains('inc_pdp_bundle_product_list_main_block') == true || productBlock.parentNode.parentNode.parentNode.classList.contains('inc_pdp_product-main_block') == true){
        if(productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text.config') != null){
            if(productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_variant_new1') == null){
                productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text.config').innerHTML = textsel.replace("Please select:",'')
                productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_variant_simple_block').classList.add('selected_inc')
            }
        }
    }
    if(productBlock.parentNode.parentNode.parentNode.classList.contains('inc_pdp_bundle_product_list_main_block') == true){
        if(productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_add_block.added_inc') == null){
            // productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_add_block').click()
        }
    }
}


var _isVisible = {
    viewport: {},
    _index: 0,
    _imgs: null,
    _active: false,
    _init: function(data) {
        this.viewport.top = window.pageYOffset;
        this.viewport.bottom = this.viewport.top + window.innerHeight;
        this._imgs = document.querySelectorAll(data.classSelector);
        this._index = data.index;
        this._active = true;
        this.getImages();
    },
    checkVisibility: function(elm) {
        if (typeof (elm) == "undefined")
            return;
        var bounds = {};
        bounds.top = elm.getBoundingClientRect().top + window.pageYOffset;
        bounds.bottom = bounds.top + elm.clientHeight;
        return (bounds.bottom >= this.viewport.top && bounds.bottom <= this.viewport.bottom) || (bounds.top <= this.viewport.bottom && bounds.top >= this.viewport.top);
    },
    getImages: function() {
        (function(elm) {
            var imgLoader = window.setInterval(function() {
                if (elm.checkVisibility(elm._imgs[elm._index])) {
                    switch (elm._imgs[elm._index].tagName) {
                    case "IMG":
                        if (!(elm._imgs[elm._index].src.indexOf("img_placeholder") == -1)) {
                            elm._imgs[elm._index].src = elm._imgs[elm._index].getAttribute('data-src');
                        }
                        break;
                    case "SOURCE":
                        //https://gzinc.increasingly.co/Implementation/tA7T9/images/img_placeholder.gif
                        //if (!(elm._imgs[elm._index].srcset.indexOf("https") > -1)) {
                        if (!(elm._imgs[elm._index].srcset.indexOf("img_placeholder") == -1)) {
                            elm._imgs[elm._index].srcset = elm._imgs[elm._index].getAttribute('data-src');
                        }
                        break;
                    }
                }
                elm._index++;
            }, 10);
        }
        )(this);
    }
}
window.addEventListener('scroll', function() {
    _isVisible._init({
        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block img[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block img[data-src], .inc_af_block img[data-src], .inc_af_block img[data-src]",
        index: 0
    }, {passive: true});
});
window.addEventListener('mousemove', function() {
    _isVisible._init({
        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block img[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block img[data-src], .inc_af_block img[data-src], .inc_af_block img[data-src]",
        index: 0
    });
}, {passive: true});
document.addEventListener('DOMContentLoaded', function() {
    _isVisible._init({
        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block img[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block img[data-src], .inc_af_block img[data-src], .inc_af_block img[data-src]",
        index: 0
    });
}, {passive: true});

setTimeout(function() {
    window.addEventListener("orientationchange", function() {
        var inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
        if(inc_pdp_block_rem != null){
            inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
        }
        setTimeout(function(){
            var inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
            if(inc_pdp_block_rem != null){
                inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
            }
            var sidebar_rem = document.querySelector(".inc_sidebar_modal_block");
            if(sidebar_rem != null){
                sidebar_rem.parentNode.removeChild(sidebar_rem);
            }
            var over_rem = document.querySelector(".inc_sidebar_overlay_block");
            if(over_rem != null){
                over_rem.parentNode.removeChild(over_rem);
            }
            var allmobcss = document.querySelectorAll('#inc_mob_css')
            for(s=0;s<allmobcss.length;s++){
                var remm = allmobcss[s]
                if(remm != undefined){
                    remm.parentNode.removeChild(remm);
                }
            }
            var alldeskcss = document.querySelectorAll('#inc_desktop_css')
            for(d=0;d<alldeskcss.length;d++){
                var remd = alldeskcss[d]
                if(remd != undefined){
                    remd.parentNode.removeChild(remd);
                }
            }
            if(document.querySelector('#inc_mob_css') != null){
                var remcss = document.querySelector('#inc_mob_css')
                if(remcss != null){
                    remcss.parentNode.removeChild(remcss);
                }
            }
            if(document.querySelector('#inc_desktop_css') != null){
                var remcjs = document.querySelector('#inc_desktop_css')
                if(remcjs != null){
                    remcjs.parentNode.removeChild(remcjs);
                }
            }
            if(window.innerWidth < 820){
                // if(document.querySelector('#inc_mob_css') == null){
                //     function addCSSFile() {
                //         var versionUpdate = (new Date()).getTime();
                //         var cssFilePath = "//www.increasingly.co/Implementation/wKS8xz_cc/mob/css/wKS8xz_cc.css?v="+versionUpdate;
                //         var linkTag = document.createElement('link');
                //         linkTag.rel = "stylesheet";
                //         linkTag.setAttribute('id','inc_mob_css')
                //         linkTag.href = cssFilePath;
                //         document.querySelector('head').appendChild(linkTag);
                //     }
                //     addCSSFile();
                // }else{
                //     if(document.querySelector('#inc_mob_css') != null){
                //         var remcss = document.querySelector('#inc_mob_css')
                //         if(remcss != null){
                //             remcss.parentNode.removeChild(remcss);
                //         }
                //     }
                //     if(document.querySelector('#inc_desktop_css') != null){
                //         var remcjs = document.querySelector('#inc_desktop_css')
                //         if(remcjs != null){
                //             remcjs.parentNode.removeChild(remcjs);
                //         }
                //     }
                //     function addCSSFile() {
                //         var versionUpdate = (new Date()).getTime();
                //         var cssFilePath = "//www.increasingly.co/Implementation/wKS8xz_cc/mob/css/wKS8xz_cc.css?v="+versionUpdate;
                //         var linkTag = document.createElement('link');
                //         linkTag.rel = "stylesheet";
                //         linkTag.setAttribute('id','inc_mob_css')
                //         linkTag.href = cssFilePath;
                //         document.querySelector('head').appendChild(linkTag);
                //     }
                //     addCSSFile();
                // }
                init_fun_flag=true;
                init_irb_flag=true;
                INC.config.dupDataObjectProducts = [];
                setTimeout(function(){
                    INC.init();
                },3000)
            } else{
                // if(document.querySelector('#inc_desktop_css') == null){
                //     function addCSSFile() {
                //         var versionUpdate = (new Date()).getTime();
                //         var cssFilePath = "//www.increasingly.co/Implementation/wKS8xz_cc/css/wKS8xz_cc.css?v="+versionUpdate;
                //         var linkTag = document.createElement('link');
                //         linkTag.rel = "stylesheet";
                //         linkTag.href = cssFilePath;
                //         linkTag.setAttribute('id','inc_desktop_css')
                //         document.querySelector('head').appendChild(linkTag);
                //     }
                //     addCSSFile() ;
                // }else{
                //     if(document.querySelector('#inc_mob_css') != null){
                //         var remcss = document.querySelector('#inc_mob_css')
                //         if(remcss != null){
                //             remcss.parentNode.removeChild(remcss);
                //         }
                //     }
                //     if(document.querySelector('#inc_desktop_css') != null){
                //         var remcjs = document.querySelector('#inc_desktop_css')
                //         if(remcjs != null){
                //             remcjs.parentNode.removeChild(remcjs);
                //         }
                //     }
                //     function addCSSFile() {
                //         var versionUpdate = (new Date()).getTime();
                //         var cssFilePath = "//www.increasingly.co/Implementation/wKS8xz_cc/css/wKS8xz_cc.css?v="+versionUpdate;
                //         var linkTag = document.createElement('link');
                //         linkTag.rel = "stylesheet";
                //         linkTag.href = cssFilePath;
                //         linkTag.setAttribute('id','inc_desktop_css')
                //         document.querySelector('head').appendChild(linkTag);
                //     }
                //     addCSSFile() ;
                // }

                init_fun_flag=true;
                init_irb_flag=true;
                INC.config.dupDataObjectProducts = [];
                setTimeout(function(){
                    INC.init();
                },3000)
            }
        },300)
    }, false);
    if(typeof($) != "undefined"){
        $(window).resize(function() {
            if (document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_main_block') != null) {
                document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_main_block').setAttribute("style", "margin-left:0");
                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_right-btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                }
                INC.clientConfig.slidevalue = 0
                INC.clientConfig.offset = 0
                INC.clientConfig.slidevalue = 0
            }
        });
        var inc_scrollPos = 0;

        $(window).on('scroll', function(e) {
            var y_scroll_pos = window.pageYOffset;
            //var scroll_pos_test = element_position;
            var scroll = $(window).scrollTop();
            var inc_div = document.querySelector(".inc_pdp_block");
            if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                if (document.querySelector('body.tp-app') != null) {
                    document.querySelector('body').classList.add('tp-app')
                }
            }
            if (document.querySelector('.inc_pdp_block') != null) {
                if (document.querySelector('.inc_pdp_block') != null) {
                    if (navigator.userAgent.indexOf('TradeProMobile') >= 0) {
                        var width_min = 550
                        var widthplus = 30;
                    } else {
                        var width_min = 400
                        var widthplus = 300;
                    }

                    if (window.innerWidth > 500) {
                        var width_min = 200
                        var widthplus = 450
                    }

                    if (window.innerWidth < 600 && onloadpdp == true) {
                        if (y_scroll_pos >= inc_div.offsetTop - width_min && y_scroll_pos <= inc_div.offsetTop + widthplus) {
                            if (document.querySelector('.inc_pdp_block').classList.contains('.inc_sticky_add_to_cart') == false) {
                                document.querySelector('.inc_pdp_block').classList.add('inc_sticky_add_to_cart');
                                document.querySelector('body').classList.add('inc_sticky_btn');
                            }

                        } else {
                            if (document.querySelector('.inc_pdp_block') != null) {
                                document.querySelector('.inc_pdp_block').classList.remove('inc_sticky_add_to_cart');
                                document.querySelector('body').classList.remove('inc_sticky_btn');
                            }
                        }
                    }
                    // position = scroll;
                }
            }
        });

        var lastY,
            timer;
        $(document).bind('touchstart', function(e) {
            lastY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
            
        });
        $(document).bind('touchmove mousemove', function(e) {
            var currentY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
            if (Math.abs(currentY - lastY) < 15) {
                return;
            }


            setTimeout(function() {
                if(window.innerWidth < 820){
                    if (document.querySelector('body.tp-app') != null) {
                        if (document.querySelector('.header-logo.header__top-line.header-top-line-hide') == null) {
                            document.querySelector('body').classList.remove('inc_down_scrolls')
                            document.querySelector('body').classList.remove('inc_up_scrolls')
                            document.querySelector('body').classList.add('inc_up_scrolls')
                        } else {
                            if (document.querySelector('.inc_sidebar_modal_block.active') == null && document.querySelector('.inc_product_modal_block.active') == null) {
                                document.querySelector('body').classList.remove('inc_up_scrolls')
                                document.querySelector('body').classList.add('inc_down_scrolls')
                            }
                        }
                    }
                }
            }, 300)
        });
    }
    function checkScrollDirectionIsUp(event) {
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        }
        return event.deltaY < 0;
    }
}, 2000);

