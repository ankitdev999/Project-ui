google.maps.__gjsload__('overlay', function(_){var eu=function(a){this.g=a},zla=function(){},fu=function(a){a.Gp=a.Gp||new zla;return a.Gp},Ala=function(a){this.Na=new _.Zh(function(){var b=a.Gp;if(a.getPanes()){if(a.getProjection()){if(!b.Do&&a.onAdd)a.onAdd();b.Do=!0;a.draw()}}else{if(b.Do)if(a.onRemove)a.onRemove();else a.remove();b.Do=!1}},0)},Bla=function(a,b){function c(){return _.$h(e.Na)}var d=fu(a),e=d.ln;e||(e=d.ln=new Ala(a));_.nb(d.fb||[],_.J.removeListener);var f=d.eb=d.eb||new _.gs,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);
f.bindTo("center",g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.xt=d.xt||new eu(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.fb=[_.J.addListener(a,"panes_changed",c),_.J.addListener(g,"zoom_changed",c),_.J.addListener(g,"offset_changed",c),_.J.addListener(b,"projection_changed",c),_.J.addListener(g,"projectioncenterq_changed",c)];c();b instanceof
_.mf&&(_.N(b,"Ox"),_.M(b,148440))},Fla=function(a){if(a){var b=a.getMap();if(Cla(a)!==b&&b&&b instanceof _.mf){var c=b.__gm;c.overlayLayer?a.__gmop=new Dla(b,a,c.overlayLayer):c.g.then(function(d){d=d.Pa;var e=new gu(b,d);d.ob(e);c.overlayLayer=e;Ela(a);Fla(a)})}}},Ela=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.g.unbindAll(),b.g.set("panes",null),b.g.set("projection",null),b.j.sg(b),b.h&&(b.h=!1,b.g.onRemove?b.g.onRemove():b.g.remove()))}},Cla=function(a){return(a=a.__gmop)?a.map:null},
Dla=function(a,b,c){this.map=a;this.g=b;this.j=c;this.h=!1;_.N(this.map,"Ox");_.M(this.map,148440);c.Bf(this)},Gla=function(a,b){a.g.get("projection")!=b&&(a.g.bindTo("panes",a.map.__gm),a.g.set("projection",b))},gu=function(a,b){this.m=a;this.j=b;this.g=null;this.h=[]};_.D(eu,_.K);
eu.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.ee(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.g:null))};var hu={};_.D(Ala,_.K);hu.Bf=function(a){if(a){var b=a.getMap();(fu(a).ct||null)!==b&&(b&&Bla(a,b),fu(a).ct=b)}};hu.sg=function(a){var b=fu(a),c=b.eb;c&&c.unbindAll();(c=b.xt)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.fb&&_.nb(b.fb,_.J.removeListener);b.fb=null;b.ln&&(b.ln.Na.Rd(),b.ln=null);delete fu(a).ct};var iu={};Dla.prototype.draw=function(){this.h||(this.h=!0,this.g.onAdd&&this.g.onAdd());this.g.draw&&this.g.draw()};gu.prototype.dispose=function(){};gu.prototype.Qc=function(a,b,c,d,e,f,g,h){var k=this.g=this.g||new _.Mp(this.m,this.j,function(){});k.Qc(a,b,c,d,e,f,g,h);a=_.A(this.h);for(b=a.next();!b.done;b=a.next())b=b.value,Gla(b,k),b.draw()};gu.prototype.Bf=function(a){this.h.push(a);this.g&&Gla(a,this.g);this.j.refresh()};gu.prototype.sg=function(a){_.wb(this.h,a)};iu.Bf=Fla;iu.sg=Ela;_.Ve("overlay",{Vq:function(a){if(a){(0,hu.sg)(a);(0,iu.sg)(a);var b=a.getMap();b&&(b instanceof _.mf?(0,iu.Bf)(a):(0,hu.Bf)(a))}},preventMapHitsFrom:function(a){_.tq(a,{onClick:function(b){_.ul(b.event.Ya)},Ad:function(b){return _.Tp(b)},Ai:function(b){return _.Up(b)},ne:function(b){return _.Up(b)},Hd:function(b){return _.Vp(b)}}).wj(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.Ze);a.addEventListener("contextmenu",_.Ze);a.addEventListener("dblclick",_.Ze);a.addEventListener("mousedown",
_.Ze);a.addEventListener("mousemove",_.Ze);a.addEventListener("MSPointerDown",_.Ze);a.addEventListener("pointerdown",_.Ze);a.addEventListener("touchstart",_.Ze);a.addEventListener("wheel",_.Ze)}});});
