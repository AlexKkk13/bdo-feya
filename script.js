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

// Автоматически добавляем возможность клика всем картинкам в контенте
document.querySelectorAll('.image-wrapper img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.onclick = function() {
        openImage(this.src);
    }
});
