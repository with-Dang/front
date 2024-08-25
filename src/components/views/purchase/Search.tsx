import { IoSearch } from "@react-icons/all-files/io5/IoSearch";
import { COLORS } from "../../../styles/Color";
import S from "./Purchase.module.css";

const Search = () => {
  return (
    <div className={S.search}>
      <IoSearch color={COLORS.lightGray} />
      <input placeholder="검색어를 입력하세요" />
    </div>
  );
};

export default Search;
