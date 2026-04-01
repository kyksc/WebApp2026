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



# 🚀 3주차 웹 프로그래밍 응용: 웹 동작 원리 및 React 심화

---

강의 정리본
🎯 주제
React 기반 웹 개발의 기초와 웹 렌더링 프로세스를 중심으로 진행
React의 핵심 개념(Virtual DOM, JSX), 웹 기술 스택(HTML, CSS, JavaScript), 서버-클라이언트 구조, 그리고 프로젝트 배포 과정까지 포괄적으로 다룸
학생들이 React 프로젝트를 생성하고, 개발하며, GitHub를 통해 호스팅할 수 있는 실무 능력 배양을 목표로 함
📝 핵심개념 정리
1. 메타데이터(Metadata)와 SEO
[1-1] 메타데이터의 개념

데이터를 설명하기 위한 데이터 [00:54]
처리해야 할 데이터를 뒷받침하고 설명하는 역할
[1-2] SEO(Search Engine Optimization)

검색엔진 최적화: 검색엔진에 노출이 잘 되도록 하는 기술 [00:54]
메타태그를 활용하여 검색 순위를 높일 수 있음
검색엔진 로봇이 사이트를 수집할 때 메타데이터를 기반으로 가중치를 결정 [04:37]
2. DOM(Document Object Model)
[2-1] DOM의 정의

⭐ Document Object Model: HTML 문서를 객체로 표현한 모델 [44:48]
태그당 하나의 객체(노드/엘리먼트)가 생성됨
HTML 계층 구조가 트리 형태로 표현됨
[2-2] DOM의 역할

HTML의 출력된 모양이나 콘텐츠를 제어하기 위해 사용 [44:48]
JavaScript를 통해 DOM 객체에 접근하여 스타일, 텍스트, 이미지 등을 변경 가능
동적인 웹페이지 구현을 위한 핵심 구조
[2-3] DOM의 구조

각 태그마다 id, className, innerHTML, style, event 등의 속성을 가짐 [47:31]
부모-자식 관계로 계층화되어 있음
3. 웹 렌더링(Rendering) 프로세스
[3-1] 렌더링의 정의

⭐ 웹사이트가 화면에 그려지는 과정 전체를 렌더링이라고 함 [51:19]
글자로 이루어진 HTML 문서가 화면에 시각적으로 표현되는 것
[3-2] 렌더링 과정 (Critical Rendering Path)

HTML 파싱 → DOM 트리 생성 [51:19]
CSS 파싱 → CSSOM(CSS Object Model) 트리 생성
DOM + CSSOM 결합 → 렌더 트리(Render Tree) 생성
레이아웃(Layout): 각 요소의 정확한 위치와 크기 계산 [41:22]
페인트(Paint): 픽셀로 변환하는 마지막 단계 [42:22]
합성(Composite): 최종적으로 화면에 표시
[3-3] 주요 용어

파싱(Parsing): HTML 문서를 읽어서 DOM 트리를 만드는 과정 [113:30]
레이아웃(Layout): 화면 크기에 따라 노드의 위치와 크기를 계산하는 과정 (반응형 웹에서 중요) [110:37]
리플로우(Reflow): DOM 변경 시 레이아웃을 다시 계산하는 과정
리페인트(Repaint): 화면을 다시 그리는 과정
4. Virtual DOM (가상 DOM)
[4-1] Virtual DOM의 개념

⭐ Real DOM과 동일한 구조의 가상 DOM을 메모리에 하나 더 생성하는 방식 [56:11]
React의 핵심 기술 중 하나
[4-2] Virtual DOM의 동작 원리

State 변경 발생 (사용자 이벤트 등) [82:20]
Virtual DOM에서 변경된 부분을 계산
Real DOM과 Virtual DOM을 비교 (Diffing)
⭐ 변경된 부분만 Real DOM에 적용하여 속도 향상 [39:23]
전체 DOM을 다시 계산하는 것보다 훨씬 빠름
[4-3] Virtual DOM의 장점

빠른 업데이트와 렌더링 속도 [35:23]
전체 DOM을 재계산하지 않고 변경된 부분만 처리하여 효율성 증대
사용자 경험 향상 (깜빡임 현상 없음)
5. React의 핵심 개념
[5-1] React의 정의

⭐ 사용자 인터페이스(UI)를 만들기 위한 JavaScript 라이브러리 [28:11]
Facebook(현 Meta)에서 개발한 오픈소스 프레임워크 [18:42]
SPA(Single Page Application) 개발을 위한 프레임워크
[5-2] React의 특징

Virtual DOM과 JSX 사용 [56:11]
컴포넌트 기반 구조: 재사용성이 높고 유지보수가 쉬움 [34:29]
빠른 업데이트와 렌더링
React Native를 통해 모바일 앱 개발 가능 [35:26]
[5-3] React의 장점

컴포넌트 재사용성이 높아 개발 효율성 증가
Meta라는 든든한 지원군과 활발한 커뮤니티 [36:26]
웹과 앱 개발을 동시에 지원
[5-4] React의 단점

