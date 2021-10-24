
import './App.css';
import Card from './Card';
import img1 from './images/card/cloud.jpeg'
import img2 from './images/card/bake.jpeg'
import img3 from './images/card/bun.jpeg'
import img4 from './images/card/cloud2.jpeg'
import img5 from './images/card/pie.jpeg'
// import img6 from './images/card/pocket.jpeg'
import img7 from './images/card/pizza.jpeg'
import img8 from './images/card/bake2.jpeg'




let matchTitle=prompt('what do you want to search')

function App() {


  let arr = [
    {
      title: 'Cloud',
      img:img1,
      discription: 'some quick text here to show the product detail',
      price: '180 pkr',
    },
    {
      title: 'bake',
      img:img8,
      discription: 'some quick text here to show the product detail',
      price: '120 pkr',
    },
    {
      title: 'cloud',
      img:img4,
      discription: 'some quick text here to show the product detail',
      price: '170 pkr',
    },
    {
      title: 'bake',
      img:img2,
      discription: 'some quick text here to show the product detail',
      price: '220 pkr',
    },
    {
      title: 'bun',
      img:img3,
      discription: 'some quick text here to show the product detail',
      price: '100 pkr',
    },
    {
      title: 'pie',
      img:img5,
      discription: 'some quick text here to show the product detail',
      price: '100 pkr',
    },
    {
      title: 'pizza',
      img:img7,
      discription: 'some quick text here to show the product detail',
      price: '100 pkr',
    },
  ]


 
  return (
    <div className="App">
      {arr.map((item, index) => {
        if(item.title===matchTitle){

          return <Card title={item.title} price={item.price} discription={item.discription} ind={index} img={item.img}></Card>
        }
      }

      )}

    </div>
  );
}

export default App;
