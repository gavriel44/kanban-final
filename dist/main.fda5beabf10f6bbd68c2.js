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

/***/ "./solution/boardManagement/updateBoard.js":
/*!*************************************************!*\
  !*** ./solution/boardManagement/updateBoard.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "addNewList": () => (/* binding */ addNewList),
/* harmony export */   "deleteList": () => (/* binding */ deleteList),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "moveTask": () => (/* binding */ moveTask)
/* harmony export */ });
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/storage */ "./solution/services/storage.js");
/* harmony import */ var _services_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dom */ "./solution/services/dom.js");
/* harmony import */ var _helpF_formatting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpF/formatting */ "./solution/helpF/formatting.js");




function addTask(listId, taskText, board) {
  board.addTask(listId, taskText)
  ;(0,_services_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorageTasks)(board)

  ;(0,_services_dom__WEBPACK_IMPORTED_MODULE_1__.renderLists)(board.LISTS_DIV, board.lists)
}

function addNewList(listName, tasks = [], board) {
  board.addNewList((0,_helpF_formatting__WEBPACK_IMPORTED_MODULE_2__.formatListName)(listName), tasks, (0,_helpF_formatting__WEBPACK_IMPORTED_MODULE_2__.formatListClassName)(listName))
  ;(0,_services_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorageTasks)(board)
  ;(0,_services_dom__WEBPACK_IMPORTED_MODULE_1__.renderLists)(board.LISTS_DIV, board.lists)
}

function deleteList(listId, board) {
  board.deleteList(listId)
  ;(0,_services_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorageTasks)(board)
  ;(0,_services_dom__WEBPACK_IMPORTED_MODULE_1__.renderLists)(board.LISTS_DIV, board.lists)
}

function deleteTask(taskId, board) {
  board.deleteTask(taskId)
  ;(0,_services_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorageTasks)(board)
  ;(0,_services_dom__WEBPACK_IMPORTED_MODULE_1__.renderLists)(board.LISTS_DIV, board.lists)
}

function moveTask(taskId, newListId, newIndex = 0, board) {
  const task = board.getTask(taskId)
  const oldListId = board.getListIdFromTaskId(taskId)
  const oldList = board.getList(oldListId)
  const newList = board.getList(newListId)

  oldList.tasks.splice(oldList.tasks.indexOf(task), 1)
  newList.tasks.splice(newIndex, 0, task)

  ;(0,_services_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorageTasks)(board)
  ;(0,_services_dom__WEBPACK_IMPORTED_MODULE_1__.renderLists)(board.LISTS_DIV, board.lists)
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
/* harmony import */ var _boardManagement_updateBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../boardManagement/updateBoard */ "./solution/boardManagement/updateBoard.js");
/* harmony import */ var _network_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network/tasks */ "./solution/network/tasks.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage */ "./solution/services/storage.js");
/* harmony import */ var _services_animationLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/animationLoader */ "./solution/services/animationLoader.js");
/* harmony import */ var _services_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/dom */ "./solution/services/dom.js");
/* harmony import */ var _helpF_help__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpF/help */ "./solution/helpF/help.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../board */ "./solution/board.js");
/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
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

  return window.board.getTask(taskId)
}

function filterLists() {
  const allLiElements = document.querySelectorAll('.section li')

  const valueInput = document.querySelector('#search').value.toLowerCase().trim()

  for (const liElement of allLiElements) {
    const liValue = liElement.innerText.toLowerCase().trim()

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

  function removeTask() {
    const taskId = getLiTaskId(target)
    ;(0,_boardManagement_updateBoard__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(taskId, window.board)
  }

  const menuOptionDelete = createMenuOption('delete task', removeTask)
  const contextMenu = (0,_helpF_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', [menuOptionDelete], ['context-menu'])

  // this function is used to create menu options. feel free to add one of your own!

  contextMenu.style.position = 'absolute'
  contextMenu.style.zIndex = 1000
  document.body.append(contextMenu)

  contextMenu.style.left = `${event.pageX}px`
  contextMenu.style.top = `${event.pageY}px`

  function exitContextMenuHandler() {
    contextMenu.remove()
    document.removeEventListener('onclick', exitContextMenuHandler)
  }

  document.addEventListener('click', exitContextMenuHandler)
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
      ;(0,_boardManagement_updateBoard__WEBPACK_IMPORTED_MODULE_1__.addTask)(relevantListId, inputValue, window.board)
    }
  } else if (targetRole === 'adding-list') {
    const inputValue = document.getElementById('add-new-list').value
    if (inputValue === '') {
      alert('Cant add an empty task!')
    } else {
      (0,_boardManagement_updateBoard__WEBPACK_IMPORTED_MODULE_1__.addNewList)(inputValue, window.board)
    }
  } else if (targetRole === 'saving-board') {
    (0,_network_tasks__WEBPACK_IMPORTED_MODULE_2__.putTasksToApi)((0,_services_storage__WEBPACK_IMPORTED_MODULE_3__.getLocalStorageBoardTasksInNativeFormat)())
    ;(0,_services_animationLoader__WEBPACK_IMPORTED_MODULE_4__["default"])(window.board.LISTS_DIV)
    setTimeout(() => {
      ;(0,_services_dom__WEBPACK_IMPORTED_MODULE_5__.renderBoard)(window.board.LISTS_DIV, window.board)
    }, 100)
  } else if (targetRole === 'loading-board') {
    (0,_services_animationLoader__WEBPACK_IMPORTED_MODULE_4__["default"])(window.board.LISTS_DIV)

    ;(0,_network_tasks__WEBPACK_IMPORTED_MODULE_2__.getTasksFromApi)().then((tasks) => {
      ;(0,_services_storage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorageTasksInNativeFormat)(tasks)
      window.board = new _board__WEBPACK_IMPORTED_MODULE_7__["default"](window.BASE_TASKS_LISTS, (0,_services_storage__WEBPACK_IMPORTED_MODULE_3__.getLocalStorageBoardTasks)())
      window.board.LISTS_DIV = window.LISTS_DIV // TODO: should be in the constructor
      ;(0,_services_dom__WEBPACK_IMPORTED_MODULE_5__.renderBoard)(window.board.LISTS_DIV, window.board)
    })
  } else if (targetRole === 'delete-list') {
    const relevantListId = getAncestorSectionListId(target)
    ;(0,_boardManagement_updateBoard__WEBPACK_IMPORTED_MODULE_1__.deleteList)(relevantListId, window.board)
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
  const listsIdsArray = (0,_helpF_help__WEBPACK_IMPORTED_MODULE_6__.getIdsArrayFromObjArray)(window.board.lists).map((id) => String(id))
  if (mouseInTask && listsIdsArray.includes(keyPressed)) {
    const taskId = getLiTaskId(mouseInTask)
    const newListId = Number(keyPressed)

    ;(0,_boardManagement_updateBoard__WEBPACK_IMPORTED_MODULE_1__.moveTask)(taskId, newListId, window.board)
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

  ;(0,_services_storage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorageTasks)(window.board)
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
          const droppableIndex = window.board.getTaskIndex(droppableTaskId)

          ;(0,_boardManagement_updateBoard__WEBPACK_IMPORTED_MODULE_1__.moveTask)(taskId, newListId, droppableIndex + 1, window.board)
        } else {
          const newListId = getAncestorSectionListId(currentDroppable)
          const taskId = Number(target.dataset.originalTaskId)

          ;(0,_boardManagement_updateBoard__WEBPACK_IMPORTED_MODULE_1__.moveTask)(taskId, newListId, 0, window.board)
        }
      }

      document.removeEventListener('mousemove', onMouseMove)
      target.onmouseup = null
      target.remove()
      ;(0,_services_dom__WEBPACK_IMPORTED_MODULE_5__.renderBoard)(window.board.LISTS_DIV, window.board)
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

document.addEventListener('keydown', altKeyDownEventHandler)
document.addEventListener('mouseover', mouseOverEventHandler)
document.addEventListener('mouseout', mouseOutEventHandler)

document.addEventListener('click', clickEventHandler)
document.addEventListener('contextmenu', contextClickHandler)

document.addEventListener('dblclick', dblClickEventHandler)

document.addEventListener('focusout', focusOutEventHandler)


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

/***/ "./solution/network/tasks.js":
/*!***********************************!*\
  !*** ./solution/network/tasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "request": () => (/* binding */ request),
/* harmony export */   "getTasksFromApi": () => (/* binding */ getTasksFromApi),
/* harmony export */   "putTasksToApi": () => (/* binding */ putTasksToApi)
/* harmony export */ });
/* eslint-disable consistent-return */
const TASKS_API_URL = 'https://json-bins.herokuapp.com/bin/614af7b24021ac0e6c080cbd'

async function request(method = '', data = null) {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  if (data) {
    options.body = JSON.stringify(data)
  }

  try {
    return await fetch(TASKS_API_URL, options).then((response) => response.json())
  } catch {
    // eslint-disable-next-line no-alert
    alert('server error - trying again')
    request(method, data)
  }
}

async function getTasksFromApi() {
  const loaded = await request('GET')
  return loaded.tasks
}

async function putTasksToApi(tasks) {
  await request('PUT', { tasks })
}


/***/ }),

/***/ "./solution/services/animationLoader.js":
/*!**********************************************!*\
  !*** ./solution/services/animationLoader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startLoadAnimation)
/* harmony export */ });
/* harmony import */ var _helpF_help__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpF/help */ "./solution/helpF/help.js");
/* eslint-disable no-param-reassign */


