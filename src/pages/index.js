import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Nav from '../components/Nav'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

// import thumb01 from '../assets/images/thumbs/01.jpg'
// import thumb02 from '../assets/images/thumbs/02.jpg'
// import thumb03 from '../assets/images/thumbs/03.jpg'
// import thumb04 from '../assets/images/thumbs/04.jpg'
// import thumb05 from '../assets/images/thumbs/05.jpg'
// import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.png'
import full02 from '../assets/images/fulls/02.png'
// import full03 from '../assets/images/fulls/03.jpg'
// import full04 from '../assets/images/fulls/04.jpg'
// import full05 from '../assets/images/fulls/05.jpg'
// import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  { id: '1', src: full01, thumbnail: full01, caption: 'Hinterland', description: <div>React.js, Contentful & Gatsby & Netlify<br/><a href="https://sad-galileo-b107f6.netlify.com/hinterland" >https://sad-galileo-b107f6.netlify.com/hinterland</a></div>},
  { id: '2', src: full02, thumbnail: full02, caption: 'Virtuall Play', description: <div>React.js, Ghost CMS & Digital Ocean<br/><a href="http://www.virtuallplay.com/" >http://www.virtuallplay.com/</a></div> },
]
// const DEFAULT_IMAGES = []

class HomeIndex extends React.Component {

  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  render() {
    const siteTitle = "Raphaël PI"
    const siteDescription = "Freelance, Web developper"

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <div id="main">
          <Nav />
          <section id="one">
            <header className="major">
              <h2>
                Vivre & coder
              </h2>
            </header>
            <div>
              <p>
              Passionné par le code depuis toujours, je suis un développeur front-end accompli ayant une expérience partagée entre le travail d'équipe au sein d'une entreprise et le travail solitaire en freelance.
              </p>
              <p>
              Depuis plus de 10 ans, je suis toujours aussi séduit par ce métier qui permet de toujours se remettre en question, faire des rencontres, apprendre et faire évoluer mes compétences au rythme de l'apparition de nouvelles technologies.
              </p>
              <p>
              Dont React.js et son envirronement qui reste mon jouet préféré.
              </p>
            </div>
          </section>

          <section id="two">
            <h2>Derniers projets</h2>
            <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
              src,
              thumbnail,
              caption,
              description
            }))} />
          </section>

        </div>

      </Layout>
    )
  }
}

export default HomeIndex