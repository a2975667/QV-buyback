(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/complete/complete.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complete/complete.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-light\">\n\t<div class=\"col-sm-1\">\n\t\t<br>\n\t</div>\n\t<div class=\"col-sm\">\n\t</div>\n\t<div class=\"col-sm\">\n\t</div>\n</nav>\n<div class=\"container\">\n\t<div class=\"container\">\n\t\t<h1>{{title}}</h1>\n\t</div>\n\t<div class=\"container\">\n\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t<li class=\"list-group-item\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\tTo be paid, you will need the following code:\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4\" style=\"color: darkred;\">\n\t\t\t\t\t\t{{code}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item\">\n\t\t\t\t<!--<div class=\"row\">\n\t\t\t\t\t<p>Please return to the original hit page and paste in the code above. After pasting the code, You can download the debrief information about this experiment <a href='/download/debrief' target=\"_blank\">here.</a></p>\n\t\t\t\t</div>-->\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"container\" [innerHTML]=\"text\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demographic/demographic.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demographic/demographic.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-survey [json]=\"demoForm\" (resultEmit)=\"submit($event)\"></app-survey>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/donation.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donation/donation.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-light\">\n\t<div class=\"col-sm-1\">\n\t\t<br>\n\t</div>\n\t<div class=\"col-sm\">\n\t</div>\n\t<div class=\"col-sm\">\n\t</div>\n</nav>\n<div class=\"container\">\n\t<div class=\"container\">\n\t\t<h1>Lottery & Donation</h1>\n\t\t<p>\n\t\t\tYou have entered a lottery where one person will win $35. You will win $35 with a chance of 1 out of 70.\n\t\t\tIf you win the lottery, you can choose to donate part of or all of the winning amount to <b>one or more\n\t\t\t\torganizations</b> listed below. The research team will <b>match $1 to each $1 you donate</b> on your\n\t\t\tbehalf. The amount you choose to keep will be paid through a MTurk bonus. Please specify the donation\n\t\t\tdollar amount to your organization of interest. To learn more about each organization, you can click on\n\t\t\tthe hyperlink of the organization name and visit its website and a new tab or new window would open.\n\t\t\t<br><br>\n\t\t\tIf you are the winner of the lottery, the research team will donate the specified amount plus the\n\t\t\tmatched amount to the chosen organizations on your behalf, and the amount you choose to keep will be\n\t\t\tpaid through bonus on MTurk.\n\t\t\t<br><br>\n\t\t\tPlease allocate the desired dollar amount for donation to the organizations of your interest.\n\t\t</p>\n\t</div>\n\t<div class=\"container\">\n\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t<li class=\"list-group-item\" *ngFor=\"let org of this.organizations; let i = index\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\" style=\"color: white;\">\n\t\t\t\t\t\t{{org.orgId}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\t<div [innerHTML]=\"org.org\"></div>\n\t\t\t\t\t\t<!--{{org.org}}-->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t$ <input min=\"0\" max=\"35\" [(ngModel)]=\"donations[org.orgId]\" (keyup)=\"caculate(org.orgId)\"\n\t\t\t\t\t\t\tstyle=\"display: inline; width: 80%\" type=\"number\" min=\"0\" class=\"form-control\"\n\t\t\t\t\t\t\toninput=\"validity.valid||(value='');\" onkeyup=\"validity.valid||(value='');\"\n\t\t\t\t\t\t\tonkeydown=\"validity.valid||(value='');\" onchange=\"validity.valid||(value='');\"\n\t\t\t\t\t\t\tonclick=\"validity.valid||(value='');\" id=\"org.orgId\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\"></div>\n\t\t\t\t\t<div class=\"col-8\">{{org.description}}</div>\n\t\t\t\t\t<div class=\"col-3\"> </div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\tSubtotal:\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t$ {{sum}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\tSummary:\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\tIf you win the lottery, you will donate ${{sum}} and receive ${{MAX-sum}}. The research team\n\t\t\t\t\t\twill match ${{sum}} for your donation.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t<button (click)=\"submit()\" type=\"button\" class=\"btn btn-outline-primary\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/likert/likert.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/likert/likert.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-survey *ngIf=\"json.questions\" [json]=\"json\" (resultEmit)=\"submit($event)\"></app-survey>\n<div *ngIf=\"html\" class=\"container\">\n    <div [innerHTML]=\"html\"></div>\n    <button (click)=\"submit(null, $event)\" type=\"submit\" class=\"mr-2 btn btn-success\">\n        Submit\n    </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\" *ngFor=\"let option of this.currentOptions; let i = index\">\n            <div class=\"row\">\n                <div class=\"col-1\">\n                    <button (click)=\"modifyVotesByID(i, 1)\" type=\"button\" class=\"btn btn-outline-primary btn-sm\" [disabled]=\"isDisabled(i, false)\">\n                            <i class=\"fas fa-plus\"></i>\n                    </button>\n                    <button (click)=\"modifyVotesByID(i, -1)\" type=\"button\" class=\"btn btn-outline-primary btn-sm\" [disabled]=\"isDisabled(i, true)\">\n                        <i class=\"fas fa-minus\"></i>\n                    </button>\n                </div>\n                <div class=\"col-8\">\n                    {{option.option}}\n                    <div *ngIf=\"votes[i] >= 0; then tick else cross\"></div>\n                    <ng-template #tick>\n                        <i *ngFor=\"let k of [].constructor(votes[i])\" class=\"far fa-check-circle tick\"></i>\n                    </ng-template>\n                    <ng-template #cross>\n                        <i *ngFor=\"let k of [].constructor(-votes[i])\" class=\"far fa-times-circle cross\"></i>\n                    </ng-template>\n                </div>\n                <div class=\"col-3\">\n                    <small style=\"float: left; margin: 0\">0%</small>\n                    <small style=\"float: right; margin: 0\">100%</small>\n                    <progressbar *ngIf=\"votes[i]>=0\" type=\"info\" style=\"width: 100%;\" [max]=\"this.totalCredits\" [value]=\"votes[i]*votes[i]\" [striped]=\"true\" [animate]=\"true\">\n                            <i>{{((votes[i]*votes[i])/this.totalCredits)*100 | number : '1.2-2'}}%</i>\n                    </progressbar>\n                    <progressbar *ngIf=\"votes[i]<0\" type=\"warning\" style=\"width: 100%;\" [max]=\"this.totalCredits\" [value]=\"votes[i]*votes[i]\" [striped]=\"true\" [animate]=\"true\">\n                        <i>{{((votes[i]*votes[i])/this.totalCredits)*100 | number : '1.2-2'}}%</i>\n                    </progressbar>\n                </div>\n            </div>\n            <div class=\"row\">\n                    <div class=\"col-1\"></div>\n                    <div class=\"col-8\">{{option.description}}</div>\n                    <div class=\"col-3\"> Casted {{votes[i]}} vote(s), cost {{votes[i]*votes[i]}} credit(s)</div>\n\n            </div>\n        </li>\n\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-light\">\n\t<div class=\"col-sm-2\">\n\t\t<br>\n\t</div>\n\t<div class=\"col-sm\">\n\t\t<div class=\"progress\">\n\t\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated\"\n\t\t\t\t[style.width.%]=\"(currentQuestionNum+1/numQuestion)*100\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-sm-2\" align=\"right\">\n\t\tPart {{currentFileNum}} Q{{currentQuestionNum+1}} / {{numFile}} Parts\n\t</div>\n</nav>\n\n\n<div class=\"container\">\n\t<br>\n\t<h1>{{questionTitle}}</h1>\n\t<video *ngIf=\"questionTitle=='QV Dry Run: Understanding what is Quadratic Voting'\" controls><source src=\"/api/video/qv.webm\"></video>\n\n\t<h4 *ngIf=\"questionTitle=='QV Dry Run: Understanding what is Quadratic Voting'\">Please watch the video above and play around with the interface below. Once you are ready, click submit and answer a few questions to check your understanding of what QV is. <br></h4>\n\t<br>\n\t<!--<br>\n\n\t<p *ngIf=\"questionTitle!='QV Dry Run: Understanding what is Quadratic Voting'\"><!--People have different preferences in\n\t\thow important different video elements are. Here we listed 5 different video elements. For each of the elements listed below, <b> how important do you think the video elements were to understanding the video given limited bandwidth on a flight?</b></p>-->\n\t<p>\n\t\tFor this question, you will use a <b>Binary Quadratic Voting</b> that we introduced eariler to ask about your preferences.\n\t\tThe following description might help you recall how QV works.\n\t\t<br><br>\n\t\tYou will be given a budget of a certain number of <b> voice credits</b>. You will use the available credits to\n\t\tcast votes. If you think a video element is more important, you can cast multiple\n\t\tupvotes using the <b>+1 sign</b>. If you believe that an element is less important, you can cast a few downvotes using the <b> -1 sign</b>. If you are neutral about an element, you can choose to cast <b> no vote</b>.\n\n\t\t<br><br>\n\t\t<b> Based on the intensity of your opinion, you can cast one or more upvotes or downvotes for each video element</b>. The\n\t\tstronger your opinion is, the more votes you can put on one option. At the same time, as the number of votes\n\t\tincreases, the voice credits it costs increase quadratically, i.e. <b> X votes will cost X<sup>2</sup> (square of X)\n\t\t\tcredits</b>. The cost of some common number of votes is specified in the table below:\n\t</p>\n\t<table align=\"center\">\n\t\t<tbody>\n\t\t\t<tr align=\"center\">\n\t\t\t\t<th>Number of up or down votes</th>\n\t\t\t\t<td align=\"center\">1</td>\n\t\t\t\t<td align=\"center\">2</td>\n\t\t\t\t<td align=\"center\">3</td>\n\t\t\t\t<td align=\"center\">4</td>\n\t\t\t\t<td align=\"center\">5</td>\n\t\t\t\t<td align=\"center\">6</td>\n\t\t\t\t<td align=\"center\">7</td>\n\t\t\t\t<td align=\"center\">8</td>\n\t\t\t\t<td align=\"center\">9</td>\n\t\t\t\t<td align=\"center\">10</td>\n\t\t\t</tr>\n\t\t\t<!-- <tr align=\"center\">\n\t\t\t\t\t<th align=\"center\">&dArr;</th>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t</tr> -->\n\t\t\t<tr align=\"right\">\n\t\t\t\t<th align=\"right\">Cost in number of voice credits</th>\n\t\t\t\t<td align=\"center\">1</td>\n\t\t\t\t<td align=\"center\">4</td>\n\t\t\t\t<td align=\"center\">9</td>\n\t\t\t\t<td align=\"center\">16</td>\n\t\t\t\t<td align=\"center\">25</td>\n\t\t\t\t<td align=\"center\">36</td>\n\t\t\t\t<td align=\"center\">49</td>\n\t\t\t\t<td align=\"center\">64</td>\n\t\t\t\t<td align=\"center\">81</td>\n\t\t\t\t<td align=\"center\">100</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>\n\t\t<br>\n\t\t<b>You cannot exceed the budget of given voice credits, but you do not have to use up all the available credits\n\t\t\teither. </b> You can see the total number of voice credits you have and the number of credits you have spent\n\t\talready in the “Summary” section below.\n\t</p>\n\t<hr>\n\t<div [innerHTML]=\"questionDes\"></div>\n</div>\n<br>\n\n<app-option></app-option>\n\n<br>\n<br>\n\n<app-summary></app-summary>\n<br>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<swal\n  #confirmSubmit\n  title=\"Submit with 0 vote?\"\n  text=\"This cannot be undone\"\n  icon=\"question\"\n  [showCancelButton]=\"true\"\n  [focusCancel]=\"true\"\n  (confirm)=\"submitSuccessSwal.fire()\">\n</swal>\n<swal\n  #submitSuccess\n  icon=\"question\"\n  [showCancelButton]=\"false\"\n  [showConfirmButton]=\"false\"\n>\n<form *swalPortal=\"swalTargets.content\" >\n    <p>\n        In a few sentences, why did you choose to vote this way?\n    </p>\n    <textarea\n        class=\"swal2-textarea\"\n        type=\"text\"\n        [formControl]=\"submitForm\"\n        autofocus\n    ></textarea>\n    <label *ngIf=\"submitForm.invalid\" [ngClass] = \"'error'\" > Your response required with min 1 character. </label>\n    <br/>\n    <button\n    (click)=\"submitFinalForm()\"\n    *ngIf=\"!submitForm.invalid\"\n    class=\"swal2-styled swal2-confirm\"> Submit</button>\n\n</form>\n\n</swal>\n<div class=\"container sticky\">\n    <div class=\"card\">\n        <h5 class=\"card-header\">Summary</h5>\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Used {{usedCredits}} out of {{totalCredits}} credits</h5>\n                <div class=\"card-text\">\n                    <div>\n                        <small style=\"float: left; margin: 0\">0</small>\n                        <small style=\"float: right; margin: 0\">{{totalCredits}}</small>\n                        <progressbar style=\"width: 100%; margin-bottom: 10px;\" [animate]=\"false\" [value]=\"percentage\" [type]=\"type\"></progressbar>\n                    </div>\n                </div>\n                <button (click)=\"submit()\" type=\"button\" class=\"btn btn-outline-primary\">Submit</button>\n            </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"survey-container contentcontainer codecontainer\">\n  <div id=\"surveyElement\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1>\n        {{title}}\n    </h1>\n    <div class=\"row\">\n        <div class=\"col-sm wrap-content\" [innerHTML]=\"description\"></div>\n    </div>\n\n\t<br>\n    <h2>\n        Video\n    </h2>\n\t<hr>\n    <div class=\"row justify-content-center\">\n        <div style=\"justify-content: center;\" #videoOverlay class=\"original\" (click)=\"playPause()\">\n            <video\n                #videoPlayer\n                style=\"display: none;\"\n                src=\"\"\n                ></video>\n            <canvas #canvas\n            style=\"margin-left:10%\"\n            width=\"960px\" height=\"540px\"></canvas>\n            </div>\n        <audio\n        #audioPlayer\n        src=\"\">\n        </audio>\n    </div>\n\n   <p></p>\n    <div>\n\t<h2 *ngIf=\"this.showFullConfig\"> <hr style=\"height:30pt; visibility:hidden;\" /> Configuration </h2>\n\t<h2 *ngIf=\"this.showDemoConfig\"> <hr style=\"height:30pt; visibility:hidden;\" /> Configuration </h2>\n\t\t<br>\n\t\t<br>\n        <div class=\"row\" *ngIf=\"this.showPanel\">\n\n\t\t\t<br>\n            <div class=\"col-sm wrap-content\">\n                <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th scope=\"col\" colspan=\"1\">Configuration Name</th>\n                        <th scope=\"col\" colspan=\"1\">Enhancement</th>\n                        <th *ngIf=\"formJson['settings']['apply']\" scope=\"col\" colspan=\"1\">Your Price</th>\n                        <th *ngIf=\"formJson['settings']['apply']\" scope=\"col\" colspan=\"1\">Why you price this way?</th>\n                        <th *ngIf=\"showCost\" scope=\"col\" colspan=\"1\">Cost</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n\t\t\t\t\t\t<ng-container *ngIf=\"this.showDemoConfig\">\n\t\t\t\t\t\t\t<tr style=\"height: 100px;\"*ngFor=\"let k of objectKeys(configurations)\">\n\t\t\t\t\t\t\t\t<td colspan=\"1\" scope=\"row\">{{k}}</td>\n\t\t\t\t\t\t\t\t<td colspan=\"1\" scope=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-check\">\n                                        <input\n                                            [disabled]=\"formJson['settings']['apply']\"\n                                            class=\"form-check-input\"\n                                            type=\"checkbox\"\n                                            [checked]=\"fetchCheckBoxStatus(k)\" (click)=\"onCheckboxClick($event, k)\">\n\t\t\t\t\t\t\t\t\t</div>\n                                </td>\n                                <td colspan=\"1\" scope=\"row\" *ngIf=\"formJson['settings']['apply']\">\n                                    <ng5-slider\n                                        [(value)]=\"priceArray[k]\"\n                                        [options]=\"priceSliderOptions\"\n                                        (userChange)=\"onRadioCheck()\"></ng5-slider>\n                                </td>\n                                <td colspan=\"1\" scope=\"row\" *ngIf=\"formJson['settings']['apply']\">\n                                    <input class=\"form-control\"/>\n                                </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-container>\n\n\n\t\t\t\t\t\t<ng-container *ngIf=\"this.showFullConfig\">\n\t\t\t\t\t\t<tr style=\"height: 100px;\"*ngFor=\"let k of objectKeys(configurations)\">\n                            <th colspan=\"1\" scope=\"row\">{{k}}</th>\n\t\t\t\t\t\t\t<td colspan=\"1\">\n                                <ng5-slider\n                                    [(value)]=\"configurations[k]\"\n                                    [options]=\"sliderOptions\"\n                                    (userChange)=\"onRadioCheck()\"></ng5-slider>\n                            </td>\n                            <td *ngIf=\"showCost\" colspan=\"1\">\n                                ${{configurations[k]*2}}\n                            </td>\n                        </tr>\n\t\t\t\t\t\t</ng-container>\n\n                        <tr *ngIf=\"showCost\">\n                            <th *ngIf=\"showCost\" scope=\"row\"></th>\n                            <td colspan=\"7\">\n                            </td>\n                            <td>\n                                Total: ${{sumUpCost(videoConfig)*2}}\n                            </td>\n                        </tr>\n                    </tbody>\n                  </table>\n              </div>\n        </div>\n        <div  *ngIf=\"!this.showPanel\" class=\"container\">\n            <!-- <div *ngFor=\"let item of configurations | keyvalue\">\n                <div class=\"row\">\n                    <b>{{item.key}}</b> : <b>{{item.value}}</b>\n                </div>\n            </div> -->\n        </div>\n    </div>\n\t<br>\n\n\t<h2 *ngIf=\"formJson && formJson.settings.normal\">Questions</h2>\n    <h2 *ngIf=\"formJson && formJson.settings.normal\"></h2>\n    <app-survey\n        *ngIf=\"formJson && formJson.settings.normal\"\n        [json]=\"survey\"\n        (suveyModel)=\"getSurvey($event)\"\n        (resultEmit)=\"surveySubmit($event)\">\n    </app-survey>\n\n\n    <button style=\"float: right;\" [disabled]=\"clicked\" (click)=\"submit($event)\" type=\"submit\" class=\"mr-2 btn btn-success\">\n        Submit\n    </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-light\">\n\t<div class=\"col-sm-1\">\n\t\t<br>\n\t</div>\n\t<div class=\"col-sm\">\n\t</div>\n\t<div class=\"col-sm\">\n\t</div>\n</nav>\n\n<div *ngIf=\"!blockAccess\" class=\"container\">\n\t<form (ngSubmit)=\"createUser()\" class=\"was-validated\" #validForm=\"ngForm\">\n\t\t<div class=\"container\">\n\t\t\t<h1>Welcome to the study</h1>\n\t\t\t<h4>Video Element Study Consent Form</h4>\n\t\t</div>\n\t\t<div class=\"container\">\n\t\t\t<p>\n\t\t\t\tYou are being asked to participate in a voluntary research study. The purpose of this study is to understand how different people think about the importance of the different elements when watching a video. Participating in this study will involve you using an interface that provides a set of configurations to experience how different combinations of video elements impact your watching experience. You will be asked to complete some tasks or surveys regarding a given video. The entire survey will last around 30 to 45 minutes. There are no known risks associated with our study.\n\t\t\t\t<br><br>\n\t\t\t\t- Principal Investigator Name and Title: Dr. Hari Sundaram\n\t\t\t\t<br>\n\t\t\t\t- Department and Institution: Department of Computer Science, the University of Illinois at Urbana Champaign\n\t\t\t\t<br>\n\t\t\t\t- Contact Information: <a target=\"_blank\" href=\"mailto:hs1@illinois.edu\">Dr. Hari Sundaram</a>\n\n\t\t\t</p>\n\t\t\t<h5>What procedures are involved?</h5>\n\t\t\t<p>\n\t\t\t\t<b></b> A video interface will be presented to you. You will be asked to tune the different sliders to experience the impact of different video elements on the video. You will be asked to watch the entire video, but feel free to spend as much time as you like with the interface. A questionnaire and a few tasks will then be presented to collect some of your experience watching the video.\n\t\t\t</p>\n\t\t\t<h5>Will my study-related information be kept confidential?</h5>\n\t\t\t<p>\n\t\t\t\tFaculty, students, and staff who may see your information will maintain confidentiality to the extent of laws and university policies. Personal identifiers are neither collected nor will be published or presented.\n\t\t\t</p>\n\t\t\t<h5>Will I be reimbursed for any expenses or paid for my participation in this research?</h5>\n\t\t\t<p>\n\t\t\t\tYou will be paid $1.25 base pay through MTurk when you are done with the study. You may receive an extra $0.75 or $1.25 bonus through MTurk when you complete the study if given one of the two longer versions of the survey. There might be an additional bonus based on the task you are assigned. Payment is dependent on your quality completion of the task.\n\t\t\t</p>\n\t\t\t<h5>Can I withdraw or be removed from the study?</h5>\n\t\t\t<p>\n\t\t\t\tIf you decide to participate, you are free to withdraw your consent and discontinue participation at any time. The researchers also have the right to stop your participation in this study without your consent if they believe it is in your best interests, and/or you were to object to any future changes that may be made in the study plan. Your participation in this research is voluntary. Your decision whether or not to participate, or to withdraw after beginning participation, will not affect your current or future dealings with the University of Illinois at Urbana-Champaign.\n\t\t\t</p>\n\t\t\t<h5>Will data collected from me be used for any other research?</h5>\n\t\t\t<p>\n\t\t\t\tYour de-identified information could be used for future research without additional informed consent.\n\t\t\t</p>\n\n\t\t\t<h5>Who should I contact if I have questions?</h5>\n\t\t\t<p>\n\t\t\t\tQuestions about this research study should be directed to Dr. Hari Sundaram (hs1@illinois.edu) in the Department of Computer Science at the University of Illinois, Urbana-Champaign. If you have any questions about your rights as a participant in this study or any concerns or complaints, please contact the University of Illinois Institutional Review Board at 217-333-2670 or via irb@illinois.edu.\n\t\t\t</p>\n\t\t\t<h5> How will the results be disseminated?\n\t\t\t</h5>\n\t\t\t<p>\n\t\t\t\tThe results will be disseminated via journal articles, academic paper, conference presentations, PhD thesis, and/or Open Science Framework. Please download and print this <a target=\"_blank\" href=\"/download/consent\">consent form </a> if you would like to retain a copy for your records.\n\t\t\t</p>\n\n\t\t\t<h5>Please use a Laptop or PC with Chrome, Firefox, or Microsoft Edge to complete this survey.</h5>\n\t\t\t<h5>By continuing, I certify that I have read this form and volunteer to participate in this research study.<br></h5>\n\n\t\t\t<div class=\"form-group form-check\">\n\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t<input [(ngModel)]=\"conditionOne\" class=\"form-check-input\" type=\"checkbox\" name=\"condition1\"\n\t\t\t\t\t\trequired> I have read and understood the above consent form.\n\t\t\t\t\t<div class=\"valid-feedback\">Valid.</div>\n\t\t\t\t\t<div class=\"invalid-feedback\">Check this checkbox to continue.</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-group form-check\">\n\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t<input [(ngModel)]=\"conditionTwo\" class=\"form-check-input\" type=\"checkbox\" name=\"condition2\"\n\t\t\t\t\t\trequired> I certify that I am 18 years old or older.\n\t\t\t\t\t<div class=\"valid-feedback\">Valid.</div>\n\t\t\t\t\t<div class=\"invalid-feedback\">Check this checkbox to continue.</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-group form-check\">\n\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t<input [(ngModel)]=\"conditionThree\" class=\"form-check-input\" type=\"checkbox\" name=\"condition3\"\n\t\t\t\t\t\trequired> I understand that by clicking the continue button to enter the survey, I indicate my willingness to voluntarily take part in this study.\n\t\t\t\t\t<div class=\"valid-feedback\">Valid.</div>\n\t\t\t\t\t<div class=\"invalid-feedback\">Check this checkbox to continue.</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container\">\n\t\t\t<button type=\"submit\" class=\"mr-2 btn btn-success\" [disabled]=\"!validForm.form.valid || isSubmit\">\n\t\t\t\tStart Questionaire\n\t\t\t</button>\n\t\t\t<button (click)=\"cancel()\"type=\"button\" class=\"mr-2 btn btn-danger\" [disabled]=\"validForm.form.valid\">\n\t\t\t\tCancel\n\t\t\t</button>\n\t\t</div>\n\t</form>\n</div>\n<div *ngIf=\"blockAccess\" class=\"container\">\n\t<h1>The current browser cannot run this app.\n\n\t<p>Please consider Firefox or Google Chrome</p>\n<div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questionnaire/questionnaire.component */ "./src/app/questionnaire/questionnaire.component.ts");
/* harmony import */ var _donation_donation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donation/donation.component */ "./src/app/donation/donation.component.ts");
/* harmony import */ var _likert_likert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./likert/likert.component */ "./src/app/likert/likert.component.ts");
/* harmony import */ var _demographic_demographic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demographic/demographic.component */ "./src/app/demographic/demographic.component.ts");
/* harmony import */ var _complete_complete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./complete/complete.component */ "./src/app/complete/complete.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");










