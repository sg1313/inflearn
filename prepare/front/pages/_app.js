// 모든 페이지의 공통사항들은 여기서 처리한다.
// index.js 의 컴포넌트가 들어가는곳
import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";
import { PropTypes } from "prop-types";

import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
  return (
    // Redux 쓰면 아래 <div>자리에 <Provider stroe=[store>/] 라는걸 넣는다. page를 provider로 감싸줌. 근데 next에서는 provider 안써도 된다.
    // next-redux-wrapper에서 provider를 제공해주기 때문에 오히려 넣어주면 중복이 발생함
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird123</title>
      </Head>
      <Component />
    </div>
  );
};

NodeBird.prototype = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
