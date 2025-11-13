import "./components/Var.css";
import "./App.css";
import List from "./components/List";
import logo from "./assets/yummers.svg";

function App() {
  const meny = [
    {
      id: 1,
      tittel: "Spaghetti Bolognese",
      pris: "159 kr",
      ingredienser: "Spaghetti, kjøttsaus, parmesan",
      kategori: "Hovedrett",
    },
    {
      id: 2,
      tittel: "Kremet Kyllingsuppe",
      pris: "129 kr",
      ingredienser: "Kylling, fløte, gulrøtter, selleri",
      kategori: "Forrett",
    },
    {
      id: 3,
      tittel: "Margarita Pizza",
      pris: "169 kr",
      ingredienser: "Tomatsaus, mozzarella, basilikum",
      kategori: "Hovedrett",
    },
    {
      id: 4,
      tittel: "Sushi Mix",
      pris: "229 kr",
      ingredienser: "Laks, tunfisk, reker, ris",
      kategori: "Hovedrett",
    },
    {
      id: 5,
      tittel: "Cæsarsalat",
      pris: "139 kr",
      ingredienser: "Romanosalat, kylling, parmesan, dressing",
      kategori: "Forrett",
    },
    {
      id: 6,
      tittel: "Brownie med Is",
      pris: "89 kr",
      ingredienser: "Brownie, vaniljeis, sjokoladesaus",
      kategori: "Dessert",
    },
    {
      id: 7,
      tittel: "Taco Tallerken",
      pris: "199 kr",
      ingredienser: "Kjøttdeig, mais, ost, guacamole",
      kategori: "Hovedrett",
    },
    {
      id: 8,
      tittel: "Pannekaker med Syltetøy",
      pris: "99 kr",
      ingredienser: "Pannekaker, jordbærsyltetøy, sukker",
      kategori: "Dessert",
    },
    {
      id: 9,
      tittel: "Reker med Sitron",
      pris: "149 kr",
      ingredienser: "Reker, sitron, dill, brød",
      kategori: "Forrett",
    },
    {
      id: 10,
      tittel: "Entrecôte med Grønnsaker",
      pris: "289 kr",
      ingredienser: "Entrecôte, asparges, poteter, peppersaus",
      kategori: "Hovedrett",
    },
  ];

  return (
    <div className="app">
      <header>
        <img id="logo" src={logo} alt="Logo for big yummers" />
        <hr className="horizontal-line" />
      </header>
      <main>
        <section id="forretter">
          <h2 className="category-title">Forretter</h2>
          {meny
            .filter((item) => item.kategori === "Forrett")
            .map((item) => (
              <List key={item.id} items={[item]} />
            ))}
        </section>
        <hr className="vertical-line" />
        <section id="hovedretter">
          <h2 className="category-title">Hovedretter</h2>
          {meny
            .filter((item) => item.kategori === "Hovedrett")
            .map((item) => (
              <List key={item.id} items={[item]} />
            ))}
        </section>
        <hr className="vertical-line" />
        <section id="desserter">
          <h2 className="category-title">Desserter</h2>
          {meny
            .filter((item) => item.kategori === "Dessert")
            .map((item) => (
              <List key={item.id} items={[item]} />
            ))}
        </section>
      </main>
    </div>
  );
}

export default App;
