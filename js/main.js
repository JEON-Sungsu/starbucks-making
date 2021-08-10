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