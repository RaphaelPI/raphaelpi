import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Nav from '../components/Nav'
// import Lightbox from 'react-images'
// import Gallery from '../components/Gallery'

// import full01 from '../assets/images/fulls/01.png'
// import full02 from '../assets/images/fulls/02.png'


// const DEFAULT_IMAGES = [
//   { id: '1', src: full01, thumbnail: full01, caption: 'Hinterland', description: <div>React.js, Contentful & Gatsby & Netlify<br/><a href="https://sad-galileo-b107f6.netlify.com/hinterland" >https://sad-galileo-b107f6.netlify.com/hinterland</a></div>},
//   { id: '2', src: full02, thumbnail: full02, caption: 'Virtuall Play', description: <div>React.js, Ghost CMS & Digital Ocean<br/><a href="http://www.virtuallplay.com/" >http://www.virtuallplay.com/</a></div> },
// ]
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
            <div>
              <p style={{color: "#333"}}>
              Je suis un développeur fullstack spécialisé front-end. J'ai une expérience partagée entre le travail d'équipe au sein d'une entreprise et le travail en freelance.
              </p>
              <p style={{color: "#333"}}>
              Depuis plus de 10 ans, je suis toujours aussi séduit par ce métier qui permet de constament se renouveler, faire des rencontres, apprendre et faire évoluer mes compétences au rythme de l'apparition de nouvelles technologies.
              </p>
              <p style={{color: "#333"}}>
              React.js et son environnement restent mes jouets préférés.
              </p>
            </div>
            <div style={{textAlign: 'center'}} >
              <a href="https://www.malt.fr/profile/raphaelpi">Demander un devis</a>
            </div>
            <br /><br />
            <div>
              #Javascript  #Node   #React  #Redux  #Gatsby  #Ghost  #MaterialUI  #Contentful  #JSON  #CSS  #Java  #MySQL  #Hibernate
            </div>
          </section>
          {/* <section id="two">
            <h2>Derniers projets</h2>
            <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
              src,
              thumbnail,
              caption,
              description
            }))} />
          </section> */}

        </div>

      </Layout>
    )
  }
}

export default HomeIndex