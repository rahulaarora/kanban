import Image from "next/image";
const NavItem = ({ name, count, icon }) => {
    return (
        <div className="flex cursor-pointer items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                {icon == "/images/ellipse.svg" ? <div className="w-[5px] h-[5px] rounded-full bg-[#5030E5]"></div> : <Image alt="Icon" src={icon} width="20" height="20" />}

                <p className="text-[12px] font-medium">{name}</p>
            </div>
        </div>
    );
}

export default NavItem;