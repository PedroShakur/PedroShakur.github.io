const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        // remove ativo de tudo
        contents.forEach(c => c.classList.remove("active"));
        tabs.forEach(t => t.classList.remove("active"));

        // adiciona ativo no clicado
        contents[index].classList.add("active");
        tab.classList.add("active");
    });
});
function searchSite() {
   console.log("Pesquisando...");
}


