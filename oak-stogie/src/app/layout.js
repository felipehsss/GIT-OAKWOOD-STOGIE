import Header from '../components/Header/Header';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Evita que o CSS seja adicionado automaticamente



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>


      <Header />
        
        
        {children}

        <Footer />
      
      </body>
    
    </html>
  );
}
