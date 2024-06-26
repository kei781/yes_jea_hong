import { useState } from "react";
import Banner from "../../modules/Banner";
import Distance from "../../modules/Distance";
import SearchInput from "../../modules/Input/SearchInput";
import BoardTabs from "../../modules/Tabs/BoardTabs";
import Button from "../../modules/Button/Button";
import BoardTable from "../../components/BoardTable";
import Pagination from "../../modules/Pagination";

const examp_submenu_tab = [
  { title: "락", value: "1", },
  { title: "메탈", value: "2", },
  { title: "발라드", value: "3", },
  { title: "클래식", value: "4", },
  { title: "팝송", value: "5", },
  { title: "힙합", value: "6", },
  { title: "K-POP(남)", value: "7", },
  { title: "K-POP(여)", value: "8", }
]
const exampDate = [
  { id: 1, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
  { id: 2, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
  { id: 3, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
  { id: 4, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
  { id: 5, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
  { id: 6, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
  { id: 7, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
  { id: 8, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
  { id: 9, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
  { id: 10, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
  { id: 11, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
  { id: 12, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
  { id: 13, title: "멜론에서 이 노래 언제까지 못 들어야 하지...", author: "라즈베리", date: "04-06", view: "100"},
]
const exampCount = 100

export default function genre() {
  const [keyword, setKeyword] = useState('')
  const [selectTab, setSelectTab] = useState('')
  const [pagination, setPagination] = useState(1)
  
  return (<>
    <Banner text={"장르별"} img={"/compornent/_app/background_examp_img.png"}/>
    <Distance height={27} />
    <div className="centerAlign">
      <BoardTabs submenus={examp_submenu_tab} value={selectTab} onChange={setSelectTab}/>
    </div>
    <Distance height={33} />
    <div className="search">
      <SearchInput value={keyword} onChange={setKeyword} width={336} height={62}/>
      <Button text={"등록"}/>
    </div>
    <Distance height={31} />
    <BoardTable rows={exampDate} />
    <Distance height={32} />
    <div className="wrapPaginatin">
      <Pagination value = {pagination} onChange = {setPagination} count = {exampCount}/>
    </div>
    <style jsx>{`
      .centerAlign{
        display: flex; justify-content: center;
      }
      .search{
        padding-right: 31px;
        display: flex; justify-content: right; gap: 12px;
      }
      .wrapPaginatin{
        display: flex; justify-content: center;
      }
    `}</style>
  </>
  )
}
