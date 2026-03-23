#  3주차 과제: 리액트 빌드 및 GitHub Pages 배포

본 프로젝트는 리액트(React)의 핵심 동작 원리인 **가상 DOM(Virtual DOM)**을 이해하고, 실제 프로젝트를 빌드하여 호스팅하는 과정을 실습한 결과물입니다.

##  배포 링크
* **Live Demo:** [https://kyksc.github.io/WebApp2026/](https://kyksc.github.io/WebApp2026/)

##  실습 내용
1. **리액트 프로젝트 최적화**: `package.json`에 `homepage` 설정을 추가하여 배포 시 경로 에러가 발생하지 않도록 조치했습니다.
2. **빌드(Build) 실행**: `npm run build` 명령어를 사용하여 브라우저가 읽을 수 있는 최적화된 정적 파일을 생성했습니다.
3. **GitHub Pages 배포**: `gh-pages` 패키지를 활용하여 생성된 `build` 폴더의 내용을 자동으로 호스팅 서버에 업로드했습니다.

##  학습 포인트
* **가상 DOM (Virtual DOM)**: 실제 DOM을 직접 조작하지 않고, 메모리상의 가상 DOM과 비교하여 변경된 부분만 반영함으로써 렌더링 성능을 높였습니다.
* **배포 워크플로우**: 개발(Development) 모드에서 배포(Production) 모드로 전환하는 빌드 과정을 직접 수행했습니다.
* **환경 설정**: `gh-pages`를 이용한 배포 스크립트(`predeploy`, `deploy`)를 작성하여 배포 자동화를 구현했습니다.

##  실행 화면 및 히스토리
> (여기에 성공적으로 "Published"가 뜬 터미널 화면이나, 빌드된 사이트 캡처본을 추가하면 교수님이 더 좋아하셔!)
