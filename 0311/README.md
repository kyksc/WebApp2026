# 🚀 Week 2 — React 기초 및 개발 환경

> 웹 프로그래밍 응용 2주차 학습 정리

---

## 📑 목차

1. [웹 개발 기초 및 아키텍처](#1-웹-개발-기초-및-아키텍처)
2. [개발 환경과 Node.js](#2-개발-환경과-nodejs)
3. [패키지 매니저 & 빌드 도구](#3-패키지-매니저--빌드-도구)
4. [React 핵심 및 프로젝트 관리](#4-react-핵심-및-프로젝트-관리)
5. [JSX 문법 핵심](#5-jsx-javascript-xml-문법-핵심)

---

## 1. 웹 개발 기초 및 아키텍처

### 🧩 HTML과 메타데이터

- **HTML**: 웹페이지의 뼈대를 구성하는 마크업 언어
- **메타데이터(Meta Data)**: 웹페이지 자체를 설명하는 숨은 정보

### 🔍 SEO (검색엔진 최적화)

`<head>` 영역에 메타 태그를 적절히 배치하면 검색엔진이나 AI 봇의 노출 빈도를 높일 수 있습니다.

```html
<head>
  <meta name="description" content="페이지 설명" />
  <meta name="keywords" content="키워드1, 키워드2" />
  <title>페이지 제목</title>
</head>
```

### 🌐 웹 표준 기관

| 기관 | 링크 |
|------|------|
| W3C | https://www.w3.org |
| MDN | https://developer.mozilla.org |
| WHATWG | https://whatwg.org |

---

### 📄 MPA vs SPA

| 구분 | MPA (Multi Page Application) | SPA (Single Page Application) |
|------|-------------------------------|-------------------------------|
| 방식 | 클릭 시 완전히 새로운 HTML 페이지 로드 | 단일 HTML 안에서 필요한 부분만 동적으로 교체 |
| 특징 | 전통적인 방식, 전체 화면 갱신 | React가 주로 사용하는 방식 |
| 예시 | 대학 홈페이지 | Gmail, Twitter |

---

## 2. 개발 환경과 Node.js

### ⚙️ Node.js란?

> 자바스크립트는 본래 **브라우저 안에서만** 동작했지만,  
> Node.js를 통해 서버 측이나 로컬 환경에서도 JS를 실행할 수 있는 **런타임(Runtime) 환경**이 마련되었습니다.

### 📚 핵심 용어 정리

| 용어 | 설명 | 예시 |
|------|------|------|
| **Platform** | 소프트웨어가 실행될 수 있는 기반 환경 | 운영체제 (Windows, macOS) |
| **Environment** | 소프트웨어 실행을 위해 구성된 조건 | 개발 환경, 배포 환경 |
| **Framework** | 개발을 위한 뼈대 및 기반 구조 | .NET, Spring |
| **Runtime** | 프로그램이 실행되는 환경 | JVM, Node.js |

### 🖥️ IDE vs 코드 편집기

- **VS Code**는 기본적으로 **코드 편집기**
- 확장 플러그인 설치 시 → 디버깅, 빌드 등을 지원하는 **IDE** 역할 수행 가능

---

## 3. 패키지 매니저 & 빌드 도구

### 📦 npm vs npx

| 구분 | 설명 | 예시 |
|------|------|------|
| **npm** | 프로젝트의 의존성(패키지)을 지속적으로 설치·관리 | `npm install axios` |
| **npx** | 패키지를 설치하지 않고 최신 버전으로 **일회성 실행** | `npx create-react-app my-app` |

### ⚡ Vite vs Webpack

| 구분 | Vite | Webpack |
|------|------|---------|
| 기반 | ES Module | 전체 번들링 |
| 속도 | 매우 빠름 ✅ | 상대적으로 느림 |
| 설정 | 간단 | 복잡 |
| 권장 여부 | **현재 권장** | 레거시 프로젝트 |

---

## 4. React 핵심 및 프로젝트 관리

### ⚡ 가상 DOM (Virtual DOM)의 장점

```
기존 방식:  변경 발생 → 전체 DOM 다시 렌더링 (느림 🐢)
React 방식: 변경 발생 → Virtual DOM에서 diff 계산 → 변경된 부분만 업데이트 (빠름 🚀)
```

### 🛠️ 프로젝트 생성 명령어

```bash
# ✅ Vite 방식 (권장)
npm create vite@latest my-app --template react

# CRA 방식
npx create-react-app my-app
```

### ⚠️ Git 업로드 시 주의사항

`node_modules` 폴더는 용량이 매우 크기 때문에 반드시 `.gitignore`에 추가해야 합니다!

```bash
# .gitignore
node_modules/
dist/
.env
```

---

## 5. JSX (JavaScript XML) 문법 핵심

### 💡 JSX란?

> JavaScript 코드 내부에서 **HTML과 유사한 마크업 문법**을 사용해 직관적으로 UI를 작성할 수 있는 확장 문법

### 🔄 Babel의 역할

브라우저는 JSX를 직접 읽을 수 없기 때문에, **Babel**이 JSX를 일반 JavaScript로 변환합니다.

```jsx
// JSX 코드
const element = <h1 className="title">Hello World</h1>;

// Babel 변환 후
const element = React.createElement("h1", { className: "title" }, "Hello World");
```

### 📋 필수 문법 및 규칙

#### 1️⃣ 단일 부모 요소로 감싸기

```jsx
// ❌ 에러 발생
return (
  <h1>제목</h1>
  <p>내용</p>
);

// ✅ 올바른 방법
return (
  <>
    <h1>제목</h1>
    <p>내용</p>
  </>
);
```

#### 2️⃣ 중괄호로 JS 표현식 사용

```jsx
const name = "React";
return <h1>Hello, {name}!</h1>;
// 결과: Hello, React!
```

#### 3️⃣ camelCase 사용

```jsx
// ❌
<div class="container">

// ✅
<div className="container">
```

#### 4️⃣ 조건부 렌더링

```jsx
// 삼항 연산자
{isLoggedIn ? <Dashboard /> : <Login />}

// 논리 연산자 (&&)
{isAdmin && <AdminPanel />}
```

---

## 📝 핵심 요약

| 키워드 | 한 줄 요약 |
|--------|-----------|
| SPA | 단일 HTML에서 컴포넌트만 교체하는 방식 |
| Node.js | 브라우저 밖에서 JS를 실행하는 런타임 |
| Vite | 빠르고 간단한 현재 권장 빌드 도구 |
| Virtual DOM | 변경된 부분만 업데이트해 렌더링 최적화 |
| JSX | JS 안에서 HTML처럼 UI를 작성하는 문법 |
| Babel | JSX를 일반 JS로 변환해주는 트랜스파일러 |

---

<div align="center">

📚 **웹 프로그래밍 응용** | Week 2

</div>
