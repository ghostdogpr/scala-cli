"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4450],{4343:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=i(5893),s=i(1151),o=i(9705);const l={title:"Scala Toolkit",sidebar_position:7},a="Scala Toolkit",c={id:"guides/introduction/toolkit",title:"Scala Toolkit",description:"Newer versions of toolkits dropped support for Scala 2.12",source:"@site/docs/guides/introduction/toolkit.md",sourceDirName:"guides/introduction",slug:"/guides/introduction/toolkit",permalink:"/docs/guides/introduction/toolkit",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/introduction/toolkit.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Scala Toolkit",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"IDE support",permalink:"/docs/guides/introduction/ide"},next:{title:"Migrating from the old Scala runner",permalink:"/docs/guides/introduction/old-runner-migration"}},r={},d=[{value:"Scala Toolkit and tests",id:"scala-toolkit-and-tests",level:2},{value:"Other toolkits",id:"other-toolkits",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Newer versions of toolkits dropped support for Scala 2.12"})}),"\n",(0,n.jsx)(t.h1,{id:"scala-toolkit",children:"Scala Toolkit"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/scala/toolkit",children:"Scala Toolkit"})," is an ongoing\neffort by Scala Center and VirtusLab to compose a set of approachable libraries to solve\neveryday problems."]}),"\n",(0,n.jsxs)(t.p,{children:["You can easily add it to your Scala CLI project with the ",(0,n.jsx)(t.code,{children:"--toolkit"})," option:"]}),"\n",(0,n.jsxs)(o.v,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"title=UseOsLib.sc",children:"println(os.pwd)\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"scala-cli UseOsLib.sc --toolkit default\n"})})]}),"\n",(0,n.jsxs)(t.p,{children:["Similarly, you can achieve the same with the ",(0,n.jsx)(t.code,{children:"using toolkit"})," directive:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"compile",children:"//> using toolkit default\n@main def printPwd: Unit = println(os.pwd)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"scala-toolkit-and-tests",children:"Scala Toolkit and tests"}),"\n",(0,n.jsx)(t.p,{children:"Adding Scala Toolkit to your project effectively adds 2 dependencies to your classpath:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"org.scala-lang:toolkit:<version>"})," for your main scope (usable everywhere in the project);"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"org.scala-lang:toolkit-test:<version>"})," for your test scope (usable only in tests)."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"toolkit-test"})," includes a batch of libraries only relevant for testing (like i.e. ",(0,n.jsx)(t.code,{children:"munit"}),"), which you probably don't\nwant on your main scope\nclass path (which is why Scala CLI won't put it there).\nAnd so, you can use it like this:"]}),"\n",(0,n.jsxs)(o.v,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"title=Something.test.scala",children:'//> using toolkit default\nclass Something extends munit.FunSuite {\n  test("foo") {\n    assert(true)\n  }\n}\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"scala-cli test Something.test.scala\n"})})]}),"\n",(0,n.jsxs)(t.p,{children:["Also, in case you only want Scala Toolkit to be added to the test scope (and not for the main scope in any capacity),\nyou can always use the ",(0,n.jsx)(t.code,{children:"using test.toolkit"})," directive."]}),"\n",(0,n.jsxs)(o.v,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"title=project.scala",children:"//> using test.toolkit default\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"title=Another.test.scala",children:'class Another extends munit.FunSuite {\n  test("foo") {\n    assert(os.pwd.last.nonEmpty)\n  }\n}\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"scala-cli test Another.test.scala project.scala\n"})})]}),"\n",(0,n.jsxs)(t.p,{children:["More details about test scope directives can be found in\nthe ",(0,n.jsxs)(t.a,{href:"/docs/guides/introduction/using-directives#directives-with-a-test-scope-equivalent",children:[(0,n.jsx)(t.code,{children:"using"})," directives guide"]}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"other-toolkits",children:"Other toolkits"}),"\n",(0,n.jsxs)(t.p,{children:["Scala CLI also supports adding other toolkits to your project in a similar manner. Those have to follow the same\nstructure of 2 dependencies with the names ",(0,n.jsx)(t.code,{children:"toolkit"})," and ",(0,n.jsx)(t.code,{children:"toolkit-test"}),".\nTo do so, you have to explicitly pass the organisation the toolkit was released under (or an alias if defined)."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, to add the ",(0,n.jsx)(t.a,{href:"https://github.com/typelevel/toolkit",children:"Typelevel Toolkit"})," to your project, you can pass it with\nthe ",(0,n.jsx)(t.code,{children:"--toolkit"})," option:"]}),"\n",(0,n.jsxs)(o.v,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"title=UseTypelevel.scala",children:"import cats.effect.*\nimport fs2.io.file.Files\n\nobject Hello extends IOApp.Simple {\n  def run = Files[IO].currentWorkingDirectory.flatMap { cwd =>\n    IO.println(cwd.toString)\n  }\n}\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"scala-cli UseTypelevel.scala --toolkit org.typelevel:default\nscala-cli UseTypelevel.scala --toolkit typelevel:default # typelevel has a shorter alias defined\n"})})]}),"\n",(0,n.jsxs)(t.p,{children:["Similarly, you can achieve the same with the ",(0,n.jsx)(t.code,{children:"using toolkit"})," directive:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"compile",children:"//> using toolkit org.typelevel:default\n\nimport cats.effect.*\nimport fs2.io.file.Files\n\nobject Hello extends IOApp.Simple {\n  def run = Files[IO].currentWorkingDirectory.flatMap { cwd =>\n    IO.println(cwd.toString)\n  }\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Or with the alias:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"compile",children:"//> using toolkit typelevel:default\n\nimport cats.effect.*\nimport fs2.io.file.Files\n\nobject Hello extends IOApp.Simple {\n  def run = Files[IO].currentWorkingDirectory.flatMap { cwd =>\n    IO.println(cwd.toString)\n  }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9705:(e,t,i)=>{i.d(t,{m:()=>l,v:()=>o});i(7294);var n=i(2004),s=i(5893);function o(e){let{children:t}=e;return(0,s.jsx)("div",{className:"runnable-command",children:t})}function l(e){let{url:t}=e;return(0,s.jsx)(n.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:t})}}}]);