import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getLocalName } from "./../../utils/localUtils";
import Modal from "../../components/Modal";
import FaceColor from "../../components/FaceColor";
import { LoadScriptNext } from '@react-google-maps/api';

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



  const [selectedKinder, setSelectedKinder] = useState<KinderInfo | null>(null);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (kinder: KinderInfo) => {
    setSelectedKinder(kinder);
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

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
    <LoadScriptNext
      id="script-loader"
      googleMapsApiKey="AIzaSyDUbTCj82I9-YfIb1OB8WO0lZzCYv5lugo"
    >

      <div className="h-full overflow-y-auto">
        <h1 className="pt-3 pl-4">{getLocalName(local as string)}</h1>
        {loading ? (
          <p><strong>Loading data...</strong></p>
        ) : (
          data &&
          data[`childSchoolHygiene_${local}`] &&
          data[`childSchoolHygiene_${local}`].row && (
            <>
              <ul className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-auto-rows-auto ">
                {data[`childSchoolHygiene_${local}`].row.map((kinder, index) => (
                  <li key={index} className="p-4 m-4 kinder-block" onClick={() => handleModalOpen(kinder)}>
                    <p className="mb-2">
                      <strong>이름:</strong> {kinder.KINDERNAME}
                    </p>
                    <p className="mb-2">
                      <strong>주소:</strong> {kinder.ADDR}
                    </p>
                    <p className="flex items-center justify-center mt-2">
                    <FaceColor
                      airDay={kinder.ARQL_CHK_DT}
                      airResult={kinder.ARQL_CHK_RSLT_TP_CD}
                      washDay={kinder.FXTM_DSNF_CHK_DT}
                      washResult={kinder.FXTM_DSNF_CHK_RSLT_TP_CD}
                      jodoDay={kinder.ILMN_CHK_DT}
                      miniAir={kinder.MDST_CHK_DT}
                    />
                    </p>
                  </li>
                ))}
              </ul>
              {isModalOpen && selectedKinder && (
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
                      isOpen={isModalOpen} 
                      onClose={handleModalClose}
                      address={selectedKinder.ADDR}
                      kinderName={selectedKinder.KINDERNAME}
                      kinderType={selectedKinder.ESTB_PT}
                      airDay={selectedKinder.ARQL_CHK_DT}
                      airResult={selectedKinder.ARQL_CHK_RSLT_TP_CD}
                      washDay={selectedKinder.FXTM_DSNF_CHK_DT}
                      washResult={selectedKinder.FXTM_DSNF_CHK_RSLT_TP_CD}
                      jodoDay={selectedKinder.ILMN_CHK_DT}
                      miniAir={selectedKinder.MDST_CHK_DT}
                      water_1={selectedKinder.TP_01}
                      water_2={selectedKinder.TP_02}
                      water_3={selectedKinder.TP_03}
                    />
                  </div>
                </div>
              )}
            </>
          )
        )}
      </div></LoadScriptNext>
  );
};

export default KinderList;
