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
  const [washFaceColor, setWashFaceColor] = useState("");
  const [miniFaceColor, setMiniFaceColor] = useState("");
  const [jodoFaceColor, setJodoFaceColor] = useState("");
  

  let colorPoint = 0;
  let washColorPoint = 0;
  let miniColorPoint = 0;
  let jodoColorPoint = 0;

  const formatDate = (dateString: string) => {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    return `${year}-${month}-${day}`;
  };

  if (new Date(formatDate(airDay)) >= new Date('2022-01-01') && airResult === '적합') {
    colorPoint = 2;
  }
  else if (new Date(formatDate(airDay)) < new Date('2022-01-01') && airResult === '적합') {
    colorPoint = 1;
  }
  else if (new Date(formatDate(airDay)) >= new Date('2022-01-01')) {
    colorPoint = 1;
  }
  else if (new Date(formatDate(airDay)) < new Date('2022-01-01')) {
    colorPoint = 0;
  }


  if (new Date(formatDate(washDay)) >= new Date('2023-01-01') && washResult === '실시') {
    washColorPoint = 2;
  }
  else if (new Date(formatDate(washDay)) < new Date('2023-01-01') && washResult === '실시') {
    washColorPoint = 1;
  }
  else if (new Date(formatDate(washDay)) >= new Date('2023-01-01')) {
    washColorPoint = 1;
  }
  else if (new Date(formatDate(washDay)) < new Date('2023-01-01')) {
    washColorPoint = 0;
  }


  if (new Date(formatDate(miniAir)) >= new Date('2022-01-01')) {
    miniColorPoint = 2;
  }
  else if (new Date(formatDate(miniAir)) >= new Date('2022-09-01')) {
    miniColorPoint = 1;
  }
  else if (new Date(formatDate(miniAir)) < new Date('2022-09-01')) {
    miniColorPoint = 0;
  }


  if (new Date(formatDate(jodoDay)) >= new Date('2022-01-01')) {
    jodoColorPoint = 2;
  }
  else if (new Date(formatDate(jodoDay)) >= new Date('2022-09-01')) {
    jodoColorPoint = 1;
  }
  else if (new Date(formatDate(jodoDay)) < new Date('2022-09-01')) {
    jodoColorPoint = 0;
  }  


  useEffect(() => {
    if (colorPoint == 2) {
      setFaceColor("best");
    } else if (colorPoint == 1) {
      setFaceColor("sogood");
    } else if (colorPoint == 0) {
      setFaceColor("bad");
    }

    if (washColorPoint == 2) {
      setWashFaceColor("washBest");
    } else if (washColorPoint == 1) {
      setWashFaceColor("washSogood");
    } else if (washColorPoint == 0) {
      setWashFaceColor("washBad");
    }

    if (miniColorPoint == 2) {
      setMiniFaceColor("miniBest");
    } else if (miniColorPoint == 1) {
      setMiniFaceColor("miniSogood");
    } else if (miniColorPoint == 0) {
      setMiniFaceColor("miniBad");
    }

    if (jodoColorPoint == 2) {
      setJodoFaceColor("jodoBest");
    } else if (jodoColorPoint == 1) {
      setJodoFaceColor("jodoSogood");
    } else if (jodoColorPoint == 0) {
      setJodoFaceColor("jodoBad");
    }

  }, [colorPoint, washColorPoint, miniColorPoint, jodoColorPoint]);

  return (
    <div className='flex'>
        <div>
            <div>
                <div className='flex justify-center'>실내공기질</div>
                <div className='flex justify-center'>
                {faceColor === "best" ? (
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-300 rounded-3xl">
                    <SmileIcon class='' />
                    </div>
                ) : faceColor === "sogood" ? (
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-300 rounded-3xl">
                    <SmileIcon class='' />
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-8 h-8 bg-red-300 rounded-3xl">
                    <AngryIcon class='' />
                    </div>
                )}
                </div>
            </div>

            <div>
                <div className='flex justify-center'>정기소독</div>
                <div className='flex justify-center'>
                {washFaceColor === "washBest" ? (
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-300 rounded-3xl">
                    <SmileIcon class='' />
                    </div>
                ) : washFaceColor === "washSogood" ? (
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-300 rounded-3xl">
                    <SmileIcon class='' />
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-8 h-8 bg-red-300 rounded-3xl">
                    <AngryIcon class='' />
                    </div>
                )}
                </div>
            </div>
        </div>
        <div style={{ marginRight: '2rem' }}></div>
        <div>
            <div>
                <div className='flex justify-center'>미세먼지</div>
                <div className='flex justify-center'>
                {miniFaceColor === "miniBest" ? (
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-300 rounded-3xl">
                    <SmileIcon class='' />
                    </div>
                ) : miniFaceColor === "miniSogood" ? (
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-300 rounded-3xl">
                    <SmileIcon class='' />
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-8 h-8 bg-red-300 rounded-3xl">
                    <AngryIcon class='' />
                    </div>
                )}
                </div>
            </div>
            
            <div>
                <div className='flex justify-center'>조도관리</div>
                <div className='flex justify-center'>
                {jodoFaceColor === "jodoBest" ? (
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-300 rounded-3xl">
                    <SmileIcon class='' />
                    </div>
                ) : jodoFaceColor === "jodoSogood" ? (
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-300 rounded-3xl">
                    <SmileIcon class='' />
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-8 h-8 bg-red-300 rounded-3xl">
                    <AngryIcon class='' />
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default FaceColor;
