import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import classNames from "classnames";
import { IoCloseOutline, IoPersonAddOutline } from "react-icons/io5";
import Logo from "@/assets/logo.svg";
import { IPublicLayout } from "./index.type";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { GoHash } from "react-icons/go";
import CaptionSection from "@/components/CaptionSection";
import { Button } from "@/components/Button";
import { FiHome } from "react-icons/fi";
import HashtagSection from "@/components/HashtagSection";

export default function PublicLayout({ children }: IPublicLayout) {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [hashtagMenuOpen, setHashtagMenuOpen] = useState(false);
    const { login } = useAppSelector(state => state.app);
    const location = useLocation();

    const prevLocationRef = useRef<string | null>(null);
    const [shouldMenuClose, setShouldMenuClose] = useState(false);

    useEffect(() => {
        if (prevLocationRef.current && prevLocationRef.current !== location.pathname && menuOpen) {
            setShouldMenuClose(true);
        }
        prevLocationRef.current = location.pathname;
      }, [location,menuOpen]);
    
      useEffect(() => {
        if (shouldMenuClose) {
          toggleMenu();
          setShouldMenuClose(false);
        }
      }, [shouldMenuClose]);

    useEffect(() => {
        if (login) {
            navigate("/");
        }
    }, [login])


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleHashtagMenu = () => {
        setHashtagMenuOpen(!hashtagMenuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menuOpen]);

    useEffect(() => {
        if (hashtagMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [hashtagMenuOpen]);

    return (
        <main>
            <header className="fixed bg-white top-0 z-50 left-0 right-0 bottom-0 h-[84px] px-8 py-4 border-b border-[#EAEAEA] shadow-md flex items-center justify-between">
                <Link to="/" className="flex items-center gap-4">
                    <img src={Logo} alt="logo" width={25} height={30} />
                    <p>
                        BAK<span className="font-semibold">soft</span>
                    </p>
                </Link>
                <div className="hidden max-sm:flex items-center gap-4">
                    <button onClick={toggleMenu} className="text-xl">
                        <HiOutlineMenu />
                    </button>
                </div>
                <div className="flex items-center gap-4 max-sm:hidden">
                    <Button
                        onClick={() => navigate("/kayit-ol")}
                        buttonText="Kayıt Ol"
                        prefixIcon={{
                            icon: IoPersonAddOutline,
                            color: "#FFF"
                        }}
                    />
                    <Button
                        onClick={() => navigate("/giris-yap")}
                        buttonText="Giriş"
                        variant="secondary"
                    />
                </div>
            </header>
            <div className={classNames("fixed inset-0 z-[60] transition-all transform ", {
                "translate-x-0": menuOpen,
                "translate-x-full": !menuOpen,
            })}>
                <div
                    className={classNames(
                        "absolute inset-0 bg-black transition-opacity duration-300", {
                        "opacity-50": menuOpen,
                        "opacity-0": !menuOpen,
                    })}
                    onClick={toggleMenu} />
                <div className={classNames(
                    "absolute top-0 right-0 h-full w-full bg-white shadow-md z-[60] transition-transform transform", {
                    "translate-x-0": menuOpen,
                    "translate-x-full": !menuOpen,
                })}>
                    <div className="flex flex-col gap-4 p-4 h-full overflow-y-auto">
                        <button onClick={toggleMenu} className="self-end mb-4">
                            <IoCloseOutline size={24} />
                        </button>
                        {<CaptionSection />}
                    </div>
                </div>
            </div>
            <div className={classNames("fixed inset-0 z-[60] transition-all transform ", {
                "translate-x-0": hashtagMenuOpen,
                "translate-x-full": !hashtagMenuOpen,
            })}>
                <div
                    className={classNames(
                        "absolute inset-0 bg-black transition-opacity duration-300", {
                        "opacity-50": hashtagMenuOpen,
                        "opacity-0": !hashtagMenuOpen,
                    })}
                    onClick={toggleHashtagMenu} />
                <div className={classNames(
                    "absolute top-0 right-0 h-full w-4/5 bg-white shadow-md z-[60] transition-transform transform", {
                    "translate-x-0": hashtagMenuOpen,
                    "translate-x-full": !hashtagMenuOpen,
                })}>
                    <div className="flex flex-col gap-4 p-4 h-full overflow-y-auto">
                        <button onClick={toggleHashtagMenu} className="self-end mb-4">
                            <IoCloseOutline size={24} />
                        </button>
                        {<HashtagSection />}
                    </div>
                </div>
            </div>
            {children}
            <div className="md:hidden fixed bottom-0 left-0 right-0  flex items-center gap-4 justify-around bg-white/95 w-full shadow-lg p-4 border-t border-[#eee]">
                <Link to="/" className="flex flex-col items-center justify-center gap-1 text-[#F48023]">
                    <FiHome />
                    <span className="text-xs">Anasayfa</span>
                </Link>
                <button type="button" onClick={toggleHashtagMenu} className="flex flex-col items-center justify-center gap-1 text-[#F48023]">
                    <GoHash />
                    <span className="text-xs">Etiketler</span>
                </button>
                <Link to="/kayit-ol" className="flex flex-col items-center justify-center gap-1 text-[#F48023]">
                    <FaUserPlus />
                    <span className="text-xs">Kayıt Ol</span>
                </Link>
                <Link to="/giris-yap" className="flex flex-col items-center justify-center gap-1 text-[#F48023]">
                    <FaUserCircle />
                    <span className="text-xs">Giriş Yap</span>
                </Link>

            </div>
        </main>
    )

}