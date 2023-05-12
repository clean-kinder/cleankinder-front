import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div>
      <Link legacyBehavior href="/map">
        <a className="m-3 header_right_btn">Home Map</a>
      </Link>
      <Link legacyBehavior href="/kinder-list/gangnam-list">
        <a className="m-3 header_right_btn">유치원 리스트</a>
      </Link>
  </div>;
}
