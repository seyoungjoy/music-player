## 이슈 정리

### emotion css prop 세팅

- CRA 환경에서 emotion의 css prop을 사용하기 위해서는 몇가지 세팅이 필요한데요.
- 우선 세팅이 필요한 이유는 emotion의 css prop 사용으로 요소에 css property가 들어가게 되면 react의 JSX 함수가 아닌 emotion의 JSX 함수로 JS 변환을 진행해야 합니다.
- 그런데 CRA 바벨 세팅은 사용자가 수정할 수 없기 때문에 이를 해결할 수 있는 방법은 3가지가 있습니다.

  - JSX Pragma : pragma는 전처리 명령으로 주석으로 표시할 수 있습니다. 아래 코드처럼 주석이 컴포넌트에 존재하면 바벨은 해당 패키지에 있는 JSX 함수로 컴파일을 진행하게 됩니다.

  ```jsx
  /** @jsxImportSource @emotion/react */
  ```

  - 바벨 설정 오버라이딩 : craco라는 패키지로 간단하게 오버라이딩이 가능합니다.

    ```
    // 1. craco package 설치
    yarn add @craco/craco

    // 2. package.json script 수정
    "scripts": {
      "start": "craco start",
      "build": "craco build",
      "test": "craco test",
      // ...
    },

    // 3. emotion 관련 패키지 설치
    yarn add @emotion/react @emotion/styled
    yarn add -D @emotion/babel-preset-css-prop

    // 4. craco.config.js 파일 생성
    module.exports = {
      babel: {
        presets: ['@emotion/babel-preset-css-prop'],
      },
    }
    ```

  - CRA eject로 숨겨져있던 설정파일들을 모두 꺼낼 수 있으나 다시 되돌릴 수 없기 때문에 주의해야합니다.

### API 코드를 다룰 때 undefined 타입을 어떻게 처리하면 좋을까?
- 기본값을 설정해주는 방법
- loading과 undefined를 같은 레벨로 만들수는 없을까
- api 데이터의 초기값을 어떻게 설정하면 좋을까?

### 에러바운더리가 모든 에러를 처리해주진 않는다.
- React 생명주기에서 일어나는 에러는 잡지만
- 이벤트 핸들러에 의해 발생한다면 따로 try catch를 통해서 에러 UI를 넣어줘야 한다.