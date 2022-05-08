
// Function to define the element
const loadSidebar = () => {

    const template = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../styles/sidebar.css" type="text/css">
    <div class="grid-aside__logodiv">
        <i class="fa-solid fa-box-archive fa-2xl"></i>
        <div class="grid-aside__descriptor">
            <div class="grid-aside__descriptor--text1">SISCADEM</div>
            <div class="grid-aside__descriptor--text2">Cadastro de empresas</div>
        </div>
    </div>
    <div class="grid-aside__sidenav">
        <div class="grid-aside__menu-item">
            <a href="#" class="secondary-text-color">
                <div class="grid-aside__menu-link">
                    <i class="fa-regular fa-file-lines"></i> <span>Empresas</span>
                </div>
            </a>
        </div>
        <div class="grid-aside__menu-item">
            <a href="#" class="secondary-text-color">
                <div class="grid-aside__menu-link">
                    <i class="fa-solid fa-users-gear"></i> <span>Usuários</span>
                </div>
            </a>
        </div>
    </div>
    `;

    class Sidebar extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = template;
        }
    }
    window.customElements.define(
        'sidebar-element', Sidebar);
}
export { loadSidebar };