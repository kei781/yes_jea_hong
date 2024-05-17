import { useEffect, useState } from "react"

export default ({ value, onChange, count }) => {
  const [nextPage, setNextPage] = useState([])
  const [prevPage, setPrevPage] = useState([])

  useEffect(() => {
    // 과거값
    if(value >= 3){
      const array = []
      for(let i = 2; i >= 1; i--){
        array.push(value - i)
      }
      setPrevPage(array)
    }
    else if(value == 2){
      setPrevPage([value - 1])
    }

    // 미래값
    if((value + 2) <= count){
      const array = []
      for(let i = 1; i <= 2; i++){
        array.push(value + i)
      }
      setNextPage(array)
    }
    else if((value + 1) == count){
      setNextPage([ value + 1 ])
    }
  }, [value])

  return <>
    <div className="pagination">
      <a onClick={() => {onChange(1)}}>{'<'}</a>

      {value > 1 ? prevPage.map((number) => (
        <a onClick={() => {onChange(number)}}>{number}</a>
      )) : ''}

      <a className="currentPage">{value}</a>

      {(value + 1) <= count ? nextPage.map((number) => (
        <a onClick={() => {onChange(number)}}>{number}</a>
      )) : ''}

      <a onClick={() => {onChange(count)}}>{'>'}</a>
    </div>
    <style jsx>{`
      .pagination{
        color: #363636b4; font-size: 25px; font-weight: 400; letter-spacing: 9.5px;
        display: flex; gap: 15px;
        user-select: none;
      }
      .currentPage{
        color: #000000; font-weight: 700;
        cursor: default;
      }
      a{
        cursor: pointer;
      }
    `}</style>
  </>
}