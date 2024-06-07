import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewProduct = () => {
    const [data,changeData] = useState(
        [
            {"Pname":"Odyssia","Price":"Rs 700","img":"https://odyssia.in/wp-content/uploads/2024/01/CB-103-M-BLUE.webp"},
            {"Pname":"Sky Bag","Price":"Rs 900","img":"https://cdn.shopify.com/s/files/1/0696/1011/1257/files/SkybagsQUEST32L_297x.png?v=1705658666"},
            {"Pname":"Addidas","Price":"Rs 800","img":"https://odyssia.in/wp-content/uploads/2024/01/CB-101-BLACK-1.webp"},
            {"Pname":"Sky Bag","Price":"Rs 900","img":"https://cdn.shopify.com/s/files/1/0696/1011/1257/files/SkybagsTRIBE01_297x.png?v=1705911222"},
            {"Pname":"Addidas","Price":"Rs 1900","img":"https://cdn.shopify.com/s/files/1/0696/1011/1257/files/1_45be6392-6c2c-4357-b97e-bec950c91fd6_297x.png?v=1705657729"},
            {"Pname":"Sky Bag","Price":"Rs 900","img":"https://cdn.shopify.com/s/files/1/0696/1011/1257/files/1_11_297x.png?v=1705574639"}
        ]
    )
    return (
        <div>
            <NavBar/>
            <div className="container">
        <h1 align="center">View Product</h1>
        <div className="row ">
            <div className="container col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div align="center" className="row g-3">
                    {data.map(
                        (value,index)=>{
                            return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6">
                            <div className="card">
                                <img height="400px"src={value.img} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{value.Pname}</h5>
                                        <p className="card-text">{value.Price}</p>
                                        <a href="#" className="btn btn-primary">VIEW MORE</a>
                                    </div>
                            </div>
                        </div>
                        }

                    )
                       
                    }
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default ViewProduct