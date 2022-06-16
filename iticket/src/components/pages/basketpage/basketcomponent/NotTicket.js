import React from 'react'
import '../../../../assets/sass/basket/notticket.scss'

function NotTicket() {
    return (

        <div className='container'>
            <div className="row mt-5 ticketsonline">
                <div>
                    <h2>Səbət</h2>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 war">

                    <div className='warning'>
                        <p className='notticket'>Səbətinizdə bilet yoxdur.</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default NotTicket