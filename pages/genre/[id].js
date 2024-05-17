import { useState } from "react";
import Banner from "../../modules/Banner";
import Distance from "../../modules/Distance";
import SearchInput from "../../modules/Input/SearchInput";
import BoardTabs from "../../modules/Tabs/BoardTabs";
import Button from "../../modules/Button/Button";
import BoardTable from "../../components/BoardTable";
import Pagination from "../../modules/Pagination";
import { useRouter } from "next/router";

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

export default function detail(props) {
  const router = useRouter();
  const { id } = router.query;
  
  return (<>
    <div>123123123</div>
    <style jsx>{`
    `}</style>
  </>
  )
}
