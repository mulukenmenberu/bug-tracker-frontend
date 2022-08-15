import { NavBar } from '../data/NavBar';
import bug from '../images/bug-logo.png'
const LeftPane = ()=>{
    return(
        <div className="left-container">
        <div className='logo'>
          <div className = "logo-text">
            <img src = {bug} alt="Bug Tracker"/>
          
          </div>
          <hr></hr>
        </div>
        <div className='menus'>
       
          {
            NavBar.map((item,index)=>{
              return (
                
                <div className='menu-item' key={index}>
                  <span><item.icon/></span>
                  <span>{item.title}</span>
                  </div>
                   
              )
            })}
        </div>
    </div>
    )
}
export default LeftPane;