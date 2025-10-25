import React from 'react'

function Avater({name,nickname,image}) {
  return (
    <>
        <div className="flex flex-col justify-center items-center mt-5 md:mt-0">
            <img className="w-20 h-20 md:w-25 md:h-25 p-[0.35rem] object-cover rounded-full ring-2 ring-[#fff]" src={image} alt={name} />
            <span className="mogra mt-3 text-[#fff]">
                <span>{name}</span>
                <span> ({nickname})</span>
            </span>
        </div>
    </>
  )
}

export default Avater