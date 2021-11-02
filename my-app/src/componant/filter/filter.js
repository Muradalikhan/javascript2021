import { useState } from "react";
// import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '@mui/material/Button';
// import EditIcon from '@mui/icons-material/Edit';
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Card from "./Card";

function FilterComp() {
  const [data, setData] = useState([
    {
      name: "Men Shirt",
      type:'men',
      discpriton: "New Black Shirt For Men",
      imge: "https://sc04.alicdn.com/kf/Hdae17163cb0a4c1fbb300cc754e19e81l.jpg",
      price: "499",
    },
    {
      name: "Men Shirt New",
      type:'men',
      discpriton: "New blue Shirt For Men",
      imge: "https://ae01.alicdn.com/kf/HTB1ouCNMVXXXXaOXFXXq6xXFXXXj/New-Autumn-Fashion-Brand-Print-Shirts-Slim-Fit-Shirt-Men-Long-Sleeve-Cotton-Casual-Mens-Shirts.jpg",
      price: "500",
    },
    {
      name: "Men's Casual Shirt",
      type:'men',
      discpriton: " Shirt Cotton Long Sleeve Button ",
      imge: "https://i.pinimg.com/originals/e4/5a/43/e45a43655c7502a3b053c0261e2d1ec5.jpg",
      price: "699",
    },
    {
      name: "Men Shirt",
      type:'men',
      discpriton: "Mens Formal Shirts For Men Clothes",
      imge: "https://image.dhgate.com/0x0s/f2-albu-g10-M01-F5-61-rBVaWVyks8SAdU7lAADdjruigfw389.jpg/men-shirt-long-sleeve-mens-shirts-casual.jpg",
      price: "750",
    },
    {
      name: "Girl Shirt",
      type: 'girls',
      discpriton: "New White Shirt For Girls",
      imge: "https://images-eu.ssl-images-amazon.com/images/I/61gqf3Ufn4L._AC._SR360,460.jpg",
      price: "799",
    },
    {
      name: "Girl Jeans Shirt",
      type: 'girls',
      discpriton: "Jeans Shirt High Quality",
      imge: "https://static-01.daraz.pk/p/95fd1da70adfa68fd1c41963e59ce4f9.jpg_340x340q80.jpg_.webp",
      price: "900",
    },
    {
      name: "woman Casual Shirt",
      type: 'girls',
      discpriton: " Women Printed Stylish Full Sleeve ",
      imge: "https://looksgud.com/blog/wp-content/uploads/2017/05/sangria-mandarin-collar-full-placket-printed-tunic.jpg",
      price: "999",
    },
    {
      name: "New Girl Shirt",
      discpriton: "shirts are designed for formal, casual",
      imge: "https://stylesatlife.com/wp-content/uploads/2019/05/Full-Sleeved-Red-Plain-Shirt-for-Women.jpg",
      price: "550",
    },
    {
      name: "Children Shirt",
      type: 'kids',
      discpriton: "casual t-shirt for children",
      imge: "https://stylesatlife.com/wp-content/uploads/2017/09/Kids-Polo-Neck-T-Shirt.jpg.webp",
      price: "499",
    },
    {
      name: "kid Print  Shirt",
      type:'kids',
      discpriton: "Print t-shirt for kids ",
      imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8Qsr1ZH9vWV4dmyn5hkxs_KsCeMVbYMhlw&usqp=CAU",
      price: "900",
    },
    {
      name: "Kid Casual Shirt",
      type: "kids",
      discpriton: "Bon Organik Beach Please Tshirts for  Boys",
      imge: "https://m.media-amazon.com/images/I/51DXEXhVl0L._UL1000_.jpg",
      price: "999",
    },
    {
      name: "Kid t-shirt",
      type: "kids",
      discpriton: "Powerpuff - Kids The Holi Crew T-Shirts",
      imge: "https://m.media-amazon.com/images/I/51nLxOlFFkL._SL1000_.jpg",
      price: "550",
    },
  ]);

  const[filterData,setFilter]=useState(data); 
  

  const filterProduct = (e) => {
    let a = e.target.value
    let arr = data.filter(x => x.type == a)
       setFilter(arr)
       console.log(data)
     
  };



  return (
    <div className="App">
      <header className="">
        <select className='p-1 shadow' onChange={(e) => filterProduct(e)}>
          <option >Serach category wise</option>
          <option value="men">Man Product</option>
          <option value="kids">Kids Product</option>
          <option value="girls">girls Product</option>
        </select>
      </header>
      {
      filterData.map((item, index) => {
        
          return <Card name={item.name} type={item.type} discription={item.discpriton} ind={index} img={item.imge}></Card>
        


      }

      )} 




    </div>
  );
}

export default FilterComp;