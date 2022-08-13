import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ヤザワユウマ-${val}`,
    image: "https://source.unsplash.com/6W4F62sN_yI",
    email: "12345@example.com",
    phone: "080-1111-2222",
    company: {
      name: "株式会社システックス"
    },
    website: "https://www.systex.co.jp/"
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;

  return (
    <Scontainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUSerArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUSerArea>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUSerArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
