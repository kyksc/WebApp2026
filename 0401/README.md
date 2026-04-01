# 🚀 5주차 웹 프로그래밍 응용: React Component와 Props 심화

이번 강의는 React의 핵심인 **컴포넌트(Component) 기반 구조**를 이해하고, JSX를 활용한 엘리먼트 생성, 컴포넌트 작성 방법, 그리고 Props를 통한 데이터 전달 방식을 학습하는 데 목적이 있습니다.

---

## 1. ⚛️ JSX와 Element (엘리먼트)

### 📌 JSX (JavaScript XML)
JavaScript와 HTML을 함께 사용할 수 있도록 허용하는 React의 확장 문법입니다.
* **Babel 변환:** 개발자가 JSX로 편하게 작성하면, Babel이라는 도구가 순수 JavaScript로 변환해 줍니다.
* **단일 반환 규칙 (중요):** JSX는 **반드시 단 하나의 부모 엘리먼트만 리턴**해야 합니다. 여러 태그를 반환하려면 `<div>`나 빈 태그 `<></>`로 전체를 감싸야 합니다.

### 📌 Element (엘리먼트)
화면을 구성하는 가장 기본적인 단위이자 DOM 트리의 각 노드(Node)입니다.
* 컴포넌트가 실행되어 최종적으로 반환(리턴)하는 결과물이 바로 엘리먼트입니다.

---

## 2. 🧩 Component (컴포넌트)

React 앱의 모든 화면은 컴포넌트로 구성됩니다. 독립적이고 재사용 가능한 UI 조각으로, 마치 레고 블록을 조립하듯 연결하여 새로운 화면을 구축합니다.



* **동작 원리:** 입력(Props)을 받아 출력(Element)을 반환하는 구조입니다.
* **명명 규칙 (Pascal Case):** 컴포넌트 이름은 **반드시 대문자로 시작**해야 합니다. 소문자로 시작하면 React가 일반 HTML 태그로 잘못 인식합니다.

### 🔄 Function Component vs Class Component

| 구분 | Function Component (함수 컴포넌트) | Class Component (클래스 컴포넌트) |
| :--- | :--- | :--- |
| **구조** | `function Welcome(props) { return <div>...</div>; }` | `class Welcome extends React.Component { render() { return <div>...</div>; } }` |
| **특징** | 간결하고 이해하기 쉬움 (순수 함수처럼 동작) | `React.Component`를 상속받아야 하며 `render()` 메서드 필수 |
| **사용 빈도** | **현재 React에서 주로 사용하는 표준 방식** | 초창기 방식이며 현재는 거의 사용하지 않음 (유지보수용 이해) |

---

## 3. 🎁 Props (Properties)

부모 컴포넌트가 자식 컴포넌트에게 전달하는 **입력 데이터(속성)**입니다. 일반 프로그래밍 함수의 파라미터(인자)와 동일한 역할을 합니다.



### 💡 Props의 핵심 특징
* **읽기 전용 (Read-only):** 전달받은 Props는 자식 컴포넌트 내부에서 절대 수정할 수 없습니다.
* **단방향 데이터 흐름:** 데이터는 항상 부모에서 자식 방향(위에서 아래)으로만 전달됩니다.

### 💻 Props 전달 방법 및 예시
* **문자열 전달:** `<MyComponent name="React" />`
* **숫자 전달:** 중괄호 사용 `<MyComponent age={25} />`
* **스타일 객체 전달:** 중괄호 두 번 사용 (외부는 JS, 내부는 객체) `<MyComponent style={{color: 'blue'}} />`
* **Boolean 전달:** 속성 이름만 적으면 `true`, 안 적으면 `false`로 인식합니다.

---

## 4. ⚙️ React 렌더링 과정과 Virtual DOM

React의 압도적인 성능은 가상 돔(Virtual DOM)에서 나옵니다.



1. **작성 및 변환:** JSX 코드 작성 → Babel이 JavaScript로 변환
2. **생성:** JavaScript 함수가 Element 생성 → Virtual DOM 생성
3. **비교 (Diffing):** 새로운 Virtual DOM과 기존 Real DOM을 비교
4. **반영:** **변경된 부분만** 찾아내어 Real DOM에 한 번에 업데이트 (성능 최적화의 핵심)

---

## 5. 📂 컴포넌트 구조 설계

가장 보편적인 React 파일 및 컴포넌트 계층 구조입니다. **전체 페이지 구조는 `App.js`에서 중앙 관리**합니다.

* **파일 구조:** `src/` 폴더 내부에 `index.js`(루트), `App.js`(메인), `components/` 폴더를 분리하여 관리합니다.
* **계층 구조:** `index.html` (실제 화면) ← `index.js` (연결) ← **`App.js` (부모)** ← `Header`, `Main`, `Footer` (자식)

---

## 🎯 실습 과제 및 평가 안내

### 📝 과제 1: 매주 GitHub 정리 및 관리 (필수)
* **내용:** 매주 수업 내용을 폴더별(`Week1`, `Week2`...)로 정리하여 업로드
* **필수 사항:** 각 폴더에 `README.md` 작성 필수
* **평가:** 14주차 프로젝트 발표 시 GitHub 검사 진행 (타임스탬프 히스토리를 통해 작업 시기 엄격 검증, 거짓 제출 무관용)

### 📝 과제 2: 리액트 웹페이지 제작 (포트폴리오 추천)
* **내용:** 5개 이상의 컴포넌트로 구성된 웹페이지 구현
* **필수 조건:** 생성한 컴포넌트 중 **2개 이상은 Props를 전달받아 사용**해야 함
* **기타:** ChatGPT, Claude 등 AI 활용 가능

### 💯 학사 및 평가 기준
* **레포트 배점:** 총 30점 (GitHub 정리 상태 평가 포함)
* **수업:** WebProgramming04 pdf로 수업
