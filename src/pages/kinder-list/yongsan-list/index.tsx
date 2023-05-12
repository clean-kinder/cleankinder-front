import axios from 'axios';
import { useEffect, useState } from 'react';
import DetailModal from '@/components/DetailModal';
import { EarthIcon } from '@/components/Icons';

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
  childSchoolHygiene_ys: {
    list_total_count: number;
    RESULT: {
      CODE: string;
      MESSAGE: string;
    };
    row: KinderInfo[];
  };
};

type ModalState = {
  isOpen: boolean;
  isExpanded: boolean;
};

const KinderList = () => {
  const [data, setData] = useState<SeoulDataResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [modals, setModals] = useState<{ [key: string]: ModalState }>({});
  const [modalsToggle, setModalsToggle] = useState(false);
  const [mapMarkers, setMapMarkers] = useState<{ lat: number; lng: number; address: string }[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(6);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/yongsan-data');
      console.log('Success!');
      setData(response.data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleModalToggleExpand = (index: number) => {
    const modalState = modals[index] || { isOpen: false, isExpanded: false };
    setModals({
      ...modals,
      [index]: { isOpen: modalState.isOpen, isExpanded: !modalState.isExpanded },
    });
  };

  const handleModalOpen = (index: number) => {
    const modalState = modals[index] || { isOpen: false, isExpanded: false };
    setModals({
      ...modals,
      [index]: { isOpen: true, isExpanded: modalState.isExpanded },
    });
  };

  const handleModalClose = (index: number) => {
    const modalState = modals[index] || { isOpen: false, isExpanded: false };
    setModals({
      ...modals,
      [index]: { isOpen: false, isExpanded: modalState.isExpanded },
    });
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.childSchoolHygiene_ys?.row?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    if (data && data.childSchoolHygiene_ys && data.childSchoolHygiene_ys.row) {
      const totalPages = Math.ceil(data.childSchoolHygiene_ys.row.length / itemsPerPage);
      const pageNumbers = [];
      const visiblePageRange = 2; // 원하는 페이지 번호 간격을 설정합니다
  
      const startPage = 1;
      const endPage = totalPages;
  
      for (let i = startPage; i <= endPage; i++) {
        const className = currentPage === i ? 'active page-number' : 'page-number'; // 현재 페이지의 클래스와 일반 페이지의 클래스를 설정합니다
  
        pageNumbers.push(
          <li key={i} onClick={() => setCurrentPage(i)} className={className}>
            {i}
          </li>
        );
      }
  
      return pageNumbers;
    }
  
    return null;
  };

  return (
    <div>
      <h1>용산구</h1><br /><br />
      {/* Content */}
      {loading ? (
        <p>Loading data...</p>
      ) : (
        data &&
        data.childSchoolHygiene_ys &&
        data.childSchoolHygiene_ys.row && (
          <>
            <ul>
              {currentItems?.map((kinder, index) => {
                const modalState = modals[index] || { isOpen: false, isExpanded: false };
                return (
                  <li key={index}>
                    <strong className="flex flex-row ml-1">
                      <EarthIcon class={''} /> {kinder.KINDERNAME}
                    </strong>
                    <br />
                    <button onClick={() => handleModalOpen(index)} className="ml-3">
                      <div className='detail_text'>상세보기</div>
                    </button>
                    <DetailModal
                      isOpen={modalState?.isOpen}
                      onClose={() => handleModalClose(index)}
                      key={`modal-${index}`}
                    >
                      {modalState?.isExpanded ? (
                        <>
                          <h2>{kinder.KINDERNAME}</h2>
                          <p>{kinder.ADDR}</p>
                        </>
                      ) : (
                        <div className="ml-2">
                          주소 : {kinder.ADDR}
                          <div className="ml-2 detail_map_btn">지도 보기</div>
                          <br />
                          실내공기질 점검 일자 : {kinder.ARQL_CHK_DT}<br />
                          실내공기질 점검 결과 : {kinder.ARQL_CHK_RSLT_TP_CD}<br />
                          정기소독 점검 여부 : {kinder.FXTM_DSNF_CHK_RSLT_TP_CD}<br />
                          정기소독 점검 일자 : {kinder.FXTM_DSNF_CHK_DT} <br />
                          미세먼지 검사 일자 : {kinder.MDST_CHK_DT}<br />
                        </div>
                      )}
                    </DetailModal>
                    <br /><br />
                    <hr className="border-2" />
                    <br />
                  </li>
                );
              })}
            </ul>
            {/* Pagination */}
            <ul className="flex justify-center cursor-pointer pagination flew-row">
              {renderPageNumbers()}
            </ul>
          </>
        )
      )}
    </div>
  );

};

export default KinderList;
