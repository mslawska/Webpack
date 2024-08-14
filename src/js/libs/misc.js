export const docReady = function (fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    }
    else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

// export const trigger = (type, el, bubbles = true, cancelable = false) => {
//     var evObj = document.createEvent('Events');
//     // evObj.initEvent(type, bubbles, cancelable);
//     el.dispatchEvent(evObj);
// }

export const createElementFromHTML = (htmlString) => {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

export const randomRange = (max, min, skipValues) => {
    let t = 0;
    let r = 0;
    do {
        t++;
        r = Math.floor(Math.random() * (max - min) + min);
    } while (skipValues.indexOf(r) > -1);
    return r;
}

export const getStyle = (e) => {
    return e.currentStyle || window.getComputedStyle(e);
}

export const vhCalc = function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export const whichTransitionEvent = () => {
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
        "transition": "transitionend",
        "OTransition": "oTransitionEnd",
        "MozTransition": "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}
export const whichAnimationEvent = () => {
    var t,
        el = document.createElement("fakeelement");

    var animations = {
        "animation": "animationend",
        "OAnimation": "oAnimationEnd",
        "MozAnimation": "animationend",
        "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
}

