
import './App.css';
import Card from './Card';
import img1 from './images/card/cloud.jpeg'


function App() {

  let arr = [
    {
      title: 'Cloud',
      img:{img1},
      discription: 'some quick text here to show the product detail',
      price: '180 pkr',
    },
    {
      title: 'Bake',
      img:{img1},
      discription: 'some quick text here to show the product detail',
      price: '120 pkr',
    },
    {
      title: 'cloud',
      img:{img1},
      discription: 'some quick text here to show the product detail',
      price: '170 pkr',
    },
    {
      title: 'bake',
      img:{img1},
      discription: 'some quick text here to show the product detail',
      price: '220 pkr',
    },
    {
      title: 'bun',
      img:{img1},
      discription: 'some quick text here to show the product detail',
      price: '100 pkr',
    },
    {
      title: 'pie',
      img:{img1},
      discription: 'some quick text here to show the product detail',
      price: '100 pkr',
    },
    {
      title: 'pizza',
      img:{img1},
      discription: 'some quick text here to show the product detail',
      price: '100 pkr',
    },
  ]


 
  return (
    <div className="App">
      {arr.map((item, index) => {
        
        return <Card title={item.title} price={item.price} discription={item.discription} ind={index} img={item.img}></Card>
      }

      )}

    </div>
  );
}

export default App;
