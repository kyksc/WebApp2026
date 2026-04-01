📖 2주차 웹 프로그래밍 응용 및 React 기초
1. 웹 개발 기초 지식
HTML & SEO
HTML (Hyper Text Markup Language): 웹 페이지의 뼈대를 구성합니다
.
메타 데이터(Meta Data): 특정 데이터에 대해 설명하는 데이터입니다
.
SEO (검색엔진 최적화): HTML 내에 메타 태그를 많이 달아둘수록 검색엔진 노출 빈도를 높일 수 있습니다
.
웹 표준 및 관련 문서/기관: W3C (World Wide Web Consortium), MDN Web Docs, WHATWG
.
웹 애플리케이션 아키텍처
MPA (Multiple Page Application): 링크를 클릭하면 각각 만들어져 있는 새로운 페이지로 완전히 넘어가며 전체가 바뀌는 일반적인 웹 사이트 방식입니다.
SPA (Single Page Application): 프로젝트 생성 시 하나의 디렉토리 안에서 모든 것이 처리되는 단일 페이지 애플리케이션 방식입니다.
2. 개발 환경과 Node.js
Node.js: 서버 측에서 자바스크립트를 실행할 수 있게 해주는 **런타임 환경(Runtime)**입니다
.
개발 환경 관련 핵심 용어
Platform: 소프트웨어가 실행될 수 있는 기반 환경
Environment: 특정 소프트웨어가 실행될 수 있도록 구성된 조건
Framework: 소프트웨어 개발을 위한 뼈대 또는 기반 구조
Runtime: 프로그램이 실행되는 동안 필요한 환경 (Node.js에서는 이 4가지의 의미가 조금씩 다르게 사용됩니다.)
IDE (통합 개발 환경): VS Code는 기본적으로 코드 편집기(Editor)이지만, 다양한 확장 프로그램을 설치하여 IDE의 역할을 수행할 수 있습니다
.
3. Node 패키지 매니저: npm vs npx
npm과 npx의 가장 큰 차이는 설치/관리의 목적이냐, 일회성 실행의 목적이냐에 있습니다
.
구분
npm (Node Package Manager)
npx (Node Package Execute)
역할
Node.js 패키지 설치 및 관리
npm 패키지 임시 다운로드 및 실행
설치 여부
로컬 또는 전역에 설치 필요
설치 불필요
사용 목적
지속적으로 사용할 의존성 관리 (package.json 기반)
일회성 작업 및 최신 버전 실행에 적합
사용 예시
npm install axios
npx create-react-app my-app
4. 프론트엔드 빌드 도구: Vite vs Webpack
Vite: React, Vue, Svelte 등을 지원하며 빠른 프론트엔드 개발을 돕는 ES Module 기반 빌드 도구입니다
.
구분
Vite
Webpack
속도
매우 빠름 (개발 서버 구동 속도 우수)
느림
번들링
필요 시에만 수행
전체 번들링 수행
설정
간단함
복잡함
5. React 프로젝트 생성 방법
초기 설정이 복잡한 Webpack, Babel 등을 자동으로 구성해 주어 개발자가 즉각적으로 React 개발에 돌입할 수 있게 해줍니다
.
① Vite 방식 (속도가 빨라 최근 권장됨)
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
② CRA (Create React App) 방식
npx create-react-app my-app --use-npm
cd my-app
npm start
6. JSX (JavaScript XML)
개념: JavaScript 안에서 HTML과 유사한 마크업 문법을 사용할 수 있게 해주는 확장 문법입니다. 브라우저가 이해할 수 있도록 Babel에 의해 순수 JavaScript로 변환됩니다
.
특징 및 장점
HTML과 JavaScript가 결합된 형태로, {} 기호를 사용해 내부에서 JavaScript 표현식을 바로 사용할 수 있습니다.
HTML과 유사하여 가독성이 높고 직관적입니다.
UI 구조를 쉽게 표현할 수 있어 코드가 매우 간결해집니다.
🚨 [중요 규칙] 반드시 하나의 부모 요소로 감싸야 함
 JSX에서 2개 이상의 태그를 반환(return)할 때, 최상단을 감싸는 부모 요소가 없으면 에러가 발생합니다. 마땅한 부모 태그가 없다면 **빈 태그(<> </>)**로라도 반드시 묶어주어야 합니다
.
❌ 잘못된 방식 (에러 발생)
function App() {
  return (
    <h1>Hello, JSX!</h1>
    <p>React에서 JSX를 사용합니다.</p>
    // 태그들이 병렬로 나열되어 있어 에러 발생
  );
}
⭕ 올바른 방식 (빈 태그로 래핑)
function App() {
  return (
    <>
      <h1>Hello, JSX!</h1>
      <p>React에서 JSX를 사용합니다.</p>
    </>
  );
}
