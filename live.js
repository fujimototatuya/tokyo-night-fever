document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-overlay');
  const nav = document.querySelector('.nav-overlay');
  const navLinks = document.querySelectorAll('.nav-overlay_link');
  const ticketButtons = document.querySelectorAll('.ticket-btn');

  // メニューを閉じる関数
  const closeMenu = () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // ハンバーガーボタンのクリックイベント
  hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.contains('active');
    if (isActive) {
      closeMenu();
    } else {
      hamburger.classList.add('active');
      nav.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
      nav.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  });

  // チケットボタンのクリックイベント
  ticketButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      alert("現在はポートフォリオ用サンプルのため、実際の購入はできません。");
    });
  });

  // メニュー内のリンクをクリックした時に閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ESCキーでメニューを閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });
});