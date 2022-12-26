// if(readCookie('ivid') == "1b4ade5491d79bb5e2041a69a8ce0e80dc345dd676"){
//     let incre_filePath = "//www.increasingly.co/Clients/";
//     let versionUpdate = (new Date()).getTime();
//     let incre_fileListToLoad = [{
//         url: incre_filePath + 'Sc91br/resc/css/main_col.css?v=' + versionUpdate,
//         type: 'css'
//     },]
// }else{
let incre_filePath = "//www.increasingly.co/Implementation/";
let versionUpdate = (new Date()).getTime();
let incre_fileListToLoad = [{
    url: incre_filePath + 'Sc91br/css/main_col.css?v=' + versionUpdate,
    type: 'css'
},]
//}

loadAssets(incre_fileListToLoad)
// // jQuery("html, body").animate({ scrollTop: 0 }, "slow");
function loadAssets(incre_fileListToLoad) {
    for (let i in incre_fileListToLoad) {
        if (incre_fileListToLoad[i].type == "css") {
            let link4 = document.createElement('link');
            link4.setAttribute('rel', 'stylesheet')
            link4.setAttribute('type', 'text/css')
            link4.setAttribute('media', 'screen')
            if (incre_fileListToLoad[i].url.indexOf('main_col') >= 0) {
                link4.setAttribute('class', 'inc_PC__staginfcss')
            } else {
                link4.setAttribute('class', 'inc_prod_css')
            }
            link4.setAttribute('href', incre_fileListToLoad[i].url)
            document.getElementsByTagName('head')[0].appendChild(link4);
        }
    }
}
if (document.querySelector('#MainContent .page-width--narrow.page-content') != null) {
    document.querySelector('#MainContent .page-width--narrow.page-content').style.display = "none"
}
/***************************************************************
******  WARNING: Make 'false' to switch off the script  ********
/***************************************************************/
let inc_switch = false;


/***************************************************************
**************  WARNING: Switch modules on/off  ****************
/***************************************************************/
let switch_board = {
    quantity: true,
    configurables: true,
    its_cart_page: false,
    its_pdp_page: false,
    its_plp_page: false,
    catogory_tab: true,
    bundle_tab: true,
    delivery_info: false,
    cart_modal: false,
    tracking: true,
    jquery_ajax_request: true,
    modal: true,
    quantity_dropdown: false,
    ratings: false,
    dataLayer_details: true,
    price_range: false,
    add_to_cart_btn_with_price: false,
    more_images: true
}
/***************************************************************
**************  WARNING: Variables  ****************
/***************************************************************/
let client_vars = {
    add_to_cart_url: 'https://www.scandiborn.co.uk/cart/add.js',
    product_ids: [],
    product_urls: [],
    api_key: 'Sc91br',
    vid: null,
    event_type: '',
    form_key: '',
    cartProductNames: [],
    is_tc: 1,
    is_tc_nb: 30,
    is_bfb: 1,
    basket_amount: "",
    rt: 1,
    nbp: '',
    cart_prod_id: [],
    split_test: false,
    close_modal_time: 0,
    user_interaction_modal: true,
    category_id: [],
    cid: []
}
/***************************************************************
/***************************************************************/
let bundle_vars = {
    quantity_text: 'Quantity:',
    add_to_cart_btn_text: 'Add to cart',
    add_bundle_to_cart_btn_text: 'ADD TO CART',
    checkout_btn_text: 'Continue Shopping',
    checkout_btn_link: 'javascript:void(0)',
    view_cart_btn_link: '/cart',
    view_cart_btn_text: 'PROCEED TO CHECKOUT',
    cart_page_title: 'Before You Go',
    pdp_page_title: 'Build Your Bundle',
    modal_page_title: 'You May Also Need....',
    alt_page_title: 'Recommended alternatives',
    delivery_text: 'Free Worldwide delivery on all orders over £50',
    load_type: 'onload',
    product_ids: null,
    product_urls: null,
    source_btn: 'inc_btn',
    bundle_response: [],
    bundle_response_tc: [],
    slide_image_count: 0,
    create_prod_combo: 0,
    plp_added_title: '',
    plp_added_url: '',
    plp_added_img_url: '',
    plp_added_price_box: '',
    plp_added_id: '',
    plp_added_color: '',
    plp_added_size: '',
    one_event: false,
    pdp_client_btn: false,
    price_array: [],
    x_price_array: [],
    incr: 0,
    op: 0.00,
    clicked_btn: null,
    curr_input_val: 1,
    ids_to_exclude: [],
    variant_selected: [],
    dup_prod: [],
    response_prodcut_ids: [],
    is_size: false,
    pdp_response: [],
    p_first: false,
    p_second: false,
    country_code: "",
    p_conf_first: "",
    p_conf_sec: "",
    client_size: [],
    client_color: [],
    client_clr_img: [],
    inc_size_id: [],
    attr_flag: false,
    added_prc: 0,
    added_sprc: 0,
    quick_view: false,
    event_type: null,
    min_cartold_qty: 0,
    push_product_to_add: [],
    all_dup_push_prod: [],
    all_dup_child_prod: [],
    main_pr_cal: true,
    irb_fired: true,
    client_varient: false,
    create_prod_c: 0,
    is_promos: false,
    inc_slide_offset: 0,
    rab_click_flag: true,
    thumbnail_slide: 1,
    stopImgOver: false,
    tout: null,
    succes_count: 0,
    colimage: "",
    coltitle: "",
    colurl: "",
    colshortdesc: ""
}

let recommendation_tracking = false;
let offset = 0;
let slidevalue = 0;

let inc_slideIndex = 1;
let exclude_promo_on_production = [];
getVisitorId();


bundle_vars.country_code = "US Flag"

client_vars.split_test = true;
inc_switch = true;
/***************************************************************
/***************************************************************/
let site_country = setInterval(function () {
    if (document.querySelector('.country-title img') != undefined) {
        clearInterval(site_country)
    }
}, 10)



if (inc_switch) {
    inc_load_bundle()
}

function inc_load_bundle() {
    let delay = 100
    if (detectIE()) delay = 700
    setTimeout(function () {
        place_inc_divs();

        if (bundle_vars.country_code == "US Flag") {
            if (client_vars.product_ids.length != 0 && switch_board.its_plp_page) {
                if (switch_board.its_plp_page) {
                    if (document.querySelector('.inc_prod_css') != null) {
                        let rem_css_files_al = document.querySelector('.inc_prod_css')
                        rem_css_files_al.parentNode.removeChild(rem_css_files_al);
                    }
                    prepare_ajax_data(bundle_vars.load_type, null, null, null, "combo");
                }
            } else {
                if (document.querySelector('#MainContent') != null) {
                    document.querySelector('#MainContent').setAttribute('style', ' ')
                }
                if (document.querySelector('#booster-button') != null) {
                    document.querySelector('#booster-button').style.display = "block"
                }
                document.querySelector('html').classList.remove('inc_page_loader')
                if (document.querySelector('.nosto-block') != null) {
                    document.querySelector('.nosto-block').style.display = "block";
                }
                if (document.querySelector('#render-widget-container') != null) {
                    document.querySelector('#render-widget-container').style.display = "block";
                }
                if (document.querySelector('.container.main.content iframe') != null) {
                    document.querySelector('.container.main.content iframe').style.display = "block";
                }
                if (document.querySelector('.section.product_section .alpha') != null) {
                    document.querySelector('.section.product_section .alpha').style.display = "block";
                    document.querySelector('.section.product_section .omega').style.display = "block";
                }
            }
        }
    }, delay)
}

function detectIE() {
    let ua = window.navigator.userAgent;
    let msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    let trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        let rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    let edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // other browser
    return false;
}

function place_inc_divs() {
    //debugger
    //pageType-ProductPage
    let cart_page = document.querySelector("body.on-cart");
    let plp_page = document.querySelector("body.product") || document.querySelector("body.swym-ready")
    let pdp_page = document.querySelector("body.productsss");
    //mm-page
    let pdp_pageflg = false
    if (window.location.pathname == "/pages/bundles" || window.location.pathname == "/pages/bundles/") {
        pdp_pageflg = true
        if (document.querySelector('#content_wrapper .container.main.content') != null) {
            document.querySelector('#content_wrapper .container.main.content').setAttribute('style', 'min-height:auto')
        }
    }
    if (plp_page != undefined || plp_page != null) {

        switch_board.its_plp_page = true;
        let class_name = 'inc_bundling_plp';
        let client_div = '.mm-page';
        childNode = 2;
        if (document.querySelector('.m_plp-header h1') != null) {
            client_vars.category_id[0] = document.querySelector('.m_plp-header h1').innerText.trim();
        }
        client_vars.event_type = 'catalog_product_view';
        client_vars.nbp = 2;

        let href_split = window.location.href.split('?')[1];
        let total_split_href = href_split.split('&');
        let cid = "";
        let pid = ""

        if (href_split != undefined) {
            for (h = 0; h < total_split_href.length; h++) {
                if (total_split_href[h].indexOf('cid') >= 0) {
                    cid = total_split_href[h].split('=')[1].split('#')[0]
                } else if (total_split_href[h].indexOf('pid') >= 0) {
                    pid = total_split_href[h].split('=')[1].split('#')[0]
                }
            }
        }
        client_vars.product_ids[0] = pid
        client_vars.cid[0] = cid
        //cid
        // client_vars.product_ids[0] = meta.product.id
        add_div(class_name, client_div, childNode);
        localStorage.setItem("last_id", client_vars.product_ids[0]);
    }
    if (pdp_page != undefined || pdp_page != null || pdp_pageflg == true) {
        //switch_board.its_pdp_page = true
        setTimeout(function () {
            if (document.querySelector('#ic_bundle_wrapper') != null) {
                if (document.querySelector('#ic_bundle_wrapper').innerText != '') {
                    irbReq_is_categ_recomendation()
                }
            }
        }, 2000);
    }
    if (!switch_board.its_plp_page) {
        // add_div(class_name, client_div, childNode);
    }
}

function add_div(class_name, client_div, childNode) {
    let div = generate_html_tag("div");
    div.setAttribute('id', 'increasingly_element');
    div.setAttribute('class', class_name);
    if (switch_board.its_plp_page) {
        div.classList.add("inc_combo_wrapper");
    } else {
        div.setAttribute('class', class_name);
        div.classList.add("increasingly_bundles");
        div.classList.add("col-md-12");
    }


    if (document.querySelectorAll('#increasingly_element')[0] == null) {
        if (document.querySelector("body.product") != null || document.querySelector("body.product") != undefined) {
            if (document.querySelector('#MainContent') != null) {
                document.querySelector('#MainContent').appendChild(div)
            }
        } else {
            if (document.querySelector('.sixteen.columns .collection_title') != null) {
                document.querySelector('.sixteen.columns .collection_title').style.display = "none";
            }

            if (document.querySelector('.section.clearfix .quote') != null) {
                document.querySelector('.section.clearfix .quote').style.display = "none";
            }
            if (document.querySelectorAll('.sixteen.columns')[2] != null) {
                document.querySelectorAll('.sixteen.columns')[2].style.display = "none";
            }
            if (document.querySelector('.section.clearfix .eight.columns.offset-by-four') != null) {
                document.querySelector('.section.clearfix .eight.columns.offset-by-four').style.display = "none";
            }

            if (document.querySelector('#MainContent') != null) {

                document.querySelector('#MainContent').appendChild(div)

            } else if (document.querySelector('.sixteen.columns.clearfix') != null) {
                document.querySelector('.sixteen.columns.clearfix').appendChild(div)
            }
        }

    }
}



function generate_html_tag(element, className) {
    let generateEl = document.createElement(element);
    className ? generateEl.classList.add(className) : null;
    return generateEl;
}

function prepare_ajax_data(load_type, id1, id2, plp_elem, combo) {

    let ajax_data = {};
    if (switch_board.its_cart_page) {
        ajax_data.product_ids = client_vars.product_ids.toString();
    } else if (switch_board.its_plp_page) {
        ajax_data.product_ids = bundle_vars.plp_added_id.toString();
        if (combo == "combo") {
            ajax_data.product_ids = client_vars.product_ids[0];
            client_vars.event_type = 'catalog_product_view';
            ajax_data.category_id = '';
        } else {
            ajax_data.category_id = '';
            ajax_data.product_ids = bundle_vars.plp_added_id.toString();
        }
    } else {
        ajax_data.product_ids = client_vars.product_ids[0];
    }
    // ajax_data.category_id = '';
    ajax_data.api_key = client_vars.api_key;
    ajax_data.client_id = '';
    ajax_data.order_id = '';
    ajax_data.page_type = client_vars.event_type;
    ajax_data.client_visitor_id = readCookie('ivid');
    ajax_data.npb = client_vars.nbp;
    setTimeout(function () {
        if (bundle_vars.irb_fired == true) {
            if (switch_board.its_pdp_page && load_type == "onload") {
                bundle_vars.irb_fired = false;
            }
            if ((switch_board.its_plp_page && bundle_vars.one_event)) {
                bundle_vars.one_event = false;
                make_ajax_request(ajax_data, load_type, id1, id2, plp_elem);
            } else if (switch_board.its_pdp_page || switch_board.its_cart_page) {
                if (document.querySelectorAll('#ic_bundle_pdp')[0] == null) {
                    make_ajax_request(ajax_data, load_type, id1, id2, plp_elem);
                }
            } else if (switch_board.its_plp_page) {
                make_ajax_request(ajax_data, load_type, id1, id2, plp_elem, combo);
            }
        } else {
            if (document.querySelector('#increasingly_element') != null) {
                document.querySelector('#increasingly_element').classList.remove('bundle_loading')
            }
        }
    }, 50);
}

function make_ajax_request(products, load_type, id1, id2, plp_elem, combo) {
    let url = 'https://usarapidload.increasingly.co/increasingly_bundles?irb/';
    let get_string = '';
    for (let product in products) {
        let getSymbol = product != 'npb' ? '&' : '';
        get_string += product + '=' + products[product] + getSymbol;
    }
    if ((switch_board.its_plp_page && combo != "combo") || (bundle_vars.load_type == "btn_click" && plp_elem == "plp")) {
        get_string = get_string + "&is_tc=1&no_of_bundles=" + client_vars.is_tc_nb;
    }
    let shooping_type = "2"
    if (window.location.href.indexOf('incgs=1') >= 0) {
        shooping_type = "1"
    } else if (window.location.href.indexOf('incgs=3') >= 0) {
        shooping_type = "3"
    }
    if (switch_board.its_plp_page && combo == "combo") {
        get_string = get_string + '&set=1&cid=' + client_vars.cid[0] + '&incgs=' + shooping_type
    }
    if (switch_board.its_cart_page) {
        //get_string = get_string + "&is_pname=1";
    }
    if (document.querySelector('#cart-Qty') != null) {
        bundle_vars.min_cartold_qty = document.querySelector('#cart-Qty').innerText;
    }
    if (switch_board.its_plp_page) {
        let get_query_string = btoa(get_string);
        url += get_query_string;
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true);
        xhttp.send();
        xhttp.onerror = function () {
            if (document.querySelector('#MainContent') != null) {
                document.querySelector('#MainContent').setAttribute('style', ' ')
            }
            if (document.querySelector('#booster-button') != null) {
                document.querySelector('#booster-button').style.display = "block"
            }
            document.querySelector('html').classList.remove('inc_page_loader')
            if (document.querySelector('.nosto-block') != null) {
                document.querySelector('.nosto-block').style.display = "block";
            }
            if (document.querySelector('#render-widget-container') != null) {
                document.querySelector('#render-widget-container').style.display = "block";
            }
            if (document.querySelector('.container.main.content iframe') != null) {
                document.querySelector('.container.main.content iframe').style.display = "block";
            }
            if (document.querySelector('.section.product_section .alpha') != null) {
                document.querySelector('.section.product_section .alpha').style.display = "block";
                document.querySelector('.section.product_section .omega').style.display = "block";
            }
        }
        xhttp.onload = function () { }
        xhttp.onreadystatechange = function () {
            if ((xhttp.readyState == 4) && (xhttp.status == 200)) {
                if (xhttp.responseText != "") {

                    if (client_vars.split_test) {
                        let responseData = JSON.parse(xhttp.responseText);
                        if (switch_board.its_plp_page || (bundle_vars.load_type == "btn_click" && plp_elem == "plp")) {
                            bundle_vars.bundle_response = responseData;
                        }
                        document.querySelector('body').classList.add("inc_collection_landing_page");
                        if (document.querySelector('body') != null) {
                            document.querySelector('body').style.display = "block"
                        }
                        if (switch_board.its_plp_page) {
                            if (combo == "combo") {
                                let source = (switch_board.its_plp_page || bundle_vars.pdp_client_btn) ? "plp_btn" : null;
                                handling_response_combo(responseData, load_type, id1, id2, plp_elem, source);
                                // prepare_quantity_buttons_for_event_binding(load_type);
                                // // jQuery("html, body").animate({ scrollTop: 0 }, "slow");
                                document.querySelector('html').classList.remove('inc_page_loader')
                                if (document.querySelector('#MainContent') != null) {
                                    document.querySelector('#MainContent').setAttribute('style', ' ')
                                }
                                console.log("response came")
                                if (document.querySelector('#booster-button') != null) {
                                    document.querySelector('#booster-button').style.display = "none"
                                }
                                if (document.querySelector('.nosto-block') != null) {
                                    document.querySelector('.nosto-block').style.display = "block";
                                }
                                if (document.querySelector('#render-widget-container') != null) {
                                    document.querySelector('#render-widget-container').style.display = "block";
                                }
                                if (document.querySelector('.container.main.content iframe') != null) {
                                    document.querySelector('.container.main.content iframe').style.display = "block";
                                }
                                setTimeout(function () {
                                    if (isIE()) {
                                        if (localStorage.getItem("show_cart_inc") == "1") {
                                            localStorage.removeItem("show_cart_inc");
                                            if (document.querySelector('.icon-cart.cart-button') != null) {
                                                document.querySelector('.icon-cart.cart-button').click()
                                            }
                                        }
                                    }
                                }, 3000)
                            }
                        }
                    }
                    // setTimeout(function(){

                    // },500)
                } else {
                    if (document.querySelector('#MainContent') != null) {
                        document.querySelector('#MainContent').setAttribute('style', ' ')
                    }
                    if (document.querySelector('#booster-button') != null) {
                        document.querySelector('#booster-button').style.display = "block"
                    }
                    document.querySelector('html').classList.remove('inc_page_loader')
                    if (document.querySelector('.nosto-block') != null) {
                        document.querySelector('.nosto-block').style.display = "block";
                    }
                    if (document.querySelector('#render-widget-container') != null) {
                        document.querySelector('#render-widget-container').style.display = "block";
                    }
                    if (document.querySelector('.container.main.content iframe') != null) {
                        document.querySelector('.container.main.content iframe').style.display = "block";
                    }

                    if (document.querySelector('.section.product_section .alpha') != null) {
                        document.querySelector('.section.product_section .alpha').style.display = "block";
                        document.querySelector('.section.product_section .omega').style.display = "block";
                    }
                    if (document.querySelector('.nosto-block') != null) {
                        document.querySelector('.nosto-block').style.display = "block";
                    }
                    if (document.querySelector('#render-widget-container') != null) {
                        document.querySelector('#render-widget-container').style.display = "block";
                    }
                    if (document.querySelector('.container.main.content iframe') != null) {
                        document.querySelector('.container.main.content iframe').style.display = "block";
                    }

                }
            }
        };
    }
}



function get_bundle_title(load_type, ic_header_wrap, combo) {
    let title = generate_html_tag('div', 'bundle_title');
    if (switch_board.its_cart_page) {
        title.textContent = bundle_vars.cart_page_title;
        title.classList.add('no_bg');
        get_cart_product_names();
    } else {
        if (load_type == "btn_click") {
            title.textContent = bundle_vars.modal_page_title;
        } else if (combo == "combo") {
            if (window.innerWidth > 819) {
                title.textContent = "Best sellers to complete the Party";
            } else {
                title.textContent = "Buy this party pack";
            }
        } else if (combo == "combo_main") {
            title.textContent = "Build a Party Pack";
        } else {
            title.textContent = bundle_vars.pdp_page_title;
        }
    }
    ic_header_wrap.appendChild(title);
}

function get_product_images(products_data, ic_prod, index, collection) {
    let pdt_img = generate_html_tag('div', 'pdt_img');
    let prods_ul = generate_html_tag('ul', 'pdt_img_ul');
    if (collection == "collection") {
        prods_ul.classList.add('inc_modal')
    }
    let prods_li = generate_html_tag('li', 'show');
    let prod_img = generate_html_tag('img', '');
    let link_a = generate_html_tag('a', '');
    if (window.innerWidth < 1201) {
        add_swipe(prods_li)
    }
    link_a.setAttribute('onClick', 'return trackProductNavigation(\'' + products_data.ProductId + '\',\'' + products_data.ProductUrl + '\')');
    link_a.setAttribute('href', products_data.ProductUrl);
    let get_image = products_data.ImageURL.split('?')[0];
    prod_img.setAttribute('src', get_image + "?img404=noimagedefault&w=120&qlt=80&fmt.jpeg.interlaced=true");
    prod_img.setAttribute('onerror', "this.src='http://www.increasingly.co/IncreasinglyScripts/production/config/noimage.jpg'");
    link_a.appendChild(prod_img);
    prods_li.appendChild(link_a);
    prods_ul.appendChild(prods_li);
    pdt_img.appendChild(prods_ul);
    ic_prod.appendChild(pdt_img);


    let dots = generate_html_tag('div', 'dots');
    dots.classList.add('no_modal')
    let add_img = generate_html_tag('div', 'add_img');
    let prods_ul_add_img = generate_html_tag('ul', '');
    let prods_li_add_img = generate_html_tag('li', '');

    if (products_data.OtherImageList != null) {
        products_data.OtherImageList.unshift(products_data.ImageURL)
        if (products_data.OtherImageList.length >= 2) {
            for (l = 0; l < products_data.OtherImageList.length; l++) {
                let link_a_add_img = generate_html_tag('a', '');
                let prods_li1_add_img = generate_html_tag('li', '');
                let prod_img1_add_img = generate_html_tag('img', '');
                if (window.innerWidth < 1201) {
                    add_swipe(prods_li1_add_img)
                }
                prod_img1_add_img.setAttribute('src', products_data.OtherImageList[l]);
                // prod_img1_add_img.setAttribute('onerror', "this.src='"+products_data.ImageURL+"'");
                prods_li1_add_img.setAttribute("id", l);
                prods_li1_add_img.setAttribute("name", "dot");
                prods_li1_add_img.classList.add('show')
                if (l == 0 || l == 1) {
                    if (l == 0) {
                        prods_li1_add_img.classList.add('inc_active')
                    }
                }
                prods_li1_add_img.setAttribute("index", l);
                // prods_li1_add_img.setAttribute("onclick", "slideTocol(" + JSON.stringify(products_data.ProductId) + "," + l + ")");
                prods_li1_add_img.setAttribute("data_product_id", products_data.ProductId + "_" + l);
                link_a_add_img.appendChild(prod_img1_add_img);
                prods_li1_add_img.appendChild(link_a_add_img);

                prods_ul_add_img.appendChild(prods_li1_add_img);
                add_img.appendChild(prods_ul_add_img);
                prods_li1_add_img.addEventListener('click', function (ev) {
                    let elm = ev.currentTarget;
                    let main_img = elm.querySelector('img').src;
                    let other_image = elm.querySelector('img').src;
                    if (document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img_ul li.show') != null) {
                        let image_wrap = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img_ul li.show');
                        if (image_wrap != null) {
                            if (elm.parentNode.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img .add_img li.inc_active') != null) {
                                elm.parentNode.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img .add_img li.inc_active').classList.remove('inc_active')
                            }
                            elm.classList.add('inc_active')
                            image_wrap.querySelector('img').src = main_img
                        }

                    }
                });
                if (products_data.OtherImageList.length >= 2 && l == 0) {
                    let arrow_right = generate_html_tag('div', 'next');
                    arrow_right.innerText = ""
                    // arrow_right.setAttribute("onclick", "additional_img_slider('1'," + products_data.ProductId + ",this)");
                    arrow_right.setAttribute('img_slide', '0')
                    let arrow_left = generate_html_tag('div', 'prev');
                    // arrow_left.setAttribute("onclick", "additional_img_slider('0'," + products_data.ProductId + ",this)");
                    arrow_left.setAttribute('img_slide', '0')
                    arrow_left.innerText = ""
                    prods_ul.appendChild(arrow_right);
                    prods_ul.appendChild(arrow_left);

                    arrow_right.addEventListener('click', function (ev) {
                        let active_dots = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img .no_modal li.inc_active');
                        if (active_dots.nextElementSibling != null) {
                            active_dots.nextElementSibling.click();
                        } else {
                            let active_dots_start = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img .no_modal li');
                            active_dots_start.click();
                        }

                    });

                    arrow_left.addEventListener('click', function (ev) {
                        let active_dots = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img .no_modal li.inc_active');
                        if (active_dots.previousElementSibling != null) {
                            active_dots.previousElementSibling.click();
                        } else {
                            let last_dot = document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img .dots.no_modal > .add_img ul li').length;
                            let active_dots_start = document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img .dots.no_modal > .add_img ul li')[last_dot - 1];
                            active_dots_start.click();
                        }
                    });
                }
                //}
            }
        }
    }
    pdt_img.appendChild(dots);
    dots.appendChild(add_img);
    if (collection == "collection") {
        let enlarge_quick_view = generate_html_tag('span', 'enlarge_quick_view');
        enlarge_quick_view.innerText = "Enlarge"
        prods_ul.appendChild(enlarge_quick_view)

        enlarge_quick_view.addEventListener('click', function (e) {
            console.log("enlarge")
            let el_enlarge = e.currentTarget.parentNode.parentNode.parentNode;
            el_enlarge.querySelector('.enlarge_image_Modal').classList.toggle('inc_active')
        })


        let enlarge_image_Modal = generate_html_tag('div', 'enlarge_image_Modal');
        let enlarge_image_block = generate_html_tag('div', 'enlarge_image_block');
        enlarge_image_Modal.appendChild(enlarge_image_block)
        let pdt_img_clone = pdt_img.cloneNode(pdt_img);
        enlarge_image_block.appendChild(pdt_img_clone);
        if (enlarge_image_block.querySelector('.dots.no_modal') != null) {
            enlarge_image_block.querySelector('.dots.no_modal').classList.remove('no_modal')
            enlarge_image_block.querySelector('.dots').classList.add('inc_modal')
        }
        if (enlarge_image_block.querySelector('.enlarge_quick_view') != null) {
            let enlarge = enlarge_image_block.querySelector('.enlarge_quick_view')
            if (enlarge != null) {
                enlarge.parentNode.removeChild(enlarge);
            }
        }
        let enlarge_zoom_img = generate_html_tag('div', 'enlarge_zoom_img');
        enlarge_image_Modal.querySelector('.pdt_img_ul li a img').style.display = "none"
        enlarge_zoom_img.setAttribute('style', 'background-image: url("' + get_image + '"); background-size: cover; background-position: center center;')
        enlarge_image_Modal.querySelector('.pdt_img_ul li a').appendChild(enlarge_zoom_img)
        if (enlarge_image_block.querySelectorAll('.dots.inc_modal ul li')[0] != undefined) {
            let enlarge_li = enlarge_image_block.querySelectorAll('.dots.inc_modal ul li');
            for (en = 0; en < enlarge_li.length; en++) {
                enlarge_li[en].addEventListener('click', function (ev) {
                    let elm = ev.currentTarget;
                    let main_img = elm.querySelector('img').src;
                    let other_image = elm.querySelector('img').src;

                    if (document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img_ul li.show') != null) {
                        let image_wrap = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img_ul li.show');
                        if (image_wrap != null) {
                            if (elm.parentNode.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img .add_img li.inc_active') != null) {
                                elm.parentNode.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img .add_img li.inc_active').classList.remove('inc_active')
                            }
                            elm.classList.add('inc_active')
                            image_wrap.querySelector('img').src = main_img
                            image_wrap.querySelector('.enlarge_zoom_img').setAttribute('style', 'background-image: url("' + main_img + '"); background-size: cover; background-position: center center;width:400px;height:400px;')
                        }

                    }
                });
            }
            right_enlimg = enlarge_image_block.querySelector('.pdt_img_ul.inc_modal .next')
            right_enlimg.addEventListener('click', function (ev) {
                let active_dots = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img li.inc_active');
                if (active_dots.nextElementSibling != null) {
                    active_dots.nextElementSibling.click();
                } else {
                    let active_dots_start = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img .dots.inc_modal li.show');
                    active_dots_start.click();
                }

            });
            left_enlimg = enlarge_image_block.querySelector('.pdt_img_ul.inc_modal .prev')
            left_enlimg.addEventListener('click', function (ev) {
                let active_dots = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img  li.inc_active');
                if (active_dots.previousElementSibling != null) {
                    active_dots.previousElementSibling.click();
                } else {
                    let last_dot = document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img .dots > .add_img ul li').length;
                    let active_dots_start = document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img .dots.inc_modal > .add_img ul li')[last_dot - 1];
                    active_dots_start.click();
                }
            });
        }

        let enlarge_image_close = generate_html_tag('span', 'enlarge_image_close');
        enlarge_image_block.appendChild(enlarge_image_close)
        ic_prod.appendChild(enlarge_image_Modal);
        enlarge_image_close.addEventListener('click', function (e) {
            e.currentTarget.parentNode.parentNode.classList.remove('inc_active')
        })
        let all_a_tag = enlarge_image_block.querySelectorAll('.pdt_img_ul.inc_modal a')
        for (r = 0; r < all_a_tag.length; r++) {
            all_a_tag[r].setAttribute('href', 'javascript:void(0)')
            all_a_tag[r].setAttribute('onclick', 'return false;')
        }
        // let enlarge_tag = document.querySelector('')
        if (window.innerWidth < 1201) {
            add_swipe(enlarge_zoom_img)
        }
    }
}

function getAllcheckboxchecked(size) {
    if (switch_board.its_plp_page) {
        let inc_checkboxes = document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_product.inc_checked')
    }
    if (switch_board.its_plp_page) {
        let inc_checkboxes = document.querySelectorAll('.ic_collection_review_block .selected_product_addon.inc_active')
        for (let k = 0; k < inc_checkboxes.length; k++) {
            let ic_prod_div = inc_checkboxes[k];
            let p_types = ic_prod_div.getAttribute('p_types');
            let main_prd_elm = document.querySelector('.ic_product_parent_bundle .ic_product');
            let p_id = ic_prod_div.getAttribute('p_id');
            let p_sku = ic_prod_div.getAttribute('p_sku');
            let p_img = ic_prod_div.getAttribute('p_img');
            let p_href = ic_prod_div.getAttribute('href');
            let c_pid = ic_prod_div.getAttribute('c_pid');
            let color = ic_prod_div.getAttribute('colour_text');
            let size = ic_prod_div.getAttribute('size_text');
            let final_prc = null;
            let combo_id = ic_prod_div.getAttribute('combo_id')

            let bid = ic_prod_div.getAttribute('bid');
            let pname = ic_prod_div.getAttribute('pname');
            let qty = ic_prod_div.getAttribute('qty');
            let prc = ic_prod_div.getAttribute('prc')
            final_prc = prc
            // prc =prc.replace(/ +/g, "");
            let sprc = ic_prod_div.getAttribute('sprc')

            let ic_ind = ic_prod_div.getAttribute('ic_ind');

            if (c_pid != "") {

                bundle_vars.push_product_to_add.push({
                    id: p_id,
                    p_sku: p_sku,
                    combo_id: combo_id,
                    c_pid: c_pid,
                    bid: bid,
                    pname: pname,
                    qty: qty,
                    pimage: pimage,
                    size: size,
                    color: color,
                    prc: prc,
                    sprc: sprc,
                    p_types: p_types
                })
                if (bundle_vars.all_dup_child_prod.indexOf(c_pid) == -1) {
                    bundle_vars.all_dup_child_prod.push(c_pid);
                }
                if (bundle_vars.all_dup_push_prod.indexOf(p_id) == -1) {
                    bundle_vars.all_dup_push_prod.push(p_id);
                }
            } else {

                bundle_vars.push_product_to_add.push({
                    id: p_id,
                    p_sku: p_sku,
                    combo_id: combo_id,
                    c_pid: c_pid,
                    bid: bid,
                    pname: pname,
                    pimage: pimage,
                    size: size,
                    color: color,
                    qty: qty,
                    prc: prc,
                    sprc: sprc,
                    p_types: p_types
                })
                if (bundle_vars.all_dup_push_prod.indexOf(p_id) == -1) {
                    bundle_vars.all_dup_push_prod.push(p_id);
                }
            }
            if (bundle_vars.all_dup_push_prod.indexOf(p_id) == -1) {
                bundle_vars.all_dup_push_prod.push(p_id);
            }
        }
        update_all_product_price();
        if (document.querySelector('.ic_added_item_count') != null) {
            document.querySelector('.ic_added_item_count').innerHTML = bundle_vars.push_product_to_add.length;
        }
    } else if (switch_board.its_pdp_page) {
        for (let k = 0; k < inc_checkboxes.length; k++) {
            console.log("is checked")
            let ic_prod_div = inc_checkboxes[k];
            let p_types = ic_prod_div.getAttribute('prod_type');
            let main_prd_elm = document.querySelector('.ic_product_parent_bundle .ic_product');
            let p_id = ic_prod_div.getAttribute('data_selected_prod_id');
            let p_sku = ic_prod_div.getAttribute('data_selected_prod_sku');
            let c_pid = "";
            let size = "";
            let color = "";
            if (ic_prod_div.querySelector('.selection_bundle ul.prod_Size') != null) {
                c_pid = ic_prod_div.querySelector('.selection_bundle ul.prod_Size li.inc_active a').getAttribute('c_pid');
                size = ic_prod_div.querySelector('.selection_bundle ul.prod_Size li.inc_active a').getAttribute('value');
            }
            if (ic_prod_div.querySelector('.selection_bundle ul.prod_color') != null) {
                c_pid = ic_prod_div.querySelector('.selection_bundle ul.prod_color li.inc_active a').getAttribute('c_pid');
                color = ic_prod_div.querySelector('.selection_bundle ul.prod_color li.inc_active a').getAttribute('value');
            }
            let combo_id = ic_prod_div.getAttribute('combo_id')
            let bid = ic_prod_div.getAttribute('bundle_id');
            let pname = ic_prod_div.querySelector('.pdt_name p').innerHTML;
            let pimage = ic_prod_div.querySelector('.pdt_img img').src;
            let qty = ic_prod_div.querySelector('.q_holder input').value;
            let prc = ic_prod_div.querySelector('.pdt_price .product_amount').innerText.replace('$', '').replace(",", "");
            let sprc = 0;
            if (ic_prod_div.querySelector('.pdt_price .spec_amount') != null) {
                if (ic_prod_div.querySelector('.pdt_price .spec_amount').style.display != "none") {
                    sprc = ic_prod_div.querySelector('.pdt_price .spec_amount').innerText.replace('$', '').replace(",", "");
                }
            }
            let s_size = ic_prod_div.getAttribute('size');
            let s_color = ic_prod_div.getAttribute('color');
            if (size == "") {
                size = s_size
            }
            if (color == "") {
                color = s_color
            }
            if (c_pid != "") {

                bundle_vars.push_product_to_add.push({
                    id: p_id,
                    p_sku: p_sku,
                    combo_id: combo_id,
                    c_pid: c_pid,
                    bid: bid,
                    pname: pname,
                    qty: qty,
                    pimage: pimage,
                    size: size,
                    color: color,
                    prc: prc,
                    sprc: sprc,
                    p_types: p_types
                })
                if (bundle_vars.all_dup_child_prod.indexOf(c_pid) == -1) {
                    bundle_vars.all_dup_child_prod.push(c_pid);
                }
                if (bundle_vars.all_dup_push_prod.indexOf(p_id) == -1) {
                    bundle_vars.all_dup_push_prod.push(p_id);
                }
            } else {

                bundle_vars.push_product_to_add.push({
                    id: p_id,
                    p_sku: p_sku,
                    combo_id: combo_id,
                    c_pid: c_pid,
                    bid: bid,
                    pname: pname,
                    pimage: pimage,
                    size: size,
                    color: color,
                    qty: qty,
                    prc: prc,
                    sprc: sprc,
                    p_types: p_types
                })
                if (bundle_vars.all_dup_push_prod.indexOf(p_id) == -1) {
                    bundle_vars.all_dup_push_prod.push(p_id);
                }
            }
            if (bundle_vars.all_dup_push_prod.indexOf(p_id) == -1) {
                bundle_vars.all_dup_push_prod.push(p_id);
            }
        }
        update_all_product_price();
        if (document.querySelector('.ic_added_item_count') != null) {
            document.querySelector('.ic_added_item_count').innerHTML = bundle_vars.push_product_to_add.length;
        }
    }
}


