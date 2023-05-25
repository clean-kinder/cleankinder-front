import React, { useState } from "react";
import {
  HamburgerIcon,
  RocketIcon,
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
              <button
                className="px-4 py-2 text-gray-700 rounded-lg rounded-lgtext-2xl hover:bg-gray-200"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <HamburgerIcon class="" />
              </button>
              <div
                className="flex items-center ml-3 text-2xl font-bold text-yellow-500 cursor-pointer"
                onClick={() => router.push("/")}
              >
                우리아이의 유치원
              </div>
            </div>

            <div>
                <div className="flex justify-center">
                    <Link legacyBehavior href="https://data.seoul.go.kr/">
                        <a className="mr-5 hover:text-yellow-500">서울열린데이터광장</a>
                    </Link>

                    <Link legacyBehavior href="https://e-childschoolinfo.moe.go.kr/">
                        <a className="ml-3 mr-6 hover:text-yellow-500">유치원알리미</a>
                    </Link>

                    <Link legacyBehavior href="https://www.sen.go.kr/sen/index.do">
                        <a className="mr-5 hover:text-yellow-500">서울시교육청</a>
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex bg-gray-100">
        <aside
          className={`
                    ${menuToggle ? "hidden md:block" : "hidden"}
                    w-64 ${bgColor}`}
        >
          <div className="p-6">
            <Link
              href="/map"
              className="flex items-center text-xl font-semibold text-black hover:text-gray-700"
            >
              <RocketIcon class="mr-3" />
              서울시 자치구
            </Link>
          </div>

          <nav className="block pt-3 overflow-auto text-base font-semibold">
            <Link
              href="/kinder-list/gn"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>강남구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/gd"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>강동구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/gb"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>강북구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/gs"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>강서구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/ga"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>관악구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/gj"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>광진구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/gr"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>구로구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/gc"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>금천구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/nw"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>노원구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/db"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>도봉구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/dd"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>동대문구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/dj"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>동작구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/mp"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>마포구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/sm"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>서대문구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/sc"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>서초구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/sd"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>성동구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/sb"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>성북구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/sp"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>송파구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/yc"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>양천구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/yd"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>영등포구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/ys"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>용산구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/ep"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>은평구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/jn"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>종로구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/jg"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
             <h2> 중구</h2>
            </Link>
            <hr className="border-1" />
            <Link
              href="/kinder-list/jr"
              className="flex items-center justify-center py-4 pr-3 opacity-75 hover:opacity-100"
            >
              
              <h2>중랑구</h2>
            </Link>
          </nav>
        </aside>

        <div className="flex flex-col w-full">
          <header
            className={`w-full py-5 px-6 ${
              menuToggle ? "hidden" : "block"
            } md:hidden`}
          >
            {/* Dropdown Nav */}
            <nav className="text-base font-semibold text-white bg-gray-500 ">
              {/* <Link
                href="/kinder-list/gangnam-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
                <h2>강남구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href="/kinder-list/gangdong-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
                <h2>강동구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href="/kinder-list/gangbuk-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
                <h2>강북구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href="/kinder-list/gangseo-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
                <h2>강서구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href="/kinder-list/gwanak-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
                <h2>관악구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href="/kinder-list/gwangjin-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
                <h2>광진구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href="/kinder-list/guro-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
                <h2>구로구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href="/kinder-list/geumcheon-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
                <h2>금천구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href="/kinder-list/nowon-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
                <h2>노원구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href="/kinder-list/dobong-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
                <h2>도봉구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href="/kinder-list/dongdaemun-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
                <h2>동대문구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href="/kinder-list/dongjak-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
                <h2>동작구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href=""
                className="flex items-center py-4 opacity-75 hover:opacity-100"
              >
                
                마포구
              </Link>
              <hr className="border-1" />
              <Link
                href=""
                className="flex items-center py-4 opacity-75 hover:opacity-100"
              >
                
                서대문구
              </Link>
              <hr className="border-1" />
              <Link
                href=""
                className="flex items-center py-4 opacity-75 hover:opacity-100"
              >
                
                서초구
              </Link>
              <hr className="border-1" />
              <Link
                href=""
                className="flex items-center py-4 opacity-75 hover:opacity-100"
              >
                
                성동구
              </Link>
              <hr className="border-1" />
              <Link
                href=""
                className="flex items-center py-4 opacity-75 hover:opacity-100"
              >
                
                성북구
              </Link>
              <hr className="border-1" />
              <Link
                href=""
                className="flex items-center py-4 opacity-75 hover:opacity-100"
              >
                
                송파구
              </Link>
              <hr className="border-1" />
              <Link
                href=""
                className="flex items-center py-4 opacity-75 hover:opacity-100"
              >
                
                양천구
              </Link>
              <hr className="border-1" />
              <Link
                href=""
                className="flex items-center py-4 opacity-75 hover:opacity-100"
              >
                
                영등포구
              </Link>
              <hr className="border-1" />
              <Link
                href=""
                className="flex items-center py-4 opacity-75 hover:opacity-100"
              >
                
                용산구
              </Link>
              <hr className="border-1" />
              <Link
                href=""
                className="flex items-center py-4 opacity-75 hover:opacity-100"
              >
                
                은평구
              </Link>
              <hr className="border-1" />
              <Link
                href=""
                className="flex items-center py-4 opacity-75 hover:opacity-100"
              >
                
                종로구
              </Link>
              <hr className="border-1" />
              <Link
                href="/kinder-list/jung-list"
                className="flex items-center justify-center py-4 opacity-75 hover:opacity-100"
              >
                
               <h2> 중구</h2>
              </Link>
              <hr className="border-1" />
              <Link
                href=""
                className="flex items-center py-4 opacity-75 hover:opacity-100"
              >
                
                중랑구 */}
              {/* </Link> */}
            </nav>
          </header>
          <slot>{props.children}</slot>
        </div>
      </main>
    </div>
  );
};

export default SideNavbar;
