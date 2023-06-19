import Image from "next/image";
const Avatar = () => {
    return (
        <div className="ml-10 flex items-center">
            <div className="flex flex-col items-end mr-4">
                <div className="text-base">Anima Agrawal</div>
                <div className="text-sm font-normal text-[#787486]">U.P, India</div>
            </div>
            <div>
                <Image alt="Avatar" src={"/images/avatar.png"} width="38" height="38" className="cursor-pointer rounded-full" />
            </div>
            <div>
                <Image alt="Icon" src="/images/arrow-down.svg" width="16" height="16" className="ml-4 cursor-pointer" />
            </div>
        </div>
    );
}

export default Avatar;