import React, { useState ,useRef,useEffect} from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

function Card(props) {
  const priceRef = useRef();
  const dispatch = useDispatchCart();
  // console.log('dispatch:', dispatch); // Add this line to see what dispatch is

  const data = useCart();
  // console.log('data:', data); // Add this line to see what data is

  const options = props.options;
  const priceOptions = Object.keys(options);
  const [qty, setqty] = useState(1);
  const [size, setsize] = useState("");

  const handleAddToCart = async () => {
    await dispatch({ type: "ADD", id: props.fooditems._id, name: props.fooditems.name, price: props.finalPrice, qty: qty, size: size });
    // console.log(data);
  }
  let finalPrice = qty * parseInt(options[size]);  
  useEffect(() => {
    setsize(priceRef.current.value)
  }, [])
  return (

    <div>

      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={props.fooditems.img} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.fooditems.name}</h5>
          {/* <p className="card-text">This is some random text. This is description.</p> */}
          <div className='container w-100 p-0' style={{ height: "28px" }}>
            <select className="m-2 h-100 w-20 bg-success  text-white rounded" style={{ select: "#FF0000" }} onChange={(e)=>{setqty(e.target.value)}}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-white rounded"ref={priceRef} onChange={(e)=>{setsize(e.target.value)}} style={{ select: "#FF0000" }}  >
              {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
            ₹{finalPrice}/-
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