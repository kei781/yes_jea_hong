export default ({ notices, subject }) => {
  
  return <>
    <div className="wrap">
      <p className="subject">{subject}</p>
      { notices.map((notice, index) => (
          <a key={`${subject}${notice.title}${index}`} className="line" href={`/board/${notice.index}`}>
            <p className="title">{index}. {notice.title}</p>
          </a>
      ))}
    </div>
    <style jsx>{`
      .wrap{
        width: 448px;
        padding: 18px 0;
        background: #FFF;
        border-radius: 30px; box-shadow: 8px 8px 9px 4px rgba(0, 0, 0, 0.40);
      }
      .subject{
        color: #000; font-size: 23px; font-weight: 800; line-height: 45px; text-align: center;
      }
      .line{
        display: block;
        padding-left: 17px;
        border-bottom: 1px solid #DCDCDC;  
      }
      .line:last-child{
        border-bottom: none
      }
      .title{
        text-align: start;
        color: #000; font-size: 19px; font-weight: 400; line-height: 34px;
      }
    `}</style>
  </>
}