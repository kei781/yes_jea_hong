import Link from 'next/link';
import Enum from '../../modules/Enum';
import { useRouter } from 'next/router';

const examp_user = {nickname: "존잘훈남노상운"}

export default () => {
  const router = useRouter()
  const clicked = (href) => router.asPath.startsWith(href) ? 'active' : ''

  console.log(clicked('/menu1/'))

  const examp_member = {
    active: false,
    member_id: "존잘훈남 노상운"
  }
  
  return (
    <>
      <header>
        <div className='container'>
          <nav className='main_menu'>
            <Link href='/genre'><a className={clicked('/genre')}>장르별</a></Link>
          </nav>
          <nav className='main_menu'>
            <Link href='/genre_seek'><a className={clicked('/genre_seek')}>음악찾기</a></Link> 
          </nav>
          <nav className='main_menu'>
            <Link href='/board'><a className={clicked('/board')}>자유·익명게시판</a></Link>
          </nav>
          <nav className='main_menu'>
            <Link href='/news'><a className={clicked('/news')}>음악뉴스</a></Link>
          </nav>
        </div>
        {
          examp_member?.active ? <div className='right'>
            <nav>
              <Link href='/'>
                <a className={clicked('/')}>
                  <i/>
                  {/* <img src='/_app/nav_info.svg'/> */}
                  {examp_user.nickname}<span>&nbsp;님</span>
                </a>
              </Link>
              <button onClick={()=>{
                //TOO
              }}>로그아웃</button>
            </nav>
          </div>
          : <div className='right'>
              <nav>
                <Link href='/'>
                  <a>회원가입</a>
                </Link>
              </nav>
              <nav>
              <Link href='/'>
                <a>로그인</a>
              </Link>
              </nav>
            </div>
        }
      </header>
      <style jsx>{`
        header{
          height: 105px;
          padding: 0 231px;
          display: flex; align-items: center; justify-content: center;
          background: white; position: fixed; top: 0; left: 0; width: 100%;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08); z-index: 9;
        }
        .container{
          margin: 0 auto;
          display: flex; gap: 30px;
        }
        .main_menu > a{
          text-align: center; font-size: 25px; font-weight: 800;
        }
        a{
          color: #343434; text-align: center; font-size: 15px; font-weight: 800;
        }
        a:hover{
          color: #3434347c;
        }
        a:active{
          color: #343434c5;
        }
        .active{
          color: #000000;
        }
        .right{
          display: flex; gap: 12px;
          position: absolute;
          top: 15px; right: 10px;
        }
      `}</style>
    </>

  )
}