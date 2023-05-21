import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">

                    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                        <Link legacyBehavior href="/map">
                            <a className="mr-5 hover:text-gray-900">지도 보기</a>
                        </Link>

                        <Link legacyBehavior href="/kinder-list/gn">
                            <a className="mr-5 hover:text-gray-900">유치원 리스트</a>
                        </Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;
