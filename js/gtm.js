// Copyright 2012 Google Inc. All rights reserved.

(function (w, g) {
  w[g] = w[g] || {};
  w[g].e = function (s) {
    return eval(s);
  };
})(window, "google_tag_manager");

(function () {
  var data = {
    resource: {
      version: "284",

      macros: [
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__k",
          vtp_decodeCookie: false,
          vtp_name: "custom_client_id",
        },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_useEcommerceDataLayer: true,
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_fieldsToSet: [
            "list",
            ["map", "fieldName", "userId", "value", ["macro", 2]],
          ],
          vtp_useHashAutoLink: false,
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_dimension: [
            "list",
            ["map", "index", "6", "dimension", ["macro", 2]],
          ],
          vtp_enableEcommerce: true,
          vtp_trackingId: "UA-8251731-1",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_ecommerceIsEnabled: true,
          vtp_enableGA4Schema: true,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "EN",
          vtp_name: "siteLang",
        },
        { function: "__r" },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "Not_Applicable",
          vtp_name: "propertyName",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "Not_Applicable",
          vtp_name: "pageType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "Not_Applicable",
          vtp_name: "TransactionID",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "Not_Applicable",
          vtp_name: "propertyName",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "Not_Applicable",
          vtp_name: "pageType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "Not_Applicable",
          vtp_name: "community",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "Not_Applicable",
          vtp_name: "community",
        },
        { function: "__e" },
        { function: "__aev", vtp_varType: "TEXT" },
        { function: "__aev", vtp_varType: "ID" },
        { function: "__aev", vtp_varType: "CLASSES" },
        { function: "__t" },
        { function: "__aev", vtp_varType: "URL" },
        { function: "__aev", vtp_varType: "TEXT" },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_useHashAutoLink: false,
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: "UA-149617421-1",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableGA4Schema: true,
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){try{var a=ga.getAll()[0];return a.get("clientId")}catch(b){return!1}})();',
          ],
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return 0\u003C$(".nos-price").length?parseInt($(".nos-price")[0].innerHTML.split("AED")[1].replace(/,/g,"")):"(Not Set)"})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return 0\u003C$("[class\\x3d\'unit-location-code\']").length?$("[class\\x3d\'unit-location-code\']")[0].innerHTML:"(Not Set)"})();',
          ],
        },
        { function: "__j", vtp_name: "document.title" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ip",
        },
        { function: "__cvt_741923_691", vtp_useCustomEventCounter: false },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 33], 8, 16],
            ";return a.toString()})();",
          ],
        },
        { function: "__j", vtp_name: "Nationality" },
        { function: "__j", vtp_name: "CountryResidence" },
        { function: "__j", vtp_name: "Language" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "Not_Applicable",
          vtp_name: "Property_Type",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "Not_Applicable",
          vtp_name: "community",
        },
        { function: "__j", vtp_name: "Development" },
        { function: "__j", vtp_name: "Bedrooms" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ORDERID",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "REVENUE",
        },
        { function: "__j", vtp_name: "Community" },
        { function: "__j", vtp_name: "SiteLang" },
        { function: "__c", vtp_value: "451417846" },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "th_capi_em" },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "th_capi_fn" },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "th_capi_ln" },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "th_capi_ph2" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return navigator.userAgent})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=Math.floor(Date.now()/1E3);return a})();",
          ],
        },
        { function: "__c", vtp_value: "447044814" },
        { function: "__c", vtp_value: "451100836" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "gtm.elementText",
        },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "_fbp" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var v=function p(d){function f(r,t){return r\u003E\u003E\u003Et|r\u003C\u003C32-t}for(var c=Math.pow,n=c(2,32),g="length",a,u="",l=[],h=8*d[g],b=p.h=p.h||[],q=p.k=p.k||[],k=q[g],m={},e=2;64\u003Ek;e++)if(!m[e]){for(a=0;313\u003Ea;a+=e)m[a]=e;b[k]=c(e,.5)*n|0;q[k++]=c(e,1/3)*n|0}for(d+="\\u0080";d[g]%64-56;)d+="\\x00";for(a=0;a\u003Cd[g];a++){c=d.charCodeAt(a);if(c\u003E\u003E8)return;l[a\u003E\u003E2]|=c\u003C\u003C(3-a)%4*8}l[l[g]]=h/n|0;l[l[g]]=h;for(c=0;c\u003Cl[g];){d=l.slice(c,c+=16);n=b;b=b.slice(0,8);for(a=0;64\u003Ea;a++)k=d[a-15],m=d[a-2],h=b[0],e=b[4],k=b[7]+\n(f(e,6)^f(e,11)^f(e,25))+(e\u0026b[5]^~e\u0026b[6])+q[a]+(d[a]=16\u003Ea?d[a]:d[a-16]+(f(k,7)^f(k,18)^k\u003E\u003E\u003E3)+d[a-7]+(f(m,17)^f(m,19)^m\u003E\u003E\u003E10)|0),h=(f(h,2)^f(h,13)^f(h,22))+(h\u0026b[1]^h\u0026b[2]^b[1]\u0026b[2]),b=[k+h|0].concat(b),b[4]=b[4]+k|0;for(a=0;8\u003Ea;a++)b[a]=b[a]+n[a]|0}for(a=0;8\u003Ea;a++)for(c=3;c+1;c--)g=b[a]\u003E\u003E8*c\u0026255,u+=(16\u003Eg?0:"")+g.toString(16);return u};return v})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 56], 8, 16],
            ";return ",
            ["escape", ["macro", 57], 8, 16],
            "(a)})();",
          ],
        },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "th_capi_ph" },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f" },
        { function: "__aev", vtp_varType: "ELEMENT" },
        { function: "__aev", vtp_varType: "TARGET" },
        { function: "__aev", vtp_varType: "HISTORY_NEW_URL_FRAGMENT" },
        { function: "__aev", vtp_varType: "HISTORY_OLD_URL_FRAGMENT" },
        { function: "__aev", vtp_varType: "HISTORY_NEW_STATE" },
        { function: "__aev", vtp_varType: "HISTORY_OLD_STATE" },
        { function: "__aev", vtp_varType: "HISTORY_CHANGE_SOURCE" },
        { function: "__j", vtp_name: "PageType" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var b=[];$(".pod-item a").each(function(c){var a=$(this).attr("href"),d=a.lastIndexOf("/");3\u003Ec\u0026\u0026b.push(a.substring(d+1,a.length-5))});return b})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 61], 8, 16],
            '.toLowerCase(),b="65765 65814 65766 65815 65767 65816 65769 65768".split(" ");if("/"==a||"/en"==a||a.includes("/en/"))b=["65814","65815","65816","65769","65768"];if("/ar-ae"==a||a.includes("/ar-ae/"))b=["65765","65766","65767"];return b})();',
          ],
        },
        { function: "__j", vtp_name: "ProductID" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return navigator.userAgent.match(/Mobile/i)\u0026\u0026navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/webOS/i)?"m":navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/PlayBook/i)||navigator.userAgent.match(/Android/i)\u0026\u0026!navigator.userAgent.match(/Mobile/i)?"t":"d"})();',
          ],
        },
        { function: "__j", vtp_name: "PropertyType" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "Download",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "View",
        },
        { function: "__c", vtp_value: "Emaar Home Page" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 61], 8, 16],
            ',b=1;if(a.includes("/our-communities/"))return a=a.split("/"),0\u003Ca.length\u0026\u0026(b=a[a.length-1]),b})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return[{id:",
            ["escape", ["macro", 79], 8, 16],
            ",quantity:1,price:1}]})();",
          ],
        },
        { function: "__c", vtp_value: "5388347" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "virtualPageTitle",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "virtualPageURL",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "OriginalPage",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "OriginalPageTitle",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "Not_Applicable",
          vtp_name: "wEBSHA256HashedEmailAddress1",
        },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_useHashAutoLink: false,
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: "UA-122340064-1",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableGA4Schema: true,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "EN",
          vtp_name: "siteLang",
        },
        { function: "__j", vtp_name: "propertyName" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 79], 8, 16],
            ";return a=[{id:a,price:1,quantity:1}]})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "Null",
          vtp_name: "gtm.element.4.value",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "formID",
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        { function: "__aev", vtp_varType: "TEXT" },
        { function: "__r" },
      ],
      tags: [
        {
          function: "__ua",
          once_per_event: true,
          vtp_overrideGaSettings: false,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_gaSettings: ["macro", 3],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: true,
          tag_id: 1,
        },
        {
          function: "__flc",
          once_per_event: true,
          vtp_customVariable: [
            "list",
            ["map", "key", "u12", "value", ["macro", 4]],
          ],
          vtp_groupTag: "visits",
          vtp_useImageTag: false,
          vtp_activityTag: "06con0",
          vtp_ordinalType: "STANDARD",
          vtp_advertiserId: "5388347",
          vtp_ordinalStandard: ["macro", 5],
          vtp_url: ["macro", 6],
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          vtp_enableMatchIdVariable: true,
          tag_id: 63,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: true,
          vtp_eventCategory: "Online Lead",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Form Submission",
          vtp_eventLabel: ["macro", 9],
          vtp_dimension: [
            "list",
            ["map", "index", "1", "dimension", ["macro", 10]],
            ["map", "index", "2", "dimension", ["macro", 11]],
            ["map", "index", "3", "dimension", ["macro", 12]],
          ],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 91,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Online Lead",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Landing Page",
          vtp_eventLabel: ["macro", 14],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 93,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Online Lead",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Register",
          vtp_eventLabel: ["macro", 14],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 94,
        },
        {
          function: "__flc",
          once_per_event: true,
          vtp_customVariable: [
            "list",
            ["map", "key", "u10", "value", ["macro", 15]],
            ["map", "key", "u12", "value", ["macro", 4]],
          ],
          vtp_groupTag: "regis0",
          vtp_useImageTag: false,
          vtp_activityTag: "25cre0",
          vtp_ordinalType: "STANDARD",
          vtp_advertiserId: "5388347",
          vtp_ordinalStandard: ["macro", 5],
          vtp_url: ["macro", 6],
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          vtp_enableMatchIdVariable: true,
          tag_id: 103,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_overrideGaSettings: false,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_gaSettings: ["macro", 3],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: true,
          tag_id: 145,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_overrideGaSettings: false,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_gaSettings: ["macro", 3],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: true,
          tag_id: 146,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "WebChat",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Open",
          vtp_eventLabel: "WebChat - Sticky",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 150,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: true,
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_eventCategory: "WebChat",
          vtp_trackType: "TRACK_EVENT",
          vtp_enableLinkId: false,
          vtp_eventAction: "Close",
          vtp_eventLabel: "WebChat - Sticky",
          vtp_enableEcommerce: false,
          vtp_trackingId: "UA-8251731-1",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 151,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "WebChat",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Open",
          vtp_eventLabel: "WebChat - Footer",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 152,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "WebChat",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Close",
          vtp_eventLabel: "WebChat - Footer",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 153,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventValue: ["macro", 17],
          vtp_eventCategory: "Mailto",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Click",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 161,
        },
        {
          function: "__flc",
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "thank0",
          vtp_useImageTag: false,
          vtp_activityTag: "launc00",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "8957020",
          vtp_ordinalStandard: ["macro", 5],
          vtp_url: ["macro", 6],
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          vtp_enableMatchIdVariable: true,
          tag_id: 342,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_overrideGaSettings: true,
          vtp_fieldsToSet: [
            "list",
            [
              "map",
              "fieldName",
              "page",
              "value",
              "/virtual/contact-us/success",
            ],
            [
              "map",
              "fieldName",
              "title",
              "value",
              "Virtual - ContactUs - Success",
            ],
          ],
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_gaSettings: ["macro", 3],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: true,
          tag_id: 390,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Header Icons",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Click",
          vtp_eventLabel: ["macro", 22],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 392,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Contact Us Call",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Click",
          vtp_eventLabel: ["macro", 22],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 396,
        },
        {
          function: "__hjtc",
          once_per_event: true,
          vtp_hotjar_site_id: "1178779",
          tag_id: 399,
        },
        {
          function: "__twitter_website_tag",
          once_per_event: true,
          vtp_event_type: "PageView",
          vtp_twitter_pixel_id: "o1i3i",
          tag_id: 401,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Open Chat Box",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Click",
          vtp_eventLabel: "Open Chat Box Clicked",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 421,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "chat form submit",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Click",
          vtp_eventLabel: "Chat form submit",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 423,
        },
        {
          function: "__twitter_website_tag",
          metadata: ["map"],
          once_per_event: true,
          vtp_event_type: "PageView",
          vtp_twitter_pixel_id: "o2ftt",
          tag_id: 424,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_overrideGaSettings: false,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_gaSettings: ["macro", 24],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: true,
          tag_id: 431,
        },
        {
          function: "__opt",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 131, 0]],
          once_per_event: true,
          vtp_optimizeContainerId: "GTM-MJP6GDW",
          vtp_gaSettings: ["macro", 24],
          tag_id: 432,
        },
        {
          function: "__opt",
          metadata: ["map"],
          once_per_event: true,
          vtp_optimizeContainerId: "GTM-WZBHCR6",
          vtp_gaSettings: ["macro", 3],
          tag_id: 529,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: true,
          vtp_eventCategory: "Client ID",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 24],
          vtp_eventAction: ["macro", 25],
          vtp_eventLabel: ["macro", 26],
          vtp_dimension: [
            "list",
            ["map", "index", "2", "dimension", ["macro", 25]],
          ],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 549,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: true,
          vtp_eventCategory: "Client ID",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: ["macro", 25],
          vtp_eventLabel: ["macro", 26],
          vtp_dimension: [
            "list",
            ["map", "index", "4", "dimension", ["macro", 25]],
          ],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 552,
        },
        {
          function: "__opt",
          metadata: ["map"],
          once_per_event: true,
          vtp_optimizeContainerId: "GTM-W5JZMT8",
          vtp_gaSettings: ["macro", 3],
          tag_id: 560,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Book Now Button",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Direct Booking Page",
          vtp_eventLabel: ["macro", 27],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 569,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventValue: ["macro", 29],
          vtp_eventCategory: "Book Unit",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Form Submission",
          vtp_eventLabel: ["macro", 30],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 575,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Book Now Button",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Property Page Footer",
          vtp_eventLabel: ["macro", 27],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 582,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Call to Action",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: ["macro", 31],
          vtp_eventLabel: [
            "template",
            ["macro", 22],
            " - (",
            ["macro", 27],
            ")",
          ],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 585,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "IP",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Who Are You?",
          vtp_eventLabel: ["macro", 32],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 602,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Ecommerce",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Add to Cart",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 605,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_orderId: ["macro", 34],
          vtp_enableProductReporting: false,
          vtp_conversionValue: ["macro", 29],
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "936354700",
          vtp_conversionLabel: "XEv8CM65ldUBEIzHvr4D",
          vtp_rdp: false,
          vtp_url: ["macro", 6],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 606,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Ecommerce",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Product Click",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 608,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_overrideGaSettings: true,
          vtp_useEcommerceDataLayer: true,
          vtp_useGA4SchemaForEcommerce: false,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_gaSettings: ["macro", 3],
          vtp_enableEcommerce: true,
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_ecommerceIsEnabled: true,
          vtp_enableGA4Schema: true,
          tag_id: 616,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_orderId: ["macro", 34],
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "936354700",
          vtp_conversionLabel: "Z9M4CKSBjdcBEIzHvr4D",
          vtp_rdp: false,
          vtp_url: ["macro", 6],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 618,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_load: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_orderId: ["macro", 34],
          vtp_enableProductReporting: false,
          vtp_conversionValue: ["macro", 29],
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "936354700",
          vtp_conversionLabel: "Oa3RCPatoNcBEIzHvr4D",
          vtp_rdp: false,
          vtp_url: ["macro", 6],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 621,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: true,
          vtp_eventCategory: "Button Click",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Download Brochure",
          vtp_eventLabel: ["macro", 26],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 623,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: true,
          vtp_eventCategory: "Button Click",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Get in Touch",
          vtp_eventLabel: ["macro", 26],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 625,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: true,
          vtp_eventCategory: "Button Click",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Register Interest",
          vtp_eventLabel: ["macro", 26],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 627,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: true,
          vtp_eventCategory: "Button Click",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 3],
          vtp_eventAction: "Register to Explore",
          vtp_eventLabel: "VIDEO BUTTON",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 643,
        },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-HEFDEKMTE0",
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 669,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_eventName: "Online_Lead",
          vtp_measurementIdOverride: "G-HEFDEKMTE0",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 670,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url: [
            "template",
            "https://s2s.emaar.com/gectr?action_id=",
            ["escape", ["macro", 46], 12],
            "\u0026order_id=",
            ["escape", ["macro", 34], 12],
            "\u0026email=",
            ["escape", ["macro", 47], 12],
            "\u0026first_name=",
            ["escape", ["macro", 48], 12],
            "\u0026last_name=",
            ["escape", ["macro", 49], 12],
            "\u0026customer_id=3709646271\u0026conversion_id=936354700\u0026phone_number=",
            ["escape", ["macro", 50], 12],
            "\u0026user_agent=",
            ["escape", ["macro", 51], 12],
            "\u0026ts=",
            ["escape", ["macro", 52], 12],
          ],
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 5],
          tag_id: 702,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url: [
            "template",
            "https://s2s.emaar.com/gectr?action_id=",
            ["escape", ["macro", 53], 12],
            "\u0026order_id=",
            ["escape", ["macro", 34], 12],
            "\u0026email=",
            ["escape", ["macro", 47], 12],
            "\u0026first_name=",
            ["escape", ["macro", 48], 12],
            "\u0026last_name=",
            ["escape", ["macro", 49], 12],
            "\u0026customer_id=3709646271\u0026conversion_id=936354700\u0026phone_number=",
            ["escape", ["macro", 50], 12],
            "\u0026user_agent=",
            ["escape", ["macro", 51], 12],
            "\u0026ts=",
            ["escape", ["macro", 52], 12],
          ],
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 5],
          tag_id: 704,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url: [
            "template",
            "https://s2s.emaar.com/gectr?action_id=",
            ["escape", ["macro", 54], 12],
            "\u0026order_id=",
            ["escape", ["macro", 34], 12],
            "\u0026email=",
            ["escape", ["macro", 47], 12],
            "\u0026first_name=",
            ["escape", ["macro", 48], 12],
            "\u0026last_name=",
            ["escape", ["macro", 49], 12],
            "\u0026customer_id=3709646271\u0026conversion_id=936354700\u0026phone_number=",
            ["escape", ["macro", 50], 12],
            "\u0026user_agent=",
            ["escape", ["macro", 51], 12],
            "\u0026ts=",
            ["escape", ["macro", 52], 12],
          ],
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 5],
          tag_id: 706,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "cta_text", "parameterValue", ["macro", 55]],
            ["map", "parameter", "page_type", "parameterValue", ["macro", 10]],
          ],
          vtp_eventName: "lead_form",
          vtp_measurementIdOverride: "G-HEFDEKMTE0",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 714,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventName: "whatsapp_click",
          vtp_measurementIdOverride: "G-HEFDEKMTE0",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 716,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventName: "lead_sales_videocall",
          vtp_measurementIdOverride: "G-HEFDEKMTE0",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 722,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventName: "lead_mortgage_offers",
          vtp_measurementIdOverride: "G-HEFDEKMTE0",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 723,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventName: "instant_videocall_click",
          vtp_measurementIdOverride: "G-HEFDEKMTE0",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 724,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventName: "contact_form",
          vtp_measurementIdOverride: "G-HEFDEKMTE0",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 725,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventName: "email_subscribe",
          vtp_measurementIdOverride: "G-HEFDEKMTE0",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 726,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ""],
            ["map", "parameter", "currency", "parameterValue", ""],
            ["map", "parameter", "value", "parameterValue", ""],
            [
              "map",
              "parameter",
              "transaction_id",
              "parameterValue",
              ["macro", 11],
            ],
            ["map", "parameter", "tax", "parameterValue", ""],
          ],
          vtp_eventName: "purchase",
          vtp_measurementIdOverride: "G-HEFDEKMTE0",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 727,
        },
        {
          function: "__lcl",
          vtp_waitForTags: true,
          vtp_checkValidation: true,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_32",
          tag_id: 729,
        },
        {
          function: "__fsl",
          vtp_waitForTags: "",
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_42",
          tag_id: 730,
        },
        {
          function: "__fsl",
          vtp_waitForTags: "",
          vtp_checkValidation: true,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_48",
          tag_id: 731,
        },
        { function: "__cl", tag_id: 732 },
        { function: "__cl", tag_id: 733 },
        { function: "__cl", tag_id: 734 },
        { function: "__cl", tag_id: 735 },
        { function: "__cl", tag_id: 736 },
        { function: "__cl", tag_id: 737 },
        { function: "__cl", tag_id: 738 },
        { function: "__cl", tag_id: 739 },
        { function: "__cl", tag_id: 740 },
        { function: "__cl", tag_id: 741 },
        { function: "__cl", tag_id: 742 },
        { function: "__cl", tag_id: 743 },
        { function: "__cl", tag_id: 744 },
        {
          function: "__lcl",
          vtp_waitForTags: "",
          vtp_checkValidation: true,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_154",
          tag_id: 745,
        },
        { function: "__cl", tag_id: 746 },
        { function: "__cl", tag_id: 747 },
        { function: "__cl", tag_id: 748 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_195",
          tag_id: 749,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_196",
          tag_id: 750,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_217",
          tag_id: 751,
        },
        { function: "__cl", tag_id: 752 },
        {
          function: "__fsl",
          vtp_waitForTags: "",
          vtp_checkValidation: "",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_408",
          tag_id: 753,
        },
        {
          function: "__fsl",
          vtp_waitForTags: "",
          vtp_checkValidation: "",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_413",
          tag_id: 754,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_452",
          tag_id: 755,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_461",
          tag_id: 756,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_488",
          tag_id: 757,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_493",
          tag_id: 758,
        },
        { function: "__cl", tag_id: 759 },
        { function: "__cl", tag_id: 760 },
        { function: "__cl", tag_id: 761 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_519",
          tag_id: 762,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_520",
          tag_id: 763,
        },
        { function: "__cl", tag_id: 764 },
        { function: "__cl", tag_id: 765 },
        { function: "__cl", tag_id: 766 },
        { function: "__cl", tag_id: 767 },
        { function: "__cl", tag_id: 768 },
        { function: "__cl", tag_id: 769 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_537",
          tag_id: 770,
        },
        { function: "__cl", tag_id: 771 },
        { function: "__cl", tag_id: 772 },
        { function: "__cl", tag_id: 773 },
        { function: "__cl", tag_id: 774 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_567",
          tag_id: 775,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_568",
          tag_id: 776,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_574",
          tag_id: 777,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_580",
          tag_id: 778,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_581",
          tag_id: 779,
        },
        { function: "__cl", tag_id: 780 },
        { function: "__cl", tag_id: 781 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_590",
          tag_id: 782,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_593",
          tag_id: 783,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_594",
          tag_id: 784,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_622",
          tag_id: 785,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_624",
          tag_id: 786,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_626",
          tag_id: 787,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_642",
          tag_id: 788,
        },
        {
          function: "__evl",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: true,
          vtp_elementSelector: "gform_confirmation_message_1",
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "CSS",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "741923_662",
          tag_id: 789,
        },
        {
          function: "__evl",
          vtp_elementId: "gform_confirmation_wrapper_1",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: false,
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "ID",
          vtp_onScreenRatio: "100",
          vtp_uniqueTriggerId: "741923_674",
          tag_id: 790,
        },
        {
          function: "__evl",
          vtp_elementId: "gform_confirmation_wrapper_8",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: false,
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "ID",
          vtp_onScreenRatio: "100",
          vtp_uniqueTriggerId: "741923_675",
          tag_id: 791,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_682",
          tag_id: 792,
        },
        {
          function: "__evl",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: true,
          vtp_elementSelector:
            "body \u003E div \u003E div \u003E div \u003E iframe",
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "CSS",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "741923_684",
          tag_id: 793,
        },
        {
          function: "__evl",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: true,
          vtp_elementSelector: "div.calendly-popup-content \u003E iframe",
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "CSS",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "741923_711",
          tag_id: 794,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "741923_715",
          tag_id: 795,
        },
        {
          function: "__evl",
          vtp_elementId: "gform_confirmation_message_13",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: true,
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "ID",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "741923_717",
          tag_id: 796,
        },
        {
          function: "__evl",
          vtp_elementId: "gform_confirmation_message_8",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: true,
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "ID",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "741923_718",
          tag_id: 797,
        },
        {
          function: "__evl",
          vtp_elementId: "gform_confirmation_message_2",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: true,
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "ID",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "741923_719",
          tag_id: 798,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{ "@context" : "http://schema.org",\n "@type" : "organization",\n "name" : "Emaar,\n "url" : "https://www.emaar.com/en/",\n "logo": "https://www.emaar.com/system/images/press-release-detail.jpg",\n "contactPoint" : [\n { "@type" : "ContactPoint",\n "telephone" : "800 36227",\n "contactType" : "Customer Service"\n } ],\n "sameAs" : [ "http://www.facebook.com/emaardubai",\n                       "http://www.twitter.com/emaardubai",\n                       "http://www.youtube.com/emaardubai",\n                       "http://www.instagram.com/emaardubai",\n                       "http://plus.google.com/+EmaarDubai"] \n\n}\n\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 29,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{ "@context" : "http://schema.org",\n "@type" : "organization",\n "name" : "إعمار",\n "url" : "https://www.emaar.com/ar/",\n "logo": "https://www.emaar.com/system/images/press-release-detail.jpg",\n "contactPoint" : [\n { "@type" : "ContactPoint",\n "telephone" : "800 36227",\n "contactType" : "Customer Service"\n } ],\n "sameAs" : [ "http://www.facebook.com/emaardubai",\n                       "http://www.twitter.com/emaardubai",\n                       "http://www.youtube.com/emaardubai",\n                       "http://www.instagram.com/emaardubai",\n                       "http://plus.google.com/+EmaarDubai"] \n}\n\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 30,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "http://schema.org",\n  "@type": "WebSite",\n  "url": "https://www.emaar.com/en/",\n  "potentialAction": {\n    "@type": "SearchAction",\n    "target": "https://www.emaar.com/en/search.aspx?search={search_term_string}",\n    "query-input": "required name=search_term_string"\n  }\n}\n\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 31,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "http://schema.org",\n  "@type": "WebSite",\n  "url": "https://www.emaar.com/ar/",\n  "potentialAction": {\n    "@type": "SearchAction",\n    "target": "https://www.emaar.com/ar/search.aspx?search={search_term_string}",\n    "query-input": "required name=search_term_string"\n  }\n}\n\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 32,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.dataLayer=window.dataLayer||[];void 0!=pageType\u0026\u0026"N/A"!=pageType\u0026\u0026window.dataLayer.push({pageType:pageType});void 0!=community\u0026\u0026"N/A"!=community\u0026\u0026window.dataLayer.push({community:community});void 0!=propertyName\u0026\u0026"N/A"!=propertyName\u0026\u0026window.dataLayer.push({propertyName:propertyName});void 0!=propertyType\u0026\u0026"N/A"!=propertyType\u0026\u0026window.dataLayer.push({propertyType:propertyType});\nif("/en/contact-us"==window.location.pathname||"/contact-us"==window.location.pathname||"/ar-ae/contact-us"==window.location.pathname)window.dataLayer.push({propertyName:"sales-enquiry"}),window.dataLayer.push({pageType:"contactus"});if("/en/offer-details"==window.location.pathname||"/offer-details"==window.location.pathname||"/ar-ae/offer-details"==window.location.pathname)window.dataLayer.push({propertyName:"offer-details"}),window.dataLayer.push({pageType:"Property"});\nfunction getCookie(a){var b="; "+document.cookie;a=b.split("; "+a+"\\x3d");if(2===a.length)return a.pop().split(";").shift()}window.location.pathname.includes("ar-ae")\u0026\u0026window.dataLayer.push({siteLang:"AR"});getCookie("emaar#lang").includes("ar-AE")\u0026\u0026window.dataLayer.push({siteLang:"AR"});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 391,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E$("#btnSubmit").on("click",function(){iterations=0;interval=setInterval(function(){iterations++;$(".common_lightbox.registerYouInterest_lighbox").hasClass("selected")\u0026\u0026(void 0!=TransactionID\u0026\u0026""!=TransactionID\u0026\u0026window.dataLayer.push({TransactionID:TransactionID}),void 0!=wEBSHA256HashedEmailAddress1\u0026\u0026""!=wEBSHA256HashedEmailAddress1\u0026\u0026window.dataLayer.push({wEBSHA256HashedEmailAddress1:wEBSHA256HashedEmailAddress1}),dataLayer.push({event:"successRegisterYourInterest"}),clearInterval(interval));20\u003C=\niterations\u0026\u0026clearInterval(interval)},1E3)});$(".main_text.register").on("click",function(){dataLayer.push({event:"startRegisterYourInterest"})});$(".register.register_interest").on("click",function(){dataLayer.push({event:"startRegisterYourInterest"})});$(".register.link-1").on("click",function(){dataLayer.push({event:"startRegisterYourInterest"})});\n$("#eloquaSubscribeFormBtn").on("click",function(){iterations=0;interval=setInterval(function(){iterations++;$(".subscribe_lightbox").hasClass("selected")\u0026\u0026(void 0!=TransactionID\u0026\u0026""!=TransactionID\u0026\u0026window.dataLayer.push({TransactionID:TransactionID}),void 0!=wEBSHA256HashedEmailAddress1\u0026\u0026""!=wEBSHA256HashedEmailAddress1\u0026\u0026window.dataLayer.push({wEBSHA256HashedEmailAddress1:wEBSHA256HashedEmailAddress1}),dataLayer.push({event:"successSubscribe"}),clearInterval(interval));20\u003C=iterations\u0026\u0026clearInterval(interval)},\n1E3)});\n$(".contact_form_submit_btn").on("click",function(){iterations=0;interval=setInterval(function(){iterations++;$(".contact_us_lightbox").hasClass("selected")\u0026\u0026(void 0!=TransactionID\u0026\u0026""!=TransactionID\u0026\u0026window.dataLayer.push({TransactionID:TransactionID}),void 0!=wEBSHA256HashedEmailAddress1\u0026\u0026""!=wEBSHA256HashedEmailAddress1\u0026\u0026window.dataLayer.push({wEBSHA256HashedEmailAddress1:wEBSHA256HashedEmailAddress1}),dataLayer.push({event:"successContactUs"}),clearInterval(interval));20\u003C=iterations\u0026\u0026clearInterval(interval)},1E3)});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 393,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Evar clientIdToCheck=ga.getAll()[0].get("clientId");"286182528.1586947740"===clientIdToCheck\u0026\u0026$.getJSON("https://jsonip.com/",function(a){dataLayer.push({event:"interceptIp",ip:a.ip})});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 603,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:1766041,hjsv:5};d=c.getElementsByTagName("head")[0];b=c.createElement("script");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,"//static.hotjar.com/c/hotjar-",".js?sv\\x3d");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 612,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript" data-gtmsrc="//510001196.collect.igodigital.com/collect.js"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003E_etmc.push(["setOrgId","510001196"]);_etmc.push(["trackPageView"]);\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 614,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\n\u003Cscript type="text/gtmscript"\u003E!function(e,g,h,m,b,k,f,d,l,n,p){e.fbq||((d=e.dhPixel=function(){d.callMethod?d.callMethod.apply(d,arguments):d.queue.push(arguments)}).push=d,d.queue=[],b=e.fbq=function(){for(var a=Array(arguments.length),c=0;c\u003Ca.length;++c)a[c]=arguments[c];c=Math.floor(1E14*Math.random());"track"!==a[0].toLowerCase()\u0026\u0026"trackcustom"!==a[0].toLowerCase()||a[3]\u0026\u0026a[3].eventID||(a[2]||(a[2]=void 0),"object"==typeof a[3]?a[3].eventID=c:a[3]={eventID:c});"tracksingle"!==a[0].toLowerCase()\u0026\u0026"tracksinglecustom"!==a[0].toLowerCase()||\na[3]\u0026\u0026a[3].eventID||a[4]\u0026\u0026a[4].eventID||(a[3]||(a[3]=void 0),a[4]||(a[4]=void0),"object"==typeof a[4]?a[4].eventID=c:a[4]={eventID:c});b.callMethod?b.callMethod.apply(b,a):b.queue.push(a);e.dhPixel(a)},e._fbq||(e._fbq=b),b.push=b,b.loaded=!0,b.version="2.0",b.queue=[],(k=g.createElement(h)).async=!0,k.src="https://connect.facebook.net/en_US /fbevents.js",(f=g.getElementsByTagName(h)[0]).parentNode.insertBefore(k,f),(l=g.createElement(h)).async=!0,l.src="https://s2s.emaar.com/static/DhPixel.js",f.parentNode.insertBefore(l,\nf))}(window,document,"script");fbq("init","949493802200382",{external_id:',
            ["escape", ["macro", 58], 8, 16],
            ",ph:",
            ["escape", ["macro", 59], 8, 16],
            ",em:",
            ["escape", ["macro", 47], 8, 16],
            '});fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=949493802200382\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 628,
        },
        {
          function: "__html",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 135, 0]],
          once_per_load: true,
          vtp_html: [
            "template",
            '\n\u003Cscript type="text/gtmscript"\u003Efbq("init","949493802200382",{external_id:',
            ["escape", ["macro", 58], 8, 16],
            ",ph:",
            ["escape", ["macro", 59], 8, 16],
            ",em:",
            ["escape", ["macro", 47], 8, 16],
            '});fbq("track","Lead");\u003C/script\u003E\n',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 631,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("C0RJDB1URMH959SBRG10");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 639,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Efunction date_formate(a){if(/^(([1-9]|0[1-9]|1[0-2])\\/([1-9]|0[1-9]|1\\d|2\\d|3[01])\\/(19|20)\\d{2}|[nN]\\/[aA])$|^(?:\\d{4}[-\\/])(?:0?[1-9]|1[0-2])[-\\/](?:0?[1-9]|[12][0-9]|3[01])$|(\\b\\d{1,2}\\D{0,3})?\\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?)\\D?(\\d{1,2}\\D?)?\\D?((19[7-9]\\d|20\\d{2})|\\d{2})/.test(a))return a.split("-").reverse().join("");if(/([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))/.test(a))return a.split("-").join("")}\nvar final_result={},full_name="",phone_regex=/^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{2,6}$/,j,f_name_flag=0,data_value;\ntry{document.addEventListener("change",function(a){switch(a.target.getAttribute("type")){case "phone":""!=a.target.value\u0026\u0026"null"!=a.target.value\u0026\u0026null!=a.target.value\u0026\u0026"undefined"!=a.target.value\u0026\u0026void 0!=a.target.value\u0026\u0026phone_regex.test(a.target.value.split(" ").join(""))\u0026\u0026(final_result.phone=a.target.value.replace(/[\\-\\s]+/g,""));break;case "tel":""!=a.target.value\u0026\u0026"null"!=a.target.value\u0026\u0026null!=a.target.value\u0026\u0026"undefined"!=a.target.value\u0026\u0026void 0!=a.target.value\u0026\u0026phone_regex.test(a.target.value.split(" ").join(""))\u0026\u0026\n(final_result.phone=a.target.value.replace(/[\\-\\s]+/g,""));break;case "number":""!=a.target.value\u0026\u0026"null"!=a.target.value\u0026\u0026null!=a.target.value\u0026\u0026"undefined"!=a.target.value\u0026\u0026void 0!=a.target.value\u0026\u0026phone_regex.test(a.target.value.split(" ").join(""))\u0026\u0026(final_result.phone=a.target.value.replace(/[\\-\\s]+/g,""))}""!=a.target.value\u0026\u0026"null"!=a.target.value\u0026\u0026null!=a.target.value\u0026\u0026"undefined"!=a.target.value\u0026\u0026void 0!=a.target.value\u0026\u0026phone_regex.test(a.target.value.split(" ").join(""))\u0026\u0026(final_result.phone=\na.target.value.replace(/[\\-\\s]+/g,""));var c=a="";document.querySelector("#input_14_6").value\u0026\u0026final_result.phone\u0026\u0026"+"!=final_result.phone[0]\u0026\u0026(a=document.querySelector("#input_14_6").value,c=a.substring(1));var b=new Date;b.setTime(b.getTime()+63072E6);b="; expires\\x3d"+b.toGMTString();final_result.phone\u0026\u0026(document.cookie="th_capi_ph\\x3d"+',
            ["escape", ["macro", 57], 8, 16],
            '(c+final_result.phone)+b+";path\\x3d/;domain\\x3d;SameSite \\x3d none; Secure");final_result.phone\u0026\u0026(document.cookie="th_capi_ph2\\x3d"+',
            ["escape", ["macro", 57], 8, 16],
            '(a+\nfinal_result.phone)+b+";path\\x3d/;domain\\x3d;SameSite \\x3d none; Secure")})}catch(a){console.log("fromcatch",a)};\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 728,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_cn", arg0: ["macro", 1], arg1: "eservice.emaar.com" },
        { function: "_eq", arg0: ["macro", 0], arg1: "successContactUs" },
        { function: "_cn", arg0: ["macro", 7], arg1: "creekbeach.emaar.com" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.formSubmit" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_413($|,)))",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "Su_Lead_Submission" },
        { function: "_eq", arg0: ["macro", 13], arg1: "Property" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.dom" },
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "startRegisterYourInterest",
        },
        {
          function: "_ew",
          arg0: ["macro", 1],
          arg1: "contact-us/dubai-creek-harbour-coming-soon/dubai-creek-harbour-coming-soon-thankyou.aspx",
        },
        { function: "_eq", arg0: ["macro", 16], arg1: "VirtualPageview" },
        { function: "_eq", arg0: ["macro", 0], arg1: "VirtualPageview" },
        { function: "_eq", arg0: ["macro", 17], arg1: "Close X" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.click" },
        { function: "_cn", arg0: ["macro", 18], arg1: "Sticky-WebChat-open" },
        { function: "_cn", arg0: ["macro", 18], arg1: "Sticky-WebChat-close" },
        { function: "_cn", arg0: ["macro", 18], arg1: "Footer-WebChat-open" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.linkClick" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_195($|,)))",
        },
        { function: "_cn", arg0: ["macro", 19], arg1: "fancybox-close" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_196($|,)))",
        },
        { function: "_cn", arg0: ["macro", 21], arg1: "mailto" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_217($|,)))",
        },
        {
          function: "_ew",
          arg0: ["macro", 7],
          arg1: "/our-communities/dubai-creek-harbour/breeze",
        },
        { function: "_cn", arg0: ["macro", 4], arg1: "AR" },
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "successRegisterYourInterest",
        },
        {
          function: "_re",
          arg0: ["macro", 22],
          arg1: "WhatsApp|Talk 800-36227|Register",
        },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_452($|,)))",
        },
        { function: "_re", arg0: ["macro", 22], arg1: "800 EMAAR|971 4" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_461($|,)))",
        },
        { function: "_cn", arg0: ["macro", 23], arg1: "helpButton" },
        { function: "_cn", arg0: ["macro", 19], arg1: "label bBody" },
        { function: "_cn", arg0: ["macro", 1], arg1: "emaar-cafe" },
        { function: "_eq", arg0: ["macro", 18], arg1: "frm-subscribe" },
        { function: "_eq", arg0: ["macro", 25], arg1: "false" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.load" },
        {
          function: "_re",
          arg0: ["macro", 22],
          arg1: "Book Now",
          ignore_case: true,
        },
        { function: "_cn", arg0: ["macro", 26], arg1: "buy-from-us-directly" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_567($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 22],
          arg1: "Find out more",
          ignore_case: true,
        },
        { function: "_ew", arg0: ["macro", 7], arg1: "/en/" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_568($|,)))",
        },
        { function: "_cn", arg0: ["macro", 28], arg1: "gform_6" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_574($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 22],
          arg1: "Book",
          ignore_case: true,
        },
        {
          function: "_cn",
          arg0: ["macro", 26],
          arg1: "/unit-availability/marina-vista/",
        },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_580($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 26],
          arg1: "/unit-availability/burj-crown/",
        },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_581($|,)))",
        },
        { function: "_cn", arg0: ["macro", 23], arg1: "btn" },
        { function: "_re", arg0: ["macro", 0], arg1: "interceptIp" },
        { function: "_eq", arg0: ["macro", 0], arg1: "addToCart" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.elementVisibility" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_662($|,)))",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "productClick" },
        {
          function: "_cn",
          arg0: ["macro", 26],
          arg1: "/book-online/thank-you/",
        },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_675($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_674($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 7],
          arg1: "https://properties.emaar.com/en/book-online/",
        },
        { function: "_eq", arg0: ["macro", 22], arg1: "DOWNLOAD BROCHURE" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_622($|,)))",
        },
        { function: "_eq", arg0: ["macro", 22], arg1: "GET IN TOUCH" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_624($|,)))",
        },
        { function: "_cn", arg0: ["macro", 22], arg1: "REGISTER INTEREST" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_626($|,)))",
        },
        { function: "_eq", arg0: ["macro", 22], arg1: "REGISTER TO EXPLORE" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_642($|,)))",
        },
        { function: "_cn", arg0: ["macro", 55], arg1: "SALES VIDEO CALL" },
        { function: "_cn", arg0: ["macro", 27], arg1: "wa.link/u9ik8p" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_715($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 55],
          arg1: "sales video call",
          ignore_case: true,
        },
        { function: "_cn", arg0: ["macro", 26], arg1: "/mortgage-offers/" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_717($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_711($|,)))",
        },
        { function: "_cn", arg0: ["macro", 26], arg1: "/contact-us/" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_718($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "(^$|((^|,)741923_719($|,)))",
        },
        { function: "_cn", arg0: ["macro", 18], arg1: "frm-subscribe" },
        { function: "_cn", arg0: ["macro", 19], arg1: "frm-submit" },
        { function: "_cn", arg0: ["macro", 1], arg1: "none" },
        {
          function: "_re",
          arg0: ["macro", 26],
          arg1: "/en$|/en$/|^/$",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 26],
          arg1: "(/$)|(/ar-AE$)",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 4], arg1: "AR" },
        { function: "_eq", arg0: ["macro", 0], arg1: "delayedDocReady" },
        {
          function: "_cn",
          arg0: ["macro", 1],
          arg1: "property.emaar.com/en/properties-for-sale/e-form_confirmation.html",
        },
      ],
      rules: [
        [
          ["if", 0],
          [
            "add",
            0,
            18,
            22,
            24,
            27,
            43,
            130,
            131,
            134,
            135,
            137,
            138,
            57,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            73,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            96,
            97,
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            120,
            121,
            122,
            123,
            124,
            125,
          ],
        ],
        [
          ["if", 2],
          ["add", 1, 14],
        ],
        [
          ["if", 3, 4, 5],
          ["add", 2, 44, 136],
        ],
        [
          ["if", 6],
          ["add", 2, 44, 136],
        ],
        [
          ["if", 7, 8],
          ["add", 3],
        ],
        [
          ["if", 7, 9],
          ["add", 4],
        ],
        [
          ["if", 0, 10],
          ["add", 5],
        ],
        [
          ["if", 11, 12],
          ["add", 6],
        ],
        [
          ["if", 13, 14],
          ["add", 7],
        ],
        [
          ["if", 14, 15],
          ["add", 8],
        ],
        [
          ["if", 14, 16],
          ["add", 9],
        ],
        [
          ["if", 17, 18, 19],
          ["add", 10],
        ],
        [
          ["if", 18, 20, 21],
          ["add", 11],
        ],
        [
          ["if", 18, 22, 23],
          ["add", 12],
        ],
        [
          ["if", 24, 25, 26],
          ["add", 13],
        ],
        [
          ["if", 18, 27, 28],
          ["add", 15],
        ],
        [
          ["if", 18, 29, 30],
          ["add", 16],
        ],
        [
          ["if", 8],
          ["add", 17, 132],
        ],
        [
          ["if", 14, 31],
          ["add", 19],
        ],
        [
          ["if", 14, 32],
          ["add", 20],
        ],
        [
          ["if", 0, 33],
          ["add", 21],
        ],
        [
          ["if", 0, 34],
          ["add", 23],
        ],
        [
          ["if", 36],
          ["unless", 35],
          ["add", 25, 26],
        ],
        [
          ["if", 18, 37, 38, 39],
          ["add", 28],
        ],
        [
          ["if", 18, 40, 41, 42],
          ["add", 28],
        ],
        [
          ["if", 4, 43, 44],
          ["add", 29, 34, 46],
        ],
        [
          ["if", 18, 45, 46, 47],
          ["add", 30],
        ],
        [
          ["if", 18, 45, 48, 49],
          ["add", 30],
        ],
        [
          ["if", 14, 50],
          ["add", 31],
        ],
        [
          ["if", 51],
          ["add", 32],
        ],
        [
          ["if", 52],
          ["add", 33],
        ],
        [
          ["if", 53, 54],
          ["add", 34, 46],
        ],
        [
          ["if", 55],
          ["add", 35],
        ],
        [
          ["if", 8, 56],
          ["add", 36, 55],
        ],
        [
          ["if", 53, 57],
          ["add", 37, 47],
        ],
        [
          ["if", 53, 58],
          ["add", 37, 47],
        ],
        [
          ["if", 0, 59],
          ["add", 38, 45],
        ],
        [
          ["if", 18, 60, 61],
          ["add", 39],
        ],
        [
          ["if", 18, 62, 63],
          ["add", 40],
        ],
        [
          ["if", 18, 64, 65],
          ["add", 41],
        ],
        [
          ["if", 18, 66, 67],
          ["add", 42],
        ],
        [
          ["if", 6],
          ["unless", 68],
          ["add", 48],
        ],
        [
          ["if", 18, 69, 70],
          ["add", 49],
        ],
        [
          ["if", 6, 71],
          ["add", 50],
        ],
        [
          ["if", 53, 72, 73],
          ["add", 51],
        ],
        [
          ["if", 53, 74],
          ["add", 52],
        ],
        [
          ["if", 53, 75, 76],
          ["add", 53],
        ],
        [
          ["if", 53, 77],
          ["add", 54],
        ],
        [
          ["if", 0, 78],
          ["add", 56],
        ],
        [
          ["if", 0, 79],
          ["add", 58],
        ],
        [
          ["if", 0, 80],
          ["add", 72],
        ],
        [
          ["if", 0, 81],
          ["add", 126, 128],
        ],
        [
          ["if", 0, 82, 83],
          ["add", 127, 129],
        ],
        [
          ["if", 84],
          ["add", 133],
        ],
        [
          ["if", 8, 85],
          ["add", 136],
        ],
        [
          ["if", 0, 1],
          ["block", 0],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cvt_741923_691",
        [46, "a"],
        [41, "g", "h"],
        [52, "b", ["require", "copyFromDataLayer"]],
        [52, "c", ["require", "setInWindow"]],
        [52, "d", ["require", "copyFromWindow"]],
        [52, "e", ["require", "getTimestampMillis"]],
        [52, "f", ["require", "generateRandom"]],
        [3, "g", ["d", "_randomPageId"]],
        [
          22,
          [28, [15, "g"]],
          [
            46,
            [3, "g", [0, [0, ["e"], "."], ["f", 100000, 999999]]],
            ["c", "_randomPageId", [15, "g"], false],
          ],
        ],
        [
          3,
          "h",
          [
            39,
            [20, [17, [15, "a"], "useCustomEventCounter"], true],
            [17, [15, "a"], "customEventCounter"],
            [30, ["b", "gtm.uniqueEventId"], "0"],
          ],
        ],
        [36, [0, [0, [15, "g"], "."], [15, "h"]]],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__hjtc",
        [46, "a"],
        [52, "b", ["require", "createArgumentsQueue"]],
        [52, "c", ["require", "encodeUriComponent"]],
        [52, "d", ["require", "injectScript"]],
        [52, "e", ["require", "makeString"]],
        [52, "f", ["require", "setInWindow"]],
        ["b", "hj", "hj.q"],
        [52, "g", [17, [15, "a"], "hotjar_site_id"]],
        [
          "f",
          "_hjSettings",
          [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"],
        ],
        [
          "d",
          [
            0,
            [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]],
            ".js?sv=7",
          ],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
      [
        50,
        "__opt",
        [46, "a"],
        [52, "b", ["require", "internal.copyKeyFromWindow"]],
        [52, "c", ["require", "internal.readDataLayerName"]],
        [52, "d", ["require", "getType"]],
        [52, "e", ["b", [0, ["c"], ".hide.end"]]],
        [22, [20, ["d", [15, "e"]], "function"], [46, ["e"]]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__r",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "generateRandom"]],
            [
              "$0",
              [30, [17, [15, "a"], "min"], 0],
              [30, [17, [15, "a"], "max"], 2.147483647e9],
            ],
          ],
        ],
      ],
      [
        50,
        "__t",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "getTimestampMillis"]],
            ["$0"],
          ],
        ],
      ],
      [
        50,
        "__twitter_website_tag",
        [46, "a"],
        [
          50,
          "h",
          [46],
          [41, "k"],
          [3, "k", ["c", "twq"]],
          [22, [15, "k"], [46, [36, [15, "k"]]]],
          [
            "g",
            "twq",
            [
              51,
              "",
              [7],
              [52, "m", ["c", "twq.exe.apply"]],
              [
                22,
                [15, "m"],
                [46, ["b", "twq.exe.apply", [45], [15, "arguments"]]],
                [46, ["b", "twq.queue.push", [15, "arguments"]]],
              ],
            ],
            true,
          ],
          ["g", "twq.version", "1", true],
          ["g", "twq.queue", [7], true],
          [52, "l", [51, "", [7]]],
          [
            "d",
            "https://static.ads-twitter.com/uwt.js",
            [15, "l"],
            [15, "l"],
            "twitter_website_tag",
          ],
          [36, ["c", "twq"]],
        ],
        [52, "b", ["require", "callInWindow"]],
        [52, "c", ["require", "copyFromWindow"]],
        [52, "d", ["require", "injectScript"]],
        [52, "e", ["require", "makeString"]],
        [52, "f", ["require", "makeTableMap"]],
        [52, "g", ["require", "setInWindow"]],
        [41, "i"],
        [3, "i", ["h"]],
        ["i", "init", ["e", [17, [15, "a"], "twitter_pixel_id"]]],
        [
          52,
          "j",
          [
            "f",
            [30, [17, [15, "a"], "event_parameters"], [7]],
            "param_table_key_column",
            "param_table_value_column",
          ],
        ],
        [
          22,
          [1, [15, "j"], [2, [15, "j"], "hasOwnProperty", [7, "content_ids"]]],
          [
            46,
            [
              53,
              [41, "k"],
              [3, "k", [16, [15, "j"], "content_ids"]],
              [
                3,
                "k",
                [2, [2, [15, "k"], "split", [7, '"']], "join", [7, "'"]],
              ],
              [41, "l"],
              [
                3,
                "l",
                [
                  2,
                  [
                    2,
                    [15, "k"],
                    "slice",
                    [
                      7,
                      [2, [15, "k"], "indexOf", [7, "["]],
                      [2, [15, "k"], "indexOf", [7, "]"]],
                    ],
                  ],
                  "split",
                  [7, ","],
                ],
              ],
              [
                3,
                "l",
                [
                  2,
                  [15, "l"],
                  "map",
                  [
                    7,
                    [
                      51,
                      "",
                      [7, "m"],
                      [
                        36,
                        [30, [16, [2, [15, "m"], "split", [7, "'"]], 1], ""],
                      ],
                    ],
                  ],
                ],
              ],
              [43, [15, "j"], "content_ids", [15, "l"]],
            ],
          ],
        ],
        ["i", "track", ["e", [17, [15, "a"], "event_type"]], [15, "j"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __googtag: { 1: 10 },
      __opt: { 1: 10 },
      __r: { 2: true },
      __t: { 2: true },
    },
    permissions: {
      __cvt_741923_691: {
        access_globals: {
          keys: [
            { key: "_randomPageId", read: true, write: true, execute: false },
          ],
        },
        read_data_layer: { keyPatterns: ["gtm.uniqueEventId"] },
      },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
      __hjtc: {
        access_globals: {
          keys: [
            { key: "hj", read: true, write: true, execute: false },
            { key: "hj.q", read: true, write: true, execute: false },
            { key: "_hjSettings", read: true, write: true, execute: false },
          ],
        },
        inject_script: { urls: ["https://static.hotjar.com/c/hotjar-*"] },
      },
      __opt: { unsafe_access_globals: {}, access_globals: {} },
      __r: {},
      __t: {},
      __twitter_website_tag: {
        access_globals: {
          keys: [
            { key: "twq", read: true, write: true, execute: true },
            { key: "twq.exe", read: true, write: true, execute: true },
            { key: "twq.queue", read: true, write: true, execute: true },
            { key: "twq.queue.push", read: true, write: true, execute: true },
            { key: "twq.version", read: true, write: true, execute: false },
            { key: "twq.exe.apply", read: true, write: true, execute: true },
          ],
        },
        inject_script: { urls: ["https://static.ads-twitter.com/uwt.js"] },
      },
    },

    sandboxed_scripts: ["__cvt_741923_691"],

    security_groups: {
      google: ["__googtag", "__opt", "__r", "__t"],
      nonGoogleScripts: ["__hjtc", "__twitter_website_tag"],
    },
  };

  var productSettings = {
    "AW-936354700": { preAutoPii: true },
  };

  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ea = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    fa = ea(this),
    ha = function (a, b) {
      if (b)
        a: {
          for (var c = fa, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            h = c[g],
            m = b(h);
          m != h &&
            null != m &&
            ca(c, g, { configurable: !0, writable: !0, value: m });
        }
    },
    ia = function (a) {
      return (a.raw = a);
    },
    ja = function (a, b) {
      a.raw = b;
      return a;
    },
    la = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    na = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    oa = function (a) {
      return a instanceof Array ? a : na(la(a));
    },
    pa =
      "function" == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ha("Object.assign", function (a) {
    return a || pa;
  });
  var ra =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    sa;
  if ("function" == typeof Object.setPrototypeOf) sa = Object.setPrototypeOf;
  else {
    var ta;
    a: {
      var ua = { a: !0 },
        va = {};
      try {
        va.__proto__ = ua;
        ta = va.a;
        break a;
      } catch (a) {}
      ta = !1;
    }
    sa = ta
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var wa = sa,
    xa = function (a, b) {
      a.prototype = ra(b.prototype);
      a.prototype.constructor = a;
      if (wa) wa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.wn = b.prototype;
    },
    za = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Aa = this || self,
    Ca = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Ea = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    Fa = function (a, b, c) {
      Fa =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? Ca
          : Ea;
      return Fa.apply(null, arguments);
    },
    Ga = function (a) {
      return a;
    };
  var Ha = function (a, b) {
    this.m = a;
    this.D = b;
  };
  var Ia = function () {
    this.m = {};
    this.F = {};
  };
  aa = Ia.prototype;
  aa.get = function (a) {
    return this.m["dust." + a];
  };
  aa.set = function (a, b) {
    a = "dust." + a;
    this.F.hasOwnProperty(a) || (this.m[a] = b);
  };
  aa.Ih = function (a, b) {
    this.set(a, b);
    this.F["dust." + a] = !0;
  };
  aa.has = function (a) {
    return this.m.hasOwnProperty("dust." + a);
  };
  aa.vf = function (a) {
    a = "dust." + a;
    this.F.hasOwnProperty(a) || delete this.m[a];
  };
  var Ja = function () {
    this.quota = {};
  };
  Ja.prototype.reset = function () {
    this.quota = {};
  };
  var Ka = function (a, b) {
    this.Z = a;
    this.P = function (c, d, e) {
      return c.apply(d, e);
    };
    this.F = b;
    this.D = new Ia();
    this.m = this.J = void 0;
  };
  Ka.prototype.add = function (a, b) {
    La(this, a, b, !1);
  };
  var La = function (a, b, c, d) {
    d ? a.D.Ih(b, c) : a.D.set(b, c);
  };
  Ka.prototype.set = function (a, b) {
    !this.D.has(a) && this.F && this.F.has(a)
      ? this.F.set(a, b)
      : this.D.set(a, b);
  };
  Ka.prototype.get = function (a) {
    return this.D.has(a) ? this.D.get(a) : this.F ? this.F.get(a) : void 0;
  };
  Ka.prototype.has = function (a) {
    return !!this.D.has(a) || !(!this.F || !this.F.has(a));
  };
  var Ma = function (a) {
    var b = new Ka(a.Z, a);
    a.J && (b.J = a.J);
    b.P = a.P;
    b.m = a.m;
    return b;
  };
  function Na(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = Oa(a, b[d])), c instanceof Ha);
      d++
    );
    return c;
  }
  function Oa(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || "function" !== typeof c.invoke)
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.J;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var Pa = function () {
    this.F = new Ja();
    this.m = new Ka(this.F);
  };
  Pa.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.D(c);
  };
  Pa.prototype.D = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = Oa(this.m, arguments[c]);
    return b;
  };
  Pa.prototype.J = function (a, b) {
    var c = Ma(this.m);
    c.m = a;
    for (var d, e = 1; e < arguments.length; e++) d = Oa(c, arguments[e]);
    return d;
  };
  var Qa = function () {
    Ia.call(this);
    this.D = !1;
  };
  xa(Qa, Ia);
  var Ra = function (a, b) {
    var c = [],
      d;
    for (d in a.m)
      if (a.m.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  Qa.prototype.set = function (a, b) {
    this.D || Ia.prototype.set.call(this, a, b);
  };
  Qa.prototype.Ih = function (a, b) {
    this.D || Ia.prototype.Ih.call(this, a, b);
  };
  Qa.prototype.vf = function (a) {
    this.D || Ia.prototype.vf.call(this, a);
  };
  Qa.prototype.Ib = function () {
    this.D = !0;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Sa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Ta = function (a) {
      if (null == a) return String(a);
      var b = Sa.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Ua = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Va = function (a) {
      if (!a || "object" != Ta(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Ua(a, "constructor") &&
          !Ua(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Ua(a, b);
    },
    k = function (a, b) {
      var c = b || ("array" == Ta(a) ? [] : {}),
        d;
      for (d in a)
        if (Ua(a, d)) {
          var e = a[d];
          "array" == Ta(e)
            ? ("array" != Ta(c[d]) && (c[d] = []), (c[d] = k(e, c[d])))
            : Va(e)
            ? (Va(c[d]) || (c[d] = {}), (c[d] = k(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Wa = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    Xa = function (a) {
      if (void 0 == a || Array.isArray(a) || Va(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    },
    Ya = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    };
  var Za = function (a) {
    this.D = new Qa();
    this.m = [];
    this.F = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Ya(b) ? (this.m[Number(b)] = a[Number(b)]) : this.D.set(b, a[b]));
  };
  aa = Za.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.m.length; c++) {
      var d = this.m[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof Za
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  aa.set = function (a, b) {
    if (!this.F)
      if ("length" === a) {
        if (!Ya(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.m.length = Number(b);
      } else Ya(a) ? (this.m[Number(a)] = b) : this.D.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a
      ? this.length()
      : Ya(a)
      ? this.m[Number(a)]
      : this.D.get(a);
  };
  aa.length = function () {
    return this.m.length;
  };
  aa.Xb = function () {
    for (var a = Ra(this.D, 1), b = 0; b < this.m.length; b++) a.push(b + "");
    return new Za(a);
  };
  var $a = function (a, b) {
    Ya(b) ? delete a.m[Number(b)] : a.D.vf(b);
  };
  aa = Za.prototype;
  aa.pop = function () {
    return this.m.pop();
  };
  aa.push = function (a) {
    return this.m.push.apply(this.m, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.m.shift();
  };
  aa.splice = function (a, b, c) {
    return new Za(this.m.splice.apply(this.m, arguments));
  };
  aa.unshift = function (a) {
    return this.m.unshift.apply(this.m, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return (Ya(a) && this.m.hasOwnProperty(a)) || this.D.has(a);
  };
  aa.Ib = function () {
    this.F = !0;
    Object.freeze(this.m);
    this.D.Ib();
  };
  var ab = function () {
    Qa.call(this);
  };
  xa(ab, Qa);
  ab.prototype.Xb = function () {
    return new Za(Ra(this, 1));
  };
  function bb() {
    for (var a = cb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function db() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var cb, eb;
  function fb(a) {
    cb = cb || db();
    eb = eb || bb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (h >> 6),
        q = h & 63;
      e || ((q = 64), d || (p = 64));
      b.push(cb[m], cb[n], cb[p], cb[q]);
    }
    return b.join("");
  }
  function gb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = eb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    cb = cb || db();
    eb = eb || bb();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var hb = {},
    ib = function (a, b) {
      hb[a] = hb[a] || [];
      hb[a][b] = !0;
    },
    jb = function (a) {
      var b = hb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return fb(c.join("")).replace(/\.+$/, "");
    },
    kb = function () {
      for (var a = [], b = hb.fdr || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var mb = function () {},
    nb = function (a) {
      return "function" === typeof a;
    },
    l = function (a) {
      return "string" === typeof a;
    },
    ob = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    pb = function (a, b) {
      if (a && Array.isArray(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    qb = function (a, b) {
      if (!ob(a) || !ob(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    sb = function (a, b) {
      for (var c = new rb(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    z = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    tb = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    ub = function (a) {
      return Math.round(Number(a)) || 0;
    },
    vb = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    wb = function (a) {
      var b = [];
      if (Array.isArray(a))
        for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    xb = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    yb = function () {
      return new Date(Date.now());
    },
    zb = function () {
      return yb().getTime();
    },
    rb = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  rb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  rb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ab = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Bb = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Cb = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Db = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Eb = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    Fb = function (a, b) {
      var c = D;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    Gb = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Hb = /^\w{1,9}$/,
    Ib = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      z(a, function (d, e) {
        Hb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Jb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var Kb = [],
    Lb = {},
    Mb = function (a) {
      return void 0 == Kb[a] ? !1 : Kb[a];
    };
  var Nb,
    Ob = function () {
      if (void 0 === Nb) {
        var a = null,
          b = Aa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: Ga,
              createScript: Ga,
              createScriptURL: Ga,
            });
          } catch (c) {
            Aa.console && Aa.console.error(c.message);
          }
          Nb = a;
        } else Nb = a;
      }
      return Nb;
    };
  var Pb = function (a) {
    this.m = a;
  };
  Pb.prototype.toString = function () {
    return this.m + "";
  };
  var Qb = function (a) {
      return a instanceof Pb && a.constructor === Pb
        ? a.m
        : "type_error:TrustedResourceUrl";
    },
    Rb = {},
    Sb = function (a) {
      var b = a,
        c = Ob(),
        d = c ? c.createScriptURL(b) : b;
      return new Pb(d, Rb);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Tb = ia([""]),
    Ub = ja(["\x00"], ["\\0"]),
    Vb = ja(["\n"], ["\\n"]),
    Wb = ja(["\x00"], ["\\u0000"]);
  function Xb(a) {
    return -1 === a.toString().indexOf("`");
  }
  Xb(function (a) {
    return a(Tb);
  }) ||
    Xb(function (a) {
      return a(Ub);
    }) ||
    Xb(function (a) {
      return a(Vb);
    }) ||
    Xb(function (a) {
      return a(Wb);
    });
  var Yb = function (a) {
    this.m = a;
  };
  Yb.prototype.toString = function () {
    return this.m;
  };
  var Zb = new Yb("about:invalid#zClosurez");
  var $b = function (a) {
    this.Gl = a;
  };
  function ac(a) {
    return new $b(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var bc = [
    ac("data"),
    ac("http"),
    ac("https"),
    ac("mailto"),
    ac("ftp"),
    new $b(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function cc(a, b) {
    b = void 0 === b ? bc : b;
    if (a instanceof Yb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof $b && d.Gl(a)) return new Yb(a);
    }
  }
  function dc(a) {
    var b;
    b = void 0 === b ? bc : b;
    return cc(a, b) || Zb;
  }
  var ec = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function fc(a) {
    var b;
    if (a instanceof Yb)
      if (a instanceof Yb) b = a.m;
      else throw Error("");
    else b = ec.test(a) ? a : void 0;
    return b;
  }
  var hc = function () {
    this.m = gc[0].toLowerCase();
  };
  hc.prototype.toString = function () {
    return this.m;
  };
  var ic = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var jc, kc;
  a: {
    for (var lc = ["CLOSURE_FLAGS"], mc = Aa, nc = 0; nc < lc.length; nc++)
      if (((mc = mc[lc[nc]]), null == mc)) {
        kc = null;
        break a;
      }
    kc = mc;
  }
  var oc = kc && kc[610401301];
  jc = null != oc ? oc : !1;
  function pc() {
    var a = Aa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var qc,
    rc = Aa.navigator;
  qc = rc ? rc.userAgentData || null : null;
  function sc(a) {
    return jc
      ? qc
        ? qc.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function tc(a) {
    return -1 != pc().indexOf(a);
  }
  function uc() {
    return jc ? !!qc && 0 < qc.brands.length : !1;
  }
  function vc() {
    return uc() ? !1 : tc("Opera");
  }
  function wc() {
    return tc("Firefox") || tc("FxiOS");
  }
  function xc() {
    return uc()
      ? sc("Chromium")
      : ((tc("Chrome") || tc("CriOS")) && !(uc() ? 0 : tc("Edge"))) ||
          tc("Silk");
  }
  var yc = {},
    zc = function (a) {
      this.m = a;
    };
  zc.prototype.toString = function () {
    return this.m.toString();
  };
  function Ac(a, b) {
    var c = [new hc()];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof hc) g = f.m;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Bc(a, b) {
    var c = fc(b);
    void 0 !== c && (a.action = c);
  }
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function Cc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var D = window,
    G = document,
    Dc = navigator,
    Ec = function () {
      var a;
      try {
        a = Dc.serviceWorker;
      } catch (b) {
        return;
      }
      return a;
    },
    Fc = G.currentScript && G.currentScript.src,
    Gc = function (a, b) {
      var c = D[a];
      D[a] = void 0 === c ? b : c;
      return D[a];
    },
    Hc = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Ic = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Jc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Kc(a, b, c) {
    b &&
      z(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Lc = function (a, b, c, d, e) {
      var f = G.createElement("script");
      Kc(f, d, Ic);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var g;
      g = Sb(Cc(a));
      f.src = Qb(g);
      var h,
        m,
        n,
        p =
          null ==
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(m, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      Hc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = G.getElementsByTagName("script")[0] || G.body || G.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Mc = function () {
      if (Fc) {
        var a = Fc.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Nc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = G.createElement("iframe")), (h = !0));
      Kc(g, c, Jc);
      d &&
        z(d, function (p, q) {
          g.dataset[p] = q;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (!Mb(23)) {
        if (h) {
          var m = (G.body && G.body.lastChild) || G.body || G.head;
          m.parentNode.insertBefore(g, m);
        }
        Hc(g, b);
      }
      void 0 !== a && (g.src = a);
      if (Mb(23)) {
        if (h) {
          var n = (G.body && G.body.lastChild) || G.body || G.head;
          n.parentNode.insertBefore(g, n);
        }
        Hc(g, b);
      }
      return g;
    },
    Oc = function (a, b, c, d) {
      var e = new Image(1, 1);
      Kc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Pc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Qc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      D.setTimeout(a, 0);
    },
    Rc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Sc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Tc = function (a) {
      var b = G.createElement("div"),
        c = b,
        d,
        e = Cc("A<div>" + a + "</div>"),
        f = Ob(),
        g = f ? f.createHTML(e) : e;
      d = new zc(g, yc);
      if (1 === c.nodeType) {
        var h = c.tagName;
        if ("SCRIPT" === h || "STYLE" === h) throw Error("");
      }
      c.innerHTML =
        d instanceof zc && d.constructor === zc ? d.m : "type_error:SafeHtml";
      b = b.lastChild;
      for (var m = []; b.firstChild; ) m.push(b.removeChild(b.firstChild));
      return m;
    },
    Uc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Vc = function (a) {
      var b;
      try {
        b = Dc.sendBeacon && Dc.sendBeacon(a);
      } catch (c) {
        ib("TAGGING", 15);
      }
      b || Oc(a);
    },
    Xc = function (a, b) {
      try {
        if (Dc.sendBeacon) return Dc.sendBeacon(a, b);
      } catch (c) {
        ib("TAGGING", 15);
      }
      return !1;
    },
    Yc = {
      cache: "no-store",
      credentials: "include",
      keepalive: !0,
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
    },
    Zc = function (a, b) {
      var c = { Ml: !0 };
      if ("fetch" in D) {
        var d = Object.assign({}, Yc);
        b && (d.body = b);
        c &&
          (c.attributionReporting &&
            (d.attributionReporting = c.attributionReporting),
          c.browsingTopics && (d.browsingTopics = c.browsingTopics));
        try {
          return D.fetch(a, d), !0;
        } catch (e) {}
      }
      if (c && c.Ml) return !1;
      if (b) return Xc(a, b);
      Vc(a);
      return !0;
    },
    $c = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    ad = function () {
      var a = D.performance;
      if (a && nb(a.now)) return a.now();
    },
    bd = function () {
      return D.performance || void 0;
    };
  var cd = function (a, b) {
      return J(this, a) && J(this, b);
    },
    dd = function (a, b) {
      return J(this, a) === J(this, b);
    },
    ed = function (a, b) {
      return J(this, a) || J(this, b);
    },
    fd = function (a, b) {
      a = J(this, a);
      b = J(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    gd = function (a, b) {
      a = String(J(this, a));
      b = String(J(this, b));
      return a.substring(0, b.length) === b;
    },
    hd = function (a, b) {
      a = J(this, a);
      b = J(this, b);
      switch (a) {
        case "pageLocation":
          var c = D.location.href;
          b instanceof ab &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var id = function (a, b) {
    Qa.call(this);
    this.J = a;
    this.P = b;
  };
  xa(id, Qa);
  aa = id.prototype;
  aa.toString = function () {
    return this.J;
  };
  aa.getName = function () {
    return this.J;
  };
  aa.Xb = function () {
    return new Za(Ra(this, 1));
  };
  aa.invoke = function (a, b) {
    return this.P.apply(
      new jd(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  aa.ab = function (a, b) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var jd = function (a, b) {
      this.D = a;
      this.m = b;
    },
    J = function (a, b) {
      var c = a.m;
      return Array.isArray(b) ? Oa(c, b) : b;
    };
  jd.prototype.getName = function () {
    return this.D.getName();
  };
  var kd = function () {
    this.map = new Map();
  };
  kd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  kd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var ld = function () {
    this.keys = [];
    this.values = [];
  };
  ld.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  ld.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function md() {
    try {
      return Map ? new kd() : new ld();
    } catch (a) {
      return new ld();
    }
  }
  var nd = function (a) {
    if (a instanceof nd) return a;
    if (Xa(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.m = a;
  };
  nd.prototype.getValue = function () {
    return this.m;
  };
  nd.prototype.toString = function () {
    return String(this.m);
  };
  var pd = function (a) {
    Qa.call(this);
    this.J = a;
    this.set("then", od(this));
    this.set("catch", od(this, !0));
    this.set("finally", od(this, !1, !0));
  };
  xa(pd, ab);
  var od = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new id("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof id || (d = void 0);
      e instanceof id || (e = void 0);
      var f = Ma(this.m),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.J) : m.invoke(f, n);
          };
        },
        h = a.J.then(d && g(d), e && g(e));
      return new pd(h);
    });
  };
  var rd = function (a, b, c) {
      var d = md(),
        e = function (g, h) {
          for (var m = Ra(g, 1), n = 0; n < m.length; n++)
            h[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (g instanceof Za) {
            var m = [];
            d.set(g, m);
            for (var n = g.Xb(), p = 0; p < n.length(); p++)
              m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof pd) return g.J;
          if (g instanceof ab) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof id) {
            var r = function () {
              for (
                var u = Array.prototype.slice.call(arguments, 0), v = 0;
                v < u.length;
                v++
              )
                u[v] = qd(u[v], b, c);
              var w = new Ka(b ? b.Z : new Ja());
              b && (w.m = b.m);
              return f(g.invoke.apply(g, [w].concat(u)));
            };
            d.set(g, r);
            e(g, r);
            return r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (g instanceof nd && t) return g.getValue();
          switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return g;
            case "object":
              if (null === g) return null;
          }
        };
      return f(a);
    },
    qd = function (a, b, c) {
      var d = md(),
        e = function (g, h) {
          for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (Array.isArray(g) || tb(g)) {
            var m = new Za([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (Va(g)) {
            var p = new ab();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new id("", function (x) {
              for (
                var y = Array.prototype.slice.call(arguments, 0), B = 0;
                B < y.length;
                B++
              )
                y[B] = rd(J(this, y[B]), b, c);
              return f((0, this.m.P)(g, g, y));
            });
            d.set(g, q);
            e(g, q);
            return q;
          }
          var v = typeof g;
          if (null === g || "string" === v || "number" === v || "boolean" === v)
            return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
              break;
            default:
          }
          if (void 0 !== g && w) return new nd(g);
        };
      return f(a);
    };
  var sd = function () {
    var a = !1;
    return a;
  };
  var td = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof Za)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new Za(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Za(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Za(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = Wa(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : $a(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Za(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Wa(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : $a(this, d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var ud = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  xa(ud, Error);
  var vd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    wd = new Ha("break"),
    xd = new Ha("continue"),
    yd = function (a, b) {
      return J(this, a) + J(this, b);
    },
    zd = function (a, b) {
      return J(this, a) && J(this, b);
    },
    Ad = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      if (!(c instanceof Za))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't read property " + b + " of " + a + ".";
        if (sd()) throw new ud(d);
        throw Error(d);
      }
      var e = "number" === typeof a;
      if ("boolean" === typeof a || e) {
        if ("toString" === b) {
          if (e && c.length()) {
            var f = rd(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = "TypeError: " + a + "." + b + " is not a function.";
        if (sd()) throw new ud(g);
        throw Error(g);
      }
      if ("string" === typeof a) {
        if (vd.hasOwnProperty(b)) {
          var h = 2;
          h = 1;
          var m = rd(c, void 0, h);
          return qd(a[b].apply(a, m), this.m);
        }
        var n = "TypeError: " + b + " is not a function";
        if (sd()) throw new ud(n);
        throw Error(n);
      }
      if (a instanceof Za) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof id) {
            var q = Wa(c);
            q.unshift(this.m);
            return p.invoke.apply(p, q);
          }
          var r = "TypeError: " + b + " is not a function";
          if (sd()) throw new ud(r);
          throw Error(r);
        }
        if (0 <= td.supportedMethods.indexOf(b)) {
          var t = Wa(c);
          t.unshift(this.m);
          return td[b].apply(a, t);
        }
      }
      if (a instanceof id || a instanceof ab) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof id) {
            var v = Wa(c);
            v.unshift(this.m);
            return u.invoke.apply(u, v);
          }
          var w = "TypeError: " + b + " is not a function";
          if (sd()) throw new ud(w);
          throw Error(w);
        }
        if ("toString" === b)
          return a instanceof id ? a.getName() : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, Wa(c));
      }
      if (a instanceof nd && "toString" === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if (sd()) throw new ud(x);
      throw Error(x);
    },
    Bd = function (a, b) {
      a = J(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.m;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = J(this, b);
      c.set(a, d);
      return d;
    },
    Cd = function (a) {
      var b = Ma(this.m),
        c = Na(b, Array.prototype.slice.apply(arguments));
      if (c instanceof Ha) return c;
    },
    Dd = function () {
      return wd;
    },
    Ed = function (a) {
      for (var b = J(this, a), c = 0; c < b.length; c++) {
        var d = J(this, b[c]);
        if (d instanceof Ha) return d;
      }
    },
    Fd = function (a) {
      for (var b = this.m, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = J(this, arguments[c + 1]);
          La(b, d, e, !0);
        }
      }
    },
    Gd = function () {
      return xd;
    },
    Hd = function (a, b) {
      return new Ha(a, J(this, b));
    },
    Id = function (a, b, c) {
      var d = new Za();
      b = J(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.m.add(a, J(this, f));
    },
    Jd = function (a, b) {
      return J(this, a) / J(this, b);
    },
    Kd = function (a, b) {
      a = J(this, a);
      b = J(this, b);
      var c = a instanceof nd,
        d = b instanceof nd;
      return c || d ? (c && d ? a.getValue() == b.getValue() : !1) : a == b;
    },
    Ld = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = J(this, arguments[c]);
      return b;
    };
  function Md(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Na(f, d);
      if (g instanceof Ha) {
        if ("break" === g.m) break;
        if ("return" === g.m) return g;
      }
    }
  }
  function Nd(a, b, c) {
    if ("string" === typeof b)
      return Md(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof ab || b instanceof Za || b instanceof id) {
      var d = b.Xb(),
        e = d.length();
      return Md(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var Od = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      var d = this.m;
      return Nd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Pd = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      var d = this.m;
      return Nd(
        function (e) {
          var f = Ma(d);
          La(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Qd = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      var d = this.m;
      return Nd(
        function (e) {
          var f = Ma(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    Sd = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      var d = this.m;
      return Rd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Td = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      var d = this.m;
      return Rd(
        function (e) {
          var f = Ma(d);
          La(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Ud = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      var d = this.m;
      return Rd(
        function (e) {
          var f = Ma(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function Rd(a, b, c) {
    if ("string" === typeof b)
      return Md(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Za)
      return Md(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (sd()) throw new ud("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  var Vd = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = J(this, a);
      if (!(f instanceof Za))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.m;
      d = J(this, d);
      var h = Ma(g);
      for (e(g, h); Oa(h, b); ) {
        var m = Na(h, d);
        if (m instanceof Ha) {
          if ("break" === m.m) break;
          if ("return" === m.m) return m;
        }
        var n = Ma(g);
        e(h, n);
        Oa(n, c);
        h = n;
      }
    },
    Wd = function (a, b, c) {
      var d = this.m,
        e = J(this, b);
      if (!(e instanceof Za))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new id(
        a,
        (function () {
          return function (g) {
            var h = Ma(d);
            void 0 === h.m && (h.m = this.m.m);
            for (
              var m = Array.prototype.slice.call(arguments, 0), n = 0;
              n < m.length;
              n++
            )
              if (((m[n] = J(this, m[n])), m[n] instanceof Ha)) return m[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new Za(m));
            var r = Na(h, f);
            if (r instanceof Ha) return "return" === r.m ? r.D : r;
          };
        })()
      );
    },
    Xd = function (a) {
      a = J(this, a);
      var b = this.m,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Yd = function (a, b) {
      var c;
      a = J(this, a);
      b = J(this, b);
      if (void 0 === a || null === a) {
        var d =
          "TypeError: Cannot read properties of " +
          a +
          " (reading '" +
          b +
          "')";
        if (sd()) throw new ud(d);
        throw Error(d);
      }
      if (a instanceof ab || a instanceof Za || a instanceof id) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : Ya(b) && (c = a[b]);
      else if (a instanceof nd) return;
      return c;
    },
    Zd = function (a, b) {
      return J(this, a) > J(this, b);
    },
    $d = function (a, b) {
      return J(this, a) >= J(this, b);
    },
    ae = function (a, b) {
      a = J(this, a);
      b = J(this, b);
      a instanceof nd && (a = a.getValue());
      b instanceof nd && (b = b.getValue());
      return a === b;
    },
    be = function (a, b) {
      return !ae.call(this, a, b);
    },
    ce = function (a, b, c) {
      var d = [];
      J(this, a) ? (d = J(this, b)) : c && (d = J(this, c));
      var e = Na(this.m, d);
      if (e instanceof Ha) return e;
    },
    de = function (a, b) {
      return J(this, a) < J(this, b);
    },
    ee = function (a, b) {
      return J(this, a) <= J(this, b);
    },
    fe = function (a) {
      for (var b = new Za(), c = 0; c < arguments.length; c++) {
        var d = J(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    ge = function (a) {
      for (var b = new ab(), c = 0; c < arguments.length - 1; c += 2) {
        var d = J(this, arguments[c]) + "",
          e = J(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    he = function (a, b) {
      return J(this, a) % J(this, b);
    },
    ie = function (a, b) {
      return J(this, a) * J(this, b);
    },
    je = function (a) {
      return -J(this, a);
    },
    ke = function (a) {
      return !J(this, a);
    },
    le = function (a, b) {
      return !Kd.call(this, a, b);
    },
    me = function () {
      return null;
    },
    ne = function (a, b) {
      return J(this, a) || J(this, b);
    },
    oe = function (a, b) {
      var c = J(this, a);
      J(this, b);
      return c;
    },
    pe = function (a) {
      return J(this, a);
    },
    qe = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    re = function (a) {
      return new Ha("return", J(this, a));
    },
    se = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't set property " + b + " of " + a + ".";
        if (sd()) throw new ud(d);
        throw Error(d);
      }
      (a instanceof id || a instanceof Za || a instanceof ab) && a.set(b, c);
      return c;
    },
    te = function (a, b) {
      return J(this, a) - J(this, b);
    },
    ue = function (a, b, c) {
      a = J(this, a);
      var d = J(this, b),
        e = J(this, c);
      if (!Array.isArray(d) || !Array.isArray(e))
        throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === J(this, d[h]))
          if (((f = J(this, e[h])), f instanceof Ha)) {
            var m = f.m;
            if ("break" === m) return;
            if ("return" === m || "continue" === m) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = J(this, e[e.length - 1])),
        f instanceof Ha && ("return" === f.m || "continue" === f.m))
      )
        return f;
    },
    ve = function (a, b, c) {
      return J(this, a) ? J(this, b) : J(this, c);
    },
    we = function (a) {
      a = J(this, a);
      return a instanceof id ? "function" : typeof a;
    },
    xe = function (a) {
      for (var b = this.m, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    ye = function (a, b, c, d) {
      var e = J(this, d);
      if (J(this, c)) {
        var f = Na(this.m, e);
        if (f instanceof Ha) {
          if ("break" === f.m) return;
          if ("return" === f.m) return f;
        }
      }
      for (; J(this, a); ) {
        var g = Na(this.m, e);
        if (g instanceof Ha) {
          if ("break" === g.m) break;
          if ("return" === g.m) return g;
        }
        J(this, b);
      }
    },
    ze = function (a) {
      return ~Number(J(this, a));
    },
    Ae = function (a, b) {
      return Number(J(this, a)) << Number(J(this, b));
    },
    De = function (a, b) {
      return Number(J(this, a)) >> Number(J(this, b));
    },
    Ee = function (a, b) {
      return Number(J(this, a)) >>> Number(J(this, b));
    },
    Fe = function (a, b) {
      return Number(J(this, a)) & Number(J(this, b));
    },
    Ge = function (a, b) {
      return Number(J(this, a)) ^ Number(J(this, b));
    },
    He = function (a, b) {
      return Number(J(this, a)) | Number(J(this, b));
    },
    Ie = function () {},
    Je = function (a, b, c, d, e) {
      var f = !0;
      try {
        var g = J(this, c);
        if (g instanceof Ha) return g;
      } catch (r) {
        if (!(r instanceof ud && a)) throw ((f = r instanceof ud), r);
        var h = Ma(this.m),
          m = new nd(r);
        h.add(b, m);
        var n = J(this, d),
          p = Na(h, n);
        if (p instanceof Ha) return p;
      } finally {
        if (f && void 0 !== e) {
          var q = J(this, e);
          if (q instanceof Ha) return q;
        }
      }
    };
  var Le = function () {
    this.m = new Pa();
    Ke(this);
  };
  Le.prototype.execute = function (a) {
    return this.m.D(a);
  };
  var Ke = function (a) {
    var b = function (c, d) {
      var e = new id(String(c), d);
      e.Ib();
      a.m.m.set(String(c), e);
    };
    b("map", ge);
    b("and", cd);
    b("contains", fd);
    b("equals", dd);
    b("or", ed);
    b("startsWith", gd);
    b("variable", hd);
  };
  var Ne = function () {
    this.m = new Pa();
    Me(this);
  };
  Ne.prototype.execute = function (a) {
    return Oe(this.m.D(a));
  };
  var Pe = function (a, b, c) {
      return Oe(a.m.J(b, c));
    },
    Me = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new id(e, d);
        f.Ib();
        a.m.m.set(e, f);
      };
      b(0, yd);
      b(1, zd);
      b(2, Ad);
      b(3, Bd);
      b(56, Fe);
      b(57, Ae);
      b(58, ze);
      b(59, He);
      b(60, De);
      b(61, Ee);
      b(62, Ge);
      b(53, Cd);
      b(4, Dd);
      b(5, Ed);
      b(52, Fd);
      b(6, Gd);
      b(49, Hd);
      b(7, fe);
      b(8, ge);
      b(9, Ed);
      b(50, Id);
      b(10, Jd);
      b(12, Kd);
      b(13, Ld);
      b(51, Wd);
      b(47, Od);
      b(54, Pd);
      b(55, Qd);
      b(63, Vd);
      b(64, Sd);
      b(65, Td);
      b(66, Ud);
      b(15, Xd);
      b(16, Yd);
      b(17, Yd);
      b(18, Zd);
      b(19, $d);
      b(20, ae);
      b(21, be);
      b(22, ce);
      b(23, de);
      b(24, ee);
      b(25, he);
      b(26, ie);
      b(27, je);
      b(28, ke);
      b(29, le);
      b(45, me);
      b(30, ne);
      b(32, oe);
      b(33, oe);
      b(34, pe);
      b(35, pe);
      b(46, qe);
      b(36, re);
      b(43, se);
      b(37, te);
      b(38, ue);
      b(39, ve);
      b(67, Je);
      b(40, we);
      b(44, Ie);
      b(41, xe);
      b(42, ye);
    };
  function Oe(a) {
    if (
      a instanceof Ha ||
      a instanceof id ||
      a instanceof Za ||
      a instanceof ab ||
      a instanceof nd ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var Qe = function (a) {
    this.message = a;
  };
  function Re(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return void 0 === b
      ? new Qe(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Se(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Te = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Pj: a("consent"),
      Sh: a("convert_case_to"),
      Th: a("convert_false_to"),
      Uh: a("convert_null_to"),
      Vh: a("convert_true_to"),
      Wh: a("convert_undefined_to"),
      Fm: a("debug_mode_metadata"),
      na: a("function"),
      Mg: a("instance_name"),
      tk: a("live_only"),
      uk: a("malware_disabled"),
      vk: a("metadata"),
      yk: a("original_activity_id"),
      Tm: a("original_vendor_template_id"),
      Sm: a("once_on_load"),
      xk: a("once_per_event"),
      Vi: a("once_per_load"),
      Xm: a("priority_override"),
      Ym: a("respected_consent_types"),
      bj: a("setup_tags"),
      me: a("tag_id"),
      ij: a("teardown_tags"),
    };
  })();
  var Ue = [],
    Ve = {
      "\x00": "&#0;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      "-": "&#45;",
      "/": "&#47;",
      "=": "&#61;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    },
    We = function (a) {
      return Ve[a];
    },
    Xe = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var af = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    bf = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\v": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      "&": "\\x26",
      "'": "\\x27",
      "/": "\\/",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "\\": "\\\\",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
      $: "\\x24",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      ":": "\\x3a",
      "?": "\\x3f",
      "[": "\\x5b",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d",
    },
    cf = function (a) {
      return bf[a];
    };
  Ue[8] = function (a) {
    if (null == a) return " null ";
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(af, cf) + "'";
    }
  };
  var jf = /['()]/g,
    kf = function (a) {
      return "%" + a.charCodeAt(0).toString(16);
    };
  Ue[12] = function (a) {
    var b = encodeURIComponent(String(a));
    jf.lastIndex = 0;
    return jf.test(b) ? b.replace(jf, kf) : b;
  };
  var lf =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    mf = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    },
    nf = function (a) {
      return mf[a];
    };
  Ue[16] = function (a) {
    return a;
  };
  var pf;
  var qf = [],
    rf = [],
    sf = [],
    tf = [],
    uf = [],
    vf = {},
    wf,
    xf,
    yf = function (a) {
      xf = xf || a;
    },
    zf = function (a) {},
    Af,
    Bf = [],
    Cf = [],
    Df = function (a, b) {
      var c = {};
      c[Te.na] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    Ef = function (a, b) {
      var c = a[Te.na],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = vf[c],
        f =
          b &&
          2 === b.type &&
          d.reportMacroDiscrepancy &&
          e &&
          -1 !== Bf.indexOf(c),
        g = {},
        h = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (h[m.substr(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (null == q) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = qf[q];
                  break;
                case 1:
                  r = tf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = r && r[Te.Mg];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var u, v, w;
      if (f && -1 === Cf.indexOf(c)) {
        Cf.push(c);
        var x = zb();
        u = e(g);
        var y = zb() - x,
          B = zb();
        v = pf(c, h, b);
        w = y - (zb() - B);
      } else if ((e && (u = e(g)), !e || f)) v = pf(c, h, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Xa(u)
          ? (Array.isArray(u) ? Array.isArray(v) : Va(u) ? Va(v) : u === v) ||
            d.reportMacroDiscrepancy(d.id, c)
          : u !== v && d.reportMacroDiscrepancy(d.id, c),
        void 0 != w && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? u : v;
    },
    Gf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Ff(a[e], b, c));
      return d;
    },
    Ff = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Ff(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = qf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var h = String(g[Te.Mg]);
            try {
              var m = Gf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Ef(m, { event: b, index: f, type: 2, name: h });
              Af && (d = Af.Ok(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Ff(a[n], b, c)] = Ff(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Ff(a[q], b, c);
              xf && (p = p || xf.Dl(r));
              d.push(r);
            }
            return xf && p ? xf.Qk(d) : d.join("");
          case "escape":
            d = Ff(a[1], b, c);
            if (xf && Array.isArray(a[1]) && "macro" === a[1][0] && xf.El(a))
              return xf.Xl(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Ue[a[t]] && (d = Ue[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!tf[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return { sj: a[2], index: u };
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[Te.na] = a[1];
            var w = Hf(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Hf = function (a, b, c) {
      try {
        return wf(Gf(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    If = function (a) {
      var b = a[Te.na];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!vf[b];
    };
  var Jf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.m = a;
    this.name = "PermissionError";
  };
  xa(Jf, Error);
  function Kf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Kf(a[c], b[c]);
    }
  }
  var Lf = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Sl = a;
    this.D = b;
    this.m = [];
  };
  xa(Lf, Error);
  var Nf = function () {
    return function (a, b) {
      a instanceof Lf || (a = new Lf(a, Mf));
      b && a.m.push(b);
      throw a;
    };
  };
  function Mf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) ob(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Qf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Of(a), f = 0; f < rf.length; f++) {
        var g = rf[f],
          h = Pf(g, e);
        if (h) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < tf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Pf = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Of = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Hf(sf[c], a));
        return b[c];
      };
    };
  var Rf = {
    Ok: function (a, b) {
      b[Te.Sh] &&
        "string" === typeof a &&
        (a = 1 == b[Te.Sh] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Te.Uh) && null === a && (a = b[Te.Uh]);
      b.hasOwnProperty(Te.Wh) && void 0 === a && (a = b[Te.Wh]);
      b.hasOwnProperty(Te.Vh) && !0 === a && (a = b[Te.Vh]);
      b.hasOwnProperty(Te.Th) && !1 === a && (a = b[Te.Th]);
      return a;
    },
  };
  var Sf = function () {
      this.m = {};
    },
    Uf = function (a, b) {
      var c = Tf.D,
        d;
      null != (d = c.m)[a] || (d[a] = []);
      c.m[a].push(function () {
        return b.apply(null, oa(za.apply(0, arguments)));
      });
    };
  function Vf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new Jf(c, d, g);
      }
  }
  function Wf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.m[d],
          f = a.m.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Vf(e, b, d, g);
          Vf(f, b, d, g);
        }
      }
    };
  }
  var $f = function () {
      var a = data.permissions || {},
        b = Xf.ctid,
        c = this;
      this.D = new Sf();
      this.m = {};
      var d = {},
        e = {},
        f = Wf(this.D, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      z(a, function (g, h) {
        var m = {};
        z(h, function (p, q) {
          var r = Yf(p, q);
          m[p] = r.assert;
          d[p] || (d[p] = r.N);
          r.mj && !e[p] && (e[p] = r.mj);
        });
        var n = function (p) {
          var q = za.apply(1, arguments);
          if (!m[p])
            throw Zf(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(oa(q)));
        };
        c.m[g] = function (p, q) {
          var r = m[p];
          if (!r)
            throw Zf(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var t = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, t);
          f.apply(void 0, t);
          var u = e[p];
          u && u.apply(null, [n].concat(oa(t.slice(1))));
        };
      });
    },
    ag = function (a) {
      return Tf.m[a] || function () {};
    };
  function Yf(a, b) {
    var c = Df(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Zf;
    try {
      return Ef(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Jf(e, {}, "Permission " + e + " is unknown.");
        },
        N: function () {
          throw new Jf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Zf(a, b, c) {
    return new Jf(a, b, c);
  }
  var bg = !1;
  var cg = {};
  cg.zm = vb("");
  cg.Tk = vb("");
  var dg = bg,
    eg = cg.Tk,
    fg = cg.zm;
  var ng = {},
    og =
      ((ng.uaa = !0),
      (ng.uab = !0),
      (ng.uafvl = !0),
      (ng.uamb = !0),
      (ng.uam = !0),
      (ng.uap = !0),
      (ng.uapv = !0),
      (ng.uaw = !0),
      ng);
  var sg = /^[a-z$_][\w$]*$/i,
    tg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i,
    ug = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!tg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = -1 !== f && f === e.length - 2,
          h = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (0 === d.length) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!sg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || h.length > d.length || (!g && d.length != e.length)
            ? 0
            : g
            ? 0 === d.indexOf(h) && (d === h || "." == d.charAt(h.length))
            : d === h
        )
          return !0;
      }
      return !1;
    };
  var vg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function wg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var xg = new rb();
  function yg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = xg.get(e);
      f || ((f = new RegExp(b, d)), xg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function zg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function Ag(a, b) {
    return String(a) === String(b);
  }
  function Bg(a, b) {
    return Number(a) >= Number(b);
  }
  function Cg(a, b) {
    return Number(a) <= Number(b);
  }
  function Dg(a, b) {
    return Number(a) > Number(b);
  }
  function Eg(a, b) {
    return Number(a) < Number(b);
  }
  function Fg(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  var Gg = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    Hg = function (a, b) {
      var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
      Gg(b, "/*") && (b = b.slice(0, -2));
      Gg(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && 1 === d.length) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (-1 === e || (0 === f && 0 !== e)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var h = d[d.length - 1];
      return a.lastIndexOf(h) === a.length - h.length;
    },
    Ig = /^[a-z0-9-]+$/i,
    Jg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
    Lg = function (a, b) {
      var c;
      if (!(c = !Kg(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (2 > e.length) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!Ig.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var h;
        var m = a,
          n = b[g];
        if (!Jg.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var t = m.hostname,
          u = q;
        if (0 !== u.indexOf("*.")) r = t.toLowerCase() === u.toLowerCase();
        else {
          u = u.slice(2);
          var v = t.toLowerCase().indexOf(u.toLowerCase());
          r =
            -1 === v
              ? !1
              : t.length === u.length
              ? !0
              : t.length !== u.length + v
              ? !1
              : "." === t[v - 1];
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          h = Hg(m.pathname + m.search, w) ? !0 : !1;
        } else h = !1;
        if (h) return !0;
      }
      return !1;
    },
    Kg = function (a) {
      return "https:" === a.protocol && (!a.port || "443" === a.port);
    };
  var Mg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ng(a, b) {
    for (var c = "", d = !0; 7 < a; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = Re(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = Re(a | b) + c);
  }
  var Og =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Pg = { Fn: "function", PixieMap: "Object", List: "Array" },
    K = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Og.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          m = c[d];
        if (null == m) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof m;
          m instanceof id
            ? (n = "Fn")
            : m instanceof Za
            ? (n = "List")
            : m instanceof ab
            ? (n = "PixieMap")
            : m instanceof nd && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (Pg[n] || n) +
                ", which does not match required type " +
                (Pg[h] || h) +
                "."
            );
        }
      }
    };
  function Qg(a) {
    return "" + a;
  }
  function Rg(a, b) {
    var c = [];
    return c;
  }
  var Vg = function (a, b) {
      var c = new id(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = J(this, d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          if (sd()) throw new ud(g.message);
          throw g;
        }
      });
      c.Ib();
      return c;
    },
    Wg = function (a, b) {
      var c = new ab(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          nb(e)
            ? c.set(d, Vg(a + "_" + d, e))
            : Va(e)
            ? c.set(d, Wg(a + "_" + d, e))
            : (ob(e) || l(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Ib();
      return c;
    };
  var Xg = function (a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new ab();
    return (d = Wg("AssertApiSubject", c));
  };
  var Yg = function (a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof pd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new ab();
    return (d = Wg("AssertThatSubject", c));
  };
  function Zg(a) {
    return function () {
      for (var b = [], c = this.m, d = 0; d < arguments.length; ++d)
        b.push(rd(arguments[d], c));
      return qd(a.apply(null, b));
    };
  }
  var ah = function () {
    for (var a = Math, b = $g, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Zg(a[e].bind(a)));
    }
    return c;
  };
  var bh = function (a) {
    var b;
    return b;
  };
  var ch = function (a) {
    var b;
    return b;
  };
  var dh = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var eh = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function fh(a, b) {
    var c = !1;
    return c;
  }
  fh.H = "internal.evaluateBooleanExpression";
  var kh = function (a) {
    K(this.getName(), ["message:?string"], arguments);
  };
  var lh = function (a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return qb(a, b);
  };
  var mh = function () {
    return new Date().getTime();
  };
  var nh = function (a) {
    if (null === a) return "null";
    if (a instanceof Za) return "array";
    if (a instanceof id) return "function";
    if (a instanceof nd) {
      a = a.getValue();
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var oh = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (dg || fg) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return qd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(rd(c));
      }),
    };
  };
  var ph = function (a) {
    return ub(rd(a, this.m));
  };
  var qh = function (a) {
    return Number(rd(a, this.m));
  };
  var rh = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var sh = function (a, b, c) {
    var d = null,
      e = !1;
    K(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new ab();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof ab &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  };
  var $g = "floor ceil round max min abs pow sqrt".split(" ");
  var th = function () {
      var a = {};
      return {
        il: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        om: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    uh = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return id.prototype.invoke.apply(a, c);
      };
    },
    vh = function (a, b) {
      K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
    };
  var wh = {};
  var xh = function (a) {
    var b = new ab();
    if (a instanceof Za)
      for (var c = a.Xb(), d = 0; d < c.length(); d++) {
        var e = c.get(d);
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof id)
      for (var f = Ra(a, 1), g = 0; g < f.length; g++) {
        var h = f[g];
        b.set(h, a.get(h));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  wh.keys = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Za || a instanceof id || "string" === typeof a) a = xh(a);
    if (a instanceof ab) return a.Xb();
    return new Za();
  };
  wh.values = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Za || a instanceof id || "string" === typeof a) a = xh(a);
    if (a instanceof ab) return new Za(Ra(a, 2));
    return new Za();
  };
  wh.entries = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Za || a instanceof id || "string" === typeof a) a = xh(a);
    if (a instanceof ab) {
      for (var b = Ra(a, 3), c = new Za(), d = 0; d < b.length; d++) {
        var e = new Za(b[d]);
        c.push(e);
      }
      return c;
    }
    return new Za();
  };
  wh.freeze = function (a) {
    (a instanceof ab || a instanceof Za || a instanceof id) && a.Ib();
    return a;
  };
  wh.delete = function (a, b) {
    if (a instanceof ab && !a.D) return a.vf(b), !0;
    return !1;
  };
  var L = function (a, b, c) {
    var d = a.m.m;
    if (!d) throw Error("Missing program state.");
    if (d.fm) {
      try {
        d.nj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw (ib("TAGGING", 21), e);
      }
      return;
    }
    d.nj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var yh = function () {
    this.m = {};
    this.D = {};
  };
  yh.prototype.get = function (a, b) {
    var c = this.m.hasOwnProperty(a) ? this.m[a] : void 0;
    return c;
  };
  yh.prototype.add = function (a, b, c) {
    if (this.m.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.D.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.m[a] = c ? void 0 : nb(b) ? Vg(a, b) : Wg(a, b);
  };
  function zh(a, b) {
    var c = void 0;
    return c;
  }
  function Ah() {
    var a = {};
    return a;
  }
  var Ch = function (a) {
      return Bh ? G.querySelectorAll(a) : null;
    },
    Dh = function (a, b) {
      if (!Bh) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!G.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Eh = !1;
  if (G.querySelectorAll)
    try {
      var Fh = G.querySelectorAll(":root");
      Fh && 1 == Fh.length && Fh[0] == G.documentElement && (Eh = !0);
    } catch (a) {}
  var Bh = Eh;
  var M = function (a) {
    ib("GTM", a);
  };
  var Gh = function (a) {
      return null == a ? "" : l(a) ? xb(String(a)) : "e0";
    },
    Ih = function (a) {
      return a.replace(Hh, "");
    },
    Kh = function (a) {
      return Jh(a.replace(/\s/g, ""));
    },
    Jh = function (a) {
      return xb(a.replace(Lh, "").toLowerCase());
    },
    Nh = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return Mh.test(a) ? a : "e0";
    },
    Ph = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Oh.test(c)) return c;
      }
      return "e0";
    },
    Sh = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (D.crypto && D.crypto.subtle) {
        if (Qh.test(a)) return Promise.resolve(a);
        try {
          var b = Rh(a);
          return D.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return D.btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      } else return Promise.resolve("e1");
    },
    Rh = function (a) {
      var b;
      if (D.TextEncoder) b = new TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    Lh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Oh = /^\S+@\S+\.\S+$/,
    Mh = /^\+\d{10,15}$/,
    Hh = /[.~]/g,
    Th = /^[0-9A-Za-z_-]{43}$/,
    Qh = /^[0-9A-Fa-f]{64}$/,
    Uh = {},
    Vh =
      ((Uh.email = "em"),
      (Uh.phone_number = "pn"),
      (Uh.first_name = "fn"),
      (Uh.last_name = "ln"),
      (Uh.street = "sa"),
      (Uh.city = "ct"),
      (Uh.region = "rg"),
      (Uh.country = "co"),
      (Uh.postal_code = "pc"),
      (Uh.error_code = "ec"),
      Uh),
    Wh = {},
    Xh =
      ((Wh.email = "sha256_email_address"),
      (Wh.phone_number = "sha256_phone_number"),
      (Wh.first_name = "sha256_first_name"),
      (Wh.last_name = "sha256_last_name"),
      (Wh.street = "sha256_street"),
      Wh),
    Zh = function (a, b) {
      a.some(function (c) {
        c.value && Yh.indexOf(c.name);
      })
        ? b(a)
        : D.Promise
        ? Promise.all(
            a.map(function (c) {
              return c.value && -1 !== Yh.indexOf(c.name)
                ? Sh(c.value).then(function (d) {
                    c.value = d;
                  })
                : Promise.resolve();
            })
          )
            .then(function () {
              b(a);
            })
            .catch(function () {
              b([]);
            })
        : b([]);
    },
    ai = function (a, b) {
      var c = $h(a);
      Zh(c, b);
    },
    $h = function (a) {
      function b(r, t, u, v) {
        var w = Gh(r);
        "" !== w &&
          (Qh.test(w)
            ? h.push({ name: t, value: w, index: v })
            : h.push({ name: t, value: u(w), index: v }));
      }
      function c(r, t) {
        var u = r;
        if (l(u) || Array.isArray(u)) {
          u = Array.isArray(r) ? r : [r];
          for (var v = 0; v < u.length; ++v) {
            var w = Gh(u[v]),
              x = Qh.test(w);
            t && !x && M(89);
            !t && x && M(88);
          }
        }
      }
      function d(r, t) {
        var u = r[t];
        c(u, !1);
        var v = Xh[t];
        r[v] && (r[t] && M(90), (u = r[v]), c(u, !0));
        return u;
      }
      function e(r, t, u) {
        var v = d(r, t);
        v = Array.isArray(v) ? v : [v];
        for (var w = 0; w < v.length; ++w) b(v[w], t, u);
      }
      function f(r, t, u, v) {
        var w = d(r, t);
        b(w, t, u, v);
      }
      function g(r) {
        return function (t) {
          M(64);
          return r(t);
        };
      }
      var h = [];
      if ("https:" !== D.location.protocol)
        return h.push({ name: "error_code", value: "e3", index: void 0 }), h;
      e(a, "email", Ph);
      e(a, "phone_number", Nh);
      e(a, "first_name", g(Kh));
      e(a, "last_name", g(Kh));
      var m = a.home_address || {};
      e(m, "street", g(Jh));
      e(m, "city", g(Jh));
      e(m, "postal_code", g(Ih));
      e(m, "region", g(Jh));
      e(m, "country", g(Ih));
      var n = a.address || {};
      n = Array.isArray(n) ? n : [n];
      for (var p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, "first_name", Kh, p);
        f(q, "last_name", Kh, p);
        f(q, "street", Jh, p);
        f(q, "city", Jh, p);
        f(q, "postal_code", Ih, p);
        f(q, "region", Jh, p);
        f(q, "country", Ih, p);
      }
      return h;
    },
    ci = function (a, b) {
      ai(a, function (c) {
        var d = bi(c);
        b(d.Lf, d.Ah);
      });
    },
    bi = function (a) {
      for (var b = ["tv.1"], c = 0, d = 0; d < a.length; ++d) {
        var e = a[d].name,
          f = a[d].value,
          g = a[d].index,
          h = Vh[e];
        h &&
          f &&
          (-1 === Yh.indexOf(e) ||
            /^e\d+$/.test(f) ||
            Th.test(f) ||
            Qh.test(f)) &&
          (void 0 !== g && (h += g), b.push(h + "." + f), c++);
      }
      1 === a.length && "error_code" === a[0].name && (c = 0);
      return { Lf: encodeURIComponent(b.join("~")), Ah: c };
    },
    di = function (a) {
      if (D.Promise)
        try {
          return new Promise(function (b) {
            ci(a, function (c, d) {
              b({ yj: c, Ah: d });
            });
          });
        } catch (b) {}
    },
    Yh = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var Q = {
      g: {
        xa: "ad_personalization",
        M: "ad_storage",
        O: "ad_user_data",
        T: "analytics_storage",
        hc: "region",
        ic: "consent_updated",
        Qe: "wait_for_update",
        Xh: "app_remove",
        Yh: "app_store_refund",
        Zh: "app_store_subscription_cancel",
        ai: "app_store_subscription_convert",
        bi: "app_store_subscription_renew",
        Tj: "consent_update",
        Wf: "add_payment_info",
        Xf: "add_shipping_info",
        jc: "add_to_cart",
        kc: "remove_from_cart",
        Yf: "view_cart",
        Mb: "begin_checkout",
        mc: "select_item",
        eb: "view_item_list",
        Bb: "select_promotion",
        fb: "view_promotion",
        Ha: "purchase",
        nc: "refund",
        Ka: "view_item",
        Zf: "add_to_wishlist",
        Uj: "exception",
        di: "first_open",
        ei: "first_visit",
        ba: "gtag.config",
        Oa: "gtag.get",
        fi: "in_app_purchase",
        Nb: "page_view",
        Vj: "screen_view",
        gi: "session_start",
        Wj: "timing_complete",
        Xj: "track_social",
        Kc: "user_engagement",
        hb: "gclgb",
        Pa: "gclid",
        fa: "ads_data_redaction",
        hi: "gad_source",
        Ed: "gclid_url",
        ii: "gclsrc",
        cg: "gbraid",
        Re: "wbraid",
        la: "allow_ad_personalization_signals",
        Se: "allow_custom_scripts",
        Te: "allow_display_features",
        Fd: "allow_enhanced_conversions",
        ib: "allow_google_signals",
        Aa: "allow_interest_groups",
        Yj: "app_id",
        Zj: "app_installer_id",
        bk: "app_name",
        dk: "app_version",
        Cb: "auid",
        ji: "auto_detection_enabled",
        Ob: "aw_remarketing",
        Ue: "aw_remarketing_only",
        Gd: "discount",
        Hd: "aw_feed_country",
        Id: "aw_feed_language",
        da: "items",
        Jd: "aw_merchant_id",
        dg: "aw_basket_type",
        Lc: "campaign_content",
        Mc: "campaign_id",
        Nc: "campaign_medium",
        Oc: "campaign_name",
        Pc: "campaign",
        Qc: "campaign_source",
        Rc: "campaign_term",
        jb: "client_id",
        ki: "rnd",
        li: "consent_update_type",
        mi: "content_group",
        ni: "content_type",
        Ua: "conversion_cookie_prefix",
        Sc: "conversion_id",
        ra: "conversion_linker",
        oi: "conversion_linker_disabled",
        Pb: "conversion_api",
        Ve: "cookie_deprecation",
        Qa: "cookie_domain",
        Ra: "cookie_expires",
        Va: "cookie_flags",
        oc: "cookie_name",
        Qb: "cookie_path",
        La: "cookie_prefix",
        qc: "cookie_update",
        sc: "country",
        ya: "currency",
        Kd: "customer_lifetime_value",
        Tc: "custom_map",
        eg: "gcldc",
        Ld: "dclid",
        ri: "debug_mode",
        ja: "developer_id",
        si: "disable_merchant_reported_purchases",
        Uc: "dc_custom_params",
        ui: "dc_natural_search",
        fg: "dynamic_event_settings",
        gg: "affiliation",
        Md: "checkout_option",
        We: "checkout_step",
        hg: "coupon",
        Vc: "item_list_name",
        Xe: "list_name",
        vi: "promotions",
        Wc: "shipping",
        Ye: "tax",
        Nd: "engagement_time_msec",
        Od: "enhanced_client_id",
        Pd: "enhanced_conversions",
        ig: "enhanced_conversions_automatic_settings",
        Qd: "estimated_delivery_date",
        Ze: "euid_logged_in_state",
        Xc: "event_callback",
        ek: "event_category",
        lb: "event_developer_id_string",
        fk: "event_label",
        Yc: "event",
        Rd: "event_settings",
        Sd: "event_timeout",
        gk: "description",
        hk: "fatal",
        wi: "experiments",
        af: "firebase_id",
        uc: "first_party_collection",
        Td: "_x_20",
        nb: "_x_19",
        xi: "fledge_drop_reason",
        jg: "fledge",
        kg: "flight_error_code",
        lg: "flight_error_message",
        yi: "fl_activity_category",
        zi: "fl_activity_group",
        mg: "fl_advertiser_id",
        Ai: "fl_ar_dedupe",
        ng: "match_id",
        Bi: "fl_random_number",
        Ci: "tran",
        Di: "u",
        Ud: "gac_gclid",
        vc: "gac_wbraid",
        og: "gac_wbraid_multiple_conversions",
        pg: "ga_restrict_domain",
        bf: "ga_temp_client_id",
        wc: "gdpr_applies",
        qg: "geo_granularity",
        Db: "value_callback",
        ob: "value_key",
        ik: "google_ng",
        jk: "google_ono",
        Rb: "google_signals",
        rg: "google_tld",
        Vd: "groups",
        sg: "gsa_experiment_id",
        Wd: "iframe_state",
        Zc: "ignore_referrer",
        cf: "internal_traffic_results",
        Sb: "is_legacy_converted",
        Eb: "is_legacy_loaded",
        Xd: "is_passthrough",
        bd: "_lps",
        Ma: "language",
        Yd: "legacy_developer_id_string",
        sa: "linker",
        Tb: "accept_incoming",
        Wa: "decorate_forms",
        W: "domains",
        qb: "url_position",
        ug: "method",
        kk: "name",
        dd: "new_customer",
        vg: "non_interaction",
        Ei: "optimize_id",
        Fi: "page_hostname",
        ed: "page_path",
        Ba: "page_referrer",
        Fb: "page_title",
        wg: "passengers",
        xg: "phone_conversion_callback",
        Gi: "phone_conversion_country_code",
        yg: "phone_conversion_css_class",
        Hi: "phone_conversion_ids",
        zg: "phone_conversion_number",
        Ag: "phone_conversion_options",
        Bg: "_protected_audience_enabled",
        fd: "quantity",
        Zd: "redact_device_info",
        df: "referral_exclusion_definition",
        Ub: "restricted_data_processing",
        Ii: "retoken",
        lk: "sample_rate",
        ef: "screen_name",
        Gb: "screen_resolution",
        Ji: "search_term",
        Ia: "send_page_view",
        Vb: "send_to",
        gd: "server_container_url",
        hd: "session_duration",
        ae: "session_engaged",
        ff: "session_engaged_time",
        rb: "session_id",
        be: "session_number",
        jd: "delivery_postal_code",
        mk: "temporary_client_id",
        hf: "topmost_url",
        Ki: "tracking_id",
        jf: "traffic_type",
        za: "transaction_id",
        Hb: "transport_url",
        Cg: "trip_type",
        Wb: "update",
        Sa: "url_passthrough",
        kf: "_user_agent_architecture",
        lf: "_user_agent_bitness",
        nf: "_user_agent_full_version_list",
        pf: "_user_agent_mobile",
        qf: "_user_agent_model",
        rf: "_user_agent_platform",
        tf: "_user_agent_platform_version",
        uf: "_user_agent_wow64",
        Ca: "user_data",
        Dg: "user_data_auto_latency",
        Eg: "user_data_auto_meta",
        Fg: "user_data_auto_multi",
        Gg: "user_data_auto_selectors",
        Hg: "user_data_auto_status",
        kd: "user_data_mode",
        ce: "user_data_settings",
        Na: "user_id",
        Xa: "user_properties",
        Li: "_user_region",
        de: "us_privacy_string",
        ma: "value",
        Ig: "wbraid_multiple_conversions",
        Ri: "_host_name",
        Si: "_in_page_command",
        Ti: "_is_passthrough_cid",
        Jb: "non_personalized_ads",
        ke: "_sst_parameters",
        kb: "conversion_label",
        wa: "page_location",
        pb: "global_developer_id_string",
        xc: "tc_privacy_string",
      },
    },
    ei = {},
    fi = Object.freeze(
      ((ei[Q.g.la] = 1),
      (ei[Q.g.Te] = 1),
      (ei[Q.g.Fd] = 1),
      (ei[Q.g.ib] = 1),
      (ei[Q.g.da] = 1),
      (ei[Q.g.Qa] = 1),
      (ei[Q.g.Ra] = 1),
      (ei[Q.g.Va] = 1),
      (ei[Q.g.oc] = 1),
      (ei[Q.g.Qb] = 1),
      (ei[Q.g.La] = 1),
      (ei[Q.g.qc] = 1),
      (ei[Q.g.Tc] = 1),
      (ei[Q.g.ja] = 1),
      (ei[Q.g.fg] = 1),
      (ei[Q.g.Xc] = 1),
      (ei[Q.g.Rd] = 1),
      (ei[Q.g.Sd] = 1),
      (ei[Q.g.uc] = 1),
      (ei[Q.g.pg] = 1),
      (ei[Q.g.Rb] = 1),
      (ei[Q.g.rg] = 1),
      (ei[Q.g.Vd] = 1),
      (ei[Q.g.cf] = 1),
      (ei[Q.g.Sb] = 1),
      (ei[Q.g.Eb] = 1),
      (ei[Q.g.sa] = 1),
      (ei[Q.g.df] = 1),
      (ei[Q.g.Ub] = 1),
      (ei[Q.g.Ia] = 1),
      (ei[Q.g.Vb] = 1),
      (ei[Q.g.gd] = 1),
      (ei[Q.g.hd] = 1),
      (ei[Q.g.ff] = 1),
      (ei[Q.g.jd] = 1),
      (ei[Q.g.Hb] = 1),
      (ei[Q.g.Wb] = 1),
      (ei[Q.g.ce] = 1),
      (ei[Q.g.Xa] = 1),
      (ei[Q.g.ke] = 1),
      ei)
    );
  Object.freeze([
    Q.g.wa,
    Q.g.Ba,
    Q.g.Fb,
    Q.g.Ma,
    Q.g.ef,
    Q.g.Na,
    Q.g.af,
    Q.g.mi,
  ]);
  var gi = {},
    hi = Object.freeze(
      ((gi[Q.g.Xh] = 1),
      (gi[Q.g.Yh] = 1),
      (gi[Q.g.Zh] = 1),
      (gi[Q.g.ai] = 1),
      (gi[Q.g.bi] = 1),
      (gi[Q.g.di] = 1),
      (gi[Q.g.ei] = 1),
      (gi[Q.g.fi] = 1),
      (gi[Q.g.gi] = 1),
      (gi[Q.g.Kc] = 1),
      gi)
    ),
    ii = {},
    ji = Object.freeze(
      ((ii[Q.g.Wf] = 1),
      (ii[Q.g.Xf] = 1),
      (ii[Q.g.jc] = 1),
      (ii[Q.g.kc] = 1),
      (ii[Q.g.Yf] = 1),
      (ii[Q.g.Mb] = 1),
      (ii[Q.g.mc] = 1),
      (ii[Q.g.eb] = 1),
      (ii[Q.g.Bb] = 1),
      (ii[Q.g.fb] = 1),
      (ii[Q.g.Ha] = 1),
      (ii[Q.g.nc] = 1),
      (ii[Q.g.Ka] = 1),
      (ii[Q.g.Zf] = 1),
      ii)
    ),
    ki = Object.freeze([
      Q.g.la,
      Q.g.ib,
      Q.g.qc,
      Q.g.uc,
      Q.g.Zc,
      Q.g.Ia,
      Q.g.Wb,
    ]),
    li = Object.freeze([].concat(ki)),
    mi = Object.freeze([Q.g.Ra, Q.g.Sd, Q.g.hd, Q.g.ff, Q.g.Nd]),
    ni = Object.freeze([].concat(mi)),
    oi = {},
    pi =
      ((oi[Q.g.M] = "1"),
      (oi[Q.g.T] = "2"),
      (oi[Q.g.O] = "3"),
      (oi[Q.g.xa] = "4"),
      oi),
    qi = {},
    ri = Object.freeze(
      ((qi[Q.g.la] = 1),
      (qi[Q.g.Fd] = 1),
      (qi[Q.g.Aa] = 1),
      (qi[Q.g.Ob] = 1),
      (qi[Q.g.Ue] = 1),
      (qi[Q.g.Gd] = 1),
      (qi[Q.g.Hd] = 1),
      (qi[Q.g.Id] = 1),
      (qi[Q.g.da] = 1),
      (qi[Q.g.Jd] = 1),
      (qi[Q.g.Ua] = 1),
      (qi[Q.g.ra] = 1),
      (qi[Q.g.Qa] = 1),
      (qi[Q.g.Ra] = 1),
      (qi[Q.g.Va] = 1),
      (qi[Q.g.La] = 1),
      (qi[Q.g.ya] = 1),
      (qi[Q.g.Kd] = 1),
      (qi[Q.g.ja] = 1),
      (qi[Q.g.si] = 1),
      (qi[Q.g.Pd] = 1),
      (qi[Q.g.Qd] = 1),
      (qi[Q.g.af] = 1),
      (qi[Q.g.uc] = 1),
      (qi[Q.g.Sb] = 1),
      (qi[Q.g.Eb] = 1),
      (qi[Q.g.Ma] = 1),
      (qi[Q.g.dd] = 1),
      (qi[Q.g.wa] = 1),
      (qi[Q.g.Ba] = 1),
      (qi[Q.g.xg] = 1),
      (qi[Q.g.yg] = 1),
      (qi[Q.g.zg] = 1),
      (qi[Q.g.Ag] = 1),
      (qi[Q.g.Ub] = 1),
      (qi[Q.g.Ia] = 1),
      (qi[Q.g.Vb] = 1),
      (qi[Q.g.gd] = 1),
      (qi[Q.g.jd] = 1),
      (qi[Q.g.za] = 1),
      (qi[Q.g.Hb] = 1),
      (qi[Q.g.Wb] = 1),
      (qi[Q.g.Sa] = 1),
      (qi[Q.g.Ca] = 1),
      (qi[Q.g.Na] = 1),
      (qi[Q.g.ma] = 1),
      qi)
    ),
    si = {},
    ti = Object.freeze(
      ((si.search = "s"),
      (si.youtube = "y"),
      (si.playstore = "p"),
      (si.shopping = "h"),
      (si.ads = "a"),
      (si.maps = "m"),
      si)
    );
  Object.freeze(Q.g);
  var ui = {},
    vi = (D.google_tag_manager = D.google_tag_manager || {});
  ui.Ng = "44f0";
  ui.je = Number("0") || 0;
  ui.Ta = "dataLayer";
  ui.Dm =
    "ChAI8Ob9sAYQ08btsuOO+O4gEiMAIO/3q2dkNrxcRQQ38dALW+qkVh2F5Is8Wv7PNFUbcro4qRoCfo0\x3d";
  var wi = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    xi = { __paused: 1, __tg: 1 },
    yi;
  for (yi in wi) wi.hasOwnProperty(yi) && (xi[yi] = 1);
  var zi = vb(""),
    Ai,
    Bi = !1;
  Ai = Bi;
  var Ci,
    Di = !1;
  Ci = Di;
  var Ei,
    Fi = !1;
  Ei = Fi;
  ui.Dd = "www.googletagmanager.com";
  var Gi = "" + ui.Dd + (Ai ? "/gtag/js" : "/gtm.js"),
    Hi = null,
    Ii = null,
    Ji = {},
    Ki = {},
    Li = function () {
      var a = vi.sequence || 1;
      vi.sequence = a + 1;
      return a;
    };
  ui.Qj = "";
  var Mi = "";
  ui.Bf = Mi;
  var Ni = new (function () {
      this.m = "";
      this.J = this.D = !1;
      this.Da = this.P = this.Z = this.F = "";
    })(),
    Oi = function () {
      var a = Ni.F.length;
      return "/" === Ni.F[a - 1] ? Ni.F.substring(0, a - 1) : Ni.F;
    };
  function Pi(a) {
    for (var b = {}, c = la(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Qi = new rb(),
    Ri = {},
    Si = {},
    Vi = {
      name: ui.Ta,
      set: function (a, b) {
        k(Gb(a, b), Ri);
        Ti();
      },
      get: function (a) {
        return Ui(a, 2);
      },
      reset: function () {
        Qi = new rb();
        Ri = {};
        Ti();
      },
    },
    Ui = function (a, b) {
      return 2 != b ? Qi.get(a) : Wi(a);
    },
    Wi = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Ri, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Xi = function (a, b) {
      Si.hasOwnProperty(a) || (Qi.set(a, b), k(Gb(a, b), Ri), Ti());
    },
    Yi = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = Ui(c, 1);
        if (Array.isArray(d) || Va(d)) d = k(d);
        Si[c] = d;
      }
    },
    Ti = function (a) {
      z(Si, function (b, c) {
        Qi.set(b, c);
        k(Gb(b), Ri);
        k(Gb(b, c), Ri);
        a && delete Si[b];
      });
    },
    Zi = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Wi(a) : Qi.get(a);
      "array" === Ta(d) || "object" === Ta(d) ? (c = k(d)) : (c = d);
      return c;
    };
  var $i = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), h = 0; h < g.length; h++) {
          var m = g[h].trim();
          if (m) {
            if (0 === m.indexOf("dataLayer.")) f = Ui(m.substring(10));
            else {
              var n = m.split(".");
              f = D[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ("css_selector" === d && Bh) {
        var q = Ch(e);
        if (q && 0 < q.length) {
          f = [];
          for (
            var r = 0;
            r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1);
            r++
          )
            f.push(Sc(q[r]) || xb(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? ((a[b] = f), !0) : !1;
    },
    aj = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = $i(b, "email", a.email) || c;
        c = $i(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = $i(f, "first_name", d[e].first_name) || c;
          c = $i(f, "last_name", d[e].last_name) || c;
          c = $i(f, "street", d[e].street) || c;
          c = $i(f, "city", d[e].city) || c;
          c = $i(f, "region", d[e].region) || c;
          c = $i(f, "country", d[e].country) || c;
          c = $i(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    bj = function (a) {
      return Va(a) ? !!a.enable_code : !1;
    };
  function cj(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var dj = [];
  function ej(a) {
    switch (a) {
      case 0:
        return 0;
      case 36:
        return 11;
      case 37:
        return 12;
      case 41:
        return 14;
      case 44:
        return 13;
      case 54:
        return 20;
      case 66:
        return 16;
      case 68:
        return 23;
      case 76:
        return 18;
      case 84:
        return 21;
      case 87:
        return 22;
    }
  }
  function R(a) {
    dj[a] = !0;
    var b = ej(a);
    void 0 !== b && (Kb[b] = !0);
  }
  R(26);
  R(22);
  R(23);
  R(24);
  R(25);
  R(38);
  R(42);
  R(56);
  R(28);
  R(14);
  R(83);
  R(13);
  R(91);
  R(82);
  R(41);
  R(45);
  R(67);
  R(34);
  R(7);
  R(4);
  R(60);
  R(11);
  R(80);
  R(51);
  R(52);
  R(53);
  R(48);
  R(74);
  R(89);
  R(88);
  R(65);
  R(94);
  R(92);
  R(66);
  R(5);

  R(20);
  R(70);
  Lb[1] = cj("1", 6e4);
  Lb[3] = cj("10", 1);
  Lb[2] = cj("", 50);
  R(10);
  R(68);
  function kj(a, b) {
    for (var c = void 0, d = void 0, e = 0; c === d; )
      if (
        ((c = Math.floor(2 * Math.random())),
        (d = Math.floor(2 * Math.random())),
        e++,
        20 < e)
      )
        return;
    c ? R(a) : R(b);
  }
  function T(a) {
    return !!dj[a];
  }
  var lj = function (a) {
    ib("HEALTH", a);
  };
  var mj;
  try {
    mj = JSON.parse(
      gb(
        "eyIwIjoiUlUiLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUucnUiLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"
      )
    );
  } catch (a) {
    M(123), lj(2), (mj = {});
  }
  var nj = function () {
      return mj["0"] || "";
    },
    oj = function () {
      var a = !1;
      return a;
    },
    pj = function () {
      return !1 !== mj["6"];
    },
    qj = function () {
      var a = "";
      return a;
    },
    rj = function () {
      var a = !1;
      a = !!mj["5"];
      return a;
    },
    sj = function () {
      var a = "";
      return a;
    };
  var tj = /:[0-9]+$/,
    uj = /^\d+\.fls\.doubleclick\.net$/,
    vj = function (a, b, c, d) {
      for (
        var e = [], f = la(a.split("&")), g = f.next();
        !g.done;
        g = f.next()
      ) {
        var h = la(g.value.split("=")),
          m = h.next().value,
          n = na(h);
        if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
          var p = n.join("=");
          if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
          e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
        }
      }
      return c ? e : void 0;
    },
    yj = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = wj(a.protocol) || wj(D.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : D.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || D.location.hostname)
            .replace(tj, "")
            .toLowerCase());
      return xj(a, b, c, d, e);
    },
    xj = function (a, b, c, d, e) {
      var f,
        g = wj(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = zj(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(tj, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || ib("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = vj(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    wj = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    zj = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Aj = {},
    Bj = 0,
    Cj = function (a) {
      var b = Aj[a];
      if (!b) {
        var c = G.createElement("a");
        a && (c.href = a);
        var d = c.pathname;
        "/" !== d[0] && (a || ib("TAGGING", 1), (d = "/" + d));
        var e = c.hostname.replace(tj, "");
        b = {
          href: c.href,
          protocol: c.protocol,
          host: c.host,
          hostname: e,
          pathname: d,
          search: c.search,
          hash: c.hash,
          port: c.port,
        };
        5 > Bj && ((Aj[a] = b), Bj++);
      }
      return b;
    },
    Dj = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Cj(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var m = "" + f + g + h;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Ej = function (a) {
      var b = Cj(D.location.href),
        c = yj(b, "host", !1);
      if (c && c.match(uj)) {
        var d = yj(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  var Fj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function Gj(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Cj("" + c + b).href;
    }
  }
  function Hj() {
    return Ni.D || Ci;
  }
  function Ij() {
    return !!ui.Bf && "SGTM_TOKEN" !== ui.Bf.split("@@").join("");
  }
  function Jj(a) {
    for (var b = la([Q.g.gd, Q.g.Hb]), c = b.next(); !c.done; c = b.next()) {
      var d = V(a, c.value);
      if (d) return d;
    }
  }
  function Kj(a, b) {
    return Ni.D ? "" + Oi() + (b ? Fj[a] || "" : "") : a;
  }
  var Lj = function (a) {
      var b = String(a[Te.na] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    Mj =
      0 <= D.location.search.indexOf("?gtm_latency=") ||
      0 <= D.location.search.indexOf("&gtm_latency=");
  var Oj = function (a, b) {
      var c = Nj();
      c.pending || (c.pending = []);
      pb(c.pending, function (d) {
        return (
          d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        );
      }) || c.pending.push({ target: a, onLoad: b });
    },
    Pj = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    Nj = function () {
      var a = Gc("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new Pj()), (a.tidr = b));
      return b;
    };
  var Qj = {},
    Rj = !1,
    Xf = {
      ctid: "GTM-KCHN85",
      canonicalContainerId: "741923",
      zj: "GTM-KCHN85",
      Aj: "GTM-KCHN85",
    };
  Qj.fe = vb("");
  var Uj = function () {
      var a = Sj();
      return Rj ? a.map(Tj) : a;
    },
    Wj = function () {
      var a = Vj();
      return Rj ? a.map(Tj) : a;
    },
    Yj = function () {
      return Xj(Xf.ctid);
    },
    Zj = function () {
      return Xj(Xf.canonicalContainerId || "_" + Xf.ctid);
    },
    Sj = function () {
      return Xf.zj ? Xf.zj.split("|") : [Xf.ctid];
    },
    Vj = function () {
      return Xf.Aj ? Xf.Aj.split("|") : [];
    },
    ck = function () {
      var a = ak(bk());
      if (a) {
        for (; a.parent; ) {
          var b = ak(a.parent);
          if (!b) break;
          a = b;
        }
        return a;
      }
    },
    ak = function (a) {
      var b = Nj();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    Xj = function (a) {
      return Rj ? Tj(a) : a;
    },
    Tj = function (a) {
      return "siloed_" + a;
    },
    ek = function (a) {
      return Rj ? dk(a) : a;
    };
  function dk(a) {
    a = String(a);
    return 0 === a.indexOf("siloed_") ? a.substring(7) : a;
  }
  var fk = function () {
    var a = !1;
    if (a) {
      var b = Nj();
      if (b.siloed) {
        for (
          var c = [], d = Sj().map(Tj), e = Vj().map(Tj), f = {}, g = 0;
          g < b.siloed.length;
          f = { Ff: void 0 }, g++
        )
          (f.Ff = b.siloed[g]),
            !Rj &&
            pb(
              f.Ff.isDestination ? e : d,
              (function (h) {
                return function (m) {
                  return m === h.Ff.ctid;
                };
              })(f)
            )
              ? (Rj = !0)
              : c.push(f.Ff);
        b.siloed = c;
      }
    }
  };
  function gk() {
    var a = Nj();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Uj(), f = Wj(), g = {}, h = 0;
        h < a.pending.length;
        g = { Je: void 0 }, h++
      )
        (g.Je = a.pending[h]),
          pb(
            g.Je.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Je.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Je.onLoad), (d = !0))
            : c.push(g.Je);
      a.pending = c;
      if (b)
        try {
          b(Zj());
        } catch (m) {}
    }
  }
  var hk = function () {
      for (
        var a = Xf.ctid,
          b = Uj(),
          c = Wj(),
          d = function (n, p) {
            var q = {
              canonicalContainerId: Xf.canonicalContainerId,
              scriptContainerId: a,
              state: 2,
              containers: b.slice(),
              destinations: c.slice(),
            };
            Fc && (q.scriptSource = Fc);
            var r = p ? e.destination : e.container,
              t = r[n];
            t ? (p && 0 === t.state && M(93), Object.assign(t, q)) : (r[n] = q);
          },
          e = Nj(),
          f = la(b),
          g = f.next();
        !g.done;
        g = f.next()
      )
        d(g.value, !1);
      for (var h = la(c), m = h.next(); !m.done; m = h.next()) d(m.value, !0);
      e.canonical[Zj()] = {};
      gk();
    },
    ik = function (a) {
      return !!Nj().container[a];
    },
    jk = function (a) {
      var b = Nj().destination[a];
      return !!b && !!b.state;
    },
    bk = function () {
      return { ctid: Yj(), isDestination: Qj.fe };
    };
  function kk(a) {
    var b = Nj();
    (b.siloed = b.siloed || []).push(a);
  }
  var lk = function () {
      var a = Nj().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    mk = function () {
      var a = {};
      z(Nj().destination, function (b, c) {
        0 === c.state && (a[dk(b)] = c);
      });
      return a;
    },
    nk = function (a) {
      return !!(
        a &&
        a.parent &&
        a.context &&
        1 === a.context.source &&
        0 !== a.parent.ctid.indexOf("GTM-")
      );
    };
  var ok = { sampleRate: "0.005000", Nj: "", Mj: Number("5"), xn: Number("") },
    pk = [];
  function qk(a) {
    pk.push(a);
  }
  var rk = !1,
    sk;
  if (!(sk = Mj)) {
    var tk = Math.random(),
      uk = ok.sampleRate;
    sk = tk < Number(uk);
  }
  var vk = sk,
    wk = "/a?id=" + Xf.ctid,
    xk = void 0,
    yk = {},
    zk = void 0,
    Ak = new (function () {
      var a = 5;
      0 < ok.Mj && (a = ok.Mj);
      this.m = 0;
      this.F = [];
      this.D = a;
    })(),
    Bk = 1e3;
  function Ck(a, b) {
    var c = xk;
    if (void 0 === c)
      if (b) c = Li();
      else return "";
    for (
      var d = [Kj("https://www.googletagmanager.com"), wk],
        e = la(pk),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value,
          h = g({
            eventId: c,
            Ab: !!a,
            Of: function () {
              rk = !0;
            },
          }),
          m = la(h),
          n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = la(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function Dk() {
    zk && (D.clearTimeout(zk), (zk = void 0));
    if (void 0 !== xk && Ek) {
      var a;
      (a = yk[xk]) || (a = Ak.m < Ak.D ? !1 : 1e3 > zb() - Ak.F[Ak.m % Ak.D]);
      if (a || 0 >= Bk--) M(1), (yk[xk] = !0);
      else {
        var b = Ak.m++ % Ak.D;
        Ak.F[b] = zb();
        var c = Ck(!0);
        Oc(c);
        if (rk) {
          var d = c.replace("/a?", "/td?");
          Oc(d);
        }
        Ek = rk = !1;
      }
    }
  }
  var Ek = !1;
  function Fk(a) {
    yk[a] ||
      (a !== xk && (Dk(), (xk = a)),
      (Ek = !0),
      zk || (zk = D.setTimeout(Dk, 500)),
      2022 <= Ck().length && Dk());
  }
  var Gk = qb();
  function Hk() {
    Gk = qb();
  }
  function Ik() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", Gk],
    ];
  }
  var Jk = "",
    Kk = [],
    Lk = !1;
  function Mk() {
    var a = [];
    Jk && a.push(["dl", encodeURIComponent(Jk)]);
    0 < Kk.length && a.push(["tdp", Kk.join(".")]);
    return a;
  }
  function Nk(a) {
    var b = Lk ? [] : Mk();
    !Lk && a.Ab && ((Lk = !0), b.length && a.Of());
    return b;
  }
  var Ok = [],
    Pk = [];
  function Qk(a) {
    -1 === Pk.indexOf(a) && (Ok.push(a), Pk.push(a));
  }
  function Rk(a) {
    if (!Ok.length) return [];
    for (var b = Mk(), c = la(Ok), d = c.next(); !d.done; d = c.next())
      b.push([d.value, "1"]);
    a.Ab && (a.Of(), (Ok.length = 0));
    return b;
  }
  var Sk = new (function (a, b) {
    this.m = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Uk = function () {
      var a = Gc("google_tag_data", {});
      return (a.ics = a.ics || new Tk());
    },
    Tk = function () {
      this.entries = {};
      this.waitPeriodTimedOut =
        this.wasSetLate =
        this.accessedAny =
        this.accessedDefault =
        this.usedImplicit =
        this.usedUpdate =
        this.usedDefault =
        this.usedDeclare =
        this.active =
          !1;
      this.m = [];
    };
  Tk.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    ib("TAGGING", 19);
    void 0 == b
      ? ib("TAGGING", 18)
      : Vk(this, a, "granted" === b, c, d, e, f, g);
  };
  Tk.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      Vk(this, a[d], void 0, void 0, "", "", b, c);
  };
  var Vk = function (a, b, c, d, e, f, g, h) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && l(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if ("" === e || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && 0 < g && void 0 === n.update),
        t = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: void 0 !== c ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if ("" !== e || !1 !== n.default) m[b] = t;
      r &&
        D.setTimeout(function () {
          m[b] === t &&
            t.quiet &&
            (ib("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, h),
            a.notifyListeners());
        }, g);
    }
  };
  aa = Tk.prototype;
  aa.clearTimeout = function (a, b, c) {
    var d = [a],
      e = (null == c ? void 0 : c.delegatedConsentTypes) || {},
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      h = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = la(d), n = m.next(); !n.done; n = m.next())
        Wk(this, n.value);
    } else if (void 0 !== b && h !== b)
      for (var p = la(d), q = p.next(); !q.done; q = p.next())
        Wk(this, q.value);
  };
  aa.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = "granted" === b;
      this.clearTimeout(a, d, c);
    }
  };
  aa.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      h = g.declare_region,
      m = c && l(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if ("" === d || m === e || (m === d ? h !== e : !m && !h)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if ("" !== d || !1 !== g.declare) f[a] = n;
    }
  };
  aa.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  aa.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.default;
    if (void 0 !== e) return e ? 1 : 2;
    if (null == b ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var f = c[b.delegatedConsentTypes[a]] || {};
      e = f.update;
      if (void 0 !== e) return e ? 1 : 2;
      e = f.default;
      if (void 0 !== e) return e ? 1 : 2;
    }
    e = d.declare;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.implicit;
    return void 0 !== e ? (e ? 3 : 4) : 0;
  };
  aa.addListener = function (a, b) {
    this.m.push({ consentTypes: a, Yk: b });
  };
  var Wk = function (a, b) {
    for (var c = 0; c < a.m.length; ++c) {
      var d = a.m[c];
      Array.isArray(d.consentTypes) &&
        -1 !== d.consentTypes.indexOf(b) &&
        (d.Bj = !0);
    }
  };
  Tk.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.m.length; ++c) {
      var d = this.m[c];
      if (d.Bj) {
        d.Bj = !1;
        try {
          d.Yk({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var Xk = function (a) {
    Xk[" "](a);
    return a;
  };
  Xk[" "] = function () {};
  var Zk = function () {
    var a = Yk,
      b = "jh";
    if (a.jh && a.hasOwnProperty(b)) return a.jh;
    var c = new a();
    return (a.jh = c);
  };
  var Yk = function () {
    var a = {};
    this.m = function () {
      var b = Sk.m,
        c = Sk.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.D = function () {
      a[Sk.m] = !0;
    };
  };
  var $k = !1,
    al = !1,
    bl = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
    };
  function cl(a) {
    var b = Uk();
    if ("ad_user_data" === a)
      if (Mb(22)) {
        var c = b.getConsentState("ad_storage", bl);
        if (2 !== c && 4 !== c) return c;
      } else Mb(21) && (a = "ad_storage");
    return b.getConsentState(a, bl);
  }
  var dl = function (a) {
      Uk().accessedAny = !0;
      return (l(a) ? [a] : a).every(function (b) {
        switch (cl(b)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    el = function (a) {
      Uk().accessedAny = !0;
      return cl(a);
    },
    fl = function (a) {
      for (var b = {}, c = la(a), d = c.next(); !d.done; d = c.next()) {
        var e = d.value;
        b[e] = !1 !== bl.corePlatformServices[e];
      }
      return b;
    },
    gl = function (a) {
      var b = Uk();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    hl = function () {
      if (!Zk().m()) return !1;
      var a = Uk();
      a.accessedAny = !0;
      return a.active;
    },
    il = function (a, b) {
      if (Mb(21)) {
        for (
          var c = [],
            d = a.find(function (h) {
              return "ad_storage" === h;
            }),
            e = la(a),
            f = e.next();
          !f.done;
          f = e.next()
        ) {
          var g = f.value;
          if ("ad_user_data" === g) {
            if (d) continue;
            c.push("ad_storage");
          }
          c.push(g);
        }
        Uk().addListener(c, b);
      } else Uk().addListener(a, b);
    },
    jl = function (a, b) {
      Uk().notifyListeners(a, b);
    },
    kl = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!gl(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        il(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    ll = function (a, b) {
      function c() {
        for (var h = [], m = 0; m < e.length; m++) {
          var n = e[m];
          dl(n) && !f[n] && h.push(n);
        }
        return h;
      }
      function d(h) {
        for (var m = 0; m < h.length; m++) f[h[m]] = !0;
      }
      var e = l(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length &&
        (d(g),
        il(e, function (h) {
          function m(q) {
            0 !== q.length && (d(q), (h.consentTypes = q), a(h));
          }
          var n = c();
          if (0 !== n.length) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : D.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  function ml() {}
  function nl() {}
  var ol = [Q.g.M, Q.g.T, Q.g.O, Q.g.xa],
    pl,
    ql,
    rl = function (a) {
      for (
        var b = a[Q.g.hc], c = Array.isArray(b) ? b : [b], d = { ze: 0 };
        d.ze < c.length;
        d = { ze: d.ze }, ++d.ze
      )
        z(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== Q.g.hc) {
                var h = c[e.ze],
                  m = nj(),
                  n = mj["1"] || "";
                al = !0;
                $k && ib("TAGGING", 20);
                Uk().declare(f, g, h, m, n);
              }
            };
          })(d)
        );
    },
    sl = function (a) {
      !ql && pl && Qk("crc");
      ql = !0;
      var b = a[Q.g.hc];
      b && M(40);
      var c = a[Q.g.Qe];
      c && M(41);
      for (
        var d = Array.isArray(b) ? b : [b], e = { Ae: 0 };
        e.Ae < d.length;
        e = { Ae: e.Ae }, ++e.Ae
      )
        z(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== Q.g.hc && g !== Q.g.Qe) {
                var m = d[f.Ae],
                  n = Number(c),
                  p = nj(),
                  q = mj["1"] || "";
                n = void 0 === n ? 0 : n;
                $k = !0;
                al && ib("TAGGING", 20);
                Uk().default(g, h, m, p, q, n, bl);
              }
            };
          })(e)
        );
    },
    tl = function (a, b) {
      pl = !0;
      z(a, function (c, d) {
        $k = !0;
        al && ib("TAGGING", 20);
        Uk().update(c, d, bl);
      });
      jl(b.eventId, b.priorityId);
    },
    ul = function (a) {
      a.hasOwnProperty("all") &&
        z(ti, function (b) {
          bl.corePlatformServices[b] = "granted" === a.all;
          bl.usedCorePlatformServices = !0;
        });
      z(a, function (b, c) {
        "all" !== b &&
          ((bl.corePlatformServices[b] = "granted" === c),
          (bl.usedCorePlatformServices = !0));
      });
    },
    W = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return dl(b);
      });
    },
    vl = function (a, b) {
      il(a, b);
    },
    wl = function (a, b) {
      ll(a, b);
    },
    xl = function (a, b) {
      kl(a, b);
    },
    yl = function () {
      var a = [Q.g.M, Q.g.xa, Q.g.O];
      Uk().waitForUpdate(a, 500, bl);
    },
    zl = function (a) {
      for (var b = la(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        Uk().clearTimeout(d, void 0, bl);
      }
      jl();
    };
  var Al = function () {
    if (void 0 === vi.pscdl) {
      var a = function (b) {
        vi.pscdl = b;
      };
      try {
        "cookieDeprecationLabel" in Dc
          ? (a("pending"), Dc.cookieDeprecationLabel.getValue().then(a))
          : a("noapi");
      } catch (b) {
        a("error");
      }
    }
  };
  var Bl = /[A-Z]+/,
    Cl = /\s/,
    Dl = function (a, b) {
      if (l(a)) {
        a = xb(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (Bl.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var g = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = g(e);
              if ("DC" === d && 2 === f.length) {
                var h = g(f[1]);
                2 === h.length && ((f[1] = h[0]), f.push(h[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || (Cl.test(f[m]) && ("AW" !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, ia: d + "-" + f[0], ka: f };
          }
        }
      }
    },
    Fl = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = Dl(a[d], b);
        e && (c[e.id] = e);
      }
      El(c);
      var f = [];
      z(c, function (g, h) {
        f.push(h);
      });
      return f;
    };
  function El(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.ka[Gl[2]] && b.push(d.ia);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Hl = {},
    Gl =
      ((Hl[0] = 0),
      (Hl[1] = 0),
      (Hl[2] = 1),
      (Hl[3] = 0),
      (Hl[4] = 1),
      (Hl[5] = 2),
      (Hl[6] = 0),
      (Hl[7] = 0),
      (Hl[8] = 0),
      Hl);
  var Il = [];
  function Jl(a) {
    if (!Il.length) return [];
    var b = [["tdc", Il.join("!")]];
    a.Ab && (a.Of(), (Il.length = 0));
    return b;
  }
  var Kl = { initialized: 11, complete: 12, interactive: 13 },
    Ll = {},
    Ml = Object.freeze(((Ll[Q.g.Ia] = !0), Ll)),
    Nl =
      0 <= G.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= G.location.search.indexOf("&gtm_diagnostics="),
    Pl = function (a, b, c) {
      if (vk && "config" === a && !(1 < Dl(b).ka.length)) {
        var d,
          e = Gc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = k(c.J);
        k(c.m, f);
        var g = [],
          h;
        for (h in d) {
          var m = Ol(d[h], f);
          m.length && (Nl && console.log(m), g.push(h));
        }
        g.length &&
          (g.length && vk && Il.push(b + "*" + g.join(".")),
          ib("TAGGING", Kl[G.readyState] || 14));
        d[b] = f;
      }
    };
  function Ql(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Ol(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Ml[q] : t;
      },
      f;
    for (f in Ql(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        m = e(f, b),
        n = "object" === Ta(h) || "array" === Ta(h),
        p = "object" === Ta(m) || "array" === Ta(m);
      if (n && p) Ol(h, m, c, g);
      else if (n || p || h !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var Rl = function (a, b, c, d, e, f, g, h, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.m = c;
      this.P = d;
      this.F = e;
      this.J = f;
      this.D = g;
      this.eventMetadata = h;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    Sl = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.m);
          c.push(a.P);
          c.push(a.F);
          c.push(a.J);
          c.push(a.D);
          break;
        case 2:
          c.push(a.m);
          break;
        case 1:
          c.push(a.P);
          c.push(a.F);
          c.push(a.J);
          c.push(a.D);
          break;
        case 4:
          c.push(a.m), c.push(a.P), c.push(a.F), c.push(a.J);
      }
      return c;
    },
    V = function (a, b, c, d) {
      for (
        var e = la(Sl(a, void 0 === d ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (void 0 !== g[b]) return g[b];
      }
      return c;
    },
    Tl = function (a) {
      for (
        var b = {}, c = Sl(a, 4), d = la(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = la(f), h = g.next();
          !h.done;
          h = g.next()
        )
          b[h.value] = 1;
      return Object.keys(b);
    },
    Ul = function (a, b, c) {
      function d(n) {
        Va(n) &&
          z(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = Sl(a, void 0 === c ? 3 : c);
      g.reverse();
      for (var h = la(g), m = h.next(); !m.done; m = h.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    Vl = function (a) {
      for (
        var b = [Q.g.Pc, Q.g.Lc, Q.g.Mc, Q.g.Nc, Q.g.Oc, Q.g.Qc, Q.g.Rc],
          c = Sl(a, 3),
          d = la(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, h = !1, m = la(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          void 0 !== f[p] && ((g[p] = f[p]), (h = !0));
        }
        var q = h ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    Wl = function (a, b) {
      this.wf = a;
      this.xf = b;
      this.F = {};
      this.sb = {};
      this.m = {};
      this.J = {};
      this.md = {};
      this.Ya = {};
      this.D = {};
      this.Da = function () {};
      this.Z = function () {};
      this.P = !1;
    },
    Xl = function (a, b) {
      a.F = b;
      return a;
    },
    Yl = function (a, b) {
      a.sb = b;
      return a;
    },
    Zl = function (a, b) {
      a.m = b;
      return a;
    },
    $l = function (a, b) {
      a.J = b;
      return a;
    },
    am = function (a, b) {
      a.md = b;
      return a;
    },
    bm = function (a, b) {
      a.Ya = b;
      return a;
    },
    cm = function (a, b) {
      a.D = b || {};
      return a;
    },
    dm = function (a, b) {
      a.Da = b;
      return a;
    },
    em = function (a, b) {
      a.Z = b;
      return a;
    },
    fm = function (a, b) {
      a.P = b;
      return a;
    },
    gm = function (a) {
      return new Rl(a.wf, a.xf, a.F, a.sb, a.m, a.J, a.Ya, a.D, a.Da, a.Z, a.P);
    };
  var hm = {};
  function im(a, b, c) {
    vk && void 0 !== a && ((hm[a] = hm[a] || []), hm[a].push(c + b), Fk(a));
  }
  function jm(a) {
    var b = a.eventId,
      c = a.Ab,
      d = [],
      e = hm[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete hm[b];
    return d;
  }
  var lm = function (a, b) {
      var c = Dl(Xj(a), !0);
      c && km.register(c, b);
    },
    mm = function (a, b, c, d) {
      var e = Dl(c, d.isGtmEvent);
      e && km.push("event", [b, a], e, d);
    },
    nm = function (a, b, c, d) {
      var e = Dl(c, d.isGtmEvent);
      e && km.push("get", [a, b], e, d);
    },
    pm = function (a) {
      var b = Dl(Xj(a), !0),
        c;
      b ? (c = om(km, b).m) : (c = {});
      return c;
    },
    qm = function (a, b) {
      var c = Dl(Xj(a), !0);
      if (c) {
        var d = km,
          e = k(b);
        k(om(d, c).m, e);
        om(d, c).m = e;
      }
    },
    rm = function () {
      this.status = 1;
      this.P = {};
      this.m = {};
      this.D = {};
      this.Z = null;
      this.J = {};
      this.F = !1;
    },
    sm = function (a, b, c, d) {
      var e = zb();
      this.type = a;
      this.D = e;
      this.m = b;
      this.args = c;
      this.messageContext = d;
    },
    tm = function () {
      this.D = {};
      this.F = {};
      this.m = [];
    },
    om = function (a, b) {
      var c = b.ia;
      return (a.D[c] = a.D[c] || new rm());
    },
    um = function (a, b, c, d) {
      if (d.m) {
        var e = om(a, d.m),
          f = e.Z;
        if (f) {
          var g = k(c),
            h = k(e.P[d.m.id]),
            m = k(e.J),
            n = k(e.m),
            p = k(a.F),
            q = {};
          if (vk)
            try {
              q = k(Ri);
            } catch (v) {
              M(72);
            }
          var r = d.m.prefix,
            t = function (v) {
              im(d.messageContext.eventId, r, v);
            },
            u = gm(
              fm(
                em(
                  dm(
                    cm(
                      am(
                        $l(
                          bm(
                            Zl(
                              Yl(
                                Xl(
                                  new Wl(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                h
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            im(d.messageContext.eventId, r, "1"),
              Pl(d.type, d.m.id, u),
              f(d.m.id, b, d.D, u);
          } catch (v) {
            im(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  tm.prototype.register = function (a, b, c) {
    var d = om(this, a);
    3 !== d.status &&
      ((d.Z = b), (d.status = 3), c && (k(d.m, c), (d.m = c)), this.flush());
  };
  tm.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === om(this, c).status &&
        ((om(this, c).status = 2), this.push("require", [{}], c, {})),
      om(this, c).F && (d.deferrable = !1));
    this.m.push(new sm(a, c, b, d));
    d.deferrable || this.flush();
  };
  tm.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.m.length;
      e = { yc: void 0, bh: void 0 }
    ) {
      var f = this.m[0],
        g = f.m;
      if (f.messageContext.deferrable)
        !g || om(this, g).F
          ? ((f.messageContext.deferrable = !1), this.m.push(f))
          : c.push(f),
          this.m.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== om(this, g).status && !a) {
              this.m.push.apply(this.m, c);
              return;
            }
            break;
          case "set":
            z(f.args[0], function (r, t) {
              k(Gb(r, t), b.F);
            });
            break;
          case "config":
            var h = om(this, g);
            e.yc = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  k(Gb(t, u), r.yc);
                };
              })(e)
            );
            var m = !!e.yc[Q.g.Wb];
            delete e.yc[Q.g.Wb];
            var n = g.ia === g.id;
            m || (n ? (h.J = {}) : (h.P[g.id] = {}));
            (h.F && m) || um(this, Q.g.ba, e.yc, f);
            h.F = !0;
            n ? k(e.yc, h.J) : (k(e.yc, h.P[g.id]), M(70));
            d = !0;
            break;
          case "event":
            e.bh = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  k(Gb(t, u), r.bh);
                };
              })(e)
            );
            um(this, f.args[1], e.bh, f);
            break;
          case "get":
            var p = {},
              q = ((p[Q.g.ob] = f.args[0]), (p[Q.g.Db] = f.args[1]), p);
            um(this, Q.g.Oa, q, f);
        }
        this.m.shift();
        vm(this, f);
      }
    }
    this.m.push.apply(this.m, c);
    d && this.flush();
  };
  var vm = function (a, b) {
      if ("require" !== b.type)
        if (b.m)
          for (var c = om(a, b.m).D[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.D)
            if (a.D.hasOwnProperty(e)) {
              var f = a.D[e];
              if (f && f.D)
                for (var g = f.D[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    km = new tm();
  var wm = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    xm = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var ym = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function zm() {
    return jc ? !!qc && !!qc.platform : !1;
  }
  function Am() {
    return tc("iPhone") && !tc("iPod") && !tc("iPad");
  }
  function Bm() {
    Am() || tc("iPad") || tc("iPod");
  }
  vc();
  uc() || tc("Trident") || tc("MSIE");
  tc("Edge");
  !tc("Gecko") ||
    (-1 != pc().toLowerCase().indexOf("webkit") && !tc("Edge")) ||
    tc("Trident") ||
    tc("MSIE") ||
    tc("Edge");
  -1 != pc().toLowerCase().indexOf("webkit") && !tc("Edge") && tc("Mobile");
  zm() || tc("Macintosh");
  zm() || tc("Windows");
  (zm() ? "Linux" === qc.platform : tc("Linux")) || zm() || tc("CrOS");
  zm() || tc("Android");
  Am();
  tc("iPad");
  tc("iPod");
  Bm();
  pc().toLowerCase().indexOf("kaios");
  var Cm = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Dm = /#|$/,
    Em = function (a, b) {
      var c = a.search(Dm),
        d = Cm(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    Fm = /[?&]($|#)/,
    Gm = function (a, b, c) {
      for (
        var d, e = a.search(Dm), f = 0, g, h = [];
        0 <= (g = Cm(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(Fm, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Hm = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              Xk(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Im = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Jm(a) {
    if (!a || !G.head) return null;
    var b = Km("META");
    G.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Lm = function (a) {
      if (D.top == D) return 0;
      if (void 0 === a ? 0 : a) {
        var b = D.location.ancestorOrigins;
        if (b) return b[b.length - 1] == D.location.origin ? 1 : 2;
      }
      return Hm(D.top) ? 1 : 2;
    },
    Km = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Mm(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Km("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = ic(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      ym(e, "load", f);
      ym(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Om = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Im(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Nm(c, b);
    },
    Nm = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Mm(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Pm = function () {
    this.P = this.P;
    this.F = this.F;
  };
  Pm.prototype.P = !1;
  Pm.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? void 0 !== b
        ? a.call(b)
        : a()
      : (this.F || (this.F = []), this.F.push(void 0 !== b ? Fa(a, b) : a));
  };
  var Qm = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    an = function (a, b) {
      b = void 0 === b ? {} : b;
      Pm.call(this);
      this.D = a;
      this.m = null;
      this.Da = {};
      this.sb = 0;
      var c;
      this.Ya = null != (c = b.wm) ? c : 500;
      var d;
      this.Z = null != (d = b.ln) ? d : !1;
      this.J = null;
    };
  xa(an, Pm);
  var cn = function (a) {
    return "function" === typeof a.D.__tcfapi || null != bn(a);
  };
  an.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.Z },
      d = xm(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.Ya &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.Ya));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Qm(c)),
          (c.internalBlockOnErrors = b.Z),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      dn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  an.prototype.removeEventListener = function (a) {
    a && a.listenerId && dn(this, "removeEventListener", null, a.listenerId);
  };
  var fn = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var m;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = en(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && en(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === h
            ? a.purpose && a.vendor
              ? en(a.purpose.legitimateInterests, b) &&
                en(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    en = function (a, b) {
      return !(!a || !a[b]);
    },
    dn = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.D.__tcfapi) {
        var e = a.D.__tcfapi;
        e(b, 2, c, d);
      } else if (bn(a)) {
        gn(a);
        var f = ++a.sb;
        a.Da[f] = c;
        if (a.m) {
          var g = {};
          a.m.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    bn = function (a) {
      if (a.m) return a.m;
      var b;
      a: {
        for (var c = a.D, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.m = b;
      return a.m;
    },
    gn = function (a) {
      a.J ||
        ((a.J = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.Da[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        ym(a.D, "message", a.J));
    },
    hn = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Qm(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Om({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var jn = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function kn() {
    var a = vi.tcf || {};
    return (vi.tcf = a);
  }
  var ln = function () {
      return new an(D, { wm: -1 });
    },
    rn = function () {
      var a = kn(),
        b = ln();
      cn(b) && !mn() && !nn() && M(124);
      if (!a.active && cn(b)) {
        mn() &&
          ((a.active = !0),
          (a.fc = {}),
          (a.cmpId = 0),
          (a.tcfPolicyVersion = 0),
          (Uk().active = !0),
          (a.tcString = "tcunavailable"));
        yl();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState)
              on(a), zl([Q.g.M, Q.g.xa, Q.g.O]), (Uk().active = !0);
            else if (
              ((a.gdprApplies = c.gdprApplies),
              (a.cmpId = c.cmpId),
              (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
              nn() && (a.active = !0),
              !pn(c) || mn() || nn())
            ) {
              a.tcfPolicyVersion = c.tcfPolicyVersion;
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in jn) jn.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (pn(c)) {
                var g = {},
                  h;
                for (h in jn)
                  if (jn.hasOwnProperty(h))
                    if ("1" === h) {
                      var m,
                        n = c,
                        p = { fl: !0 };
                      p = void 0 === p ? {} : p;
                      m = hn(n)
                        ? !1 === n.gdprApplies
                          ? !0
                          : "tcunavailable" === n.tcString
                          ? !p.vj
                          : (p.vj || void 0 !== n.gdprApplies || p.fl) &&
                            (p.vj ||
                              ("string" === typeof n.tcString &&
                                n.tcString.length))
                          ? fn(n, "1", 0)
                          : !0
                        : !1;
                      g["1"] = m;
                    } else g[h] = fn(c, h, jn[h]);
                d = g;
              }
              if (d) {
                a.tcString = c.tcString || "tcempty";
                a.fc = d;
                var q = {},
                  r = ((q[Q.g.M] = a.fc["1"] ? "granted" : "denied"), q);
                !0 !== a.gdprApplies
                  ? (zl([Q.g.M, Q.g.xa, Q.g.O]), (Uk().active = !0))
                  : ((r[Q.g.xa] =
                      a.fc["3"] && a.fc["4"] ? "granted" : "denied"),
                    "number" === typeof a.tcfPolicyVersion &&
                    4 <= a.tcfPolicyVersion
                      ? (r[Q.g.O] =
                          a.fc["1"] && a.fc["7"] ? "granted" : "denied")
                      : zl([Q.g.O]),
                    tl(
                      r,
                      { eventId: 0 },
                      {
                        gdprApplies: a ? a.gdprApplies : void 0,
                        tcString: qn() || "",
                      }
                    ));
              }
            } else zl([Q.g.M, Q.g.xa, Q.g.O]);
          });
        } catch (c) {
          on(a), zl([Q.g.M, Q.g.xa, Q.g.O]), (Uk().active = !0);
        }
      }
    };
  function on(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function pn(a) {
    return (
      "tcloaded" === a.eventStatus ||
      "useractioncomplete" === a.eventStatus ||
      "cmpuishown" === a.eventStatus
    );
  }
  var mn = function () {
    return !0 === D.gtag_enable_tcf_support;
  };
  function nn() {
    return !0 === kn().enableAdvertiserConsentMode;
  }
  var qn = function () {
      var a = kn();
      if (a.active) return a.tcString;
    },
    sn = function () {
      var a = kn();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? "1" : "0";
    },
    tn = function (a) {
      if (!jn.hasOwnProperty(String(a))) return !0;
      var b = kn();
      return b.active && b.fc ? !!b.fc[String(a)] : !0;
    };
  var un = [Q.g.M, Q.g.T, Q.g.O, Q.g.xa],
    vn = {},
    wn = ((vn[Q.g.M] = 1), (vn[Q.g.T] = 2), vn);
  function xn(a) {
    if (void 0 === a) return 0;
    switch (V(a, Q.g.la)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var yn = function (a) {
      var b = xn(a);
      if (3 === b) return !1;
      switch (el(Q.g.xa)) {
        case 1:
        case 3:
          return !0;
        case 2:
          return !1;
        case 4:
          return 2 === b;
        case 0:
          return !0;
        default:
          return !1;
      }
    },
    zn = function () {
      return hl() || !dl(Q.g.M) || !dl(Q.g.T);
    },
    An = function () {
      var a = {},
        b;
      for (b in wn) wn.hasOwnProperty(b) && (a[wn[b]] = el(b));
      return "G1" + Se(a[1] || 0) + Se(a[2] || 0);
    },
    Bn = {},
    Cn =
      ((Bn[Q.g.M] = 0), (Bn[Q.g.T] = 1), (Bn[Q.g.O] = 2), (Bn[Q.g.xa] = 3), Bn);
  function Dn(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var En = function (a) {
      for (var b = "1", c = 0; c < un.length; c++) {
        var d = b,
          e,
          f = un[c],
          g = bl.delegatedConsentTypes[f];
        e = void 0 === g ? 0 : Cn.hasOwnProperty(g) ? 12 | Cn[g] : 8;
        var h = Uk();
        h.accessedAny = !0;
        var m = h.entries[f] || {};
        e = (e << 2) | Dn(m.implicit);
        b =
          d +
          ("" +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              e
            ] +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (Dn(m.declare) << 4) | (Dn(m.default) << 2) | Dn(m.update)
            ]);
      }
      var n = b,
        p;
      p = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((hl() ? 1 : 0) << 2) | xn(a)
      ];
      return n + p;
    },
    Fn = function () {
      if (!dl(Q.g.O)) return "-";
      for (
        var a = Object.keys(ti), b = fl(a), c = "", d = la(a), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value;
        b[f] && (c += ti[f]);
      }
      return c || "-";
    },
    Gn = function () {
      return pj() || ((mn() || nn()) && "1" === sn()) ? "1" : "0";
    },
    Hn = function () {
      return (pj() ? !0 : !(!mn() && !nn()) && "1" === sn()) || !dl(Q.g.O);
    },
    In = function () {
      var a = "0",
        b = "0",
        c;
      var d = kn();
      c = d.active ? d.cmpId : void 0;
      "number" === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var g = kn();
      f = g.active ? g.tcfPolicyVersion : void 0;
      "number" === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var h = 0;
      pj() && (h |= 1);
      "1" === sn() && (h |= 2);
      mn() && (h |= 4);
      var m;
      var n = kn();
      m =
        void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      "1" === m && (h |= 8);
      Uk().waitPeriodTimedOut && (h |= 16);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]
      );
    };
  var Jn = function () {
    var a = !1;
    return a;
  };
  var Kn = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    Ln = function (a, b) {
      var c = Xf.ctid.split("-")[0].toUpperCase(),
        d = {};
      d.ctid = Xf.ctid;
      d.dm = ui.je;
      d.im = ui.Ng;
      d.Hl = Qj.fe ? 2 : 1;
      d.pe = Xf.canonicalContainerId;
      d.pe !== a && (d.Qf = a);
      Ai ? ((d.Mf = Kn[c]), d.Mf || (d.Mf = 0)) : (d.Mf = Ei ? 13 : 10);
      Ni.J
        ? ((d.Kf = 0), (d.Kk = 2))
        : Ci
        ? (d.Kf = 1)
        : Jn()
        ? (d.Kf = 2)
        : (d.Kf = 3);
      var e = {};
      e[6] = Rj;
      d.Nk = e;
      var f;
      var g = d.Mf,
        h = d.Kf;
      void 0 === g
        ? (f = "")
        : (h || (h = 0), (f = "" + Ng(1, 1) + Re((g << 2) | h)));
      var m = d.Kk,
        n = 4 + f + (m ? "" + Ng(2, 1) + Re(m) : ""),
        p,
        q = d.im;
      p = q && Mg.test(q) ? "" + Ng(3, 2) + q : "";
      var r,
        t = d.dm;
      r = t ? "" + Ng(4, 1) + Re(t) : "";
      var u;
      var v = d.ctid;
      if (v && b) {
        var w = v.split("-"),
          x = w[0].toUpperCase();
        if ("GTM" !== x && "OPT" !== x) u = "";
        else {
          var y = w[1];
          u = "" + Ng(5, 3) + Re(1 + y.length) + (d.Hl || 0) + y;
        }
      } else u = "";
      var B = d.un,
        A = d.pe,
        E = d.Qf,
        F = d.vn,
        C =
          n +
          p +
          r +
          u +
          (B ? "" + Ng(6, 1) + Re(B) : "") +
          (A ? "" + Ng(7, 3) + Re(A.length) + A : "") +
          (E ? "" + Ng(8, 3) + Re(E.length) + E : "") +
          (F ? "" + Ng(9, 3) + Re(F.length) + F : ""),
        H;
      var N = d.Nk;
      N = void 0 === N ? {} : N;
      for (
        var O = [], U = la(Object.keys(N)), X = U.next();
        !X.done;
        X = U.next()
      ) {
        var P = X.value;
        O[Number(P)] = N[P];
      }
      if (O.length) {
        var S = Ng(10, 3),
          ma;
        if (0 === O.length) ma = Re(0);
        else {
          for (var ka = [], da = 0, Ba = !1, Da = 0; Da < O.length; Da++) {
            Ba = !0;
            var ya = Da % 6;
            O[Da] && (da |= 1 << ya);
            5 === ya && (ka.push(Re(da)), (da = 0), (Ba = !1));
          }
          Ba && ka.push(Re(da));
          ma = ka.join("");
        }
        var qa = ma;
        H = "" + S + Re(qa.length) + qa;
      } else H = "";
      return C + H;
    };
  function Mn(a) {
    return "null" !== a.origin;
  }
  var Nn = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var Qn = function (a, b, c, d) {
      return On(d) ? Nn(a, String(b || Pn()), c) : [];
    },
    Tn = function (a, b, c, d, e) {
      if (On(e)) {
        var f = Rn(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Sn(
            f,
            function (g) {
              return g.Sk;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Sn(
            f,
            function (g) {
              return g.Ul;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Un(a, b, c, d) {
    var e = Pn(),
      f = window;
    Mn(f) && (f.document.cookie = a);
    var g = Pn();
    return e != g || (void 0 != c && 0 <= Qn(b, g, !1, d).indexOf(c));
  }
  var Yn = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete h[x], w;
        h[x] = y;
        return w + "; " + x + "=" + y;
      }
      function f(w, x) {
        if (null == x) return delete h[x], w;
        h[x] = !0;
        return w + "; " + x;
      }
      if (!On(c.yb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Vn(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date
        ? (m = c.expires.toUTCString())
        : null != c.expires && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.Ll);
      g = e(g, "samesite", c.jm);
      c.km && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Wn(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!Xn(u, c.path) && Un(v, a, b, c.yb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return Xn(n, c.path) ? 1 : Un(g, a, b, c.yb) ? 0 : 1;
    },
    Zn = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Yn(a, b, c);
    };
  function Sn(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        m = b(h);
      m === c
        ? d.push(h)
        : void 0 === f || m < f
        ? ((e = [h]), (f = m))
        : m === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function Rn(a, b, c) {
    for (var d = [], e = Qn(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), Sk: 1 * m[0] || 1, Ul: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Vn = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    $n = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    ao = /(^|\.)doubleclick\.net$/i,
    Xn = function (a, b) {
      return (
        ao.test(window.document.location.hostname) || ("/" === b && $n.test(a))
      );
    },
    Pn = function () {
      return Mn(window) ? window.document.cookie : "";
    },
    Wn = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      ao.test(e) || $n.test(e) || a.push("none");
      return a;
    },
    On = function (a) {
      return a && Zk().m()
        ? (l(a) ? [a] : a).every(function (b) {
            return gl(b) && dl(b);
          })
        : !0;
    },
    bo = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    co = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    },
    eo = function (a, b) {
      var c = "" + bo(a),
        d = co(b);
      1 < d && (c += "-" + d);
      return c;
    };
  var fo = function (a) {
      var b = Math.round(2147483647 * Math.random()),
        c;
      if (a) {
        var d = 1,
          e,
          f,
          g;
        if (a)
          for (d = 0, f = a.length - 1; 0 <= f; f--)
            (g = a.charCodeAt(f)),
              (d = ((d << 6) & 268435455) + g + (g << 14)),
              (e = d & 266338304),
              (d = 0 !== e ? d ^ (e >> 21) : d);
        c = String(b ^ (d & 2147483647));
      } else c = String(b);
      return c;
    },
    go = function (a) {
      return [fo(a), Math.round(zb() / 1e3)].join(".");
    },
    ho = function (a, b, c, d, e) {
      var f = bo(b);
      return Tn(a, f, co(c), d, e);
    },
    io = function (a, b, c, d) {
      return [b, eo(c, d), a].join(".");
    };
  function jo(a, b, c, d) {
    var e,
      f = Number(null != a.xb ? a.xb : void 0);
    0 !== f && (e = new Date((b || zb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      yb: d,
    };
  }
  var ko;
  var oo = function () {
      var a = lo,
        b = mo,
        c = no(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Pc(G, "mousedown", d);
        Pc(G, "keyup", d);
        Pc(G, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    po = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      no().decorators.push(f);
    },
    qo = function (a, b, c) {
      for (var d = no().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== G.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Cb(e, g.callback());
        }
      }
      return e;
    };
  function no() {
    var a = Gc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var ro = /(.*?)\*(.*?)\*(.*)/,
    so = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    to = /^(?:www\.|m\.|amp\.)+/,
    uo = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function vo(a) {
    var b = uo.exec(a);
    if (b) return { xh: b[1], query: b[2], fragment: b[3] };
  }
  function wo(a, b) {
    var c = [
        Dc.userAgent,
        new Date().getTimezoneOffset(),
        Dc.userLanguage || Dc.language,
        Math.floor(zb() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = ko)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    ko = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ ko[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function xo() {
    return function (a) {
      var b = Cj(D.location.href),
        c = b.search.replace("?", ""),
        d = vj(c, "_gl", !1, !0) || "";
      a.query = yo(d) || {};
      var e = yj(b, "fragment"),
        f;
      var g = -1;
      if (Eb(e, "_gl=")) g = 4;
      else {
        var h = e.indexOf("&_gl=");
        0 < h && (g = h + 3 + 2);
      }
      if (0 > g) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = 0 > m ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = yo(f || "") || {};
    };
  }
  var zo = function (a) {
      var b = xo(),
        c = no();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Cb(d, e.query), a && Cb(d, e.fragment));
      return d;
    },
    yo = function (a) {
      try {
        var b = Ao(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = gb(d[e + 1]);
            c[f] = g;
          }
          ib("TAGGING", 6);
          return c;
        }
      } catch (h) {
        ib("TAGGING", 8);
      }
    };
  function Ao(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = ro.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === wo(h, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return h;
        ib("TAGGING", 7);
      }
    }
  }
  function Bo(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
        t = q;
      if (r) {
        var u = r[2],
          v = r[4];
        t = r[1];
        v && (t = t + u + v);
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && "&" !== w && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var g = vo(c);
    if (!g) return "";
    var h = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (0 !== m.substring(1).length && e) || (m = "#" + f(m.substring(1)))
      : (h = "?" + f(h.substring(1)));
    return "" + g.xh + h + m;
  }
  function Co(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var u,
          v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            void 0 !== x &&
              x === x &&
              null !== x &&
              "[object Object]" !== x.toString() &&
              (v.push(w), v.push(fb(String(x))));
          }
        var y = v.join("*");
        u = ["1", wo(y), y].join("*");
        d
          ? (Mb(13) || Mb(11) || !p) && Do("_gl", u, a, p, q)
          : Eo("_gl", u, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = qo(b, 1, d),
      f = qo(b, 2, d),
      g = qo(b, 4, d),
      h = qo(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Mb(11) && c(g, !0, !0);
    for (var m in h) h.hasOwnProperty(m) && Fo(m, h[m], a);
  }
  function Fo(a, b, c) {
    "a" === c.tagName.toLowerCase()
      ? Eo(a, b, c)
      : "form" === c.tagName.toLowerCase() && Do(a, b, c);
  }
  function Eo(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !Mb(16) || d)) {
        var h = D.location.href,
          m = vo(c.href),
          n = vo(h);
        g = !(m && n && m.xh === n.xh && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Bo(a, b, c.href, d, e);
      ec.test(p) && (c.href = p);
    }
  }
  function Do(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var g = Bo(a, b, c.action, d, e);
          ec.test(g) && (c.action = g);
        }
      } else {
        for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
          var p = h[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = G.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function lo(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Co(e, e.hostname);
      }
    } catch (g) {}
  }
  function mo(a) {
    try {
      if (a.action) {
        var b = yj(Cj(a.action), "host");
        Co(a, b);
      }
    } catch (c) {}
  }
  var Go = function (a, b, c, d) {
      oo();
      var e = "fragment" === c ? 2 : 1;
      d = !!d;
      po(a, b, e, d, !1);
      2 === e && ib("TAGGING", 23);
      d && ib("TAGGING", 24);
    },
    Ho = function (a, b) {
      oo();
      po(a, [xj(D.location, "host", !0)], b, !0, !0);
    },
    Io = function () {
      var a = G.location.hostname,
        b = so.exec(G.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(to, ""),
        m = e.replace(to, ""),
        n;
      if (!(n = h === m)) {
        var p = "." + m;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    Jo = function (a, b) {
      return !1 === a ? !1 : a || b || Io();
    };
  var Ko = ["1"],
    Lo = {},
    Mo = {},
    Ro = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = No(a.prefix);
      if (!Lo[c])
        if (Oo(c, a.path, a.domain)) {
          var d = Mo[No(a.prefix)];
          Po(a, d ? d.id : void 0, d ? d.sh : void 0);
        } else {
          var e = Ej("auiddc");
          if (e) ib("TAGGING", 17), (Lo[c] = e);
          else if (b) {
            var f = No(a.prefix),
              g = go();
            if (0 === Qo(f, g, a)) {
              var h = Gc("google_tag_data", {});
              h._gcl_au || (h._gcl_au = g);
            }
            Oo(c, a.path, a.domain);
          }
        }
    };
  function Po(a, b, c) {
    var d = No(a.prefix),
      e = Lo[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + "." + b + "." + (c ? c : Math.floor(zb() / 1e3)));
          Qo(d, h, a, 1e3 * g);
        }
      }
    }
  }
  function Qo(a, b, c, d) {
    var e = io(b, "1", c.domain, c.path),
      f = jo(c, d);
    f.yb = So();
    return Zn(a, e, f);
  }
  function Oo(a, b, c) {
    var d = ho(a, b, c, Ko, So());
    if (!d) return !1;
    To(a, d);
    return !0;
  }
  function To(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((Lo[a] = c.slice(0, 2).join(".")),
        (Mo[a] = { id: c.slice(2, 4).join("."), sh: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (Mo[a] = { id: c.slice(0, 2).join("."), sh: Number(c[2]) || 0 })
      : (Lo[a] = b);
  }
  function No(a) {
    return (a || "_gcl") + "_au";
  }
  function Uo(a) {
    function b() {
      dl(c) && a();
    }
    var c = So();
    kl(function () {
      b();
      dl(c) || ll(b, c);
    }, c);
  }
  function Vo(a) {
    var b = zo(!0),
      c = No(a.prefix);
    Uo(function () {
      var d = b[c];
      if (d) {
        To(c, d);
        var e = 1e3 * Number(Lo[c].split(".")[1]);
        if (e) {
          ib("TAGGING", 16);
          var f = jo(a, e);
          f.yb = So();
          var g = io(d, "1", a.domain, a.path);
          Zn(c, g, f);
        }
      }
    });
  }
  function Wo(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        h = ho(a, e.path, e.domain, Ko, So());
      h && (g[a] = h);
      return g;
    };
    Uo(function () {
      Go(f, b, c, d);
    });
  }
  function So() {
    return Mb(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var Xo = function (a) {
    for (
      var b = [],
        c = G.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Kh: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function Yo(a, b) {
    var c = Xo(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Kh] || (d[c[e].Kh] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), aa: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Kh].push(g);
      }
    }
    return d;
  }
  var Zo = {},
    $o =
      ((Zo.k = { Ja: /^[\w-]+$/ }),
      (Zo.b = { Ja: /^[\w-]+$/, Fh: !0 }),
      (Zo.i = { Ja: /^[1-9]\d*$/ }),
      Zo);
  var ap = {},
    bp =
      ((ap[5] = {
        version: "2",
        Bm: ["2"],
        Gj: "ad_storage",
        oj: ["k", "i", "b"],
      }),
      ap);
  function cp(a, b) {
    var c = b.Ja;
    return "function" === typeof c ? c(a) : c.test(a);
  }
  function dp(a) {
    for (
      var b = la(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { se: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.se = $o[e];
      d.se
        ? d.se.Fh
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (h) {
                      return cp(h, g.se);
                    };
                  })(d)
                )
              : void 0)
          : ("string" === typeof f && cp(f, d.se)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
    return a;
  }
  function ep(a) {
    var b = {},
      c = bp[5];
    if (c) {
      for (
        var d = c.oj, e = la(a.split("$")), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value,
          h = g[0];
        if (-1 !== d.indexOf(h))
          try {
            var m = decodeURIComponent(g.substring(1)),
              n = $o[h];
            n && (n.Fh ? ((b[h] = b[h] || []), b[h].push(m)) : (b[h] = m));
          } catch (p) {}
      }
      return dp(b);
    }
  }
  function fp(a) {
    var b = bp[5];
    if (b) {
      for (var c = [], d = la(b.oj), e = d.next(); !e.done; e = d.next()) {
        var f = e.value,
          g = $o[f];
        if (g) {
          var h = a[f];
          if (void 0 !== h)
            if (g.Fh && Array.isArray(h))
              for (var m = la(h), n = m.next(); !n.done; n = m.next())
                c.push(encodeURIComponent("" + f + n.value));
            else c.push(encodeURIComponent("" + f + h));
        }
      }
      return c.join("$");
    }
  }
  function gp(a) {
    var b = bp[5];
    if (b) {
      for (
        var c = [], d = Qn(a, void 0, void 0, b.Gj), e = la(d), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value.split("."),
          h = g.shift();
        if (-1 !== b.Bm.indexOf(h)) {
          g.shift();
          var m = g.join(".");
          c.push(ep(m));
        }
      }
      return c;
    }
  }
  function hp(a, b, c, d) {
    c = c || {};
    var e = fp(b);
    if (e) {
      var f = bp[5],
        g = [f.version, eo(c.domain, c.path), e].join(".");
      Zn(a, g, jo(c, d, void 0, f.Gj));
    }
  }
  var ip = /^\w+$/,
    jp = /^[\w-]+$/,
    kp = {
      ag: "_ag",
      aw: "_aw",
      dc: "_dc",
      gb: "_gb",
      gf: "_gf",
      gp: "_gp",
      ha: "_ha",
    };
  function lp() {
    return Mb(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var mp = function (a) {
      return !Zk().m() || dl(a);
    },
    np = function (a, b) {
      function c() {
        var d = mp(b);
        d && a();
        return d;
      }
      kl(function () {
        c() || ll(c, b);
      }, b);
    },
    pp = function (a) {
      return op(a).map(function (b) {
        return b.aa;
      });
    },
    rp = function (a) {
      return qp(a)
        .filter(function (b) {
          return b.aa;
        })
        .map(function (b) {
          return b.aa;
        });
    },
    qp = function (a) {
      var b = sp(a.prefix),
        c = tp("gb", b),
        d = tp("ag", b);
      if (!d || !c) return [];
      var e = function (h) {
          return function (m) {
            m.type = h;
            return m;
          };
        },
        f = op(c).map(e("gb")),
        g = up(d).map(e("ag"));
      return f.concat(g).sort(function (h, m) {
        return m.timestamp - h.timestamp;
      });
    };
  function vp(a, b, c, d, e) {
    var f = pb(a, function (g) {
      return g.aa === c;
    });
    f
      ? ((f.timestamp = Math.max(f.timestamp, d)),
        (f.labels = wp(f.labels || [], e || [])))
      : a.push({ version: b, aa: c, timestamp: d, labels: e });
  }
  var op = function (a) {
      for (
        var b = [], c = Qn(a, G.cookie, void 0, lp()), d = la(c), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = xp(e.value);
        if (null != f) {
          var g = f;
          vp(b, g.version, g.aa, g.timestamp, g.labels);
        }
      }
      b.sort(function (h, m) {
        return m.timestamp - h.timestamp;
      });
      return yp(b);
    },
    up = function (a) {
      if (!Mb(20)) return [];
      for (
        var b = gp(a) || [], c = [], d = la(b), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value,
          g = f,
          h = zp(f);
        h && vp(c, "2", g.k, h, g.b || []);
      }
      return c.sort(function (m, n) {
        return n.timestamp - m.timestamp;
      });
    };
  function wp(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function sp(a) {
    return a && "string" == typeof a && a.match(ip) ? a : "_gcl";
  }
  function Ap(a, b) {
    var c = Mb(20),
      d = Cj(a),
      e = yj(d, "query", !1, void 0, "gclid"),
      f = yj(d, "query", !1, void 0, "gclsrc"),
      g = yj(d, "query", !1, void 0, "wbraid"),
      h;
    c && (h = yj(d, "query", !1, void 0, "gbraid"));
    var m = yj(d, "query", !1, void 0, "dclid");
    if (b && (!e || !f || !g || (c && !h))) {
      var n = d.hash.replace("#", "");
      e = e || vj(n, "gclid", !1);
      f = f || vj(n, "gclsrc", !1);
      g = g || vj(n, "wbraid", !1);
      c && (h = h || vj(n, "gbraid", !1));
    }
    return Bp(e, f, m, g, h);
  }
  var Cp = function () {
      return Ap(D.location.href, !0);
    },
    Bp = function (a, b, c, d, e) {
      var f = {},
        g = function (h, m) {
          f[m] || (f[m] = []);
          f[m].push(h);
        };
      f.gclid = a;
      f.gclsrc = b;
      f.dclid = c;
      if (void 0 !== a && a.match(jp))
        switch (b) {
          case void 0:
            g(a, "aw");
            break;
          case "aw.ds":
            g(a, "aw");
            g(a, "dc");
            break;
          case "ds":
            g(a, "dc");
            break;
          case "3p.ds":
            g(a, "dc");
            break;
          case "gf":
            g(a, "gf");
            break;
          case "ha":
            g(a, "ha");
        }
      c && g(c, "dc");
      void 0 !== d && jp.test(d) && ((f.wbraid = d), g(d, "gb"));
      Mb(20) && void 0 !== e && jp.test(e) && ((f.gbraid = e), g(e, "ag"));
      return f;
    },
    Ep = function (a) {
      var b = Cp();
      if (Mb(18)) {
        for (
          var c = !0, d = la(Object.keys(b)), e = d.next();
          !e.done;
          e = d.next()
        )
          if (void 0 !== b[e.value]) {
            c = !1;
            break;
          }
        c && (b = Ap(D.document.referrer, !1));
      }
      Dp(b, !1, a);
    };
  function Dp(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = sp(c.prefix);
    d = d || zb();
    var g = Math.round(d / 1e3),
      h = lp(),
      m = !1,
      n = !1,
      p = function () {
        if (mp(h)) {
          var q = jo(c, d, !0);
          q.yb = h;
          for (
            var r = function (C, H) {
                var N = tp(C, f);
                N && (Zn(N, H, q), "gb" !== C && (m = !0));
              },
              t = function (C) {
                var H = ["GCL", g, C];
                0 < e.length && H.push(e.join("."));
                return H.join(".");
              },
              u = la(["aw", "dc", "gf", "ha", "gp"]),
              v = u.next();
            !v.done;
            v = u.next()
          ) {
            var w = v.value;
            a[w] && r(w, t(a[w][0]));
          }
          if (!m && a.gb) {
            var x = a.gb[0],
              y = tp("gb", f);
            (!b &&
              op(y).some(function (C) {
                return C.aa === x && C.labels && 0 < C.labels.length;
              })) ||
              r("gb", t(x));
          }
        }
        if (!n && Mb(20) && a.gbraid && mp("ad_storage") && ((n = !0), !m)) {
          var B = a.gbraid,
            A = tp("ag", f);
          if (
            b ||
            !up(A).some(function (C) {
              return C.aa === B && C.labels && 0 < C.labels.length;
            })
          ) {
            var E = {},
              F = ((E.k = B), (E.i = g), (E.b = e), E);
            hp(A, F, c, d);
          }
        }
      };
    kl(function () {
      p();
      mp(h) || ll(p, h);
    }, h);
  }
  var Gp = function (a, b) {
      var c = zo(!0);
      np(function () {
        for (var d = sp(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== kp[f]) {
            var g = tp(f, d),
              h = c[g];
            if (h) {
              var m = Math.min(Fp(h), zb()),
                n;
              b: {
                for (
                  var p = m, q = Qn(g, G.cookie, void 0, lp()), r = 0;
                  r < q.length;
                  ++r
                )
                  if (Fp(q[r]) > p) {
                    n = !0;
                    break b;
                  }
                n = !1;
              }
              if (!n) {
                var t = jo(b, m, !0);
                t.yb = lp();
                Zn(g, h, t);
              }
            }
          }
        }
        Dp(Bp(c.gclid, c.gclsrc), !1, b);
      }, lp());
    },
    Hp = function (a) {
      if (Mb(20)) {
        var b = zo(!0),
          c = sp(a.prefix),
          d = tp("ag", c);
        np(
          function () {
            if (d) {
              var e = b[d];
              if (e) {
                var f = ep(e);
                if (f) {
                  var g = zp(f);
                  g || (g = zb());
                  var h;
                  a: {
                    var m = g;
                    if (Mb(20))
                      for (var n = gp(d), p = 0; p < n.length; ++p)
                        if (zp(n[p]) > m) {
                          h = !0;
                          break a;
                        }
                    h = !1;
                  }
                  h || ((f.i = Math.round(g / 1e3)), hp(d, f, a, g));
                }
              }
            }
          },
          ["ad_storage"]
        );
      }
    },
    tp = function (a, b) {
      var c = kp[a];
      if (void 0 !== c) return b + c;
    },
    Fp = function (a) {
      return 0 !== Ip(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function zp(a) {
    return a ? 1e3 * (Number(a.i) || 0) : 0;
  }
  function xp(a) {
    var b = Ip(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          aa: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Ip(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !jp.test(a[2])
      ? []
      : a;
  }
  var Jp = function (a, b, c, d, e) {
      if (Array.isArray(b) && Mn(D)) {
        var f = sp(e),
          g = function () {
            for (var h = {}, m = 0; m < a.length; ++m) {
              var n = tp(a[m], f);
              if (n) {
                var p = Qn(n, G.cookie, void 0, lp());
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        np(function () {
          Go(g, b, c, d);
        }, lp());
      }
    },
    Kp = function (a, b, c, d) {
      if (Array.isArray(a) && Mn(D) && Mb(20)) {
        var e = sp(d),
          f = function () {
            var g = {},
              h = tp("ag", e);
            if (h) {
              var m = gp(h);
              if (m.length) {
                var n = m.sort(function (p, q) {
                  return zp(q) - zp(p);
                })[0];
                g[h] = fp(n);
              }
              return g;
            }
          };
        np(
          function () {
            Go(f, a, b, c);
          },
          ["ad_storage"]
        );
      }
    },
    yp = function (a) {
      return a.filter(function (b) {
        return jp.test(b.aa);
      });
    },
    Lp = function (a, b) {
      if (Mn(D)) {
        for (var c = sp(b.prefix), d = {}, e = 0; e < a.length; e++)
          kp[a[e]] && (d[a[e]] = kp[a[e]]);
        np(function () {
          z(d, function (f, g) {
            var h = Qn(c + g, G.cookie, void 0, lp());
            h.sort(function (t, u) {
              return Fp(u) - Fp(t);
            });
            if (h.length) {
              var m = h[0],
                n = Fp(m),
                p = 0 !== Ip(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Ip(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Dp(q, !0, b, n, p);
            }
          });
        }, lp());
      }
    },
    Mp = function (a) {
      Mb(20) &&
        np(
          function () {
            var b = sp(a.prefix),
              c = tp("ag", b);
            if (c) {
              var d = gp(c);
              if (d.length) {
                var e = d.sort(function (m, n) {
                    return zp(n) - zp(m);
                  })[0],
                  f = zp(e),
                  g = e.b,
                  h = {};
                h.gbraid = e.k;
                Dp(h, !0, a, f, g);
              }
            }
          },
          ["ad_storage"]
        );
    };
  function Np(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Op = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (hl()) {
        var c = Cp();
        if (Np(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.wbraid);
          Mb(20) && b(d, "gbraid", c.gbraid);
          Ho(function () {
            return d;
          }, 3);
          Ho(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Pp = function (a) {
      if (!Mb(11)) return null;
      var b = zo(!0).gad_source;
      if (null != b) return (D.location.hash = ""), b;
      if (Mb(12)) {
        var c = Cj(D.location.href);
        b = yj(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Cp();
        if (Np(d, a)) return "0";
      }
      return null;
    },
    Qp = function (a) {
      var b = Pp(a);
      null != b &&
        Ho(function () {
          var c = {};
          return (c.gad_source = b), c;
        }, 4);
    };
  function Rp(a, b, c) {
    if (b.length) {
      for (var d = 0; d < b.length; d++)
        -1 === (b[d].labels || []).indexOf(c) ? a.push(0) : a.push(1);
      if (1 !== a[0]) return b[0];
    }
  }
  var Sp = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!mp(lp())) return e;
      var f = op(a),
        g = Rp(e, f, b);
      if (g && !d) {
        var h = g.timestamp,
          m = [g.version, Math.round(h / 1e3), g.aa]
            .concat(g.labels || [], [b])
            .join("."),
          n = jo(c, h, !0);
        n.yb = lp();
        Zn(a, m, n);
      }
      return e;
    },
    Tp = function (a, b) {
      var c = [];
      b = b || {};
      var d = qp(b),
        e = Rp(c, d, a);
      if (e) {
        var f = sp(b.prefix),
          g = tp(e.type, f);
        if (!g) return c;
        var h = e.version,
          m = e.aa,
          n = e.labels,
          p = e.timestamp,
          q = Math.round(p / 1e3);
        if ("ag" === e.type) {
          var r = {},
            t = ((r.k = m), (r.i = q), (r.b = (n || []).concat([a])), r);
          hp(g, t, b, p);
        } else if ("gb" === e.type) {
          var u = [h, q, m].concat(n || [], [a]).join("."),
            v = jo(b, p, !0);
          v.yb = lp();
          Zn(g, u, v);
        }
      }
      return c;
    };
  function Up(a, b) {
    var c = sp(b),
      d = tp(a, c);
    if (!d) return 0;
    var e;
    e = "ag" === a ? up(d) : op(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Vp(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Wp = function (a, b) {
    b = void 0 === b ? !1 : b;
    var c = Math.max(Up("aw", a), Vp(mp(lp()) ? Yo() : {})),
      d = Math.max(Up("gb", a), Vp(mp(lp()) ? Yo("_gac_gb", !0) : {}));
    Mb(20) && b && (d = Math.max(d, Up("ag", a)));
    return d > c;
  };
  var Xp = function (a, b, c) {
      var d = (vi.joined_auid = vi.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    Yp = function () {
      var a = Cj(D.location.href),
        b = yj(a, "query", !1, void 0, "gad_source");
      if (void 0 === b) {
        var c = a.hash.replace("#", "");
        b = vj(c, "gad_source", !1);
      }
      return b;
    },
    Zp = function () {
      var a = Cj(D.location.href).search.replace("?", "");
      return "1" === vj(a, "gad", !1, !0);
    },
    $p = function () {
      var a = 1 === Lm(!0) ? D.top.location.href : D.location.href;
      return (a = a.replace(/[\?#].*$/, ""));
    },
    aq = function (a) {
      var b = [];
      z(a, function (c, d) {
        d = yp(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].aa);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    cq = function (a, b, c) {
      if ("aw" === a || "dc" === a || "gb" === a) {
        var d = Ej("gcl" + a);
        if (d) return d.split(".");
      }
      var e = sp(b);
      if ("_gcl" === e) {
        var f = !W(bq()) && c,
          g;
        g = Cp()[a] || [];
        if (0 < g.length) return f ? ["0"] : g;
      }
      var h = tp(a, e);
      return h ? pp(h) : [];
    },
    dq = function (a) {
      var b = bq();
      xl(function () {
        a();
        W(b) || ll(a, b);
      }, b);
    },
    bq = function () {
      return T(41) ? [Q.g.M, Q.g.O] : [Q.g.M];
    },
    eq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    fq = /^www.googleadservices.com$/,
    gq = function (a, b) {
      return cq("aw", a, b);
    },
    hq = function (a, b) {
      return cq("dc", a, b);
    },
    iq = function (a, b, c, d) {
      var e = Cp(),
        f = [],
        g = e.gclid,
        h = e.dclid,
        m = e.gclsrc || "aw",
        n = Zp(),
        p = Yp();
      !g ||
        ("aw.ds" !== m && "aw" !== m && "ds" !== m && "3p.ds" !== m) ||
        f.push({ aa: g, xe: m });
      h && f.push({ aa: h, xe: "ds" });
      0 === f.length && e.wbraid && f.push({ aa: e.wbraid, xe: "gb" });
      0 === f.length && "aw.ds" === m && f.push({ aa: "", xe: "aw.ds" });
      dq(function () {
        if ((T(41) && T(79)) || W(Q.g.M)) {
          var q = W(bq());
          Ro(a);
          var r;
          if (q && ((r = Lo[No(a.prefix)]), void 0 === r && !T(41))) return;
          var t = [];
          if (q || !d) t = f;
          var u = [];
          r && u.push("auid=" + r);
          var v = G.referrer ? yj(Cj(G.referrer), "host") : "";
          0 === t.length &&
            (eq.test(v) || fq.test(v)) &&
            t.push({ aa: "", xe: "" });
          if (0 !== t.length || n || void 0 !== p) {
            v && u.push("ref=" + encodeURIComponent(v));
            var w = $p();
            u.push("url=" + encodeURIComponent(w));
            u.push("tft=" + zb());
            var x = ad();
            void 0 !== x && u.push("tfd=" + Math.round(x));
            var y = Lm(!0);
            u.push("frm=" + y);
            n && u.push("gad=1");
            void 0 !== p && u.push("gad_source=" + encodeURIComponent(p));
            var B = c;
            void 0 === B && (B = km.F[Q.g.la]);
            var A = {},
              E = gm(Xl(new Wl(0), ((A[Q.g.la] = B), A)));
            u.push("gtm=" + Ln(b));
            zn() && u.push("gcs=" + An());
            u.push("gcd=" + En(E));
            Hn() && u.push("dma_cps=" + Fn());
            u.push("dma=" + Gn());
            yn(E) ? u.push("npa=0") : u.push("npa=1");
            cn(ln()) && u.push("tcfd=" + In());
            var F = sn();
            F && u.push("gdpr=" + F);
            var C = qn();
            C && u.push("gdpr_consent=" + C);
            T(16) && u.push("apve=" + (T(17) ? 1 : 0));
            Ni.m && u.push("tag_exp=" + Ni.m);
            var H = q
              ? "https://adservice.google.com/pagead/regclk"
              : "https://adservice.googlesyndication.com/pagead/regclk";
            if (0 < t.length)
              for (var N = 0; N < t.length; N++) {
                var O = t[N],
                  U = O.aa,
                  X = O.xe;
                if (!Xp(a.prefix, X + "." + U, void 0 !== r)) {
                  var P = H + "?" + u.join("&");
                  "" !== U
                    ? (P =
                        "gb" === X
                          ? P + "&wbraid=" + U
                          : P + "&gclid=" + U + "&gclsrc=" + X)
                    : "aw.ds" === X && (P += "&gclsrc=aw.ds");
                  Vc(P);
                }
              }
            else if (
              (n || void 0 !== p) &&
              !Xp(a.prefix, "gad", void 0 !== r)
            ) {
              var S = H + "?" + u.join("&");
              Vc(S);
            }
          }
        }
      });
    };
  var jq,
    kq = !1;
  function lq() {
    kq = !0;
    (jq = productSettings), (productSettings = void 0);
    jq = jq || {};
  }
  var mq = function (a) {
    kq || lq();
    return jq[a];
  };
  var nq = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.o = c;
    this.m = {};
    this.metadata = k(c.eventMetadata || {});
    this.isAborted = !1;
  };
  nq.prototype.copyToHitData = function (a, b, c) {
    var d = V(this.o, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && l(d) && T(48))
      try {
        d = c(d);
      } catch (e) {}
    void 0 !== d && (this.m[a] = d);
  };
  var oq = function (a, b, c) {
    var d = mq(a.target.ia);
    return d && void 0 !== d[b] ? d[b] : c;
  };
  var pq = function () {
    vi.dedupe_gclid || (vi.dedupe_gclid = "" + go());
    return vi.dedupe_gclid;
  };
  var qq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    rq = /^www.googleadservices.com$/,
    tq = function (a) {
      a || (a = sq());
      return a.Am
        ? !1
        : a.vl || a.wl || a.yl || a.xl || a.ih || a.fh || a.bl || a.kl
        ? !0
        : !1;
    },
    sq = function () {
      var a = {},
        b = zo(!0);
      a.Am = !!b._up;
      var c = Cp();
      a.vl = void 0 !== c.aw;
      a.wl = void 0 !== c.dc;
      a.yl = void 0 !== c.wbraid;
      a.xl = void 0 !== c.gbraid;
      var d = Cj(D.location.href),
        e = yj(d, "query", !1, void 0, "gad");
      a.ih = void 0 !== e;
      if (!a.ih) {
        var f = d.hash.replace("#", ""),
          g = vj(f, "gad", !1);
        a.ih = void 0 !== g;
      }
      a.fh = yj(d, "query", !1, void 0, "gad_source");
      if (void 0 === a.fh) {
        var h = d.hash.replace("#", ""),
          m = vj(h, "gad_source", !1);
        a.fh = m;
      }
      var n = G.referrer ? yj(Cj(G.referrer), "host") : "";
      a.kl = qq.test(n);
      a.bl = rq.test(n);
      return a;
    };
  var uq = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    vq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    wq = /^\d+\.fls\.doubleclick\.net$/,
    xq = /;gac=([^;?]+)/,
    yq = /;gacgb=([^;?]+)/,
    zq = /;gclaw=([^;?]+)/,
    Aq = /;gclgb=([^;?]+)/;
  function Bq(a, b) {
    if (wq.test(G.location.host)) {
      var c = G.location.href.match(b);
      return c && 2 == c.length && c[1].match(uq)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].aa);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var Cq = function (a, b, c) {
    var d = mp(lp()) ? Yo("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = Sp("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + h.join(","));
    }
    return { al: f ? e.join(";") : "", Zk: Bq(d, yq) };
  };
  function Dq(a, b, c) {
    if (wq.test(G.location.host)) {
      var d = G.location.href.match(c);
      if (d && 2 == d.length && d[1].match(vq)) return [{ aa: d[1] }];
    } else {
      if ("gclid" === b) return op((a || "_gcl") + "_aw");
      if ("wbraid" === b) return op((a || "_gcl") + "_gb");
      if ("braids" === b) return qp({ prefix: a });
    }
    return [];
  }
  var Eq = function (a) {
      return Dq(a, "gclid", zq)
        .map(function (b) {
          return b.aa;
        })
        .join(".");
    },
    Fq = function (a) {
      return Dq(a, "wbraid", Aq)
        .map(function (b) {
          return b.aa;
        })
        .join(".");
    },
    Gq = function (a) {
      return Dq(a, "braids", Aq)
        .map(function (b) {
          return b.aa;
        })
        .join(".");
    },
    Hq = function (a, b) {
      b = void 0 === b ? !1 : b;
      return wq.test(G.location.host)
        ? !(zq.test(G.location.href) || xq.test(G.location.href))
        : Wp(a, b);
    },
    Iq = function (a, b) {
      var c = T(54),
        d;
      d = (void 0 === c ? 0 : c)
        ? Tp(a, b)
        : Sp(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === d.length ||
        d.every(function (e) {
          return 0 === e;
        })
        ? ""
        : d.join(".");
    };
  var Jq = function () {
    if (nb(D.__uspapi)) {
      var a = "";
      try {
        D.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Nq = function (a) {
      if (a.eventName === Q.g.ba && "page_view" === a.metadata.hit_type)
        if (T(17)) {
          a.metadata.redact_click_ids =
            null != V(a.o, Q.g.fa) && !1 !== V(a.o, Q.g.fa) && !W(Kq());
          var b = Lq(a),
            c = !1 !== V(a.o, Q.g.ra);
          c || (a.m[Q.g.oi] = "1");
          var d = sp(b.prefix);
          if (!a.metadata.consent_updated) {
            var e = V(a.o, Q.g.Sa),
              f = V(a.o, Q.g.sa) || {};
            Mq({ pd: c, vd: f, Bd: e, ac: b });
            var g;
            var h = (vi.ads_pageview = vi.ads_pageview || {});
            g = h[d] ? !1 : (h[d] = !0);
            if (!g) {
              a.isAborted = !0;
              return;
            }
          }
          a.m[Q.g.Yc] = Q.g.Nb;
          if (a.metadata.consent_updated)
            (a.m[Q.g.Yc] = Q.g.Tj), (a.m[Q.g.ic] = "1");
          else {
            var m = Cp();
            a.m[Q.g.Ed] = m.gclid;
            a.m[Q.g.Ld] = m.dclid;
            a.m[Q.g.ii] = m.gclsrc;
            a.m[Q.g.Ed] ||
              a.m[Q.g.Ld] ||
              ((a.m[Q.g.Re] = m.wbraid), (a.m[Q.g.cg] = m.gbraid));
            a.m[Q.g.Ba] = G.referrer ? yj(Cj(G.referrer), "host") : "";
            a.m[Q.g.wa] = $p();
            a.m[Q.g.hi] = Yp();
            a.m[Q.g.Wd] = Lm(!0);
            var n = sq();
            tq(n) && (a.m[Q.g.bd] = "1");
            a.m[Q.g.ki] = pq();
          }
          var p = W(Kq());
          c && p && (Ro(b), (a.m[Q.g.Cb] = Lo[No(b.prefix)]));
          a.m[Q.g.hb] = void 0;
          a.m[Q.g.Pa] = void 0;
          var q = T(54);
          if (!a.m[Q.g.Ed] && !a.m[Q.g.Ld] && Hq(d, q)) {
            var r = q ? rp(b) : pp(d + "_gb");
            0 < r.length && (a.m[Q.g.hb] = r.join("."));
          } else if (!a.m[Q.g.Re] && p) {
            var t = pp(d + "_aw");
            0 < t.length && (a.m[Q.g.Pa] = t.join("."));
          }
          a.o.isGtmEvent && (a.o.m[Q.g.la] = km.F[Q.g.la]);
          yn(a.o) ? (a.m[Q.g.Jb] = !1) : (a.m[Q.g.Jb] = !0);
          a.metadata.add_tag_timing = !0;
          var u = Jq();
          void 0 !== u && (a.m[Q.g.de] = u || "error");
          var v = sn();
          v && (a.m[Q.g.wc] = v);
          var w = qn();
          w && (a.m[Q.g.xc] = w);
          a.metadata.speculative = !1;
        } else a.isAborted = !0;
    },
    Kq = function () {
      return T(41) ? [Q.g.M, Q.g.O] : [Q.g.M];
    },
    Lq = function (a) {
      return {
        prefix: V(a.o, Q.g.Ua) || V(a.o, Q.g.La),
        domain: V(a.o, Q.g.Qa),
        xb: V(a.o, Q.g.Ra),
        flags: V(a.o, Q.g.Va),
      };
    },
    Oq = function (a, b) {
      var c = a.pd,
        d = a.Qf,
        e = a.allowAdPersonalizationSignals,
        f = a.wd,
        g = a.nn;
      Mq({ pd: c, vd: a.vd, Bd: a.Bd, ac: b });
      c && !0 !== g && iq(b, d, e, f);
    },
    Mq = function (a) {
      var b = a.vd,
        c = a.Bd,
        d = a.ac;
      a.pd &&
        (Jo(b[Q.g.Tb], !!b[Q.g.W]) && (Gp(Pq, d), Hp(d), Vo(d)),
        Ep(d),
        Lp(Pq, d),
        Mp(d));
      b[Q.g.W] &&
        (Jp(Pq, b[Q.g.W], b[Q.g.qb], !!b[Q.g.Wa], d.prefix),
        Kp(b[Q.g.W], b[Q.g.qb], !!b[Q.g.Wa], d.prefix),
        Wo(No(d.prefix), b[Q.g.W], b[Q.g.qb], !!b[Q.g.Wa], d),
        Wo("FPAU", b[Q.g.W], b[Q.g.qb], !!b[Q.g.Wa], d));
      c && Op(Qq);
      Qp(Qq);
    },
    Rq = function (a, b, c, d) {
      var e = a.Lj,
        f = a.callback,
        g = a.xj;
      if ("function" === typeof f)
        if (e === Q.g.Pa && void 0 === g) {
          var h = d(b.prefix, c);
          0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h);
        } else e === Q.g.Cb ? (M(65), Ro(b, !1), f(Lo[No(b.prefix)])) : f(g);
    },
    Pq = ["aw", "dc", "gb"],
    Qq = ["aw", "dc", "gb", "ag"];
  function Sq(a) {
    var b = V(a.o, Q.g.Eb),
      c = V(a.o, Q.g.Sb);
    b && !c
      ? (a.eventName !== Q.g.ba && a.eventName !== Q.g.Kc && M(131),
        (a.isAborted = !0))
      : !b && c && (M(132), (a.isAborted = !0));
  }
  function Tq(a) {
    var b = W(Q.g.M) ? vi.pscdl : "denied";
    null != b && (a.m[Q.g.Ve] = b);
  }
  var Uq = function (a) {
      if (a)
        switch (a._tag_mode) {
          case "CODE":
            return "c";
          case "AUTO":
            return "a";
          case "MANUAL":
            return "m";
          default:
            return "c";
        }
    },
    Vq = function (a) {
      var b = a && a[Q.g.ig];
      return b && b[Q.g.ji];
    },
    Wq = function () {
      return -1 !== Dc.userAgent.toLowerCase().indexOf("firefox");
    },
    Xq = function (a) {
      if (a && a.length) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d && d.estimated_delivery_date
            ? b.push("" + d.estimated_delivery_date)
            : b.push("");
        }
        return b.join(",");
      }
    };
  var Zq = function (a, b) {
      var c = a && !W(Yq());
      return b && c ? "0" : b;
    },
    ar = function (a) {
      xl(
        function () {
          function b(w) {
            var x = W(Yq()),
              y = h && x,
              B = g.prefix || "_gcl",
              A;
            vi.reported_gclid || (vi.reported_gclid = {});
            A = vi.reported_gclid;
            var E = T(41)
              ? (y ? B : "") +
                "." +
                (W(Q.g.M) ? 1 : 0) +
                "." +
                (W(Q.g.O) ? 1 : 0)
              : h && W(Q.g.M)
              ? n + "." + B + (w ? "gcu" : "gcs")
              : n + (w ? "gcu" : "gcs");
            if (!A[E]) {
              A[E] = !0;
              var F = {},
                C = function (P, S) {
                  if (S || "number" === typeof S) F[P] = S.toString();
                },
                H = "https://www.google.com";
              zn() && (C("gcs", An()), w && C("gcu", 1));
              C("gcd", En(f));
              Ni.m && C("tag_exp", Ni.m);
              if (hl()) {
                C("rnd", pq());
                if ((!n || (p && "aw.ds" !== p)) && x) {
                  var N = pp(B + "_aw");
                  C("gclaw", N.join("."));
                }
                C("url", String(D.location).split(/[?#]/)[0]);
                C("dclid", Zq(d, q));
                x || (H = "https://pagead2.googlesyndication.com");
              }
              Hn() && C("dma_cps", Fn());
              C("dma", Gn());
              C("npa", yn(f) ? 0 : 1);
              cn(ln()) && C("tcfd", In());
              C("gdpr_consent", qn() || "");
              C("gdpr", sn() || "");
              "1" === zo(!1)._up && C("gtm_up", 1);
              C("gclid", Zq(d, n));
              C("gclsrc", p);
              if (
                !(
                  F.hasOwnProperty("gclid") ||
                  F.hasOwnProperty("dclid") ||
                  F.hasOwnProperty("gclaw")
                ) &&
                (C("gbraid", Zq(d, r)),
                !F.hasOwnProperty("gbraid") && hl() && x)
              ) {
                var O = pp(B + "_gb");
                0 < O.length && C("gclgb", O.join("."));
              }
              C("gtm", Ln(f.eventMetadata.source_canonical_id, !e));
              h &&
                W(Q.g.M) &&
                (Ro(g || {}), y && C("auid", Lo[No(g.prefix)] || ""));
              $q || (a.qj && C("did", a.qj));
              a.gh && C("gdid", a.gh);
              a.Zg && C("edid", a.Zg);
              T(16) && C("apve", T(17) ? 1 : 0);
              var U = Object.keys(F).map(function (P) {
                  return P + "=" + encodeURIComponent(F[P]);
                }),
                X = H + "/pagead/landing?" + U.join("&");
              Vc(X);
            }
          }
          var c = !!a.Ug,
            d = !!a.wd,
            e = a.targetId,
            f = a.o,
            g = void 0 === a.ac ? {} : a.ac,
            h = void 0 === a.If ? !0 : a.If,
            m = Cp(),
            n = m.gclid || "",
            p = m.gclsrc,
            q = m.dclid || "",
            r = m.wbraid || "",
            t = !c && ((!n || (p && "aw.ds" !== p) ? !1 : !0) || r),
            u = hl();
          if (t || u)
            if (u) {
              var v = T(41) ? [Q.g.M, Q.g.O, Q.g.xa] : [Q.g.M];
              b();
              (function () {
                W(v) ||
                  wl(function (w) {
                    return b(!0, w.consentEventId, w.consentPriorityId);
                  }, v);
              })();
            } else b();
        },
        [Q.g.M, Q.g.O, Q.g.xa]
      );
    },
    Yq = function () {
      return T(41) ? [Q.g.M, Q.g.O] : [Q.g.M];
    },
    $q = !1;
  var br = function (a, b, c, d) {
    var e = Mc(),
      f;
    if (1 === e)
      a: {
        var g = Gi;
        g = g.toLowerCase();
        for (
          var h = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = G.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(h) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != D.location.protocol ? a : b) + c;
  };
  var cr = function (a, b) {
      T(5) &&
        ((a.dma = Gn()),
        Hn() && (a.dmaCps = Fn()),
        yn(b) ? (a.npa = "0") : (a.npa = "1"));
    },
    er = function (a, b, c) {
      if (D[a.functionName]) return b.wh && I(b.wh), D[a.functionName];
      var d = dr();
      D[a.functionName] = d;
      if (a.Ef)
        for (var e = 0; e < a.Ef.length; e++) D[a.Ef[e]] = D[a.Ef[e]] || dr();
      a.Hf && void 0 === D[a.Hf] && (D[a.Hf] = c);
      Lc(br("https://", "http://", a.Hh), b.wh, b.Rl);
      return d;
    },
    dr = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    fr = {
      functionName: "_googWcmImpl",
      Hf: "_googWcmAk",
      Hh: "www.gstatic.com/wcm/loader.js",
    },
    gr = {
      functionName: "_gaPhoneImpl",
      Hf: "ga_wpid",
      Hh: "www.gstatic.com/gaphone/loader.js",
    },
    hr = { Oj: "9", Bk: "5" },
    ir = {
      functionName: "_googCallTrackingImpl",
      Ef: [gr.functionName, fr.functionName],
      Hh:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (hr.Oj || hr.Bk) +
        ".js",
    },
    jr = {},
    kr = function (a, b, c, d, e) {
      M(22);
      if (c) {
        e = e || {};
        var f = er(fr, e, a),
          g = { ak: a, cl: b };
        void 0 === e.Kb && (g.autoreplace = c);
        cr(g, d);
        f(2, e.Kb, g, c, 0, yb(), e.options);
      }
    },
    lr = function (a, b, c, d, e) {
      M(21);
      if (b && c) {
        e = e || {};
        for (
          var f = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: yb(),
            },
            g = 0;
          g < a.length;
          g++
        ) {
          var h = a[g];
          jr[h.id] ||
            (h && "AW" === h.prefix && !f.adData && 2 <= h.ka.length
              ? ((f.adData = { ak: h.ka[Gl[1]], cl: h.ka[Gl[2]] }),
                cr(f.adData, d),
                (jr[h.id] = !0))
              : h &&
                "UA" === h.prefix &&
                !f.gaData &&
                ((f.gaData = { gaWpid: h.ia }), (jr[h.id] = !0)));
        }
        (f.gaData || f.adData) && er(ir, e)(e.Kb, f, e.options);
      }
    },
    mr = function () {
      var a = !1;
      return a;
    },
    nr = function (a, b) {
      if (a)
        if (Jn()) {
        } else if ((a = l(a) ? Dl(ek(a)) : Dl(ek(a.id)))) {
          var c = void 0,
            d = !1,
            e = V(b, Q.g.Hi);
          if (e && Array.isArray(e)) {
            c = [];
            for (var f = 0; f < e.length; f++) {
              var g = Dl(e[f]);
              g &&
                (c.push(g),
                (a.id === g.id || (a.id === a.ia && a.ia === g.ia)) &&
                  (d = !0));
            }
          }
          if (!c || d) {
            var h = V(b, Q.g.zg),
              m;
            if (h) {
              Array.isArray(h) ? (m = h) : (m = [h]);
              var n = V(b, Q.g.xg),
                p = V(b, Q.g.yg),
                q = V(b, Q.g.Ag),
                r = V(b, Q.g.Gi),
                t = n || p,
                u = 1;
              "UA" !== a.prefix || c || (u = 5);
              for (var v = 0; v < m.length; v++)
                if (v < u)
                  if (c) lr(c, m[v], r, b, { Kb: t, options: q });
                  else if ("AW" === a.prefix && a.ka[Gl[2]])
                    mr()
                      ? lr([a], m[v], r || "US", b, { Kb: t, options: q })
                      : kr(a.ka[Gl[1]], a.ka[Gl[2]], m[v], b, {
                          Kb: t,
                          options: q,
                        });
                  else if ("UA" === a.prefix)
                    if (mr()) lr([a], m[v], r || "US", b, { Kb: t });
                    else {
                      var w = a.ia,
                        x = m[v],
                        y = { Kb: t };
                      M(23);
                      if (x) {
                        y = y || {};
                        var B = er(gr, y, w),
                          A = {};
                        void 0 !== y.Kb ? (A.receiver = y.Kb) : (A.replace = x);
                        A.ga_wpid = w;
                        A.destination = x;
                        B(2, yb(), A);
                      }
                    }
            }
          }
        }
    };
  function or(a) {
    return {
      getDestinationId: function () {
        return a.target.ia;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.m[b];
      },
      setHitData: function (b, c) {
        a.m[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.m[b] && (a.m[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return V(a.o, b);
      },
      tj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.m);
      },
    };
  }
  var qr = function (a) {
      var b = pr[a.target.ia];
      if (!a.isAborted && b)
        for (var c = or(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    rr = function (a, b) {
      var c = pr[a];
      c || (c = pr[a] = []);
      c.push(b);
    },
    pr = {};
  var tr = function (a) {
      if (W(sr)) {
        a = a || {};
        Ro(a, !1);
        var b = Mo[No(sp(a.prefix))];
        if (b && !(18e5 < zb() - 1e3 * b.sh)) {
          var c = b.id,
            d = c.split(".");
          if (2 === d.length && !(864e5 < zb() - 1e3 * (Number(d[1]) || 0)))
            return c;
        }
      }
    },
    sr = Q.g.M;
  var ur = function () {
    var a = (Dc && Dc.userAgent) || "";
    if (
      0 > a.indexOf("Safari") ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
    )
      return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if ("" === b) return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (void 0 === c[e]) return !0;
      if (d[e] != c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
  var vr = function () {
      var a = D.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    wr = function (a) {
      if (G.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !D.getComputedStyle)
        return !0;
      var c = D.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf("opacity(");
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(")", h))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = D.getComputedStyle(d, null));
      }
      return !1;
    };
  var xr = function () {
      var a = G.body,
        b = G.documentElement || (a && a.parentElement),
        c,
        d;
      if (G.compatMode && "BackCompat" !== G.compatMode)
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    },
    yr = function (a) {
      var b = xr(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    };
  var zr = [],
    Ar = !(!D.IntersectionObserver || !D.IntersectionObserverEntry),
    Br = function (a, b, c) {
      for (
        var d = new D.IntersectionObserver(a, { threshold: c }), e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < zr.length; f++) if (!zr[f]) return (zr[f] = d), f;
      return zr.push(d) - 1;
    },
    Cr = function (a, b, c) {
      function d(h, m) {
        var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
          p = {
            boundingClientRect: h.getBoundingClientRect(),
            intersectionRatio: m,
            intersectionRect: n,
            isIntersecting: 0 < m,
            rootBounds: n,
            target: h,
            time: zb(),
          };
        I(function () {
          return a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (h, m) {
        return h - m;
      });
      return function () {
        for (var h = 0; h < b.length; h++) {
          var m = yr(b[h]);
          if (m > e[h])
            for (; f[h] < c.length - 1 && m >= c[f[h] + 1]; )
              d(b[h], m), f[h]++;
          else if (m < e[h])
            for (; 0 <= f[h] && m <= c[f[h]]; ) d(b[h], m), f[h]--;
          e[h] = m;
        }
      };
    },
    Dr = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        1 < c[d] ? (c[d] = 1) : 0 > c[d] && (c[d] = 0);
      if (Ar) {
        var e = !1;
        I(function () {
          e || Cr(a, b, c)();
        });
        return Br(
          function (f) {
            e = !0;
            for (var g = { Be: 0 }; g.Be < f.length; g = { Be: g.Be }, g.Be++)
              I(
                (function (h) {
                  return function () {
                    return a(f[h.Be]);
                  };
                })(g)
              );
          },
          b,
          c
        );
      }
      return D.setInterval(Cr(a, b, c), 1e3);
    },
    Er = function (a) {
      Ar
        ? 0 <= a &&
          a < zr.length &&
          zr[a] &&
          (zr[a].disconnect(), (zr[a] = void 0))
        : D.clearInterval(a);
    };
  var Gr = function (a, b, c) {
      var d = a.element,
        e = { X: a.X, type: a.qa, tagName: d.tagName };
      b && (e.querySelector = Fr(d));
      c && (e.isVisible = !wr(d));
      return e;
    },
    Hr = function (a, b, c) {
      return Gr({ element: a.element, X: a.X, qa: "1" }, b, c);
    },
    Ir = function (a) {
      var b = !!a.sd + "." + !!a.ud;
      a && a.ue && a.ue.length && (b += "." + a.ue.join("."));
      a &&
        a.ub &&
        (b += "." + a.ub.email + "." + a.ub.phone + "." + a.ub.address);
      return b;
    },
    Lr = function (a) {
      if (0 != a.length) {
        var b;
        b = Jr(a, function (c) {
          return !Kr.test(c.X);
        });
        b = Jr(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = Jr(b, function (c) {
          return !wr(c.element);
        });
        return b[0];
      }
    },
    Mr = function (a, b) {
      if (!b || 0 === b.length) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && Dh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    Jr = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    Fr = function (a) {
      var b;
      if (a === G.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = Fr(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    Or = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(Nr);
          if (f) {
            var g = f[0],
              h;
            if (D.location) {
              var m = xj(D.location, "host", !0);
              h = 0 <= g.toLowerCase().indexOf(m);
            } else h = !1;
            h || b.push({ element: d, X: g });
          }
        }
      }
      return b;
    },
    Sr = function () {
      var a = [],
        b = G.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && 1e4 > d;
        d++
      ) {
        var e = c[d];
        if (
          !(0 <= Pr.indexOf(e.tagName.toUpperCase())) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && 1e4 > g; g++)
            if (!(0 <= Qr.indexOf(e.children[g].tagName.toUpperCase()))) {
              f = !0;
              break;
            }
          (!f || (T(21) && -1 !== Rr.indexOf(e.tagName))) && a.push(e);
        }
      }
      return { elements: a, status: 1e4 < c.length ? "2" : "1" };
    },
    Tr = !1;
  var Nr = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    Ur = /@(gmail|googlemail)\./i,
    Kr = /support|noreply/i,
    Pr = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    Qr = ["BR"],
    Vr = { Hm: "1", Vm: "2", Lm: "3", Pm: "4", Em: "5", Wm: "6", Rm: "7" },
    Wr = {},
    Rr = ["INPUT", "SELECT"];
  var os = function (a) {
      a = a || { sd: !0, ud: !0, Nf: void 0 };
      a.ub = a.ub || { email: !0, phone: !1, address: !1 };
      var b = Ir(a),
        c = Wr[b];
      if (c && 200 > zb() - c.timestamp) return c.result;
      var d = Sr(),
        e = d.status,
        f = [],
        g,
        h,
        m = [];
      if (!T(21)) {
        if (a.ub && a.ub.email) {
          var n = Or(d.elements);
          f = Mr(n, a && a.ue);
          g = Lr(f);
          10 < n.length && (e = "3");
        }
        !a.Nf && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(Hr(f[p], a.sd, a.ud));
        m = m.slice(0, 10);
      } else if (a.ub) {
      }
      g && (h = Hr(g, a.sd, a.ud));
      var E = { elements: m, Bh: h, status: e };
      Wr[b] = { timestamp: zb(), result: E };
      return E;
    },
    ps = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.X.length + ":" + Ur.test(a.X)
      );
    };
  var ws = {
    Ck: Number("") || 500,
    qk: Number("") || 5e3,
    Ui: Number("20") || 10,
    Sj: Number("") || 5e3,
  };
  function xs(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var ys = function (a, b) {
    var c;
    return c;
  };
  var zs = "https://" + ui.Dd,
    As = zs + "/gtm/static/",
    Bs = Number("") || 5,
    Cs = Number("") || 50,
    Ds = zs,
    Es = As,
    Fs = !1,
    Gs = 0,
    Hs = qb();
  function Ss() {
    var a = !1;
    return a;
  }
  function Ts(a) {
    var b = Math.round(zb());
  }
  function Us(a, b, c) {}
  function Ps(a, b, c, d) {}
  function Js(a, b, c, d, e) {}
  function Vs(a, b, c, d) {}
  function Ws(a, b, c, d) {}
  function Xs(a) {
    var b = {},
      c = ["tv.1"],
      d = 0;
    var u = c.join("~");
    return { X: b, Lf: u };
  }
  function Ys(a) {
    var b;
    if (Rj) {
      var c;
      b = !!(null == a
        ? 0
        : null == (c = a.eventMetadata.is_sw_selected)
        ? 0
        : c[0]);
    } else b = T(64) && T(73) && !Hj();
    return b;
  }
  var Zs = void 0;
  function $s(a) {
    var b = [];
    return b;
  }
  var at = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  wc();
  Am() || tc("iPod");
  tc("iPad");
  !tc("Android") || xc() || wc() || vc() || tc("Silk");
  xc();
  !tc("Safari") ||
    xc() ||
    (uc() ? 0 : tc("Coast")) ||
    vc() ||
    (uc() ? 0 : tc("Edge")) ||
    (uc() ? sc("Microsoft Edge") : tc("Edg/")) ||
    (uc() ? sc("Opera") : tc("OPR")) ||
    wc() ||
    tc("Silk") ||
    tc("Android") ||
    Bm();
  var bt = {},
    ct = null,
    dt = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!ct) {
        ct = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(h[m].split(""));
          bt[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === ct[q] && (ct[q] = p);
          }
        }
      }
      for (
        var r = bt[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          B = b[v + 2],
          A = r[x >> 2],
          E = r[((x & 3) << 4) | (y >> 4)],
          F = r[((y & 15) << 2) | (B >> 6)],
          C = r[B & 63];
        t[w++] = "" + A + E + F + C;
      }
      var H = 0,
        N = u;
      switch (b.length - v) {
        case 2:
          (H = b[v + 1]), (N = r[(H & 15) << 2] || u);
        case 1:
          var O = b[v];
          t[w] = "" + r[O >> 2] + r[((O & 3) << 4) | (H >> 4)] + N + u;
      }
      return t.join("");
    };
  Object.freeze(new (function () {})());
  Object.freeze(new (function () {})());
  var et =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function ft(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function gt() {
    var a = D.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function ht() {
    var a, b;
    return null !=
      (b = null == (a = D.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function it(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function jt() {
    var a = D;
    if (!it(a)) return null;
    var b = ft(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(et)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var kt,
    lt = function () {
      if (it(D) && ((kt = zb()), !ht())) {
        var a = jt();
        a &&
          (a.then(function () {
            M(95);
          }),
          a.catch(function () {
            M(96);
          }));
      }
    },
    nt = function (a) {
      var b = mt.ym,
        c = function (g, h) {
          try {
            a(g, h);
          } catch (m) {}
        },
        d = gt();
      if (d) c(d);
      else {
        var e = ht();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = D.setTimeout(function () {
            c.De || ((c.De = !0), M(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.De || ((c.De = !0), M(104), D.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.De || ((c.De = !0), M(105), D.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    ot = function (a, b) {
      a &&
        ((b.m[Q.g.kf] = a.architecture),
        (b.m[Q.g.lf] = a.bitness),
        a.fullVersionList &&
          (b.m[Q.g.nf] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || "") +
                ";" +
                encodeURIComponent(c.version || "")
              );
            })
            .join("|")),
        (b.m[Q.g.pf] = a.mobile ? "1" : "0"),
        (b.m[Q.g.qf] = a.model),
        (b.m[Q.g.rf] = a.platform),
        (b.m[Q.g.tf] = a.platformVersion),
        (b.m[Q.g.uf] = a.wow64 ? "1" : "0"));
    };
  function pt() {
    return "attribution-reporting";
  }
  function qt(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var rt = !1;
  function st() {
    if (qt("join-ad-interest-group") && nb(Dc.joinAdInterestGroup)) return !0;
    rt || (Jm(""), (rt = !0));
    return qt("join-ad-interest-group") && nb(Dc.joinAdInterestGroup);
  }
  function tt(a, b) {
    var c = void 0 == Lb[3] ? 1 : Lb[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (1 === c) {
        var f = G.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(G.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = G.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var h = g,
      m =
        ((null == h ? void 0 : h.length) || 0) >=
        (void 0 == Lb[2] ? 50 : Lb[2]),
      n;
    if ((n = 1 <= e.length)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p && zb() - p < (void 0 == Lb[1] ? 6e4 : Lb[1])
        ? (ib("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (1 === c)
        if (1 <= e.length) ut(e[0]);
        else {
          if (m) {
            ib("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? ut(e[0]) : m && ut(h[0]);
      Nc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: zb() }
      );
    }
  }
  function ut(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function vt() {
    return "https://td.doubleclick.net";
  }
  var wt = function () {
      return T(41) ? [Q.g.M, Q.g.O] : [Q.g.M];
    },
    xt = function (a) {
      if (null != a) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return -1 == c ? b : b.substring(0, c);
      }
      return "";
    },
    zt = function () {
      var a = G.title;
      if (void 0 == a || "" == a) return "";
      var b = function (d) {
        try {
          return decodeURIComponent(d), !0;
        } catch (e) {
          return !1;
        }
      };
      a = encodeURIComponent(a);
      for (var c = 256; !b(a.substr(0, c)); ) c--;
      return decodeURIComponent(a.substr(0, c));
    },
    At = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    Bt = function (a, b) {
      Array.isArray(b) || (b = [b]);
      return 0 <= b.indexOf(a.metadata.hit_type);
    },
    Ct = function (a) {
      var b = a.target.ka[Gl[1]];
      if (b) {
        a.m[Q.g.Sc] = b;
        var c = a.target.ka[Gl[2]];
        c && (a.m[Q.g.kb] = c);
      } else a.isAborted = !0;
    },
    Dt = function (a) {
      if (
        Bt(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.m[Q.g.kb],
          c = !0 === V(a.o, Q.g.Ue);
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && At(a);
            Wq() && (a.metadata.is_gcp_conversion = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c && b && (a.isAborted = !0);
            break;
          case "remarketing":
            (!c && b) || At(a);
        }
        Bt(a, ["conversion", "remarketing"]) &&
          (a.m[Q.g.Ri] = a.metadata.is_gcp_conversion
            ? "www.google.com"
            : "www.googleadservices.com");
      }
    },
    Et = function (a) {
      Bt(a, ["conversion", "remarketing"]);
    },
    Ft = function (a) {
      if (!a.metadata.consent_updated && Bt(a, ["conversion", "remarketing"])) {
        var b = Lm(!1);
        a.m[Q.g.Wd] = b;
        var c = V(a.o, Q.g.wa);
        c || (c = 1 === b ? D.top.location.href : D.location.href);
        a.m[Q.g.wa] = xt(c);
        a.copyToHitData(Q.g.Ba, G.referrer);
        a.m[Q.g.Fb] = zt();
        a.copyToHitData(Q.g.Ma);
        var d = vr();
        a.m[Q.g.Gb] = d.width + "x" + d.height;
        for (var e, f = D, g = f; f && f != f.parent; )
          (f = f.parent), Hm(f) && (g = f);
        e = g;
        var h;
        var m = e.location.href;
        if (e === e.top) h = { url: m, Fl: !0 };
        else {
          var n = !1,
            p = e.document;
          p && p.referrer && ((m = p.referrer), e.parent === e.top && (n = !0));
          var q = e.location.ancestorOrigins;
          if (q) {
            var r = q[q.length - 1];
            r && -1 === m.indexOf(r) && ((n = !1), (m = r));
          }
          h = { url: m, Fl: n };
        }
        var t = h;
        t.url && c !== t.url && (a.m[Q.g.hf] = xt(t.url));
      }
    },
    Gt = function (a) {
      Bt(a, ["conversion", "remarketing"]) &&
        (a.copyToHitData(Q.g.za),
        a.copyToHitData(Q.g.ma),
        a.copyToHitData(Q.g.ya),
        (T(41) && !W(Q.g.O)) || a.copyToHitData(Q.g.Na));
    },
    Ht = function (a) {
      if (!it(D)) M(87);
      else if (void 0 !== kt) {
        M(85);
        var b = gt();
        b ? ot(b, a) : M(86);
      }
    },
    Kt = function (a) {
      !Bt(a, ["conversion"]) ||
        (T(41) && !W(Q.g.O)) ||
        (!0 === D._gtmpcm || ur()
          ? (a.m[Q.g.Pb] = "2")
          : T(26) &&
            (It || qt(pt()) || (Jm(""), (It = !0)),
            Jt ||
              ((Jt = !0),
              Jm(
                "A4oIpR6f5aUXFRMbL6t6qaMk4lrHWxcV3DcrzORsA9sEsIk1FBRMFzzhfMNLuUpokZH40FV8s7iiXtt/729v8A4AAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcxNDUyMTU5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d"
              )),
            qt(pt()) && (a.m[Q.g.Pb] = "1")));
    },
    Lt = function (a) {
      if (Bt(a, ["conversion", "remarketing"]) && T(22)) {
        var b = function (d) {
          return T(24) ? (ib("fdr", d), !0) : !1;
        };
        if (W(Q.g.M) || b(0))
          if (!T(41) || W(Q.g.O) || b(1))
            if (!1 !== V(a.o, Q.g.Aa) || b(2))
              if (yn(a.o) || b(3))
                if (!1 !== V(a.o, Q.g.Ob) || b(4)) {
                  var c;
                  T(25)
                    ? (c = a.eventName === Q.g.ba ? V(a.o, Q.g.Ia) : void 0)
                    : (c = V(a.o, Q.g.Ia));
                  if (!1 !== c || b(5))
                    if (st() || b(6))
                      T(24) && kb()
                        ? ((a.m[Q.g.xi] = jb("fdr")), delete hb.fdr)
                        : ((a.m[Q.g.jg] = "1"),
                          (a.metadata.send_fledge_experiment = !0));
                }
      }
    },
    Mt = function (a) {
      a.metadata.conversion_linker_enabled = !1 !== V(a.o, Q.g.ra);
      a.metadata.cookie_options = Lq(a);
      a.metadata.redact_ads_data =
        null != V(a.o, Q.g.fa) && !1 !== V(a.o, Q.g.fa);
      a.metadata.allow_ad_personalization = yn(a.o);
    },
    Nt = function (a) {
      if (oq(a, "ccd_add_1p_data", !1) && W(wt())) {
        var b = a.o.D[Q.g.ce];
        if (bj(b)) {
          var c = V(a.o, Q.g.Ca);
          null === c
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && Va(c) && (a.metadata.user_data_from_code = c),
              Va(b.selectors) &&
                (a.metadata.user_data_from_manual = aj(b.selectors)));
        }
      }
    },
    Ot = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          Bt(a, ["conversion", "user_data_web"]),
        c = !oq(a, "ccd_add_1p_data", !1) && Bt(a, "user_data_lead");
      if ((b || c) && W(Q.g.M)) {
        var d = "conversion" === a.metadata.hit_type,
          e = a.o,
          f = void 0,
          g = V(e, Q.g.Ca);
        if (d) {
          var h = (V(e, Q.g.Pd) || {})[a.m[Q.g.kb]];
          if (!0 === V(e, Q.g.Fd) || h) {
            var m;
            var n;
            if (h)
              b: {
                switch (h.enhanced_conversions_mode) {
                  case "manual":
                    if (g && Va(g)) {
                      n = g;
                      break b;
                    }
                    var p = h.enhanced_conversions_manual_var;
                    n = void 0 !== p ? p : D.enhanced_conversion_data;
                    break b;
                  case "automatic":
                    n = aj(h[Q.g.ig]);
                    break b;
                }
                n = void 0;
              }
            else n = D.enhanced_conversion_data;
            var q = n,
              r = (h || {}).enhanced_conversions_mode,
              t;
            if (q) {
              if ("manual" === r)
                switch (q._tag_mode) {
                  case "CODE":
                    t = "c";
                    break;
                  case "AUTO":
                    t = "a";
                    break;
                  case "MANUAL":
                    t = "m";
                    break;
                  default:
                    t = "c";
                }
              else t = "automatic" === r ? (Vq(h) ? "a" : "m") : "c";
              m = { X: q, Kj: t };
            } else m = { X: q, Kj: void 0 };
            var u = m,
              v = u.Kj;
            f = u.X;
            a.m[Q.g.kd] = v;
          }
        } else if (a.o.isGtmEvent) {
          At(a);
          a.metadata.user_data = g;
          a.m[Q.g.kd] = Uq(g);
          return;
        }
        a.metadata.user_data = f;
      }
    },
    Pt = function (a) {
      Bt(a, ["conversion", "remarketing"]) &&
        (a.o.isGtmEvent
          ? "conversion" !== a.metadata.hit_type &&
            a.eventName &&
            (a.m[Q.g.Yc] = a.eventName)
          : (a.m[Q.g.Yc] = a.eventName),
        z(a.o.m, function (b, c) {
          ri[b.split(".")[0]] || (a.m[b] = c);
        }));
    },
    Qt = function (a) {
      if (
        a.eventName === Q.g.ba &&
        !a.metadata.consent_updated &&
        ((a.metadata.is_config_command = !0),
        Bt(a, "conversion") && (a.metadata.speculative = !0),
        !Bt(a, "remarketing") ||
          (!1 !== V(a.o, Q.g.Ob) && !1 !== V(a.o, Q.g.Ia)) ||
          (a.metadata.speculative = !0),
        Bt(a, "landing_page"))
      ) {
        var b = V(a.o, Q.g.sa) || {},
          c = V(a.o, Q.g.Sa),
          d = a.metadata.conversion_linker_enabled,
          e = a.metadata.source_canonical_id,
          f = yn(a.o),
          g = a.metadata.redact_ads_data,
          h = a.metadata.cookie_options;
        Oq(
          {
            pd: d,
            vd: b,
            Bd: c,
            Qf: e,
            allowAdPersonalizationSignals: f,
            wd: g,
          },
          h
        );
        nr(a.target, a.o);
        ar({
          Ug: !1,
          wd: g,
          targetId: a.target.id,
          o: a.o,
          ac: d ? h : void 0,
          If: d,
          qj: a.m[Q.g.Yd],
          gh: a.m[Q.g.pb],
          Zg: a.m[Q.g.lb],
        });
        a.isAborted = !0;
      }
    },
    Rt = function (a) {
      if (
        !oq(a, "hasPreAutoPiiCcdRule", !1) &&
        Bt(a, "conversion") &&
        W(Q.g.M)
      ) {
        var b = (V(a.o, Q.g.Pd) || {})[a.m[Q.g.kb]],
          c = a.m[Q.g.Sc],
          d;
        if (!(d = Vq(b)))
          if (rj())
            if (Tr) d = !0;
            else {
              var e = mq("AW-" + c);
              d = !!e && !!e.preAutoPii;
            }
          else d = !1;
        if (d) {
          var f = zb(),
            g = os({ sd: !0, ud: !0, Nf: !0 });
          if (0 !== g.elements.length) {
            for (var h = [], m = 0; m < g.elements.length; ++m) {
              var n = g.elements[m];
              h.push(n.querySelector + "*" + ps(n) + "*" + n.type);
            }
            a.m[Q.g.Fg] = h.join("~");
            var p = g.Bh;
            p && ((a.m[Q.g.Gg] = p.querySelector), (a.m[Q.g.Eg] = ps(p)));
            a.m[Q.g.Dg] = String(zb() - f);
            a.m[Q.g.Hg] = g.status;
          }
        }
      }
    },
    St = function (a) {
      if (a.eventName === Q.g.Oa && !a.o.isGtmEvent) {
        if (!a.metadata.consent_updated && Bt(a, "conversion")) {
          var b = V(a.o, Q.g.Db);
          if ("function" !== typeof b) return;
          var c = String(V(a.o, Q.g.ob)),
            d = a.m[c],
            e = V(a.o, c);
          c === Q.g.Pa || c === Q.g.Cb
            ? Rq(
                { Lj: c, callback: b, xj: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                gq
              )
            : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    Tt = function (a) {
      if (Bt(a, "conversion") && W(Q.g.M) && (a.m[Q.g.hb] || a.m[Q.g.vc])) {
        var b = a.m[Q.g.kb],
          c = k(a.metadata.cookie_options),
          d = sp(c.prefix);
        c.prefix = "_gcl" === d ? "" : d;
        if (a.m[Q.g.hb]) {
          var e = Iq(b, c);
          e && (a.m[Q.g.Ig] = e);
        }
        if (a.m[Q.g.vc]) {
          var f = Cq(b, c).al;
          f && (a.m[Q.g.og] = f);
        }
      }
    },
    Ut = function (a) {
      var b = T(8),
        c = a.o,
        d,
        e,
        f;
      if (!b) {
        var g = Ul(c, Q.g.ja);
        d = Ib(Va(g) ? g : {});
      }
      var h = Ul(c, Q.g.ja, 1),
        m = Ul(c, Q.g.ja, 2);
      e = Ib(Va(h) ? h : {}, ".");
      f = Ib(Va(m) ? m : {}, ".");
      b || (a.m[Q.g.Yd] = d);
      a.m[Q.g.pb] = e;
      a.m[Q.g.lb] = f;
    },
    Vt = function (a) {
      if (Bt(a, ["conversion", "remarketing"])) {
        var b = "conversion" === a.metadata.hit_type;
        (b && a.eventName !== Q.g.Ha) ||
          (a.copyToHitData(Q.g.da),
          b &&
            (a.copyToHitData(Q.g.Jd),
            a.copyToHitData(Q.g.Hd),
            a.copyToHitData(Q.g.Id),
            a.copyToHitData(Q.g.Gd),
            (a.m[Q.g.dg] = a.eventName)));
      }
    },
    Wt = function (a) {
      if (
        Bt(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.o;
        if (Bt(a, ["conversion", "remarketing"])) {
          var c = V(b, Q.g.Ub);
          if (!0 === c || !1 === c) a.m[Q.g.Ub] = c;
        }
        yn(b)
          ? (a.m[Q.g.Jb] = !1)
          : ((a.m[Q.g.Jb] = !0), Bt(a, "remarketing") && (a.isAborted = !0));
      }
    },
    Xt = function (a) {
      Bt(a, "conversion") &&
        (a.copyToHitData(Q.g.dd),
        a.copyToHitData(Q.g.Kd),
        a.copyToHitData(Q.g.jd),
        a.copyToHitData(Q.g.Qd),
        a.copyToHitData(Q.g.sc),
        a.copyToHitData(Q.g.Wc));
    },
    Yt = function (a) {
      qr(a);
    },
    Zt = function (a) {
      if (Bt(a, ["conversion", "remarketing"]) && D.__gsaExp && D.__gsaExp.id) {
        var b = D.__gsaExp.id;
        if (nb(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.m[Q.g.sg] = c);
          } catch (d) {}
      }
    },
    $t = function (a) {
      if (Bt(a, ["conversion", "remarketing"])) {
        var b = Jq();
        void 0 !== b && (a.m[Q.g.de] = b || "error");
        var c = sn();
        c && (a.m[Q.g.wc] = c);
        var d = qn();
        d && (a.m[Q.g.xc] = d);
      }
    },
    au = function (a) {
      Bt(a, ["conversion"]) && "1" === zo(!1)._up && (a.m[Q.g.Xd] = !0);
    },
    bu = function (a) {
      Bt(a, ["conversion"]) &&
        (a.metadata.redact_click_ids =
          !!a.metadata.redact_ads_data && !W(wt()));
    },
    cu = function (a) {
      if (
        Bt(a, ["conversion", "user_data_lead", "user_data_web"]) &&
        W(Q.g.M) &&
        a.metadata.conversion_linker_enabled
      ) {
        var b = a.metadata.cookie_options,
          c = sp(b.prefix);
        "_gcl" === c && (c = "");
        var d = T(54);
        if (!T(41) || W(Q.g.O))
          if (Hq(c, d)) {
            var e = d ? Gq(c) : Fq(c);
            e && (a.m[Q.g.hb] = e);
            if (!c) {
              var f = a.m[Q.g.kb];
              b = k(b);
              b.prefix = c;
              var g = Cq(f, b, !0).Zk;
              g && (a.m[Q.g.vc] = g);
            }
          } else {
            var h = Eq(c);
            h && (a.m[Q.g.Pa] = h);
            if (!c) {
              var m = Bq(mp(lp()) ? Yo() : {}, xq);
              m && (a.m[Q.g.Ud] = m);
            }
          }
      }
    },
    du = function (a) {
      if (
        Bt(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        W(Q.g.M)
      ) {
        var b = !T(3);
        if ("remarketing" !== a.metadata.hit_type || b) {
          var c = a.metadata.cookie_options;
          Ro(c, "conversion" === a.metadata.hit_type && a.eventName !== Q.g.Oa);
          if (!T(41) || W(Q.g.O)) a.m[Q.g.Cb] = Lo[No(c.prefix)];
        }
      }
    },
    eu = function (a) {
      Hj() || Jj(a.o) || (Ys(a.o) && Ts());
    },
    fu = function (a) {
      if (Bt(a, ["conversion"])) {
        var b = tr(a.metadata.cookie_options);
        if (b && !a.m[Q.g.za]) {
          var c = go(a.m[Q.g.kb]);
          a.m[Q.g.za] = c;
        }
        b && ((a.m[Q.g.rb] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    gu = function (a) {
      var b = W(wt());
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !b || !!a.metadata.consent_updated;
          break;
        case "remarketing":
          a.isAborted = !b;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.m[Q.g.ic] = !0);
      }
    },
    hu = function (a) {
      Bt(a, ["conversion"]) &&
        a.o.eventMetadata.is_external_event &&
        (a.m[Q.g.Si] = !0);
    },
    iu = function (a) {
      if (!a.metadata.consent_updated && T(19) && Bt(a, ["conversion"])) {
        var b = sq();
        tq(b) && ((a.m[Q.g.bd] = "1"), (a.metadata.add_tag_timing = !0));
      }
    },
    ju = function (a) {
      var b;
      if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            At(a);
            break;
          case "user_data_lead":
            b = 98;
            At(a);
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && M(b);
      !0 === a.metadata.speculative && (a.isAborted = !0);
    },
    ku = function (a) {
      T(17) &&
      a.eventName === Q.g.ba &&
      Bt(a, "page_view") &&
      !a.metadata.consent_updated &&
      !a.o.isGtmEvent
        ? nr(a.target, a.o)
        : Bt(a, "call_conversion") && (nr(a.target, a.o), (a.isAborted = !0));
    },
    It = !1,
    Jt = !1;
  var mu = function (a, b) {
      var c = {},
        d = function (f, g) {
          var h;
          h = !0 === g ? "1" : !1 === g ? "0" : encodeURIComponent(String(g));
          c[f] = h;
        };
      z(a.m, function (f, g) {
        var h = lu[f];
        h &&
          void 0 !== g &&
          "" !== g &&
          (!a.metadata.redact_click_ids ||
            (f !== Q.g.Ed && f !== Q.g.Ld && f !== Q.g.Re && f !== Q.g.cg) ||
            (g = "0"),
          d(h, g));
      });
      d("gtm", Ln(a.metadata.source_canonical_id));
      zn() && d("gcs", An());
      d("gcd", En(a.o));
      Hn() && d("dma_cps", Fn());
      d("dma", Gn());
      cn(ln()) && d("tcfd", In());
      Ni.m && d("tag_exp", Ni.m);
      if (a.metadata.add_tag_timing) {
        d("tft", zb());
        var e = ad();
        void 0 !== e && d("tfd", Math.round(e));
      }
      T(16) && d("apve", T(17) ? "1" : "0");
      b(c);
    },
    nu = function (a) {
      mu(a, function (b) {
        var c = [];
        z(b, function (f, g) {
          c.push(f + "=" + g);
        });
        var d;
        d =
          "page_view" === a.metadata.hit_type
            ? Kj(
                W(T(41) ? [Q.g.M, Q.g.O] : [Q.g.M])
                  ? "https://www.google.com"
                  : "https://pagead2.googlesyndication.com",
                !0
              ) + "/ccm/collect"
            : void 0;
        var e = d + "?" + c.join("&");
        Vc(e);
        if (nb(a.o.onSuccess)) a.o.onSuccess();
      });
    },
    ou = {},
    lu =
      ((ou[Q.g.ic] = "gcu"),
      (ou[Q.g.hb] = "gclgb"),
      (ou[Q.g.Pa] = "gclaw"),
      (ou[Q.g.hi] = "gad_source"),
      (ou[Q.g.Ed] = "gclid"),
      (ou[Q.g.ii] = "gclsrc"),
      (ou[Q.g.cg] = "gbraid"),
      (ou[Q.g.Re] = "wbraid"),
      (ou[Q.g.Cb] = "auid"),
      (ou[Q.g.ki] = "rnd"),
      (ou[Q.g.oi] = "ncl"),
      (ou[Q.g.eg] = "gcldc"),
      (ou[Q.g.Ld] = "dclid"),
      (ou[Q.g.lb] = "edid"),
      (ou[Q.g.Yc] = "en"),
      (ou[Q.g.wc] = "gdpr"),
      (ou[Q.g.pb] = "gdid"),
      (ou[Q.g.Wd] = "frm"),
      (ou[Q.g.bd] = "lps"),
      (ou[Q.g.Yd] = "did"),
      (ou[Q.g.wa] = "dl"),
      (ou[Q.g.Ba] = "dr"),
      (ou[Q.g.xc] = "gdpr_consent"),
      (ou[Q.g.de] = "us_privacy"),
      (ou[Q.g.Jb] = "npa"),
      ou);
  var pu = {
    K: {
      Nh: "ads_conversion_hit",
      Cd: "container_execute_start",
      Qh: "container_setup_end",
      Tf: "container_setup_start",
      Oh: "container_blocking_end",
      Ph: "container_execute_end",
      Rh: "container_yield_end",
      Uf: "container_yield_start",
      Ni: "event_execute_end",
      Mi: "event_evaluation_end",
      Jg: "event_evaluation_start",
      Oi: "event_setup_end",
      ee: "event_setup_start",
      Pi: "ga4_conversion_hit",
      he: "page_load",
      Um: "pageview",
      Yb: "snippet_load",
      dj: "tag_callback_error",
      ej: "tag_callback_failure",
      fj: "tag_callback_success",
      gj: "tag_execute_end",
      nd: "tag_execute_start",
    },
  };
  function qu() {
    function a(c, d) {
      var e = jb(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var ru = !1;
  var Zu = function (a, b) {},
    $u = function (a, b) {},
    av = function (a, b) {},
    bv = function (a, b) {},
    cv = function () {
      var a = {};
      return a;
    },
    Ru = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    dv = function () {},
    ev = function (a, b) {},
    fv = function (a, b, c) {},
    gv = function () {};
  var hv = function (a, b) {
    var c = D,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var iv = function (a, b, c) {
    var d = Em(a, "fmt");
    if (b) {
      var e = Em(a, "random"),
        f = Em(a, "label") || "";
      if (!e) return !1;
      var g = dt(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!hv(g, b)) return !1;
    }
    d && 4 != d && (a = Gm(a, "rfmt", d));
    var h = Gm(a, "fmt", 4);
    Lc(
      h,
      function () {
        D.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((D.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      G.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var jv = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          h;
        for (h in d)
          "google_business_vertical" !== h &&
            (h in g || (g[h] = []), g[h].push(d[h]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    lv = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = kv(d)),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e)
          );
        }
      }
      return b;
    },
    mv = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d &&
          b.push({
            item_id: kv(d),
            quantity: d.quantity,
            value: d.price,
            start_date: d.start_date,
            end_date: d.end_date,
          });
      }
      return b;
    },
    kv = function (a) {
      null != a.id && null != a.item_id && M(138);
      var b = a.id;
      T(15) &&
        (null != a.item_id ? (b = a.item_id) : null == b && (b = a.item_name));
      return b;
    },
    ov = function (a) {
      if (!a) return "";
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = [];
        d &&
          (e.push(nv(d.value)),
          e.push(nv(d.quantity)),
          e.push(nv(d.item_id)),
          e.push(nv(d.start_date)),
          e.push(nv(d.end_date)),
          b.push("(" + e.join("*") + ")"));
      }
      return 0 < b.length ? b.join("") : "";
    },
    nv = function (a) {
      return "number" !== typeof a && "string" !== typeof a ? "" : a.toString();
    },
    qv = function (a, b) {
      var c = pv(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    pv = function (a) {
      if (!a || "object" !== typeof a || "function" === typeof a.join)
        return "";
      var b = [];
      z(a, function (c, d) {
        var e, f;
        if (Array.isArray(d)) {
          for (var g = [], h = 0; h < d.length; ++h) {
            var m = rv(d[h]);
            void 0 != m && g.push(m);
          }
          f = 0 !== g.length ? g.join(",") : void 0;
        } else f = rv(d);
        e = f;
        var n = rv(c);
        n && void 0 != e && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    rv = function (a) {
      var b = typeof a;
      if (null != a && "object" !== b && "function" !== b)
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    sv = function (a, b) {
      var c = [],
        d = function (f, g) {
          var h = !0 === og[f];
          null == g ||
            (!h && "" === g) ||
            (!0 === g && (g = 1),
            !1 === g && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      ("conversion" !== e && "remarketing" !== e) ||
        d("random", a.metadata.event_start_timestamp_ms);
      z(b, d);
      return c.join("&");
    },
    tv = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.m[Q.g.Sc],
        e = W(T(41) ? [Q.g.M, Q.g.O] : [Q.g.M]),
        f = [],
        g,
        h = a.o.onSuccess,
        m,
        n = Jn() ? 2 : 3,
        p = 0,
        q = function (x) {
          f.push(x);
          x.Ga && p++;
        };
      switch (c) {
        case "conversion":
          m = "/pagead/conversion";
          var r = "";
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com"), (m = "/pagead/1p-conversion"))
              : (g = "https://www.googleadservices.com")
            : (g = "https://pagead2.googlesyndication.com");
          a.metadata.is_gcp_conversion &&
            (r = "&gcp=1&sscte=1&ct_cookie_present=1");
          var t = {
            Ea: "" + Kj(g, !0) + m + "/" + d + "/?" + sv(a, b) + r,
            format: n,
            Ga: !0,
          };
          if (!T(41) || W(Q.g.O)) t.attributes = { attributionsrc: "" };
          q(t);
          a.metadata.send_ccm_parallel_ping &&
            q({
              Ea: "" + Kj(g, !0) + "/ccm/conversion/" + d + "/?" + sv(a, b) + r,
              format: 2,
              Ga: !0,
            });
          a.metadata.is_gcp_conversion &&
            ((r = "&gcp=1&ct_cookie_present=1"),
            q({
              Ea:
                "" +
                Kj(e ? "https://googleads.g.doubleclick.net" : g) +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                sv(a, b) +
                r,
              format: n,
              Ga: !0,
            }));
          break;
        case "remarketing":
          var u = b.data || "",
            v = jv(lv(a.m[Q.g.da]));
          if (v.length) {
            for (var w = 0; w < v.length; w++)
              (b.data = qv(u, v[w])),
                q({
                  Ea:
                    "" +
                    Kj("https://googleads.g.doubleclick.net") +
                    "/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    sv(a, b),
                  format: n,
                  Ga: !0,
                }),
                a.metadata.send_fledge_experiment &&
                  q({
                    Ea: "" + vt() + "/td/rul/" + d + "?" + sv(a, b),
                    format: 4,
                    Ga: !1,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            q({
              Ea:
                "" +
                Kj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                sv(a, b),
              format: n,
              Ga: !0,
            });
          break;
        case "user_data_lead":
          q({
            Ea:
              "" +
              Kj("https://google.com") +
              "/pagead/form-data/" +
              d +
              "?" +
              sv(a, b),
            format: 1,
            Ga: !0,
          });
          break;
        case "user_data_web":
          q({
            Ea:
              "" +
              Kj("https://google.com") +
              "/ccm/form-data/" +
              d +
              "?" +
              sv(a, b),
            format: 1,
            Ga: !0,
          });
      }
      1 < f.length && nb(a.o.onSuccess) && (h = Jb(a.o.onSuccess, p));
      Jn() ||
        ("conversion" !== c && "remarketing" !== c) ||
        !a.metadata.send_fledge_experiment ||
        (T(23) && "conversion" === c && (b.ct_cookie_present = 0),
        q({
          Ea: "" + vt() + "/td/rul/" + d + "?" + sv(a, b),
          format: 4,
          Ga: !1,
        }));
      return { onSuccess: h, zl: f };
    },
    uv = function (a, b, c, d, e, f) {
      $u(c.o.eventId, c.eventName);
      var g = function () {
        e && e();
      };
      switch (b) {
        case 1:
          Vc(a);
          e && e();
          break;
        case 2:
          Oc(a, g, void 0, f);
          break;
        case 3:
          var h = !1;
          try {
            h = iv(a, g, f);
          } catch (p) {
            h = !1;
          }
          h || uv(a, 2, c, d, g, f);
          break;
        case 4:
          var m = "AW-" + c.m[Q.g.Sc],
            n = c.m[Q.g.kb];
          n && (m = m + "/" + n);
          tt(a, m);
      }
    },
    vv = {},
    wv =
      ((vv[Q.g.ic] = "gcu"),
      (vv[Q.g.hb] = "gclgb"),
      (vv[Q.g.Pa] = "gclaw"),
      (vv[Q.g.Cb] = "auid"),
      (vv[Q.g.Gd] = "dscnt"),
      (vv[Q.g.Hd] = "fcntr"),
      (vv[Q.g.Id] = "flng"),
      (vv[Q.g.Jd] = "mid"),
      (vv[Q.g.dg] = "bttype"),
      (vv[Q.g.kb] = "label"),
      (vv[Q.g.Pb] = "capi"),
      (vv[Q.g.Ve] = "pscdl"),
      (vv[Q.g.ya] = "currency_code"),
      (vv[Q.g.Kd] = "vdltv"),
      (vv[Q.g.ri] = "_dbg"),
      (vv[Q.g.Qd] = "oedeld"),
      (vv[Q.g.lb] = "edid"),
      (vv[Q.g.xi] = "fdr"),
      (vv[Q.g.jg] = "fledge"),
      (vv[Q.g.Ud] = "gac"),
      (vv[Q.g.vc] = "gacgb"),
      (vv[Q.g.og] = "gacmcov"),
      (vv[Q.g.wc] = "gdpr"),
      (vv[Q.g.pb] = "gdid"),
      (vv[Q.g.sg] = "gsaexp"),
      (vv[Q.g.Wd] = "frm"),
      (vv[Q.g.Xd] = "gtm_up"),
      (vv[Q.g.bd] = "lps"),
      (vv[Q.g.Yd] = "did"),
      (vv[Q.g.dd] = void 0),
      (vv[Q.g.Fb] = "tiba"),
      (vv[Q.g.Ub] = "rdp"),
      (vv[Q.g.rb] = "ecsid"),
      (vv[Q.g.jd] = "delopc"),
      (vv[Q.g.xc] = "gdpr_consent"),
      (vv[Q.g.za] = "oid"),
      (vv[Q.g.kf] = "uaa"),
      (vv[Q.g.lf] = "uab"),
      (vv[Q.g.nf] = "uafvl"),
      (vv[Q.g.pf] = "uamb"),
      (vv[Q.g.qf] = "uam"),
      (vv[Q.g.rf] = "uap"),
      (vv[Q.g.tf] = "uapv"),
      (vv[Q.g.uf] = "uaw"),
      (vv[Q.g.Dg] = "ec_lat"),
      (vv[Q.g.Eg] = "ec_meta"),
      (vv[Q.g.Fg] = "ec_m"),
      (vv[Q.g.Gg] = "ec_sel"),
      (vv[Q.g.Hg] = "ec_s"),
      (vv[Q.g.kd] = "ec_mode"),
      (vv[Q.g.Na] = "userId"),
      (vv[Q.g.de] = "us_privacy"),
      (vv[Q.g.ma] = "value"),
      (vv[Q.g.Ig] = "mcov"),
      (vv[Q.g.Ri] = "hn"),
      (vv[Q.g.Si] = "gtm_ee"),
      (vv[Q.g.Jb] = "npa"),
      (vv[Q.g.Sc] = null),
      (vv[Q.g.Gb] = null),
      (vv[Q.g.Ma] = null),
      (vv[Q.g.da] = null),
      (vv[Q.g.wa] = null),
      (vv[Q.g.Ba] = null),
      (vv[Q.g.hf] = null),
      vv),
    yv = function (a) {
      "page_view" === a.metadata.hit_type
        ? nu(a)
        : xv(a, function (b, c) {
            for (
              var d = tv(a, b), e = d.onSuccess, f = d.zl, g = {}, h = 0;
              h < f.length;
              g = { Ea: void 0, eh: void 0, Ga: void 0, Pg: void 0 }, h++
            ) {
              var m = f[h];
              g.Ea = m.Ea;
              g.eh = m.format;
              g.Ga = m.Ga;
              g.Pg = m.attributes;
              if (c && c.rj) {
                var n = c.rj;
                Vs(
                  g.Ea + "&em=" + n.Lf,
                  { userData: n.X },
                  g.Ga && e ? e : function () {},
                  (function (p) {
                    return function (q) {
                      Zh(c.Ol, function (r) {
                        var t = bi(r),
                          u = p.Ea;
                        q && (u = p.Ea.replace("_is_sw=0", q));
                        uv(
                          u + "&em=" + encodeURIComponent(t.Lf),
                          p.eh,
                          a,
                          b,
                          p.Ga ? e : void 0,
                          p.Pg
                        );
                      });
                    };
                  })(g)
                );
              } else uv(g.Ea, g.eh, a, b, g.Ga ? e : void 0, g.Pg);
            }
          });
    },
    xv = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f,
        g = [],
        h = a.metadata.event_start_timestamp_ms;
      if ("conversion" === c || "remarketing" === c)
        (d.cv = "11"),
          (d.fst = h),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1");
      var m = Pp(["aw", "dc"]);
      null != m && (d.gad_source = m);
      d.gtm = Ln(a.metadata.source_canonical_id);
      "remarketing" !== c && zn() && (d.gcs = An());
      d.gcd = En(a.o);
      Hn() && (d.dma_cps = Fn());
      d.dma = Gn();
      cn(ln()) && (d.tcfd = In());
      Ni.m && (d.tag_exp = Ni.m);
      if (a.m[Q.g.Gb]) {
        var n = a.m[Q.g.Gb].split("x");
        2 === n.length && ((d.u_w = n[0]), (d.u_h = n[1]));
      }
      if (a.m[Q.g.Ma]) {
        var p = a.m[Q.g.Ma];
        2 === p.length
          ? (d.hl = p)
          : 5 === p.length &&
            ((d.hl = p.substring(0, 2)), (d.gl = p.substring(3, 5)));
      }
      var q = a.metadata.redact_click_ids,
        r = function (C, H) {
          var N = a.m[H];
          N && (d[C] = q ? Dj(N) : N);
        };
      r("url", Q.g.wa);
      r("ref", Q.g.Ba);
      r("top", Q.g.hf);
      z(a.m, function (C, H) {
        if (wv.hasOwnProperty(C)) {
          var N = wv[C];
          N && (d[N] = H);
        } else e[C] = H;
      });
      var t = a.m[Q.g.dd];
      void 0 != t && "" !== t && (d.vdnc = String(t));
      var u = a.m[Q.g.Wc];
      void 0 !== u && (d.shf = u);
      var v = a.m[Q.g.sc];
      void 0 !== v && (d.delc = v);
      if (T(19) && a.metadata.add_tag_timing) {
        d.tft = zb();
        var w = ad();
        void 0 !== w && (d.tfd = Math.round(w));
      }
      d.data = pv(e);
      var x = a.m[Q.g.da];
      x && "conversion" === c && ((d.iedeld = Xq(x)), (d.item = ov(mv(x))));
      if (
        ("conversion" === c ||
          "user_data_lead" === c ||
          "user_data_web" === c) &&
        a.metadata.user_data
      )
        if ((T(41) && !W(Q.g.O)) || (T(14) && !W(Q.g.M)))
          T(41) && (d.ec_mode = void 0);
        else {
          var y = function () {
            if ("user_data_web" === c) {
              var C;
              var H = a.metadata.cookie_options;
              H = H || {};
              var N;
              if (W(sr)) {
                (N = tr(H)) || (N = go());
                var O = H,
                  U = No(O.prefix);
                Po(O, N);
                delete Lo[U];
                delete Mo[U];
                Oo(U, O.path, O.domain);
                C = tr(H);
              } else C = void 0;
              d.ecsid = C;
            }
          };
          if (Ys(a.o)) {
            d._is_sw = "0";
            var B = $h(a.metadata.user_data),
              A = Xs(B);
            f = { rj: A, Ol: B };
            var E = A.X;
            E && 0 < Object.keys(E).length && y();
          } else {
            var F = di(a.metadata.user_data);
            F &&
              g.push(
                F.then(function (C) {
                  d.em = C.yj;
                  0 < C.Ah && y();
                })
              );
          }
        }
      if (g.length)
        try {
          Promise.all(g).then(function () {
            b(d);
          });
          return;
        } catch (C) {}
      b(d, f);
    };
  function zv(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var Bv = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      Av().addRestriction(0, a, b, c);
    },
    Cv = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      Av().addRestriction(1, a, b, c);
    },
    Zv = function () {
      var a = Zj();
      return Av().getRestrictions(1, a);
    },
    ew = function () {
      this.m = {};
      this.D = {};
    },
    fw = function (a, b) {
      var c = a.m[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.m[b] = c));
      return c;
    };
  ew.prototype.addRestriction = function (a, b, c, d) {
    d = void 0 === d ? !1 : d;
    if (!d || !this.D[b]) {
      var e = fw(this, b);
      0 === a
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : 1 === a &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  ew.prototype.getRestrictions = function (a, b) {
    var c = fw(this, b);
    if (0 === a) {
      var d, e;
      return [].concat(
        oa(
          (null == c
            ? void 0
            : null == (d = c._entity)
            ? void 0
            : d.internal) || []
        ),
        oa(
          (null == c
            ? void 0
            : null == (e = c._entity)
            ? void 0
            : e.external) || []
        )
      );
    }
    if (1 === a) {
      var f, g;
      return [].concat(
        oa(
          (null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) ||
            []
        ),
        oa(
          (null == c ? void 0 : null == (g = c._event) ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  ew.prototype.getExternalRestrictions = function (a, b) {
    var c = fw(this, b),
      d,
      e;
    return 0 === a
      ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) ||
          []
      : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) ||
          [];
  };
  ew.prototype.removeExternalRestrictions = function (a) {
    var b = fw(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.D[a] = !0;
  };
  function Av() {
    var a = vi.r;
    a || ((a = new ew()), (vi.r = a));
    return a;
  }
  var gw = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    hw = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    iw = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    jw =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    lw = function (a) {
      var b = Ui("gtm.allowlist") || Ui("gtm.whitelist");
      b && M(9);
      Ai && (b = ["google", "gtagfl", "lcl", "zone"]);
      gw.test(D.location && D.location.hostname) &&
        (Ai
          ? M(116)
          : (M(117),
            kw &&
              ((b = []),
              window.console &&
                window.console.log &&
                window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Db(wb(b), hw),
        d = Ui("gtm.blocklist") || Ui("gtm.blacklist");
      d || ((d = Ui("tagTypeBlacklist")) && M(3));
      d ? M(8) : (d = []);
      gw.test(D.location && D.location.hostname) &&
        ((d = wb(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= wb(d).indexOf("google") && M(2);
      var e = d && Db(wb(d), iw),
        f = {};
      return function (g) {
        var h = g && g[Te.na];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var m = Ki[h] || [],
          n = T(10) ? !0 : a(h, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(h))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      M(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var t = 0 <= e.indexOf(h);
          if (t) r = t;
          else {
            var u = sb(e, m || []);
            u && M(10);
            r = u;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = sb(e, jw));
        return (f[h] = v);
      };
    },
    kw = !1;
  kw = !0;
  var mw = function () {
    Rj &&
      Bv(Zj(), function (a) {
        var b = Df(a.entityId),
          c;
        if (If(b)) {
          var d = b[Te.na];
          if (!d) throw "Error: No function name given for function call.";
          var e = vf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!zv(b[Te.na], 4);
        return c;
      });
  };
  var ow = function (a, b, c, d, e) {
      if (!nw()) {
        var f = d.siloed ? Tj(a) : a;
        if (!ik(f)) {
          var g = "?id=" + encodeURIComponent(a) + "&l=" + ui.Ta,
            h = 0 === a.indexOf("GTM-");
          h || (g += "&cx=c");
          T(57) && (g += "&gtm=" + Ln());
          var m = Ij();
          m && (g += "&sign=" + ui.Bf);
          var n = c ? "/gtag/js" : "/gtm.js",
            p = Hj() ? Gj(b, n + g) : void 0;
          if (!p) {
            var q = ui.Dd + n;
            m && Fc && h
              ? ((q = Fc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (p = br("https://", "http://", q + g)))
              : (p = Ni.D ? Oi() + n + g : br("https://", "http://", q + g));
          }
          d.siloed && kk({ ctid: f, isDestination: !1 });
          var r = bk();
          Nj().container[f] = { state: 1, context: d, parent: r };
          Oj({ ctid: f, isDestination: !1 }, e);
          Lc(p);
        }
      }
    },
    pw = function (a, b, c, d) {
      if (!nw()) {
        var e = c.siloed ? Tj(a) : a;
        if (!jk(e))
          if (!c.siloed && lk())
            (Nj().destination[e] = {
              state: 0,
              transportUrl: b,
              context: c,
              parent: bk(),
            }),
              Oj({ ctid: e, isDestination: !0 }, d),
              M(91);
          else {
            var f =
              "/gtag/destination?id=" +
              encodeURIComponent(a) +
              "&l=" +
              ui.Ta +
              "&cx=c";
            T(57) && (f += "&gtm=" + Ln());
            Ij() && (f += "&sign=" + ui.Bf);
            var g = Hj() ? Gj(b, f) : void 0;
            g || (g = Ni.D ? Oi() + f : br("https://", "http://", ui.Dd + f));
            c.siloed && kk({ ctid: e, isDestination: !0 });
            Nj().destination[e] = { state: 1, context: c, parent: bk() };
            Oj({ ctid: e, isDestination: !0 }, d);
            Lc(g);
          }
      }
    };
  function nw() {
    if (Jn()) {
      return !0;
    }
    return !1;
  }
  var qw = !1,
    rw = 0,
    sw = [];
  function tw(a) {
    if (!qw) {
      var b = G.createEventObject,
        c = "complete" == G.readyState,
        d = "interactive" == G.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        qw = !0;
        for (var e = 0; e < sw.length; e++) I(sw[e]);
      }
      sw.push = function () {
        for (var f = 0; f < arguments.length; f++) I(arguments[f]);
        return 0;
      };
    }
  }
  function uw() {
    if (!qw && 140 > rw) {
      rw++;
      try {
        G.documentElement.doScroll("left"), tw();
      } catch (a) {
        D.setTimeout(uw, 50);
      }
    }
  }
  var vw = function (a) {
    qw ? a() : sw.push(a);
  };
  var xw = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Yj(),
    };
  };
  var zw = function (a, b) {
      this.m = !1;
      this.J = [];
      this.P = { tags: [] };
      this.Z = !1;
      this.D = this.F = 0;
      yw(this, a, b);
    },
    Aw = function (a, b, c, d) {
      if (xi.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Va(d) && (e = k(d, e));
      e.id = c;
      e.status = "timeout";
      return a.P.tags.push(e) - 1;
    },
    Bw = function (a, b, c, d) {
      var e = a.P.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Cw = function (a) {
      if (!a.m) {
        for (var b = a.J, c = 0; c < b.length; c++) b[c]();
        a.m = !0;
        a.J.length = 0;
      }
    },
    yw = function (a, b, c) {
      void 0 !== b && a.Df(b);
      c &&
        D.setTimeout(function () {
          return Cw(a);
        }, Number(c));
    };
  zw.prototype.Df = function (a) {
    var b = this,
      c = Bb(function () {
        return I(function () {
          a(Yj(), b.P);
        });
      });
    this.m ? c() : this.J.push(c);
  };
  var Dw = function (a) {
      a.F++;
      return Bb(function () {
        a.D++;
        a.Z && a.D >= a.F && Cw(a);
      });
    },
    Ew = function (a) {
      a.Z = !0;
      a.D >= a.F && Cw(a);
    };
  var Fw = {},
    Hw = function () {
      return D[Gw()];
    };
  var Iw = function (a) {
      D.GoogleAnalyticsObject || (D.GoogleAnalyticsObject = a || "ga");
      var b = D.GoogleAnalyticsObject;
      if (D[b]) D.hasOwnProperty(b);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(yb());
        D[b] = c;
      }
      return D[b];
    },
    Jw = function (a) {
      if (hl()) {
        var b = Hw();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Gw() {
    return D.GoogleAnalyticsObject || "ga";
  }
  var Kw = function () {
      var a = Yj();
    },
    Lw = function (a, b) {
      return function () {
        var c = Hw(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Qw = ["es", "1"],
    Rw = {},
    Sw = {};
  function Tw(a, b) {
    if (vk) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Rw[a] = [
        ["e", c],
        ["eid", a],
      ];
      Fk(a);
    }
  }
  function Uw(a) {
    var b = a.eventId,
      c = a.Ab;
    if (!Rw[b]) return [];
    var d = [];
    Sw[b] || d.push(Qw);
    d.push.apply(d, oa(Rw[b]));
    c && (Sw[b] = !0);
    return d;
  }
  var Vw = {},
    Ww = {},
    Xw = {};
  function Yw(a, b, c, d) {
    vk &&
      T(67) &&
      ((void 0 === d ? 0 : d)
        ? ((Xw[b] = Xw[b] || 0), ++Xw[b])
        : void 0 !== c
        ? ((Ww[a] = Ww[a] || {}), (Ww[a][b] = Math.round(c)))
        : ((Vw[a] = Vw[a] || {}), (Vw[a][b] = (Vw[a][b] || 0) + 1)));
  }
  function Zw(a) {
    var b = a.eventId,
      c = a.Ab,
      d = Vw[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Vw[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function $w(a) {
    var b = a.eventId,
      c = a.Ab,
      d = Ww[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Ww[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function ax() {
    for (
      var a = [], b = la(Object.keys(Xw)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + Xw[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var bx = {},
    cx = {};
  function dx(a, b, c) {
    if (vk && b) {
      var d = Lj(b);
      bx[a] = bx[a] || [];
      bx[a].push(c + d);
      var e = (If(b) ? "1" : "2") + d;
      cx[a] = cx[a] || [];
      cx[a].push(e);
      Fk(a);
    }
  }
  function ex(a) {
    var b = a.eventId,
      c = a.Ab,
      d = [],
      e = bx[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = cx[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete bx[b], delete cx[b]);
    return d;
  }
  function fx(a, b, c, d) {
    var e = tf[a],
      f = gx(a, b, c, d);
    if (!f) return null;
    var g = Ff(e[Te.bj], c, []);
    if (g && g.length) {
      var h = g[0];
      f = fx(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.sj ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function gx(a, b, c, d) {
    function e() {
      if (f[Te.uk]) h();
      else {
        var w = Gf(f, c, []),
          x = w[Te.Pj];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!W(x[y])) {
              h();
              return;
            }
        var B = Aw(c.Zb, String(f[Te.na]), Number(f[Te.me]), w[Te.vk]),
          A = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!A) {
            A = !0;
            var C = zb() - F;
            dx(c.id, tf[a], "5");
            Bw(c.Zb, B, "success", C);
            T(58) && fv(c, f, pu.K.fj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!A) {
            A = !0;
            var C = zb() - F;
            dx(c.id, tf[a], "6");
            Bw(c.Zb, B, "failure", C);
            T(58) && fv(c, f, pu.K.ej);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        dx(c.id, f, "1");
        var E = function () {
          lj(3);
          var C = zb() - F;
          dx(c.id, f, "7");
          Bw(c.Zb, B, "exception", C);
          T(58) && fv(c, f, pu.K.dj);
          A || ((A = !0), h());
        };
        T(58) && ev(c, f);
        var F = zb();
        try {
          Ef(w, { event: c, index: a, type: 1 });
        } catch (C) {
          E(C);
        }
        T(58) && fv(c, f, pu.K.gj);
      }
    }
    var f = tf[a],
      g = b.onSuccess,
      h = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = Ff(f[Te.ij], c, []);
    if (n && n.length) {
      var p = n[0],
        q = fx(p.index, { onSuccess: g, onFailure: h, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.sj ? m : q;
    }
    if (f[Te.Vi] || f[Te.xk]) {
      var r = f[Te.Vi] ? uf : c.qm,
        t = g,
        u = h;
      if (!r[a]) {
        e = Bb(e);
        var v = hx(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function hx(a, b, c) {
    var d = [],
      e = [];
    b[a] = ix(d, e, c);
    return {
      onSuccess: function () {
        b[a] = jx;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = kx;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function ix(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function jx(a) {
    a();
  }
  function kx(a, b) {
    b();
  }
  var mx = function (a, b) {
      return 1 === arguments.length ? lx("set", a) : lx("set", a, b);
    },
    nx = function (a, b) {
      return 1 === arguments.length ? lx("config", a) : lx("config", a, b);
    },
    ox = function (a, b, c) {
      c = c || {};
      c[Q.g.Vb] = a;
      return lx("event", b, c);
    };
  function lx(a) {
    return arguments;
  }
  var px = function () {
    this.m = [];
    this.D = [];
  };
  px.prototype.enqueue = function (a, b, c) {
    var d = this.m.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.m.push(f);
    for (var g = 0; g < this.D.length; g++)
      try {
        this.D[g](f);
      } catch (h) {}
  };
  px.prototype.listen = function (a) {
    this.D.push(a);
  };
  px.prototype.get = function () {
    for (var a = {}, b = 0; b < this.m.length; b++) {
      var c = this.m[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  px.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.m.length; d++) {
      var e = this.m[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.m = c;
    return b;
  };
  var rx = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = Xf.canonicalContainerId;
      qx().enqueue(a, b, c);
    },
    tx = function () {
      var a = sx;
      qx().listen(a);
    };
  function qx() {
    var a = vi.mb;
    a || ((a = new px()), (vi.mb = a));
    return a;
  }
  var vx = function () {
      var a = vi.zones;
      a || (a = vi.zones = new ux());
      return a;
    },
    wx = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    xx = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    ux = function () {
      this.m = {};
      this.D = {};
      this.F = 0;
    };
  aa = ux.prototype;
  aa.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.m[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.yh], b)) return !1;
    for (var e = 0; e < c.Pe.length; e++) if (this.D[c.Pe[e]].rd(b)) return !0;
    return !1;
  };
  aa.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.m[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Pe.length; f++) {
      var g = this.D[c.Pe[f]];
      g.rd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var h = this.getIsAllowedFn([c.yh], b);
    return function (m, n) {
      n = n || [];
      if (!h(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].F(m, n)) return !0;
      return !1;
    };
  };
  aa.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.m[a[b]];
  };
  aa.createZone = function (a, b) {
    var c = String(++this.F);
    this.D[c] = new yx(a, b);
    return c;
  };
  aa.updateZone = function (a, b, c) {
    var d = this.D[a];
    d && d.J(b, c);
  };
  aa.registerChild = function (a, b, c) {
    var d = this.m[a];
    if ((!d && vi[a]) || (!d && ik(a)) || (d && d.yh !== b)) return !1;
    if (d) return d.Pe.push(c), !1;
    this.m[a] = { yh: b, Pe: [c] };
    return !0;
  };
  var yx = function (a, b) {
    this.m = [{ eventId: a, rd: !0 }];
    this.D = null;
    if (b) {
      this.D = {};
      for (var c = 0; c < b.length; c++) this.D[b[c]] = !0;
    }
  };
  yx.prototype.J = function (a, b) {
    var c = this.m[this.m.length - 1];
    a <= c.eventId || (c.rd !== b && this.m.push({ eventId: a, rd: b }));
  };
  yx.prototype.rd = function (a) {
    for (var b = this.m.length - 1; 0 <= b; b--)
      if (this.m[b].eventId <= a) return this.m[b].rd;
    return !1;
  };
  yx.prototype.F = function (a, b) {
    b = b || [];
    if (!this.D || wx[a] || this.D[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.D[b[c]]) return !0;
    return !1;
  };
  var zx = function (a, b, c, d, e, f) {
      var g = vx();
      c = c && Db(c, xx);
      for (var h = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, Yj(), h)) {
          var p = n,
            q = a,
            r = d,
            t = e,
            u = f;
          if (0 === p.indexOf("GTM-"))
            ow(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var v = lx("js", yb());
            ow(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: t, inheritParentConfig: u };
            T(85) || rx(v, q, w);
            rx(nx(p, r), q, w);
          }
        }
      }
      return h;
    },
    Ax = function (a, b, c) {
      vx().updateZone(a, b, c);
    };
  var Bx = function (a) {
      var b = vi.zones;
      return b
        ? b.getIsAllowedFn(Uj(), a)
        : function () {
            return !0;
          };
    },
    Cx = function () {
      Cv(Zj(), function (a) {
        var b = a.originalEventData["gtm.uniqueEventId"],
          c = vi.zones;
        return c ? c.isActive(Uj(), b) : !0;
      });
      Bv(Zj(), function (a) {
        var b = a.entityId,
          c = a.securityGroups;
        return Bx(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
      });
    };
  var Fx = function (a, b) {
    for (var c = [], d = 0; d < tf.length; d++)
      if (a[d]) {
        var e = tf[d];
        var f = Dw(b.Zb);
        try {
          var g = fx(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = e[Te.na];
            if (!h) throw "Error: No function name given for function call.";
            var m = vf[h];
            c.push({
              Jj: d,
              Cj: (m ? m.priorityOverride || 0 : 0) || zv(e[Te.na], 1) || 0,
              execute: g,
            });
          } else Dx(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(Ex);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Ex(a, b) {
    var c,
      d = b.Cj,
      e = a.Cj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Jj,
        h = b.Jj;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function Dx(a, b) {
    if (vk) {
      var c = function (d) {
        var e = b.isBlocked(tf[d]) ? "3" : "4",
          f = Ff(tf[d][Te.bj], b, []);
        f && f.length && c(f[0].index);
        dx(b.id, tf[d], e);
        var g = Ff(tf[d][Te.ij], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Ix = !1,
    Gx;
  var Ox = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (T(58)) {
    }
    if ("gtm.js" === d) {
      if (Ix) return !1;
      Ix = !0;
    }
    var e,
      f = !1,
      g = Zv(),
      h = k(a);
    if (
      g.every(function (u) {
        return u({ originalEventData: h });
      })
    )
      e = Bx(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      f = !0;
      e = Bx(Number.MAX_SAFE_INTEGER);
    }
    Tw(b, d);
    var m = a.eventCallback,
      n = a.eventTimeout,
      p = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Kx(e, h, f),
        qm: [],
        logMacroError: function () {
          M(6);
          lj(0);
        },
        cachedModelValues: Lx(),
        Zb: new zw(function () {
          if (T(58)) {
          }
          m && m.apply(m, [].slice.call(arguments, 0));
        }, n),
        originalEventData: h,
      };
    T(67) && vk && (p.reportMacroDiscrepancy = Yw);
    T(58) && av(p.id, p.name);
    var q = Qf(p);
    T(58) && bv(p.id, p.name);
    f && (q = Mx(q));
    if (T(58)) {
    }
    var r = Fx(q, p),
      t = !1;
    Ew(p.Zb);
    ("gtm.js" !== d && "gtm.sync" !== d) || Kw();
    return Nx(q, r) || t;
  };
  function Lx() {
    var a = {};
    a.event = Zi("event", 1);
    a.ecommerce = Zi("ecommerce", 1);
    a.gtm = Zi("gtm");
    a.eventModel = Zi("eventModel");
    return a;
  }
  function Kx(a, b, c) {
    var d = lw(a);
    return function (e) {
      if (d(e)) return !0;
      var f = e && e[Te.na];
      if (!f || "string" != typeof f) return !0;
      f = f.replace(/^_*/, "");
      var g,
        h = Zj();
      g = Av().getRestrictions(0, h);
      var m = b;
      c && ((m = k(b)), (m["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (
        var n = Ki[f] || [], p = la(g), q = p.next();
        !q.done;
        q = p.next()
      ) {
        var r = q.value;
        try {
          if (!r({ entityId: f, securityGroups: n, originalEventData: m }))
            return !0;
        } catch (t) {
          return !0;
        }
      }
      return !1;
    };
  }
  function Mx(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(tf[c][Te.na]);
        if (wi[d] || void 0 !== tf[c][Te.yk] || zv(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Nx(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && tf[c] && !xi[String(tf[c][Te.na])]) return !0;
    return !1;
  }
  var Tf;
  var Px = {},
    Qx = {},
    Rx = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { zh: void 0, hh: void 0 }, f++
      ) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (((e.zh = Dl(g, b)), e.zh)) {
            var h = Wj();
            pb(
              h,
              (function (r) {
                return function (t) {
                  return r.zh.ia === t;
                };
              })(e)
            )
              ? c.push(g)
              : d.push(g);
          }
        } else {
          var m = Px[g] || [];
          e.hh = {};
          m.forEach(
            (function (r) {
              return function (t) {
                return (r.hh[t] = !0);
              };
            })(e)
          );
          for (var n = Uj(), p = 0; p < n.length; p++)
            if (e.hh[n[p]]) {
              c = c.concat(Wj());
              break;
            }
          var q = Qx[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { Jl: c, Nl: d };
    },
    Sx = function (a) {
      z(Px, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Tx = function (a) {
      z(Qx, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Ux = "HA GF G UA AW DC MC".split(" "),
    Vx = !1,
    Wx = !1,
    Xx = !1,
    Yx = !1;
  function Zx(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Li() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var $x = void 0,
    ay = void 0;
  function by(a, b, c) {
    var d = k(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && M(136);
    var e = k(b);
    k(c, e);
    rx(nx(Uj()[0], e), a.eventId, d);
  }
  function cy(a) {
    for (var b = la([Q.g.gd, Q.g.Hb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || km.F[d];
      if (e) return e;
    }
  }
  var dy = [
      Q.g.gd,
      Q.g.Hb,
      Q.g.uc,
      Q.g.jb,
      Q.g.rb,
      Q.g.Na,
      Q.g.sa,
      Q.g.La,
      Q.g.Qa,
      Q.g.Qb,
    ],
    ey = {
      config: function (a, b) {
        var c = Zx(a, b);
        if (!(2 > a.length) && l(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Va(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = Dl(a[1], b.isGtmEvent);
          if (e) {
            var f, g, h;
            a: {
              if (!Qj.fe) {
                var m = ak(bk());
                if (nk(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  h = { Tl: ak(n), Il: p };
                  break a;
                }
              }
              h = void 0;
            }
            var q = h;
            q && ((f = q.Tl), (g = q.Il));
            Tw(c.eventId, "gtag.config");
            var r = e.ia,
              t = e.id !== r;
            if (t ? -1 === Wj().indexOf(r) : -1 === Uj().indexOf(r)) {
              if (!b.inheritParentConfig && !d[Q.g.Eb]) {
                var u = cy(d);
                if (t)
                  pw(r, u, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (void 0 !== f && -1 !== f.containers.indexOf(r)) {
                  var v = d;
                  $x ? by(b, v, $x) : ay || (ay = k(v));
                } else
                  ow(r, u, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (M(128), g && M(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                ay
                  ? (by(b, ay, x), (w = !1))
                  : ((!x[Q.g.Wb] && zi && $x) || ($x = k(x)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!Xx && ((Xx = !0), Wx))
                for (var B = la(dy), A = B.next(); !A.done; A = B.next())
                  if (y.hasOwnProperty(A.value)) {
                    Qk("erc");
                    break;
                  }
              if (zi && !t && !d[Q.g.Wb]) {
                var E = Yx;
                Yx = !0;
                if (E) return;
              }
              Vx || M(43);
              if (!b.noTargetGroup)
                if (t) {
                  Tx(e.id);
                  var F = e.id,
                    C = d[Q.g.Vd] || "default";
                  C = String(C).split(",");
                  for (var H = 0; H < C.length; H++) {
                    var N = Qx[C[H]] || [];
                    Qx[C[H]] = N;
                    0 > N.indexOf(F) && N.push(F);
                  }
                } else {
                  Sx(e.id);
                  var O = e.id,
                    U = d[Q.g.Vd] || "default";
                  U = U.toString().split(",");
                  for (var X = 0; X < U.length; X++) {
                    var P = Px[U[X]] || [];
                    Px[U[X]] = P;
                    0 > P.indexOf(O) && P.push(O);
                  }
                }
              delete d[Q.g.Vd];
              var S = b.eventMetadata || {};
              S.hasOwnProperty("is_external_event") ||
                (S.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = S;
              delete d[Q.g.Xc];
              for (var ma = t ? [e.id] : Wj(), ka = 0; ka < ma.length; ka++) {
                var da = d,
                  Ba = ma[ka],
                  Da = k(b),
                  ya = Dl(Ba, Da.isGtmEvent);
                ya && km.push("config", [da], ya, Da);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          M(39);
          var c = Zx(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[Q.g.O] && M(139), e[Q.g.xa] && M(140));
          "default" === d
            ? sl(e)
            : "update" === d
            ? tl(e, c)
            : "declare" === d && b.fromContainerExecution && rl(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && l(c)) {
          var d;
          if (2 < a.length) {
            if ((!Va(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = k(e)),
            e[Q.g.Xc] && (g.eventCallback = e[Q.g.Xc]),
            e[Q.g.Sd] && (g.eventTimeout = e[Q.g.Sd]));
          var h = Zx(a, b),
            m = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[Q.g.Vb];
          void 0 === r &&
            ((r = Ui(Q.g.Vb, 2)), void 0 === r && (r = "default"));
          if (l(r) || Array.isArray(r)) {
            var t;
            t = b.isGtmEvent
              ? l(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var u = Rx(t, b.isGtmEvent),
              v = u.Jl,
              w = u.Nl;
            if (w.length)
              for (var x = cy(q), y = 0; y < w.length; y++) {
                var B = Dl(w[y], b.isGtmEvent);
                B &&
                  pw(B.ia, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Fl(v, b.isGtmEvent);
          } else p = void 0;
          var A = p;
          if (A) {
            var E;
            !A.length ||
              (null == (E = b.eventMetadata) ? 0 : E.em_event) ||
              (Wx = !0);
            Tw(m, c);
            for (var F = [], C = 0; C < A.length; C++) {
              var H = A[C],
                N = k(b);
              if (-1 !== Ux.indexOf(ek(H.prefix))) {
                var O = k(d),
                  U = N.eventMetadata || {};
                U.hasOwnProperty("is_external_event") ||
                  (U.is_external_event = !N.fromContainerExecution);
                N.eventMetadata = U;
                delete O[Q.g.Xc];
                mm(c, O, H.id, N);
              }
              F.push(H.id);
            }
            g.eventModel = g.eventModel || {};
            0 < A.length
              ? (g.eventModel[Q.g.Vb] = F.join())
              : delete g.eventModel[Q.g.Vb];
            Vx || M(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[Q.g.Sb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        M(53);
        if (4 === a.length && l(a[1]) && l(a[2]) && nb(a[3])) {
          var c = Dl(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Vx || M(43);
            var f = cy();
            if (
              !pb(Wj(), function (h) {
                return c.ia === h;
              })
            )
              pw(c.ia, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Ux.indexOf(ek(c.prefix))) {
              Zx(a, b);
              var g = {};
              ml(k(((g[Q.g.ob] = d), (g[Q.g.Db] = e), g)));
              nm(
                d,
                function (h) {
                  I(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Vx = !0;
          var c = Zx(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && l(a[1]) && nb(a[2])) {
          if ((Uf(a[1], a[2]), M(74), "all" === a[1])) {
            M(75);
            var b = !1;
            try {
              b = a[2](Yj(), "unknown", {});
            } catch (c) {}
            b || M(76);
          }
        } else M(73);
      },
      set: function (a, b) {
        var c;
        2 == a.length && Va(a[1])
          ? (c = k(a[1]))
          : 3 == a.length &&
            l(a[1]) &&
            ((c = {}),
            Va(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = k(a[2]))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = Zx(a, b),
            e = d.eventId,
            f = d.priorityId;
          k(c);
          var g = k(c);
          km.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    fy = { policy: !0 };
  var hy = function (a) {
    if (gy(a)) return a;
    this.m = a;
  };
  hy.prototype.getUntrustedMessageValue = function () {
    return this.m;
  };
  var gy = function (a) {
    return !a || "object" !== Ta(a) || Va(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  hy.prototype.getUntrustedMessageValue = hy.prototype.getUntrustedMessageValue;
  var iy = !1,
    jy = [];
  function ky() {
    if (!iy) {
      iy = !0;
      for (var a = 0; a < jy.length; a++) I(jy[a]);
    }
  }
  var ly = function (a) {
    iy ? I(a) : jy.push(a);
  };
  var my = 0,
    ny = {},
    oy = [],
    py = [],
    qy = !1,
    ry = !1;
  function sy(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var ty = function (a) {
      return D[ui.Ta].push(a);
    },
    uy = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return ty(a);
    },
    vy = function (a, b) {
      if (!ob(b) || 0 > b) b = 0;
      var c = vi[ui.Ta],
        d = 0,
        e = !1,
        f = void 0;
      f = D.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (D.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function wy(a, b) {
    var c = a._clear || b.overwriteModelFields;
    z(a, function (e, f) {
      "_clear" !== e && (c && Xi(e), Xi(e, f));
    });
    Hi || (Hi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Li()), (a["gtm.uniqueEventId"] = d), Xi("gtm.uniqueEventId", d));
    return Ox(a);
  }
  function xy(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (tb(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function yy() {
    var a;
    if (py.length) a = py.shift();
    else if (oy.length) a = oy.shift();
    else return;
    var b;
    var c = a;
    if (qy || !xy(c.message)) b = c;
    else {
      qy = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Li());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      oy.unshift(h, c);
      if (vk) {
        var m = Xf.ctid;
        if (m) {
          var n,
            p = ak(bk());
          n = p && p.context;
          var q,
            r = Cj(D.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = Xf.canonicalContainerId,
            w = Qj.fe;
          vk &&
            (Jk || (Jk = q),
            Kk.push(
              m +
                ";" +
                v +
                ";" +
                (t ? 1 : 0) +
                ";" +
                (u || 0) +
                ";" +
                (w ? 1 : 0)
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function zy() {
    for (var a = !1, b; !ry && (b = yy()); ) {
      ry = !0;
      delete Ri.eventModel;
      Ti();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) ry = !1;
      else {
        e.fromContainerExecution && Yi();
        try {
          if (nb(d))
            try {
              d.call(Vi);
            } catch (v) {}
          else if (Array.isArray(d)) {
            var f = d;
            if (l(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                m = f.slice(1),
                n = Ui(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, m);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (tb(d))
              a: {
                if (d.length && l(d[0])) {
                  var q = ey[d[0]];
                  if (q && (!e.fromContainerExecution || !fy[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
            else p = d;
            p && (a = wy(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && Ti(!0);
          var r = d["gtm.uniqueEventId"];
          if ("number" === typeof r) {
            for (var t = ny[String(r)] || [], u = 0; u < t.length; u++)
              py.push(Ay(t[u]));
            t.length && py.sort(sy);
            delete ny[String(r)];
            r > my && (my = r);
          }
          ry = !1;
        }
      }
    }
    return !a;
  }
  function By() {
    if (T(58)) {
      var a = Cy();
    }
    var b = zy();
    if (T(58)) {
    }
    try {
      var c = Yj(),
        d = D[ui.Ta].hide;
      if (d && void 0 !== d[c] && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && !0 === d[f]) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function sx(a) {
    if (my < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      ny[b] = ny[b] || [];
      ny[b].push(a);
    } else
      py.push(Ay(a)),
        py.sort(sy),
        I(function () {
          ry || zy();
        });
  }
  function Ay(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Dy = function () {
      function a(f) {
        var g = {};
        if (gy(f)) {
          var h = f;
          f = gy(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Gc(ui.Ta, []),
        c = (vi[ui.Ta] = vi[ui.Ta] || {});
      !0 === c.pruned && M(83);
      ny = qx().get();
      tx();
      vw(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      ly(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < vi.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new hy(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        oy.push.apply(oy, h);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (M(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return zy() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      oy.push.apply(oy, e);
      if (Cy()) {
        if (T(58)) {
        }
        I(By);
      }
    },
    Cy = function () {
      var a = !0;
      return a;
    };
  function Ey(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = zb();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Fy(a) {
    return a && 0 === a.indexOf("pending:") ? Ey(a.substr(8)) : !1;
  }
  var $y = function () {};
  var az = function () {};
  az.prototype.toString = function () {
    return "undefined";
  };
  var bz = new az();
  var dz = function () {
      (vi.rm = vi.rm || {})[Zj()] = function (a) {
        if (cz.hasOwnProperty(a)) return cz[a];
      };
    },
    gz = function (a, b, c) {
      if (a instanceof ez) {
        var d = a,
          e = d.m,
          f = b,
          g = Li();
        fz[g] = [f, c];
        a = e.call(d, g);
        b = mb;
      }
      return { uj: a, onSuccess: b };
    },
    hz = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        M(a ? 134 : 135);
        var d = fz[c];
        if (d && "function" === typeof d[b]) d[b]();
        fz[c] = void 0;
      };
    },
    ez = function (a) {
      this.m = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === bz ? b : a[d]);
        return c.join("");
      };
    };
  ez.prototype.toString = function () {
    return this.m("undefined");
  };
  ez.prototype.valueOf = ez.prototype.toString;
  var cz = {},
    fz = {};
  function iz(a, b) {
    function c(g) {
      var h = Cj(g),
        m = yj(h, "protocol"),
        n = yj(h, "host", !0),
        p = yj(h, "port"),
        q = yj(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function jz(a) {
    return kz(a) ? 1 : 0;
  }
  function kz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = k(a, {});
        k({ arg1: c[d], any_of: void 0 }, e);
        if (jz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return zg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < vg.length; g++) {
                var h = vg[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return wg(b, c);
      case "_eq":
        return Ag(b, c);
      case "_ge":
        return Bg(b, c);
      case "_gt":
        return Dg(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Cg(b, c);
      case "_lt":
        return Eg(b, c);
      case "_re":
        return yg(b, c, a.ignore_case);
      case "_sw":
        return Fg(b, c);
      case "_um":
        return iz(b, c);
    }
    return !1;
  }
  function lz() {
    var a = [
      ["cv", "284"],
      ["rv", ui.Ng],
      [
        "tc",
        tf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    ui.je && a.push(["x", ui.je]);
    Ni.m && a.push(["tag_exp", Ni.m]);
    return a;
  }
  function mz() {
    var a = nj();
    return a.length ? [["exp_geo", a]] : [];
  }
  var nz;
  function oz() {
    try {
      null != nz || (nz = new Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (b) {}
    var a;
    return (null == (a = nz) ? 0 : a.length) ? [["exp_tz", nz]] : [];
  }
  function pz(a) {
    if (a.scriptSource) {
      var b;
      try {
        b = bd().getEntriesByType("resource");
      } catch (g) {}
      if (b) {
        for (var c = {}, d = 0; d < b.length; ++d) {
          var e = b[d],
            f = e.initiatorType;
          if ("script" === f && e.name === a.scriptSource)
            return { gm: d, hm: c };
          c[f] = 1 + (c[f] || 0);
        }
        M(146);
      } else M(145);
    }
  }
  function qz() {
    if (vk && T(70)) {
      var a = ck();
      if (!a) M(144);
      else if (a.canonicalContainerId) {
        var b = pz(a);
        if (b) {
          var c = !1;
          qk(function (d) {
            if (c) return [];
            d.Ab && (c = !0);
            d.Of();
            return [
              ["rtg", a.canonicalContainerId],
              ["rlo", b.gm],
              ["slo", b.hm.script || 0],
            ];
          });
        }
      }
    }
  }
  var rz = function () {
      return !1;
    },
    sz = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function tz() {
    var a = uz;
    return function (b, c, d) {
      var e = d && d.event;
      vz(c);
      var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
        g = new ab();
      z(c, function (r, t) {
        var u = qd(t, void 0, f);
        void 0 === u && void 0 !== t && M(44);
        g.set(r, u);
      });
      a.m.m.J = Nf();
      var h = {
        nj: ag(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        Df:
          void 0 !== e
            ? function (r) {
                return e.Zb.Df(r);
              }
            : void 0,
        bc: function () {
          return b;
        },
        log: function () {},
        Xk: { index: d && d.index, type: d && d.type, name: d && d.name },
        fm: !!zv(b, 3),
        originalEventData: null == e ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (h.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (rz()) {
        var m = sz(),
          n = void 0,
          p = void 0;
        h.cb = {
          Jh: [],
          ne: {},
          vb: function (r, t, u) {
            1 === t && (n = r);
            7 === t && (p = u);
            m(r, t, u);
          },
          th: th(),
        };
        h.log = function (r, t) {
          if (n) {
            var u = Array.prototype.slice.call(arguments, 1);
            m(n, 4, { level: r, source: p, message: u });
          }
        };
      }
      var q = Pe(a, h, [b, g]);
      a.m.m.J = void 0;
      q instanceof Ha && "return" === q.m && (q = q.D);
      return rd(q, void 0, f);
    };
  }
  function vz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    nb(b) &&
      (a.gtmOnSuccess = function () {
        I(b);
      });
    nb(c) &&
      (a.gtmOnFailure = function () {
        I(c);
      });
  }
  function wz(a, b) {
    var c = this;
  }
  wz.R = "addConsentListener";
  var xz;
  var yz = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (xz)
        try {
          a[b]();
        } catch (c) {
          M(77);
        }
      else a[b]();
  };
  function zz(a, b, c) {
    var d = this,
      e;
    return e;
  }
  zz.H = "internal.addDataLayerEventListener";
  function Az(a, b, c) {}
  Az.R = "addDocumentEventListener";
  function Bz(a, b, c, d) {}
  Bz.R = "addElementEventListener";
  function Cz(a) {
    return a.m.m;
  }
  function Dz(a) {}
  Dz.R = "addEventCallback";
  var Ez = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": $c(a, "className"),
        "gtm.elementId": a["for"] || Rc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || $c(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        $c(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    Fz = function (a) {
      vi.hasOwnProperty("autoEventsSettings") || (vi.autoEventsSettings = {});
      var b = vi.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Gz = function (a, b, c) {
      Fz(a)[b] = c;
    },
    Hz = function (a, b, c, d) {
      var e = Fz(a),
        f = Ab(e, b, d);
      e[b] = c(f);
    },
    Iz = function (a, b, c) {
      var d = Fz(a);
      return Ab(d, b, c);
    },
    Jz = function (a, b) {
      Iz(a, "init", !1) || (Gz(a, "init", !0), b());
    },
    Kz = function (a) {
      return "string" === typeof a ? a : String(Li());
    };
  var Lz = ["input", "select", "textarea"],
    Mz = ["button", "hidden", "image", "reset", "submit"],
    Nz = function (a) {
      var b = a.tagName.toLowerCase();
      return 0 > Lz.indexOf(b) ||
        ("input" === b && 0 <= Mz.indexOf(a.type.toLowerCase()))
        ? !1
        : !0;
    },
    Oz = function (a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : G.getElementById(a.form)
        : Uc(a, ["form"], 100);
    },
    Pz = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (Nz(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  function Tz(a) {}
  Tz.H = "internal.addFormAbandonmentListener";
  function Uz(a, b, c, d) {}
  Uz.H = "internal.addFormData";
  var Vz = {},
    Wz = [],
    Xz = {},
    Yz = 0,
    Zz = 0;
  function fA(a, b) {}
  fA.H = "internal.addFormInteractionListener";
  function mA(a, b) {}
  mA.H = "internal.addFormSubmitListener";
  function rA(a) {}
  rA.H = "internal.addGaSendListener";
  function sA(a) {
    if (!a) return {};
    var b = a.Xk;
    return xw(b.type, b.index, b.name);
  }
  function tA(a) {
    return a ? { originatingEntity: sA(a) } : {};
  }
  var uA = function (a, b) {
    this.tagId = a;
    this.pe = b;
  };
  function vA(a, b) {
    var c = this,
      d;
    var e = function (v) {
      Bv(
        v,
        function (w) {
          for (
            var x = Av().getExternalRestrictions(0, Zj()),
              y = la(x),
              B = y.next();
            !B.done;
            B = y.next()
          ) {
            var A = B.value;
            if (!A(w)) return !1;
          }
          return !0;
        },
        !0
      );
      Cv(
        v,
        function (w) {
          for (
            var x = Av().getExternalRestrictions(1, Zj()),
              y = la(x),
              B = y.next();
            !B.done;
            B = y.next()
          ) {
            var A = B.value;
            if (!A(w)) return !1;
          }
          return !0;
        },
        !0
      );
      h && h(new uA(a, v));
    };
    K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = rd(b, this.m, 1) || {},
      g = f.firstPartyUrl,
      h = f.onLoad,
      m = !0 === f.loadByDestination,
      n = !0 === f.isGtmEvent,
      p = !0 === f.siloed;
    yz([
      function () {
        return L(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (jk(a)) return;
    } else if (ik(a)) return;
    var q = 6,
      r = Cz(this);
    n && (q = 7);
    "__zone" === r.bc() && (q = 1);
    var t = { source: q, fromContainerExecution: !0, siloed: p };
    if (m) pw(a, g, t, e);
    else {
      var u = 0 === a.indexOf("GTM-");
      ow(a, g, !u, t, e);
    }
    h &&
      "__zone" === r.bc() &&
      zx(Number.MIN_SAFE_INTEGER, [a], null, {}, sA(Cz(this)));
    d = p ? Tj(a) : a;
    return d;
  }
  vA.H = "internal.loadGoogleTag";
  function wA(a) {
    return new id("", function (b) {
      var c = J(this, b);
      if (c instanceof id)
        return new id("", function () {
          var d = za.apply(0, arguments),
            e = this,
            f = k(Cz(this));
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return J(e, m);
            }),
            h = Ma(this.m);
          h.m = f;
          return c.ab.apply(c, [h].concat(oa(g)));
        });
    });
  }
  function xA(a, b, c) {
    var d = this;
  }
  xA.H = "internal.addGoogleTagRestriction";
  var yA = {},
    zA = [];
  var GA = function (a, b) {};
  GA.H = "internal.addHistoryChangeListener";
  function HA(a, b, c) {}
  HA.R = "addWindowEventListener";
  function IA(a, b) {
    return !0;
  }
  IA.R = "aliasInWindow";
  function JA(a, b, c) {}
  JA.H = "internal.appendRemoteConfigParameter";
  function KA() {
    var a = 2;
    return a;
  }
  function LA(a, b) {
    var c;
    K(this.getName(), ["path:!string"], [a]);
    L(this, "access_globals", "execute", a);
    for (
      var d = a.split("."), e = D, f = e[d[0]], g = 1;
      f && g < d.length;
      g++
    )
      if (((e = f), (f = f[d[g]]), e === D || e === G)) return;
    if ("function" !== Ta(f)) return;
    for (var h = KA(), m = [], n = 1; n < arguments.length; n++)
      m.push(rd(arguments[n], this.m, h));
    var p = (0, this.m.P)(f, e, m);
    c = qd(p, this.m, h);
    void 0 === c && void 0 !== p && M(45);
    return c;
  }
  LA.R = "callInWindow";
  function MA(a) {}
  MA.R = "callLater";
  function NA(a) {}
  NA.H = "callOnDomReady";
  function OA(a) {}
  OA.H = "callOnWindowLoad";
  function PA(a, b) {
    var c;
    return c;
  }
  PA.H = "internal.computeGtmParameter";
  function QA(a, b) {
    var c;
    K(this.getName(), ["key:!string", "dataLayerVersion:?number"], arguments),
      L(this, "read_data_layer", a),
      (c = 2 !== (b || 2) ? Ui(a, 1) : Wi(a, [D, G]));
    var d = qd(c, this.m, KA());
    void 0 === d && void 0 !== c && M(45);
    return d;
  }
  QA.R = "copyFromDataLayer";
  function RA(a) {
    var b = void 0;
    return b;
  }
  RA.H = "internal.copyFromDataLayerCache";
  function SA(a) {
    var b;
    K(this.getName(), ["path:!string"], arguments);
    L(this, "access_globals", "read", a);
    var c = a.split("."),
      d = Fb(c, [D, G]);
    if (!d) return;
    var e = d[c[c.length - 1]];
    b = qd(e, this.m, KA());
    void 0 === b && void 0 !== e && M(45);
    return b;
  }
  SA.R = "copyFromWindow";
  function TA(a) {
    var b = void 0;
    K(this.getName(), ["key:!string"], arguments);
    L(this, "unsafe_access_globals", a);
    var c = a.split(".");
    b = D[c.shift()];
    for (var d = 0; d < c.length; d++) b = b && b[c[d]];
    return qd(b, this.m, KA());
  }
  TA.H = "internal.copyKeyFromWindow";
  function UA(a, b) {
    var c;
    return c;
  }
  UA.H = "internal.copyPreHit";
  function VA(a, b) {
    var c = null,
      d = KA();
    K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    L(this, "access_globals", "readwrite", a);
    L(this, "access_globals", "readwrite", b);
    var e = [D, G],
      f = a.split("."),
      g = Fb(f, e),
      h = f[f.length - 1];
    if (void 0 === g) throw Error("Path " + a + " does not exist.");
    var m = g[h];
    if (m && !nb(m)) return null;
    if (m) return qd(m, this.m, d);
    var n;
    m = function () {
      if (!nb(n.push))
        throw Error("Object at " + b + " in window is not an array.");
      n.push.call(n, arguments);
    };
    g[h] = m;
    var p = b.split("."),
      q = Fb(p, e),
      r = p[p.length - 1];
    if (void 0 === q) throw Error("Path " + p + " does not exist.");
    n = q[r];
    void 0 === n && ((n = []), (q[r] = n));
    c = function () {
      m.apply(m, Array.prototype.slice.call(arguments, 0));
    };
    return qd(c, this.m, d);
  }
  VA.R = "createArgumentsQueue";
  function WA(a) {
    return qd(
      function (c) {
        var d = Hw();
        if ("function" === typeof c)
          d(function () {
            c(function (f, g, h) {
              var m = Hw(),
                n = m && m.getByName && m.getByName(f);
              return wm(D.gaplugins.Linker, n).decorate(g, h);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[1 === e.length ? e[0] : e[1]] && d.apply(null, c);
        } else if ("isLoaded" === c) return !!d.loaded;
      },
      this.m,
      1
    );
  }
  WA.H = "internal.createGaCommandQueue";
  function XA(a) {
    return qd(
      function () {
        if (!nb(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.m,
      KA()
    );
  }
  XA.R = "createQueue";
  function YA(a, b) {
    var c = null;
    return c;
  }
  YA.H = "internal.createRegex";
  var ZA = { Zm: "shared_user_id", bn: "shared_user_id_requested" };
  function $A() {
    var a = {};
    return a;
  }
  function aB(a) {}
  aB.H = "internal.declareConsentState";
  function bB(a) {
    var b = "";
    return b;
  }
  bB.H = "internal.decodeUrlHtmlEntities";
  function cB(a, b, c) {
    var d;
    return d;
  }
  cB.H = "internal.decorateUrlWithGaCookies";
  function dB(a) {
    var b;
    return b;
  }
  dB.H = "internal.detectUserProvidedData";
  function hB(a, b) {
    return b;
  }
  hB.H = "internal.enableAutoEventOnClick";
  var iB = !!D.MutationObserver,
    jB = void 0,
    kB = function (a) {
      if (!jB) {
        var b = function () {
          var c = G.body;
          if (c)
            if (iB)
              new MutationObserver(function () {
                for (var e = 0; e < jB.length; e++) I(jB[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              Pc(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  I(function () {
                    d = !1;
                    for (var e = 0; e < jB.length; e++) I(jB[e]);
                  }));
              });
            }
        };
        jB = [];
        G.body ? b() : I(b);
      }
      jB.push(a);
    },
    lB = function (a) {
      if (jB)
        for (var b = 0; b < jB.length; b++) jB[b] === a && jB.splice(b, 1);
    };
  function qB(a, b) {
    return b;
  }
  qB.H = "internal.enableAutoEventOnElementVisibility";
  function rB() {}
  rB.H = "internal.enableAutoEventOnError";
  var sB = {},
    tB = [],
    uB = {},
    vB = 0,
    wB = 0;
  function CB(a, b) {
    var c = this;
    return b;
  }
  CB.H = "internal.enableAutoEventOnFormInteraction";
  function HB(a, b) {
    var c = this;
    return b;
  }
  HB.H = "internal.enableAutoEventOnFormSubmit";
  function MB() {
    var a = this;
  }
  MB.H = "internal.enableAutoEventOnGaSend";
  var NB = {},
    OB = [];
  function VB(a, b) {
    var c = this;
    return b;
  }
  VB.H = "internal.enableAutoEventOnHistoryChange";
  var WB = ["http://", "https://", "javascript:", "file://"];
  function $B(a, b) {
    var c = this;
    return b;
  }
  $B.H = "internal.enableAutoEventOnLinkClick";
  var aC, bC;
  function mC(a, b) {
    var c = this;
    return b;
  }
  mC.H = "internal.enableAutoEventOnScroll";
  function nC(a) {
    return function () {
      if (a.Cc && a.Ec >= a.Cc) a.Ac && D.clearInterval(a.Ac);
      else {
        a.Ec++;
        var b = zb();
        ty({
          event: a.eventName,
          "gtm.timerId": a.Ac,
          "gtm.timerEventNumber": a.Ec,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.Cc,
          "gtm.timerStartTime": a.Oe,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Oe,
          "gtm.triggers": a.Lh,
        });
      }
    };
  }
  function oC(a, b) {
    return b;
  }
  oC.H = "internal.enableAutoEventOnTimer";
  var gc = ia(["data-gtm-yt-inspected-"]),
    qC = ["www.youtube.com", "www.youtube-nocookie.com"],
    rC,
    sC = !1;
  function CC(a, b) {
    var c = this;
    return b;
  }
  CC.H = "internal.enableAutoEventOnYouTubeActivity";
  var DC;
  function EC(a) {
    var b = !1;
    return b;
  }
  EC.H = "internal.evaluateMatchingRules";
  var FC = function (a, b, c, d) {
      var e = new nq(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = zb();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    GC = function (a, b, c, d) {
      function e(r, t) {
        for (var u = la(h), v = u.next(); !v.done; v = u.next()) {
          var w = v.value;
          w.isAborted = !1;
          w.metadata.speculative = !0;
          w.metadata.consent_updated = !0;
          w.metadata.event_start_timestamp_ms = zb();
          w.metadata.consent_event_id = r;
          w.metadata.consent_priority_id = t;
        }
      }
      function f(r) {
        for (var t = 0; t < h.length; t++) {
          var u = h[t];
          if (!r || r(u.metadata.hit_type))
            if (
              !u.metadata.consent_updated ||
              "page_view" === u.metadata.hit_type ||
              W(q)
            ) {
              var v,
                w = h[t];
              switch (w.metadata.hit_type) {
                case "page_view":
                  v = [Nq, ku, Ut, Yt];
                  break;
                case "call_conversion":
                  v = [ku];
                  break;
                default:
                  v = [
                    Sq,
                    Mt,
                    Ct,
                    Pt,
                    Dt,
                    Et,
                    Ft,
                    Gt,
                    Ut,
                    Vt,
                    Xt,
                    Zt,
                    hu,
                    iu,
                    Wt,
                    eu,
                    Qt,
                    $t,
                    au,
                    cu,
                    Nt,
                    Rt,
                    fu,
                    Tq,
                    St,
                    du,
                    Ht,
                    Yt,
                    Ot,
                    ju,
                    Tt,
                    bu,
                    Lt,
                    Kt,
                    gu,
                  ];
              }
              for (var x = 0; x < v.length && (v[x](w), !w.isAborted); x++);
              u.metadata.speculative || u.isAborted || yv(u);
            }
        }
      }
      var g =
        d.isGtmEvent && "" === a
          ? { id: "", prefix: "", ia: "", ka: [] }
          : Dl(a, d.isGtmEvent);
      if (g) {
        var h = [];
        if (d.eventMetadata.hit_type_override) {
          var m = d.eventMetadata.hit_type_override;
          Array.isArray(m) || (m = [m]);
          for (var n = 0; n < m.length; n++) {
            var p = FC(m[n], g, b, d);
            p.metadata.speculative = !1;
            h.push(p);
          }
        } else
          b === Q.g.ba &&
            (T(17)
              ? h.push(FC("page_view", g, b, d))
              : h.push(FC("landing_page", g, b, d))),
            h.push(FC("conversion", g, b, d)),
            h.push(FC("user_data_lead", g, b, d)),
            h.push(FC("user_data_web", g, b, d)),
            h.push(FC("remarketing", g, b, d));
        var q = [Q.g.M];
        T(41) && q.push(Q.g.O);
        xl(function () {
          f();
          T(18) &&
            (W([Q.g.xa]) ||
              wl(
                function (r) {
                  e(r.consentEventId, r.consentPriorityId);
                  f(function (t) {
                    return "remarketing" === t;
                  });
                },
                [Q.g.xa]
              ));
          W(q) ||
            wl(function (r) {
              e(r.consentEventId, r.consentPriorityId);
              f();
            }, q);
        }, q);
      }
    };
  var HC = function (a) {
      var b = a.m[Q.g.da];
      if (!Array.isArray(b)) return "";
      for (
        var c = [],
          d = function (h, m, n) {
            void 0 !== n &&
              "" !== n &&
              c.push(h + m + ":" + encodeURIComponent(String(n)));
          },
          e = 0;
        e < b.length;
        e++
      ) {
        var f = b[e],
          g = e + 1;
        d("i", g, f.id);
        d("p", g, f.price);
        d("q", g, f[Q.g.fd]);
        d("c", g, f[Q.g.sc]);
        d("l", g, f[Q.g.Ma]);
        d("a", g, f.accountId);
      }
      return c.join("|");
    },
    IC = {},
    JC =
      ((IC[Q.g.ic] = "gcu"),
      (IC[Q.g.hb] = "gclgb"),
      (IC[Q.g.Pa] = "gclaw"),
      (IC[Q.g.Cb] = "auiddc"),
      (IC[Q.g.Pb] = "ps"),
      (IC[Q.g.Ve] = "pscdl"),
      (IC[Q.g.eg] = "gcldc"),
      (IC[Q.g.lb] = "edid"),
      (IC[Q.g.yi] = "cat"),
      (IC[Q.g.zi] = "type"),
      (IC[Q.g.mg] = "src"),
      (IC[Q.g.Ai] = "pcor"),
      (IC[Q.g.Bi] = "num"),
      (IC[Q.g.Ci] = "tran"),
      (IC[Q.g.Di] = "u"),
      (IC[Q.g.Ud] = "gac"),
      (IC[Q.g.vc] = "gacgb"),
      (IC[Q.g.wc] = "gdpr"),
      (IC[Q.g.pb] = "gdid"),
      (IC[Q.g.Xd] = "gtm_up"),
      (IC[Q.g.fd] = "qty"),
      (IC[Q.g.xc] = "gdpr_consent"),
      (IC[Q.g.za] = "ord"),
      (IC[Q.g.kf] = "uaa"),
      (IC[Q.g.lf] = "uab"),
      (IC[Q.g.nf] = "uafvl"),
      (IC[Q.g.pf] = "uamb"),
      (IC[Q.g.qf] = "uam"),
      (IC[Q.g.rf] = "uap"),
      (IC[Q.g.tf] = "uapv"),
      (IC[Q.g.uf] = "uaw"),
      (IC[Q.g.ma] = "cost"),
      (IC[Q.g.Jb] = "npa"),
      (IC[Q.g.wa] = null),
      (IC[Q.g.Uc] = null),
      (IC[Q.g.da] = null),
      IC),
    KC = function (a, b) {
      var c = [],
        d = {},
        e = function (r, t, u) {
          var v = u ? String(t) : encodeURIComponent(String(t));
          d[r] = v;
        },
        f = Va(a.m[Q.g.Uc]) ? a.m[Q.g.Uc] : {};
      z(a.m, function (r, t) {
        var u = JC[r];
        if (u) {
          var v = !0 === og[u];
          if (void 0 === t || (!v && "" === t)) return;
          e(u, t);
        }
        void 0 === u && e(r, t);
      });
      e("gtm", Ln(a.metadata.source_canonical_id));
      zn() && e("gcs", An());
      e("gcd", En(a.o));
      Hn() && e("dma_cps", Fn());
      e("dma", Gn());
      cn(ln()) && e("tcfd", In());
      Ni.m && e("tag_exp", Ni.m);
      var g = HC(a);
      g && e("prd", g, !0);
      e("epver", "2");
      var h = a.m[Q.g.wa];
      h && a.metadata.redact_click_ids && (h = Dj(String(h)));
      z(f, function (r, t) {
        if (null != t)
          if ("~oref" === r) h = t;
          else {
            var u = encodeURIComponent(r);
            null != d[u] && M(141);
            e(u, t);
          }
      });
      var m = !T(41) || W(Q.g.O),
        n = a.metadata.user_data;
      if (n && m) {
        var p = di(n);
        p &&
          c.push(
            p.then(function (r) {
              return e("em", r.yj);
            })
          );
      }
      var q = function () {
        h && e("~oref", h);
        b(d);
      };
      if (c.length)
        try {
          Promise.all(c).then(function () {
            q();
          });
          return;
        } catch (r) {}
      q();
    },
    LC = function (a) {
      "page_view" === a.metadata.hit_type
        ? nu(a)
        : KC(a, function (b) {
            var c = a.metadata.parsed_target,
              d = a.metadata.send_as_iframe,
              e = a.m[Q.g.mg],
              f = [];
            z(b, function (n, p) {
              f.push(n + "=" + p);
            });
            var g =
              (W(T(41) ? [Q.g.M, Q.g.O] : [Q.g.M])
                ? d
                  ? Ni.D
                    ? Oi() + "/activityi/" + e + ";"
                    : "https://" + e + ".fls.doubleclick.net/activityi;"
                  : Kj("https://ad.doubleclick.net") + "/activity;"
                : "" +
                  Kj("https://ade.googlesyndication.com") +
                  "/ddm/activity/") +
              f.join(";") +
              "?";
            d ? Nc(g, a.o.onSuccess) : Oc(g, a.o.onSuccess, a.o.onFailure);
            if (a.metadata.attribution_reporting_experiment) {
              var h =
                "" +
                Kj("https://ad.doubleclick.net") +
                "/activity;register_conversion=1;" +
                f.join(";") +
                "?";
              Oc(h, void 0, void 0, { attributionsrc: "" });
            }
            if (a.metadata.send_fledge_experiment) {
              var m =
                vt() + "/td/fls/rul/activityi;fledge=1;" + f.join(";") + "?";
              tt(m, ek(c.target.id));
            }
          });
    };
  var MC = function () {
      return T(41) ? [Q.g.M, Q.g.O] : [Q.g.M];
    },
    OC = function () {
      if (!NC && !qt(pt())) {
        if (!Jm("")) return !1;
        NC = !0;
      }
      if (qt(pt())) return !0;
      return !1;
    },
    QC = function (a) {
      var b = Dl(a);
      if (b && (1 === b.ka.length || 3 === b.ka.length)) {
        var c = b.ka[Gl[4]] || "",
          d = b.ka[Gl[5]],
          e = "",
          f = "unknown";
        if (d) {
          var g = d.split("+");
          if (2 !== g.length) return;
          e = g[0];
          f = PC[g[1].toLowerCase()];
        }
        if (f) return { target: b, Hk: c, Ik: e, Pk: f };
      }
    },
    RC = function (a) {
      qr(a);
    },
    SC = function (a) {
      var b = Ib(Ul(a.o, Q.g.ja, 1), "."),
        c = Ib(Ul(a.o, Q.g.ja, 2), ".");
      a.m[Q.g.pb] = b;
      a.m[Q.g.lb] = c;
    },
    TC = function (a) {
      if (!a.metadata.consent_updated) {
        var b = V(a.o, Q.g.ui);
        if (Va(b) && b.exclusion_parameters && b.engines)
          if (Jn()) {
          } else {
            var c = !1 !== V(a.o, Q.g.ra),
              d = Lq(a),
              e = function () {
                if (W(MC())) {
                  var f = {
                    config: b,
                    gtm: Ln(a.metadata.source_canonical_id),
                  };
                  c && (Ro(d), (f.auiddc = Lo[No(d.prefix)]));
                  void 0 === D.__dc_ns_processor && (D.__dc_ns_processor = []);
                  D.__dc_ns_processor.push(f);
                  Lc("https://www.googletagmanager.com/dclk/ns/v1.js");
                }
              };
            W(MC()) ? e() : ll(e, MC());
          }
      }
    },
    WC = function (a, b, c, d) {
      function e() {
        for (var p = la(g), q = p.next(); !q.done; q = p.next()) {
          var r = q.value;
          if (
            !r.metadata.consent_updated ||
            "page_view" === r.metadata.hit_type ||
            W(MC())
          ) {
            for (
              var t = la("page_view" === r.metadata.hit_type ? UC : VC),
                u = t.next();
              !u.done;
              u = t.next()
            ) {
              var v = u.value;
              v(r);
              if (r.isAborted) break;
            }
            r.metadata.speculative || r.isAborted || LC(r);
          }
        }
      }
      var f = QC(a);
      if (f) {
        var g = [],
          h = new nq(f.target, b, d);
        h.metadata.parsed_target = f;
        h.metadata.counting_method = f.Pk;
        g.push(h);
        if (T(17) && b === Q.g.ba) {
          var m = new nq(f.target, b, d);
          m.metadata.hit_type = "page_view";
          m.metadata.speculative = !0;
          g.push(m);
        }
        var n = MC();
        xl(function () {
          e();
          W(n) ||
            wl(function (p) {
              for (
                var q = p.consentEventId,
                  r = p.consentPriorityId,
                  t = la(g),
                  u = t.next();
                !u.done;
                u = t.next()
              ) {
                var v = u.value;
                v.metadata.consent_updated = !0;
                v.metadata.consent_event_id = q;
                v.metadata.consent_priority_id = r;
              }
              e(q, r);
            }, n);
        }, n);
      } else I(d.onFailure);
    },
    VC = [
      Sq,
      function (a) {
        a.metadata.conversion_linker_enabled = !1 !== V(a.o, Q.g.ra);
        var b = !0 === V(a.o, Q.g.Se),
          c = W(MC());
        if (Jn() && b) {
          b = !1;
        }
        a.metadata.send_as_iframe = b && c;
        var d = V(a.o, Q.g.fa);
        a.metadata.redact_ads_data = void 0 != d && !1 !== d;
        a.metadata.redact_click_ids = a.metadata.redact_ads_data && !W(MC());
        a.metadata.cookie_options = Lq(a);
      },
      function (a) {
        if (!a.metadata.consent_updated) {
          var b = a.o.isGtmEvent ? V(a.o, "oref") : zj(Cj(D.location.href));
          a.m[Q.g.wa] = b;
        }
      },
      function (a) {
        if (a.eventName === Q.g.Oa && !a.o.isGtmEvent) {
          if (!a.metadata.consent_updated) {
            var b = {
              callback: V(a.o, Q.g.Db),
              xj: V(a.o, V(a.o, Q.g.ob)),
              Lj: V(a.o, Q.g.ob),
            };
            Rq(b, a.metadata.cookie_options, a.metadata.redact_ads_data, hq);
          }
          a.isAborted = !0;
        }
      },
      function (a) {
        if (a.eventName === Q.g.ba && !a.o.isGtmEvent) {
          if (!a.metadata.consent_updated && !T(16)) {
            var b = a.metadata.conversion_linker_enabled,
              c = a.metadata.cookie_options,
              d = a.metadata.redact_ads_data;
            Oq(
              {
                pd: b,
                vd: V(a.o, Q.g.sa) || {},
                Bd: V(a.o, Q.g.Sa),
                Qf: a.metadata.source_canonical_id,
                allowAdPersonalizationSignals: yn(a.o),
                wd: d,
              },
              c
            );
            TC(a);
            var e = a.metadata.parsed_target.target,
              f = Ib(Ul(a.o, Q.g.ja, 2), "."),
              g = Ib(Ul(a.o, Q.g.ja, 1), ".");
            ar({
              Ug: !0,
              ac: b ? c : void 0,
              Zg: f,
              o: a.o,
              gh: g,
              If: b,
              wd: d,
              targetId: 1 < e.ka.length ? e.id : "",
            });
          }
          a.isAborted = !0;
        }
      },
      function (a) {
        var b = a.metadata.parsed_target,
          c = {},
          d = V(a.o, Q.g.Uc);
        Va(d) &&
          z(d, function (e, f) {
            null != f && (c[e] = f);
          });
        a.m[Q.g.mg] = b.target.ka[Gl[3]];
        a.m[Q.g.zi] = b.Hk;
        a.m[Q.g.yi] = b.Ik;
        a.m[Q.g.Uc] = c;
      },
      function (a) {
        var b = a.metadata.counting_method;
        switch (b) {
          case "standard":
            a.m[Q.g.za] = qb(1e11, 1e13);
            return;
          case "unique":
            a.m[Q.g.za] = "1";
            a.m[Q.g.Bi] = qb(1e11, 1e13);
            return;
          case "per_session":
            var c = V(a.o, Q.g.rb);
            a.m[Q.g.za] = c;
            return;
        }
        var d = "transactions" === b ? "1" : V(a.o, Q.g.fd);
        a.m[Q.g.fd] = d;
        a.copyToHitData(Q.g.ma);
        a.copyToHitData(Q.g.za);
      },
      function (a) {
        a.o.isGtmEvent &&
          (a.copyToHitData(Q.g.Di),
          a.copyToHitData(Q.g.Ci),
          a.copyToHitData(Q.g.ng));
      },
      function (a) {
        a.metadata.consent_updated && (a.m[Q.g.ic] = "1");
      },
      function (a) {
        var b = sn();
        b && (a.m[Q.g.wc] = b);
        var c = qn();
        c && (a.m[Q.g.xc] = c);
      },
      function (a) {
        "1" === zo(!1)._up && (a.m[Q.g.Xd] = "1");
      },
      function (a) {
        yn(a.o) ? (a.m[Q.g.Jb] = "0") : (a.m[Q.g.Jb] = "1");
      },
      function (a) {
        if (a.metadata.conversion_linker_enabled) {
          var b = W(MC()),
            c = a.metadata.cookie_options,
            d = a.metadata.redact_ads_data,
            e = hq(c.prefix, d),
            f = !1;
          Ro(c);
          var g = b ? Lo[No(c.prefix)] : void 0;
          e && e.length && ((a.m[Q.g.eg] = e.join(".")), (f = !0));
          if (a.metadata.send_as_iframe) {
            var h = "_gcl" !== sp(c.prefix),
              m;
            if (!(m = f)) {
              var n = c.prefix;
              m = !(Ej("gclaw") || Ej("gac") || 0 < (Cp().aw || []).length
                ? 0
                : 0 < (Cp().gb || []).length ||
                  (T(54) && void 0 !== Cp().gbraid) ||
                  Wp(n, !0));
            }
            if (m) {
              var p = gq(c.prefix, d);
              p && p.length && ((a.m[Q.g.Pa] = p.join(".")), M(59));
              var q,
                r = Ej("gac");
              (q = r
                ? !W(bq()) && d
                  ? "0"
                  : decodeURIComponent(r)
                : aq(mp(lp()) ? Yo() : {})) &&
                (h || (a.m[Q.g.Ud] = q));
            } else {
              var t;
              a: {
                var u = c.prefix,
                  v = Ej("gclgb");
                if (v) t = v.split(".");
                else {
                  var w = sp(u);
                  if ("_gcl" === w) {
                    var x = !W(bq()) && d,
                      y = Cp(),
                      B = [];
                    y.wbraid && B.push(y.wbraid);
                    T(54) && y.gbraid && B.push(y.gbraid);
                    if (0 < B.length) {
                      t = x ? ["0"] : B;
                      break a;
                    }
                  }
                  t = rp({ prefix: w });
                }
              }
              var A = t;
              A.length && (a.m[Q.g.hb] = A.join("."));
              if (!h) {
                var E,
                  F = Ej("gacgb");
                (E = F
                  ? !W(bq()) && d
                    ? "0"
                    : decodeURIComponent(F)
                  : aq(mp(lp()) ? Yo("_gac_gb", !0) : {})) && (a.m[Q.g.vc] = E);
              }
            }
          }
          g && (a.m[Q.g.Cb] = g);
        }
      },
      function (a) {
        var b = a.metadata.counting_method;
        if ("transactions" === b || "items_sold" === b) {
          var c = a.o.isGtmEvent,
            d = V(a.o, Q.g.da);
          if (Array.isArray(d)) {
            for (var e = 0; e < d.length; e++) {
              var f = d[e];
              Va(f) &&
                !c &&
                ((f[Q.g.sc] = V(a.o, Q.g.sc)),
                (f[Q.g.Ma] = V(a.o, Q.g.Ma)),
                (f.accountId = void 0));
            }
            a.m[Q.g.da] = d;
          }
        }
      },
      function (a) {
        var b = V(a.o, Q.g.Tc),
          c = {};
        Va(b) &&
          z(b, function (g, h) {
            l(h) && XC.test(g) && (c[g] = h);
          });
        for (var d = Tl(a.o), e = 0; e < d.length; e++) {
          var f = d[e];
          XC.test(f) && (c[f] = f);
        }
        z(c, function (g, h) {
          a.m[g] = V(a.o, h);
        });
      },
      SC,
      function (a) {
        var b = W(MC()) && OC();
        if ((a.metadata.attribution_reporting_experiment = b))
          (a.m[Q.g.Pb] = "1"), (a.m[Q.g.Ai] = qb());
      },
      function (a) {
        if (a.o.isGtmEvent) {
          var b = V(a.o, Q.g.Ca);
          Va(b) && (a.metadata.user_data = b);
        }
      },
      function (a) {
        if (!it(D)) M(87);
        else if (void 0 !== kt) {
          M(85);
          var b = gt();
          b ? ot(b, a) : M(86);
        }
      },
      function (a) {
        T(38) &&
          !1 !== V(a.o, Q.g.Aa) &&
          W(MC()) &&
          yn(a.o) &&
          st() &&
          (a.metadata.send_fledge_experiment = !0);
      },
      function (a) {
        if (oq(a, "ccd_add_1p_data", !1) && (!T(41) || W(Q.g.O))) {
          var b = a.o.D[Q.g.ce];
          if (bj(b)) {
            var c = V(a.o, Q.g.Ca);
            null === c
              ? (a.metadata.user_data_from_code = null)
              : (b.enable_code && Va(c) && (a.metadata.user_data_from_code = c),
                Va(b.selectors) &&
                  (a.metadata.user_data_from_manual = aj(b.selectors)));
          }
        }
      },
      Tq,
      RC,
    ],
    UC = [Nq, SC, TC, RC],
    PC = {
      "": "unknown",
      standard: "standard",
      unique: "unique",
      per_session: "per_session",
      transactions: "transactions",
      items_sold: "items_sold",
    },
    XC = /^u([1-9]\d?|100)$/,
    NC = !1;
  var kD = function () {
    var a = !0;
    (tn(7) && tn(9) && tn(10)) || (a = !1);
    return a;
  };
  var oD = function (a, b) {
      if (!b.isGtmEvent) {
        var c = V(b, Q.g.ob),
          d = V(b, Q.g.Db),
          e = V(b, c);
        if (void 0 === e) {
          var f = void 0;
          lD.hasOwnProperty(c)
            ? (f = lD[c])
            : mD.hasOwnProperty(c) && (f = mD[c]);
          1 === f && (f = nD(c));
          l(f)
            ? Hw()(function () {
                var g = Hw().getByName(a).get(f);
                d(g);
              })
            : d(void 0);
        } else d(e);
      }
    },
    pD = function (a, b) {
      var c = a[Q.g.qb],
        d = b + ".",
        e = a[Q.g.W] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[Q.g.Wa];
      e = String(e).replace(/\s+/g, "").split(",");
      var h = Hw();
      h(d + "require", "linker");
      h(d + "linker:autoLink", e, f, g);
    },
    tD = function (a, b, c) {
      if (!c.isGtmEvent || !qD[a]) {
        var d = !W(Q.g.T),
          e = function (f) {
            var g,
              h,
              m = Hw(),
              n = rD(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.isGtmEvent || sD(b, n.createOnlyFields)) {
              c.isGtmEvent &&
                ((g = "gtm" + Li()),
                (h = n.createOnlyFields),
                n.gtmTrackerName && (h.name = g));
              m(function () {
                var t = m.getByName(b);
                t && (p = t.get("clientId"));
                c.isGtmEvent || m.remove(b);
              });
              m("create", a, c.isGtmEvent ? h : n.createOnlyFields);
              d &&
                W(Q.g.T) &&
                ((d = !1),
                m(function () {
                  var t = Hw().getByName(c.isGtmEvent ? g : b);
                  !t ||
                    (t.get("clientId") == p && q) ||
                    (c.isGtmEvent
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&sst.gcut"] = pi[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&sst.gcut"] = pi[f])),
                    t.set(n.fieldsToSet),
                    c.isGtmEvent
                      ? t.send("pageview")
                      : t.send("pageview", n.fieldsToSend));
                }));
              c.isGtmEvent &&
                m(function () {
                  m.remove(g);
                });
            }
          };
        wl(function () {
          return e(Q.g.T);
        }, Q.g.T);
        wl(function () {
          return e(Q.g.M);
        }, Q.g.M);
        T(41) &&
          wl(function () {
            return e(Q.g.O);
          }, Q.g.O);
        c.isGtmEvent && (qD[a] = !0);
      }
    },
    uD = function (a, b) {
      Ij() && b && (a[Q.g.nb] = b);
    },
    DD = function (a, b, c) {
      function d() {
        var O = V(c, Q.g.Tc);
        h(function () {
          if (!c.isGtmEvent && Va(O)) {
            var U = u.fieldsToSend,
              X = m().getByName(n),
              P;
            for (P in O)
              if (void 0 != O[P] && /^(dimension|metric)\d+$/.test(P)) {
                var S = X.get(nD(O[P]));
                vD(U, P, S);
              }
          }
        });
      }
      function e() {
        if (u.displayfeatures) {
          var O = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: O });
        }
      }
      var f = a,
        g,
        h = c.isGtmEvent ? Iw(V(c, "gaFunctionName")) : Iw();
      if (nb(h)) {
        var m = Hw,
          n;
        c.isGtmEvent
          ? (n = V(c, "name") || V(c, "gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (O) {
            var U = [].slice.call(arguments, 0);
            U[0] = n ? n + "." + U[0] : "" + U[0];
            h.apply(window, U);
          },
          q = function (O) {
            var U = function (da, Ba) {
                for (var Da = 0; Ba && Da < Ba.length; Da++) p(da, Ba[Da]);
              },
              X = c.isGtmEvent,
              P = X ? wD(u) : xD(b, c);
            if (P) {
              var S = {};
              uD(S, O);
              p("require", "ec", "ec.js", S);
              X && P.Vg && p("set", "&cu", P.Vg);
              var ma = P.action;
              if (X || "impressions" === ma)
                if ((U("ec:addImpression", P.wj), !X)) return;
              if ("promo_click" === ma || "promo_view" === ma || (X && P.Le)) {
                var ka = P.Le;
                U("ec:addPromo", ka);
                if (ka && 0 < ka.length && "promo_click" === ma) {
                  X ? p("ec:setAction", ma, P.tb) : p("ec:setAction", ma);
                  return;
                }
                if (!X) return;
              }
              "promo_view" !== ma &&
                "impressions" !== ma &&
                (U("ec:addProduct", P.Hc), p("ec:setAction", ma, P.tb));
            }
          },
          r = function (O) {
            if (O) {
              var U = {};
              if (Va(O))
                for (var X in yD) yD.hasOwnProperty(X) && zD(yD[X], X, O[X], U);
              uD(U, y);
              p("require", "linkid", U);
            }
          },
          t = function () {
            if (Jn()) {
            } else {
              var O = V(c, Q.g.Ei);
              O &&
                (p("require", O, { dataLayer: ui.Ta }), p("require", "render"));
            }
          },
          u = rD(n, b, c),
          v = function (O, U, X) {
            X && (U = "" + U);
            u.fieldsToSend[O] = U;
          };
        !c.isGtmEvent &&
          sD(n, u.createOnlyFields) &&
          (h(function () {
            m() && m().remove(n);
          }),
          (AD[n] = !1));
        h("create", f, u.createOnlyFields);
        var w = c.isGtmEvent && u.fieldsToSet[Q.g.nb] && T(78);
        if ((!c.isGtmEvent && u.createOnlyFields[Q.g.nb]) || w) {
          var x = Hj()
            ? Gj(
                c.isGtmEvent
                  ? u.fieldsToSet[Q.g.nb]
                  : u.createOnlyFields[Q.g.nb],
                "/analytics.js"
              )
            : void 0;
          x && (g = x);
        }
        var y = c.isGtmEvent
          ? u.fieldsToSet[Q.g.nb]
          : u.createOnlyFields[Q.g.nb];
        if (y) {
          var B = c.isGtmEvent
            ? u.fieldsToSet[Q.g.Td]
            : u.createOnlyFields[Q.g.Td];
          B && !AD[n] && ((AD[n] = !0), h(Lw(n, B)));
        }
        c.isGtmEvent
          ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), r(u.linkAttribution));
        var A = u[Q.g.sa];
        A && A[Q.g.W] && pD(A, n);
        p("set", u.fieldsToSet);
        if (c.isGtmEvent) {
          if (u.enableLinkId) {
            var E = {};
            uD(E, y);
            p("require", "linkid", "linkid.js", E);
          }
          tD(f, n, c);
        }
        if (b === Q.g.Nb)
          if (c.isGtmEvent) {
            e();
            if (u.remarketingLists) {
              var F = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: F });
            }
            q(y);
            p("send", "pageview");
            u.createOnlyFields._useUp && Jw(n + ".");
          } else t(), p("send", "pageview", u.fieldsToSend);
        else
          b === Q.g.ba
            ? (t(),
              nr(f, c),
              V(c, Q.g.Sa) && (Op(["aw", "dc"]), Jw(n + ".")),
              Qp(["aw", "dc"]),
              0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
              tD(f, n, c))
            : b === Q.g.Oa
            ? oD(n, c)
            : "screen_view" === b
            ? p("send", "screenview", u.fieldsToSend)
            : "timing_complete" === b
            ? ((u.fieldsToSend.hitType = "timing"),
              v("timingCategory", u.eventCategory, !0),
              c.isGtmEvent
                ? v("timingVar", u.timingVar, !0)
                : v("timingVar", u.name, !0),
              v("timingValue", ub(u.value)),
              void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
              p("send", u.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", u.fieldsToSend)
            : ("" === b && c.isGtmEvent) ||
              ("track_social" === b && c.isGtmEvent
                ? ((u.fieldsToSend.hitType = "social"),
                  v("socialNetwork", u.socialNetwork, !0),
                  v("socialAction", u.socialAction, !0),
                  v("socialTarget", u.socialTarget, !0))
                : ((c.isGtmEvent || BD[b]) && q(y),
                  c.isGtmEvent && e(),
                  (u.fieldsToSend.hitType = "event"),
                  v("eventCategory", u.eventCategory, !0),
                  v("eventAction", u.eventAction || b, !0),
                  void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                  void 0 !== u.value && v("eventValue", ub(u.value))),
              p("send", u.fieldsToSend));
        var C = g && T(78) && !c.eventMetadata.suppress_script_load;
        if (!CD && (!c.isGtmEvent || C)) {
          g = g || "https://www.google-analytics.com/analytics.js";
          CD = !0;
          var H = function () {
              c.onFailure();
            },
            N = function () {
              m().loaded || H();
            };
          Jn() ? I(N) : Lc(g, N, H);
        }
      } else I(c.onFailure);
    },
    ED = function (a, b, c, d) {
      xl(
        function () {
          DD(a, b, d);
        },
        [Q.g.T, Q.g.M]
      );
    },
    GD = function (a) {
      function b(e) {
        function f(h, m) {
          for (var n = 0; n < m.length; n++) {
            var p = m[n];
            if (e[p]) {
              g[h] = e[p];
              break;
            }
          }
        }
        var g = k(e);
        f("id", ["id", "item_id", "promotion_id"]);
        f("name", ["name", "item_name", "promotion_name"]);
        f("brand", ["brand", "item_brand"]);
        f("variant", ["variant", "item_variant"]);
        f("list", ["list_name", "item_list_name"]);
        f("position", ["list_position", "creative_slot", "index"]);
        (function () {
          if (e.category) g.category = e.category;
          else {
            for (var h = "", m = 0; m < FD.length; m++)
              void 0 !== e[FD[m]] && (h && (h += "/"), (h += e[FD[m]]));
            h && (g.category = h);
          }
        })();
        f("listPosition", ["list_position"]);
        f("creative", ["creative_name"]);
        f("list", ["list_name"]);
        f("position", ["list_position", "creative_slot"]);
        return g;
      }
      for (var c = [], d = 0; a && d < a.length; d++)
        a[d] && Va(a[d]) && c.push(b(a[d]));
      return c.length ? c : void 0;
    },
    HD = function (a) {
      return W(a);
    },
    ID = !1;
  var CD,
    AD = {},
    qD = {},
    JD = {},
    KD = Object.freeze(
      ((JD.page_hostname = 1),
      (JD[Q.g.la] = 1),
      (JD[Q.g.ib] = 1),
      (JD[Q.g.Qa] = 1),
      (JD[Q.g.Ra] = 1),
      (JD[Q.g.Va] = 1),
      (JD[Q.g.oc] = 1),
      (JD[Q.g.Qb] = 1),
      (JD[Q.g.La] = 1),
      (JD[Q.g.qc] = 1),
      (JD[Q.g.wa] = 1),
      (JD[Q.g.ed] = 1),
      (JD[Q.g.Ba] = 1),
      (JD[Q.g.Fb] = 1),
      JD)
    ),
    LD = {},
    lD = Object.freeze(
      ((LD.client_storage = "storage"),
      (LD.sample_rate = 1),
      (LD.site_speed_sample_rate = 1),
      (LD.store_gac = 1),
      (LD.use_amp_client_id = 1),
      (LD[Q.g.jb] = 1),
      (LD[Q.g.ra] = "storeGac"),
      (LD[Q.g.Qa] = 1),
      (LD[Q.g.Ra] = 1),
      (LD[Q.g.Va] = 1),
      (LD[Q.g.oc] = 1),
      (LD[Q.g.Qb] = 1),
      (LD[Q.g.qc] = 1),
      LD)
    ),
    MD = {},
    ND = Object.freeze(
      ((MD._cs = 1),
      (MD._useUp = 1),
      (MD.allowAnchor = 1),
      (MD.allowLinker = 1),
      (MD.alwaysSendReferrer = 1),
      (MD.clientId = 1),
      (MD.cookieDomain = 1),
      (MD.cookieExpires = 1),
      (MD.cookieFlags = 1),
      (MD.cookieName = 1),
      (MD.cookiePath = 1),
      (MD.cookieUpdate = 1),
      (MD.legacyCookieDomain = 1),
      (MD.legacyHistoryImport = 1),
      (MD.name = 1),
      (MD.sampleRate = 1),
      (MD.siteSpeedSampleRate = 1),
      (MD.storage = 1),
      (MD.storeGac = 1),
      (MD.useAmpClientId = 1),
      (MD._cd2l = 1),
      MD)
    ),
    OD = Object.freeze({ anonymize_ip: 1 }),
    PD = {},
    mD = Object.freeze(
      ((PD.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (PD.app_id = 1),
      (PD.app_installer_id = 1),
      (PD.app_name = 1),
      (PD.app_version = 1),
      (PD.description = "exDescription"),
      (PD.fatal = "exFatal"),
      (PD.language = 1),
      (PD.page_hostname = "hostname"),
      (PD.transport_type = "transport"),
      (PD[Q.g.ya] = "currencyCode"),
      (PD[Q.g.vg] = 1),
      (PD[Q.g.wa] = "location"),
      (PD[Q.g.ed] = "page"),
      (PD[Q.g.Ba] = "referrer"),
      (PD[Q.g.Fb] = "title"),
      (PD[Q.g.ef] = 1),
      (PD[Q.g.Na] = 1),
      PD)
    ),
    QD = {},
    RD = Object.freeze(
      ((QD.content_id = 1),
      (QD.event_action = 1),
      (QD.event_category = 1),
      (QD.event_label = 1),
      (QD.link_attribution = 1),
      (QD.name = 1),
      (QD[Q.g.sa] = 1),
      (QD[Q.g.ug] = 1),
      (QD[Q.g.Ia] = 1),
      (QD[Q.g.ma] = 1),
      QD)
    ),
    SD = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    FD = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    TD = {},
    yD = Object.freeze(
      ((TD.levels = 1), (TD[Q.g.Ra] = "duration"), (TD[Q.g.oc] = 1), TD)
    ),
    UD = {},
    VD = Object.freeze(
      ((UD.anonymize_ip = 1),
      (UD.fatal = 1),
      (UD.send_page_view = 1),
      (UD.store_gac = 1),
      (UD.use_amp_client_id = 1),
      (UD[Q.g.ra] = 1),
      (UD[Q.g.vg] = 1),
      UD)
    ),
    zD = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (VD[b] && (c = vb(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[nD(b)] = c;
        else if (l(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    nD = function (a) {
      return a && l(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    WD = {},
    BD = Object.freeze(
      ((WD.checkout_progress = 1),
      (WD.select_content = 1),
      (WD.set_checkout_option = 1),
      (WD[Q.g.jc] = 1),
      (WD[Q.g.kc] = 1),
      (WD[Q.g.Mb] = 1),
      (WD[Q.g.mc] = 1),
      (WD[Q.g.eb] = 1),
      (WD[Q.g.Bb] = 1),
      (WD[Q.g.fb] = 1),
      (WD[Q.g.Ha] = 1),
      (WD[Q.g.nc] = 1),
      (WD[Q.g.Ka] = 1),
      WD)
    ),
    XD = {},
    YD = Object.freeze(
      ((XD.checkout_progress = 1),
      (XD.set_checkout_option = 1),
      (XD[Q.g.Wf] = 1),
      (XD[Q.g.Xf] = 1),
      (XD[Q.g.jc] = 1),
      (XD[Q.g.kc] = 1),
      (XD[Q.g.Yf] = 1),
      (XD[Q.g.Mb] = 1),
      (XD[Q.g.Ha] = 1),
      (XD[Q.g.nc] = 1),
      (XD[Q.g.Zf] = 1),
      XD)
    ),
    ZD = {},
    $D = Object.freeze(
      ((ZD.generate_lead = 1),
      (ZD.login = 1),
      (ZD.search = 1),
      (ZD.select_content = 1),
      (ZD.share = 1),
      (ZD.sign_up = 1),
      (ZD.view_search_results = 1),
      (ZD[Q.g.mc] = 1),
      (ZD[Q.g.eb] = 1),
      (ZD[Q.g.Bb] = 1),
      (ZD[Q.g.fb] = 1),
      (ZD[Q.g.Ka] = 1),
      ZD)
    ),
    aE = function (a) {
      var b = "general";
      YD[a]
        ? (b = "ecommerce")
        : $D[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    bE = {},
    cE = Object.freeze(
      ((bE.view_search_results = 1),
      (bE[Q.g.eb] = 1),
      (bE[Q.g.fb] = 1),
      (bE[Q.g.Ka] = 1),
      bE)
    ),
    vD = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    dE = function (a) {
      if (Array.isArray(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    rD = function (a, b, c) {
      var d = function (O) {
          return V(c, O);
        },
        e = {},
        f = {},
        g = {},
        h = {},
        m = dE(d(Q.g.wi));
      !c.isGtmEvent && m && vD(f, "exp", m);
      g["&gtm"] = Ln(c.eventMetadata.source_canonical_id, !0);
      c.isGtmEvent || (g._no_slc = !0);
      hl() && (h._cs = HD);
      var n = d(Q.g.Tc);
      if (!c.isGtmEvent && Va(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && vD(f, p, q);
          }
      for (var r = !c.isGtmEvent, t = Tl(c), u = 0; u < t.length; ++u) {
        var v = t[u];
        if (c.isGtmEvent) {
          var w = d(v);
          SD.hasOwnProperty(v)
            ? (e[v] = w)
            : ND.hasOwnProperty(v)
            ? (h[v] = w)
            : (g[v] = w);
        } else {
          var x = void 0;
          x = v !== Q.g.ja ? d(v) : Ul(c, v);
          if (RD.hasOwnProperty(v)) zD(RD[v], v, x, e);
          else if (OD.hasOwnProperty(v)) zD(OD[v], v, x, g);
          else if (mD.hasOwnProperty(v)) zD(mD[v], v, x, f);
          else if (lD.hasOwnProperty(v)) zD(lD[v], v, x, h);
          else if (/^(dimension|metric|content_group)\d+$/.test(v))
            zD(1, v, x, f);
          else if (v === Q.g.ja) {
            if (!ID) {
              var y = Ib(x);
              y && (f["&did"] = y);
            }
            var B = void 0,
              A = void 0;
            b === Q.g.ba
              ? (B = Ib(Ul(c, v), "."))
              : ((B = Ib(Ul(c, v, 1), ".")), (A = Ib(Ul(c, v, 2), ".")));
            B && (f["&gdid"] = B);
            A && (f["&edid"] = A);
          } else
            v === Q.g.La && 0 > t.indexOf(Q.g.oc) && (h.cookieName = x + "_ga");
          T(91) &&
            KD[v] &&
            (c.F.hasOwnProperty(v) ||
              (b === Q.g.ba && c.m.hasOwnProperty(v))) &&
            (r = !1);
        }
      }
      T(91) && r && (f["&jsscut"] = "1");
      (!1 !== d(Q.g.Te) && !1 !== d(Q.g.ib) && kD()) ||
        (g.allowAdFeatures = !1);
      g.allowAdPersonalizationSignals = yn(c);
      !c.isGtmEvent && d(Q.g.Sa) && (h._useUp = !0);
      if (c.isGtmEvent) {
        h.name = h.name || e.gtmTrackerName;
        var E = g.hitCallback;
        g.hitCallback = function () {
          nb(E) && E();
          c.onSuccess();
        };
      } else {
        vD(h, "cookieDomain", "auto");
        vD(g, "forceSSL", !0);
        vD(e, "eventCategory", aE(b));
        cE[b] && vD(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? vD(e, "eventLabel", d(Q.g.ug))
          : "search" === b || "view_search_results" === b
          ? vD(e, "eventLabel", d(Q.g.Ji))
          : "select_content" === b && vD(e, "eventLabel", d(Q.g.ni));
        var F = e[Q.g.sa] || {},
          C = F[Q.g.Tb];
        C || (0 != C && F[Q.g.W])
          ? (h.allowLinker = !0)
          : !1 === C && vD(h, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        h.name = a;
      }
      zn() && (g["&gcs"] = An());
      g["&gcd"] = En(c);
      hl() &&
        (W(Q.g.T) || (h.storage = "none"),
        W(T(41) ? [Q.g.M, Q.g.O] : [Q.g.M]) ||
          ((g.allowAdFeatures = !1), (h.storeGac = !1)));
      Hn() && (g["&dma_cps"] = Fn());
      g["&dma"] = Gn();
      cn(ln()) && (g["&tcfd"] = In());
      Ni.m && (g["&tag_exp"] = Ni.m);
      var H = Jj(c) || d(Q.g.nb),
        N = d(Q.g.Td);
      H && (c.isGtmEvent || (h[Q.g.nb] = H), (h._cd2l = !0));
      N && !c.isGtmEvent && (h[Q.g.Td] = N);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = h;
      return e;
    },
    wD = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Vg = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.wj = "impressions" === b.translateIfKeyEquals ? GD(d) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Le = "promoView" === b.translateIfKeyEquals ? GD(e) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Le = "promoClick" === b.translateIfKeyEquals ? GD(f) : f;
        c.tb = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          void 0 !== b[g] &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var h = b[g].products;
          c.Hc = "products" === b.translateIfKeyEquals ? GD(h) : h;
          c.tb = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    xD = function (a, b) {
      function c(u) {
        return {
          id: d(Q.g.za),
          affiliation: d(Q.g.gg),
          revenue: d(Q.g.ma),
          tax: d(Q.g.Ye),
          shipping: d(Q.g.Wc),
          coupon: d(Q.g.hg),
          list: d(Q.g.Xe) || d(Q.g.Vc) || u,
        };
      }
      for (
        var d = function (u) {
            return V(b, u);
          },
          e = d(Q.g.da),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][Q.g.Xe] || e[g][Q.g.Vc]);
        g++
      );
      var h = d(Q.g.Tc);
      if (Va(h))
        for (var m = 0; e && m < e.length; ++m) {
          var n = e[m],
            p;
          for (p in h)
            h.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != h[p] &&
              vD(n, p, n[h[p]]);
        }
      var q = null,
        r = d(Q.g.vi);
      if (a === Q.g.Ha || a === Q.g.nc) q = { action: a, tb: c(), Hc: GD(e) };
      else if (a === Q.g.jc) q = { action: "add", tb: c(), Hc: GD(e) };
      else if (a === Q.g.kc) q = { action: "remove", tb: c(), Hc: GD(e) };
      else if (a === Q.g.Ka) q = { action: "detail", tb: c(f), Hc: GD(e) };
      else if (a === Q.g.eb) q = { action: "impressions", wj: GD(e) };
      else if (a === Q.g.fb) q = { action: "promo_view", Le: GD(r) || GD(e) };
      else if (("select_content" === a && r && 0 < r.length) || a === Q.g.Bb)
        q = { action: "promo_click", Le: GD(r) || GD(e) };
      else if ("select_content" === a || a === Q.g.mc)
        q = {
          action: "click",
          tb: { list: d(Q.g.Xe) || d(Q.g.Vc) || f },
          Hc: GD(e),
        };
      else if (a === Q.g.Mb || "checkout_progress" === a) {
        var t = { step: a === Q.g.Mb ? 1 : d(Q.g.We), option: d(Q.g.Md) };
        q = { action: "checkout", Hc: GD(e), tb: k(c(), t) };
      } else
        "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            tb: { step: d(Q.g.We), option: d(Q.g.Md) },
          });
      q && (q.Vg = d(Q.g.ya));
      return q;
    },
    eE = {},
    sD = function (a, b) {
      var c = eE[a];
      eE[a] = k(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  function fE(a, b, c, d) {}
  fE.H = "internal.executeEventProcessor";
  function gE(a) {
    var b = void 0;
    return qd(b, this.m, 1);
  }
  gE.H = "internal.executeJavascriptString";
  var hE = function (a) {
    var b;
    return b;
  };
  var iE = null;
  function jE() {
    var a = new ab();
    return a;
  }
  jE.R = "getContainerVersion";
  function kE(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  kE.R = "getCookieValues";
  function lE() {
    return nj();
  }
  lE.H = "internal.getCountryCode";
  function mE() {
    var a = [];
    return qd(a);
  }
  mE.H = "internal.getDestinationIds";
  function nE(a, b) {
    var c = null;
    return c;
  }
  nE.H = "internal.getElementAttribute";
  function oE(a) {
    var b = null;
    return b;
  }
  oE.H = "internal.getElementById";
  function pE(a) {
    var b = "";
    return b;
  }
  pE.H = "internal.getElementInnerText";
  function qE(a, b) {
    var c = null;
    return c;
  }
  qE.H = "internal.getElementProperty";
  function rE(a) {
    var b;
    return b;
  }
  rE.H = "internal.getElementValue";
  function sE(a) {
    var b = 0;
    return b;
  }
  sE.H = "internal.getElementVisibilityRatio";
  function tE(a) {
    var b = null;
    return b;
  }
  tE.H = "internal.getElementsByCssSelector";
  function uE(a) {
    var b = void 0;
    return b;
  }
  uE.H = "internal.getEventData";
  var vE = {};
  vE.enableAWFledge = T(22);
  vE.enableAdsConversionValidation = T(13);
  vE.enableAutoPiiOnPhoneAndAddress = T(21);
  vE.enableCachedEcommerceData = T(27);
  vE.enableCcdPreAutoPiiDetection = T(28);
  vE.enableCloudRecommentationsErrorLogging = T(29);
  vE.enableCloudRecommentationsSchemaIngestion = T(30);
  vE.enableCloudRetailInjectPurchaseMetadata = T(32);
  vE.enableCloudRetailLogging = T(31);
  vE.enableCloudRetailPageCategories = T(33);
  vE.enableConsentDisclosureActivity = T(34);
  vE.enableDCFledge = T(38);
  vE.enableDecodeUri = T(48);
  vE.enableDeferAllEnhancedMeasurement = T(39);
  vE.enableEuidAutoMode = T(42);
  vE.enableFormSkipValidation = T(45);
  vE.enableNavigationSwEncryptionVariant = T(62);
  vE.enableNavigationSwExperimentVariant = T(64);
  vE.enableSharedUserId = T(75);
  vE.enableUrlDecodeEventUsage = T(80);
  vE.enableZoneConfigInChildContainers = T(81);
  vE.renameOnoToNonGaiaRemarketing = T(86);
  vE.useEnableAutoEventOnFormApis = T(93);
  vE.autoPiiEligible = rj();
  function wE() {
    return qd(vE);
  }
  wE.H = "internal.getFlags";
  function xE() {
    return new nd(bz);
  }
  xE.H = "internal.getHtmlId";
  function yE(a, b) {
    var c;
    return c;
  }
  yE.H = "internal.getProductSettingsParameter";
  function zE(a, b) {
    var c;
    return c;
  }
  zE.R = "getQueryParameters";
  function AE(a, b) {
    var c;
    return c;
  }
  AE.R = "getReferrerQueryParameters";
  function BE(a) {
    var b = "";
    return b;
  }
  BE.R = "getReferrerUrl";
  function CE() {
    return mj["1"] || "";
  }
  CE.H = "internal.getRegionCode";
  function DE(a, b) {
    var c;
    return c;
  }
  DE.H = "internal.getRemoteConfigParameter";
  function EE(a) {
    var b = "";
    return b;
  }
  EE.R = "getUrl";
  function FE() {
    L(this, "get_user_agent");
    return Dc.userAgent;
  }
  FE.R = "getUserAgent";
  function ME() {
    return (D.gaGlobal = D.gaGlobal || {});
  }
  var NE = function () {
      var a = ME();
      a.hid = a.hid || qb();
      return a.hid;
    },
    OE = function (a, b) {
      var c = ME();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var vF = function (a) {
      this.D = a;
      this.F = "";
      this.m = this.D;
    },
    wF = function (a, b) {
      a.m = b;
      return a;
    },
    xF = function (a, b) {
      a.J = b;
      return a;
    };
  function yF(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  function zF(a, b, c) {
    if (a) {
      var d = a || [];
      if (Array.isArray(d))
        for (
          var e = Va(b) ? b : {}, f = la(d), g = f.next();
          !g.done;
          g = f.next()
        )
          c(g.value, e);
    }
  }
  var PF = window,
    QF = document,
    RF = function (a) {
      var b = PF._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        QF.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === PF["ga-disable-" + a])
      )
        return !0;
      try {
        var c = PF.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Nn("AMP_TOKEN", String(QF.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return QF.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function bG(a) {
    z(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[Q.g.Xa] || {};
    z(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var jG = function (a, b) {};
  function iG(a, b) {
    var c = function () {};
    return c;
  }
  function kG(a, b, c) {}
  var lG = iG;
  var mG = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
  };
  function nG(a, b, c) {
    var d = this;
    K(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? rd(b) : {};
    yz([
      function () {
        return L(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? rd(c) : {},
      g = Cz(this);
    f.originatingEntity = sA(g);
    rx(nx(a, e), g.eventId, f);
  }
  nG.H = "internal.gtagConfig";
  function oG() {
    var a = {};
    return a;
  }
  function qG(a, b) {}
  qG.R = "gtagSet";
  function rG(a, b) {}
  rG.R = "injectHiddenIframe";
  function sG(a, b, c, d, e) {}
  sG.H = "internal.injectHtml";
  var wG = {};
  var xG = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          Lc(
            a,
            function () {
              for (var g = e[f][0], h = 0; h < g.length; h++) I(g[h]);
              g.push = function (m) {
                I(m);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], h = 0; h < g.length; h++) I(g[h]);
              e[f] = null;
            },
            b
          ))
      : Lc(a, c, d, b);
  };
  function yG(a, b, c, d) {
    if (!Jn()) {
      K(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      L(this, "inject_script", a);
      var e = this.m;
      xG(
        a,
        void 0,
        function () {
          b && b.ab(e);
        },
        function () {
          c && c.ab(e);
        },
        wG,
        d
      );
    }
  }
  var zG = Object.freeze({ dl: 1, id: 1 }),
    AG = {};
  function BG(a, b, c, d) {}
  yG.R = "injectScript";
  BG.H = "internal.injectScript";
  function CG(a) {
    var b = !0;
    return b;
  }
  CG.R = "isConsentGranted";
  function DG() {
    return pj();
  }
  DG.H = "internal.isDmaRegion";
  function EG(a) {
    var b = !1;
    return b;
  }
  EG.H = "internal.isEntityInfrastructure";
  var FG = function () {
    var a = oh(function (b) {
      Cz(this).log("error", b);
    });
    a.R = "JSON";
    return a;
  };
  function GG(a) {
    var b = void 0;
    return qd(b);
  }
  GG.H = "internal.legacyParseUrl";
  var HG = function () {
      return !1;
    },
    IG = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  function JG() {
    try {
      L(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = rd(a[b], this.m);
    console.log.apply(console, a);
  }
  JG.R = "logToConsole";
  function KG(a, b) {}
  KG.H = "internal.mergeRemoteConfig";
  function LG(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return qd(d);
  }
  LG.H = "internal.parseCookieValuesFromString";
  function MG(a) {
    var b = void 0;
    return b;
  }
  MG.R = "parseUrl";
  function NG(a) {}
  NG.H = "internal.processAsNewEvent";
  function OG(a, b, c) {
    var d;
    return d;
  }
  OG.H = "internal.pushToDataLayer";
  function PG(a, b) {
    var c = !1;
    return c;
  }
  PG.R = "queryPermission";
  function QG() {
    var a = "";
    return a;
  }
  QG.R = "readCharacterSet";
  function RG() {
    return ui.Ta;
  }
  RG.H = "internal.readDataLayerName";
  function SG() {
    var a = "";
    return a;
  }
  SG.R = "readTitle";
  function TG(a, b) {
    var c = this;
  }
  TG.H = "internal.registerCcdCallback";
  function UG(a) {
    return !0;
  }
  UG.H = "internal.registerDestination";
  var VG = Object.freeze(["config", "event", "get", "set"]);
  function WG(a, b, c) {}
  WG.H = "internal.registerGtagCommandListener";
  function XG(a, b) {
    var c = !1;
    return c;
  }
  XG.H = "internal.removeDataLayerEventListener";
  function YG(a, b) {}
  YG.H = "internal.removeFormData";
  function ZG() {}
  ZG.R = "resetDataLayer";
  function $G(a, b, c, d) {}
  $G.H = "internal.sendGtagEvent";
  function aH(a, b, c) {}
  aH.R = "sendPixel";
  function bH(a, b) {}
  bH.H = "internal.setAnchorHref";
  function cH(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  cH.R = "setCookie";
  function dH(a) {}
  dH.H = "internal.setCorePlatformServices";
  function eH(a, b) {}
  eH.H = "internal.setDataLayerValue";
  function fH(a) {}
  fH.R = "setDefaultConsentState";
  function gH(a, b) {}
  gH.H = "internal.setDelegatedConsentType";
  function hH(a, b) {}
  hH.H = "internal.setFormAction";
  function iH(a, b, c) {
    K(
      this.getName(),
      ["path:!string", "value:?*", "overrideExisting:?boolean"],
      arguments
    );
    L(this, "access_globals", "readwrite", a);
    var d = a.split("."),
      e = Fb(d, [D, G]),
      f = d.pop();
    if (e && (void 0 === e[f] || c)) return (e[f] = rd(b, this.m, KA())), !0;
    return !1;
  }
  iH.R = "setInWindow";
  function jH(a, b, c) {}
  jH.H = "internal.setProductSettingsParameter";
  function kH(a, b, c) {}
  kH.H = "internal.setRemoteConfigParameter";
  function lH(a, b) {
    var c = this;
  }
  lH.H = "internal.setupConversionLinker";
  function mH(a, b, c, d) {
    var e = this;
  }
  mH.R = "sha256";
  function nH(a, b, c) {}
  nH.H = "internal.sortRemoteConfigParameters";
  var oH = {},
    pH = {};
  oH.R = "templateStorage";
  oH.getItem = function (a) {
    var b = null;
    return b;
  };
  oH.setItem = function (a, b) {};
  oH.removeItem = function (a) {};
  oH.clear = function () {};
  function qH(a, b) {
    var c = !1;
    return c;
  }
  qH.H = "internal.testRegex";
  var rH = function (a) {
    var b;
    return b;
  };
  function sH(a) {
    var b;
    return b;
  }
  sH.H = "internal.unsiloId";
  function tH(a) {}
  tH.R = "updateConsentState";
  var uH;
  function vH(a, b, c) {
    uH = uH || new yh();
    uH.add(a, b, c);
  }
  function wH(a, b) {
    var c = (uH = uH || new yh());
    if (c.D.hasOwnProperty(a))
      throw (
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.m.hasOwnProperty(a))
      throw (
        "Attempting to add a private function with an existing API name: " +
        a +
        "."
      );
    c.D[a] = nb(b) ? Vg(a, b) : Wg(a, b);
  }
  function xH() {
    return function (a) {
      var b;
      var c = uH;
      if (c.m.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.D.hasOwnProperty(a))) {
          var e = !1,
            f = this.m.m;
          if (f) {
            var g = f.bc();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var h = c.D.hasOwnProperty(a) ? c.D[a] : void 0;
          b = h;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  var yH = function () {
    var a = function (c) {
        return wH(c.H, c);
      },
      b = function (c) {
        return vH(c.R, c);
      };
    b(wz);
    b(Dz);
    b(IA);
    b(LA);
    b(MA);
    b(QA);
    b(SA);
    b(VA);
    b(FG());
    b(XA);
    b(jE);
    b(kE);
    b(zE);
    b(AE);
    b(BE);
    b(EE);
    b(qG);
    b(rG);
    b(yG);
    b(CG);
    b(JG);
    b(MG);
    b(PG);
    b(QG);
    b(SG);
    b(aH);
    b(cH);
    b(fH);
    b(iH);
    b(mH);
    b(oH);
    b(tH);
    vH("Math", ah());
    vH("Object", wh);
    vH("TestHelper", Ah());
    vH("assertApi", Xg);
    vH("assertThat", Yg);
    vH("decodeUri", bh);
    vH("decodeUriComponent", ch);
    vH("encodeUri", dh);
    vH("encodeUriComponent", eh);
    vH("fail", kh);
    vH("generateRandom", lh);
    vH("getTimestamp", mh);
    vH("getTimestampMillis", mh);
    vH("getType", nh);
    vH("makeInteger", ph);
    vH("makeNumber", qh);
    vH("makeString", rh);
    vH("makeTableMap", sh);
    vH("mock", vh);
    vH("fromBase64", hE, !("atob" in D));
    vH("localStorage", IG, !HG());
    vH("toBase64", rH, !("btoa" in D));
    a(fh);
    a(zz);
    a(Uz);
    a(fA);
    a(mA);
    a(rA);
    a(xA);
    a(GA);
    a(JA);
    a(NA);
    a(OA);
    a(RA);
    a(TA);
    a(UA);
    a(WA);
    a(YA);
    a(aB);
    a(bB);
    a(cB);
    a(dB);
    a(hB);
    a(qB);
    a(rB);
    a(CB);
    a(HB);
    a(MB);
    a(VB);
    a($B);
    a(mC);
    a(oC);
    a(CC);
    a(EC);
    a(fE);
    a(gE);
    a(lE);
    a(mE);
    a(nE);
    a(oE);
    a(pE);
    a(qE);
    a(rE);
    a(sE);
    a(tE);
    a(uE);
    a(wE);
    a(xE);
    a(yE);
    a(CE);
    a(DE);
    a(nG);
    a(sG);
    a(BG);
    a(DG);
    a(EG);
    a(GG);
    a(vA);
    a(KG);
    a(LG);
    a(NG);
    a(OG);
    a(RG);
    a(TG);
    a(UG);
    a(WG);
    a(XG);
    a(YG);
    a($G);
    a(bH);
    a(dH);
    a(eH);
    a(gH);
    a(hH);
    a(jH);
    a(kH);
    a(lH);
    a(nH);
    a(qH);
    a(sH);
    wH("internal.CrossContainerSchema", $A());
    wH("internal.GtagSchema", oG());
    return xH();
  };
  var uz;
  function zH() {
    uz.m.m.P = function (a, b, c) {
      vi.SANDBOXED_JS_SEMAPHORE = vi.SANDBOXED_JS_SEMAPHORE || 0;
      vi.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        vi.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function AH(a) {
    void 0 !== a &&
      z(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Ki[e] = Ki[e] || [];
          Ki[e].push(b);
        }
      });
  }
  var BH = encodeURI,
    Y = encodeURIComponent,
    CH = Array.isArray,
    DH = function (a, b, c) {
      Oc(a, b, c);
    },
    EH = function (a, b) {
      if (!a) return !1;
      var c = yj(Cj(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    FH = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var dI = D.clearTimeout,
    eI = D.setTimeout,
    fI = function (a, b, c) {
      if (Jn()) {
        b && I(b);
      } else return Lc(a, b, c);
    },
    gI = function () {
      return D.location.href;
    },
    hI = function (a) {
      return yj(Cj(a), "fragment");
    },
    iI = function (a) {
      return zj(Cj(a));
    },
    jI = function (a, b) {
      return Ui(a, b || 2);
    },
    kI = function (a, b, c) {
      return b ? uy(a, b, c) : ty(a);
    },
    lI = function (a, b) {
      D[a] = b;
    },
    mI = function (a, b, c) {
      b && (void 0 === D[a] || (c && !D[a])) && (D[a] = b);
      return D[a];
    },
    nI = function (a, b) {
      if (Jn()) {
        b && I(b);
      } else Nc(a, b);
    },
    oI = function (a) {
      return !!Iz(a, "init", !1);
    },
    pI = function (a) {
      Gz(a, "init", !0);
    };

  var qI = {};
  var Z = { securityGroups: {} };

  (Z.securityGroups.jsm = ["customScripts"]),
    (Z.__jsm = function (a) {
      if (void 0 !== a.vtp_javascript) {
        var b = a.vtp_javascript;
        try {
          var c = mI("google_tag_manager");
          return c && c.e && c.e(b);
        } catch (d) {}
      }
    }),
    (Z.__jsm.C = "jsm"),
    (Z.__jsm.isVendorTemplate = !0),
    (Z.__jsm.priorityOverride = 0),
    (Z.__jsm.isInfrastructure = !1),
    (Z.__jsm.runInSiloedMode = !1);
  (Z.securityGroups.flc = []),
    (Z.__flc = function (a) {
      var b =
          !a.hasOwnProperty("vtp_enableConversionLinker") ||
          !!a.vtp_enableConversionLinker,
        c = FH(a.vtp_customVariable || [], "key", "value") || {},
        d = {},
        e =
          ((d[Q.g.fa] = jI(Q.g.fa)),
          (d[Q.g.Se] = !0 === a.vtp_useImageTag ? !1 : !0),
          (d[Q.g.Ua] = a.vtp_conversionCookiePrefix || void 0),
          (d[Q.g.ra] = b),
          (d[Q.g.rb] = a.vtp_sessionId),
          (d[Q.g.ng] = a.vtp_matchIdVariable),
          (d.oref = a.vtp_useImageTag ? void 0 : a.vtp_url),
          (d.tran = a.vtp_transactionVariable),
          (d.u = a.vtp_userVariable),
          (d[Q.g.Ca] = a.vtp_userDataVariable),
          d);
      T(38) && ((e[Q.g.Aa] = jI(Q.g.Aa)), (e[Q.g.la] = jI(Q.g.la)));
      for (var f in c) c.hasOwnProperty(f) && (e[f] = c[f]);
      var g = "DC-" + a.vtp_advertiserId,
        h =
          g +
          "/" +
          a.vtp_groupTag +
          "/" +
          (a.vtp_activityTag +
            "+" +
            ({ UNIQUE: "unique", SESSION: "per_session" }[a.vtp_ordinalType] ||
              "standard"));
      pw(g, void 0, { source: 7, fromContainerExecution: !0, siloed: !0 });
      var m = {
        noGtmEvent: !0,
        isGtmEvent: !0,
        onSuccess: a.vtp_gtmOnSuccess,
        onFailure: a.vtp_gtmOnFailure,
      };
      rx(ox(Tj(h), "", e), a.vtp_gtmEventId, m);
    }),
    (Z.__flc.C = "flc"),
    (Z.__flc.isVendorTemplate = !0),
    (Z.__flc.priorityOverride = 0),
    (Z.__flc.isInfrastructure = !1),
    (Z.__flc.runInSiloedMode = !1);
  (Z.securityGroups.c = ["google"]),
    (Z.__c = function (a) {
      return a.vtp_value;
    }),
    (Z.__c.C = "c"),
    (Z.__c.isVendorTemplate = !0),
    (Z.__c.priorityOverride = 0),
    (Z.__c.isInfrastructure = !0),
    (Z.__c.runInSiloedMode = !0);
  (Z.securityGroups.e = ["google"]),
    (Z.__e = function (a) {
      return String(a.vtp_gtmCachedValues.event);
    }),
    (Z.__e.C = "e"),
    (Z.__e.isVendorTemplate = !0),
    (Z.__e.priorityOverride = 0),
    (Z.__e.isInfrastructure = !0),
    (Z.__e.runInSiloedMode = !0);
  (Z.securityGroups.f = ["google"]),
    (Z.__f = function (a) {
      var b = jI("gtm.referrer", 1) || G.referrer;
      return b
        ? a.vtp_component && "URL" != a.vtp_component
          ? yj(
              Cj(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : iI(String(b))
        : String(b);
    }),
    (Z.__f.C = "f"),
    (Z.__f.isVendorTemplate = !0),
    (Z.__f.priorityOverride = 0),
    (Z.__f.isInfrastructure = !0),
    (Z.__f.runInSiloedMode = !1);
  (Z.securityGroups.cl = ["google"]),
    (function () {
      function a(b) {
        var c = b.target;
        if (c) {
          var d = Ez(c, "gtm.click");
          kI(d);
        }
      }
      (function (b) {
        Z.__cl = b;
        Z.__cl.C = "cl";
        Z.__cl.isVendorTemplate = !0;
        Z.__cl.priorityOverride = 0;
        Z.__cl.isInfrastructure = !1;
        Z.__cl.runInSiloedMode = !1;
      })(function (b) {
        if (!oI("cl")) {
          var c = mI("document");
          Pc(c, "click", a, !0);
          pI("cl");
        }
        I(b.vtp_gtmOnSuccess);
      });
    })();
  (Z.securityGroups.j = ["google"]),
    (Z.__j = function (a) {
      for (
        var b = String(a.vtp_name).split("."), c = mI(b.shift()), d = 0;
        d < b.length;
        d++
      )
        c = c && c[b[d]];
      return c;
    }),
    (Z.__j.C = "j"),
    (Z.__j.isVendorTemplate = !0),
    (Z.__j.priorityOverride = 0),
    (Z.__j.isInfrastructure = !0),
    (Z.__j.runInSiloedMode = !1);
  (Z.securityGroups.k = ["google"]),
    (Z.__k = function (a) {
      var b = a.vtp_name,
        c = jI("gtm.cookie", 1),
        d = !!a.vtp_decodeCookie;
      return Qn(b, c, void 0 === d ? !0 : !!d)[0];
    }),
    (Z.__k.C = "k"),
    (Z.__k.isVendorTemplate = !0),
    (Z.__k.priorityOverride = 0),
    (Z.__k.isInfrastructure = !0),
    (Z.__k.runInSiloedMode = !1);
  (Z.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.C = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            h = 0;
          h < c.length;
          h++
        ) {
          var m = c[h],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!l(r)) throw d(p, {}, "Key must be a string.");
            if ("read" === q) {
              if (-1 < e.indexOf(r)) return;
            } else if ("write" === q) {
              if (-1 < f.indexOf(r)) return;
            } else if ("readwrite" === q) {
              if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return;
            } else if ("execute" === q) {
              if (-1 < g.indexOf(r)) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.C = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !0;
        Z.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : jI("gtm.url", 1)) || gI();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return iI(String(c));
        var e = Cj(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              h = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(h)
                ? h
                : String(h).replace(/\s+/g, "").split(",")
              : [String(h)];
            for (var p = 0; p < n.length; p++) {
              var q = yj(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = yj(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Z.securityGroups.v = ["google"]),
    (Z.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = jI(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return void 0 !== c ? c : a.vtp_defaultValue;
    }),
    (Z.__v.C = "v"),
    (Z.__v.isVendorTemplate = !0),
    (Z.__v.priorityOverride = 0),
    (Z.__v.isInfrastructure = !0),
    (Z.__v.runInSiloedMode = !1);

  (Z.securityGroups.aev = ["google"]),
    (function () {
      function a(r, t, u, v, w) {
        w || (w = "element");
        var x = t + "." + u,
          y;
        if (n.hasOwnProperty(x)) y = n[x];
        else {
          var B = r[w];
          if (B && ((y = v(B)), (n[x] = y), p.push(x), 35 < p.length)) {
            var A = p.shift();
            delete n[A];
          }
        }
        return y;
      }
      function b(r, t, u) {
        var v = r[q[t]];
        return void 0 !== v ? v : u;
      }
      function c(r, t) {
        if (!r) return !1;
        var u = d(gI());
        Array.isArray(t) ||
          (t = String(t || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var v = [u], w = 0; w < t.length; w++) {
          var x = t[w];
          if (x.hasOwnProperty("is_regex"))
            if (x.is_regex)
              try {
                x = new RegExp(x.domain);
              } catch (A) {
                continue;
              }
            else x = x.domain;
          var y = d(r);
          if (x instanceof RegExp) {
            if (x.test(y)) return !1;
          } else {
            var B = x;
            if (0 != B.length) {
              if (0 <= y.indexOf(B)) return !1;
              v.push(d(B));
            }
          }
        }
        return !EH(r, v);
      }
      function d(r) {
        m.test(r) || (r = "http://" + r);
        return yj(Cj(r), "HOST", !0);
      }
      function e(r, t, u, v) {
        switch (r) {
          case "SUBMIT_TEXT":
            return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
          case "LENGTH":
            var w = a(t, u, "FORM." + r, g);
            return void 0 === w ? v : w;
          case "INTERACTED_FIELD_ID":
            return h(t, "id", v);
          case "INTERACTED_FIELD_NAME":
            return h(t, "name", v);
          case "INTERACTED_FIELD_TYPE":
            return h(t, "type", v);
          case "INTERACTED_FIELD_POSITION":
            var x = t.interactedFormFieldPosition;
            return void 0 === x ? v : x;
          case "INTERACT_SEQUENCE_NUMBER":
            var y = t.interactSequenceNumber;
            return void 0 === y ? v : y;
          default:
            return v;
        }
      }
      function f(r) {
        switch (r.tagName.toLowerCase()) {
          case "input":
            return Rc(r, "value");
          case "button":
            return Sc(r);
          default:
            return null;
        }
      }
      function g(r) {
        if ("form" === r.tagName.toLowerCase() && r.elements) {
          for (var t = 0, u = 0; u < r.elements.length; u++)
            Nz(r.elements[u]) && t++;
          return t;
        }
      }
      function h(r, t, u) {
        var v = r.interactedFormField;
        return (v && Rc(v, t)) || u;
      }
      var m = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (r) {
        Z.__aev = r;
        Z.__aev.C = "aev";
        Z.__aev.isVendorTemplate = !0;
        Z.__aev.priorityOverride = 0;
        Z.__aev.isInfrastructure = !0;
        Z.__aev.runInSiloedMode = !1;
      })(function (r) {
        var t = r.vtp_gtmEventId,
          u = r.vtp_defaultValue,
          v = r.vtp_varType,
          w = r.vtp_gtmCachedValues.gtm;
        switch (v) {
          case "TAG_NAME":
            var x = w.element;
            return (x && x.tagName) || u;
          case "TEXT":
            return a(w, t, v, Sc) || u;
          case "URL":
            var y;
            a: {
              var B = String(w.elementUrl || u || ""),
                A = Cj(B),
                E = String(r.vtp_component || "URL");
              switch (E) {
                case "URL":
                  y = B;
                  break a;
                case "IS_OUTBOUND":
                  y = c(B, r.vtp_affiliatedDomains);
                  break a;
                default:
                  y = yj(
                    A,
                    E,
                    r.vtp_stripWww,
                    r.vtp_defaultPages,
                    r.vtp_queryKey
                  );
              }
            }
            return y;
          case "ATTRIBUTE":
            var F;
            if (void 0 === r.vtp_attribute) F = b(w, v, u);
            else {
              var C = w.element;
              F = (C && Rc(C, r.vtp_attribute)) || u || "";
            }
            return F;
          case "MD":
            var H = r.vtp_mdValue,
              N = a(w, t, "MD", $H);
            return H && N ? cI(N, H) || u : N || u;
          case "FORM":
            return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
          default:
            return b(w, v, u);
        }
      });
    })();
  (Z.securityGroups.read_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_data_layer = b;
        Z.__read_data_layer.C = "read_data_layer";
        Z.__read_data_layer.isVendorTemplate = !0;
        Z.__read_data_layer.priorityOverride = 0;
        Z.__read_data_layer.isInfrastructure = !1;
        Z.__read_data_layer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedKeys || "specific",
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!l(g)) throw e(f, {}, "Keys must be strings.");
            if ("any" !== c) {
              try {
                if (ug(g, d)) return;
              } catch (h) {
                throw e(f, {}, "Invalid key filter.");
              }
              throw e(
                f,
                {},
                "Prohibited read from data layer variable: " + g + "."
              );
            }
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.unsafe_access_globals = ["google"]),
    (function () {
      function a(c, d) {
        c("access_globals", "readwrite", d);
      }
      function b(c, d) {
        return { key: d };
      }
      (function (c) {
        Z.__unsafe_access_globals = c;
        Z.__unsafe_access_globals.C = "unsafe_access_globals";
        Z.__unsafe_access_globals.isVendorTemplate = !0;
        Z.__unsafe_access_globals.priorityOverride = 0;
        Z.__unsafe_access_globals.isInfrastructure = !1;
        Z.__unsafe_access_globals.runInSiloedMode = !1;
      })(function (c) {
        var d = c.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!l(f)) throw d(e, {}, "Wrong key type. Must be string.");
          },
          N: b,
          mj: a,
        };
      });
    })();
  (Z.securityGroups.fsl = []),
    (function () {
      function a() {
        var e = mI("document"),
          f = c(),
          g = HTMLFormElement.prototype.submit;
        Pc(
          e,
          "click",
          function (h) {
            var m = h.target;
            if (
              m &&
              (m = Uc(m, ["button", "input"], 100)) &&
              ("submit" == m.type || "image" == m.type) &&
              m.name &&
              Rc(m, "value")
            ) {
              var n;
              m.form
                ? m.form.tagName
                  ? (n = m.form)
                  : (n = G.getElementById(m.form))
                : (n = Uc(m, ["form"], 100));
              n && f.store(n, m);
            }
          },
          !1
        );
        Pc(
          e,
          "submit",
          function (h) {
            var m = h.target;
            if (!m) return h.returnValue;
            var n = h.defaultPrevented || !1 === h.returnValue,
              p = b(m) && !n,
              q = f.get(m),
              r = !0;
            if (
              d(
                m,
                function () {
                  if (r) {
                    var t;
                    q &&
                      ((t = e.createElement("input")),
                      (t.type = "hidden"),
                      (t.name = q.name),
                      (t.value = q.value),
                      m.appendChild(t));
                    g.call(m);
                    t && m.removeChild(t);
                  }
                },
                n,
                p,
                q
              )
            )
              r = !1;
            else
              return (
                n ||
                  (h.preventDefault && h.preventDefault(),
                  (h.returnValue = !1)),
                !1
              );
            return h.returnValue;
          },
          !1
        );
        HTMLFormElement.prototype.submit = function () {
          var h = this,
            m = b(h),
            n = !0;
          d(
            h,
            function () {
              n && g.call(h);
            },
            !1,
            m
          ) && (g.call(h), (n = !1));
        };
      }
      function b(e) {
        var f = e.target;
        return f && "_self" !== f && "_parent" !== f && "_top" !== f ? !1 : !0;
      }
      function c() {
        var e = [],
          f = function (g) {
            return pb(e, function (h) {
              return h.form === g;
            });
          };
        return {
          store: function (g, h) {
            var m = f(g);
            m ? (m.button = h) : e.push({ form: g, button: h });
          },
          get: function (g) {
            var h = f(g);
            return h ? h.button : null;
          },
        };
      }
      function d(e, f, g, h, m) {
        var n = Iz("fsl", g ? "nv.mwt" : "mwt", 0),
          p;
        p = g ? Iz("fsl", "nv.ids", []) : Iz("fsl", "ids", []);
        if (!p.length) return !0;
        var q = Ez(e, "gtm.formSubmit", p),
          r = e.action;
        r && r.tagName && (r = e.cloneNode(!1).action);
        q["gtm.elementUrl"] = r;
        M(121);
        if ("https://www.facebook.com/tr/" === r) return M(122), !0;
        m && (q["gtm.formSubmitElement"] = m);
        if (h && n) {
          if (!kI(q, vy(f, n), n)) return !1;
        } else kI(q, function () {}, n || 2e3);
        return !0;
      }
      (function (e) {
        Z.__fsl = e;
        Z.__fsl.C = "fsl";
        Z.__fsl.isVendorTemplate = !0;
        Z.__fsl.priorityOverride = 0;
        Z.__fsl.isInfrastructure = !1;
        Z.__fsl.runInSiloedMode = !1;
      })(function (e) {
        var f = e.vtp_waitForTags,
          g = e.vtp_checkValidation,
          h = Number(e.vtp_waitForTagsTimeout);
        if (!h || 0 >= h) h = 2e3;
        var m = e.vtp_uniqueTriggerId || "0";
        if (f) {
          var n = function (q) {
            return Math.max(h, q);
          };
          Hz("fsl", "mwt", n, 0);
          g || Hz("fsl", "nv.mwt", n, 0);
        }
        var p = function (q) {
          q.push(m);
          return q;
        };
        Hz("fsl", "ids", p, []);
        g || Hz("fsl", "nv.ids", p, []);
        oI("fsl") || (a(), pI("fsl"));
        I(e.vtp_gtmOnSuccess);
      });
    })();

  (Z.securityGroups.lcl = []),
    (function () {
      function a() {
        var e = mI("document"),
          f = 0,
          g = function (h) {
            var m = h.target;
            if (
              m &&
              3 !== h.which &&
              !(h.kh || (h.timeStamp && h.timeStamp === f))
            ) {
              f = h.timeStamp;
              m = Uc(m, ["a", "area"], 100);
              if (!m) return h.returnValue;
              var n = h.defaultPrevented || !1 === h.returnValue,
                p = Iz("lcl", n ? "nv.mwt" : "mwt", 0),
                q;
              q = n ? Iz("lcl", "nv.ids", []) : Iz("lcl", "ids", []);
              for (
                var r = [],
                  t = Iz("lcl", "aff.map", {}),
                  u = la(q),
                  v = u.next();
                !v.done;
                v = u.next()
              ) {
                var w = v.value,
                  x = t[w];
                (x && !b(h, x, m)) || r.push(w);
              }
              q = r;
              if (q.length) {
                var y = Ez(m, "gtm.linkClick", q),
                  B = c(h, m, e);
                y["gtm.elementText"] = Sc(m);
                y["gtm.willOpenInNewWindow"] = !B;
                if (B && !n && p && m.href) {
                  var A = !!pb(
                      String($c(m, "rel") || "").split(" "),
                      function (H) {
                        return "noreferrer" === H.toLowerCase();
                      }
                    ),
                    E = mI(($c(m, "target") || "_self").substring(1)),
                    F = !0,
                    C = vy(function () {
                      var H;
                      if ((H = F && E)) {
                        var N;
                        a: if (A) {
                          var O;
                          try {
                            O = new MouseEvent(h.type, { bubbles: !0 });
                          } catch (U) {
                            if (!e.createEvent) {
                              N = !1;
                              break a;
                            }
                            O = e.createEvent("MouseEvents");
                            O.initEvent(h.type, !0, !0);
                          }
                          O.kh = !0;
                          h.target.dispatchEvent(O);
                          N = !0;
                        } else N = !1;
                        H = !N;
                      }
                      H && (E.location.href = $c(m, "href"));
                    }, p);
                  if (kI(y, C, p)) F = !1;
                  else
                    return (
                      h.preventDefault && h.preventDefault(),
                      (h.returnValue = !1)
                    );
                } else kI(y, function () {}, p || 2e3);
                return !0;
              }
            }
          };
        Pc(e, "click", g, !1);
        Pc(e, "auxclick", g, !1);
      }
      function b(e, f, g) {
        for (
          var h = yj(
              Cj(
                (g.attributes && g.attributes.formaction ? g.formAction : "") ||
                  g.action ||
                  $c(g, "href") ||
                  g.src ||
                  g.code ||
                  g.codebase ||
                  ""
              ),
              "host"
            ),
            m = 0;
          m < f.length;
          m++
        )
          try {
            if (new RegExp(f[m]).test(h)) return !1;
          } catch (n) {}
        return !0;
      }
      function c(e, f, g) {
        if (2 === e.which || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
          return !1;
        var h = $c(f, "href");
        if (
          -1 !== h.indexOf(":") &&
          !d.some(function (r) {
            return 0 === h.indexOf(r);
          })
        )
          return !1;
        var m = h.indexOf("#"),
          n = $c(f, "target");
        if ((n && "_self" !== n && "_parent" !== n && "_top" !== n) || 0 === m)
          return !1;
        if (0 < m) {
          var p = iI(h),
            q = iI(g.location);
          return p !== q;
        }
        return !0;
      }
      var d = ["http://", "https://", "javascript:", "file://"];
      (function (e) {
        Z.__lcl = e;
        Z.__lcl.C = "lcl";
        Z.__lcl.isVendorTemplate = !0;
        Z.__lcl.priorityOverride = 0;
        Z.__lcl.isInfrastructure = !1;
        Z.__lcl.runInSiloedMode = !1;
      })(function (e) {
        var f = void 0 === e.vtp_waitForTags ? !0 : e.vtp_waitForTags,
          g = void 0 === e.vtp_checkValidation ? !0 : e.vtp_checkValidation,
          h = Number(e.vtp_waitForTagsTimeout);
        if (!h || 0 >= h) h = 2e3;
        var m = e.vtp_uniqueTriggerId || "0";
        if (f) {
          var n = function (q) {
            return Math.max(h, q);
          };
          Hz("lcl", "mwt", n, 0);
          g || Hz("lcl", "nv.mwt", n, 0);
        }
        var p = function (q) {
          q.push(m);
          return q;
        };
        Hz("lcl", "ids", p, []);
        g || Hz("lcl", "nv.ids", p, []);
        oI("lcl") || (a(), pI("lcl"));
        I(e.vtp_gtmOnSuccess);
      });
    })();
  (Z.securityGroups.evl = ["google"]),
    (function () {
      function a() {
        var f = Number(jI("gtm.start")) || 0;
        return new Date().getTime() - f;
      }
      function b(f, g, h, m) {
        function n() {
          if (!wr(f.target)) {
            g.has(d.Af) || g.set(d.Af, "" + a());
            g.has(d.Kg) || g.set(d.Kg, "" + a());
            var q = 0;
            g.has(d.Cf) && (q = Number(g.get(d.Cf)));
            q += 100;
            g.set(d.Cf, "" + q);
            if (q >= h) {
              var r = Ez(f.target, "gtm.elementVisibility", [g.uid]),
                t = yr(f.target);
              r["gtm.visibleRatio"] = Math.round(1e3 * t) / 10;
              r["gtm.visibleTime"] = h;
              r["gtm.visibleFirstTime"] = Number(g.get(d.Kg));
              r["gtm.visibleLastTime"] = Number(g.get(d.Af));
              kI(r);
              m();
            }
          }
        }
        if (!g.has(d.ie) && (0 == h && n(), !g.has(d.ld))) {
          var p = mI("self").setInterval(n, 100);
          g.set(d.ie, p);
        }
      }
      function c(f) {
        f.has(d.ie) &&
          (mI("self").clearInterval(Number(f.get(d.ie))), f.m(d.ie));
      }
      var d = {
          ie: "PollingId",
          Kg: "FirstOnScreen",
          Af: "RecentOnScreen",
          Cf: "TotalVisibleTime",
          ld: "HasFired",
        },
        e = function (f, g) {
          this.element = f;
          this.uid = g;
        };
      e.prototype.has = function (f) {
        return !!this.element.dataset["gtmVis" + f + this.uid];
      };
      e.prototype.get = function (f) {
        return this.element.dataset["gtmVis" + f + this.uid];
      };
      e.prototype.set = function (f, g) {
        this.element.dataset["gtmVis" + f + this.uid] = g;
      };
      e.prototype.m = function (f) {
        delete this.element.dataset["gtmVis" + f + this.uid];
      };
      (function (f) {
        Z.__evl = f;
        Z.__evl.C = "evl";
        Z.__evl.isVendorTemplate = !0;
        Z.__evl.priorityOverride = 0;
        Z.__evl.isInfrastructure = !1;
        Z.__evl.runInSiloedMode = !1;
      })(function (f) {
        function g() {
          var x = !1,
            y = null;
          if ("CSS" === m) {
            try {
              y = Ch(n);
            } catch (C) {}
            x = !!y && v.length != y.length;
          } else if ("ID" === m) {
            var B = G.getElementById(n);
            B && ((y = [B]), (x = 1 != v.length || v[0] !== B));
          }
          y || ((y = []), (x = 0 < v.length));
          if (x) {
            for (var A = 0; A < v.length; A++) {
              var E = new e(v[A], t);
              c(E);
            }
            v = [];
            for (var F = 0; F < y.length; F++) v.push(y[F]);
            0 <= w && Er(w);
            0 < v.length && (w = Dr(h, v, [r]));
          }
        }
        function h(x) {
          var y = new e(x.target, t);
          x.intersectionRatio >= r
            ? y.has(d.ld) ||
              b(
                x,
                y,
                q,
                "ONCE" === u
                  ? function () {
                      for (var B = 0; B < v.length; B++) {
                        var A = new e(v[B], t);
                        A.set(d.ld, "1");
                        c(A);
                      }
                      Er(w);
                      p && lB(g);
                    }
                  : function () {
                      y.set(d.ld, "1");
                      c(y);
                    }
              )
            : (c(y),
              "MANY_PER_ELEMENT" === u && y.has(d.ld) && (y.m(d.ld), y.m(d.Cf)),
              y.m(d.Af));
        }
        var m = f.vtp_selectorType,
          n;
        "ID" === m
          ? (n = String(f.vtp_elementId))
          : "CSS" === m && (n = String(f.vtp_elementSelector));
        var p = !!f.vtp_useDomChangeListener,
          q =
            (f.vtp_useOnScreenDuration && Number(f.vtp_onScreenDuration)) || 0,
          r = (Number(f.vtp_onScreenRatio) || 50) / 100,
          t = f.vtp_uniqueTriggerId,
          u = f.vtp_firingFrequency,
          v = [],
          w = -1;
        g();
        p && kB(g);
        I(f.vtp_gtmOnSuccess);
      });
    })();

  (Z.securityGroups.gaawe = ["google"]),
    (function () {
      function a(f, g, h) {
        for (var m = 0; m < g.length; m++)
          f.hasOwnProperty(g[m]) && (f[g[m]] = h(f[g[m]]));
      }
      function b(f, g, h) {
        var m = {},
          n = function (u, v) {
            m[u] = m[u] || v;
          },
          p = function (u, v, w) {
            w = void 0 === w ? !1 : w;
            c.push(6);
            if (u) {
              m.items = m.items || [];
              for (var x = {}, y = 0; y < u.length; x = { Ie: void 0 }, y++)
                (x.Ie = {}),
                  z(
                    u[y],
                    (function (A) {
                      return function (E, F) {
                        w && "id" === E
                          ? (A.Ie.promotion_id = F)
                          : w && "name" === E
                          ? (A.Ie.promotion_name = F)
                          : (A.Ie[E] = F);
                      };
                    })(x)
                  ),
                  m.items.push(x.Ie);
            }
            if (v)
              for (var B in v) d.hasOwnProperty(B) ? n(d[B], v[B]) : n(B, v[B]);
          },
          q;
        "dataLayer" === f.vtp_getEcommerceDataFrom
          ? (q = f.vtp_gtmCachedValues.eventModel) ||
            (q = f.vtp_gtmCachedValues.ecommerce)
          : ((q = f.vtp_ecommerceMacroData),
            Va(q) && q.ecommerce && !q.items && (q = q.ecommerce));
        if (Va(q)) {
          var r = !1,
            t;
          for (t in q)
            q.hasOwnProperty(t) &&
              (r || (c.push(5), (r = !0)),
              "currencyCode" === t
                ? n("currency", q.currencyCode)
                : "impressions" === t && g === Q.g.eb
                ? p(q.impressions, null)
                : "promoClick" === t && g === Q.g.Bb
                ? p(q.promoClick.promotions, q.promoClick.actionField, !0)
                : "promoView" === t && g === Q.g.fb
                ? p(q.promoView.promotions, q.promoView.actionField, !0)
                : e.hasOwnProperty(t)
                ? g === e[t] && p(q[t].products, q[t].actionField)
                : (m[t] = q[t]));
          k(m, h);
        }
      }
      var c = [],
        d = { id: "transaction_id", revenue: "value", list: "item_list_name" },
        e = {
          click: "select_item",
          detail: "view_item",
          add: "add_to_cart",
          remove: "remove_from_cart",
          checkout: "begin_checkout",
          checkout_option: "checkout_option",
          purchase: "purchase",
          refund: "refund",
        };
      (function (f) {
        Z.__gaawe = f;
        Z.__gaawe.C = "gaawe";
        Z.__gaawe.isVendorTemplate = !0;
        Z.__gaawe.priorityOverride = 0;
        Z.__gaawe.isInfrastructure = !1;
        Z.__gaawe.runInSiloedMode = !1;
      })(function (f) {
        var g;
        g = f.vtp_migratedToV2
          ? String(f.vtp_measurementIdOverride)
          : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
        if (l(g) && 0 === g.indexOf("G-")) {
          var h = String(f.vtp_eventName),
            m = {};
          c = [];
          f.vtp_sendEcommerceData &&
            (ji.hasOwnProperty(h) || "checkout_option" === h) &&
            b(f, h, m);
          var n = f.vtp_eventSettingsVariable;
          if (n) for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
          if (f.vtp_eventSettingsTable) {
            var q = FH(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
              r;
            for (r in q) m[r] = q[r];
          }
          var t = FH(f.vtp_eventParameters, "name", "value"),
            u;
          for (u in t) t.hasOwnProperty(u) && (m[u] = t[u]);
          var v = f.vtp_userDataVariable;
          v && (m[Q.g.Ca] = v);
          if (m.hasOwnProperty(Q.g.Xa) || f.vtp_userProperties) {
            var w = m[Q.g.Xa] || {};
            k(FH(f.vtp_userProperties, "name", "value"), w);
            m[Q.g.Xa] = w;
          }
          var x = {
            originatingEntity: xw(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName),
          };
          if (0 < c.length) {
            var y = {};
            x.eventMetadata = ((y.event_usage = c), y);
          }
          a(m, ki, function (A) {
            return vb(A);
          });
          a(m, mi, function (A) {
            return Number(A);
          });
          var B = f.vtp_gtmEventId;
          x.noGtmEvent = !0;
          rx(ox(g, h, m), B, x);
          I(f.vtp_gtmOnSuccess);
        } else I(f.vtp_gtmOnFailure);
      });
    })();

  (Z.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Z.__load_google_tags = b;
        Z.__load_google_tags.C = "load_google_tags";
        Z.__load_google_tags.isVendorTemplate = !0;
        Z.__load_google_tags.priorityOverride = 0;
        Z.__load_google_tags.isInfrastructure = !1;
        Z.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          h = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!l(q)) throw h(m, {}, "Tag ID must be a string.");
              if ("any" !== c && ("specific" !== c || -1 === g.indexOf(q)))
                throw h(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (void 0 !== q) {
                if (!l(q)) throw h(m, {}, "First party URL must be a string.");
                if (d) {
                  if ("any" === e) return;
                  if ("specific" === e)
                    try {
                      if (Lg(Cj(q), f)) return;
                    } catch (r) {
                      throw h(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw h(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.ua = ["google"]),
    (function () {
      function a(m, n) {
        for (var p in m)
          if (!h[p] && m.hasOwnProperty(p)) {
            var q = g[p] ? vb(m[p]) : m[p];
            "anonymizeIp" != p || q || (q = void 0);
            n[p] = q;
          }
      }
      function b(m) {
        var n = {};
        m.vtp_gaSettings &&
          k(FH(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
        k(FH(m.vtp_fieldsToSet, "fieldName", "value"), n);
        vb(n.urlPassthrough) && (n._useUp = !0);
        m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
        return n;
      }
      function c(m, n) {
        return void 0 === n ? n : m(n);
      }
      function d(m, n, p) {
        var q = function (N, O, U) {
            for (var X in N)
              if (r.hasOwnProperty(X)) {
                var P = U[O] || {};
                P.actionField = P.actionField || {};
                P.actionField[r[X]] = N[X];
                U[O] = P;
              }
          },
          r = {
            transaction_id: "id",
            affiliation: "affiliation",
            value: "revenue",
            tax: "tax",
            shipping: "shipping",
            coupon: "coupon",
            item_list_name: "list",
          },
          t = {},
          u =
            ((t[Q.g.mc] = "click"),
            (t[Q.g.Ka] = "detail"),
            (t[Q.g.jc] = "add"),
            (t[Q.g.kc] = "remove"),
            (t[Q.g.Mb] = "checkout"),
            (t[Q.g.Ha] = "purchase"),
            (t[Q.g.nc] = "refund"),
            t),
          v;
        if (m.vtp_useEcommerceDataLayer) {
          var w = !1;
          m.vtp_useGA4SchemaForEcommerce &&
            ((v = m.vtp_gtmCachedValues.eventModel), (w = !!v));
          w || (v = jI("ecommerce", 1));
        } else
          m.vtp_ecommerceMacroData &&
            ((v = m.vtp_ecommerceMacroData.ecommerce),
            !v &&
              m.vtp_useGA4SchemaForEcommerce &&
              (v = m.vtp_ecommerceMacroData));
        if (!Va(v)) return;
        v = Object(v);
        var x = {},
          y = v.currencyCode;
        m.vtp_useGA4SchemaForEcommerce && (y = y || v.currency);
        var B = Ab(n, "currencyCode", y);
        B && (x.currencyCode = B);
        v.impressions && (x.impressions = v.impressions);
        v.promoView && (x.promoView = v.promoView);
        if (m.vtp_useGA4SchemaForEcommerce) {
          if (p === Q.g.eb && !v.impressions)
            v.items &&
              ((x.impressions = v.items),
              (x.translateIfKeyEquals = "impressions"));
          else if (p === Q.g.fb && !v.promoView)
            (v.promoView = {}),
              v.items &&
                ((x.promoView = {}),
                (x.promoView.promotions = v.items),
                (x.translateIfKeyEquals = "promoView"));
          else if (p === Q.g.Bb && !v.promoClick)
            (v.promoClick = {}),
              v.items &&
                ((x.promoClick = {}),
                (x.promoClick.promotions = v.items),
                (x.translateIfKeyEquals = "promoClick"),
                q(v, "promoClick", x));
          else if (u.hasOwnProperty(p)) {
            var A = u[p];
            !v[A] &&
              v.items &&
              ((x[A] = {}),
              (x[A].products = v.items),
              (x.translateIfKeyEquals = "products"),
              q(v, A, x));
          }
          var E = x.translateIfKeyEquals;
          if ("promoClick" === E || "products" === E) return x;
        }
        if (v.promoClick) return (x.promoClick = v.promoClick), x;
        for (
          var F =
              "detail checkout checkout_option click add remove purchase refund".split(
                " "
              ),
            C = 0;
          C < F.length;
          C++
        ) {
          var H = v[F[C]];
          if (H) return (x[F[C]] = H), x;
        }
        m.vtp_useGA4SchemaForEcommerce && u.hasOwnProperty(p) && q(v, u[p], x);
        return x;
      }
      function e(m, n) {
        if (
          !(
            f ||
            (T(78) &&
              Hj() &&
              n._x_19 &&
              !m.vtp_useDebugVersion &&
              !m.vtp_useInternalVersion)
          )
        ) {
          var p = m.vtp_useDebugVersion
            ? "u/analytics_debug.js"
            : "analytics.js";
          m.vtp_useInternalVersion &&
            !m.vtp_useDebugVersion &&
            (p = "internal/" + p);
          f = !0;
          var q = m.vtp_gtmOnFailure,
            r = Hj() ? Gj(n._x_19, "/analytics.js") : void 0,
            t = br(
              "https:",
              "http:",
              "//www.google-analytics.com/" + p,
              n && !!n.forceSSL
            );
          fI(
            "analytics.js" === p && r ? r : t,
            function () {
              var u = Hw();
              (u && u.loaded) || q();
            },
            q
          );
        }
      }
      var f,
        g = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          cookieUpdate: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useAmpClientId: !0,
          useBeacon: !0,
          storeGac: !0,
          allowAdFeatures: !0,
          allowAdPersonalizationSignals: !0,
          _cd2l: !0,
        },
        h = { urlPassthrough: !0 };
      (function (m) {
        Z.__ua = m;
        Z.__ua.C = "ua";
        Z.__ua.isVendorTemplate = !0;
        Z.__ua.priorityOverride = 0;
        Z.__ua.isInfrastructure = !1;
        Z.__ua.runInSiloedMode = !1;
      })(function (m) {
        function n() {
          if (
            m.vtp_doubleClick ||
            "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType
          )
            v.displayfeatures = !0;
        }
        var p = {},
          q = {},
          r = {};
        if (m.vtp_gaSettings) {
          var t = m.vtp_gaSettings;
          k(FH(t.vtp_contentGroup, "index", "group"), p);
          k(FH(t.vtp_dimension, "index", "dimension"), q);
          k(FH(t.vtp_metric, "index", "metric"), r);
          var u = k(t);
          u.vtp_fieldsToSet = void 0;
          u.vtp_contentGroup = void 0;
          u.vtp_dimension = void 0;
          u.vtp_metric = void 0;
          m = k(m, u);
        }
        k(FH(m.vtp_contentGroup, "index", "group"), p);
        k(FH(m.vtp_dimension, "index", "dimension"), q);
        k(FH(m.vtp_metric, "index", "metric"), r);
        var v = b(m),
          w = String(m.vtp_trackingId || ""),
          x = "",
          y = "",
          B = "";
        m.vtp_setTrackerName && "string" == typeof m.vtp_trackerName
          ? "" !== m.vtp_trackerName && ((B = m.vtp_trackerName), (y = B + "."))
          : ((B = "gtm" + Li()), (y = B + "."));
        var A = function (ka, da) {
          for (var Ba in da) da.hasOwnProperty(Ba) && (v[ka + Ba] = da[Ba]);
        };
        A("contentGroup", p);
        A("dimension", q);
        A("metric", r);
        m.vtp_enableEcommerce &&
          ((x = m.vtp_gtmCachedValues.event),
          (v.gtmEcommerceData = d(m, v, x)));
        if ("TRACK_EVENT" === m.vtp_trackType)
          (x = "track_event"),
            n(),
            (v.eventCategory = String(m.vtp_eventCategory)),
            (v.eventAction = String(m.vtp_eventAction)),
            (v.eventLabel = c(String, m.vtp_eventLabel)),
            (v.value = c(ub, m.vtp_eventValue));
        else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
          if (
            ((x = Q.g.Nb),
            n(),
            "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" ==
              m.vtp_advertisingFeaturesType && (v.remarketingLists = !0),
            m.vtp_autoLinkDomains)
          ) {
            var E = {};
            E[Q.g.W] = m.vtp_autoLinkDomains;
            E.use_anchor = m.vtp_useHashAutoLink;
            E[Q.g.Wa] = m.vtp_decorateFormsAutoLink;
            v[Q.g.sa] = E;
          }
        } else
          "TRACK_SOCIAL" === m.vtp_trackType
            ? ((x = "track_social"),
              (v.socialNetwork = String(m.vtp_socialNetwork)),
              (v.socialAction = String(m.vtp_socialAction)),
              (v.socialTarget = String(m.vtp_socialActionTarget)))
            : "TRACK_TIMING" == m.vtp_trackType &&
              ((x = "timing_complete"),
              (v.eventCategory = String(m.vtp_timingCategory)),
              (v.timingVar = String(m.vtp_timingVar)),
              (v.value = ub(m.vtp_timingValue)),
              (v.eventLabel = c(String, m.vtp_timingLabel)));
        m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
        m.vtp_enableLinkId && (v.enableLinkId = !0);
        var F = {};
        a(v, F);
        v.name || (F.gtmTrackerName = B);
        F.gaFunctionName = m.vtp_functionName;
        void 0 !== m.vtp_nonInteraction &&
          (F.nonInteraction = m.vtp_nonInteraction);
        var C = gm(
          fm(
            em(
              dm(
                Xl(new Wl(m.vtp_gtmEventId, m.vtp_gtmPriorityId), F),
                m.vtp_gtmOnSuccess
              ),
              m.vtp_gtmOnFailure
            ),
            !0
          )
        );
        T(78) &&
          m.vtp_useDebugVersion &&
          m.vtp_useInternalVersion &&
          (C.eventMetadata.suppress_script_load = !0);
        ED(w, x, Date.now(), C);
        var H = Iw(m.vtp_functionName);
        if (nb(H)) {
          var N = function (ka) {
            var da = [].slice.call(arguments, 0);
            da[0] = y + da[0];
            H.apply(window, da);
          };
          if ("TRACK_TRANSACTION" == m.vtp_trackType) {
          } else if ("DECORATE_LINK" == m.vtp_trackType) {
          } else if ("DECORATE_FORM" == m.vtp_trackType) {
          } else if ("TRACK_DATA" == m.vtp_trackType) {
          }
          e(m, v);
        } else I(m.vtp_gtmOnFailure);
      });
    })();

  (Z.securityGroups.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Z.__inject_script = b;
        Z.__inject_script.C = "inject_script";
        Z.__inject_script.isVendorTemplate = !0;
        Z.__inject_script.priorityOverride = 0;
        Z.__inject_script.isInfrastructure = !1;
        Z.__inject_script.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!l(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (Lg(Cj(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.gas = ["google"]),
    (Z.__gas = function (a) {
      var b = k(a),
        c = b;
      c[Te.na] = null;
      c[Te.Mg] = null;
      var d = (b = c);
      d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
      var e = d.vtp_cookieDomain;
      void 0 !== e &&
        (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }),
        delete d.vtp_cookieDomain);
      return b;
    }),
    (Z.__gas.C = "gas"),
    (Z.__gas.isVendorTemplate = !0),
    (Z.__gas.priorityOverride = 0),
    (Z.__gas.isInfrastructure = !1),
    (Z.__gas.runInSiloedMode = !1);

  (Z.securityGroups.awct = ["google"]),
    (function () {
      function a(b, c, d) {
        return function (e, f, g) {
          c[e] = "DATA_LAYER" === d ? jI(g) : b[f];
        };
      }
      (function (b) {
        Z.__awct = b;
        Z.__awct.C = "awct";
        Z.__awct.isVendorTemplate = !0;
        Z.__awct.priorityOverride = 0;
        Z.__awct.isInfrastructure = !1;
        Z.__awct.runInSiloedMode = !1;
      })(function (b) {
        var c =
            !b.hasOwnProperty("vtp_enableConversionLinker") ||
            !!b.vtp_enableConversionLinker,
          d =
            !!b.vtp_enableEnhancedConversions ||
            !!b.vtp_enableEnhancedConversion,
          e = FH(b.vtp_customVariables, "varName", "value") || {},
          f = {},
          g =
            ((f[Q.g.ma] = b.vtp_conversionValue || 0),
            (f[Q.g.ya] = b.vtp_currencyCode),
            (f[Q.g.za] = b.vtp_orderId),
            (f[Q.g.Ua] = b.vtp_conversionCookiePrefix),
            (f[Q.g.ra] = c),
            (f[Q.g.Fd] = d),
            (f[Q.g.fa] = jI(Q.g.fa)),
            (f[Q.g.ja] = jI("developer_id")),
            f);
        (g[Q.g.Aa] = jI(Q.g.Aa)),
          (g[Q.g.la] = jI(Q.g.la)),
          (g[Q.g.Ob] = jI(Q.g.Ob)),
          (g[Q.g.Ia] = jI(Q.g.Ia));
        b.vtp_rdp && (g[Q.g.Ub] = !0);
        if (b.vtp_enableCustomParams)
          for (var h in e) ri.hasOwnProperty(h) || (g[h] = e[h]);
        if (b.vtp_enableProductReporting) {
          var m = a(b, g, b.vtp_productReportingDataSource);
          m(Q.g.Jd, "vtp_awMerchantId", "aw_merchant_id");
          m(Q.g.Hd, "vtp_awFeedCountry", "aw_feed_country");
          m(Q.g.Id, "vtp_awFeedLanguage", "aw_feed_language");
          m(Q.g.Gd, "vtp_discount", "discount");
          m(Q.g.da, "vtp_items", "items");
        }
        b.vtp_enableShippingData &&
          ((g[Q.g.jd] = b.vtp_deliveryPostalCode),
          (g[Q.g.Qd] = b.vtp_estimatedDeliveryDate),
          (g[Q.g.sc] = b.vtp_deliveryCountry),
          (g[Q.g.Wc] = b.vtp_shippingFee));
        b.vtp_transportUrl && (g[Q.g.Hb] = b.vtp_transportUrl);
        if (b.vtp_enableNewCustomerReporting) {
          var n = a(b, g, b.vtp_newCustomerReportingDataSource);
          n(Q.g.dd, "vtp_awNewCustomer", "new_customer");
          n(Q.g.Kd, "vtp_awCustomerLTV", "customer_lifetime_value");
        }
        var p;
        a: {
          if (b.vtp_enableEnhancedConversion) {
            var q =
              b.vtp_cssProvidedEnhancedConversionValue ||
              b.vtp_enhancedConversionObject;
            if (q) {
              p = {
                enhanced_conversions_mode: "manual",
                enhanced_conversions_manual_var: q,
              };
              break a;
            }
          }
          p = void 0;
        }
        var r = p;
        if (r) {
          var t = {};
          g[Q.g.Pd] = ((t[b.vtp_conversionLabel] = r), t);
        }
        var u = "AW-" + b.vtp_conversionId,
          v = u + "/" + b.vtp_conversionLabel;
        pw(u, b.vtp_transportUrl, {
          source: 7,
          fromContainerExecution: !0,
          siloed: !0,
        });
        var w = {},
          x = {
            eventMetadata:
              ((w.hit_type_override = "conversion"),
              (w.is_sw_selected = [T(64), T(62)]),
              w),
            noGtmEvent: !0,
            isGtmEvent: !0,
            onSuccess: b.vtp_gtmOnSuccess,
            onFailure: b.vtp_gtmOnFailure,
          };
        rx(ox(Tj(v), Q.g.Ha, g), b.vtp_gtmEventId, x);
      });
    })();

  (Z.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__logging = b;
        Z.__logging.C = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
        Z.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = "all" !== c && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Z.__configure_google_tags = b;
        Z.__configure_google_tags.C = "configure_google_tags";
        Z.__configure_google_tags.isVendorTemplate = !0;
        Z.__configure_google_tags.priorityOverride = 0;
        Z.__configure_google_tags.isInfrastructure = !1;
        Z.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!l(g)) throw e(f, {}, "Tag ID must be a string.");
            if ("any" !== c && ("specific" !== c || -1 === d.indexOf(g)))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (0 < e.length) {
              var h = e.shift(),
                m = a(d, e, f, g);
              if (
                "SCRIPT" == String(h.nodeName).toUpperCase() &&
                "text/gtmscript" == h.type
              ) {
                var n = G.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = h.id;
                n.text = h.text || h.textContent || h.innerHTML || "";
                h.charset && (n.charset = h.charset);
                var p = h.getAttribute("data-gtmsrc");
                p && ((n.src = p), Hc(n, m));
                d.insertBefore(n, null);
                p || m();
              } else if (
                h.innerHTML &&
                0 <= h.innerHTML.toLowerCase().indexOf("<script")
              ) {
                for (var q = []; h.firstChild; )
                  q.push(h.removeChild(h.firstChild));
                d.insertBefore(h, null);
                a(h, q, m, g)();
              } else d.insertBefore(h, null), m();
            } else f();
          } catch (r) {
            I(g);
          }
        };
      }
      function b(d) {
        if (G.body) {
          var e = d.vtp_gtmOnFailure,
            f = gz(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.uj,
            h = f.onSuccess;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? c(g, h, e) : a(G.body, Tc(g), h, e)();
        } else
          eI(function () {
            b(d);
          }, 200);
      }
      Z.__html = b;
      Z.__html.C = "html";
      Z.__html.isVendorTemplate = !0;
      Z.__html.priorityOverride = 0;
      Z.__html.isInfrastructure = !1;
      Z.__html.runInSiloedMode = !1;
    })();

  (Z.securityGroups.img = ["customPixels"]),
    (Z.__img = function (a) {
      var b = Tc('<a href="' + a.vtp_url + '"></a>')[0].href,
        c = a.vtp_cacheBusterQueryParam;
      if (a.vtp_useCacheBuster) {
        c || (c = "gtmcb");
        var d = b.charAt(b.length - 1),
          e = 0 <= b.indexOf("?") ? ("?" == d || "&" == d ? "" : "&") : "?";
        b += e + c + "=" + a.vtp_randomNumber;
      }
      DH(b, a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure);
    }),
    (Z.__img.C = "img"),
    (Z.__img.isVendorTemplate = !0),
    (Z.__img.priorityOverride = 0),
    (Z.__img.isInfrastructure = !1),
    (Z.__img.runInSiloedMode = !1);

  var rI = {};
  (rI.onHtmlSuccess = hz(!0)), (rI.onHtmlFailure = hz(!1));
  rI.dataLayer = Vi;
  rI.callback = function (a) {
    Ji.hasOwnProperty(a) && nb(Ji[a]) && Ji[a]();
    delete Ji[a];
  };
  rI.bootstrap = 0;
  rI._spx = !1;
  function sI() {
    vi[Yj()] = vi[Yj()] || rI;
    hk();
    lk() ||
      z(mk(), function (d, e) {
        pw(d, e.transportUrl, e.context);
        M(92);
      });
    Cb(Ki, Z.securityGroups);
    var a = ak(bk()),
      b,
      c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
    (2 !== c && 4 !== c && 3 !== c) || M(142);
    dz(),
      yf({
        Dl: function (d) {
          return d === bz;
        },
        Qk: function (d) {
          return new ez(d);
        },
        El: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || 8 === d[g]), (f = f || 16 === d[g]);
          return e && f;
        },
        Xl: function (d) {
          var e;
          if (d === bz) e = d;
          else {
            var f = Li();
            cz[f] = d;
            e = 'google_tag_manager["rm"]["' + Zj() + '"](' + f + ")";
          }
          return e;
        },
      });
    Af = Rf;
  }
  (function (a) {
    function b() {
      m = G.documentElement.getAttribute("data-tag-assistant-present");
      Ey(m) && (h = g.nk);
    }
    if (!D["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (G.referrer) {
        var d = Cj(G.referrer);
        c = "cct.google" === xj(d, "host");
      }
      if (!c) {
        var e = Qn("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((D["__TAGGY_INSTALLED"] = !0),
        Lc("https://cct.google/taggy/agent.js"));
    }
    var f = function (u) {
        var v = "GTM",
          w = "GTM";
        Ai && ((v = "OGT"), (w = "GTAG"));
        var x = D["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (D["google.tagmanager.debugui2.queue"] = x),
          Lc(
            "https://" +
              ui.Dd +
              "/debug/bootstrap?id=" +
              Xf.ctid +
              "&src=" +
              w +
              "&cond=" +
              u +
              "&gtm=" +
              Ln()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: Fc,
            containerProduct: v,
            debug: !1,
            id: Xf.ctid,
            targetRef: { ctid: Xf.ctid, isDestination: Qj.fe },
            aliases: Sj(),
            destinations: Vj(),
          },
        };
        y.data.resume = function () {
          a();
        };
        ui.Qj && (y.data.initialPublish = !0);
        x.push(y);
      },
      g = { Mm: 1, pk: 2, zk: 3, Rj: 4, nk: 5 },
      h = void 0,
      m = void 0,
      n = yj(D.location, "query", !1, void 0, "gtm_debug");
    Ey(n) && (h = g.pk);
    if (!h && G.referrer) {
      var p = Cj(G.referrer);
      "tagassistant.google.com" === xj(p, "host") && (h = g.zk);
    }
    if (!h) {
      var q = Qn("__TAG_ASSISTANT");
      q.length && q[0].length && (h = g.Rj);
    }
    h || b();
    if (!h && Fy(m)) {
      var r = function () {
          if (t) return !0;
          t = !0;
          b();
          h && Fc ? f(h) : a();
        },
        t = !1;
      Pc(
        G,
        "TADebugSignal",
        function () {
          r();
        },
        !1
      );
      D.setTimeout(function () {
        r();
      }, 200);
    } else h && Fc ? f(h) : a();
  })(function () {
    try {
      fk();
      if (T(58)) {
      }
      Zk().D();
      rn();
      Al();
      var a = Zj();
      if (Nj().canonical[a]) {
        var b = vi.zones;
        b && b.unregisterChild(Uj());
        Av().removeExternalRestrictions(Zj());
      } else {
        lt();
        Ni.m = "";
        Ni.D = Ni.J;
        Ni.F = "";
        Ni.Z = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        Ni.P = "ad_storage|analytics_storage|ad_user_data";
        Ni.Da = "";
        mw();
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          qf.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) tf.push(f[g]);
        for (var h = c.predicates || [], m = 0; m < h.length; m++)
          sf.push(h[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            ("if" !== u && "unless" !== u) || zf(r[u]);
          }
          rf.push(r);
        }
        vf = Z;
        wf = jz;
        Tf = new $f();
        var v = data.sandboxed_scripts,
          w = data.security_groups;
        a: {
          var x = data.runtime || [],
            y = data.runtime_lines;
          uz = new Ne();
          zH();
          pf = tz();
          var B = uz,
            A = yH(),
            E = new id("require", A);
          E.Ib();
          B.m.m.set("require", E);
          for (var F = [], C = 0; C < x.length; C++) {
            var H = x[C];
            if (!Array.isArray(H) || 3 > H.length) {
              if (0 === H.length) continue;
              break a;
            }
            y && y[C] && y[C].length && Kf(H, y[C]);
            try {
              uz.execute(H), T(67) && vk && 50 === H[0] && F.push(H[1]);
            } catch (ya) {}
          }
          T(67) && (Bf = F);
        }
        if (void 0 !== v)
          for (var N = ["sandboxedScripts"], O = 0; O < v.length; O++) {
            var U = v[O].replace(/^_*/, "");
            Ki[U] = N;
          }
        AH(w);
        sI();
        if (!Ei)
          for (var X = pj() ? Pi(Ni.P) : Pi(Ni.Z), P = 0; P < ol.length; P++) {
            var S = ol[P],
              ma = S,
              ka = X[S] ? "granted" : "denied";
            Uk().implicit(ma, ka);
          }
        Dy();
        qw = !1;
        rw = 0;
        if (
          ("interactive" == G.readyState && !G.createEventObject) ||
          "complete" == G.readyState
        )
          tw();
        else {
          Pc(G, "DOMContentLoaded", tw);
          Pc(G, "readystatechange", tw);
          if (G.createEventObject && G.documentElement.doScroll) {
            var da = !0;
            try {
              da = !D.frameElement;
            } catch (ya) {}
            da && uw();
          }
          Pc(D, "load", tw);
        }
        iy = !1;
        "complete" === G.readyState ? ky() : Pc(D, "load", ky);
        vk && (qk(Ik), D.setInterval(Hk, 864e5));
        qk(lz);
        qk(Uw);
        qk(qu);
        qk(jm);
        qk(ex);
        qk(Jl);
        qk($s);
        qk(Nk);
        T(67) && (qk(Zw), qk($w), qk(ax));
        vk && T(55) && (qk(mz), qk(oz));
        qz();
        qk(Rk);
        $y();
        lj(1);
        Cx();
        Ii = zb();
        rI.bootstrap = Ii;
        if (T(58)) {
        }
      }
    } catch (ya) {
      if ((lj(4), vk)) {
        var Da = Ck(!0, !0);
        Oc(Da);
      }
    }
  });
})();
