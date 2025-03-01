import React from 'react'

function Avater({name,nickname,image}) {
  return (
    <>
        <div className="flex flex-col justify-center items-center mt-5 md:mt-0">
            <img className="w-20 h-20 md:w-25 md:h-25 p-1 object-cover rounded-full ring-4 ring-[#DE3163]" src={image} alt={name} />
            <span className="mogra mt-3 text-[#DE3163]">
                <span>{name}</span>
                <span> ({nickname})</span>
            </span>
        </div>
    </>
  )
}

export default Avater