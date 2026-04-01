# 📅 3월 18일 수업 실습: 리액트 빌드 및 호스팅

## 1. 과제 목표
- 리액트 프로젝트를 생성하고 가상 DOM의 원리를 이해함.
- 프로젝트를 빌드(Build)하고 GitHub Pages를 통해 실제 웹에 배포함.

## 2. 배포 URL
- [https://kyksc.github.io/WebApp2026/](https://kyksc.github.io/WebApp2026/)

## 3. 주요 실습 명령어
- `npm run build`: 프로덕션용 빌드 파일 생성
- `npm run deploy`: GitHub Pages에 정적 파일 호스팅

## 4. 학습 내용
- 브라우저 렌더링 과정(Parsing -> Style -> Layout -> Paint -> Composite) 이해
- Virtual DOM을 이용한 효율적인 UI 업데이트 방식 습득



🚀 3주차 웹 프로그래밍 응용: React 심화 및 웹 동작 원리1. 3주차 주요 키워드 및 환경 설정ECMAScript: JavaScript의 표준 규격 이름으로, 사실상 JavaScript와 동일한 개념입니다.JavaScript 로드 위치: 브라우저 렌더링 성능 최적화를 위해 <script> 태그는 HTML의 <body> 태그 가장 하단에 배치하는 것이 권장됩니다.추가 학습 및 과제: Notebook LM 활용, CSS Framework 학습, Nginx 발표 준비, React 프로젝트 빌드 및 깃허브 호스팅 레포트 과제.💡 배포 관련 핵심 용어Release: 같은 제품을 새롭게 만드는 과정입니다. (예: 새로운 버전을 빌드, 새로운 버전 번호 부여)Deploy: 개발한 프로그램을 서버와 같은 실제 운영 기기에 설치하여 서비스 적용을 준비하는 과정입니다.Distribute: 제품을 최종 사용자들이 실제로 사용할 수 있도록 서비스를 제공하는 과정입니다.2. 웹 애플리케이션 (Web Application) & 서버웹 애플리케이션은 웹 브라우저를 통해 실행되며, UI를 담당하는 **클라이언트(Client)**와 데이터 처리 및 응답을 담당하는 서버(Server) 구조로 동작합니다.🌐 Web Server클라이언트의 HTTP 요청을 받아 정적 파일(HTML, CSS, JS)을 제공하고 응답하는 소프트웨어입니다.IIS: Microsoft에서 제공하는 웹 서버입니다.Tomcat: Java 기반으로 Servlet을 실행할 수 있는 웹 서버입니다.Apache: 전 세계적으로 가장 널리 사용되는 전통적인 웹 서버입니다.최근 동향: Node.js 환경이 발달하면서 JavaScript 하나로 프론트엔드와 백엔드를 모두 아우르는 풀스택(Full-stack) 개발이 활발히 이루어지고 있습니다.3. SPA vs MPA 비교구분SPA (Single Page Application)MPA (Multi Page Application)개념하나의 HTML 파일에서 모든 기능을 처리하는 방식입니다.클릭 시마다 새로운 HTML 페이지를 통째로 요청하는 방식입니다.렌더링페이지 새로고침 없이 JavaScript를 이용해 화면 일부만 동적으로 변경합니다.전통적인 방식으로 전체 화면이 다시 로드됩니다.장점화면 전환이 부드럽고 사용자 경험(UX)이 뛰어납니다.구조가 직관적이고 검색엔진 최적화(SEO)에 매우 유리합니다.단점한 번에 많은 스크립트를 불러와 초기 로딩 속도가 느릴 수 있습니다.화면 이동 시마다 서버 요청이 발생해 속도가 느려질 수 있습니다.4. DOM과 브라우저 렌더링 과정**DOM (Document Object Model)**은 HTML 문서를 트리(Tree) 구조의 객체로 표현한 모델입니다. 화면의 변화는 이 DOM을 조작함으로써 이루어집니다.🖥️ 브라우저의 렌더링 5단계Parsing: HTML을 분석해 DOM Tree를 생성하고, CSS를 분석해 CSSOM Tree를 생성합니다.Style: DOM과 CSSOM을 결합하여 실제 화면에 그려질 Render Tree를 만듭니다.Layout: Render Tree를 바탕으로 각 요소의 정확한 화면 위치와 크기를 계산합니다.Paint: 계산된 레이아웃을 바탕으로 실제 픽셀 단위로 색상을 입혀 그립니다.Compositing: 그려진 여러 레이어를 하나로 합성하여 최종 화면에 출력합니다.주의: 이 과정이 빈번하게 반복되면 막대한 연산이 발생하여 웹 성능 저하의 원인이 됩니다.5. 리액트의 핵심: Virtual DOM리액트(React)가 기존 방식보다 압도적으로 빠른 이유는 바로 가상 돔(Virtual DOM) 덕분입니다.Real DOM: 기존의 실제 브라우저 DOM입니다. 조그만 변화가 생겨도 전체 구조를 렌더링해야 하므로 무겁습니다.Virtual DOM: 메모리상에 존재하는 가벼운 복사본 DOM입니다.작동 원리 (Diffing & Reconciliation): 사용자 이벤트로 변화가 발생하면, 리액트는 우선 새로운 Virtual DOM을 만들고 이전 Virtual DOM과 비교합니다. 상단 노드부터 하단 노드까지 변경된 부분만 정확히 찾아내어 실제 DOM에 한 번에 업데이트하기 때문에 불필요한 렌더링이 줄고 속도가 매우 빠릅니다.6. React 기초와 JSXReact 개요: UI를 독립적인 컴포넌트(Component) 구조로 만들기 위한 JavaScript 라이브러리입니다. SPA 개발에 최적화되어 있습니다.JSX (JavaScript XML): JavaScript 코드 안에서 HTML 마크업 문법을 그대로 사용할 수 있게 해주는 확장 문법입니다.HTML과 JavaScript를 직관적으로 결합해 코드 가독성이 매우 뛰어납니다.중괄호 {}를 사용해 JavaScript 표현식(변수 등)을 쉽게 렌더링할 수 있습니다.내부적으로는 Babel이라는 변환 도구를 통해 일반적인 JavaScript 코드(React.createElement)로 변환되어 브라우저에 전달됩니다.7. React 구조 및 도구 환경📂 애플리케이션 렌더링 흐름index.html: 기본 HTML 뼈대 구조를 담당하며 <div id="root"></div>가 존재합니다.index.js: 리액트 앱의 시작점(Entry Point)으로, 핵심 컴포넌트를 root 요소에 렌더링합니다.App.js: 실제 UI와 로직을 구성하는 메인 최상위 컴포넌트입니다.🛠️ 개발 환경 및 빌드 도구패키지 관리 도구npm: Node.js의 기본 패키지 설치 및 관리 도구입니다.npx: 패키지를 설치하지 않고 일회성으로 즉시 실행하는 도구입니다.yarn: npm을 대체할 수 있는 또 다른 패키지 관리 도구입니다.nvm: Node.js의 버전을 상황에 맞게 변경/관리하는 도구입니다.Babel: 최신 문법의 JavaScript를 구형 브라우저에서도 동작하도록 변환하거나, JSX를 일반 JS로 변환해 줍니다.Webpack: 흩어져 있는 수많은 파일(모듈)들을 효율적으로 병합하여 하나(또는 소수)의 파일로 묶어주는 번들러(Bundler) 도구입니다.
