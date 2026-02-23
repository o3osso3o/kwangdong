document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  let lastScroll = 0;
  const delta = 5;

  window.addEventListener("scroll", () => {
    const current = window.scrollY;

    // 맨 위에서는 항상 보이게
    if (current <= 0) {
      header.classList.remove("hide");
      return;
    }

    // 작은 움직임은 무시
    if (Math.abs(current - lastScroll) < delta) return;

    if (current > lastScroll) {
      // ↓ 아래로 스크롤
      header.classList.add("hide");
    } else {
      // ↑ 위로 스크롤
      header.classList.remove("hide");
    }

    lastScroll = current;
// 메뉴 영역에서 벗어나면 초기화
    header.addEventListener("mouseleave", clearActive);
  });

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
