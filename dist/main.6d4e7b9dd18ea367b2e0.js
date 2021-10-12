/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./solution/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./solution/styles.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Generale styles */\r\n\r\nhtml {\r\n  margin: 0;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: #e3e2df;\r\n  font-size: 1.5em;\r\n  margin: auto;\r\n\r\n  height: 100%;\r\n  color: #fff;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.8em;\r\n}\r\n\r\n/* Header styles */\r\n\r\nheader {\r\n  padding: 0 12.5% 0 12.5%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: #5d001e;\r\n}\r\n\r\n#search {\r\n  height: 30px;\r\n  padding: 3px 15px;\r\n  margin: auto 0;\r\n  border: solid #5d001e;\r\n  border-radius: 15px;\r\n}\r\n\r\n/* board styles */\r\n\r\n#board-div {\r\n  padding: 0 0 1.5rem 0;\r\n}\r\n\r\n.lists-div {\r\n  filter: drop-shadow(20px 10px 20px #c4c2c4);\r\n  box-sizing: border-box;\r\n  width: 70%;\r\n  margin: 2em auto;\r\n  border-radius: 30px;\r\n  background-color: #e3e2df;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-flow: row wrap;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n  padding: 1.5em;\r\n  min-height: 300px;\r\n  transition: height 2s;\r\n}\r\n\r\n.list-header {\r\n  margin: 10px 0 20px;\r\n}\r\n\r\n/* this is the section style i.e the generale list style */\r\n.section {\r\n  font-size: 1.2rem;\r\n  color: #5d001e;\r\n  width: 31%;\r\n  background-color: #e3afbc;\r\n  border-radius: 15px;\r\n  text-shadow: none;\r\n  margin: 1.5em 0;\r\n}\r\n\r\n.section h2 {\r\n  text-align: center;\r\n}\r\n\r\n.add-input {\r\n  width: 60%;\r\n  padding: 5px 10px;\r\n  margin: 8px 0 0 3%;\r\n  box-sizing: border-box;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  transition: border 0.3s;\r\n}\r\n\r\n.add-input:focus {\r\n  border: 3px solid #555;\r\n}\r\n\r\n.input-div {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 10px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.add-button {\r\n  width: 20%;\r\n  font-size: 1em;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  cursor: pointer;\r\n\r\n  height: 35px;\r\n  text-align: center;\r\n  border: none;\r\n  background-size: 300% 100%;\r\n  border-radius: 50px;\r\n  moz-transition: all 0.4s ease-in-out;\r\n  -o-transition: all 0.4s ease-in-out;\r\n  -webkit-transition: all 0.4s ease-in-out;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.add-button:hover {\r\n  background-position: 100% 0;\r\n  moz-transition: all 0.4s ease-in-out;\r\n  -o-transition: all 0.4s ease-in-out;\r\n  -webkit-transition: all 0.4s ease-in-out;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.add-button:focus {\r\n  outline: none;\r\n}\r\n\r\n.add-button {\r\n  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);\r\n}\r\n\r\n.delete-button {\r\n  font-size: 0.8em;\r\n  margin: 10px 0 0px 10px;\r\n  background-image: linear-gradient(to right, #fc202b, #f15e64, #e14e53, #e2373f);\r\n}\r\n\r\n.task-list {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.task {\r\n  text-align: center;\r\n  font: 200 20px/1.5;\r\n  height: 1.5em;\r\n  line-height: 1.5em;\r\n  border-radius: 10px;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n  color: #000;\r\n  background-color: #ee4c7c;\r\n\r\n  margin: 5px auto;\r\n\r\n  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;\r\n  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;\r\n  -o-transition: font-size 0.3s ease, background-color 0.3s ease;\r\n  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;\r\n  transition: font-size 0.3s ease, background-color 0.3s ease;\r\n  display: block;\r\n  width: 80%;\r\n}\r\n\r\n.task:hover {\r\n  font-size: 30px;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.moving-task {\r\n  width: 300px;\r\n  opacity: 0.7;\r\n  font-size: 30px;\r\n  background: #f6f6f6;\r\n}\r\n\r\n/* the style to implement when we \r\n drag a task and we are above another */\r\n.below-drag {\r\n  border-bottom: solid 3px black;\r\n}\r\n\r\n/* the save, load and create new list section styles */\r\n\r\n#action-div {\r\n  flex-wrap: nowrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  width: 40%;\r\n}\r\n\r\n#api-actions {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  height: 100%;\r\n}\r\n\r\n.action-button {\r\n  border: 0;\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 14px;\r\n  width: 150px;\r\n  margin: 12px;\r\n  color: #ffffff;\r\n  background-color: #36a2eb;\r\n  border-radius: 8px;\r\n  font-family: 'proxima-nova-soft', sans-serif;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n  transition: box-shadow 200ms ease-out;\r\n}\r\n\r\n.action-button {\r\n  background-image: linear-gradient(135deg, #b81515, 80%, #6253e1);\r\n  border-radius: 6px;\r\n  box-sizing: border-box;\r\n  color: #ffffff;\r\n  display: block;\r\n  height: 50px;\r\n  font-size: 1.4em;\r\n  font-weight: 600;\r\n  padding: 4px;\r\n  position: relative;\r\n  text-decoration: none;\r\n  width: 7em;\r\n  z-index: 2;\r\n}\r\n\r\n.action-button:hover {\r\n  color: #fff;\r\n}\r\n\r\n.action-button .action-span {\r\n  align-items: center;\r\n  background: #0e0e10;\r\n  border-radius: 6px;\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 100%;\r\n  transition: background 0.5s ease;\r\n  width: 100%;\r\n}\r\n\r\n.action-button:hover .action-span {\r\n  background: transparent;\r\n}\r\n\r\n#load-btn {\r\n  background-image: linear-gradient(135deg, #008aff, #86d472);\r\n}\r\n\r\n.add-list {\r\n  height: 45px;\r\n  width: 140px;\r\n  display: inline-block;\r\n  padding: 0.5em 1.7em;\r\n  margin: 15px;\r\n  border: 0.25em solid rgba(255, 255, 255, 0);\r\n  background-color: rgb(80, 10, 172);\r\n  border-radius: 2em;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);\r\n  text-align: center;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.add-list:hover {\r\n  border-color: rgb(0, 0, 0);\r\n}\r\n\r\n#add-list-div {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#add-new-list {\r\n  height: 40px;\r\n}\r\n\r\n/* Loading animation styles */\r\n\r\n.bar {\r\n  position: relative;\r\n  height: 2px;\r\n  width: 500px;\r\n  margin: 0 auto;\r\n  background: #000;\r\n  margin-top: 150px;\r\n}\r\n\r\n.circle {\r\n  position: absolute;\r\n  top: -30px;\r\n  margin-left: -30px;\r\n  height: 60px;\r\n  width: 60px;\r\n  left: 0;\r\n  background: #000;\r\n  border-radius: 30%;\r\n  -webkit-animation: move 5s infinite;\r\n}\r\n\r\n.loading-p {\r\n  position: absolute;\r\n  top: -35px;\r\n  right: -118px;\r\n  text-transform: uppercase;\r\n  color: #e3e2df;\r\n  font-family: helvetica, sans-serif;\r\n  font-weight: bold;\r\n}\r\n\r\n@-webkit-keyframes move {\r\n  0% {\r\n    left: 0;\r\n  }\r\n  50% {\r\n    left: 100%;\r\n    -webkit-transform: rotate(450deg);\r\n    width: 150px;\r\n    height: 150px;\r\n  }\r\n  75% {\r\n    left: 100%;\r\n    -webkit-transform: rotate(450deg);\r\n    width: 150px;\r\n    height: 150px;\r\n  }\r\n  100% {\r\n    right: 100%;\r\n  }\r\n}\r\n\r\n/* context menu options styles */\r\n\r\n.delete-task-option {\r\n  margin-top: 3px;\r\n  width: 200px;\r\n  padding-left: 45px;\r\n  padding-top: 7px;\r\n  padding-bottom: 7px;\r\n}\r\n\r\n.delete-task-option:hover {\r\n  background-color: rgb(75, 75, 80);\r\n}\r\n\r\n.context-menu {\r\n  font-size: 0.6em;\r\n  border: solid rgb(63, 64, 66);\r\n  background-color: rgb(41, 42, 45);\r\n}\r\n\r\n/* media query's */\r\n\r\n@media (max-width: 1300px) {\r\n  .lists-div {\r\n    width: 95%;\r\n  }\r\n\r\n  @media (max-width: 700px) {\r\n    .lists-div {\r\n      width: 100%;\r\n    }\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./solution/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');\r\n\r\n/* Generale styles */\r\n\r\nhtml {\r\n  margin: 0;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: #e3e2df;\r\n  font-size: 1.5em;\r\n  margin: auto;\r\n\r\n  height: 100%;\r\n  color: #fff;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.8em;\r\n}\r\n\r\n/* Header styles */\r\n\r\nheader {\r\n  padding: 0 12.5% 0 12.5%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: #5d001e;\r\n}\r\n\r\n#search {\r\n  height: 30px;\r\n  padding: 3px 15px;\r\n  margin: auto 0;\r\n  border: solid #5d001e;\r\n  border-radius: 15px;\r\n}\r\n\r\n/* board styles */\r\n\r\n#board-div {\r\n  padding: 0 0 1.5rem 0;\r\n}\r\n\r\n.lists-div {\r\n  filter: drop-shadow(20px 10px 20px #c4c2c4);\r\n  box-sizing: border-box;\r\n  width: 70%;\r\n  margin: 2em auto;\r\n  border-radius: 30px;\r\n  background-color: #e3e2df;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-flow: row wrap;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n  padding: 1.5em;\r\n  min-height: 300px;\r\n  transition: height 2s;\r\n}\r\n\r\n.list-header {\r\n  margin: 10px 0 20px;\r\n}\r\n\r\n/* this is the section style i.e the generale list style */\r\n.section {\r\n  font-size: 1.2rem;\r\n  color: #5d001e;\r\n  width: 31%;\r\n  background-color: #e3afbc;\r\n  border-radius: 15px;\r\n  text-shadow: none;\r\n  margin: 1.5em 0;\r\n}\r\n\r\n.section h2 {\r\n  text-align: center;\r\n}\r\n\r\n.add-input {\r\n  width: 60%;\r\n  padding: 5px 10px;\r\n  margin: 8px 0 0 3%;\r\n  box-sizing: border-box;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  transition: border 0.3s;\r\n}\r\n\r\n.add-input:focus {\r\n  border: 3px solid #555;\r\n}\r\n\r\n.input-div {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 10px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.add-button {\r\n  width: 20%;\r\n  font-size: 1em;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  cursor: pointer;\r\n\r\n  height: 35px;\r\n  text-align: center;\r\n  border: none;\r\n  background-size: 300% 100%;\r\n  border-radius: 50px;\r\n  moz-transition: all 0.4s ease-in-out;\r\n  -o-transition: all 0.4s ease-in-out;\r\n  -webkit-transition: all 0.4s ease-in-out;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.add-button:hover {\r\n  background-position: 100% 0;\r\n  moz-transition: all 0.4s ease-in-out;\r\n  -o-transition: all 0.4s ease-in-out;\r\n  -webkit-transition: all 0.4s ease-in-out;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.add-button:focus {\r\n  outline: none;\r\n}\r\n\r\n.add-button {\r\n  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);\r\n}\r\n\r\n.delete-button {\r\n  font-size: 0.8em;\r\n  margin: 10px 0 0px 10px;\r\n  background-image: linear-gradient(to right, #fc202b, #f15e64, #e14e53, #e2373f);\r\n}\r\n\r\n.task-list {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.task {\r\n  text-align: center;\r\n  font: 200 20px/1.5;\r\n  height: 1.5em;\r\n  line-height: 1.5em;\r\n  border-radius: 10px;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n  color: #000;\r\n  background-color: #ee4c7c;\r\n\r\n  margin: 5px auto;\r\n\r\n  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;\r\n  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;\r\n  -o-transition: font-size 0.3s ease, background-color 0.3s ease;\r\n  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;\r\n  transition: font-size 0.3s ease, background-color 0.3s ease;\r\n  display: block;\r\n  width: 80%;\r\n}\r\n\r\n.task:hover {\r\n  font-size: 30px;\r\n  background: #f6f6f6;\r\n}\r\n\r\n.moving-task {\r\n  width: 300px;\r\n  opacity: 0.7;\r\n  font-size: 30px;\r\n  background: #f6f6f6;\r\n}\r\n\r\n/* the style to implement when we \r\n drag a task and we are above another */\r\n.below-drag {\r\n  border-bottom: solid 3px black;\r\n}\r\n\r\n/* the save, load and create new list section styles */\r\n\r\n#action-div {\r\n  flex-wrap: nowrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  width: 40%;\r\n}\r\n\r\n#api-actions {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  height: 100%;\r\n}\r\n\r\n.action-button {\r\n  border: 0;\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 14px;\r\n  width: 150px;\r\n  margin: 12px;\r\n  color: #ffffff;\r\n  background-color: #36a2eb;\r\n  border-radius: 8px;\r\n  font-family: 'proxima-nova-soft', sans-serif;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n  transition: box-shadow 200ms ease-out;\r\n}\r\n\r\n.action-button {\r\n  background-image: linear-gradient(135deg, #b81515, 80%, #6253e1);\r\n  border-radius: 6px;\r\n  box-sizing: border-box;\r\n  color: #ffffff;\r\n  display: block;\r\n  height: 50px;\r\n  font-size: 1.4em;\r\n  font-weight: 600;\r\n  padding: 4px;\r\n  position: relative;\r\n  text-decoration: none;\r\n  width: 7em;\r\n  z-index: 2;\r\n}\r\n\r\n.action-button:hover {\r\n  color: #fff;\r\n}\r\n\r\n.action-button .action-span {\r\n  align-items: center;\r\n  background: #0e0e10;\r\n  border-radius: 6px;\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 100%;\r\n  transition: background 0.5s ease;\r\n  width: 100%;\r\n}\r\n\r\n.action-button:hover .action-span {\r\n  background: transparent;\r\n}\r\n\r\n#load-btn {\r\n  background-image: linear-gradient(135deg, #008aff, #86d472);\r\n}\r\n\r\n.add-list {\r\n  height: 45px;\r\n  width: 140px;\r\n  display: inline-block;\r\n  padding: 0.5em 1.7em;\r\n  margin: 15px;\r\n  border: 0.25em solid rgba(255, 255, 255, 0);\r\n  background-color: rgb(80, 10, 172);\r\n  border-radius: 2em;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);\r\n  text-align: center;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.add-list:hover {\r\n  border-color: rgb(0, 0, 0);\r\n}\r\n\r\n#add-list-div {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#add-new-list {\r\n  height: 40px;\r\n}\r\n\r\n/* Loading animation styles */\r\n\r\n.bar {\r\n  position: relative;\r\n  height: 2px;\r\n  width: 500px;\r\n  margin: 0 auto;\r\n  background: #000;\r\n  margin-top: 150px;\r\n}\r\n\r\n.circle {\r\n  position: absolute;\r\n  top: -30px;\r\n  margin-left: -30px;\r\n  height: 60px;\r\n  width: 60px;\r\n  left: 0;\r\n  background: #000;\r\n  border-radius: 30%;\r\n  -webkit-animation: move 5s infinite;\r\n}\r\n\r\n.loading-p {\r\n  position: absolute;\r\n  top: -35px;\r\n  right: -118px;\r\n  text-transform: uppercase;\r\n  color: #e3e2df;\r\n  font-family: helvetica, sans-serif;\r\n  font-weight: bold;\r\n}\r\n\r\n@-webkit-keyframes move {\r\n  0% {\r\n    left: 0;\r\n  }\r\n  50% {\r\n    left: 100%;\r\n    -webkit-transform: rotate(450deg);\r\n    width: 150px;\r\n    height: 150px;\r\n  }\r\n  75% {\r\n    left: 100%;\r\n    -webkit-transform: rotate(450deg);\r\n    width: 150px;\r\n    height: 150px;\r\n  }\r\n  100% {\r\n    right: 100%;\r\n  }\r\n}\r\n\r\n/* context menu options styles */\r\n\r\n.delete-task-option {\r\n  margin-top: 3px;\r\n  width: 200px;\r\n  padding-left: 45px;\r\n  padding-top: 7px;\r\n  padding-bottom: 7px;\r\n}\r\n\r\n.delete-task-option:hover {\r\n  background-color: rgb(75, 75, 80);\r\n}\r\n\r\n.context-menu {\r\n  font-size: 0.6em;\r\n  border: solid rgb(63, 64, 66);\r\n  background-color: rgb(41, 42, 45);\r\n}\r\n\r\n/* media query's */\r\n\r\n@media (max-width: 1300px) {\r\n  .lists-div {\r\n    width: 95%;\r\n  }\r\n\r\n  @media (max-width: 700px) {\r\n    .lists-div {\r\n      width: 100%;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./solution/styles.css":
/*!*****************************!*\
  !*** ./solution/styles.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./solution/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./solution/board.js":
/*!***************************!*\
  !*** ./solution/board.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _helpF_formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpF/formatting */ "./solution/helpF/formatting.js");
