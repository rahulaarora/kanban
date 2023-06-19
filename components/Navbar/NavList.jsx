import Image from "next/image";
import NavItem from "./NavItem";
const NavList = (props) => {
    return (
        <div className="border-b-[1px] border-[#E9EBF0] py-8">
            {props.heading &&
                <div className="mb-7 flex items-center justify-between">
                    <p className="text-[12px] font-bold text-[#787486] uppercase">{props.heading}</p>
                    <Image alt="Icon" src="/images/add-square.svg" width="16" height="16" className="cursor-pointer" />
                </div>
            }
            <div className="flex flex-col gap-5 mb-">
                {
                    props.list.map((item, index) => (
                        <NavItem key={index} name={item.name} count={item.count} icon={item.icon} />
                    ))
                }
            </div>
        </div>
    );
}

export default NavList;