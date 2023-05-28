import moi  from './moi.jpg'
import './Header.css'
import Navbare from './navbare';
import Bottom from './Bottom';
const Header
 = () => {
  return ( <div id="header">

  <div className="top">

    
      <div id="logo">
        <span className="image avatar48"><img src={moi} alt="avatar" /></span>
        <h1 id="title">Gaetan musinde</h1>
       <p><strong>Programmeur blockchain</strong> </p> 
      </div>
      </div>
      <Navbare/>
      <Bottom/>
      </div>
);
}
 
export default Header
;
