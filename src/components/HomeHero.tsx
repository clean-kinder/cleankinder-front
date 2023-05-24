import Link from 'next/link';
import Animation from './animation'

export default function HomeHero() {
    return (
        <div>
            <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
                <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
                안녕하세요.<br /> 서울시 내 모든 유치원 위생환경을 색깔로 한 눈에 확인할 수 있는 <br />'<b className='text-yellow-500'>우리아이의 유치원</b>'  <br />입니다.
                <br className="hidden lg:inline-block" />
                </h1>
                
                <div className="flex justify-center">
                    <Link legacyBehavior href="/map">
                        <a className="ml-3 mr-5 hover:text-yellow-500">지도 보기</a>
                    </Link>

                    <Link legacyBehavior href="/kinder-list/gn">
                        <a className="mr-5 hover:text-yellow-500">유치원 리스트</a>
                    </Link>
                </div>

            </div>
            {/* <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2"> */}
            <div className="w-4/6 ml-10">
                <Animation />
            </div>
        </div>
    )

}