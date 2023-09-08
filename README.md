## 🌐 배포
https://realtimesearch.netlify.app/
## ⚙ 실행 방법

---

1. 프로젝트 내려받기: `git clone` [https://github.com/Minsoek96/Real-time-search.git ./](https://github.com/Minsoek96/Real-time-search.git) 
2. 패키지 설치: `npm install`
3. 애플리케이션 실행: `npm start` (브라우저가 자동으로 실행되어 홈페이지로 이동)

## 📁 프로젝트 디렉토리 설명

---

- **src/api**: API 요청 관련 관리
- **src/context**: Context 관련 관리
- **src/hooks**: 커스텀 훅 관리
- **src/pages**: 페이지 렌더링 컴포넌트 관리
- **src/reducer**: 상태 변화 관리

## 🔨구현 사항

---

### **캐싱 구현 방법 :**

- 캐싱은 AXIOS 인터셉터를 사용하여 구현 했습니다.
- 요청시 getCache Storage (key ) 반환 값이 있으면 요청중지를 위해 Error에 캐시 데이터를 반환합니다.
- 응답시 응답값 데이터가 존재하면  setCacheStorage (key, data, etime) 에 저장합니다.
- Error를 응답한 경우에 캐쉬데이터가 담겨있는경우 해당 데이터를 응답값으로 반환합니다.

### **API 호출 최적화 전략 :**

- 디바운싱 기법을 사용하여 구현 했습니다.
- **`useDebounce`** 훅을 사용하여 일정 시간 동안 추가 입력이 없을 경우에만 API를 호출하도록 했습니다.
- 사용자가 타이핑하는 동안에는 API 호출이 발생하지 않고, 타이핑이 멈춘 후 일정 시간이 지난 후에 API 호출이 일어나게 됩니다.

### **키보드 네비게이션 기능 구현 :**

- **`useKeyNavigation`**라는 커스텀 훅을 사용하여 "ArrowUp"과 "ArrowDown" 키 입력을 감지하고, 현재 선택된 검색어의 인덱스를 변경하여 키보드로 검색어 목록을 탐색할 수 있도록 했습니다.
- 아이템 바닥이 아니라면 “ArrowDown”  인데스 - 1
- 아이템이 -1 보다 크면 “ArrowUp”  인덱스 + 1
- Enter callback
