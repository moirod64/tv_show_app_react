import React from 'react';

const DEFAULT_IMG =
  'https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg';

function DataDisplay(props) {
  return (
    <div className='container'>
      <div className='d-flex flex-wrap justify-content-around align-content-center'>
        {props.data !== undefined ? (
          props.data.map(data => (
            <div className='col-3 card m-4' key={data.show.id}>
              <img
                style={{ maxHeight: 451 + 'px' }}
                className='card-img-top'
                key={data.show.image}
                alt=''
                src={data.show.image ? data.show.image.medium : DEFAULT_IMG}
              />
              <div
                className='card-body overflow-auto m-2'
                style={{ maxHeight: 12 + 'rem' }}
              >
                <h4 class='card-title' key={data.show.name}>
                  {data.show.name}
                </h4>
                <p className='card-text'>
                  Rating: {data.show.rating.average || 'n/a'}
                  /10
                </p>
              </div>
            </div>
          ))
        ) : (
          <h3 className='display-6 mt-3'>Search for your favourite shows</h3>
        )}
      </div>
    </div>
  );
}

export default DataDisplay;