const routes = [
    { path: 'welcome/:id', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'demographic', component: _demographic_demographic_component__WEBPACK_IMPORTED_MODULE_7__["DemographicComponent"] },
    { path: 'qv', component: _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_4__["QuestionnaireComponent"] },
    { path: 'donation', component: _donation_donation_component__WEBPACK_IMPORTED_MODULE_5__["DonationComponent"] },
    { path: 'likert', component: _likert_likert_component__WEBPACK_IMPORTED_MODULE_6__["LikertComponent"] },
    { path: 'video', component: _video_video_component__WEBPACK_IMPORTED_MODULE_9__["VideoComponent"] },
    { path: 'complete', component: _complete_complete_component__WEBPACK_IMPORTED_MODULE_8__["CompleteComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  background-color: aqua;\n  z-index: 1090;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RjaGVuZzEwLzEzX0Jhc2gvUVYtYnV5YmFjay9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgIHotaW5kZXg6IDEwOTA7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgei1pbmRleDogMTA5MDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'qv';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./option/option.component */ "./src/app/option/option.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./questionnaire/questionnaire.component */ "./src/app/questionnaire/questionnaire.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _donation_donation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./donation/donation.component */ "./src/app/donation/donation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _likert_likert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./likert/likert.component */ "./src/app/likert/likert.component.ts");
/* harmony import */ var _survey_survey_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./survey/survey.component */ "./src/app/survey/survey.component.ts");
/* harmony import */ var _demographic_demographic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./demographic/demographic.component */ "./src/app/demographic/demographic.component.ts");
/* harmony import */ var _complete_complete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./complete/complete.component */ "./src/app/complete/complete.component.ts");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/__ivy_ngcc__/esm2015/ng5-slider.js");






















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__["SummaryComponent"],
            _option_option_component__WEBPACK_IMPORTED_MODULE_8__["OptionComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
            _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_10__["QuestionnaireComponent"],
            _donation_donation_component__WEBPACK_IMPORTED_MODULE_13__["DonationComponent"],
            _likert_likert_component__WEBPACK_IMPORTED_MODULE_15__["LikertComponent"],
            _survey_survey_component__WEBPACK_IMPORTED_MODULE_16__["SurveyComponent"],
            _demographic_demographic_component__WEBPACK_IMPORTED_MODULE_17__["DemographicComponent"],
            _complete_complete_component__WEBPACK_IMPORTED_MODULE_18__["CompleteComponent"],
            _video_video_component__WEBPACK_IMPORTED_MODULE_20__["VideoComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            ng5_slider__WEBPACK_IMPORTED_MODULE_21__["Ng5SliderModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_19__["SweetAlert2Module"].forRoot(),
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/complete/complete.component.scss":
/*!**************************************************!*\
  !*** ./src/app/complete/complete.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsZXRlL2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/complete/complete.component.ts":
/*!************************************************!*\
  !*** ./src/app/complete/complete.component.ts ***!
  \************************************************/
/*! exports provided: CompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteComponent", function() { return CompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");




let CompleteComponent = class CompleteComponent {
    constructor(cookieService, route) {
        this.cookieService = cookieService;
        this.route = route;
    }
    ngOnInit() {
        this.cookieService.deleteAll('/');
        this.title = this.route.snapshot.paramMap.get('title');
        this.code = this.route.snapshot.paramMap.get('userId');
        this.text = this.route.snapshot.paramMap.get('text');
        if (this.title === 'null') {
            this.title = 'Thank you';
            this.code = 'Unfortunately the survey has collected enough response. Do not paste in anything to the original hit page.';
            this.text = '';
            this.url = '';
        }
    }
};
CompleteComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CompleteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complete',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./complete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/complete/complete.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./complete.component.scss */ "./src/app/complete/complete.component.scss")).default]
    })
], CompleteComponent);



