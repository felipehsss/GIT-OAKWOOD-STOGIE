import Header from '../components/Header/Header';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer/Footer';
import Questions from '../components/Questions/Questions';
import Stogies from '@/components/Stogies/Stogies';
import { CartProvider } from '../context/CartContext';
import CartOffcanvas from "../components/CartOffcanvas";

// import '@fortawesome/fontawesome-svg-core/styles.css'
// import { config } from '@fortawesome/fontawesome-svg-core'
// config.autoAddCss = false // Evita que o CSS seja adicionado automaticamente


import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Evita que o CSS seja adicionado automaticamente



export default function RootLayout({ children }) {
  const pathname = usePathname(); // Obtém a rota atual

  const shouldRenderStogiesAndQuestions = pathname !== '/Produtos' && pathname !== '/Pagamento' && pathname !== '/Link'; // Evitar esses componentes na página de Produtos
  return (
    <html lang="pt-br">


      <body>

      <CartProvider>


        <Header />


        {children}

        {shouldRenderStogiesAndQuestions && <Stogies />}
        {shouldRenderStogiesAndQuestions && <Link href="/Produtos">
          <button>Veja Mais</button>
        </Link>}
        
        {shouldRenderStogiesAndQuestions && <Questions />}
        {/* <Stogies/> */}

        
        {/* <Produtos /> */}


        <Questions />

        <CartOffcanvas />

      </CartProvider>

        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossOrigin="anonymous"></script>
      </body>

    </html>
  );
}
