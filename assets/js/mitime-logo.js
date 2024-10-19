
// four glyphs, each composed of four strokes, all variations of mi symbol

function mitimelogo(containername) {

    const svgns = "http://www.w3.org/2000/svg";
    // const svgwidth = 600;
    let canvaspadding = 0;

    const basenumber = 16; 
    const phi = (1 + Math.sqrt(5)) / 2;

    let stemheight = basenumber / phi;
    let stemwidth = (basenumber - stemheight) / phi; 
    let barheight = stemwidth / phi;

    let interspace = (stemheight - (barheight * 3)) / 2;
    let connectspace = interspace / 2; 
    let letterspace = interspace + (interspace / 2);

    let iheight = stemheight - barheight - interspace;
    let nbarwidth = (basenumber - stemheight);
    let mbarwidth = (stemwidth * 2) + connectspace;
    let crossbarwidth = (stemwidth * 3) + (letterspace * 2);

    let r = interspace / phi
    let [rx, ry] = [r, r];
    let [x,y] = [0,0];

    function rect(height=stemheight, width=stemwidth) {
        let rect = document.createElementNS(svgns, "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("rx", rx);
        rect.setAttribute("ry", ry);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        return rect 
    }

    function m() {
        let mstem1 = rect() 
        x = x + stemwidth + connectspace;

        let mbar = rect(barheight, mbarwidth);
        x = x - connectspace + interspace;

        let mstem2 = rect(); 
        x = x + stemwidth + interspace;

        var mstem3 = rect(); 
        x = x + stemwidth;

        let mg = document.createElementNS(svgns, "g");
        mg.appendChild(mstem1);
        mg.appendChild(mbar);
        mg.appendChild(mstem2);
        mg.appendChild(mstem3);

        return mg;
    }

    // M
    let mg1 = m();
    x = x + letterspace;


    // ITI
    let crossbar = rect(barheight, crossbarwidth); 
    crossbar.setAttribute("id", "crosst");
    y = barheight + interspace; 

    let istem1 = rect(height=iheight); 
    x = x + stemwidth + letterspace;

    let tstem = rect(height=iheight); 
    x = x + stemwidth + letterspace;

    let istem2 = rect(height=iheight); 

    let itig = document.createElementNS(svgns, "g");
    itig.appendChild(crossbar);
    itig.appendChild(istem1);
    itig.appendChild(tstem);
    itig.appendChild(istem2);
    x = x + stemwidth + letterspace;
    y = 0;


    // M
    let mg2 = m();
    x = x + letterspace;


    // E
    let estem = rect();
    x = x + stemwidth + connectspace;

    let ebar1 = rect(barheight, nbarwidth);
    y = y + barheight + interspace;
    
    let ebar2 = rect(barheight, nbarwidth);
    y = y + barheight + interspace;

    let ebar3 = rect(barheight, nbarwidth);
    x = x + nbarwidth; 

    let eg = document.createElementNS(svgns, "g");
    eg.appendChild(estem);
    eg.appendChild(ebar1);
    eg.appendChild(ebar2);
    eg.appendChild(ebar3);


    var container = document.querySelector(containername);
    var svgs = container.getElementsByTagName("svg");
    for (var i = 0; i < svgs.length; i++) { svgs[i].remove(); }

    var svg = document.createElementNS(svgns, "svg");
    // svg.setAttribute('width', svgwidth);
    svg.setAttribute('viewBox', [-canvaspadding, -canvaspadding, x + canvaspadding, stemheight + canvaspadding].join(" "));

    svg.appendChild(mg1);
    svg.appendChild(itig);
    svg.appendChild(mg2);
    svg.appendChild(eg);

    container.appendChild(svg);
}