/***/ }),

/***/ "./src/app/demographic/demographic.component.scss":
/*!********************************************************!*\
  !*** ./src/app/demographic/demographic.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW9ncmFwaGljL2RlbW9ncmFwaGljLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/demographic/demographic.component.ts":
/*!******************************************************!*\
  !*** ./src/app/demographic/demographic.component.ts ***!
  \******************************************************/
/*! exports provided: DemographicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemographicComponent", function() { return DemographicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_demographic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/demographic.service */ "./src/app/services/demographic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");





let DemographicComponent = class DemographicComponent {
    constructor(route, cookieService, demoFormService) {
        this.route = route;
        this.cookieService = cookieService;
        this.demoFormService = demoFormService;
    }
    ngOnInit() {
        this.demoFormService.demoForm.subscribe(data => {
            this.demoForm = {
                questions: data['survey'],
                showNav: true,
            };
        });
        this.demoFormService.requestForm();
    }
    getCookieById(id) {
        return this.cookieService.get(id);
    }
    submit(data) {
        this.demoFormService.submit(data).subscribe(result => {
            const pathIndex = Number(this.getCookieById('user_current_path_index'));
            const pathArray = JSON.parse(this.getCookieById('user_path'));
            const type = pathArray[pathIndex]['type'];
            if (type === 'normal') {
                this.route.navigate(['likert']);
            }
            else if (type === 'video') {
                this.route.navigate(['video']).then(() => location.reload());
            }
            else {
                this.route.navigate(['qv']);
            }
        });
    }
};
DemographicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _services_demographic_service__WEBPACK_IMPORTED_MODULE_2__["DemographicService"] }
];
DemographicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demographic',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./demographic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demographic/demographic.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./demographic.component.scss */ "./src/app/demographic/demographic.component.scss")).default]
    })
], DemographicComponent);



