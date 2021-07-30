import {
    HomeIcon,
    DocumentDownloadIcon,
    AtSymbolIcon,
    ShareIcon
} from "@heroicons/react/outline"
import Headeritem from "./Headeritem";
import Link from 'next/link'

function Header() {
    return (
        <header className=''>
            <h1 className='tracking-wide text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-yellow-300 pt-5 text-center lg:float-left lg:pl-20'>Nadim Farah.</h1>

            <div className='flex flex-grow justify-evenly lg:float-right lg:gap-20 lg:pr-20'>
                <Link href='/'><Headeritem title="HOME" Icon={HomeIcon} /></Link>
                <Link href='/Resume'><Headeritem title="RESUMÉ" Icon={DocumentDownloadIcon} /></Link>
                <Link href='/Account'><Headeritem title="ACCOUNTS" Icon={AtSymbolIcon} /></Link>
                <Headeritem title="SHARE" Icon={ShareIcon} />
            </div>
            
        </header>
    )
}

export default Header
