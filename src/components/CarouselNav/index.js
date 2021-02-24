import React  from 'react';

const CarouselNav = ({ onNext, onPrev, currentSlide, totalSlides }) => {

    return (
        <div className="carousel-nav-btns">
            <button
                className={`link-btn link-btn-arrow __prev ${currentSlide === 1 ? 'disabled' : ''}`}
                onClick={onPrev} />
            <button
                className={`link-btn link-btn-arrow __next ${currentSlide === totalSlides ? 'disabled': ''}`}
                onClick={onNext} />
        </div>
    )
};

export default CarouselNav;