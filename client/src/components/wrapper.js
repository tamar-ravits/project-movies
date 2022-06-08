import '../App.css';
import React from 'react';
import Search from './search';
import Content from './content';

function Wrapper() {
  return (
    <div className="container-fluid">
        <div className='row row-search d-flex align-items-center'>
            <Search></Search>
        </div>
        <div className='row row-content'>
            <Content/>
        </div>
    </div>
  );
}

export default Wrapper;
