// 모든 페이지의 공통사항들은 여기서 처리한다.
// index.js 의 컴포넌트가 들어가는곳
import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";
import { PropTypes } from "prop-types";

const NodeBird = ({ Component }) => {
  return (
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

export default NodeBird;
