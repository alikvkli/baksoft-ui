import { useState, useEffect } from "react";
import Logo from "@/assets/logo.svg";
import { IoPersonAddOutline } from "react-icons/io5";
import Login_Image from "@/assets/login-illustrator.svg";
import Apple from "@/assets/apple.svg";
import Facebook from "@/assets/Facebook.svg";
import Google from "@/assets/google.svg";
import { Input } from "@/components/Input";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import classNames from "classnames";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "@/components/Button";

export default function Login() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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

  return (
    <main>
      <header className="sticky bg-white top-0 z-20 h-[84px] px-8 py-4 border-b border-[#EAEAEA] shadow-md flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="logo" width={25} height={30} />
          <p>
            BAK<span className="font-semibold">soft</span>
          </p>
        </div>
        <div className="hidden max-sm:flex items-center gap-4">
          <button onClick={toggleMenu} className="text-xl">
            <HiOutlineMenu />
          </button>
        </div>
        <div className="flex items-center gap-4 max-sm:hidden">
          <Button
            buttonName="Kayıt Ol"
            icon={IoPersonAddOutline}
            iconSize={13}
            iconColor="#FFFFFF"
            iconLocation="right"
          />
          <Button
            buttonName="Giriş"
            variant="secondary"
            className="rounded-full"
          />
        </div>
      </header>
      <div
        className={classNames("fixed inset-0 z-30 transition-all transform ", {
          "translate-x-0": menuOpen,
          "translate-x-full": !menuOpen,
        })}
      >
        <div
          className={classNames(
            "absolute inset-0 bg-black transition-opacity duration-300",
            {
              "opacity-50": menuOpen,
              "opacity-0": !menuOpen,
            }
          )}
          onClick={toggleMenu}
        ></div>
        <div
          className={classNames(
            "absolute top-0 right-0 h-full w-3/4 bg-white shadow-md z-40 transition-transform transform",
            {
              "translate-x-0": menuOpen,
              "translate-x-full": !menuOpen,
            }
          )}
        >
          <div className="flex flex-col p-4">
            <button onClick={toggleMenu} className="self-end mb-4">
              <IoCloseOutline size={24} />
            </button>
            <button className="w-full h-[38px] bg-[#F48023] rounded-md text-xs font-bold text-white py-3 px-5 flex items-center justify-center gap-4 hover:bg-[#F48023]/80">
              <IoPersonAddOutline size={13} /> Kayıt Ol
            </button>
            <button className="w-full h-[38px] bg-[#EAEAEA] rounded-md text-xs font-bold text-[#1682FD] py-3 px-5 flex items-center justify-center gap-4 hover:bg-[#EAEAEA]/80 mt-2">
              Giriş
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-screen justify-between">
        <div className="flex flex-col justify-center shrink-0 items-center w-[40%] max-lg:w-full  max-sm:h-fit max-md:px-4 pt-4">
          <div className="flex flex-col justify-center w-[380px] max-sm:w-full gap-4">
            <p className="font-bold text-2xl">Giriş Yap</p>

            <Input placeholder="Kullanıcı adı" id="username" type="text" />
            <Input placeholder="Şifre" id="password" type="password" />

            <Link
              className="font-normal text-xs text-[#808080] flex justify-end pr-2"
              to="/sifremi-unuttum"
            >
              Şifremi unuttum
            </Link>

            <button className="bg-[#F48023] min-h-10 w-full text-white rounded-md">
              Giriş
            </button>
            <div className="w-full border-[1px] bg-[#EAEAEA]" />
            <div className="flex justify-center items-center gap-4 pt-4">
              <img src={Facebook} alt="Facebook" width={42} height={42} />
              <img src={Apple} alt="Apple" width={42} height={42} />
              <img src={Google} alt="Google" width={42} height={42} />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-orange-300 to-orange-500  w-[60%] max-lg:hidden  flex items-center justify-center">
          <img src={Login_Image} alt="Login_Image" width={632} height={632} />
        </div>
      </div>
    </main>
  );
}
