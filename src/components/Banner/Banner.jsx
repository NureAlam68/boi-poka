import React from 'react';
import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="bg-base-200 flex flex-row-reverse mb-[100px] h-[554px] py-[80px] px-[120px] rounded-[24px]">
    <div>
    <img
      src={bannerImg}
      className="h-[394px] rounded-lg shadow-2xl" />
    </div>
    <div className='w-[526px] mr-[86px]'>
      <h1 className='text-[56px] font-bold mt-[56px]'>
      Books to freshen up your bookshelf
      </h1>
      <button className="bg-[#23BE0A] mt-[48px] text-white text-[20px] font-bold rounded-[8px] px-[28px] py-[21px]">View The List</button>
    </div>
  </div>
    );
};

export default Banner;