//
// Main JavaScript file
// --------------------------------------------------------
var PLTRFM = {
  init: function () {
    (window.innerWidth < 768) ? PLTRFM.Sliders.init() : PLTRFM.Clicker.init();
  },

  Clicker: {
    init: function () {
      this.methods.init();
    },
    state: {
      index: 0,
    },
    methods: {
      init: function () {
        PLTRFM.Phones.clickEl.querySelector('img').className +="active";
      }
    }
  },

  Phones: {
    swipeEl: document.querySelector("#slider"),
    clickEl: document.querySelector('.bigPhonePic')
  },

  Sliders: {
    init: function () {
       Swipe(PLTRFM.Phones.swipeEl, PLTRFM.Sliders.phones.options);
    },
    options: {
      startSlide: 0,
      speed: 400,
      draggable: false,
      continuous: false,
      disableScroll: false,
      stopPropagation: true,
      callback: function(index, elem, dir) {},
      transitionEnd: function(index, elem) {}

    }
  }
}

PLTRFM.init()
