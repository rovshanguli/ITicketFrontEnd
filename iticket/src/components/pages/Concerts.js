import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../layout/Filter";
import { Link } from 'react-router-dom';



function Concerts() {
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

    const Detail = async id => {
        console.log(id);
    }

    return (
        <div className='container'>
            <h3 className='mt-5'>Konsertlər</h3>
            <div className='mt-5'>
                <Filter />
            </div>
            <div className='row '>
                {Items.slice(0, visible).map(card =>
                    <div className="col-4 mb-3">
                        <Link to={`/detail/${card.id}`} onClick={() => Detail(card.id)} className="event-list-item tns-item" target="" aria-hidden="true" tabIndex="-1">
                            <div className="relative h-full">
                                <div className="image">
                                    <img src={`data:image/jpeg;base64,${card.backImage}`} data-src={`data:image/jpeg;base64,${card.backImage}`} alt="" className="bg ls-is-cached lazyloaded" />
                                    <img src={`data:image/jpeg;base64,${card.image}`} data-src={`data:image/jpeg;base64,${card.image}`} alt="" className=" ls-is-cached lazyloaded" />
                                    <span className="btn"><span className="price">{card.price} ₼</span>-dan</span>
                                </div>
                                <div className="info">
                                    <div className="event-name">
                                        {card.name}
                                    </div>
                                    <div className="flex w-full items-center flex-1">
                                        <div className="event-date">
                                            {card.date.substring(0, 10)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
            <div className="load">   <button className="btn btn-primary loadmore mt-4" onClick={showMoreItems}>Load More</button></div>

        </div>
    )
}

export default Concerts