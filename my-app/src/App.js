
import './App.css';
import Card from './Card';

function App() {

  let arr = [
    {
      title: 'Cloud',
      discription: 'some quick text here to show the product detail',
      price: '180 pkr',
    },
    {
      title: 'Bake',
      discription: 'some quick text here to show the product detail',
      price: '120 pkr',
    },
    {
      title: 'Ring',
      discription: 'some quick text here to show the product detail',
      price: '170 pkr',
    },
    {
      title: 'Shall',
      discription: 'some quick text here to show the product detail',
      price: '220 pkr',
    },
    {
      title: 'Treat',
      discription: 'some quick text here to show the product detail',
      price: '100 pkr',
    }
  ]


console.log(arr[0].title)


  return (
    <div className="App">
      <div>Hello world</div>
      {arr.map((item) => {
        for(let i=0;i<item;i++){
          
          <Card title={item[i].title}  price={item[i].price}  discription={item[i].discription}></Card>
        }
        
      }
      
      )}

    </div>
  );
}

export default App;
