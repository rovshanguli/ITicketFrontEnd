import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { SeatsioSeatingChart } from '@seatsio/seatsio-react';


import '../../assets/sass/details/detail.scss'
import { Form } from 'react-bootstrap';

function Detail() {
    const { id } = useParams();
    const [data, setData] = useState();
    
   


    // Implementation
    useEffect(() => {
        function fetchSampleData() {

            let method = 'get' // ex. get | post | put | delete , etc
            return axios[method](`/api/Event/GetById/${id}`)
                .then((response) => {
                    // success
                    //-> save response to state, notification
                    setData(response.data) // pass to finish
                })
                .catch((error) => {
                    // failed
                    //-> prepare, notify, handle error

                    return false // pass to finish
                })
                .then((resultBoolean) => {
                    // do something after success or error

                    return resultBoolean // for await purpose
                });
        }

        function fetchResult() {
            let success = fetchSampleData()
            if (success) {
                setData(success.data)
            } else {
            }
        }
        fetchResult()
    }, [id]);

    //Helpers start
    let selectedSeats = [];
    if (JSON.parse(localStorage.getItem('seats')) != null) {
        selectedSeats = JSON.parse(localStorage.getItem('seats'))
    }
    console.log(selectedSeats);
    const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "AZN"
    });
    //Helpers End

    let obj = {
        "id": "B-20",
        "uuid": "eb2036e0-33c1-4872-879d-eef1d0e54657",
        "label": "B-20",
        "objectType": "Seat",
        "labels": {
            "own": "20",
            "parent": "B",
            "displayedLabel": "B-20"
        },
        "selected": true,
        "category": {
            "label": "Ground Floor",
            "color": "#ED303D",
            "accessible": false,
            "key": 2,
            "pricing": null,
            "isFiltered": false,
            "hasSelectableObjects": true
        },
        "selectable": true,
        "disabledBySocialDistancingRules": false,
        "status": "free",
        "forSale": false,
        "dataPerEvent": {
            "smallTheatreEvent": {
                "status": "free"
            }
        },
        "inSelectableChannel": true,
        "center": {
            "x": 312.21,
            "y": 231
        },
        "isOrphan": false,
        "parent": {
            "type": "row"
        },
        "seatId": "B-20",
        "chart": {
            "originalConfig": {
                "onObjectSelected": "function (obj) {\n            // add the selected seat id to the array\n            selectedSeats.push(obj);\n            localStorage.setItem(\"seats\", JSON.stringify(selectedSeats));\n            console.log(selectedSeats);\n          }",
                "onObjectDeselected": "function (obj) {\n            // remove the deselected seat id from the array\n            var index = -1;\n\n            for (let i = 0; i < selectedSeats.length; i++) {\n              if (selectedSeats[i].label === obj.label) {\n                index = i;\n              }\n            }\n\n            if (index !== -1) selectedSeats.splice(index, 1);\n            localStorage.setItem(\"seats\", JSON.stringify(selectedSeats));\n            console.log(selectedSeats);\n          }",
                "workspaceKey": "publicDemoKey",
                "selectedObjectsInputName": "selectedSeatsField",
                "priceFormatter": "price => formatPrice(price)",
                "openDraftDrawing": false,
                "event": "smallTheatreEvent",
                "language": "en",
                "divId": "seathall"
            },
            "config": {
                "workspaceKey": "publicDemoKey",
                "selectedObjectsInputName": "selectedSeatsField",
                "openDraftDrawing": false,
                "event": "smallTheatreEvent",
                "language": "en",
                "divId": "seathall",
                "configKeys": [
                    "onObjectSelected",
                    "onObjectDeselected",
                    "workspaceKey",
                    "selectedObjectsInputName",
                    "priceFormatter",
                    "openDraftDrawing",
                    "event",
                    "language",
                    "divId"
                ],
                "embedType": "Renderer",
                "v2Url": "https://api-eu.seatsio.net",
                "CDNUrl": "https://cdn-eu.seatsio.net",
                "CDNStaticFilesUrl": "https://cdn-eu.seatsio.net/static/version/v964",
                "dataCollectorUrl": "https://data.seatsio.net",
                "ablySubscribeKey": "hnsCTA.N9m7fg:y3JI9JQ1krTED-b9",
                "priceFormatterUsed": true
            },
            "iframe": {},
            "selectedObjectsInput": {},
            "storage": {
                "key": "seatsio"
            },
            "selectedSeats": [
                "B-20"
            ],
            "selectedObjects": [
                "B-20"
            ],
            "holdToken": null,
            "reservationToken": null,
            "requestIdCtr": 0,
            "requestCallbacks": {},
            "requestErrorCallbacks": {},
            "state": "RENDERED",
            "initialContainerDimensions": {
                "width": 1536,
                "height": 0
            },
            "domElementListener": {
                "positionInViewportChangedListener": null,
                "maxSize": 4096,
                "lastDimensions": {
                    "width": 1536,
                    "height": 777
                },
                "lastPositionInViewport": {
                    "top": 127.20000457763672,
                    "bottom": 904.2000045776367,
                    "right": 1536,
                    "left": 0
                },
                "stopRequested": false,
                "elementIsVisible": true,
                "lastViewportWidth": 1536,
                "lastViewportHeight": 526
            },
            "iframeElementListener": {
                "widthChangedListener": null,
                "dimensionsChangedListener": null,
                "elementMadeVisibleListener": null,
                "elementMadeInvisibleListener": null,
                "maxSize": null,
                "maxSizeExceededListener": null,
                "lastDimensions": {
                    "width": 1536,
                    "height": 777
                },
                "lastPositionInViewport": {
                    "top": 127.20000457763672,
                    "bottom": 904.2000045776367,
                    "right": 1536,
                    "left": 0
                },
                "stopRequested": false,
                "elementIsVisible": null,
                "lastViewportWidth": 1536,
                "lastViewportHeight": 526
            },
            "errorSentToDataCollector": false,
            "sentWarnings": [],
            "seatsioLoadedDeferred": {
                "promise": {}
            },
            "containerVisible": {
                "promise": {}
            },
            "renderingStart": "2022-06-04T15:55:15.526Z",
            "loadingScreen": {}
        }
    }
    return (

        <div>
            <div className='event-image'>
                <img src={`data:image/jpeg;base64,${data?.detailImage}`} alt="" className='imag' />
                <div className='deat'>
                    <span className='pricedet'>{data?.price} ₼-dan</span>
                    <button className='buthearth'><i className="far fa-heart"></i></button>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>

                        <div className='info-detail'>
                            <span className='icon-info'><i className="fas fa-calendar-alt ico"></i></span>
                            <div className='inf'>
                                <div className='title'>
                                    <b>Event Date</b>
                                </div>
                                <div className='text'>
                                    <p>{moment(data?.date).format("DD/MM/YYYY")}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>

                        <div className='info-detail'>
                            <span className='icon-info'><i className="far fa-clock ico"></i></span>
                            <div className='inf'>
                                <div className='title'>
                                    <b>Event Time</b>
                                </div>
                                <div className='text'>
                                    <p>{moment(data?.date).format("HH:MM")}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>

                        <div className='info-detail'>
                            <span className='icon-info'><i className="fas fa-map-marker-alt ico"></i></span>
                            <div className='inf'>
                                <div className='title'>
                                    <b>Venue</b>
                                </div>
                                <div className='text'>
                                    <p>{data?.hall.name}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-5 seathall' >

                <Form>
                    
                    <SeatsioSeatingChart
                        isObjectVisible= { function(obj) {
                            if(obj.label !== 'B-20') {
                                return true;
                            }
                            return false;
                        }}

                       
                        onObjectSelected={
                            function (obj) {
                                // add the selected seat id to the array
                                selectedSeats.push(obj);
                                localStorage.setItem("seats", JSON.stringify(selectedSeats));
                                console.log(selectedSeats);
                            }
                        }

                        onObjectDeselected={
                            function (obj) {
                                // remove the deselected seat id from the array
                                var index = -1;
                                for (let i = 0; i < selectedSeats.length; i++) {
                                    if (selectedSeats[i].label === obj.label) {
                                        index = i
                                    }
                                }
                                if (index !== -1) selectedSeats.splice(index, 1);
                                localStorage.setItem("seats", JSON.stringify(selectedSeats));
                                console.log(selectedSeats);
                            }
                        }
                       
                        
                        workspaceKey="publicDemoKey"
                        id={`seathall`}
                        selectedObjectsInputName={'selectedSeatsField'}
                        priceFormatter={(price) => formatPrice(price)}
                        openDraftDrawing={false}
                        event="smallTheatreEvent"
                        region="eu"
                        language="en"
                    />
                </Form>


            </div>
        </div >

    )
}

export default Detail