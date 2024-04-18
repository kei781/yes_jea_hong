export default ({text, styled = 0}) => {

  return <>
    <button>
      {text}
    </button>
    <style jsx>{`
      button{
        height: 62px;
        padding: 0 27px;
        display: flex; justify-content: center; align-items: center;
        border-radius: 30px;
        background-color: ${
          styled === 0? '#000' : 
          styled === 1? '#9B9B9B' : ''
        };
        color: #FFF; text-align: center; font-size: 15px; font-weight: 400; line-height: normal;
      }
    `}</style>
  </>
}