// Compiled by ClojureScript 1.10.238 {}
goog.provide('glue.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('cljsjs.vue');
goog.require('glue.gatom');
glue.core.trace = (function glue$core$trace(arg){
cljs.core.prn.call(null,arg);

return arg;
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","html-id","glue.core/html-id",984229053),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23279#","p1__23279#",802793929,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),new cljs.core.Symbol(null,"p1__23279#","p1__23279#",802793929,null),"#"))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),new cljs.core.Symbol(null,"%","%",-950237169,null),"#"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__23279_SHARP_){
return clojure.string.starts_with_QMARK_.call(null,p1__23279_SHARP_,"#");
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","template","glue.core/template",-1966262124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword("glue.core","html-id","glue.core/html-id",984229053),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","html-id","glue.core/html-id",984229053)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","gatom","glue.core/gatom",830034380),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("glue.gatom","GAtom","glue.gatom/GAtom",-1347824296,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__23280_SHARP_){
return (p1__23280_SHARP_ instanceof glue.gatom.GAtom);
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","state-map","glue.core/state-map",-406908088),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Keyword("glue.core","gatom","glue.core/gatom",830034380)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Keyword("glue.core","gatom","glue.core/gatom",830034380)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Keyword("glue.core","gatom","glue.core/gatom",830034380)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Keyword("glue.core","gatom","glue.core/gatom",830034380)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23281){
return cljs.core.map_QMARK_.call(null,G__23281);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__22281__auto__,v__22282__auto__){
return cljs.core.nth.call(null,v__22282__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Keyword("glue.core","gatom","glue.core/gatom",830034380))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","state","glue.core/state",-626459547),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","props","glue.core/props",880121015),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459)),cljs.spec.alpha.rep_impl.call(null,new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","methods","glue.core/methods",-1268943974),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),cljs.core.fn_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23282){
return cljs.core.map_QMARK_.call(null,G__23282);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__22281__auto__,v__22282__auto__){
return cljs.core.nth.call(null,v__22282__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","computed","glue.core/computed",500771918),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),cljs.core.fn_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23283){
return cljs.core.map_QMARK_.call(null,G__23283);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__22281__auto__,v__22282__auto__){
return cljs.core.nth.call(null,v__22282__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","data","glue.core/data",1450224519),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","component-config","glue.core/component-config",749918154),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","template","glue.core/template",-1966262124)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","props","glue.core/props",880121015),new cljs.core.Keyword("glue.core","state","glue.core/state",-626459547),new cljs.core.Keyword("glue.core","computed","glue.core/computed",500771918),new cljs.core.Keyword("glue.core","methods","glue.core/methods",-1268943974),new cljs.core.Keyword("glue.core","data","glue.core/data",1450224519)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","template","glue.core/template",-1966262124)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","props","glue.core/props",880121015),new cljs.core.Keyword("glue.core","state","glue.core/state",-626459547),new cljs.core.Keyword("glue.core","computed","glue.core/computed",500771918),new cljs.core.Keyword("glue.core","methods","glue.core/methods",-1268943974),new cljs.core.Keyword("glue.core","data","glue.core/data",1450224519)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23284){
return cljs.core.map_QMARK_.call(null,G__23284);
}),(function (G__23284){
return cljs.core.contains_QMARK_.call(null,G__23284,new cljs.core.Keyword(null,"template","template",-702405684));
})], null),(function (G__23284){
return ((cljs.core.map_QMARK_.call(null,G__23284)) && (cljs.core.contains_QMARK_.call(null,G__23284,new cljs.core.Keyword(null,"template","template",-702405684))));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"computed","computed",-1482016762),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","template","glue.core/template",-1966262124)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","props","glue.core/props",880121015),new cljs.core.Keyword("glue.core","state","glue.core/state",-626459547),new cljs.core.Keyword("glue.core","computed","glue.core/computed",500771918),new cljs.core.Keyword("glue.core","methods","glue.core/methods",-1268943974),new cljs.core.Keyword("glue.core","data","glue.core/data",1450224519)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"template","template",-702405684)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","el","glue.core/el",-191024822),new cljs.core.Keyword("glue.core","html-id","glue.core/html-id",984229053),new cljs.core.Keyword("glue.core","html-id","glue.core/html-id",984229053));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","vue-config","glue.core/vue-config",223323041),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","el","glue.core/el",-191024822)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","el","glue.core/el",-191024822)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23285){
return cljs.core.map_QMARK_.call(null,G__23285);
}),(function (G__23285){
return cljs.core.contains_QMARK_.call(null,G__23285,new cljs.core.Keyword(null,"el","el",-1618201118));
})], null),(function (G__23285){
return ((cljs.core.map_QMARK_.call(null,G__23285)) && (cljs.core.contains_QMARK_.call(null,G__23285,new cljs.core.Keyword(null,"el","el",-1618201118))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","el","glue.core/el",-191024822)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"el","el",-1618201118)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("glue.core","converted-config","glue.core/converted-config",1542930572),new cljs.core.Keyword("glue.core","component-config","glue.core/component-config",749918154),new cljs.core.Keyword("glue.core","component-config","glue.core/component-config",749918154));
glue.core.valid_or_explain = (function glue$core$valid_or_explain(spec,item){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec,item))){
return true;
} else {
throw (new Error(cljs.spec.alpha.explain_str.call(null,spec,item)));
}
});
glue.core.atom = glue.gatom.atom;
glue.core.components_global_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
glue.core.reset_state_BANG_ = (function glue$core$reset_state_BANG_(){
return cljs.core.reset_BANG_.call(null,glue.core.components_global_state,cljs.core.PersistentArrayMap.EMPTY);
});
glue.core.state_for = (function glue$core$state_for(init_fn,this$){
if(((typeof this$ !== 'undefined') && (typeof this$._uid !== 'undefined'))){
var id = this$._uid;
var state = cljs.core.get.call(null,cljs.core.deref.call(null,glue.core.components_global_state),id);
if(cljs.core.truth_(state)){
return state;
} else {
var initial_state = init_fn.call(null);
cljs.core.swap_BANG_.call(null,glue.core.components_global_state,cljs.core.assoc,id,initial_state);

return initial_state;
}
} else {
return null;
}
});
glue.core.kebab__GT_camel = (function glue$core$kebab__GT_camel(s){
return clojure.string.replace.call(null,s,/-(\w)/,(function (matches){
return clojure.string.upper_case.call(null,cljs.core.second.call(null,matches));
}));
});
glue.core.convert_name = (function glue$core$convert_name(k){
return glue.core.kebab__GT_camel.call(null,cljs.core.name.call(null,k));
});
glue.core.convert_data = (function glue$core$convert_data(data_fn){
return cljs.core.comp.call(null,cljs.core.clj__GT_js,data_fn);
});
glue.core.convert_method = (function glue$core$convert_method(method_fn,state_fn){
return (function() { 
var G__23286__delegate = function (args){
var this$ = this;
return cljs.core.apply.call(null,method_fn,this$,glue.core.state_for.call(null,state_fn,this$),args);
};
var G__23286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23287__i = 0, G__23287__a = new Array(arguments.length -  0);
while (G__23287__i < G__23287__a.length) {G__23287__a[G__23287__i] = arguments[G__23287__i + 0]; ++G__23287__i;}
  args = new cljs.core.IndexedSeq(G__23287__a,0,null);
} 
return G__23286__delegate.call(this,args);};
G__23286.cljs$lang$maxFixedArity = 0;
G__23286.cljs$lang$applyTo = (function (arglist__23288){
var args = cljs.core.seq(arglist__23288);
return G__23286__delegate(args);
});
G__23286.cljs$core$IFn$_invoke$arity$variadic = G__23286__delegate;
return G__23286;
})()
;
});
glue.core.convert_computed_prop = (function glue$core$convert_computed_prop(prop_fn,state_fn){
return (function (){
var this$ = this;
return cljs.core.clj__GT_js.call(null,prop_fn.call(null,this$,glue.core.state_for.call(null,state_fn,this$)));
});
});
glue.core.convert_methods = (function glue$core$convert_methods(methods$,state_fn){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23289){
var vec__23290 = p__23289;
var k = cljs.core.nth.call(null,vec__23290,(0),null);
var v = cljs.core.nth.call(null,vec__23290,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [glue.core.convert_name.call(null,k),glue.core.convert_method.call(null,v,state_fn)], null);
}),methods$));
});
glue.core.convert_computed_props = (function glue$core$convert_computed_props(computed_props,state_fn){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23293){
var vec__23294 = p__23293;
var k = cljs.core.nth.call(null,vec__23294,(0),null);
var v = cljs.core.nth.call(null,vec__23294,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [glue.core.convert_name.call(null,k),glue.core.convert_computed_prop.call(null,v,state_fn)], null);
}),computed_props));
});
glue.core.convert_props = (function glue$core$convert_props(props){
return cljs.core.map.call(null,glue.core.convert_name,props);
});
glue.core.generate_comp_properties_for_state = (function glue$core$generate_comp_properties_for_state(state_fn){
var initial_state = state_fn.call(null);
var kx = cljs.core.keys.call(null,initial_state);
glue.core.valid_or_explain.call(null,new cljs.core.Keyword("glue.core","state-map","glue.core/state-map",-406908088),initial_state);

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (initial_state,kx){
return (function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [glue.core.convert_name.call(null,k),((function (initial_state,kx){
return (function (){
var this$ = this;
return cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,cljs.core.get.call(null,glue.core.state_for.call(null,state_fn,this$),k)));
});})(initial_state,kx))
], null);
});})(initial_state,kx))
,kx));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("glue.core","convert-component-config","glue.core/convert-component-config",-865686853,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("glue.core","component-config","glue.core/component-config",749918154)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("glue.core","converted-config","glue.core/converted-config",1542930572)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("glue.core","component-config","glue.core/component-config",749918154)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","component-config","glue.core/component-config",749918154)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("glue.core","component-config","glue.core/component-config",749918154)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("glue.core","component-config","glue.core/component-config",749918154)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("glue.core","converted-config","glue.core/converted-config",1542930572),new cljs.core.Keyword("glue.core","converted-config","glue.core/converted-config",1542930572),null,null),new cljs.core.Keyword("glue.core","converted-config","glue.core/converted-config",1542930572),null,null,null));
glue.core.convert_component_config = (function glue$core$convert_component_config(p__23297){
var map__23298 = p__23297;
var map__23298__$1 = ((((!((map__23298 == null)))?(((((map__23298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23298):map__23298);
var config = map__23298__$1;
var state = cljs.core.get.call(null,map__23298__$1,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentArrayMap.EMPTY);
var data = cljs.core.get.call(null,map__23298__$1,new cljs.core.Keyword(null,"data","data",-232669377),((function (map__23298,map__23298__$1,config,state){
return (function (){
return cljs.core.PersistentArrayMap.EMPTY;
});})(map__23298,map__23298__$1,config,state))
);
var methods$ = cljs.core.get.call(null,map__23298__$1,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentArrayMap.EMPTY);
var computed = cljs.core.get.call(null,map__23298__$1,new cljs.core.Keyword(null,"computed","computed",-1482016762),cljs.core.PersistentArrayMap.EMPTY);
var props = cljs.core.get.call(null,map__23298__$1,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentVector.EMPTY);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,config,new cljs.core.Keyword(null,"state","state",-1988618099)),new cljs.core.Keyword(null,"data","data",-232669377),glue.core.convert_data.call(null,data),new cljs.core.Keyword(null,"methods","methods",453930866),glue.core.convert_methods.call(null,methods$,state),new cljs.core.Keyword(null,"computed","computed",-1482016762),cljs.core.merge.call(null,glue.core.generate_comp_properties_for_state.call(null,state),glue.core.convert_computed_props.call(null,computed,state)),new cljs.core.Keyword(null,"props","props",453281727),glue.core.convert_props.call(null,props));
});
glue.core.config__GT_vue = (function glue$core$config__GT_vue(config){
return cljs.core.clj__GT_js.call(null,glue.core.convert_component_config.call(null,config));
});
glue.core.emit = (function glue$core$emit(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23303 = arguments.length;
var i__4500__auto___23304 = (0);
while(true){
if((i__4500__auto___23304 < len__4499__auto___23303)){
args__4502__auto__.push((arguments[i__4500__auto___23304]));

var G__23305 = (i__4500__auto___23304 + (1));
i__4500__auto___23304 = G__23305;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return glue.core.emit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

glue.core.emit.cljs$core$IFn$_invoke$arity$variadic = (function (this$,label,args){
if(cljs.core.truth_(glue.core.valid_or_explain.call(null,new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),label))){
} else {
throw (new Error("Assert failed: (valid-or-explain :glue.core/keyword label)"));
}

return cljs.core.apply.call(null,cljs.core.js_invoke,this$,"$emit",cljs.core.name.call(null,label),args);
});

glue.core.emit.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
glue.core.emit.cljs$lang$applyTo = (function (seq23300){
var G__23301 = cljs.core.first.call(null,seq23300);
var seq23300__$1 = cljs.core.next.call(null,seq23300);
var G__23302 = cljs.core.first.call(null,seq23300__$1);
var seq23300__$2 = cljs.core.next.call(null,seq23300__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23301,G__23302,seq23300__$2);
});

glue.core.prop = (function glue$core$prop(this$,prop_name){
return (this$["$props"][glue.core.convert_name.call(null,prop_name)]);
});
glue.core.defcomponent = (function glue$core$defcomponent(n,config){
if(cljs.core.truth_(glue.core.valid_or_explain.call(null,new cljs.core.Keyword("glue.core","keyword","glue.core/keyword",156090459),n))){
} else {
throw (new Error("Assert failed: (valid-or-explain :glue.core/keyword n)"));
}

if(cljs.core.truth_(glue.core.valid_or_explain.call(null,new cljs.core.Keyword("glue.core","component-config","glue.core/component-config",749918154),config))){
} else {
throw (new Error("Assert failed: (valid-or-explain :glue.core/component-config config)"));
}

return Vue.component(cljs.core.name.call(null,n),glue.core.config__GT_vue.call(null,config));
});
glue.core.vue = (function glue$core$vue(config){
if(cljs.core.truth_(glue.core.valid_or_explain.call(null,new cljs.core.Keyword("glue.core","vue-config","glue.core/vue-config",223323041),config))){
} else {
throw (new Error("Assert failed: (valid-or-explain :glue.core/vue-config config)"));
}

return (new Vue(cljs.core.clj__GT_js.call(null,config)));
});
glue.core.deffilter = (function glue$core$deffilter(n,f){
return Vue.filter(cljs.core.name.call(null,n),f);
});

//# sourceMappingURL=core.js.map?rel=1543016387248
