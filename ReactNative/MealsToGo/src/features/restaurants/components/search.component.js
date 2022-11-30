import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";

import { SearchContainer } from "../../../components/utility/safe-area.component";
import { LocationContext } from "../../../services/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

//  useEffect(() => {
//    search(searchKeyword);
//  }, []);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
