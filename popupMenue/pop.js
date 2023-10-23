const openMenueBtn = document.getElementById("MenueOpenBtn")
const closeMenueBtn = document.getElementById("MenueCloseBtn")
const overlay = document.getElementById("overlay")

openMenueBtn.addEventListener('click', () => {
    const menue = document.querySelector('div.menue#menue');
    openMenue(menue);
});

function openMenue(menue) {
    menue.classList.add('active');
    overlay.classList.add('active');
}


closeMenueBtn.addEventListener('click', () => {
    const menue = document.querySelector('div.menue#menue');
    closeMenue(menue);
});

function closeMenue(menue) {
    menue.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', ()=>{
    const menue = document.querySelector('div.menue#menue');
    closeMenue(menue)
})