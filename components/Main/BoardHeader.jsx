import Image from "next/image";
import ProfilesGroup from "../Common/ProfilesGroup";
const BoardHeader = () => {
    return (
        <div className="flex flex-col items-center justify-between gap-2 px-[16px] py-[28px] md:px-[36px] xl:flex-row">
            <div className="flex items-center gap-2">
                <p className="text-3xl font-semibold text-[#1F2633]">Mobile App</p>
                <Image alt="arrow" src="/images/arrow-square-up.svg" width="30" height="30" className="cursor-pointer" />
                <Image alt="arrow" src="/images/arrow-square-up.svg" width="30" height="30" className="cursor-pointer" />
            </div>


            <div className="mt-2 flex items-center gap-2">
                <Image alt="Icon" src="/images/arrow-square-up.svg" width="20" height="20" className="cursor-pointer" />
                <p className="text-[#5030E5] font-medium">Invite</p>
                <ProfilesGroup dim={38} />
            </div>

        </div>
    );
}

export default BoardHeader;