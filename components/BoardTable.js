export default ({rows}) => {
  
  return <>
    <div className="wrap">
      <div className="th">
        <p className="thItem subject">제목</p>
        <p className="thItem authors">작성자</p>
        <p className="thItem dates">작성일</p>
        <p className="thItem views">조회수</p>
      </div>
      {rows.map(({id, title, author, date, view}, index) => (
        <div className="td">
          <a href={`/${id}`} className="tdItem title">{title}</a>
          <p className="tdItem author">{author}</p>
          <p className="tdItem date">{date}</p>
          <p className="tdItem view">{view}</p>
        </div>
      ))}
    </div>
    <style jsx>{`
      .wrap{
        width: 100%;
      }
      .th{
        display: flex; gap: 10px; justify-content: center;
        border-bottom: 1px solid #DFDFDF;
        color: #000; font-size: 22px; font-weight: 700; letter-spacing: 4.4px;
      }
      .thItem{
        padding: 14px 0;
      }
      .subject{
        width: 398px;
        text-align: left;
      }
      .authors{
        width: 169px;
      }
      .dates{
        width: 129px;
      }
      .views{
        width: 112px;
      }
      .td{
        display: flex; gap: 10px; justify-content: center;
        border-bottom: 1px solid #DFDFDF;
      }
      .tdItem{
        padding: 14px 0;
      }
      .title{
        width: 398px;
        text-align: left;
        cursor: pointer;
      }
      .author{
        width: 169px;
      }
      .date{
        width: 129px;
      }
      .view{
        width: 112px;
      }
    `}</style>
  </>
} 