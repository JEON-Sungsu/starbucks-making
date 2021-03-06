const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
/* window.addEventListener('scroll', function(){
  console.log('scroll!!');
}) */
/* window 객체는 하나의 브라우저 창을 의미한다. 브라우저가 가지고있는 명령들을 가지고 있다.
 화면 자체에, 스크롤 이벤트가 발생하면 익명의 함수를 실행하겠다. 그런데 스크롤 할때마다
한번에 너무 많은 횟수를 실행한다. */

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    //scrollY 를 통해서 콘솔로 스크롤할때마다의 좌표값을 알 수 있다.
    if (window.scrollY > 500) {
      //배지 숨기기
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //버튼보이기
      gsap.to(toTopEl, 0.2, {
        x: 0, //x축으로 원래의 자리로 돌리겠다.
      });
    } else {
      //배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      //버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100, //x축으로 100픽셀 움직이게 만들겠다.
      });
    }
  }, 300)
);

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0, //최상단으로 화면을 옮겨라. 이게 gsap의 플러그인을 사용하는 이유임.
  });
});

/* 300은 0.3초를 의미한다. 로데쉬에서 제공하는 특정한 기능을 통해, 스크롤을 하면 무한대로
실행되는 함수에다가 0.3초마다 쓰로틀링을 주는 기능이다.
_.throttle(함수, 시간) -> 함수가 몇초에 한번씩 실행되는지를 정해준다 */

/*gsap.to 라이브러를 통해서 쉽게 애니메이션 효과를 줄 수 있다.
to(요소, 시간, 옵션) 인데 옵션을 줄 때에는 객체 데이터로 {} 만들어서 옵션을 준다.
문자 옵션은 반드시 따옴표 사용할 것. 
*/

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7
    opacity: 1,
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

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

// new Swiper(선택자,옵션) notice-line 의 swiper-container 를 찾아서 옵션의 내용을 실행시켜라
// swiper 라이브러리를 사용하는 함수임
// autoplay = 자동재생, loop= 반복재생여부

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이의 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000, //0.5초에 한번씩 슬라이드가 넘어감. 기본값은 3초임
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어 버튼
  },
  navigation: {
    prevEl: ".promotion .swiper-prev", // 이전 요소를 볼 수 있는 버튼링크
    nextEl: ".promotion .swiper-next", // 다음 요소를 볼 수 있는 버튼링크.
  },
});

// direction: horizontal 은 기본옵션임

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, //하나의 화면에 몇개의 슬라이드를 보일거냐
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false; //isHidePromotion 요소가 숨겨져있니? false 아니!

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; //느낌표가 붙어있는 뒤의 값이 반대가 되도록 만들어라
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

/* 프로모션토글버튼이 클릭되면, isHidePromotion이라는 변수에 반대값을 넣어라. 그리고
if (그값이트루면) 다음동작을 실행시키고 else 그값이 펄스면 다음동작을 처리해줘라 */

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size, //Y축으로 얼마나 움직일거냐 floatingObject의 인수를 값으로 받는거임. 아래에 함수호출에 3번째 자리.
    repeat: -1, //무한반복 지삽에서 제공하는 기능임
    yoyo: true, //반복한걸 역으로 재생시켜줌. 원래 반보갛면 1에서 10까지 갔다가 다시 1로돌아오는데 10에서 1로 돌아오는 구간을 만들어주는것임
    duration: 2.5,
    ease: "power1.inOut",
    delay: random(0, delay), //위에 선언된 함수를 값으로 받고, 그 함수의 매개변수의 최소값은 0이고 최대값은 floatingObject의 두번째 인수인 delay로 받음
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, //뷰포트의 어떤 지점에서 감시되었는지를 판단하는지 옵션이다. 뷰포트의 제일 상단이 0이고 제일 하단이 1이다.
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller()); //매소드 체이닝
});
