(this["webpackJsonpreact-epic-teach"]=this["webpackJsonpreact-epic-teach"]||[]).push([[11],{359:function(e,a,n){"use strict";n.r(a);var t=n(12),r=n(0),s=n.n(r),o=n(361),l=n(364),c=n(134),i=n(14),u=n(46),m=n(16);function p(){var e=Object(t.a)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]);return p=function(){return e},e}function g(){var e=Object(t.a)(["\n  max-width: 600px;\n  margin: 30px auto;\n  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 20px;\n"]);return g=function(){return e},e}var d=i.a.div(g()),h=i.a.h1(p()),b={labelCol:{span:6},wrapperCol:{span:18}},f={wrapperCol:{offset:6,span:18}};a.default=function(){var e=Object(u.a)().AuthStore,a=Object(m.f)();return s.a.createElement(d,null,s.a.createElement(h,null,"\u767b\u5f55"),s.a.createElement(o.a,Object.assign({},b,{name:"basic",onFinish:function(n){console.log("Success:",n),e.setUsername(n.username),e.setPassword(n.password),e.login().then((function(){console.log("\u767b\u5f55\u6210\u529f,\u8df3\u8f6c\u5230\u9996\u9875"),a.push("/")})).catch((function(e){console.log(e),console.log("\u767b\u5f55\u5931\u8d25")}))},onFinishFailed:function(e){console.log("Failed:",e)}}),s.a.createElement(o.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,a){return/\W/.test(a)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf"):a.length<4||a.length>10?Promise.reject("\u957f\u5ea6\u4e3a4\uff5e10\u4e2a\u5b57\u7b26"):Promise.resolve()}}]},s.a.createElement(l.a,null)),s.a.createElement(o.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u592710\u4e2a\u5b57\u7b26"}]},s.a.createElement(l.a.Password,null)),s.a.createElement(o.a.Item,f,s.a.createElement(c.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))))}}}]);
//# sourceMappingURL=11.0932f11d.chunk.js.map