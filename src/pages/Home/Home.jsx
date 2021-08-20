import './Home.css';

import searchImg from '../../assets/search.svg'
import heartImg from '../../assets/heart.svg'

function Home() {
  return(
    <>
      <header>
        <article>
          <nav>
            <h4>Codelândia</h4>
            <h4>blog</h4>
          </nav>

          <div className="input-search">
            <img src={searchImg} alt="Procurar"/>
            <input type="text" placeholder="Pesquisar no blog"/>
          </div>
        </article>
      </header>

      <div className="container">
      <article>
          <div>
            <span>
              20 de ago, 2021
            </span>

            <img src={heartImg} alt="Curtir" />
          </div>
          <span>
            <h5>Agora é oficial: o Windows 11 está vindo</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
            </p>
          </span>
        </article>

        <article>
          <div>
            <span>
              20 de ago, 2021
            </span>

            <img src={heartImg} alt="Curtir" />
          </div>
          <span>
            <h5>Agora é oficial: o Windows 11 está vindo</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
            </p>
          </span>
        </article>

        <article>
          <div>
            <span>
              20 de ago, 2021
            </span>

            <img src={heartImg} alt="Curtir" />
          </div>
          <span>
            <h5>Agora é oficial: o Windows 11 está vindo</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
            </p>
          </span>
        </article>

        <article>
          <div>
            <span>
              20 de ago, 2021
            </span>

            <img src={heartImg} alt="Curtir" />
          </div>
          <span>
            <h5>Agora é oficial: o Windows 11 está vindo</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
            </p>
          </span>
        </article>

        <article>
          <div>
            <span>
              20 de ago, 2021
            </span>

            <img src={heartImg} alt="Curtir" />
          </div>
          <span>
            <h5>Agora é oficial: o Windows 11 está vindo</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
            </p>
          </span>
        </article>
      </div>
    </>
  )
}

export default Home;