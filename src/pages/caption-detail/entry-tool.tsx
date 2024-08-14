import { MdOutlineArticle } from "react-icons/md";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { GoMention } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
import { RiHashtag } from "react-icons/ri";
import { MdOutlinePostAdd } from "react-icons/md";
import { MdAddLink } from "react-icons/md";
import { Button } from "@/components/Button";
import { BsSendPlus } from "react-icons/bs";
import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";
import { Caption } from "@/common/types";
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setEntry } from "@/features/entry";
import { FaTrashAlt } from "react-icons/fa";


interface IEntryTool {
    caption?: Caption
}

export default function EntryTool(props: IEntryTool) {
    const dispatch = useAppDispatch();
    const { entry } = useAppSelector(state => state.entry)
    const { caption } = props;
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);


    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        fileInputRef?.current?.click();
    };


    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];


        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);

            const formData = new FormData();
            formData.append('type', 'entry')
            formData.append('file', file);

            setIsUploading(true);

            try {
                const token = '2|5e2mLxYBJLsdpIq1j9M8gxS9KB2Wn5ZVj8yKI34D6aa4db8d'; // Bearer token'ınızı buraya ekleyin
                const result = await axios.post('http://127.0.0.1:8000/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`, // Bearer token başlığı ekleniyor
                    },
                    onUploadProgress: (progressEvent) => {
                        const percent = Math.round((progressEvent.loaded / progressEvent.total!) * 100);
                        setUploadProgress(percent);
                    },
                });

                dispatch(setEntry({
                    key: "images",
                    value: result.data.file.path
                }))

                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                setImagePreview(null);
                setUploadProgress(0);
                setIsUploading(false);
            } catch (error: any) {
                toast.error(error?.response?.data?.message || 'Dosya yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
                console.error('Error uploading file:', error);
                setUploadProgress(0);
                setIsUploading(false);
            }
        }
    };

    const handleImageRemove = async (name: string) => {
        let nameToArray = name.split("/");
        let imageName = `${nameToArray[nameToArray.length - 3]}/${nameToArray[nameToArray.length - 2]}/${nameToArray[nameToArray.length - 1]}`;

        try {
            const token = '2|5e2mLxYBJLsdpIq1j9M8gxS9KB2Wn5ZVj8yKI34D6aa4db8d';
            const result = await axios.delete('http://127.0.0.1:8000/api/upload', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                data: {
                    name: imageName
                }
            });

            console.log(result.data);


        } catch (error: any) {
            toast.error(error?.response?.data?.message || 'Dosya yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
            console.error('Error uploading file:', error);
        }
    }

    return (
        <section className="w-[305px] fixed h-[calc(100vh-84px)] right-0 bottom-0 shrink-0 bg-white shadow-md pt-4 hidden  lg:flex lg:flex-col">
            <div className="px-4 flex gap-4 items-start border-b border-[#EAEAEA] pb-3">
                <MdOutlineArticle size={24} className="fill-[#79747E]" />
                <p className="text-sm text-[#79747E]">{caption?.name}</p>
            </div>
            <div className="flex flex-col gap-4 p-4">
                <p className="text-sm border-b pb-1 text-[#F48023]">Görseller</p>
                <div className="grid  grid-cols-3 gap-4 items-center">
                    {entry?.images?.map((item, key) => (
                        <div className="relative w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center border " key={key}>
                            <button onClick={() => handleImageRemove(item)} type="button" className="absolute -top-2 -right-2 text-white p-2 bg-[#F48023] hover:bg-[#F48023]/80 rounded-full" >
                                <FaTrashAlt size={14} />
                            </button>
                            <img src={item} alt="" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>


                {isUploading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80">
                        <div className="w-64 h-64 bg-gray-300 rounded-lg flex items-center justify-center relative">
                            {imagePreview ? (
                                <img src={imagePreview as string} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                            ) : (
                                <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg flex items-center justify-center text-gray-500">
                                    Yükleniyor...
                                </div>
                            )}
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg"
                                style={{ opacity: uploadProgress === 100 ? 0 : 1 }}>
                                <div className="w-16 h-16 border border-dashed border-gray-400 rounded-lg"></div>
                            </div>
                        </div>
                        <div className="w-64 mt-4 px-1.5 py-2.5 bg-gray-200 rounded-full h-2.5 relative">
                            <div
                                className="absolute top-0 left-0 h-full bg-[#F48023] rounded-full"
                                style={{ width: `${uploadProgress}%`, transition: 'width 0.3s ease' }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                                {uploadProgress}%
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-auto border-t border-[#D9D9D9] w-full">
                <div className="border-b border-[#D9D9D9] flex gap-4 px-4 py-3">
                    <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
                    <button type="button" onClick={handleButtonClick} className="group p-1.5 transition-all shadow-inner shadow-white/10 rounded-full hover:bg-[#F48023]">
                        <MdOutlineAddAPhoto className="group-hover:text-white" size={18} />
                    </button>
                    <button type="button" className="group p-1.5 transition-all shadow-inner shadow-white/10 rounded-full hover:bg-[#F48023]">
                        <GoMention className="group-hover:text-white" size={18} />
                    </button>
                    <button type="button" className="group p-1.5 transition-all shadow-inner shadow-white/10 rounded-full hover:bg-[#F48023]">
                        <FaYoutube className="group-hover:text-white" size={18} />
                    </button>
                    <button type="button" className="group p-1.5 transition-all shadow-inner shadow-white/10 rounded-full hover:bg-[#F48023]">
                        <RiHashtag className="group-hover:text-white" size={18} />
                    </button>
                    <button type="button" className="group p-1.5 transition-all shadow-inner shadow-white/10 rounded-full hover:bg-[#F48023]">
                        <MdOutlinePostAdd className="group-hover:text-white" size={18} />
                    </button>
                    <button type="button" className="group p-1.5 transition-all shadow-inner shadow-white/10 rounded-full hover:bg-[#F48023]">
                        <MdAddLink className="group-hover:text-white" size={18} />
                    </button>
                </div>
                <textarea rows={4} className="w-full outline-none p-1.5" placeholder={`"superman shazam the return of black adam" başlığına entry giriniz...`}></textarea>
                <Button buttonText="Entry Oluştur" className="w-full rounded-none" suffixIcon={{ icon: BsSendPlus, size: 18 }} />
            </div>
        </section>
    )
}