/* harmony import */ var _services_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/validator */ "./solution/services/validator.js");
/* harmony import */ var _helpF_help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpF/help */ "./solution/helpF/help.js");
/* eslint-disable no-restricted-syntax */




class Board {
  constructor(BASE_TASKS_LISTS, tasks = {}) {
    /*
      the first thing we do is to add the base lists so they always
      be in the same order when we render them. (todo, in-progress, done)
      The problem is this:
      when we save the board in the localStorage we
      cant keep the order, we save in object form, so we force the order off the first base lists.
  
      **tasks - the lists in the localStorage format. We keep the name for clarity,
      but for each property of the object, tasks, we create a new list.
  
      ~ tasks object example:
  
      tasks = {
        todo: [],
        'in-progress, ["im a task", "me to"]],
        done: [],
        'list-i-added': ["hello world"],
      }
      
      */
    this.BASE_TASKS_LISTS = BASE_TASKS_LISTS
    this.lists = []
    for (const listName of this.BASE_TASKS_LISTS) {
      this.addNewList(listName, [], (0,_helpF_formatting__WEBPACK_IMPORTED_MODULE_0__.formatListClassName)(listName))
    }

    for (const newTaskListName in tasks) {
      if (this.BASE_TASKS_LISTS.includes(newTaskListName)) {
        const alreadyExistsList = this.getListByName(newTaskListName)
        tasks[newTaskListName].forEach((taskText) => this.addTask(alreadyExistsList.id, taskText))
      } else {
        this.addNewList(newTaskListName, [], (0,_helpF_formatting__WEBPACK_IMPORTED_MODULE_0__.formatListClassName)(newTaskListName))
        const newExistingList = this.getListByName(newTaskListName)
        tasks[newTaskListName].forEach((taskText) => this.addTask(newExistingList.id, taskText))
      }
    }
  }

  addTask(listId, taskText) {
    const listTasks = this.getList(listId).tasks
    const task = (0,_services_validator__WEBPACK_IMPORTED_MODULE_1__.validateTask)({ text: taskText, id: this.generateUniqueTaskId(listTasks) })
    listTasks.push(task)
  }

  getList(listId) {
    return (0,_helpF_help__WEBPACK_IMPORTED_MODULE_2__.getObjectFromArray)(listId, this.lists)
  }

  deleteList(listId) {
    this.lists.splice(this.lists.indexOf(this.getList(listId)), 1)
  }

  deleteTask(taskId) {
    const listId = this.getListIdFromTaskId(taskId)
    const list = this.getList(listId)
    const task = this.getTask(taskId)

    list.tasks.splice(list.tasks.indexOf(task), 1)
  }

  generateUniqueTaskId() {
    const allTasks = []

    for (const list of this.lists) {
      allTasks.push(...list.tasks)
    }
    return (0,_helpF_help__WEBPACK_IMPORTED_MODULE_2__.generateNewIdInArrayOfObjects)(allTasks)
  }

  getTask(taskId) {
    const allTasks = []

    for (const list of this.lists) {
      allTasks.push(...list.tasks)
    }

    return (0,_helpF_help__WEBPACK_IMPORTED_MODULE_2__.getObjectFromArray)(taskId, allTasks)
  }

  getListIdFromTaskId(taskId) {
    for (const list of this.lists) {
      for (const task of list.tasks) {
        if (task.id === taskId) return list.id
      }
    }
    throw new Error(`there is no taskId: ${taskId}`)
  }

  getTaskIndex(taskId) {
    return this.getList(this.getListIdFromTaskId(taskId)).tasks.indexOf(this.getTask(taskId))
  }

  getListByName(listName) {
    return this.lists.find((list) => list.name === listName)
  }

  addNewList(name, tasks, styleClass, id = (0,_helpF_help__WEBPACK_IMPORTED_MODULE_2__.generateNewIdInArrayOfObjects)(this.lists)) {
    (0,_helpF_help__WEBPACK_IMPORTED_MODULE_2__.checkIfObjectIdTaken)(id, this.getList)

    this.lists.push({
      id,
      name,
      tasks,
      styleClass,
    })
  }
}


/***/ }),

/***/ "./solution/eventHandling/clickDragAndDropHandler.js":
/*!***********************************************************!*\
  !*** ./solution/eventHandling/clickDragAndDropHandler.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAncestorSectionListId),
/* harmony export */   "getLiTaskId": () => (/* binding */ getLiTaskId),
/* harmony export */   "getTaskFromLi": () => (/* binding */ getTaskFromLi),
/* harmony export */   "filterLists": () => (/* binding */ filterLists),
/* harmony export */   "contextClickHandler": () => (/* binding */ contextClickHandler),
/* harmony export */   "clickEventHandler": () => (/* binding */ clickEventHandler),
/* harmony export */   "altKeyDownEventHandler": () => (/* binding */ altKeyDownEventHandler),
/* harmony export */   "numberKeyDownEventHandler": () => (/* binding */ numberKeyDownEventHandler),
/* harmony export */   "altKeyUpEventHandler": () => (/* binding */ altKeyUpEventHandler),
/* harmony export */   "mouseOverEventHandler": () => (/* binding */ mouseOverEventHandler),
/* harmony export */   "mouseOutEventHandler": () => (/* binding */ mouseOutEventHandler),
/* harmony export */   "dblClickEventHandler": () => (/* binding */ dblClickEventHandler),
/* harmony export */   "focusOutEventHandler": () => (/* binding */ focusOutEventHandler),
/* harmony export */   "onDragStart": () => (/* binding */ onDragStart),
/* harmony export */   "clickDrugAndDropHandler": () => (/* binding */ clickDrugAndDropHandler)
/* harmony export */ });
/* harmony import */ var _helpF_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpF/createElement */ "./solution/helpF/createElement.js");
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */

/* 

remember wen dous everthing loads and what is the timing this is why its not working.

*/

function getAncestorSectionListId(liElement) {
  return Number(liElement.closest('section').dataset.originalListId)
}

function getLiTaskId(liElement) {
  return Number(liElement.dataset.originalTaskId)
}

function getTaskFromLi(liElement) {
  const taskId = getLiTaskId(liElement)

  return board.getTask(taskId)
}

function filterLists() {
  const allLiElements = document.querySelectorAll('.section li')

  const valueInput = document.querySelector('#search').value.toLowerCase().trim()

  for (const liElement of allLiElements) {
    const liValue = liElement.innerText.toLowerCase().trim()

    // eslint-disable-next-line eqeqeq
    liElement.style.display = liValue.search(new RegExp(valueInput.replace(/\s+/, '|'))) != -1 ? '' : 'none'
  }
}

