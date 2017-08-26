이곳에는 components에 생성한 컴포넌트들을 조합하여 하나의 페이지를 만드는 곳이다.


"컴포넌트는 부품이며, 콘테이너는 메인보드이다."

콘테이너는 컴포넌트에게 props만을 전달한다.
1.
  const test = (props)=>(
    <div>{ props.propsName }</div>
  )
2.
  const test = ({ propsName })=>(
    <div>{ propsName }</div>
  )



