# 원티드 프리온보딩 프론트엔드 코스 - 디에이그라운드

✨[결과물 보러가기](http://52.79.127.54:8888/)✨

## 사용 스택

<p>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/react--icons-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/redux-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/react--redux-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/react--router--dom-CA4245?style=for-the-badge&logo=React-Router&logoColor=white" />
  <img src="https://img.shields.io/badge/aws lightsail-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" />
</p>

## 요구 사항

  - [x] [상단 Tab bar]는 Click을 통해 각각의 Tab으로 이동할 수 있도록 구현합니다. Tab 간 이동 시 슬라이딩 애니메이션을 넣어주세요.
  - [x] [공유하기] 기능은 해당 컨텐츠 링크를 새 창으로 띄우는 것으로 대체합니다.
  - [x] [좋아요] 기능은 API가 따로 제공되지 않으므로 local storage 등을 통해 브라우저 refresh 전까지 count가 관리될 수 있도록 구현합니다. (최초 조회 시에는 API 내 like_cnt 만큼 좋아요 숫자가 보여져야 합니다)
  - [x] [새로 올라왔어요] 의 Carousel View 는 5초에 한번씩 바로 다음 컨텐츠로 슬라이딩 애니메이션 처리가 되면서 이동하도록 구현하며, 마지막 컨텐츠일 경우 가장 처음 컨텐츠가 보여지도록 구현합니다.
  - [x] [새로 올라왔어요] 의 컨텐츠는 API 내 like_top = 1 인 컨텐츠만 보여져야 합니다.
  - [x] [더보기] 버튼을 눌렀을 때 모든 컨텐츠가 각 sector에 맞게 조회되어야 합니다.
  - [x] [구독하기] 버튼을 눌렀을 때 [https://sandbank.io](https://sandbank.io) 로 새 창을 띄우는 것으로 대체합니다.
  - [x] 전역 데이터 관리(redux, mobx, anyting else..) 를 도입하여 구현해야 합니다.
  - [x] 버튼 등 컴포넌트에 대한 액션 수행 시 앱에 구현되어있는 reaction을 참고하여 구현해주시기 바랍니다. (Click 시 Animated한 백그라운드 색상 변경 등)
  - [x] 앱을 실제로 받아 분석을 진행해야만 정확한 UI를 구현할 수 있습니다. [둘러보기] 로그인이 가능하니 참고해주세요.
  - [x] 프론트엔드 서버는 `localhost:8888` 으로 설정해주시기 바랍니다.

## 기능구현
  - 1팀 : 탭, Redux Setting

  - 2팀 : 카드 컴포넌트 ([박상우](https://github.com/SangWoo9734), [오카무라 카에](https://github.com/kaehehehe))<br/>
     1. 탭 메뉴에 따라 컨텐츠가 변경<br/> 
        탭 메뉴에 따라 타이틀, 라벨 테그, 컨텐츠가 바뀌도록 구현했습니다.<br/>  
        <img width='350px' src="https://user-images.githubusercontent.com/49917043/155884643-2a2e0684-55d6-4c3c-b39d-43a177785a28.gif" />
        <br/>
     2. 반응형 컴포넌트<br/> 
        웹 화면의 크기에 따라 내부 카드가 정렬되도록 반응형 컴포넌트로 제작하였습니다.<br/>  
        <img width='350px' src="https://user-images.githubusercontent.com/49917043/155851771-cbc1b02a-a142-45b2-962a-2a5aadf3e80c.gif" />
        <br/>
     3. 좋아요 기능 구현<br/>
        좋아요 버튼을 눌렀을 때 좋아요 카운트 수가 1증가하고, 다시 눌렀을 경우 카운트를 1 감소시키도록 구현하였고, 그에 따라 UI적으로 아이콘의 색상을 변경해주었습니다.<br/>  
         <img width='350px' src="https://user-images.githubusercontent.com/49917043/155851954-1e1639b7-1795-4455-9a81-988ad88ed4e2.gif" />
         <br/>
     4. 더보기 / 접기<br/> 
        처음 화면이 랜더링되었을 때에는 상위 3개의 항목만 보여줍니다. '더보기'버튼을 통해 하위 항목에 대해서 모두 노출되도록 하며, '접기' 버튼을 통해 다시 컨텐츠 리스트를 접을 수 있습니다.<br/>   
         <img width='350px' src="https://user-images.githubusercontent.com/49917043/155852137-28ed8c2a-8b8a-4719-9190-40a882381374.gif" />
         <br/>
     5. 이미지 클릭시 상세페이지로 라우팅<br/>컨텐츠의 썸네일을 누를 경우 그 정보를 담고있는 Detail 페이지로 라우팅되도록 구현하였습니다.<br/>    
         <img width='350px' src="https://user-images.githubusercontent.com/49917043/155874634-023b5606-6555-48cc-9c22-cae626fabb0d.gif" />
         <br/>
     6. '공유하기'기능 구현<br/>
        요구사항 명세에 따라 썸네일 하위의 '공유하기'를 누를 경우 외부 컨텐츠를 새창에서 보여줍니다.<br/>    
         <img width='350px' src="https://user-images.githubusercontent.com/49917043/155852179-5cca0a90-a61f-4b23-aa9f-fe0d118b9295.gif" />
         <br/>
   
      
  - 3팀 : 케로셀 슬라이드, 상태페이지 구성 ([허민](https://github.com/hhhminme), [강동진](https://github.com/jinn2u), [신항민](https://github.com/ssinking91))

    케로셀 슬라이드는 [slick](https://kenwheeler.github.io/slick/) 라이브러리를 커스터마이징하여 개발을 하였습니다. 요구명세에 명시되어 있는  5초에 한번씩 다음 애니메이션으로 가도록 구현을 하였고 마지막 컨텐츠일 경우 다시 처음으로 갈 수 있도록 구현을 하였습니다. 페이지간 전환에 페이드 에니메이션을 적용하여 보다 사용자가 자연스럽게 케로셀 슬라이더를 볼 수 있도록 하였습니다.
    
    useAsync 라는 custom hooks를 만들어 비동기적으로 [Axios](https://github.com/axios/axios) 를 활용한 API response data의 상태를 관리하여 사용하여 개발하였고, 이후 [Redux middleware](https://redux.js.org/api/applymiddleware)를 통해서 store에 저장된 response data를 정제해서 props로 해당 컴포넌트에 넘겨주는 방법으로 개발을 완료하였습니다. 
    
    해당 케로셀은 탭의 ActiveId 에 따라 새로 올라온 컨텐츠를 분리해서 보여주도록 구현하였습니다. 예를 들어 알쓸B잡의 ActiveId는 1이므로 sector_id 가 1인것 과 like_top이 1인것을 비교하여 구현을 하였습니다. 각 컨텐츠마다 외부 링크로 연결되어 있는 컨텐츠의 경우(예를 들어 알쓸B잡은 미디움과 연결) 앱에선 웹뷰를 활용하였지만 앱서비스에서는 새로운 창에 띄워질 수 있도록 구현을 하였습니다. 그리고 컨텐츠 칼럼의 경우는 상세페이지로 넘어갈 수 있도록 구현을 하였습니다.
    
    ![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/54930877/155740033-a094066d-9475-459a-997a-f8c9ec01752e.gif)


## 팀원 소개

| 이름         | 깃허브                                           |
| ------------ | --------------------------------------------- |
| 강동진       | [jinn2u](https://github.com/jinn2u)             |
| 박상우       | [SangWoo9734](https://github.com/SangWoo9734)   |
| 신항민       | [ssinking91](https://github.com/ssinking91)     |
| 이장민       | [leo-xee](https://github.com/leo-xee)           |
| 오카무라카에 | [kaehehehe](https://github.com/kaehehehe)         | 
| 허민         | [hhhminme](https://github.com/hhhminme)        |
| 전호용       | [mooroom](https://github.com/mooroom)           |
