# 탐나는친구들 리유저블백 랜딩페이지

제주의 따스한 햇살을 담은 상큼한 리유저블백, '탐나는친구들(봉담이 ver)' 신상품 출시 랜딩페이지입니다.

## 프로젝트 소개

이 랜딩페이지는 탐나는친구들 리유저블백의 매력을 최대한 보여주기 위해 제작되었습니다.

### 주요 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 화면 제공
- **부드러운 애니메이션**: 스크롤 기반 애니메이션으로 생동감 있는 사용자 경험
- **제주 감성**: 오렌지 & 화이트 컬러 테마로 제주의 상큼함 표현
- **이미지 최적화**: Lazy Loading으로 빠른 페이지 로딩
- **직관적인 UI**: 섹션별로 제품의 특징을 명확하게 전달

## 프로젝트 구조

```
리유저블백(랜딩페이지)/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 인터랙션
├── README.md           # 프로젝트 설명
└── [이미지 파일들]
    ├── main-1.jpg      # 메인 히어로 이미지
    ├── main-2.png      # 제품 상세 이미지
    ├── design-1.jpg    # 디자인 섹션 이미지
    ├── design-2.jpg
    ├── storage-1~4.jpg # 수납력 섹션 이미지
    ├── durability-1~3.jpg # 내구성 섹션 이미지
    └── jeju-1~6.jpg    # 제주 감성 갤러리 이미지
```

## 페이지 구성

### 1. 인트로 (Hero Section)
- 강렬한 메인 카피와 제품 이미지
- CTA 버튼으로 즉시 구매 유도

### 2. 디자인 & 감성
- 봉담이 캐릭터 소개
- 제주 감성 이미지 갤러리
- 패션 아이템으로서의 활용도 강조

### 3. 수납력 & 실용성
- 여행, 장보기, 육아, 나들이 시나리오별 활용법
- 4개의 카드 형식으로 직관적 정보 전달

### 4. 내구성 & 휴대성
- 튼튼한 소재와 방수 기능
- 간편한 휴대성 강조

### 5. 제품 정보
- 상세 스펙 및 가격 정보
- 구매 버튼

### 6. 아웃트로 & CTA
- 최종 구매 유도 메시지

## 로컬에서 실행하기

1. 프로젝트 폴더를 다운로드합니다.
2. `index.html` 파일을 웹 브라우저로 엽니다.

또는 Live Server를 사용하여 실행:
```bash
# VS Code에서 Live Server 확장 프로그램 설치 후
# index.html 우클릭 > Open with Live Server
```

## GitHub Pages로 배포하기

### 방법 1: GitHub Desktop 사용

1. GitHub Desktop을 엽니다
2. File > Add Local Repository 선택
3. 이 폴더를 선택합니다
4. "Create a repository" 클릭
5. Repository name: `reusable-bag-landing`
6. "Publish repository" 클릭
7. GitHub 웹사이트에서 저장소 > Settings > Pages
8. Source를 "main" 브랜치로 설정
9. Save 클릭
10. 몇 분 후 `https://[username].github.io/reusable-bag-landing/` 에서 확인 가능

### 방법 2: Git 명령어 사용

```bash
# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "탐나는친구들 리유저블백 랜딩페이지 초기 커밋"

# GitHub에 새 저장소 생성 후
git remote add origin https://github.com/[username]/reusable-bag-landing.git

# 푸시
git branch -M main
git push -u origin main
```

그 다음 GitHub 저장소 Settings > Pages에서 배포 설정을 합니다.

## 제품 정보

- **제품명**: 탐나는친구들 (리유저블백)
- **바코드**: 2900404600005
- **판매가**: 5,000원
- **납품가**: 2,750원 (납품률 55%)
- **주문옵션**: 주황(봉담이)

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 반응형 디자인, 애니메이션
- **JavaScript (Vanilla)**: Intersection Observer, Lazy Loading, 스크롤 애니메이션

## 브라우저 호환성

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 성능 최적화

- Lazy Loading으로 이미지 로딩 최적화
- 디바운싱으로 스크롤/리사이즈 이벤트 최적화
- RequestAnimationFrame을 활용한 부드러운 애니메이션
- CSS Transform을 활용한 하드웨어 가속

## 커스터마이징

### 색상 변경
`styles.css` 파일의 `:root` 섹션에서 CSS 변수를 수정하세요:

```css
:root {
    --primary-orange: #FF8C42;  /* 메인 오렌지 색상 */
    --light-orange: #FFB380;    /* 밝은 오렌지 */
    --dark-orange: #E67635;     /* 어두운 오렌지 */
}
```

### 제품 정보 수정
`index.html` 파일의 제품 정보 섹션을 수정하세요.

### 이미지 교체
동일한 파일명으로 이미지를 교체하거나, HTML에서 이미지 경로를 수정하세요.

## 라이선스

이 프로젝트는 탐나는친구들의 제품 랜딩페이지입니다.

## 문의

제품 문의 및 구매 상담은 별도 문의 바랍니다.

---

**제주를 담은 상큼함! 탐나는친구들 리유저블백과 함께 즐거운 나들이를 떠나보세요!**
