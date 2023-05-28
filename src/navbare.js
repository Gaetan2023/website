import './Navbare.css'

const Navbare = () => {
  return (  
    <nav id="nav">
    <ul>
      <li><a href="#top" id="top-link"><span className="nav">introduction</span></a></li>
      <li><a href="#portfolio" id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></a></li>
      <li><a href="#about" id="about-link"><span className="icon solid fa-user">About Me</span></a></li>
      
    </ul>
  </nav>


  );
}
 
export default Navbare
;
