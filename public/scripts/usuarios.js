import { listUsers } from "../components/users.js";

window.addEventListener("load", () => {
    listUsers();
    document.getElementById("create-user").addEventListener("click", () => { 
      localStorage.setItem('UserId', 'new');
      window.location.href='/usersform.php';
    });
  });