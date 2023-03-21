# 카카오톡 클론코딩
vanilla js 를 이용해 todolist, quotes, weather, login 을 구현한 간단한 사이트
<br>


<br>

# ⌛ 제작 기간
2022년 3월 20일 ~ 2022년 3월 30일(총 10일)

<br>

# ⚙ 사용 기술 및 라이브러리
- `HTML / CSS`
- `Javascript`


<br>

# 🛠 주요기능
<h3>1. 투두리스트 </h3>

<div align="center">
<img src="readme/todolist.gif" width= "500px"/>
</div>

- localStorage에 todos로 배열을 저장해서 새로고침하거나 다시 페이지에 접속해도 값을 유지할 수 있습니다
- 로컬스토리지에서 가져올때는 JSON.stringify로 json형태로 가져와서 화면에 뿌려줍니다.
- 투두를 삭제할 때 배열의 filter메소드를 통해 todo의 id와 비교해 배열에서 삭제합니다.

<h3>2. 날씨 가져오기 </h3>

- OpenWeatherMap API를 사용해서 날씨를 가져옵니다.
- Geolocation.getCurrentPosition() 메서드를 통해 현재 위치를 가져오고 성공적으로 가져오면 onGeoOK함수를 실행하고 경도위도 값을 이용해 날씨를 조회합니다.
- 얻은 장소와 날씨 정보를 querySelector로 DOM요소를 선택해 보여줍니다.


<h3>3. 시간 보여주기 </h3>

- date객체를 통해 시,분,초를 가져옵니다.
- padStart 메서드를 통해 2자리가 아닐경우 0으로 채워 통일감있는 UI를 구성했습니다.

<h3>4. 유저 정보 저장 </h3>

- localStorage에 username값이 없을경우 이름을 입력하고 있을경우 값을 가져와서 보여줍니다.
- username이 있을 경우 login폼에 hidden클래스를 추가해 보여지지 않게 처리했습니다.

<h3>5. quotes와 배경 랜덤으로 가져오기 </h3>

- Nath.random메서드를 사용해서 quotes배열과 images배열 길이 만큼 랜덤 숫자를 뽑아 보여줍니다.





<br>
<br>

#  🖥 사이트
https://hatbann.github.io/simple_page/
