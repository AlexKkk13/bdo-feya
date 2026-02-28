// Функция для открытия картинки
function openImage(src) {
    const modal = document.getElementById("imageModal");
    const fullImg = document.getElementById("fullImage");
    
    modal.style.display = "flex";
    fullImg.src = src;
}
// Показываем кнопку при прокрутке
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
};

// Функция возврата наверх
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
// Функция для закрытия
function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}


    
document.getElementById("fullImage").onclick = function(e) {
    e.stopPropagation();
    const modal = document.getElementById("imageModal");
    
    isZoomed = !isZoomed;
    
    if (isZoomed) {
        this.classList.add('double-zoom');
        // Убираем центровку, чтобы можно было скроллить во все стороны
        modal.style.display = "block"; 
        this.style.cursor = 'zoom-out';
    } else {
        this.classList.remove('double-zoom');
        // Возвращаем центровку
        modal.style.display = "flex"; 
        this.style.cursor = 'zoom-in';
        window.scrollTo(0, 0); // Сбрасываем скролл модалки
    }
});
