import React from 'react';
import mobiles from "../../assets/img/mobile.jpg";
import fashion from "../../assets/img/fashion.jpg";
import sports from "../../assets/img/sports.jpg";
import kidsToys from "../../assets/img/kidsToys.jpg";
import electronics from "../../assets/img/electronics.jpg";
import homeGroc from "../../assets/img/homeGroc.jpg";





const categories = [
  { name: 'Mobiles', img: mobiles },
  { name: 'Fashion', img: fashion },
  { name: 'Sports', img: sports },
  { name: 'Kids Toys', img: kidsToys },
  { name: 'Electronics', img: electronics },
  { name: 'Home Grocery', img: homeGroc },
];

const Categories = () => {
  return (
    <div className="container my-4">
      <h3 className="mb-3">Categories</h3>
      <div className="row text-center">
        {categories.map((cat, i) => (
          <div className="col-4 col-md-2 mb-3" key={i}>
            <div className="p-2 bg-light border rounded">
              <img
                src={cat.img}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              />
              <div>{cat.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;






// const categories = ['Mobiles', 'Fashion', 'Beauty', 'Home', 'Electronics', 'Grocery'];

// const Categories = () => {
//   return (
//     <div className="container my-4">
//       <h3 className="mb-3">Categories</h3>
//       <div className="row text-center">
//         {categories.map((cat, i) => (
//           <div className="col-4 col-md-2 mb-2" key={i}>
//             <div className="p-3 bg-light border">{cat}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;