function createMenuOption(text, handler) {
  const menuOption = (0,_helpF_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', [`${text}`], [`${text.replace(/[' ']/g, '-')}-option`])
  menuOption.addEventListener('click', handler)
  return menuOption
}

// will activate when user press right click on a task
// this will display the context menu.
function contextClickHandler(event) {
  const prevMenu = document.querySelector('.context-menu')
  if (prevMenu) prevMenu.remove()

  const target = event.target.closest('LI')

  if (!target) return

  event.preventDefault() // to prevent the browser default context menu.

  const menuOptionDelete = createMenuOption('delete task', removeTask)
  const contextMenu = (0,_helpF_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', [menuOptionDelete], ['context-menu'])

  function removeTask() {
    const taskId = getLiTaskId(target)
    deleteTask(taskId)
  }

  // this function is used to create menu options. feel free to add one of your own!

  contextMenu.style.position = 'absolute'
  contextMenu.style.zIndex = 1000
  document.body.append(contextMenu)

  contextMenu.style.left = `${event.pageX}px`
  contextMenu.style.top = `${event.pageY}px`

  document.addEventListener('click', exitContextMenuHandler)

  function exitContextMenuHandler() {
    contextMenu.remove()
    document.removeEventListener('onclick', exitContextMenuHandler)
  }
}

// this is a event delegation handler for left click events on buttons
function clickEventHandler(event) {
  const target = event.target.closest('BUTTON')

  if (!target) return

  // Each html button element has a dataset role.
  // this way we determine the action to execute.
  const targetRole = target.dataset.role

  if (targetRole === 'adding-task') {
    const inputValue = target.parentElement.querySelector('input').value
    if (inputValue === '') {
      alert('Cant add an empty task!')
    } else {
      const relevantListId = getAncestorSectionListId(target)
      addTask(relevantListId, inputValue)
    }
  } else if (targetRole === 'adding-list') {
    const inputValue = document.getElementById('add-new-list').value
    if (inputValue === '') {
      alert('Cant add an empty task!')
    } else {
      addNewList(inputValue)
    }
  } else if (targetRole === 'saving-board') {
    putTasksToApi(getLocalStorageBoardTasksInNativeFormat())
    startLoadAnimation()
    setTimeout(() => {
      renderBoard()
    }, 100)
  } else if (targetRole === 'loading-board') {
    startLoadAnimation()

    getTasksFromApi().then((tasks) => {
      updateLocalStorageTasksInNativeFormat(tasks)
      renderBoard()
    })
  } else if (targetRole === 'delete-list') {
    const relevantListId = getAncestorSectionListId(target)
    deleteList(relevantListId)
  }
}

let mouseInTask = null // this is for monitoring if the mouse is pointing at the task

function altKeyDownEventHandler(event) {
  const keyPressed = event.key

  if (mouseInTask && keyPressed === 'Alt') {
    document.addEventListener('keydown', numberKeyDownEventHandler)
    document.addEventListener('keyup', altKeyUpEventHandler)
  }
}

function numberKeyDownEventHandler(event) {
  const keyPressed = event.key
  const listsIdsArray = getIdsArrayFromObjArray(board.lists).map((id) => String(id))
  if (mouseInTask && listsIdsArray.includes(keyPressed)) {
    const taskId = getLiTaskId(mouseInTask)
    const newListId = Number(keyPressed)

    moveTask(taskId, newListId)
    mouseInTask = null // the task has moved so the mouse is no longer inside it.
  }
}

function altKeyUpEventHandler(event) {
  const keyLifted = event.key
  if (keyLifted === 'Alt') {
    document.removeEventListener('keydown', numberKeyDownEventHandler)
    document.removeEventListener('keyup', altKeyUpEventHandler)
  }
}

/*
 *
 * here we get the task we are pointing at.
 *
 */

function mouseOverEventHandler(event) {
  const { target } = event

  if (target.tagName !== 'LI') return
  mouseInTask = target
}

function mouseOutEventHandler(event) {
  const { target } = event

  if (target.tagName !== 'LI') return

  mouseInTask = null
}

/*
 *
 * dbl click handlers
 *
 */

let dblClicked = false // later used to determine if to start drag and drop
let mouseDown = false // later used to determine if to start drag and drop

function dblClickEventHandler(event) {
  const { target } = event

  if (target.tagName !== 'LI') return

  dblClicked = true

  target.setAttribute('contenteditable', 'true')
  target.focus()

  // a function to select all the inside off the task.
  function selectElementContents(el) {
    const range = document.createRange()
    range.selectNodeContents(el)
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
  }

  selectElementContents(target)
}

function focusOutEventHandler(event) {
  const { target } = event

  if (target.tagName !== 'LI') return

  // We will use this later when we do the drag and drop
  // to know if to start the drag or not.
  dblClicked = false

  target.setAttribute('contenteditable', 'false')

  // update the task text to mach the new one
  const task = getTaskFromLi(target)
  task.text = target.innerText

  updateLocalStorageTasks()
}

/*
 *
 * drag and drop handlers
 *
 * IMPORTANT! - these functions go on the HTML element itself
 * in renderList() we create tasks with an
 * "onclick" = "clickDrugAndDropHandler(event)" and
 * "ondragstart" = "onDragStart()" attributes.
 *
 */

// to prevent the browser default action
function onDragStart() {
  return false
}

function clickDrugAndDropHandler(event) {
  const { target } = event

  event.preventDefault() // to prevent the selecting action of click

  mouseDown = true

  document.addEventListener('mouseup', onMouseUp)

  // eslint-disable-next-line no-shadow
  function onMouseUp(event) {
    if (event.target === target) {
      mouseDown = false
    }
  }

  // the main drag and drop section!
  // we set a time out so the user can make a dblclick without starting to drag
  // I found that the best time is 300 ms. microsoft says its 500 ms ;)
  const TIME_FOR_USER_TO_DBL_CLICK = 300

  setTimeout(() => {
    if (dblClicked === true || mouseDown === false) return

    event.preventDefault()

    target.classList.add('moving-task')

    const shiftX = event.clientX - target.getBoundingClientRect().left
    const shiftY = event.clientY - target.getBoundingClientRect().top

    target.style.position = 'absolute'
    target.style.zIndex = 1000
    document.body.append(target)

    moveAt(event.pageX, event.pageY)

    // moves the task at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      target.style.left = `${pageX - shiftX}px`
      target.style.top = `${pageY - shiftY - 5}px` // small adjustment for better performance
    }

    let currentDroppable = null

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY)

      target.style.display = 'none'
      const elemBelow = document.elementFromPoint(event.clientX, event.clientY)
      target.style.display = ''

      // mousemove events may trigger out of the window (when the ball is dragged off-screen)
      // if clientX/clientY are out of the window, then elementFromPoint returns null
      if (!elemBelow) return

      // potential droppable are labeled with the class "droppable" (can be other logic)
      const droppableBelow = elemBelow.closest('.droppable')

      // eslint-disable-next-line eqeqeq
      if (currentDroppable != droppableBelow) {
        // we're flying in or out...
        // note: both values can be null
        //   currentDroppable=null if we were not over a droppable before this event (e.g over an empty space)
        //   droppableBelow=null if we're not over a droppable now, during this event

        if (currentDroppable) {
          // the logic to process "flying out" of the droppable (remove highlight)
          leaveDroppable(currentDroppable)
        }
        currentDroppable = droppableBelow
        if (currentDroppable) {
          // the logic to process "flying in" of the droppable
          enterDroppable(currentDroppable)
        }
      }
    }

    // move the task on mousemove
    document.addEventListener('mousemove', onMouseMove)

    // drop the task, remove unneeded handlers
    target.onmouseup = function bar() {
      if (aboveDroppable) {
        if (currentDroppable.tagName === 'LI') {
          const newListId = getAncestorSectionListId(currentDroppable)
          const taskId = Number(target.dataset.originalTaskId)
          const droppableTaskId = getTaskFromLi(currentDroppable).id
          const droppableIndex = board.getTaskIndex(droppableTaskId)

          moveTask(taskId, newListId, droppableIndex + 1)
        } else {
          const newListId = getAncestorSectionListId(currentDroppable)
          const taskId = Number(target.dataset.originalTaskId)

          moveTask(taskId, newListId)
        }
      }

      document.removeEventListener('mousemove', onMouseMove)
      target.onmouseup = null
      target.remove()
      renderBoard()
    }
  }, TIME_FOR_USER_TO_DBL_CLICK)
}

let aboveDroppable = false

function enterDroppable(droppableElement) {
  aboveDroppable = true

  if (droppableElement.tagName === 'LI') {
    droppableElement.classList.add('below-drag')
  }
}

function leaveDroppable(droppableElement) {
  aboveDroppable = false

  if (droppableElement.tagName === 'LI') {
    droppableElement.classList.remove('below-drag')
  }
}

// -------------

// adding the event listeners:

LISTS_DIV.addEventListener('keydown', altKeyDownEventHandler)
LISTS_DIV.addEventListener('mouseover', mouseOverEventHandler)
LISTS_DIV.addEventListener('mouseout', mouseOutEventHandler)

document.addEventListener('click', clickEventHandler)
LISTS_DIV.addEventListener('contextmenu', contextClickHandler)

LISTS_DIV.addEventListener('dblclick', dblClickEventHandler)

LISTS_DIV.addEventListener('focusout', focusOutEventHandler)


/***/ }),

/***/ "./solution/helpF/createElement.js":
/*!*****************************************!*\
  !*** ./solution/helpF/createElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"})
 *
 * @param {String} tagName - the type of the element
 * @param {Array} children - the child elements for the new element.
 *                           Each child can be a DOM element, or a string (if you just want a text element).
 * @param {Array} classes - the class list of the new element
 * @param {Object} attributes - the attributes for the new element
 */
function createElement(tagName, children = [], classes = [], attributes = {}) {
  const mainElement = document.createElement(tagName)
  children.forEach((childElement) => mainElement.append(childElement))
  mainElement.classList.add(...classes)

  for (const attribute in attributes) {
    if (attributes.hasOwnProperty(attribute)) {
      mainElement.setAttribute(attribute, attributes[attribute])
    }
  }
  return mainElement
}


/***/ }),

/***/ "./solution/helpF/formatting.js":
/*!**************************************!*\
  !*** ./solution/helpF/formatting.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatName": () => (/* binding */ formatName),
/* harmony export */   "formatListName": () => (/* binding */ formatListName),
/* harmony export */   "formatListClassName": () => (/* binding */ formatListClassName)
/* harmony export */ });
function formatName(listName) {
  return listName
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

function formatListName(name) {
  return name.replace(/[' ']/g, '-')
}

function formatListClassName(listName) {
  return `${formatListName(listName)}-tasks`
}


/***/ }),

/***/ "./solution/helpF/help.js":
/*!********************************!*\
  !*** ./solution/helpF/help.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes),
/* harmony export */   "getIdsArrayFromObjArray": () => (/* binding */ getIdsArrayFromObjArray),
/* harmony export */   "generateNewIdInArrayOfObjects": () => (/* binding */ generateNewIdInArrayOfObjects),
/* harmony export */   "getObjectFromArray": () => (/* binding */ getObjectFromArray),
/* harmony export */   "checkIfObjectIdTaken": () => (/* binding */ checkIfObjectIdTaken),
/* harmony export */   "deepCopyObj": () => (/* binding */ deepCopyObj)
/* harmony export */ });
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

function getIdsArrayFromObjArray(objectArr) {
  return objectArr.map((obj) => obj.id)
}

function generateNewIdInArrayOfObjects(objectArr) {
  /* Gets the largest id and returns it + 1. 
      i.e the returning id does not exists in the
      array and is unique.
      */

  if (objectArr.length === 0) return 1
  const idArray = getIdsArrayFromObjArray(objectArr)
  return Math.max(...idArray) + 1
}

function getObjectFromArray(objectId, objectArr) {
  // throws Error if Object does not exists.
  const requestedObject = objectArr.find((obj) => obj.id === objectId)
  if (requestedObject === undefined) throw new Error('no such object exists')
  return requestedObject
}

function checkIfObjectIdTaken(id, getFunction) {
  // getFunction is a function expression. we will know where to search depending on the function
  try {
    getFunction(id) // remember: getFunction can be: [getList] and throws Error if no list was found.
    throw new Error('id already exist')
  } catch (error) {
    /* 
        Only if the error is because of "finding" the object
        then we continue and throw an Error.
        */
    if (error.message === 'id already exist') {
      throw new Error('id already exist')
    }
  }
}

function deepCopyObj(obj) {
  return JSON.parse(JSON.stringify(obj))
}


/***/ }),

/***/ "./solution/services/dom.js":
/*!**********************************!*\
  !*** ./solution/services/dom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTasksFromList": () => (/* binding */ createTasksFromList),
/* harmony export */   "renderList": () => (/* binding */ renderList),
/* harmony export */   "renderLists": () => (/* binding */ renderLists),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard)
/* harmony export */ });
/* harmony import */ var _helpF_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpF/createElement */ "./solution/helpF/createElement.js");
/* harmony import */ var _helpF_formatting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpF/formatting */ "./solution/helpF/formatting.js");
/* harmony import */ var _helpF_help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpF/help */ "./solution/helpF/help.js");
/* harmony import */ var _eventHandling_clickDragAndDropHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eventHandling/clickDragAndDropHandler */ "./solution/eventHandling/clickDragAndDropHandler.js");
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */




// eslint-disable-next-line no-unused-vars

/*
 *
 * renderList - creates each task and insert it into ul
 * then renders to the LISTS_DIV
 *
 */

function createTasksFromList(list) {
  const tasks = []
  for (const task of list.tasks) {
    tasks.push(
      (0,_helpF_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('li', [task.text], ['task', 'droppable'], {
        'data-original-task-id': task.id,
        onmousedown: 'clickDrugAndDropHandler(event)', // look down in handler functions
        ondragstart: 'onDragStart()', // to cancel the default browser action
      })
    )
  }
  return tasks
}

function renderList(list, fatherDiv) {
  fatherDiv.style.height = ''

  const deleteButton = (0,_helpF_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', ['delete'], ['delete-button', 'add-button'], {
    'data-role': 'delete-list',
  })
  const listHeader = (0,_helpF_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', [(0,_helpF_formatting__WEBPACK_IMPORTED_MODULE_1__.formatName)(list.name)], ['list-header'])
  const input = (0,_helpF_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', [], ['add-input'], {
    id: `add-${list.styleClass.slice(0, -1)}`,
    placeholder: 'new task',
  })
  const addButton = (0,_helpF_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', ['Add'], ['add-button'], {
    id: `submit-add-${list.styleClass.slice(0, list.styleClass.indexOf('-tasks'))}`,
    'data-role': 'adding-task',
  })

  const inputDiv = (0,_helpF_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', [input, addButton], ['input-div'])

  const tasks = createTasksFromList(list)

  const tasksList = (0,_helpF_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('ul', tasks, [list.styleClass, 'task-list'])
  const section = (0,_helpF_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('section', [deleteButton, listHeader, tasksList, inputDiv], ['section', 'droppable'], {
    'data-original-list-id': list.id,
  })

  fatherDiv.append(section)
}

function renderLists(fatherDiv, board) {
  (0,_helpF_help__WEBPACK_IMPORTED_MODULE_2__.removeAllChildNodes)(fatherDiv)

  for (const list of board.lists) {
    renderList(list, fatherDiv)
  }
}

function renderBoard(fatherDiv, board) {
  renderLists(fatherDiv, board.lists)
  // renderCalender(calenderDiv)
}


/***/ }),

/***/ "./solution/services/storage.js":
/*!**************************************!*\
  !*** ./solution/services/storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateLocalStorageTasks": () => (/* binding */ updateLocalStorageTasks),
