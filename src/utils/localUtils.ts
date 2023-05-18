export const getLocalName = (local: string) => {
  switch (local) {
    case "gn":
      return "강남구";
    case "gd":
      return "강동구";
    case "gb":
      return "강북구";
    case "gs":
      return "강서구";

    case "ga":
      return "관악구";
    case "gj":
      return "광진구";
    case "gr":
      return "구로구";
    case "gc":
      return "금천구";

    case "nw":
      return "노원구";
    case "db":
      return "도봉구";
    case "dj":
      return "동작구";
    case "dd":
      return "동대문구";

    case "mp":
      return "마포구";
    case "sc":
      return "서초구";
    case "sm":
      return "서대문구";
    case "sd":
      return "성동구";

    case "sb":
      return "성북구";
    case "sp":
      return "송파구";
    case "yc":
      return "양천구";
    case "yd":
      return "영등포구";

    case "ep":
      return "은평구";
    case "jn":
      return "종로구";
    case "gg":
      return "중구";
    case "jr":
      return "중랑구";

    default:
      return local;
  }
};
