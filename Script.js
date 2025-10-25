const btnTop = document.getElementById('btnTop');

 window.onscroll = function () {

 if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { 
btnTop.style.display = "block"; } 
else { btnTop.style.display = "none"; } }; btnTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });