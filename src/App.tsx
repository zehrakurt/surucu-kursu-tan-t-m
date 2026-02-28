import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import QuestionsAsked from "./components/Asked/QuestionsAsked";
import StudentComment from "./components/StudentComment/StudentComment";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats /> 
      <StudentComment/>
      <QuestionsAsked/>   
      <Footer/>
    </>
  );
}

export default App;