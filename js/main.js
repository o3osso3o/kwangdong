document.addEventListener("DOMContentLoaded", () => {
    // 상단 기사 카드 전체 클릭(데모)
    document.querySelectorAll('.article[data-href]').forEach(card => {
        card.setAttribute('tabindex', '0'); // 키보드 포커스 가능
        card.style.cursor = 'pointer';

        const go = () => {
            const url = card.getAttribute('data-href');
            if (url) window.location.href = url;
        };

        card.addEventListener('click', (e) => {
            // 내부 "더 알아보기" 클릭은 그대로 두기
            if (e.target.closest('.more_btn')) return;
            go();
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                go();
            }
        });
    });

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
console.log(getComputedStyle(document.querySelector('.swiper-wrapper')).display);
    const slider = document.querySelector('.product_slider');
  const track = slider?.querySelector('.product_box');
  if (!slider || !track) return;

  const prev = slider.querySelector('.product_nav.prev');
  const next = slider.querySelector('.product_nav.next');

  const originals = [...track.querySelectorAll('.product_card')];
  if (!originals.length) return;

  // clone 1장씩 (무한루프)
  track.prepend(originals.at(-1).cloneNode(true));
  track.append(originals[0].cloneNode(true));

  const cards = () => [...track.querySelectorAll('.product_card')];
  const firstReal = 1, lastReal = originals.length; // clone 포함 인덱스 기준
  let i = firstReal;

  const trans = (on) => track.style.transition = on ? 'transform 450ms cubic-bezier(.22,.8,.2,1)' : 'none';
  const x = () => {
    const t = getComputedStyle(track).transform;
    return (!t || t === 'none') ? 0 : new DOMMatrixReadOnly(t).m41;
  };

  const snap = (idx, anim = true) => {
    i = idx;
    const cs = cards();
    const c = cs[i];
    if (!c) return;

    const target = slider.clientWidth / 2 - (c.offsetLeft + c.offsetWidth / 2);
    trans(anim);
    track.style.transform = `translateX(${target}px)`;

    cs.forEach((el, k) => el.classList.toggle('is-active', k === i));
  };

  // 초기 위치
  requestAnimationFrame(() => snap(i, false));
  addEventListener('resize', () => snap(i, false));

  // 버튼
  prev?.addEventListener('click', () => snap(i - 1, true));
  next?.addEventListener('click', () => snap(i + 1, true));

  // 무한루프 점프
  track.addEventListener('transitionend', () => {
    if (i < firstReal) snap(lastReal, false);
    if (i > lastReal)  snap(firstReal, false);
  });
track.addEventListener('click', (e) => {
  const card = e.target.closest('.product_card');
  if (!card) return;

  const all = [...track.querySelectorAll('.product_card')];
  const clickedIndex = all.indexOf(card);

  if (clickedIndex !== -1) {
    snap(clickedIndex, true);
  }
});


}); //.dom end