/***/ }),

/***/ "./src/app/donation/donation.component.scss":
/*!**************************************************!*\
  !*** ./src/app/donation/donation.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RjaGVuZzEwLzEzX0Jhc2gvUVYtYnV5YmFjay9zcmMvYXBwL2RvbmF0aW9uL2RvbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kb25hdGlvbi9kb25hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQUNBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ0NGO0FERUEsWUFBQTtBQUNBO0VBQ0UsMEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9uL2RvbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIEZpcmVmb3ggKi9cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XG59XG4iLCIvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogRmlyZWZveCAqL1xuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/donation/donation.component.ts":
/*!************************************************!*\
  !*** ./src/app/donation/donation.component.ts ***!
  \************************************************/
/*! exports provided: DonationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationComponent", function() { return DonationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_donation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/donation.service */ "./src/app/services/donation.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);




function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
let DonationComponent = class DonationComponent {
    constructor(donationService) {
        this.donationService = donationService;
        this.MAX = 35;
        this.organizations = [];
        this.sum = 0;
    }
    ngOnInit() {
        const ogObserver = {
            next: ogs => {
                this.organizations = shuffle(ogs);
                this.donations = {};
                this.organizations.forEach(v => {
                    this.donations[v['orgId']] = 0;
                });
            },
            error: error => console.log('A error: ' + error),
            complete: () => console.log('ogObserver complete!')
        };
        this.donationService.organizations.subscribe(ogObserver);
        this.donationService.requestOrganizations();
    }
    caculate(orgId) {
        this.sum = 0;
        Object.keys(this.donations).forEach(key => {
            this.sum = this.sum + this.donations[key];
        });
        if (this.sum > this.MAX) {
            this.donations[orgId] = this.donations[orgId] - (this.sum - this.MAX);
            this.sum = this.MAX;
        }
    }
    submit() {
        Object.keys(this.donations).forEach(key => {
            if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(this.donations[key])) {
                this.donations[key] = 0;
            }
        });
        this.donationService.submit(this.donations);
    }
};
DonationComponent.ctorParameters = () => [
    { type: _services_donation_service__WEBPACK_IMPORTED_MODULE_2__["DonationService"] }
];
DonationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./donation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/donation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./donation.component.scss */ "./src/app/donation/donation.component.scss")).default]
    })
], DonationComponent);



/***/ }),

/***/ "./src/app/likert/likert.component.scss":
/*!**********************************************!*\
  !*** ./src/app/likert/likert.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpa2VydC9saWtlcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/likert/likert.component.ts":
/*!********************************************!*\
  !*** ./src/app/likert/likert.component.ts ***!
  \********************************************/
/*! exports provided: LikertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikertComponent", function() { return LikertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_likert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/likert.service */ "./src/app/services/likert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







let LikertComponent = class LikertComponent {
    constructor(liService, route, cookieService, http) {
        this.liService = liService;
        this.route = route;
        this.cookieService = cookieService;
        this.http = http;
        this.json = { questions: null };
        this.html = false;
        this.requestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
    }
    decidePath() {
        const pathIndex = Number(this.cookieService.get('user_current_path_index'));
        const pathArray = JSON.parse(this.cookieService.get('user_path'));
        const type = pathArray[pathIndex]['type'];
        if (type === 'normal') {
            this.route.navigate(['likert']);
            this.liService.requestForm();
        }
        else if (type === 'qv') {
            this.route.navigate(['qv']);
        }
        else if (type === 'video') {
            this.route.navigate(['video']).then(() => location.reload());
        }
        else if (type === 'complete') {
            const userId = this.cookieService.get('user_id');
            this.http.post(`${this.requestUrl}/submit`, { userId, complete: true }).subscribe(d => {
                this.cookieService.deleteAll('/');
                const file = pathArray[pathIndex]['file'];
                this.http.get(`${this.requestUrl}/thank_you/${file}`).subscribe(thankYouData => {
                    this.route.navigate(['complete', Object.assign({ userId }, thankYouData)]);
                });
            });
        }
    }
    ngOnInit() {
        this.liService.requestForm();
        this.liService.likertForm.subscribe(data => {
            if (data['survey']) {
                this.json = {
                    questions: data['survey'],
                    showNav: true,
                };
                this.html = null;
            }
            if (data['html']) {
                this.html = data['html'];
            }
        });
    }
    submit(data, e) {
        if (e) {
            e.target.disabled = true;
        }
        const pathIndex = Number(this.cookieService.get('user_current_path_index'));
        const pathArray = JSON.parse(this.cookieService.get('user_path'));
        const userId = this.cookieService.get('user_id');
        this.liService.submit(Object.assign(Object.assign({}, data), { userId, jsonFile: pathArray[pathIndex] })).subscribe(result => {
            this.decidePath();
        });
    }
};
LikertComponent.ctorParameters = () => [
    { type: _services_likert_service__WEBPACK_IMPORTED_MODULE_2__["LikertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
LikertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-likert',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./likert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/likert/likert.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./likert.component.scss */ "./src/app/likert/likert.component.scss")).default]
    })
], LikertComponent);



/***/ }),

/***/ "./src/app/option/option.component.scss":
/*!**********************************************!*\
  !*** ./src/app/option/option.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tick {\n  color: #007bff;\n}\n\n.cross {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RjaGVuZzEwLzEzX0Jhc2gvUVYtYnV5YmFjay9zcmMvYXBwL29wdGlvbi9vcHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29wdGlvbi9vcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9vcHRpb24vb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpY2sge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuLmNyb3NzIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbn0iLCIudGljayB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uY3Jvc3Mge1xuICBjb2xvcjogb3JhbmdlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/option/option.component.ts":
/*!********************************************!*\
  !*** ./src/app/option/option.component.ts ***!
  \********************************************/
/*! exports provided: OptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionComponent", function() { return OptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");



let OptionComponent = class OptionComponent {
    constructor(gService) {
        this.gService = gService;
    }
    ngOnInit() {
        this.gService.questionSet.subscribe((data) => {
            this.currentQuestionIndex = data.currentQuestion;
            const currentQuestion = data.question_list[this.currentQuestionIndex];
            this.currentOptions = currentQuestion.options;
            this.votes = new Array(this.currentOptions.length).fill(0);
            this.totalCredits = currentQuestion.totalCredits;
            this.gService.votes.subscribe(votes => {
                this.votes = votes[this.currentQuestionIndex];
            });
        });
    }
    calCurrentTotalCredits() {
        let totalCredit = 0;
        this.votes.forEach(vote => {
            totalCredit = totalCredit + vote * vote;
        });
        return totalCredit;
    }
    isDisabled(index, isMinus) {
        const currentDirection = isMinus ? this.votes[index] <= 0 : this.votes[index] >= 0;
        const currentCredits = this.calCurrentTotalCredits();
        const difference = Math.pow((Math.abs(this.votes[index]) + 1), 2) - Math.pow(this.votes[index], 2);
        const isNextPossibleTotalCreditsOK = currentCredits + difference > this.totalCredits;
        return currentDirection && isNextPossibleTotalCreditsOK;
    }
    modifyVotesByID(oIndex, value) {
        const originalVote = this.gService.votesContent[this.currentQuestionIndex][oIndex];
        this.gService.modifyVotesByID(this.currentQuestionIndex + 1, oIndex + 1, originalVote + value);
    }
};
OptionComponent.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }
];
OptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-option',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./option.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./option.component.scss */ "./src/app/option/option.component.scss")).default]
    })
], OptionComponent);



