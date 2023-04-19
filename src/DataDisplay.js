import React from 'react';

const DEFAULT_IMG =
  'https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg';

function DataDisplay(props) {
  const showsData = props.showsData;

  const notAvailable =
    showsData !== undefined && showsData.length === 0 ? (
      <h4 className='display-6 mt-3'>Not Found</h4>
    ) : (
      ''
    );
  // const regexForStripHTML = /<([^</> ]+)[^<>]*?>[^<>]*?<\/\1> */gi;
  const regexForStripHTML = /(<([^>]+)>)/gi;

  return (
    <div className='container'>
      <div className='d-flex flex-wrap justify-content-around align-content-center'>
        {showsData ? (
          showsData.map(show => (
            <div className='col-xl-3 col-md-4 col-sm-8 card m-4'>
              <img
                alt=''
                style={{ maxHeight: 451 + 'px' }}
                className='card-img-top'
                src={show.show.image ? show.show.image.medium : DEFAULT_IMG}
              />

              <div
                className='card-body overflow-auto m-2'
                style={{ maxHeight: 12 + 'rem' }}
              >
                <h4 className='mt-0'>{show.show.name}</h4>
                <p className='card-text'>
                  Rating: {show.show.rating.average || 'Not Available'}
                </p>
                <p className='card-text'>
                  {show.show.summary.replaceAll(regexForStripHTML, '')}
                </p>
              </div>
            </div>
          ))
        ) : (
          <h4 className='display-6 mt-3'>Search for your favorites shows</h4>
        )}
        {notAvailable}
      </div>
    </div>
  );
}

export default DataDisplay;
