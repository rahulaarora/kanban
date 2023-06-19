import Image from "next/image";
import Avatar from "../Common/Avatar";
const MainHeader = () => {
    return (
        <div className="hidden items-center justify-between border-b-[1px] border-[#E9EBF0] px-[36px] py-[21px] xl:flex">
            <div className="flex gap-[32px] ">
                <div className="flex min-w-[400px] justify-between rounded-md bg-[#F5F5F5] p-[12px] drop-shadow-sm"><div className="flex items-center gap-3">
                    <Image alt="icon" src="/images/search-normal.svg" width="20" height="20" />
                    <p className="cursor-pointer text-[14px] font-normal text-[#787486]">Search for anything...</p>
                </div>
                </div>
            </div>


            <div className="flex items-center gap-3">
                <Image alt="Icon" src="/images/calendar-2.svg" width="20" height="20" className="cursor-pointer" />
                <Image alt="Icon" src="/images/calendar-2.svg" width="20" height="20" className="cursor-pointer" />
                <Image alt="Icon" src="/images/calendar-2.svg" width="20" height="20" className="cursor-pointer" />
                <Avatar />
            </div>
        </div>
    );
}

export default MainHeader;