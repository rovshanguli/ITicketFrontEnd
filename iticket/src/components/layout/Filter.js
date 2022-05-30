import React,{useState} from 'react';
import '../../assets/sass/layout/filter.scss';
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';






function Filter(props) {


    //Date Filter 
    const options = {
        datetime: {
            maxDate:new Date(2022, 7, 22) ,
            mode: 'range',
            altInputClass: 'hide',
            dateFormat: 'M d Y',
            minDate: Date.now(),
            wrap: true,
        },
    }
    

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
                    <div className='filter'>
                        <div className='price-range-view'>
                       
                            <select defaultValue="" onChange={(e) => props.hallId(e.target.value)} >
                                <option className='place'  value="" disabled hidden>
                                    Məkanı Seçin
                                </option>
                                <option value={'1'}>
                                    Heydər Əliyev Sarayı
                                </option>
                                <option>
                                    Akademik Milli Dram Teatrı
                                </option>
                                <option>
                                    Beynəlxalq Muğam Mərkəzi
                                </option>
                                <option>
                                    Azərbaycan Dövlət Akademik Filarmoniyası
                                </option>
                                <option>
                                    Elektra Events Hall
                                </option>
                                <option>
                                    Kamera və orqan musiqisi zalı
                                </option>
                                <option>
                                    Akademik Rus Dram Teatrı
                                </option>
                                <option>
                                    Rəşid Behbudov adına Dövlət Mahnı Teatrı
                                </option>
                                <option>
                                    Passage 1901
                                </option>
                                <option>
                                    Azərbaycan Dövlət Akademik Musiqili Teatrı
                                </option>
                                <option>
                                    Gənc Tamaşaçılar kiçik səhnə
                                </option>
                                <option>
                                    Yaşıl Teatr
                                </option>
                                <option>
                                    Nizami Kino Mərkəzi
                                </option>
                                <option>
                                    Bakı Konqres Mərkəzi
                                </option>
                                <option>
                                    Hotel Fairmont Baku
                                </option>
                                <option>
                                    Marionet Teatrı
                                </option>
                                <option>
                                    Sea Breeze Resort
                                </option>
                                <option>
                                    Albion Pub
                                </option>
                                <option>
                                    Park Cinema Metro Park
                                </option>
                                <option>
                                    Azərbaycan İstiqlal Muzeyi
                                </option>
                                <option>
                                    Üzeyir Hacıbəylinin ev-muzeyi
                                </option>
                                <option>
                                    Atəşgah məbədi
                                </option>
                                <option>
                                    Dreamland Golf Club
                                </option>
                                <option>
                                    “Yanardağ” Təbiət Qoruğu
                                </option>
                                <option>
                                    Pizza Hut
                                </option>
                                <option>
                                    Dalğa Arena
                                </option>
                                <option>
                                    Yanardağ &amp; Atəşgah
                                </option>
                                <option>
                                    Şəkixanovlar evi
                                </option>
                                <option>
                                    Kiş Alban Məbədi
                                </option>
                                <option>
                                    Şəki Xan Sarayı
                                </option>
                                <option>
                                    Free Children
                                </option>
                                <option>
                                    Azərbaycan Teatr Xadimləri İttifaqı
                                </option>
                                <option>
                                    Şuşa Dövlət Musiqili Dram Teatrı
                                </option>
                                <option>
                                    “Qala” Dövlət Tarix Etnoqrafiya Qoruğu
                                </option>
                                <option>
                                    Bakı Fotoqrafiya Evi
                                </option>
                                <option>
                                    "İçərişəhər Dövlət" Tarix-Memarlıq Qoruğu
                                </option>
                                <option>
                                    Bakı Zooloji Parkı
                                </option>
                                <option>
                                    "Suraxanı" Gəmi-Muzey
                                </option>
                                <option>
                                    Hərbi Qənimətlər Parkı
                                </option>
                                <option>
                                    Göygöl
                                </option>
                                <option>
                                    Pizza Hut Megafun
                                </option>
                                <option>
                                    Flora Hostel
                                </option>
                                <option>
                                    27qm-Tarana's small gallery and cafe
                                </option>
                                <option>
                                    The Orange Grove
                                </option>
                                <option>
                                    Bakı Kristal Zalı və Dənizkənarı Bulvar
                                </option>
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
