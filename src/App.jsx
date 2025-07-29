import AppRoutes from './routes'
import { BrowserRouter } from 'react-router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full bg-[#090a0d] z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;