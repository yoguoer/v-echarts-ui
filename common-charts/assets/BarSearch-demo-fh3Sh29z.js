import{v as g}from"./index-DR73uv9e.js";import{v as k}from"./index-Bxveauu_.js";import{u as b}from"./useDesign-jPeGL5oW.js";import{d as u,b as d,e as v,f as i,m as c,t as h,u as n,n as x,_ as C,g as y,r as m,c as B,o as S,a as O}from"./index-PWaRPkkw.js";import{w as T}from"./withInstall-Df4KX8Pz.js";import"./index-DAtyrCpe.js";import"./install-C5chah0n.js";import"./dataSample-bQ4sSG-L.js";import"./sectorHelper-CBBKUufA.js";import"./installMarkPoint-CAtSYxcF.js";const $=u({__name:"index",props:{id:{type:String,default:null},height:{type:String,default:"500px"},width:{type:String,default:"100%"},showCheckbox:{type:Boolean,default:!0},showTips:{type:Boolean,default:!0},className:{type:String,default:null},options:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},params:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1},searchOptions:{type:Object,default:()=>({})}},setup(e){const{getPrefixCls:o}=b(),s=o("bar-search");return(a,r)=>(d(),v("div",{class:x([`${n(s)}`])},[i(n(k),c({options:e.searchOptions},h(a.$attrs),a.$attrs),null,16,["options"]),i(n(g),c({data:e.data,options:e.options,params:e.params,height:e.height,width:e.width,showCheckbox:e.showCheckbox,showTips:e.showTips,id:e.id,loading:e.loading},h(a.$attrs),a.$attrs),null,16,["data","options","params","height","width","showCheckbox","showTips","id","loading"])],2))}}),D=C($,[["__scopeId","data-v-b30a8151"]]),P=T(D),j="BarSearchDemo",A="80%",I="500px",L=u({__name:"BarSearch-demo",setup(e){let o=y({username:"测试一下条形图Search",view:"0"});const s={mode:o,attr:{"label-width":"auto"},items:[[{span:6,attr:{prop:"username",label:"目的"},component:{comp:"el-input"}},{span:2,attr:{prop:"view","label-width":"30px"},component:{comp:"el-radio-group",children:[{comp:"el-radio",attr:{value:"0",label:"月视图"}},{comp:"el-radio",attr:{value:"1",label:"周视图"}}]}}]]},a=m({}),r=m(!0),p=B(()=>({showToolBox:!0,position:"top",isCross:!1}));async function l(){try{a.value=o.view==="0"?{xAxis:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],series:[{name:2023,data:[.97,.97,1.03,1.05,1.05,1.07,1.08,1.09,1.1,1.12,1.14,1.16]},{name:2024,data:[1.08,1.11,1.14,null,null,null,null,null,null,null,null,null]}],row:[{month:"2024-01"},{month:"2024-02"},{month:"2024-03"},{month:"2023-04"},{month:"2023-05"},{month:"2023-06"},{month:"2023-07"},{month:"2023-08"},{month:"2023-09"},{month:"2023-10"},{month:"2023-11"},{month:"2023-12"}],msg:"研发人效指数=单位时间内关闭NPI项目的总标准工时/上述项目的全期间申报工时"}:{xAxis:["week1","week2","week3","week4","week5","week6","week7"],series:[{name:2023,data:[.97,.85,.67,.98,1.02,1.01,.66]},{name:2024,data:[.88,.71,.54,null,1,1.03,.49]}],row:[{week:"1"},{week:"2"},{week:"3"},{week:"4"},{week:"5"},{week:"6"},{week:"7"}],msg:"研发人效指数=单位时间内关闭NPI项目的总标准工时/上述项目的全期间申报工时"}}catch(t){console.log("🚀 ~ getData ~ error:",t)}}S(()=>{l()});function w(t){o[t.prop]=t.value,console.log("🚀搜索条件发生了变化:",t),l()}function f(t){console.log("🚀 ~ chartClick ~ data:",t)}return(t,N)=>(d(),O(n(P),{data:a.value,params:p.value,height:I,width:A,showCheckbox:!0,showTips:!0,id:j,loading:r.value,searchOptions:s,onChangeAfter:w,onChartClick:f},null,8,["data","params","loading"]))}});export{L as default};