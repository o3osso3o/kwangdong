document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
    disable: false, //  AOS 끄지 않기! → 애니메이션 작동하게 두기
    startEvent: "DOMContentLoaded", //  HTML이 다 불러와지면 바로 AOS 시작!
    initClassName: "aos-init", //  AOS가 준비됐다는 표시 클래스 (자동 붙음)
    animatedClassName: "aos-animate", //  애니메이션이 실행될 때 붙는 클래스 이름
    useClassNames: false, //  HTML에 data-aos 값 그대로 클래스 안 붙이기
    disableMutationObserver: false, //  새로 생긴 요소도 자동 감시해서 애니메이션 적용
    debounceDelay: 50, //  창 크기 바꿀 때 0.05초 기다렸다 계산 (너무 자주 안 하게)
    throttleDelay: 99, //  스크롤할 때 0.099초마다 한 번씩 체크 (성능 좋게!)
  });


// hero video
const video = document.querySelector(".hero_video");
if (video) {
    video.playbackRate = 0.7; // 예를 들어 0.8배속으로 약간 느리게 설정
}

// search swiper
    var swiper = new Swiper(".mySearchSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
   observer: true,
  observeParents: true,
  breakpoints: {
    0: { slidesPerView: 1.4, spaceBetween: 16 },
    768: { slidesPerView: 2.5, spaceBetween: 20 },
    1200: { slidesPerView: 4, spaceBetween: 30 },
  },
  scrollbar: { el: ".mySearchSwiper .swiper-scrollbar", draggable: true }
});


// product swiper

  const productSlide = new Swiper(".product .product_swiper", {
  loop: true,
  slidesPerView: "auto", // 아이템 너비만큼 자연 흐름
  spaceBetween: 30,
  speed: 9000, // 전체 트랙이 한번 도는 시간(느리게=크게)
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnmouseEnter: false, // 마우스 올려도 안 멈추게
  },
  loopAdditionalSlides: 5, // 루프 시 빈틈 방지
  on: {
    init: function () {
      this.wrapperEl.style.transitionTimingFunction = "linear";
    },
    slideChangeTransitionStart: function () {
      this.wrapperEl.style.transitionTimingFunction = "linear";
    },
  },
});
}); //.dom end