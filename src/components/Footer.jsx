import styles from "./Footer.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { openLink } from "../utils/link";

const Footer = () => {
  return (
    <>
      <div
        className={`W-100 p-5 m-5 d-flex justify-content-between ${styles.footerDiv}`}
      >
        <div className="d-flex justify-content-around align-items-center w-50 border-end border-1 border-white">
          <div>
            <img src="/images/img/logo-lucky01.png" alt="logo-lucky01" />
          </div>
          <div className="d-flex flex-column justify-content-between">
            <h3>好市集股份有限公司</h3>
            <div>
              <h5>電話　04-1234-4321</h5>
              <h5>地址　台中市南屯區公益路二段51號</h5>
            </div>
            <h6>© 2024 好市集股份有限公司所有</h6>
          </div>
        </div>

        <div className="w-50 d-flex justify-content-around">
          <div className="d-flex">
            <div className="pe-4 d-flex flex-column justify-content-between">
              <h5>關</h5>
              <h5>於</h5>
              <h5>我</h5>
              <h5>們</h5>
            </div>

            <div className="d-flex flex-column">
              <div>
                <div className="pb-2" onClick={() => openLink("https://")}>
                  <i className="bi bi-bus-front" />
                  <span>交通資訊</span>
                </div>
                <div className="pb-2" onClick={() => openLink("https://")}>
                  <i className="bi-person-circle" />
                  <span>會員專區</span>
                </div>
                <div className="pb-2" onClick={() => openLink("https://")}>
                  <i className="bi bi-shield-shaded" />
                  <span>隱私權政策</span>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div className="pe-4 d-flex flex-column justify-content-between">
              <h5>客</h5>
              <h5>戶</h5>
              <h5>服</h5>
              <h5>務</h5>
            </div>
            <div className="d-flex flex-column">
              <div>
                <div className="pb-2" onClick={() => openLink("https://")}>
                  <i className="bi bi-question-octagon" />
                  <span>常見問題</span>
                </div>
                <div className="pb-2" onClick={() => openLink("https://")}>
                  <i className="bi bi-telephone" />
                  <span>聯絡我們</span>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div className="pe-4 d-flex flex-column justify-content-between">
              <h5>聯</h5>
              <h5>絡</h5>
              <h5>方</h5>
              <h5>式</h5>
            </div>
            <div className="d-flex flex-column">
              <div>
                <div
                  className="pb-2"
                  onClick={() => openLink("https://facebook.com/")}
                >
                  <i className="bi bi-facebook" />
                  <span>Facebook</span>
                </div>
                <div
                  className="pb-2"
                  onClick={() => openLink("https://instagram.com/")}
                >
                  <i className="bi-instagram" />
                  <span>Instagram</span>
                </div>
                <div
                  className="pb-2"
                  onClick={() => openLink("https://line.me/")}
                >
                  <i className="bi bi-line" />
                  <span>Line</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
