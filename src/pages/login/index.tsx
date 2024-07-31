import Logo from "@/assets/logo.svg";
import { IoPersonAddOutline } from "react-icons/io5";
import Login_Image from "@/assets/login-illustrator.svg";
import Apple from "@/assets/apple.svg";
import Facebook from "@/assets/Facebook.svg";
import Google from "@/assets/google.svg";
import { FaCheck } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
export default function Login() {
  return (
    <main>
      <header className="h-[84px] px-8 py-4 border-b border-[#EAEAEA] shadow-md flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="logo" width={25} height={30} />
          <p>
            BAK<span className="font-semibold">soft</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-28 h-[38px] bg-[#F48023] rounded-md text-xs font-bold text-white py-3 px-5 flex items-center justify-center gap-4 hover:bg-[#F48023]/80">
            <IoPersonAddOutline size={13} /> Kayıt Ol
          </button>
          <button className="h-[38px] bg-[#EAEAEA] rounded-md text-xs font-bold text-[#1682FD] py-3 px-5 flex items-center justify-center gap-4 hover:bg-[#EAEAEA]/80">
            Giriş
          </button>
        </div>
      </header>
      <div className="flex h-screen justify-between">
        <div className="flex flex-col justify-center items-center w-[40%]">
          <div className="flex flex-col justify-center w-[380px] gap-4">
            <p className="font-bold text-2xl">Giriş Yap</p>
            <div className="relative w-full">
              <input
                type="text"
                placeholder=""
                id="user_name"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full min-h-11 text-sm bg-gray-50  border-[1px] border-[#EAEAEA] appearance-none focus:outline-none focus:ring-0 focus:border-[#F48023] peer"
              />
              <label
                htmlFor="user_name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#808080] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                kullanıcı adı
              </label>
              <FaCheck
                size={13}
                color="#17A100"
                className="absolute right-4 top-1/2 -translate-y-1/2 "
              />
            </div>
            <div className="relative w-full">
              <input
                type="password"
                placeholder=""
                id="password"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full min-h-11 text-sm bg-gray-50  border-[1px] border-[#EAEAEA] appearance-none focus:outline-none focus:ring-0 focus:border-[#F48023] peer"
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#808080] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Şifre
              </label>
              <GiCancel
                size={13}
                color="#FF0000"
                className="absolute right-4 top-1/2 -translate-y-1/2"
              />
            </div>
            <label className="font-normal text-xs text-[#808080] flex justify-end pr-2">
              Şifremi unuttum
            </label>
            <button className="bg-[#F48023] min-h-10 w-full text-white rounded-md">
              Giriş
            </button>
            <div className="w-full border-[1px] bg-[#EAEAEA]"/>
            <div className="flex justify-center items-center gap-4 pt-4">
              <img src={Facebook} alt="Facebook" width={42} height={42} />
              <img src={Apple} alt="Apple" width={42} height={42} />
              <img src={Google} alt="Google" width={42} height={42} />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-orange-300 to-orange-500  w-[60%] flex items-center justify-center">
          <img src={Login_Image} alt="Login_Image" width={632} height={632} />
        </div>
      </div>
    </main>
  );
}
