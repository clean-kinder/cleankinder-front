import React, { ReactNode } from "react";
import HomeHeader from './HomeHeader';

interface HomeLayoutProps {
    children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    return (
        <div>
            {/* <HomeHeader /> */}
            <div>{children}</div>
        </div>
    );
}

export default HomeLayout;
