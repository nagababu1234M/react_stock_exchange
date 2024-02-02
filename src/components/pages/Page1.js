import React from 'react';
const Page1 = (props) => {
  const {products}=props.data
  const column = Object.keys(products[0]);
  const ThData =()=>{
    return column.map((data)=>{
        return <th key={data}>{data}</th>
    })
}
const tdData =() =>{
  return products.map((data)=>{
    return(
        <tr>
          {
          column.map((v)=>{
          return <td>{data[v]}</td>
          })
        }
      </tr>
    )
  })
  
}
// const colStyles = {
//   overflow:"auto",
//   width:"30%",
//   // Add any other styles you want
// };
return (
  <table className="table" >
    <thead>
     <tr>{ThData()}</tr>
    </thead>
    <tbody>
    {tdData()}
    </tbody>
   </table>
 )
};

export default Page1;