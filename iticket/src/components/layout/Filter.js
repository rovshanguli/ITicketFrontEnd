import React, { useState, useEffect } from 'react';
import '../../assets/sass/layout/filter.scss';
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import axios from 'axios';







function Filter(props) {
    const [items, setItems] = useState([]);
    const loadDatas = async () => {
        const result = await axios.get("https://localhost:44351/api/Hall/GetAllHalls")
        setItems(result.data)
       
    }

    //Date Filter 
    const options = {
        datetime: {
            maxDate: new Date(2022, 7, 22),
            mode: 'range',
            altInputClass: 'hide',
            dateFormat: 'M d Y',
            minDate: Date.now(),
            wrap: true,
        },
    }

    useEffect(() => {
        loadDatas();
    }, []);

    //Price Filter
    function valuetext(value) {
        return value;
    }
    const minDistance = 10;
    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            props.setPrice([Math.min(newValue[0], props.getPrice[1] - minDistance), props.getPrice[1]]);
        } else {
            props.setPrice([props.getPrice[0], Math.max(newValue[1], props.getPrice[0] + minDistance)]);
        }
    };


    return (
        <div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center placearea">
                    <div className='filter' style={{ width: '100%' }}>
                        <div className='price-range-view' style={{ width: '100%' }}>

                            <select defaultValue="" onChange={(e) => props.hallId(e.target.value)} style={{ width: '100%' }} >
                                <option className='place' value="" disabled hidden>
                                    Məkanı Seçin
                                </option>
                                {items.map(hall =>
                                    <option value={hall.id} key={hall.id}>
                                        {hall.name}
                                    </option>
                                )}

                            </select>


                        </div>

                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='filter'>
                        <Flatpickr
                            data-input
                            options={options.datetime}
                            onSelect={(e) => props.date(e.target.value)}
                        >
                            {/* Button and input should be the children of flatpickr * /}
                             {/* as per the official flatpickr.js example above */}

                            {/* toggle butotn should have `data-toggle` attribute */}
                            <button data-toggle></button>

                            {/* input field should have `data-input` attribute */}
                            <input type="text" className='date-range flatpickr-input' placeholder="Tarix  Aralığı Seçin" data-input />
                        </Flatpickr>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='filter'>
                        <div className='price-range-view'> Qiymət {props.getPrice[0]} ₼-dan {props.getPrice[1]} ₼-dək</div>
                        <Box sx={{ width: '100%' }}>
                            <Slider
                                sx={{ width: '50%' }}
                                getAriaLabel={() => 'Minimum distance'}
                                value={props.getPrice}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                            />
                        </Box>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Filter