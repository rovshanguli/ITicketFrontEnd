import React from 'react';
import "flatpickr/dist/themes/material_green.css";
import '../../assets/sass/allevents.scss';
import Filter from '../layout/Filter'

function AllEvents() {
  return (
    <div className='container'>
            <h3 className='mt-5'>Bütün Tədbirlər</h3>
            <div className='mt-5'>
            <Filter/>
            </div>
       
    </div>
  )
}

export default AllEvents