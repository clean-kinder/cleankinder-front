import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

interface Props {
  width: string;
  height: string;
  ref?: React.RefObject<HTMLDivElement>;
}

const SeoulMap = React.forwardRef<HTMLDivElement, Props>(
  function SeoulMap({ width, height }: Props, ref) {
    const mapContainer = useRef<HTMLDivElement>(null);
    useEffect(() => {
      mapboxgl.accessToken = "pk.eyJ1IjoiZW1wdHloZWFkIiwiYSI6ImNsaDdyZWgwcjAxZDIza2xvYWFpNWJqb3MifQ.a6Z-GofqDk1-4NYTGx6FbQ";
      // mapboxgl.accessToken = process.env.MAPBOX_TOKEN ?? "";

      if (!mapContainer.current) {
        return;
      }

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [126.977977, 37.566535],
        zoom: 10,
      });

      fetch(
        "https://raw.githubusercontent.com/cubensys/Korea_District/master/3_%EC%84%9C%EC%9A%B8%EC%8B%9C_%EC%9E%90%EC%B9%98%EA%B5%AC/%EC%84%9C%EC%9A%B8_%EC%9E%90%EC%B9%98%EA%B5%AC_%EA%B2%BD%EA%B3%84_2017.geojson"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch seoul data");
          }

          return response.json();
        })
        .then((data) => {
          map.addSource("seoul", {
            type: "geojson",
            data,
          });

          map.addLayer({
            id: "seoul-layer",
            type: "fill",
            source: "seoul",
            paint: {
              "fill-color": [
                "match",
                ["get", "SIG_KOR_NM"],
                "강서구", "#e31a1c",
                "강동구", "#1f78b4",
                "강북구", "#33a02c",
                "강남구", "#6a3d9a",
                "관악구", "#b15928",
                "광진구", "#a6cee3",
                "구로구", "#fb9a99",
                "금천구", "#fdbf6f",
                "노원구", "#ff7f00",
                "도봉구", "#cab2d6",
                "동대문구", "#6b3d61",
                "동작구", "#ffff99",
                "마포구", "#b2df8a",
                "서대문구", "#33a02c",
                "서초구", "#fb9a99",
                "성동구", "#fdbf6f",
                "성북구", "#ff7f00",
                "송파구", "#a6cee3",
                "양천구", "#1f78b4",
                "영등포구", "#b15928",
                "용산구", "#e31a1c",
                "은평구", "#6a3d9a",
                "종로구", "#b2df8a",
                "중구", "#ffff99",
                "중랑구", "#6b3d61",
                "#808080"
              ],
              "fill-opacity": 0.5
            },
          });
        })
        .catch((error) => {
          console.error(error)
          });

          return () => map.remove();
        }, []);
        
        return (
          <div style={{ width, height }} ref={ref}>
            <div ref={mapContainer} style={{ height: "100%" }} />
          </div>
        );
  }
);

export default SeoulMap;