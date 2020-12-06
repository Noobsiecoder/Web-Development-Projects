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
    decrementFontSize
} from './change.js';

import { decrementButton} from './main.js';

const decrementValue = () => {
    let countValue = document.getElementById("countValue").innerHTML;
    if (Number(countValue - 1) <= 0) {
        decrementButton.disabled = true;
        decrementButton.style.opacity = "25%";
        decrementButton.style.cursor = "default";
    } else {
        decrementFontSize();
    }
    document.getElementById("countValue").innerHTML = `${--countValue}`;
}

export {
    decrementValue
};