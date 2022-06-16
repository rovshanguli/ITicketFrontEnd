import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../layout/Filter";
import '../../assets/sass/loadmore/loadmore.scss'

function LoadMore() {
    const [Items, setItems] = useState([]);
    const [visible, setVisible] = useState(3);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3)
    }

    useEffect(() => {
        loadDatas();

    }, []);

    const loadDatas = async () => {

        const result = await axios.get("https://localhost:44351/api/Event/GetAllEvents")
        setItems(result.data)



    }





    return (

        <div className='container'>
            <h3 className='mt-5'>Bütün Tədbirlər</h3>
            <div className='mt-5'>
                <Filter />
            </div>
            <div className='row '>
                {Items.slice(0, visible).map(item =>


                    <div key={item.id.toString()} className="col-lg-4 col-md-6 col-sm-12 mt-5" >
                        <div className='px-3'>
                            <a href="/events/concerts/sagopa-kajmer" className="event-list-item tns-item" target="" aria-hidden="true" tabIndex="-1">
                                <div className="relative h-full">
                                    <div className="image">
                                        <img src={`data:image/jpeg;base64,${item.backImage}`} data-src={`data:image/jpeg;base64,${item.backImage}`} alt="" className="bg ls-is-cached lazyloaded" />
                                        <img src={`data:image/jpeg;base64,${item.image}`} data-src={`data:image/jpeg;base64,${item.image}`} alt="" className=" ls-is-cached lazyloaded" />
                                        <span className="btn"><span className="price">{item.price} ₼</span>-dan</span>
                                    </div>
                                    <div className="info">
                                        <div className="event-name">
                                            {item.name}
                                        </div>
                                        <div className="flex w-full items-center flex-1">
                                            <div className="event-date">
                                                {item.date}
                                            </div>
                                            <span className="separator">
                                                •
                                            </span>
                                            <div className="venue-name">
                                                {item.hall}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>


                )}

               

            </div>
            <div className="load">   <button className="btn btn-primary loadmore mt-4" onClick={showMoreItems}>Load More</button></div>
         
        </div>

    )
}

export default LoadMore