/* harmony export */   "getLocalStorageBoardTasksInNativeFormat": () => (/* binding */ getLocalStorageBoardTasksInNativeFormat),
/* harmony export */   "getLocalStorageBoardTasks": () => (/* binding */ getLocalStorageBoardTasks),
/* harmony export */   "updateLocalStorageTasksInNativeFormat": () => (/* binding */ updateLocalStorageTasksInNativeFormat),
/* harmony export */   "setDefaultLocalStorageTasks": () => (/* binding */ setDefaultLocalStorageTasks)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */
function updateLocalStorageTasks(board) {
  const tasks = {
    todo: [],
    'in-progress': [],
    done: [],
  }

  // the format requires 'todo' and not 'to-do' so we handle this here.
  for (const list of board.lists) {
    if (list.name === 'to-do') {
      tasks.todo = list.tasks.map((task) => task.text)
    } else {
      tasks[list.name] = list.tasks.map((task) => task.text)
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// this functions will help us in managing the sever api.
function getLocalStorageBoardTasksInNativeFormat() {
  return JSON.parse(localStorage.getItem('tasks'))
}

function getLocalStorageBoardTasks() {
  const localStorageTasks = getLocalStorageBoardTasksInNativeFormat()

  // we replace the property key: 'todo' with the key 'to-do',
  // so our Board class can handle it properly.
  delete Object.assign(localStorageTasks, { 'to-do': localStorageTasks.todo }).todo
  return localStorageTasks
}

function updateLocalStorageTasksInNativeFormat(newTasks) {
  localStorage.setItem('tasks', JSON.stringify(newTasks))
}

function setDefaultLocalStorageTasks() {
  localStorage.setItem('tasks', JSON.stringify({ todo: [], 'in-progress': [], done: [] }))
}


/***/ }),

/***/ "./solution/services/validator.js":
/*!****************************************!*\
  !*** ./solution/services/validator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateTask": () => (/* binding */ validateTask)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
function validateTask(task) {
  if (typeof task === 'object' && task.text.length) {
    return task
  }

  throw Error('Invalid task')
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./solution/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LISTS_DIV": () => (/* binding */ LISTS_DIV),
/* harmony export */   "BASE_TASKS_LISTS": () => (/* binding */ BASE_TASKS_LISTS),
/* harmony export */   "board": () => (/* binding */ board)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./solution/styles.css");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./solution/board.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/storage */ "./solution/services/storage.js");
/* harmony import */ var _services_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/dom */ "./solution/services/dom.js");
/* harmony import */ var _eventHandling_clickDragAndDropHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventHandling/clickDragAndDropHandler */ "./solution/eventHandling/clickDragAndDropHandler.js");
/* eslint-disable import/prefer-default-export */




// eslint-disable-next-line no-unused-vars


/*
 * The mane Board class.
 *
 * every render off the UI is done thru the board object
 * the basic structure is like this:
 *
 * board = {
 *  lists: [{ id: 1, name: 'done', tasks: [{id: 1, text: 'I am a task'}, {}...], styleclass: 'done-tasks'}, {}, ...],
 *  baseTasksList = []
 * }
 *
 */

// constants for us to use.
const LISTS_DIV = document.getElementById('lists-div')
const BASE_TASKS_LISTS = ['to-do', 'in-progress', 'done']
// eslint-disable-next-line import/no-mutable-exports
let board

/*
 * ENTERING FUNCTION.
 *
 * When entering the site or refreshing the page we check
 * if we have a localStorage tasks object set up.
 * if not, we create one in base form.
 *
 * After that we render the board.
 */

