import "../styles/App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
//
// import { NavigationContainer } from "@react-navigation/native";
// import { navigationRef } from "./RootNavigation";

function Nav() {
  const linkStyles = {
    cursor: "pointer",
    textDecoration: "none",
  };

  //
  // Initiate Functions
  useEffect(function NavLoad() {
    // Grab Elements
    const Pop_Elements = document.querySelectorAll(".Pop_Elements");
    const links = document.querySelectorAll(".links li");
    const liDiv = document.querySelectorAll(".links li div");
    const liSpan = document.querySelectorAll(".links li span");
    const Pop_Up = document.querySelector(".Pop_Up");

    const logo = document.querySelector(".logo");
    const left_nav = document.querySelector(".left_nav");
    const right_nav = document.querySelector(".right_nav");
    const Nav_overlay = document.querySelector(".Nav_overlay");
    const input = document.querySelector(".right_nav input");
    const search_icon = document.querySelector("#search_icon");

    // Functions
    function NavScroll() {
      if (window.scrollY > 0) {
        //
        logo.style.opacity = `0`;
        logo.style.height = `0`;

        left_nav.style.height = `60px`;
        right_nav.style.height = `60px`;
        Nav_overlay.style.background = `#151515`;

        liDiv.forEach((Elements) => {
          Elements.style.transform = `translateY(99%)`;
        });
      } else if (window.scrollY === 0) {
        //
        logo.style = "";
        left_nav.style = "";
        right_nav.style = "";
        Nav_overlay.style = "";
        liDiv.forEach((Elements) => {
          Elements.style = ``;
        });
      }
    }
    window.addEventListener("scroll", NavScroll);

    // Search Animate
    function SearchActive() {
      right_nav.style.opacity = `1`;
      search_icon.style.transform = `rotate(90deg)`;
    }
    function SearchRemove() {
      right_nav.style.opacity = `0.4`;
      search_icon.style = ``;
    }
    input.addEventListener("focusin", SearchActive);
    input.addEventListener("mouseenter", SearchActive);
    input.addEventListener("focusout", SearchRemove);
    input.addEventListener("mouseleave", SearchRemove);

    //
    // Pop Animation
    function PopAnimateIn(index) {
      // Animate In

      Pop_Elements[index].classList.add("Pop_Elements_Active");
      liSpan[index].classList.add("spanA");
      links[index].classList.add("liA");

      Pop_Up.style.height = `${Pop_Elements[index].clientHeight}px`;
    }
    //
    function PopAnimateOut(index) {
      // Animate Out

      Pop_Elements[index].classList.remove("Pop_Elements_Active");
      liSpan[index].classList.remove("spanA");
      links[index].classList.remove("liA");
    }

    for (let index = 0; index < links.length; index++) {
      //
      links[index].addEventListener("mouseenter", () => {
        PopAnimateIn(index);
      });
      Pop_Elements[index].addEventListener("mouseenter", () => {
        PopAnimateIn(index);
      });
      //
      links[index].addEventListener("mouseleave", () => {
        PopAnimateOut(index);
      });
      Pop_Elements[index].addEventListener("mouseleave", () => {
        PopAnimateOut(index);
      });
      if (index === links.length - 1) {
        break;
      }
    }
  }, []);

  return (
    <nav className="nav_container">
      <div className="Nav_overlay"></div>
      <div className="Pop_Up">
        <div className="Pop_Elements" id="Tin-moi">
          <div className="column">
            <div className="row">
              <h1>Gần đây</h1>
              <Link to="/Tin-moi">
                <h5>Tất cả &gt;&gt;</h5>
              </Link>
            </div>
            <div className="Pop_image" id="Latest">
              <div className="tag_description">
                <h2>Kỷ nguyên Thời trang kỹ thuật số</h2>
                <h3>#1 - 2 Ngày trước</h3>
              </div>
            </div>
          </div>
          <div className="Ver_line"></div>
          <div className="column">
            <h1>Nổi bật</h1>
            <div className="Pop_image" id="Trending">
              <div className="tag_description">
                <h2>Trả tiền thật cho trang phục ảo</h2>
                <h3>#2 - TBD</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="Pop_Elements" id="Thoi-trang-ao">
          <div className="column">
            <h1>Gần đây</h1>
            <a href="/Releases/Issue#1/">Kỷ nguyên Thời trang kỹ thuật số</a>
            <a href="/Releases/Issue#2/">Trả tiền thật cho trang phục ảo</a>
            <a href="/Releases/Issue#2/">
              Phá vỡ giới hạn và bảo vệ môi trường
            </a>
            <div className="row">
              <h1>&nbsp;</h1>
              <Link to="/Thoi-trang-ao">
                <h5>Xem thêm &gt;&gt;</h5>
              </Link>
            </div>
          </div>
          <div className="Ver_line"></div>
          <div className="column">
            <h1>Đề xuất</h1>
            <div className="Pop_image" id="Recommend">
              <div className="tag_description">
                <h2>Sự phá vỡ giới hạn và vấn đề bảo vệ môi trường</h2>
                <h3>#3 - TBD</h3>
              </div>
            </div>
          </div>
          <div className="Ver_line"></div>
          <div className="column">
            <h1>&nbsp;</h1>
            <div className="Pop_image" id="Nothing">
              <div className="tag_description">
                <h2>Trả tiền thật cho trang phục ảo</h2>
                <h3>#2 - TBD</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="Pop_Elements" id="Virtual-influencer">
          <div className="column">
            <h1>Influencers +</h1>
            <a href="/Releases/Issue#1/">Nguồn gốc</a>
            <a href="/Releases/Issue#1/">Lợi thế đem lại</a>
            <a href="/Releases/Issue#1/">Tương lai</a>
            <a href="/Releases/Issue#1/">Thật hay ảo?</a>
            <Link to="/Virtual-influencer">
              <h5>Xem thêm &gt;&gt;</h5>
            </Link>
          </div>
          <div className="column">
            <h1>&nbsp;</h1>
            <a href="/Releases/Issue#1/">#Shudu Gram</a>
            <a href="/Releases/Issue#1/">#Lil Miquela</a>
            <a href="/Releases/Issue#1/">#Bermuda</a>
            <a href="/Releases/Issue#1/">#Blawko</a>
            <a href="/Releases/Issue#1/">#Imma</a>
          </div>
          <div className="Ver_line"></div>
          <div className="column">
            <div className="Pop_image" id="Lil-Miquela">
              <div className="tag_description">
                <h2>#Lil Miquela</h2>
              </div>
            </div>
          </div>
          <div className="Ver_line"></div>
          <div className="column">
            <div className="Pop_image" id="Shudu-Gram">
              <div className="tag_description">
                <h2>#Shudu Gram</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="Pop_Elements" id="Tai-Viet-Nam">
          <div className="column">
            <div className="row">
              <h1>Tại Việt Nam</h1>
              <Link to="/Tai-Viet-Nam">
                <h5>Tất cả &gt;&gt;</h5>
              </Link>
            </div>
            <a href="/Releases/Issue#1/">Tương lai</a>
            <a href="/Releases/Issue#1/">Tầm ảnh hưởng</a>
            <a href="/Releases/Issue#1/">Thách thức</a>
            <a href="/Releases/Issue#1/">Xây dựng ngôi nhà thời trang</a>
            <a href="/Releases/Issue#1/">Rủi ro và Giải pháp</a>
          </div>
        </div>
        <div className="Pop_Elements" id="Ve-chung-toi">
          <div className="column">
            <h1>Vận hành bởi MAD-THC</h1>
            <p>
              MAD-THC, Tetrahydrocannabinol là một trong ít nhất 113 cannabinoid
              được xác định có trong cần sa...
            </p>
          </div>
          <div className="column">
            <div className="row">
              <h1>&nbsp;</h1>
              <Link to="/Ve-chung-toi">
                <h5>Đọc thêm &gt;&gt;</h5>
              </Link>
            </div>
            <p>
              VDFM Là trang tạp chí điện tử đầu tiên ở Việt Nam nghiên cứu về
              Thời trang kỹ thuật số...
            </p>
          </div>
          <div className="Ver_line"></div>
          <div className="column">
            <div className="Tag_logo" id="VDFM"></div>
          </div>
          <div className="Ver_line"></div>
          <div className="column">
            <div className="Tag_logo" id="MAD-THC"></div>
          </div>
        </div>
        <div className="Pop_Elements" id="Lien-he">
          <div className="column">
            <h1>Hợp tác truyền thông +</h1>
            <a href="mailto:letter@vdfmag.com" id="Email">
              Email:&nbsp;<strong>letter@vdfmag.com</strong>
            </a>
            <a href="tel:+84985532766">
              Hotline:&nbsp;<strong>1900 100 Kó</strong>
            </a>
            <a href="tel:+84985532766">
              Máy lẻ:&nbsp;<strong>62.322</strong>
            </a>
          </div>
          <div className="Ver_line"></div>
          <div className="column">
            <h1>Trụ sở Hà Nội</h1>
            <p>Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội</p>
            <div className="row">
              <h1>&nbsp;</h1>
              <Link to="/Lien-he">
                <h5>Bản đồ &gt;&gt;</h5>
              </Link>
            </div>
          </div>
          <div className="Ver_line"></div>
          <div className="column">
            <h1>Mạng xã hội</h1>
            <div className="row">
              <a
                href="https://www.facebook.com/nma2k"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Socials" id="FB"></div>
              </a>
              <a
                href="https://www.instagram.com/billieeilish/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Socials" id="IG"></div>
              </a>
              <a
                href="https://www.facebook.com/thuydungyp"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Socials" id="LinkedIn"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main_nav">
        <div className="left_nav">
          <h5>v1.0 Alpha</h5>
        </div>
        <div className="center_nav">
          <Link to="/" style={linkStyles}>
            <div className="logo">
              <h1>VDFM</h1>
              <h2>Vietnam's Digital Fashion Magazine</h2>
            </div>
          </Link>
          <ul className="links">
            <Link to="/Tin-moi" style={linkStyles}>
              <li className="liB">
                Tin mới <div></div> <span className="spanB"></span>
              </li>
            </Link>
            <Link to="/Thoi-trang-ao" style={linkStyles}>
              <li className="liB">
                THỜI TRANG ẢO <div></div> <span className="spanB"></span>
              </li>
            </Link>
            <Link to="/Virtual-influencer" style={linkStyles}>
              <li className="liB">
                VIRTUAL INFLUENCER
                <div></div> <span className="spanB"></span>
              </li>
            </Link>
            <Link to="/Tai-Viet-Nam" style={linkStyles}>
              <li className="liB">
                TẠI VIỆT NAM
                <div></div>
                <span className="spanB"></span>
              </li>
            </Link>
            <Link to="/Ve-chung-toi" style={linkStyles}>
              <li className="liB">
                VỀ CHÚNG TÔI <div></div>
                <span className="spanB"></span>
              </li>
            </Link>
            <Link to="/Lien-he" style={linkStyles}>
              <li className="liB">
                LIÊN HỆ <div></div>
                <span className="spanB"></span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="right_nav">
          <div className="Search_bar">
            <input type="text" required spellCheck="false" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 936 936"
              id="search_icon"
            >
              <rect className="srch-1" width="936" height="936" />
              <circle className="srch-2" cx="436.25" cy="436.25" r="174.5" />
              <line
                className="srch-2"
                x1="674.25"
                y1="674.25"
                x2="559.63"
                y2="559.63"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
