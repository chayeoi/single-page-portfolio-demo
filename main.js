window.onload = () => {
  const navbar = document.querySelector('#navbar');
  const button = document.querySelector('#floating-button');

  // main 영역과 교차 영영 발생 시 navbar와 floating-button 스타일 변경
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.1) {
        navbar.classList.add('active');
        button.classList.add('active');
      } else {
        navbar.classList.remove('active');
        button.classList.remove('active');
      }
    })
  }, { threshold: 0.1 });

  const main = document.querySelector('#main');

  io.observe(main);

  // 플로팅 액션 버튼 클릭 시 화면 최상단으로 이동
  button.addEventListener('click', () => window.scroll({ top: 0, behavior: 'smooth' }));

  // `a` 요소에 스크롤 애니메이션 적용
  new SmoothScroll('a[href*="#"]');
};