function onEnteringSite() {
  if (!localStorage.getItem('tasks')) {
    (0,_services_storage__WEBPACK_IMPORTED_MODULE_2__.setDefaultLocalStorageTasks)()
  }
  board = new _board__WEBPACK_IMPORTED_MODULE_1__["default"](BASE_TASKS_LISTS, (0,_services_storage__WEBPACK_IMPORTED_MODULE_2__.getLocalStorageBoardTasks)())
  board.LISTS_DIV = LISTS_DIV // TODO: should be in the constructor
  ;(0,_services_dom__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(LISTS_DIV, board)
}

onEnteringSite()

// -------------------
/*
 *
 * The main rendering functions
 *
 *
 */

/*
 *
 * renderBoard - creates a new board from localStorage
 * and renders the lists.
 * optional for the future - adding renderCalender() and
 * what we want to add to the board class
 *
 */

// -------------------
/*
 *
 *
 * board management functions.
 *
 *
 */

// -------------------
/*
 *
 *
 * event handling functions.
 *
 */

// this function is for the search input at the top of the page.
// onkeyup="filterLists()" --> look in html

// -------------------

/*
 *
 *
 * local storage management functions.
 *
 * this is an api for working with the local storage format.
 * the format:
 * {
 *    'todo' : [],
 *    'in-progress: [],
 *    'done': [],
 * }
 */

// -------------------
/*
 *
 *
 * server api methods.
 *
 * here we use fetch to send requests to the server.
 * important - if we get an error we alert the user and run the function again.
 *
 */

/*
 *
 * loading animation.
 * renders a cool animation to the LISTS_DIV
 *
 */

// -------------------
/*
 *
 * help functions
 *
 */

/*
 *
 * validation functions
 *
 */

// -------------------

// -------------------

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFX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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDhFQUEyQjtBQUMvQjtBQUNBLGNBQWMsOENBQUssbUJBQW1CLDRFQUF5QjtBQUMvRDtBQUNBLEVBQUUsMkRBQVc7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9zdHlsZXMuY3NzPzU5Y2YiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL2JvYXJkLmpzIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vZXZlbnRIYW5kbGluZy9jbGlja0RyYWdBbmREcm9wSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL2hlbHBGL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9oZWxwRi9mb3JtYXR0aW5nLmpzIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vaGVscEYvaGVscC5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL3NlcnZpY2VzL2RvbS5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL3NlcnZpY2VzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9zZXJ2aWNlcy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHZW5lcmFsZSBzdHlsZXMgKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTJkZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIHN0eWxlcyAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAwIDEyLjUlIDAgMTIuNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMDAxZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaCB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAzcHggMTVweDtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAjNWQwMDFlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYm9hcmQgc3R5bGVzICovXFxyXFxuXFxyXFxuI2JvYXJkLWRpdiB7XFxyXFxuICBwYWRkaW5nOiAwIDAgMS41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0cy1kaXYge1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygyMHB4IDEwcHggMjBweCAjYzRjMmM0KTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAyZW0gYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlMmRmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIHBhZGRpbmc6IDEuNWVtO1xcclxcbiAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWhlYWRlciB7XFxyXFxuICBtYXJnaW46IDEwcHggMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0aGlzIGlzIHRoZSBzZWN0aW9uIHN0eWxlIGkuZSB0aGUgZ2VuZXJhbGUgbGlzdCBzdHlsZSAqL1xcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6ICM1ZDAwMWU7XFxyXFxuICB3aWR0aDogMzElO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzYWZiYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG4gIG1hcmdpbjogMS41ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIG1hcmdpbjogOHB4IDAgMCAzJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XFxyXFxuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b246Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjkzMjNjLCAjNDg1NTYzLCAjMmI1ODc2LCAjNGU0Mzc2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDBweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmMyMDJiLCAjZjE1ZTY0LCAjZTE0ZTUzLCAjZTIzNzNmKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250OiAyMDAgMjBweC8xLjU7XFxyXFxuICBoZWlnaHQ6IDEuNWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTRjN2M7XFxyXFxuXFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcblxcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICAtby10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aW5nLXRhc2sge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGhlIHN0eWxlIHRvIGltcGxlbWVudCB3aGVuIHdlIFxcclxcbiBkcmFnIGEgdGFzayBhbmQgd2UgYXJlIGFib3ZlIGFub3RoZXIgKi9cXHJcXG4uYmVsb3ctZHJhZyB7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qIHRoZSBzYXZlLCBsb2FkIGFuZCBjcmVhdGUgbmV3IGxpc3Qgc2VjdGlvbiBzdHlsZXMgKi9cXHJcXG5cXHJcXG4jYWN0aW9uLWRpdiB7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbiNhcGktYWN0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1idXR0b24ge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMTRweDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIG1hcmdpbjogMTJweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2YTJlYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhLXNvZnQnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNiODE1MTUsIDgwJSwgIzYyNTNlMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgd2lkdGg6IDdlbTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ1dHRvbiAuYWN0aW9uLXNwYW4ge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICMwZTBlMTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ1dHRvbjpob3ZlciAuYWN0aW9uLXNwYW4ge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNsb2FkLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA4YWZmLCAjODZkNDcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1saXN0IHtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIHdpZHRoOiAxNDBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDEuN2VtO1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTAsIDE3Mik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMC4wNGVtIDAuMDRlbSByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5hZGQtbGlzdDpob3ZlciB7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1saXN0LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1uZXctbGlzdCB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIExvYWRpbmcgYW5pbWF0aW9uIHN0eWxlcyAqL1xcclxcblxcclxcbi5iYXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC0zMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlIDVzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZy1wIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTM1cHg7XFxyXFxuICByaWdodDogLTExOHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjZTNlMmRmO1xcclxcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBsZWZ0OiAxMDAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1MGRlZyk7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGxlZnQ6IDEwMCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDUwZGVnKTtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHJpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250ZXh0IG1lbnUgb3B0aW9ucyBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2stb3B0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNDVweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2stb3B0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRleHQtbWVudSB7XFxyXFxuICBmb250LXNpemU6IDAuNmVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCByZ2IoNjMsIDY0LCA2Nik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQyLCA0NSk7XFxyXFxufVxcclxcblxcclxcbi8qIG1lZGlhIHF1ZXJ5J3MgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XFxyXFxuICAubGlzdHMtZGl2IHtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgICAubGlzdHMtZGl2IHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zb2x1dGlvbi9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pC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ZDs7QUFFQSw2QkFBNkI7O0FBRTdCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsT0FBTztFQUNUO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7SUFDVixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUEsZ0NBQWdDOztBQUVoQztFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGlDQUFpQztBQUNuQzs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRTtNQUNFLFdBQVc7SUFDYjtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vKiBHZW5lcmFsZSBzdHlsZXMgKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTJkZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIHN0eWxlcyAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAwIDEyLjUlIDAgMTIuNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMDAxZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaCB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAzcHggMTVweDtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAjNWQwMDFlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYm9hcmQgc3R5bGVzICovXFxyXFxuXFxyXFxuI2JvYXJkLWRpdiB7XFxyXFxuICBwYWRkaW5nOiAwIDAgMS41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0cy1kaXYge1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygyMHB4IDEwcHggMjBweCAjYzRjMmM0KTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAyZW0gYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlMmRmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIHBhZGRpbmc6IDEuNWVtO1xcclxcbiAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWhlYWRlciB7XFxyXFxuICBtYXJnaW46IDEwcHggMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0aGlzIGlzIHRoZSBzZWN0aW9uIHN0eWxlIGkuZSB0aGUgZ2VuZXJhbGUgbGlzdCBzdHlsZSAqL1xcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6ICM1ZDAwMWU7XFxyXFxuICB3aWR0aDogMzElO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzYWZiYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG4gIG1hcmdpbjogMS41ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIG1hcmdpbjogOHB4IDAgMCAzJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XFxyXFxuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b246Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjkzMjNjLCAjNDg1NTYzLCAjMmI1ODc2LCAjNGU0Mzc2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDBweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmMyMDJiLCAjZjE1ZTY0LCAjZTE0ZTUzLCAjZTIzNzNmKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250OiAyMDAgMjBweC8xLjU7XFxyXFxuICBoZWlnaHQ6IDEuNWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTRjN2M7XFxyXFxuXFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcblxcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICAtby10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aW5nLXRhc2sge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGhlIHN0eWxlIHRvIGltcGxlbWVudCB3aGVuIHdlIFxcclxcbiBkcmFnIGEgdGFzayBhbmQgd2UgYXJlIGFib3ZlIGFub3RoZXIgKi9cXHJcXG4uYmVsb3ctZHJhZyB7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qIHRoZSBzYXZlLCBsb2FkIGFuZCBjcmVhdGUgbmV3IGxpc3Qgc2VjdGlvbiBzdHlsZXMgKi9cXHJcXG5cXHJcXG4jYWN0aW9uLWRpdiB7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbiNhcGktYWN0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1idXR0b24ge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMTRweDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIG1hcmdpbjogMTJweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2YTJlYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhLXNvZnQnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNiODE1MTUsIDgwJSwgIzYyNTNlMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgd2lkdGg6IDdlbTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ1dHRvbiAuYWN0aW9uLXNwYW4ge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICMwZTBlMTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ1dHRvbjpob3ZlciAuYWN0aW9uLXNwYW4ge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNsb2FkLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA4YWZmLCAjODZkNDcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1saXN0IHtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIHdpZHRoOiAxNDBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDEuN2VtO1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTAsIDE3Mik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMC4wNGVtIDAuMDRlbSByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5hZGQtbGlzdDpob3ZlciB7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1saXN0LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1uZXctbGlzdCB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIExvYWRpbmcgYW5pbWF0aW9uIHN0eWxlcyAqL1xcclxcblxcclxcbi5iYXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC0zMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlIDVzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZy1wIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTM1cHg7XFxyXFxuICByaWdodDogLTExOHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjZTNlMmRmO1xcclxcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBsZWZ0OiAxMDAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1MGRlZyk7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGxlZnQ6IDEwMCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDUwZGVnKTtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHJpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250ZXh0IG1lbnUgb3B0aW9ucyBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2stb3B0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNDVweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2stb3B0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRleHQtbWVudSB7XFxyXFxuICBmb250LXNpemU6IDAuNmVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCByZ2IoNjMsIDY0LCA2Nik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQyLCA0NSk7XFxyXFxufVxcclxcblxcclxcbi8qIG1lZGlhIHF1ZXJ5J3MgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XFxyXFxuICAubGlzdHMtZGl2IHtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgICAubGlzdHMtZGl2IHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IHsgZm9ybWF0TGlzdENsYXNzTmFtZSB9IGZyb20gJy4vaGVscEYvZm9ybWF0dGluZydcbmltcG9ydCB7IHZhbGlkYXRlVGFzayB9IGZyb20gJy4vc2VydmljZXMvdmFsaWRhdG9yJ1xuaW1wb3J0IHsgZ2V0T2JqZWN0RnJvbUFycmF5LCBnZW5lcmF0ZU5ld0lkSW5BcnJheU9mT2JqZWN0cywgY2hlY2tJZk9iamVjdElkVGFrZW4gfSBmcm9tICcuL2hlbHBGL2hlbHAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoQkFTRV9UQVNLU19MSVNUUywgdGFza3MgPSB7fSkge1xuICAgIC8qXG4gICAgICB0aGUgZmlyc3QgdGhpbmcgd2UgZG8gaXMgdG8gYWRkIHRoZSBiYXNlIGxpc3RzIHNvIHRoZXkgYWx3YXlzXG4gICAgICBiZSBpbiB0aGUgc2FtZSBvcmRlciB3aGVuIHdlIHJlbmRlciB0aGVtLiAodG9kbywgaW4tcHJvZ3Jlc3MsIGRvbmUpXG4gICAgICBUaGUgcHJvYmxlbSBpcyB0aGlzOlxuICAgICAgd2hlbiB3ZSBzYXZlIHRoZSBib2FyZCBpbiB0aGUgbG9jYWxTdG9yYWdlIHdlXG4gICAgICBjYW50IGtlZXAgdGhlIG9yZGVyLCB3ZSBzYXZlIGluIG9iamVjdCBmb3JtLCBzbyB3ZSBmb3JjZSB0aGUgb3JkZXIgb2ZmIHRoZSBmaXJzdCBiYXNlIGxpc3RzLlxuICBcbiAgICAgICoqdGFza3MgLSB0aGUgbGlzdHMgaW4gdGhlIGxvY2FsU3RvcmFnZSBmb3JtYXQuIFdlIGtlZXAgdGhlIG5hbWUgZm9yIGNsYXJpdHksXG4gICAgICBidXQgZm9yIGVhY2ggcHJvcGVydHkgb2YgdGhlIG9iamVjdCwgdGFza3MsIHdlIGNyZWF0ZSBhIG5ldyBsaXN0LlxuICBcbiAgICAgIH4gdGFza3Mgb2JqZWN0IGV4YW1wbGU6XG4gIFxuICAgICAgdGFza3MgPSB7XG4gICAgICAgIHRvZG86IFtdLFxuICAgICAgICAnaW4tcHJvZ3Jlc3MsIFtcImltIGEgdGFza1wiLCBcIm1lIHRvXCJdXSxcbiAgICAgICAgZG9uZTogW10sXG4gICAgICAgICdsaXN0LWktYWRkZWQnOiBbXCJoZWxsbyB3b3JsZFwiXSxcbiAgICAgIH1cbiAgICAgIFxuICAgICAgKi9cbiAgICB0aGlzLkJBU0VfVEFTS1NfTElTVFMgPSBCQVNFX1RBU0tTX0xJU1RTXG4gICAgdGhpcy5saXN0cyA9IFtdXG4gICAgZm9yIChjb25zdCBsaXN0TmFtZSBvZiB0aGlzLkJBU0VfVEFTS1NfTElTVFMpIHtcbiAgICAgIHRoaXMuYWRkTmV3TGlzdChsaXN0TmFtZSwgW10sIGZvcm1hdExpc3RDbGFzc05hbWUobGlzdE5hbWUpKVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgbmV3VGFza0xpc3ROYW1lIGluIHRhc2tzKSB7XG4gICAgICBpZiAodGhpcy5CQVNFX1RBU0tTX0xJU1RTLmluY2x1ZGVzKG5ld1Rhc2tMaXN0TmFtZSkpIHtcbiAgICAgICAgY29uc3QgYWxyZWFkeUV4aXN0c0xpc3QgPSB0aGlzLmdldExpc3RCeU5hbWUobmV3VGFza0xpc3ROYW1lKVxuICAgICAgICB0YXNrc1tuZXdUYXNrTGlzdE5hbWVdLmZvckVhY2goKHRhc2tUZXh0KSA9PiB0aGlzLmFkZFRhc2soYWxyZWFkeUV4aXN0c0xpc3QuaWQsIHRhc2tUZXh0KSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkTmV3TGlzdChuZXdUYXNrTGlzdE5hbWUsIFtdLCBmb3JtYXRMaXN0Q2xhc3NOYW1lKG5ld1Rhc2tMaXN0TmFtZSkpXG4gICAgICAgIGNvbnN0IG5ld0V4aXN0aW5nTGlzdCA9IHRoaXMuZ2V0TGlzdEJ5TmFtZShuZXdUYXNrTGlzdE5hbWUpXG4gICAgICAgIHRhc2tzW25ld1Rhc2tMaXN0TmFtZV0uZm9yRWFjaCgodGFza1RleHQpID0+IHRoaXMuYWRkVGFzayhuZXdFeGlzdGluZ0xpc3QuaWQsIHRhc2tUZXh0KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRUYXNrKGxpc3RJZCwgdGFza1RleHQpIHtcbiAgICBjb25zdCBsaXN0VGFza3MgPSB0aGlzLmdldExpc3QobGlzdElkKS50YXNrc1xuICAgIGNvbnN0IHRhc2sgPSB2YWxpZGF0ZVRhc2soeyB0ZXh0OiB0YXNrVGV4dCwgaWQ6IHRoaXMuZ2VuZXJhdGVVbmlxdWVUYXNrSWQobGlzdFRhc2tzKSB9KVxuICAgIGxpc3RUYXNrcy5wdXNoKHRhc2spXG4gIH1cblxuICBnZXRMaXN0KGxpc3RJZCkge1xuICAgIHJldHVybiBnZXRPYmplY3RGcm9tQXJyYXkobGlzdElkLCB0aGlzLmxpc3RzKVxuICB9XG5cbiAgZGVsZXRlTGlzdChsaXN0SWQpIHtcbiAgICB0aGlzLmxpc3RzLnNwbGljZSh0aGlzLmxpc3RzLmluZGV4T2YodGhpcy5nZXRMaXN0KGxpc3RJZCkpLCAxKVxuICB9XG5cbiAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICBjb25zdCBsaXN0SWQgPSB0aGlzLmdldExpc3RJZEZyb21UYXNrSWQodGFza0lkKVxuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldExpc3QobGlzdElkKVxuICAgIGNvbnN0IHRhc2sgPSB0aGlzLmdldFRhc2sodGFza0lkKVxuXG4gICAgbGlzdC50YXNrcy5zcGxpY2UobGlzdC50YXNrcy5pbmRleE9mKHRhc2spLCAxKVxuICB9XG5cbiAgZ2VuZXJhdGVVbmlxdWVUYXNrSWQoKSB7XG4gICAgY29uc3QgYWxsVGFza3MgPSBbXVxuXG4gICAgZm9yIChjb25zdCBsaXN0IG9mIHRoaXMubGlzdHMpIHtcbiAgICAgIGFsbFRhc2tzLnB1c2goLi4ubGlzdC50YXNrcylcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlTmV3SWRJbkFycmF5T2ZPYmplY3RzKGFsbFRhc2tzKVxuICB9XG5cbiAgZ2V0VGFzayh0YXNrSWQpIHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IFtdXG5cbiAgICBmb3IgKGNvbnN0IGxpc3Qgb2YgdGhpcy5saXN0cykge1xuICAgICAgYWxsVGFza3MucHVzaCguLi5saXN0LnRhc2tzKVxuICAgIH1cblxuICAgIHJldHVybiBnZXRPYmplY3RGcm9tQXJyYXkodGFza0lkLCBhbGxUYXNrcylcbiAgfVxuXG4gIGdldExpc3RJZEZyb21UYXNrSWQodGFza0lkKSB7XG4gICAgZm9yIChjb25zdCBsaXN0IG9mIHRoaXMubGlzdHMpIHtcbiAgICAgIGZvciAoY29uc3QgdGFzayBvZiBsaXN0LnRhc2tzKSB7XG4gICAgICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHJldHVybiBsaXN0LmlkXG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgdGhlcmUgaXMgbm8gdGFza0lkOiAke3Rhc2tJZH1gKVxuICB9XG5cbiAgZ2V0VGFza0luZGV4KHRhc2tJZCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3QodGhpcy5nZXRMaXN0SWRGcm9tVGFza0lkKHRhc2tJZCkpLnRhc2tzLmluZGV4T2YodGhpcy5nZXRUYXNrKHRhc2tJZCkpXG4gIH1cblxuICBnZXRMaXN0QnlOYW1lKGxpc3ROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5uYW1lID09PSBsaXN0TmFtZSlcbiAgfVxuXG4gIGFkZE5ld0xpc3QobmFtZSwgdGFza3MsIHN0eWxlQ2xhc3MsIGlkID0gZ2VuZXJhdGVOZXdJZEluQXJyYXlPZk9iamVjdHModGhpcy5saXN0cykpIHtcbiAgICBjaGVja0lmT2JqZWN0SWRUYWtlbihpZCwgdGhpcy5nZXRMaXN0KVxuXG4gICAgdGhpcy5saXN0cy5wdXNoKHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIHRhc2tzLFxuICAgICAgc3R5bGVDbGFzcyxcbiAgICB9KVxuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tc2hhZG93ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuLi9oZWxwRi9jcmVhdGVFbGVtZW50J1xuLyogXG5cbnJlbWVtYmVyIHdlbiBkb3VzIGV2ZXJ0aGluZyBsb2FkcyBhbmQgd2hhdCBpcyB0aGUgdGltaW5nIHRoaXMgaXMgd2h5IGl0cyBub3Qgd29ya2luZy5cblxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QW5jZXN0b3JTZWN0aW9uTGlzdElkKGxpRWxlbWVudCkge1xuICByZXR1cm4gTnVtYmVyKGxpRWxlbWVudC5jbG9zZXN0KCdzZWN0aW9uJykuZGF0YXNldC5vcmlnaW5hbExpc3RJZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpVGFza0lkKGxpRWxlbWVudCkge1xuICByZXR1cm4gTnVtYmVyKGxpRWxlbWVudC5kYXRhc2V0Lm9yaWdpbmFsVGFza0lkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0Zyb21MaShsaUVsZW1lbnQpIHtcbiAgY29uc3QgdGFza0lkID0gZ2V0TGlUYXNrSWQobGlFbGVtZW50KVxuXG4gIHJldHVybiBib2FyZC5nZXRUYXNrKHRhc2tJZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckxpc3RzKCkge1xuICBjb25zdCBhbGxMaUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24gbGknKVxuXG4gIGNvbnN0IHZhbHVlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJykudmFsdWUudG9Mb3dlckNhc2UoKS50cmltKClcblxuICBmb3IgKGNvbnN0IGxpRWxlbWVudCBvZiBhbGxMaUVsZW1lbnRzKSB7XG4gICAgY29uc3QgbGlWYWx1ZSA9IGxpRWxlbWVudC5pbm5lclRleHQudG9Mb3dlckNhc2UoKS50cmltKClcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICBsaUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGxpVmFsdWUuc2VhcmNoKG5ldyBSZWdFeHAodmFsdWVJbnB1dC5yZXBsYWNlKC9cXHMrLywgJ3wnKSkpICE9IC0xID8gJycgOiAnbm9uZSdcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51T3B0aW9uKHRleHQsIGhhbmRsZXIpIHtcbiAgY29uc3QgbWVudU9wdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtgJHt0ZXh0fWBdLCBbYCR7dGV4dC5yZXBsYWNlKC9bJyAnXS9nLCAnLScpfS1vcHRpb25gXSlcbiAgbWVudU9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gIHJldHVybiBtZW51T3B0aW9uXG59XG5cbi8vIHdpbGwgYWN0aXZhdGUgd2hlbiB1c2VyIHByZXNzIHJpZ2h0IGNsaWNrIG9uIGEgdGFza1xuLy8gdGhpcyB3aWxsIGRpc3BsYXkgdGhlIGNvbnRleHQgbWVudS5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZXh0Q2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IHByZXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRleHQtbWVudScpXG4gIGlmIChwcmV2TWVudSkgcHJldk1lbnUucmVtb3ZlKClcblxuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnTEknKVxuXG4gIGlmICghdGFyZ2V0KSByZXR1cm5cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIC8vIHRvIHByZXZlbnQgdGhlIGJyb3dzZXIgZGVmYXVsdCBjb250ZXh0IG1lbnUuXG5cbiAgY29uc3QgbWVudU9wdGlvbkRlbGV0ZSA9IGNyZWF0ZU1lbnVPcHRpb24oJ2RlbGV0ZSB0YXNrJywgcmVtb3ZlVGFzaylcbiAgY29uc3QgY29udGV4dE1lbnUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbbWVudU9wdGlvbkRlbGV0ZV0sIFsnY29udGV4dC1tZW51J10pXG5cbiAgZnVuY3Rpb24gcmVtb3ZlVGFzaygpIHtcbiAgICBjb25zdCB0YXNrSWQgPSBnZXRMaVRhc2tJZCh0YXJnZXQpXG4gICAgZGVsZXRlVGFzayh0YXNrSWQpXG4gIH1cblxuICAvLyB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIG1lbnUgb3B0aW9ucy4gZmVlbCBmcmVlIHRvIGFkZCBvbmUgb2YgeW91ciBvd24hXG5cbiAgY29udGV4dE1lbnUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gIGNvbnRleHRNZW51LnN0eWxlLnpJbmRleCA9IDEwMDBcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGV4dE1lbnUpXG5cbiAgY29udGV4dE1lbnUuc3R5bGUubGVmdCA9IGAke2V2ZW50LnBhZ2VYfXB4YFxuICBjb250ZXh0TWVudS5zdHlsZS50b3AgPSBgJHtldmVudC5wYWdlWX1weGBcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4aXRDb250ZXh0TWVudUhhbmRsZXIpXG5cbiAgZnVuY3Rpb24gZXhpdENvbnRleHRNZW51SGFuZGxlcigpIHtcbiAgICBjb250ZXh0TWVudS5yZW1vdmUoKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29uY2xpY2snLCBleGl0Q29udGV4dE1lbnVIYW5kbGVyKVxuICB9XG59XG5cbi8vIHRoaXMgaXMgYSBldmVudCBkZWxlZ2F0aW9uIGhhbmRsZXIgZm9yIGxlZnQgY2xpY2sgZXZlbnRzIG9uIGJ1dHRvbnNcbmV4cG9ydCBmdW5jdGlvbiBjbGlja0V2ZW50SGFuZGxlcihldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnQlVUVE9OJylcblxuICBpZiAoIXRhcmdldCkgcmV0dXJuXG5cbiAgLy8gRWFjaCBodG1sIGJ1dHRvbiBlbGVtZW50IGhhcyBhIGRhdGFzZXQgcm9sZS5cbiAgLy8gdGhpcyB3YXkgd2UgZGV0ZXJtaW5lIHRoZSBhY3Rpb24gdG8gZXhlY3V0ZS5cbiAgY29uc3QgdGFyZ2V0Um9sZSA9IHRhcmdldC5kYXRhc2V0LnJvbGVcblxuICBpZiAodGFyZ2V0Um9sZSA9PT0gJ2FkZGluZy10YXNrJykge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlXG4gICAgaWYgKGlucHV0VmFsdWUgPT09ICcnKSB7XG4gICAgICBhbGVydCgnQ2FudCBhZGQgYW4gZW1wdHkgdGFzayEnKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWxldmFudExpc3RJZCA9IGdldEFuY2VzdG9yU2VjdGlvbkxpc3RJZCh0YXJnZXQpXG4gICAgICBhZGRUYXNrKHJlbGV2YW50TGlzdElkLCBpbnB1dFZhbHVlKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXRSb2xlID09PSAnYWRkaW5nLWxpc3QnKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LWxpc3QnKS52YWx1ZVxuICAgIGlmIChpbnB1dFZhbHVlID09PSAnJykge1xuICAgICAgYWxlcnQoJ0NhbnQgYWRkIGFuIGVtcHR5IHRhc2shJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkTmV3TGlzdChpbnB1dFZhbHVlKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXRSb2xlID09PSAnc2F2aW5nLWJvYXJkJykge1xuICAgIHB1dFRhc2tzVG9BcGkoZ2V0TG9jYWxTdG9yYWdlQm9hcmRUYXNrc0luTmF0aXZlRm9ybWF0KCkpXG4gICAgc3RhcnRMb2FkQW5pbWF0aW9uKClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlbmRlckJvYXJkKClcbiAgICB9LCAxMDApXG4gIH0gZWxzZSBpZiAodGFyZ2V0Um9sZSA9PT0gJ2xvYWRpbmctYm9hcmQnKSB7XG4gICAgc3RhcnRMb2FkQW5pbWF0aW9uKClcblxuICAgIGdldFRhc2tzRnJvbUFwaSgpLnRoZW4oKHRhc2tzKSA9PiB7XG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrc0luTmF0aXZlRm9ybWF0KHRhc2tzKVxuICAgICAgcmVuZGVyQm9hcmQoKVxuICAgIH0pXG4gIH0gZWxzZSBpZiAodGFyZ2V0Um9sZSA9PT0gJ2RlbGV0ZS1saXN0Jykge1xuICAgIGNvbnN0IHJlbGV2YW50TGlzdElkID0gZ2V0QW5jZXN0b3JTZWN0aW9uTGlzdElkKHRhcmdldClcbiAgICBkZWxldGVMaXN0KHJlbGV2YW50TGlzdElkKVxuICB9XG59XG5cbmxldCBtb3VzZUluVGFzayA9IG51bGwgLy8gdGhpcyBpcyBmb3IgbW9uaXRvcmluZyBpZiB0aGUgbW91c2UgaXMgcG9pbnRpbmcgYXQgdGhlIHRhc2tcblxuZXhwb3J0IGZ1bmN0aW9uIGFsdEtleURvd25FdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3Qga2V5UHJlc3NlZCA9IGV2ZW50LmtleVxuXG4gIGlmIChtb3VzZUluVGFzayAmJiBrZXlQcmVzc2VkID09PSAnQWx0Jykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBudW1iZXJLZXlEb3duRXZlbnRIYW5kbGVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgYWx0S2V5VXBFdmVudEhhbmRsZXIpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlcktleURvd25FdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3Qga2V5UHJlc3NlZCA9IGV2ZW50LmtleVxuICBjb25zdCBsaXN0c0lkc0FycmF5ID0gZ2V0SWRzQXJyYXlGcm9tT2JqQXJyYXkoYm9hcmQubGlzdHMpLm1hcCgoaWQpID0+IFN0cmluZyhpZCkpXG4gIGlmIChtb3VzZUluVGFzayAmJiBsaXN0c0lkc0FycmF5LmluY2x1ZGVzKGtleVByZXNzZWQpKSB7XG4gICAgY29uc3QgdGFza0lkID0gZ2V0TGlUYXNrSWQobW91c2VJblRhc2spXG4gICAgY29uc3QgbmV3TGlzdElkID0gTnVtYmVyKGtleVByZXNzZWQpXG5cbiAgICBtb3ZlVGFzayh0YXNrSWQsIG5ld0xpc3RJZClcbiAgICBtb3VzZUluVGFzayA9IG51bGwgLy8gdGhlIHRhc2sgaGFzIG1vdmVkIHNvIHRoZSBtb3VzZSBpcyBubyBsb25nZXIgaW5zaWRlIGl0LlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbHRLZXlVcEV2ZW50SGFuZGxlcihldmVudCkge1xuICBjb25zdCBrZXlMaWZ0ZWQgPSBldmVudC5rZXlcbiAgaWYgKGtleUxpZnRlZCA9PT0gJ0FsdCcpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbnVtYmVyS2V5RG93bkV2ZW50SGFuZGxlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGFsdEtleVVwRXZlbnRIYW5kbGVyKVxuICB9XG59XG5cbi8qXG4gKlxuICogaGVyZSB3ZSBnZXQgdGhlIHRhc2sgd2UgYXJlIHBvaW50aW5nIGF0LlxuICpcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbW91c2VPdmVyRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudFxuXG4gIGlmICh0YXJnZXQudGFnTmFtZSAhPT0gJ0xJJykgcmV0dXJuXG4gIG1vdXNlSW5UYXNrID0gdGFyZ2V0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3VzZU91dEV2ZW50SGFuZGxlcihldmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnRcblxuICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdMSScpIHJldHVyblxuXG4gIG1vdXNlSW5UYXNrID0gbnVsbFxufVxuXG4vKlxuICpcbiAqIGRibCBjbGljayBoYW5kbGVyc1xuICpcbiAqL1xuXG5sZXQgZGJsQ2xpY2tlZCA9IGZhbHNlIC8vIGxhdGVyIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRvIHN0YXJ0IGRyYWcgYW5kIGRyb3BcbmxldCBtb3VzZURvd24gPSBmYWxzZSAvLyBsYXRlciB1c2VkIHRvIGRldGVybWluZSBpZiB0byBzdGFydCBkcmFnIGFuZCBkcm9wXG5cbmV4cG9ydCBmdW5jdGlvbiBkYmxDbGlja0V2ZW50SGFuZGxlcihldmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnRcblxuICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdMSScpIHJldHVyblxuXG4gIGRibENsaWNrZWQgPSB0cnVlXG5cbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKVxuICB0YXJnZXQuZm9jdXMoKVxuXG4gIC8vIGEgZnVuY3Rpb24gdG8gc2VsZWN0IGFsbCB0aGUgaW5zaWRlIG9mZiB0aGUgdGFzay5cbiAgZnVuY3Rpb24gc2VsZWN0RWxlbWVudENvbnRlbnRzKGVsKSB7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsKVxuICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKVxuICAgIHNlbC5hZGRSYW5nZShyYW5nZSlcbiAgfVxuXG4gIHNlbGVjdEVsZW1lbnRDb250ZW50cyh0YXJnZXQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c091dEV2ZW50SGFuZGxlcihldmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnRcblxuICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdMSScpIHJldHVyblxuXG4gIC8vIFdlIHdpbGwgdXNlIHRoaXMgbGF0ZXIgd2hlbiB3ZSBkbyB0aGUgZHJhZyBhbmQgZHJvcFxuICAvLyB0byBrbm93IGlmIHRvIHN0YXJ0IHRoZSBkcmFnIG9yIG5vdC5cbiAgZGJsQ2xpY2tlZCA9IGZhbHNlXG5cbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJylcblxuICAvLyB1cGRhdGUgdGhlIHRhc2sgdGV4dCB0byBtYWNoIHRoZSBuZXcgb25lXG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrRnJvbUxpKHRhcmdldClcbiAgdGFzay50ZXh0ID0gdGFyZ2V0LmlubmVyVGV4dFxuXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZVRhc2tzKClcbn1cblxuLypcbiAqXG4gKiBkcmFnIGFuZCBkcm9wIGhhbmRsZXJzXG4gKlxuICogSU1QT1JUQU5UISAtIHRoZXNlIGZ1bmN0aW9ucyBnbyBvbiB0aGUgSFRNTCBlbGVtZW50IGl0c2VsZlxuICogaW4gcmVuZGVyTGlzdCgpIHdlIGNyZWF0ZSB0YXNrcyB3aXRoIGFuXG4gKiBcIm9uY2xpY2tcIiA9IFwiY2xpY2tEcnVnQW5kRHJvcEhhbmRsZXIoZXZlbnQpXCIgYW5kXG4gKiBcIm9uZHJhZ3N0YXJ0XCIgPSBcIm9uRHJhZ1N0YXJ0KClcIiBhdHRyaWJ1dGVzLlxuICpcbiAqL1xuXG4vLyB0byBwcmV2ZW50IHRoZSBicm93c2VyIGRlZmF1bHQgYWN0aW9uXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnU3RhcnQoKSB7XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tEcnVnQW5kRHJvcEhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKSAvLyB0byBwcmV2ZW50IHRoZSBzZWxlY3RpbmcgYWN0aW9uIG9mIGNsaWNrXG5cbiAgbW91c2VEb3duID0gdHJ1ZVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICBmdW5jdGlvbiBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgIG1vdXNlRG93biA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLy8gdGhlIG1haW4gZHJhZyBhbmQgZHJvcCBzZWN0aW9uIVxuICAvLyB3ZSBzZXQgYSB0aW1lIG91dCBzbyB0aGUgdXNlciBjYW4gbWFrZSBhIGRibGNsaWNrIHdpdGhvdXQgc3RhcnRpbmcgdG8gZHJhZ1xuICAvLyBJIGZvdW5kIHRoYXQgdGhlIGJlc3QgdGltZSBpcyAzMDAgbXMuIG1pY3Jvc29mdCBzYXlzIGl0cyA1MDAgbXMgOylcbiAgY29uc3QgVElNRV9GT1JfVVNFUl9UT19EQkxfQ0xJQ0sgPSAzMDBcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZGJsQ2xpY2tlZCA9PT0gdHJ1ZSB8fCBtb3VzZURvd24gPT09IGZhbHNlKSByZXR1cm5cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdtb3ZpbmctdGFzaycpXG5cbiAgICBjb25zdCBzaGlmdFggPSBldmVudC5jbGllbnRYIC0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICBjb25zdCBzaGlmdFkgPSBldmVudC5jbGllbnRZIC0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuXG4gICAgdGFyZ2V0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIHRhcmdldC5zdHlsZS56SW5kZXggPSAxMDAwXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGFyZ2V0KVxuXG4gICAgbW92ZUF0KGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSlcblxuICAgIC8vIG1vdmVzIHRoZSB0YXNrIGF0IChwYWdlWCwgcGFnZVkpIGNvb3JkaW5hdGVzXG4gICAgLy8gdGFraW5nIGluaXRpYWwgc2hpZnRzIGludG8gYWNjb3VudFxuICAgIGZ1bmN0aW9uIG1vdmVBdChwYWdlWCwgcGFnZVkpIHtcbiAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gYCR7cGFnZVggLSBzaGlmdFh9cHhgXG4gICAgICB0YXJnZXQuc3R5bGUudG9wID0gYCR7cGFnZVkgLSBzaGlmdFkgLSA1fXB4YCAvLyBzbWFsbCBhZGp1c3RtZW50IGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudERyb3BwYWJsZSA9IG51bGxcblxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICBtb3ZlQXQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKVxuXG4gICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgY29uc3QgZWxlbUJlbG93ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKVxuICAgICAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnJ1xuXG4gICAgICAvLyBtb3VzZW1vdmUgZXZlbnRzIG1heSB0cmlnZ2VyIG91dCBvZiB0aGUgd2luZG93ICh3aGVuIHRoZSBiYWxsIGlzIGRyYWdnZWQgb2ZmLXNjcmVlbilcbiAgICAgIC8vIGlmIGNsaWVudFgvY2xpZW50WSBhcmUgb3V0IG9mIHRoZSB3aW5kb3csIHRoZW4gZWxlbWVudEZyb21Qb2ludCByZXR1cm5zIG51bGxcbiAgICAgIGlmICghZWxlbUJlbG93KSByZXR1cm5cblxuICAgICAgLy8gcG90ZW50aWFsIGRyb3BwYWJsZSBhcmUgbGFiZWxlZCB3aXRoIHRoZSBjbGFzcyBcImRyb3BwYWJsZVwiIChjYW4gYmUgb3RoZXIgbG9naWMpXG4gICAgICBjb25zdCBkcm9wcGFibGVCZWxvdyA9IGVsZW1CZWxvdy5jbG9zZXN0KCcuZHJvcHBhYmxlJylcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUgIT0gZHJvcHBhYmxlQmVsb3cpIHtcbiAgICAgICAgLy8gd2UncmUgZmx5aW5nIGluIG9yIG91dC4uLlxuICAgICAgICAvLyBub3RlOiBib3RoIHZhbHVlcyBjYW4gYmUgbnVsbFxuICAgICAgICAvLyAgIGN1cnJlbnREcm9wcGFibGU9bnVsbCBpZiB3ZSB3ZXJlIG5vdCBvdmVyIGEgZHJvcHBhYmxlIGJlZm9yZSB0aGlzIGV2ZW50IChlLmcgb3ZlciBhbiBlbXB0eSBzcGFjZSlcbiAgICAgICAgLy8gICBkcm9wcGFibGVCZWxvdz1udWxsIGlmIHdlJ3JlIG5vdCBvdmVyIGEgZHJvcHBhYmxlIG5vdywgZHVyaW5nIHRoaXMgZXZlbnRcblxuICAgICAgICBpZiAoY3VycmVudERyb3BwYWJsZSkge1xuICAgICAgICAgIC8vIHRoZSBsb2dpYyB0byBwcm9jZXNzIFwiZmx5aW5nIG91dFwiIG9mIHRoZSBkcm9wcGFibGUgKHJlbW92ZSBoaWdobGlnaHQpXG4gICAgICAgICAgbGVhdmVEcm9wcGFibGUoY3VycmVudERyb3BwYWJsZSlcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50RHJvcHBhYmxlID0gZHJvcHBhYmxlQmVsb3dcbiAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcbiAgICAgICAgICAvLyB0aGUgbG9naWMgdG8gcHJvY2VzcyBcImZseWluZyBpblwiIG9mIHRoZSBkcm9wcGFibGVcbiAgICAgICAgICBlbnRlckRyb3BwYWJsZShjdXJyZW50RHJvcHBhYmxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbW92ZSB0aGUgdGFzayBvbiBtb3VzZW1vdmVcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSlcblxuICAgIC8vIGRyb3AgdGhlIHRhc2ssIHJlbW92ZSB1bm5lZWRlZCBoYW5kbGVyc1xuICAgIHRhcmdldC5vbm1vdXNldXAgPSBmdW5jdGlvbiBiYXIoKSB7XG4gICAgICBpZiAoYWJvdmVEcm9wcGFibGUpIHtcbiAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUudGFnTmFtZSA9PT0gJ0xJJykge1xuICAgICAgICAgIGNvbnN0IG5ld0xpc3RJZCA9IGdldEFuY2VzdG9yU2VjdGlvbkxpc3RJZChjdXJyZW50RHJvcHBhYmxlKVxuICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IE51bWJlcih0YXJnZXQuZGF0YXNldC5vcmlnaW5hbFRhc2tJZClcbiAgICAgICAgICBjb25zdCBkcm9wcGFibGVUYXNrSWQgPSBnZXRUYXNrRnJvbUxpKGN1cnJlbnREcm9wcGFibGUpLmlkXG4gICAgICAgICAgY29uc3QgZHJvcHBhYmxlSW5kZXggPSBib2FyZC5nZXRUYXNrSW5kZXgoZHJvcHBhYmxlVGFza0lkKVxuXG4gICAgICAgICAgbW92ZVRhc2sodGFza0lkLCBuZXdMaXN0SWQsIGRyb3BwYWJsZUluZGV4ICsgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuZXdMaXN0SWQgPSBnZXRBbmNlc3RvclNlY3Rpb25MaXN0SWQoY3VycmVudERyb3BwYWJsZSlcbiAgICAgICAgICBjb25zdCB0YXNrSWQgPSBOdW1iZXIodGFyZ2V0LmRhdGFzZXQub3JpZ2luYWxUYXNrSWQpXG5cbiAgICAgICAgICBtb3ZlVGFzayh0YXNrSWQsIG5ld0xpc3RJZClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSlcbiAgICAgIHRhcmdldC5vbm1vdXNldXAgPSBudWxsXG4gICAgICB0YXJnZXQucmVtb3ZlKClcbiAgICAgIHJlbmRlckJvYXJkKClcbiAgICB9XG4gIH0sIFRJTUVfRk9SX1VTRVJfVE9fREJMX0NMSUNLKVxufVxuXG5sZXQgYWJvdmVEcm9wcGFibGUgPSBmYWxzZVxuXG5mdW5jdGlvbiBlbnRlckRyb3BwYWJsZShkcm9wcGFibGVFbGVtZW50KSB7XG4gIGFib3ZlRHJvcHBhYmxlID0gdHJ1ZVxuXG4gIGlmIChkcm9wcGFibGVFbGVtZW50LnRhZ05hbWUgPT09ICdMSScpIHtcbiAgICBkcm9wcGFibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JlbG93LWRyYWcnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGxlYXZlRHJvcHBhYmxlKGRyb3BwYWJsZUVsZW1lbnQpIHtcbiAgYWJvdmVEcm9wcGFibGUgPSBmYWxzZVxuXG4gIGlmIChkcm9wcGFibGVFbGVtZW50LnRhZ05hbWUgPT09ICdMSScpIHtcbiAgICBkcm9wcGFibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2JlbG93LWRyYWcnKVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS1cblxuLy8gYWRkaW5nIHRoZSBldmVudCBsaXN0ZW5lcnM6XG5cbkxJU1RTX0RJVi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYWx0S2V5RG93bkV2ZW50SGFuZGxlcilcbkxJU1RTX0RJVi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZU92ZXJFdmVudEhhbmRsZXIpXG5MSVNUU19ESVYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb3VzZU91dEV2ZW50SGFuZGxlcilcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0V2ZW50SGFuZGxlcilcbkxJU1RTX0RJVi5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGNvbnRleHRDbGlja0hhbmRsZXIpXG5cbkxJU1RTX0RJVi5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGRibENsaWNrRXZlbnRIYW5kbGVyKVxuXG5MSVNUU19ESVYuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmb2N1c091dEV2ZW50SGFuZGxlcilcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBET00gZWxlbWVudC5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJqdXN0IHRleHRcIiwgY3JlYXRlRWxlbWVudCguLi4pXSwgW1wibmFuYVwiLCBcImJhbmFuYVwiXSwge2lkOiBcImJsYVwifSlcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGFnTmFtZSAtIHRoZSB0eXBlIG9mIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge0FycmF5fSBjaGlsZHJlbiAtIHRoZSBjaGlsZCBlbGVtZW50cyBmb3IgdGhlIG5ldyBlbGVtZW50LlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBFYWNoIGNoaWxkIGNhbiBiZSBhIERPTSBlbGVtZW50LCBvciBhIHN0cmluZyAoaWYgeW91IGp1c3Qgd2FudCBhIHRleHQgZWxlbWVudCkuXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIC0gdGhlIGNsYXNzIGxpc3Qgb2YgdGhlIG5ldyBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlcyAtIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgbmV3IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBjaGlsZHJlbiA9IFtdLCBjbGFzc2VzID0gW10sIGF0dHJpYnV0ZXMgPSB7fSkge1xuICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBtYWluRWxlbWVudC5hcHBlbmQoY2hpbGRFbGVtZW50KSlcbiAgbWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKVxuXG4gIGZvciAoY29uc3QgYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICBtYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pXG4gICAgfVxuICB9XG4gIHJldHVybiBtYWluRWxlbWVudFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE5hbWUobGlzdE5hbWUpIHtcbiAgcmV0dXJuIGxpc3ROYW1lXG4gICAgLnNwbGl0KCctJylcbiAgICAubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKVxuICAgIC5qb2luKCcgJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdExpc3ROYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvWycgJ10vZywgJy0nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TGlzdENsYXNzTmFtZShsaXN0TmFtZSkge1xuICByZXR1cm4gYCR7Zm9ybWF0TGlzdE5hbWUobGlzdE5hbWUpfS10YXNrc2Bcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElkc0FycmF5RnJvbU9iakFycmF5KG9iamVjdEFycikge1xuICByZXR1cm4gb2JqZWN0QXJyLm1hcCgob2JqKSA9PiBvYmouaWQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU5ld0lkSW5BcnJheU9mT2JqZWN0cyhvYmplY3RBcnIpIHtcbiAgLyogR2V0cyB0aGUgbGFyZ2VzdCBpZCBhbmQgcmV0dXJucyBpdCArIDEuIFxuICAgICAgaS5lIHRoZSByZXR1cm5pbmcgaWQgZG9lcyBub3QgZXhpc3RzIGluIHRoZVxuICAgICAgYXJyYXkgYW5kIGlzIHVuaXF1ZS5cbiAgICAgICovXG5cbiAgaWYgKG9iamVjdEFyci5sZW5ndGggPT09IDApIHJldHVybiAxXG4gIGNvbnN0IGlkQXJyYXkgPSBnZXRJZHNBcnJheUZyb21PYmpBcnJheShvYmplY3RBcnIpXG4gIHJldHVybiBNYXRoLm1heCguLi5pZEFycmF5KSArIDFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdEZyb21BcnJheShvYmplY3RJZCwgb2JqZWN0QXJyKSB7XG4gIC8vIHRocm93cyBFcnJvciBpZiBPYmplY3QgZG9lcyBub3QgZXhpc3RzLlxuICBjb25zdCByZXF1ZXN0ZWRPYmplY3QgPSBvYmplY3RBcnIuZmluZCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdElkKVxuICBpZiAocmVxdWVzdGVkT2JqZWN0ID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcignbm8gc3VjaCBvYmplY3QgZXhpc3RzJylcbiAgcmV0dXJuIHJlcXVlc3RlZE9iamVjdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZk9iamVjdElkVGFrZW4oaWQsIGdldEZ1bmN0aW9uKSB7XG4gIC8vIGdldEZ1bmN0aW9uIGlzIGEgZnVuY3Rpb24gZXhwcmVzc2lvbi4gd2Ugd2lsbCBrbm93IHdoZXJlIHRvIHNlYXJjaCBkZXBlbmRpbmcgb24gdGhlIGZ1bmN0aW9uXG4gIHRyeSB7XG4gICAgZ2V0RnVuY3Rpb24oaWQpIC8vIHJlbWVtYmVyOiBnZXRGdW5jdGlvbiBjYW4gYmU6IFtnZXRMaXN0XSBhbmQgdGhyb3dzIEVycm9yIGlmIG5vIGxpc3Qgd2FzIGZvdW5kLlxuICAgIHRocm93IG5ldyBFcnJvcignaWQgYWxyZWFkeSBleGlzdCcpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLyogXG4gICAgICAgIE9ubHkgaWYgdGhlIGVycm9yIGlzIGJlY2F1c2Ugb2YgXCJmaW5kaW5nXCIgdGhlIG9iamVjdFxuICAgICAgICB0aGVuIHdlIGNvbnRpbnVlIGFuZCB0aHJvdyBhbiBFcnJvci5cbiAgICAgICAgKi9cbiAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gJ2lkIGFscmVhZHkgZXhpc3QnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lkIGFscmVhZHkgZXhpc3QnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHlPYmoob2JqKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uL2hlbHBGL2NyZWF0ZUVsZW1lbnQnXG5pbXBvcnQgeyBmb3JtYXROYW1lIH0gZnJvbSAnLi4vaGVscEYvZm9ybWF0dGluZydcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tICcuLi9oZWxwRi9oZWxwJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IGNsaWNrRHJ1Z0FuZERyb3BIYW5kbGVyLCBvbkRyYWdTdGFydCB9IGZyb20gJy4uL2V2ZW50SGFuZGxpbmcvY2xpY2tEcmFnQW5kRHJvcEhhbmRsZXInXG4vKlxuICpcbiAqIHJlbmRlckxpc3QgLSBjcmVhdGVzIGVhY2ggdGFzayBhbmQgaW5zZXJ0IGl0IGludG8gdWxcbiAqIHRoZW4gcmVuZGVycyB0byB0aGUgTElTVFNfRElWXG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrc0Zyb21MaXN0KGxpc3QpIHtcbiAgY29uc3QgdGFza3MgPSBbXVxuICBmb3IgKGNvbnN0IHRhc2sgb2YgbGlzdC50YXNrcykge1xuICAgIHRhc2tzLnB1c2goXG4gICAgICBjcmVhdGVFbGVtZW50KCdsaScsIFt0YXNrLnRleHRdLCBbJ3Rhc2snLCAnZHJvcHBhYmxlJ10sIHtcbiAgICAgICAgJ2RhdGEtb3JpZ2luYWwtdGFzay1pZCc6IHRhc2suaWQsXG4gICAgICAgIG9ubW91c2Vkb3duOiAnY2xpY2tEcnVnQW5kRHJvcEhhbmRsZXIoZXZlbnQpJywgLy8gbG9vayBkb3duIGluIGhhbmRsZXIgZnVuY3Rpb25zXG4gICAgICAgIG9uZHJhZ3N0YXJ0OiAnb25EcmFnU3RhcnQoKScsIC8vIHRvIGNhbmNlbCB0aGUgZGVmYXVsdCBicm93c2VyIGFjdGlvblxuICAgICAgfSlcbiAgICApXG4gIH1cbiAgcmV0dXJuIHRhc2tzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJMaXN0KGxpc3QsIGZhdGhlckRpdikge1xuICBmYXRoZXJEaXYuc3R5bGUuaGVpZ2h0ID0gJydcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBbJ2RlbGV0ZSddLCBbJ2RlbGV0ZS1idXR0b24nLCAnYWRkLWJ1dHRvbiddLCB7XG4gICAgJ2RhdGEtcm9sZSc6ICdkZWxldGUtbGlzdCcsXG4gIH0pXG4gIGNvbnN0IGxpc3RIZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoMicsIFtmb3JtYXROYW1lKGxpc3QubmFtZSldLCBbJ2xpc3QtaGVhZGVyJ10pXG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbXSwgWydhZGQtaW5wdXQnXSwge1xuICAgIGlkOiBgYWRkLSR7bGlzdC5zdHlsZUNsYXNzLnNsaWNlKDAsIC0xKX1gLFxuICAgIHBsYWNlaG9sZGVyOiAnbmV3IHRhc2snLFxuICB9KVxuICBjb25zdCBhZGRCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBbJ0FkZCddLCBbJ2FkZC1idXR0b24nXSwge1xuICAgIGlkOiBgc3VibWl0LWFkZC0ke2xpc3Quc3R5bGVDbGFzcy5zbGljZSgwLCBsaXN0LnN0eWxlQ2xhc3MuaW5kZXhPZignLXRhc2tzJykpfWAsXG4gICAgJ2RhdGEtcm9sZSc6ICdhZGRpbmctdGFzaycsXG4gIH0pXG5cbiAgY29uc3QgaW5wdXREaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbaW5wdXQsIGFkZEJ1dHRvbl0sIFsnaW5wdXQtZGl2J10pXG5cbiAgY29uc3QgdGFza3MgPSBjcmVhdGVUYXNrc0Zyb21MaXN0KGxpc3QpXG5cbiAgY29uc3QgdGFza3NMaXN0ID0gY3JlYXRlRWxlbWVudCgndWwnLCB0YXNrcywgW2xpc3Quc3R5bGVDbGFzcywgJ3Rhc2stbGlzdCddKVxuICBjb25zdCBzZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIFtkZWxldGVCdXR0b24sIGxpc3RIZWFkZXIsIHRhc2tzTGlzdCwgaW5wdXREaXZdLCBbJ3NlY3Rpb24nLCAnZHJvcHBhYmxlJ10sIHtcbiAgICAnZGF0YS1vcmlnaW5hbC1saXN0LWlkJzogbGlzdC5pZCxcbiAgfSlcblxuICBmYXRoZXJEaXYuYXBwZW5kKHNlY3Rpb24pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJMaXN0cyhmYXRoZXJEaXYsIGJvYXJkKSB7XG4gIHJlbW92ZUFsbENoaWxkTm9kZXMoZmF0aGVyRGl2KVxuXG4gIGZvciAoY29uc3QgbGlzdCBvZiBib2FyZC5saXN0cykge1xuICAgIHJlbmRlckxpc3QobGlzdCwgZmF0aGVyRGl2KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZChmYXRoZXJEaXYsIGJvYXJkKSB7XG4gIHJlbmRlckxpc3RzKGZhdGhlckRpdiwgYm9hcmQubGlzdHMpXG4gIC8vIHJlbmRlckNhbGVuZGVyKGNhbGVuZGVyRGl2KVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrcyhib2FyZCkge1xuICBjb25zdCB0YXNrcyA9IHtcbiAgICB0b2RvOiBbXSxcbiAgICAnaW4tcHJvZ3Jlc3MnOiBbXSxcbiAgICBkb25lOiBbXSxcbiAgfVxuXG4gIC8vIHRoZSBmb3JtYXQgcmVxdWlyZXMgJ3RvZG8nIGFuZCBub3QgJ3RvLWRvJyBzbyB3ZSBoYW5kbGUgdGhpcyBoZXJlLlxuICBmb3IgKGNvbnN0IGxpc3Qgb2YgYm9hcmQubGlzdHMpIHtcbiAgICBpZiAobGlzdC5uYW1lID09PSAndG8tZG8nKSB7XG4gICAgICB0YXNrcy50b2RvID0gbGlzdC50YXNrcy5tYXAoKHRhc2spID0+IHRhc2sudGV4dClcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza3NbbGlzdC5uYW1lXSA9IGxpc3QudGFza3MubWFwKCh0YXNrKSA9PiB0YXNrLnRleHQpXG4gICAgfVxuICB9XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxufVxuXG4vLyB0aGlzIGZ1bmN0aW9ucyB3aWxsIGhlbHAgdXMgaW4gbWFuYWdpbmcgdGhlIHNldmVyIGFwaS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2VCb2FyZFRhc2tzSW5OYXRpdmVGb3JtYXQoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlQm9hcmRUYXNrcygpIHtcbiAgY29uc3QgbG9jYWxTdG9yYWdlVGFza3MgPSBnZXRMb2NhbFN0b3JhZ2VCb2FyZFRhc2tzSW5OYXRpdmVGb3JtYXQoKVxuXG4gIC8vIHdlIHJlcGxhY2UgdGhlIHByb3BlcnR5IGtleTogJ3RvZG8nIHdpdGggdGhlIGtleSAndG8tZG8nLFxuICAvLyBzbyBvdXIgQm9hcmQgY2xhc3MgY2FuIGhhbmRsZSBpdCBwcm9wZXJseS5cbiAgZGVsZXRlIE9iamVjdC5hc3NpZ24obG9jYWxTdG9yYWdlVGFza3MsIHsgJ3RvLWRvJzogbG9jYWxTdG9yYWdlVGFza3MudG9kbyB9KS50b2RvXG4gIHJldHVybiBsb2NhbFN0b3JhZ2VUYXNrc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlVGFza3NJbk5hdGl2ZUZvcm1hdChuZXdUYXNrcykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShuZXdUYXNrcykpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0TG9jYWxTdG9yYWdlVGFza3MoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHsgdG9kbzogW10sICdpbi1wcm9ncmVzcyc6IFtdLCBkb25lOiBbXSB9KSlcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVRhc2sodGFzaykge1xuICBpZiAodHlwZW9mIHRhc2sgPT09ICdvYmplY3QnICYmIHRhc2sudGV4dC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGFza1xuICB9XG5cbiAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgdGFzaycpXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCdcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZUJvYXJkVGFza3MsIHNldERlZmF1bHRMb2NhbFN0b3JhZ2VUYXNrcyB9IGZyb20gJy4vc2VydmljZXMvc3RvcmFnZSdcbmltcG9ydCB7IHJlbmRlckJvYXJkIH0gZnJvbSAnLi9zZXJ2aWNlcy9kb20nXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IGNsaWNrRHJ1Z0FuZERyb3BIYW5kbGVyLCBvbkRyYWdTdGFydCB9IGZyb20gJy4vZXZlbnRIYW5kbGluZy9jbGlja0RyYWdBbmREcm9wSGFuZGxlcidcblxuLypcbiAqIFRoZSBtYW5lIEJvYXJkIGNsYXNzLlxuICpcbiAqIGV2ZXJ5IHJlbmRlciBvZmYgdGhlIFVJIGlzIGRvbmUgdGhydSB0aGUgYm9hcmQgb2JqZWN0XG4gKiB0aGUgYmFzaWMgc3RydWN0dXJlIGlzIGxpa2UgdGhpczpcbiAqXG4gKiBib2FyZCA9IHtcbiAqICBsaXN0czogW3sgaWQ6IDEsIG5hbWU6ICdkb25lJywgdGFza3M6IFt7aWQ6IDEsIHRleHQ6ICdJIGFtIGEgdGFzayd9LCB7fS4uLl0sIHN0eWxlY2xhc3M6ICdkb25lLXRhc2tzJ30sIHt9LCAuLi5dLFxuICogIGJhc2VUYXNrc0xpc3QgPSBbXVxuICogfVxuICpcbiAqL1xuXG4vLyBjb25zdGFudHMgZm9yIHVzIHRvIHVzZS5cbmV4cG9ydCBjb25zdCBMSVNUU19ESVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdHMtZGl2JylcbmV4cG9ydCBjb25zdCBCQVNFX1RBU0tTX0xJU1RTID0gWyd0by1kbycsICdpbi1wcm9ncmVzcycsICdkb25lJ11cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5leHBvcnQgbGV0IGJvYXJkXG5cbi8qXG4gKiBFTlRFUklORyBGVU5DVElPTi5cbiAqXG4gKiBXaGVuIGVudGVyaW5nIHRoZSBzaXRlIG9yIHJlZnJlc2hpbmcgdGhlIHBhZ2Ugd2UgY2hlY2tcbiAqIGlmIHdlIGhhdmUgYSBsb2NhbFN0b3JhZ2UgdGFza3Mgb2JqZWN0IHNldCB1cC5cbiAqIGlmIG5vdCwgd2UgY3JlYXRlIG9uZSBpbiBiYXNlIGZvcm0uXG4gKlxuICogQWZ0ZXIgdGhhdCB3ZSByZW5kZXIgdGhlIGJvYXJkLlxuICovXG5cbmZ1bmN0aW9uIG9uRW50ZXJpbmdTaXRlKCkge1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB7XG4gICAgc2V0RGVmYXVsdExvY2FsU3RvcmFnZVRhc2tzKClcbiAgfVxuICBib2FyZCA9IG5ldyBCb2FyZChCQVNFX1RBU0tTX0xJU1RTLCBnZXRMb2NhbFN0b3JhZ2VCb2FyZFRhc2tzKCkpXG4gIGJvYXJkLkxJU1RTX0RJViA9IExJU1RTX0RJViAvLyBUT0RPOiBzaG91bGQgYmUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIHJlbmRlckJvYXJkKExJU1RTX0RJViwgYm9hcmQpXG59XG5cbm9uRW50ZXJpbmdTaXRlKClcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuLypcbiAqXG4gKiBUaGUgbWFpbiByZW5kZXJpbmcgZnVuY3Rpb25zXG4gKlxuICpcbiAqL1xuXG4vKlxuICpcbiAqIHJlbmRlckJvYXJkIC0gY3JlYXRlcyBhIG5ldyBib2FyZCBmcm9tIGxvY2FsU3RvcmFnZVxuICogYW5kIHJlbmRlcnMgdGhlIGxpc3RzLlxuICogb3B0aW9uYWwgZm9yIHRoZSBmdXR1cmUgLSBhZGRpbmcgcmVuZGVyQ2FsZW5kZXIoKSBhbmRcbiAqIHdoYXQgd2Ugd2FudCB0byBhZGQgdG8gdGhlIGJvYXJkIGNsYXNzXG4gKlxuICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qXG4gKlxuICpcbiAqIGJvYXJkIG1hbmFnZW1lbnQgZnVuY3Rpb25zLlxuICpcbiAqXG4gKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuLypcbiAqXG4gKlxuICogZXZlbnQgaGFuZGxpbmcgZnVuY3Rpb25zLlxuICpcbiAqL1xuXG4vLyB0aGlzIGZ1bmN0aW9uIGlzIGZvciB0aGUgc2VhcmNoIGlucHV0IGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UuXG4vLyBvbmtleXVwPVwiZmlsdGVyTGlzdHMoKVwiIC0tPiBsb29rIGluIGh0bWxcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKlxuICpcbiAqXG4gKiBsb2NhbCBzdG9yYWdlIG1hbmFnZW1lbnQgZnVuY3Rpb25zLlxuICpcbiAqIHRoaXMgaXMgYW4gYXBpIGZvciB3b3JraW5nIHdpdGggdGhlIGxvY2FsIHN0b3JhZ2UgZm9ybWF0LlxuICogdGhlIGZvcm1hdDpcbiAqIHtcbiAqICAgICd0b2RvJyA6IFtdLFxuICogICAgJ2luLXByb2dyZXNzOiBbXSxcbiAqICAgICdkb25lJzogW10sXG4gKiB9XG4gKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuLypcbiAqXG4gKlxuICogc2VydmVyIGFwaSBtZXRob2RzLlxuICpcbiAqIGhlcmUgd2UgdXNlIGZldGNoIHRvIHNlbmQgcmVxdWVzdHMgdG8gdGhlIHNlcnZlci5cbiAqIGltcG9ydGFudCAtIGlmIHdlIGdldCBhbiBlcnJvciB3ZSBhbGVydCB0aGUgdXNlciBhbmQgcnVuIHRoZSBmdW5jdGlvbiBhZ2Fpbi5cbiAqXG4gKi9cblxuLypcbiAqXG4gKiBsb2FkaW5nIGFuaW1hdGlvbi5cbiAqIHJlbmRlcnMgYSBjb29sIGFuaW1hdGlvbiB0byB0aGUgTElTVFNfRElWXG4gKlxuICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qXG4gKlxuICogaGVscCBmdW5jdGlvbnNcbiAqXG4gKi9cblxuLypcbiAqXG4gKiB2YWxpZGF0aW9uIGZ1bmN0aW9uc1xuICpcbiAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==