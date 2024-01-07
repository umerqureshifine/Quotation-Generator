import React from 'react'
import img from '../images/5.png'
function Header() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
    <div className="">
     <div className="row">
      <div className="col-lg-12">
        <img src={img} style={{width:"inherit"}}   alt="" />
      </div>
 
     </div>
     
    </div>
   
    
    
    </>
  )
}

export default Header