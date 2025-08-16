# Development Rules & Process Guidelines

# 이 가이드는 Talk to Figma MCP에서는 사용하지 않습니다.

## 📋 개요

이 문서는 Advice Service 개발 과정에서 사용된 체계적인 3단계 개발 프로세스와 규칙을 정의합니다.

---

## 🎯 Core Directive

**모든 개발 작업은 반드시 아래 3단계 프로세스를 순차적으로 따라야 합니다.**

---

## Phase 1: Codebase Exploration & Analysis

### 목적

기존 코드베이스를 체계적으로 분석하고 이해하여 개발 방향을 설정합니다.

### 필수 작업 항목

#### 1.1 Systematic File Discovery

- [ ] **관련 파일 탐색**: 작업과 관련된 모든 파일, 디렉토리, 모듈 식별
- [ ] **키워드 검색**: 관련 함수, 클래스, 패턴 검색
- [ ] **파일 구조 분석**: 각 파일의 역할과 관계 파악

#### 1.2 Convention & Style Analysis

- [ ] **코딩 컨벤션**: 네이밍, 포맷팅, 아키텍처 패턴 문서화
- [ ] **기존 스타일 가이드**: 코드 스타일 가이드라인 파악
- [ ] **프레임워크/라이브러리**: 사용 패턴과 의존성 분석
- [ ] **에러 처리**: 기존 에러 처리 방식 파악

### 출력 형식

```markdown
### Codebase Analysis Results

**Relevant Files Found:**

- [file_path]: [brief description of relevance]

**Code Conventions Identified:**

- Naming: [convention details]
- Architecture: [pattern details]
- Styling: [format details]

**Key Dependencies & Patterns:**

- [library/framework]: [usage pattern]
```

### 검증 기준

- ✅ 모든 관련 파일이 식별됨
- ✅ 기존 코드 패턴이 명확히 파악됨
- ✅ 의존성과 아키텍처가 이해됨

---

## Phase 2: Implementation Planning

### 목적

Phase 1의 분석 결과를 바탕으로 구체적인 구현 계획을 수립합니다.

### 필수 작업 항목

#### 2.1 Implementation Roadmap Creation

- [ ] **모듈별 작업 분해**: 구현해야 할 기능을 논리적 단위로 분할
- [ ] **우선순위 설정**: 작업 순서와 의존성 관계 정의
- [ ] **리소스 계획**: 필요한 시간과 리소스 추정

#### 2.2 Task Definition

- [ ] **구체적 작업 정의**: 각 모듈별 세부 작업 항목 작성
- [ ] **수용 기준 정의**: 각 작업의 성공 여부를 판단할 수 있는 기준 설정
- [ ] **성능/품질 요구사항**: 성능과 품질에 대한 구체적 기준 정의

### 출력 형식

```markdown
## Implementation Plan

### Module: [Module Name]

**Summary:** [1-2 sentence description of what needs to be implemented]

**Tasks:**

- [ ] [Specific implementation task]
- [ ] [Specific implementation task]

**Acceptance Criteria:**

- [ ] [Measurable success criterion]
- [ ] [Measurable success criterion]
- [ ] [Performance/quality requirement]

### Module: [Next Module Name]

[Repeat structure above]
```

### 검증 기준

- ✅ 모든 구현 작업이 명확히 정의됨
- ✅ 각 작업의 수용 기준이 구체적으로 설정됨
- ✅ 작업 간 의존성과 순서가 명확함

---

## Phase 3: Implementation Execution

### 목적

Phase 2의 계획을 바탕으로 실제 코드를 구현하고 검증합니다.

### 필수 작업 항목

#### 3.1 Code Implementation

- [ ] **계획 실행**: Phase 2에서 정의한 작업을 순차적으로 구현
- [ ] **코드 품질**: 기존 코드베이스의 컨벤션과 스타일 준수
- [ ] **에러 처리**: 적절한 에러 처리 및 예외 상황 대응

#### 3.2 Quality Gates

- [ ] **수용 기준 검증**: 모든 수용 기준이 충족되었는지 확인
- [ ] **컨벤션 준수**: 기존 코드 스타일과 규칙 준수 확인
- [ ] **최소한의 접근**: 불필요한 복잡성 제거 확인
- [ ] **전문가 수준**: 전문적인 소프트웨어 엔지니어링 표준 달성

### 출력 형식

```markdown
## ✅ Success Validation

**구현 완료 항목:**

- ✅ [구현된 기능/모듈]
- ✅ [구현된 기능/모듈]

**주요 특징:**

- 🎯 [주요 특징 1]
- 🎯 [주요 특징 2]

**생성된 파일:**

- 📁 [파일명]: [설명]
```

### 검증 기준

- ✅ 모든 수용 기준이 검증됨
- ✅ 기존 컨벤션이 준수됨
- ✅ 최소한의 접근이 유지됨
- ✅ 전문가 수준의 구현 품질 달성

---

## 🚀 실제 적용 예시

### 예시 1: CORS 설정 수정

#### Phase 1: Codebase Exploration & Analysis

```markdown
### Codebase Analysis Results

**Relevant Files Found:**

- backend/src/main.ts: CORS 설정이 모든 도메인(\*)을 허용하고 있음
- ~/.cloudflared/config.yml: 클라우드플레어 터널에서 CORS 헤더가 \*로 설정되어 있음

**Code Conventions Identified:**

- Naming: 환경변수 기반 설정 패턴 사용
- Architecture: NestJS 프레임워크 사용
- Styling: TypeScript 표준 코딩 스타일

**Key Dependencies & Patterns:**

- NestJS: CORS 설정을 위한 enableCors 사용
- Cloudflare: 터널 설정에서 헤더 전달 패턴
```

