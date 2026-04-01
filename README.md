# WebApp2026
웹프로그래밍응용 과제, 수업내용

1. 변경된 파일 확인 (Check)
어떤 파일이 수정되었는지, 새로 추가된 폴더(Week5 등)는 무엇인지 목록을 확인합니다.

PowerShell
git status
2. 스테이징 및 커밋 (Prepare & Record)
수정된 파일들을 장바구니에 담고(add), 어떤 작업을 했는지 기록(commit)을 남깁니다.

PowerShell
git add .
git commit -m "5주차 컴포넌트 및 Props 실습 완료"
git add .: 현재 폴더에서 변경된 모든 사항을 한꺼번에 선택합니다.

-m "메시지": 깃허브 히스토리에 남을 짧은 메모입니다. 나중에 과제 증빙 시 중요합니다.

3. 푸시 (Upload)
내 컴퓨터의 변경 기록을 온라인 깃허브 저장소로 전송합니다.

PowerShell
git push origin main