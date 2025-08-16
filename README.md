# 🍎 애플 주식 보고서 웹페이지

애플(AAPL) 주식의 투자 가치를 종합적으로 분석하고 시장 전망을 제시하는 전문적인 웹페이지입니다.

## 📋 프로젝트 개요

이 프로젝트는 애플 주식에 대한 종합적인 투자 분석 보고서를 웹페이지 형태로 제공합니다. 현재 주가, 재무 현황, 시장 분석, 투자 전망 등을 시각적 차트와 함께 체계적으로 정리했습니다.

## ✨ 주요 기능

### 📊 데이터 시각화

- **주가 추이 차트**: 6개월간 주가 변동 추이
- **매출 추이 차트**: 5년간 연간 매출 변화
- **순이익 차트**: 분기별 순이익 비교
- **업종 대비 성과**: 도넛 차트로 상대적 성과 표시

### 📱 반응형 디자인

- 모든 디바이스에서 최적화된 UI/UX
- 모바일, 태블릿, 데스크톱 호환
- 터치 친화적 인터페이스

### 🎯 인터랙티브 요소

- 부드러운 스크롤 네비게이션
- 스크롤 기반 애니메이션
- 실시간 가격 변동 시뮬레이션
- 호버 효과 및 전환 애니메이션

### 📈 투자 분석 정보

- 현재 주가 및 시장 지표
- 52주 최고/최저가
- P/E 비율, 배당수익률
- 재무 성과 분석
- 시장 동향 및 전망

## 🛠️ 기술 스택

### Frontend

- **HTML5**: 시맨틱 마크업
- **CSS3**: 모던 스타일링 및 애니메이션
- **JavaScript ES6+**: 인터랙티브 기능 구현
- **Bootstrap 5**: 반응형 UI 프레임워크

### 차트 및 시각화

- **Chart.js**: 데이터 시각화 라이브러리
- **Font Awesome**: 아이콘 라이브러리

### 성능 및 최적화

- **Intersection Observer API**: 스크롤 애니메이션
- **CSS Grid & Flexbox**: 레이아웃 시스템
- **CSS Variables**: 테마 관리
- **Media Queries**: 반응형 디자인

## 🚀 설치 및 실행

### 1. 프로젝트 클론

```bash
git clone https://github.com/jinyounghwa/stock_test.git
cd stock_test
```

### 2. 웹 서버 실행

로컬에서 실행하려면 간단한 웹 서버가 필요합니다.

#### Python 3 사용 (권장)

```bash
python -m http.server 3000
```

#### Node.js 사용

```bash
npx http-server -p 3000
```

#### VS Code Live Server

1. VS Code에서 `Live Server` 확장 설치
2. `index.html` 파일 우클릭
3. `Open with Live Server` 선택

### 3. 브라우저에서 접속

```
http://localhost:3000
```

## 📁 프로젝트 구조

```
stock_test/
├── index.html          # 메인 HTML 파일
├── styles.css          # 커스텀 CSS 스타일
├── script.js           # JavaScript 기능 및 차트
└── README.md           # 프로젝트 문서
```

## 🎨 디자인 특징

### 색상 팔레트

- **Primary**: #007AFF (애플 블루)
- **Secondary**: #5856D6 (보라색)
- **Success**: #34C759 (초록색)
- **Warning**: #FF9500 (주황색)
- **Danger**: #FF3B30 (빨간색)

### 타이포그래피

- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI'
- **Responsive**: 뷰포트 크기에 따른 동적 폰트 크기 조정

### 레이아웃

- **Grid System**: Bootstrap 5 기반 12컬럼 그리드
- **Spacing**: 일관된 여백과 패딩 시스템
- **Shadows**: 깊이감을 위한 그림자 효과

## 📱 반응형 브레이크포인트

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 992px

## 🔧 커스터마이징

### 차트 데이터 수정

`script.js` 파일의 `initializeCharts()` 함수에서 차트 데이터를 수정할 수 있습니다.

### 색상 테마 변경

`styles.css` 파일의 `:root` 섹션에서 CSS 변수를 수정하여 전체 색상 테마를 변경할 수 있습니다.

### 새로운 섹션 추가

HTML에 새로운 섹션을 추가하고, CSS와 JavaScript에서 해당 요소에 대한 스타일과 기능을 구현할 수 있습니다.

## 📊 데이터 소스

현재 표시되는 데이터는 예시 데이터입니다. 실제 투자 결정을 위해서는 다음의 신뢰할 수 있는 소스를 참조하세요:

- **Yahoo Finance**: 실시간 주가 및 재무 데이터
- **Apple Investor Relations**: 공식 재무 보고서
- **SEC Filings**: 정부 공시 자료
- **Bloomberg/Reuters**: 전문 금융 뉴스

## 🚨 투자 위험 고지

**⚠️ 중요**: 이 웹페이지는 교육 및 정보 제공 목적으로 제작되었습니다.

- 이 보고서는 투자 조언이 아닙니다
- 투자 결정은 개인의 판단과 책임 하에 이루어져야 합니다
- 과거 성과가 미래 수익을 보장하지 않습니다
- 투자 전 전문가와 상담하시기 바랍니다

## 🔮 향후 개발 계획

### Phase 2: 실시간 데이터 연동

- [ ] Yahoo Finance API 연동
- [ ] 실시간 주가 업데이트
- [ ] 실시간 뉴스 피드

### Phase 3: 고급 분석 기능

- [ ] 기술적 분석 지표
- [ ] 포트폴리오 시뮬레이터
- [ ] 리스크 분석 도구

### Phase 4: 사용자 경험 개선

- [ ] 다크 모드 지원
- [ ] 다국어 지원
- [ ] PWA 기능

## 🤝 기여하기

프로젝트 개선을 위한 기여를 환영합니다!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 문의사항이나 제안사항이 있으시면 이슈를 생성해 주세요.

---

**Made with ❤️ for Apple investors**

_Last updated: December 2024_
