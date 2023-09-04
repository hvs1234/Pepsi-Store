import React from 'react'
const Productbox = ({productdata}) => {
  return (
    <>
        <div className="product-section">
            {productdata.map((curele)=>{
                return (
                    <div className="product-get" key={curele.id}>
                        <img src={curele.image} alt="pepsi1" />
                        <h1>{curele.title}</h1>
                        <p>{curele.price}</p>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Productbox