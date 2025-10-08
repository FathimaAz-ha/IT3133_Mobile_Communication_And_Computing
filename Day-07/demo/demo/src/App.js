import logo from './logo.svg';
import './App.css';
import FruitShowCase from './FruitShowCase'
import StatBox from './StatBox';
import ImageSlider from './ImageSlider';

function App() {

  const images=["images/img1.jpg", "images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg"
]
  return (
    <div>
        <FruitShowCase/>
        <StatBox/>

        <br></br>
        <ImageSlider images={images} interval={3000}/>
    </div>
  
  );
}

export default App;
