import Link from 'next/link';
import { useContext, useEffect } from 'react';
import Context from '../../modules/Context';
import Enum from '../../modules/Enum';
import { useRouter } from 'next/router';

const examp_user = {nickname: "존잘훈남노상운"}

export default () => {
  
  const { member } = useContext(Context)
  
  const router = useRouter()
  const clicked = (href) => router.asPath.startsWith(href) ? 'active' : ''
  

  
  return (
    <>
      <div className='wrapFooter'>
        <footer>
          <nav className='noticeBoard'>
            <Link href='#'><a className={clicked('/noti/')}>공지사항</a></Link>
          </nav>
          <nav>
            <Link href='#'><a className={clicked('/menu2/')}>문의사항</a></Link>
          </nav>
          <nav>
            <Link href='#'><a className={clicked('/menu2/')}>게시글 신고</a></Link>
          </nav>
          <nav>
            <Link href='#'><a className={clicked('/menu2/')}>이용약관</a></Link>
          </nav>
          <nav>
            <Link href='#'><a className={clicked('/menu2/')}>개인정보처리방침</a></Link>
          </nav>
          <nav>
            <Link href='#'><a className={clicked('/menu2/')}>이메일주소 무단 수집 거부</a></Link>
          </nav>
        </footer>
      </div>
      <style jsx>{`
        .wrapFooter{
          width: 1200px;
          margin: 0 auto; padding: 28px 0;
          background-color: rgb(240, 240, 240);
        }
        footer{
          display: flex; justify-content: center; gap: 8px;
        }
        footer > nav:last-child > a {
          border: none;
        }
        a{
          padding-right: 8px;
          border-right: 1px solid grey;
          color: #575050; font-size: 18px; font-weight: 700; line-height: 45px;
        }
        .noticeBoard{
          font-size: 19px; font-weight: 800; line-height: 45px;
        }
        a:hover{
          color: #5750508c;
        }
        a:active{
          color: #3e3939;
        }
      `}</style>
    </>

  )
}