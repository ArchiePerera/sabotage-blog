
import 'tailwindcss/tailwind.css'
import './App.css'
import Author from './pages/Author'
import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Article from "./pages/Article"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom"
import MenuCustom from "./components/MenuCustom"
import Footer from "./components/Footer"
import Newsletter from "./components/Newsletter"

// Faire votre système de pages, routes, route ici
// Toutes les routes à créer correspondent au dossier pages donc 5 routes à faire
const App = () =>  {


  return (
    <>
    <MenuCustom />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auteurs" element={<Author />} />
      <Route path="/newsletter" element={<Newsletter />} />
    </Routes>
    <Footer />
   </>
  )
}

export default App
