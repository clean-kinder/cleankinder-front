import React from "react";
import SideNavbar from "./SideNavbar";

type Props = {
    children: React.ReactNode;
};

export default function SideLayout(props: Props) {
    return (
        <div>
            <SideNavbar>{props.children}</SideNavbar>
        </div>
    )
}