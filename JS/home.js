document.addEventListener("DOMContentLoaded", function() {
    const images = [
        '/Image/HomeImages/banner.jpg',
        '/Image/HomeImages/banner2.jpg'
    ];
    let currentIndex = 0;
    const header = document.querySelector('.header');

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        header.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    setInterval(changeBackground, 3000); // Thay đổi hình ảnh mỗi 3 giây
});
