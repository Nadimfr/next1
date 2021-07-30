function Account() {
    return (
        <div className=''>
            <div className='grid grid-cols-1 gap-10 pt-10 lg:grid lg:grid-cols-4'>

                <div className='flex flex-col justify-center items-center group'> 
                <img className='h-64 lg:h-40' src='https://img.icons8.com/color/50/000000/facebook.png' />
                <p className='text-white text-3xl opacity-0 font-light animate-bounce group-hover:opacity-100 mt-2'>Facebook</p>
                </div>

                <div className='flex flex-col justify-center items-center group'>
                <img className='h-64 lg:h-40' src="https://img.icons8.com/color-glass/50/000000/instagram-new.png" />
                <p className='text-white text-3xl opacity-0 font-light animate-bounce group-hover:opacity-100 mt-2'>Instagram</p>
                </div>

                <div className='flex flex-col justify-center items-center group'>
                <img className='h-64 lg:h-40' src="https://img.icons8.com/color/50/000000/linkedin.png"/>
                <p className='text-white text-3xl opacity-0 font-light animate-bounce group-hover:opacity-100 mt-2'>LinkedIn</p>
                </div>

                <div className='flex flex-col justify-center items-center group'>
                <img className='h-64 lg:h-40' src="https://img.icons8.com/color-glass/50/000000/github.png"/>
                <p className='text-white text-3xl opacity-0 font-light animate-bounce group-hover:opacity-100 mt-2'>Github</p>
                </div>
            </div>  
        </div>
    )
}

export default Account
