// ==UserScript==
// @name        investing.com, remove ads
// @namespace   investing
// @include     /investing\.com/
// @version     1
// @grant       none
// ==/UserScript==

console.log('-- investing.com Ad Blocker is active --');

function cleanDoc(doc) {
    const adSelectors = ['.midHeader',
                         '.earAdv',
                         '.tradeNowRightColumn',
                         '#ad1',
                         '#scrollingRightBox',
                         '#webinars',
                         '#mainPopUpContainer',
                         '.generalOverlay',
                         '.headBtnWrapper.inlineblock',
                         '#findABroker',
                         '.logoSwitch.elpTbl.elp30',
                         '.js-tradenow-btn',
                         '.tradeNowUKText'];
    const compressedAdSelector = adSelectors.join(', ');
    const ads = [...doc.querySelectorAll(compressedAdSelector)];

    const adsToBeRemoved = [...ads];
    console.log('-- ' + adsToBeRemoved.length + ' ads will be blocked --');
    adsToBeRemoved.forEach(n => n.remove());
}

cleanDoc(document);
