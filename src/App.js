import "./styles/App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Elements
import Nav from "./Elements/nav";
import HomePage from "./Elements/HomePage";

//
// Main Function
//
function App() {
  //
  //Preload
  useEffect(function Preload() {
    scrollLoad();
  }, []);

  //Scroll Reset
  const scrollLoad = () => {
    // Grab The Elements
    const body = document.body;
    const main = document.getElementById("main_scroll");
    const center_nav = document.querySelector(".nav_container .center_nav");

    // Constructing Values
    let sx = 0, // For scroll positions
      sy = 0;
    let dx = sx, // For container positions And Force (Percentage 70% Recommended)
      dy = sy,
      Force = 70;

    // Onpage Load And Refresh Events

    body.style.height = main.clientHeight + "px";

    ResetPage();

    window.addEventListener("beforeunload", (e) => {
      ResetPage();
    });

    function ResetPage() {
      window.scrollTo(0, 0);

      body.scrollTo(0, 0);
      main.style = ``;
    }

    function ScrollResize() {
      var resizetime = setTimeout(() => {
        let bodyHeight = main.getBoundingClientRect().height;
        body.style.height = `${bodyHeight}px`;
        easeScroll();

        clearTimeout(resizetime);
      }, 100);
    }
    window.addEventListener("resize", ScrollResize);
    center_nav.addEventListener("click", ScrollResize);
    //
    // Momentum Scrolling

    // Scroll Functions
    window.addEventListener("scroll", (e) => {
      easeScroll();

      // HeadersResponse();
    });

    function easeScroll() {
      sx = window.pageXOffset;
      sy = window.pageYOffset;
    }

    window.requestAnimationFrame(render);

    function render() {
      //We calculate our container position by linear interpolation method
      dx = li(dx, sx, Force / 1000);
      dy = li(dy, sy, Force / 1000);

      dx = Math.floor(dx * 100) / 100;
      dy = Math.floor(dy * 100) / 100;

      main.style.transform = `translate(-${dx}px, -${dy}px)`;

      window.requestAnimationFrame(render);
    }

    function li(a, b, n) {
      return (1 - n) * a + n * b;
    }
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="Stage" id="main_scroll">
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
