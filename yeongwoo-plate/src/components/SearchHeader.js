import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import useInput from "../hooks/useInput";
import { Logo } from "./Icons";
import { Input } from "semantic-ui-react";
import ScrollingModal from "./ScrollingModal";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: auto;
  text-align: center;
  margin-left: 20px;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;
const HeaderSearchColumn = styled.div`
  width: 70%;
  text-align: center;
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

// 검색 값을 쿠키로 저장?
export default withRouter(({ onSearchStores, history }) => {
  const search = useInput("");
  const onSearchSubmit = (e) => {
    e.preventDefault();
    const params = { name: search.value, page: 1, append: false };
    onSearchStores(params);
    history.push(`/search/${search.value}`);
  };

  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <HeaderLink to="/">
            <Logo />
          </HeaderLink>
        </HeaderColumn>
        <HeaderSearchColumn>
          <form onSubmit={onSearchSubmit}>
            <Input
              id="searchInput"
              action={{ icon: "search", color: "blue" }}
              placeholder="Search..."
              value={search.value}
              onChange={search.onChange}
              style={{
                width: "-webkit-fill-available",
              }}
            />
          </form>
        </HeaderSearchColumn>
        <HeaderColumn>
          <ScrollingModal />
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/">
            <Logo />
          </HeaderLink>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
