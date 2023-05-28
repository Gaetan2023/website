import './Main.css'
import phy from './phy.png'
import elec from './elec.png'
import block from './block.png'
import info from './infor.png'
import math from './math.png'
import pic from './pic04.jpg'
import visage from './visa.jpg'
const Main = () => {
  return ( 
    <div id="main">

    
      <section id="top" className="one dark cover">
        <div className="container">

          <header>
            <h2 className="alt">Hello! Bienvenu sur <strong>MgTech</strong>, un blog de connaissance.</h2>
          <p><em>Ce site est destine aux siences appliquées telles que la physique, les mathématiques, informatique ,le génie electrique et surtout les dernières tendences technologiques.</em>
          .</p>
          </header>

          <footer>
            <a href="#portfolio" className="button scrolly">Suivant</a>
          </footer>

        </div>
      </section>

    
      <section id="portfolio" className="two">
        <div className="container">

          <header>
            <h2>Portfolio</h2>
          </header>

          <p> <em>Les sciences appliquées sont un domain facinant qui succite  beaucoup d'antousiame et de mistère.<br/>
          La motivation est exposé les sujets exotiques non ou partiellement accessibles au grand publique.
          </em> </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="#" className="image fit"><img src={phy} alt="" /></a>
                <header>
                  <h3>physique</h3>
                </header>
              </article>
              <article className="item">
                <a href="#" className="image fit"><img src={math} alt="" /></a>
                <header>
                  <h3>mathématiques</h3>
                </header>
              </article>
            </div>
            <div class="col-4 col-12-mobile">
              <article className="item">
                <a href="#" class="image fit"><img src={pic} alt="" /></a>
                <header>
                  <h3>Actualité</h3>
                </header>
              </article>
              <article className="item">
                <a href="#" className="image fit"><img src={block} alt="" /></a>
                <header>
                  <h3>blockchain</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="#" className="image fit"><img src={elec} alt="" /></a>
                <header>
                  <h3>Eléctrotéchnique</h3>
                </header>
              </article>
              <article className="item">
                <a href="#" className="image fit"><img src={info} alt="" /></a>
                <header>
                  <h3>informatique</h3>
                </header>
              </article>
            </div>
          </div>

        </div>
      </section>

    
      <section id="about" className="three">
        <div className="container">

          <header>
            <h2>About Me</h2>
          </header>
                      <p>
          <img src={visage} alt="image" className="image featured" id="imageFloat" />

          <div id="decrir"><em>Ingénieur électromécanicien de formation,je me suis convetis en programmeur blockchain suite à l'avenement de la <strong>DLT</strong>(---Distribued ledge technology---) specialement connue sous les noms de Bitcoin et Ethereum et surtout à l'expenssion du monde multipolaire.Blockchain,un outil qui apporte liberté et autonomie des peuples.</em>
          </div>
          </p>
</div>
            <footer>
            <a href="https://www.linkedin.com/in/gaetan-musinde-99b59b272/" className="button scrolly">voir mon profile</a>
          </footer>
        </section>
            
      </div>
   );
}
 
export default Main;
