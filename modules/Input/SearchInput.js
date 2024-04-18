import Image from "next/image"

export default ({ value, onChange, width = 669, height= 88 }) => {

  return <>
    <div className="wrap">
      <input value={value} onChange={e => {onChange(e.target.value)}}/>
      <img src="/modules/input/Magnifying.png" alt="Magnifying"/>
    </div>
    <style jsx>{`
      .wrap{
        width: ${width}px;
        display: flex; flex-direction: column; gap: 19px;
        position: relative;
      }
      p{
        font-size: 40px; font-weight: Bold;
      }
      input{
        width: 100%; height: ${height}px;
        padding: 0 30px;
        border-radius: 30px;
      }
      img{
        width: ${parseInt(height/2)}px; height: ${parseInt(height/2)}px;
        position: absolute; top: ${parseInt(height/4)}px; right: 18px;
      }
    `}</style>
  </>
}