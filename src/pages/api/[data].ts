import axios from "axios";
import { parseStringPromise } from "xml2js";
import { NextApiRequest, NextApiResponse } from "next";

const fetchData = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(url);
    const parsedData = await parseStringPromise(response.data, {
      explicitArray: false,
    });
    return parsedData;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

export default async function dataHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = req.query;

  if (typeof data !== "string") {
    res.status(400).json({ error: "Invalid data parameter" });
    return;
  }

  const url = `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PULBIC_KINERLIST_KEY}/xml/childSchoolHygiene_${data}/1/100/`;

  try {
    const responseData = await fetchData(url);
    res.status(200).json(responseData);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
