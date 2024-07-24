import React from "react";
import styles from "./Layout.module.scss";
// import Home from "./home/Home";
// import News from "./news/News";
import Shop from "./shopping/Shop";

// TODO:
// 1. 把 Home 搬進來、Layout 搬進 App（注意路徑改變）
// 2. 加上背景
// 3. 加上 React Router（先不做）
const Layout = () => {
  return (
    <div className="layout">
      <div className="position-relative">
        <div className={styles.background}>
          {/* <Home/> */}
          {/* <News/> */}
          <Shop />
        </div>
      </div>
    </div>
  );
};

export default Layout;
