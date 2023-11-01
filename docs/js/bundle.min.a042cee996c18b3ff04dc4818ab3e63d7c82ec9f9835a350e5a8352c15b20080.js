var date,hours,minutes,seconds,timeOfDay,mi,mihour,miminute;const svgns="http://www.w3.org/2000/svg";function removeElements(c,d){for(var b=c.querySelectorAll(d),a=0;a<b.length;a++)b[a].remove()}function getStandardTime(b,c){var a,d,e,f;return b>-1||c>-1?(b>-1&&(a=b),c>-1&&(d=c),e=0):(date=new Date,a=date.getHours(),d=date.getMinutes(),e=date.getSeconds()),f=a<12?"am":"pm",[a,d,e,f]}function displayStandardTime(b,c,d,e,i){var a,f,g,h;b="#"+b,a=c>12?c-12:c,a=a==0?12:a,f=(d<10?"0":"")+d,g=(e<10?"0":"")+e,h=a+":"+f+":"+g+" "+i,document.querySelector(b).innerHTML=h}function getMitime(i,l,f,a,k,h){var j=f*a,g=i-h,d,e,c,b,m,n;return g<0||i>=h+f*a?[e,c,d]=[0,0,0]:(b=j-g,e=Math.ceil(b/a),b<a?c=b:b%a?c=b%a:c=a,m=60-l,n=60/k,d=Math.ceil(m/n)),[e,c,d]}function displayMitime(a,b,c,d){a="#"+a;var e=b+"."+c+"."+d+" sm";document.querySelector(a).innerHTML=e}function setMeter(q,h,b,g){var d=document.querySelector(q),l,c,k,e,i,j,f,m,n,o,p,a;removeElements(d,'line.'+g),l=d.getElementsByTagName('circle')[0],c=l.r.baseVal.value,k=1/h;for(e=0;e<h;e++)i=k*(e+1),j=Math.cos(2*Math.PI*i),f=Math.sin(2*Math.PI*i),m=j*(c-b),n=f*(c-b),o=j*(c+b),p=f*(c+b),a=document.createElementNS(svgns,'line'),a.setAttribute('x1',m),a.setAttribute('y1',n),a.setAttribute('x2',o),a.setAttribute('y2',p),a.setAttribute('class',g),d.appendChild(a)}function addTextLabels(r,j,f,q,p,o){for(var i=document.querySelector(r),n=i.getElementsByTagName('circle')[0],l=n.r.baseVal.value,k=l*p,h=1/j,b=0,m,e,d,c,a,g;b<j;b++)m=b+1,e=h*m,e=e-h/2,d=Math.cos(2*Math.PI*e),c=Math.sin(2*Math.PI*e),d=d*k,c=c*k,a=document.createElementNS(svgns,'text'),o||a.setAttribute('class','hide'),a.setAttribute('x',d),a.setAttribute('y',c),a.setAttribute('text-anchor',"middle"),a.setAttribute('dominant-baseline',"middle"),a.setAttribute('transform','translate('+d+','+c+') rotate(90, '+d+','+c+')'),q?g=f-b%f:g=b%f+1,a.innerHTML=g,i.appendChild(a)}function drawArc(g,b,e,f){var c=document.querySelector(g),l,a,h,i,j,k,d;removeElements(c,'path.'+e),l=c.getElementsByTagName('circle')[0],a=l.r.baseVal.value,h=b>.5?1:0,f||(b=Math.abs(b-.99999)),i=Math.cos(2*Math.PI*b),j=Math.sin(2*Math.PI*b),k=[`M ${a} 0`,`A ${a} ${a} 0 ${h} ${f} ${i*a} ${j*a}`,`L 0 0`].join(' '),d=document.createElementNS(svgns,'path'),d.setAttribute('d',k),d.setAttribute('class',e),c.appendChild(d)}function toggleZeroStyles(c){var a='up',b;c==0&&(a='down'),b=document.getElementsByTagName("body")[0],b&&b.setAttribute('class',a)}function displayMitimer(a,o,c,f,d,z,A,B,b,l,k){var h,m,e,y,p,w,g,t,s,u,r,q,i,v,x,n,j;a="#"+a,h=document.querySelector(a),m='up',o==0?(m='down',removeElements(h,'path'),removeElements(h,'line')):(e=0,c&&!!f&&(y=o/c,drawArc(a+' .miface',y,'current',b),p=o-1,p&&(w=p/c,drawArc(a+' .miface',w,'elapsed',b)),k.indexOf('m')>-1&&addTextLabels(a+' .miface',c,c,b,.6,l)),f&&(g=A-z,g=Math.max(0,g),t=g+1,e=c*f,s=t/e,drawArc(a+' .mihourface',s,'current',b),u=g/e,drawArc(a+' .mihourface',u,'elapsed',b),k.indexOf('h')>-1&&addTextLabels(a+' .mihourface',e,f,b,.32,l)),d&&(r=B+1,q=60/d,i=Math.ceil(r/q),v=i/d,b&&r<q&&(i=1),drawArc(a+' .miminuteface',v,'current',b),x=(i-1)/d,drawArc(a+' .miminuteface',x,'elapsed',b),k.indexOf('n')>-1&&addTextLabels(a+' .miminuteface',d,d,b,.15,l)),(c||d)&&setMeter(a+' .mihourmeter',c,.04,'mitick'),f&&setMeter(a+' .mihourmeter',e,.03,'mihourtick')),n=h.getElementsByTagName('circle');for(j=0;j<n.length;j++)n[j].setAttribute('class',m)}function addMitimerDials(a){a="#"+a;var b=document.querySelector(a);b.innerHTML=`
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
        </g>`}function addMitimeTemplate(a,b,d,e){a="#"+a;var c=document.querySelector(a);c.innerHTML=`
    	<style>
        ${a} { background: white; padding: 1rem; }
        ${a} svg { display: block; width: 100%; height: auto; fill: white; }
        ${a} svg line { stroke: #295780; stroke-width: 0.01; stroke-linecap: round; }
        ${a} svg line.mitick { stroke-width: 0.024; }
        ${a} svg circle { fill: #058aff; }
        ${a} svg circle.up { fill: #ffad2b; }
        ${a} svg g.mihourmeter circle.up { fill: white; }
        ${a} svg circle.down { fill: #058aff; }
        ${a} svg path { fill: #058aff; }
        ${a} svg path.current { fill: #ff6a1f; } 
        ${a} svg text {fill: black; font-family: Arial, Helvetica, sans-serif; }
        ${a} svg g.miface text { font-size: .012rem; }
        ${a} svg g.mihourface text { font-size: .010rem; }
        ${a} svg g.miminuteface text { font-size: .008rem; }
        ${a} svg text.hide { display: none; }
        ${a} svg:hover text.hide { display: block; }
        </style>
        <svg id="${b}" viewBox="-1 -1 2 2" style="transform: rotate(-90deg)" class="midial"></svg>`}function mitimer(n,a,b,c,e,f,g,h,k,j,d,l,m){[hours,minutes,seconds,timeOfDay]=getStandardTime(l,m);var i="mhn";!d||(i=d),[mi,mihour,miminute]=getMitime(hours,minutes,e,f,g,h),!a||addMitimeTemplate(n,a,b,c),!c||displayStandardTime(c,hours,minutes,seconds,timeOfDay),!b||displayMitime(b,mi,mihour,miminute),!a||(addMitimerDials(a),toggleZeroStyles(mi),displayMitimer(a,mi,e,f,g,h,hours,minutes,k,j,i))}function getDisplayMitime(a,b,c,d,e,f,g,h){[hours,minutes,seconds,timeOfDay]=getStandardTime(g,h),displayStandardTime(b,hours,minutes,seconds,timeOfDay),[mi,mihour,miminute]=getMitime(hours,minutes,c,d,e,f),toggleZeroStyles(mi),displayMitime(a,mi,mihour,miminute)}