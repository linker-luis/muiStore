import { Container, ThemeProvider } from "@mui/material";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div >
        <Navbar/>
        <Container maxWidth = 'lg'>
          <Carousel/>
          <ProductSection/>
        </Container>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
