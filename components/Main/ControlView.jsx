import Image from "next/image";
const ControlView = () => {
    return (
        <div className="flex flex-col items-center justify-between gap-3 px-[16px] pb-[28px] md:px-[36px] xl:flex-row">

            <div className="flex w-full flex-wrap items-center xl:justify-between gap-2 xl:w-auto xl:gap-3">
                <div className="flex cursor-pointer items-center gap-2 rounded-lg border-[1px] border-[#787486] p-[8px]">
                    <Image alt="Icon" src="/images/filter.svg" width="12" height="12" />
                    <p className="font-medium text-[#787486]">Filter</p>
                    <Image alt="Icon" src="/images/arrow-down.svg" width="12" height="12" />
                </div>
                <div className="flex cursor-pointer items-center gap-2 rounded-lg border-[1px] border-[#787486] p-[8px]">
                    <Image alt="Icon" src="/images/filter.svg" width="12" height="12" />
                    <p className=" font-medium text-[#787486]">Today</p>
                    <Image alt="Icon" src="/images/arrow-down.svg" width="12" height="12" />
                </div>
            </div>

            <div className="flex gap-2 self-start">
                <div className="flex cursor-pointer items-center gap-2 rounded-lg border-[1px] border-[#787486] p-[8px] h-fit">
                    <Image alt="Icon" src="/images/filter.svg" width="12" height="12" />
                    <p className=" font-medium text-[#787486]">Share</p>
                </div>
                <div className="bg-black border border-[#787486]"></div>
                <div className="rounded-lg bg-[#5030E5] p-2 w-10 h-10 flex items-center justify-center drop-shadow-sm">
                    <Image alt="Icon" src="/images/home.svg" width="20" height="20" className="cursor-pointer text-white" />
                </div>
                <div className="rounded-lg bg-white p-2 w-10 h-10 flex items-center justify-center drop-shadow-sm">
                    <Image alt="Icon" src="/images/home.svg" width="20" height="20" className="cursor-pointer" />
                </div>
            </div>

        </div>
    );
}

export default ControlView;