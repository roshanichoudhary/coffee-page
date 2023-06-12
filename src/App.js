import CoffeeImage from '../src/img/coffee.svg';
import imgCoffeeBag from '../src/img/coffee-bag.svg'
import imgHotDrinks from '../src/img/hot-drinks (1).png'
import imgSnack from '../src/img/snack.png'
import videoTrailer from '../src/videos/woman_drinking_coffee.mp4'

import Card from './components/card'

function App() {
  const mystyle = {
    width: "100 %",
    height: "300px",
    backgroundColor: "#000",
    overflow: "auto"
  }

  return (
    <>
      <ul>
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <div id="section-1">
        <div id="title-container">
          <h1>Crafted Coffees</h1>
          <h2>"Coffee पे चर्चा"</h2>
          <img src={CoffeeImage} width="30" height="30" alt="" />
        </div>
      </div>

      <div id="section-2">
        <div id="card-gallery">
          <Card title="MADE IN US" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, porro." image={imgCoffeeBag}></Card>
          <Card title="MADE IN India" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, porro." image={imgCoffeeBag}></Card>
          <Card title="MADE IN UK" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, porro." image={imgCoffeeBag}></Card>
          <Card title="MADE IN Brazil" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, porro." image={imgCoffeeBag}></Card>

        </div>

        <div id="card-gallery-bottom-section">
          <div id="left-section">
            <div className="video-mask">
              <video width="320" height="240">
                <source src={videoTrailer} type="video/mp4" />
              </video>
            </div>

          </div>
          <div id="right-section"></div>
        </div>
      </div>

      <div id="section-3">
        <div style={mystyle}>
          <div id="title-container">
            <h1>Discover</h1>
            <br />
            <h2>O U R M E N U</h2>
          </div>
        </div>
      </div >

      <div id="section-4">
        <div id="section-4-top">
          <div id="section-4-top-left">
            <hr />
          </div>
          <div id="section-4-top-middle">
            <div id="section-4-top-middle-inner-item" className="float-left">
              <button id="button-1" onclick="switchLeftButton()" className="circle"><img src={imgHotDrinks} alt="" /></button>
            </div>
            <div id="section-4-top-middle-inner-item" className="float-left">
              <button id="button-2" onclick="switchRightButton()" className="circle"><img src={imgSnack} alt="" /></button>
            </div>


          </div>
          <div id="section-4-top-left">
            <hr />
          </div>
        </div>
      </div>

    </>
  );

}

export default App;
