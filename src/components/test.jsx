import React from "react";

function Test() {
    const food = [
       {id: 1, name: 'cheese', price: 10},
       {id: 2, name: 'milk', price: 20},
       {id: 3, name: 'bread', price: 30},
    ];
 
    let res = food.map(function(item) {
       return <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
       </tr>;
    });
 
    return <table>
       <thead>
          <tr>
             <td>Название</td>
             <td>Стоимость</td>
          </tr>
       </thead>
       <tbody>
          {res}
       </tbody>
    </table>;
 }

 export default Test