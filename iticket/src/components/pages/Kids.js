import React from 'react'
import Filter from '../layout/Filter'

function Kids() {
  const cards = [
    {
      bgimg: "https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg",
      img: "https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png",
      price: "5",
      name: "Sagopa Kajmer",
      date: "10 iyun 2022",
      hall: "Elektra Events Hall"
    },
    {
      bgimg: "https://cdn.iticket.az/event/poster_bg/NL4Oza9xgJ3FCtzsxbsu4OVosNfibm7PmPW1MT9o.jpg",
      img: "https://cdn.iticket.az/event/poster/gm1OcnrlYiLqvnK6Bi9s4ChzcBI7Yurwn8DiEh0X.png",
      price: "5",
      name: "Sagopa Kajmer",
      date: "10 iyun 2022",
      hall: "Elektra Events Hall"
    },
    {
      bgimg: "https://cdn.iticket.az/event/poster_bg/5srwI3Nfh5cGmZZlpOpk8lNYlbvmkmH5k12kIeqP.jpg",
      img: "https://cdn.iticket.az/event/poster/UhjNubJp8u7ul0zpFdm6asOqv4lSdOelvQjwdS7u.png",
      price: "5",
      name: "Sagopa Kajmer",
      date: "10 iyun 2022",
      hall: "Elektra Events Hall"
    },
    {
      bgimg: "https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg",
      img: "https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png",
      price: "5",
      name: "Sagopa Kajmer",
      date: "10 iyun 2022",
      hall: "Elektra Events Hall"
    },
    {

      bgimg: "https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg",
      img: "https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png",
      price: "5",
      name: "Sagopa Kajmer",
      date: "10 iyun 2022",
      hall: "Elektra Events Hall"
    },
    {

      bgimg: "https://cdn.iticket.az/event/poster_bg/hM2SYe16SbKWyutMq3rS2pgc5F8UIo6p3rQtaN0w.jpg",
      img: "https://cdn.iticket.az/event/poster/T2YvJQuPaX6wtcUSh83mvzVlaITkqUdNGs4vPCcR.png",
      price: "5",
      name: "Sagopa Kajmer",
      date: "10 iyun 2022",
      hall: "Elektra Events Hall"
    }


  ]
  return (
    <div className='container'>
      <h3 className='mt-5'>Uşaqlar</h3>
      <div className='mt-5'>
        <Filter />
      </div>
      <div className='row'>
        {cards.map(card =>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className='px-3' key={card.toString()}>
              <a href="/events/concerts/sagopa-kajmer" className="event-list-item tns-item" target="" aria-hidden="true" tabIndex="-1">
                <div className="relative h-full">
                  <div className="image">
                    <img src={`${card.bgimg}`} data-src="https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg" alt="SAGOPA KAJMER" className="bg ls-is-cached lazyloaded" />
                    <img src={`${card.img}`} data-src="https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png" alt="SAGOPA KAJMER" className=" ls-is-cached lazyloaded" />
                    <span className="btn"><span className="price">{card.price} ₼</span>-dan</span>
                  </div>
                  <div className="info">
                    <div className="event-name">
                      {card.name}
                    </div>
                    <div className="flex w-full items-center flex-1">
                      <div className="event-date">
                        {card.date}
                      </div>
                      <span className="separator">
                        •
                      </span>
                      <div className="venue-name">
                        {card.hall}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>


        )}

      </div>
    </div>
  )
}

export default Kids