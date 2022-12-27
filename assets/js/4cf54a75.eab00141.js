"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5631],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(a),g=r,f=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5640:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],c={title:"Packaging Scala applications as GraalVM native images",sidebar_position:7},l=void 0,s={unversionedId:"cookbooks/native-images",id:"cookbooks/native-images",title:"Packaging Scala applications as GraalVM native images",description:"Scala CLI lets you package your applications as native executables",source:"@site/docs/cookbooks/native-images.md",sourceDirName:"cookbooks",slug:"/cookbooks/native-images",permalink:"/docs/cookbooks/native-images",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/native-images.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Packaging Scala applications as GraalVM native images",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Setup a Scala CLI project in IDEA IntelliJ",permalink:"/docs/cookbooks/intellij"},next:{title:"Setup a Scala CLI project in VSCode",permalink:"/docs/cookbooks/vscode"}},p={},u=[],m={toc:u};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Scala CLI lets you package your applications as native executables\nusing GraalVM native images."),(0,o.kt)("p",null,"As an example, let's package the following application as a native executable\nusing GraalVM native image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Echo.scala",title:"Echo.scala"},'object Echo {\n  def main(args: Array[String]): Unit =\n    println(args.mkString(" "))\n}\n')),(0,o.kt)("p",null,"The following command packages this application as a native executable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli package --native-image Echo.scala -o echo\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Run echo on macOS\n./echo a b\n# a b\n")),(0,o.kt)("p",null,"You can pass custom options to GraalVM native image by passing them after ",(0,o.kt)("inlineCode",{parentName:"p"},"--"),", like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli package --native-image Echo.scala -o echo -- --no-fallback\n")))}g.isMDXComponent=!0}}]);