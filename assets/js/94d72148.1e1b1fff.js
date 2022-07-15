"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7024],{9705:function(e,t,a){a.d(t,{m:function(){return i},v:function(){return s}});var n=a(7294),p=a(2004);function s(e){var t=e.children;return n.createElement("div",{className:"runnable-command"},t)}function i(e){var t=e.url;return n.createElement(p.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:t})}},7425:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var n=a(3117),p=a(102),s=(a(7294),a(3905)),i=a(9705),l=["components"],r={title:"Snippets",sidebar_position:23},o="Snippets",c={unversionedId:"guides/snippets",id:"guides/snippets",title:"Snippets",description:"Instead of passing paths to your sources, you can also pass the code itself with the appropriate option.",source:"@site/docs/guides/snippets.md",sourceDirName:"guides",slug:"/guides/snippets",permalink:"/docs/guides/snippets",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/snippets.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"Snippets",sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"Piping",permalink:"/docs/guides/piping"},next:{title:"Internals",permalink:"/docs/guides/internals"}},d={},u=[{value:"Examples",id:"examples",level:2},{value:"Snippets and other kinds of inputs",id:"snippets-and-other-kinds-of-inputs",level:2},{value:"Referring to code from a snippet",id:"referring-to-code-from-a-snippet",level:2}],m={toc:u};function g(e){var t=e.components,a=(0,p.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"snippets"},"Snippets"),(0,s.kt)("p",null,"Instead of passing paths to your sources, you can also pass the code itself with the appropriate option."),(0,s.kt)(i.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --scala-snippet '@main def hello() = println(\"Hello\")'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"scripts")),(0,s.kt)(i.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli -e 'println(\"Hello\")'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Scala code")),(0,s.kt)(i.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --scala-snippet '@main def hello() = println(\"Hello\")'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Java code")),(0,s.kt)(i.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --java-snippet 'class Hello { public static void main(String args[]) { System.out.println(\"Hello\"); } }'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"a mix of Scala, Java and scripts")),(0,s.kt)(i.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --scala-snippet '@main def hello() = println(s\"${JavaSnippet.hello} ${snippet.world}\")' --java-snippet 'public class JavaSnippet { public static String hello = \"Hello\"; }' --script-snippet 'def world = \"world\"'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello world\n"))),(0,s.kt)("h2",{id:"snippets-and-other-kinds-of-inputs"},"Snippets and other kinds of inputs"),(0,s.kt)("p",null,"It is also possible to mix snippets with on-disk sources."),(0,s.kt)(i.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"cat Main.scala\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"object Main extends App {\n  val snippetData = SnippetData()\n  println(snippetData.value)\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli Main.scala --scala-snippet 'case class SnippetData(value: String = \"Hello\")'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,s.kt)("p",null,"Or even with piped ones, why not."),(0,s.kt)(i.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'println(SnippetData().value)' ||  scala-cli _.sc --scala-snippet 'case class SnippetData(value: String = \"Hello\")'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,s.kt)("p",null,"Nothing stops you from mixing everything all at once, really."),(0,s.kt)(i.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"cat Main.scala\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'object Main extends App {\n  val scalaSnippetString = ScalaSnippet().value\n  val javaSnippetString = JavaSnippet.data\n  val scriptSnippetString = snippet.script\n  val pipedInputString = stdin.piped\n  val ondiskScriptString = ondisk.script\n  println(s"Output: $scalaSnippetString $javaSnippetString $scriptSnippetString $pipedInputString")\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"cat ondisk.sc\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'def script = "on-disk-script"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"echo 'def piped = \"piped-script\"'|scala-cli . _.sc --scala-snippet 'case class ScalaSnippet(value: String = \"scala-snippet\")' --java-snippet 'public class JavaSnippet { public static String data = \"java-snippet\"; }' --script-snippet 'def script = \"script-snippet\"'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Output: scala-snippet java-snippet script-snippet piped-script\n"))),(0,s.kt)("h2",{id:"referring-to-code-from-a-snippet"},"Referring to code from a snippet"),(0,s.kt)("p",null,"When referring to code coming from a script snippet passed with ",(0,s.kt)("inlineCode",{parentName:"p"},"--script-snippet")," (or ",(0,s.kt)("inlineCode",{parentName:"p"},"-e"),"), you use its wrapper\nname: ",(0,s.kt)("inlineCode",{parentName:"p"},"snippet")),(0,s.kt)(i.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --scala-snippet '@main def main() = println(snippet.hello)' --script-snippet 'def hello: String = \"Hello\"'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,s.kt)("p",null,"This is similar to how you refer to code from piped scripts through their wrapper name (",(0,s.kt)("inlineCode",{parentName:"p"},"stdin"),"), more on which can be\nfound in ",(0,s.kt)("a",{parentName:"p",href:"/docs/guides/scripts"},"the scripts guide"),"."),(0,s.kt)("p",null,"In fact, you can refer to both kinds of scripts at one time, just keep in mind that you need to pick which script is to\nactually be run with the ",(0,s.kt)("inlineCode",{parentName:"p"},"--main-class")," option when multiple scripts are present on the classpath (and no non-script\nmain class was passed)."),(0,s.kt)(i.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"cat ondisk.sc\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=ondisk.sc",title:"ondisk.sc"},'println(s"${stdin.hello} ${snippet.world}")\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"echo 'def hello = \"Hello\"' | scala-cli _.sc ondisk.sc -e 'def world = \"world\"' --main-class ondisk_sc\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello world\n"))),(0,s.kt)("p",null,"When in doubt on what main classes are available on the classpath, you can always refer to the output\nof ",(0,s.kt)("inlineCode",{parentName:"p"},"--list-main-classes")),(0,s.kt)(i.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"echo 'def hello = \"Hello\"' | scala-cli _.sc ondisk.sc -e 'def world = \"world\"' --list-main-classes\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"ondisk_sc snippet_sc stdin_sc\n"))))}g.isMDXComponent=!0}}]);