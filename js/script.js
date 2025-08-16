// 浮動選單_監聽網頁滾動
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    var anchorLinks = document.getElementsByClassName('anchor-link');
    for (var i = 0; i < anchorLinks.length; i++) {
        var targetId = anchorLinks[i].firstChild.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            var targetPosition = targetElement.offsetTop - 100; // 偏移量，根據需要自行調整

            if (scrollPosition >= targetPosition && scrollPosition < targetPosition + targetElement.offsetHeight) {
                // 將之前的活動錨點取消活動狀態
                var activeLinks = document.getElementsByClassName('anchor-link active');
                for (var j = 0; j < activeLinks.length; j++) {
                    activeLinks[j].classList.remove('active');
                }

                // 將目前滾動到的區塊的錨點設置為活動狀態
                anchorLinks[i].classList.add('active');
                anchorLinks[i].firstChild.classList.add('active');
            } else {
                // 若區塊滾動出視窗，則移除活動狀態
                anchorLinks[i].classList.remove('active');
                anchorLinks[i].firstChild.classList.remove('active');
            }
        }
    }
});

// PC導覽列_滑入滑出
$(window).on("scroll", function () {
    $(".menu_pc").toggleClass("show", $(this).scrollTop() > 500); // 捲動超過多少 px 才顯示
});






// 設定要產生多少雨滴
var nbDrop = 18;

// 隨機區間工具
function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 產生雨滴
function createRain() {
    for (let i = 0; i < nbDrop; i++) {
        const dropLeft = randRange(0, window.innerWidth);
        const delay = Math.random() * 1; // 每個雨滴不同動畫延遲

        const $drop = $('<div class="drop"></div>');
        $drop.css({
            left: dropLeft + 'px',
            top: randRange(-200, 0) + 'px',
            animationDelay: delay + 's',
        });

        $('.rain').append($drop);
    }
}

// 開始下雨
createRain();




// 24H瘋搶-輪播
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3.7,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.myprev',
        prevEl: '.mynext',
    },
    // 斷點
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2.3,
            // ↑後半部露出局部
            spaceBetween: 8,
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2.3,
            spaceBetween: 2,
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 3.7, //修正斷點顯示數量
            spaceBetween: 2,
        },
    },
});