function update_all_product_price() {
    let p_total = bundle_vars.push_product_to_add;
    let pr = 0;
    let sp = 0;
    let inc_active_tab = document.querySelector('.ic_popup_module_wrapper.inc_active .inc_product_checkout');
    if (bundle_vars.push_product_to_add.length > 0) {
        if (inc_active_tab.classList.contains('inc_active') == false) {
            inc_active_tab.classList.add('inc_active')
        }
    } else {
        inc_active_tab.classList.remove('inc_active')
    }
    for (let p = 0; p < p_total.length; p++) {
        if (sp != 0 && p_total[p].sprc != 0) {
            pr += p_total[p].prc * p_total[p].qty;
            sp += p_total[p].sprc * p_total[p].qty;
        } else if (sp != 0 && p_total[p].sprc == 0) {
            pr += p_total[p].prc * p_total[p].qty;
            sp += p_total[p].prc * p_total[p].qty;
        } else if (sp == 0 && p_total[p].sprc == 0) {
            pr += p_total[p].prc * p_total[p].qty;
            sp += p_total[p].prc * p_total[p].qty;
        } else {
            pr += p_total[p].prc * p_total[p].qty;
            sp += p_total[p].sprc * p_total[p].qty;
        }

    }
    //ic_added_item_text
    if (pr == 0 || bundle_vars.push_product_to_add.length == 0) {
        if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap')[0] != undefined) {
            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_added_item_text')[0].classList.add('inc_disable_btn')
            // document.querySelector('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap').setAttribute("style", "pointer-events: none;background: #bbb;");
            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn')[0].classList.add('inc_disable_btn')
            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].innerText = "Add Item to Cart"
            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .inc_product_checkout')[0].classList.add('inc_price_disabled')
        }
    } else {
        if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap')[0] != undefined) {
            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_added_item_text')[0].classList.remove('inc_disable_btn')
            // document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap').setAttribute("style", "pointer-events: none;background: #bbb;");
            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn')[0].classList.remove('inc_disable_btn');
            if (bundle_vars.push_product_to_add.length == 1) {
                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item to Cart"
            } else {
                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item(s) to Cart"
            }
            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .inc_product_checkout')[0].classList.remove('inc_price_disabled')
        }
    }
    if (inc_active_tab != null) {
        if (inc_active_tab.querySelectorAll('.ic_save_price')[0] != null) {
            let save_prc_elm = inc_active_tab.querySelectorAll('.ic_save_price')[0];
            if (save_prc_elm != null) {
                save_prc_elm.parentNode.removeChild(save_prc_elm);
            }
        }
        let act_mobile = inc_active_tab.querySelector('.checkout_clone_mobile')
        if (switch_board.its_plp_page) {
            if (pr != sp && sp != 0) {
                if (act_mobile != null) {
                    act_mobile.querySelectorAll('.inc_price')[0].textContent = formatter.format(pr)
                    if (+pr != +sp) {
                        if (act_mobile.querySelectorAll('.inc_special_price')[0] != undefined) {
                            act_mobile.querySelectorAll('.inc_price')[0].classList.add('old')
                            act_mobile.querySelectorAll('.inc_special_price')[0].setAttribute('style', 'display:inline-block !important');
                            act_mobile.querySelectorAll('.inc_special_price')[0].textContent = formatter.format(sp)

                        } else {
                            let inc_special_price = generate_html_tag('span', 'inc_special_price');
                            inc_special_price.textContent = formatter.format(sp)
                            inc_special_price.style.display = 'inline-block';
                            act_mobile.querySelectorAll(".price_bind .inc_price")[0].classList.add('old');
                            let ap_div = act_mobile.querySelectorAll(".price_bind .price_org_spl_wrap")[0];
                            ap_div.insertBefore(inc_special_price, ap_div.childNodes[0])
                        }
                        act_mobile.querySelectorAll('.inc_price')[0].classList.remove('inc_standard_price')
                        act_mobile.querySelectorAll('.inc_special_price')[0].classList.add('inc_standard_price')
                    }
                } else {
                    inc_active_tab.querySelectorAll('.inc_price')[0].textContent = formatter.format(pr)
                    if (+pr != +sp) {
                        if (inc_active_tab.querySelectorAll('.inc_special_price')[0] != undefined) {
                            inc_active_tab.querySelectorAll('.inc_price')[0].classList.add('old')
                            inc_active_tab.querySelectorAll('.inc_special_price')[0].setAttribute('style', 'display:inline-block !important');
                            inc_active_tab.querySelectorAll('.inc_special_price')[0].textContent = formatter.format(sp)

                        } else {
                            let inc_special_price = generate_html_tag('span', 'inc_special_price');
                            inc_special_price.textContent = formatter.format(sp)
                            inc_special_price.style.display = 'inline-block';
                            inc_active_tab.querySelectorAll(".price_bind .inc_price")[0].classList.add('old');
                            let ap_div = inc_active_tab.querySelectorAll(".price_bind .price_org_spl_wrap")[0];
                            ap_div.insertBefore(inc_special_price, ap_div.childNodes[0])
                        }
                        inc_active_tab.querySelectorAll('.inc_price')[0].classList.remove('inc_standard_price')
                        inc_active_tab.querySelectorAll('.inc_special_price')[0].classList.add('inc_standard_price')
                    }
                }

                let ic_save_price = generate_html_tag('span', 'ic_save_price');
                ic_save_price.textContent = "Save $" + (parseFloat(+pr - +sp).toFixed(2))
                let sib_save = inc_active_tab.querySelectorAll('.bundle_price_wrap')[0];
                sib_save.appendChild(ic_save_price)
                // sib_save.parentNode.insertBefore(ic_save_price, sib_save);
            } else {
                if (act_mobile != null) {
                    act_mobile.querySelectorAll('.inc_price')[0].textContent = formatter.format(pr)
                    if (act_mobile.querySelectorAll('.inc_special_price')[0] != undefined) {
                        act_mobile.querySelectorAll('.inc_special_price')[0].setAttribute('style', 'display:none !important');

                    }
                    // act_mobile.querySelectorAll('.inc_price').classList.remove('old')
                    if (act_mobile.querySelectorAll('.price_bind .inc_price.old')[0] != null) {
                        act_mobile.querySelectorAll('.price_bind .inc_price')[0].classList.remove('old')
                    }
                    if (act_mobile.querySelectorAll('.price_bind .price_org_spl_wrap .inc_special_price')[0] != undefined) {
                        act_mobile.querySelectorAll('.price_bind .price_org_spl_wrap .inc_special_price')[0].setAttribute('style', 'display:none !important')
                        let sepc_elm = act_mobile.querySelectorAll('.price_bind .price_org_spl_wrap .inc_special_price')[0]
                        if (sepc_elm != null) {
                            sepc_elm.parentNode.removeChild(sepc_elm);
                        }
                    }
                    if (act_mobile.querySelectorAll('.inc_price.inc_standard_price')[0] == undefined) {
                        if (act_mobile.querySelectorAll('.inc_price')[0] != undefined) {
                            act_mobile.querySelectorAll('.inc_price')[0].classList.add('inc_standard_price')
                        }
                    }
                    if (act_mobile.querySelectorAll('.inc_special_price')[0] != undefined) {
                        act_mobile.querySelectorAll('.inc_special_price')[0].classList.remove('inc_standard_price')
                    }
                } else {
                    inc_active_tab.querySelectorAll('.inc_price')[0].textContent = formatter.format(pr)
                    if (inc_active_tab.querySelectorAll('.inc_special_price')[0] != undefined) {
                        inc_active_tab.querySelectorAll('.inc_special_price')[0].setAttribute('style', 'display:none !important');

                    }
                    // inc_active_tab.querySelectorAll('.inc_price').classList.remove('old')
                    if (inc_active_tab.querySelectorAll('.price_bind .inc_price.old')[0] != null) {
                        inc_active_tab.querySelectorAll('.price_bind .inc_price')[0].classList.remove('old')
                    }
                    if (inc_active_tab.querySelectorAll('.price_bind .price_org_spl_wrap .inc_special_price')[0] != undefined) {
                        inc_active_tab.querySelectorAll('.price_bind .price_org_spl_wrap .inc_special_price')[0].setAttribute('style', 'display:none !important')
                        let sepc_elm = inc_active_tab.querySelectorAll('.price_bind .price_org_spl_wrap .inc_special_price')[0]
                        if (sepc_elm != null) {
                            sepc_elm.parentNode.removeChild(sepc_elm);
                        }
                    }
                    if (inc_active_tab.querySelectorAll('.inc_price.inc_standard_price')[0] == undefined) {
                        if (inc_active_tab.querySelectorAll('.inc_price')[0] != undefined) {
                            inc_active_tab.querySelectorAll('.inc_price')[0].classList.add('inc_standard_price')
                        }
                    }
                    if (inc_active_tab.querySelectorAll('.inc_special_price')[0] != undefined) {
                        inc_active_tab.querySelectorAll('.inc_special_price')[0].classList.remove('inc_standard_price')
                    }
                }
            }

        }
    }
    if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_added_item_count')[0] != null) {
        document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_added_item_count')[0].innerHTML = bundle_vars.push_product_to_add.length;
    }

    //2nd price
    if (window.innerWidth < 820) {
        if (pr == 0 || bundle_vars.push_product_to_add.length == 0) {
            if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap')[1] != undefined) {
                // document.querySelector('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap').setAttribute("style", "pointer-events: none;background: #bbb;");
                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap')[1].classList.add('inc_disable_btn')
                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].innerText = "Add Item to Cart";
                if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .inc_product_checkout')[1] != undefined) {
                    document.querySelectorAll('.ic_popup_module_wrapper.inc_active .inc_product_checkout')[1].classList.add('inc_price_disabled')
                }
            }
        } else {
            if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap')[1] != undefined) {
                // document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap').setAttribute("style", "pointer-events: none;background: #bbb;");
                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap')[1].classList.remove('inc_disable_btn');
                if (bundle_vars.push_product_to_add.length == 1) {
                    document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item to Cart"
                } else {
                    document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item(s) to Cart"
                }
                if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .inc_product_checkout')[1] != undefined) {
                    document.querySelectorAll('.ic_popup_module_wrapper.inc_active .inc_product_checkout')[1].classList.remove('inc_price_disabled')
                }
            }
        }
        if (inc_active_tab != null) {
            if (inc_active_tab.querySelectorAll('.ic_save_price')[1] != undefined) {
                let save_prc_elm = inc_active_tab.querySelectorAll('.ic_save_price')[1];
                if (save_prc_elm != null) {
                    save_prc_elm.parentNode.removeChild(save_prc_elm);
                }
            }
            if (switch_board.its_plp_page) {
                if (inc_active_tab.querySelectorAll('.inc_price')[1] != undefined) {
                    if (pr != sp && sp != 0) {
                        inc_active_tab.querySelectorAll('.inc_price')[1].textContent = formatter.format(pr)
                        if (+pr != +sp) {
                            if (inc_active_tab.querySelectorAll('.inc_special_price')[1] != undefined) {
                                inc_active_tab.querySelectorAll('.inc_price')[1].classList.add('old')
                                inc_active_tab.querySelectorAll('.inc_special_price')[1].setAttribute('style', 'display:inline-block !important');
                                inc_active_tab.querySelectorAll('.inc_special_price')[1].textContent = formatter.format(sp)

                            } else {
                                let inc_special_price = generate_html_tag('span', 'inc_special_price');
                                inc_special_price.textContent = formatter.format(sp)
                                inc_special_price.style.display = 'inline-block';
                                inc_active_tab.querySelectorAll(".price_bind .inc_price")[1].classList.add('old');
                                let ap_div = inc_active_tab.querySelectorAll(".price_bind .price_org_spl_wrap")[1];
                                ap_div.insertBefore(inc_special_price, ap_div.childNodes[1])
                            }
                            inc_active_tab.querySelectorAll('.inc_price')[1].classList.remove('inc_standard_price')
                            inc_active_tab.querySelectorAll('.inc_special_price')[1].classList.add('inc_standard_price')
                        }
                        let ic_save_price = generate_html_tag('span', 'ic_save_price');
                        ic_save_price.textContent = "Save $" + (parseFloat(+pr - +sp).toFixed(2))
                        let sib_save = inc_active_tab.querySelectorAll('.bundle_price_wrap')[1];
                        sib_save.appendChild(ic_save_price)
                        // sib_save.parentNode.insertBefore(ic_save_price, sib_save);
                    } else {
                        inc_active_tab.querySelectorAll('.inc_price')[1].textContent = formatter.format(pr)
                        if (inc_active_tab.querySelectorAll('.inc_special_price')[1] != undefined) {
                            inc_active_tab.querySelectorAll('.inc_special_price')[1].setAttribute('style', 'display:none !important');

                        }
                        // inc_active_tab.querySelectorAll('.inc_price').classList.remove('old')
                        if (inc_active_tab.querySelectorAll('.price_bind .inc_price.old')[1] != null) {
                            inc_active_tab.querySelectorAll('.price_bind .inc_price')[1].classList.remove('old')
                        }
                        if (inc_active_tab.querySelectorAll('.price_bind .price_org_spl_wrap .inc_special_price')[1] != undefined) {
                            inc_active_tab.querySelectorAll('.price_bind .price_org_spl_wrap .inc_special_price')[1].setAttribute('style', 'display:none !important')
                            let sepc_elm = inc_active_tab.querySelectorAll('.price_bind .price_org_spl_wrap .inc_special_price')[1]
                            if (sepc_elm != null) {
                                sepc_elm.parentNode.removeChild(sepc_elm);
                            }
                        }
                        if (inc_active_tab.querySelectorAll('.inc_price.inc_standard_price')[1] == undefined) {
                            inc_active_tab.querySelectorAll('.inc_price')[1].classList.add('inc_standard_price')
                        }
                        if (inc_active_tab.querySelectorAll('.inc_special_price')[1] != undefined) {
                            inc_active_tab.querySelectorAll('.inc_special_price')[1].classList.remove('inc_standard_price')
                        }
                    }
                }

            }
        }
        if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_added_item_count')[1] != null) {
            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_added_item_count')[1].innerHTML = bundle_vars.push_product_to_add.length;
        }
    }

    if (document.querySelector('.ic_combo_mobile_product_avail_review_count') != null) {
        document.querySelector('.ic_combo_mobile_product_avail_review_count').innerText = bundle_vars.push_product_to_add.length;
        document.querySelector('.ic_combo_mobile_product_avail_review_Block').classList.remove('disabled_rev_button')
        if (bundle_vars.push_product_to_add.length == 0) {
            document.querySelector('.ic_combo_mobile_product_avail_review_Block').classList.add('disabled_rev_button')
        }
    }
}



function quantity_box_restriction(el, event) {
    if (el.value != "*") {
        if (el.value <= 0) {
            el.setAttribute("value", "0");
            el.value = "0";
            quantity_input_change(el);
        }
        if (el.value > 99) {
            event.preventDefault();
            el.setAttribute("value", "99");
            el.setAttribute("old_val", "99");
            el.value = "99";
            el.nextElementSibling.nextElementSibling.setAttribute('value', '99')
            el.parentNode.querySelector('input').setAttribute('value', "99")
            bundle_vars.all_dup_child_prod = [];
            bundle_vars.all_dup_push_prod = [];
            bundle_vars.push_product_to_add = [];
            if (document.querySelector('#ic_bundle_popup') == null && switch_board.its_pdp_page) {
                getAllcheckboxchecked()
            }
        }
    }
    if (el != undefined) {
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    }
}

function get_product_title(products_data, ic_prod, index) {
    let prod_name_wrap = generate_html_tag('div', 'pdt_name');
    let prod_name = generate_html_tag('a', '');
    prod_name.setAttribute('title', products_data.ProductName);
    prod_name.setAttribute('onClick', 'return trackProductNavigation(\'' + products_data.ProductId + '\',\'' + products_data.ProductUrl + '\')');
    prod_name.setAttribute('onmouseenter', 'showTooltip(this)')
    prod_name.setAttribute('onmouseleave', 'hideTooltip(this)')
    // /<span class = 'inc_tooltips'> "+l_prd.PrdName+"</span>
    let prod_name_p = generate_html_tag('p', '');
    if (index == 0) {
        prod_name_p.classList.add('item_text')
    }
    prod_name_p.textContent = products_data.ProductName;
    prod_name.setAttribute('href', products_data.ProductUrl);
    prod_name.appendChild(prod_name_p);

    let prod_name_manufacture = generate_html_tag('span', 'prod_name_manufacture');
    prod_name_manufacture.innerText = products_data.Manufacturer;
    prod_name.appendChild(prod_name_manufacture)
    prod_name_wrap.appendChild(prod_name);
    ic_prod.appendChild(prod_name_wrap);
}

function get_product_price(products_data, ic_prod, is_spc) {
    let prod_price = generate_html_tag('div', 'pdt_price');
    if (is_spc == 1) {
        prod_price.setAttribute('style', 'min-height:38px;')
    }
    toggle_price(products_data.Price, products_data.SpecialPrice, prod_price);
    ic_prod.appendChild(prod_price);
    return prod_price;
}



function get_product_ratings(filed3, rating_containers) {

    let productRatingsBlock = generate_html_tag('div', 'productRatingsBlock');
    rating_containers.appendChild(productRatingsBlock)
    if (filed3 != undefined && filed3 != "" && filed3 != 0 && filed3.split('|')[0] != "0.0" && filed3.split('|')[0] != "0") {
        let rating = filed3.split("|")[0].split(" ")[0];
        if (rating == undefined || rating == "") {
            rating = "0"
        }
        let ratingAvg = filed3
        let rating_container = productRatingsBlock;
        rating_m = rating.replace(".", "-");

        if (rating == 0) {
            rating = "0-0"
            rating_m = "0-0"
        }
        if (rating == 1) {
            rating = "1-0"
            if (rating_m != null) {
                rating_m = "1-0"
            }
        }
        if (rating == 2) {
            rating = "2-0"
            if (rating_m != null) {
                rating_m = "2-0"
            }
        }
        if (rating == 3) {
            rating = "3-0"
            if (rating_m != null) {
                rating_m = "3-0"
            }
        }
        if (rating == 4) {
            rating = "4-0"
            if (rating_m != null) {
                rating_m = "4-0"
            }
        }
        if (rating == 5) {
            rating = "5-0"
            if (rating_m != null) {
                rating_m = "5-0"
            }
        }
        if (rating == "") {
            rating = 0;
        }
        if (rating_m != null) {
            rating_container.classList.add("rating_" + rating_m);
        } else {
            rating_container.classList.add("rating_" + rating);
        }

        let count = document.createElement('span');
        count.classList.add('rating_count')
        rating_container.appendChild(count);
        let avg = document.createElement('span');
        avg.classList.add('rating_avg')
        if (rating == "0-0") {
            count.textContent = "(0)";
        } else {
            count.textContent = "(" + rating.replace('-', '.') + ")"
        }
        let stars = document.createElement('span');
        stars.classList.add('rating_stars');
        stars.innerHTML = "★★★★★"
        rating_container.appendChild(stars);
    } else {
        let stars = document.createElement('span');
        stars.innerHTML = "."
        stars.style.color = "#fff"
        stars.classList.add('rating_stars');
        stars.classList.add('noratings');
        rating_containers.classList.add('noratings');
        productRatingsBlock.appendChild(stars);
    }
}

function sorting(data) {
    data.sort(function (n, m) {
        if (+n.special_price > 0) {
            sn_price = n.special_price;
        } else {
            sn_price = n.price;
        }
        if (+m.special_price > 0) {
            sm_price = m.special_price;
        } else {
            sm_price = m.price;
        }
        return sn_price - sm_price;
    })
}

function filter_unique_values(data) {
    let fdata = {};
    data = data.filter(function (currentObject) {
        if (currentObject.id in fdata) {
            return false;
        } else {
            fdata[currentObject.id] = true;
            return true;
        }
    });
    return data;
}

