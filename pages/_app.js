import '../styles/globals.css'
import Layout from '../components/layout'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@300&family=Lato:wght@100&family=Montserrat:wght@700&family=Poppins:wght@300&family=Roboto:wght@100&display=swap"
          rel="stylesheet" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lynshia_logo_dark.ico" />
        <meta property="og:title" content="Lynshia: Manage Periods, Reduce Pain, Track and Predict Your Cycles." />
        <meta property="og:url" content="https://lynshia.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:description"
          content="Lynshia helps you to manage your periods and reduce pain. It tracks and predicts your cycles while providing expert support during your menstruation." />
        <meta property="og:image" content="/fbogimage2.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Lynshia_app" />
        <meta name="twitter:creator" content="@Lynshia_app" />
        <meta name="twitter:title" content="Lynshia: Manage Periods, Reduce Pain, Track and Predict Your Cycles." />
        <meta name="twitter:description"
          content="Lynshia helps you to manage your periods and reduce pain. It tracks and predicts your cycles while providing expert support during your menstruation." />
        <meta name="twitter:image" content="/twtrogimage.png" />
        <meta name="google-site-verification" content="llfUYrSap64bYOnpev1PCoylcbydFGPVF53CvyNBCpU" />
        <meta name='dmca-site-verification' content='eVErMFI5QTdsbTk3ZmkzeGpzQWU4K1ZNMGM1OVJMU2RwUVJKVzZuYWtIND01' />
      </Head>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp
