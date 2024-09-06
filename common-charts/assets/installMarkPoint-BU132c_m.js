import{_ as O,n as j,Y as B,$ as J,N as F,a0 as q,z as Q,K,a1 as x,a2 as ee,a3 as P,J as te,D as ae,C as U,a4 as C,a5 as ie,G as Z,a6 as re,a7 as se,a8 as H,I as S,a9 as le,aa as oe,o as T,ab as ne,ac as G,ad as me,ae as ue,af as ye,ag as L,ah as ce,ai as he}from"./useDesign-DzGixMSF.js";import{a as fe}from"./dataSample-D1cz1mW6.js";var ve=function(s){O(e,s);function e(t,a,l,i){var o=s.call(this)||this;return o.updateData(t,a,l,i),o}return e.prototype._createSymbol=function(t,a,l,i,o){this.removeAll();var r=j(t,-1,-1,2,2,null,o);r.attr({z2:100,culling:!0,scaleX:i[0]/2,scaleY:i[1]/2}),r.drift=ge,this._symbolType=t,this.add(r)},e.prototype.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(null,t)},e.prototype.getSymbolType=function(){return this._symbolType},e.prototype.getSymbolPath=function(){return this.childAt(0)},e.prototype.highlight=function(){B(this.childAt(0))},e.prototype.downplay=function(){J(this.childAt(0))},e.prototype.setZ=function(t,a){var l=this.childAt(0);l.zlevel=t,l.z=a},e.prototype.setDraggable=function(t,a){var l=this.childAt(0);l.draggable=t,l.cursor=!a&&t?"move":l.cursor},e.prototype.updateData=function(t,a,l,i){this.silent=!1;var o=t.getItemVisual(a,"symbol")||"circle",r=t.hostModel,y=e.getSymbolSize(t,a),f=o!==this._symbolType,c=i&&i.disableAnimation;if(f){var u=t.getItemVisual(a,"symbolKeepAspect");this._createSymbol(o,t,a,y,u)}else{var m=this.childAt(0);m.silent=!1;var n={scaleX:y[0]/2,scaleY:y[1]/2};c?m.attr(n):F(m,n,r,a),q(m)}if(this._updateCommon(t,a,y,l,i),f){var m=this.childAt(0);if(!c){var n={scaleX:this._sizeX,scaleY:this._sizeY,style:{opacity:m.style.opacity}};m.scaleX=m.scaleY=0,m.style.opacity=0,Q(m,n,r,a)}}c&&this.childAt(0).stopAnimation("leave")},e.prototype._updateCommon=function(t,a,l,i,o){var r=this.childAt(0),y=t.hostModel,f,c,u,m,n,v,p,h,g;if(i&&(f=i.emphasisItemStyle,c=i.blurItemStyle,u=i.selectItemStyle,m=i.focus,n=i.blurScope,p=i.labelStatesModels,h=i.hoverScale,g=i.cursorStyle,v=i.emphasisDisabled),!i||t.hasItemOption){var d=i&&i.itemModel?i.itemModel:t.getItemModel(a),b=d.getModel("emphasis");f=b.getModel("itemStyle").getItemStyle(),u=d.getModel(["select","itemStyle"]).getItemStyle(),c=d.getModel(["blur","itemStyle"]).getItemStyle(),m=b.get("focus"),n=b.get("blurScope"),v=b.get("disabled"),p=K(d),h=b.getShallow("scale"),g=d.getShallow("cursor")}var M=t.getItemVisual(a,"symbolRotate");r.attr("rotation",(M||0)*Math.PI/180||0);var I=x(t.getItemVisual(a,"symbolOffset"),l);I&&(r.x=I[0],r.y=I[1]),g&&r.attr("cursor",g);var _=t.getItemVisual(a,"style"),w=_.fill;if(r instanceof ee){var D=r.style;r.useStyle(P({image:D.image,x:D.x,y:D.y,width:D.width,height:D.height},_))}else r.__isEmptyBrush?r.useStyle(P({},_)):r.useStyle(_),r.style.decal=null,r.setColor(w,o&&o.symbolInnerColor),r.style.strokeNoScale=!0;var V=t.getItemVisual(a,"liftZ"),z=this._z2;V!=null?z==null&&(this._z2=r.z2,r.z2+=V):z!=null&&(r.z2=z,this._z2=null);var W=o&&o.useNameLabel;te(r,p,{labelFetcher:y,labelDataIndex:a,defaultText:$,inheritColor:w,defaultOpacity:_.opacity});function $(N){return W?t.getName(N):fe(t,N)}this._sizeX=l[0]/2,this._sizeY=l[1]/2;var A=r.ensureState("emphasis");A.style=f,r.ensureState("select").style=u,r.ensureState("blur").style=c;var E=h==null||h===!0?Math.max(1.1,3/this._sizeY):isFinite(h)&&h>0?+h:1;A.scaleX=this._sizeX*E,A.scaleY=this._sizeY*E,this.setSymbolScale(1),ae(this,m,n,v)},e.prototype.setSymbolScale=function(t){this.scaleX=this.scaleY=t},e.prototype.fadeOut=function(t,a,l){var i=this.childAt(0),o=U(this).dataIndex,r=l&&l.animation;if(this.silent=i.silent=!0,l&&l.fadeLabel){var y=i.getTextContent();y&&C(y,{style:{opacity:0}},a,{dataIndex:o,removeOpt:r,cb:function(){i.removeTextContent()}})}else i.removeTextContent();C(i,{style:{opacity:0},scaleX:0,scaleY:0},a,{dataIndex:o,cb:t,removeOpt:r})},e.getSymbolSize=function(t,a){return ie(t.getItemVisual(a,"symbolSize"))},e}(Z);function ge(s,e){this.parent.drift(s,e)}function k(s,e,t,a){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(a.isIgnore&&a.isIgnore(t))&&!(a.clipShape&&!a.clipShape.contain(e[0],e[1]))&&s.getItemVisual(t,"symbol")!=="none"}function Y(s){return s!=null&&!se(s)&&(s={isIgnore:s}),s||{}}function R(s){var e=s.hostModel,t=e.getModel("emphasis");return{emphasisItemStyle:t.getModel("itemStyle").getItemStyle(),blurItemStyle:e.getModel(["blur","itemStyle"]).getItemStyle(),selectItemStyle:e.getModel(["select","itemStyle"]).getItemStyle(),focus:t.get("focus"),blurScope:t.get("blurScope"),emphasisDisabled:t.get("disabled"),hoverScale:t.get("scale"),labelStatesModels:K(e),cursorStyle:e.get("cursor")}}var pe=function(){function s(e){this.group=new Z,this._SymbolCtor=e||ve}return s.prototype.updateData=function(e,t){this._progressiveEls=null,t=Y(t);var a=this.group,l=e.hostModel,i=this._data,o=this._SymbolCtor,r=t.disableAnimation,y=R(e),f={disableAnimation:r},c=t.getSymbolPoint||function(u){return e.getItemLayout(u)};i||a.removeAll(),e.diff(i).add(function(u){var m=c(u);if(k(e,m,u,t)){var n=new o(e,u,y,f);n.setPosition(m),e.setItemGraphicEl(u,n),a.add(n)}}).update(function(u,m){var n=i.getItemGraphicEl(m),v=c(u);if(!k(e,v,u,t)){a.remove(n);return}var p=e.getItemVisual(u,"symbol")||"circle",h=n&&n.getSymbolType&&n.getSymbolType();if(!n||h&&h!==p)a.remove(n),n=new o(e,u,y,f),n.setPosition(v);else{n.updateData(e,u,y,f);var g={x:v[0],y:v[1]};r?n.attr(g):F(n,g,l)}a.add(n),e.setItemGraphicEl(u,n)}).remove(function(u){var m=i.getItemGraphicEl(u);m&&m.fadeOut(function(){a.remove(m)},l)}).execute(),this._getSymbolPoint=c,this._data=e},s.prototype.updateLayout=function(){var e=this,t=this._data;t&&t.eachItemGraphicEl(function(a,l){var i=e._getSymbolPoint(l);a.setPosition(i),a.markRedraw()})},s.prototype.incrementalPrepareUpdate=function(e){this._seriesScope=R(e),this._data=null,this.group.removeAll()},s.prototype.incrementalUpdate=function(e,t,a){this._progressiveEls=[],a=Y(a);function l(y){y.isGroup||(y.incremental=!0,y.ensureState("emphasis").hoverLayer=!0)}for(var i=e.start;i<e.end;i++){var o=t.getItemLayout(i);if(k(t,o,i,a)){var r=new this._SymbolCtor(t,i,this._seriesScope);r.traverse(l),r.setPosition(o),this.group.add(r),t.setItemGraphicEl(i,r),this._progressiveEls.push(r)}}},s.prototype.eachRendered=function(e){re(this._progressiveEls||this.group,e)},s.prototype.remove=function(e){var t=this.group,a=this._data;a&&e?a.eachItemGraphicEl(function(l){l.fadeOut(function(){t.remove(l)},a.hostModel)}):t.removeAll()},s}(),be=function(s){O(e,s);function e(){var t=s!==null&&s.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.createMarkerModelFromSeries=function(t,a,l){return new e(t,a,l)},e.type="markPoint",e.defaultOption={z:5,symbol:"pin",symbolSize:50,tooltip:{trigger:"item"},label:{show:!0,position:"inside"},itemStyle:{borderWidth:2},emphasis:{label:{show:!0}}},e}(H);function X(s,e,t){var a=e.coordinateSystem;s.each(function(l){var i=s.getItemModel(l),o,r=L(i.get("x"),t.getWidth()),y=L(i.get("y"),t.getHeight());if(!isNaN(r)&&!isNaN(y))o=[r,y];else if(e.getMarkerPosition)o=e.getMarkerPosition(s.getValues(s.dimensions,l));else if(a){var f=s.get(a.dimensions[0],l),c=s.get(a.dimensions[1],l);o=a.dataToPoint([f,c])}isNaN(r)||(o[0]=r),isNaN(y)||(o[1]=y),s.setItemLayout(l,o)})}var Se=function(s){O(e,s);function e(){var t=s!==null&&s.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.updateTransform=function(t,a,l){a.eachSeries(function(i){var o=H.getMarkerModelFromSeries(i,"markPoint");o&&(X(o.getData(),i,l),this.markerGroupMap.get(i.id).updateLayout())},this)},e.prototype.renderSeries=function(t,a,l,i){var o=t.coordinateSystem,r=t.id,y=t.getData(),f=this.markerGroupMap,c=f.get(r)||f.set(r,new pe),u=de(o,t,a);a.setData(u),X(a.getData(),t,i),u.each(function(m){var n=u.getItemModel(m),v=n.getShallow("symbol"),p=n.getShallow("symbolSize"),h=n.getShallow("symbolRotate"),g=n.getShallow("symbolOffset"),d=n.getShallow("symbolKeepAspect");if(S(v)||S(p)||S(h)||S(g)){var b=a.getRawValue(m),M=a.getDataParams(m);S(v)&&(v=v(b,M)),S(p)&&(p=p(b,M)),S(h)&&(h=h(b,M)),S(g)&&(g=g(b,M))}var I=n.getModel("itemStyle").getItemStyle(),_=le(y,"color");I.fill||(I.fill=_),u.setItemVisual(m,{symbol:v,symbolSize:p,symbolRotate:h,symbolOffset:g,symbolKeepAspect:d,style:I})}),c.updateData(u),this.group.add(c.group),u.eachItemGraphicEl(function(m){m.traverse(function(n){U(n).dataModel=a})}),this.markKeep(c),c.group.silent=a.get("silent")||t.get("silent")},e.type="markPoint",e}(oe);function de(s,e,t){var a;s?a=T(s&&s.dimensions,function(r){var y=e.getData().getDimensionInfo(e.getData().mapDimension(r))||{};return P(P({},y),{name:r,ordinalMeta:null})}):a=[{name:"value",type:"float"}];var l=new ne(a,t),i=T(t.get("data"),G(me,e));s&&(i=ue(i,G(ye,s)));var o=ce(!!s,a);return l.initData(i,null,o),l}function Me(s){s.registerComponentModel(be),s.registerComponentView(Se),s.registerPreprocessor(function(e){he(e.series,"markPoint")&&(e.markPoint=e.markPoint||{})})}export{pe as S,ve as a,Me as i};
