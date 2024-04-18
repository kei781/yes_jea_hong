import { useState } from "react";
import Banner from "../../modules/Banner";
import Distance from "../../modules/Distance";
import SearchInput from "../../modules/Input/SearchInput";
import BoardTabs from "../../modules/Tabs/BoardTabs";
import Button from "../../modules/Button/Button";

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

export default function genre() {
  const [keyword, setKeyword] = useState('')
  const [selectTab, setSelectTab] = useState('')
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
    <style jsx>{`
      .centerAlign{
        display: flex; justify-content: center;
      }
      .search{
        padding-right: 31px;
        display: flex; justify-content: right; gap: 12px;
      }
    `}</style>
  </>
  )
}
