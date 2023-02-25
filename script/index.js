/**
 * The Javascript also could be splitted in mutil files. That will make the life
 * of everyone easier.
 */
const btnClose = document.querySelector('#side-menu');
const menuBtn = document.querySelector('.menu-btn')
const btnOpen = document.querySelector('#open-slide');
const scrollElement = document.querySelectorAll('.skill-per');
const list = document.querySelectorAll('#side-menu li');
const navBar = document.getElementById('navbar');
const checkList = document.querySelectorAll('.check')
let lastScrollY = window.scrollY

let per;
// navbar list..........................................................
const checkForHightLight = (e) => {
    /**
     * Here you are using a function before of define it. This just works because
     * you are creating this function checkForHightLight but it is calling it,
     * but this is a seroiusly error in javascript. Always call your functions
     * after thye been created.
     */
    removeHighLight()
    e.target.classList.add('current')
}


const removeHighLight = () => {
    checkList.forEach(list => list.classList.remove('current'))
}
/**
 * This like others function could be in other file. A files just for defines
 * addEventListeners. Will be better to read all of them.
 */
checkList.forEach(list => list.addEventListener('click', checkForHightLight))

// Hamburger button......................................................
function toggle() {
    /**
     * Good use of toggle.
     */
    btnClose.classList.toggle('active');
    menuBtn.classList.toggle('open');
    btnOpen.classList.toggle('active')
}
btnOpen.addEventListener('click', toggle, false);

/**
 * This function don't depends of any other function, so it could be in a separated
 * file just for that.
 */
// Remove side nav........................................................
list.forEach(each => {
    each.addEventListener('click', () => {
        btnClose.classList.toggle('active');
        menuBtn.classList.toggle('open');
    })
})

/**
 * Same for the function above.
 */
//Nav Animation...........................................................
const navAnimation = () => {
    if (lastScrollY < window.scrollY) {
        navBar.classList.add('active')
    } else {
        navBar.classList.remove('active')
    }
    // lastScrollY = window.scrollY
}


// Progress Bar Starts.....................................................
scrollElement.forEach((el) => {
    per = el.getAttribute('per');
    el.style.width = per;
})

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
};
const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight ||
            document.documentElement.clientHeight)
    );
};
const displayScrollElement = (element) => {
    element.classList.add("progress");
};
const hideScrollElement = (element) => {
    element.classList.remove("progress");
};
const handleScrollAnimation = () => {
    scrollElement.forEach((el) => {
        if (elementInView(el)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    })
}
window.addEventListener("scroll", () => {
    handleScrollAnimation()
    navAnimation()
});



/**
 * I think this could be done by CSS. I have not sure I think could be.
 */
// carousel .......................................................
const reviews = document.querySelector('.carousel-box');
const review = document.querySelectorAll('.container');
let index = 0;

function run() {
    index++
    if (index > review.length - 1) {
        index = 0;
    }
    reviews.style.transform = `translateX(${-index * 410}px )`;
}

setInterval(() => {
    run();
}, 5000);

//....................................................................




