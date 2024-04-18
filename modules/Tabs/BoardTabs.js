export default ({ submenus, value, onChange }) => {
  const active = (_value) => _value == value ? 'active' : ''
  return <>
    <div className="wrap">
      {submenus.map((submenu, index) => (
        <a className={active(submenu.value)}  onClick={() => {onChange(submenu.value)}}>{submenu.title}</a>
      ))}
    </div>
    <style jsx>{`
      .wrap{
        display: flex; gap: 19px;
      }
      a{
        min-width: 91px; height: 46px;
        padding: 14px 9px 13px 9px;
        display: flex; justify-content: center; align-items: center;
        border-radius: 30px;
        background-color: rgba(115, 115, 115, 0.50);
        cursor: pointer;
      }
      a:hover{
        background-color: rgba(139, 139, 139, 0.5);
      } 
      a:active{
        background-color: rgba(81, 81, 81, 0.5);
      }
      .active, .active:hover, .active:active{
        background-color: rgb(115, 115, 115);
      }
    `}</style>
  </>
}