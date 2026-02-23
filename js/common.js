document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

let lastScroll = window.scrollY;
const delta = 5;
const TOP = 10;

window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (current <= TOP) {
    header.classList.remove("is-hidden");
    header.classList.remove("is-scrolled");
    lastScroll = current;
    return;
  }

  if (Math.abs(current - lastScroll) < delta) return;

  if (current > lastScroll) {
    header.classList.add("is-hidden");
  } else {
    header.classList.remove("is-hidden");
    header.classList.add("is-scrolled");
  }

  lastScroll = current;
}, { passive: true });

// 메뉴 영역에서 벗어나면 초기화
header.addEventListener("mouseleave", clearActive);

const gnbItems = document.querySelectorAll(".gnb > li");
  const lnbList = document.querySelector(".lnb .list");
  const lnbCols = document.querySelectorAll(".lnb .list > li");

  function clearActive() {
    lnbCols.forEach((li) => li.classList.remove("is-active"));
    lnbList.classList.remove("is-dim");
  }

  function setActive(col) {
    lnbList.classList.add("is-dim");
    lnbCols.forEach((li) => {
      li.classList.toggle("is-active", li.dataset.col === col);
    });
  }

  // GNB hover로 LNB 컬럼 강조
  gnbItems.forEach((li) => {
    li.addEventListener("mouseenter", () => setActive(li.dataset.col));
  });

  // LNB 안에서 직접 컬럼 hover해도 강조 유지
  lnbCols.forEach((li) => {
    li.addEventListener("mouseenter", () => setActive(li.dataset.col));
  });


}); /// dom end (dom은 하나만!)
