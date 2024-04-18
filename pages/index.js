import { useContext, useEffect, useState } from "react";
import Loading from "../components/_app.js/Loading";
import Context from "../modules/Context";
import Banner from "../modules/Banner";
import SearchInput from "../modules/Input/SearchInput";
import NoticesTable from "../modules/Table/NoticesTable";

const notice = [
  {index: '11', title: '게시글11'},
  {index: '22', title: '게시글22'},
  {index: '33', title: '게시글33'},
  {index: '44', title: '게시글44'},
  {index: '55', title: '게시글55'}
]

export default function Document() {
  const [keyword, setKeyword] = useState('')
  return (<>
    <Banner text={"다양한 장르를 사랑하는 사람들끼리 쉽게 소통할 수 있도록 만든 음악 커뮤니티 사이트입니다."} img={"/compornent/_app/background_examp_img.png"}/>
    <div className="search">
      <SearchInput value={keyword} onChange={setKeyword} />
    </div>
    <div className="miniBoards">
      <NoticesTable subject={"음악뉴스"} notices={notice}/>
      <NoticesTable subject={"히트글"} notices={notice}/>
    </div>
    <div className="miniBoards">
      <NoticesTable subject={"조회 많은 글"} notices={notice}/>
      <NoticesTable subject={"댓글 많은 글"} notices={notice}/>
    </div>
    <style jsx>{`
      .search{
        margin: 20px 0;
        display: flex; justify-content: center;
      }
      .miniBoards{
        display: flex; gap: 29px;
        display: flex; justify-content: center;
        margin-bottom: 79px;
      }
      .miniBoards:last-child{
        display: flex; justify-content: center;
        margin-bottom: none;
      }
    `}</style>
  </>
  )
}
