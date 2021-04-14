AFRAME.registerComponent("button", {

    init: function() {
      let el = this.el;
  
      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 31) {
          el.emit("click", evt, true);
        }
      });
      window.addEventListener("click", function (evt) {
          el.emit("click", evt, true);
      });
    }
  });