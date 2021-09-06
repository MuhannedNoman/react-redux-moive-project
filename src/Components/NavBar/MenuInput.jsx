import React, { useEffect } from "react";
import { Box, useMenuItem, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  emptySearchResults,
  getSearchResult,
  setSearchValue,
} from "../../Redux/Slices/searchSlice";

const navigationKeys = ["ArrowUp", "ArrowDown", "Escape"];

const MenuInput = (props) => {
  const searchValue = useSelector((state) => state.search.searchValue);
  useEffect(() => {
    if (searchValue !== "") dispatch(getSearchResult(searchValue));
    else dispatch(emptySearchResults());
  }, [searchValue]);

  const dispatch = useDispatch();
  const { role, ...rest } = useMenuItem(props);

  return (
    <Box px="3" role={role}>
      <Input
        placeholder="Search Movies"
        color="white"
        bg="whiteAlpha.300"
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        size="md"
        autoComplete="false"
        {...rest}
        onKeyDown={(e) => {
          if (!navigationKeys.includes(e.key)) {
            e.stopPropagation();
          }
        }}
      />
    </Box>
  );
};
export default MenuInput;
