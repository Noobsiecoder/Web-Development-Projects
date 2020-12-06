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