let isZoomed = false; // Переменная для отслеживания зума

// Функция для открытия картинки
function openImage(src) {
    const modal = document.getElementById("imageModal");
    const fullImg = document.getElementById("fullImage");
    
    modal.style.display = "flex";
    fullImg.src = src;
    
    // Сбрасываем зум при каждом новом открытии
    isZoomed = false;
    fullImg.classList.remove('double-zoom');
    fullImg.style.cursor = 'zoom-in';
}

// Показываем кнопку "Наверх" при прокрутке
window.onscroll = function() {
    const btn = document.getElementById("toTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Функция возврата наверх
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Функция для закрытия модалки
function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

// Вешаем клик на все картинки в обертке .image-wrapper
document.querySelectorAll('.image-wrapper img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.onclick = function() {
        openImage(this.src);
    }
});

// Логика двойного зума внутри модалки (для ПК и Телефонов)
document.getElementById("fullImage").onclick = function(e) {
    e.stopPropagation(); // Чтобы окно не закрылось при клике на картинку
    const modal = document.getElementById("imageModal");
    
    isZoomed = !isZoomed;
    
    if (isZoomed) {
        this.classList.add('double-zoom');
        modal.style.display = "block"; // Меняем flex на block для скролла
        this.style.cursor = 'zoom-out';
    } else {
        this.classList.remove('double-zoom');
        modal.style.display = "flex";  // Возвращаем центровку
        this.style.cursor = 'zoom-in';
        modal.scrollTo(0, 0);          // Сбрасываем скролл внутри модалки
    }
};
