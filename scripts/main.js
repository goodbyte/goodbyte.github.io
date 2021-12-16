{
  const birth = new Date(1988, 0, 24);
  const today = Date.now();
  const diff = new Date(today - birth);

  document.getElementById('yearsOld').innerText = diff.getUTCFullYear() - 1970;
}

// {
//     document.querySelector('header').addEventListener('mousemove', parallax);
//     const depth1 = document.querySelector('.parallax.depth1');
//     const depth2 = document.querySelector('.parallax.depth2');

//     function parallax(e) {
//       let _w = window.innerWidth / 2;
//       let _h = window.innerHeight / 2;
//       let _mouseX = e.clientX;
//       let _mouseY = e.clientY; // 570  - (_mouseY - _h) * 0.02
//       let _depth1 = `${50 - (_mouseX - _w) * 0.02}% ${window.innerHeight - 230}px`;//${50 - (_mouseY - _h) * 0.01}%`;
//       let _depth2 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
//       // let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
//       depth1.style.backgroundPosition = _depth1;
//       depth2.style.backgroundPosition = _depth2;
//     }
// }

{
  const circle_text = document.querySelector('.circle-text');

  if (circle_text) {
    const letters = circle_text.innerText.split('');
    const step = 360 / letters.length;
    const html = letters
      .map((letter, index) => `<span class="circle-text-letter" style="transform: rotate(${step * index}deg)">${letter}</span>`)
      .join('');

    circle_text.innerHTML = html;
  }
}

{
  const nav = document.querySelector('header nav');
  const toggler = document.querySelector('#navbarToggler');
 
  if (toggler) {
    toggler.addEventListener('click', function(e) {
      e.stopPropagation();

      if (!nav.classList.contains('active')) {
        const handler = (e) => {
          nav.classList.remove('active');
          document.body.removeEventListener('click', handler);
        };
        
        document.body.addEventListener('click', handler);
      }

      if (nav) nav.classList.toggle('active');
    });
  }
}

{
  const swiper = new Swiper('#mainSwiper', {
    direction: 'vertical',
    mousewheel: true,
    on: {
      activeIndexChange(swiper) {
        document.querySelectorAll('nav ul li')
           .forEach((li) => li.classList.remove('active'));

        const li = document.querySelector(`li[data-swiper-index="${swiper.activeIndex}"]`);
        li.classList.add('active');
      }
    },
  });

  const works = new Swiper('#worksSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 40,
  });

  new Swiper('#worksSwiper .swiper', {
    // autoHeight: true,
    effect: 'cards',
    nested: true,
  });

  document.querySelectorAll('[data-swiper-index]')
    .forEach((li) => {
      const {swiperIndex} = li.dataset;
      li.addEventListener('click', () => {
        document.querySelector('header nav').classList.remove('active');
        swiper.slideTo(swiperIndex);
      });
    });
}