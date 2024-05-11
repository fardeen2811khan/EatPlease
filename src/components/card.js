import React from 'react'

function Card (props) {
  let options = props.options;
  let priceOptions = Object.keys(options);
  const handleAddToCart=()=>{
    
  }
  return (
    <div>

      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={props.imgsrc} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodname}</h5>
          {/* <p className="card-text">This is some random text. This is description.</p> */}
          <div className='container w-100 p-0' style={{ height: "28px" }}>
            <select className="m-2 h-100 w-20 bg-success  text-white rounded" style={{ select: "#FF0000" }}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-white rounded" style={{ select: "#FF0000" }}  >
              {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
            
            </div>
          </div>
          <hr></hr>
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>
           {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
        </div>
      </div>
    </div>
  )
}

export default Card