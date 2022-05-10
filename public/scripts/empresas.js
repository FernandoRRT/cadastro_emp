import { listCompanies } from "../components/companies.js";

window.addEventListener("load", () => {
    listCompanies();
    document.getElementById("create-company").addEventListener("click", () => { 
      localStorage.setItem('EmpresaId', 'new');
      window.location.href='/empresasform.php';
    });
  });