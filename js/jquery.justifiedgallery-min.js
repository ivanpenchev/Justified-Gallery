/* 
Justified Gallery
Version: 1.0.2
Author: Miro Mannino
Author URI: http://miromannino.it

Copyright 2012 Miro Mannino (miro.mannino@gmail.com)

This file is part of Justified Gallery.

This work is licensed under the Creative Commons Attribution 3.0 Unported License. 

To view a copy of this license, visit http://creativecommons.org/licenses/by/3.0/ 
or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
*/

__justifiedGallery_galleryID=0;
(function(d){d.fn.justifiedGallery=function(p){function l(b,e){return'<div class="'+e+'"style="font-size: 12px; border: 1px solid red; background-color: #faa; margin: 10px 0px 10px 0px; padding: 5px 0px 5px 5px;">'+b+"</div>"}function m(b,e,j){d(b).find(".jg-loading").fadeOut(500,function(){d(this).remove();n(d,b,e,0,j)})}function o(b,e,j,c){var a,h=0,g;for(a=0;a<b.length;a++){b[a].nh=Math.ceil(e[b[a].indx].height*((e[b[a].indx].width+j)/e[b[a].indx].width));b[a].nw=e[b[a].indx].width+j;var d=b[a],
f=b[a].nw,i=b[a].nh,k=void 0,k=f>i?f:i;d.suffix=100>=k?c.sizeSuffixes.lt100:240>=k?c.sizeSuffixes.lt240:320>=k?c.sizeSuffixes.lt320:500>=k?c.sizeSuffixes.lt500:640>=k?c.sizeSuffixes.lt640:c.sizeSuffixes.lt1024;b[a].l=h;c.fixedHeight||(0==a?g=b[a].nh:g>b[a].nh&&(g=b[a].nh));h+=b[a].nw+c.margins}c.fixedHeight&&(g=c.rowHeight);j="";for(a=0;a<b.length;a++)h=e[b[a].indx],d=b[a].nh,f=void 0,f='<div class="jg-image" style="left:'+b[a].l+'px">',f+=' <a href="'+h.href+'" ',f=!0==c.lightbox?f+('rel="'+h.rel+
'"'):f+'target="_blank"',f+='title="'+h.title+'">',f+='  <img alt="'+h.alt+'" src="'+h.src+b[a].suffix+c.extension+'"',f+='style="width: '+b[a].nw+"px; height: "+d+'px;">',c.captions&&(f+='  <div style="bottom:'+(d-g)+'px;" class="jg-image-label">'+h.alt+"</div>"),f+=" </a></div>",j+=f;return'<div class="jg-row" style="height: '+g+"px; margin-bottom:"+c.margins+'px;">'+j+"</div>"}function n(b,e,d,c,a){var c=[],h,g,i=0,f=b(e).width();for(h=g=0;g<d.length;g++)null!=d[g]&&(i+d[g].width+a.margins<=f?
(i+=d[g].width+a.margins,c[h]=Array(5),c[h].indx=g,h++):(h=Math.ceil((f-i+1)/c.length),b(e).append(o(c,d,h,a)),c=[],c[0]=Array(5),c[0].indx=g,h=1,i=d[g].width+a.margins));h=a.justifyLastRow?Math.ceil((f-i+1)/c.length):0;b(e).append(o(c,d,h,a));if(a.lightbox)try{b(e).find(".jg-image a").colorbox({maxWidth:"80%",maxHeight:"80%",opacity:0.8,transition:"elastic",current:""})}catch(m){b(e).html(l("No Colorbox founded!","jg-noColorbox"))}a.captions&&(b(e).find(".jg-image").mouseenter(function(a){b(a.currentTarget).find(".jg-image-label").stop();
b(a.currentTarget).find(".jg-image-label").fadeTo(500,0.7)}),b(e).find(".jg-image").mouseleave(function(a){b(a.currentTarget).find(".jg-image-label").stop();b(a.currentTarget).find(".jg-image-label").fadeTo(500,0)}));b(e).find(".jg-resizedImageNotFound").remove();b(e).find(".jg-image img").load(function(){b(this).fadeTo(500,1)}).error(function(){b(e).prepend(l("The image can't be loaded: \""+b(this).attr("src")+'"',"jg-resizedImageNotFound"))}).each(function(){this.complete&&b(this).load()});var k=
setInterval(function(){if(f!=b(e).width()){b(e).find(".jg-row").remove();clearInterval(k);n(b,e,d,f,a)}},a.refreshTime)}var i=d.extend({sizeSuffixes:{lt100:"_t",lt240:"_m",lt320:"_n",lt500:"",lt640:"_z",lt1024:"_b"},usedSuffix:"lt240",justifyLastRow:!0,rowHeight:120,fixedHeight:!1,lightbox:!1,captions:!0,margins:1,extension:".jpg",refreshTime:500},p);return this.each(function(b,e){d(e).addClass("justifiedGallery");var j=0,c=Array(d(e).find("img").length);__justifiedGallery_galleryID++;0!=c.length&&
(d(e).append('<div class="jg-loading"><div class="jg-loading-img"></div></div>'),d(e).find("a").each(function(a,b){var g=d(b).find("img");c[a]=Array(5);c[a].src=d(g).attr("src");c[a].alt=d(g).attr("alt");c[a].href=d(b).attr("href");c[a].title=d(b).attr("title");c[a].rel="lightbox[gallery-"+__justifiedGallery_galleryID+"]";d(b).remove();g=new Image;d(g).load(function(){c[a].width=c[a].height!=i.rowHeight?Math.ceil(this.width/(this.height/i.rowHeight)):this.width;c[a].height=i.rowHeight;c[a].src=c[a].src.slice(0,
c[a].src.length-(i.sizeSuffixes[i.usedSuffix]+i.extension).length);++j==c.length&&m(e,c,i)});d(g).error(function(){d(e).prepend(l("The image can't be loaded: \""+c[a].src+'"',"jg-usedPrefixImageNotFound"));c[a]=null;++j==c.length&&m(e,c,i)});d(g).attr("src",c[a].src)}))})}})(jQuery);
