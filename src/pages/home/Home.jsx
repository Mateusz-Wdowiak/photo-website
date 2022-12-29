import "./home.css";

const Home = () => {
  const handlePreventDefault = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <div className="info">
        <div className="info__h3">
          <h3>Na ryku od 2010</h3>
        </div>
        <div className="info__about">
          <span className="about__text1">
            Jestesmy skuteczni w każdej dziedzinie fotografii !
          </span>
          <span className="about__text2">
            Tworzymy, obrabiamy oraz podejmujemy się każdego zlecenia. Lubimy
            nowe wyzwania ! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Enim, in!
          </span>
        </div>
      </div>

      <div className="reference">
        <h3 className="reference__h3">Referencje</h3>
        <div className="reference__references">
          <div className="references_ref">
            <h2>Super jakość za normalną cenę</h2>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              reprehenderit amet exercitationem.
            </span>
          </div>
          <div className="references_ref">
            <h2>Otwarte podejście do wszystkich</h2>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              reprehenderit amet exercitationem.
            </span>
          </div>
          <div className="references_ref">
            <h2>Zawsze możemy liczyć na pomoc</h2>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              reprehenderit amet exercitationem.
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <span className="contact">KONTAKT</span>
        <h2 className="footerHeading">Napisz do nas</h2>
        <span className="footerText">
          Jesteśmy do dyspozycji naszych Klientów, z przyjemnością pomożemy
          również Tobie. Wyślij swoje dane kontaktowe i zyskaj darmowe
          konsultacje.
        </span>
        <form action="/">
          <input type="text" placeholder="Imię" />
          <input type="text" placeholder="Firma" />
          <input type="email" placeholder="E-mail" />
          <input type="number" placeholder="Telefon" />
          <button type="submit" onClick={handlePreventDefault}>
            WYSYŁAM
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