/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.scss":
/*!************************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  width: 2em;\n  border: 1px solid grey;\n}\n\nth, tr {\n  padding-left: 1em;\n  padding-right: 1em;\n  border: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RjaGVuZzEwLzEzX0Jhc2gvUVYtYnV5YmFjay9zcmMvYXBwL3F1ZXN0aW9ubmFpcmUvcXVlc3Rpb25uYWlyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcXVlc3Rpb25uYWlyZS9xdWVzdGlvbm5haXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0NEOztBREdBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbm5haXJlL3F1ZXN0aW9ubmFpcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCB7XG5cdHBhZGRpbmctbGVmdDogMC41ZW07XG5cdHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xuXHR3aWR0aDogMmVtO1xuXHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuXG5cbnRoLCB0ciB7XG5cdHBhZGRpbmctbGVmdDogMWVtO1xuXHRwYWRkaW5nLXJpZ2h0OiAxZW07XG5cdGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG4iLCJ0ZCB7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xuICB3aWR0aDogMmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuXG50aCwgdHIge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionnaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function() { return QuestionnaireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







let QuestionnaireComponent = class QuestionnaireComponent {
    constructor(gService, route, cookieService, http) {
        this.gService = gService;
        this.route = route;
        this.cookieService = cookieService;
        this.http = http;
        this.currentQuestionNum = 0;
        this.currentFileNum = 1;
        this.numQuestion = 1;
        this.numFile = 1;
        this.requestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
    }
    ngOnInit() {
        const pathIndex = Number(this.cookieService.get('user_current_path_index'));
        const pathArray = JSON.parse(this.cookieService.get('user_path'));
        console.log(pathArray[pathIndex]);
        const type = pathArray[pathIndex]['type'];
        if (type === 'normal') {
            this.route.navigate(['likert']);
        }
        else if (type === 'qv') {
            this.gService.questionSet.subscribe((data) => {
                this.questionnaire = data;
                this.currentQuestionNum = data.currentQuestion;
                this.numQuestion = data.question_list.length;
                const questionContent = data.question_list[this.currentQuestionNum];
                this.questionDes = questionContent.description;
                this.questionTitle = questionContent.question;
                this.numFile = pathArray.length;
                this.currentFileNum = pathIndex + 1;
            });
            this.gService.getQuestionnaire();
        }
        else if (type === 'video') {
            this.route.navigate(['video']).then(() => location.reload());
        }
        else if (type === 'complete') {
            const userId = this.cookieService.get('user_id');
            this.http.post(`${this.requestUrl}/submit`, { userId, complete: true }).subscribe(d => {
                this.cookieService.deleteAll('/');
                this.route.navigate(['complete', { userId, text: null, title: null }]);
            });
        }
    }
};
QuestionnaireComponent.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
QuestionnaireComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questionnaire',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./questionnaire.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./questionnaire.component.scss */ "./src/app/questionnaire/questionnaire.component.scss")).default]
    })
], QuestionnaireComponent);



/***/ }),

/***/ "./src/app/services/demographic.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/demographic.service.ts ***!
  \*************************************************/
/*! exports provided: DemographicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemographicService", function() { return DemographicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








let DemographicService = class DemographicService {
    constructor(cookieService, http) {
        this.cookieService = cookieService;
        this.http = http;
        this.requestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.demoForm = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
    }
    requestForm() {
        const donationAPI = `${this.requestUrl}/api/demographic`;
        this.http.get(donationAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).subscribe(data => {
            this.demoForm.next(data);
        });
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
    getCookieById(id) {
        return this.cookieService.get(id);
    }
    submit(data) {
        const userId = this.getCookieById('user_id');
        const submitAPI = `${this.requestUrl}/submit-demographic`;
        return this.http.post(submitAPI, {
            userId,
            data
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
DemographicService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DemographicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DemographicService);



/***/ }),

/***/ "./src/app/services/donation.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/donation.service.ts ***!
  \**********************************************/
/*! exports provided: DonationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationService", function() { return DonationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");









let DonationService = class DonationService {
    constructor(http, cookieService, route) {
        this.http = http;
        this.cookieService = cookieService;
        this.route = route;
        this.requestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.organizations = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    requestOrganizations() {
        const donationAPI = `${this.requestUrl}/api/donation`;
        this.http.get(donationAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).subscribe(data => {
            this.organizations.next(data['donation']);
        });
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
    ;
    getCookieById(id) {
        return this.cookieService.get(id);
    }
    submit(data) {
        const pathArray = JSON.parse(this.getCookieById('user_path'));
        const pathIndex = Number(this.getCookieById('user_current_path_index')) + 1;
        const completeJsonAPI = `${this.requestUrl}/thank_you/${pathArray[pathIndex]['file']}`;
        this.http.get(completeJsonAPI).subscribe(completeJSON => {
            const userId = this.getCookieById('user_id');
            this.cookieService.deleteAll('/');
            const submitAPI = `${this.requestUrl}/submit-donation`;
            this.http.post(submitAPI, {
                donation: data,
                userId,
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).subscribe(result => {
                this.route.navigate(['complete', Object.assign(Object.assign({}, completeJSON), { userId })]);
            });
        });
    }
};
DonationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
DonationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DonationService);



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








function calTotalCredits(votesArray) {
    let qTotalUsedCredits = 0;
    votesArray.forEach(vote => {
        qTotalUsedCredits = qTotalUsedCredits + Math.pow(vote, 2);
    });
    return qTotalUsedCredits;
}
let GlobalService = class GlobalService {
    constructor(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.requestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.questionSet = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.votes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.usedCredits = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    checkRoute() {
        const pathIndex = Number(this.cookieService.get('user_current_path_index'));
        const pathArray = JSON.parse(this.cookieService.get('user_path'));
        const type = pathArray[pathIndex]['type'];
        if (type === 'normal') {
            this.router.navigate(['likert']);
        }
        else if (type === 'video') {
            this.router.navigate(['video']).then(() => location.reload());
        }
        else if (type === 'complete') {
            const userId = this.cookieService.get('user_id');
            this.cookieService.deleteAll('/');
            const file = pathArray[pathIndex]['file'];
            this.http.post(`${this.requestUrl}/submit`, { userId, complete: true }).subscribe(d => {
                this.http.get(`${this.requestUrl}/thank_you/${file}`).subscribe(thankYouData => {
                    this.router.navigate(['complete', Object.assign({ userId }, thankYouData)]);
                });
            });
        }
        else if (type === 'qv') {
            return true;
        }
        return false;
    }
    getUserID(userGP) {
        return this.http.post(`${this.requestUrl}/createUser`, { gp: userGP })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getCookieById(id) {
        return this.cookieService.get(id);
    }
    setCookieById(id, val) {
        this.cookieService.set(id, val, undefined, '/', undefined, false, 'Lax');
    }
    getCurrentPath() {
        const pathIndex = Number(this.getCookieById('user_current_path_index'));
        const pathArray = JSON.parse(this.getCookieById('user_path'));
        return pathArray[pathIndex]['file'];
    }
    generateSubmitPost(completeFlag) {
        const submitPost = {};
        submitPost.complete_flag = completeFlag;
        submitPost.file_name = this.getCurrentPath();
        const currentQuestion = this.getCookieById('user_current_question_index');
        submitPost.qid = this.questionnaire.question_list[currentQuestion].qid;
        submitPost.results = this.votesContent[this.getCookieById('user_current_question_index')];
        submitPost.user_id = this.getCookieById('user_id');
        return submitPost;
    }
    update() {
        this.usedCredits.emit(this.usedCreditsArray);
        this.votes.emit(this.votesContent);
    }
    modifyVotesByID(qId, oId, value) {
        this.votesContent[qId - 1][oId - 1] = value;
        this.usedCreditsArray[qId - 1] = calTotalCredits(this.votesContent[qId - 1]);
        this.update();
    }
    getQuestionnaire() {
        if (this.checkRoute()) {
            const path = this.getCurrentPath();
            const result = this.http.get(`${this.requestUrl}/api/qv/${path}`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
            const currentQuestion = this.getCookieById('user_current_question_index');
            result.subscribe((data) => {
                const height = data.question_list.length;
                const votesArray = [];
                for (let i = 0; i < height; i++) {
                    votesArray.push(new Array(data.question_list[i].options.length).fill(0));
                }
                this.votesContent = votesArray;
                this.usedCreditsArray = new Array(height).fill(0);
                this.update();
                this.questionSet.emit(Object.assign({ currentQuestion: Number(currentQuestion) }, data));
                this.questionnaire = data;
            });
        }
        return;
    }
    submit(finalQuestionValue) {
        let nextQuestionIndex = Number(this.getCookieById('user_current_question_index')) + 1;
        const submitData = this.generateSubmitPost(false);
        const pathArray = JSON.parse(this.getCookieById('user_path'));
        const pathIndex = Number(this.getCookieById('user_current_path_index'));
        const currentFileName = pathArray[pathIndex];
        if (nextQuestionIndex >= this.questionnaire.question_list.length) {
            nextQuestionIndex = 0;
            this.setCookieById('user_current_path_index', String(pathIndex + 1));
            this.router.navigate([this.router.url]);
            if (pathArray[pathIndex + 1]['type'] === 'donation') {
                submitData.complete_flag = true;
                return this.http.post(`${this.requestUrl}/submit`, { submitData, finalQuestion: finalQuestionValue, fileName: currentFileName }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)).subscribe(data => {
                    this.router.navigate(['donation']);
                });
            }
        }
        if (pathArray[pathIndex + 1]['type'] === 'normal') {
            nextQuestionIndex = 0;
            this.setCookieById('user_current_question_index', String(nextQuestionIndex));
            return this.http.post(`${this.requestUrl}/submit`, Object.assign(Object.assign({}, submitData), { fileName: currentFileName, finalQuestion: finalQuestionValue })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)).subscribe(data => {
                this.router.navigate(['likert']);
            });
        }
        else {
            this.setCookieById('user_current_question_index', String(nextQuestionIndex));
            this.getQuestionnaire();
            return this.http.post(`${this.requestUrl}/submit`, Object.assign(Object.assign({}, submitData), { fileName: currentFileName, finalQuestion: finalQuestionValue })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)).subscribe(data => {
            });
        }
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.log(error);
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    }
};
GlobalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GlobalService.prototype, "questionSet", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GlobalService.prototype, "votes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GlobalService.prototype, "usedCredits", void 0);
GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ "./src/app/services/likert.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/likert.service.ts ***!
  \********************************************/
