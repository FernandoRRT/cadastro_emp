import { listCompanies } from "../components/companies.js";

const loadHTML = async (filename, element) => {
    await fetch(`../includes/${filename}.php`)
        .then((r) => { return r.text(); })
        .then((s) => {
           let p = new DOMParser();
           let d = p.parseFromString(s, 'text/html');
           let f;
            if ((f = d.body.querySelector('div')) !== null) {
                document.querySelector(`${element}`).append(f);
            }
        });
};


const buildHtml = () => {
    Promise.resolve(loadHTML('header', 'header'))
    .then(() => {
        document.getElementsByClassName('grid-header__user-name')[0].innerHTML = localStorage.getItem('name');
    });
    Promise.resolve(loadHTML('sidebar', 'nav'))
    .then(() => {
        const location = window.location.pathname;
        if (location === "/empresas.php")
        {
            document.getElementById("link-empresas").classList.add("link-active");
        } else {
            document.getElementById("link-usuarios").classList.add("link-active");
        }
    });

        loadHTML('footer', 'footer');
    
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', () => {
        buildHtml();
    });
} else {
    buildHtml();
}

