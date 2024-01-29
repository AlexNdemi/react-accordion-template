import React,{useState} from 'react';
import './accordion.css';
import PropTypes from 'prop-types';
export const Accordion = ({IMAGES}) => {
    const [currentIndex,setCurrentIndex]=useState(0);
    function updateIndex(index){
        setCurrentIndex(index)
    }
    return (
        <section className="container">
            <div className="accordion">
                {IMAGES.map((image,index)=>(
                    <div 
                        className={`accordion-panel ${index===currentIndex?'expanded-accordion':''}`} 
                        onClick={()=>updateIndex(index)}
                        key={index}>
                            <h2 id={`panel${index + 1}-heading`}>
                            <button
                                className="accordion-trigger"
                                aria-controls={`panel${index + 1}-content`}
                                aria-expanded="true"
                            >
                                <span 
                                    className="accordion-title" 
                                    id={`panel${index + 1}-title`}>{image.title}</span>
                                <svg aria-hidden="true" className="accordion-icon">
                                <use href={`#${image.svgId}`}></use>
                                </svg>
                            </button>
                            </h2>
                            <div
                                className="accordion-content"
                                id={`panel${index + 1}-content`}
                                aria-labelledby={`panel${currentIndex + 1}-heading`}
                                aria-hidden={currentIndex===index}
                                role="region"
                            >
                                <p>
                                {image.desc}
                                </p>
                                <img
                                    className="accordion-image"
                                    src={image.url}
                                    alt={image.alt}
                                />
                            </div>
                        </div>
                ))}
            </div>
        </section>
  )
}

Accordion.propTypes={
    IMAGES:PropTypes.array
}
