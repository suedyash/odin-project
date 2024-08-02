import { useState } from 'react'
import { sculptureList } from './assets/data.js';

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <h1>Gallery</h1>

      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Prev
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>

      <h3>
        <i>{sculpture.name} by {sculpture.artist}</i>
      </h3>

      <h4>
        ({index + 1} of {sculptureList.length})
      </h4>

      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}

      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}

export default Gallery
