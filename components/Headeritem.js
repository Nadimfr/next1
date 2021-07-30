function Headeritem({Icon , title}) {
    return ( 
    <div className='flex flex-col items-center cursor-pointer group w-12 pt-2'>
        <Icon className="h-7 mt-5 mb-1 text-white group-hover:text-yellow-300 lg:hidden" />
        <p className='opacity-0 animate-bounce lg:animate-none lg:opacity-100 lg:hover:text-white lg:hover:underline lg:text-xl lg:pt-4 mt-2 group-hover:opacity-100 text-transparent bg-clip-text bg-gradient-to-br from-white to-yellow-300 tracking-widest'>{title}</p>      
    </div>
    )
}

export default Headeritem
