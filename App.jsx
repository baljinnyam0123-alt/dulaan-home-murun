import React from "react"
import { createRoot } from "react-dom/client"
import { MessageCircle, Truck, MapPin, Phone, BedDouble, Snowflake, ShoppingBag } from "lucide-react"
import "./style.css"

const FACEBOOK_LINK = "https://www.facebook.com/share/18Np6F1Xk9/?mibextid=wwXIfr"
const PHONE = "80826024"

function App() {
  return (
    <div className="site">
      <header className="hero">
        <nav className="nav">
          <div className="brand">DULAAN <span>Home</span></div>
          <a className="navButton" href={FACEBOOK_LINK} target="_blank" rel="noreferrer">
            Inbox захиалга
          </a>
        </nav>

        <div className="heroGrid">
          <div className="heroText">
            <p className="eyebrow">Murun • Home Goods Store</p>
            <h1>Dulaan Home Murun</h1>
            <p className="subtitle">
              Ор, дэрний цагаан хэрэгсэл, дулаан хөнжил, алчуур болон бэлэн сет.
              Мөрөн хотод хүргэлттэй.
            </p>

            <div className="buttons">
              <a className="primary" href={FACEBOOK_LINK} target="_blank" rel="noreferrer">
                <MessageCircle size={20}/> Inbox бичих
              </a>
              <a className="secondary" href={`tel:${PHONE}`}>
                <Phone size={20}/> {PHONE}
              </a>
            </div>

            <div className="features">
              <div><BedDouble/>Орны даавуу</div>
              <div><Snowflake/>Дулаан хөнжил</div>
              <div><ShoppingBag/>Алчуур, сет</div>
            </div>
          </div>

          <div className="heroCard">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop" alt="Dulaan Home bedding" />
            <div className="priceCard">
              <span>Онцлох</span>
              <strong>Зузаан өвлийн хөнжил</strong>
              <p>89,000₮+</p>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <p className="eyebrow">Products</p>
        <h2>Манай бараанууд</h2>

        <div className="products">
          <Product
            title="Орны даавуу"
            price="55,000₮+"
            img="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
          />
          <Product
            title="Дулаан хөнжил"
            price="89,000₮+"
            img="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
          />
          <Product
            title="Алчуур, бэлэн сет"
            price="15,000₮+"
            img="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
      </section>

      <section className="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>Гэрээ дулаахан, тухтай болгоорой</h2>
          <p>
            Dulaan Home Murun нь чанартай, дулаан, загварлаг гэр ахуйн бүтээгдэхүүнийг
            Мөрөн хотын хэрэглэгчдэд хүргэх зорилготой.
          </p>
        </div>

        <div className="infoBox">
          <p><Truck/> Мөрөн хотод хүргэлттэй</p>
          <p><MapPin/> Мөрөн хот</p>
          <p><MessageCircle/> Facebook inbox захиалга</p>
          <p><Phone/> {PHONE}</p>
        </div>
      </section>

      <footer>
        <strong>Dulaan Home Murun</strong>
        <p>Ор, дэрний цагаан хэрэгсэл • Хүргэлттэй • {PHONE}</p>
      </footer>
    </div>
  )
}

function Product({ title, price, img }) {
  return (
    <div className="product">
      <img src={img} alt={title} />
      <div className="productBody">
        <h3>{title}</h3>
        <p>{price}</p>
        <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer">Захиалах</a>
      </div>
    </div>
  )
}

createRoot(document.getElementById("root")).render(<App />)
