import axios from "axios";
import { parseStringPromise } from "xml2js";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(
      "http://openapi.seoul.go.kr:8088/437a5263546879753130365154635067/xml/childSchoolHygiene_db/1/36/"
    );

    const parsedData = await parseStringPromise(response.data, {
      explicitArray: false,
    });
    console.log("SUCCESS!");
    res.status(200).json(parsedData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
    console.log("ERROR");
  }
};

export default handler;
