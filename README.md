# Team2-TiramisuCake-FE

**배포 URL**

🔗 service : https://softeer.site/

🔗 admin : https://d3qmq1ffhp5il9.cloudfront.net/

**커밋 컨벤션**
- label : subject
label은 issue label을 참고,
subject은 해당 커밋에 대한 내용을 잘 이해할 수 있게 요약 할 것

**브랜치 전략 - [아래 참고]/issue number**

- feat - 새로운 기능 구현
- fix - 변경사항(변수, css 등)
- refactor - 구조 변경 ex) api 전후 데이터 불러오기 변경?
- Test - 테스트 코드

# 그라운드룰

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

# 커밋 컨벤션

```
// 예시

label: subject

- label은 issue label과 동일
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
- Test - 테스트 코드

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
- test - 테스트 코드
- chore - 환경 설정, 주석 제거, 이미지 파일 추가 등

Process

- 피드백이나 도움이 필요할 때, 그리고 merge 준비가 완료되었을 때는 develop 브랜치로 Pull Request를 생성한다.
- 기능에 대한 리뷰와 논의가 끝나면 develop 브랜치로 merge한다.

# PR 템플릿

```jsx
## 요약

// PR 작업 요약

## 작업 내용

// PR 작업 내용

## 관련 이슈
<!--  관련된 이슈를 적어주세요.  -->

// PR과 관련된 이슈 번호

## 첨부 자료 (선택사항)

// 참고한 자료 링크
```

# Issue 템플릿

- Bug Report

```jsx
## 어떤 버그가 발생했나요? 🧐

// 발생한 버그 설명

## 발생 조건 ⚙️

// Given-When-Then으로 작성해주세요.

## 예측 결과값 🔍

// 정상적으로 동작했을 때, 도출되어야 하는 결과값
```

- Feature Request

```jsx
## What is this issue? 🛠

// 어떤 기능을 개발할건지 작성

## Progress 🏃‍♀️

// 할 일 목록 작성

- [ ]  

## More❓

// 추가 정보

# 회고

https://www.notion.so/bside/3f4a3606067143fbb54bd5e584afe762


