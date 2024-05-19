var date,hours,minutes,seconds,timeOfDay,mi,mihour,miminute;const svgns="http://www.w3.org/2000/svg";function removeElements(e,t){for(var s=e.querySelectorAll(t),n=0;n<s.length;n++)s[n].remove()}function getStandardTime(e,t){var n,s,o,i;return e>-1||t>-1?(e>-1&&(n=e),t>-1&&(s=t),o=0):(date=new Date,n=date.getHours(),s=date.getMinutes(),o=date.getSeconds()),i=n<12?"am":"pm",[n,s,o,i]}function displayStandardTime(e,t,n,s,o){e="#"+e;var i=t>12?t-12:t,i=i==0?12:i,a=(n<10?"0":"")+n,r=(s<10?"0":"")+s,c=i+":"+a+":"+r+" "+o;document.querySelector(e).innerHTML=c}function getMitime(e,t,n,s,o,i){var a,r,c,l,u,h,m=n*s,d=e-i;return d<0||e>=i+n*s?[c,r,l]=[0,0,0]:(a=m-d,c=Math.ceil(a/s),a<s?r=a:a%s?r=a%s:r=s,u=60-t,h=60/o,l=Math.ceil(u/h)),[c,r,l]}function displayMitime(e,t,n,s){e="#"+e;var o=t+"."+n+"."+s+" sm";document.querySelector(e).innerHTML=o}function setMeter(e,t,n,s){var o,i,a,r,l,d,u,h,m,f,p,g,c=document.querySelector(e);removeElements(c,"line."+s);for(g=c.getElementsByTagName("circle")[0],i=g.r.baseVal.value,u=1/t,a=0;a<t;a++)l=u*(a+1),d=Math.cos(2*Math.PI*l),r=Math.sin(2*Math.PI*l),h=d*(i-n),m=r*(i-n),f=d*(i+n),p=r*(i+n),o=document.createElementNS(svgns,"line"),o.setAttribute("x1",h),o.setAttribute("y1",m),o.setAttribute("x2",f),o.setAttribute("y2",p),o.setAttribute("class",s),c.appendChild(o)}function addTextLabels(e,t,n,s,o,i){for(var a,r,c,d,u,p,h=document.querySelector(e),g=h.getElementsByTagName("circle")[0],v=g.r.baseVal.value,m=v*o,f=1/t,l=0;l<t;l++)p=l+1,d=f*p,d=d-f/2,r=Math.cos(2*Math.PI*d),c=Math.sin(2*Math.PI*d),r=r*m,c=c*m,a=document.createElementNS(svgns,"text"),i||a.setAttribute("class","hide"),a.setAttribute("x",r),a.setAttribute("y",c),a.setAttribute("text-anchor","middle"),a.setAttribute("dominant-baseline","middle"),a.setAttribute("transform","translate("+r+","+c+") rotate(90, "+r+","+c+")"),s?u=n-l%n:u=l%n+1,a.innerHTML=u,h.appendChild(a)}function drawArc(e,t,n,s){var o,i,r,c,l,d,u,a=document.querySelector(e);removeElements(a,"path."+n),r=a.getElementsByTagName("circle")[0],o=r.r.baseVal.value,c=t>.5?1:0,s||(t=Math.abs(t-.99999)),l=Math.cos(2*Math.PI*t),d=Math.sin(2*Math.PI*t),u=[`M ${o} 0`,`A ${o} ${o} 0 ${c} ${s} ${l*o} ${d*o}`,`L 0 0`].join(" "),i=document.createElementNS(svgns,"path"),i.setAttribute("d",u),i.setAttribute("class",n),a.appendChild(i)}function toggleZeroStyles(e){var t,n="up";e==0&&(n="down"),t=document.getElementsByTagName("body")[0],t&&t.setAttribute("class",n)}function displayMitimer(e,t,n,s,o,i,a,r,c,l,d){e="#"+e;var u,h,m,f,p,v,b,j,y,_,w,O,x,C,E,g=document.querySelector(e),k="up";t==0?(k="down",removeElements(g,"path"),removeElements(g,"line")):(u=0,n&&!!s&&(x=t/n,drawArc(e+" .miface",x,"current",c),p=t-1,p&&(y=p/n,drawArc(e+" .miface",y,"elapsed",c)),d.indexOf("m")>-1&&addTextLabels(e+" .miface",n,n,c,.6,l)),s&&(h=a-i,h=Math.max(0,h),_=h+1,u=n*s,w=_/u,drawArc(e+" .mihourface",w,"current",c),O=h/u,drawArc(e+" .mihourface",O,"elapsed",c),d.indexOf("h")>-1&&addTextLabels(e+" .mihourface",u,s,c,.32,l)),o&&(v=r+1,b=60/o,f=Math.ceil(v/b),C=f/o,c&&v<b&&(f=1),drawArc(e+" .miminuteface",C,"current",c),E=(f-1)/o,drawArc(e+" .miminuteface",E,"elapsed",c),d.indexOf("n")>-1&&addTextLabels(e+" .miminuteface",o,o,c,.15,l)),(n||o)&&setMeter(e+" .mihourmeter",n,.04,"mitick"),s&&setMeter(e+" .mihourmeter",u,.03,"mihourtick"));for(j=g.getElementsByTagName("circle"),m=0;m<j.length;m++)j[m].setAttribute("class",k)}function addMitimerDials(e){e="#"+e;var t=document.querySelector(e);t.innerHTML=`
        <g class="miface">
        	<circle r="1" />
        </g>
        <g class="mihourface">
        	<circle r="1" />
        </g>
        <g class="mihourmeter">
        	<circle r=".5" />
        </g>
        <g class="miminuteface">
        <circle r=".4" />
        </g>`}function addMitimeTemplate(e,t){e="#"+e;var o=document.querySelector(e);o.innerHTML=`
    	<style>
        ${e} { background: white; padding: 1rem; }
        ${e} svg { display: block; width: 100%; height: auto; fill: white; }
        ${e} svg line { stroke: #295780; stroke-width: 0.01; stroke-linecap: round; }
        ${e} svg line.mitick { stroke-width: 0.024; }
        ${e} svg circle { fill: #058aff; }
        ${e} svg circle.up { fill: #ffad2b; }
        ${e} svg g.mihourmeter circle.up { fill: white; }
        ${e} svg circle.down { fill: #058aff; }
        ${e} svg path { fill: #058aff; }
        ${e} svg path.current { fill: #ff6a1f; } 
        ${e} svg text {fill: black; font-family: Arial, Helvetica, sans-serif; }
        ${e} svg g.miface text { font-size: .012rem; }
        ${e} svg g.mihourface text { font-size: .010rem; }
        ${e} svg g.miminuteface text { font-size: .008rem; }
        ${e} svg text.hide { display: none; }
        ${e} svg:hover text.hide { display: block; }
        </style>
        <svg id="${t}" viewBox="-1 -1 2 2" style="transform: rotate(-90deg)" class="midial"></svg>`}function mitimer(e,t,n,s,o,i,a,r,c,l,d,u,h){[hours,minutes,seconds,timeOfDay]=getStandardTime(u,h);var m="mhn";!d||(m=d),[mi,mihour,miminute]=getMitime(hours,minutes,o,i,a,r),!t||addMitimeTemplate(e,t,n,s),!s||displayStandardTime(s,hours,minutes,seconds,timeOfDay),!n||displayMitime(n,mi,mihour,miminute),!t||(addMitimerDials(t),toggleZeroStyles(mi),displayMitimer(t,mi,o,i,a,r,hours,minutes,c,l,m))}function getDisplayMitime(e,t,n,s,o,i,a,r){[hours,minutes,seconds,timeOfDay]=getStandardTime(a,r),displayStandardTime(t,hours,minutes,seconds,timeOfDay),[mi,mihour,miminute]=getMitime(hours,minutes,n,s,o,i),toggleZeroStyles(mi),displayMitime(e,mi,mihour,miminute)}