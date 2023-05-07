const moon = document.getElementById('moon');
const stars = document.getElementById('stars');
const sky = document.getElementById('sky');
const rocks_back = document.getElementById('rocks_back');
const trees_back = document.getElementById('trees_back');
const rocks_front = document.getElementById('rocks_front');
const trees_front = document.getElementById('trees_front');
const birds_right = document.getElementById('birds-right');
const birds_left = document.getElementById('birds-left');
const birds_middle = document.getElementById('birds-middle');
const smoke = document.getElementById('smoke');
const btn = document.getElementById('btn');
const root = document.querySelector(':root');

window.addEventListener('scroll', function() {
    const value = window.scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 0.6 + 'px';
    moon.style.left = value * 0.6 + 'px';
    sky.style.top = value * 0.5 + 'px';
    rocks_front.style.top = value * 0.3 + 'px';
    trees_back.style.top = value * 0.2 + 'px';
    trees_front.style.left = value * 0.3 + 'px';
    birds_middle.style.top = value * 0.2 + 'px';
    birds_right.style.left = value * 0.2 + 'px';
    birds_left.style.left = '-' + value * 0.2 + 'px';
    smoke.style.top = value  + 'px';
    btn.style.marginTop = value + 'px';
})

const allImg = document.querySelectorAll('img');

btn.onclick = function() {
    allImg.forEach(function(item) {
        item.classList.toggle('light')

        if (item.classList.contains('light')) {
            item.setAttribute('src', item.getAttribute('src').replace(/(\w)(\.)(\w)/, '$1-light$2$3'));
            birds_right.style.display = 'block'
            birds_left.style.display = 'block'
            birds_middle.style.display = 'block'
            root.style.setProperty('--color','#363005')
        } else {
            item.setAttribute('src', item.getAttribute('src').replace('-light', ''));
            birds_right.style.display = 'none'
            birds_left.style.display = 'none'
            birds_middle.style.display = 'none'
            root.style.setProperty('--color','#13001f')
        }
    })
};

