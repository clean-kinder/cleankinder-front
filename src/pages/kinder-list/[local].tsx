import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getLocalName } from "./../../utils/localUtils";
import Modal from "../../components/Modal";
import { LoadScript } from '@react-google-maps/api';

type KinderInfo = {
  KINDERNAME: string;
  ADDR: string;
  ARQL_CHK_DT: string;
  ARQL_CHK_RSLT_TP_CD: string;
  FXTM_DSNF_CHK_RSLT_TP_CD: string;
  FXTM_DSNF_CHK_DT: string;
  MDST_CHK_DT: string;
  ESTB_PT: string;
  ILMN_CHK_DT: string;
  TP_01: string;
  TP_02: string;
  TP_03: string;
};

type SeoulDataResponse = {
  [key: string]: {
    list_total_count: number;
    RESULT: {
      CODE: string;
      MESSAGE: string;
    };
    row: KinderInfo[];
  };
};

const KinderList = () => {
  const [data, setData] = useState<SeoulDataResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { local } = router.query;

  const [isOpen, setIsOpen] = useState(false);

  const [selectedKinder, setSelectedKinder] = useState<KinderInfo | null>(null);

  const handleClick = (kinder: KinderInfo) => {
    setSelectedKinder(kinder);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (local) {
      fetchData(local as string);
    }
  }, [local]);

  const fetchData = async (local: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/${local}`);
      console.log("Success!");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyDUbTCj82I9-YfIb1OB8WO0lZzCYv5lugo"
    >
    <div className="h-full overflow-y-auto">
      <h1>{getLocalName(local as string)}</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        data &&
        data[`childSchoolHygiene_${local}`] &&
        data[`childSchoolHygiene_${local}`].row && (
          <ul className="grid grid-cols-3 grid-auto-rows-auto gap-16">
            {data[`childSchoolHygiene_${local}`].row.map((kinder, index) => (
              <li key={index} className="border p-4" onClick={() => handleClick(kinder)}>
                {isOpen && selectedKinder === kinder && (
                  <div style={{
                    position: 'fixed',
                    zIndex: 1,
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'auto',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    animation: 'slide-in 0.5s forwards'
                  }}>
                    <div style={{
                      marginTop: '64px'
                    }}>
                      <Modal 
                        address={kinder.ADDR}
                        kinderName={kinder.KINDERNAME}
                        kinderType={kinder.ESTB_PT}
                        airDay={kinder.ARQL_CHK_DT}
                        airResult={kinder.ARQL_CHK_RSLT_TP_CD}
                        washDay={kinder.FXTM_DSNF_CHK_DT}
                        washResult={kinder.FXTM_DSNF_CHK_RSLT_TP_CD}
                        jodoDay={kinder.ILMN_CHK_DT}
                        miniAir={kinder.MDST_CHK_DT}
                        water_1={kinder.TP_01}
                        water_2={kinder.TP_02}
                        water_3={kinder.TP_03}
                      />
                    </div>
                  </div>
                )}
                <p className="mb-2">
                  <strong>이름:</strong> {kinder.KINDERNAME}
                </p>
                <p className="mb-2">
                  <strong>주소:</strong> {kinder.ADDR}
                </p>
                <p className="mb-2">
                  <strong>실내공기질 점검일자:</strong> {kinder.ARQL_CHK_DT}
                </p>
                <p className="mb-2">
                  <strong>실내공기질 점검결과:</strong>{" "}
                  {kinder.ARQL_CHK_RSLT_TP_CD}
                </p>
                {/* Add more fields as needed */}
              </li>
              
            ))}
          </ul>
        )
      )}
    </div></LoadScript>
  );
};

export default KinderList;
