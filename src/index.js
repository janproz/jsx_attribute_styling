import React from "react";
import ReactDOM from "react-dom";

const pic = "https://picsum.photos/536/354";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        src="https://www.thespruceeats.com/thmb/4lbEmBf-I2NUdi4XCTj-1b5cgKE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-make-your-own-bacon-4146515-17-5b4643f1c9e77c0037514094.jpg"
        alt="bacon"
        className="fav"
      />

      <img
        src="https://cafedelites.com/wp-content/uploads/2018/12/Honey-Baked-Ham-GLAZE-IMAGE-4-500x375.jpg"
        alt="ham"
        className="fav"
      />

      <img src={pic + "?grayscale"} alt="ice cream" className="fav" />
    </div>
  </div>,
  document.getElementById("root")
);
