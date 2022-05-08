const magEl = document.querySelector(".magnifier");

const serachBarEl = document.querySelector(".search-bar-container");

magEl.addEventListener("click", ()=>{
    serachBarEl.classList.toggle("active");
})