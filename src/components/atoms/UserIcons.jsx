
function UserIcon({ icon: Icon, onClick }) {
  return (
    <button 
        onClick={ onClick } 
        className="user-icon-btn">
            {Icon && <Icon className="icon"/>}
    </button>
  )
}

export default UserIcon