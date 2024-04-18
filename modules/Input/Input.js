export default ({ label, value, onChange }) => {

  return <>
    <div className="wrap">
      <p>{label}</p>
      <input value={value} onChange={e => {onChange(e.target.value)}}/>
    </div>
    <style jsx>{`
      p{
        font-size: 40px; font-weight: Bold;
      }
      input{
        width: 100%; height: 55px;
      }
      .wrap{
        width: 520px;
        display: flex; flex-direction: column; gap: 19px;
      }
    `}</style>
  </>
}