/*! exports provided: LikertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikertService", function() { return LikertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








let LikertService = class LikertService {
    constructor(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.requestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.likertForm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    getCookieById(id) {
        return this.cookieService.get(id);
    }
    getCurrentPath() {
        if (!this.cookieService.check('user_id')) {
            this.router.navigate(['/']);
            return null;
        }
        else {
            const pathIndex = Number(this.getCookieById('user_current_path_index'));
            const pathArray = JSON.parse(this.getCookieById('user_path'));
            return pathArray[pathIndex]['file'];
        }
    }
    requestForm() {
        const fileName = this.getCurrentPath();
        const fileAPI = `${this.requestUrl}/api/qv/${fileName}`;
        this.http.get(fileAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).subscribe(data => {
            this.likertForm.next(data);
        });
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
    isQVTestResultFailed(data) {
        const pathIndex = Number(this.getCookieById('user_current_path_index'));
        const pathArray = JSON.parse(this.getCookieById('user_path'));
        const currentFile = pathArray[pathIndex]['file'];
        if (currentFile === 'test_qv') {
            const conditions = [
                data['qvt1'] === '(T) True',
                data['qvt2'] === '(F) False',
                data['qvt3'] === '(F) False',
                data['qvt4'] === '(F) False',
                data['qvt5'] === '(4) 20993',
                data['qvt6'] === '(4) 12345',
            ];
            return this.decideWhetherPassTest(conditions, 2);
        }
        else if (currentFile === 'test_video_element') {
            const conditions = [
                data['vet1'] === '(D) This refers to how clear or crisp the visual is in the video.',
                data['vet2'] === '(E) This refers to how clear or crisp the audio.',
                data['vet3'] === '(A) It means how much the visuals in a video stutters.',
                data['vet4'] === '(C) It means whether the audio sounds choppy or fluent.',
                data['vet5'] === '(B) It means how perfectly does the visual in the video match with the sound.',
                data['vet6'] === '(3) An Apple',
            ];
            return this.decideWhetherPassTest(conditions, 1);
        }
        else {
            return false;
        }
    }
    decideWhetherPassTest(conditions, minFailedQuestionNumber) {
        let noFailedQuestion = 0;
        conditions.forEach(val => {
            if (!val) {
                noFailedQuestion++;
            }
        });
        return noFailedQuestion > minFailedQuestionNumber;
    }
    submit(data) {
        const pathIndex = Number(this.getCookieById('user_current_path_index'));
        const userId = this.cookieService.get('user_id');
        const gp = this.cookieService.get('user_gp');
        const pathId = this.cookieService.get('user_path_id');
        const pathArray = JSON.parse(this.getCookieById('user_path'));
        if (this.isQVTestResultFailed(data)) {
            // fail the QVTest and delete all cookies
            this.http.post(`${this.requestUrl}/api/disqualify`, {
                gp: gp,
                pathId: pathId,
                userid: userId,
            }).subscribe(res => {
                this.cookieService.deleteAll('/');
                this.http.get(`${this.requestUrl}/thank_you/thank_attention`).subscribe(thankYouData => {
                    this.router.navigate(['complete', Object.assign({ userId: 'N/A' }, thankYouData)]);
                });
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        }
        this.cookieService.set('user_current_path_index', String(pathIndex + 1), undefined, '/', undefined, false, 'Lax');
        return this.http.post(`${this.requestUrl}/submit`, {
            data,
            userId,
            fileName: pathArray[pathIndex],
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
LikertService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LikertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LikertService);



/***/ }),

/***/ "./src/app/services/video.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/video.service.ts ***!
  \*******************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








let VideoService = class VideoService {
    constructor(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.requestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.videoForm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    getCookieById(id) {
        return this.cookieService.get(id);
    }
    getCurrentPath() {
        if (!this.cookieService.check('user_id')) {
            this.router.navigate(['/']);
            return null;
        }
        else {
            const pathIndex = Number(this.getCookieById('user_current_path_index'));
            const pathArray = JSON.parse(this.getCookieById('user_path'));
            return pathArray[pathIndex]['file'];
        }
    }
    requestForm() {
        const fileName = this.getCurrentPath();
        const fileAPI = `${this.requestUrl}/api/qv/${fileName}`;
        this.http.get(fileAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).subscribe((data) => {
            this.videoForm.next(data);
        });
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
    submit(data) {
        const pathArray = JSON.parse(this.getCookieById('user_path'));
        const pathIndex = Number(this.getCookieById('user_current_path_index'));
        const userId = this.cookieService.get('user_id');
        this.cookieService.set('user_current_path_index', String(pathIndex + 1), undefined, '/', undefined, false, 'Lax');
        return this.http.post(`${this.requestUrl}/submit-video-setting`, {
            data,
            userId,
            fileName: pathArray[pathIndex],
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
VideoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
VideoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VideoService);



/***/ }),

/***/ "./src/app/summary/summary.component.scss":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sticky {\n  position: -webkit-sticky;\n  /* Safari */\n  position: sticky;\n  bottom: 15px;\n  z-index: 3;\n}\n\n.error {\n  color: red;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RjaGVuZzEwLzEzX0Jhc2gvUVYtYnV5YmFjay9zcmMvYXBwL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFBMEIsV0FBQTtFQUMxQixnQkFBQTtFQUNILFlBQUE7RUFDRyxVQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaSAqL1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuXHRib3R0b206IDE1cHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uZXJyb3J7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59ICIsIi5zdGlja3kge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIC8qIFNhZmFyaSAqL1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDE1cHg7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js");





let SummaryComponent = class SummaryComponent {
    constructor(swalTargets, gService) {
        this.swalTargets = swalTargets;
        this.gService = gService;
        this.usedCredits = 0;
        this.percentage = 0;
        this.submitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]);
    }
    submitFinalForm() {
        this.submitSuccessSwal.dismiss().then(() => this.gService.submit(this.submitForm.value));
    }
    submit() {
        if (this.usedCredits === 0) {
            this.confirmSubmitSwal.fire();
        }
        else {
            this.submitSuccessSwal.fire();
        }
    }
    ngOnInit() {
        this.gService.questionSet.subscribe((data) => {
            this.totalCredits = data.question_list[data.currentQuestion].totalCredits;
            this.gService.usedCredits.subscribe(usedCredits => {
                this.usedCredits = usedCredits[data.currentQuestion];
                const percentage = (this.usedCredits / this.totalCredits) * 100;
                this.type = 'info';
                this.percentage = percentage;
            });
        });
    }
};
SummaryComponent.ctorParameters = () => [
    { type: _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__["SwalPortalTargets"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmSubmit', { static: true })
], SummaryComponent.prototype, "confirmSubmitSwal", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('submitSuccess', { static: true })
], SummaryComponent.prototype, "submitSuccessSwal", void 0);
SummaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./summary.component.scss */ "./src/app/summary/summary.component.scss")).default]
    })
], SummaryComponent);



/***/ }),

/***/ "./src/app/survey/survey.component.scss":
/*!**********************************************!*\
  !*** ./src/app/survey/survey.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9zdXJ2ZXkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/survey/survey.component.ts":
/*!********************************************!*\
  !*** ./src/app/survey/survey.component.ts ***!
  \********************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_2__);



let SurveyComponent = class SurveyComponent {
    constructor() {
        this.resultEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.suveyModel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    set json(value) {
        const that = this;
        const surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_2__["Model"](value.questions);
        surveyModel.showCompletedPage = false;
        survey_angular__WEBPACK_IMPORTED_MODULE_2__["SurveyNG"].render('surveyElement', {
            model: surveyModel,
            isExpanded: true
        });
        surveyModel.showNavigationButtons = value.showNav;
        that.suveyModel.emit(surveyModel);
        surveyModel.onComplete.add((sender, options) => {
            that.resultEmit.emit(sender.data);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SurveyComponent.prototype, "resultEmit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SurveyComponent.prototype, "suveyModel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SurveyComponent.prototype, "json", null);
SurveyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-survey',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./survey.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./survey.component.scss */ "./src/app/survey/survey.component.scss")).default]
    })
], SurveyComponent);



/***/ }),

