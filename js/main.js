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
}); //.dom end