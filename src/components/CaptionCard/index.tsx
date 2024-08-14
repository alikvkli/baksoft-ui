import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import { LuClipboardEdit } from "react-icons/lu";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { ICaptionCard } from './type';
import { FiShare } from "react-icons/fi";


const CaptionCard: FC<ICaptionCard> = (props) => {
    const { entry, user, caption, hide } = props;

    return (
        <aside className="w-full bg-white rounded-md shadow-md flex">
            <div className="bg-[#f6f7f8] max-h-full p-2.5 flex flex-col items-center justify-center gap-4 ">
                <button type="button" className="relative group p-1.5 transition rounded-full hover:bg-[#F48023] hover:text-white">
                    <FaArrowUpLong size={18} />
                </button>
                <button type="button" className="p-1.5 transition rounded-full hover:bg-[#F48023] hover:text-white">
                    <FaRegCommentAlt size={17} />
                </button>
                <button type="button" className="p-1.5 transition rounded-full hover:bg-[#F48023] hover:text-white">
                    <FaArrowDownLong size={18} />
                </button>
                <button type="button" className="p-1.5 transition rounded-full hover:bg-[#F48023] hover:text-white">
                    <FiShare size={18} />
                </button>
            </div>

            <div className="w-full flex flex-col p-4">
                <div className="flex items-center justify-between mb-4">

                    <div className="flex items-center gap-4">
                        <Link className="bg-[#EAEAEA] text-[#808080] text-[10px] rounded-md px-2.5 py-[5px] transition hover:bg-[#F48023] hover:text-white" to="/etiket">superman</Link>
                        <Link className="bg-[#EAEAEA] text-[#808080] text-[10px] rounded-md px-2.5 py-[5px] transition hover:bg-[#F48023] hover:text-white" to="/etiket">shazam</Link>
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
                {!hide?.captionName && <Link to={`/${caption.slug}--${caption.caption_id}`} className="font-sans font-semibold">{caption.name}</Link>}

                <p className="text-sm font-thin my-4">{entry.content}</p>

                <div className="mt-auto flex items-center justify-between border-t pt-2.5">
                    <div className='flex items-center gap-4'>
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
                    <Link to={`/profil/${user.username}`} className="flex items-center gap-4 text-[#808080] text-right text-sm">
                        <div className='flex flex-col'>
                            <span className='text-sm text-[#F48023]'>{user.username}</span>
                            <span className='text-xs'>{entry.created_at}</span>
                        </div>
                        <img className="rounded-full" width={40} height={40}
                            src={user.avatar} alt={user.username} />
                    </Link>

                </div>
            </div>


        </aside>
    )
}

export default CaptionCard;