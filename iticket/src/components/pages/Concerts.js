import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../layout/Filter";
import { Link } from 'react-router-dom';
import moment from 'moment';



function Concerts() {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(3);
    const [hallid, setHallId] = useState();
    const [date, setDate] = useState('');
    const [price, setPrice] = useState([0, 100]);


    let startAndEnd = date.split('to');


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

    const result = items.filter(event => event.price >= price[0] && event.price <= price[1] && moment(startAndEnd[0]).format('YYYY/MM/DD') < moment(event.date).format('YYYY/MM/DD'));

    items.forEach(event => {
        console.log(moment(event.date).format('YYYY/MM/DD'));
    });

    console.log(moment(startAndEnd[0]).format('YYYY/MM/DD'));


    return (
        <div className='container'>
            <h3 className='mt-5'>Konsertlər</h3>
            <div className='mt-5'>
                <Filter hallId={setHallId} date={setDate} setPrice={setPrice} getPrice={price} />
            </div>
            <div className='row '>
                {result.slice(0, visible).map(card =>
                    <div className="col-4 mb-3" key={card.id}>
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