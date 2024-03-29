import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


const Footer = () => {
    return (




        <footer id="sticky-footer footer container-fluid" className="flex-shrink-0 py-4 bg-dark text-white-50 width-auto">
            <div className="container text-center">
                <button className="rounded btn btn-warning m-3 bt">

                    <a href="https://naga-clothing.com" className="text-black text-decoration-none font-weight-light">Naga Apparel Clothing</a>

                    <small>
                        <div className="text-white text-right m-1">
                            Designed by: Maurice Holda 2023
                        </div>
                    </small>
                </button>

                <button className="rounded btn btn-warning m-3 bt">

                    <a href="https://naga.nftify.network/" className="text-black text-decoration-none font-weight-light">Our NFT Marketplace</a>

                    <small>
                        <div className="text-white text-right m-1">
                            Buy your instrumentals
                        </div>
                    </small>
                </button>
               

            </div>



        </footer>
    )
}

export default Footer