이곳에는 components에 생성한 컴포넌트들을 조합하여 하나의 페이지를 만드는 곳이다.


"컴포넌트는 부품이며, 콘테이너는 메인보드이다."

콘테이너는 컴포넌트에게 props만을 전달한다.

1.
  const test = (props)=>(
    "<div>{ props.propsName }</div>"
  )

2.
  const test = ({ propsName })=>(
    "<div>{ propsName }</div>"
  )


Component Life Cycle
  a. 

    constructor( props ){

      super(props);

      this.state = { ... };

      // 생성자가 메소드로서 컴포넌트가 처음 만들어질 때 실행됨.

      // 여기서 기본 state를 정의할 수 있음

    };

  b. 

    componentWillMount( ){

      // 컴포넌트가 DOM 위에 만들어지기 전에 실행됨.

    };

  c. 

    render(){

      // 컴포넌트 렌더링을 담당함.

    };

  d. 

    componentDidMount( ){

      // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행됨.

      // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,

      // SetTimeout, setInterval 및 Ajax 처리 등을 넣음.

    };

  e.

    componentWillReceiveProps( nextProps ){

      // 컴포너트가 prop을 새로 받았을 때 실행도미.

      // props에 따라 state를 업데이트 해야 할 때 사용하면 유용함.

      // @! 이 안에서 this.setState()를 해도 추가적으로 렌더랑하지 않음

    };

  f.

    shouldComponentUpdate( nextProps, nextState ){

      // props 혹은 state가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드.

      // 필요한 비교를 하고 값을 반환하도록 작성.  return boolean;

      // {a:1, b:2, c:3} !== {a:1, b:"변경됨", c:3} 이런거 비교할 때, 

      // JSON.stringify()를 쓰면 여러 field를 편하게 비교할 수 있음.

      return nextProps.id !== this.props.id;

    };

  g.

    componentWillUpdate( nextProps, nextState ){

      // 컴포넌트가 업데이트 되기 전에 실행됨.

      // 이 안에서 this.setState()를 실행하면 무한루프에 빠지므로 주의하라!!!

    };

  h.

    componentDidUpdate( prevProps, prevState ){

      // 컴포넌트가 리렌더링을 맞친 후 실행됨.

    };

  i.

    componentWillUnmount(){

      // 컴포넌트가 DOM에서 사라진 후 실행되는 메소드.

    };
-

Life Cycle Flow

1. 컴포넌트 생성: constructor -> componentWillMount -> render  -> 

   완료: componentDidMount


2. prop 변화: componentWillReceiveProps ->

   업데이트 처리: shouldComponentUpdate -> componentWillUpdate -> render ->

   완료: componentDidUpdate


3. state 변화: 

