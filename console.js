$(function(){document.onreadystatechange=function(){if(document.readyState=="complete"){console.clear();console.log(["く__,.ヘヽ.　　　　/　,ー､ 〉","　　　　　＼ ', !-─‐-i　/　/´","　　　 　 ／｀ｰ'　　　 L/／｀ヽ､","　　 　 /　 ／,　 /|　 ,　 ,　　　 ',","　　　ｲ 　/ /-‐/　ｉ　L_ ﾊ ヽ!　 i","　　　 ﾚ ﾍ 7ｲ｀ﾄ　 ﾚ'ｧ-ﾄ､!ハ|　 |","　　　　 !,/7 '0'　　 ´0iソ| 　 |","　　　　 |.//,　　_　　 ,,,, / |./ 　 |","　　　　 ﾚ'| i＞.､,,__　_,.イ / 　.i 　|","　　　　　 ﾚ'| | / k_７_/ﾚ'ヽ,　ﾊ.　|","　　　　　　 | |/i 〈|/　 i　,.ﾍ |　i　|","　　　　　　.|/ /　ｉ： 　 ﾍ!　　＼　|","　　　 　 　 kヽ>､ﾊ 　 _,.ﾍ､ 　 /､!","　　　　　　 !'〈//｀Ｔ´', ＼ ｀'7'ｰr'","　　　　　　 ﾚ'ヽL__|___i,___,ンﾚ|ノ","　　　　　 　　　ﾄ-,/　|___./","　　　　　 　　　'ｰ'　　!_,","","            别再出BUG啦(╯°口°)╯(┴—┴"].join("\n"));report({id:"🌹 正在扫描 🌹",type:"success",message:"调用前置摄像头拍照成功，识别为【小可爱】。"});console.log("照片已拍摄: %c\n  ",'font-size:65px;background:url("https://cdn.jsdelivr.net/gh/hvhcsgo/img@1.0/xiaokeai.gif") no-repeat 0 0;background-color:#fff;');report({id:"💖 欢迎 💖",type:"info",message:"你好，小可爱。"});report({id:"⚡️ Powered by hvhcsgo.com ⚡️",type:"success",message:"你正在访问 贞德CSGO参数论坛"});report({id:"🍍 信息 🍍",type:"info",message:"哈哈，你打开了控制台，是想要看看我的秘密吗？"});report({id:"🐂 提示 🐂",type:"success",message:"请大佬手下留情Σ(ﾟдﾟ;)"})}};function report(inf){if(!inf){return}inf.message=inf.message?inf.message:"";var bg=format("color:#fff;background:#{0};",inf.type=="info"?"4f90d9":inf.type=="warn"?"f0ad4e":inf.type=="success"?"4fd953":(inf.type=="danger"||inf.type=="error")?"d9534f":"000");if(inf.type=="warn"||inf.type=="danger"||inf.type=="error"){if(inf.error&&inf.error.length){console.error("%c"+(inf.id?" "+inf.id+" ":""),bg,inf.message," Error: "+inf.error)}else{console.warn("%c"+(inf.id?" "+inf.id+" ":""),bg,inf.message)}}else{console.log("%c"+(inf.id?" "+inf.id+" ":""),bg,inf.message)}}function format(s,t){var e=s;if(arguments.length<1){return""}if(arguments.length==1){return s}if(arguments.length==2&&"object"==typeof t){var i;for(var n in t){void 0!==t[n]&&(i=new RegExp(arguments[2]?arguments[2].replace("0",n):"{"+n+"}","g"),e=e.replace(i,t[n]))}}else{for(var o=0;o<arguments.length-1;o++){void 0!==arguments[o+1]&&(i=new RegExp("({["+o+"]})","g"),e=e.replace(i,arguments[o+1]))}}return e}});