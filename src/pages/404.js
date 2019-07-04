import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

export default () => {
  const siteTitle = "Raphaël PI"
  const siteDescription = "Freelance, Web developper"

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <h1>404</h1>
        <p>Page non trouvée, désolé...</p>
      </div>
    </Layout>
  )
}
