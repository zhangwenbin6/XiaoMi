;(function(doc, win) {
    var docEle = doc.documentElement,
        dpr = Math.min(win.devicePixelRatio, 3);
    
    scale = 1/dpr,
    resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEle.dataset.dpr = dpr;
    var metaEle = doc.createElement('meta');
    metaEle.name = 'viewport';
    metaEle.content = 'width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ',user-scalable=no,minimal-ui';
    docEle.firstElementChild.appendChild(metaEle);
    var recalCulate = function() {
        var width = docEle.clientWidth;
        if(width / dpr > 750) {
            width = 750 * dpr;
        }

        docEle.style.fontSize = 100 * (width / 750) + 'px';
    };
    recalCulate();
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);
