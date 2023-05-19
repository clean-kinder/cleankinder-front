import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getLocalName } from "./../../utils/localUtils";

type KinderInfo = {
  KINDERNAME: string;
  ADDR: string;
  ARQL_CHK_DT: string;
  ARQL_CHK_RSLT_TP_CD: string;
  FXTM_DSNF_CHK_RSLT_TP_CD: string;
  FXTM_DSNF_CHK_DT: string;
  MDST_CHK_DT: string;
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
    <div className="h-full overflow-y-auto">
      <h1>{getLocalName(local as string)}</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        data &&
        data[`childSchoolHygiene_${local}`] &&
        data[`childSchoolHygiene_${local}`].row && (
          <ul className="grid grid-cols-3 gap-16 grid-auto-rows-auto">
            {data[`childSchoolHygiene_${local}`].row.map((kinder, index) => (
              <li key={index} className="p-4 m-4 kinder-block">
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
    </div>
  );
};

export default KinderList;
