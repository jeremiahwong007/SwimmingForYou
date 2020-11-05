var size = [],
    sec1 = [],
    sec2 = [],
    sec3 = [],
    sec4 = [],
    threshold = 720,
    cp = 100;   // total container padding (horizontal)

window.onload = () => {
    size = [window.innerWidth, window.innerHeight];
    sec1 = [elem('process'), elem('approach'), elem('goal'), elem('mission')];
    sec2 = [elem('back-me'), elem('promise')];
    sec3 = elem(null, 'image');
    sec4 = [elem('name'), elem('email'), elem('message')],
    respond();
};

window.onresize = () => {
    size = [window.innerWidth, window.innerHeight];
    respond();
};

function respond() {
    let c = size[0] > threshold;
    
    // section 1
    for (let i in sec1) {
        sec1[i].style.width = c ? (size[0] - cp) / 2 - 17 + 'px' : '100%';
        sec1[i].style.height = 'inherit';
        sec1[i].style.display = c ? 'inline-block' : 'block';
        sec1[i].style.float = c ? (i % 2 ? 'rigth' : 'left') : 'inherit';
        sec1[i % 2 ? 0 : i].style.marginRight = c ? '10px' : 'inherit';
        sec1[i < 2 ? i : 0].style.marginBottom = c ? '10px' : 'inherit';
    }
    // section 1 - fix height differences
    if (c) {
        for (let i in sec1) {
            let oi = Number(i) + (i % 2 ? -1 : 1);
            sec1[i].style.height = Math.max(getSize(sec1[i]), getSize(sec1[oi])) + 'px';
        }
    }
    
    // section 2
    sec2[0].style.width = c ? (size[0] - cp) / 2 - 19 + 'px' : '100%';
    sec2[1].style.width = c ? (size[0] - cp) / 2 - 19 + 'px' : '100%';
    sec2[0].style.display = c ? 'inline-block' : 'block';
    sec2[0].style.margin = '0 20px 0 0';
    sec2[1].style.height = c ? sec2[0].offsetHeight + 'px' : 'inherit';
    sec2[1].style.float = c ? 'right' : 'inherit';
    
    // section 3
    for (let i in sec3) {
        sec3[i].style.width = c ? (size[0] - cp) / 4 - 10.5 + 'px' : '100%';
        sec3[i].style.marginRight = c ? ((i != 3 && i != 7) ? '5px' : '0') : '0';
        sec3[c ? (i < 4 ? i : 0) : i].style.marginBottom = '5px';
    }
    
    // section 4
    for (let i in sec4) {
        if (i < 2) {
            sec4[i].style.width = c ? (size[0] - cp) / 2 - 19 + 'px' : '100%';
        } else {
            sec4[i].style.margin = c ? '10px 0 20px 0' : '0 0 20px 0';
        }
    }
    sec4[1].style.height = c ? sec4[0].offsetHeight + 'px' : 'inherit';
    sec4[1].style.float = c ? 'right' : 'inherit';
    sec4[0].style.display = c ? 'inline-block' : 'block';
    sec4[2].style.marginTop = c ? '20px' : 'inherit';
}

function getSize(e) {
    return parseFloat(window.getComputedStyle(e).getPropertyValue('height'));
}

function elem(idName, className) {
    if (idName) {
        return document.getElementById(idName);
    } else {
        return Array.from(document.getElementsByClassName(className));
    }
}