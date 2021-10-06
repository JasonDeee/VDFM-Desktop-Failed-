import "../styles/App.css";
// import { Link } from "react-router-dom";
import { useEffect } from "react";

function HomePage() {
  //
  // Initiate Functions

  function HomePageOnLoad() {
    ////
    // Grab The Elements
    const Carrousel_Slider = document.querySelector(".Carrousel_Slider");
    const Carrousel_Items = document.querySelectorAll(".Carrousel_Items");
    const Dots_Items = document.querySelectorAll(".Dots_Items div");
    const Dots_Items_Box = document.querySelectorAll(".Dots_Items");
    const Title_Holder = document.querySelectorAll(".Title_Holder");
    const Title = document.querySelectorAll(".Title_Holder h1");

    const PrevButton = document.querySelector("#Prev");
    const NextButton = document.querySelector("#Next");

    // Carrousel Initiate
    // // Constructing Value

    const CB = {
      Transition: 1300, // Units Miliseconds
      Delay: 5000, // How long Each Slide Stay In View?
      Behaviour: "cubic-bezier(0.25, 0, 0, 1)",
    };

    var SlideCount = 0,
      PreSlideCount = 0,
      DotCount = 0, // Dot Count Can Be Used As Title Count
      PreDotCount = 0,
      SlideIsBusy = false, // False Means Slide Is Ready for Transition
      ResetSlide,
      ResetSlide2;

    // Attach Behaviour
    Carrousel_Slider.style.transition = `all ${CB.Transition / 1000}s ${
      CB.Behaviour
    }`;

    // Slide Auto Forward Funtion
    function AutoForwardSlide() {
      if (SlideCount === 0 || SlideCount === 1) {
        Carrousel_Slider.style.transition = `all ${CB.Transition / 1000}s ${
          CB.Behaviour
        }`;
      }
      SlideCount++;
      Carrousel_Slider.style.transform = `translateX(-${SlideCount * 100}vw)`;

      DotCount = SlideCount - 1;
      if (SlideCount === Carrousel_Items.length - 1) {
        DotCount = Dots_Items.length - 1;
      }
      DotCount = Math.max(0, Math.min(DotCount, Dots_Items.length - 1));
      //
      Dots_Items[PreDotCount].style = ``;
      Title_Holder[PreDotCount].style = ``;
      Title[PreDotCount].style = ``;

      Dots_Items[DotCount].style.height = `25px`;

      Title_Holder[DotCount].style.pointerEvents = `all`;
      Title_Holder[DotCount].style.opacity = `1`;
      Title[DotCount].style.letterSpacing = `2px`;

      if (SlideCount >= Carrousel_Items.length - 1) {
        ResetSlide = setTimeout(() => {
          SlideCount = 1;
          Carrousel_Slider.style.transition = `none`;
          Carrousel_Slider.style.transform = `translateX(-${
            SlideCount * 100
          }vw)`;

          clearTimeout(ResetSlide);
        }, CB.Transition);
      }

      PreSlideCount = SlideCount;
      PreDotCount = DotCount;
    }

    // Perform
    AutoForwardSlide();
    var SlideInterval = setInterval(AutoForwardSlide, CB.Delay);

    //
    // Dot OnClick DotClickSlideFunction
    function DotClickSlide(count) {
      clearInterval(SlideInterval);
      clearTimeout(ResetSlide2);
      clearTimeout(ResetSlide);

      SlideCount = count + 1;
      DotCount = count;

      Carrousel_Slider.style.transition = `all ${CB.Transition / 1000}s ${
        CB.Behaviour
      }`;

      Carrousel_Slider.style.transform = `translateX(-${SlideCount * 100}vw)`;

      Dots_Items[PreDotCount].style = ``;
      Title_Holder[PreDotCount].style = ``;
      Title[PreDotCount].style = ``;

      Dots_Items[DotCount].style.height = `25px`;

      Title_Holder[DotCount].style.pointerEvents = `all`;
      Title_Holder[DotCount].style.opacity = `1`;
      Title[DotCount].style.letterSpacing = `2px`;

      // if (SlideCount >= Carrousel_Items.length - 2) {
      //   SlideCount = 0;
      //   ResetSlide2 = setTimeout(() => {
      //     Carrousel_Slider.style.transition = `none`;
      //     Carrousel_Slider.style.transform = `translateX(-${
      //       SlideCount * 100
      //     }vw)`;
      //     clearTimeout(ResetSlide2);
      //   }, CB.Transition);
      // }

      PreSlideCount = SlideCount;
      PreDotCount = DotCount;
      SlideInterval = setInterval(AutoForwardSlide, CB.Delay);
    }

    // Perform

    for (let index = 0; index < Dots_Items_Box.length; index++) {
      const element = Dots_Items_Box[index];

      element.addEventListener("click", () => {
        DotClickSlide(index);
      });
      if (index === Dots_Items_Box.length - 1) {
        break;
      }
    }

    // Onpage Focus and Lose Focus
    window.addEventListener("focus", () => {
      DotClickSlide(DotCount);
    });
    window.addEventListener("blur", () => {
      clearInterval(SlideInterval);
      clearTimeout(ResetSlide2);
      clearTimeout(ResetSlide);
    });

    //
    // Button OnClick ButtonClickSlideFunction
    function NextClick() {
      if (SlideIsBusy === false) {
        //
        // Validate
        SlideIsBusy = true;

        clearTimeout(ResetStatus);
        var ResetStatus = setTimeout(() => {
          //
          SlideIsBusy = false;

          clearTimeout(ResetStatus);
        }, CB.Transition + 50);
        //
        clearInterval(SlideInterval);
        clearTimeout(ResetSlide2);
        clearTimeout(ResetSlide);
        //
        Carrousel_Slider.style.transition = `all ${CB.Transition / 1000}s ${
          CB.Behaviour
        }`;

        SlideCount++;
        Carrousel_Slider.style.transform = `translateX(-${SlideCount * 100}vw)`;

        DotCount = SlideCount - 1;
        if (SlideCount === Carrousel_Items.length - 1) {
          DotCount = 0;
        }
        DotCount = Math.max(0, Math.min(DotCount, Dots_Items.length - 1));
        //
        Dots_Items[PreDotCount].style = ``;
        Title_Holder[PreDotCount].style = ``;
        Title[PreDotCount].style = ``;

        Dots_Items[DotCount].style.height = `25px`;

        Title_Holder[DotCount].style.pointerEvents = `all`;
        Title_Holder[DotCount].style.opacity = `1`;
        Title[DotCount].style.letterSpacing = `2px`;

        if (SlideCount >= Carrousel_Items.length - 1) {
          ResetSlide = setTimeout(() => {
            SlideCount = 1;
            Carrousel_Slider.style.transition = `none`;
            Carrousel_Slider.style.transform = `translateX(-${
              SlideCount * 100
            }vw)`;

            clearTimeout(ResetSlide);
          }, CB.Transition);
        }

        PreSlideCount = SlideCount;
        PreDotCount = DotCount;
        SlideInterval = setInterval(AutoForwardSlide, CB.Delay);
      }

      console.log(SlideCount);
    }
    function PrevClick() {
      if (SlideIsBusy === false) {
        //
        // Validate
        SlideIsBusy = true;
        clearTimeout(ResetStatus);
        var ResetStatus = setTimeout(() => {
          //
          SlideIsBusy = false;

          clearTimeout(ResetStatus);
        }, CB.Transition + 50);
        //
        clearInterval(SlideInterval);
        clearTimeout(ResetSlide2);
        clearTimeout(ResetSlide);

        //
        Carrousel_Slider.style.transition = `all ${CB.Transition / 1000}s ${
          CB.Behaviour
        }`;

        SlideCount--;
        Carrousel_Slider.style.transform = `translateX(-${SlideCount * 100}vw)`;

        DotCount = SlideCount - 1;
        if (SlideCount === 0) {
          DotCount = Dots_Items.length - 1;
        }

        DotCount = Math.max(0, Math.min(DotCount, Dots_Items.length - 1));
        //
        Dots_Items[PreDotCount].style = ``;
        Title_Holder[PreDotCount].style = ``;
        Title[PreDotCount].style = ``;

        Dots_Items[DotCount].style.height = `25px`;

        Title_Holder[DotCount].style.pointerEvents = `all`;
        Title_Holder[DotCount].style.opacity = `1`;
        Title[DotCount].style.letterSpacing = `2px`;

        if (SlideCount <= 0) {
          ResetSlide = setTimeout(() => {
            SlideCount = Carrousel_Items.length - 2;
            Carrousel_Slider.style.transition = `none`;
            Carrousel_Slider.style.transform = `translateX(-${
              SlideCount * 100
            }vw)`;

            clearTimeout(ResetSlide);
          }, CB.Transition);
        }

        PreSlideCount = SlideCount;
        PreDotCount = DotCount;
        SlideInterval = setInterval(AutoForwardSlide, CB.Delay);
      }

      console.log(SlideCount);
    }

    // Perform
    NextButton.addEventListener("click", NextClick);
    PrevButton.addEventListener("click", PrevClick);
  }

  useEffect(HomePageOnLoad, []);

  return (
    <main className="HomePage">
      {/* Sec1 is a Carrousel */}
      <section className="Section" id="Carrousel">
        <div className="Slide_Dots_Count">
          <div className="Dots_Items">
            <div></div>
          </div>
          <div className="Dots_Items">
            <div></div>
          </div>
          <div className="Dots_Items">
            <div></div>
          </div>
        </div>
        <div className="Carrousel_button" id="Prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 780"
            className="Carrousel_button_Svg"
          >
            <polyline className="arr-1" points="345 775 5 390 345 5" />
          </svg>
        </div>
        <div className="Carrousel_button" id="Next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 780"
            className="Carrousel_button_Svg"
          >
            <polyline className="arr-1" points="345 775 5 390 345 5" />
          </svg>
        </div>
        <div className="Carrousel_Title">
          <div className="Title_Holder" id="CSlot1">
            <a href="/Issue#1">
              <div></div>
            </a>
            <h2>Issue#1 - 2 Ngày trước</h2>
            <h1>Kỷ nguyên Thời trang số</h1>
          </div>
          <div className="Title_Holder" id="CSlot2">
            <a href="/Issue#1">
              <div></div>
            </a>
            <h2>Issue#2 - Đã có đâu</h2>
            <h1>Trả tiền thật cho trang phục ảo</h1>
          </div>
          <div className="Title_Holder" id="CSlot3">
            <a href="/Issue#1">
              <div></div>
            </a>
            <h2>Issue#3 - TBD</h2>
            <h1>Phá vỡ giới hạn và bảo vệ môi trường</h1>
          </div>
        </div>
        <div className="Carrousel_Slider">
          <div className="Carrousel_Items" id="ISlot3"></div>
          <div className="Carrousel_Items" id="ISlot1"></div>
          <div className="Carrousel_Items" id="ISlot2"></div>
          <div className="Carrousel_Items" id="ISlot3"></div>
          <div className="Carrousel_Items" id="ISlot1"></div>
        </div>
      </section>
      <section className="Section">Home Page</section>
      <section className="Section" id="sec2"></section>
      <section className="Section" id="sec3"></section>
      <section className="Section" id="sec4"></section>
      <section className="Section" id="sec5"></section>
    </main>
  );
}

export default HomePage;
