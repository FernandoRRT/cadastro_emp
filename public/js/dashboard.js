document.getElementsByClassName('grid-header__user-name')[0].innerHTML = localStorage.getItem('name');

loadfooter = () => {
    fetch(`../HTMLincludes/footer.php`)
        .then((r) => { return r.text(); })
        .then((s) => {
            p = new DOMParser();
            d = p.parseFromString(s, 'text/html');

            if ((f = d.body.querySelector('div')) !== null) {
                document.querySelector('footer').append(f);
            }
        });
};

loadHTML = async (filename, element) => {
    await fetch(`../HTMLincludes/${filename}.php`)
        .then((r) => { return r.text(); })
        .then((s) => {
            p = new DOMParser();
            d = p.parseFromString(s, 'text/html');

            if ((f = d.body.querySelector('div')) !== null) {
                document.querySelector(`${element}`).append(f);
            }
        });
};

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', () => {
        loadHTML('footer', 'footer');
    });
} else {
    loadHTML('footer', 'footer');
}