#### Phase 2: Implementation Planning

```markdown
## Implementation Plan

### Module: Development CORS Configuration

**Summary:** 개발환경에서만 CORS를 허용하도록 서버와 클라우드플레어 설정을 수정합니다.

**Tasks:**

- [ ] 환경변수 기반 CORS 설정으로 변경
- [ ] 개발환경 origin만 허용하도록 수정
- [ ] 클라우드플레어 터널 설정도 개발환경 전용으로 변경

**Acceptance Criteria:**

- [ ] NODE_ENV=development일 때만 개발용 CORS 허용
- [ ] 프로덕션에서는 특정 도메인만 허용
- [ ] 안드로이드 앱 개발은 계속 지원
```

#### Phase 3: Implementation Execution

```markdown
## ✅ Success Validation

**구현 완료 항목:**

- ✅ 서버 CORS 설정 수정
- ✅ 클라우드플레어 터널 설정 수정
- ✅ 클라우드플레어 터널 재시작

**주요 특징:**

- 🎯 환경별 CORS 설정 분리
- 🎯 개발환경에서만 모든 도메인 허용
- 🎯 프로덕션에서는 보안 강화

**생성된 파일:**

- 📁 backend/src/main.ts: 환경별 CORS 설정 추가
- 📁 ~/.cloudflared/config.yml: 개발환경 전용 CORS 헤더 설정
```

### 예시 2: 개발 환경 설정 가이드 작성

#### Phase 1: Codebase Exploration & Analysis

```markdown
### Codebase Analysis Results

**Relevant Files Found:**

- backend/package.json: NestJS 스크립트 명령어들
- docker-compose.yml: PostgreSQL 데이터베이스 설정
- scripts/db.sh: Podman 기반 DB 관리 스크립트
- ~/.cloudflared/config.yml: 클라우드플레어 터널 설정

**Code Conventions Identified:**

- Naming: 스크립트 파일들이 기능별로 분리됨
- Architecture: NestJS 백엔드 + PostgreSQL + 클라우드플레어 터널
- Styling: bash 스크립트와 마크다운 문서화

**Key Dependencies & Patterns:**

- NestJS: 개발/프로덕션 환경 분리
- Podman: PostgreSQL 컨테이너 관리
- Cloudflare: 터널 설정 및 CORS 관리
```

#### Phase 2: Implementation Planning

```markdown
## Implementation Plan

### Module: Development Environment Setup Documentation

**Summary:** 현재 개발된 시스템의 실행 명령어들을 정리한 마크다운 문서를 작성합니다.

**Tasks:**

- [ ] 데이터베이스 실행 명령어 정리
- [ ] 백엔드 서버 실행 명령어 정리
- [ ] 프론트엔드 실행 명령어 정리
- [ ] 클라우드플레어 터널 실행 명령어 정리
- [ ] 환경별 실행 방법 정리

**Acceptance Criteria:**

- [ ] 모든 실행 명령어가 포함됨
- [ ] 환경별 설정 방법 명시
- [ ] 문제 해결 방법 포함
- [ ] 마크다운 형식으로 작성
```

#### Phase 3: Implementation Execution

```markdown
## ✅ Success Validation

**구현 완료 항목:**

- ✅ 데이터베이스 설정 가이드
- ✅ 백엔드 서버 실행 가이드
- ✅ 프론트엔드 실행 가이드
- ✅ 클라우드플레어 터널 설정 가이드
- ✅ 전체 시스템 실행 가이드
- ✅ 문제 해결 방법

**주요 특징:**

- 🎯 단계별 가이드로 초보자도 쉽게 따라할 수 있음
- 🎯 환경별 분리로 개발/프로덕션 환경 명확히 구분
- 🎯 문제 해결로 일반적인 오류 상황별 해결책 제공
- 🎯 모니터링으로 시스템 상태 확인 명령어 포함

**생성된 파일:**

- 📁 DEVELOPMENT_SETUP.md: 완전한 개발 환경 설정 가이드
```

---

## 📋 체크리스트

### Phase 1 완료 체크

- [ ] 관련 파일 탐색 완료
- [ ] 코드 컨벤션 분석 완료
- [ ] 의존성 및 패턴 파악 완료
- [ ] 분석 결과 문서화 완료

### Phase 2 완료 체크

- [ ] 구현 계획 수립 완료
- [ ] 작업 항목 정의 완료
- [ ] 수용 기준 설정 완료
- [ ] 계획 문서화 완료

### Phase 3 완료 체크

- [ ] 모든 작업 구현 완료
- [ ] 수용 기준 검증 완료
- [ ] 코드 품질 확인 완료
- [ ] 최종 결과 문서화 완료

---

## 🚨 주의사항

### Phase 순서 준수

- **절대 Phase 1을 건너뛰지 마세요**
- **Phase 2 없이 Phase 3로 넘어가지 마세요**
- **각 Phase는 반드시 완료 후 다음 Phase로 진행하세요**

### 품질 기준

- **최소한의 접근**: 불필요한 복잡성 제거
- **전문가 수준**: 모든 출력이 전문적 소프트웨어 엔지니어링 표준 달성
- **구체적 결과**: 각 단계에서 구체적이고 실행 가능한 세부사항 제공

### 문서화

- **모든 Phase의 출력은 반드시 문서화**
- **마크다운 형식 준수**
- **검증 기준 명시**

---

## 📚 참고 자료

- [NestJS 공식 문서](https://docs.nestjs.com/)
- [Cloudflare Tunnel 문서](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)
- [Podman 공식 문서](https://docs.podman.io/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
