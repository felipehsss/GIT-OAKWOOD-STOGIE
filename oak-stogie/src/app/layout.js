import Header from '../components/Header/Header';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer/Footer';
import Questions from '../components/Questions/Questions';

// import '@fortawesome/fontawesome-svg-core/styles.css'
// import { config } from '@fortawesome/fontawesome-svg-core'
// config.autoAddCss = false // Evita que o CSS seja adicionado automaticamente


import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Evita que o CSS seja adicionado automaticamente



export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body>


        <Header />


        {children}



        <Questions />


        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossOrigin="anonymous"></script>
      </body>

    </html>
  );
}