학습량이 방대함 (하지만 AI 도구를 활용하면 극복 가능) [37:26]
State 관리가 복잡할 수 있음 [36:26]
6. JSX (JavaScript XML)
[6-1] JSX의 정의

⭐ JavaScript와 HTML(XML)을 결합한 문법 [79:52]
JavaScript의 Syntax를 확장한 것 [105:42]
React에서 UI를 표현하기 위해 사용
[6-2] JSX의 동작 원리

JSX 코드는 Babel이라는 컴파일러를 통해 순수 JavaScript로 변환됨 [95:10]
React.createElement() 함수 형태로 변환되어 실행 [106:41]
[6-3] JSX의 장점

코드 가독성 향상 [106:41]
HTML과 유사한 구조로 직관적
Injection Attacking 방어 가능 [108:35]
이벤트 처리와 스타일 적용이 쉬움
[6-4] JSX 기본 규칙

⭐ 무조건 하나의 부모 요소로 감싸야 함 [97:06]
<div> 또는 빈 태그 <> </> 사용 가능
JavaScript 표현식은 중괄호 {} 안에 작성 [108:35]
조건부 렌더링 및 반복문(map) 사용 가능 [97:06]
7. SPA vs MPA
[7-1] SPA (Single Page Application)

⭐ 하나의 페이지로 구성된 애플리케이션 [56:11]
콘텐츠 일부만 변경하여 빠른 사용자 경험 제공
React, Vue, Angular 등으로 개발
[7-2] MPA (Multi Page Application)

여러 개의 페이지로 구성된 애플리케이션 [56:11]
페이지 전체가 새로고침되는 방식
[7-3] 차이점

SPA는 필요한 부분만 업데이트하여 속도가 빠름
MPA는 페이지 전체를 다시 로드해야 함
8. 서버-클라이언트 구조
[8-1] 기본 개념

클라이언트: 서비스를 요청(Request)하는 주체 [58:08]
서버: 요청받은 정보를 응답(Response)하는 주체
Request-Response 구조로 통신
[8-2] 웹 서버 프로그램

컴퓨터를 서버로 만들려면 서버용 프로그램을 설치해야 함 [60:01]
주요 서버 프로그램:
IIS (Windows 기본 내장): ASP 지원 [72:17]
Tomcat: JSP 지원 [75:15]
Apache: PHP 지원 [76:11]
Node.js: JavaScript 기반 서버 [87:42]
[8-3] 포트 번호(Port Number)

하나의 컴퓨터에서 여러 서버를 구분하기 위한 번호 [91:27]
예: localhost:8080, localhost:3000 등
각 서버마다 다른 포트 번호를 할당하여 동시 운영 가능
9. 서버 사이드 스크립트 vs 클라이언트 사이드 스크립트
[9-1] 서버 사이드 스크립트

서버에서 실행되는 언어 [87:42]
ASP, JSP, PHP 등
DB 연동 및 연산을 서버에서 수행 후 HTML로 변환하여 클라이언트에 전송
[9-2] 클라이언트 사이드 스크립트

브라우저에서 실행되는 언어
JavaScript가 대표적
사용자 이벤트 처리 및 동적 화면 구성
10. TypeScript
[10-1] TypeScript의 개념

⭐ JavaScript에 타입(Type) 개념을 추가한 언어 [103:46]
컴파일러 언어처럼 변수 선언 시 데이터 타입을 명시
[10-2] TypeScript의 필요성

JavaScript는 인터프리터 언어로 변수 타입이 자유로움 [102:52]
프로그램이 길어지면 타입 관련 실수가 빈번히 발생
컴파일러 언어에 익숙한 개발자들을 위해 타입 개념 도입
[10-3] 파일 확장자

JavaScript: .js
TypeScript: .ts
TypeScript with JSX: .tsx [99:59]
11. CSS 프레임워크
[11-1] CSS 프레임워크의 종류

Bootstrap [23:33]
Tailwind CSS [22:32]
기타 다양한 프레임워크 존재 (2025년 기준 약 10가지)
[11-2] SASS와 SCSS

⭐ CSS에 프로그래밍 기법(변수, 중첩구조, 믹스인, 연산 등)을 추가한 것 [41:22]
SASS와 SCSS는 문법에 약간의 차이가 있음
CSS를 더 효율적으로 작성 가능
12. 호스팅(Hosting)
[12-1] 호스팅의 개념

⭐ 하드웨어와 서비스를 빌려주고 트래픽에 따라 비용을 받는 서비스 [63:41]
자체 서버 없이도 웹사이트 운영 가능
[12-2] 주요 호스팅 업체

카페24: 쇼핑몰 및 웹호스팅 [61:48]
가비아: 웹호스팅, DB호스팅 등 [64:29]
닷홈: 무료 호스팅 제공 [66:26]
GitHub Pages: 정적 사이트 무료 호스팅 가능
[12-3] 클라우드 서비스

⭐ AWS (Amazon Web Services): 시장 선두주자 [68:24]
GCP (Google Cloud Platform)
Azure (Microsoft)
국내 대기업 및 공공기관에서 클라우드 사용 증가 추세
13. React 프로젝트 구조
[13-1] 프로젝트 생성

npx create-react-app [프로젝트명] 명령어 사용 [25:24]
CRA (Create React App) 약자
[13-2] 주요 파일 구조

node_modules: 외부 패키지 저장 [123:04]
public: 정적 파일 저장
src: 소스 코드 저장 (주요 작업 영역)
.gitignore: Git에 업로드하지 않을 파일 지정 [123:04]
package.json: 프로젝트 설정 및 의존성 관리
[13-3] 핵심 파일 3가지 ⭐

index.html (public 폴더): HTML 템플릿 파일 [127:48]
index.js (src 폴더): 메인 프로그램, 컴포넌트를 렌더링 [128:48]
App.js (src 폴더): 실제 화면에 표시될 컴포넌트 정의 [129:47]
[13-4] 파일 간 관계

App.js가 index.js로 import됨 [129:47]
index.js가 App 컴포넌트를 index.html에 렌더링
개발자는 주로 App.js를 수정하여 화면을 구성
14. NPM 관련 명령어
[14-1] NPM (Node Package Manager)

Node.js 기반 패키지 관리 도구 [19:43]
npm install 또는 npm i로 패키지 설치 가능
[14-2] NPX (Node Package Execute)

패키지를 더 편하게 실행할 수 있도록 도와주는 도구 [121:04]
npx create-react-app처럼 일회성 실행에 유용
[14-3] 주요 명령어

npm start: 개발 서버 실행 (Hot Reload 지원) [27:21]
npm run build: 배포용 빌드 파일 생성 [123:58]
serve build: 빌드 폴더를 로컬 서버로 실행
15. 배포(Deploy) 프로세스
[15-1] 배포 관련 용어

Release: 같은 제품을 새롭게 만드는 것 [127:48]
Deploy: 서비스를 제공하는 것 (배포)
Distribute: 서비스를 제공하는 것 (배포)
Porting: 서버에 파일을 옮기는 것 [124:51]
[15-2] 배포 과정

npm run build 실행하여 build 폴더 생성 [123:58]
package.json에 homepage 추가 필요 [124:11]
build 폴더 내 파일을 GitHub에 푸시
GitHub Pages를 통해 호스팅
[15-3] 주의사항

개발 모드(npm start)와 배포 모드(npm run build)는 다름
배포 시 빌드 폴더만 서버에 업로드하면 됨 [125:51]
16. Babel과 Webpack
[16-1] Babel

⭐ JSX 코드를 순수 JavaScript로 변환하는 컴파일러 [95:10]
JavaScript Compiler라고도 불림 [121:04]
[16-2] Webpack

배포하기 좋은 형태로 파일을 묶어주는 도구 [122:02]
개발 중인 파일들을 최적화하여 빌드 폴더에 생성
17. HTML 구조
[17-1] 기본 구조

<html> → <head> + <body> [37:31]
[17-2] Head 태그 내용

<title>: 페이지 제목
<meta>: 메타데이터
<style>: CSS 스타일 [38:24]
<script>: JavaScript (권장 위치는 body 끝) [39:23]
[17-3] JavaScript 위치

⭐ 과거에는 head에 위치했으나, 현재는 body 끝에 배치하는 것을 권장 [39:23]
이유: DOM이 모두 로드된 후 JavaScript를 실행하기 위함
18. 학습 방법론
[18-1] NotebookLM 활용

AI 도구를 활용한 학습 권장 [06:19]
PDF 자료 업로드 후 질문-답변 형식으로 학습
팟캐스트 형식으로 변환하여 청취 가능 [14:58]
[18-2] 페인만 학습법

⭐ 가상의 청중에게 강의하듯이 설명해보는 학습법 [113:30]
커뮤니케이션 능력 향상
개념을 완전히 이해했는지 확인 가능
[18-3] 용어 암기의 중요성

렌더링, 파싱, 레이아웃 등 핵심 용어를 정확히 설명할 수 있어야 함 [112:31]
면접이나 실무에서 필수적
19. 개발 환경
[19-1] VS Code

React 개발을 위한 권장 IDE [21:36]
Prettier 확장 프로그램으로 코드 정렬 (Shift+Alt+F) [22:32]
[19-2] Chrome 개발자 도구

React Developer Tools 확장 프로그램 설치 권장 [120:11]
[19-3] Git 연동

VS Code와 GitHub 연동하여 사용 [135:51]
소스 관리 및 협업 도구로 활용
20. 렌더링 최적화
[20-1] Reflow와 Repaint

DOM 변경 시 레이아웃을 다시 계산하는 것이 Reflow
화면을 다시 그리는 것이 Repaint
성능을 위해 최소화해야 함
[20-2] Virtual DOM의 역할

전체 DOM을 재계산하지 않고 변경 부분만 처리
Reflow/Repaint 최소화를 통한 성능 향상
