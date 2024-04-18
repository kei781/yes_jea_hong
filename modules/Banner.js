export default ({text, img}) => {

  return <>
    <div className="banner">
      <p className="banner_desc">{text}</p>
    </div>
    <style jsx>{`
      .banner{
        width: 100%; height: 167px;
        padding: 38px 191px 39px 220px;
        display: flex; justify-content: center; align-items: center; 
        background-image: url(${img});
      }
      .banner_desc{
        padding: 10px; border-radius: 5px;
        background-color: #5252523b;
        color: #FFF; font-size: 22px; font-weight: 700; line-height: 45px; text-align: center;
      }
    `}</style>
  </>
}