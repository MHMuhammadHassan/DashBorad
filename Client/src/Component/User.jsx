import React from 'react';

const User = ({ Name, Des }) => {
  return (
    <div className="flex flex-col items-start justify-start bg-slate-100 rounded-lg p-4 m-4 border-none shadow-xl
                    w-[20vw] max-[650px]:w-[90vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] xl:w-[20vw]">
      <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-bold ml-2">
        {Name}
      </h1>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ml-2">
        {Des}
      </p>
    </div>
  );
};

export default User;
