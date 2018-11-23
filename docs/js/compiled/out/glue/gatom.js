// Compiled by ClojureScript 1.10.238 {}
goog.provide('glue.gatom');
goog.require('cljs.core');
goog.require('cljsjs.vue');

/**
 * @interface
 */
glue.gatom.VueState = function(){};

glue.gatom._get_state_BANG_ = (function glue$gatom$_get_state_BANG_(this$){
if(((!((this$ == null))) && (!((this$.glue$gatom$VueState$_get_state_BANG_$arity$1 == null))))){
return this$.glue$gatom$VueState$_get_state_BANG_$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (glue.gatom._get_state_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (glue.gatom._get_state_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"VueState.-get-state!",this$);
}
}
}
});

glue.gatom._set_state_BANG_ = (function glue$gatom$_set_state_BANG_(this$,value){
if(((!((this$ == null))) && (!((this$.glue$gatom$VueState$_set_state_BANG_$arity$2 == null))))){
return this$.glue$gatom$VueState$_set_state_BANG_$arity$2(this$,value);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (glue.gatom._set_state_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,value);
} else {
var m__4212__auto____$1 = (glue.gatom._set_state_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"VueState.-set-state!",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {glue.gatom.VueState}
 * @implements {cljs.core.IDeref}
*/
glue.gatom.GAtom = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition1$ = 114688;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
glue.gatom.GAtom.prototype.glue$gatom$VueState$ = cljs.core.PROTOCOL_SENTINEL;

glue.gatom.GAtom.prototype.glue$gatom$VueState$_get_state_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (self__.obj["state"]);
});

glue.gatom.GAtom.prototype.glue$gatom$VueState$_set_state_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return (self__.obj["state"] = value);
});

glue.gatom.GAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (a){
var self__ = this;
var a__$1 = this;
return glue.gatom._get_state_BANG_.call(null,a__$1);
});

glue.gatom.GAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
return glue.gatom._set_state_BANG_.call(null,a__$1,new_value);
});

glue.gatom.GAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,glue.gatom._get_state_BANG_.call(null,a__$1)));
});

glue.gatom.GAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,glue.gatom._get_state_BANG_.call(null,a__$1),x));
});

glue.gatom.GAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,glue.gatom._get_state_BANG_.call(null,a__$1),x,y));
});

glue.gatom.GAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,glue.gatom._get_state_BANG_.call(null,a__$1),x,y,more));
});

glue.gatom.GAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

glue.gatom.GAtom.cljs$lang$type = true;

glue.gatom.GAtom.cljs$lang$ctorStr = "glue.gatom/GAtom";

glue.gatom.GAtom.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"glue.gatom/GAtom");
});

/**
 * Positional factory function for glue.gatom/GAtom.
 */
glue.gatom.__GT_GAtom = (function glue$gatom$__GT_GAtom(obj){
return (new glue.gatom.GAtom(obj));
});

glue.gatom.atom = (function glue$gatom$atom(x){
var obj = {};
Vue.util.defineReactive(obj,"state",x);

return (new glue.gatom.GAtom(obj));
});

//# sourceMappingURL=gatom.js.map?rel=1543016383019
