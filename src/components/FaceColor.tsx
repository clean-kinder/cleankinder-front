import React, { useEffect, useState } from 'react';
import { SmileIcon, AngryIcon } from "./Icons";

interface KinderProps {
  airDay: string;
  airResult: string;
  washDay: string;
  washResult: string;
  jodoDay: string;
  miniAir: string;
}

const FaceColor: React.FC<KinderProps> = ({
  airDay,
  airResult,
  washDay,
  washResult,
  jodoDay,
  miniAir
}) => {
  const [faceColor, setFaceColor] = useState("");

  let colorPoint = 0;

  const formatDate = (dateString: string) => {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    return `${year}-${month}-${day}`;
  };

  if (
    new Date(formatDate(airDay)) >= new Date('2022-01-01') &&
    airResult === '적합'
  ) {
    colorPoint += 1;
  }

  if (
    new Date(formatDate(washDay)) >= new Date('2023-01-01') &&
    washResult === '실시'
  ) {
    colorPoint += 1;
  }

  if (new Date(formatDate(miniAir)) >= new Date('2022-01-01')) {
    colorPoint += 1;
  }

  if (new Date(formatDate(jodoDay)) >= new Date('2022-01-01')) {
    colorPoint += 1;
  }

  console.log(colorPoint);

  useEffect(() => {
    if (colorPoint >= 4) {
      setFaceColor("best");
    } else if (colorPoint >= 2) {
      setFaceColor("sogood");
    } else if (colorPoint >= 0) {
      setFaceColor("bad");
    }
  }, [colorPoint]);

  return (
    <div>
      {faceColor === "best" ? (
        <div className="flex items-center justify-center w-12 h-12 bg-blue-300 rounded-3xl">
          <SmileIcon class='' />
        </div>
      ) : faceColor === "sogood" ? (
        <div className="flex items-center justify-center w-12 h-12 bg-orange-300 rounded-3xl">
          <SmileIcon class='' />
        </div>
      ) : (
        <div className="flex items-center justify-center w-12 h-12 bg-red-300 rounded-3xl">
          <AngryIcon class='' />
        </div>
      )}
    </div>
  );
};

export default FaceColor;