/***/ "./src/app/video/video.component.scss":
/*!********************************************!*\
  !*** ./src/app/video/video.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".video {\n  width: 100%;\n}\n\n.wrap-content {\n  word-wrap: break-word;\n}\n\n.content {\n  position: relative;\n  width: 100%;\n}\n\n.content video {\n  width: 100%;\n  display: block;\n}\n\n.content:before {\n  content: \"\";\n  background: black;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.original {\n  position: relative;\n  width: 100%;\n}\n\n.original video {\n  width: 100%;\n  display: block;\n}\n\n.original:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.wrapper {\n  display: table;\n  width: auto;\n  position: relative;\n  width: 70;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.playpause {\n  background-image: url(http://png-4.findicons.com/files/icons/2315/default_icon/256/media_play_pause_resume.png);\n  background-repeat: no-repeat;\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 0%;\n  bottom: 0%;\n  margin: auto;\n  background-size: contain;\n  background-position: center;\n}\n\n::ng-deep .ng5-slider .ng5-slider-tick-legend {\n  white-space: nowrap !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RjaGVuZzEwLzEzX0Jhc2gvUVYtYnV5YmFjay9zcmMvYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUNRSjs7QUROQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1NKOztBRFBBO0VBQ0ksK0dBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUNVSjs7QUROUTtFQUNJLDhCQUFBO0FDU1oiLCJmaWxlIjoic3JjL2FwcC92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ud3JhcC1jb250ZW50IHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4uY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRlbnQgdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRlbnQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xufVxuLm9yaWdpbmFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ub3JpZ2luYWwgdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLm9yaWdpbmFsOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbn1cbi53cmFwcGVye1xuICAgIGRpc3BsYXk6dGFibGU7XG4gICAgd2lkdGg6YXV0bztcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB3aWR0aDo3MDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBsYXlwYXVzZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL3BuZy00LmZpbmRpY29ucy5jb20vZmlsZXMvaWNvbnMvMjMxNS9kZWZhdWx0X2ljb24vMjU2L21lZGlhX3BsYXlfcGF1c2VfcmVzdW1lLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgIHdpZHRoOjUwJTtcbiAgICBoZWlnaHQ6NTAlO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGxlZnQ6MCU7XG4gICAgcmlnaHQ6MCU7XG4gICAgdG9wOjAlO1xuICAgIGJvdHRvbTowJTtcbiAgICBtYXJnaW46YXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG46Om5nLWRlZXAge1xuICAgIC5uZzUtc2xpZGVyIHtcbiAgICAgICAgLm5nNS1zbGlkZXItdGljay1sZWdlbmQge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgXG59XG59IiwiLnZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53cmFwLWNvbnRlbnQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250ZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cblxuLm9yaWdpbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9yaWdpbmFsIHZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ub3JpZ2luYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3MDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsYXlwYXVzZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vcG5nLTQuZmluZGljb25zLmNvbS9maWxlcy9pY29ucy8yMzE1L2RlZmF1bHRfaWNvbi8yNTYvbWVkaWFfcGxheV9wYXVzZV9yZXN1bWUucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMCU7XG4gIHJpZ2h0OiAwJTtcbiAgdG9wOiAwJTtcbiAgYm90dG9tOiAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5uZzUtc2xpZGVyIC5uZzUtc2xpZGVyLXRpY2stbGVnZW5kIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/video/video.component.ts":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








let VideoComponent = class VideoComponent {
    constructor(http, vService, cookieService, route) {
        this.http = http;
        this.vService = vService;
        this.cookieService = cookieService;
        this.route = route;
        this.clicked = false;
        this.videoContainer = {
            video: this.videoElement,
            ready: false,
            scale: null,
        };
        this.videoFilePrefix = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/api/video/';
        this.videoSrc = '';
        this.audioFilePrefix = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/api/audio/';
        this.audioSrc = '';
        this.configurations = {
            'Audio Quality': '0',
            'Video Resolution': '0',
            'Audio Stability': '0',
            'Motion Smoothness': '0',
            'Audio-Video Synchronization': '0',
        };
        this.videoIsPlaying = false;
        this.objectKeys = Object.keys;
        this.videoConfig = new Array(5).fill(0);
        this.videoConfigLength = new Array(5).fill(0);
        this.videoIsJittering = false;
        this.jitterTempData = null;
        this.showCost = false;
        this.showConfig = false;
        this.showDemoConfig = false;
        this.showFullConfig = false;
        this.sliderOptions = {
            showTicksValues: true,
            animate: false,
            stepsArray: [
                { value: 0, legend: 'As is' },
                { value: 1, legend: 'Lv. 1' },
                { value: 2, legend: 'Lv. 2' },
                { value: 3, legend: 'Lv. 3' }
            ]
        };
        this.priceSliderOptions = {
            showTicksValues: false,
            animate: false,
            floor: 0,
            ceil: 4,
            step: 0.01
        };
        this.saveApply = {
            save: false,
            apply: false,
        };
        this.priceArray = {
            'Audio Quality': 0,
            'Video Resolution': 0,
            'Audio Stability': 0,
            'Motion Smoothness': 0,
            'Audio-Video Synchronization': 0,
        };
        this.counter = 0;
        this.requestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.sumUpCost = (arr) => arr.reduce((a, b) => a + b);
    }
    getSurvey(survey) {
        this.completeFunc = survey.completeLastPage.bind(survey);
    }
    jitterVideo(jitterVal) {
        if (this.videoTimerSubscription) {
            this.videoTimerSubscription.unsubscribe();
        }
        switch (jitterVal) {
            case 0:
                // play every 6 secs, pause 1.5 secs
                this.blackTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 6000);
                break;
            case 1:
                // play every 16.5 secs, pause 1.5 secs
                this.blackTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 16500);
                break;
            case 2:
                // play every 43.5 secs, pause 1.5 secs, stopping twice essentially
                this.blackTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 43500);
                break;
            case 3:
                this.blackTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 1000000);
                break;
        }
        this.videoTimerSubscription = this.blackTimer.subscribe(val => {
            if (this.videoIsPlaying) {
                this.videoIsJittering = true;
                const freshback = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1500);
                freshback.subscribe(d => {
                    this.videoIsJittering = false;
                });
            }
        });
    }
    jitterAudio(jitterVal) {
        if (this.audioTimerSubscription) {
            this.audioTimerSubscription.unsubscribe();
        }
        switch (jitterVal) {
            case 0:
                // play every 6 secs, pause 1.5 secs
                this.muteTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 6000);
                break;
            case 1:
                // play every 13.5 secs, pause 1.5 secs
                this.muteTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 13500);
                break;
            case 2:
                // play every 28.5 secs, pause 1.5 secs, stopping 3 times essentially
                this.muteTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 28500);
                break;
            case 3:
                this.muteTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 1000000);
                break;
        }
        this.audioTimerSubscription = this.muteTimer.subscribe(val => {
            if (this.videoIsPlaying) {
                this.audioElement.volume = 0;
                const freshback = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1500);
                freshback.subscribe(d => {
                    if (this.videoIsPlaying) {
                        this.audioElement.volume = 1;
                    }
                });
            }
        });
    }
    syncAudioWithVideo() {
        const syncAudioWithVideoValue = Number(this.configurations['Audio-Video Synchronization']);
        switch (syncAudioWithVideoValue) {
            case 0:
                this.audioElement.currentTime = this.videoElement.currentTime - 1.850;
                break;
            case 1:
                this.audioElement.currentTime = this.videoElement.currentTime - 1.615;
                break;
            case 2:
                this.audioElement.currentTime = this.videoElement.currentTime - 1.050;
                break;
            case 3:
                this.audioElement.currentTime = this.videoElement.currentTime;
                break;
        }
    }
    refreshPlayback() {
        const that = this;
        this.videoIsPlaying = true;
        this.unsubscribeSurvices();
        this.reassignVideoSrc();
        this.syncAudioWithVideo();
        this.videoElement.addEventListener('loadeddata', function () {
            if (that.counter !== 0) {
                that.videoElement.play();
                that.audioElement.play();
            }
            that.counter++;
            const ctx = that.canvasElement.getContext('2d');
            that.videoContainer.scale = Math.min(ctx.canvas.width / this.videoWidth, ctx.canvas.height / this.videoHeight);
            that.videoContainer.ready = true;
            requestAnimationFrame(that.updateCanvas.bind(that));
        }, false);
        this.jitterAudio(Number(this.configurations['Audio Stability']));
        this.jitterVideo(Number(this.configurations['Motion Smoothness']));
    }
    reassignVideoSrc() {
        const time = Date.now();
        const userID = this.cookieService.get('user_id');
        this.videoSrc =
            this.videoFilePrefix +
                this.formJson.filename + '-vq' + this.configurations['Video Resolution'] + '.webm?t=' + time + '&userId=' + userID;
        this.audioSrc =
            this.audioFilePrefix + this.formJson.filename + '-aq' + this.configurations['Audio Quality'] + '.m4a?t=' + time + '&userId=' + userID;
        const videoTempTime = this.videoElement.currentTime;
        const audioTempTime = this.audioElement.currentTime;
        this.videoElement.src = this.videoSrc;
        this.audioElement.src = this.audioSrc;
        this.videoElement.currentTime = videoTempTime;
        this.audioElement.currentTime = audioTempTime;
    }
    unsubscribeSurvices() {
        if (this.audioTimerSubscription) {
            this.audioTimerSubscription.unsubscribe();
        }
        if (this.videoTimerSubscription) {
            this.videoTimerSubscription.unsubscribe();
        }
    }
    updateCanvas() {
        this.canvasElement = this.canvas.nativeElement;
        const ctx = this.canvasElement.getContext('2d');
        if (!this.videoIsJittering) {
            ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        }
        if (this.videoContainer !== undefined && this.videoContainer.ready) {
            // find the top left of the video on the canvas
            const scale = this.videoContainer.scale;
            const vidH = this.videoContainer.video.videoHeight;
            const vidW = this.videoContainer.video.videoWidth;
            const top = ctx.canvas.height / 2 - (vidH / 2) * scale;
            const left = ctx.canvas.width / 2 - (vidW / 2) * scale;
            if (!this.videoIsJittering) {
                ctx.drawImage(this.videoContainer.video, left, top, vidW * scale, vidH * scale);
                if (this.videoContainer.video.paused) {
                    this.drawPayIcon();
                }
            }
        }
        requestAnimationFrame(this.updateCanvas.bind(this));
    }
    onRadioCheck() {
        this.videoConfig = Object.values(this.configurations).map(a => Number(a));
        this.refreshPlayback();
    }
    onCheckboxClick(event, key) {
        const table = {
            'Audio Quality': [0, 3],
            'Video Resolution': [0, 1],
            'Audio Stability': [0, 2],
            'Motion Smoothness': [0, 1],
            'Audio-Video Synchronization': [0, 1],
        };
        if (this.configurations[key] === table[key][1]) {
            this.configurations[key] = table[key][0];
        }
        else {
            this.configurations[key] = table[key][1];
        }
        this.videoConfig = Object.values(this.configurations).map(a => Number(a));
        this.refreshPlayback();
    }
    playPause() {
        if (this.videoIsPlaying) {
            this.audioElement.pause();
            this.videoElement.pause();
            this.videoIsPlaying = false;
        }
        else {
            this.audioElement.play();
            this.videoElement.play();
            this.videoIsPlaying = true;
        }
    }
    ngOnInit() {
        this.vService.requestForm();
        this.vService.videoForm.subscribe((data) => {
            if (data) {
                console.log(data);
                this.formJson = data;
                this.survey = {
                    questions: data.settings.normal,
                    showNav: false,
                };
                this.saveApply = {
                    save: data.settings.save,
                    apply: data.settings.apply,
                };
                if (this.saveApply.apply) {
                    this.videoConfig = JSON.parse(this.cookieService.get('video_config'));
                    this.configurations = {
                        'Audio Quality': this.videoConfig[0],
                        'Video Resolution': this.videoConfig[1],
                        'Audio Stability': this.videoConfig[2],
                        'Motion Smoothness': this.videoConfig[3],
                        'Audio-Video Synchronization': this.videoConfig[4]
                    };
                }
                const userID = this.cookieService.get('user_id');
                this.description = data.Description;
                this.title = data.Title;
                this.showCost = data.settings.control_panel_has_price;
                this.showConfig = data.settings.control_panel_can_change;
                this.showDemoConfig = data.settings.showDemoConfig;
                this.showFullConfig = data.settings.showFullConfig;
                const time = Date.now().toString();
                this.videoSrc =
                    this.videoFilePrefix + this.formJson.filename + '-vq' +
                        this.configurations['Video Resolution'] + '.webm?t=' + time + '&userId=' + userID;
                this.audioSrc =
                    this.audioFilePrefix + this.formJson.filename + '-av' +
                        this.configurations['Audio Quality'] + '.m4a?t=' + time + '&userId=' + userID;
                this.videoElement.src = this.videoSrc;
                this.audioElement.src = this.audioSrc;
                this.showPanel = data.settings.control_panel_can_change;
                this.refreshPlayback();
            }
        });
    }
    fetchCheckBoxStatus(key) {
        console.log(key, this.configurations[key]);
        return +this.configurations[key] > 0;
    }
    decidePath() {
        const pathIndex = Number(this.cookieService.get('user_current_path_index'));
        const pathArray = JSON.parse(this.cookieService.get('user_path'));
        const type = pathArray[pathIndex]['type'];
        if (type === 'normal') {
            this.route.navigate(['likert']);
        }
        else if (type === 'qv') {
            this.route.navigate(['qv']);
        }
        else if (type === 'video') {
            this.route.navigate(['video']).then(() => location.reload());
        }
        else if (type === 'complete') {
            const userId = this.cookieService.get('user_id');
            this.cookieService.deleteAll('/');
            const file = pathArray[pathIndex]['file'];
            this.http.post(`${this.requestUrl}/submit`, { userId, complete: true }).subscribe(d => {
                this.http.get(`${this.requestUrl}/thank_you/${file}`).subscribe(thankYouData => {
                    this.route.navigate(['complete', Object.assign({ userId }, thankYouData)]);
                });
            });
        }
    }
    ngOnDestroy() {
        this.videoSrc = '';
        this.audioSrc = '';
        this.videoElement.src = this.videoSrc;
        this.audioElement.src = this.audioSrc;
        this.audioElement.pause();
        this.videoElement.pause();
        this.unsubscribeSurvices();
        this.videoElement.remove();
        this.audioElement.remove();
        this.videoIsPlaying = false;
    }
    ngAfterViewInit() {
        this.videoElement = this.videoPlayer.nativeElement;
        this.audioElement = this.audioPlayer.nativeElement;
        this.videoOverlayElement = this.videoOverlay.nativeElement;
        this.canvasElement = this.canvas.nativeElement;
        this.videoContainer.video = this.videoElement;
    }
    submit(e) {
        if (this.completeFunc) {
            this.completeFunc();
        }
        else {
            this.surveySubmit(null);
        }
    }
    surveySubmit(data) {
        this.clicked = true;
        this.videoElement.pause();
        if (this.saveApply.save) {
            this.cookieService.set('video_config', JSON.stringify(this.videoConfig), undefined, '/', undefined, false, 'Lax');
        }
        this.vService.submit({ videoConfig: this.videoConfig, counter: this.counter, data }).subscribe(result => {
            this.decidePath();
        });
    }
    // implementation based on https://stackoverflow.com/questions/38710125/how-do-i-display-a-video-using-html5-canvas-tag
    drawPayIcon() {
        this.canvasElement = this.canvas.nativeElement;
        const ctx = this.canvasElement.getContext('2d');
        const canvas = this.canvasElement;
        ctx.fillStyle = 'black'; // darken display
        ctx.globalAlpha = 0.5;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#DDD'; // colour of play icon
        ctx.globalAlpha = 0.75; // partly transparent
        ctx.beginPath(); // create the path for the icon
        const size = (canvas.height / 2) * 0.5; // the size of the icon
        ctx.moveTo(canvas.width / 2 + size / 2, canvas.height / 2); // start at the pointy end
        ctx.lineTo(canvas.width / 2 - size / 2, canvas.height / 2 + size);
        ctx.lineTo(canvas.width / 2 - size / 2, canvas.height / 2 - size);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1; // restore alpha
    }
};
VideoComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoPlayer', { static: false })
], VideoComponent.prototype, "videoPlayer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoOverlay', { static: false })
], VideoComponent.prototype, "videoOverlay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('audioPlayer', { static: false })
], VideoComponent.prototype, "audioPlayer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: false })
], VideoComponent.prototype, "canvas", void 0);
VideoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./video.component.scss */ "./src/app/video/video.component.scss")).default]
    })
], VideoComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");






