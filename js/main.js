const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// search 태그 내에 있는 input을 찾는 효율적인 방법임

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
})
/*검색 이모지를 클릭하면 인풋을 포커스 시켜라 
이걸 굳이 왜 사용하냐고 하냐면, input을 focus 시키려면 input을 아주 정확하게
마우스로 클릭을 해줘야 하는데, input 크기가 작아서 굉장히 불편하다. 해서 input을 전체
감싸고 있는 부묘오소인 div만 클릭을 해도 자동으로 input에 focus를 줄 수 있기 때문에
div 요소에다가 click 이라는 동적 요소를 넣는것이다. */

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
})

/* 인풋에 포커스가 발생하면 검색 이모지에다가 focused라는 클래스를 추가시키고
 인풋에는 setAttribute를 통해서 플레이스홀더,통합검색텍스트를 넣어라 */

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
})

/*포커스가 해제되면 (blur 처리 되면) 이모지 div에 포커스드 클래스 제거하고
인풋에다가는 플레이스홀더를 안보이게 없애버려라 */


const badgeEl = document.querySelector('header .badges');

/* window.addEventListener('scroll', function(){
  console.log('scroll!!');
}) */
/* window 객체는 하나의 브라우저 창을 의미한다. 브라우저가 가지고있는 명령들을 가지고 있다.
 화면 자체에, 스크롤 이벤트가 발생하면 익명의 함수를 실행하겠다. 그런데 스크롤 할때마다
한번에 너무 많은 횟수를 실행한다. */

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
    //scrollY 를 통해서 콘솔로 스크롤할때마다의 좌표값을 알 수 있다.
  if (window.scrollY > 500) {
    //배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    //배지 보이기 
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

/* 300은 0.3초를 의미한다. 로데쉬에서 제공하는 특정한 기능을 통해, 스크롤을 하면 무한대로
실행되는 함수에다가 0.3초마다 쓰로틀링을 주는 기능이다.
_.throttle(함수, 시간) -> 함수가 몇초에 한번씩 실행되는지를 정해준다 */

/*gsap.to 라이브러를 통해서 쉽게 애니메이션 효과를 줄 수 있다.
to(요소, 시간, 옵션) 인데 옵션을 줄 때에는 객체 데이터로 {} 만들어서 옵션을 준다.
문자 옵션은 반드시 따옴표 사용할 것. 
*/


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

/*
1. querySelectorAll을 통해서 fade-in 이라는 클래스를 가진 모든 요소들을 배열형태로
fadeEls 에 반환시켜라.
2. forEach 로 익명의 각각의 배열에 익명의 함수를 집어 실행시켜라. 익명의 함수의 첫번째
매개변수는 fadeEls 의 배열 첫번째 순서부터 이고 두번째 인수는 이 배열의 인덱스 넘버이다.
3. gsap.to 라이브러리 함수를 통해서 효과를 줄건데 to의 첫번째 인자는 스타일을 적용시킬
요소이며, 두번째는 지속시간, 세번째는 옵션인데 이 옵션은 객체형태로 만들것이다.
4. fadeEls 를 모두 한번에 등장시킬게 아니라 순차적으로 적용시켜야 하므로 delay 옵션을 통해서
한번씩 반복할때 마다, 해당 배열(요소)의 인덱스 넘버에 1을 더한 후 0.7초만큼 곱한 delay  를 주어라
그리하면 첫번째 요소의 인덱스는 0 이므로 0.7 두번째는 1+1*0.7 = 1.4초 세번째는 2+1*0.7 = 2.1초
이런식으로 각각의 요소에 적용되는 delay가 달라지므로 순서대로 등장하게 된다. */


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

// new Swiper(선택자,옵션) notice-line 의 swiper-container 를 찾아서 옵션의 내용을 실행시켜라
// swiper 라이브러리를 사용하는 함수임
// autoplay = 자동재생, loop= 반복재생여부

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이의 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  /*autoplay: {
    delay: 5000 //0.5초에 한번씩 슬라이드가 넘어감. 기본값은 3초임 
  }*/
  pagination: { 
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 버튼
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 요소를 볼 수 있는 버튼링크
    nextEl: '.promotion .swiper-next' // 다음 요소를 볼 수 있는 버튼링크. 
  }
});

// direction: horizontal 은 기본옵션임 

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false; //isHidePromotion 요소가 숨겨져있니? false 아니!

promotionToggleBtn.addEventListener('click',function() {
  isHidePromotion = !isHidePromotion //느낌표가 붙어있는 뒤의 값이 반대가 되도록 만들어라
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

/* 프로모션토글버튼이 클릭되면, isHidePromotion이라는 변수에 반대값을 넣어라. 그리고
if (그값이트루면) 다음동작을 실행시키고 else 그값이 펄스면 다음동작을 처리해줘라 */