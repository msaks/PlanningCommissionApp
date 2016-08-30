// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/OverviewMap":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/html dojo/has dojo/dom-class dojo/dom-style dojo/dnd/Moveable dijit/_Widget dijit/_Templated ../map ../geometry/Point ../geometry/ScreenPoint ../layers/TiledMapServiceLayer ../layers/DynamicMapServiceLayer ../layers/VectorTileLayer ../layers/ArcGISTiledMapServiceLayer ../layers/ArcGISDynamicMapServiceLayer ../layers/ArcGISImageServiceLayer ../layers/OpenStreetMapLayer ../virtualearth/VETiledLayer ../kernel ../config ../domUtils dojo/text!./templates/OverviewMap.html dojo/i18n!../nls/jsapi".split(" "),
function(k,e,d,n,m,f,l,q,s,h,c,a,u,v,w,g,r,t,y,z,A,D,x,p,B,C){return k([s,h],{declaredClass:"esri.dijit.OverviewMap",widgetsInTemplate:!0,templateString:B,constructor:function(b,a){e.mixin(this,C.widgets.overviewMap);b=b||{};if(b.map){var c={};a&&(this._detached=!0,c=n.coords(a,!0));this.map=b.map;this.baseLayer=b.baseLayer;this.width=b.width||c.w||this.map.width/4;this.height=b.height||c.h||this.map.height/4;this.attachTo=b.attachTo||"top-right";this.expandFactor=b.expandFactor||2;this.color=b.color||
"#000000";this.opacity=b.opacity||0.5;this.maximizeButton=!!b.maximizeButton;this.visible=!!b.visible;if(this.map.loaded)this._initialSetup();else var g=d.connect(this.map,"onLoad",this,function(){d.disconnect(g);g=null;this._initialSetup()});this._detached&&(this.visible=!0);this._maximized=!1}else console.error("esri.dijit.OverviewMap: "+this.NLS_noMap)},startup:function(){this.inherited(arguments);(!this.domNode.parentNode||9>m("ie")&&"DIV"!==this.domNode.parentNode.nodeName)&&this.map.container.appendChild(this.domNode);
this._detached?(l.set(this._body,"display","block"),l.set(this._controllerDiv,"display","none"),l.set(this._maximizerDiv,"display","none"),this.map.loaded?this._initialize():d.connect(this.map,"onLoad",this,this._initialize)):("bottom"===this.attachTo.split("-")[0]&&this.domNode.insertBefore(this._maximizerDiv,this._controllerDiv),this.maximizeButton||f.add(this._maximizerDiv,"ovwDisabledButton"),f.add(this.domNode,{"top-left":"ovwTL","top-right":"ovwTR","bottom-left":"ovwBL","bottom-right":"ovwBR"}[this.attachTo]),
f.add(this._controllerDiv,"ovwShow"),f.add(this._maximizerDiv,"ovwMaximize"),this.visible&&this.map.loaded&&(this.visible=!1,this.show()));l.set(this._focusDiv,"opacity",this.opacity)},destroy:function(){this._deactivate();this.overviewMap&&this.overviewMap.destroy();this.overviewMap=this.baseLayer=null;this.inherited(arguments)},resize:function(b){b&&!(0>=b.w||0>=b.h)&&this._resize(b.w,b.h)},show:function(){if(!this.visible){var b=this._controllerDiv;b.title=this.NLS_hide;f.remove(b,"ovwShow");f.add(b,
"ovwHide");p.show(this._body);p.show(this._maximizerDiv);this._initialize();this.visible=!0}},hide:function(){if(this.visible){var b=this._controllerDiv;b.title=this.NLS_show;f.remove(b,"ovwHide");f.add(b,"ovwShow");this._maximized&&this._maximizeHandler();p.hide(this._body);p.hide(this._maximizerDiv);this._deactivate();this.visible=!1}},_initialSetup:function(){if(this._mainMapLayer=this.map.getLayer(this.map.layerIds[0])){var b=this.baseLayer||this._mainMapLayer,a=this.map.spatialReference,c=b.spatialReference;
if(c.wkid!==a.wkid&&c.wkt!==a.wkt)console.error("esri.dijit.OverviewMap: "+this.NLS_invalidSR);else{a=b.declaredClass;if(b instanceof v)if(-1!==a.indexOf("VETiledLayer"))this.baseLayer=new A({resourceInfo:b.getResourceInfo(),culture:b.culture,mapStyle:b.mapStyle,bingMapsKey:b.bingMapsKey});else if(-1!==a.indexOf("OpenStreetMapLayer"))this.baseLayer=new z({tileServers:b.tileServers});else if(-1!==a.indexOf("WebTiledLayer")){var a=b.initialExtent,c=b.fullExtent,e=b.tileInfo;this.baseLayer=new b.constructor(b.urlTemplate,
{initialExtent:a&&new a.constructor(a.toJson()),fullExtent:c&&new c.constructor(c.toJson()),tileInfo:e&&new e.constructor(e.toJson()),tileServers:b.tileServers&&b.tileServers.slice(0)})}else this.baseLayer=new r(b.url,{resourceInfo:b.getResourceInfo()});else if(b instanceof w)-1!==a.indexOf("ArcGISImageServiceLayer")?this.baseLayer=new y(b.url):(this.baseLayer=new t(b.url),this.baseLayer.setImageFormat("png24"));else if(b instanceof g)b="http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
"https:"===location.protocol&&(b=b.replace("http:","https:")),this.baseLayer=new r(b,{});else{console.error("esri.dijit.OverviewMap: "+this.NLS_invalidType);return}!this._detached&&(this.visible&&this._controllerDiv)&&(b=function(){this.visible=!1;this.show()},this.baseLayer.loaded?b.call(this):d.connect(this.baseLayer,"onLoad",this,b))}}else console.error("esri.dijit.OverviewMap: "+this.NLS_noLayer)},_visibilityHandler:function(){this.visible?this.hide():this.show()},_maximizeHandler:function(){var b=
this._maximizerDiv;this._maximized?(b.title=this.NLS_maximize,f.remove(b,"ovwRestore"),f.add(b,"ovwMaximize"),this._resize(this.width,this.height)):(b.title=this.NLS_restore,f.remove(b,"ovwMaximize"),f.add(b,"ovwRestore"),this._resize(this.map.width,this.map.height));this._maximized=!this._maximized},_resize:function(b,a){l.set(this._body,{width:b+"px",height:a+"px"});var c=x.defaults.map.panDuration,g=this.overviewMap;x.defaults.map.panDuration=0;g&&(g.resize(!0),g.centerAt(this._focusExtent.getCenter()));
x.defaults.map.panDuration=c},_initialize:function(){if(this.overviewMap)this._activate();else{var b,a;a=9>m("ie")?this._body.firstChild:this._body.firstElementChild;this.overviewMap=b=new c(a,{slider:!1,showAttribution:!1,logo:!1,lods:this._overviewLods,wrapAround180:this.map.wrapAround180});d.connect(b,"onLoad",this,function(){this._map_resize_override=e.hitch(b,this._map_resize_override);b.disableMapNavigation();this._activate()});b.addLayer(this.baseLayer)}},_activate:function(){var b=this.map,
a=this.overviewMap;this._moveableHandle=new q(this._focusDiv);this._soeConnect=d.connect(b,"onExtentChange",this,this._syncOverviewMap);this._ufoConnect=d.connect(b,"onPan",this,this._updateFocus);this._oecConnect=d.connect(a,"onExtentChange",this,this._ovwExtentChangeHandler);this._opaConnect=d.connect(a,"onPan",this,this._ovwPanHandler);this._ozsConnect=d.connect(a,"onZoomStart",this,function(){p.hide(this._focusDiv)});this._ozeConnect=d.connect(a,"onZoomEnd",this,function(){p.show(this._focusDiv)});
this._omsConnect=d.connect(this._moveableHandle,"onMoveStop",this,this._moveStopHandler);this._syncOverviewMap(b.extent,null,null,null)},_deactivate:function(){d.disconnect(this._soeConnect);d.disconnect(this._ufoConnect);d.disconnect(this._oecConnect);d.disconnect(this._opaConnect);d.disconnect(this._ozsConnect);d.disconnect(this._ozeConnect);d.disconnect(this._omsConnect);this._moveableHandle&&this._moveableHandle.destroy()},_syncOverviewMap:function(b,a,c,g){this._suspendPanHandling?this._suspendPanHandling=
!1:(this._focusExtent=b,this.overviewMap.setExtent(b.expand(this.expandFactor),!0))},_updateFocus:function(b){this._suspendPanHandling||(this._focusExtent=b,this._drawFocusDiv(b))},_drawFocusDiv:function(b,c){var g=this.overviewMap,d=g.toScreen(new a(b.xmin,b.ymax,g.spatialReference)),e=g.toScreen(new a(b.xmax,b.ymin,g.spatialReference)),g=e.x-d.x,e=e.y-d.y,r=!0;g>this.overviewMap.width&&e>this.overviewMap.height&&(r=!1);l.set(this._focusDiv,{left:d.x+(c?c.x:0)+"px",top:d.y+(c?c.y:0)+"px",width:g+
"px",height:e+"px",display:r?"block":"none"})},_moveStopHandler:function(b){var c=this._moveableHandle.node.style;b=this._focusExtent;var g=this.overviewMap,c=g.toMap(new u(parseInt(c.left,10),parseInt(c.top,10))),d=new a(b.xmin,b.ymax,g.spatialReference);this._focusExtent=b.offset(c.x-d.x,c.y-d.y);this._maximized?this._maximizeHandler():g.centerAt(this._focusExtent.getCenter());this._suspendPanHandling=!0;this.map.setExtent(this._focusExtent)},_ovwExtentChangeHandler:function(){this._drawFocusDiv(this._focusExtent)},
_ovwPanHandler:function(b,a){this._drawFocusDiv(this._focusExtent,a)}})})},"esri/layers/ArcGISImageServiceLayer":function(){define("dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../config ./DynamicMapServiceLayer ./ImageServiceLayerMixin".split(" "),function(k,e,d,n,m,f,l){return k([f,l],{declaredClass:"esri.layers.ArcGISImageServiceLayer",constructor:function(d,e){this._initialize(d,e);this.useMapImage=e&&e.useMapImage||!1},refresh:function(d){if(d)this.inherited(arguments);else{var e=this.disableClientCaching;
this.disableClientCaching=!0;this.inherited(arguments);this.disableClientCaching=e}},exportMapImage:function(d,f){var h=m.defaults.map,h=e.mixin({size:h.width+","+h.height},this._params,d?d.toJson(this.normalization):{},{f:"json"});delete h._ts;this._exportMapImage(this._url.path+"/exportImage",h,f)}})})},"esri/virtualearth/VETiledLayer":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/_base/array dojo/_base/config dojo/has dojo/string dojo/_base/Deferred ../kernel ../urlUtils ../SpatialReference ../layers/TileInfo ../layers/TiledMapServiceLayer ../geometry/Extent ../request".split(" "),
function(k,e,d,n,m,f,l,q,s,h,c,a,u,v,w){k=k(u,{declaredClass:"esri.virtualearth.VETiledLayer",constructor:function(g){try{g=e.mixin({bingMapsKey:null,culture:"en-US"},g||{});var d=window.location.protocol;"file:"===d&&(d="http:");this.url=d+"//dev.virtualearth.net/REST/v1";this._url=h.urlToObject(this.url);this.spatialReference=new c({wkid:102100});this.tileInfo=new a({rows:256,cols:256,dpi:96,origin:{x:-2.0037508342787E7,y:2.0037508342787E7},spatialReference:{wkid:102100},lods:[{level:1,resolution:78271.5169639999,
scale:2.95828763795777E8},{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,scale:7.3957190948944E7},{level:4,resolution:9783.93962049996,scale:3.6978595474472E7},{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},
{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:0.597164283559817,
scale:2256.994353},{level:19,resolution:0.298582141647617,scale:1128.497176},{level:20,resolution:0.1492910708238085,scale:564.248588}]});this.initialExtent=this.fullExtent=new v(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new c({wkid:102100}));e.mixin(this,g);this.hasAttributionData=this.showAttribution;this._initLayer=e.hitch(this,this._initLayer);this._errorHandler=e.hitch(this,this._errorHandler);this._getTileInfo=e.hitch(this,this._getTileInfo);if(this.bingMapsKey)this._getTileInfo();
else throw Error("BingMapsKey must be provided.");}catch(t){throw this.onError(t),t;}},_unsetMap:function(a,c){this.inherited("_unsetMap",arguments)},_getTileInfo:function(){if(this.mapStyle){var a=this._url.path+"/Imagery/Metadata/"+this.mapStyle;if(this.bingMapsKey){var c=this.resourceInfo;!this.loaded&&c?this._initLayer(c):w({url:a,content:e.mixin({},{key:this.bingMapsKey,ss:!0,c:this.culture,include:this.hasAttributionData?"imageryProviders":null}),callbackParamName:"jsonp",load:this._initLayer,
error:this._errorHandler})}}},_initLayer:function(a,c){if(200!==a.statusCode){var e=Error();e.code=a.statusCode;e.message=a.statusDescription;e.details=a.errorDetails;e.authenticationResultCode=a.authenticationResultCode;this.onError(e)}else try{this.resourceInfo=d.toJson(a);var e=a.resourceSets[0].resources[0],f=e.imageUrl.replace("{","${");this.tileServers=n.map(e.imageUrlSubdomains,function(a){var c=window.location.protocol;"file:"===c&&(c="http:");return l.substitute(f,{subdomain:a}).replace("http:",
c)});this._tsLength=this.tileServers.length;if(this.loaded)this.refresh(),this.onMapStyleChange();else{this.copyright=this.copyright||"\x26copy; 2012 Microsoft Corporation and its data suppliers";this.loaded=!0;this.onLoad(this);var h=this.loadCallback;h&&(delete this.loadCallback,h(this))}}catch(k){this.onError(k)}},getAttributionData:function(){var a=new q,c=d.fromJson(this.resourceInfo),f;this.hasAttributionData&&c&&(f=e.getObject("resourceSets.0.resources.0.imageryProviders",!1,c));f?a.callback({contributors:f}):
(c=Error("Layer does not have attribution data"),c.log=m.isDebug,a.errback(c));return a},getTileUrl:function(a,c,d){return l.substitute(this.tileServers[c%this._tsLength].replace(/\{/g,"${"),{quadkey:this._getQuadKey(a,c,d),culture:this.culture,token:this.bingMapsKey})},_getQuadKey:function(a,c,d){var e="",f,h;for(h=a;0<h;h--)a="0",f=1<<h-1,0!=(d&f)&&a++,0!=(c&f)&&(a++,a++),e+=a;return e},setMapStyle:function(a){this.mapStyle=a;this._getTileInfo()},setCulture:function(a){this.culture=a;this._getTileInfo()},
setBingMapsKey:function(a){this.bingMapsKey=a},onMapStyleChange:function(){}});e.mixin(k,{MAP_STYLE_AERIAL:"aerial",MAP_STYLE_AERIAL_WITH_LABELS:"aerialWithLabels",MAP_STYLE_ROAD:"road"});return k})},"widgets/OverviewMap/_build-generate_module":function(){define(["dojo/i18n!./nls/strings"],function(){})},"url:esri/dijit/templates/OverviewMap.html":'\x3cdiv class\x3d"esriOverviewMap"\x3e\r\n  \x3cdiv class\x3d"ovwContainer" dojoattachpoint\x3d"_body" style\x3d"width: ${width}px; height: ${height}px;"\x3e\r\n    \x3cdiv id\x3d"${id}-map" style\x3d"width: 100%; height: 100%;"\x3e\r\n      \x3cdiv class\x3d"ovwHighlight" dojoattachpoint\x3d"_focusDiv" title\x3d"${NLS_drag}" style\x3d"border: 1px solid ${color}; background-color: ${color};"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"ovwButton ovwController" title\x3d"${NLS_show}" dojoattachpoint\x3d"_controllerDiv" dojoattachevent\x3d"onclick: _visibilityHandler"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"ovwButton ovwMaximizer" title\x3d"${NLS_maximize}" dojoattachpoint\x3d"_maximizerDiv" dojoattachevent\x3d"onclick: _maximizeHandler"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"*now":function(k){k(['dojo/i18n!*preload*widgets/OverviewMap/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","hr","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/aspect jimu/BaseWidget esri/dijit/OverviewMap jimu/utils dojo/dom-style".split(" "),function(k,e,d,n,m,f,l,q,s,h){return k([l],{baseClass:"jimu-widget-overview",overviewMapDijit:null,_showDijit:!1,_handles:null,startup:function(){this._handles=[];this.inherited(arguments);this.createOverviewMap();this.map&&this.own(m(this.map,"layer-add",e.hitch(this,this._onMainMapBasemapChange)))},setPosition:function(c){this.position=
c;d.place(this.domNode,this.map.id);this._processAttachTo(this.config,c);this.started&&this._updateDomPosition(this.config.attachTo)},_processAttachTo:function(c,a){!c.attachTo&&a&&(void 0!==a.top&&void 0!==a.left?c.attachTo=!window.isRTL?"top-left":"top-right":void 0!==a.top&&void 0!==a.right?c.attachTo=!window.isRTL?"top-right":"top-left":void 0!==a.bottom&&void 0!==a.left?c.attachTo=!window.isRTL?"bottom-left":"bottom-right":void 0!==a.bottom&&void 0!==a.right&&(c.attachTo=!window.isRTL?"bottom-right":
"bottom-left"))},_updateDomPosition:function(c){if(this.overviewMapDijit){var a={left:"auto",right:"auto",top:"auto",bottom:"auto",width:"auto",zIndex:this.position&&this.position.zIndex||0};c=this._getOverviewPositionByAttach(c);e.mixin(a,c);a=s.getPositionStyle(a);a.position="absolute";h.set(this.domNode,a);h.set(this.overviewMapDijit.domNode,a)}},createOverviewMap:function(c){var a=e.clone(this.config.overviewMap);a.map=this.map;void 0!==c&&(a.visible=c);this._processAttachTo(a,this.position);
c=a.visible;a.visible=!1;a.maximizeButton="maximizeButton"in a?a.maximizeButton:!0;a.width=200;a.height=200;a.expandFactor=2;this.overviewMapDijit=new q(a);this._handles.push(f.after(this.overviewMapDijit,"show",e.hitch(this,"_afterOverviewShow")));this._handles.push(f.after(this.overviewMapDijit,"hide",e.hitch(this,"_afterOverviewHide")));this.overviewMapDijit.startup();this._updateDomPosition(a.attachTo);this.domNode.appendChild(this.overviewMapDijit.domNode);c&&this.overviewMapDijit.show()},_getOverviewPositionByAttach:function(c){var a=
{};"top-left"===c?(a.left=0,a.top=0):"top-right"===c?(a.right=0,a.top=0):"bottom-left"===c?(a.bottom=0,a.left=0):"bottom-right"===c&&(a.bottom=0,a.right=0);window.isRTL&&(isFinite(a.left)?(a.right=a.left,delete a.left):(a.left=a.right,delete a.right));return a},_onMainMapBasemapChange:function(c){c.layer&&c.layer._basemapGalleryLayerType&&(this._destroyOverviewMap(),this.createOverviewMap(this._showDijit))},onPositionChange:function(c){this.position=c;this.config.overviewMap.attachTo||(this._destroyOverviewMap(),
this.createOverviewMap(this._showDijit))},_destroyOverviewMap:function(){n.forEach(this._handles,function(c){c&&"function"===typeof c.remove&&c.remove()});this.overviewMapDijit&&this.overviewMapDijit.destroy&&(this.overviewMapDijit.destroy(),this.overviewMapDijit=null,d.empty(this.domNode))},onReceiveData:function(c){"BasemapGallery"===c&&(this._destroyOverviewMap(),this.createOverviewMap(this._showDijit))},onOpen:function(){this._destroyOverviewMap();this.createOverviewMap(this._showDijit)},onClose:function(){this._destroyOverviewMap()},
_afterOverviewHide:function(){this._showDijit=!1;h.set(this.domNode,{width:"auto",height:"auto"})},_afterOverviewShow:function(){this._showDijit=!0;h.set(this.domNode,{width:this.overviewMapDijit.width+"px",height:this.overviewMapDijit.height+"px"})}})});