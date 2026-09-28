document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#btn-show-form").hidden=false;
    document.querySelector("#section-form").hidden=true;
    document.querySelector("#btn-show-form").addEventListener("click",()=>{
        document.querySelector("#btn-show-form").hidden=true;
        document.querySelector("#section-form").hidden=false;
    })
    document.querySelector("#section-form").addEventListener('submit', (event) => {
        event.preventDefault();
        let nom=document.querySelector("#cat-nom").value
        let couleur=document.querySelector("#cat-couleur").value
        document.querySelector("#table-categories-body").insertAdjacentHTML('beforeend', `<tr><td>${nom}</td><td>${couleur}</td></tr>`);
        document.querySelector("#section-form").reset();
    });
    document.querySelector("#btn-cancel-form").addEventListener("click",()=>{
        document.querySelector("#section-form").reset();
        document.querySelector("#btn-show-form").hidden=false;
        document.querySelector("#section-form").hidden=true;
    })
})