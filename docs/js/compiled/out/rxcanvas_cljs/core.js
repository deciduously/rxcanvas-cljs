// Compiled by ClojureScript 1.10.238 {}
goog.provide('rxcanvas_cljs.core');
goog.require('cljs.core');
goog.require('glue.core');
cljs.core.enable_console_print_BANG_.call(null);
rxcanvas_cljs.core.draw = (function rxcanvas_cljs$core$draw(radius,canvas){
var canvas_dim = ((2) * radius);
canvas.width = canvas_dim;

canvas.height = canvas_dim;

var ctx = canvas.getContext("2d");
var center_x = (canvas.width / (2));
var center_y = (canvas.height / (2));
ctx.fillStyle = "rgb(0,0,0)";

ctx.clearRect((0),(0),canvas.width,canvas.height);

ctx.beginPath();

ctx.arc(center_x,center_y,radius,(0),((2) * Math.PI),false);

ctx.fill();

return ctx.stroke();
});
glue.core.defcomponent.call(null,new cljs.core.Keyword(null,"rxcanvas","rxcanvas",-657323528),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"template","template",-702405684),"#rxcanvas",new cljs.core.Keyword(null,"state","state",-1988618099),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),glue.core.atom.call(null,(10))], null);
}),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"draw-dot","draw-dot",-175620587),(function (this$,state,_){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state),document.querySelector("#size").value);

return rxcanvas_cljs.core.draw.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state)),document.querySelector("#rx"));
})], null)], null));
if(typeof rxcanvas_cljs.core.app !== 'undefined'){
} else {
rxcanvas_cljs.core.app = glue.core.vue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"el","el",-1618201118),"#app"], null));
}
rxcanvas_cljs.core.on_js_reload = (function rxcanvas_cljs$core$on_js_reload(){
return glue.core.reset_state_BANG_.call(null);
});

//# sourceMappingURL=core.js.map?rel=1543016387340
