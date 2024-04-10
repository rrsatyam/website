"use client"
import CloseIcon from '@mui/icons-material/Close';

const ImageSlider = ({ data, slideIndex, setShowSlider, imageSlideChangeHandler }) => {
    return (
        <div className="modal-container">
            <div className="relative bg-transparent p-[20px] rounded-[5px] w-[100%] h-[60vh] flex justify-center items-center">
                <button className="absolute bg-[--theme-red-color] text-[--white-color] p-1 top-[-120px] right-[20px] opacity-80 hover:opacity-100" onClick={() => setShowSlider(false)}><CloseIcon fontSize='small' /></button>
                <div className="flex items-center">
                    {data.map((val, index) => (
                        <div className={`slide ${slideIndex === index ? 'active' : ''} !w-[80%] !h-[100%] mx-auto`} key={index}>
                            <img src={val.image} alt={`Image ${index + 1}`} className='w-[100%] !h-[100%]' />
                        </div>
                    ))}
                </div>
                <button className="absolute top-[50%] translate-y-[-50%] px-[10px] py-[30px] cursor-pointer bg-[--theme-red-color] left-0 opacity-70 hover:opacity-100" onClick={() => imageSlideChangeHandler(-1)}>
                    <img src='/images/core-img/left-arrow.svg' alt='leftArrow' className='w-[50px] h-[50px]' />
                </button>
                <button className="absolute top-[50%] translate-y-[-50%] px-[10px] py-[30px] cursor-pointer bg-[--theme-red-color] right-0 opacity-70 hover:opacity-100" onClick={() => imageSlideChangeHandler(1)}>
                    <img src='/images/core-img/right-arrow.svg' alt='rightArrow' className='w-[50px] h-[50px]' />
                </button>
            </div>
        </div>
    )
}

export default ImageSlider;