var lsystems=function(t){function i(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}var n={};return i.m=t,i.c=n,i.d=function(t,n,r){i.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=0)}([function(t,i,n){var r,s;r=[n,i,n(1)],void 0!==(s=function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(t){for(var n in t)i.hasOwnProperty(n)||(i[n]=t[n])}(n)}.apply(i,r))&&(t.exports=s)},function(t,i,n){var r,s;r=[n,i],void 0!==(s=function(t,i){"use strict";function n(t){return Math.floor(Math.random()*t)}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function t(t,i){this.instructions=t,this.productionRules=i}return t.prototype.step=function(){for(var t=this.instructions.length,i="",n=0;n<t;n++)i+=this.productionRules[this.instructions[n]]||this.instructions[n];this.instructions=i},t.prototype.stepn=function(t){for(var i=0;i<t;i++)this.step()},t}();i.LSystem=r;var s=function(){function t(t){this.divisor=2,this.forwardStrings=["F","E"],this.turnLeftStrings=["-"],this.turnRightStrings=["+"],this.RBGStrings=["R","B","G"],this.lineColors=["red","blue","green"],this.lineColor="red",this.initialOrientation=0,this.theta=Math.PI/this.divisor,this.increment=12,this.startX=0,this.startY=0;var i=t.canvas;this.startX=i.width/2,this.startY=i.height/2,this.ctx=i.getContext("2d"),this.ctx.moveTo(this.startX,this.startY),this.system=t.system;for(var n in t)this.hasOwnProperty(n)&&(this[n]=t[n])}return t.prototype.draw=function(){var t=this.system,i=this.initialOrientation,n=this.theta,r=this.ctx,s=2*this.divisor;r.beginPath(),r.strokeStyle=this.lineColor;for(var e,o,u,h=0;h<t.instructions.length;h++)-1!=this.forwardStrings.indexOf(t.instructions[h])?(e=this.increment*Math.cos(i*n),o=this.increment*Math.sin(i*n),this.startX+=e,this.startY+=o,r.lineTo(this.startX,this.startY)):-1!=this.turnRightStrings.indexOf(t.instructions[h])?i=(i+1)%s:-1!=this.turnLeftStrings.indexOf(t.instructions[h])?i=(i-1)%s:-1!=this.RBGStrings.indexOf(t.instructions[h])&&(u=this.RBGStrings.indexOf(t.instructions[h]),r.closePath(),r.stroke(),r.strokeStyle=this.lineColors[u],r.beginPath());console.log("completed render"),r.stroke()},t}();i.LSystemRenderer=s;var e=function(){function t(){this.possible=["F","+","-","E","B","G","R"]}return t.prototype.singleRuleRandom=function(t){for(var i="",r=0;r<t;r++)i+=String(this.possible[n(this.possible.length)]);return i},t.prototype.ruleSetRandom=function(){return{F:this.singleRuleRandom(13),E:this.singleRuleRandom(13)}},t.prototype.randomSystem=function(){var t=this.ruleSetRandom();return new r("F",t)},t.prototype.dragonCurve=function(){return new r("F",{F:"F+E+",E:"-F-E"})},t}();i.LSystemGenerator=e}.apply(i,r))&&(t.exports=s)}]);