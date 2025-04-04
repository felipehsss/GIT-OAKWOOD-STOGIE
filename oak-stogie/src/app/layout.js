import Header from '../components/Header/Header';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>


      <Header />
        
        
        {children}
      
      </body>
    
    </html>
  );
}
