import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Nav from '../components/Nav'

export default () => {
  const siteTitle = "CV Raphaël PI"
  const siteDescription = "Freelance, Salarié, Formation"

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
              Expérience
              </h2>
          </header>
          <div>
            <h3>Juillet 2019 - ??? (en cours) | <a href="https://sad-galileo-b107f6.netlify.com/hinterland" >Hinterland</a></h3>
            <p>
              Site de présentation d'un collectif d'artistes francais<br />
              Architecte & développeur<br />
              Gatsby & Contentful & Netlify
            </p>
          </div>
          {/* <div>
            <h3>Mai 2018 - Juin 2018 | <a href="http://www.virtuallplay.com" >Virtuallplay</a></h3>
            <p>
              Site professionel pour une salle de réalité virtuelle à Bayonne<br />
              Architecte & développeur<br />
              Ghost & DigitalOcean
            </p>
          </div> */}
          <div>
            <h3>Septembre 2017 - Octobre 2017 | WeDo+</h3>
            <p>
            Participation au développement de l’application Web et mobile “Le Village”
            permettant aux familles de s’organiser<br />
            React & React Native
            </p>
          </div>
          <div>
            <h3>Depuis Septembre 2011 | <a href="https://www.adelya.com/fr/" >Adelya</a></h3>
            <p>
              Ingénieur R&D, Lead Front-end<br />
              Migration d'une application B2B J2EE vers des composants React<br />
              Création d'espace client B2C intégrable dans des sites tiers<br />
              Réalisation d'une API GraphQL<br />
              React.js & Redux & JQuery & Bootstrap<br />
              Java & MySQL & Maven
            </p>
          </div>
          <header className="major">
            <h2>
              Formation
              </h2>
          </header>
          <div>
            <h3>Juin 2011 | Master ICE (Informatique Collaborative pour l'Entreprise)</h3>
            <p>
              Université TOULOUSE - Jean Jaures<br />
              231058, 5 Allée Antonio Machado, 31100 Toulouse
            </p>
          </div>
          <div>
            <h3>Juin 2009 | Licence NTIE (Nouvelle Technologie Informatique pour l'Entreprise)</h3>
            <p>
              Université TOULOUSE - Jean Jaures<br />
              231058, 5 Allée Antonio Machado, 31100 Toulouse
            </p>
          </div>
          <div>
            <h3>Juin 2008 | DUT Informatique</h3>
            <p>
              IUT de Bayonne et du Pays Basque<br />
              2 Allée du Parc Montaury, 64600 Anglet
            </p>
          </div>
          <div>
            <h3>Juin 2005 | Baccalauréat Scientifique</h3>
            <p>
              Lycée Saint-Exupéry<br />
              Lotissement les Plantes, 24120 Terrasson-Lavilledieu
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
