import React from 'react'

const MethodologyCard = ({ alt, image, text }) => {
    return (
        <div className='bg-linear-to-br from-blue-100/70 to-blue-200/50 rounded-lg overflow-hidden flex flex-col h-full'>
            <div className='p-4 text-center grow flex items-center justify-center min-h-[120px]'>
                <p className="text-base md:text-lg text-gray-600">
                {text}
                </p>
            </div>
            <div className="w-full h-48 md:h-56 shrink-0">
                <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

export default MethodologyCard