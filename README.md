# 🍰 Team2-TiramisuCake-FE
### 🚙 The new IONIQ 5 이벤트 페이지 🚙
<br />

## 🔗  배포 URL

[![Service](https://img.shields.io/badge/Service-55A7BA.svg?style=for-the-badge)](https://softeer.site/) ```https://softeer.site```
<br/><br/>
[![Admin](https://img.shields.io/badge/Admin-C0C7C9.svg?style=for-the-badge)](https://d3qmq1ffhp5il9.cloudfront.net) ```https://d3qmq1ffhp5il9.cloudfront.net```

<br />

## 🚀 프로젝트 인원 및 기간

- **개발 인원**: FE 2명 & BE 2명
- **프로젝트 기간**: 2024.07.29 ~ 2024.08.26
<br/>

## 👤 팀원
 <table align="center">
    <tr>
        <td align="center"><img alt="avatar" src="https://github.com/moana16.png" width="100"></td>
        <td align="center"><img alt="avatar" src="https://github.com/fairwheel3027148.png" width="100"></td>
        <td align="center"><img alt="avatar" src="https://github.com/hyeokson.png" width="100"></td>
        <td align="center"><img alt="avatar" src="https://github.com/DrRivaski.png" width="100"></td>
    </tr>
    <tr>
        <td align="center"><a href="https://github.com/jseo9732">김지민</a></td>
        <td align="center"><a href="https://github.com/fairwheel3027148">박지현</a></td>
        <td align="center"><a href="https://github.com/hyeokson">손찬혁</a></td>
        <td align="center"><a href="https://github.com/DrRivaski">이석민</a></td>
    </tr>
 </table>

 <br/>

## 💡 기능 소개

### 서비스

### 1. 메인 페이지
```
메인 페이지는 크게 랜딩 섹션, 이벤트 섹션, 그리고 자동차 소개 섹션으로 구성되어 있습니다.
사용자가 부드럽게 섹션 간 이동할 수 있도록 스냅 기능을 적용했으며, 페이지 상단의 헤더를 통해 원하는 섹션으로 바로 이동할 수 있습니다.
랜딩 섹션, 이벤트 소개 섹션, 선착순 이벤트 소개 섹션, 추첨 이벤트 소개 섹션, 마지막으로 차량 상세 정보 섹션이 있습니다.
각 이벤트 섹션에서 이벤트 관련 정보를 확인할 수 있고,
이벤트 참여에 필요한 아이오닉 5의 차량 정보는 동영상과 간단한 소개가 있는 이미지 캐러셀에서 확인할 수 있습니다.
```

### 2. 선착순 이벤트
```
선착순 페이지에서 제시된 문제의 빈칸에 적절한 단어들을 드래그하여 문제를 해결할 수 있습니다.
모든 빈칸을 올바르게 채우면 자동으로 선착순 이벤트에 응모되며,
지정된 선착순 인원 안에 들면 더 뉴 아이오닉 5 24시간 렌트 이용권과 신차 할인 코드를 받을 수 있는 QR 코드를 획득할 수 있습니다.
```
### 3. 추첨 이벤트
```
복권 이벤트에서는 캔버스를 긁어 결과를 확인할 수 있으며, 만약 세 개의 다이아 이미지가 같은 방향으로 나오면 당첨된 것입니다.
페이지 상단에서는 사용자 공유 URL을 통해 초대한 친구 수와 남은 복권 기회를 확인할 수 있으며,
하단에서는 연속 출석 일수를 확인할 수 있습니다. 7일 연속 출석하면 상품을 받을 수 있습니다.
```
### 4. 기대평 페이지
```
5가지 기대평 버튼을 클릭하여 해당하는 기대평을 등록할 수 있습니다.
기대평은 커서 기반 무한 스크롤 방식으로 구현되어, 사용자가 스크롤을 올리면 이전 기대평을 계속해서 확인할 수 있습니다.
```
### 5. 공유 URL
```
공유 url 버튼을 클릭하면 사용자가 공유할 사이트의 url이 클립보드로 복사됩니다.
만약 사용자가 로그인이 되어 있는 상태라면, 본인 고유의 코드가 저장된 url을 받게되고
로그인이 되어 있지 않은 상태라면 단순한 이벤트 페이지 url을 받게 됩니다.
```

<br/>

### 어드민

### 1. 로그인 페이지
```
어드민에 접근 가능한 사용자만 로그인이 가능합니다.
```

### 1. 메인 페이지
```
로그인 후에만 진입할 수 있습니다.
이벤트 관리 섹션과 당첨 관리 섹션으로 나누어져 있고
각 섹션에서 수정 버튼을 누르면 각 섹션의 관리 페이지로 이동할 수 있습니다.
```

### 2. 이벤트 관리 페이지
```
이벤트 관리 페이지에서 수정하기 버튼을 통해 선착순 이벤트와 추첨 이벤트의 날짜 및 시간을 설정할 수 있습니다.
```

### 3. 당첨 관리 페이지
```
이벤트 당첨 관리 페이지에서는 선착순 및 추첨 당첨 인원 수를 수정할 수 있습니다. 또한, 각 이벤트의 당첨자 목록을 확인할 수 있습니다.
```

### 4. 이벤트 지표 페이지
```
이벤트 기간 동안 날짜별 메인 페이지 접속 횟수를 막대그래프로 확인할 수 있으며, 선착순 및 추첨 이벤트의 참여율을 원그래프 형태로 확인할 수 있습니다.
```
<br/>

## ⚒️ 기술 스택

### DEVELOPMENT ENVIRONMENT
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

### SKILL & UI

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=Tailwind%20CSS&logoColor=white">

### HOSTING & CDN

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)


### SERVER & CLIENT STATE MANAGEMENT

<img src="https://img.shields.io/badge/React%20Query-ff4154?style=for-the-badge&logo=React%20Query&logoColor=white"> ![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)

### SCROLL & ANIMATION

<img src="https://img.shields.io/badge/react%20infinite%20scroll%20component-E3FF73?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/framer%20motion-0055FF?style=for-the-badge&logo=framer&logoColor=white">


<br/>

## 🙌 팀 규칙

<details>
    <summary>커밋 & 브랜치</summary>
    
# 커밋 컨벤션

```
// 예시

label: subject
- feat : 기능 구현
- refactor : 구조 개선, 코드 분리 등
- fix : 사용 함수, 변수 변경 
- style - 디자인(css, animation) 변경 
- chore - 환경 설정, 주석 제거, 이미지 파일 추가 등

- subject은 해당 커밋에 대한 내용을 잘 이해할 수 있게 요약 할 것
```

# 브랜치 전략

```jsx
     main
       |
       |
     develop
       |
       |--------------------------|
       |                          |
feat/issue_num          feat/issue_num

- feat - 새로운 기능 구현
- fix - 변경사항(변수, css 등)
- refactor - 구조 변경 ex) api 전후 데이터 불러오기 변경?
- hotfix - 배포 후 버그가 생겼을 경우 급하게 고친 후 배포

```

**master 브랜치**

- 배포 가능한 상태만을 관리하는 브랜치

**develop 브랜치**

- 다음에 배포할 것을 개발하는 브랜치
- 배포 후, 문제가 없으면 master 브랜치로 PR

**feature 브랜치**

- 새로운 기능을 추가할 때 사용하는 브랜치

**브랜치 전략 - [아래 참고]/issue number**

- feat - 새 기능
- fix - 변경사항(변수, css 등)
- refactor - 구조 변경 ex) api 전후 데이터 불러오기 변경?
- chore - 환경 설정, 주석 제거, 이미지 파일 추가 등
    
</details>

<details>
    <summary>그라운드 룰</summary>
    
## 회의

- 매일 아침에 **`30분`** 스크럼
    - 개발 상황, 오류, 오늘 할 일
- 매일 오후 6시에 가능하면 PR 하기
- 회고 작성
    - 매일 오후 **`6시 30분`**
    - 알게된 점, 좋았던 점, 보완할 점

## 커뮤니케이션

- 매일 같이 밥먹기
    - 밥 먹을 때 일 얘기 하지 않기
- 회의 중에 서로 큰소리 내지 않기
- 반박 의견 내기 전에 좋은 의견이라고 먼저 칭찬하기
- 비난하지 말기
- 마음에 안드는게 있어도 좋은 말을 먼저하고 그 다음에 마음에 안드는 것을 말하기
- 리액션 잘해주기
- 반말하기
- 서로 인사 잘 하기
- 동의할 때 “그래”가 아니라 “좋아”라고 말하기
- 주말에 급한 사항이 아니면 Discord로 연락하지 말기(최대한 평일에 ~^^)
- 지각, 조퇴 시 미리 알려주기
</details>

<details>
    <summary>회고</summary>
   
 https://www.notion.so/bside/3f4a3606067143fbb54bd5e584afe762
 
 
</details>

<details>
    <summary>백로그</summary>
 https://www.notion.so/bside/7018067e40a8431eb75f3f9bbc065bc7?pvs=4
  
</details>






