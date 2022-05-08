
// Function to define the element
const loadFooter = () => {

    const template = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../styles/footer.css" type="text/css">
    <div class="grid-footer__container">
        Siga-nos nas redes sociais
        <a target="_blank" href="https://www.facebook.com/">
            <div class="grid-footer__container__icon-div icon-div__facebook">
                <i class="fa-brands fa-facebook fa-lg"></i>
            </div>
        </a>
        <a target="_blank" href="https://www.twitter.com/">
            <div class="grid-footer__container__icon-div icon-div__twitter">
                <i class="fa-brands fa-twitter fa-lg"></i>
            </div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/">
            <div class="grid-footer__container__icon-div icon-div__linkedin">
                <i class="fa-brands fa-linkedin fa-lg"></i>
            </div>
        </a>
        <a target="_blank" href="https://wa.me/5551993261772">
            <div class="grid-footer__container__icon-div icon-div__whatsapp">
                <i class="fa-brands fa-whatsapp fa-lg"></i>
            </div>
        </a>
        <a target="_blank" href="mailto:suporteiros@gmail.com">
            <div class="grid-footer__container__icon-div icon-div__envelope">
                <i class="fa-regular fa-envelope fa-lg"></i>
            </div>
        </a>
    
    </div>
    `;

    class Footer extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = template;
        }
    }
    window.customElements.define(
        'footer-element', Footer);
}
export { loadFooter };