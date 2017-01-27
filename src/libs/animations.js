
let Right = function(fn) {
    const duration = 600;
    window.anime({
        targets: 'body',
        easing: 'easeInOutExpo',
        translateX: [{
            value: window.innerWidth,
            duration: duration / 2
        }, {
            value: -window.innerWidth,
            duration: 0
        }, {
            value: 0,
            duration: duration / 2
        }],
        duration: duration,
        direction: 'normal'
    });
    setTimeout(fn, duration / 2);
}

let Left = function(fn) {
    const duration = 600;
    window.anime({
        targets: 'body',
        easing: 'easeInOutExpo',
        translateX: [{
            value: window.innerWidth,
            duration: duration / 2
        }, {
            value: -window.innerWidth,
            duration: 0
        }, {
            value: 0,
            duration: duration / 2
        }],
        duration: duration,
        direction: 'reverse'
    });
    setTimeout(fn, duration / 2);
}

export {
    Right,
    Left
};
