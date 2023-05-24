import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

interface Props {
  width: string;
  height: string;
  ref?: React.RefObject<HTMLDivElement>;
}

interface DistrictData {
  SIG_KOR_NM: string;
  address: string;
}

const SeoulMap = React.forwardRef<HTMLDivElement, Props>(
  function SeoulMap({ width, height }: Props, ref) {
    const mapContainer = useRef<HTMLDivElement>({} as HTMLDivElement);
    const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

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
        zoom: 11,
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
                "성북구", "#d796ff",
                "송파구", "#ffa8cf",
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

          // 클릭 이벤트 처리
          map.on("click", "seoul-layer", (e) => {
            if (e.features && e.features.length > 0) {
              const districtName = e.features?.[0]?.properties?.SIG_KOR_NM;
              const districtAddress = getAddressByDistrictName(districtName); // 주소 정보 가져오기
              if (districtAddress) {
                window.location.href = districtAddress; // 페이지 이동
              }
            }
          });

          // 마우스 포인터 변경 이벤트 처리
          map.on("mousemove", "seoul-layer", (e) => {
            if (e.features && e.features.length > 0) {
              const districtName = e.features[0].properties?.SIG_KOR_NM;
              map.getCanvas().style.cursor = "pointer";

              // SymbolLayer 추가
              if (!map.getLayer("district-label")) {
                map.addLayer({
                  id: "district-label",
                  type: "symbol",
                  source: "seoul",
                  layout: {
                    "text-field": ["get", "SIG_KOR_NM"],
                    "text-size": 18,
                  },
                  paint: {
                    "text-color": "#000000",
                  },
                  filter: ["==", "SIG_KOR_NM", ""], // 초기에는 모든 자치구 레이어 숨김
                });
              }

              // 자치구 이름 업데이트
              map.setFilter("district-label", ["==", "SIG_KOR_NM", districtName]);
            }
          });

          map.on("mouseleave", "seoul-layer", () => {
            map.getCanvas().style.cursor = "";

            // 모든 자치구 레이어 숨김
            map.setFilter("district-label", ["==", "SIG_KOR_NM", ""]);
          });


        })
        .catch((error) => {
          console.error(error)
          });

          return () => map.remove();
        }, []);

        // 주소 정보 가져오기 함수
        const getAddressByDistrictName = (districtName: string): string | undefined => {
          const addressData: DistrictData[] = [
            { SIG_KOR_NM: "강서구", address: "/kinder-list/gn" },
            { SIG_KOR_NM: "강동구", address: "/kinder-list/gd" },
            { SIG_KOR_NM: "강북구", address: "/kinder-list/gb" },
            { SIG_KOR_NM: "강남구", address: "/kinder-list/gn" },
            { SIG_KOR_NM: "관악구", address: "/kinder-list/ga" },
            { SIG_KOR_NM: "광진구", address: "/kinder-list/gj" },
            { SIG_KOR_NM: "구로구", address: "/kinder-list/gr" },
            { SIG_KOR_NM: "금천구", address: "/kinder-list/gc" },
            { SIG_KOR_NM: "노원구", address: "/kinder-list/nw" },
            { SIG_KOR_NM: "도봉구", address: "/kinder-list/db" },
            { SIG_KOR_NM: "동대문구", address: "/kinder-list/dd" },
            { SIG_KOR_NM: "동작구", address: "/kinder-list/dj" },
            { SIG_KOR_NM: "마포구", address: "/kinder-list/mp" },
            { SIG_KOR_NM: "서대문구", address: "/kinder-list/sm" },
            { SIG_KOR_NM: "서초구", address: "/kinder-list/sc" },
            { SIG_KOR_NM: "성동구", address: "/kinder-list/sd" },
            { SIG_KOR_NM: "성북구", address: "/kinder-list/sb" },
            { SIG_KOR_NM: "송파구", address: "/kinder-list/sp" },
            { SIG_KOR_NM: "양천구", address: "/kinder-list/yc" },
            { SIG_KOR_NM: "영등포구", address: "/kinder-list/yd" },
            { SIG_KOR_NM: "용산구", address: "/kinder-list/ys" },
            { SIG_KOR_NM: "은평구", address: "/kinder-list/ep" },
            { SIG_KOR_NM: "종로구", address: "/kinder-list/jn" },
            { SIG_KOR_NM: "중구", address: "/kinder-list/jg" },
            { SIG_KOR_NM: "중랑구", address: "/kinder-list/jr" },
          ];

          const district = addressData.find((item) => item.SIG_KOR_NM === districtName);
          if (district) {
            return district.address;
          }

          return undefined; // 해당 자치구의 주소가 없는 경우 undefined를 반환합니다.
        };

        
        return (
          <div style={{ width, height }} ref={ref}>
            <div ref={mapContainer} style={{ height: "100%" }} />
            {hoveredDistrict && (
              <div style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                background: "rgba(255, 255, 255, 0.8)",
                padding: "5px",
                borderRadius: "3px",
                pointerEvents: "none",
              }}>
                {hoveredDistrict}
              </div>
            )}
          </div>
        );
  }
);

export default SeoulMap;