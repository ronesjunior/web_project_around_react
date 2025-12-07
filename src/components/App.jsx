import "./App.css";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import AboutMe from "./AboutMe/AboutMe";
import Reviews from "./Reviews/Reviews";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./AboutMe/Contact";
import Hobbies from "./AboutMe/Hobbies";
import MyStory from "./AboutMe/MyStory";
import SiteHistory from "./AboutUs/SiteHistory";
import SiteMission from "./AboutUs/SiteMission";
import { useEffect, useState } from "react";
import Review from "./Review/Review";
import PageNotFound from "./PageNotFound/PageNotFound";

function App() {
  const [reviews, setReviews] = useState([]); // Nova variável useState

  useEffect(() => {
    // Capture os dados da avaliação a partir do servidor.
    fetch("https://emoji-critic.pt-br.tripleten-services.com/v1/reviews")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Envie o corpo da resposta para a função setter.
        setReviews(data);
      })
      .catch(console.error);
    // Um array de dependência vazio significa que o hook roda apenas quando o componente é iniciado.
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/reviews"
          element={<Reviews reviews={reviews} />} // o componente Reviews recebe a prop reviews. A prop reviews recebe o valor do useState {reviews} que é o array com vários objetos.
        />
        <Route
          path="/reviews/:reviewId"
          element={<Review reviews={reviews} />}
        />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="history" element={<SiteHistory />} />
          <Route path="mission" element={<SiteMission />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
