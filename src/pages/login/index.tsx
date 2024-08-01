import Logo from "@/assets/logo.svg";
import { IoPersonAddOutline } from "react-icons/io5";
import Login_Image from "@/assets/login-illustrator.svg";
import Apple from "@/assets/apple.svg";
import Facebook from "@/assets/Facebook.svg";
import Google from "@/assets/google.svg";
import { FaCheck } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { Input } from "@/components/Input";
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

            <Input placeholder="Kullanıcı adı" id="username" type="text" icon={FaCheck} iconColor="#17A100" />
            <Input placeholder="Şifre" id="password" type="password" icon={GiCancel} iconColor="#FF0000" />

            <label className="font-normal text-xs text-[#808080] flex justify-end pr-2">
              Şifremi unuttum
            </label>
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
        <div className="bg-gradient-to-b from-orange-300 to-orange-500  w-[60%] flex items-center justify-center">
          <img src={Login_Image} alt="Login_Image" width={632} height={632} />
        </div>
      </div>
    </main>
  );
}
