// 특정 컴포넌트끼리 공통인 것은 이렇게 layout을 만들어서 개별 컴포넌트에 감싸주면 됨.
import React from "react";
import propTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import { useSelector } from "react-redux";

import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  // redux라는 중앙 관리소가 있기 때문에 컴포넌트별로 isLoggedIn 관리 안해도 된다.
  // 기존의 useState는 지우고 아래와 같이 사용한다.
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // 또는 유저 자체를 받아와서 user 안에서 isloggedIn을 구조분해하는 방식으로 쓸 수도 있다
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필입니다234</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.zerocho.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by ZeroCho
          </a>
        </Col>
      </Row>
      {/* AppLayout 안쪽 부분이 children이 된다 */}
    </div>
  );
};

// props로 넘기는 애들을 propTypes라는 모듈로 검사하기 (별도 설치 필요)
AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;
