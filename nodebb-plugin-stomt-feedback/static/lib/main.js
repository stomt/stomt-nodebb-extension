/* globals config, $ */
'use strict';

var loaded = false;
if (config.stomtfeedback.app_id!='') {

$(window).on('action:ajaxify.end', function (e, url) {
	function getInsCode(clientId, dataId, customClass, style, format){
var ad = "<script>(function(w, d, n, r, t, s){w.Stomt = w.Stomt||[];t = d.createElement(n);s = d.getElementsByTagName(n)[0];t.async=1;t.src=r;s.parentNode.insertBefore(t,s);})(window, document, 'script', 'https://www.stomt.com/widget.js');var options = {appId: '"+ config.stomtfeedback.app_id+"', label: '"+ config.stomtfeedback.label+"', position: '"+ config.stomtfeedback.position+"', colorText: '"+ config.stomtfeedback.colorText+"', colorBackground: '"+ config.stomtfeedback.colorBackground+"', colorHover: '"+ config.stomtfeedback.colorHover+"'};Stomt.push(['addTab',options]);Stomt.push(['addFeed',options]);Stomt.push(['addCreate',options]);</script>";
//	var ad = '<div>i ns class="adsbygoogle ' + customClass + '" style="display:block; margin-bottom:15px;' + style + ' " data-ad-format="' + format + '" data-ad-client="ca-' + clientId + '" data-ad-slot="' + dataId + '"></div>';


	return ad;
	}	
	$(getInsCode(config.stomtfeedback.app_id, config.stomtfeedback.colorText, '', 'margin:15px auto;', 'auto')).insertAfter("#content");


		
loaded = true;
	
});

}