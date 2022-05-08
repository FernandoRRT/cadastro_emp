import { loadSidebar } from "../components/sidebar.js";
import { loadFooter } from "../components/footer.js";

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', () => {
        loadHTML('footer', 'footer');
        loadFooter();
    });
} else {
    loadSidebar();
    loadFooter();
}

document.getElementsByClassName('grid-header__user-name')[0].innerHTML = localStorage.getItem('name');




/*

Também tinha a possibilidade de fazer load do componente através de fetch. Mas assim ele não permite a execução de scripts js

const loadHTML = async (filename, element) => {
    await fetch(`../HTMLincludes/${filename}.php`)
    .then((r) => { return r.text(); })
    .then((s) => {
        const p = new DOMParser();
        const d = p.parseFromString(s, 'text/html');
        const f = d.body.querySelector('div');
        if (f !== null) {
            document.querySelector(`${element}`).append(f);
        }
    });
};

*/
