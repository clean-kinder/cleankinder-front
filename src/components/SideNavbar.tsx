import React, { useState } from "react";
import {
    SmileIcon,
    ClossIcon,
    HamburgerIcon,
    ProfileIcon,
    SettingsIcon,
    SignoutIcon,
    RocketIcon,
    DashboardIcon,
    TablesIcon,
    FormsIcon,
    TabbedContentIcon,
    CalendarIcon,
    SupportIcon,
} from "./Icons";
import router from "next/router";
import Link from "next/link";

type Props = {
    children: React.ReactNode;
};

const SideNavbar = (props: Props) => {
    const bgColor: string = "bg-yellow-100";
    const [menuToggle, setMenuToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);

    return (
        <div>
            <nav className="bg-white">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* <div>왼쪽</div>
                        <div>왼쪽</div> */}
                        <div className="flex items-center justify-center sm:items-stretch sm:justify-center">
                            <button className="px-4 py-2 text-gray-700 rounded-lg rounded-lgtext-2xl hover:bg-gray-200"
                                onClick={() => setMenuToggle(!menuToggle)}
                            >
                                <HamburgerIcon class="" />
                            </button>
                            <div
                                className="flex items-center ml-3 text-2xl font-bold cursor-pointer"
                                onClick={() => router.push('/')}
                                >
                                    Home
                            </div>
                        </div>

                        <div>
                            <div>
                                <button 
                                    type="button" 
                                    className="flex text-sm text-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    id="profileBtn"
                                    onClick={() => {
                                        setProfileToggle(!profileToggle);
                                    }}
                                >
                                    <ProfileIcon class={""}/>
                                </button>
                            </div>

                            <div
                            className={` ${
                                profileToggle ? "" : "hidden"
                            } origin-top-right absolute right-0 mt-2 w-48
                                rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5
                                focus:outline-none cursor-pointer`}
                            >
                                <a
                                href="#"
                                className="flex items-center px-4 py-2 text-sm text-gray-700"
                                >
                                    <ProfileIcon class="mr-2" />
                                    Your Profile
                                </a>
                                <a 
                                href="#"
                                className="flex items-center px-4 py-2 text-sm text-gray-700" 
                                >
                                    <SettingsIcon class="mr-2" />
                                    Settings
                                </a>
                                <a 
                                href="#"
                                className="flex items-center px-4 py-2 text-sm text-gray-700" 
                                >
                                    <SignoutIcon class="mr-2" />
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>

            <main className="flex bg-gray-100">
                <aside className={`
                    ${menuToggle ? "hidden md:block" : "hidden"}
                    w-64 ${bgColor}`}>
                    
                    <div className="p-6">
                        <Link href="/map" className="flex items-center text-xl font-semibold text-black hover:text-gray-300">
                            <RocketIcon class="mr-3" />
                            서울시 자치구
                        </Link>
                    </div>
                    
                    <nav className="block pt-3 overflow-auto text-base font-semibold">
                        <Link
                            href="/kinder-list/gangnam-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            강남구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/gangdong-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            강동구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/gangbuk-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            강북구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/gangseo-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            강서구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/gwanak-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            관악구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/gwangjin-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            광진구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/guro-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            구로구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/geumcheon-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            금천구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/nowon-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            노원구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/dobong-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            도봉구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/dongdaemun-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            동대문구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/dongjak-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            동작구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/mapo-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            마포구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/seodaemun-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            서대문구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/seocho-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            서초구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/seongdong-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            성동구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/seongbuk-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            성북구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/songpa-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            송파구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/yangcheon-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            양천구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/yeongdeungpo-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            영등포구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/yongsan-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            용산구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/eunpyeong-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            은평구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/jongno-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            종로구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/jung-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            중구
                        </Link>
                        <hr className="border-1" />
                        <Link
                            href="/kinder-list/jungnang-list"
                            className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                            >
                            <SmileIcon class="mr-3" />
                            중랑구
                        </Link>
                    </nav>

                </aside>

                <div className="flex flex-col w-full h-screen overflow-y-hidden">
                    <header
                        className={`w-full py-5 px-6 ${
                        menuToggle ? "hidden" : "block"
                        } md:hidden`}
                    >
                        {/* Dropdown Nav */}
                        <nav className="text-base font-semibold text-white bg-gray-500 ">
                            <Link href="/kinder-list/gangnam-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                강남구
                            </Link>
                            <hr className="border-1" />
                            <Link 
                                href="/kinder-list/gangdong-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                강동구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href="/kinder-list/gangbuk-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                강북구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href="/kinder-list/gangseo-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                강서구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href="/kinder-list/gwanak-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                관악구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href="/kinder-list/gwangjin-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                광진구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href="/kinder-list/guro-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                구로구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href="/kinder-list/geumcheon-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                금천구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href="/kinder-list/nowon-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                노원구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href="/kinder-list/dobong-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                도봉구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href="/kinder-list/dongdaemun-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                동대문구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href="/kinder-list/dongjak-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                동작구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href=""
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                마포구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href=""
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                서대문구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href=""
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                서초구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href=""
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                성동구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href=""
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                성북구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href=""
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                송파구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href=""
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                양천구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href=""
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                영등포구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href=""
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                용산구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href=""
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                은평구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href=""
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                종로구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href="/kinder-list/jung-list"
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                중구
                            </Link>
                            <hr className="border-1" />
                            <Link
                                href=""
                                className="flex items-center py-4 pl-6 opacity-75 hover:opacity-100"
                                >
                                <SmileIcon class="mr-3" />
                                중랑구
                            </Link>
                        </nav>
                    </header>
                    <slot>{props.children}</slot>
                </div>
            </main>
        </div>
    );
};

export default SideNavbar;