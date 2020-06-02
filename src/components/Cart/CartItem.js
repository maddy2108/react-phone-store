import React from 'react'

export default function CartItem({item,value}) {
    
    const{id,title,img,price,total,count}=item;
    const{increment,decrement,removeItem}=value;

    return (
        <div className="row my-2 text-center text-capitalize">
            <div className="col-10 mx-auto col-lg-2">
             <img src={img} style={{width:"5rem", height:"7rem"}} className="img-fluid"
             alt="product"></img>
            </div>
            <div className="col-10 mx-auto col-lg-2">
             <span className="d-lg-none">product : </span>
             {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
             <span className="d-lg-none">price : </span>
             {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
              <div className="d-flux justify-content-center">
               <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>
                   -
               </span>
               <span className="btn btn-black mx-1">{count}</span>
               <span className="btn btn-black mx-1" onClick={()=>increment(id)}>
                   +
               </span>
              </div>  
            </div>
            {/* */}
            <div className="col-10 mx-auto col-lg-2">
             <div className="cart-icon">
               <i className="fas fa-trash" onClick={()=>removeItem(id)}></i>
             </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
             <strong>item total : INR {total}</strong>
            </div>
        </div>
    )
}
