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