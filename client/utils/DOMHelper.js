let DOMHelper = {
  getElem: function (tagId) {
    return document.getElementById(tagId);
  },

  makeBlank: function (tagId) {
    document.getElementById(tagId).value = '';
  },

  hasClass: function (elem,cls) {
    return elem.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  },

  removeClass: function (elem,cls) {
    if (this.hasClass(elem,cls)) {
      var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
      elem.className=elem.className.replace(reg,' ');
    }
  },

  addClass: function (elem,cls) {
    elem.className += ' ' + cls;
  }
}

export default DOMHelper;
