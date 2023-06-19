import NavHead from "./NavHead";
import NavList from "./NavList";
import Image from "next/image";

const Navbar = (props) => {
    const dashboardItems = [
        {
            name: "Inbox",
            icon: "/images/home.svg",
        },
        {
            name: "Drive Files",
            icon: "/images/home.svg",
        },
        {
            name: "Boards",
            icon: "/images/home.svg",
        },
        {
            name: "Updates",
            icon: "/images/home.svg",
        },
        {
            name: "Analytics",
            icon: "/images/home.svg",
        },
    ]

    const projectsItems = [
        {
            name: "Additional Calendar",
            icon: "/images/ellipse.svg",
        },
        {
            name: "Brand Logo Design",
            icon: "/images/ellipse.svg",
        },
        {
            name: "User Research",
            icon: "/images/ellipse.svg",
        },
        {
            name: "Marketing Sales",
            icon: "/images/ellipse.svg",
        },
    ]
    return (
        <nav className="border-e border-[#E9EBF0] min-w-[250px]">
            <NavHead navToggle={props.navToggle} setNavToggle={props.setNavToggle} />
            {props.navToggle &&
                <div className="px-8">
                    <NavList list={dashboardItems} />
                    <NavList heading="my projects" list={projectsItems} />
                </div>
            }
            <div className="px-8 hidden lg:block">
                <NavList list={dashboardItems} />
                <NavList heading="my projects" list={projectsItems} />
            </div>
            {props.navToggle &&
                <Image alt="logo" src="/images/message.png" width="250" height="300" className="mx-auto my-8 cursor-pointer " />}
        </nav>
    );
}

export default Navbar;