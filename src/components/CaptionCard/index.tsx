import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import { LuClipboardEdit } from "react-icons/lu";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const CaptionCard = () => {
    return (
        <div className="w-full bg-white rounded-md shadow-md px-7 py-6">
            <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                    <img width={40} height={40} className="rounded-full object-cover" src="https://pbs.twimg.com/profile_images/1524468526941188098/_S28Fet6_400x400.jpg" />
                    <div>
                        <Link to="/profil">alikvkli</Link>
                        <p className="text-xs text-[#808080]">5 dakika önce</p>
                    </div>
                </div>

                <Menu>
                    <MenuButton className="inline-flex items-center gap-2 rounded-full bg-transparent py-1.5 px-1.5 transition-all  font-semibold  shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-[#808080]/30 data-[open]:bg-[#808080]/30 data-[focus]:outline-1 data-[focus]:outline-white">
                        <BsThreeDotsVertical className="size-4 fill-[#808080]" />
                    </MenuButton>

                    <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-52 origin-top-right rounded-md border border-[#808080]/20 bg-white p-1 text-sm  transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition-all data-[focus]:bg-[#F48023] data-[focus]:text-white">
                                <TbReport size={18} />
                                Şikayet et
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition-all data-[focus]:bg-[#F48023] data-[focus]:text-white">
                                <LuClipboardEdit size={18} />
                                Düzenle
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition-all data-[focus]:bg-[#F48023] data-[focus]:text-white">
                                <MdOutlineDeleteSweep size={18} />
                                Sil
                            </button>
                        </MenuItem>

                    </MenuItems>
                </Menu>

            </div>
            <Link to="/baslik/superman-shazam" className="font-sans font-semibold">superman shazam the return of black adam</Link>
            <p className="text-sm font-thin mt-4">superman ile shazam'in bir olun black adam'i patakladigi 25 dakikalik animasyon. senaryo falan yok, iki super kahraman bir olup black adam'i dovuyorlar hepsi bu.</p>

            <div className="flex items-center justify-between mt-4 max-md:flex-col-reverse max-md:items-start max-md:gap-4">
                <div className="flex items-center gap-4">
                    <Link className="bg-[#EAEAEA] text-[#808080] text-[10px] rounded-md px-2.5 py-[5px] transition hover:bg-[#F48023] hover:text-white" to="/etiket">superman</Link>
                    <Link className="bg-[#EAEAEA] text-[#808080] text-[10px] rounded-md px-2.5 py-[5px] transition hover:bg-[#F48023] hover:text-white" to="/etiket">shazam</Link>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-[#808080] text-xs font-sans">
                        <FaEye />
                        125
                    </div>
                    <div className="flex items-center gap-1 text-[#808080] text-xs font-sans">
                        <FaRegCommentAlt />
                        3
                    </div>
                    <div className="flex items-center gap-1 text-[#808080] text-xs font-sans">
                        <FaArrowUpLong />
                        1
                    </div>
                    <div className="flex items-center gap-1 text-[#808080] text-xs font-sans">
                        <FaArrowDownLong />
                        3
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CaptionCard;