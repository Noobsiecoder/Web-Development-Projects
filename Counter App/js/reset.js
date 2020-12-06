import {
    checkValueZero,
    resetFontSize
} from './change.js';

const resetValue = () => {
    let countValue = document.getElementById("countValue").innerHTML;
    checkValueZero();
    resetFontSize();
    countValue = 1;
    document.getElementById("countValue").innerHTML = `${countValue}`;
}

export {
    resetValue
};