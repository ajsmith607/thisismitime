var date,hours,minutes,seconds,timeOfDay,mi,mihour,miminute;const svgns="http://www.w3.org/2000/svg";function removeElements(n,s){for(var t=n.querySelectorAll(s),e=0;e<t.length;e++)t[e].remove()}function getStandardTime(t,n){var e,s,o,i;return t>-1||n>-1?(t>-1&&(e=t),n>-1&&(s=n),o=0):(date=new Date,e=date.getHours(),s=date.getMinutes(),o=date.getSeconds()),i=e<12?"am":"pm",[e,s,o,i]}function displayStandardTime(t,n,s,o,i){t="#"+t;var e=n>12?n-12:n,a,r,c;e=e==0?12:e,a=(s<10?"0":"")+s,r=(o<10?"0":"")+o,c=e+":"+a+":"+r+" "+i,document.querySelector(t).innerHTML=c}function getMitime(c,u,i,e,d,r){var o,n,s,l=i*e,t,h,m,a=c-r;return a<0||c>=r+i*e?[o,n,s]=[0,0,0]:(t=l-a,o=Math.ceil(t/e),t<e?n=t:t%e?n=t%e:n=e,h=60-u,m=60/d,s=Math.ceil(h/m)),[o,n,s]}function displayMitime(e,t,n,s){e="#"+e;var o=t+"."+n+"."+s+" sm";document.querySelector(e).innerHTML=o}function setMeter(g,r,t,a){var s=document.querySelector(g),u,n,d,o,c,l,i,h,m,f,p,e;removeElements(s,"line."+a),u=s.getElementsByTagName("circle")[0],n=u.r.baseVal.value,d=1/r;for(o=0;o<r;o++)c=d*(o+1),l=Math.cos(2*Math.PI*c),i=Math.sin(2*Math.PI*c),h=l*(n-t),m=i*(n-t),f=l*(n+t),p=i*(n+t),e=document.createElementNS(svgns,"line"),e.setAttribute("x1",h),e.setAttribute("y1",m),e.setAttribute("x2",f),e.setAttribute("y2",p),e.setAttribute("class",a),s.appendChild(e)}function addTextLabels(v,l,i,g,p,f){for(var c=document.querySelector(v),h,o,s,n,e,a,m=c.getElementsByTagName("circle")[0],u=m.r.baseVal.value,d=u*p,r=1/l,t=0;t<l;t++)h=t+1,o=r*h,o=o-r/2,s=Math.cos(2*Math.PI*o),n=Math.sin(2*Math.PI*o),s=s*d,n=n*d,e=document.createElementNS(svgns,"text"),f||e.setAttribute("class","hide"),e.setAttribute("x",s),e.setAttribute("y",n),e.setAttribute("text-anchor","middle"),e.setAttribute("dominant-baseline","middle"),e.setAttribute("transform","translate("+s+","+n+") rotate(90, "+s+","+n+")"),g?a=i-t%i:a=t%i+1,e.innerHTML=a,c.appendChild(e)}function drawArc(a,t,o,i){var n=document.querySelector(a),u,e,r,c,l,d,s;removeElements(n,"path."+o),u=n.getElementsByTagName("circle")[0],e=u.r.baseVal.value,r=t>.5?1:0,i||(t=Math.abs(t-.99999)),c=Math.cos(2*Math.PI*t),l=Math.sin(2*Math.PI*t),d=[`M ${e} 0`,`A ${e} ${e} 0 ${r} ${i} ${c*e} ${l*e}`,`L 0 0`].join(" "),s=document.createElementNS(svgns,"path"),s.setAttribute("d",d),s.setAttribute("class",o),n.appendChild(s)}function toggleZeroStyles(n){var e="up",t;n==0&&(e="down"),t=document.getElementsByTagName("body")[0],t&&t.setAttribute("class",e)}function displayMitimer(e,c,n,i,s,O,_,E,t,l,d){e="#"+e;var u=document.querySelector(e),o,k,p,w,a,y,j,b,v,g,r,x,C,f,h,m="up";c==0?(m="down",removeElements(u,"path"),removeElements(u,"line")):(o=0,n&&!!i&&(k=c/n,drawArc(e+" .miface",k,"current",t),p=c-1,p&&(w=p/n,drawArc(e+" .miface",w,"elapsed",t)),d.indexOf("m")>-1&&addTextLabels(e+" .miface",n,n,t,.6,l)),i&&(a=_-O,a=Math.max(0,a),y=a+1,o=n*i,j=y/o,drawArc(e+" .mihourface",j,"current",t),b=a/o,drawArc(e+" .mihourface",b,"elapsed",t),d.indexOf("h")>-1&&addTextLabels(e+" .mihourface",o,i,t,.32,l)),s&&(v=E+1,g=60/s,r=Math.ceil(v/g),x=r/s,t&&v<g&&(r=1),drawArc(e+" .miminuteface",x,"current",t),C=(r-1)/s,drawArc(e+" .miminuteface",C,"elapsed",t),d.indexOf("n")>-1&&addTextLabels(e+" .miminuteface",s,s,t,.15,l)),(n||s)&&setMeter(e+" .mihourmeter",n,.04,"mitick"),i&&setMeter(e+" .mihourmeter",o,.03,"mihourtick")),f=u.getElementsByTagName("circle");for(h=0;h<f.length;h++)f[h].setAttribute("class",m)}function addMitimerDials(e){e="#"+e;var t=document.querySelector(e);t.innerHTML=`
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
        </g>`}function addMitimeTemplate(e,t){e="#"+e;var n=document.querySelector(e);n.innerHTML=`
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
        <svg id="${t}" viewBox="-1 -1 2 2" style="transform: rotate(-90deg)" class="midial"></svg>`}function mitimer(m,e,t,n,o,i,a,r,d,l,s,u,h){[hours,minutes,seconds,timeOfDay]=getStandardTime(u,h);var c="mhn";!s||(c=s),[mi,mihour,miminute]=getMitime(hours,minutes,o,i,a,r),!e||addMitimeTemplate(m,e,t,n),!n||displayStandardTime(n,hours,minutes,seconds,timeOfDay),!t||displayMitime(t,mi,mihour,miminute),!e||(addMitimerDials(e),toggleZeroStyles(mi),displayMitimer(e,mi,o,i,a,r,hours,minutes,d,l,c))}function getDisplayMitime(e,t,n,s,o,i,a,r){[hours,minutes,seconds,timeOfDay]=getStandardTime(a,r),displayStandardTime(t,hours,minutes,seconds,timeOfDay),[mi,mihour,miminute]=getMitime(hours,minutes,n,s,o,i),toggleZeroStyles(mi),displayMitime(e,mi,mihour,miminute)}