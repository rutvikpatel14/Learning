import React from 'react'

function MapDemo() {
  const myArry=['Bmw','Audi','Ferrari','Skoda']
  const myArry1=[{name:'Baba',place:'Ashram'}]
  return (
    <div>
      <table border='5'>
        {myArry.map((value,index) => {
          return(
            <tr key={index}><td>{value}</td></tr>
          )
        })}
      </table>
      <table border='5'>
        {myArry1.map((value,index) => {
          return(
            <tr key={index}><td>{value.name}</td>
            ||<td>{value.place}</td></tr>
          )
        })}
      </table>
    </div>
  )
}


export default MapDemo
