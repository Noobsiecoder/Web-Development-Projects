/*    
        @licstart  The following is the entire license notice for the 
        JavaScript code in this page.

        Copyright (C) 2014  Abhishek Sriram

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
*/

import {
    decrementButton
} from './main.js';

var fontSizeReduce = 500;

const checkValueZero = () => {
    let countText = document.getElementById("countValue").innerHTML;
    let countValue = countText;
    if (countValue == 0) {
        decrementButton.disabled = false;
        decrementButton.style.opacity = "100%";
        decrementButton.style.cursor = "pointer";
    }
}

const incrementFontSize = () => {
    let countValue = document.getElementById("countValue").innerHTML;
    if ((Number(countValue) + 1) % 1000 === 0) {
        document.getElementById("countValue").style.fontSize = `${fontSizeReduce}%`;
        fontSizeReduce -= 100;
    }
}

const decrementFontSize = () => {
    var fontSizeIncrease = fontSizeReduce + 100;
    let countValue = document.getElementById("countValue").innerHTML;
    if (Number(countValue) % 1000 === 0) {
        document.getElementById("countValue").style.fontSize = `${fontSizeIncrease}%`;
        fontSizeReduce += 100;
    }
}

const resetFontSize = () => {
    document.getElementById("countValue").style.fontSize = "7em";
}

export {
    checkValueZero,
    incrementFontSize,
    decrementFontSize,
    resetFontSize
};