import {useState, useEffect, useRef} from 'react'

function StarSection({lower, upper, numberStars}) {
  const [stars, setStars] = useState(null);
  const section = useRef(null);

  useEffect(()=>{
    const newStars = Array.from({length: numberStars}, (v, i)=>{
      const size = Math.ceil((Math.random() * (upper - lower + 1)))+ (lower - 1);
      let rect;
      if(section.current){
        rect = section.current.getBoundingClientRect();
      }
      return <div key={i} className={`star-size-${size}`} style={{position: 'absolute', top: `${Math.random() * rect.height}px`, left: `${Math.random() * rect.width}px`}}></div>
    });

    setStars(newStars);
  }, [])

  return <>
        <div className='star-section' ref={section}>
        {stars}
      </div>
  </>

}

export default StarSection