function startLoadAnimation(div) {
  const height = window.getComputedStyle(div).getPropertyValue('height')

  ;(0,_helpF_help__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(div)

  div.style.height = height

  const barDiv = document.createElement('div')
  barDiv.classList.add('bar', 'loader')

  const circleDiv = document.createElement('div')
  circleDiv.classList.add('circle')

  const p = document.createElement('p')
  p.innerHTML = 'Loading'
  p.classList.add('loading-p')

  barDiv.append(circleDiv, p)
  div.append(barDiv)
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



// eslint-disable-next-line import/no-cycle


window.clickDrugAndDropHandler = _eventHandling_clickDragAndDropHandler__WEBPACK_IMPORTED_MODULE_3__.clickDrugAndDropHandler
window.onDragStart = _eventHandling_clickDragAndDropHandler__WEBPACK_IMPORTED_MODULE_3__.onDragStart
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

function renderLists(fatherDiv, lists) {
  (0,_helpF_help__WEBPACK_IMPORTED_MODULE_2__.removeAllChildNodes)(fatherDiv)
  for (const list of lists) {
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
window.BASE_TASKS_LISTS = BASE_TASKS_LISTS
window.LISTS_DIV = LISTS_DIV
// eslint-disable-next-line import/no-mutable-exports

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
  const board = new _board__WEBPACK_IMPORTED_MODULE_1__["default"](BASE_TASKS_LISTS, (0,_services_storage__WEBPACK_IMPORTED_MODULE_2__.getLocalStorageBoardTasks)())
  board.LISTS_DIV = LISTS_DIV // TODO: should be in the constructor
  window.board = board
  console.log('test: ', board)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFX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QStCLElBQUk7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw4RUFBMkI7QUFDL0I7QUFDQSxvQkFBb0IsOENBQUssbUJBQW1CLDRFQUF5QjtBQUNyRTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwyREFBVztBQUNiOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL3N0eWxlcy5jc3M/NTljZiIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vYm9hcmQuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9ib2FyZE1hbmFnZW1lbnQvdXBkYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9ldmVudEhhbmRsaW5nL2NsaWNrRHJhZ0FuZERyb3BIYW5kbGVyLmpzIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vaGVscEYvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL2hlbHBGL2Zvcm1hdHRpbmcuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9oZWxwRi9oZWxwLmpzIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vbmV0d29yay90YXNrcy5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL3NlcnZpY2VzL2FuaW1hdGlvbkxvYWRlci5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL3NlcnZpY2VzL2RvbS5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL3NlcnZpY2VzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9zZXJ2aWNlcy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHZW5lcmFsZSBzdHlsZXMgKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTJkZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIHN0eWxlcyAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAwIDEyLjUlIDAgMTIuNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMDAxZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaCB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAzcHggMTVweDtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAjNWQwMDFlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYm9hcmQgc3R5bGVzICovXFxyXFxuXFxyXFxuI2JvYXJkLWRpdiB7XFxyXFxuICBwYWRkaW5nOiAwIDAgMS41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0cy1kaXYge1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygyMHB4IDEwcHggMjBweCAjYzRjMmM0KTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAyZW0gYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlMmRmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIHBhZGRpbmc6IDEuNWVtO1xcclxcbiAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWhlYWRlciB7XFxyXFxuICBtYXJnaW46IDEwcHggMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0aGlzIGlzIHRoZSBzZWN0aW9uIHN0eWxlIGkuZSB0aGUgZ2VuZXJhbGUgbGlzdCBzdHlsZSAqL1xcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6ICM1ZDAwMWU7XFxyXFxuICB3aWR0aDogMzElO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzYWZiYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG4gIG1hcmdpbjogMS41ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIG1hcmdpbjogOHB4IDAgMCAzJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XFxyXFxuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b246Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjkzMjNjLCAjNDg1NTYzLCAjMmI1ODc2LCAjNGU0Mzc2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDBweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmMyMDJiLCAjZjE1ZTY0LCAjZTE0ZTUzLCAjZTIzNzNmKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250OiAyMDAgMjBweC8xLjU7XFxyXFxuICBoZWlnaHQ6IDEuNWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTRjN2M7XFxyXFxuXFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcblxcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICAtby10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aW5nLXRhc2sge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGhlIHN0eWxlIHRvIGltcGxlbWVudCB3aGVuIHdlIFxcclxcbiBkcmFnIGEgdGFzayBhbmQgd2UgYXJlIGFib3ZlIGFub3RoZXIgKi9cXHJcXG4uYmVsb3ctZHJhZyB7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qIHRoZSBzYXZlLCBsb2FkIGFuZCBjcmVhdGUgbmV3IGxpc3Qgc2VjdGlvbiBzdHlsZXMgKi9cXHJcXG5cXHJcXG4jYWN0aW9uLWRpdiB7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbiNhcGktYWN0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1idXR0b24ge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMTRweDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIG1hcmdpbjogMTJweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2YTJlYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhLXNvZnQnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNiODE1MTUsIDgwJSwgIzYyNTNlMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgd2lkdGg6IDdlbTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ1dHRvbiAuYWN0aW9uLXNwYW4ge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICMwZTBlMTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ1dHRvbjpob3ZlciAuYWN0aW9uLXNwYW4ge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNsb2FkLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA4YWZmLCAjODZkNDcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1saXN0IHtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIHdpZHRoOiAxNDBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDEuN2VtO1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTAsIDE3Mik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMC4wNGVtIDAuMDRlbSByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5hZGQtbGlzdDpob3ZlciB7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1saXN0LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1uZXctbGlzdCB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIExvYWRpbmcgYW5pbWF0aW9uIHN0eWxlcyAqL1xcclxcblxcclxcbi5iYXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC0zMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlIDVzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZy1wIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTM1cHg7XFxyXFxuICByaWdodDogLTExOHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjZTNlMmRmO1xcclxcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBsZWZ0OiAxMDAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1MGRlZyk7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGxlZnQ6IDEwMCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDUwZGVnKTtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHJpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250ZXh0IG1lbnUgb3B0aW9ucyBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2stb3B0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNDVweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2stb3B0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRleHQtbWVudSB7XFxyXFxuICBmb250LXNpemU6IDAuNmVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCByZ2IoNjMsIDY0LCA2Nik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQyLCA0NSk7XFxyXFxufVxcclxcblxcclxcbi8qIG1lZGlhIHF1ZXJ5J3MgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XFxyXFxuICAubGlzdHMtZGl2IHtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgICAubGlzdHMtZGl2IHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zb2x1dGlvbi9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Is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QkFBa0I7O0FBRWxCO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRTtNQUNFLFdBQVc7SUFDYjtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vKiBHZW5lcmFsZSBzdHlsZXMgKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTJkZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIHN0eWxlcyAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAwIDEyLjUlIDAgMTIuNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMDAxZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaCB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAzcHggMTVweDtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAjNWQwMDFlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYm9hcmQgc3R5bGVzICovXFxyXFxuXFxyXFxuI2JvYXJkLWRpdiB7XFxyXFxuICBwYWRkaW5nOiAwIDAgMS41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0cy1kaXYge1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygyMHB4IDEwcHggMjBweCAjYzRjMmM0KTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAyZW0gYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlMmRmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIHBhZGRpbmc6IDEuNWVtO1xcclxcbiAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWhlYWRlciB7XFxyXFxuICBtYXJnaW46IDEwcHggMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0aGlzIGlzIHRoZSBzZWN0aW9uIHN0eWxlIGkuZSB0aGUgZ2VuZXJhbGUgbGlzdCBzdHlsZSAqL1xcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6ICM1ZDAwMWU7XFxyXFxuICB3aWR0aDogMzElO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzYWZiYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG4gIG1hcmdpbjogMS41ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIG1hcmdpbjogOHB4IDAgMCAzJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XFxyXFxuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b246Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjkzMjNjLCAjNDg1NTYzLCAjMmI1ODc2LCAjNGU0Mzc2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDBweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmMyMDJiLCAjZjE1ZTY0LCAjZTE0ZTUzLCAjZTIzNzNmKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250OiAyMDAgMjBweC8xLjU7XFxyXFxuICBoZWlnaHQ6IDEuNWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTRjN2M7XFxyXFxuXFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcblxcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICAtby10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aW5nLXRhc2sge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGhlIHN0eWxlIHRvIGltcGxlbWVudCB3aGVuIHdlIFxcclxcbiBkcmFnIGEgdGFzayBhbmQgd2UgYXJlIGFib3ZlIGFub3RoZXIgKi9cXHJcXG4uYmVsb3ctZHJhZyB7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qIHRoZSBzYXZlLCBsb2FkIGFuZCBjcmVhdGUgbmV3IGxpc3Qgc2VjdGlvbiBzdHlsZXMgKi9cXHJcXG5cXHJcXG4jYWN0aW9uLWRpdiB7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbiNhcGktYWN0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1idXR0b24ge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMTRweDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIG1hcmdpbjogMTJweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2YTJlYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhLXNvZnQnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNiODE1MTUsIDgwJSwgIzYyNTNlMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgd2lkdGg6IDdlbTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ1dHRvbiAuYWN0aW9uLXNwYW4ge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICMwZTBlMTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ1dHRvbjpob3ZlciAuYWN0aW9uLXNwYW4ge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNsb2FkLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA4YWZmLCAjODZkNDcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1saXN0IHtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIHdpZHRoOiAxNDBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDEuN2VtO1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTAsIDE3Mik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMC4wNGVtIDAuMDRlbSByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5hZGQtbGlzdDpob3ZlciB7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1saXN0LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1uZXctbGlzdCB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIExvYWRpbmcgYW5pbWF0aW9uIHN0eWxlcyAqL1xcclxcblxcclxcbi5iYXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC0zMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlIDVzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZy1wIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTM1cHg7XFxyXFxuICByaWdodDogLTExOHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjZTNlMmRmO1xcclxcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBsZWZ0OiAxMDAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1MGRlZyk7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIGxlZnQ6IDEwMCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDUwZGVnKTtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHJpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250ZXh0IG1lbnUgb3B0aW9ucyBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2stb3B0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNDVweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2stb3B0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRleHQtbWVudSB7XFxyXFxuICBmb250LXNpemU6IDAuNmVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCByZ2IoNjMsIDY0LCA2Nik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQyLCA0NSk7XFxyXFxufVxcclxcblxcclxcbi8qIG1lZGlhIHF1ZXJ5J3MgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XFxyXFxuICAubGlzdHMtZGl2IHtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgICAubGlzdHMtZGl2IHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IHsgZm9ybWF0TGlzdENsYXNzTmFtZSB9IGZyb20gJy4vaGVscEYvZm9ybWF0dGluZydcbmltcG9ydCB7IHZhbGlkYXRlVGFzayB9IGZyb20gJy4vc2VydmljZXMvdmFsaWRhdG9yJ1xuaW1wb3J0IHsgZ2V0T2JqZWN0RnJvbUFycmF5LCBnZW5lcmF0ZU5ld0lkSW5BcnJheU9mT2JqZWN0cywgY2hlY2tJZk9iamVjdElkVGFrZW4gfSBmcm9tICcuL2hlbHBGL2hlbHAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoQkFTRV9UQVNLU19MSVNUUywgdGFza3MgPSB7fSkge1xuICAgIC8qXG4gICAgICB0aGUgZmlyc3QgdGhpbmcgd2UgZG8gaXMgdG8gYWRkIHRoZSBiYXNlIGxpc3RzIHNvIHRoZXkgYWx3YXlzXG4gICAgICBiZSBpbiB0aGUgc2FtZSBvcmRlciB3aGVuIHdlIHJlbmRlciB0aGVtLiAodG9kbywgaW4tcHJvZ3Jlc3MsIGRvbmUpXG4gICAgICBUaGUgcHJvYmxlbSBpcyB0aGlzOlxuICAgICAgd2hlbiB3ZSBzYXZlIHRoZSBib2FyZCBpbiB0aGUgbG9jYWxTdG9yYWdlIHdlXG4gICAgICBjYW50IGtlZXAgdGhlIG9yZGVyLCB3ZSBzYXZlIGluIG9iamVjdCBmb3JtLCBzbyB3ZSBmb3JjZSB0aGUgb3JkZXIgb2ZmIHRoZSBmaXJzdCBiYXNlIGxpc3RzLlxuICBcbiAgICAgICoqdGFza3MgLSB0aGUgbGlzdHMgaW4gdGhlIGxvY2FsU3RvcmFnZSBmb3JtYXQuIFdlIGtlZXAgdGhlIG5hbWUgZm9yIGNsYXJpdHksXG4gICAgICBidXQgZm9yIGVhY2ggcHJvcGVydHkgb2YgdGhlIG9iamVjdCwgdGFza3MsIHdlIGNyZWF0ZSBhIG5ldyBsaXN0LlxuICBcbiAgICAgIH4gdGFza3Mgb2JqZWN0IGV4YW1wbGU6XG4gIFxuICAgICAgdGFza3MgPSB7XG4gICAgICAgIHRvZG86IFtdLFxuICAgICAgICAnaW4tcHJvZ3Jlc3MsIFtcImltIGEgdGFza1wiLCBcIm1lIHRvXCJdXSxcbiAgICAgICAgZG9uZTogW10sXG4gICAgICAgICdsaXN0LWktYWRkZWQnOiBbXCJoZWxsbyB3b3JsZFwiXSxcbiAgICAgIH1cbiAgICAgIFxuICAgICAgKi9cbiAgICB0aGlzLkJBU0VfVEFTS1NfTElTVFMgPSBCQVNFX1RBU0tTX0xJU1RTXG4gICAgdGhpcy5saXN0cyA9IFtdXG4gICAgZm9yIChjb25zdCBsaXN0TmFtZSBvZiB0aGlzLkJBU0VfVEFTS1NfTElTVFMpIHtcbiAgICAgIHRoaXMuYWRkTmV3TGlzdChsaXN0TmFtZSwgW10sIGZvcm1hdExpc3RDbGFzc05hbWUobGlzdE5hbWUpKVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgbmV3VGFza0xpc3ROYW1lIGluIHRhc2tzKSB7XG4gICAgICBpZiAodGhpcy5CQVNFX1RBU0tTX0xJU1RTLmluY2x1ZGVzKG5ld1Rhc2tMaXN0TmFtZSkpIHtcbiAgICAgICAgY29uc3QgYWxyZWFkeUV4aXN0c0xpc3QgPSB0aGlzLmdldExpc3RCeU5hbWUobmV3VGFza0xpc3ROYW1lKVxuICAgICAgICB0YXNrc1tuZXdUYXNrTGlzdE5hbWVdLmZvckVhY2goKHRhc2tUZXh0KSA9PiB0aGlzLmFkZFRhc2soYWxyZWFkeUV4aXN0c0xpc3QuaWQsIHRhc2tUZXh0KSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkTmV3TGlzdChuZXdUYXNrTGlzdE5hbWUsIFtdLCBmb3JtYXRMaXN0Q2xhc3NOYW1lKG5ld1Rhc2tMaXN0TmFtZSkpXG4gICAgICAgIGNvbnN0IG5ld0V4aXN0aW5nTGlzdCA9IHRoaXMuZ2V0TGlzdEJ5TmFtZShuZXdUYXNrTGlzdE5hbWUpXG4gICAgICAgIHRhc2tzW25ld1Rhc2tMaXN0TmFtZV0uZm9yRWFjaCgodGFza1RleHQpID0+IHRoaXMuYWRkVGFzayhuZXdFeGlzdGluZ0xpc3QuaWQsIHRhc2tUZXh0KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRUYXNrKGxpc3RJZCwgdGFza1RleHQpIHtcbiAgICBjb25zdCBsaXN0VGFza3MgPSB0aGlzLmdldExpc3QobGlzdElkKS50YXNrc1xuICAgIGNvbnN0IHRhc2sgPSB2YWxpZGF0ZVRhc2soeyB0ZXh0OiB0YXNrVGV4dCwgaWQ6IHRoaXMuZ2VuZXJhdGVVbmlxdWVUYXNrSWQobGlzdFRhc2tzKSB9KVxuICAgIGxpc3RUYXNrcy5wdXNoKHRhc2spXG4gIH1cblxuICBnZXRMaXN0KGxpc3RJZCkge1xuICAgIHJldHVybiBnZXRPYmplY3RGcm9tQXJyYXkobGlzdElkLCB0aGlzLmxpc3RzKVxuICB9XG5cbiAgZGVsZXRlTGlzdChsaXN0SWQpIHtcbiAgICB0aGlzLmxpc3RzLnNwbGljZSh0aGlzLmxpc3RzLmluZGV4T2YodGhpcy5nZXRMaXN0KGxpc3RJZCkpLCAxKVxuICB9XG5cbiAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICBjb25zdCBsaXN0SWQgPSB0aGlzLmdldExpc3RJZEZyb21UYXNrSWQodGFza0lkKVxuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldExpc3QobGlzdElkKVxuICAgIGNvbnN0IHRhc2sgPSB0aGlzLmdldFRhc2sodGFza0lkKVxuXG4gICAgbGlzdC50YXNrcy5zcGxpY2UobGlzdC50YXNrcy5pbmRleE9mKHRhc2spLCAxKVxuICB9XG5cbiAgZ2VuZXJhdGVVbmlxdWVUYXNrSWQoKSB7XG4gICAgY29uc3QgYWxsVGFza3MgPSBbXVxuXG4gICAgZm9yIChjb25zdCBsaXN0IG9mIHRoaXMubGlzdHMpIHtcbiAgICAgIGFsbFRhc2tzLnB1c2goLi4ubGlzdC50YXNrcylcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlTmV3SWRJbkFycmF5T2ZPYmplY3RzKGFsbFRhc2tzKVxuICB9XG5cbiAgZ2V0VGFzayh0YXNrSWQpIHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IFtdXG5cbiAgICBmb3IgKGNvbnN0IGxpc3Qgb2YgdGhpcy5saXN0cykge1xuICAgICAgYWxsVGFza3MucHVzaCguLi5saXN0LnRhc2tzKVxuICAgIH1cblxuICAgIHJldHVybiBnZXRPYmplY3RGcm9tQXJyYXkodGFza0lkLCBhbGxUYXNrcylcbiAgfVxuXG4gIGdldExpc3RJZEZyb21UYXNrSWQodGFza0lkKSB7XG4gICAgZm9yIChjb25zdCBsaXN0IG9mIHRoaXMubGlzdHMpIHtcbiAgICAgIGZvciAoY29uc3QgdGFzayBvZiBsaXN0LnRhc2tzKSB7XG4gICAgICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHJldHVybiBsaXN0LmlkXG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgdGhlcmUgaXMgbm8gdGFza0lkOiAke3Rhc2tJZH1gKVxuICB9XG5cbiAgZ2V0VGFza0luZGV4KHRhc2tJZCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3QodGhpcy5nZXRMaXN0SWRGcm9tVGFza0lkKHRhc2tJZCkpLnRhc2tzLmluZGV4T2YodGhpcy5nZXRUYXNrKHRhc2tJZCkpXG4gIH1cblxuICBnZXRMaXN0QnlOYW1lKGxpc3ROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5uYW1lID09PSBsaXN0TmFtZSlcbiAgfVxuXG4gIGFkZE5ld0xpc3QobmFtZSwgdGFza3MsIHN0eWxlQ2xhc3MsIGlkID0gZ2VuZXJhdGVOZXdJZEluQXJyYXlPZk9iamVjdHModGhpcy5saXN0cykpIHtcbiAgICBjaGVja0lmT2JqZWN0SWRUYWtlbihpZCwgdGhpcy5nZXRMaXN0KVxuXG4gICAgdGhpcy5saXN0cy5wdXNoKHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIHRhc2tzLFxuICAgICAgc3R5bGVDbGFzcyxcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrcyB9IGZyb20gJy4uL3NlcnZpY2VzL3N0b3JhZ2UnXG5pbXBvcnQgeyByZW5kZXJMaXN0cyB9IGZyb20gJy4uL3NlcnZpY2VzL2RvbSdcbmltcG9ydCB7IGZvcm1hdExpc3ROYW1lLCBmb3JtYXRMaXN0Q2xhc3NOYW1lIH0gZnJvbSAnLi4vaGVscEYvZm9ybWF0dGluZydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sobGlzdElkLCB0YXNrVGV4dCwgYm9hcmQpIHtcbiAgYm9hcmQuYWRkVGFzayhsaXN0SWQsIHRhc2tUZXh0KVxuICB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrcyhib2FyZClcblxuICByZW5kZXJMaXN0cyhib2FyZC5MSVNUU19ESVYsIGJvYXJkLmxpc3RzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3TGlzdChsaXN0TmFtZSwgdGFza3MgPSBbXSwgYm9hcmQpIHtcbiAgYm9hcmQuYWRkTmV3TGlzdChmb3JtYXRMaXN0TmFtZShsaXN0TmFtZSksIHRhc2tzLCBmb3JtYXRMaXN0Q2xhc3NOYW1lKGxpc3ROYW1lKSlcbiAgdXBkYXRlTG9jYWxTdG9yYWdlVGFza3MoYm9hcmQpXG4gIHJlbmRlckxpc3RzKGJvYXJkLkxJU1RTX0RJViwgYm9hcmQubGlzdHMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVMaXN0KGxpc3RJZCwgYm9hcmQpIHtcbiAgYm9hcmQuZGVsZXRlTGlzdChsaXN0SWQpXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZVRhc2tzKGJvYXJkKVxuICByZW5kZXJMaXN0cyhib2FyZC5MSVNUU19ESVYsIGJvYXJkLmxpc3RzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrSWQsIGJvYXJkKSB7XG4gIGJvYXJkLmRlbGV0ZVRhc2sodGFza0lkKVxuICB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrcyhib2FyZClcbiAgcmVuZGVyTGlzdHMoYm9hcmQuTElTVFNfRElWLCBib2FyZC5saXN0cylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUYXNrKHRhc2tJZCwgbmV3TGlzdElkLCBuZXdJbmRleCA9IDAsIGJvYXJkKSB7XG4gIGNvbnN0IHRhc2sgPSBib2FyZC5nZXRUYXNrKHRhc2tJZClcbiAgY29uc3Qgb2xkTGlzdElkID0gYm9hcmQuZ2V0TGlzdElkRnJvbVRhc2tJZCh0YXNrSWQpXG4gIGNvbnN0IG9sZExpc3QgPSBib2FyZC5nZXRMaXN0KG9sZExpc3RJZClcbiAgY29uc3QgbmV3TGlzdCA9IGJvYXJkLmdldExpc3QobmV3TGlzdElkKVxuXG4gIG9sZExpc3QudGFza3Muc3BsaWNlKG9sZExpc3QudGFza3MuaW5kZXhPZih0YXNrKSwgMSlcbiAgbmV3TGlzdC50YXNrcy5zcGxpY2UobmV3SW5kZXgsIDAsIHRhc2spXG5cbiAgdXBkYXRlTG9jYWxTdG9yYWdlVGFza3MoYm9hcmQpXG4gIHJlbmRlckxpc3RzKGJvYXJkLkxJU1RTX0RJViwgYm9hcmQubGlzdHMpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuLi9oZWxwRi9jcmVhdGVFbGVtZW50J1xuaW1wb3J0IHsgZGVsZXRlVGFzaywgYWRkVGFzaywgYWRkTmV3TGlzdCwgZGVsZXRlTGlzdCwgbW92ZVRhc2sgfSBmcm9tICcuLi9ib2FyZE1hbmFnZW1lbnQvdXBkYXRlQm9hcmQnXG5pbXBvcnQgeyBwdXRUYXNrc1RvQXBpLCBnZXRUYXNrc0Zyb21BcGkgfSBmcm9tICcuLi9uZXR3b3JrL3Rhc2tzJ1xuaW1wb3J0IHtcbiAgZ2V0TG9jYWxTdG9yYWdlQm9hcmRUYXNrc0luTmF0aXZlRm9ybWF0LFxuICB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrc0luTmF0aXZlRm9ybWF0LFxuICB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrcyxcbiAgZ2V0TG9jYWxTdG9yYWdlQm9hcmRUYXNrcyxcbn0gZnJvbSAnLi4vc2VydmljZXMvc3RvcmFnZSdcbmltcG9ydCBzdGFydExvYWRBbmltYXRpb24gZnJvbSAnLi4vc2VydmljZXMvYW5pbWF0aW9uTG9hZGVyJ1xuaW1wb3J0IHsgcmVuZGVyQm9hcmQgfSBmcm9tICcuLi9zZXJ2aWNlcy9kb20nXG5pbXBvcnQgeyBnZXRJZHNBcnJheUZyb21PYmpBcnJheSB9IGZyb20gJy4uL2hlbHBGL2hlbHAnXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vYm9hcmQnXG4vKiBcblxucmVtZW1iZXIgd2VuIGRvdXMgZXZlcnRoaW5nIGxvYWRzIGFuZCB3aGF0IGlzIHRoZSB0aW1pbmcgdGhpcyBpcyB3aHkgaXRzIG5vdCB3b3JraW5nLlxuXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbmNlc3RvclNlY3Rpb25MaXN0SWQobGlFbGVtZW50KSB7XG4gIHJldHVybiBOdW1iZXIobGlFbGVtZW50LmNsb3Nlc3QoJ3NlY3Rpb24nKS5kYXRhc2V0Lm9yaWdpbmFsTGlzdElkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlUYXNrSWQobGlFbGVtZW50KSB7XG4gIHJldHVybiBOdW1iZXIobGlFbGVtZW50LmRhdGFzZXQub3JpZ2luYWxUYXNrSWQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRnJvbUxpKGxpRWxlbWVudCkge1xuICBjb25zdCB0YXNrSWQgPSBnZXRMaVRhc2tJZChsaUVsZW1lbnQpXG5cbiAgcmV0dXJuIHdpbmRvdy5ib2FyZC5nZXRUYXNrKHRhc2tJZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckxpc3RzKCkge1xuICBjb25zdCBhbGxMaUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24gbGknKVxuXG4gIGNvbnN0IHZhbHVlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJykudmFsdWUudG9Mb3dlckNhc2UoKS50cmltKClcblxuICBmb3IgKGNvbnN0IGxpRWxlbWVudCBvZiBhbGxMaUVsZW1lbnRzKSB7XG4gICAgY29uc3QgbGlWYWx1ZSA9IGxpRWxlbWVudC5pbm5lclRleHQudG9Mb3dlckNhc2UoKS50cmltKClcblxuICAgIGxpRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gbGlWYWx1ZS5zZWFyY2gobmV3IFJlZ0V4cCh2YWx1ZUlucHV0LnJlcGxhY2UoL1xccysvLCAnfCcpKSkgIT0gLTEgPyAnJyA6ICdub25lJ1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVPcHRpb24odGV4dCwgaGFuZGxlcikge1xuICBjb25zdCBtZW51T3B0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgW2Ake3RleHR9YF0sIFtgJHt0ZXh0LnJlcGxhY2UoL1snICddL2csICctJyl9LW9wdGlvbmBdKVxuICBtZW51T3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbiAgcmV0dXJuIG1lbnVPcHRpb25cbn1cblxuLy8gd2lsbCBhY3RpdmF0ZSB3aGVuIHVzZXIgcHJlc3MgcmlnaHQgY2xpY2sgb24gYSB0YXNrXG4vLyB0aGlzIHdpbGwgZGlzcGxheSB0aGUgY29udGV4dCBtZW51LlxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHRDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgcHJldk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGV4dC1tZW51JylcbiAgaWYgKHByZXZNZW51KSBwcmV2TWVudS5yZW1vdmUoKVxuXG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdMSScpXG5cbiAgaWYgKCF0YXJnZXQpIHJldHVyblxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gdG8gcHJldmVudCB0aGUgYnJvd3NlciBkZWZhdWx0IGNvbnRleHQgbWVudS5cblxuICBmdW5jdGlvbiByZW1vdmVUYXNrKCkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGdldExpVGFza0lkKHRhcmdldClcbiAgICBkZWxldGVUYXNrKHRhc2tJZCwgd2luZG93LmJvYXJkKVxuICB9XG5cbiAgY29uc3QgbWVudU9wdGlvbkRlbGV0ZSA9IGNyZWF0ZU1lbnVPcHRpb24oJ2RlbGV0ZSB0YXNrJywgcmVtb3ZlVGFzaylcbiAgY29uc3QgY29udGV4dE1lbnUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbbWVudU9wdGlvbkRlbGV0ZV0sIFsnY29udGV4dC1tZW51J10pXG5cbiAgLy8gdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSBtZW51IG9wdGlvbnMuIGZlZWwgZnJlZSB0byBhZGQgb25lIG9mIHlvdXIgb3duIVxuXG4gIGNvbnRleHRNZW51LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICBjb250ZXh0TWVudS5zdHlsZS56SW5kZXggPSAxMDAwXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRleHRNZW51KVxuXG4gIGNvbnRleHRNZW51LnN0eWxlLmxlZnQgPSBgJHtldmVudC5wYWdlWH1weGBcbiAgY29udGV4dE1lbnUuc3R5bGUudG9wID0gYCR7ZXZlbnQucGFnZVl9cHhgXG5cbiAgZnVuY3Rpb24gZXhpdENvbnRleHRNZW51SGFuZGxlcigpIHtcbiAgICBjb250ZXh0TWVudS5yZW1vdmUoKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29uY2xpY2snLCBleGl0Q29udGV4dE1lbnVIYW5kbGVyKVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleGl0Q29udGV4dE1lbnVIYW5kbGVyKVxufVxuXG4vLyB0aGlzIGlzIGEgZXZlbnQgZGVsZWdhdGlvbiBoYW5kbGVyIGZvciBsZWZ0IGNsaWNrIGV2ZW50cyBvbiBidXR0b25zXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tFdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ0JVVFRPTicpXG5cbiAgaWYgKCF0YXJnZXQpIHJldHVyblxuXG4gIC8vIEVhY2ggaHRtbCBidXR0b24gZWxlbWVudCBoYXMgYSBkYXRhc2V0IHJvbGUuXG4gIC8vIHRoaXMgd2F5IHdlIGRldGVybWluZSB0aGUgYWN0aW9uIHRvIGV4ZWN1dGUuXG4gIGNvbnN0IHRhcmdldFJvbGUgPSB0YXJnZXQuZGF0YXNldC5yb2xlXG5cbiAgaWYgKHRhcmdldFJvbGUgPT09ICdhZGRpbmctdGFzaycpIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZVxuICAgIGlmIChpbnB1dFZhbHVlID09PSAnJykge1xuICAgICAgYWxlcnQoJ0NhbnQgYWRkIGFuIGVtcHR5IHRhc2shJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVsZXZhbnRMaXN0SWQgPSBnZXRBbmNlc3RvclNlY3Rpb25MaXN0SWQodGFyZ2V0KVxuICAgICAgYWRkVGFzayhyZWxldmFudExpc3RJZCwgaW5wdXRWYWx1ZSwgd2luZG93LmJvYXJkKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXRSb2xlID09PSAnYWRkaW5nLWxpc3QnKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LWxpc3QnKS52YWx1ZVxuICAgIGlmIChpbnB1dFZhbHVlID09PSAnJykge1xuICAgICAgYWxlcnQoJ0NhbnQgYWRkIGFuIGVtcHR5IHRhc2shJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkTmV3TGlzdChpbnB1dFZhbHVlLCB3aW5kb3cuYm9hcmQpXG4gICAgfVxuICB9IGVsc2UgaWYgKHRhcmdldFJvbGUgPT09ICdzYXZpbmctYm9hcmQnKSB7XG4gICAgcHV0VGFza3NUb0FwaShnZXRMb2NhbFN0b3JhZ2VCb2FyZFRhc2tzSW5OYXRpdmVGb3JtYXQoKSlcbiAgICBzdGFydExvYWRBbmltYXRpb24od2luZG93LmJvYXJkLkxJU1RTX0RJVilcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlbmRlckJvYXJkKHdpbmRvdy5ib2FyZC5MSVNUU19ESVYsIHdpbmRvdy5ib2FyZClcbiAgICB9LCAxMDApXG4gIH0gZWxzZSBpZiAodGFyZ2V0Um9sZSA9PT0gJ2xvYWRpbmctYm9hcmQnKSB7XG4gICAgc3RhcnRMb2FkQW5pbWF0aW9uKHdpbmRvdy5ib2FyZC5MSVNUU19ESVYpXG5cbiAgICBnZXRUYXNrc0Zyb21BcGkoKS50aGVuKCh0YXNrcykgPT4ge1xuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlVGFza3NJbk5hdGl2ZUZvcm1hdCh0YXNrcylcbiAgICAgIHdpbmRvdy5ib2FyZCA9IG5ldyBCb2FyZCh3aW5kb3cuQkFTRV9UQVNLU19MSVNUUywgZ2V0TG9jYWxTdG9yYWdlQm9hcmRUYXNrcygpKVxuICAgICAgd2luZG93LmJvYXJkLkxJU1RTX0RJViA9IHdpbmRvdy5MSVNUU19ESVYgLy8gVE9ETzogc2hvdWxkIGJlIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgICAgcmVuZGVyQm9hcmQod2luZG93LmJvYXJkLkxJU1RTX0RJViwgd2luZG93LmJvYXJkKVxuICAgIH0pXG4gIH0gZWxzZSBpZiAodGFyZ2V0Um9sZSA9PT0gJ2RlbGV0ZS1saXN0Jykge1xuICAgIGNvbnN0IHJlbGV2YW50TGlzdElkID0gZ2V0QW5jZXN0b3JTZWN0aW9uTGlzdElkKHRhcmdldClcbiAgICBkZWxldGVMaXN0KHJlbGV2YW50TGlzdElkLCB3aW5kb3cuYm9hcmQpXG4gIH1cbn1cblxubGV0IG1vdXNlSW5UYXNrID0gbnVsbCAvLyB0aGlzIGlzIGZvciBtb25pdG9yaW5nIGlmIHRoZSBtb3VzZSBpcyBwb2ludGluZyBhdCB0aGUgdGFza1xuXG5leHBvcnQgZnVuY3Rpb24gYWx0S2V5RG93bkV2ZW50SGFuZGxlcihldmVudCkge1xuICBjb25zdCBrZXlQcmVzc2VkID0gZXZlbnQua2V5XG5cbiAgaWYgKG1vdXNlSW5UYXNrICYmIGtleVByZXNzZWQgPT09ICdBbHQnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG51bWJlcktleURvd25FdmVudEhhbmRsZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBhbHRLZXlVcEV2ZW50SGFuZGxlcilcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyS2V5RG93bkV2ZW50SGFuZGxlcihldmVudCkge1xuICBjb25zdCBrZXlQcmVzc2VkID0gZXZlbnQua2V5XG4gIGNvbnN0IGxpc3RzSWRzQXJyYXkgPSBnZXRJZHNBcnJheUZyb21PYmpBcnJheSh3aW5kb3cuYm9hcmQubGlzdHMpLm1hcCgoaWQpID0+IFN0cmluZyhpZCkpXG4gIGlmIChtb3VzZUluVGFzayAmJiBsaXN0c0lkc0FycmF5LmluY2x1ZGVzKGtleVByZXNzZWQpKSB7XG4gICAgY29uc3QgdGFza0lkID0gZ2V0TGlUYXNrSWQobW91c2VJblRhc2spXG4gICAgY29uc3QgbmV3TGlzdElkID0gTnVtYmVyKGtleVByZXNzZWQpXG5cbiAgICBtb3ZlVGFzayh0YXNrSWQsIG5ld0xpc3RJZCwgd2luZG93LmJvYXJkKVxuICAgIG1vdXNlSW5UYXNrID0gbnVsbCAvLyB0aGUgdGFzayBoYXMgbW92ZWQgc28gdGhlIG1vdXNlIGlzIG5vIGxvbmdlciBpbnNpZGUgaXQuXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsdEtleVVwRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IGtleUxpZnRlZCA9IGV2ZW50LmtleVxuICBpZiAoa2V5TGlmdGVkID09PSAnQWx0Jykge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBudW1iZXJLZXlEb3duRXZlbnRIYW5kbGVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgYWx0S2V5VXBFdmVudEhhbmRsZXIpXG4gIH1cbn1cblxuLypcbiAqXG4gKiBoZXJlIHdlIGdldCB0aGUgdGFzayB3ZSBhcmUgcG9pbnRpbmcgYXQuXG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtb3VzZU92ZXJFdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50XG5cbiAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnTEknKSByZXR1cm5cbiAgbW91c2VJblRhc2sgPSB0YXJnZXRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdXNlT3V0RXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudFxuXG4gIGlmICh0YXJnZXQudGFnTmFtZSAhPT0gJ0xJJykgcmV0dXJuXG5cbiAgbW91c2VJblRhc2sgPSBudWxsXG59XG5cbi8qXG4gKlxuICogZGJsIGNsaWNrIGhhbmRsZXJzXG4gKlxuICovXG5cbmxldCBkYmxDbGlja2VkID0gZmFsc2UgLy8gbGF0ZXIgdXNlZCB0byBkZXRlcm1pbmUgaWYgdG8gc3RhcnQgZHJhZyBhbmQgZHJvcFxubGV0IG1vdXNlRG93biA9IGZhbHNlIC8vIGxhdGVyIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRvIHN0YXJ0IGRyYWcgYW5kIGRyb3BcblxuZXhwb3J0IGZ1bmN0aW9uIGRibENsaWNrRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudFxuXG4gIGlmICh0YXJnZXQudGFnTmFtZSAhPT0gJ0xJJykgcmV0dXJuXG5cbiAgZGJsQ2xpY2tlZCA9IHRydWVcblxuICB0YXJnZXQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpXG4gIHRhcmdldC5mb2N1cygpXG5cbiAgLy8gYSBmdW5jdGlvbiB0byBzZWxlY3QgYWxsIHRoZSBpbnNpZGUgb2ZmIHRoZSB0YXNrLlxuICBmdW5jdGlvbiBzZWxlY3RFbGVtZW50Q29udGVudHMoZWwpIHtcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWwpXG4gICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgc2VsLmFkZFJhbmdlKHJhbmdlKVxuICB9XG5cbiAgc2VsZWN0RWxlbWVudENvbnRlbnRzKHRhcmdldClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzT3V0RXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudFxuXG4gIGlmICh0YXJnZXQudGFnTmFtZSAhPT0gJ0xJJykgcmV0dXJuXG5cbiAgLy8gV2Ugd2lsbCB1c2UgdGhpcyBsYXRlciB3aGVuIHdlIGRvIHRoZSBkcmFnIGFuZCBkcm9wXG4gIC8vIHRvIGtub3cgaWYgdG8gc3RhcnQgdGhlIGRyYWcgb3Igbm90LlxuICBkYmxDbGlja2VkID0gZmFsc2VcblxuICB0YXJnZXQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKVxuXG4gIC8vIHVwZGF0ZSB0aGUgdGFzayB0ZXh0IHRvIG1hY2ggdGhlIG5ldyBvbmVcbiAgY29uc3QgdGFzayA9IGdldFRhc2tGcm9tTGkodGFyZ2V0KVxuICB0YXNrLnRleHQgPSB0YXJnZXQuaW5uZXJUZXh0XG5cbiAgdXBkYXRlTG9jYWxTdG9yYWdlVGFza3Mod2luZG93LmJvYXJkKVxufVxuXG4vKlxuICpcbiAqIGRyYWcgYW5kIGRyb3AgaGFuZGxlcnNcbiAqXG4gKiBJTVBPUlRBTlQhIC0gdGhlc2UgZnVuY3Rpb25zIGdvIG9uIHRoZSBIVE1MIGVsZW1lbnQgaXRzZWxmXG4gKiBpbiByZW5kZXJMaXN0KCkgd2UgY3JlYXRlIHRhc2tzIHdpdGggYW5cbiAqIFwib25jbGlja1wiID0gXCJjbGlja0RydWdBbmREcm9wSGFuZGxlcihldmVudClcIiBhbmRcbiAqIFwib25kcmFnc3RhcnRcIiA9IFwib25EcmFnU3RhcnQoKVwiIGF0dHJpYnV0ZXMuXG4gKlxuICovXG5cbi8vIHRvIHByZXZlbnQgdGhlIGJyb3dzZXIgZGVmYXVsdCBhY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdTdGFydCgpIHtcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0RydWdBbmREcm9wSGFuZGxlcihldmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnRcblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIC8vIHRvIHByZXZlbnQgdGhlIHNlbGVjdGluZyBhY3Rpb24gb2YgY2xpY2tcblxuICBtb3VzZURvd24gPSB0cnVlXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcClcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gIGZ1bmN0aW9uIG9uTW91c2VVcChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgbW91c2VEb3duID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvLyB0aGUgbWFpbiBkcmFnIGFuZCBkcm9wIHNlY3Rpb24hXG4gIC8vIHdlIHNldCBhIHRpbWUgb3V0IHNvIHRoZSB1c2VyIGNhbiBtYWtlIGEgZGJsY2xpY2sgd2l0aG91dCBzdGFydGluZyB0byBkcmFnXG4gIC8vIEkgZm91bmQgdGhhdCB0aGUgYmVzdCB0aW1lIGlzIDMwMCBtcy4gbWljcm9zb2Z0IHNheXMgaXRzIDUwMCBtcyA7KVxuICBjb25zdCBUSU1FX0ZPUl9VU0VSX1RPX0RCTF9DTElDSyA9IDMwMFxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChkYmxDbGlja2VkID09PSB0cnVlIHx8IG1vdXNlRG93biA9PT0gZmFsc2UpIHJldHVyblxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21vdmluZy10YXNrJylcblxuICAgIGNvbnN0IHNoaWZ0WCA9IGV2ZW50LmNsaWVudFggLSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgIGNvbnN0IHNoaWZ0WSA9IGV2ZW50LmNsaWVudFkgLSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cbiAgICB0YXJnZXQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgdGFyZ2V0LnN0eWxlLnpJbmRleCA9IDEwMDBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0YXJnZXQpXG5cbiAgICBtb3ZlQXQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKVxuXG4gICAgLy8gbW92ZXMgdGhlIHRhc2sgYXQgKHBhZ2VYLCBwYWdlWSkgY29vcmRpbmF0ZXNcbiAgICAvLyB0YWtpbmcgaW5pdGlhbCBzaGlmdHMgaW50byBhY2NvdW50XG4gICAgZnVuY3Rpb24gbW92ZUF0KHBhZ2VYLCBwYWdlWSkge1xuICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBgJHtwYWdlWCAtIHNoaWZ0WH1weGBcbiAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBgJHtwYWdlWSAtIHNoaWZ0WSAtIDV9cHhgIC8vIHNtYWxsIGFkanVzdG1lbnQgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgIH1cblxuICAgIGxldCBjdXJyZW50RHJvcHBhYmxlID0gbnVsbFxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpXG5cbiAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICBjb25zdCBlbGVtQmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICcnXG5cbiAgICAgIC8vIG1vdXNlbW92ZSBldmVudHMgbWF5IHRyaWdnZXIgb3V0IG9mIHRoZSB3aW5kb3cgKHdoZW4gdGhlIGJhbGwgaXMgZHJhZ2dlZCBvZmYtc2NyZWVuKVxuICAgICAgLy8gaWYgY2xpZW50WC9jbGllbnRZIGFyZSBvdXQgb2YgdGhlIHdpbmRvdywgdGhlbiBlbGVtZW50RnJvbVBvaW50IHJldHVybnMgbnVsbFxuICAgICAgaWYgKCFlbGVtQmVsb3cpIHJldHVyblxuXG4gICAgICAvLyBwb3RlbnRpYWwgZHJvcHBhYmxlIGFyZSBsYWJlbGVkIHdpdGggdGhlIGNsYXNzIFwiZHJvcHBhYmxlXCIgKGNhbiBiZSBvdGhlciBsb2dpYylcbiAgICAgIGNvbnN0IGRyb3BwYWJsZUJlbG93ID0gZWxlbUJlbG93LmNsb3Nlc3QoJy5kcm9wcGFibGUnKVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gICAgICBpZiAoY3VycmVudERyb3BwYWJsZSAhPSBkcm9wcGFibGVCZWxvdykge1xuICAgICAgICAvLyB3ZSdyZSBmbHlpbmcgaW4gb3Igb3V0Li4uXG4gICAgICAgIC8vIG5vdGU6IGJvdGggdmFsdWVzIGNhbiBiZSBudWxsXG4gICAgICAgIC8vICAgY3VycmVudERyb3BwYWJsZT1udWxsIGlmIHdlIHdlcmUgbm90IG92ZXIgYSBkcm9wcGFibGUgYmVmb3JlIHRoaXMgZXZlbnQgKGUuZyBvdmVyIGFuIGVtcHR5IHNwYWNlKVxuICAgICAgICAvLyAgIGRyb3BwYWJsZUJlbG93PW51bGwgaWYgd2UncmUgbm90IG92ZXIgYSBkcm9wcGFibGUgbm93LCBkdXJpbmcgdGhpcyBldmVudFxuXG4gICAgICAgIGlmIChjdXJyZW50RHJvcHBhYmxlKSB7XG4gICAgICAgICAgLy8gdGhlIGxvZ2ljIHRvIHByb2Nlc3MgXCJmbHlpbmcgb3V0XCIgb2YgdGhlIGRyb3BwYWJsZSAocmVtb3ZlIGhpZ2hsaWdodClcbiAgICAgICAgICBsZWF2ZURyb3BwYWJsZShjdXJyZW50RHJvcHBhYmxlKVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnREcm9wcGFibGUgPSBkcm9wcGFibGVCZWxvd1xuICAgICAgICBpZiAoY3VycmVudERyb3BwYWJsZSkge1xuICAgICAgICAgIC8vIHRoZSBsb2dpYyB0byBwcm9jZXNzIFwiZmx5aW5nIGluXCIgb2YgdGhlIGRyb3BwYWJsZVxuICAgICAgICAgIGVudGVyRHJvcHBhYmxlKGN1cnJlbnREcm9wcGFibGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtb3ZlIHRoZSB0YXNrIG9uIG1vdXNlbW92ZVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKVxuXG4gICAgLy8gZHJvcCB0aGUgdGFzaywgcmVtb3ZlIHVubmVlZGVkIGhhbmRsZXJzXG4gICAgdGFyZ2V0Lm9ubW91c2V1cCA9IGZ1bmN0aW9uIGJhcigpIHtcbiAgICAgIGlmIChhYm92ZURyb3BwYWJsZSkge1xuICAgICAgICBpZiAoY3VycmVudERyb3BwYWJsZS50YWdOYW1lID09PSAnTEknKSB7XG4gICAgICAgICAgY29uc3QgbmV3TGlzdElkID0gZ2V0QW5jZXN0b3JTZWN0aW9uTGlzdElkKGN1cnJlbnREcm9wcGFibGUpXG4gICAgICAgICAgY29uc3QgdGFza0lkID0gTnVtYmVyKHRhcmdldC5kYXRhc2V0Lm9yaWdpbmFsVGFza0lkKVxuICAgICAgICAgIGNvbnN0IGRyb3BwYWJsZVRhc2tJZCA9IGdldFRhc2tGcm9tTGkoY3VycmVudERyb3BwYWJsZSkuaWRcbiAgICAgICAgICBjb25zdCBkcm9wcGFibGVJbmRleCA9IHdpbmRvdy5ib2FyZC5nZXRUYXNrSW5kZXgoZHJvcHBhYmxlVGFza0lkKVxuXG4gICAgICAgICAgbW92ZVRhc2sodGFza0lkLCBuZXdMaXN0SWQsIGRyb3BwYWJsZUluZGV4ICsgMSwgd2luZG93LmJvYXJkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5ld0xpc3RJZCA9IGdldEFuY2VzdG9yU2VjdGlvbkxpc3RJZChjdXJyZW50RHJvcHBhYmxlKVxuICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IE51bWJlcih0YXJnZXQuZGF0YXNldC5vcmlnaW5hbFRhc2tJZClcblxuICAgICAgICAgIG1vdmVUYXNrKHRhc2tJZCwgbmV3TGlzdElkLCAwLCB3aW5kb3cuYm9hcmQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpXG4gICAgICB0YXJnZXQub25tb3VzZXVwID0gbnVsbFxuICAgICAgdGFyZ2V0LnJlbW92ZSgpXG4gICAgICByZW5kZXJCb2FyZCh3aW5kb3cuYm9hcmQuTElTVFNfRElWLCB3aW5kb3cuYm9hcmQpXG4gICAgfVxuICB9LCBUSU1FX0ZPUl9VU0VSX1RPX0RCTF9DTElDSylcbn1cblxubGV0IGFib3ZlRHJvcHBhYmxlID0gZmFsc2VcblxuZnVuY3Rpb24gZW50ZXJEcm9wcGFibGUoZHJvcHBhYmxlRWxlbWVudCkge1xuICBhYm92ZURyb3BwYWJsZSA9IHRydWVcblxuICBpZiAoZHJvcHBhYmxlRWxlbWVudC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgZHJvcHBhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiZWxvdy1kcmFnJylcbiAgfVxufVxuXG5mdW5jdGlvbiBsZWF2ZURyb3BwYWJsZShkcm9wcGFibGVFbGVtZW50KSB7XG4gIGFib3ZlRHJvcHBhYmxlID0gZmFsc2VcblxuICBpZiAoZHJvcHBhYmxlRWxlbWVudC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgZHJvcHBhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZWxvdy1kcmFnJylcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tXG5cbi8vIGFkZGluZyB0aGUgZXZlbnQgbGlzdGVuZXJzOlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYWx0S2V5RG93bkV2ZW50SGFuZGxlcilcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vdXNlT3ZlckV2ZW50SGFuZGxlcilcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VPdXRFdmVudEhhbmRsZXIpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tFdmVudEhhbmRsZXIpXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGNvbnRleHRDbGlja0hhbmRsZXIpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZGJsQ2xpY2tFdmVudEhhbmRsZXIpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZm9jdXNPdXRFdmVudEhhbmRsZXIpXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgRE9NIGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wianVzdCB0ZXh0XCIsIGNyZWF0ZUVsZW1lbnQoLi4uKV0sIFtcIm5hbmFcIiwgXCJiYW5hbmFcIl0sIHtpZDogXCJibGFcIn0pXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRhZ05hbWUgLSB0aGUgdHlwZSBvZiB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtBcnJheX0gY2hpbGRyZW4gLSB0aGUgY2hpbGQgZWxlbWVudHMgZm9yIHRoZSBuZXcgZWxlbWVudC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCBjaGlsZCBjYW4gYmUgYSBET00gZWxlbWVudCwgb3IgYSBzdHJpbmcgKGlmIHlvdSBqdXN0IHdhbnQgYSB0ZXh0IGVsZW1lbnQpLlxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyAtIHRoZSBjbGFzcyBsaXN0IG9mIHRoZSBuZXcgZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgLSB0aGUgYXR0cmlidXRlcyBmb3IgdGhlIG5ldyBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgY2hpbGRyZW4gPSBbXSwgY2xhc3NlcyA9IFtdLCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXG4gIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gbWFpbkVsZW1lbnQuYXBwZW5kKGNoaWxkRWxlbWVudCkpXG4gIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NlcylcblxuICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuICAgICAgbWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc1thdHRyaWJ1dGVdKVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWFpbkVsZW1lbnRcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXROYW1lKGxpc3ROYW1lKSB7XG4gIHJldHVybiBsaXN0TmFtZVxuICAgIC5zcGxpdCgnLScpXG4gICAgLm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcbiAgICAuam9pbignICcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRMaXN0TmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1snICddL2csICctJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdExpc3RDbGFzc05hbWUobGlzdE5hbWUpIHtcbiAgcmV0dXJuIGAke2Zvcm1hdExpc3ROYW1lKGxpc3ROYW1lKX0tdGFza3NgXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZHNBcnJheUZyb21PYmpBcnJheShvYmplY3RBcnIpIHtcbiAgcmV0dXJuIG9iamVjdEFyci5tYXAoKG9iaikgPT4gb2JqLmlkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOZXdJZEluQXJyYXlPZk9iamVjdHMob2JqZWN0QXJyKSB7XG4gIC8qIEdldHMgdGhlIGxhcmdlc3QgaWQgYW5kIHJldHVybnMgaXQgKyAxLiBcbiAgICAgIGkuZSB0aGUgcmV0dXJuaW5nIGlkIGRvZXMgbm90IGV4aXN0cyBpbiB0aGVcbiAgICAgIGFycmF5IGFuZCBpcyB1bmlxdWUuXG4gICAgICAqL1xuXG4gIGlmIChvYmplY3RBcnIubGVuZ3RoID09PSAwKSByZXR1cm4gMVxuICBjb25zdCBpZEFycmF5ID0gZ2V0SWRzQXJyYXlGcm9tT2JqQXJyYXkob2JqZWN0QXJyKVxuICByZXR1cm4gTWF0aC5tYXgoLi4uaWRBcnJheSkgKyAxXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3RGcm9tQXJyYXkob2JqZWN0SWQsIG9iamVjdEFycikge1xuICAvLyB0aHJvd3MgRXJyb3IgaWYgT2JqZWN0IGRvZXMgbm90IGV4aXN0cy5cbiAgY29uc3QgcmVxdWVzdGVkT2JqZWN0ID0gb2JqZWN0QXJyLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3RJZClcbiAgaWYgKHJlcXVlc3RlZE9iamVjdCA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ25vIHN1Y2ggb2JqZWN0IGV4aXN0cycpXG4gIHJldHVybiByZXF1ZXN0ZWRPYmplY3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZPYmplY3RJZFRha2VuKGlkLCBnZXRGdW5jdGlvbikge1xuICAvLyBnZXRGdW5jdGlvbiBpcyBhIGZ1bmN0aW9uIGV4cHJlc3Npb24uIHdlIHdpbGwga25vdyB3aGVyZSB0byBzZWFyY2ggZGVwZW5kaW5nIG9uIHRoZSBmdW5jdGlvblxuICB0cnkge1xuICAgIGdldEZ1bmN0aW9uKGlkKSAvLyByZW1lbWJlcjogZ2V0RnVuY3Rpb24gY2FuIGJlOiBbZ2V0TGlzdF0gYW5kIHRocm93cyBFcnJvciBpZiBubyBsaXN0IHdhcyBmb3VuZC5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2lkIGFscmVhZHkgZXhpc3QnKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8qIFxuICAgICAgICBPbmx5IGlmIHRoZSBlcnJvciBpcyBiZWNhdXNlIG9mIFwiZmluZGluZ1wiIHRoZSBvYmplY3RcbiAgICAgICAgdGhlbiB3ZSBjb250aW51ZSBhbmQgdGhyb3cgYW4gRXJyb3IuXG4gICAgICAgICovXG4gICAgaWYgKGVycm9yLm1lc3NhZ2UgPT09ICdpZCBhbHJlYWR5IGV4aXN0Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpZCBhbHJlYWR5IGV4aXN0JylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5T2JqKG9iaikge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmNvbnN0IFRBU0tTX0FQSV9VUkwgPSAnaHR0cHM6Ly9qc29uLWJpbnMuaGVyb2t1YXBwLmNvbS9iaW4vNjE0YWY3YjI0MDIxYWMwZTZjMDgwY2JkJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdChtZXRob2QgPSAnJywgZGF0YSA9IG51bGwpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2QsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH1cblxuICBpZiAoZGF0YSkge1xuICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmZXRjaChUQVNLU19BUElfVVJMLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9IGNhdGNoIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICBhbGVydCgnc2VydmVyIGVycm9yIC0gdHJ5aW5nIGFnYWluJylcbiAgICByZXF1ZXN0KG1ldGhvZCwgZGF0YSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFza3NGcm9tQXBpKCkge1xuICBjb25zdCBsb2FkZWQgPSBhd2FpdCByZXF1ZXN0KCdHRVQnKVxuICByZXR1cm4gbG9hZGVkLnRhc2tzXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXRUYXNrc1RvQXBpKHRhc2tzKSB7XG4gIGF3YWl0IHJlcXVlc3QoJ1BVVCcsIHsgdGFza3MgfSlcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZE5vZGVzIH0gZnJvbSAnLi4vaGVscEYvaGVscCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRMb2FkQW5pbWF0aW9uKGRpdikge1xuICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkaXYpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpXG5cbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhkaXYpXG5cbiAgZGl2LnN0eWxlLmhlaWdodCA9IGhlaWdodFxuXG4gIGNvbnN0IGJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJhckRpdi5jbGFzc0xpc3QuYWRkKCdiYXInLCAnbG9hZGVyJylcblxuICBjb25zdCBjaXJjbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjaXJjbGVEaXYuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJylcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHAuaW5uZXJIVE1MID0gJ0xvYWRpbmcnXG4gIHAuY2xhc3NMaXN0LmFkZCgnbG9hZGluZy1wJylcblxuICBiYXJEaXYuYXBwZW5kKGNpcmNsZURpdiwgcClcbiAgZGl2LmFwcGVuZChiYXJEaXYpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uL2hlbHBGL2NyZWF0ZUVsZW1lbnQnXG5pbXBvcnQgeyBmb3JtYXROYW1lIH0gZnJvbSAnLi4vaGVscEYvZm9ybWF0dGluZydcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tICcuLi9oZWxwRi9oZWxwJ1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgY2xpY2tEcnVnQW5kRHJvcEhhbmRsZXIsIG9uRHJhZ1N0YXJ0IH0gZnJvbSAnLi4vZXZlbnRIYW5kbGluZy9jbGlja0RyYWdBbmREcm9wSGFuZGxlcidcblxud2luZG93LmNsaWNrRHJ1Z0FuZERyb3BIYW5kbGVyID0gY2xpY2tEcnVnQW5kRHJvcEhhbmRsZXJcbndpbmRvdy5vbkRyYWdTdGFydCA9IG9uRHJhZ1N0YXJ0XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qXG4gKlxuICogcmVuZGVyTGlzdCAtIGNyZWF0ZXMgZWFjaCB0YXNrIGFuZCBpbnNlcnQgaXQgaW50byB1bFxuICogdGhlbiByZW5kZXJzIHRvIHRoZSBMSVNUU19ESVZcbiAqXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tzRnJvbUxpc3QobGlzdCkge1xuICBjb25zdCB0YXNrcyA9IFtdXG4gIGZvciAoY29uc3QgdGFzayBvZiBsaXN0LnRhc2tzKSB7XG4gICAgdGFza3MucHVzaChcbiAgICAgIGNyZWF0ZUVsZW1lbnQoJ2xpJywgW3Rhc2sudGV4dF0sIFsndGFzaycsICdkcm9wcGFibGUnXSwge1xuICAgICAgICAnZGF0YS1vcmlnaW5hbC10YXNrLWlkJzogdGFzay5pZCxcbiAgICAgICAgb25tb3VzZWRvd246ICdjbGlja0RydWdBbmREcm9wSGFuZGxlcihldmVudCknLCAvLyBsb29rIGRvd24gaW4gaGFuZGxlciBmdW5jdGlvbnNcbiAgICAgICAgb25kcmFnc3RhcnQ6ICdvbkRyYWdTdGFydCgpJywgLy8gdG8gY2FuY2VsIHRoZSBkZWZhdWx0IGJyb3dzZXIgYWN0aW9uXG4gICAgICB9KVxuICAgIClcbiAgfVxuICByZXR1cm4gdGFza3Ncbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckxpc3QobGlzdCwgZmF0aGVyRGl2KSB7XG4gIGZhdGhlckRpdi5zdHlsZS5oZWlnaHQgPSAnJ1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsnZGVsZXRlJ10sIFsnZGVsZXRlLWJ1dHRvbicsICdhZGQtYnV0dG9uJ10sIHtcbiAgICAnZGF0YS1yb2xlJzogJ2RlbGV0ZS1saXN0JyxcbiAgfSlcbiAgY29uc3QgbGlzdEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgW2Zvcm1hdE5hbWUobGlzdC5uYW1lKV0sIFsnbGlzdC1oZWFkZXInXSlcbiAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIFtdLCBbJ2FkZC1pbnB1dCddLCB7XG4gICAgaWQ6IGBhZGQtJHtsaXN0LnN0eWxlQ2xhc3Muc2xpY2UoMCwgLTEpfWAsXG4gICAgcGxhY2Vob2xkZXI6ICduZXcgdGFzaycsXG4gIH0pXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsnQWRkJ10sIFsnYWRkLWJ1dHRvbiddLCB7XG4gICAgaWQ6IGBzdWJtaXQtYWRkLSR7bGlzdC5zdHlsZUNsYXNzLnNsaWNlKDAsIGxpc3Quc3R5bGVDbGFzcy5pbmRleE9mKCctdGFza3MnKSl9YCxcbiAgICAnZGF0YS1yb2xlJzogJ2FkZGluZy10YXNrJyxcbiAgfSlcblxuICBjb25zdCBpbnB1dERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtpbnB1dCwgYWRkQnV0dG9uXSwgWydpbnB1dC1kaXYnXSlcblxuICBjb25zdCB0YXNrcyA9IGNyZWF0ZVRhc2tzRnJvbUxpc3QobGlzdClcblxuICBjb25zdCB0YXNrc0xpc3QgPSBjcmVhdGVFbGVtZW50KCd1bCcsIHRhc2tzLCBbbGlzdC5zdHlsZUNsYXNzLCAndGFzay1saXN0J10pXG4gIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgW2RlbGV0ZUJ1dHRvbiwgbGlzdEhlYWRlciwgdGFza3NMaXN0LCBpbnB1dERpdl0sIFsnc2VjdGlvbicsICdkcm9wcGFibGUnXSwge1xuICAgICdkYXRhLW9yaWdpbmFsLWxpc3QtaWQnOiBsaXN0LmlkLFxuICB9KVxuXG4gIGZhdGhlckRpdi5hcHBlbmQoc2VjdGlvbilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckxpc3RzKGZhdGhlckRpdiwgbGlzdHMpIHtcbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhmYXRoZXJEaXYpXG4gIGZvciAoY29uc3QgbGlzdCBvZiBsaXN0cykge1xuICAgIHJlbmRlckxpc3QobGlzdCwgZmF0aGVyRGl2KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZChmYXRoZXJEaXYsIGJvYXJkKSB7XG4gIHJlbmRlckxpc3RzKGZhdGhlckRpdiwgYm9hcmQubGlzdHMpXG4gIC8vIHJlbmRlckNhbGVuZGVyKGNhbGVuZGVyRGl2KVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrcyhib2FyZCkge1xuICBjb25zdCB0YXNrcyA9IHtcbiAgICB0b2RvOiBbXSxcbiAgICAnaW4tcHJvZ3Jlc3MnOiBbXSxcbiAgICBkb25lOiBbXSxcbiAgfVxuXG4gIC8vIHRoZSBmb3JtYXQgcmVxdWlyZXMgJ3RvZG8nIGFuZCBub3QgJ3RvLWRvJyBzbyB3ZSBoYW5kbGUgdGhpcyBoZXJlLlxuICBmb3IgKGNvbnN0IGxpc3Qgb2YgYm9hcmQubGlzdHMpIHtcbiAgICBpZiAobGlzdC5uYW1lID09PSAndG8tZG8nKSB7XG4gICAgICB0YXNrcy50b2RvID0gbGlzdC50YXNrcy5tYXAoKHRhc2spID0+IHRhc2sudGV4dClcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza3NbbGlzdC5uYW1lXSA9IGxpc3QudGFza3MubWFwKCh0YXNrKSA9PiB0YXNrLnRleHQpXG4gICAgfVxuICB9XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxufVxuXG4vLyB0aGlzIGZ1bmN0aW9ucyB3aWxsIGhlbHAgdXMgaW4gbWFuYWdpbmcgdGhlIHNldmVyIGFwaS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2VCb2FyZFRhc2tzSW5OYXRpdmVGb3JtYXQoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlQm9hcmRUYXNrcygpIHtcbiAgY29uc3QgbG9jYWxTdG9yYWdlVGFza3MgPSBnZXRMb2NhbFN0b3JhZ2VCb2FyZFRhc2tzSW5OYXRpdmVGb3JtYXQoKVxuXG4gIC8vIHdlIHJlcGxhY2UgdGhlIHByb3BlcnR5IGtleTogJ3RvZG8nIHdpdGggdGhlIGtleSAndG8tZG8nLFxuICAvLyBzbyBvdXIgQm9hcmQgY2xhc3MgY2FuIGhhbmRsZSBpdCBwcm9wZXJseS5cbiAgZGVsZXRlIE9iamVjdC5hc3NpZ24obG9jYWxTdG9yYWdlVGFza3MsIHsgJ3RvLWRvJzogbG9jYWxTdG9yYWdlVGFza3MudG9kbyB9KS50b2RvXG4gIHJldHVybiBsb2NhbFN0b3JhZ2VUYXNrc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlVGFza3NJbk5hdGl2ZUZvcm1hdChuZXdUYXNrcykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShuZXdUYXNrcykpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0TG9jYWxTdG9yYWdlVGFza3MoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHsgdG9kbzogW10sICdpbi1wcm9ncmVzcyc6IFtdLCBkb25lOiBbXSB9KSlcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVRhc2sodGFzaykge1xuICBpZiAodHlwZW9mIHRhc2sgPT09ICdvYmplY3QnICYmIHRhc2sudGV4dC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGFza1xuICB9XG5cbiAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgdGFzaycpXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCdcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZUJvYXJkVGFza3MsIHNldERlZmF1bHRMb2NhbFN0b3JhZ2VUYXNrcyB9IGZyb20gJy4vc2VydmljZXMvc3RvcmFnZSdcbmltcG9ydCB7IHJlbmRlckJvYXJkIH0gZnJvbSAnLi9zZXJ2aWNlcy9kb20nXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IGNsaWNrRHJ1Z0FuZERyb3BIYW5kbGVyLCBvbkRyYWdTdGFydCB9IGZyb20gJy4vZXZlbnRIYW5kbGluZy9jbGlja0RyYWdBbmREcm9wSGFuZGxlcidcblxuLypcbiAqIFRoZSBtYW5lIEJvYXJkIGNsYXNzLlxuICpcbiAqIGV2ZXJ5IHJlbmRlciBvZmYgdGhlIFVJIGlzIGRvbmUgdGhydSB0aGUgYm9hcmQgb2JqZWN0XG4gKiB0aGUgYmFzaWMgc3RydWN0dXJlIGlzIGxpa2UgdGhpczpcbiAqXG4gKiBib2FyZCA9IHtcbiAqICBsaXN0czogW3sgaWQ6IDEsIG5hbWU6ICdkb25lJywgdGFza3M6IFt7aWQ6IDEsIHRleHQ6ICdJIGFtIGEgdGFzayd9LCB7fS4uLl0sIHN0eWxlY2xhc3M6ICdkb25lLXRhc2tzJ30sIHt9LCAuLi5dLFxuICogIGJhc2VUYXNrc0xpc3QgPSBbXVxuICogfVxuICpcbiAqL1xuXG4vLyBjb25zdGFudHMgZm9yIHVzIHRvIHVzZS5cbmNvbnN0IExJU1RTX0RJViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0cy1kaXYnKVxuY29uc3QgQkFTRV9UQVNLU19MSVNUUyA9IFsndG8tZG8nLCAnaW4tcHJvZ3Jlc3MnLCAnZG9uZSddXG53aW5kb3cuQkFTRV9UQVNLU19MSVNUUyA9IEJBU0VfVEFTS1NfTElTVFNcbndpbmRvdy5MSVNUU19ESVYgPSBMSVNUU19ESVZcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5cbi8qXG4gKiBFTlRFUklORyBGVU5DVElPTi5cbiAqXG4gKiBXaGVuIGVudGVyaW5nIHRoZSBzaXRlIG9yIHJlZnJlc2hpbmcgdGhlIHBhZ2Ugd2UgY2hlY2tcbiAqIGlmIHdlIGhhdmUgYSBsb2NhbFN0b3JhZ2UgdGFza3Mgb2JqZWN0IHNldCB1cC5cbiAqIGlmIG5vdCwgd2UgY3JlYXRlIG9uZSBpbiBiYXNlIGZvcm0uXG4gKlxuICogQWZ0ZXIgdGhhdCB3ZSByZW5kZXIgdGhlIGJvYXJkLlxuICovXG5cbmZ1bmN0aW9uIG9uRW50ZXJpbmdTaXRlKCkge1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB7XG4gICAgc2V0RGVmYXVsdExvY2FsU3RvcmFnZVRhc2tzKClcbiAgfVxuICBjb25zdCBib2FyZCA9IG5ldyBCb2FyZChCQVNFX1RBU0tTX0xJU1RTLCBnZXRMb2NhbFN0b3JhZ2VCb2FyZFRhc2tzKCkpXG4gIGJvYXJkLkxJU1RTX0RJViA9IExJU1RTX0RJViAvLyBUT0RPOiBzaG91bGQgYmUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIHdpbmRvdy5ib2FyZCA9IGJvYXJkXG4gIGNvbnNvbGUubG9nKCd0ZXN0OiAnLCBib2FyZClcblxuICByZW5kZXJCb2FyZChMSVNUU19ESVYsIGJvYXJkKVxufVxuXG5vbkVudGVyaW5nU2l0ZSgpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qXG4gKlxuICogVGhlIG1haW4gcmVuZGVyaW5nIGZ1bmN0aW9uc1xuICpcbiAqXG4gKi9cblxuLypcbiAqXG4gKiByZW5kZXJCb2FyZCAtIGNyZWF0ZXMgYSBuZXcgYm9hcmQgZnJvbSBsb2NhbFN0b3JhZ2VcbiAqIGFuZCByZW5kZXJzIHRoZSBsaXN0cy5cbiAqIG9wdGlvbmFsIGZvciB0aGUgZnV0dXJlIC0gYWRkaW5nIHJlbmRlckNhbGVuZGVyKCkgYW5kXG4gKiB3aGF0IHdlIHdhbnQgdG8gYWRkIHRvIHRoZSBib2FyZCBjbGFzc1xuICpcbiAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG4vKlxuICpcbiAqXG4gKiBib2FyZCBtYW5hZ2VtZW50IGZ1bmN0aW9ucy5cbiAqXG4gKlxuICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qXG4gKlxuICpcbiAqIGV2ZW50IGhhbmRsaW5nIGZ1bmN0aW9ucy5cbiAqXG4gKi9cblxuLy8gdGhpcyBmdW5jdGlvbiBpcyBmb3IgdGhlIHNlYXJjaCBpbnB1dCBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLlxuLy8gb25rZXl1cD1cImZpbHRlckxpc3RzKClcIiAtLT4gbG9vayBpbiBodG1sXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLypcbiAqXG4gKlxuICogbG9jYWwgc3RvcmFnZSBtYW5hZ2VtZW50IGZ1bmN0aW9ucy5cbiAqXG4gKiB0aGlzIGlzIGFuIGFwaSBmb3Igd29ya2luZyB3aXRoIHRoZSBsb2NhbCBzdG9yYWdlIGZvcm1hdC5cbiAqIHRoZSBmb3JtYXQ6XG4gKiB7XG4gKiAgICAndG9kbycgOiBbXSxcbiAqICAgICdpbi1wcm9ncmVzczogW10sXG4gKiAgICAnZG9uZSc6IFtdLFxuICogfVxuICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qXG4gKlxuICpcbiAqIHNlcnZlciBhcGkgbWV0aG9kcy5cbiAqXG4gKiBoZXJlIHdlIHVzZSBmZXRjaCB0byBzZW5kIHJlcXVlc3RzIHRvIHRoZSBzZXJ2ZXIuXG4gKiBpbXBvcnRhbnQgLSBpZiB3ZSBnZXQgYW4gZXJyb3Igd2UgYWxlcnQgdGhlIHVzZXIgYW5kIHJ1biB0aGUgZnVuY3Rpb24gYWdhaW4uXG4gKlxuICovXG5cbi8qXG4gKlxuICogbG9hZGluZyBhbmltYXRpb24uXG4gKiByZW5kZXJzIGEgY29vbCBhbmltYXRpb24gdG8gdGhlIExJU1RTX0RJVlxuICpcbiAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG4vKlxuICpcbiAqIGhlbHAgZnVuY3Rpb25zXG4gKlxuICovXG5cbi8qXG4gKlxuICogdmFsaWRhdGlvbiBmdW5jdGlvbnNcbiAqXG4gKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=