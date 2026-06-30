const first_p1 = document.getElementById('first_p1');
first_p1.onclick = function () {
    window.location.href = '#third'
};
const first_p2 = document.getElementById('first_p2');
first_p2.onclick = function () {
    window.location.href = '#fourth'
};
const first_p3 = document.getElementById('first_p3');
first_p3.onclick = function () {
    window.location.href = '#fivth'
};
const first_p4 = document.getElementById('first_p4');
first_p4.onclick = function () {
    window.location.href = '#sixth'
};
const first_btn1 = document.getElementById('btn1');
first_btn1.onclick = function () {
    window.location.href = '#sixth'
};
const first_btn2 = document.getElementById('btn2');
first_btn2.onclick = function () {
    window.location.href = '#second'
};
const sixth_btn1 = document.getElementById('sixth_btn1');
sixth_btn1.onclick = function () {
    alert('Предзаказ еще не доступен!')
};




const menu = document.getElementById('menu');
const opacityElements = document.getElementsByClassName('menu_show');

menu.onclick = function () {
    for (let el of opacityElements) {
        el.style.opacity = el.style.opacity === '1' ? '0' : '1';
    }
};






if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

const scrollKey = 'scrollPos';
const restoreScrollKey = 'restoreScroll';

function getScrollTop() {
    return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function setScrollTop(scrollTop) {
    window.scrollTo({
        top: scrollTop,
        left: 0,
        behavior: 'instant'
    });

    document.documentElement.scrollTop = scrollTop;
    document.body.scrollTop = scrollTop;
}

function saveScrollTop() {
    sessionStorage.setItem(scrollKey, String(getScrollTop()));
}

window.addEventListener('scroll', saveScrollTop, { passive: true });

// pagehide срабатывает и при обычной перезагрузке, и при перезагрузке через Live Server.
window.addEventListener('pagehide', () => {
    saveScrollTop();
    sessionStorage.setItem(restoreScrollKey, 'true');
});

let isRestoringScroll = false;

function restoreScrollTop() {
    if (isRestoringScroll || sessionStorage.getItem(restoreScrollKey) !== 'true') {
        return;
    }

    const savedScrollTop = Number.parseInt(sessionStorage.getItem(scrollKey), 10);

    if (Number.isNaN(savedScrollTop)) {
        sessionStorage.removeItem(restoreScrollKey);
        return;
    }

    isRestoringScroll = true;
    let attempts = 0;
    const maxAttempts = 20;

    const restore = () => {
        setScrollTop(savedScrollTop);
        attempts += 1;

        if (attempts < maxAttempts) {
            window.setTimeout(restore, 50);
        } else {
            sessionStorage.removeItem(restoreScrollKey);
            isRestoringScroll = false;
        }
    };

    restore();
}

window.addEventListener('DOMContentLoaded', restoreScrollTop);
window.addEventListener('load', restoreScrollTop);
window.addEventListener('pageshow', restoreScrollTop);