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
*/