let WelcomeComponent = class WelcomeComponent {
    constructor(gService, router, cookieService, route) {
        this.gService = gService;
        this.router = router;
        this.cookieService = cookieService;
        this.route = route;
        this.conditionOne = false;
        this.conditionTwo = false;
        this.conditionThree = false;
        this.blockAccess = false;
    }
    ngOnInit() {
        this.blockAccess = navigator.userAgent.indexOf('Safari') !== -1 && !(navigator.userAgent.indexOf('Chrome') !== -1);
        if (this.cookieService.check('user_id')) {
            const pathIndex = Number(this.cookieService.get('user_current_path_index'));
            const pathArray = JSON.parse(this.cookieService.get('user_path'));
            const type = pathArray[pathIndex]['type'];
            if (type === 'normal') {
                this.router.navigate(['likert']);
            }
            else if (type === 'qv') {
                this.router.navigate(['qv']);
            }
            else if (type === 'video') {
                this.router.navigate(['video']).then(() => location.reload());
            }
            else {
                this.router.navigate(['welcome']);
            }
        }
    }
    setCookie(id, val) {
        this.cookieService.set(id, val, undefined, '/', undefined, false, 'Lax');
    }
    initCookie(user) {
        this.setCookie('user_gp', user.gp);
        this.setCookie('user_path_id', user.path_id);
        this.setCookie('user_current_question_index', String(0));
        this.setCookie('user_complete_flag', String(user.complete_flag));
        this.setCookie('user_path', JSON.stringify(user.path));
        this.setCookie('user_id', user.userid);
        this.setCookie('user_current_path_index', String(0));
    }
    createUser() {
        this.isSubmit = true;
        if (this.conditionOne && this.conditionTwo && this.conditionThree) {
            if (!this.cookieService.check('user_id')) {
                const userGP = this.route.snapshot.paramMap.get('id');
                this.gService.getUserID(userGP).subscribe((user) => {
                    this.initCookie(user);
                    if (user.path_id === 'thank_you') {
                        const userID = this.cookieService.get('user_id');
                        this.cookieService.deleteAll('/');
                        this.router.navigate(['complete', { userId: userID, text: null, title: null }]);
                    }
                    else {
                        this.router.navigate(['demographic']);
                    }
                });
            }
            else {
                this.router.navigate(['demographic']);
            }
        }
    }
    cancel() {
        alert('Please close the browser.');
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
WelcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")).default]
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tcheng10/13_Bash/QV-buyback/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map