function sortByKey(array, key) {
    return array.sort(function (a, b) {
        let x = a[key],
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

function prepare_configurables(attributes, products_data, load_type, bundle_selection, combo) {
    let ulitem = 0;
    let format = /[_]/;
    let l_data = "";
    html_size = "";
    html_color = "";
    let mainOptionId = "";
    let data_size = [];
    let SelClrVal = "";
    let id = "";
    let chckType = "";
    let sizeValue = "";
    let reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|2XL$');
    if (attributes[0].frontEndLabel != "Colour" || attributes[0].frontEndLabel != "color") {
        attributes = attributes.reverse();
    } else {
        attributes = attributes;
    }
    let child_optionText = "";
    let child_prd_arr = [];
    for (h = 0; h < attributes.length; h++) {
        ulitem = h;
        let data = [];
        if (format.test(attributes[h].attributeCode) == true) {
            let acode = attributes[h].frontEndLabel.replace('_', ' ');
        } else {
            let acode = attributes[h].frontEndLabel;
        }
        for (k = 0; k < attributes[h].attributeValues.length; k++) {
            if (acode == "Color" || acode == "color" || acode == "Colour") {
                child_optionText = attributes[h].attributeValues[0].optionText;
            }
            if (child_optionText == attributes[h].attributeValues[k].optionText) {
                child_prd_arr.push(attributes[h].attributeValues[k].childProductId);
            }
        }
    }
    for (m = 0; m < attributes.length; m++) {
        ulitem = m;
        let data = [];
        if (format.test(attributes[m].attributeCode) == true) {
            let acode = attributes[m].frontEndLabel.replace('_', ' ');
        } else {
            let acode = attributes[m].frontEndLabel;
        }
        //let acode = attributes[m].attributeCode;
        let aId = attributes[m].attributeId;
        let i = 0;
        let size = [];
        for (n = 0; n < attributes[m].attributeValues.length; n++) {
            if (attributes.length == 1 && (acode != "color" || acode != "Colour") && child_prd_arr.length == 0) {

                opt_id = attributes[m].attributeValues[n].optionText;
                text = attributes[m].attributeValues[n].optionText;
                pid = attributes[m].attributeValues[n].optionId;
                pricingval = attributes[m].attributeValues[n].childProductPrice;
                splPricingVal = attributes[m].attributeValues[n].childProductSpecialPrice;
                child_url = attributes[m].attributeValues[n].childProductUrl
                attr_code = attributes[m].attributeCode;
                let child_img_url = attributes[m].attributeValues[n].childProductImageUrl;
                let child_prd_sku = attributes[m].attributeValues[n].childProductSku;
                let child_prd = attributes[m].attributeValues[n].childProductId;
                let child_NM = attributes[m].attributeValues[n].childProductName;
                let opt_img_url = attributes[m].attributeValues[n].optionImageUrl;
                if (child_img_url == null) {
                    child_img_url = products_data.ImageURL
                }
                let clr_code = attributes[m].attributeValues[n].colorCode
                //ImageURL
                if (splPricingVal == null) {
                    splPricingVal = 0;
                }
                if (splPricingVal == null) {
                    splPricingVal = 0;
                }
                let chckType = text;
                let reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|2XL$');
                let fixReg = reg.test(chckType);
                if (reg.test(chckType) == true) {
                    switch ((text).toUpperCase()) {
                        case "XS":
                            sizeValue = "1"
                            break;
                        case "S":
                            sizeValue = "2"
                            break;
                        case "M":
                            sizeValue = "3"
                            break;
                        case "L":
                            sizeValue = "4"
                            break;
                        case "XL":
                            sizeValue = "5"
                            break;
                        case "XXL":
                            sizeValue = "6"
                            break;
                        case "XXXL":
                            sizeValue = "7"
                            break;
                        case "2XL":
                            sizeValue = "8"
                            break;
                        default:
                            break;
                    }
                } else {
                    sizeValue = text;
                }
                data.push({
                    id: text,
                    value: text,
                    pid: pid,
                    price: parseFloat(pricingval).toFixed(2),
                    special_price: parseFloat(splPricingVal).toFixed(2),
                    opt_id: opt_id,
                    child_url: child_url,
                    attr_code: attr_code,
                    child_img_url: child_img_url,
                    clr_code: clr_code,
                    child_prd_sku: child_prd_sku,
                    child_prd: child_prd,
                    child_NM: child_NM,
                    opt_img_url: opt_img_url
                });
            } else {
                if (acode == "Color" || acode == "color" || acode == "Colour") {
                    //if(child_prd_arr.indexOf(attributes[m].attributeValues[n].childInternalProductId) >= 0){

                    opt_id = attributes[m].attributeValues[n].optionText;
                    text = attributes[m].attributeValues[n].optionText;
                    pid = attributes[m].attributeValues[n].optionId;
                    pricingval = attributes[m].attributeValues[n].childProductPrice;
                    splPricingVal = attributes[m].attributeValues[n].childProductSpecialPrice;
                    child_url = attributes[m].attributeValues[n].childProductUrl
                    attr_code = attributes[m].attributeCode;
                    let child_img_url = attributes[m].attributeValues[n].childProductImageUrl;
                    let child_prd_sku = attributes[m].attributeValues[n].childProductSku;
                    let child_prd = attributes[m].attributeValues[n].childProductId;
                    let child_NM = attributes[m].attributeValues[n].childProductName;
                    let opt_img_url = attributes[m].attributeValues[n].optionImageUrl;
                    if (child_img_url == null) {
                        child_img_url = products_data.ImageURL
                    }
                    let clr_code = attributes[m].attributeValues[n].colorCode
                    //ImageURL
                    if (splPricingVal == null) {
                        splPricingVal = 0;
                    }
                    let chckType = text;
                    let reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|2XL$');
                    let fixReg = reg.test(chckType);
                    if (reg.test(chckType) == true) {
                        switch ((text).toUpperCase()) {
                            case "XS":
                                sizeValue = "1"
                                break;
                            case "S":
                                sizeValue = "2"
                                break;
                            case "M":
                                sizeValue = "3"
                                break;
                            case "L":
                                sizeValue = "4"
                                break;
                            case "XL":
                                sizeValue = "5"
                                break;
                            case "XXL":
                                sizeValue = "6"
                                break;
                            case "XXXL":
                                sizeValue = "7"
                                break;
                            case "2XL":
                                sizeValue = "8"
                                break;
                            default:
                                break;
                        }
                    } else {
                        sizeValue = text;
                    }
                    data.push({
                        id: text,
                        value: text,
                        pid: pid,
                        price: parseFloat(pricingval).toFixed(2),
                        special_price: parseFloat(splPricingVal).toFixed(2),
                        opt_id: opt_id,
                        child_url: child_url,
                        attr_code: attr_code,
                        child_img_url: child_img_url,
                        clr_code: clr_code,
                        child_prd_sku: child_prd_sku,
                        child_prd: child_prd,
                        child_NM: child_NM,
                        opt_img_url: opt_img_url
                    });
                    //}
                } else {
                    if (child_prd_arr.indexOf(attributes[m].attributeValues[n].childProductId) >= 0) {

                        opt_id = attributes[m].attributeValues[n].optionText;
                        text = attributes[m].attributeValues[n].optionText;
                        pid = attributes[m].attributeValues[n].optionId;
                        pricingval = attributes[m].attributeValues[n].childProductPrice;
                        splPricingVal = attributes[m].attributeValues[n].childProductSpecialPrice;
                        child_url = attributes[m].attributeValues[n].childProductUrl
                        attr_code = attributes[m].attributeCode;
                        let child_img_url = attributes[m].attributeValues[n].childProductImageUrl;
                        let child_prd_sku = attributes[m].attributeValues[n].childProductSku;
                        let child_prd = attributes[m].attributeValues[n].childProductId;
                        let child_NM = attributes[m].attributeValues[n].childProductName;
                        let opt_img_url = attributes[m].attributeValues[n].optionImageUrl;
                        if (child_img_url == null) {
                            child_img_url = products_data.ImageURL
                        }
                        let clr_code = attributes[m].attributeValues[n].colorCode
                        //ImageURL
                        if (splPricingVal == null) {
                            splPricingVal = 0;
                        }
                        let chckType = text;
                        let sizeValue = ""
                        let reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|2XL$');
                        let fixReg = reg.test(chckType);
                        if (reg.test(chckType) == true) {
                            switch ((text).toUpperCase()) {
                                case "XS":
                                    sizeValue = "1"
                                    break;
                                case "S":
                                    sizeValue = "2"
                                    break;
                                case "M":
                                    sizeValue = "3"
                                    break;
                                case "L":
                                    sizeValue = "4"
                                    break;
                                case "XL":
                                    sizeValue = "5"
                                    break;
                                case "XXL":
                                    sizeValue = "6"
                                    break;
                                case "XXXL":
                                    sizeValue = "7"
                                    break;
                                case "2XL":
                                    sizeValue = "8"
                                    break;
                                default:
                                    break;
                            }
                        } else {
                            sizeValue = text;
                        }
                        data.push({
                            id: text,
                            value: text,
                            pid: pid,
                            price: parseFloat(pricingval).toFixed(2),
                            special_price: parseFloat(splPricingVal).toFixed(2),
                            opt_id: opt_id,
                            child_url: child_url,
                            attr_code: attr_code,
                            child_img_url: child_img_url,
                            clr_code: clr_code,
                            child_prd_sku: child_prd_sku,
                            child_prd: child_prd,
                            child_NM: child_NM,
                            sizeValue: sizeValue,
                            opt_img_url: opt_img_url
                        });
                    }
                }
            }
        }
        data.sort(function (a, b) {
            return (b.child_prd === null) - (a.child_prd === null) || ('' + a.child_prd).localeCompare(b.child_prd);
        });
        data = filter_unique_values(data);
        if (products_data.ProductId == client_vars.product_ids[0]) {
            if (switch_board.its_pdp_page && load_type == "onload") {
                if (acode == "Color" || acode == "color" || acode == "Colour") {

                } else {
                    let size_mismatch = 0;
                    for (l = 0; l < data.length; l++) {
                        if (data[l] != undefined) {
                            bundle_vars.inc_size_id.push(data[l].id)
                            if (bundle_vars.client_size.indexOf(data[l].id) >= 0) {
                                size_mismatch++;
                            }
                        }
                    }
                    if (size_mismatch > 1) {
                        for (k = 0; k < bundle_vars.client_size.length; k++) {
                            // if(data[k] != undefined){
                            if (bundle_vars.inc_size_id.indexOf(bundle_vars.client_size[k]) >= 0) { } else {
                                data.push({
                                    id: bundle_vars.client_size[k],
                                    value: bundle_vars.client_size[k],
                                    pid: "",
                                    price: "",
                                    special_price: "",
                                    opt_id: "",
                                    child_url: "",
                                    attr_code: "",
                                    child_img_url: "",
                                    clr_code: "",
                                    child_prd_sku: "",
                                    child_prd: "",
                                    child_NM: "",
                                    sizeValue: "",
                                    opt_img_url: ""
                                });
                            }
                            //}
                        }
                    }
                }
            }
        }
        if (reg.test(chckType) == true) {
            sorting_data(data, 'sizeValue');
        } else {
            sortByKey(data, 'id');
        }
        if (acode == "Color" || acode == "color" || acode == "Colour") {
            if (data[0].id != child_optionText) {
                data = data.reverse();
            }
        }

        let select_wrapper = generate_html_tag("div", "select_wrapper");
        let color_label_wrap = generate_html_tag("div", "color_label_wrap");
        let color_size_title = generate_html_tag("label", "color_size_title");
        if (acode == "Color" || acode == "color" || acode == "Colour") {
            color_size_title.textContent = "Color";
        } else {
            color_size_title.textContent = "Size";
        }
        color_label_wrap.appendChild(color_size_title);
        select_wrapper.appendChild(color_label_wrap);
        let color_label_text = generate_html_tag("span", "color_label_text");

        let ul = generate_html_tag("ul", "prod_Colour");

        ul.classList.add('product_sizes')
        if (acode == "Color" || acode == "color" || acode == "Colour") {
            ul.classList.add("Colour");
            ul.classList.add("prod_" + acode + "");
        } else {
            ul.classList.add("prod_Size");
            ul.classList.add('acode');
        }
        ul.setAttribute("onchange", "update_the_price(\"" + load_type + "\", this.value,this);");

        let color_size_count = 0;
        let is_inc_active = 0;
        for (i = 0; i < data.length; i++) {
            let no_arrow = "";
            if (window.innerWidth < 767) {
                if (data.length == 1) {
                    sel_parent.style.display = 'none'
                }
            }
            let sel = "";
            let checked = "";

            if (i == 0) {
                sel = "selected";
                checked = "inc_active";
                is_inc_active = 1;
            }
            if (data[i].child_prd == null) {
                data[i].price = products_data.Price;
                data[i].special_price = products_data.SpecialPrice;
                data[i].child_NM = products_data.ProductName; //c_pid
                data[i].child_prd = products_data.ProductId;
            }
            let selected = (data[i].pid == products_data.ProductId) ? "selected" : "";
            //if(window.innerWidth > 420){
            let show_hide = "inc_show";



            if (combo == "combo") {
                let show_hide = "inc_show";
            }


            let dis_sizes = "";
            let dis_text = ""

            let le_style = ""
            if (acode == "Color" || acode == "color" || acode == "Colour") {
                if (data.length < 4) {
                    if (i == 0) {
                        ul.classList.add('no_arrow')
                    }
                }

                if (!switch_board.its_cart_page) {
                    let swatch_option_tooltip = generate_html_tag("div", "swatch-option-tooltip");
                    swatch_option_tooltip.classList.add('inc_swatch_option_tooltip')
                    let inc_img_tooltip = generate_html_tag("div", "inc_img_tooltip");
                    let inc_img_tooltip_title = generate_html_tag("div", "title");
                    let inc_img_tooltip_corner = generate_html_tag("div", "corner");
                    inc_img_tooltip.classList.add('image');

                }
                color_size_count++;
                let color_size_li = generate_html_tag("li", "color_size_li");
                let color_tag = generate_html_tag("a", "color_tag");
                color_size_li.classList.add(show_hide);
                color_tag.classList.add('color_img');
                if (checked != "") {
                    color_tag.classList.add(checked);
                    color_size_li.classList.add(checked);
                    color_size_title.textContent = "Color : " + data[i].value.toUpperCase();
                    if (bundle_vars.load_type == "btn_click" || switch_board.its_cart_page) {
                        if (data[i].value.length > 12) {
                            //color_label_text.style.fontSize="11px"
                        }
                    }
                }
                color_size_li.setAttribute('title', data[i].value)
                color_tag.setAttribute('aId', '' + aId + '');
                color_tag.setAttribute('product_id', '' + products_data.ProductId + '');
                color_tag.setAttribute('bundle_id', '' + products_data.BundleId + '')
                color_tag.setAttribute('option_id', '' + data[i].pid + '')
                color_tag.setAttribute('sku', '' + data[i].child_prd_sku + '')
                color_tag.setAttribute('c_NM', data[i].child_NM)
                color_tag.setAttribute('c_pid', '' + data[i].child_prd + '')
                color_tag.setAttribute('price', '' + data[i].price + '')
                color_tag.setAttribute('special_price', '' + data[i].special_price + '')
                color_tag.setAttribute('value', '' + data[i].value.toLowerCase() + '');
                color_tag.setAttribute('child_url', '' + data[i].child_url + '');
                color_tag.setAttribute('acode', '' + data[i].attr_code + '');
                color_tag.setAttribute('sel_count', '' + i + '');
                color_tag.setAttribute('child_img_url', '' + data[i].child_img_url + '');
                color_tag.setAttribute('opt_img_url', '' + data[i].opt_img_url + '');
                if (data[i].clr_code == "" || data[i].clr_code == null) {
                    color_tag.setAttribute('style', 'background-image:url("' + data[i].opt_img_url + '");display: block;background-repeat: no-repeat;width:100%;height:100%;');
                } else {
                    color_tag.setAttribute('style', 'background-color: ' + data[i].clr_code + '');
                    if (data[i].clr_code == "#fff" || data[i].clr_code == "#ffffff") {
                        color_tag.setAttribute('style', 'background-color: ' + data[i].clr_code + ';border:1px solid #ccc;');
                    }
                }

                color_tag.setAttribute('style_left', '' + le_style + '');
                color_tag.setAttribute('color', '' + data[i].clr_code + '');
                // color_tag.setAttribute('onClick', 'option_change_color(this)');
                if (combo == "combo") {
                    color_tag.setAttribute('combo_id', '' + products_data.ComboId + '');
                    // color_tag.setAttribute('onClick', 'option_change_color(this,"combo")');
                } else {
                    // color_tag.setAttribute('onClick', 'option_change_color(this)');
                }
                color_tag.addEventListener('click', function (e) {
                    let element = e.target;
                    //option_change_color(element,"combo")
                    let bundle_select_parent = element.parentNode.parentNode.parentNode;
                    if (element.parentNode.parentNode.querySelector('li.inc_active a.inc_active') != null) {
                        element.parentNode.parentNode.querySelector('li.inc_active a.inc_active').classList.remove('inc_active')
                    }
                    if (element.parentNode.parentNode.querySelector('li.inc_active') != null) {
                        element.parentNode.parentNode.querySelector('li.inc_active').classList.remove('inc_active')
                    }
                    element.classList.add('inc_active');
                    element.parentNode.classList.add('inc_active');
                    let BundlId = element.getAttribute('bundle_id');
                    let ProdId = element.getAttribute('product_id');
                    let SelClrVal = element.getAttribute('option_id');
                    let img_url = element.getAttribute('child_img_url');
                    let opt_text = element.getAttribute('value');
                    let chil_pid = element.getAttribute('sku')
                    let ch_Nm = element.getAttribute('c_NM')
                    let prc = element.getAttribute('price');
                    let spl_prc = element.getAttribute('special_price');
                    let comboId = element.getAttribute('combo_id');
                    let img_url_div = bundle_select_parent.parentNode.parentNode;
                    let sel_qty = img_url_div.querySelector('.q_holder input').value;
                    if (element.parentNode.parentNode.parentNode.querySelector('.color_size_title') != null) {
                        element.parentNode.parentNode.parentNode.querySelector('.color_size_title').innerText = "Color : " + opt_text.toUpperCase();
                    }
                    if (bundle_select_parent.parentNode.parentNode.parentNode.querySelector('.pdt_img img') != undefined) {
                        bundle_select_parent.parentNode.parentNode.parentNode.querySelector('.pdt_img img').src = img_url;
                    }
                    if (document.querySelector('.ic_popup_module_wrapper.inc_active .bundle_links_combo li[product_id="' + ProdId + '"]') != null) {
                        let tab_li = document.querySelector('.ic_popup_module_wrapper.inc_active .bundle_links_combo li[product_id="' + ProdId + '"]');
                        tab_li.querySelector('img').src = img_url;
                        tab_li.querySelector('.combo_tab_p_name').innerText = ch_Nm
                        tab_li.querySelector('.combo_tab_p_name').setAttribute('title', ch_Nm)
                        if (spl_prc != null && (+spl_prc < +prc) && spl_prc > 0) {
                            tab_li.querySelector('.combo_tab_price').innerText = formatter.format(spl_prc);
                        } else {
                            tab_li.querySelector('.combo_tab_price').innerText = formatter.format(prc);
                        }

                    }
                    if (document.querySelector('.ic_popup_module_wrapper.inc_active .prod_wise_wrapper_combo .selected_product_addon[product_id="' + ProdId + '"]') != null) {
                        let added_prod_wrap = document.querySelector('.ic_popup_module_wrapper.inc_active .prod_wise_wrapper_combo .added_prd_cont_combo[product_id="' + ProdId + '"]');
                        added_prod_wrap.querySelector('.added_Image_wrap_combo img').src = img_url;
                    }
                    if (document.querySelector('.ic_popup_module_wrapper.inc_active .selected_product_addon[product_id="' + ProdId + '"]') != null) {
                        let added_prod_wrap = document.querySelector('.ic_popup_module_wrapper.inc_active .selected_product_addon[product_id="' + ProdId + '"]')
                        added_prod_wrap.querySelector('.selected_product_addon img').src = img_url;

                    }
                    let pr_details_elm = bundle_select_parent.parentNode.parentNode.parentNode
                    if (pr_details_elm.querySelector('.dots li img') != null) {
                        pr_details_elm.querySelector('.dots li img').src = img_url;
                    }
                    let ch_name_div = bundle_select_parent.parentNode.parentNode.parentNode;
                    if (ch_name_div.querySelector('.pdt_name a p') != undefined) {
                        ch_name_div.querySelector('.pdt_name a p').innerHTML = ch_Nm;
                        ch_name_div.querySelector('.pdt_name .inc_tooltips').innerHTML = ch_Nm;
                    }


                    if (element.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.q_holder input') != null) {
                        element.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.q_holder input').value = "1";
                        element.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.q_holder input[type="hidden"]').value = "1";
                    }
                    let color_text = "";

                    if (bundle_select_parent.parentNode.querySelectorAll('.select_wrapper .inc_active')[1] != undefined) {
                        color_text = bundle_select_parent.parentNode.querySelectorAll('.select_wrapper .inc_active')[1].getAttribute('value')
                    }

                    let value = "" + prc + "," + spl_prc + "," + ProdId + "," + chil_pid + "," + opt_text + "";
                    update_the_price(bundle_vars.load_type, value, element, null);
                    bundle_vars.all_dup_child_prod = [];
                    bundle_vars.all_dup_push_prod = [];
                    bundle_vars.push_product_to_add = [];
                    if (document.querySelector('#ic_bundle_popup') == null && switch_board.its_plp_page) {
                        getAllcheckboxchecked("size")
                    }
                });
                color_size_li.appendChild(color_tag)
                ul.appendChild(color_size_li)
                //opt_img_url
            } else {

                if (data.length <= 3) {
                    if (i == 0) {
                        ul.classList.add('no_arrow')
                    }
                }
                color_size_count++;
                let color_size_li = generate_html_tag("li", "color_size_li");
                let size_tag = generate_html_tag("a", "size_tag");
                color_size_li.classList.add(show_hide);
                size_tag.classList.add('size_img');
                if (checked != "") {
                    size_tag.classList.add(checked);
                    color_size_li.classList.add(checked);
                    color_size_title.textContent = "Size : " + data[i].value.toUpperCase();
                    //color_label_text.textContent=data[i].value.toLowerCase();
                }
                if (dis_sizes != "") {
                    size_tag.classList.add(dis_sizes);
                }
                color_size_li.setAttribute('title', data[i].value)
                size_tag.setAttribute('aId', '' + aId + '');
                size_tag.setAttribute('product_id', '' + products_data.ProductId + '');
                size_tag.setAttribute('bundle_id', '' + products_data.BundleId + '')
                size_tag.setAttribute('option_id', '' + data[i].pid + '')
                size_tag.setAttribute('sku', '' + data[i].child_prd_sku + '')
                size_tag.setAttribute('c_NM', data[i].child_NM);
                size_tag.setAttribute('c_pid', '' + data[i].child_prd + '')
                size_tag.setAttribute('price', '' + data[i].price + '')
                size_tag.setAttribute('special_price', '' + data[i].special_price + '')
                size_tag.setAttribute('value', '' + data[i].value + '');
                size_tag.setAttribute('child_url', '' + data[i].child_url + '');
                size_tag.setAttribute('acode', '' + data[i].attr_code + '');
                size_tag.setAttribute('sel_count', '' + i + '');
                size_tag.setAttribute('child_img_url', '' + data[i].child_img_url + '');
                // size_tag.setAttribute('onClick', 'option_change_size(this)');
                if (combo == "combo") {
                    size_tag.setAttribute('combo_id', '' + products_data.ComboId + '');
                    size_tag.setAttribute('onClick', 'option_change_size(this,"combo")');
                } else {
                    size_tag.setAttribute('onClick', 'option_change_size(this)');
                }
                size_tag.textContent = data[i].value;
                color_size_li.appendChild(size_tag)
                ul.appendChild(color_size_li)
            }

        }

        if (acode != "Colour" || acode != "color") {
            bundle_vars.is_size = true;
            select_wrapper.appendChild(ul)
        } else {
            select_wrapper.appendChild(ul)
        }
        bundle_selection.appendChild(select_wrapper);
    }

}



function update_the_price(load_type, values, obj, src) {
    values = values.split(',');
    if (obj.parentNode.querySelector("span.error_msg") != null) {
        obj.classList.remove("error");
        obj.parentNode.removeChild(obj.parentNode.querySelector("span.error_msg"));
    }
    let parent = ".ic_popup_module_wrapper.inc_active";
    // onSelectchange_option(obj, load_type);
    let prod_box = document.querySelector(parent + ' div[data_selected_prod_id="' + values[2] + '"]');
    if (prod_box != null) {
        let qty = prod_box.querySelector(".q_holder input").value;
        let final_price = prod_box.querySelector(".final_price");
        let ini_price = prod_box.querySelector(".ini_price");
        let main_product_price = prod_box.querySelector(".main_product_price");
        let qty_holder = prod_box.querySelector(".q_holder");
        let ext_val = final_price.value;
    }
    if (+values[1] < 0.01) {
        if (prod_box != null) {
            if (prod_box.querySelector(".spec_amount") != null || prod_box.querySelector(".spec_amount") != undefined) {
                prod_box.querySelector(".spec_amount").style.display = 'none';
                prod_box.querySelector(".product_amount").classList.remove("old_price");
            }
            let prod_amt = prod_box.querySelector(".product_amount");
            final_price.setAttribute("value", +qty * values[0]);
            ini_price.setAttribute("value", values[0]);
            qty_holder.setAttribute("data_price", values[0]);
            qty_holder.setAttribute("data_o_price", values[0]);
            main_product_price.setAttribute("value", values[0]);
            prod_amt.innerHTML = formatter.format(values[0]);
            // update_price();
        }
    } else {
        if (prod_box != null) {
            let spec_amt = prod_box.querySelector(".spec_amount");
            if (spec_amt == null && parseFloat(values[1]) != parseFloat(values[0])) {
                prod_box.querySelector(".pdt_price").innerHTML = "";
                let spec_prod_price = generate_html_tag('span', 'spec_amount');
                spec_prod_price.style.display = 'inline-block';
                let ori_prod_price = generate_html_tag('span', 'product_amount');
                let final_amount = generate_html_tag('input', 'final_price');
                let ini_amount = generate_html_tag('input', 'ini_price');
                let original_price = generate_html_tag('input', 'main_product_price');
                original_price.setAttribute('type', 'hidden');
                final_amount.setAttribute('type', 'hidden');
                ini_amount.setAttribute('type', 'hidden');
                ori_prod_price.innerHTML = formatter.format(values[0]);
                spec_prod_price.innerHTML = formatter.format(values[1]);
                ori_prod_price.classList.add('old_price');
                prod_box.querySelector(".pdt_price").appendChild(spec_prod_price);
                prod_box.querySelector(".pdt_price").appendChild(ori_prod_price);
                final_amount.value = parseFloat(+qty * values[1]).toFixed(2);
                ini_amount.value = parseFloat(values[1]).toFixed(2);
                prod_box.querySelector(".pdt_price").appendChild(final_amount);
                prod_box.querySelector(".pdt_price").appendChild(ini_amount);
                prod_box.querySelector(".pdt_price").appendChild(original_price);
                qty_holder.setAttribute("data_price", values[1]);
                qty_holder.setAttribute("data_o_price", values[0]);
                original_price.setAttribute("value", values[0]);
            } else {
                final_price.setAttribute("value", +qty * values[1]);
                ini_price.setAttribute("value", values[1]);
                qty_holder.setAttribute("data_price", values[1]);
                qty_holder.setAttribute("data_o_price", values[0]);

                if (parseFloat(values[1]) != null && (+parseFloat(values[1]) < parseFloat(values[0]))) {
                    prod_box.querySelector(".product_amount").style.display = "inline-block";
                    if (prod_box.querySelector(".spec_amount") != null) {
                        prod_box.querySelector(".spec_amount").style.display = "inline-block";
                    }
                    prod_box.querySelector(".product_amount").classList.add("old_price");
                    spec_amt.innerHTML = formatter.format(values[1]);
                    prod_box.querySelector(".product_amount").innerHTML = formatter.format(values[0]);
                } else {
                    prod_box.querySelector(".product_amount").innerHTML = formatter.format(values[0]);
                    if (prod_box.querySelector(".spec_amount") != null) {
                        prod_box.querySelector(".spec_amount").style.display = "none";
                        let spec = prod_box.querySelector(".spec_amount")
                        if (spec != null) {
                            spec.parentNode.removeChild(spec);
                        }
                    }
                    prod_box.querySelector(".product_amount").style.display = "inline-block";
                    if (prod_box.querySelector(".product_amount.old_price") != null) {
                        prod_box.querySelector(".product_amount.old_price").classList.remove('old_price');
                    }
                }

            }
            // update_price();
        }
    }

}
function get_product_configurables(products_data, product_attributes, ic_prod, load_type, combo) {
    let bundle_selection = generate_html_tag('div', 'selection_bundle');
    if (combo == "combo") {
        bundle_selection.classList.add('combo_selection')
    }
    if (product_attributes != null) {
        prepare_configurables(product_attributes, products_data, load_type, bundle_selection, combo);
        ic_prod.appendChild(bundle_selection);
        //bundle_selection.innerHTML = a;
        //bundle_selection.appendChild(a)
        //ic_prod.appendChild(bundle_selection);
    } else {
        if (load_type == "onload" && !switch_board.its_cart_page) {
            if (switch_board.its_pdp_page) {
                if (bundle_vars.attr_flag) {
                    ic_prod.appendChild(bundle_selection);
                }
            } else {
                ic_prod.appendChild(bundle_selection);
            }
        }
    }
}

function get_product_quantity_box(products_data, prod_price, ic_prod, collection, combo, extra) {
    let counter_div = generate_html_tag('div', 'inc_quantity');
    if (!switch_board.quantity_dropdown) {
        let label_quantity = generate_html_tag('p', 'quantity_label');
        label_quantity.textContent = ""//bundle_vars.quantity_text;
        // counter_div.appendChild(label_quantity);
    }
    let q_holder = generate_html_tag('div', 'q_holder');
    if (switch_board.quantity_dropdown) {
        let select_q = generate_html_tag('select', 'quantity_select');
        select_q.setAttribute('onchange', 'quantity_dropdown_change(this, null)');
        for (let i = 1; i < 21; i++) {
            let option = generate_html_tag('option', 'qty_option');
            option.value = i;
            option.text = "Qty (" + i + ")";
            select_q.appendChild(option);
        }
        q_holder.appendChild(select_q);
    }
    let tag_a_up = generate_html_tag('i', 'up');
    tag_a_up.classList.add('inc_icon_plus');
    let tag_a_down = generate_html_tag('i', 'down');
    tag_a_down.classList.add('inc_icon_minus');
    let tag_span = generate_html_tag('input', '');
    tag_span.setAttribute("type", "text");
    tag_span.setAttribute("min", "1");
    tag_span.setAttribute("value", "1");
    tag_span.setAttribute("old_val", "1");
    tag_span.setAttribute("maxlength", "2");
    tag_span.setAttribute("name", "quantity_input");
    // tag_span.setAttribute("onkeypress", "quantity_box_restriction(this)");
    tag_span.setAttribute("onkeypress", "return isNumberKey_inc(event);");
    tag_span.setAttribute("onblur", "quantity_box_restriction(this, event);");
    tag_span.setAttribute("onchange", "quantity_input_change(this);");
    if (switch_board.quantity_dropdown) {
        tag_a_down.style.display = 'none';
        tag_span.style.display = 'none';
        tag_a_up.style.display = 'none';
    }
    q_holder.appendChild(tag_a_down);
    q_holder.appendChild(tag_span);
    q_holder.appendChild(tag_a_up);
    let hidden_input = generate_html_tag('input', '');
    hidden_input.setAttribute('type', 'hidden');
    hidden_input.setAttribute('value', '1');
    q_holder.appendChild(hidden_input);
    // q_holder.setAttribute('data_product_id', products_data.ProductId);
    //qty eventlistner
    let add_button = tag_a_up;
    let sub_button = tag_a_down;
    bind_event_for_quantity_buttons(add_button, 'add', bundle_vars.load_type);
    bind_event_for_quantity_buttons(sub_button, 'sub', bundle_vars.load_type);

    add_button.addEventListener("click", function (event) {
        event.stopPropagation();
        let type = 'add'
        let parentEl = this.parentElement;
        let getInput = parentEl.querySelector('input[type=hidden]');
        counter = getInput.value;
        if ((type == 'sub') && (counter == 0)) {
            return false;
        }
        (type == 'add') ? counter++ : counter--;
        if (counter < "100") {
            if (counter == 0) {
                counter = 1;
            }
            quantity_dropdown_change(this, counter);
            prepare_final_price(this, counter, type, bundle_vars.load_type);
        } else {
            event.stopPropagation();
            event.preventDefault();
        }
    });
    sub_button.addEventListener("click", function (event) {
        event.stopPropagation();

        let type = 'sub'
        let parentEl = this.parentElement;
        let getInput = parentEl.querySelector('input[type=hidden]');
        counter = getInput.value;
        if ((type == 'sub') && (counter == 0)) {
            return false;
        }
        (type == 'add') ? counter++ : counter--;
        if (counter < "100") {
            if (counter == 0) {
                counter = 1;
            }
            quantity_dropdown_change(this, counter);
            prepare_final_price(this, counter, type, bundle_vars.load_type);
        } else {
            event.stopPropagation();
            event.preventDefault();
        }
    });
    //

    if (products_data != null) {
        let isSpecialPrice = check_special_price(products_data);
        q_holder.setAttribute('data_product_id', products_data.ProductId);

        if (isSpecialPrice) {
            prod_price.querySelector(".spec_amount").innerHTML = formatter.format(products_data.SpecialPrice)
            prod_price.querySelector(".product_amount.old_price").innerHTML = formatter.format(products_data.Price)
            q_holder.setAttribute('data_price', parseFloat(products_data.SpecialPrice).toFixed(2));
            q_holder.setAttribute('data_o_price', parseFloat(products_data.Price).toFixed(2));
        } else {
            prod_price.querySelector(".product_amount").innerHTML = formatter.format(products_data.Price)
            q_holder.setAttribute('data_price', parseFloat(products_data.Price).toFixed(2));
            q_holder.setAttribute('data_o_price', parseFloat(products_data.Price).toFixed(2));
        }
    }
    counter_div.appendChild(q_holder);
    ic_prod.appendChild(counter_div);
}

function isNumberKey_inc(evt) {
    let charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 42)
        return false;
    return true;
}

function quantity_input_change(el) {
    let old_val = el.getAttribute("old_val");
    if (isNaN(+el.value)) {
        let new_c = "1";
    } else {
        let new_c = el.value;
    }
    let curr_price = el.parentNode.parentNode.parentNode.parentNode.querySelector('input.ini_price');
    let old_price = el.parentNode.parentNode.parentNode.parentNode.querySelector('input.main_product_price');
    if (+new_c > +old_val) {
        el.parentNode.querySelector('input').setAttribute('value', +new_c - 1);
        el.parentNode.querySelector('input[type="hidden"]').setAttribute('value', +new_c - 1);
        el.parentNode.querySelector('.up').click();
    } else {
        el.parentNode.querySelector('input').setAttribute('value', +new_c + 1);
        el.parentNode.querySelector('input[type="hidden"]').setAttribute('value', +new_c + 1);
        el.parentNode.querySelector('.down').click();
    }
    el.setAttribute("old_val", +new_c);
}



function get_cart_product_names() {
    if (document.querySelector("#cartform") != null) {
        let cart_wrap = document.querySelector("#cartform");
        let names = cart_wrap.querySelectorAll(".item .description div a");
        for (let k = 0; k < names.length; k++) {
            client_vars.cartProductNames.push(names[k].innerText.trim());
        }
    }
}




function check_special_price(product) {
    if (product.SpecialPrice && product.SpecialPrice != null) {
        if (+product.SpecialPrice < +product.Price) {
            return true;
        }
    } else {
        return false;
    }
}




function toggle_price(price, special_price, amount_bind) {
    let spec_prod_price = generate_html_tag('span', 'spec_amount');
    let ori_prod_price = generate_html_tag('span', 'product_amount');
    let final_amount = generate_html_tag('input', 'final_price');
    let ini_amount = generate_html_tag('input', 'ini_price');
    let original_price = generate_html_tag('input', 'main_product_price');
    original_price.setAttribute('type', 'hidden');
    final_amount.setAttribute('type', 'hidden');
    ini_amount.setAttribute('type', 'hidden');
    if (special_price != null && (+special_price < +price)) {
        let sp = parseFloat(special_price).toFixed(2);
        let pp = parseFloat(price).toFixed(2)
        // ori_prod_price.textContent = pp.toLocaleString('en-IN');
        ori_prod_price.textContent = formatter.format(pp)
        // spec_prod_price.textContent = sp.toLocaleString('en-IN');
        spec_prod_price.textContent = formatter.format(sp)
        ori_prod_price.classList.add('old_price');
        amount_bind.appendChild(spec_prod_price);
        amount_bind.appendChild(ori_prod_price);


        final_amount.value = parseFloat(special_price).toFixed(2);
        ini_amount.value = parseFloat(special_price).toFixed(2);
        amount_bind.appendChild(final_amount);
        amount_bind.appendChild(ini_amount);
    } else {
        let pp = parseFloat(price).toFixed(2)
        // ori_prod_price.textContent = pp.toLocaleString('en-IN');
        ori_prod_price.textContent = formatter.format(pp)
        amount_bind.appendChild(ori_prod_price);
        final_amount.value = parseFloat(price).toFixed(2);
        ini_amount.value = parseFloat(price).toFixed(2);
        amount_bind.appendChild(final_amount);
        amount_bind.appendChild(ini_amount);
    }
    original_price.value = parseFloat(price).toFixed(2);
    amount_bind.appendChild(original_price);
    return amount_bind;
}

function slider_bundle(dir, src, new_temp, ind) {
    if (new_temp == "new_temp") {
        if (document.querySelectorAll("#ic_bundle_popup .ic_product_bundling") != null) {
            let links = document.querySelectorAll("#ic_bundle_popup .ic_product_bundling");
            for (i = 0; i < links.length; i++) {
                if (links[i].childNodes.length == 0) {
                    links[i].parentNode.removeChild(links[i]);
                }
            }
        }
        let parent = ".ic_product_parent_bundle";
        if (document.querySelector(parent + " .ic_product_bundling.inc_active") != null) {
            let listEl = document.querySelector(parent + " .ic_product_bundling.inc_active");
            let totalChildren = listEl.querySelectorAll(".ic_product").length;
        }
        if (document.querySelector(parent + " .prev_el") != null) {
            if (window.innerWidth > 767) {
                let btnLeftEl_parent = document.querySelector(parent + " .circle");
            }
            let btnLeftEl = document.querySelector(parent + " .prev_el");
        }
        if (document.querySelector(parent + " .next_el")) {
            if (window.innerWidth > 767) {
                let btnRightEl_parent = document.querySelector(parent + " .circle1");
            }
            let btnRightEl = document.querySelector(parent + " .next_el");
        }
        let count_d = 1;
        let count_width = 252;
        if (switch_board.its_pdp_page) {
            if (window.innerWidth >= 619) {
                let count_d = 2;
                count_width = 252;
            }
            if (window.innerWidth > 767) {
                count_d = 2;
                count_width = 294;
            }
            if (window.innerWidth > 1024) {
                count_d = 3;
            }
            if (window.innerWidth > 1366) {
                count_d = 4;
            }
            if (window.innerWidth > 1740) {
                count_d = 4;
            }
            if (window.innerWidth > 1920) {
                count_d = 4;
            }
        }
        if (dir == null) {
            if ((totalChildren == count_d || totalChildren < count_d)) {
                if (btnLeftEl) {
                    btnLeftEl.style.display = "none";
                    if (btnLeftEl_parent) {
                        btnLeftEl_parent.style.display = "none";
                    }
                }
                if (btnRightEl) {
                    btnRightEl.style.display = "none";
                    if (btnRightEl_parent) {
                        btnRightEl_parent.style.display = "none";
                    }
                }
                if (listEl) {
                    listEl.style.left = "0px";
                }
            } else {
                if (btnRightEl) {
                    btnRightEl.style.display = "block";
                    if (btnRightEl_parent) {
                        btnRightEl_parent.style.display = "block";
                    }
                }
                bundle_vars.slide_image_count = 0;
                if (listEl) {
                    listEl.style.left = bundle_vars.slide_image_count * count_width + "px";
                }
                if (btnLeftEl) {
                    btnLeftEl.style.display = "none";
                    if (btnLeftEl_parent) {
                        btnLeftEl_parent.style.display = "none";
                    }
                }
            }
            if (switch_board.its_plp_page || switch_board.its_pdp_page || switch_board.its_cart_page) {
                let get_border = setInterval(function () {
                    if (document.querySelectorAll('#ic_bundle_popup .ic_product_bundling.inc_active .ic_product') != undefined) {
                        clearInterval(get_border)
                        // max_height_prd();
                    }
                }, 10);
            }
        } else {
            dir === "left" ? ++bundle_vars.slide_image_count : --bundle_vars.slide_image_count;
            if (bundle_vars.slide_image_count > 0) {
                bundle_vars.slide_image_count = 0;
            } else {
                if (bundle_vars.slide_image_count <= "-" + (totalChildren - 1)) {
                    bundle_vars.slide_image_count = "-" + (totalChildren - 1);
                }
            }
            if (listEl) {
                listEl.style.left = bundle_vars.slide_image_count * count_width + "px";
            }
            if (btnLeftEl) {
                btnLeftEl.style.display = bundle_vars.slide_image_count < 0 ? "block" : "none";
                if (btnLeftEl_parent) {
                    btnLeftEl_parent.style.display = bundle_vars.slide_image_count < 0 ? "block" : "none";
                }
            }
            if (btnRightEl) {
                btnRightEl.style.display = bundle_vars.slide_image_count > count_d - totalChildren ? "block" : "none";
                if (btnRightEl_parent) {
                    btnRightEl_parent.style.display = bundle_vars.slide_image_count > count_d - totalChildren ? "block" : "none";
                }
            }
        }
    } else if (ind != undefined) {
        if (document.querySelectorAll("#ic_bundle_popup .ic_product_bundling") != null) {
            let links = document.querySelectorAll("#ic_bundle_popup .ic_product_bundling");
            for (i = 0; i < links.length; i++) {
                if (links[i].childNodes.length == 0) {
                    links[i].parentNode.removeChild(links[i]);
                }
            }
        }
        let parent = (switch_board.cart_modal || switch_board.its_pdp_page || switch_board.its_plp_page) ? "#ic_bundle_popup" : "#ic_bundle_cart";
        if (document.querySelector("#ic_bundle_popup .ic_product_bundling.inc_active") != null) {
            let listEl = document.querySelectorAll("#ic_bundle_popup .ic_product_bundling.inc_active")[ind];
            let totalChildren = listEl.querySelectorAll(".ic_product").length;
        }
        let arr_div_parent = document.querySelectorAll(".ic_bundling_wrapped")[ind];
        if (arr_div_parent.querySelectorAll(" .prev_el")[0] != null) {
            if (window.innerWidth > 767) {
                let btnLeftEl_parent = arr_div_parent.querySelectorAll(" .circle")[0];
            }
            let btnLeftEl = arr_div_parent.querySelectorAll(" .prev_el")[0];
        }
        if (arr_div_parent.querySelectorAll(" .next_el")[0]) {
            if (window.innerWidth > 767) {
                let btnRightEl_parent = arr_div_parent.querySelectorAll(" .circle1")[0];
            }
            let btnRightEl = arr_div_parent.querySelectorAll(" .next_el")[0];
        }
        let count_d = 1;
        let count_width = 252;
        if (!switch_board.its_cart_page) {
            if (window.innerWidth >= 619) {
                let count_d = 2;
                count_width = 252;
            }
            if (window.innerWidth > 767) {
                count_d = 2;
                count_width = 290;
            }
            if (window.innerWidth > 1024) {
                count_d = 3;
            }
            if (window.innerWidth > 1366) {
                count_d = 3;
            }
            if (window.innerWidth > 1740) {
                count_d = 3;
            }
            if (window.innerWidth > 1920) {
                count_d = 3;
            }
        } else {
            let count_width = 262;
            if (window.innerWidth >= 519) {
                let count_d = 2;
                count_width = 216;
            }
            if (window.innerWidth > 668) {
                let count_d = 2;
                count_width = 270;
            }
            if (window.innerWidth > 766) {
                let count_d = 2;
                count_width = 235;
            }
            if (window.innerWidth > 990) {
                let count_d = 2;
                count_width = 300;
            }
            if (window.innerWidth > 1023) {
                let count_d = 2;
                count_width = 295;
            }
            if (window.innerWidth > 1258) {
                count_d = 3;
                count_width = 230;
            }
        }
        if (dir == null) {
            if ((totalChildren == count_d || totalChildren < count_d)) {
                if (btnLeftEl) {
                    btnLeftEl.style.display = "none";
                    if (btnLeftEl_parent) {
                        btnLeftEl_parent.style.display = "none";
                    }
                }
                if (btnRightEl) {
                    btnRightEl.style.display = "none";
                    if (btnRightEl_parent) {
                        btnRightEl_parent.style.display = "none";
                    }
                }
                if (listEl) {
                    listEl.style.left = "0px";
                }
            } else {
                if (btnRightEl) {
                    btnRightEl.style.display = "block";
                    if (btnRightEl_parent) {
                        btnRightEl_parent.style.display = "block";
                    }
                }
                bundle_vars.slide_image_count = 0;
                if (listEl) {
                    listEl.style.left = bundle_vars.slide_image_count * count_width + "px";
                }
                if (btnLeftEl) {
                    btnLeftEl.style.display = "none";
                    if (btnLeftEl_parent) {
                        btnLeftEl_parent.style.display = "none";
                    }
                }
            }
            if (switch_board.its_plp_page || switch_board.its_pdp_page || switch_board.its_cart_page) {
                let get_border = setInterval(function () {
                    if (document.querySelectorAll('#ic_bundle_popup .ic_product_bundling.inc_active .ic_product') != undefined) {
                        clearInterval(get_border)
                        // max_height_prd();
                    }
                }, 10);
            }
        } else {
            dir === "left" ? ++bundle_vars.slide_image_count : --bundle_vars.slide_image_count;
            if (bundle_vars.slide_image_count > 0) {
                bundle_vars.slide_image_count = 0;
            } else {
                if (bundle_vars.slide_image_count <= "-" + (totalChildren - 1)) {
                    bundle_vars.slide_image_count = "-" + (totalChildren - 1);
                }
            }
            if (listEl) {
                listEl.style.left = bundle_vars.slide_image_count * count_width + "px";
            }
            if (btnLeftEl) {
                btnLeftEl.style.display = bundle_vars.slide_image_count < 0 ? "block" : "none";
                if (btnLeftEl_parent) {
                    btnLeftEl_parent.style.display = bundle_vars.slide_image_count < 0 ? "block" : "none";
                }
            }
            if (btnRightEl) {
                btnRightEl.style.display = bundle_vars.slide_image_count > count_d - totalChildren ? "block" : "none";
                if (btnRightEl_parent) {
                    btnRightEl_parent.style.display = bundle_vars.slide_image_count > count_d - totalChildren ? "block" : "none";
                }
            }
        }
    } else {
        if (document.querySelectorAll("#ic_bundle_popup .ic_product_bundling") != null) {
            let links = document.querySelectorAll("#ic_bundle_popup .ic_product_bundling");
            for (i = 0; i < links.length; i++) {
                if (links[i].childNodes.length == 0) {
                    links[i].parentNode.removeChild(links[i]);
                }
            }
        }
        let parent = (switch_board.cart_modal || switch_board.its_pdp_page || switch_board.its_plp_page) ? "#ic_bundle_popup" : "#ic_bundle_cart";
        if (src != null) {
            parent = "#ic_bundle_cart";
            if (document.querySelector(parent + " .ic_alt_product_bundling.inc_active") != null) {
                let listEl = document.querySelector(parent + " .ic_alt_product_bundling.inc_active");
                let totalChildren = listEl.querySelectorAll(".ic_product").length;
            }
        } else {
            if (document.querySelector(parent + " .ic_product_bundling.inc_active") != null) {
                let listEl = document.querySelector(parent + " .ic_product_bundling.inc_active");
                let totalChildren = listEl.querySelectorAll(".ic_product").length;
            }
        }
        if (document.querySelector(parent + " .prev_el") != null) {
            if (window.innerWidth > 767) {
                let btnLeftEl_parent = document.querySelector(parent + " .circle");
            }
            let btnLeftEl = document.querySelector(parent + " .prev_el");
        }
        if (document.querySelector(parent + " .next_el")) {
            if (window.innerWidth > 767) {
                let btnRightEl_parent = document.querySelector(parent + " .circle1");
            }
            let btnRightEl = document.querySelector(parent + " .next_el");
        }
        let count_d = 1;
        let count_width = 252;
        if (!switch_board.its_cart_page) {
            if (window.innerWidth >= 619) {
                let count_d = 2;
                count_width = 252;
            }
            if (window.innerWidth > 767) {
                count_d = 2;
                count_width = 290;
            }
            if (window.innerWidth > 1024) {
                count_d = 3;
            }
            if (window.innerWidth > 1366) {
                count_d = 4;
            }
            if (window.innerWidth > 1740) {
                count_d = 5;
            }
            if (window.innerWidth > 1920) {
                count_d = 6;
            }
        } else if (switch_board.its_cart_page) {
            count_d = 1;
            count_width = 242;
            if (window.innerWidth > 618) {
                count_d = 2;
                count_width = 270;
            }
            if (window.innerWidth > 766) {
                count_d = 3;
                count_width = 232;
            }
            if (window.innerWidth > 990) {
                count_d = 3;
                count_width = 286;
            }
            if (window.innerWidth > 1023) {
                count_d = 3;
                count_width = 286;
            }
            if (window.innerWidth > 1198) {
                count_d = 4;
                count_width = 210;
            }
            if (window.innerWidth > 1740) {
                count_d = 5;
            }
            if (window.innerWidth > 1920) {
                count_d = 6;
            }
        } else {
            let count_width = 262;
            if (window.innerWidth >= 519) {
                let count_d = 2;
                count_width = 216;
            }
            if (window.innerWidth > 668) {
                let count_d = 2;
                count_width = 270;
            }
            if (window.innerWidth > 766) {
                let count_d = 2;
                count_width = 235;
            }
            if (window.innerWidth > 990) {
                let count_d = 2;
                count_width = 300;
            }
            if (window.innerWidth > 1023) {
                let count_d = 2;
                count_width = 295;
            }
            if (window.innerWidth > 1258) {
                count_d = 3;
                count_width = 230;
            }
        }
        if (dir == null) {
            if ((totalChildren == count_d || totalChildren < count_d)) {
                if (btnLeftEl) {
                    btnLeftEl.style.display = "none";
                    if (btnLeftEl_parent) {
                        btnLeftEl_parent.style.display = "none";
                    }
                }
                if (btnRightEl) {
                    btnRightEl.style.display = "none";
                    if (btnRightEl_parent) {
                        btnRightEl_parent.style.display = "none";
                    }
                }
                if (listEl) {
                    listEl.style.left = "0px";
                }
            } else {
                if (btnRightEl) {
                    btnRightEl.style.display = "block";
                    if (btnRightEl_parent) {
                        btnRightEl_parent.style.display = "block";
                    }
                }
                bundle_vars.slide_image_count = 0;
                if (listEl) {
                    listEl.style.left = bundle_vars.slide_image_count * count_width + "px";
                }
                if (btnLeftEl) {
                    btnLeftEl.style.display = "none";
                    if (btnLeftEl_parent) {
                        btnLeftEl_parent.style.display = "none";
                    }
                }
            }
            if (switch_board.its_plp_page || switch_board.its_pdp_page || switch_board.its_cart_page) {
                let get_border = setInterval(function () {
                    if (document.querySelectorAll('#ic_bundle_popup .ic_product_bundling.inc_active .ic_product') != undefined) {
                        clearInterval(get_border)
                        // max_height_prd();
                    }
                }, 10);
            }
        } else {
            dir === "left" ? ++bundle_vars.slide_image_count : --bundle_vars.slide_image_count;
            if (bundle_vars.slide_image_count > 0) {
                bundle_vars.slide_image_count = 0;
            } else {
                if (bundle_vars.slide_image_count <= "-" + (totalChildren - 1)) {
                    bundle_vars.slide_image_count = "-" + (totalChildren - 1);
                }
            }
            if (listEl) {
                listEl.style.left = bundle_vars.slide_image_count * count_width + "px";
            }
            if (btnLeftEl) {
                btnLeftEl.style.display = bundle_vars.slide_image_count < 0 ? "block" : "none";
                if (btnLeftEl_parent) {
                    btnLeftEl_parent.style.display = bundle_vars.slide_image_count < 0 ? "block" : "none";
                }
            }
            if (btnRightEl) {
                btnRightEl.style.display = bundle_vars.slide_image_count > count_d - totalChildren ? "block" : "none";
                if (btnRightEl_parent) {
                    btnRightEl_parent.style.display = bundle_vars.slide_image_count > count_d - totalChildren ? "block" : "none";
                }
            }
        }
    }
}

function add_slider_bundle_buttons(wrapper, new_temp, ind) {
    let circle1 = generate_html_tag('div', 'circle1');
    let circle = generate_html_tag('div', 'circle');
    let get_next = generate_html_tag('a', 'next_el');
    let get_prev = generate_html_tag('a', 'prev_el');
    if (new_temp == "new_temp" && ind == undefined) {
        circle1.setAttribute('onclick', 'slider_bundle("right",null,"new_temp")');
        circle.setAttribute('onclick', 'slider_bundle("left",null,"new_temp")');
    } else if (new_temp == null && ind != undefined) {
        circle1.setAttribute('onclick', 'slider_bundle("right",null,null,' + ind + ')');
        circle.setAttribute('onclick', 'slider_bundle("left",null,null,' + ind + ')');
    } else {
        circle1.setAttribute('onclick', 'slider_bundle("right")');
        circle.setAttribute('onclick', 'slider_bundle("left")');
    }

    get_prev.style.display = "none";
    circle1.appendChild(get_next);
    circle.appendChild(get_prev);
    wrapper.appendChild(circle1);
    wrapper.appendChild(circle);
    //wrapper.appendChild(get_prev);
}
// SWIPE FEATURE
let xDown = null;
let yDown = null;

function add_swipe(element) {
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
}

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }
    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;
    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) + Math.abs(yDiff) > 150) { //to deal with to short swipes
        if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/

            /* reset values */
            xDown = null;
            yDown = null;
        }
        if (Math.abs(xDiff) + Math.abs(yDiff) < 150) {
            if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
                if (xDiff > 0) { /* left swipe */
                    if (evt.target.tagName == "IMG") {
                        let parent = this.parentNode;
                        let lis = parent.querySelectorAll("li");
                        let li = parent.querySelector("li.show");
                        if (document.querySelector('.enlarge_image_Modal.inc_active') == null) {
                            let active_dots = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img .no_modal li.inc_active');
                            if (active_dots != null) {
                                if (active_dots.nextElementSibling != null) {
                                    active_dots.nextElementSibling.click();
                                } else {
                                    let active_dots_start = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img .no_modal li');
                                    active_dots_start.click();
                                }
                            }
                        }
                    } if (document.querySelector('.enlarge_image_Modal.inc_active') != null) {
                        let active_dots = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img li.inc_active');
                        if (active_dots != null) {
                            if (active_dots.nextElementSibling != null) {
                                active_dots.nextElementSibling.click();
                            } else {
                                let active_dots_start = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img .dots.inc_modal li.show');
                                active_dots_start.click();
                            }
                        }
                    }
                } else { /* right swipe */
                    if (evt.target.tagName == "IMG") {
                        let parent = this.parentNode;
                        let li = parent.querySelector("li.show");
                        if (document.querySelector('.enlarge_image_Modal.inc_active') == null) {
                            let active_dots = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img .no_modal li.inc_active');
                            if (active_dots != null) {
                                if (active_dots.previousElementSibling != null) {
                                    active_dots.previousElementSibling.click();
                                } else {
                                    let last_dot = document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img .dots.no_modal > .add_img ul li').length;
                                    let active_dots_start = document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .pdt_img .dots.no_modal > .add_img ul li')[last_dot - 1];
                                    active_dots_start.click();
                                }
                            }
                        }
                    } else if (document.querySelector('.enlarge_image_Modal.inc_active') != null) {
                        let active_dots = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img  li.inc_active');
                        if (active_dots != null) {
                            if (active_dots.previousElementSibling != null) {
                                active_dots.previousElementSibling.click();
                            } else {
                                let last_dot = document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img .dots > .add_img ul li').length;
                                let active_dots_start = document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_product.inc_active .enlarge_image_Modal .pdt_img .dots.inc_modal > .add_img ul li')[last_dot - 1];
                                active_dots_start.click();
                            }
                        }

                    }
                }
            } else {
                // if (yDiff > 0) { /* up swipe */
                //     alert('Up!');
                // } else { /* down swipe */
                //     alert('Down!');
                // }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    }
    // SWIPE FEATURE

    function quantity_dropdown_change(el, c) {
        let curr_price = el.parentNode.parentNode.parentNode.parentNode.querySelector('input.ini_price');
        let old_price = el.parentNode.parentNode.parentNode.parentNode.querySelector('input.main_product_price');
        if (el.parentNode.querySelector('input').value > 99) {
            c = "99"
        }
        if (switch_board.quantity_dropdown) {
            if (el.parentNode.querySelector('input').value < el.selectedIndex + 1) {
                el.parentNode.querySelector('input').setAttribute('value', el.selectedIndex);
                el.parentNode.setAttribute('data_price', (el.selectedIndex + 1) * curr_price.value);
                el.parentNode.setAttribute('data_o_price', (el.selectedIndex + 1) * old_price.value);
                el.parentNode.querySelector('.up').click();
            } else {
                el.parentNode.querySelector('input').setAttribute('value', el.selectedIndex + 2);
                el.parentNode.setAttribute('data_price', (el.selectedIndex + 1) * curr_price.value);
                el.parentNode.setAttribute('data_o_price', (el.selectedIndex + 1) * old_price.value);
                el.parentNode.querySelector('.down').click();
            }
        } else {
            el.parentNode.querySelector('input').setAttribute('value', c);
            if (curr_price != null) {
                if (c == 0) {
                    el.parentNode.setAttribute('data_price', curr_price.value);
                    el.parentNode.setAttribute('data_o_price', old_price.value);
                } else {
                    el.parentNode.setAttribute('data_price', c * curr_price.value);
                    el.parentNode.setAttribute('data_o_price', c * old_price.value);
                }
            }
        }
    }

    function prepare_quantity_buttons_for_event_binding(load_type) {
        if (load_type == "onload") {
            let add_button = document.querySelectorAll(".up");
            let sub_button = document.querySelectorAll(".down");
        } else {
            let parentDiv = document.querySelector(".popup");
            let add_button = parentDiv.querySelectorAll(".popup .up");
            let sub_button = parentDiv.querySelectorAll(".popup .down");
        }
        bind_event_for_quantity_buttons(add_button, 'add', load_type);
        bind_event_for_quantity_buttons(sub_button, 'sub', load_type);
    }


    function bind_event_for_quantity_buttons(elements, type, load_type) {
        for (i = 0; i < elements.length; i++) {
            let counter = 1;
            elements[i].addEventListener("click", function (event) {
                event.stopPropagation();
                let parentEl = this.parentElement;
                if (document.querySelector('#ic_bundle_popup') != null) {
                    client_vars.user_interaction_modal = false
                }
                let getInput = parentEl.querySelector('input[type=hidden]');
                counter = getInput.value;
                if ((type == 'sub') && (counter == 0)) {
                    return false;
                }
                (type == 'add') ? counter++ : counter--;
                if (counter < "1000") {
                    if (counter == 0) {
                        counter = 1;
                    }
                    quantity_dropdown_change(this, counter);
                    prepare_final_price(this, counter, type, load_type);
                } else {
                    event.stopPropagation();
                    event.preventDefault();
                }
            });
        }
    }

    function prepare_final_price(el, counter, type, load_type) {
        let getParent = el.parentElement;
        let getSpan = getParent.querySelector('span');
        let input = getParent.querySelector('input[type="hidden"]');
        let prod = el.parentNode.parentNode.parentNode.parentNode;
        let final_price = prod.querySelector("input.final_price");
        let main_product_price = prod.querySelector("input.main_product_price");
        input.setAttribute('value', counter);
        if (!switch_board.quantity_dropdown) {
            let getSpan = getParent.querySelector('input[type="text"]');
            // getSpan.setAttribute('value', counter);
            getSpan.value = counter
        }
        if (switch_board.its_plp_page) {
            bundle_vars.all_dup_child_prod = [];
            bundle_vars.all_dup_push_prod = [];
            bundle_vars.push_product_to_add = [];
            if (document.querySelector('#ic_bundle_popup') == null && switch_board.its_plp_page) {
                getAllcheckboxchecked()
            }
        }
        let ic_p_card = getParent.parentNode.parentNode.parentNode.parentNode.parentNode
        if (ic_p_card.classList.contains('ic_product') == false) {
            ic_p_card = getParent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        }
        //
        let ProdId = ic_p_card.getAttribute('data_selected_prod_id')
        let p_qty = ic_p_card.querySelector('.q_holder input').value;
        let p_name = ic_p_card.querySelector('.pdt_name p').innerText;

        if (document.querySelector('.ic_popup_module_wrapper.inc_active .selected_product_addon[product_id="' + ProdId + '"]') != null) {
            let added_prod_wrap = document.querySelector('.ic_popup_module_wrapper.inc_active .selected_product_addon[product_id="' + ProdId + '"]');
            added_prod_wrap.querySelector('.selected_product_qty').innerHTML = p_name;
            added_prod_wrap.querySelector('.selected_info_wrap .q_holder input').value = p_qty
            added_prod_wrap.setAttribute('qty', counter)
        }
        getParent.parentNode.parentNode.parentNode.setAttribute('qty', counter)
        if (document.querySelector('#increasingly_element.inc_review_active') != null) {
            let rev_cart_sel_pid = prod.getAttribute('product_id');
            let act_wrapper_popup = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_combo_prod_wrapper')
            let prod_elm_pop = act_wrapper_popup.querySelector('.ic_product[data_selected_prod_id="' + rev_cart_sel_pid + '"]')
            prod_elm_pop.querySelector('.q_holder input').value = counter
            prod_elm_pop.querySelector('.q_holder input[type="hidden"]').value = counter
            bundle_vars.all_dup_child_prod = [];
            bundle_vars.all_dup_push_prod = [];
            bundle_vars.push_product_to_add = [];
            if (document.querySelector('#ic_bundle_popup') == null && switch_board.its_plp_page) {
                getAllcheckboxchecked()
            }
        }

    }


    function prepare_add_to_cart_data(source, bundleId, el, new_temp) {
        if (document.querySelector('.inc_product_checkout .add_bundle_btn') != null) {
            // document.querySelector('.inc_product_checkout .add_bundle_btn').classList.add('loading')
        }
        let spinner = generate_html_tag('div', 'spinner')
        spinner.setAttribute('style', 'justify-content: center;')
        let bounce1 = generate_html_tag('div', 'bounce1')
        spinner.appendChild(bounce1)
        let bounce2 = generate_html_tag('div', 'bounce2')
        spinner.appendChild(bounce2)
        let bounce3 = generate_html_tag('div', 'bounce3')
        spinner.appendChild(bounce3)
        if (window.innerWidth < 768) {
            if (document.querySelectorAll('.inc_product_checkout .add_bundle_btn')[1] != null) {
                document.querySelectorAll('.inc_product_checkout .add_bundle_btn')[1].innerText = ""
                document.querySelectorAll('.inc_product_checkout .add_bundle_btn')[1].appendChild(spinner)
                document.querySelectorAll('.inc_product_checkout .add_bundle_btn')[1].setAttribute('style', 'color: #EFC416;')
            }

        } else {
            if (document.querySelector('.inc_product_checkout .add_bundle_btn') != null) {
                document.querySelector('.inc_product_checkout .add_bundle_btn').innerText = ""
                document.querySelector('.inc_product_checkout .add_bundle_btn').appendChild(spinner)
                document.querySelector('.inc_product_checkout .add_bundle_btn').setAttribute('style', 'color: #EFC416;')
            }
        }
        setTimeout(function () {
            bundle_vars.succes_count = 0;
            bundle_vars.clicked_btn = el;
            let f = 1;
            let formData = [],
                formData1 = [];
            let csrf_token = "";
            // if (document.querySelector('form input[name="form_key"]') != null) {
            //     csrf_token = document.querySelectorAll('form input[name="form_key"]')[0].value;
            // }
            if (switch_board.its_cart_page) {
                if (bundle_vars.clicked_btn.getAttribute("prd_id") != undefined) {
                    let pr_id = bundle_vars.clicked_btn.getAttribute("prd_id");
                    client_vars.cart_prod_id.push(pr_id);
                }
            }
            let form_count = 0
            let data = {};
            let data1 = {};
            let formData = []
            // formData = new FormData();
            for (let t = 0; t < bundle_vars.push_product_to_add.length; t++) {
                if (bundle_vars.push_product_to_add[t].c_pid != "") {
                    // formData.append("id", bundle_vars.push_product_to_add[t].c_pid);
                    // formData.append("option-0", bundle_vars.push_product_to_add[t].size_colour);
                    // formData.append("quantity", bundle_vars.push_product_to_add[t].qty);
                    let param = 'id=' + bundle_vars.push_product_to_add[t].c_pid + '&option-0=' + bundle_vars.push_product_to_add[t].size + '&quantity=' + bundle_vars.push_product_to_add[t].qty + ''
                    formData.push(param)
                } else {

                    let param = 'id=' + bundle_vars.push_product_to_add[t].p_sku + '&option-0=' + bundle_vars.push_product_to_add[t].size + '&quantity=' + bundle_vars.push_product_to_add[t].qty + ''
                    // formData.append("id", bundle_vars.push_product_to_add[t].id);
                    // formData.append("quantity", bundle_vars.push_product_to_add[t].qty);
                    formData.push(param)

                }
                let url1 = client_vars.add_to_cart_url;

                form_count++
            }
            add_to_cart_ajax_request(formData, url1)
            add_to_cart_tracking_multiple_col();
        }, 300)
    }

    function add_to_cart_ajax_request(formData, url) {
        // let param = 'form_type=product&utf8=%E2%9C%93&id=12081920016455'
        let url = '/cart/add.js'
        if (formData[0] != undefined) {
            fetch(url, {
                method: 'POST',
                body: formData[0],
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'XMLHttpRequest',
                },
            })
                .then((response) => response.json())
                .then(
                    function (data) {
                        if (data.status === 422) {
                            if (window.innerWidth < 820) {
                                setTimeout(function () {
                                    window.location = "https://scandiborn.com/cart"
                                }, 800)
                            }
                        } else {
                            let product = data;
                            document.dispatchEvent(
                                new CustomEvent('ajaxProduct:added', {
                                    detail: {
                                        product: product,
                                        addToCartBtn: this.addToCart,
                                    },
                                })
                            );
                        }
                        status.loading = false;
                        //         this.addToCart.classList.remove('loading');
                        if (formData[1] != undefined) {
                            fetch(url, {
                                method: 'POST',
                                body: formData[1],
                                credentials: 'same-origin',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                    'X-Requested-With': 'XMLHttpRequest',
                                },
                            })
                                .then((response) => response.json())
                                .then(
                                    function (data) {
                                        if (data.status === 422) {
                                            if (window.innerWidth < 820) {
                                                setTimeout(function () {
                                                    window.location = "https://scandiborn.com/cart"
                                                }, 500)
                                            }
                                        } else {
                                            let product = data;
                                            document.dispatchEvent(
                                                new CustomEvent('ajaxProduct:added', {
                                                    detail: {
                                                        product: product,
                                                        addToCartBtn: this.addToCart,
                                                    },
                                                })
                                            );
                                        }
                                        status.loading = false;
                                        //         this.addToCart.classList.remove('loading');
                                        if (formData[2] != undefined) {
                                            fetch(url, {
                                                method: 'POST',
                                                body: formData[2],
                                                credentials: 'same-origin',
                                                headers: {
                                                    'Content-Type': 'application/x-www-form-urlencoded',
                                                    'X-Requested-With': 'XMLHttpRequest',
                                                },
                                            })
                                                .then((response) => response.json())
                                                .then(
                                                    function (data) {
                                                        if (data.status === 422) {
                                                            if (window.innerWidth < 820) {
                                                                setTimeout(function () {
                                                                    window.location = "https://scandiborn.com/cart"
                                                                }, 300)
                                                            }
                                                        } else {
                                                            let product = data;
                                                            document.dispatchEvent(
                                                                new CustomEvent('ajaxProduct:added', {
                                                                    detail: {
                                                                        product: product,
                                                                        addToCartBtn: this.addToCart,
                                                                    },
                                                                })
                                                            );
                                                        }
                                                        status.loading = false;
                                                        //         this.addToCart.classList.remove('loading');
                                                        if (formData[3] != undefined) {
                                                            fetch(url, {
                                                                method: 'POST',
                                                                body: formData[3],
                                                                credentials: 'same-origin',
                                                                headers: {
                                                                    'Content-Type': 'application/x-www-form-urlencoded',
                                                                    'X-Requested-With': 'XMLHttpRequest',
                                                                },
                                                            })
                                                                .then((response) => response.json())
                                                                .then(
                                                                    function (data) {
                                                                        if (data.status === 422) {
                                                                            if (window.innerWidth < 820) {
                                                                                window.location = "https://scandiborn.com/cart"
                                                                            }
                                                                        } else {
                                                                            let product = data;
                                                                            document.dispatchEvent(
                                                                                new CustomEvent('ajaxProduct:added', {
                                                                                    detail: {
                                                                                        product: product,
                                                                                        addToCartBtn: this.addToCart,
                                                                                    },
                                                                                })
                                                                            );
                                                                        }
                                                                        status.loading = false;
                                                                        //         this.addToCart.classList.remove('loading');
                                                                        // else{
                                                                        if (bundle_vars.push_product_to_add.length == 1) {
                                                                            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item to Cart"
                                                                            if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1] != undefined) document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item to Cart"
                                                                        } else {
                                                                            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item(s) to Cart"
                                                                            if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1] != undefined) document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item(s) to Cart"
                                                                        }
                                                                        document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].setAttribute('style', 'color: #fff;')
                                                                        if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1] != undefined) document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].setAttribute('style', 'color: #fff;')
                                                                        // }
                                                                    }.bind(this)
                                                                );
                                                        }
                                                        else {
                                                            if (bundle_vars.push_product_to_add.length == 1) {
                                                                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item to Cart"
                                                                if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1] != undefined) document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item to Cart"
                                                            } else {
                                                                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item(s) to Cart"
                                                                if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1] != undefined) document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item(s) to Cart"
                                                            }
                                                            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].setAttribute('style', 'color: #fff;')
                                                            if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1] != undefined) document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].setAttribute('style', 'color: #fff;')
                                                        }
                                                    }.bind(this)
                                                );
                                        }
                                        else {
                                            if (bundle_vars.push_product_to_add.length == 1) {
                                                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item to Cart"
                                                if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1] != undefined) document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item to Cart"
                                            } else {
                                                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item(s) to Cart"
                                                if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1] != undefined) document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item(s) to Cart"
                                            }
                                            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].setAttribute('style', 'color: #fff;')
                                            if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1] != undefined) document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].setAttribute('style', 'color: #fff;')
                                        }
                                    }.bind(this)
                                );
                        }
                        else {
                            if (bundle_vars.push_product_to_add.length == 1) {
                                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item to Cart"
                                if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1] != undefined) document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item to Cart"
                            } else {
                                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item(s) to Cart"
                                if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1] != undefined) document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].innerText = "Add " + bundle_vars.push_product_to_add.length + " Item(s) to Cart"
                            }
                            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[0].setAttribute('style', 'color: #fff;')
                            if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1] != undefined) document.querySelectorAll('.ic_popup_module_wrapper.inc_active .add_bundle_btn_wrap .add_bundle_btn')[1].setAttribute('style', 'color: #fff;')
                        }
                    }.bind(this)
                );
        }

    }


    // Add To Cart: END


    // Tracking Functions: START
    function trackProductNavigation(clickedProduct, productUrl, rec) {
        if (switch_board.tracking) {
            let coreProductIds = "0";
            let eventdata = "";
            let pageType = 0;
            // getTrackingPixel();
            //{"event_data":{"product_id":"890525","core_product_id":null},"page_type":"102","event_type":"bundle_product_click_tracking","is_logged":"","method":"track","platform":"","token":"amR6xE","collection":"1"}
            if (switch_board.its_plp_page) {
                pageType = "102";
                if (rec === "rec") {
                    //pageType = "107"
                    eventdata = { "product_id": clickedProduct.toString(), "core_product_id": client_vars.product_ids[0].toString() }
                } else {
                    eventdata = { "product_id": clickedProduct.toString(), "core_product_id": null }
                }
            }
            let sh_type = "4"
            if (window.location.href.indexOf('incgs=1') >= 0) {
                sh_type = "4"
            } else if (window.location.href.indexOf('incgs=2') >= 0) {
                sh_type = "5"
            } else if (window.location.href.indexOf('incgs=3') >= 0) {
                sh_type = "6"
            }
            //importEventDataObj["rt"] = sh_type;
            //importEventDataObj["collection"] = '1';
            if (switch_board.tracking) {
                if (rec === "rec") {
                    let trackData = { "eventData": String(btoa(JSON.stringify({ "event_data": eventdata, "page_type": pageType, "event_type": "bundle_product_click_tracking", "is_logged": '', "method": "track", "platform": "", "token": client_vars.api_key, "rt": "4", "collection": "1" }))), "vid": readCookie('ivid'), "time": getCurrentFormattedTime(), "uri": document.location.href }
                } else {
                    let trackData = { "eventData": String(btoa(JSON.stringify({ "event_data": eventdata, "page_type": pageType, "event_type": "bundle_product_click_tracking", "is_logged": '', "method": "track", "platform": "", "token": client_vars.api_key, "rt": sh_type, "collection": "1" }))), "vid": readCookie('ivid'), "time": getCurrentFormattedTime(), "uri": document.location.href }
                }

                makeTrackingApiCall(JSON.stringify(trackData))
            }

            if (rec === "rec") {
                if (window.innerWidth < 768) {
                    setTimeout(function () {
                        window.location.assign(productUrl)
                    }, 2000);
                } else {
                    window.open(productUrl, '_blank')
                }
            } else {
                setTimeout(function () {
                    window.location.href = productUrl
                }, 600)
            }

            return false;
        }
    }

    function makeTrackingApiCall(eventdata) {
        //console.log("TRACKING");
        p_url = '//usaoptimizedby.increasingly.co/ImportData';
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {

                }
            }
        };
        xhr.open("POST", p_url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(eventdata);
    }


    function add_to_cart_tracking(id1, id2, bundleId, source) {
        if (bundle_vars.event_type == undefined || bundle_vars.event_type == null) {
            bundle_vars.event_type = "bundle_add_to_cart";
        }
        let core_prod_id = "";
        let productIdsforTracking = []
        if (switch_board.its_plp_page) {
            productIdsforTracking.push(bundle_vars.plp_added_id.toString());
            core_prod_id = bundle_vars.plp_added_id;
        } else if (switch_board.its_pdp_page) {
            //client_vars.product_ids[0]
            productIdsforTracking.push(client_vars.product_ids[0].toString());
            core_prod_id = client_vars.product_ids[0];
        } else if (switch_board.its_cart_page) {
            productIdsforTracking.push(client_vars.product_ids[0].toString());
            core_prod_id = id1;
        }

        if (id2) {
            productIdsforTracking.push(id2.toString());
        } else {
            productIdsforTracking.push(id1.toString());
        }
        let eventdata = {}
        let pageType = 100;
        if (switch_board.its_plp_page && !bundle_vars.pdp_client_btn) {
            pageType = "101";
        } else if (switch_board.its_pdp_page && source != "modal_btn" && !bundle_vars.pdp_client_btn) {
            pageType = "100";
        } else if (switch_board.its_cart_page && source != "modal_btn" && !bundle_vars.pdp_client_btn) {
            pageType = "103";
        } else {
            pageType = "107";
        }

        if (bundle_vars.event_type == "product_deal_add_to_cart") {
            eventdata = {
                "core_product_id": core_prod_id.toString(),
                "product_id": id1.toString(),
                "is_logged_in_user": "0"
            }
            data = {
                "eventData": btoa((JSON.stringify({
                    "event_data": eventdata,
                    "page_type": pageType.toString(),
                    "event_type": bundle_vars.event_type,
                    "method": "track",
                    "platform": "",
                    "token": client_vars.api_key
                }))),
                "vid": readCookie('ivid'),
                "time": getCurrentFormattedTime(),
                "uri": document.location.href
            };
        } else {
            eventdata = { "id": bundleId, "product_ids": productIdsforTracking, "product_id": core_prod_id.toString() }
            data = {
                "eventData": btoa((JSON.stringify({
                    "event_data": {
                        "bundle_data": eventdata
                    },
                    "page_type": pageType.toString(),
                    "event_type": bundle_vars.event_type,
                    "method": "track",
                    "platform": "",
                    "token": client_vars.api_key
                }))),
                "vid": readCookie('ivid'),
                "time": getCurrentFormattedTime(),
                "uri": document.location.href
            };
        }
        makeTrackingApiCall(JSON.stringify(data));
        // if(switch_board.its_pdp_page && window.innerWidth > 767){
        //     bundle_vars.push_product_to_add = []
        //     bundle_vars.all_dup_push_prod = []
        // }
        // getTrackingPixel();
        setTimeout(function () {
            if (switch_board.its_cart_page) {
                window.location.reload()
            }
        }, 100)
    }

    function add_to_cart_tracking_multiple_col(source) {
        //{"event_data":{"combo_data":[{"id":85118,"product_ids":["272594","238645","794810","783285"]}]},"page_type":"102","event_type":"collection_add_to_cart","method":"track","platform":"","token":"amR6xE"}
        bundle_vars.event_type = "collection_add_to_cart";
        let productIdsforTracking = []

        pageType = "102";
        let sh_type = "1"
        if (window.location.href.indexOf('incgs=1') >= 0) {
            sh_type = "1"
        } else if (window.location.href.indexOf('incgs=2') >= 0) {
            sh_type = "2"
        } else if (window.location.href.indexOf('incgs=3') >= 0) {
            sh_type = "3"
        }
        for (let k = 0; k < bundle_vars.push_product_to_add.length; k++) {
            productIdsforTracking.push(bundle_vars.push_product_to_add[k].id)
        }
        let all_data = [{ "id": bundle_vars.push_product_to_add[0].combo_id, "product_ids": productIdsforTracking, "incgs": sh_type }];
        data = {
            "eventData": btoa((JSON.stringify({
                "event_data": {
                    "combo_data": all_data
                },
                "page_type": pageType.toString(),
                "event_type": bundle_vars.event_type,
                "method": "track",
                "platform": "",
                "token": client_vars.api_key
            }))),
            "vid": readCookie('ivid'),
            "time": getCurrentFormattedTime(),
            "uri": document.location.href
        };
        aal_client_call_tracking_col()
        makeTrackingApiCall(JSON.stringify(data));

        // if (window.innerWidth < 767) {
        //     bundle_vars.push_product_to_add = []
        //     bundle_vars.all_dup_push_prod = []
        //     bundle_vars.all_dup_child_prod = [];
        // }

    }

    function aal_client_call_tracking_col() {
        for (let k = 0; k < bundle_vars.push_product_to_add.length; k++) {
            //if (client_vars.product_ids[0] != bundle_vars.push_product_to_add[k].id) {
            let prod_id = bundle_vars.push_product_to_add[k].id
            let prd_name = bundle_vars.push_product_to_add[k].pname
            let prd_prc = bundle_vars.push_product_to_add[k].prc
            let qty = bundle_vars.push_product_to_add[k].qty

        }
    }

    function getTrackingPixel(url) {
        let oImg = document.createElement("img");
        oImg.setAttribute('id', 'cstracking')
        oImg.setAttribute('src', url);
        oImg.setAttribute('height', '1px');
        oImg.setAttribute('width', '1px');
        oImg.setAttribute('style', 'display:none')
        document.body.appendChild(oImg);
        console.log("TRACKING: CLICK")
        // }
    }

    function getCurrentFormattedTime() {
        let d = new Date();
        let currentTime = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
        return currentTime;
    }
    // Tracking Functions: END
    /*---------------------Cookie Utility-------------------------------------*/
    function randomIvid(len, bits) {
        bits = bits || 36;
        let outStr = "",
            newStr;
        while (outStr.length < len) {
            newStr = Math.random().toString(bits).slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr;
    };

    function generateIcid() {
        rvid = randomIvid(42, 16);
        return rvid;
    }

    function getVisitorId() {
        let clientDomain = window.location.host.replace("www", "");
        if (readCookie('ivid') == undefined || readCookie('ivid') == '' || readCookie('ivid') == null || readCookie('ivid') == 'null') {
            client_vars.vid = ((readCookie('ivid') == undefined) || readCookie('ivid') == '' || (readCookie('ivid') == 'null')) ? generateIcid() : readCookie('ivid');
            let d = new Date();
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = 'ivid=' + client_vars.vid + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + false + ';'
        }
        // if (readCookie('ivid') != undefined && readCookie('ivid') != '' && readCookie('ivid') != 'null') {
        //     client_vars.vid = readCookie('ivid')
        //     let oImg = document.createElement("img");
        //     oImg.setAttribute('src', '//usaoptimizedby.increasingly.co/GetVisitorId?ivid=' + client_vars.vid);
        //     oImg.setAttribute('height', '1px');
        //     oImg.setAttribute('width', '1px');
        //     oImg.setAttribute('style', 'display:none')
        //     document.body.appendChild(oImg);
        // }
    }

    function readCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
        //return "57d8291aa1b1394249db663c3dee77e25b166e5aba";
    }


    let is_visible_elem_counter = 0;
    window.onscroll = function () { execute_import_tracking(); };

    function execute_import_tracking() {
        if (document.querySelector("#increasingly_element") != null || document.querySelector("#increasingly_element") != undefined) {
            let el = document.querySelector("#increasingly_element");
            let a = element_in_viewport(el);
        }
        if (a == true && is_visible_elem_counter < 1) {
            let data = {
                "eventData": String(btoa(JSON.stringify({ "event_data": { "product_id": client_vars.product_ids[0] }, "event_type": "catalog_product_view", "page_type": "catalog_product_view", "method": "track", "platform": "", "token": client_vars.api_key }))),
                "vid": readCookie('ivid'),
                "time": getCurrentFormattedTime(),
                "uri": document.location.href
            };
            makeTrackingApiCall(JSON.stringify(data));
            is_visible_elem_counter++;
        }
    }

    function element_in_viewport(el) {
        let top = el.offsetTop;
        let left = el.offsetLeft;
        let width = el.offsetWidth;
        let height = el.offsetHeight;
        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }
        return (top < (window.pageYOffset + window.innerHeight) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset);
    }

    function sorting_data(json_object, key_to_sort_by) {
        function sortByKey(a, b) {
            let x = a[key_to_sort_by];
            let y = b[key_to_sort_by];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        json_object.sort(sortByKey);
    }

    function option_change_size(element, combo) {
        if (element.getAttribute('disabled') == null) {
            let li = element;
            let ul_parent = element.parentNode.parentNode;
            let bundle_select_parent = element.parentNode.parentNode.parentNode;
            let prod_box_card = bundle_select_parent.parentNode.parentNode.parentNode.parentNode;
            if (prod_box_card != null) {
                if (prod_box_card.querySelector('.inc_selected_span') != null) {
                    prod_box_card.querySelector('.inc_selected_span').innerHTML = "Add Product to Bundle";
                }
                prod_box_card.classList.remove('inc_checked')
                prod_box_card.querySelector('.inc_label').classList.remove('inc_checked');
                if (document.querySelector('.bundle_links_combo .bundle_link[product_id="' + ProdId + '"]') != null) {
                    document.querySelector('.bundle_links_combo .bundle_link[product_id="' + ProdId + '"]').classList.remove('inc_checked')
                }

            }
            let li_inc_active = ul_parent.querySelectorAll('li');
            for (i = 0; i < li_inc_active.length; i++) {
                li_inc_active[i].classList.remove('inc_active');
                li_inc_active[i].querySelector('a').classList.remove('inc_active');
            }

            let l_prd = "";
            element.classList.add('inc_active');
            element.parentNode.classList.add('inc_active');
            let BundlId = element.getAttribute('bundle_id');
            let ProdId = element.getAttribute('product_id');
            let SelClrVal = element.getAttribute('option_id');
            let opt_text = element.getAttribute('value');
            let chil_pid = element.getAttribute('sku')
            let prc = element.getAttribute('price');
            let spl_prc = element.getAttribute('special_price');
            let ch_na = element.getAttribute('c_NM');
            let c_pid = element.getAttribute('c_pid');
            let ch_name_div = bundle_select_parent.parentNode.parentNode.parentNode;
            let comboId = element.getAttribute('combo_id');
            if (ch_name_div.querySelector('.pdt_name a p') != undefined) {
                ch_name_div.querySelector('.pdt_name a p').innerHTML = ch_na;
            }

            if (element.parentNode.parentNode.parentNode.querySelector('.color_size_title') != null) {
                element.parentNode.parentNode.parentNode.querySelector('.color_size_title').innerText = "Size : " + opt_text.toUpperCase();
            }
            let sel_qty = ch_name_div.querySelector('.q_holder input').value;

            let c_img_src = element.getAttribute('child_img_url');
            if (ch_name_div.querySelector('.pdt_img img') != null) {
                ch_name_div.querySelector('.pdt_img img').src = c_img_src;
            }



            if (document.querySelector('.ic_popup_module_wrapper.inc_active .bundle_links_combo li[product_id="' + ProdId + '"]') != null) {
                let tab_li = document.querySelector('.ic_popup_module_wrapper.inc_active .bundle_links_combo li[product_id="' + ProdId + '"]');
                tab_li.querySelector('img').src = c_img_src;
                tab_li.querySelector('.combo_tab_p_name').innerText = ch_na
                tab_li.querySelector('.combo_tab_p_name').setAttribute('title', ch_na)
                if (spl_prc != null && (+spl_prc < +prc) && spl_prc > 0) {
                    tab_li.querySelector('.combo_tab_price').innerHTML = formatter.format(spl_prc)
                } else {
                    tab_li.querySelector('.combo_tab_price').innerHTML = formatter.format(prc)
                }
            }
            if (document.querySelector('.ic_popup_module_wrapper.inc_active .prod_wise_wrapper_combo .added_prd_cont_combo[product_id="' + ProdId + '"]') != null) {
                let added_prod_wrap = document.querySelector('.ic_popup_module_wrapper.inc_active .prod_wise_wrapper_combo .added_prd_cont_combo[product_id="' + ProdId + '"]');
                added_prod_wrap.querySelector('.added_Image_wrap_combo img').src = c_img_src;

            }
            if (document.querySelector('.ic_popup_module_wrapper.inc_active .selected_product_addon[product_id="' + ProdId + '"]') != null) {
                // let added_prod_wrap = document.querySelector('.ic_popup_module_wrapper.inc_active .selected_product_addon[product_id="'+ProdId+'"]');
                // added_prod_wrap.querySelector('.selected_product_addon img').src=c_img_src;
                // added_prod_wrap.querySelector('.selected_product_qty').innerHTML=ch_na;
                // // added_prod_wrap.querySelector('.selected_info_wrap .q_holder input').value=sel_qty
                // if (spl_prc != null && (+spl_prc < +prc) && spl_prc > 0) {
                //     added_prod_wrap.querySelector('.selected_product_prc').innerHTML= formatter.format(spl_prc)
                // } else{
                //     added_prod_wrap.querySelector('.selected_product_prc').innerHTML= formatter.format(prc)
                // }

            }

            bundle_vars.all_dup_child_prod = [];
            bundle_vars.all_dup_push_prod = [];
            bundle_vars.push_product_to_add = [];
            if (document.querySelector('#ic_bundle_popup') == null && switch_board.its_plp_page) {
                getAllcheckboxchecked("size")
            }


            let value = "" + prc + "," + spl_prc + "," + ProdId + "," + chil_pid + "," + opt_text + "";

            update_the_price(bundle_vars.load_type, value, element, null)
            if (switch_board.its_plp_page) {
                bundle_vars.all_dup_child_prod = [];
                bundle_vars.all_dup_push_prod = [];
                bundle_vars.push_product_to_add = [];
                getAllcheckboxchecked()
            }
        }
    }

    function option_change_color(element, combo) {
        let li = element;
        let ul_parent = element.parentNode.parentNode;
        let bundle_select_parent = element.parentNode.parentNode.parentNode;
        let li_inc_active = ul_parent.querySelectorAll('li');
        for (i = 0; i < li_inc_active.length; i++) {
            li_inc_active[i].classList.remove('inc_active');
            li_inc_active[i].querySelector('a').classList.remove('inc_active');
        }
        let l_prd = "";
        element.classList.add('inc_active');
        element.parentNode.classList.add('inc_active');
        let BundlId = element.getAttribute('bundle_id');
        let ProdId = element.getAttribute('product_id');
        let SelClrVal = element.getAttribute('option_id');
        let img_url = element.getAttribute('child_img_url');
        let opt_text = element.getAttribute('value');
        let chil_pid = element.getAttribute('sku')
        let ch_Nm = element.getAttribute('c_NM')
        let prc = element.getAttribute('price');
        let spl_prc = element.getAttribute('special_price');
        let comboId = element.getAttribute('combo_id');
        if (element.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.q_holder input') != null) {
            element.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.q_holder input').value = "1";
            element.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.q_holder input[type="hidden"]').value = "1";
        }
        let color_text = "";
        //element.parentNode.parentNode.querySelector('.color_label_text').innerHTML = opt_text.toLowerCase();
        if (bundle_select_parent.parentNode.querySelectorAll('.select_wrapper .inc_active')[1] != undefined) {
            color_text = bundle_select_parent.parentNode.querySelectorAll('.select_wrapper .inc_active')[1].getAttribute('value')
        }
        let img_url_div = bundle_select_parent.parentNode.parentNode;
        if (bundle_select_parent.parentNode.parentNode.parentNode.querySelector('.pdt_img img') != undefined) {
            bundle_select_parent.parentNode.parentNode.parentNode.querySelector('.pdt_img img').src = img_url;
        }
        if (document.querySelector('.ic_popup_module_wrapper.inc_active .bundle_links_combo li[product_id="' + ProdId + '"]') != null) {
            let tab_li = document.querySelector('.ic_popup_module_wrapper.inc_active .bundle_links_combo li[product_id="' + ProdId + '"]');
            tab_li.querySelector('img').src = img_url;
            tab_li.querySelector('.combo_tab_p_name').innerText = ch_Nm
            tab_li.querySelector('.combo_tab_p_name').setAttribute('title', ch_Nm)
            if (spl_prc != null && (+spl_prc < +prc) && spl_prc > 0) {
                tab_li.querySelector('.combo_tab_price').innerText = parseFloat(spl_prc).toFixed(2)
            } else {
                tab_li.querySelector('.combo_tab_price').innerText = parseFloat(prc).toFixed(2)
            }

        }
        let ch_name_div = bundle_select_parent.parentNode.parentNode.parentNode;
        if (ch_name_div.querySelector('.pdt_name a p') != undefined) {
            ch_name_div.querySelector('.pdt_name a p').innerHTML = ch_Nm;
            ch_name_div.querySelector('.pdt_name .inc_tooltips').innerHTML = ch_Nm;
        }
        bundle_vars.all_dup_child_prod = [];
        bundle_vars.all_dup_push_prod = [];
        bundle_vars.push_product_to_add = [];
        if (document.querySelector('#ic_bundle_popup') == null && switch_board.its_plp_page) {
            getAllcheckboxchecked("size")
        }


        let value = "" + prc + "," + spl_prc + "," + ProdId + "," + chil_pid + "," + opt_text + "";
        // onChange_color_li(l_prd.Attributes, l_prd, bundle_vars.load_type, element, opt_text, BundlId, ProdId, color_text);
        // if (l_prd.Attributes != undefined) {
        update_the_price(bundle_vars.load_type, value, element, null);
        // }


    }

    document.addEventListener('click', function (e) {
        let clickedElement = e.target;
        if (switch_board.its_plp_page) {

            if (clickedElement.className == "ic_popup_module_wrapper inc_active" && window.innerWidth < 820) {
                document.querySelector('html').classList.remove('body_inc_overlay')
                if (document.querySelector('.ic_popup_module_wrapper.inc_active') != null) {
                    document.querySelector('.ic_popup_module_wrapper.inc_active').classList.remove('inc_active')
                }
                if (document.querySelector('.ic_build_bundle.inc_active') != null) {
                    document.querySelector('.ic_build_bundle.inc_active').classList.remove('inc_active')
                }
                if (document.querySelector('.popup_overlay') != null) {
                    document.querySelector('.popup_overlay').classList.remove('popup_overlay')
                }
            }
            if (clickedElement.parentNode != null) {
                if (clickedElement.parentNode.parentNode != null) {
                    if (clickedElement.parentNode.parentNode.parentNode != null) {
                        if (clickedElement.parentNode.parentNode.parentNode.parentNode != null) {
                            if (clickedElement.className != "long_desc_block show_full_desc" && clickedElement.className != "long_desc_block" && clickedElement.parentElement.className != "long_desc_text_wrapper" && clickedElement.parentElement.parentElement.className != "long_desc_text_wrapper" && clickedElement.className != "inc_readMore" && clickedElement.parentNode.parentNode.parentNode.className != "long_desc_text_wrapper" && clickedElement.parentNode.parentNode.parentNode.parentNode.className != "long_desc_text_wrapper") {
                                if (document.querySelector('.long_desc_block.show_full_desc') != null) {
                                    document.querySelector('.long_desc_block.show_full_desc .close_read_more').click()
                                }
                            }
                        }
                    }
                }
            }
            if (clickedElement.className == "prod_wise_wrapper_combo inc_active") {
                clickedElement.classList.remove('inc_active');
                clickedElement.firstElementChild.classList.remove('inc_active');
            }
        }
        if (clickedElement.className == "enlarge_image_Modal inc_active") {
            clickedElement.classList.remove('inc_active')
        }
        //top-grid-sort-header
    });


    function showTooltip(e) {
        //e.nextElementSibling.classList.add('show');
    }

    function hideTooltip(e) {
        //e.nextElementSibling.classList.remove('show');
    }


    if (readCookie("ivid") == null) {

        let page_type = "";
        let cat_name = "";
        if (switch_board.its_pdp_page) {
            page_type = "PDP";
            let elms = document.querySelectorAll('.m_breadcrumbs li');
            if (elms != null) {
                if (elms[elms.length - 2] != null) {
                    cat_name = elms[elms.length - 2].innerText.trim()
                }
            }

        } else if (switch_board.its_cart_page) {
            page_type = "CART";
            cat_name = "";
        } else if (switch_board.its_plp_page) {
            //document.querySelector('.m_breadcrumbs li:last-child').innerText.trim()
            page_type = "PLP";
            let elms = document.querySelector('.m_breadcrumbs li:last-child');
            if (elms != null) {
                cat_name = document.querySelector('.m_breadcrumbs li:last-child').innerText.trim()
            }
        }
        increasinglyAnalytics_tracking('track', page_type, cat_name, 'null_cookie', "", false, "")
    }

    function increasinglyAnalytics_tracking(event_type, eventPage, eventCategory, eventAction, bundleIds, nonInteraction, productIds) {
        formData = new FormData();
        formData.append("token", "amR6xE");
        formData.append("eventType", event_type);
        formData.append("eventPage", eventPage);
        formData.append("eventCategory", eventCategory);
        formData.append("eventAction", eventAction);
        formData.append("bundleIds", bundleIds);
        formData.append("nonInteraction", nonInteraction);
        formData.append("productIds", productIds);
        formData.append("vid", readCookie('ivid'));
        formData.append("insertDate", "");
        let xhr = new XMLHttpRequest();
        xhr.open("POST", '//analytics.increasingly.co/increasinglyAnalytics', true);
        //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onerror = function () {

        }
        xhr.onload = function () {

            if (xhr.readyState == 4 && xhr.status == 200) {

            }
        }
        xhr.send(formData);
    }

    // $('.ic_product').on('mousedown touchstart', function (e) {

    //combo Template
    function handling_response_combo(response, load_type, id1, id2, plp_elem, source, type) {
        //to remove old block
        if (document.querySelector('#ic_bundle_wrapper') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('#ic_bundle_wrapper'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
        if (document.querySelector('.exchange_del_type_modal') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.exchange_del_type_modal'), function (el) {
                el.parentNode.removeChild(el);
            });
        }

        let bundle_count = response.ComboSetCount;
        let ic_bundle_wrap = generate_html_tag('div', '');
        ic_bundle_wrap.setAttribute('id', 'ic_bundle_wrapper');
        ic_bundle_wrap.classList.add('combo_bundle_wrapper')
        let ic_header_wrap = generate_html_tag('div', 'ic_header_wrapper');
        if (switch_board.its_plp_page && load_type == "onload") {
            get_bundle_title(load_type, ic_header_wrap, "combo_main");
        }
        if (switch_board.its_plp_page && load_type == "onload") {
            let ic_tab_prod_wrap = generate_html_tag('div', 'ic_tab_prod_wrap');
        }
        let ic_prod_wrapper = generate_html_tag('div', 'ic_product_wrapper');
        let ic_bundle = generate_html_tag('div', 'ic_bundle');
        ic_bundle.classList.add('ic_bundle_combo')



        // ic_bundle.appendChild(ic_product_bundling)
        if (bundle_count >= 1) {
            create_combo_prod_box(load_type, response, ic_bundle);
            ic_tab_prod_wrap.appendChild(ic_header_wrap)
            ic_prod_wrapper.appendChild(ic_bundle);
            ic_tab_prod_wrap.appendChild(ic_prod_wrapper);
            ic_bundle_wrap.appendChild(ic_tab_prod_wrap)
            let pdp_bundle = generate_html_tag('div', 'pdp_bundles');
            pdp_bundle.setAttribute("id", "ic_bundle_pdp");
            pdp_bundle.appendChild(ic_bundle_wrap);
            if (document.querySelector('.inc_bundling_pdp') != null) {
                document.querySelector('.inc_bundling_pdp').appendChild(pdp_bundle);
            }
        }
        bundle_vars.create_prod_combo = 0;
        let ic_element = document.querySelector('#increasingly_element')
        if (ic_element != null) {
            ic_element.appendChild(ic_bundle_wrap)
        }
        if (window.innerWidth > 1200 && bundle_count > 3) {
            let nodes = ic_bundle.querySelectorAll('.combo_bundle').length
            let ic_dots_arrows_wrap = generate_html_tag('div', 'ic_dots_arrows_wrap');
            ic_bundle.appendChild(ic_dots_arrows_wrap)
            if (window.innerWidth > 1199) {
                add_slider_bundle_buttons(ic_dots_arrows_wrap, "combo", null);
            }

            let dots = generate_html_tag('div', 'dots_ic_bundle');
            let dot_ul = generate_html_tag('ul', '');
            dots.appendChild(dot_ul)
            if (nodes >= 1) {
                if (window.innerWidth > 990) {
                    for (l = 0; l < nodes; l++) {
                        if (l < 6) {
                            let dot_li = generate_html_tag('li', '');
                            dot_ul.appendChild(dot_li)
                            if (l == 0) {
                                dot_li.classList.add('inc_active')
                            }
                        }
                    }
                    dots.appendChild(dot_ul)
                    // ic_dots_arrows_wrap.appendChild(dots)
                } else {
                    for (l = 0; l < nodes; l++) {
                        if (l < 6) {
                            let dot_li = generate_html_tag('li', '');
                            dot_ul.appendChild(dot_li)
                            if (l == 0) {
                                dot_li.classList.add('inc_active')
                            }
                        }
                    }
                    dots.appendChild(dot_ul)
                    // ic_dots_arrows_wrap.appendChild(dots)
                }
            }
        }
        if (window.innerWidth > 1199 && bundle_count >= 2) {
            // slider_bundle(null, null, "combo");
        }
        let exchange_del_type_modal = generate_html_tag('div', 'exchange_del_type_modal');
        if (ic_element != null) {
            ic_element.appendChild(exchange_del_type_modal)
        }

        let exchange_del_type_html = '<div id="myModal" class="modal" style="display: none;"> <div class="modal-content"> <div class="modal-header"> <span class="close" onClick="inc_Close(this)">×</span> <h2></h2> </div><div class="modal-body"> <style><!--#pop-two .three.columns img{max-width: 60px;}--></style><div id="pop-two"><div class="logo-top"><img src="https://cdn.shopify.com/s/files/1/1257/2223/t/60/assets/logo_home.png?2087244156733120414"></div><h3 style="text-align: left;">UK orders over <b>£25 are FREE</b></h3><p>We’ve included some helpful information on Delivery and Dispatch, but if you have any queries just contact our lovely customer service team below.</p><div class="row"><div class="three columns"><img src="https://cdn.shopify.com/s/files/1/1257/2223/files/TRUCK.png?12800221163936710486"></div><div class="nine columns"><h2>Standard UK Delivery [3-5 Days]</h2><ul><li><b>FREE</b> delivery on all orders over £25.</li><li>Orders under £25 charged at <b>£3.95</b>.</li><li>Orders are dispatched within 24 hours.</li></ul></div></div><div class="row"><div class="three columns"><img src="https://cdn.shopify.com/s/files/1/1257/2223/files/TIMER.png?13780742642911582211"></div><div class="nine columns"><h2>Express UK Delivery [order by Midday]</h2><ul><li>1-2 working days at <b>£4.95</b> (mon - fri)</li><li>Next Working Day at <b>£5.95 </b>(mon - fri)</li><li>Next Day services <b>MUST</b> be ordered <b>by 12 noon, Monday – Friday</b> and will only be delivered Monday to Friday.</li></ul></div></div><div class="row"><div class="three columns"><img src="https://cdn.shopify.com/s/files/1/1257/2223/files/EXCEPTION.png?12800221163936710486"></div><div class="nine columns"><h2>Exceptions</h2><ul><li>Please note for some larger furniture and playtime items the delivery times may vary. Further delivery information is displayed on the items product page.</li><li>Preorder items will be dispatched within the timescale indicated on the product page. All items in your order will be held until your preorder item arrives in stock.</li></ul></div></div><div class="row"><div class="three columns"><img src="https://cdn.shopify.com/s/files/1/1257/2223/files/GLOBE.png?12800221163936710486"></div><div class="nine columns"><h2>International Delivery</h2><ul><li><b>Track your item</b> - Dispatch confirmation email with a web-based tracking.</li><li>FREE delivery available in most European countries on orders over £150.</li><li>Delivery time to Europe 3-5 days.</li><li>Delivery time Rest of World 5-10 Working Days</li><li>Any applicable customs charges, import duties and taxes are not included at checkout and are to be paid by the customer.</li><li>We ship to all countries, but if you find we do not ship to your country at checkout, please <a href="https://www.scandiborn.co.uk/pages/contact-us">contact us </a> for a shipping quote.</li></ul></div></div><div class="row"><div class="three columns"><img src="https://cdn.shopify.com/s/files/1/1257/2223/files/phone.png?12800221163936710486"></div><div class="nine columns"><h2>Contact Us</h2><p>info@scandiborn.co.uk or via our <a href="https://www.scandiborn.co.uk/pages/contact-us">contact form</a>.</p><p>You can email us 24 hours a day and we will respond as quickly as possible. Weekend emails will normally be dealt with on Monday. <b>+44 (0)203 435 7983</b></p><ul><li>Monday to Thursday: 09:00 to 17:30</li><li>Friday: 09:00 to 17:00</li><li>Saturday &amp; Sunday: Closed</li><li>An answering service is available at all other times.</li></ul><p>&nbsp;</p><p>&nbsp;</p></div></div></div></div></div></div><div id="myModal1" class="modal1" style="display: none;"> <div class="modal-content1"> <div class="modal-header1"> <span class="close1" onClick="inc_Close1(this)">×</span> <h2></h2> </div><div class="modal-body1"> <style><!--#pop-two .three.columns img{max-width: 60px;}--></style><div id="pop-two"><div class="logo-top"><img src="https://cdn.shopify.com/s/files/1/1257/2223/t/60/assets/logo_home.png?2087244156733120414"></div><p>We want you to love your Scandibørn products as much as we do, but we understand that sometimes a product does not quite fit the bill.</p><div class="row"><div class="three columns"><meta charset="utf-8"><div class="row"><div class="three columns"><img src="https://cdn.shopify.com/s/files/1/1257/2223/files/ARROW.png?12800221163936710486"></div><div class="nine columns page"><h2>Exchanges</h2><ul><li>We know that our customers often like to exchange for a different product(s), this is why offer FREE exchanges.</li><li>If you would like to exchange your product(s) for another product(s) OR for store credit<em><span>&nbsp;</span>(no expiry date)</em><span>&nbsp;</span>please contact us via our<span>&nbsp;</span><a href="https://www.scandiborn.co.uk/pages/contact-us">contact form<span>&nbsp;</span></a>and we will organise for a free shipping label to be emailed across to you for a drop off or collection.</li><li>We are happy to accept returns for exchange within 14 days of receipt, we know life gets busy so if it’s been a bit longer just contact us and we’ll do our best to help.</li></ul></div></div><div class="row"><div class="three columns"><img src="https://cdn.shopify.com/s/files/1/1257/2223/files/REFUND.png?12800221163936710486"></div><div class="nine columns"><h2>Refunds</h2><ul><li>We are happy to accept returns for refund within 14 days of receipt, providing we receive the returned item(s) unused and in their original packaging we can offer you a full refund.</li><li>Please submit your return request via our Returns Portal<span>&nbsp;</span><a href="https://www.scandiborn.co.uk/a/returns">HERE<span>&nbsp;</span></a>.</li><li>Please include your returns slip which can be printed<span>&nbsp;</span><a href="https://cdn.shopify.com/s/files/1/1257/2223/files/SCANDIBORN_Returns_Form.pdf?8757691884401170490">HERE</a>.</li><li>Customers are responsible for all return shipping costs. All refunds will be processed within 14 days of receipt of the product and credited back using your original form of payment.</li></ul></div></div><div class="row"><div class="three columns"><img src="https://cdn.shopify.com/s/files/1/1257/2223/files/info.png?12800221163936710486"></div><div class="nine columns"><h2>Other Information</h2><ul><li>Sale Items: We do not accept returns on items bought in sale periods (Black Friday, Boxing day / January sales etc) unless there is a manufacturers fault with the item. This does not affect your consumer rights.</li><li>Special/Customised orders: These products are non-refundable unless there is a fault with the product.</li></ul></div></div></div><div class="nine columns page"><h2></h2></div></div><div class="row"><div class="nine columns"><ul></ul></div></div></div></div></div></div><div id="myModal2" class="modal2" style="display: none;"> <div class="modal-content2"> <div class="modal-header2"> <span class="close2" onClick="inc_Close2(this)">×</span> <h2></h2> </div><div class="modal-body2"> <div id="pop-two"><div class="logo-top"><img src="https://cdn.shopify.com/s/files/1/1257/2223/t/60/assets/logo_home.png?2087244156733120414"></div><p>In most cases we will price match other retailers, but before requesting, please have a look at our criteria:</p><div class="row"><div class="price-match"><ul><li>The product(s) must be the identical size/colour, make and model to the one we offer.</li><li>The product(s) must be in stock at the other retailer and delivery must be within the same timelines, UK stores only.</li><li>The price match will take into account any other offers used at&nbsp;Scandibørn.</li><li>The price match will take into account delivery charges from the other retailer.</li></ul></div></div><p>If you’d like to request a price match contact us via the <a href="https://www.scandiborn.co.uk/pages/contact-us">contact form </a> or email us on info@scandiborn.co.uk.</p></div></div></div></div><div id="myModal3" class="modal2" style="display: none;"> <div class="modal-content2 modal-content3"> <div class="modal-header2"> <span class="close2" onClick="inc_Close2(this)">×</span> <h2></h2> </div><div class="modal-body2" style="text-align:center;"> <img width="100%" src="https://cdn.shopify.com/s/files/1/1257/2223/files/English_Pound.png?13649"> </div></div></div>'
        exchange_del_type_modal.innerHTML = exchange_del_type_html

        if (document.querySelector('.inc_product_checkout .add_bundle_btn') != null) {
            document.querySelector('.inc_product_checkout .add_bundle_btn').classList.add('loading')
        }

        try {
            let colprice = document.querySelector('.combo_price_wrapper .inc_standard_price').innerText.replace('$', '').replace(',', '')
            generate_meta_tag('og:type', 'shopping')
            generate_meta_tag('og:title', bundle_vars.coltitle)
            generate_meta_tag('product:price:amount', colprice)
            // generate_meta_tag('og:image',value)
            generate_meta_tag('og:og:image:secure_url', bundle_vars.colimage)
            generate_meta_tag('og:description', bundle_vars.colshortdesc)
            generate_meta_tag('og:url', bundle_vars.colurl)
        }
        catch (e) {

        }


        setTimeout(function () {
            if (document.querySelector('.combo_img_anchor img') != null) {
                document.querySelector('.combo_img_anchor img').addEventListener('mouseenter',
                    function (e) {
                        bundle_vars.stopImgOver = true
                        if (this.parentNode.classList.contains('inc_active') == true) {
                            let i = 0;
                            function image_hover_loop(element) {
                                if (document.querySelector('.inc_product_modal_block.active') == null) {
                                    let img_block = element.parentNode

                                    let all_images = null
                                    if (img_block != null) {
                                        let im_Block = img_block.parentNode;
                                        let all_anchor_img = document.querySelectorAll('.combo_img_list .combo_img_anchor');
                                        let image_list_hover = ""
                                        for (h = 0; h < all_anchor_img.length; h++) {
                                            if (h == 0) {
                                                if (all_anchor_img[h].getAttribute('otherimagelist') != "null" && all_anchor_img[h].getAttribute('otherimagelist') != null) {
                                                    image_list_hover = all_anchor_img[h].getAttribute('otherimagelist')
                                                }
                                            } else {
                                                if (all_anchor_img[h].getAttribute('otherimagelist') != "null" && all_anchor_img[h].getAttribute('otherimagelist') != null) {
                                                    image_list_hover = image_list_hover + "," + all_anchor_img[h].getAttribute('otherimagelist')
                                                }
                                            }
                                        }
                                        if (img_block != null && image_list_hover == "") {
                                            let all_images = img_block.getAttribute('otherImageList')
                                        } else if (img_block != null && image_list_hover != "") {
                                            let all_images = image_list_hover
                                        }
                                        let additional_img = []
                                        if (all_images != null) {
                                            let additional_img = all_images.split(',');
                                        }
                                        let get_org_img = null
                                        if (img_block != null) {
                                            let get_org_img = img_block.getAttribute('imageURL')
                                        }
                                        if (additional_img.length > 1) {
                                            if (i < additional_img.length) {
                                                if (bundle_vars.stopImgOver == true) {
                                                    if (additional_img[i] != undefined) {
                                                        img_block.querySelector('img').src = additional_img[i]
                                                        img_block.querySelector('img').setAttribute('onerror', "this.src='" + get_org_img + "'");

                                                        bundle_vars.tout = setTimeout(function () {
                                                            i++;
                                                            image_hover_loop(element);
                                                            setTimeout(function () {
                                                                if (i == additional_img.length) {
                                                                    img_block.querySelector('img').src = get_org_img
                                                                }
                                                            }, 200)
                                                        }, 500)
                                                    }

                                                } else {

                                                }
                                            }
                                        }
                                        // }, 0)
                                    }
                                }
                            }
                            let ind = 0;
                            image_hover_loop(this);
                        }
                    }
                );

                document.querySelector('.combo_img_anchor img').addEventListener('mouseleave',
                    function (e) {
                        if (this.parentNode.classList.contains('inc_active') == true) {
                            bundle_vars.stopImgOver = false
                            let element = this
                            let img_block = element.parentNode

                            let get_org_img = null
                            let all_images = null
                            if (img_block != null) {
                                let get_org_img = img_block.getAttribute('imageURL')
                                let all_images = img_block.getAttribute('otherImageList')
                            }
                            let all_anchor_img = document.querySelectorAll('.combo_img_list .combo_img_anchor');
                            let image_list_hover = ""
                            for (h = 0; h < all_anchor_img.length; h++) {
                                if (h == 0) {
                                    if (all_anchor_img[h].getAttribute('otherimagelist') != "null" && all_anchor_img[h].getAttribute('otherimagelist') != null) {
                                        image_list_hover = all_anchor_img[h].getAttribute('otherimagelist')
                                    }
                                } else {
                                    if (all_anchor_img[h].getAttribute('otherimagelist') != "null" && all_anchor_img[h].getAttribute('otherimagelist') != null) {
                                        image_list_hover = image_list_hover + "," + all_anchor_img[h].getAttribute('otherimagelist')
                                    }
                                }
                            }
                            let additional_img = []
                            if (all_images != null && image_list_hover == "") {
                                let all_images = all_images
                            } else if (img_block != null && image_list_hover != "") {
                                let all_images = image_list_hover
                            }
                            let additional_img = []
                            if (all_images != null) {
                                let additional_img = all_images.split(',');
                            }
                            // setTimeout(function(){
                            if (get_org_img != undefined && additional_img.length > 1) {
                                img_block.querySelector('img').src = get_org_img
                            }
                            i = 1000
                        }
                    }
                );
            }

            window.onclick = function (event) {
                // console.log("wid")
                if (event.target.id == "myModal" || event.target.id == "myModal1" || event.target.id == "myModal2" || event.target.id == "myModal3") {
                    let all_modal_exc = document.querySelectorAll('.exchange_del_type_modal .modal')
                    let all_modal_exc1 = document.querySelectorAll('.exchange_del_type_modal .modal1')
                    let all_modal_exc2 = document.querySelectorAll('.exchange_del_type_modal .modal2')

                    for (a = 0; a < all_modal_exc.length; a++) {
                        all_modal_exc[a].style.display = "none"
                    }
                    for (b = 0; b < all_modal_exc1.length; b++) {
                        all_modal_exc1[b].style.display = "none"
                    }
                    for (c = 0; c < all_modal_exc2.length; c++) {
                        all_modal_exc2[c].style.display = "none"
                    }
                }
            }

            if (window.innerWidth > 1200) {
                enlargezoomImage()
            }
        }, 2000)
    }
    function generate_meta_tag(prop, value) {
        let generateMeta = document.createElement('meta');
        generateMeta.setAttribute('property', '' + prop + '');
        generateMeta.setAttribute('content', '' + value + '');
        let metaplacement = document.querySelector('head')
        metaplacement.insertBefore(generateMeta, metaplacement.childNodes[4]);
        // document.getElementsByTagName('head')[0].appendChild(generateMeta);
    }

    function inc_Close(elm) {
        let inc_exchnmodal = document.querySelector('.exchange_del_type_modal')
        let inc_element = document.querySelector('#increasingly_element')
        let modal = inc_exchnmodal.querySelector('#myModal');
        modal.style.display = "none";
    }
    function inc_Close1(elm) {
        let inc_exchnmodal = document.querySelector('.exchange_del_type_modal')
        let inc_element = document.querySelector('#increasingly_element')
        let modal = inc_exchnmodal.querySelector('#myModal1');
        modal.style.display = "none";
    }
    function inc_Close2(elm) {
        let inc_exchnmodal = document.querySelector('.exchange_del_type_modal')
        let inc_element = document.querySelector('#increasingly_element')
        let modal = inc_exchnmodal.querySelector('#myModal2');
        elm.parentNode.parentNode.parentNode.style.display = "none";
    }
    function inc_Mybtn(elm) {
        let inc_exchnmodal = document.querySelector('.exchange_del_type_modal')
        let inc_element = document.querySelector('#increasingly_element')
        let modal = inc_exchnmodal.querySelector('#myModal');
        modal.style.display = "block";
    }
    function inc_Mybtn1(elm) {
        let inc_exchnmodal = document.querySelector('.exchange_del_type_modal')
        let inc_element = document.querySelector('#increasingly_element')
        let modal = inc_exchnmodal.querySelector('#myModal1');
        modal.style.display = "block";
    }
    function inc_Mybtn2(elm) {
        let inc_exchnmodal = document.querySelector('.exchange_del_type_modal')
        let inc_element = document.querySelector('#increasingly_element')
        let modal = inc_exchnmodal.querySelector('#myModal2');
        modal.style.display = "block";
    }
    function inc_Mybtn3(elm) {
        let inc_exchnmodal = document.querySelector('.exchange_del_type_modal')
        let inc_element = document.querySelector('#increasingly_element')
        let modal = inc_exchnmodal.querySelector('#myModal3');
        modal.style.display = "BLOCK";
    }

    function create_combo_prod_box(load_type, response, ic_bundle) {

        let atrr_length = 0;
        let price_length = 0;
        let res_tocheck = response;
        let total_prod_count = 3;
        if (window.innerWidth > 1200) {
            total_prod_count = 3
        } else {
            total_prod_count = 2
        }
        let ic_index = 0;
        let ic_colelction_steps_block = generate_html_tag('div', 'ic_colelction_steps_block');
        let ic_back_to_prev_collection = generate_html_tag('div', 'ic_back_to_prev_collection');
        ic_back_to_prev_collection.innerHTML = "Back"
        ic_colelction_steps_block.appendChild(ic_back_to_prev_collection)
        ic_back_to_prev_collection.addEventListener('click', function (e) {
            let elem_back = e.currentTarget;
            let popup_wrapper_active = document.querySelector('.ic_popup_module_wrapper.inc_active');
            let review_wrapper = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_block.inc_active');
            if (document.querySelector('.combo_img_anchor.inc_active') != null) {
                // document.querySelector('.combo_img_anchor.inc_active').classList.remove('inc_active')
                let image_col_src = document.querySelector('.combo_img_anchor').getAttribute('imageurl');
                document.querySelector('.combo_img_anchor img').src = image_col_src
                if (document.querySelector('.combo_img_thumbnail_block .inc_dot.inc_active') != null) {
                    document.querySelector('.combo_img_thumbnail_block .inc_dot.inc_active').classList.remove('inc_active')
                }
                if (document.querySelector('.combo_img_thumbnail li.inc_active') != null) {
                    document.querySelector('.combo_img_thumbnail li.inc_active').classList.remove('inc_active')
                }
                document.querySelector('.inc_dots_block .inc_dot').classList.add('inc_active')
            }
            if (document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product.inc_active') != null) {
                document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product.inc_active').classList.remove('inc_active')
            }
            if (document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product') != null) {
                document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product').classList.add('inc_active')
            }
            if (document.querySelector('.ic_combo_prod_wrapper') != null) {
                document.querySelector('.ic_combo_prod_wrapper').style = ""
            }
            if (window.innerWidth < 820) {
                document.querySelector('html').classList.remove('body_inc_overlay')
            }
            if (document.querySelector('.bundle_link.is-selected') != null) {
                document.querySelector('.bundle_link.is-selected').classList.remove('is-selected')
            }
            if (document.querySelector('.bundle_link') != null) {
                document.querySelector('.bundle_link').classList.add('is-selected')
            }
            let inc_element_popwrap = document.querySelector('#increasingly_element.inc_configure_active')
            let inc_element_review1 = document.querySelector('#increasingly_element.inc_review_active')
            //inc_configure_active inc_review_active
            console.log("dn")
            if (inc_element_popwrap != null && inc_element_review1 != null) {
                document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_block.inc_active').classList.remove('inc_active')
                document.querySelector('.ic_popup_module_wrapper.inc_active .ic_tab_prod_wrapper').classList.remove('inc_in_active')
                document.querySelector('#increasingly_element').classList.remove('inc_review_active');
                if (document.querySelector('.ic_popup_module_wrapper.inc_active .ic_price_div_child.inc_review_show') != null) {
                    document.querySelector('.ic_popup_module_wrapper.inc_active .ic_price_div_child.inc_review_show').classList.remove('inc_review_show');
                }
                // // jQuery("html, body").animate({ scrollTop: 0 }, "slow");

            } else if (inc_element_popwrap != null && inc_element_review1 == null) {
                document.querySelector('.ic_popup_module_wrapper.inc_active').classList.remove('inc_active')
                document.querySelector('#increasingly_element').classList.remove('inc_configure_active')
                //
                if (document.querySelector('#increasingly_element .ic_prod_details.inc_in_active') != null) {
                    document.querySelector('#increasingly_element .ic_prod_details.inc_in_active').classList.remove('inc_in_active')
                }
                // // jQuery("html, body").animate({ scrollTop: 0 }, "slow");
            }
        })
        let ic_colelction_steps_list = generate_html_tag('ul', 'ic_colelction_steps_list');
        for (l = 0; l < 3; l++) {
            let ic_colelction_steps = generate_html_tag('li');
            ic_colelction_steps.setAttribute('index', l)
            if (l == 0) {
                ic_colelction_steps.classList.add('inc_active')
                ic_colelction_steps.innerText = "Products available"
            } else if (l == 1) {
                ic_colelction_steps.innerText = "Configure"
            } else if (l == 2) {
                ic_colelction_steps.innerText = "Review"
            }
            ic_colelction_steps_list.appendChild(ic_colelction_steps)
            ic_colelction_steps.addEventListener('click', function (ev) {
                let inc_element_popwrap = document.querySelector('#increasingly_element.inc_configure_active')
                let inc_element_review1 = document.querySelector('#increasingly_element.inc_review_active')
                let elm_steps = ev.currentTarget
                if (elm_steps.getAttribute('index') == 0) {
                    if (document.querySelector('.combo_img_anchor.inc_active') != null) {
                        // document.querySelector('.combo_img_anchor.inc_active').classList.remove('inc_active')
                        let image_col_src = document.querySelector('.combo_img_anchor').getAttribute('imageurl');
                        document.querySelector('.combo_img_anchor img').src = image_col_src
                        if (document.querySelector('.combo_img_thumbnail_block .inc_dot.inc_active') != null) {
                            document.querySelector('.combo_img_thumbnail_block .inc_dot.inc_active').classList.remove('inc_active')
                        }
                        if (document.querySelector('.combo_img_thumbnail li.inc_active') != null) {
                            document.querySelector('.combo_img_thumbnail li.inc_active').classList.remove('inc_active')
                        }
                        document.querySelector('.inc_dots_block .inc_dot').classList.add('inc_active')
                    }
                    if (document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product.inc_active') != null) {
                        document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product.inc_active').classList.remove('inc_active')
                    }
                    if (document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product') != null) {
                        document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product').classList.add('inc_active')
                    }
                    if (document.querySelector('.ic_combo_prod_wrapper') != null) {
                        document.querySelector('.ic_combo_prod_wrapper').style = ""
                    }
                    if (window.innerWidth < 820) {
                        document.querySelector('html').classList.remove('body_inc_overlay')
                    }
                    if (document.querySelector('.bundle_link.is-selected') != null) {
                        document.querySelector('.bundle_link.is-selected').classList.remove('is-selected')
                    }
                    if (document.querySelector('.bundle_link') != null) {
                        document.querySelector('.bundle_link').classList.add('is-selected')
                    }
                    if (inc_element_review1 != null && inc_element_popwrap != null) {
                        document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_block.inc_active').classList.remove('inc_active')
                        document.querySelector('.ic_popup_module_wrapper.inc_active .ic_tab_prod_wrapper').classList.remove('inc_in_active')
                        document.querySelector('#increasingly_element').classList.remove('inc_review_active')
                        if (document.querySelector('.ic_popup_module_wrapper.inc_active .ic_price_div_child.inc_review_show') != null) {
                            document.querySelector('.ic_popup_module_wrapper.inc_active .ic_price_div_child.inc_review_show').classList.remove('inc_review_show');
                        }
                        document.querySelector('.ic_popup_module_wrapper.inc_active').classList.remove('inc_active')
                        document.querySelector('#increasingly_element').classList.remove('inc_configure_active')
                        if (document.querySelector('#increasingly_element .ic_prod_details.inc_in_active') != null) {
                            document.querySelector('#increasingly_element .ic_prod_details.inc_in_active').classList.remove('inc_in_active')
                        }
                    } else if (inc_element_review1 != null || inc_element_popwrap != null) {
                        document.querySelector('.ic_popup_module_wrapper.inc_active').classList.remove('inc_active')
                        document.querySelector('#increasingly_element').classList.remove('inc_configure_active')
                        if (document.querySelector('#increasingly_element .ic_prod_details.inc_in_active') != null) {
                            document.querySelector('#increasingly_element .ic_prod_details.inc_in_active').classList.remove('inc_in_active')
                        }
                    }
                } else if (elm_steps.getAttribute('index') == 1) {
                    if (document.querySelector('.combo_img_anchor.inc_active') != null) {
                        // document.querySelector('.combo_img_anchor.inc_active').classList.remove('inc_active')
                        let image_col_src = document.querySelector('.combo_img_anchor').getAttribute('imageurl');
                        document.querySelector('.combo_img_anchor img').src = image_col_src
                        if (document.querySelector('.combo_img_thumbnail_block .inc_dot.inc_active') != null) {
                            document.querySelector('.combo_img_thumbnail_block .inc_dot.inc_active').classList.remove('inc_active')
                        }
                        if (document.querySelector('.combo_img_thumbnail li.inc_active') != null) {
                            document.querySelector('.combo_img_thumbnail li.inc_active').classList.remove('inc_active')
                        }
                        document.querySelector('.inc_dots_block .inc_dot').classList.add('inc_active')
                    }
                    if (document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product.inc_active') != null) {
                        document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product.inc_active').classList.remove('inc_active')
                    }
                    if (document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product') != null) {
                        document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product').classList.add('inc_active')
                    }
                    if (document.querySelector('.ic_combo_prod_wrapper') != null) {
                        document.querySelector('.ic_combo_prod_wrapper').style = ""
                    }
                    if (window.innerWidth < 820) {
                        document.querySelector('html').classList.remove('body_inc_overlay')
                    }
                    if (document.querySelector('.bundle_link.is-selected') != null) {
                        document.querySelector('.bundle_link.is-selected').classList.remove('is-selected')
                    }
                    if (document.querySelector('.bundle_link') != null) {
                        document.querySelector('.bundle_link').classList.add('is-selected')
                    }
                    if (inc_element_review1 != null && inc_element_popwrap != null) {
                        document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_block.inc_active').classList.remove('inc_active')
                        document.querySelector('.ic_popup_module_wrapper.inc_active .ic_tab_prod_wrapper').classList.remove('inc_in_active')
                        document.querySelector('#increasingly_element').classList.remove('inc_review_active')
                        if (document.querySelector('.ic_popup_module_wrapper.inc_active .ic_price_div_child.inc_review_show') != null) {
                            document.querySelector('.ic_popup_module_wrapper.inc_active .ic_price_div_child.inc_review_show').classList.remove('inc_review_show');
                        }
                        // // jQuery("html, body").animate({ scrollTop: 0 }, "slow");
                    }
                } else if (elm_steps.getAttribute('index') == 2) {

                }
                // console.log('cli')
            })
        }
        ic_colelction_steps_block.appendChild(ic_colelction_steps_list)
        let ic_colelction_product_name_block = generate_html_tag('div', 'ic_colelction_product_name_block');
        ic_colelction_steps_block.appendChild(ic_colelction_product_name_block)

        ic_bundle.appendChild(ic_colelction_steps_block)
        let ic_product_bundling = generate_html_tag('div', 'ic_product_bundling');
        ic_product_bundling.classList.add('combo_bundle')
        ic_product_bundling.setAttribute('id', 'combo_bundle')
        ic_product_bundling.classList.add('inc_active')
        ic_product_bundling.setAttribute('ic_index', ic_index)

        // debugger
        let collection_count = 0;

        for (let i = 0; i < res_tocheck.ComboSetCount; i++) {
            if (i == 0) {
                let prod_count = 3
                if (window.innerWidth > 1200) {
                    prod_count = 3
                } else {
                    prod_count = 2
                }
                bundle_vars.colimage = res_tocheck.ComboSet[0].ComboImageURL
                bundle_vars.coltitle = res_tocheck.ComboSet[0].ComboTitle
                bundle_vars.colurl = res_tocheck.ComboSet[0].ComboProductURL
                bundle_vars.colshortdesc = res_tocheck.ComboSet[0].Bundles[0].Products[0].ShortDescription

                bundle_vars.plp_added_id = res_tocheck.ComboSet[0].Bundles[0].Products[0].ProductId
                let ic_show_details = false

                let combo_created_prod_list = []
                let pr = 0;
                let sp = 0;

                let ic_prod = generate_html_tag('div', 'ic_product');

                ic_product_bundling.classList.add('inc_combo' + res_tocheck.ComboSetCount)
                ic_prod.classList.add('combo_ic_product')
                ic_prod.classList.add('inc_' + i)
                let ic_combo_wrapper = generate_html_tag('div', 'ic_combo_wrapper');
                let ic_combo_text = generate_html_tag('span', 'ic_combo_text');

                ic_combo_wrapper.appendChild(ic_combo_text)
                // ic_prod.appendChild(ic_combo_wrapper)
                let ic_prod_details = generate_html_tag('div', 'ic_prod_details');
                let prod_single_container = generate_html_tag('div', 'prod_first_container'); //prod_single_container
                let prod_combo_container = generate_html_tag('div', 'prod_second_container'); //prod_combo_container
                prod_combo_container.classList.add('ic_image_title_wrap')
                prod_single_container.classList.add('ic_image_title_wrap')
                let combo_price_wrapper = generate_html_tag('div', 'combo_price_wrapper');
                let prod_image_wrap = generate_html_tag('div', 'prod_image_wrap');

                let inc_hover_wrapper = generate_html_tag('div', 'inc_hover_wrapper');
                prod_image_wrap.appendChild(inc_hover_wrapper)
                prod_image_wrap.setAttribute('comboId', res_tocheck.ComboSet[i].ComboId)
                let combo_img_block = generate_html_tag('div', 'combo_img_block')
                prod_single_container.appendChild(prod_image_wrap)
                inc_hover_wrapper.appendChild(combo_img_block)
                let combo_img_list = generate_html_tag('div', 'combo_img_list');
                combo_img_block.appendChild(combo_img_list)
                let inc_info_block = generate_html_tag('div', 'inc_info_block');
                inc_hover_wrapper.appendChild(inc_info_block)
                let ic_collection_header_block = generate_html_tag('div', 'ic_collection_header_block');
                let ic_collection_header_block_text = generate_html_tag('div', 'ic_collection_header_block_text');
                ic_collection_header_block.appendChild(ic_collection_header_block_text)
                let ic_collection_header_block_img = generate_html_tag('div', 'ic_collection_header_block_img');
                ic_collection_header_block.appendChild(ic_collection_header_block_img)
                inc_info_block.appendChild(ic_collection_header_block);
                let combo_product_available_title = generate_html_tag('div', 'combo_product_available_header');
                let combo_product_title = generate_html_tag('span', 'combo_product_title');
                combo_product_title.innerText = "Products available in bundle";
                combo_product_available_title.appendChild(combo_product_title)
                inc_info_block.appendChild(combo_product_available_title);
                let combo_product_block = generate_html_tag('div', 'combo_product_block');
                inc_info_block.appendChild(combo_product_block);
                let prod_combo_count = 0
                let ic_collection_header_block_title = "";
                let combo_img_thumbnail_block = generate_html_tag('div', 'combo_img_thumbnail_block');
                let inc_dots_block = generate_html_tag('div', 'inc_dots_block');
                combo_img_thumbnail_block.appendChild(inc_dots_block)
                collection_thumbnail_slider(combo_img_thumbnail_block)
                let combo_img_thumbnail = generate_html_tag('ul', 'combo_img_thumbnail');
                combo_img_thumbnail_block.appendChild(combo_img_thumbnail)


                for (cb = 0; cb < res_tocheck.ComboSet[i].BundleCount; cb++) {

                    for (let j = 0; j < res_tocheck.ComboSet[i].Bundles[cb].Products.length; j++) {
                        if (isBase64(res_tocheck.ComboSet[i].Bundles[cb].Description) == true) {
                            res_tocheck.ComboSet[i].Bundles[cb].Description = Base64.decode(res_tocheck.ComboSet[i].Bundles[cb].Description)
                        }
                        if (isBase64(res_tocheck.ComboSet[i].Bundles[cb].Field1) == true) {
                            res_tocheck.ComboSet[i].Bundles[cb].Field1 = Base64.decode(res_tocheck.ComboSet[i].Bundles[cb].Field1)
                        }
                        if (combo_created_prod_list.indexOf(res_tocheck.ComboSet[i].Bundles[cb].Products[j].ProductId) == -1) {
                            prod_combo_count++
                            // if (prod_combo_count < 5) {
                            combo_created_prod_list.push(res_tocheck.ComboSet[i].Bundles[cb].Products[j].ProductId)
                            ic_prod.setAttribute('comboId', res_tocheck.ComboSet[i].ComboId)
                            res_tocheck.ComboSet[i].Bundles[cb].Products[j].ComboId = res_tocheck.ComboSet[i].ComboId
                            if (prod_combo_count == 1) {
                                let combo_img_anchor = generate_html_tag('div', 'combo_img_anchor');
                                combo_img_anchor.classList.add('inc_active');
                                combo_img_list.appendChild(combo_img_anchor)
                                let combo_img = generate_html_tag('img');
                                combo_img.setAttribute('src', res_tocheck.ComboSet[i].ComboImageURL)
                                combo_img_anchor.setAttribute('imageURL', res_tocheck.ComboSet[i].ComboImageURL);
                                combo_img_anchor.appendChild(combo_img)
                                combo_img_anchor.setAttribute('index_image', prod_combo_count);
                                if (res_tocheck.ComboSet[i].Bundles[cb].Products[j].OtherImageList != null) {
                                    combo_img_anchor.setAttribute('otherImageList', res_tocheck.ComboSet[i].Bundles[cb].Products[j].OtherImageList);
                                }
                            } else {
                                let other_img_elm = combo_img_list.querySelector('.combo_img_anchor')
                                if (other_img_elm != null) {
                                    prev_other_img = other_img_elm.getAttribute('otherImageList');
                                    if (prev_other_img != null && prev_other_img != "null" && res_tocheck.ComboSet[i].Bundles[cb].Products[j].OtherImageList != null) {
                                        let new_other_img = prev_other_img + "," + res_tocheck.ComboSet[i].Bundles[cb].Products[j].OtherImageList;
                                    } else if (prev_other_img != null && res_tocheck.ComboSet[i].Bundles[cb].Products[j].OtherImageList == null) {
                                        let new_other_img = prev_other_img;
                                    } else if (prev_other_img == null && res_tocheck.ComboSet[i].Bundles[cb].Products[j].OtherImageList != null) {
                                        let new_other_img = res_tocheck.ComboSet[i].Bundles[cb].Products[j].OtherImageList;
                                    }
                                    other_img_elm.setAttribute('otherImageList', new_other_img);
                                }

                            }

                            let combo_thumbnail = generate_html_tag('li');
                            combo_thumbnail.setAttribute('index', prod_combo_count)

                            let thumbnailimg = generate_html_tag('img');
                            combo_thumbnail.appendChild(thumbnailimg)
                            thumbnailimg.setAttribute('src', res_tocheck.ComboSet[i].Bundles[cb].Products[j].ImageURL)
                            combo_img_thumbnail.appendChild(combo_thumbnail)

                            if (j == 0 && prod_combo_count == 1) {
                                combo_img_block.appendChild(combo_img_thumbnail_block)
                            }
                            combo_thumbnail.addEventListener('click', function (ev) {
                                console.log("combo_thumbnail")
                                let elm = ev.currentTarget
                                let ind_pr = elm.getAttribute('index');
                                // if(ind_pr == "1"){
                                //     let img_src=elm.querySelector('img').src;
                                // }
                                if (document.querySelector('.combo_img_list .combo_img_anchor') != null) {
                                    let img_src = elm.querySelector('img').src
                                    let act_prd = document.querySelector('.combo_img_list .combo_img_anchor')
                                    act_prd.querySelector('img').setAttribute('src', img_src)
                                }

                                if (document.querySelector('.inc_dots_block .inc_dot.inc_active') != null) {
                                    document.querySelector('.inc_dots_block .inc_dot.inc_active').classList.remove('inc_active')
                                }
                                if (document.querySelector('.inc_dots_block .inc_dot[index="' + ind_pr + '"]') != null) {
                                    document.querySelector('.inc_dots_block .inc_dot[index="' + ind_pr + '"]').classList.add('inc_active')
                                }
                                if (elm.parentNode.parentNode.querySelector('.combo_img_thumbnail li.inc_active') != null) {
                                    elm.parentNode.parentNode.querySelector('.combo_img_thumbnail li.inc_active').classList.remove('inc_active');
                                }
                                elm.classList.add('inc_active')
                            });

                            let checkout_button_clone = combo_img_anchor.cloneNode(combo_img_anchor);
                            ic_collection_header_block_img.appendChild(checkout_button_clone)

                            if (prod_combo_count == 1) {
                                ic_collection_header_block_title = res_tocheck.ComboSet[i].Bundles[cb].Products[j].ProductName
                            } else {
                                ic_collection_header_block_title = ic_collection_header_block_title + " + " + res_tocheck.ComboSet[i].Bundles[cb].Products[j].ProductName
                            }
                            let combo_product_item = generate_html_tag('div', 'combo_product_item');
                            combo_product_block.appendChild(combo_product_item);
                            combo_product_item.style.cursor = "pointer"

                            let combo_product_img_block = generate_html_tag('div', 'combo_product_img_block');
                            let combo_pro_img = generate_html_tag('img');
                            combo_pro_img.setAttribute('src', res_tocheck.ComboSet[i].Bundles[cb].Products[j].ImageURL)
                            combo_product_img_block.appendChild(combo_pro_img)
                            combo_product_item.appendChild(combo_product_img_block)

                            let combo_product_info_block = generate_html_tag('div', 'combo_product_info_block');
                            combo_product_item.appendChild(combo_product_info_block);
                            let combo_product_name_block = generate_html_tag('div', 'combo_product_name_block');
                            let combo_pro_name = generate_html_tag('span', 'combo_pro_name');
                            combo_pro_name.innerText = res_tocheck.ComboSet[i].Bundles[cb].Products[j].ProductName;
                            combo_product_name_block.appendChild(combo_pro_name);
                            let combo_pro_manuf_name = generate_html_tag('span', 'combo_pro_manuf_name');
                            combo_pro_manuf_name.innerText = res_tocheck.ComboSet[i].Bundles[cb].Products[j].Manufacturer;
                            combo_product_name_block.appendChild(combo_pro_manuf_name)
                            combo_product_info_block.appendChild(combo_product_name_block);

                            let combo_product_price_block = generate_html_tag('div', 'combo_product_price_block');

                            let combo_product_price_wrapper = generate_html_tag('div', 'combo_product_price_wrapper');
                            //if (special_price != null && (+special_price < +price)) {
                            if (res_tocheck.ComboSet[i].Bundles[cb].Products[j].SpecialPrice != 0 && res_tocheck.ComboSet[i].Bundles[cb].Products[j].SpecialPrice != null && (+res_tocheck.ComboSet[i].Bundles[cb].Products[j].SpecialPrice < +res_tocheck.ComboSet[i].Bundles[cb].Products[j].Price)) {
                                combo_product_price_wrapper.classList.add('special_price_avail')
                                let combo_product_inc_active_prc = generate_html_tag('div', 'combo_product_inc_active_prc');
                                let combo_product_regular_prc = generate_html_tag('div', 'combo_product_regular_prc');
                                combo_product_inc_active_prc.innerText = formatter.format(res_tocheck.ComboSet[i].Bundles[cb].Products[j].SpecialPrice);
                                combo_product_regular_prc.innerText = formatter.format(res_tocheck.ComboSet[i].Bundles[cb].Products[j].Price)
                                combo_product_price_wrapper.appendChild(combo_product_inc_active_prc);
                                combo_product_price_wrapper.appendChild(combo_product_regular_prc);

                            } else {
                                let combo_product_inc_active_prc = generate_html_tag('div', 'combo_product_inc_active_prc');
                                let combo_product_regular_prc = generate_html_tag('div', 'combo_product_regular_prc');
                                combo_product_regular_prc.innerText = formatter.format(res_tocheck.ComboSet[i].Bundles[cb].Products[j].Price)
                                combo_product_price_wrapper.appendChild(combo_product_inc_active_prc);
                                combo_product_price_wrapper.appendChild(combo_product_regular_prc);
                            }
                            combo_product_price_block.appendChild(combo_product_price_wrapper)
                            if ((res_tocheck.ComboSet[i].Bundles[cb].Products[j].ProductStatus == 1 && res_tocheck.ComboSet[i].Bundles[cb].Products[j].Quantity == 0) || (res_tocheck.ComboSet[i].Bundles[cb].Products[j].ProductStatus == 3)) {
                                let combo_product_price_sold_out = generate_html_tag('div', 'combo_product_price_sold_out');
                                combo_product_price_sold_out.innerText = "Sold Out"
                                combo_product_price_block.appendChild(combo_product_price_sold_out)
                                combo_product_price_wrapper.style.display = "none"
                                combo_product_price_sold_out.setAttribute('style', 'margin-right:5px;')
                                combo_product_item.setAttribute('style', 'pointer-events: none;opacity: 0.7;')
                            }
                            let combo_product_rating = generate_html_tag('div', 'combo_product_rating');
                            combo_product_price_block.appendChild(combo_product_rating);
                            get_product_ratings(res_tocheck.ComboSet[i].Bundles[cb].Products[j].Field3, combo_product_rating)
                            combo_product_info_block.appendChild(combo_product_price_block);
                            let combo_product_moreinfo = generate_html_tag('div', 'combo_product_moreinfo');
                            combo_product_moreinfo.innerText = "More Info"
                            // combo_product_moreinfo.setAttribute('onClick', 'build_bundle_toggle(null,null,\'' + res_tocheck.ComboSet[i].ComboId + '\',this)');
                            let pr_id = res_tocheck.ComboSet[i].Bundles[cb].Products[j].ProductId
                            combo_product_item.setAttribute('onClick', 'build_bundle_toggle(\'' + pr_id + '\',null,\'' + res_tocheck.ComboSet[i].ComboId + '\',this)');

                            combo_product_info_block.appendChild(combo_product_moreinfo);


                            if (sp != 0 && +res_tocheck.ComboSet[i].Bundles[cb].Products[j].SpecialPrice != 0) {
                                pr += +res_tocheck.ComboSet[i].Bundles[cb].Products[j].Price;
                                sp += +res_tocheck.ComboSet[i].Bundles[cb].Products[j].SpecialPrice;
                            } else if (sp != 0 && +res_tocheck.ComboSet[i].Bundles[cb].Products[j].SpecialPrice == 0) {
                                pr += +res_tocheck.ComboSet[i].Bundles[cb].Products[j].Price;
                                sp += +res_tocheck.ComboSet[i].Bundles[cb].Products[j].Price;
                            } else if (sp == 0 && +res_tocheck.ComboSet[i].Bundles[cb].Products[j].SpecialPrice == 0) {
                                pr += +res_tocheck.ComboSet[i].Bundles[cb].Products[j].Price;
                                sp += +res_tocheck.ComboSet[i].Bundles[cb].Products[j].Price;
                            } else {
                                pr += +res_tocheck.ComboSet[i].Bundles[cb].Products[j].Price;
                                sp += +res_tocheck.ComboSet[i].Bundles[cb].Products[j].SpecialPrice;
                            }
                            let otherIMGlist = res_tocheck.ComboSet[i].Bundles[cb].Products[j].OtherImageList;
                            if (prod_combo_count == 1) {
                                let inc_dot_main = generate_html_tag('div', 'inc_dot');
                                inc_dot_main.classList.add('inc_active')
                                inc_dot_main.setAttribute('index', 0)
                                inc_dot_main.setAttribute('main_img', res_tocheck.ComboSet[i].ComboImageURL)
                                inc_dots_block.appendChild(inc_dot_main)
                                inc_dot_main.addEventListener('click', function (ev) {
                                    let elm = ev.currentTarget;
                                    let main_img = elm.getAttribute('main_img');
                                    let other_image = elm.getAttribute('img_src');
                                    if (document.querySelector('.combo_img_list .combo_img_anchor.inc_active') != null) {
                                        let image_wrap = document.querySelector('.combo_img_list .combo_img_anchor.inc_active');
                                        if (image_wrap != null) {
                                            if (elm.parentNode.querySelector('.inc_dot.inc_active') != null) {
                                                elm.parentNode.querySelector('.inc_dot.inc_active').classList.remove('inc_active')
                                            }
                                            elm.classList.add('inc_active')
                                            if (other_image != undefined && other_image != "" && other_image != "null") {
                                                image_wrap.querySelector('img').src = other_image
                                            } else {
                                                image_wrap.querySelector('img').src = main_img
                                            }
                                            let index_of_dot = elm.getAttribute('index')
                                            if (index_of_dot != null && index_of_dot != "null") {
                                                if (document.querySelector('.combo_img_thumbnail li[index="' + index_of_dot + '"]') != null) {
                                                    document.querySelector('.combo_img_thumbnail li[index="' + index_of_dot + '"]').click();
                                                }
                                            }
                                        }

                                    }
                                    console.log("inc_dot")
                                });
                            }
                            let inc_dot = generate_html_tag('div', 'inc_dot');
                            inc_dot.setAttribute('index', prod_combo_count)
                            inc_dot.setAttribute('main_img', res_tocheck.ComboSet[i].Bundles[cb].Products[j].ImageURL)
                            inc_dots_block.appendChild(inc_dot)
                            inc_dot.addEventListener('click', function (ev) {
                                let elm = ev.currentTarget;
                                let main_img = elm.getAttribute('main_img');
                                let other_image = elm.getAttribute('img_src');
                                if (document.querySelector('.combo_img_list .combo_img_anchor.inc_active') != null) {
                                    let image_wrap = document.querySelector('.combo_img_list .combo_img_anchor.inc_active');
                                    if (image_wrap != null) {
                                        if (elm.parentNode.querySelector('.inc_dot.inc_active') != null) {
                                            elm.parentNode.querySelector('.inc_dot.inc_active').classList.remove('inc_active')
                                        }
                                        elm.classList.add('inc_active')
                                        if (other_image != undefined && other_image != "" && other_image != "null") {
                                            image_wrap.querySelector('img').src = other_image
                                        } else {
                                            image_wrap.querySelector('img').src = main_img
                                        }
                                        let index_of_dot = elm.getAttribute('index')
                                        if (index_of_dot != null && index_of_dot != "null") {
                                            if (document.querySelector('.combo_img_thumbnail li[index="' + index_of_dot + '"]') != null) {
                                                document.querySelector('.combo_img_thumbnail li[index="' + index_of_dot + '"]').click();
                                            }
                                        }
                                    }

                                }
                                console.log("inc_dot")
                            });
                            if (otherIMGlist != null) {
                                for (ot = 0; ot < otherIMGlist.length; ot++) {
                                    let inc_dot1 = generate_html_tag('div', 'inc_dot');
                                    inc_dot1.setAttribute('main_img', res_tocheck.ComboSet[i].Bundles[cb].Products[j].ImageURL)
                                    inc_dot1.setAttribute('img_src', otherIMGlist[ot])
                                    inc_dots_block.appendChild(inc_dot1)
                                    inc_dot1.addEventListener('click', function (e) {
                                        console.log("inc_dot1")
                                        let elm = e.currentTarget;
                                        let main_img = elm.getAttribute('main_img');
                                        let other_image = elm.getAttribute('img_src');
                                        if (document.querySelector('.combo_img_list .combo_img_anchor.inc_active') != null) {
                                            let image_wrap = document.querySelector('.combo_img_list .combo_img_anchor.inc_active');
                                            if (image_wrap != null) {
                                                if (elm.parentNode.querySelector('.inc_dot.inc_active') != null) {
                                                    elm.parentNode.querySelector('.inc_dot.inc_active').classList.remove('inc_active')
                                                }
                                                elm.classList.add('inc_active')
                                                if (other_image != undefined && other_image != "" && other_image != "null") {
                                                    image_wrap.querySelector('img').src = other_image
                                                } else {
                                                    image_wrap.querySelector('img').src = main_img
                                                }
                                            }

                                        }

                                    });
                                }
                            }

                            // }
                        }
                    }

                }
                let combo_class = "collection_product" + prod_combo_count
                combo_img_list.classList.add(combo_class)
                combo_product_block.classList.add(combo_class)
                console.log("prod_combo_count " + prod_combo_count)
                // inc_info_block.appendChild(combo_price_wrapper)
                prod_single_container.querySelector('.inc_info_block').appendChild(combo_price_wrapper)
                ic_prod_details.appendChild(prod_single_container)
                // ic_prod_details.appendChild(prod_combo_container)
                ic_prod.appendChild(ic_prod_details)

                // let bundle_price_wrap = generate_html_tag('div', 'bundle_price_wrap');
                let bundle_qty_wrap = generate_html_tag('div', 'bundle_qty_wrap');
                let ic_price_div = generate_html_tag('div', 'price_bind');
                let ic_price_text = generate_html_tag('div', 'ic_price_text');
                ic_price_text.textContent = "Total bundle price:"
                ic_price_div.appendChild(ic_price_text)
                let ic_span_price_title = generate_html_tag('span', 'inc_price');
                ic_span_price_title.classList.add('inc_standard_price')
                ic_span_price_title.innerHTML = formatter.format(pr)

                if (pr != sp && sp != 0) {
                    let ic_special_price_title = generate_html_tag('span', 'inc_special_price');
                    ic_special_price_title.innerHTML = formatter.format(sp)
                    ic_span_price_title.classList.add("old");
                    ic_special_price_title.classList.add('inc_standard_price')
                    let ic_save_price = generate_html_tag('span', 'ic_save_price');
                    ic_save_price.textContent = "Save $" + (parseFloat(+pr - +sp).toFixed(2))
                    ic_price_div.appendChild(ic_save_price)
                    ic_price_div.appendChild(ic_special_price_title)
                    ic_price_div.appendChild(ic_span_price_title)

                } else {
                    ic_price_div.appendChild(ic_span_price_title)
                }
                let counter_div = generate_html_tag('div', 'counter_div');
                // get_product_quantity_box(null, null, bundle_qty_wrap, counter_div, "collection", "combo");
                bundle_qty_wrap.appendChild(ic_price_div)
                combo_price_wrapper.appendChild(bundle_qty_wrap)

                let add_bundle_btn_block = generate_html_tag('div', 'add_bundle_btn_block');
                combo_price_wrapper.appendChild(add_bundle_btn_block)
                // let add_bundle_btn_configure = generate_html_tag('button', 'add_bundle_btn_configure');
                // add_bundle_btn_configure.innerText = "Configure"
                // add_bundle_btn_configure.setAttribute('onClick', 'build_bundle_toggle(null,null,\'' + res_tocheck.ComboSet[i].ComboId + '\',this)');
                // add_bundle_btn_block.appendChild(add_bundle_btn_configure)
                let add_bundle_btn_wrap = generate_html_tag('div', 'add_bundle_btn_wrap');
                let pr_id = res_tocheck.ComboSet[i].Bundles[0].Products[0].ProductId
                add_bundle_btn_wrap.setAttribute('onClick', 'build_bundle_toggle(\'' + pr_id + '\',null,\'' + res_tocheck.ComboSet[i].ComboId + '\',this)');
                let add_bundle_btn = generate_html_tag('span', 'add_bundle_btn');
                add_bundle_btn.textContent = "Add to Cart"
                add_bundle_btn_wrap.appendChild(add_bundle_btn)
                add_bundle_btn_block.appendChild(add_bundle_btn_wrap)
                create_popup_combo_details(res_tocheck.ComboSet[i], load_type, null, null, null, null, null, ic_prod, combo_created_prod_list)
                ic_collection_header_block_text.innerText = res_tocheck.ComboSet[i].ComboTitle
                ic_collection_header_block_text.setAttribute('title', res_tocheck.ComboSet[i].ComboTitle)
                if (ic_product_bundling != undefined) {
                    ic_product_bundling.appendChild(ic_prod);
                    ic_bundle.appendChild(ic_product_bundling)
                }
                let collection_name_clone = ic_collection_header_block_text.cloneNode(ic_collection_header_block_text);
                ic_colelction_product_name_block.appendChild(collection_name_clone)
                //client delivery checkout icons
                let del_check_pay_icon_html = '<div class="icon-popup-main"> <ul> <li><p><img style="width:30px" src="https://cdn.shopify.com/s/files/1/1257/2223/files/np.png?795211247132847107"> </p><p> 100% Secure <br>Checkout </p></li><li><a id="myBtn" onClick="inc_Mybtn(this)"><p><img src="https://cdn.shopify.com/s/files/1/1257/2223/files/t1.png?2877970356627229767"></p><p>Free US Delivery<br>Over $200</p></a></li><li><a id="myBtn1" onClick="inc_Mybtn1(this)"><p><img src="https://cdn.shopify.com/s/files/1/1257/2223/files/ARROW.png?12800221163936710486"></p><p>FREE exchanges<br>on all orders</p></a></li><li><a id="myBtn2" onClick="inc_Mybtn2(this)"><p><img src="//cdn.shopify.com/s/files/1/1715/4903/t/23/assets/i4.png?v=15430394751903420034"></p><p>We Price Match</p></a></li><li><a id="myBtn3" onClick="inc_Mybtn3(this)"><p><i class="fas fa-dollar-sign" style="font-size: 28px;"></i></p><p>Pay Later</p></a></li></ul></div>';
                let inc_check_del_icons = generate_html_tag('div', 'inc_check_del_icons');
                inc_check_del_icons.innerHTML = del_check_pay_icon_html;
                inc_info_block.appendChild(inc_check_del_icons)

                let product_data_desc = res_tocheck.ComboSet[0].Bundles[0].Products[0]
                //decription specification block
                let inc_desciption_list_block = generate_html_tag('div', 'inc_desciption_list_block');
                let inc_desciption_list = generate_html_tag('ul', 'inc_desciption_list');
                inc_desciption_list_block.appendChild(inc_desciption_list)
                inc_info_block.appendChild(inc_desciption_list_block)
                //description tabs
                if (product_data_desc.Description != null && product_data_desc.Description != "") {
                    let inc_description_tab = generate_html_tag('li');
                    inc_description_tab.classList.add('inc_active')
                    inc_description_tab.setAttribute('id', "list0")
                    inc_description_tab.setAttribute('ind', "0")
                    inc_description_tab.setAttribute('onClick', "desc_spec_tab(this)")
                    inc_description_tab.innerText = "Description"
                    inc_desciption_list.appendChild(inc_description_tab)
                }
                if (product_data_desc.Field1 != null && product_data_desc.Field1 != "") {
                    let inc_description_tab1 = generate_html_tag('li');
                    if (product_data_desc.Description == "") {
                        inc_description_tab1.classList.add('inc_active')
                    }
                    inc_description_tab1.setAttribute('id', "list1")
                    inc_description_tab1.setAttribute('ind', "1")
                    inc_description_tab1.innerText = "Spec"
                    inc_desciption_list.appendChild(inc_description_tab1)
                    inc_description_tab1.setAttribute('onClick', "desc_spec_tab(this)")
                }
                if (product_data_desc.Field2 != null && product_data_desc.Field2 != "") {
                    let inc_description_tab2 = generate_html_tag('li');
                    if (product_data_desc.Description == "" && product_data_desc.Field1 == "") {
                        inc_description_tab2.classList.add('inc_active')
                    }
                    inc_description_tab2.setAttribute('id', "list2")
                    inc_description_tab2.setAttribute('ind', "2")
                    inc_description_tab2.innerText = "Delivery"
                    inc_desciption_list.appendChild(inc_description_tab2)
                    inc_description_tab2.setAttribute('onClick', "desc_spec_tab(this)")
                }
                // if(product_data_desc.Field3 != null && product_data_desc.Field3 != ""){
                //     let inc_description_tab3 = generate_html_tag('li');
                //     inc_description_tab3.setAttribute('id',"list3")
                //     inc_description_tab3.setAttribute('ind',"3")
                //     inc_description_tab3.innerText = "Reviews"
                //     inc_desciption_list.appendChild(inc_description_tab3)
                //     inc_description_tab3.setAttribute('onClick',"desc_spec_tab(this)")
                // }
                if (isBase64(product_data_desc.Description) == true) {
                    product_data_desc.Description = Base64.decode(product_data_desc.Description)
                }
                if (isBase64(product_data_desc.Field1) == true) {
                    product_data_desc.Field1 = Base64.decode(product_data_desc.Field1)
                }
                //description tab details
                product_data_desc.Description = product_data_desc.Description.replace('http://', 'https://').replace('http://', 'https://').replace('http://', 'https://');

                product_data_desc.Description = product_data_desc.Description.replace('www.scandibon.co.uk', 'www.scandiborn.com').replace('www.scandibon.co.uk', 'www.scandiborn.com');

                if (product_data_desc.Description != null && product_data_desc.Description != "") {
                    let inc_description_details = generate_html_tag('div', 'description_details');
                    inc_description_details.classList.add('inc_active')
                    inc_description_details.setAttribute('id', "list_details0")
                    inc_description_details.setAttribute('ind', "0")
                    let inc_description_text = generate_html_tag('div', 'inc_description_text');
                    inc_description_details.appendChild(inc_description_text)
                    inc_description_text.innerHTML = product_data_desc.Description
                    inc_desciption_list_block.appendChild(inc_description_details)
                }
                if (product_data_desc.Field1 != null && product_data_desc.Field1 != "") {
                    let inc_description_details1 = generate_html_tag('div', 'description_details');
                    if (product_data_desc.Description == "") {
                        inc_description_details1.classList.add('inc_active')
                    }
                    inc_description_details1.setAttribute('id', "list_details1")
                    inc_description_details1.setAttribute('ind', "1")
                    let inc_description_text1 = generate_html_tag('div', 'inc_description_text');
                    inc_description_details1.appendChild(inc_description_text1)
                    inc_description_text1.innerHTML = product_data_desc.Field1
                    inc_desciption_list_block.appendChild(inc_description_details1)
                }
                if (product_data_desc.Field2 != null && product_data_desc.Field2 != "") {
                    let inc_description_details2 = generate_html_tag('div', 'description_details');
                    if (product_data_desc.Description == "" && product_data_desc.Field1 == "") {
                        inc_description_details2.classList.add('inc_active')
                    }
                    inc_description_details2.setAttribute('id', "list_details2")
                    inc_description_details2.setAttribute('ind', "2")
                    let inc_description_text2 = generate_html_tag('div', 'inc_description_text');
                    inc_description_details2.appendChild(inc_description_text2)
                    inc_description_text2.innerHTML = product_data_desc.Field2
                    inc_desciption_list_block.appendChild(inc_description_details2)
                }
                // if(product_data_desc.Field2 != null && product_data_desc.Field2 != ""){
                //     let inc_description_details3 = generate_html_tag('div','description_details');
                //     inc_description_details3.setAttribute('id',"list_details3")
                //     inc_description_details3.setAttribute('ind',"3")
                //     let inc_description_text3 = generate_html_tag('div','inc_description_text');
                //     inc_description_details3.appendChild(inc_description_text3)
                //     inc_description_text3.innerHTML = product_data_desc.Field3
                //     inc_desciption_list_block.appendChild(inc_description_details3)
                // }
            }
        }

    }

    function create_popup_combo_details(response, load_type, id1, id2, plp_elem, source, type, ic_product, combo_created_prod_list) {
        //to remove old block
        if (document.querySelector('#ic_bundle_wrapper') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('#ic_bundle_wrapper'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
        if (document.querySelector('.exchange_del_type_modal') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.exchange_del_type_modal'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
        bundle_vars.create_prod_combo++;
        let dup_combo_p_id = []
        let ic_popup_module_wrapper = generate_html_tag('div', 'ic_popup_module_wrapper');
        let ic_popup_module = generate_html_tag('div', 'ic_popup_module');
        ic_popup_module_wrapper.appendChild(ic_popup_module)
        if (ic_product != null) {
            ic_product.appendChild(ic_popup_module_wrapper);
        }

        let pr_c = 0;
        let sp_c = 0;
        if (response != undefined) {

            let bundle_count = response.Bundles.length;
            let ic_bundle_wrap = generate_html_tag('div', '');
            ic_bundle_wrap.setAttribute('id', 'ic_bundle_wrapper');
            let ic_header_wrap = generate_html_tag('div', 'ic_header_wrapper');
            let closeMe = generate_html_tag('span', 'inc_popup_close');
            closeMe.textContent = "Close"
            closeMe.setAttribute("onclick", "close_modal_combo(this)");
            ic_header_wrap.appendChild(closeMe);
            get_bundle_title(load_type, ic_header_wrap, "combo");
            let ic_tab_prod_wrap = generate_html_tag('div', 'ic_tab_prod_wrap');

            let ic_prod_wrapper = generate_html_tag('div', 'ic_product_wrapper');
            let ic_bundle = generate_html_tag('div', 'ic_bundle');
            let ic_product_bundling = generate_html_tag('div', 'ic_product_bundling');

            ic_product_bundling.classList.add('inc_active');


            let ic_tab_prod_wrapper = generate_html_tag('div', 'ic_tab_prod_wrapper');
            ic_product_bundling.appendChild(ic_tab_prod_wrapper)
            let ic_combo_prod_tab_wrapper = generate_html_tag('div', 'ic_combo_prod_tab_wrapper');
            let ic_combo_mobile_product_avail = generate_html_tag('div', 'ic_combo_mobile_product_avail');
            let ic_combo_mobile_product_avail_review_Block = generate_html_tag('div', 'ic_combo_mobile_product_avail_review_Block');
            let ic_combo_mobile_product_avail_review_text = generate_html_tag('div', 'ic_combo_mobile_product_avail_review_text');
            let ic_combo_mobile_product_avail_review_count = generate_html_tag('div', 'ic_combo_mobile_product_avail_review_count');
            // ic_combo_mobile_product_avail.innerText="Products available in bundle"
            ic_combo_mobile_product_avail_review_text.innerText = "Review Added Item(s)";
            ic_combo_mobile_product_avail_review_Block.addEventListener('click', function (e) {
                // if(document.querySelector('.ic_combo_mobile_product_avail_review_count').innerText);
                if (bundle_vars.push_product_to_add.length != 0) {
                    // // jQuery("html, body").animate({ scrollTop: 0 }, "slow");
                    document.querySelector('.ic_popup_module_wrapper .ic_tab_prod_wrapper').classList.add('inc_in_active');
                    document.querySelector('.ic_collection_review_block').classList.toggle('inc_active');
                    document.querySelector('.ic_price_div_child').classList.toggle('inc_review_show');
                    if (document.querySelector('#increasingly_element.inc_review_active') == null) {
                        document.querySelector('#increasingly_element').classList.add('inc_review_active')
                    }
                }
            })
            ic_combo_mobile_product_avail_review_Block.appendChild(ic_combo_mobile_product_avail_review_text)
            ic_combo_mobile_product_avail_review_Block.appendChild(ic_combo_mobile_product_avail_review_count)
            ic_combo_mobile_product_avail.appendChild(ic_combo_mobile_product_avail_review_Block)

            if (window.innerWidth < 768) {
                let ic_back_to_prev_collection = generate_html_tag('div', 'ic_back_to_prev_collection');
                ic_back_to_prev_collection.innerHTML = "Back"
                ic_combo_prod_tab_wrapper.appendChild(ic_back_to_prev_collection)
                ic_back_to_prev_collection.addEventListener('click', function (e) {
                    let elem_back = e.currentTarget;
                    let popup_wrapper_active = document.querySelector('.ic_popup_module_wrapper.inc_active');
                    let review_wrapper = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_block.inc_active');
                    if (document.querySelector('.combo_img_anchor.inc_active') != null) {
                        // document.querySelector('.combo_img_anchor.inc_active').classList.remove('inc_active');
                        let image_col_src = document.querySelector('.combo_img_anchor').getAttribute('imageurl');
                        document.querySelector('.combo_img_anchor img').src = image_col_src

                        if (document.querySelector('.combo_img_thumbnail_block .inc_dot.inc_active') != null) {
                            document.querySelector('.combo_img_thumbnail_block .inc_dot.inc_active').classList.remove('inc_active')
                        }
                        if (document.querySelector('.combo_img_thumbnail li.inc_active') != null) {
                            document.querySelector('.combo_img_thumbnail li.inc_active').classList.remove('inc_active')
                        }
                        document.querySelector('.inc_dots_block .inc_dot').classList.add('inc_active')
                    }
                    if (document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product.inc_active') != null) {
                        document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product.inc_active').classList.remove('inc_active')
                    }
                    if (document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product') != null) {
                        document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product').classList.add('inc_active')
                    }
                    if (document.querySelector('.ic_combo_prod_wrapper') != null) {
                        document.querySelector('.ic_combo_prod_wrapper').style = ""
                    }
                    if (window.innerWidth < 820) {
                        document.querySelector('html').classList.remove('body_inc_overlay')
                    }
                    if (document.querySelector('.bundle_link.is-selected') != null) {
                        document.querySelector('.bundle_link.is-selected').classList.remove('is-selected')
                    }
                    if (document.querySelector('.bundle_link') != null) {
                        document.querySelector('.bundle_link').classList.add('is-selected')
                    }
                    let inc_element_popwrap = document.querySelector('#increasingly_element.inc_configure_active')
                    let inc_element_review1 = document.querySelector('#increasingly_element.inc_review_active')
                    //inc_configure_active inc_review_active
                    console.log("dn")
                    if (inc_element_popwrap != null && inc_element_review1 != null) {
                        document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_block.inc_active').classList.remove('inc_active')
                        document.querySelector('.ic_popup_module_wrapper.inc_active .ic_tab_prod_wrapper').classList.remove('inc_in_active')
                        document.querySelector('#increasingly_element').classList.remove('inc_review_active')
                        if (document.querySelector('.ic_popup_module_wrapper.inc_active .ic_price_div_child.inc_review_show') != null) {
                            document.querySelector('.ic_popup_module_wrapper.inc_active .ic_price_div_child.inc_review_show').classList.remove('inc_review_show');
                        }

                        // // jQuery("html, body").animate({ scrollTop: 0 }, "slow");
                    } else if (inc_element_popwrap != null && inc_element_review1 == null) {
                        document.querySelector('.ic_popup_module_wrapper.inc_active').classList.remove('inc_active')
                        document.querySelector('#increasingly_element').classList.remove('inc_configure_active')
                        //
                        if (document.querySelector('#increasingly_element .ic_prod_details.inc_in_active') != null) {
                            document.querySelector('#increasingly_element .ic_prod_details.inc_in_active').classList.remove('inc_in_active')
                        }
                        // // jQuery("html, body").animate({ scrollTop: 0 }, "slow");
                    }
                })
                ic_combo_prod_tab_wrapper.appendChild(ic_combo_mobile_product_avail)

            }

            let tab_ul_combo = generate_html_tag('ul', 'bundle_links_combo');
            // get_bundle_toggle_menu_items_combo(tab_ul_combo, response.Bundles)
            ic_combo_prod_tab_wrapper.appendChild(tab_ul_combo)
            ic_tab_prod_wrapper.appendChild(ic_combo_prod_tab_wrapper)
            let ic_combo_prod_wrapper_block = generate_html_tag('div', 'ic_combo_prod_wrapper_block');
            let ic_combo_prod_wrapper = generate_html_tag('div', 'ic_combo_prod_wrapper');
            let inc_arrows_wrapper = generate_html_tag('div', 'inc_arrows_wrapper');
            let inc_arrows_prev = generate_html_tag('div', 'inc_arrows_prev');
            // inc_arrows_prev.textContent = "Previous Product";
            inc_arrows_wrapper.appendChild(inc_arrows_prev)
            let inc_arrows_next = generate_html_tag('div', 'inc_arrows_next');
            // inc_arrows_next.textContent = "Next Product";
            inc_arrows_next.setAttribute('onClick', 'inc_tab_product_slider(this,"next")')
            inc_arrows_prev.setAttribute('onClick', 'inc_tab_product_slider(this,"prev")')
            inc_arrows_wrapper.appendChild(inc_arrows_next)

            ic_tab_prod_wrapper.appendChild(inc_arrows_wrapper);
            ic_combo_prod_wrapper_block.appendChild(ic_combo_prod_wrapper)
            ic_tab_prod_wrapper.appendChild(ic_combo_prod_wrapper_block)
            let ic_collection_review_block = generate_html_tag('div', 'ic_collection_review_block');

            //review steps
            let ic_colelction_steps_block = generate_html_tag('div', 'ic_colelction_steps_block');
            let ic_back_to_prev_collection = generate_html_tag('div', 'ic_back_to_prev_collection');
            ic_back_to_prev_collection.innerHTML = "Back"
            ic_colelction_steps_block.appendChild(ic_back_to_prev_collection)
            ic_back_to_prev_collection.addEventListener('click', function (e) {
                let elem_back = e.currentTarget;
                let popup_wrapper_active = document.querySelector('.ic_popup_module_wrapper.inc_active');
                let review_wrapper = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_block.inc_active');
                if (document.querySelector('.combo_img_anchor.inc_active') != null) {
                    // document.querySelector('.combo_img_anchor.inc_active').classList.remove('inc_active')
                    let image_col_src = document.querySelector('.combo_img_anchor').getAttribute('imageurl');
                    document.querySelector('.combo_img_anchor img').src = image_col_src
                    if (document.querySelector('.combo_img_thumbnail_block .inc_dot.inc_active') != null) {
                        document.querySelector('.combo_img_thumbnail_block .inc_dot.inc_active').classList.remove('inc_active')
                    }
                    if (document.querySelector('.combo_img_thumbnail li.inc_active') != null) {
                        document.querySelector('.combo_img_thumbnail li.inc_active').classList.remove('inc_active')
                    }
                    document.querySelector('.inc_dots_block .inc_dot').classList.add('inc_active')
                }
                if (document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product.inc_active') != null) {
                    document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product.inc_active').classList.remove('inc_active')
                }
                if (document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product') != null) {
                    document.querySelector('.ic_tab_prod_wrapper .ic_combo_prod_wrapper .ic_product').classList.add('inc_active')
                }
                if (document.querySelector('.ic_combo_prod_wrapper') != null) {
                    document.querySelector('.ic_combo_prod_wrapper').style = ""
                }
                if (window.innerWidth < 820) {
                    document.querySelector('html').classList.remove('body_inc_overlay')
                }
                if (document.querySelector('.bundle_link.is-selected') != null) {
                    document.querySelector('.bundle_link.is-selected').classList.remove('is-selected')
                }
                if (document.querySelector('.bundle_link') != null) {
                    document.querySelector('.bundle_link').classList.add('is-selected')
                }
                let inc_element_popwrap = document.querySelector('#increasingly_element.inc_configure_active')
                let inc_element_review1 = document.querySelector('#increasingly_element.inc_review_active')
                //inc_configure_active inc_review_active
                console.log("dn")
                if (inc_element_popwrap != null && inc_element_review1 != null) {
                    document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_block.inc_active').classList.remove('inc_active')
                    document.querySelector('.ic_popup_module_wrapper.inc_active .ic_tab_prod_wrapper').classList.remove('inc_in_active')
                    document.querySelector('#increasingly_element').classList.remove('inc_review_active')
                    document.querySelector('#increasingly_element').classList.remove('inc_review_active')
                    if (document.querySelector('.ic_popup_module_wrapper.inc_active .ic_price_div_child.inc_review_show') != null) {
                        document.querySelector('.ic_popup_module_wrapper.inc_active .ic_price_div_child.inc_review_show').classList.remove('inc_review_show');
                    }
                    // // jQuery("html, body").animate({ scrollTop: 0 }, "slow");

                } else if (inc_element_popwrap != null && inc_element_review1 == null) {
                    document.querySelector('.ic_popup_module_wrapper.inc_active').classList.remove('inc_active')
                    document.querySelector('#increasingly_element').classList.remove('inc_configure_active')
                    //
                    if (document.querySelector('#increasingly_element .ic_prod_details.inc_in_active') != null) {
                        document.querySelector('#increasingly_element .ic_prod_details.inc_in_active').classList.remove('inc_in_active')
                    }
                    // // jQuery("html, body").animate({ scrollTop: 0 }, "slow");
                }
            })

            let ic_colelction_product_name_block = generate_html_tag('div', 'ic_colelction_product_name_block');
            ic_colelction_product_name_block.innerText = "Products Added In Bundle";
            ic_colelction_steps_block.appendChild(ic_colelction_product_name_block)

            let ic_colelction_product_close_review = generate_html_tag('span', 'ic_colelction_product_close_review');
            ic_colelction_steps_block.appendChild(ic_colelction_product_close_review)
            ic_collection_review_block.appendChild(ic_colelction_steps_block)
            //end
            let ic_collection_review_prod_list = generate_html_tag('div', 'ic_collection_review_prod_list');
            ic_collection_review_block.appendChild(ic_collection_review_prod_list)
            ic_product_bundling.appendChild(ic_collection_review_block)

            let ic_combo_set = 0
            let prod_wise_wrapper = generate_html_tag('div', 'prod_wise_wrapper_combo');


            let inc_added_items_wrapper = generate_html_tag('div', 'inc_added_items_wrapper');
            let inc_added_items = generate_html_tag('div', 'inc_added_items');
            inc_added_items.textContent = "Items(s) Added"
            inc_added_items_wrapper.appendChild(inc_added_items)
            let inc_added_items_close = generate_html_tag('span', 'inc_added_items_close');
            inc_added_items_close.textContent = "Close";
            inc_added_items.appendChild(inc_added_items_close)
            inc_added_items_close.addEventListener("click", function (event) {
                let checkout_wrapper = this.parentNode.parentNode;
                checkout_wrapper.classList.remove('inc_active')
                if (checkout_wrapper.parentNode != null) {
                    checkout_wrapper.parentNode.classList.remove('inc_active')
                }
            });
            let prod_addon_wrapper = generate_html_tag('div', 'prod_addon_wrapper');
            inc_added_items_wrapper.appendChild(prod_addon_wrapper)
            if (window.innerWidth < 820) {
                prod_wise_wrapper.appendChild(inc_added_items_wrapper)
            }
            if (bundle_count >= 1) {
                for (let i = 0; i < bundle_count; i++) {
                    for (let j = 0; j < response.Bundles[i].Products.length; j++) {
                        response.Bundles[i].Products[j].BundleId = response.Bundles[i].BundleId
                        // response.Bundles[i].Products[j].BundleId = response.Bundles[i].BundleId
                        if ((load_type == 'onload') || ((!switch_board.catogory_tab) && (load_type == 'btn_click'))) {
                            let products_data = response.Bundles[i].Products[j];
                            let product_attributes = products_data.Attributes;
                            ic_product_bundling.setAttribute("bundle_id", response.Bundles[i].ComboId);
                            if (combo_created_prod_list.indexOf(products_data.ProductId) >= 0) {
                                if (dup_combo_p_id.indexOf(products_data.ProductId) == -1) {
                                    dup_combo_p_id.push(products_data.ProductId)
                                    //creatring tab 
                                    ic_combo_set++
                                    let tab_li = generate_html_tag('li', 'bundle_link');
                                    tab_li.setAttribute('tab_index', ic_combo_set - 1)
                                    tab_li.setAttribute('onClick', 'combo_tab_selection(this)')
                                    tab_li.setAttribute('data_link', 'option');
                                    tab_li.setAttribute('product_id', products_data.ProductId);

                                    let tab_a = generate_html_tag('a', '');
                                    tab_a.setAttribute('index_value', ic_combo_set - 1);
                                    let tab_img = generate_html_tag('img', 'tab_img');
                                    tab_img.setAttribute('src', products_data.ImageURL)
                                    tab_a.appendChild(tab_img)
                                    let combo_tab_count_block = generate_html_tag('div', 'combo_tab_count_block')
                                    let combo_tab_count = generate_html_tag('span', 'combo_tab_count')
                                    combo_tab_count.innerText = ic_combo_set
                                    if ((products_data.ProductStatus == 1 && products_data.Quantity == 0) || (products_data.ProductStatus == 3)) {
                                        let combo_tab_count_oos = generate_html_tag('span', 'combo_tab_count_oos')
                                        combo_tab_count_oos.innerText = 'Sold Out'
                                        combo_tab_count_block.appendChild(combo_tab_count_oos)
                                        combo_tab_count.style.display = "none"
                                    }
                                    combo_tab_count_block.appendChild(combo_tab_count)
                                    tab_a.appendChild(combo_tab_count_block);
                                    let combo_tab_info = generate_html_tag('div', 'combo_tab_info')
                                    let combo_tab_p_name = generate_html_tag('div', 'combo_tab_p_name')
                                    combo_tab_p_name.innerText = products_data.ProductName;
                                    combo_tab_p_name.setAttribute('title', products_data.ProductName)
                                    combo_tab_info.appendChild(combo_tab_p_name)
                                    let combo_tab_price = generate_html_tag('div', 'combo_tab_price')
                                    if (products_data.SpecialPrice != null && (+products_data.SpecialPrice < +products_data.Price) && products_data.SpecialPrice > 0) {
                                        combo_tab_price.innerText = formatter.format(products_data.SpecialPrice)
                                    } else {
                                        combo_tab_price.innerText = formatter.format(products_data.Price)
                                    }
                                    combo_tab_info.appendChild(combo_tab_price)
                                    if ((products_data.ProductStatus == 1 && products_data.Quantity == 0) || (products_data.ProductStatus == 3)) {
                                        combo_tab_price.style.display = "none"
                                        let combo_tab_price_sold_out = generate_html_tag('div', 'combo_tab_price_sold_out')
                                        combo_tab_price_sold_out.innerText = "Sold Out"
                                        combo_tab_info.appendChild(combo_tab_price_sold_out)
                                    }
                                    if (i == 0 && j == 0) {
                                        // tab_a.classList.add('inc_active');
                                        // tab_li.classList.add('inc_checked')
                                        tab_li.classList.add('is-selected');
                                    }
                                    tab_a.setAttribute("b_index", ic_combo_set - 1);

                                    tab_li.appendChild(tab_a);
                                    tab_li.appendChild(combo_tab_info);

                                    tab_ul_combo.appendChild(tab_li);
                                    //end 
                                    create_product_combo_box(load_type, products_data, product_attributes, ic_combo_prod_wrapper, j, response.Bundles[i], "combo", ic_combo_set);


                                    if (i == 0 && j == 0) {
                                        // added_prd_cont.classList.add('inc_active')
                                    }
                                    let selected_product_addon = generate_html_tag('div', 'selected_product_addon');
                                    if (i == 0 && j == 0) {
                                        // selected_product_addon.classList.add('inc_active')
                                    }
                                    selected_product_addon.setAttribute('product_id', products_data.ProductId)

                                    let selected_product_img = generate_html_tag('img', 'selected_product_img');
                                    // selected_product_addon.appendChild(selected_product_img)
                                    selected_product_img.setAttribute('src', products_data.ImageURL);
                                    let selected_info_wrap = generate_html_tag('div', 'selected_info_wrap');
                                    // selected_product_addon.appendChild(selected_info_wrap)

                                    let selected_product_qty = generate_html_tag('div', 'selected_product_qty');
                                    selected_product_qty.innerHTML = products_data.ProductName;
                                    selected_info_wrap.appendChild(selected_product_qty)
                                    let selected_prc_conf_wrap = generate_html_tag('div', 'selected_prc_conf_wrap');
                                    selected_info_wrap.appendChild(selected_prc_conf_wrap)
                                    let selected_product_prc = generate_html_tag('span', 'selected_product_prc');
                                    if (+products_data.SpecialPrice != null && +products_data.SpecialPrice != +products_data.Price && +products_data.SpecialPrice > 0) {
                                        selected_product_prc.innerHTML = formatter.format(products_data.SpecialPrice)
                                    } else {
                                        selected_product_prc.innerHTML = formatter.format(products_data.Price)
                                    }
                                    selected_prc_conf_wrap.appendChild(selected_product_prc)

                                    let counter_div = generate_html_tag('div', 'counter_div');
                                    get_product_quantity_box(null, null, selected_info_wrap, counter_div, "collection", "combo");

                                    let editremoveBlock = generate_html_tag('div', 'editremoveBlock');
                                    // selected_product_addon.appendChild(editremoveBlock)
                                    let selected_product_edit = generate_html_tag('span', 'selected_product_edit');
                                    selected_product_edit.innerText = "Edit | ";
                                    selected_product_edit.setAttribute('onclick', 'inc_edit_item(this,\'' + products_data.ProductId + '\')');
                                    // editremoveBlock.appendChild(selected_product_edit);
                                    let selected_product_remove = generate_html_tag('span', 'selected_product_remove');
                                    selected_product_remove.setAttribute('onclick', 'inc_remove_item(this,\'' + products_data.ProductId + '\')');

                                    selected_product_remove.textContent = "Remove";
                                    editremoveBlock.appendChild(selected_product_remove);
                                    // ic_collection_review_prod_list.appendChild(selected_product_addon);

                                    // added_prd_cont.appendChild(selected_product_addon)



                                    if (sp_c != 0 && +products_data.SpecialPrice != 0) {
                                        pr_c += +products_data.Price;
                                        sp_c += +products_data.SpecialPrice;
                                    } else if (sp_c != 0 && +products_data.SpecialPrice == 0) {
                                        pr_c += +products_data.Price;
                                        sp_c += +products_data.Price;
                                    } else if (sp_c == 0 && +products_data.SpecialPrice == 0) {
                                        pr_c += +products_data.Price;
                                        sp_c += +products_data.Price;
                                    } else {
                                        pr_c += +products_data.Price;
                                        sp_c += +products_data.SpecialPrice;
                                    }



                                }
                            }

                        }
                    }
                }
                ic_product_bundling.appendChild(prepare_combo_checkout_button(response.ComboId, pr_c, sp_c, prod_wise_wrapper, inc_added_items_wrapper));



                ic_tab_prod_wrap.appendChild(ic_header_wrap)
                ic_bundle.appendChild(ic_product_bundling)

                ic_prod_wrapper.appendChild(ic_bundle);
                ic_tab_prod_wrap.appendChild(ic_prod_wrapper);
                // ic_product_bundling.appendChild(ic_prod_checkout)
                ic_bundle_wrap.appendChild(ic_tab_prod_wrap)
                let pdp_bundle = generate_html_tag('div', 'ic_build_bundle');
                pdp_bundle.setAttribute("id", "ic_build_bundle");
                pdp_bundle.appendChild(ic_bundle_wrap);
                ic_popup_module.appendChild(pdp_bundle)
            }

        }
    }
    function prepare_combo_checkout_button(comboId, price, SpecialPrice, prod_wise_wrapper, inc_added_items_wrapper) {

        let ic_prod_checkout = generate_html_tag('div', 'inc_product_checkout');
        let ic_price_div = generate_html_tag('div', 'price_bind');
        let ic_price_div_child = generate_html_tag('div', 'ic_price_div_child');
        ic_price_div.appendChild(ic_price_div_child)
        let inc_continue_shopping = generate_html_tag('div', 'inc_continue_shopping');
        inc_continue_shopping.innerText = "Continue Shopping"
        inc_continue_shopping.addEventListener('click', function (e) {
            // // jQuery("html, body").animate({ scrollTop: 0 }, "slow");
            document.querySelector('.ic_collection_review_block').classList.remove('inc_active');
            document.querySelector('.ic_price_div_child').classList.remove('inc_review_show');
            document.querySelector('.ic_popup_module_wrapper .ic_tab_prod_wrapper').classList.remove('inc_in_active');
            if (document.querySelector('#increasingly_element.inc_review_active') != null) {
                document.querySelector('#increasingly_element.inc_review_active').classList.remove('inc_review_active')
            }

        })
        ic_price_div_child.appendChild(inc_continue_shopping)

        let ic_price_div_btn_wraps = generate_html_tag('div', 'ic_price_div_btn_wraps');
        let bundle_price_wrap = generate_html_tag('div', 'bundle_price_wrap');
        ic_price_div_btn_wraps.appendChild(bundle_price_wrap)
        ic_price_div.appendChild(ic_price_div_btn_wraps)
        let ic_added_item_div = generate_html_tag('div', 'ic_added_item_div');
        let ic_span_label = generate_html_tag('div', 'ic_added_item_text');
        ic_span_label.textContent = 'Added Item(s)';
        let ic_added_item_count = generate_html_tag('div', 'ic_added_item_count');
        ic_added_item_count.textContent = "0"
        ic_price_div_child.appendChild(ic_added_item_div)
        ic_added_item_div.appendChild(ic_span_label);
        ic_added_item_div.appendChild(ic_added_item_count);
        ic_price_div_child.appendChild(prod_wise_wrapper)
        let total_price_text = generate_html_tag('div', 'total_price_text');
        total_price_text.textContent = "Total bundle price:";
        bundle_price_wrap.appendChild(total_price_text)
        if (window.innerWidth < 820) {

            ic_added_item_div.addEventListener("click", function (e) {
                let elm = e.currentTarget.parentNode.parentNode.parentNode;
                if (elm.parentNode.parentNode.parentNode.querySelector('.ic_collection_review_block') != null) {
                    elm.parentNode.parentNode.parentNode.querySelector('.ic_collection_review_block').classList.toggle('inc_active')
                }
                if (document.querySelector('#increasingly_element.inc_review_active') == null) {
                    document.querySelector('#increasingly_element').classList.add('inc_review_active')
                }
                if (elm.querySelector('.inc_added_items_wrapper') != null) {
                    elm.querySelector('.inc_added_items_wrapper').classList.toggle('inc_active')
                }
                if (elm.querySelector('.prod_wise_wrapper_combo') != null) {
                    elm.querySelector('.prod_wise_wrapper_combo').classList.toggle('inc_active')
                }
                document.querySelector('.ic_popup_module_wrapper .ic_tab_prod_wrapper').classList.add('inc_in_active');
                // document.querySelector('.ic_collection_review_block').classList.toggle('inc_active');
                document.querySelector('.ic_price_div_child').classList.toggle('inc_review_show');
                if (document.querySelector('#increasingly_element.inc_review_active') == null) {
                    document.querySelector('#increasingly_element').classList.add('inc_review_active')
                }
            });
        }
        let price_org_spl_wrap = generate_html_tag('div', 'price_org_spl_wrap');
        bundle_price_wrap.appendChild(price_org_spl_wrap);
        let ic_span_price_title = generate_html_tag('span', 'inc_price');
        ic_span_price_title.textContent = parseFloat(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

        if (SpecialPrice != null && SpecialPrice != price) {
            ic_span_price_title.classList.add("asterik")
        }
        ic_span_price_title.classList.add('inc_standard_price')


        if (SpecialPrice != null && SpecialPrice != price) {
            let ic_special_price_title = generate_html_tag('span', 'inc_special_price');
            ic_special_price_title.classList.add('inc_standard_price')
            let prs = parseFloat(SpecialPrice)
            ic_special_price_title.textContent = parseFloat(prs).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            ic_span_price_title.classList.add("old");
            if (SpecialPrice != null && SpecialPrice != price) {
                ic_special_price_title.classList.add("asterik")
            }
            let ic_save_price = generate_html_tag('span', 'ic_save_price');
            ic_save_price.textContent = "Save £" + (parseFloat(+prr - +prs).toFixed(2))
            price_org_spl_wrap.appendChild(ic_save_price)
            price_org_spl_wrap.appendChild(ic_special_price_title);
            price_org_spl_wrap.appendChild(ic_span_price_title);
        } else {
            price_org_spl_wrap.appendChild(ic_span_price_title);
        }

        ic_prod_checkout.appendChild(ic_price_div);
        let n = (price == SpecialPrice) ? price : SpecialPrice;
        let o = (price < SpecialPrice) ? SpecialPrice : price;

        let ic_btn_div = generate_html_tag('div', 'add_bundle_btn_wrap');
        let ic_review_btn = generate_html_tag('button', 'ic_review_btn');
        ic_review_btn.innerText = "Review Added Item(s)"//"Review & Add to cart";
        // ic_review_btn.setAttribute('onClick','review_added_items_fn(this)')
        ic_review_btn.addEventListener('click', function (e) {
            if (bundle_vars.push_product_to_add.length != 0) {
                console.log("ic_review_btn")
                // // jQuery("html, body").animate({ scrollTop: 0 }, "slow");
                document.querySelector('.ic_popup_module_wrapper .ic_tab_prod_wrapper').classList.add('inc_in_active');
                document.querySelector('.ic_collection_review_block').classList.toggle('inc_active');
                document.querySelector('.ic_price_div_child').classList.toggle('inc_review_show');
                if (document.querySelector('#increasingly_element.inc_review_active') == null) {
                    document.querySelector('#increasingly_element').classList.add('inc_review_active')
                }
            }
        })
        ic_btn_div.appendChild(ic_review_btn)
        let ic_add_button = generate_html_tag('button', 'add_bundle_btn');
        ic_add_button.textContent = "Add Item to Cart";
        let price = (SpecialPrice < price) ? SpecialPrice : price;
        let new_span = generate_html_tag('span', 'inc_price');
        new_span.classList.add('btn_inc_prc');
        new_span.textContent = price;
        if (SpecialPrice != null && (+SpecialPrice < +price)) {
            let new_span_spl = generate_html_tag('span', 'inc_special_price');
            let prr = parseFloat(price)
            new_span_spl.textContent = parseFloat(prr).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
        let doc_loader = document.createElement('img');
        doc_loader.style.display = "none"
        doc_loader.setAttribute('src', 'https://www.increasingly.co/Implementation/Sc91br/img/inc_loader.gif');
        document.querySelector('body').appendChild(doc_loader)


        ic_add_button.setAttribute('onclick', 'prepare_add_to_cart_data("inc_btn",' + comboId + ',this,"combo")');
        ic_add_button.setAttribute('data_total', price);
        ic_btn_div.appendChild(ic_add_button);
        ic_price_div_btn_wraps.appendChild(ic_btn_div);
        if (inc_added_items_wrapper != undefined) {
            // inc_added_items_wrapper
            let checkout_button_clone = ic_price_div_btn_wraps.cloneNode(ic_price_div_btn_wraps);
            let checkout_clone_mobile = generate_html_tag('div', 'checkout_clone_mobile');
            checkout_clone_mobile.appendChild(checkout_button_clone);
            inc_added_items_wrapper.appendChild(checkout_clone_mobile)
        }
        return ic_prod_checkout;
    }

    function get_bundle_toggle_menu_items_combo(tab_ul, products_res) {

        let data_len = products_res.Products.length;
        let pdp_title = ['1', '2', '3', '4', '5'];
        for (let i = 0; i < products_res.Products.length; i++) {
            let tab_li = generate_html_tag('li', 'bundle_link');
            tab_li.setAttribute('tab_index', i)
            tab_li.setAttribute('onClick', 'combo_tab_selection(this)')
            tab_li.setAttribute('data_link', 'option');
            let tab_a = generate_html_tag('a', '');
            tab_a.setAttribute('index_value', i);
            let tab_img = generate_html_tag('img', 'tab_img');
            tab_img.setAttribute('src', products_res.Products[i].ImageURL)
            tab_a.appendChild(tab_img)


            if (i == 0) {
                // tab_a.classList.add('inc_active');
                // tab_li.classList.add('inc_checked')
                tab_li.classList.add('is-selected');
            }
            tab_a.setAttribute("b_index", pdp_title[i]);
            tab_li.appendChild(tab_a);
            tab_ul.appendChild(tab_li);
        }
    }
    function close_modal_combo(elm) {
        document.querySelector('html').classList.remove('body_inc_overlay')
        if (document.querySelector('.ic_popup_module_wrapper.inc_active') != null) {
            document.querySelector('.ic_popup_module_wrapper.inc_active').classList.remove('inc_active')
        }
        if (document.querySelector('.popup_overlay') != null) {
            document.querySelector('.popup_overlay').classList.remove('popup_overlay')
        }
        if (document.querySelector('.ic_build_bundle.inc_active') != null) {
            document.querySelector('.ic_build_bundle.inc_active').classList.remove('inc_active')
        }
        //ic_build_bundle inc_active
    }

    function create_product_combo_box(load_type, products_data, product_attributes, ic_product_bundling, index, prod_bundle, new_temp, p_ind) {
        let price_length = 0;
        let qty_bundle_flag = false;
        bundle_vars.create_prod_c++

        let ic_prod = generate_html_tag('div', 'ic_product');


        if (p_ind - 1 == 0) {
            ic_prod.classList.add('inc_active')
        }

        let ic_prod_details = generate_html_tag('div', 'ic_prod_details');

        ic_prod.setAttribute("prod_index", p_ind - 1);
        ic_prod.setAttribute("bundle_id", products_data.BundleId);
        ic_prod.setAttribute("combo_id", products_data.ComboId);
        ic_prod.setAttribute('data_selected_prod_id', products_data.ProductId);
        ic_prod.setAttribute('data_selected_prod_sku', products_data.ProductSku);
        ic_prod.setAttribute('prod_type', products_data.ProductType);
        ic_prod.setAttribute('ind', p_ind)
        ic_prod.setAttribute('size', products_data.Size)
        ic_prod.setAttribute('color', products_data.Color)
        let is_spc = 0;

        if (window.innerWidth < 768) {
            get_product_title(products_data, ic_prod_details, index);
        }
        get_product_images(products_data, ic_prod_details, index, "collection");

        let info_wrap = generate_html_tag('div', 'info_wrap');
        if (window.innerWidth > 767) {
            get_product_title(products_data, info_wrap, index);
        }

        get_product_ratings(products_data.Field3, info_wrap);


        let counter_div = generate_html_tag('div', 'inc_quantity');
        let prod_price = get_product_price(products_data, info_wrap, is_spc);

        get_product_promotion(products_data, info_wrap)

        // get_product_description(products_data, info_wrap)
        if (switch_board.configurables) {
            get_product_configurables(products_data, product_attributes, info_wrap, load_type, "combo");
        }
        ic_prod_details.appendChild(info_wrap);
        ic_prod.appendChild(ic_prod_details)

        ic_product_bundling.appendChild(ic_prod);

        if (new_temp == "combo") {
            let inc_collection_set_of = generate_html_tag('div', 'inc_collection_set_of');
            inc_collection_set_of.classList.add('inc_active')

            qtymaindiv = inc_collection_set_of;
            if (window.innerWidth > 599) {
                if (products_data.QuantityBasedBundle != null) {
                    info_wrap.appendChild(inc_collection_set_of)
                    qtybasedbundles = products_data.QuantityBasedBundle.length;
                    for (let o = 0; o < qtybasedbundles; o++) {
                        let ic_prod_qty = generate_html_tag('div', 'collection_ic_prod_qty');
                        let ic_prod_packs_wrap = generate_html_tag('div', 'ic_prod_packs_wrap');
                        let ic_prod_packs = generate_html_tag('div', 'ic_prod_packs');
                        qtybasedbundle = products_data.QuantityBasedBundle[o];
                        qtyPrice = products_data.Price * qtybasedbundle;
                        ic_prod_qty.setAttribute('packof', qtybasedbundle)
                        ic_prod_packs.textContent = "Set of" + " " + qtybasedbundle;
                        qtymaindiv.appendChild(ic_prod_qty);
                        ic_prod_qty.appendChild(ic_prod_packs_wrap);
                        ic_prod_packs_wrap.appendChild(ic_prod_packs);
                        let ic_prod_packs_price = generate_html_tag('div', 'ic_prod_packs_price');
                        if (products_data.SpecialPrice != null && (+products_data.SpecialPrice < +products_data.Price || +products_data.SpecialPrice != +products_data.Price)) {
                            ic_prod_packs_price.textContent = "£" + parseFloat(products_data.SpecialPrice * qtybasedbundle).toFixed(2)
                        } else {
                            ic_prod_packs_price.textContent = "£" + parseFloat(products_data.Price * qtybasedbundle).toFixed(2)
                        }
                        ic_prod_packs_wrap.appendChild(ic_prod_packs_price)
                        ic_prod_qty.setAttribute('onClick', 'inc_qtybasedbundle_collection(this)');
                    }
                }
            } else {
                if (products_data.QuantityBasedBundle != null) {
                    let qtyBundless = [];
                    qtyBundless = products_data.QuantityBasedBundle;
                    qtyBundless.sort(function (a, b) { return a - b });
                    let qty_bundle_flag = true;
                    get_product_qtybundles(products_data, qtyBundless, prod_price, counter_div, info_wrap, load_type, qty_bundle_flag);
                }
            }
            let inc_qty_add_block = generate_html_tag('div', 'inc_qty_add_block');
            info_wrap.appendChild(inc_qty_add_block)
            get_product_quantity_box(products_data, prod_price, inc_qty_add_block, counter_div, "collection", "combo");
            let ic_swap_btn_wrap = generate_html_tag('div', 'ic_swap_btn_wrap');
            let inc_label = generate_html_tag('label', 'inc_label');
            let ic_swap_p_btn = generate_html_tag('input', 'ic_swap_prd_btn_input');

            let inc_checkmark = generate_html_tag('span', 'inc_checkmark');
            inc_label.setAttribute('onClick', "inc_check_prod_combo(this,\"" + products_data.ProductId + "\"," + (p_ind - 1) + ")");
            inc_label.appendChild(inc_checkmark)
            let inc_selected_span = generate_html_tag('span', 'inc_selected_span');

            inc_label.appendChild(inc_selected_span)
            ic_swap_p_btn.setAttribute("type", "checkbox")
            // ic_prod.classList.add('inc_checked')
            if (window.innerWidth > 819) {
                inc_selected_span.textContent = "Add Product to bundle";
            } else {
                inc_selected_span.textContent = "Add Product to Bundle";
            }


            ic_swap_btn_wrap.appendChild(inc_label)
            inc_qty_add_block.appendChild(ic_swap_btn_wrap);
            if ((products_data.ProductStatus == 1 && products_data.Quantity == 0) || (products_data.ProductStatus == 3)) {
                ic_swap_btn_wrap.setAttribute('style', 'pointer-events: none;opacity: 0.5;')
            }
        }

        //

        let del_check_pay_icon_html = '<div class="icon-popup-main"> <ul> <li><p><img style="width:30px" src="https://cdn.shopify.com/s/files/1/1257/2223/files/np.png?795211247132847107"> </p><p> 100% Secure <br>Checkout </p></li><li><a id="myBtn" onClick="inc_Mybtn(this)"><p><img src="https://cdn.shopify.com/s/files/1/1257/2223/files/t1.png?2877970356627229767"></p><p>Free US Delivery<br>Over $200</p></a></li><li><a id="myBtn1" onClick="inc_Mybtn1(this)"><p><img src="https://cdn.shopify.com/s/files/1/1257/2223/files/ARROW.png?12800221163936710486"></p><p>FREE exchanges<br>on all orders</p></a></li><li><a id="myBtn2" onClick="inc_Mybtn2(this)"><p><img src="//cdn.shopify.com/s/files/1/1715/4903/t/23/assets/i4.png?v=15430394751903420034"></p><p>We Price Match</p></a></li><li><a id="myBtn3" onClick="inc_Mybtn3(this)"><p><i class="fas fa-dollar-sign" style="font-size: 28px;"></i></p><p>Pay Later</p></a></li></ul></div>';
        let inc_check_del_icons = generate_html_tag('div', 'inc_check_del_icons');
        inc_check_del_icons.innerHTML = del_check_pay_icon_html;
        info_wrap.appendChild(inc_check_del_icons)

        //decription specification block
        let inc_desciption_list_block = generate_html_tag('div', 'inc_desciption_list_block');
        let inc_desciption_list = generate_html_tag('ul', 'inc_desciption_list');
        inc_desciption_list_block.appendChild(inc_desciption_list)
        info_wrap.appendChild(inc_desciption_list_block)
        //description tabs
        if (isBase64(products_data.Description) == true) {
            products_data.Description = Base64.decode(products_data.Description)
        }
        if (isBase64(products_data.Field1) == true) {
            products_data.Field1 = Base64.decode(products_data.Field1)
        }
        if (products_data.Description != null && products_data.Description != "") {
            let inc_description_tab = generate_html_tag('li');
            inc_description_tab.classList.add('inc_active')
            inc_description_tab.setAttribute('id', "list0")
            inc_description_tab.setAttribute('ind', "0")
            inc_description_tab.setAttribute('onClick', "desc_spec_tab(this)")
            inc_description_tab.innerText = "Description"
            inc_desciption_list.appendChild(inc_description_tab)
        }
        if (products_data.Field1 != null && products_data.Field1 != "") {
            let inc_description_tab1 = generate_html_tag('li');
            if (products_data.Description == "") {
                inc_description_tab1.classList.add('inc_active')
            }
            inc_description_tab1.setAttribute('id', "list1")
            inc_description_tab1.setAttribute('ind', "1")
            inc_description_tab1.innerText = "Spec"
            inc_desciption_list.appendChild(inc_description_tab1)
            inc_description_tab1.setAttribute('onClick', "desc_spec_tab(this)")
        }
        if (products_data.Field2 != null && products_data.Field2 != "") {
            let inc_description_tab2 = generate_html_tag('li');
            if (products_data.Description == "" && products_data.Field1 == "") {
                inc_description_tab2.classList.add('inc_active')
            }
            inc_description_tab2.setAttribute('id', "list2")
            inc_description_tab2.setAttribute('ind', "2")
            inc_description_tab2.innerText = "Delivery"
            inc_desciption_list.appendChild(inc_description_tab2)
            inc_description_tab2.setAttribute('onClick', "desc_spec_tab(this)")
        }


        //description tab details
        products_data.Description = products_data.Description.replace('http://', 'https://').replace('http://', 'https://').replace('http://', 'https://');

        products_data.Description = products_data.Description.replace('www.scandibon.co.uk', 'www.scandiborn.com').replace('www.scandibon.co.uk', 'www.scandiborn.com');

        if (products_data.Description != null && products_data.Description != "") {
            let inc_description_details = generate_html_tag('div', 'description_details');
            inc_description_details.classList.add('inc_active')
            inc_description_details.setAttribute('id', "list_details0")
            inc_description_details.setAttribute('ind', "0")
            let inc_description_text = generate_html_tag('div', 'inc_description_text');
            inc_description_details.appendChild(inc_description_text)
            inc_description_text.innerHTML = products_data.Description
            inc_desciption_list_block.appendChild(inc_description_details)
        }
        if (products_data.Field1 != null && products_data.Field1 != "") {
            let inc_description_details1 = generate_html_tag('div', 'description_details');
            if (products_data.Description == "") {
                inc_description_details1.classList.add('inc_active')
            }
            inc_description_details1.setAttribute('id', "list_details1")
            inc_description_details1.setAttribute('ind', "1")
            let inc_description_text1 = generate_html_tag('div', 'inc_description_text');
            inc_description_details1.appendChild(inc_description_text1)
            inc_description_text1.innerHTML = products_data.Field1
            inc_desciption_list_block.appendChild(inc_description_details1)
        }
        if (products_data.Field2 != null && products_data.Field2 != "") {
            let inc_description_details2 = generate_html_tag('div', 'description_details');
            if (products_data.Description == "" && products_data.Field1 == "") {
                inc_description_details2.classList.add('inc_active')
            }
            inc_description_details2.setAttribute('id', "list_details2")
            inc_description_details2.setAttribute('ind', "2")
            let inc_description_text2 = generate_html_tag('div', 'inc_description_text');
            inc_description_details2.appendChild(inc_description_text2)
            inc_description_text2.innerText = products_data.Field2
            inc_desciption_list_block.appendChild(inc_description_details2)
        }


    }


    function inc_check_prod_combo(elm, prod_id, index) {
        // // jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        if (elm.classList.contains('inc_checked') == false) {
            let ic_prod_div = elm.parentNode.parentNode.parentNode.parentNode.parentNode;
            bundle_vars.rab_click_flag = true
            ic_prod_div.classList.add('inc_checked')
            ic_prod_div.querySelector('.inc_label').classList.add('inc_checked');
            if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_collection_review_prod_list .selected_product_addon')[index] != undefined) {
                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_collection_review_prod_list .selected_product_addon')[index].classList.add('inc_active')
            }
            if (document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_build_bundle.inc_active .prod_wise_wrapper_combo .added_prd_cont_combo')[index] != undefined) {
                document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_build_bundle.inc_active .prod_wise_wrapper_combo .added_prd_cont_combo')[index].classList.add('inc_active')
            }
            document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_build_bundle.inc_active .ic_product_bundling.inc_active .bundle_links_combo li')[index].classList.add('inc_checked')
            ic_prod_div.querySelector('.inc_selected_span').innerHTML = "Added to Bundle";
            if (document.querySelector('.ic_combo_mobile_product_avail_review_Block') != null) {
                document.querySelector('.ic_combo_mobile_product_avail_review_Block').classList.add('just_added')
            }


            let p_types = ic_prod_div.getAttribute('prod_type');
            let main_prd_elm = document.querySelector('.ic_product_parent_bundle .ic_product');
            let p_id = ic_prod_div.getAttribute('data_selected_prod_id');
            let p_sku = ic_prod_div.getAttribute('data_selected_prod_sku');
            let p_img = ic_prod_div.querySelector('.pdt_img img').src;
            let p_href = ic_prod_div.querySelector('.pdt_img .pdt_img_ul a').getAttribute('href');
            let c_pid = "";
            let colour_text = null;
            let size_text = null;
            let final_prc = null;
            let combo_id = ic_prod_div.getAttribute('combo_id')
            //data_selected_prod_sku
            //inc_select large

            if (ic_prod_div.querySelector('.selection_bundle ul.prod_Size') != null) {
                c_pid = ic_prod_div.querySelector('.selection_bundle ul.prod_Size li.inc_active a').getAttribute('c_pid');
                size_text = ic_prod_div.querySelector('.selection_bundle ul.prod_Size li.inc_active a').getAttribute('value');
            }
            if (ic_prod_div.querySelector('.selection_bundle ul.prod_color') != null) {
                c_pid = ic_prod_div.querySelector('.selection_bundle ul.prod_color li.inc_active a').getAttribute('c_pid');
                colour_text = ic_prod_div.querySelector('.selection_bundle ul.prod_color li.inc_active a').getAttribute('value');
            }


            let bid = ic_prod_div.getAttribute('bundle_id');
            let pname = ic_prod_div.querySelector('.pdt_name p').innerHTML;
            let qty = "1"//ic_prod_div.parentNode.querySelector('.q_holder input').value;
            let prc = ic_prod_div.querySelector('.pdt_price .product_amount').innerText.replace("$", "").replace(",", "").trim()
            final_prc = prc
            // prc =prc.replace(/ +/g, "");
            let sprc = 0;
            if (ic_prod_div.querySelector('.pdt_price .spec_amount') != null) {
                if (ic_prod_div.querySelector('.pdt_price .spec_amount').style.display != "none") {
                    sprc = ic_prod_div.querySelector('.pdt_price .spec_amount').innerText.replace("$", "").replace(",", "").trim()
                    final_prc = sprc
                    // sprc =sprc.replace(/ +/g, "");
                }
            }
            let ic_ind = ic_prod_div.getAttribute('ind');
            let prod_addon_wrapper = document.querySelector('.ic_collection_review_prod_list')
            if (c_pid != "") {
                let added_addon_prod = prod_addon_wrapper.querySelector('.selected_product_addon.inc_active[c_pid="' + c_pid + '"]')
                let deks_addon = document.querySelector('.added_prd_cont_combo.inc_active[c_pid="' + c_pid + '"]')
            } else {
                let added_addon_prod = prod_addon_wrapper.querySelector('.selected_product_addon.inc_active[p_id="' + p_id + '"]')
                let deks_addon = document.querySelector('.added_prd_cont_combo.inc_active[p_id="' + p_id + '"]')
            }
            if (added_addon_prod == null) {
                let selected_product_addon = generate_html_tag('div', 'selected_product_addon');
                selected_product_addon.setAttribute('combo_id', combo_id)
                selected_product_addon.setAttribute('p_types', p_types)
                selected_product_addon.setAttribute('p_id', p_id)
                selected_product_addon.setAttribute('p_sku', p_sku)
                selected_product_addon.setAttribute('p_img', p_img)
                selected_product_addon.setAttribute('p_href', p_href)
                selected_product_addon.setAttribute('c_pid', c_pid)
                selected_product_addon.setAttribute('colour_text', colour_text)
                selected_product_addon.setAttribute('size_text', size_text)
                selected_product_addon.setAttribute('bid', bid)
                selected_product_addon.setAttribute('pname', pname)
                selected_product_addon.setAttribute('qty', qty)
                selected_product_addon.setAttribute('prc', prc)
                selected_product_addon.setAttribute('sprc', sprc)
                selected_product_addon.setAttribute('ic_ind', ic_ind)
                selected_product_addon.classList.add('inc_active')

                // let products_data = res_tocheck.ComboSet[i].Bundles[cb1].Products[jb];
                selected_product_addon.setAttribute('product_id', p_id)
                let selected_product_img_div = generate_html_tag('div', 'selected_product_img_div');
                let selected_product_img = generate_html_tag('img', 'selected_product_img');
                selected_product_img_div.appendChild(selected_product_img)
                selected_product_addon.appendChild(selected_product_img_div)

                selected_product_img.setAttribute('src', p_img);
                let selected_info_wrap = generate_html_tag('div', 'selected_info_wrap');
                selected_product_addon.appendChild(selected_info_wrap)

                let selected_product_qty = generate_html_tag('div', 'selected_product_qty');
                selected_product_qty.innerHTML = pname;
                selected_info_wrap.appendChild(selected_product_qty)
                let selected_attr_conf_wrap = generate_html_tag('div', 'selected_attr_conf_wrap');

                let selected_prc_conf_wrap = generate_html_tag('div', 'selected_prc_conf_wrap');
                selected_info_wrap.appendChild(selected_prc_conf_wrap)
                let selected_product_prc = generate_html_tag('span', 'selected_product_prc');
                if (+sprc != null && +sprc != +prc && +sprc != 0) {
                    selected_product_prc.innerHTML = formatter.format(sprc)
                } else {
                    selected_product_prc.innerHTML = formatter.format(prc)
                }
                selected_prc_conf_wrap.appendChild(selected_product_prc)

                let counter_div = generate_html_tag('div', 'counter_div');
                get_product_quantity_box(null, null, selected_info_wrap, counter_div, "collection", "combo");

                let selected_attr_size_text = generate_html_tag('span', 'selected_attr_size_text');
                if (size_text != null && size_text != "" && size_text != "null") {
                    selected_attr_size_text.innerHTML = "<span>Size: </span>" + size_text;
                }
                selected_attr_conf_wrap.appendChild(selected_attr_size_text)
                selected_info_wrap.appendChild(selected_attr_conf_wrap)

                let editremoveBlock = generate_html_tag('div', 'editremoveBlock');
                selected_product_addon.appendChild(editremoveBlock)
                let selected_product_edit = generate_html_tag('span', 'selected_product_edit');
                selected_product_edit.innerText = "Edit | ";
                selected_product_edit.setAttribute('onclick', 'inc_edit_item(this,\'' + p_id + '\')');
                // editremoveBlock.appendChild(selected_product_edit);
                let selected_product_remove = generate_html_tag('span', 'selected_product_remove');
                selected_product_remove.setAttribute('onclick', 'inc_remove_item(this,\'' + p_id + '\')');

                selected_product_remove.textContent = "Remove";
                editremoveBlock.appendChild(selected_product_remove);
                prod_addon_wrapper.appendChild(selected_product_addon);

                //dekstop image circle

                let prod_wise_wrapper_elm = document.querySelector('.prod_wise_wrapper_combo')

                let total_length_added_prd_cont_combo = document.querySelectorAll('.added_prd_cont_combo')
                let added_prd_cont = generate_html_tag('div', 'added_prd_cont_combo');
                added_prd_cont.classList.add('inc_active')
                added_prd_cont.setAttribute('p_id', p_id)
                added_prd_cont.setAttribute('c_pid', c_pid)
                added_prd_cont.setAttribute('product_id', p_id)

                let added_Image_wrap = generate_html_tag('div', 'added_Image_wrap_combo');
                let added_Image_elm = generate_html_tag('img', 'added_Image_elm_combo');
                let added_pr_qty = generate_html_tag('span', 'added_pr_qty');
                added_pr_qty.innerHTML = "1"
                added_pr_qty.setAttribute('style', 'display:none !important');
                let added_pr_close = generate_html_tag('span', 'added_pr_close');
                added_pr_close.setAttribute('pr_ind', ic_ind)
                added_Image_elm.setAttribute('src', p_img)
                added_Image_wrap.appendChild(added_Image_elm)
                added_prd_cont.appendChild(added_Image_wrap)
                added_prd_cont.appendChild(added_pr_qty)
                added_prd_cont.appendChild(added_pr_close)
                if (window.innerWidth > 767) {
                    added_pr_close.addEventListener("click", function (e) {

                        if (c_pid != null && c_pid != "") {
                            let selected_addon_rev = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_prod_list .selected_product_addon[c_pid="' + c_pid + '"]')
                            let added_elm_rev = selected_addon_rev;
                            if (added_elm_rev != null) {
                                added_elm_rev.parentNode.removeChild(added_elm_rev);
                            }
                        } else {
                            let selected_addon_rev = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_prod_list .selected_product_addon[p_id="' + p_id + '"]')
                            let added_elm_rev = selected_addon_rev;
                            if (added_elm_rev != null) {
                                added_elm_rev.parentNode.removeChild(added_elm_rev);
                            }
                        }
                        let added_elm = e.currentTarget.parentNode;
                        if (added_elm != null) {
                            added_elm.parentNode.removeChild(added_elm);
                        }
                        let pr_id = e.currentTarget.parentNode.getAttribute('p_id')
                        let ic_checked = document.querySelector('.ic_popup_module_wrapper .ic_product[data_selected_prod_id="' + pr_id + '"]')
                        if (ic_checked != null) {
                            ic_checked.querySelector('.inc_label').click();
                        }

                        bundle_vars.all_dup_child_prod = [];
                        bundle_vars.all_dup_push_prod = [];
                        bundle_vars.push_product_to_add = [];
                        getAllcheckboxchecked()
                    });
                }
                if (document.querySelector('.added_prd_cont_combo') == null) {
                    prod_wise_wrapper_elm.appendChild(added_prd_cont)
                } else {
                    let prod_wise_wrapper_elm = document.querySelector('.prod_wise_wrapper_combo .added_prd_cont_combo')
                    prod_wise_wrapper_elm.parentNode.insertBefore(added_prd_cont, prod_wise_wrapper_elm);
                }


            } else {
                let already_added_prod = added_addon_prod
                let prev_qty = already_added_prod.querySelector('input').value
                let qty_f = (+prev_qty + 1)
                already_added_prod.classList.add('inc_active');
                deks_addon.classList.add('inc_active');
                deks_addon.querySelector('.added_pr_qty').innerHTML = qty_f
                already_added_prod.querySelector('.q_holder .up.inc_icon_plus').click()

            }
            setTimeout(function () {
                if (document.querySelector('.ic_combo_mobile_product_avail_review_Block') != null) {
                    document.querySelector('.ic_combo_mobile_product_avail_review_Block').classList.remove('just_added')
                }

            }, 3400)
            // jQuery('.ic_popup_module_wrapper.inc_active').animate({ scrollTop: jQuery('.pdt_name').height() - 50 }, 'slow');
            setTimeout(function () {
                if (bundle_vars.rab_click_flag == true) {
                    if (document.querySelector('.ic_popup_module_wrapper .bundle_links_combo .bundle_link.inc_checked') != null && document.querySelector('.ic_popup_module_wrapper .bundle_links_combo .bundle_link.inc_checked').nextElementSibling != null) {
                        let tab_liactive = document.querySelector('.ic_popup_module_wrapper .bundle_links_combo .bundle_link.is-selected');
                        if (tab_liactive.nextElementSibling != null) {
                            if (tab_liactive.nextElementSibling.classList.contains('inc_checked') == false) {
                                tab_liactive.nextElementSibling.click()
                            } else if (tab_liactive.nextElementSibling.nextElementSibling != null) {
                                if (tab_liactive.nextElementSibling.nextElementSibling.classList.contains('inc_checked') == false) {
                                    tab_liactive.nextElementSibling.nextElementSibling.click()
                                } else if (tab_liactive.nextElementSibling.nextElementSibling.nextElementSibling != null) {
                                    if (tab_liactive.nextElementSibling.nextElementSibling.nextElementSibling.classList.contains('inc_checked') == false) {
                                        tab_liactive.nextElementSibling.nextElementSibling.nextElementSibling.click()
                                    } else if (tab_liactive.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling != null) {
                                        if (tab_liactive.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.contains('inc_checked') == false) {
                                            tab_liactive.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.click()
                                        }
                                    }
                                } else if (tab_liactive.previousElementSibling != null) {
                                    if (tab_liactive.previousElementSibling.classList.contains('inc_checked') == false) {
                                        tab_liactive.previousElementSibling.click()
                                    } else if (tab_liactive.previousElementSibling.previousElementSibling != null) {
                                        if (tab_liactive.previousElementSibling.previousElementSibling.classList.contains('inc_checked') == false) {
                                            tab_liactive.previousElementSibling.previousElementSibling.click()
                                        } else if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling != null) {
                                            if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.classList.contains('inc_checked') == false) {
                                                tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.click()
                                            } else if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling != null) {
                                                if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.contains('inc_checked') == false) {
                                                    tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.click()
                                                }
                                            }
                                        }
                                    }
                                }
                            } else if (tab_liactive.previousElementSibling != null) {
                                if (tab_liactive.previousElementSibling.classList.contains('inc_checked') == false) {
                                    tab_liactive.previousElementSibling.click()
                                } else if (tab_liactive.previousElementSibling.previousElementSibling != null) {
                                    if (tab_liactive.previousElementSibling.previousElementSibling.classList.contains('inc_checked') == false) {
                                        tab_liactive.previousElementSibling.previousElementSibling.click()
                                    } else if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling != null) {
                                        if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.classList.contains('inc_checked') == false) {
                                            tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.click()
                                        } else if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling != null) {
                                            if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.contains('inc_checked') == false) {
                                                tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.click()
                                            }
                                        }
                                    }
                                }
                            }
                        } else if (tab_liactive.previousElementSibling != null) {
                            if (tab_liactive.previousElementSibling.classList.contains('inc_checked') == false) {
                                tab_liactive.previousElementSibling.click()
                            } else if (tab_liactive.previousElementSibling.previousElementSibling != null) {
                                if (tab_liactive.previousElementSibling.previousElementSibling.classList.contains('inc_checked') == false) {
                                    tab_liactive.previousElementSibling.previousElementSibling.click()
                                } else if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling != null) {
                                    if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.classList.contains('inc_checked') == false) {
                                        tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.click()
                                    } else if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling != null) {
                                        if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.contains('inc_checked') == false) {
                                            tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.click()
                                        }
                                    }
                                }
                            }
                        }
                    } else if (document.querySelector('.ic_popup_module_wrapper .bundle_links_combo .bundle_link.inc_checked').previousElementSibling != null) {
                        let tab_liactive = document.querySelector('.ic_popup_module_wrapper .bundle_links_combo .bundle_link.is-selected');
                        if (tab_liactive.previousElementSibling != null) {
                            if (tab_liactive.previousElementSibling.classList.contains('inc_checked') == false) {
                                tab_liactive.previousElementSibling.click()
                            } else if (tab_liactive.previousElementSibling.previousElementSibling != null) {
                                if (tab_liactive.previousElementSibling.previousElementSibling.classList.contains('inc_checked') == false) {
                                    tab_liactive.previousElementSibling.previousElementSibling.click()
                                } else if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling != null) {
                                    if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.classList.contains('inc_checked') == false) {
                                        tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.click()
                                    } else if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling != null) {
                                        if (tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.contains('inc_checked') == false) {
                                            tab_liactive.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.click()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (document.querySelector('.ic_popup_module_wrapper .ic_product.active') != null) {
                    // let sel_wrap=document.querySelector('.ic_popup_module_wrapper.active');
                    // let sel_ind=sel_wrap.querySelector('.ic_product.active').getAttribute('')

                }
            }, 1000)
        } else {
            let ic_prod_div = elm.parentNode.parentNode.parentNode.parentNode.parentNode;

            let p_id = ic_prod_div.getAttribute('data_selected_prod_id');
            let p_sku = ic_prod_div.getAttribute('data_selected_prod_sku');
            let c_pid = "";
            let combo_id = ic_prod_div.getAttribute('combo_id')


            if (ic_prod_div.querySelector('.selection_bundle ul.prod_Size') != null) {
                c_pid = ic_prod_div.querySelector('.selection_bundle ul.prod_Size li.inc_active a').getAttribute('c_pid');

            }
            if (ic_prod_div.querySelector('.selection_bundle ul.prod_color') != null) {
                c_pid = ic_prod_div.querySelector('.selection_bundle ul.prod_color li.inc_active a').getAttribute('c_pid');

            }

            ic_prod_div.querySelector('.inc_selected_span').innerHTML = "Add Product to Bundle";

            ic_prod_div.querySelector('.inc_label').classList.remove('inc_checked');
            ic_prod_div.classList.remove('inc_checked')

            if (c_pid != null && c_pid != "") {
                let total_length = 0;
                if (document.querySelector('.ic_popup_module_wrapper.inc_active  .ic_build_bundle.inc_active .prod_wise_wrapper_combo .added_prd_cont_combo[p_id="' + p_id + '"]') != null) {
                    total_length = document.querySelectorAll('.ic_popup_module_wrapper.inc_active  .ic_build_bundle.inc_active .prod_wise_wrapper_combo .added_prd_cont_combo.inc_active[p_id="' + p_id + '"]').length
                }
                if (document.querySelector('.ic_popup_module_wrapper.inc_active  .ic_build_bundle.inc_active .prod_wise_wrapper_combo .added_prd_cont_combo[c_pid="' + c_pid + '"]') != null) {
                    document.querySelector('.ic_popup_module_wrapper.inc_active  .ic_build_bundle.inc_active .prod_wise_wrapper_combo .added_prd_cont_combo[c_pid="' + c_pid + '"]').classList.remove('inc_active')
                }
                if (document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_prod_list .selected_product_addon[c_pid="' + c_pid + '"]') != null) {
                    document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_prod_list .selected_product_addon[c_pid="' + c_pid + '"]').classList.remove('inc_active')
                }
                if (document.querySelector('.bundle_links_combo .bundle_link[product_id="' + p_id + '"]') != null) {
                    if (total_length == 1) {
                        document.querySelector('.bundle_links_combo .bundle_link[product_id="' + p_id + '"]').classList.remove('inc_checked')
                    }
                }
                let selected_addon_rev = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_prod_list .selected_product_addon[c_pid="' + c_pid + '"]')
                let added_elm_rev = selected_addon_rev;
                if (added_elm_rev != null) {
                    added_elm_rev.parentNode.removeChild(added_elm_rev);
                }
                let added_elm = document.querySelector('.added_prd_cont_combo[c_pid="' + c_pid + '"]')
                if (added_elm != null) {
                    added_elm.parentNode.removeChild(added_elm);
                }
                //document.querySelector('.bundle_links_combo .bundle_link')
            } else {
                if (document.querySelector('.ic_popup_module_wrapper.inc_active  .ic_build_bundle.inc_active .prod_wise_wrapper_combo .added_prd_cont_combo[p_id="' + p_id + '"]') != null) {
                    document.querySelector('.ic_popup_module_wrapper.inc_active  .ic_build_bundle.inc_active .prod_wise_wrapper_combo .added_prd_cont_combo[p_id="' + p_id + '"]').classList.remove('inc_active')
                }
                if (document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_prod_list .selected_product_addon[p_id="' + p_id + '"]') != null) {
                    document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_prod_list .selected_product_addon[p_id="' + p_id + '"]').classList.remove('inc_active')
                }
                if (document.querySelector('.bundle_links_combo .bundle_link[product_id="' + p_id + '"]') != null) {
                    document.querySelector('.bundle_links_combo .bundle_link[product_id="' + p_id + '"]').classList.remove('inc_checked')
                }
                let selected_addon_rev = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_prod_list .selected_product_addon[p_id="' + p_id + '"]')
                let added_elm_rev = selected_addon_rev;
                if (added_elm_rev != null) {
                    added_elm_rev.parentNode.removeChild(added_elm_rev);
                }

                let added_elm = document.querySelector('.added_prd_cont_combo[p_id="' + p_id + '"]')
                if (added_elm != null) {
                    added_elm.parentNode.removeChild(added_elm);
                }
            }

            document.querySelectorAll('.ic_popup_module_wrapper.inc_active  .ic_build_bundle.inc_active .ic_product_bundling.inc_active .bundle_links_combo li')[index].classList.remove('inc_checked')
        }
        bundle_vars.all_dup_child_prod = [];
        bundle_vars.all_dup_push_prod = [];
        bundle_vars.push_product_to_add = [];
        getAllcheckboxchecked()

    }
    function build_bundle_toggle(prod_id, prod_url, combo_id, elm) {
        // jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        if (document.querySelector('.inc_product_checkout .add_bundle_btn') != null) {
            document.querySelector('.inc_product_checkout .add_bundle_btn').classList.remove('loading')
        }
        if (document.querySelector('.ic_product_bundling.inc_active div[comboid="' + combo_id + '"]') != null) {
            let combo_wrapper = document.querySelector('.ic_product_bundling.inc_active div[comboid="' + combo_id + '"]');

            if (window.innerWidth < 820) {
                document.querySelector('html').classList.add('body_inc_overlay')
            }
            if (combo_wrapper.querySelector('.ic_popup_module_wrapper.inc_active') == null) {
                combo_wrapper.querySelector('.ic_popup_module_wrapper').classList.add('inc_active')
            }
            if (document.querySelector('#increasingly_element.inc_configure_active') == null) {
                document.querySelector('#increasingly_element').classList.add('inc_configure_active')
            }
            if (document.querySelector('.ic_colelction_steps_block.inc_active') == null) {
                document.querySelector('.ic_colelction_steps_block').classList.add('inc_active')
            }
            if (prod_id != null) {
                if (combo_wrapper.querySelector('.bundle_link[product_id="' + prod_id + '"]') != null) {
                    combo_wrapper.querySelector('.bundle_link[product_id="' + prod_id + '"]').click()
                }
            }
            if (combo_wrapper.querySelector('.ic_prod_details.inc_in_active') == null) {
                combo_wrapper.querySelector('.ic_prod_details').classList.add('inc_in_active')
            }

            if (combo_wrapper.querySelector('#ic_build_bundle.inc_active') == null) {
                combo_wrapper.querySelector('#ic_build_bundle').classList.add('inc_active')
            }
            let all_ic_product = document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_combo_prod_wrapper .ic_product')
            for (s = 0; s < all_ic_product.length; s++) {
                if (all_ic_product[s].querySelector('.select_wrapper ul li') != null) {
                    all_ic_product[s].querySelector('.select_wrapper ul li').click()
                }
            }
            bundle_vars.all_dup_child_prod = [];
            bundle_vars.all_dup_push_prod = [];
            bundle_vars.push_product_to_add = [];
            getAllcheckboxchecked()
            if (window.innerWidth < 600) {
                setTimeout(function () {
                    // $('.ic_popup_module_wrapper.inc_active .ic_popup_module').animate({ scrollTop: $('.ic_popup_module_wrapper.inc_active .ic_popup_module').height() }, 'slow');
                }, 2000)
            }
        }

    }
    function combo_tab_selection(elm) {
        bundle_vars.rab_click_flag = false
        let ic_prod_elm = document.querySelectorAll('.ic_popup_module_wrapper.inc_active .ic_product_bundling.inc_active .ic_product')

        let ind = elm.getAttribute('tab_index')
        // /elm.classList.add('is-selected')
        // elm.parentNode.querySelector('.bundle_link.is-selected').classList.remove('is-selected');
        let all_ic_li = elm.parentNode.querySelectorAll('.bundle_link')
        for (a = 0; a < all_ic_li.length; a++) {
            all_ic_li[a].classList.remove('is-selected');
            all_ic_li[a].querySelector('a').classList.remove('inc_active')
        }
        elm.classList.add('is-selected')
        elm.querySelector('a').classList.add('inc_active')
        for (b = 0; b < ic_prod_elm.length; b++) {
            ic_prod_elm[b].classList.remove('inc_active');
            ic_prod_elm[b].querySelector('a').classList.remove('inc_active')

        }
        if (ic_prod_elm[ind] != undefined) {
            ic_prod_elm[ind].classList.add('inc_active')
            ic_prod_elm[ind].querySelector('a').classList.add('inc_active')
        }
        let menu = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_combo_prod_wrapper');
        if (ind == 0) {
            let slide_value = ind
        } else {
            let slide_value = (ind * 100)
        }
        // menu.style['transitionDuration'] = '0.3s'
        // menu.style['marginLeft'] = "-"+slide_value + "%";
        if (menu != null) {
            menu.setAttribute('style', 'margin-left:-' + slide_value + '%;transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;');
        }
        setTimeout(function () {
            // jQuery('.ic_popup_module_wrapper.inc_active').animate({ scrollTop: jQuery('.pdt_name').height() - 50 }, 'slow');
        }, 700)
        bundle_vars.all_dup_child_prod = [];
        bundle_vars.all_dup_push_prod = [];
        bundle_vars.push_product_to_add = [];
        getAllcheckboxchecked()
    }

    function inc_tab_product_slider(elm, dir) {
        if (dir == "prev") {
            let nn = -1
            inc_slideIndex += nn
        } else {
            let nn = 1
            inc_slideIndex += nn
        }
        //ic_product combo_ic_product inc_1 popup_overlay
        let bundle_ind = document.querySelectorAll(".ic_popup_module_wrapper.inc_active .ic_product.inc_active")[0].getAttribute('prod_index')

        let slides = document.querySelectorAll(".ic_popup_module_wrapper.inc_active .ic_product");
        let li = document.querySelector(".ic_popup_module_wrapper.inc_active .ic_product.inc_active");
        let dots = document.querySelectorAll(".ic_popup_module_wrapper.inc_active .bundle_links_combo li");
        let dots_qc = document.querySelectorAll(".ic_popup_module_wrapper.inc_active .bundle_links_combo li");
        let dot = document.querySelector(".ic_popup_module_wrapper.inc_active .bundle_links_combo li.is-selected");
        if (+bundle_ind + 1 == slides.length) {
            if (dir == "next") {
                bundle_ind = -1;
            }
        }
        if (+bundle_ind + 1 == 1) {
            if (dir == "prev") {
                bundle_ind = slides.length;
            }
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('inc_active');
        }

        if (dir == "prev") {
            if (slides[+bundle_ind - 1] != undefined) {
                slides[+bundle_ind - 1].classList.add('inc_active');
                if (document.querySelector('.ic_popup_module_wrapper.inc_active .ic_combo_prod_wrapper') != null) {
                    let menu = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_combo_prod_wrapper');
                    if (+bundle_ind - 1 == 0) {
                        let slide_value = +bundle_ind - 1
                    } else {
                        let slide_value = (+bundle_ind - 1) * 100
                    }
                    // menu.style['transitionDuration'] = '0.3s'
                    // menu.style['marginLeft'] = "-"+slide_value + "%";
                    menu.setAttribute('style', 'margin-left:-' + slide_value + '%;transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')

                }
            }
        } else {
            if (slides[+bundle_ind + 1] != undefined) {
                slides[+bundle_ind + 1].classList.add('inc_active');
                if (document.querySelector('.ic_popup_module_wrapper.inc_active .ic_combo_prod_wrapper') != null) {
                    let menu = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_combo_prod_wrapper');
                    if (+bundle_ind + 1 == 0) {
                        let slide_value = +bundle_ind + 1
                    } else {
                        let slide_value = (+bundle_ind + 1) * 100
                    }
                    // menu.style['transitionDuration'] = '0.3s'
                    // menu.style['marginLeft'] = "-"+slide_value + "%";
                    menu.setAttribute('style', 'margin-left:-' + slide_value + '%;transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')

                }
            }
        }
        for (let r = 0; r < dots_qc.length; r++) {
            dots_qc[r].classList.remove('is-selected');
        }
        if (dir == "prev") {
            if (dots_qc[+bundle_ind - 1] != undefined) {
                dots_qc[+bundle_ind - 1].classList.add('is-selected');
            }
        } else {
            if (dots_qc[+bundle_ind + 1] != undefined) {
                dots_qc[+bundle_ind + 1].classList.add('is-selected');
            }
        }

    }


    setInterval(function () {
        if (document.querySelector('#cloudIqCloseIframe') != null) {
            document.querySelector('#cloudIqCloseIframe').click()
        }
    }, 200)

    function inc_qtybasedbundle_collection(elm) {
        let q_holder_elm = elm.parentNode.parentNode.parentNode
        let packOf = elm.getAttribute('packof');
        packOf = packOf.trim();
        if (q_holder_elm.querySelector('.collection_ic_prod_qty.inc_active') != null) {
            q_holder_elm.querySelector('.collection_ic_prod_qty.inc_active').classList.remove('inc_active');
        }
        elm.classList.add('inc_active')
        q_holder_elm.querySelector('.q_holder input').value = packOf;
        bundle_vars.all_dup_child_prod = [];
        bundle_vars.all_dup_push_prod = [];
        bundle_vars.push_product_to_add = [];
        getAllcheckboxchecked()
    }

    function inc_remove_item(obj, pr_id) {
        let rem_item = obj.parentNode;
        let ic_div = obj.parentNode.parentElement

        rem_item.classList.remove('inc_active');
        let p_id = ic_div.getAttribute('p_id');
        let c_pid = "";
        c_pid = ic_div.getAttribute('c_pid');
        if (c_pid != null && c_pid != "") {
            let selected_addon_rev = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_prod_list .selected_product_addon[c_pid="' + c_pid + '"]')
            let added_elm_rev = selected_addon_rev;
            if (added_elm_rev != null) {
                added_elm_rev.parentNode.removeChild(added_elm_rev);
            }
            let added_elm = document.querySelector('.added_prd_cont_combo[c_pid="' + c_pid + '"]')
            if (added_elm != null) {
                added_elm.parentNode.removeChild(added_elm);
            }
        } else {
            let selected_addon_rev = document.querySelector('.ic_popup_module_wrapper.inc_active .ic_collection_review_prod_list .selected_product_addon[p_id="' + p_id + '"]')
            let added_elm_rev = selected_addon_rev;
            if (added_elm_rev != null) {
                added_elm_rev.parentNode.removeChild(added_elm_rev);
            }

            let added_elm = document.querySelector('.added_prd_cont_combo[p_id="' + p_id + '"]')
            if (added_elm != null) {
                added_elm.parentNode.removeChild(added_elm);
            }
        }

        let ic_checked = document.querySelector('.ic_popup_module_wrapper .ic_product[data_selected_prod_id="' + pr_id + '"]')
        if (ic_checked != null) {
            ic_checked.querySelector('.inc_label').click();
        }

        if (document.querySelector('.ic_collection_review_prod_list .selected_product_addon') == null) {
            if (document.querySelector('.inc_continue_shopping') != null) {
                setTimeout(function () {
                    document.querySelector('.inc_continue_shopping').click()
                }, 1000)
            }
        }
        bundle_vars.all_dup_child_prod = [];
        bundle_vars.all_dup_push_prod = [];
        bundle_vars.push_product_to_add = [];
        getAllcheckboxchecked()
    }

    function get_product_description(product_data, info_wrap) {

        product_data.Description = product_data.Description.replace('http://', 'https://').replace('http://', 'https://').replace('http://', 'https://');

        product_data.Description = product_data.Description.replace('www.scandibon.co.uk', 'www.scandiborn.com').replace('www.scandibon.co.uk', 'www.scandiborn.com');

        let short_desc_block = generate_html_tag('div', 'short_desc_block');
        info_wrap.appendChild(short_desc_block)

        let long_desc_block = generate_html_tag('div', 'long_desc_block');
        info_wrap.appendChild(long_desc_block)
        let long_desc_text_wrapper = generate_html_tag('div', 'long_desc_text_wrapper');
        long_desc_block.appendChild(long_desc_text_wrapper)
        let short_desc = product_data.Description;
        let deschtml = document.createElement('div')
        deschtml.innerHTML = short_desc;
        let desctext = ""
        let descrtotext = ""
        if (deschtml.querySelector('.m_product-description') != null) {
            let desctext = deschtml.querySelector('.m_product-description').innerText.trim().split('\n')[0]
        }
        if (desctext == "") {
            if (product_data.Description.split('\n')[2] != undefined) {
                if (product_data.Description.split('\n')[2].length > 135) {
                    if (window.innerWidth > 767) {
                        desctext = product_data.Description.split('\n')[2].substring(0, 134);
                    } else {
                        desctext = product_data.Description.split('\n')[2].substring(0, 60);
                    }
                }
            } else {
                if (product_data.Description.length > 135) {
                    if (window.innerWidth > 767) {
                        desctext = product_data.Description.substring(0, 134);
                    } else {
                        desctext = product_data.Description.substring(0, 60);
                    }
                }
            }
        } else {
            if (desctext.length > 130) {
                if (window.innerWidth > 767) {
                    desctext = desctext.trim().substring(0, 120);
                } else {
                    desctext = desctext.trim().substring(0, 60);
                }
            }
        }
        short_desc_block.innerHTML = desctext + "..." + "<a class='inc_readMore' onClick='read_more_inc_col(this)'>Read More</a>";
        long_desc_text_wrapper.innerHTML = product_data.Description;
        let close_read_more = document.createElement('div');
        close_read_more.classList.add('close_read_more');
        long_desc_block.appendChild(close_read_more)

        close_read_more.addEventListener('click', function (e) {
            let close_read_more_page = e.target.parentNode
            close_read_more_page.classList.remove('show_full_desc')
        });
    }

    function get_product_promotion(product_data, info_wrap) {
        let promo_object = ""
        if (product_data.ProductLevelDiscountMessage != null) {
            promo_object = product_data.ProductLevelDiscountMessage
        } else {
            promo_object = product_data.PromotionalMessage
        }
        if (info_wrap.querySelector('.pc_promo_div') == null && promo_object != null && promo_object != "") {
            let ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('inc_active')
            let ec_promo_span = document.createElement('span');
            ec_promo_span.classList.add('pc_promo_span')

            ec_promo_span.classList.add('red_promo')
            ec_promo_span.innerHTML = promo_object.replace("_", " ")
            ec_promo_div.appendChild(ec_promo_span);
            info_wrap.appendChild(ec_promo_div)

        } else {
            let ec_promo_div = document.createElement('div');
            ec_promo_div.classList.add('pc_promo_div')
            ec_promo_div.classList.add('empty');
            info_wrap.appendChild(ec_promo_div)
        }
    }
    function read_more_inc_col(element) {
        let prod_desc_block = element.parentNode.parentNode;
        prod_desc_block.querySelector('.long_desc_block').classList.toggle('show_full_desc');
    }

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });



    function desc_spec_tab(element) {
        if (element.parentNode.querySelector('li.inc_active') != null) {
            element.parentNode.querySelector('li.inc_active').classList.remove('inc_active')
        }
        element.classList.add('inc_active')
        let tab_li = element.parentNode.parentNode;
        let ind_tab = element.getAttribute('ind');
        if (tab_li.querySelector('.description_details.inc_active') != null) {
            tab_li.querySelector('.description_details.inc_active').classList.remove('inc_active')
        }
        if (tab_li.querySelector('#list_details' + ind_tab + '') != null) {
            tab_li.querySelector('#list_details' + ind_tab + '').classList.add('inc_active')
        }

        console.log("element")
    }
    function collection_thumbnail_slider(wrapper, ind) {
        let circle1 = generate_html_tag('div', 'circle1');
        let circle = generate_html_tag('div', 'circle');
        let get_next = generate_html_tag('a', 'next_el');
        let get_prev = generate_html_tag('a', 'prev_el');
        circle1.setAttribute('id', 'inc_next')
        circle.setAttribute('id', 'inc_previous')
        get_next.textContent = "Next"
        get_prev.textContent = "Previous";
        circle1.setAttribute('onclick', 'inc_thumbnail_slide("right",this)');
        circle.setAttribute('onclick', 'inc_thumbnail_slide("left",this)');

        circle1.appendChild(get_next);
        circle.appendChild(get_prev);
        wrapper.appendChild(circle1);
        wrapper.appendChild(circle);
    }
    function inc_thumbnail_slide(dir, elm) {
        //bundle_vars.thumbnail_slide
        let active_dots = document.querySelector('.inc_dots_block .inc_dot.inc_active');
        if (active_dots == null) {
            let active_dots = document.querySelector('.inc_dots_block .inc_dot');
            if (document.querySelector('.combo_img_thumbnail li') != null) {
                if (document.querySelector('.combo_img_thumbnail li.inc_active') == null) {
                    document.querySelector('.combo_img_thumbnail li').click()
                }
            }
        }

        if (dir == "right") {
            if (active_dots.nextElementSibling != null) {
                active_dots.nextElementSibling.click();
                let index_of_dot = active_dots.nextElementSibling.getAttribute('index')
            } else {
                let active_dots_start = document.querySelector('.inc_dots_block .inc_dot');
                let index_of_dot = active_dots_start.getAttribute('index');
                active_dots_start.click();
            }

        } else {
            if (active_dots.previousElementSibling != null) {
                active_dots.previousElementSibling.click();
                let index_of_dot = active_dots.previousElementSibling.getAttribute('index')
            } else {
                let last_dot = document.querySelectorAll('.inc_dots_block .inc_dot').length;
                let active_dots_start = document.querySelectorAll('.inc_dots_block .inc_dot')[last_dot - 1];
                active_dots_start.click();
                let index_of_dot = active_dots_start.getAttribute('index')
            }
        }
        if (index_of_dot != null && index_of_dot != "null") {
            if (document.querySelector('.combo_img_thumbnail li[index="' + index_of_dot + '"]') != null) {
                document.querySelector('.combo_img_thumbnail li[index="' + index_of_dot + '"]').click();
            }
        }
    }


    function enlargezoomImage() {

        let zoomedImage = document.querySelectorAll('.enlarge_zoom_img');

        for (z = 0; z < zoomedImage.length; z++) {
            // Zoom image on mouse enter.
            zoomedImage[z].addEventListener('mouseenter', function (e) {
                this.style.backgroundSize = "250%";
            }, false);


            // Show different parts of image depending on cursor position.
            zoomedImage[z].addEventListener('mousemove', function (e) {

                // getBoundingClientReact gives us various information about the position of the element.
                let dimentions = this.getBoundingClientRect();

                // Calculate the position of the cursor inside the element (in pixels).
                let x = e.clientX - dimentions.left;
                let y = e.clientY - dimentions.top;

                // Calculate the position of the cursor as a percentage of the total width/height of the element.
                let xpercent = Math.round(100 / (dimentions.width / x));
                let ypercent = Math.round(100 / (dimentions.height / y));

                // Update the background position of the image.
                this.style.backgroundPosition = xpercent + '% ' + ypercent + '%';

            }, false);


            // When leaving the container zoom out the image back to normal size.
            zoomedImage[z].addEventListener('mouseleave', function (e) {
                this.style.backgroundSize = "cover";
                this.style.backgroundPosition = "center";
            }, false);
        }


    }

    function isBase64(str) {
        try {
            return btoa(atob(str)) == str;
        } catch (err) {
            return false;
        }
    }
    let Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (e) {
            let t = "";
            let n, r, i, s, o, u, a;
            let f = 0;
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
        decode: function (e) {
            let t = "";
            let n, r, i;
            let s, o, u, a;
            let f = 0;
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
        _utf8_encode: function (e) {
            e = e.replace(/rn/g, "n");
            let t = "";
            for (let n = 0; n < e.length; n++) {
                let r = e.charCodeAt(n);
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
        _utf8_decode: function (e) {
            let t = "";
            let n = 0;
            let r = c1 = c2 = 0;
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

    function isIE() {
        ua = navigator.userAgent;
        /* MSIE used to detect old browsers and Trident used to newer ones*/
        let is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

        return is_ie;
    }
    /* Create an alert to show if the browser is IE or not */

    function irbReq_is_categ_recomendation() {
        let bundleResponse = "";
        recommendation_tracking = true
        let elementName = "catalog_product_view";
        let productId = client_vars.product_ids[0];
        let bundleReqCount = 10;

        let irbPATH = 'https://usarapidload.increasingly.co/increasingly_bundles?irb/';

        let irbReqParams =
            "product_ids=" + productId +
            "&category_id=" +
            "&api_key=" + client_vars.api_key +
            "&client_id=" +
            "&page_type=" + elementName +
            "&fr=" + "1" +
            "&client_visitor_id=" + readCookie('ivid') +
            "&rc=" + "1" +
            "&rmr=" + "1"
        let param = btoa(irbReqParams)
        let irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
        let xhr = new XMLHttpRequest();
        xhr.open("GET", irbReqURL1, true);

        xhr.onload = function () { }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status === 200) {
                if (xhr.response != "") {
                    if (switch_board.its_plp_page) {
                        let respon = JSON.parse(xhr.response)
                        localStorage.setItem('incRECBundle', JSON.stringify(respon))
                        cb_tc(JSON.parse(xhr.response), "recommendation");
                    }
                }
            }
        }

        xhr.send(JSON.stringify(param));
    }

    function cb_tc(bundle_response, recommendation) {
        let bundles_tc = bundle_response.Bundles;
        let pdpProductId = client_vars.product_ids[0]
        let irbProductsArray = bundle_response.CategoryRecommendations
        if (irbProductsArray != null) {
            createRECBlock(irbProductsArray)
        }

    }
    function createRECBlock(irbProductsArray) {
        //to remove old block
        if (document.querySelector('.inc_af_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_af_block'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
        let cart_html = '<div class="inc_af_title_block" style="clear: both;"><div class="inc_af_title_text_block"><div class="inc_af_title_text">Customers also bought</div><div class="inc_af_modal_close"></div></div></div><div class="inc_af_bundles_block"><div class="inc_af_left_block"><div class="inc_af_left_btn_block"><div class="inc_af_left_btn_img_block"><div class="inc_af_left_btn_img"></div></div></div></div><div class="inc_af_product-list-main_block"><div class="inc_af_product-list_block"></div></div><div class="inc_af_right_block"><div class="inc_af_right_btn_block"><div class="inc_af_right_btn_img_block"><div class="inc_af_right_btn_img"></div></div></div></div></div>'
        let amBlock = generate_html_tag('div', 'inc_af_block')
        amBlock.classList.add('inc_recommendations')
        amBlock.innerHTML = cart_html


        if (document.querySelector('.relative.main-content') != null) {
            let sibling = document.querySelector('.relative.main-content')
            sibling.appendChild(amBlock, sibling)
        } else if (document.querySelector('#shopify-section-newsletter') != null) {
            let sibling = document.querySelector('#shopify-section-newsletter')
            sibling.parentNode.insertBefore(amBlock, sibling)
        }

        let recModuleArray = irbProductsArray
        let duplamid = []
        let amProductListBlock = amBlock.querySelector(".inc_af_product-list_block");
        let elAmTitleText = amBlock.querySelector(".inc_af_title_text_block")

        for (pr = 0; pr < irbProductsArray.length; pr++) {
            if (duplamid.indexOf(irbProductsArray[pr].ProductId) == -1) {
                duplamid.push(irbProductsArray[pr].ProductId)

                let productModuleBlock = generate_html_tag('div', 'inc_product_module_block')
                let elProductShowcaseBlock = generate_html_tag('div', 'inc_product_showcase_block');
                amProductListBlock.appendChild(productModuleBlock);
                elAmTitleText.innerHTML = "<span class='inc_rec_title'>Best selling similar products</span>"
                let productcardhtml = '<div class="inc_product_block"> <div class="inc_product_info_main_block"> <div class="inc_product_view_info_block"> <div class="inc_product_view_img_desc_block"> <div class="inc_product_img_block"> <div class="inc_product_img_main_block"> <div class="inc_product_img_main_img_block"> <div class="inc_product_img_main_img"> </div></div></div></div></div></div><div class="inc_product_desc_block"> <div class="inc_product_desc_title_block"> <div class="inc_product_desc_title_text_block"> <div class="inc_product_manufacture_text_block"><div class="inc_product_maufacture_text"></div></div><div class="inc_product_desc_title_text"> </div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_product_desc_price_block"><div class="inc_product_price_label_block"></div><div class="inc_product_desc_price_active_block"> <div class="inc_product_desc_price_active_text_block"> <div class="inc_product_desc_price_active_text"></div><div class="inc_product_desc_price_active_text_msg"></div></div></div><div class="inc_product_desc_price_regular_block"> <div class="inc_product_desc_price_regular_text_block"><div class="inc_product_desc_price_regular_text"></div></div></div></div></div></div></div>'
                elProductShowcaseBlock.innerHTML = productcardhtml
                productModuleBlock.appendChild(elProductShowcaseBlock)
                let productBlock = elProductShowcaseBlock.querySelector('.inc_product_block')
                let elTitleBlock = elProductShowcaseBlock.querySelector('.inc_product_desc_title_block');
                let elImgBlock = elProductShowcaseBlock.querySelector('.inc_product_img_block');
                let elTitleText = elProductShowcaseBlock.querySelector('.inc_product_desc_title_text');
                let elTitleTextBlock = elProductShowcaseBlock.querySelector('.inc_product_desc_title_text_block');
                let elPriceActiveText = productBlock.querySelector('.inc_product_desc_price_active_text');;
                let elPriceActiveMsg = productBlock.querySelector('.inc_product_desc_price_active_text_msg');
                let elPriceRegularText = productBlock.querySelector('.inc_product_desc_price_regular_text');
                let incPriceBlock = productBlock.querySelector('.inc_product_desc_price_block');
                let elMaufactureText = productBlock.querySelector('.inc_product_maufacture_text');
                let offerTag = document.createElement('div');
                offerTag.classList.add("inc_product_promo_offer_block");
                let offerTagSapn = document.createElement('span');
                offerTagSapn.classList.add("inc_promo_offer");
                offerTagSapn.innerHTML = "Offer"
                offerTag.appendChild(offerTagSapn)
                elImgBlock.parentNode.insertBefore(offerTag, elImgBlock)
                offerTag.style.display = "none"
                //ProductName
                //Price
                //SpecialPrice
                //ImageURL
                //ProductUrl
                if (irbProductsArray[pr].Manufacturer != null) {
                    elMaufactureText.innerText = irbProductsArray[pr].Manufacturer
                }

                let elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');
                let elImgTag1 = generate_html_tag('img');
                elImgTag1.src = irbProductsArray[pr].ImageURL
                if (elImgTag1 == true) {
                    elImgTag.src = irbProductsArray[pr].ImageURL
                }
                elImgTag1.setAttribute('role', 'img')
                elImgTag1.setAttribute('aria-label', 'Image')
                elImgTag1.setAttribute('alt', irbProductsArray[pr].ProductName)
                let productLink = document.createElement('a');
                productLink.href = irbProductsArray[pr].ProductUrl;
                productLink.appendChild(elImgTag1);
                productLink.setAttribute('imageURL', irbProductsArray[pr].ImageURL)
                elImgMainImg.appendChild(productLink);
                productLink.setAttribute("href", irbProductsArray[pr].ProductUrl);
                productLink.setAttribute('onClick', 'return trackProductNavigation(\'' + irbProductsArray[pr].ProductId + '\',\'' + irbProductsArray[pr].ProductUrl + '\',"rec")');


                let pTitleDiv = document.createElement('div');
                pTitleDiv.innerHTML = irbProductsArray[pr].ProductName;
                // let field1 = productObj.ratingsCount
                // let field2 = productObj.reviewsCount
                // let elratingsBlock = productBlock.querySelector('.inc_product_desc_ratings_block');
                // INC_COL.methods.get_product_ratings_col(field1, field2, elratingsBlock);
                let pLink = document.createElement('a');
                pLink.href = irbProductsArray[pr].ProductUrl;
                pLink.setAttribute('title', irbProductsArray[pr].ProductName)
                pLink.setAttribute('href', irbProductsArray[pr].ProductUrl)
                pLink.setAttribute('onClick', 'return trackProductNavigation(\'' + irbProductsArray[pr].ProductId + '\',\'' + irbProductsArray[pr].ProductUrl + '\',"rec")');
                pLink.appendChild(pTitleDiv);
                elTitleText.appendChild(pLink);

                if (irbProductsArray[pr].SpecialPrice != null) {
                    let activePrice = parseFloat(irbProductsArray[pr].SpecialPrice).toFixed(2).toString();
                    let regularPrice = parseFloat(irbProductsArray[pr].Price).toFixed(2).toString();
                } else {
                    let activePrice = parseFloat(irbProductsArray[pr].Price).toFixed(2).toString();
                    let regularPrice = parseFloat(irbProductsArray[pr].Price).toFixed(2).toString();
                }


                elPriceRegularText.textContent = "";
                if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                    elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
                    //elPriceActiveText.innerHTML = "Now " + formatter.format(activePrice)
                    elPriceActiveText.innerHTML = formatter.format(activePrice)
                    elPriceRegularText.innerHTML = "<span>Was  </span>" + "<span>" + formatter.format(regularPrice) + "</span>"
                } else {
                    elPriceActiveText.innerHTML = formatter.format(activePrice)
                }


            }
        };
        amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "hidden";
        amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "hidden";
        amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "hidden";
        amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "hidden";
        let productBlocks = amProductListBlock.querySelectorAll('.inc_product_module_block');
        let sliderBtnCounter = 0;
        let prod_sl_c = 1
        if (productBlocks.length > prod_sl_c) {
            amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "visible";
            amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "visible";
            amBlock.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
            amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "visible";
            amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "visible";
            amBlock.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
        }
        let cc_ount = 1;
        if (window.innerWidth >= 1075) {
            cc_ount = 4
        } else {
            cc_ount = 3
        }
        if (productBlocks.length <= cc_ount) {
            amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "hidden";
        }
        amBlock.querySelector('.inc_af_right_btn_block').addEventListener("click", function () {
            sliderBtnCounter++;
            if (sliderBtnCounter > productBlocks.length - 1) {
                sliderBtnCounter--;
            }
            let all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
            let cc_ount = 1;
            if (window.innerWidth >= 1075) {
                cc_ount = 4
            } else {
                cc_ount = 3
            }
            let width_slide = 266;

            if (window.innerWidth >= 1366) {
                width_slide = 306 //1201, 1252, 1253
            } else if (window.innerWidth >= 1201) {
                width_slide = 266 //1201, 1252, 1253
            } else {
                width_slide = 263
            }
            if (+slidevalue + +cc_ount < all_p_length) {
                amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                slidevalue++
                offset = (parseInt(offset) - width_slide) + 'px';
                let menu = amBlock.parentNode.parentNode.querySelector('.inc_af_product-list_block');
                menu.setAttribute('style', 'margin-left:' + offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                if (document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active') != null) {
                    document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active').classList.remove('inc_active')
                }
                if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+slidevalue] != null) document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+slidevalue].classList.add('inc_active')
            }
            if (+slidevalue + +cc_ount == all_p_length) {
                amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            }
        });
        amBlock.querySelector('.inc_af_left_btn_block').addEventListener("click", function () {
            sliderBtnCounter--;
            if (sliderBtnCounter == -1) sliderBtnCounter = 0;
            let all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
            if (slidevalue == -1) slidevalue = 0;
            let width_slide = ""

            let width_slide = 266;

            if (window.innerWidth >= 1366) {
                width_slide = 306 //1201, 1252, 1253
            } else if (window.innerWidth >= 1201) {
                width_slide = 266 //1201, 1252, 1253
            } else {
                width_slide = 263
            }
            //  }
            if (slidevalue > 0) {
                amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                slidevalue--
                offset = (parseInt(offset) + width_slide) + 'px';
                let menu = amBlock.parentNode.parentNode.querySelector('.inc_af_product-list_block');
                menu.setAttribute('style', 'margin-left:' + offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                if (document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active') != null) {
                    document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active').classList.remove('inc_active')
                }
                if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+slidevalue] != null) document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+slidevalue].classList.add('inc_active')
            }
            if (slidevalue == 0) {
                amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            }
        });

    }



