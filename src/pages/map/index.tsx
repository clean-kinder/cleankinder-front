import SeoulMap from "@/components/SeoulMap";


export default function Map():JSX.Element {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <SeoulMap width="100%" height="100%" />
    </div>
  )
}