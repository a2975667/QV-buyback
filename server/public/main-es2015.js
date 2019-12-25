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
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-light\">\n\t<div class=\"col-sm-1\">\n\t\t<br>\n\t</div>\n\t<div class=\"col-sm\">\n\t</div>\n\t<div class=\"col-sm\">\n\t</div>\n</nav>\n<div class=\"container\">\n\t<div class=\"container\">\n\t\t<h1>{{title}}</h1>\n\t</div>\n\t<div class=\"container\">\n\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t<li class=\"list-group-item\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\tTo be paid, you will need the following code:\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4\" style=\"color: darkred;\">\n\t\t\t\t\t\t{{code}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<p>Please return to the original hit page and paste in the code above. After pasting the code, You can download the debrief information about this experiment <a href='/download/debreif' target=\"_blank\">here.</a></p>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"container\">\n\t\t<p>\n\t\t\t{{text}}\n\t\t</p>\n\t</div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<app-survey [json]=\"json\" (resultEmit)=\"submit($event)\"></app-survey>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-light\">\n\t<div class=\"col-sm-2\">\n\t\t<br>\n\t</div>\n\t<div class=\"col-sm\">\n\t\t<div class=\"progress\">\n\t\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated\"\n\t\t\t\t[style.width.%]=\"(currentQuestion+1/numQuestion)*100\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-sm-2\" align=\"right\">\n\t\tPart {{currentFile}} Q{{currentQuestion+1}} / {{numFile}} Parts\n\t</div>\n</nav>\n\n\n<div class=\"container\">\n\t<br>\n\t<h1>{{questionTitle}}</h1>\n\t<h3 *ngIf=\"questionTitle=='QV Dry Run: Understanding what is Quadratic Voting'\">Please watch this video</h3>\n\t<iframe *ngIf=\"questionTitle=='QV Dry Run: Understanding what is Quadratic Voting'\"\n\t\tstyle=\"height: 60vh; width: 100%;\" src=\"https://www.youtube.com/embed/-eTn0UwZGK4\" frameborder=\"0\"\n\t\tallow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\t<br>\n\n\t<p *ngIf=\"questionTitle!='QV Dry Run: Understanding what is Quadratic Voting'\">People have different preferences in\n\t\thow resources should be allocated for different societal causes. Here we listed 9 different societal causes. For\n\t\teach of the causes listed below, what do you think about <b> how effort and resources should be contributed\n\t\t\ttoward the causes? </b></p>\n\t<p>\n\t\tFor this question, you will use a <b>Binary Quadratic Voting</b> method to express your preferences.\n\t\t<br><br>\n\t\tYou will be given a budget of a certain number of <b> voice credits</b>. You will use the available credits to\n\t\tcast votes. If you think more resources should be allocated to a certain cause, you can cast multiple\n\t\tupvotes using the <b>+1 sign</b>. If you believe that less less resources should be allocated on a certain\n\t\tcause, you can cast a few downvotes using the <b> -1 sign</b>. If you are neutral on a cause, you can choose to\n\t\tcast <b> no vote </b>.\n\n\t\t<br><br>\n\t\t<b> Based on the intensity of your opinion, you can cast one or more upvote or downvotes for each cause</b>. The\n\t\tstronger your opinion is, the more votes you can put on one option. At the same time, as the number of votes\n\t\tincreases, the voice credits it costs increases quadratically, i.e. <b> X votes will cost X^2 (square of X)\n\t\t\tcredits</b>. The cost of some common number of votes is specified in the table below:\n\t</p>\n\t<table align=\"center\">\n\t\t<tbody>\n\t\t\t<tr align=\"center\">\n\t\t\t\t<th>Number of up or down votes</th>\n\t\t\t\t<td align=\"center\">1</td>\n\t\t\t\t<td align=\"center\">2</td>\n\t\t\t\t<td align=\"center\">3</td>\n\t\t\t\t<td align=\"center\">4</td>\n\t\t\t\t<td align=\"center\">5</td>\n\t\t\t\t<td align=\"center\">6</td>\n\t\t\t\t<td align=\"center\">7</td>\n\t\t\t\t<td align=\"center\">8</td>\n\t\t\t\t<td align=\"center\">9</td>\n\t\t\t\t<td align=\"center\">10</td>\n\t\t\t</tr>\n\t\t\t<!-- <tr align=\"center\">\n\t\t\t\t\t<th align=\"center\">&dArr;</th>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t\t<td align=\"center\">&dArr;</td>\n\t\t\t\t</tr> -->\n\t\t\t<tr align=\"right\">\n\t\t\t\t<th align=\"right\">Cost in number of voice credits</th>\n\t\t\t\t<td align=\"center\">1</td>\n\t\t\t\t<td align=\"center\">4</td>\n\t\t\t\t<td align=\"center\">9</td>\n\t\t\t\t<td align=\"center\">16</td>\n\t\t\t\t<td align=\"center\">25</td>\n\t\t\t\t<td align=\"center\">36</td>\n\t\t\t\t<td align=\"center\">49</td>\n\t\t\t\t<td align=\"center\">64</td>\n\t\t\t\t<td align=\"center\">81</td>\n\t\t\t\t<td align=\"center\">100</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>\n\t\t<br>\n\t\t<b>You cannot exceed the budget of given voice credits, but you do not have to use up all the available credits\n\t\t\teither. </b> You can see the total number of voice credits you have and the amount of credits you have spent\n\t\talready in the “Summary” section below.\n\t</p>\n\t<hr>\n\t<div [innerHTML]=\"questionDes\"></div>\n</div>\n<br>\n\n<app-option></app-option>\n\n<br>\n<br>\n\n<app-summary></app-summary>\n<br>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<swal\n  #confirmSubmit\n  title=\"Submit with 0 vote?\"\n  text=\"This cannot be undone\"\n  icon=\"question\"\n  [showCancelButton]=\"true\"\n  [focusCancel]=\"true\"\n  (confirm)=\"this.submitSuccessSwal.fire()\">\n</swal>\n<swal\n  #submitSuccess\n  title=\"Submitted!\"\n  [showCancelButton]=\"false\"\n  text=\"You will be presented a similar task on the next page. The total number of votes may change.\"\n  (afterClose)=\"this.gService.submit()\"\n>\n</swal>\n<div class=\"container sticky\">\n    <div class=\"card\">\n        <h5 class=\"card-header\">Summary</h5>\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Used {{usedCredits}} out of {{totalCredits}} credits</h5>\n                <div class=\"card-text\">\n                    <div>\n                        <small style=\"float: left; margin: 0\">0</small>\n                        <small style=\"float: right; margin: 0\">{{totalCredits}}</small>\n                        <progressbar style=\"width: 100%; margin-bottom: 10px;\" [animate]=\"false\" [value]=\"percentage\" [type]=\"type\"></progressbar>\n                    </div>\n                </div>\n                <button (click)=\"submit()\" type=\"button\" class=\"btn btn-outline-primary\">Submit</button>\n            </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"survey-container contentcontainer codecontainer\">\n        <div id=\"surveyElement\"></div>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-light\">\n\t<div class=\"col-sm-1\">\n\t\t<br>\n\t</div>\n\t<div class=\"col-sm\">\n\t</div>\n\t<div class=\"col-sm\">\n\t</div>\n</nav>\n\n<div class=\"container\">\n\t<form (ngSubmit)=\"createUser()\" class=\"was-validated\" #validForm=\"ngForm\">\n\t\t<div class=\"container\">\n\t\t\t<h1>Welcome to the study</h1>\n\t\t\t<h4>Donation Causes Study Online Consent Form</h4>\n\t\t</div>\n\t\t<div class=\"container\">\n\t\t\t<p>\n\t\t\t\tYou are being asked to participate in a voluntary research study. The purpose of this study is to understand your level of interest and concern on a number of causes in the society. Participating in this study will involve filling out two surveys related to this topic and perform a donation decision task. Your participation will last around 5 - 15 minutes depending on the task you are assigned to randomly. There are no known risks associated with our study.\n\t\t\t\t<br><br>\n\t\t\t\t- Principal Investigator Name and Title: Dr. Hari Sundaram\n\t\t\t\t<br>\n\t\t\t\t- Department and Institution: Department of Computer Science, University of Illinois at Urbana Champaign\n\t\t\t\t<br>\n\t\t\t\t- Contact Information: <a target=\"_blank\" href=\"mailto:hs1@illinois.edu\">Dr. Hari Sundaram</a>\n\n\t\t\t</p>\n\t\t\t<h5>What procedures are involved?</h5>\n\t\t\t<p>\n\t\t\t\t<b></b> You will first be asked to complete surveys related to your degree of interest and concern on a number of causes. Then you will enter a lottery, and will be asked to decide how you would like to allocate the potential bonus from the lottery to a list of organizations and how much you would like to keep to yourself.\n\t\t\t</p>\n\t\t\t<h5>Will my study-related information be kept confidential?</h5>\n\t\t\t<p>\n\t\t\t\tFaculty, students, and staff who may see your information will maintain confidentiality to the extent of laws and university policies. Personal identifiers are neither collected nor will be published or presented.\n\t\t\t</p>\n\t\t\t<h5>Will I be reimbursed for any expenses or paid for my participation in this research?</h5>\n\t\t\t<p>\n\t\t\t\tYou will be paid $0.7 base pay through MTurk when you are done with the study. If you are assigned the longer version of the study, you will be paid $1.3 bonus through MTurk when you complete the study. You may also be paid a bonus from the lottery through MTurk if you win the lottery. Payment is dependent on your quality completion of the task.\n\t\t\t</p>\n\t\t\t<h5>Can I withdraw or be removed from the study?</h5>\n\t\t\t<p>\n\t\t\t\tIf you decide to participate, you are free to withdraw your consent and discontinue participation at any time. The researchers also have the right to stop your participation in this study without your consent if they believe it is in your best interests, and/or you were to object to any future changes that may be made in the study plan. Your participation in this research is voluntary. Your decision whether or not to participate, or to withdraw after beginning participation, will not affect your current or future dealings with the University of Illinois at Urbana-Champaign.\n\t\t\t</p>\n\t\t\t<h5>Will data collected from me be used for any other research?</h5>\n\t\t\t<p>\n\t\t\t\tYour de-identified information could be used for future research without additional informed consent.\n\t\t\t</p>\n\n\t\t\t<h5>Who should I contact if I have questions?</h5>\n\t\t\t<p>\n\t\t\t\tQuestions about this research study should be directed to Dr. Hari Sundaram (hs1@illinois.edu) in the Department of Computer Science at University of Illinois, Urbana-Champaign. If you have any questions about your rights as a participant in this study or any concerns or complaints, please contact the University of Illinois Institutional Review Board at 217-333-2670 or via irb@illinois.edu.\n\t\t\t</p>\n\t\t\t<h5>How will the results be disseminated?</h5>\n\t\t\t<p>\n\t\t\t\tThe results will be disseminated via journal articles, academic paper, conference presentations, PhD theses, and/or Open Science Framework. Please download and print this consent form if you would like to retain a copy for your records.\n\n\t\t\t</p>\n\n\t\t\t<h5> Please use a Laptop, Tablet or PC to complete this survey. </h5>\n\t\t\t<h5>By continuing, I certify that I have read this form and volunteer to participate in this research study.<br></h5>\n\n\t\t\t<div class=\"form-group form-check\">\n\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t<input [(ngModel)]=\"condition_one\" class=\"form-check-input\" type=\"checkbox\" name=\"condition1\"\n\t\t\t\t\t\trequired> I have read and understand the above consent form.\n\t\t\t\t\t<div class=\"valid-feedback\">Valid.</div>\n\t\t\t\t\t<div class=\"invalid-feedback\">Check this checkbox to continue.</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-group form-check\">\n\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t<input [(ngModel)]=\"condition_two\" class=\"form-check-input\" type=\"checkbox\" name=\"condition2\"\n\t\t\t\t\t\trequired> I certify that I am 18 years old or older.\n\t\t\t\t\t<div class=\"valid-feedback\">Valid.</div>\n\t\t\t\t\t<div class=\"invalid-feedback\">Check this checkbox to continue.</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-group form-check\">\n\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t<input [(ngModel)]=\"condition_three\" class=\"form-check-input\" type=\"checkbox\" name=\"condition3\"\n\t\t\t\t\t\trequired> I understand that by clicking the continue button to enter the survey, I indicate my willingness to voluntarily take part in this study.\n\t\t\t\t\t<div class=\"valid-feedback\">Valid.</div>\n\t\t\t\t\t<div class=\"invalid-feedback\">Check this checkbox to continue.</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container\">\n\t\t\t<button type=\"submit\" class=\"mr-2 btn btn-success\" [disabled]=\"!validForm.form.valid || isSubmit\">\n\t\t\t\tStart Questionaire\n\t\t\t</button>\n\t\t\t<button (click)=\"cancel()\"type=\"button\" class=\"mr-2 btn btn-danger\" [disabled]=\"validForm.form.valid\">\n\t\t\t\tCancel\n\t\t\t</button>\n\t\t</div>\n\t</form>\n\n</div>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questionnaire/questionnaire.component */ "./src/app/questionnaire/questionnaire.component.ts");
/* harmony import */ var _donation_donation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donation/donation.component */ "./src/app/donation/donation.component.ts");
/* harmony import */ var _likert_likert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./likert/likert.component */ "./src/app/likert/likert.component.ts");
/* harmony import */ var _demographic_demographic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demographic/demographic.component */ "./src/app/demographic/demographic.component.ts");
/* harmony import */ var _complete_complete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./complete/complete.component */ "./src/app/complete/complete.component.ts");









const routes = [
    { path: 'welcome/:id', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'demographic', component: _demographic_demographic_component__WEBPACK_IMPORTED_MODULE_7__["DemographicComponent"] },
    { path: 'qv', component: _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_4__["QuestionnaireComponent"] },
    { path: 'donation', component: _donation_donation_component__WEBPACK_IMPORTED_MODULE_5__["DonationComponent"] },
    { path: 'likert', component: _likert_likert_component__WEBPACK_IMPORTED_MODULE_6__["LikertComponent"] },
    { path: 'complete', component: _complete_complete_component__WEBPACK_IMPORTED_MODULE_8__["CompleteComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  background-color: aqua;\n  z-index: 1090;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC8xM19CYXNoL1FWLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgIHotaW5kZXg6IDEwOTA7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgei1pbmRleDogMTA5MDtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'qv';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./option/option.component */ "./src/app/option/option.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./questionnaire/questionnaire.component */ "./src/app/questionnaire/questionnaire.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _donation_donation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./donation/donation.component */ "./src/app/donation/donation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _likert_likert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./likert/likert.component */ "./src/app/likert/likert.component.ts");
/* harmony import */ var _survey_survey_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./survey/survey.component */ "./src/app/survey/survey.component.ts");
/* harmony import */ var _demographic_demographic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./demographic/demographic.component */ "./src/app/demographic/demographic.component.ts");
/* harmony import */ var _complete_complete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./complete/complete.component */ "./src/app/complete/complete.component.ts");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            _complete_complete_component__WEBPACK_IMPORTED_MODULE_18__["CompleteComponent"]
        ],
        imports: [
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CompleteComponent = class CompleteComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.title = this.route.snapshot.paramMap.get('title');
        this.code = this.route.snapshot.paramMap.get('userId');
        this.text = this.route.snapshot.paramMap.get('text');
        if (this.title == null) {
            this.title = "Thank you";
            this.code = "N/A";
            this.text = "Unfortunately the survey has collected enough response.";
            this.url = "";
        }
    }
};
CompleteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complete',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./complete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/complete/complete.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./complete.component.scss */ "./src/app/complete/complete.component.scss")).default]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_demographic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/demographic.service */ "./src/app/services/demographic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");





let DemographicComponent = class DemographicComponent {
    constructor(route, cookieService, demoFormService) {
        this.route = route;
        this.cookieService = cookieService;
        this.demoFormService = demoFormService;
    }
    ngOnInit() {
        this.demoFormService.demoForm.subscribe(data => {
            this.demoForm = data;
        });
        this.demoFormService.requestForm();
    }
    getCookieById(id) {
        return this.cookieService.get(id);
    }
    submit(data) {
        this.demoFormService.submit(data).subscribe(result => {
            let pathIndex = Number(this.getCookieById('user_current_path_index'));
            let pathArray = JSON.parse(this.getCookieById('user_path'));
            let type = pathArray[pathIndex]['type'];
            if (type == 'normal') {
                this.route.navigate(['likert']);
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
DemographicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demographic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demographic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demographic/demographic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demographic.component.scss */ "./src/app/demographic/demographic.component.scss")).default]
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
/* harmony default export */ __webpack_exports__["default"] = ("/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC8xM19CYXNoL1FWLWFwcC9zcmMvYXBwL2RvbmF0aW9uL2RvbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kb25hdGlvbi9kb25hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQUNBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ0NGO0FERUEsWUFBQTtBQUNBO0VBQ0UsMEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9uL2RvbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIEZpcmVmb3ggKi9cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XG59XG4iLCIvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogRmlyZWZveCAqL1xuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_donation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/donation.service */ "./src/app/services/donation.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);




function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
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
        let ogObserver = {
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
DonationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./donation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donation/donation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./donation.component.scss */ "./src/app/donation/donation.component.scss")).default]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_likert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/likert.service */ "./src/app/services/likert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");





let LikertComponent = class LikertComponent {
    constructor(liService, route, cookieService) {
        this.liService = liService;
        this.route = route;
        this.cookieService = cookieService;
    }
    decidePath() {
        let pathIndex = Number(this.cookieService.get('user_current_path_index'));
        let pathArray = JSON.parse(this.cookieService.get('user_path'));
        let type = pathArray[pathIndex]['type'];
        console.log(pathArray[pathIndex]);
        if (type == 'normal') {
            this.route.navigate(['likert']);
            this.liService.requestForm();
        }
        else if (type == 'qv') {
            this.route.navigate(['qv']);
        }
        else if (type == 'donation') {
            this.route.navigate(['donation']);
        }
        else if (type == 'complete') {
            this.route.navigate(['complete']);
        }
    }
    ngOnInit() {
        this.liService.requestForm();
        this.liService.likertForm.subscribe(data => {
            this.json = data;
        });
    }
    submit(data) {
        this.liService.submit(data).subscribe(result => {
            this.decidePath();
        });
    }
};
LikertComponent.ctorParameters = () => [
    { type: _services_likert_service__WEBPACK_IMPORTED_MODULE_2__["LikertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
LikertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-likert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./likert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/likert/likert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./likert.component.scss */ "./src/app/likert/likert.component.scss")).default]
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
/* harmony default export */ __webpack_exports__["default"] = (".tick {\n  color: #007bff;\n}\n\n.cross {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC8xM19CYXNoL1FWLWFwcC9zcmMvYXBwL29wdGlvbi9vcHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29wdGlvbi9vcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9vcHRpb24vb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpY2sge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuLmNyb3NzIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbn0iLCIudGljayB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uY3Jvc3Mge1xuICBjb2xvcjogb3JhbmdlO1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");



let OptionComponent = class OptionComponent {
    constructor(gService) {
        this.gService = gService;
    }
    ngOnInit() {
        this.gService.questionSet.subscribe((data) => {
            this.currentQuestionIndex = data.currentQuestion;
            let currentQuestion = data.question_list[this.currentQuestionIndex];
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
        let currentDirection = isMinus ? this.votes[index] <= 0 : this.votes[index] >= 0;
        let currentCredits = this.calCurrentTotalCredits();
        let difference = Math.pow((Math.abs(this.votes[index]) + 1), 2) - Math.pow(this.votes[index], 2);
        let isNextPossibleTotalCreditsOK = currentCredits + difference > this.totalCredits;
        return currentDirection && isNextPossibleTotalCreditsOK;
    }
    modifyVotesByID(o_index, value) {
        let originalVote = this.gService.votesContent[this.currentQuestionIndex][o_index];
        this.gService.modifyVotesByID(this.currentQuestionIndex + 1, o_index + 1, originalVote + value);
    }
};
OptionComponent.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }
];
OptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-option',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./option.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./option.component.scss */ "./src/app/option/option.component.scss")).default]
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
/* harmony default export */ __webpack_exports__["default"] = ("td {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  width: 2em;\n  border: 1px solid grey;\n}\n\nth, tr {\n  padding-left: 1em;\n  padding-right: 1em;\n  border: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC8xM19CYXNoL1FWLWFwcC9zcmMvYXBwL3F1ZXN0aW9ubmFpcmUvcXVlc3Rpb25uYWlyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcXVlc3Rpb25uYWlyZS9xdWVzdGlvbm5haXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0NEOztBREdBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbm5haXJlL3F1ZXN0aW9ubmFpcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCB7XG5cdHBhZGRpbmctbGVmdDogMC41ZW07XG5cdHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xuXHR3aWR0aDogMmVtO1xuXHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuXG5cbnRoLCB0ciB7XG5cdHBhZGRpbmctbGVmdDogMWVtO1xuXHRwYWRkaW5nLXJpZ2h0OiAxZW07XG5cdGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG4iLCJ0ZCB7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xuICB3aWR0aDogMmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuXG50aCwgdHIge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let QuestionnaireComponent = class QuestionnaireComponent {
    constructor(gService, route, cookieService) {
        this.gService = gService;
        this.route = route;
        this.cookieService = cookieService;
        this.currentQuestion = 0;
        this.numQuestion = 1;
        this.numFile = 1;
        this.currentFile = 1;
    }
    ngOnInit() {
        let pathIndex = Number(this.cookieService.get('user_current_path_index'));
        let pathArray = JSON.parse(this.cookieService.get('user_path'));
        let type = pathArray[pathIndex]['type'];
        if (type == 'normal') {
            this.route.navigate(['likert']);
        }
        else if (type == 'qv') {
            this.gService.questionSet.subscribe((data) => {
                this.questionnaire = data;
                this.currentQuestion = data.currentQuestion;
                this.numQuestion = data.question_list.length;
                let questionContent = data.question_list[this.currentQuestion];
                this.questionDes = questionContent.description;
                this.questionTitle = questionContent.question;
                let pathArray = JSON.parse(this.cookieService.get('user_path'));
                this.numFile = pathArray.length;
                let pathIndex = Number(this.cookieService.get('user_current_path_index'));
                this.currentFile = pathIndex + 1;
            });
            this.gService.getQuestionnaire();
        }
        else if (type == 'donation') {
            this.route.navigate(['donation']);
        }
        else if (type == 'complete') {
            this.route.navigate(['complete']);
        }
    }
};
QuestionnaireComponent.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
QuestionnaireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questionnaire',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./questionnaire.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./questionnaire.component.scss */ "./src/app/questionnaire/questionnaire.component.scss")).default]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");







let DemographicService = class DemographicService {
    constructor(cookieService, http) {
        this.cookieService = cookieService;
        this.http = http;
        this.requestUrl = '';
        this.demoForm = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
    }
    requestForm() {
        let donationAPI = `${this.requestUrl}/api/demographic`;
        this.http.get(donationAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).subscribe(data => {
            console.log(data);
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
    ;
    getCookieById(id) {
        return this.cookieService.get(id);
    }
    submit(data) {
        let userId = this.getCookieById('user_id');
        let submitAPI = `${this.requestUrl}/submit-demographic`;
        return this.http.post(submitAPI, {
            userId: userId,
            data: data
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
DemographicService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DemographicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let DonationService = class DonationService {
    constructor(http, cookieService, route) {
        this.http = http;
        this.cookieService = cookieService;
        this.route = route;
        this.requestUrl = '';
        this.organizations = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    requestOrganizations() {
        let donationAPI = `${this.requestUrl}/api/donation`;
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
        let pathArray = JSON.parse(this.getCookieById('user_path'));
        let pathIndex = Number(this.getCookieById('user_current_path_index')) + 1;
        let completeJsonAPI = `${this.requestUrl}/thank_you/${pathArray[pathIndex]['file']}`;
        this.http.get(completeJsonAPI).subscribe(completeJSON => {
            let userId = this.getCookieById('user_id');
            this.cookieService.deleteAll('/');
            let submitAPI = `${this.requestUrl}/submit-donation`;
            this.http.post(submitAPI, {
                donation: data,
                userId: userId,
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).subscribe(result => {
                this.route.navigate(['complete', Object.assign({}, completeJSON, { userId: userId })]);
            });
        });
    }
};
DonationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
DonationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







function calTotalCredits(votesArray) {
    let q_totalUsedCredits = 0;
    votesArray.forEach(vote => {
        q_totalUsedCredits = q_totalUsedCredits + Math.pow(vote, 2);
    });
    return q_totalUsedCredits;
}
let GlobalService = class GlobalService {
    constructor(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.requestUrl = '';
        this.questionSet = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.votes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.usedCredits = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getUserID(userGP) {
        return this.http.post(`${this.requestUrl}/createUser`, { gp: userGP })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getCookieById(id) {
        return this.cookieService.get(id);
    }
    setCookieById(id, val) {
        this.cookieService.set(id, val, undefined, '/');
    }
    getCurrentPath() {
        let pathIndex = Number(this.getCookieById('user_current_path_index'));
        let pathArray = JSON.parse(this.getCookieById('user_path'));
        return pathArray[pathIndex]['file'];
    }
    generateSubmitPost(completeFlag) {
        let submitPost = {};
        submitPost.complete_flag = completeFlag;
        submitPost.file_name = this.getCurrentPath();
        let currentQuestion = this.getCookieById('user_current_question_index');
        submitPost.qid = this.questionnaire.question_list[currentQuestion].qid;
        submitPost.results = this.votesContent[this.getCookieById('user_current_question_index')];
        submitPost.user_id = this.getCookieById('user_id');
        return submitPost;
    }
    update() {
        this.usedCredits.emit(this.usedCreditsArray);
        this.votes.emit(this.votesContent);
    }
    modifyVotesByID(q_id, o_id, value) {
        this.votesContent[q_id - 1][o_id - 1] = value;
        this.usedCreditsArray[q_id - 1] = calTotalCredits(this.votesContent[q_id - 1]);
        ;
        this.update();
    }
    getQuestionnaire() {
        let path = this.getCurrentPath();
        const result = this.http.get(`${this.requestUrl}/api/qv/${path}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        let currentQuestion = this.getCookieById('user_current_question_index');
        result.subscribe((data) => {
            let height = data.question_list.length;
            let votesArray = [];
            for (let i = 0; i < height; i++) {
                votesArray.push(new Array(data.question_list[i].options.length).fill(0));
            }
            this.votesContent = votesArray;
            this.usedCreditsArray = new Array(height).fill(0);
            this.update();
            this.questionSet.emit(Object.assign({ currentQuestion: Number(currentQuestion) }, data));
            this.questionnaire = data;
        });
        return;
    }
    submit() {
        let nextQuestionIndex = Number(this.getCookieById('user_current_question_index')) + 1;
        let submitData = this.generateSubmitPost(false);
        let pathArray = JSON.parse(this.getCookieById('user_path'));
        let pathIndex = Number(this.getCookieById('user_current_path_index'));
        if (nextQuestionIndex >= this.questionnaire.question_list.length) {
            nextQuestionIndex = 0;
            this.setCookieById('user_current_path_index', String(pathIndex + 1));
            if (pathArray[pathIndex + 1]['type'] === "donation") {
                submitData.complete_flag = true;
                return this.http.post(`${this.requestUrl}/submit`, submitData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)).subscribe(data => {
                    this.router.navigate(['donation']);
                });
            }
        }
        if (pathArray[pathIndex + 1]['type'] == 'normal') {
            nextQuestionIndex = 0;
            this.setCookieById('user_current_question_index', String(nextQuestionIndex));
            return this.http.post(`${this.requestUrl}/submit`, submitData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)).subscribe(data => {
                this.router.navigate(['likert']);
            });
        }
        else {
            this.setCookieById('user_current_question_index', String(nextQuestionIndex));
            this.getQuestionnaire();
            return this.http.post(`${this.requestUrl}/submit`, submitData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)).subscribe(data => {
            });
        }
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    }
    ;
};
GlobalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GlobalService.prototype, "questionSet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GlobalService.prototype, "votes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GlobalService.prototype, "usedCredits", void 0);
GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let LikertService = class LikertService {
    constructor(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.requestUrl = '';
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
            let pathIndex = Number(this.getCookieById('user_current_path_index'));
            let pathArray = JSON.parse(this.getCookieById('user_path'));
            return pathArray[pathIndex]['file'];
        }
    }
    requestForm() {
        let fileName = this.getCurrentPath();
        let fileAPI = `${this.requestUrl}/api/qv/${fileName}`;
        this.http.get(fileAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).subscribe(data => {
            console.log(data);
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
    ;
    isQVTestResultFailed(data) {
        let pathIndex = Number(this.getCookieById('user_current_path_index'));
        let pathArray = JSON.parse(this.getCookieById('user_path'));
        let currentFile = pathArray[pathIndex]['file'];
        if (currentFile === 'test_qv') {
            let conditions = [
                data['ac1'] === "(T) True",
                data['ac2'] === "(F) False",
                data['ac3'] === "(F) False",
                data['ac4'] === "(F) False",
                data['ac5'] === "(4) 20993",
                data['ac6'] === "(4) 12345",
            ];
            let noFailedQuestion = 0;
            conditions.forEach(val => {
                if (!val) {
                    noFailedQuestion++;
                }
            });
            if (noFailedQuestion > 2) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    submit(data) {
        let pathIndex = Number(this.getCookieById('user_current_path_index'));
        let userId = this.cookieService.get('user_id');
        let gp = this.cookieService.get('user_gp');
        let path_id = this.cookieService.get('user_path_id');
        if (this.isQVTestResultFailed(data)) {
            // fail the QVTest and delete all cookies
            this.http.post(`${this.requestUrl}/api/disqualify`, {
                gp: gp,
                userid: userId,
                path_id: path_id
            }).subscribe(res => {
                this.cookieService.deleteAll('/');
                this.http.get(`${this.requestUrl}/thank_you/thank_attention`).subscribe(data => {
                    this.router.navigate(['complete', Object.assign({ userId: userId }, data)]);
                });
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        }
        ;
        this.cookieService.set('user_current_path_index', String(pathIndex + 1), undefined, '/');
        return this.http.post(`${this.requestUrl}/submit`, {
            data: data,
            userId: userId,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
LikertService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LikertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LikertService);



/***/ }),

/***/ "./src/app/summary/summary.component.scss":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sticky {\n  position: -webkit-sticky;\n  /* Safari */\n  position: sticky;\n  bottom: 15px;\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC8xM19CYXNoL1FWLWFwcC9zcmMvYXBwL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFBMEIsV0FBQTtFQUMxQixnQkFBQTtFQUNILFlBQUE7RUFDRyxVQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG5cdGJvdHRvbTogMTVweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuIiwiLnN0aWNreSB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgLyogU2FmYXJpICovXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMTVweDtcbiAgei1pbmRleDogMztcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");



let SummaryComponent = class SummaryComponent {
    constructor(gService) {
        this.gService = gService;
        this.usedCredits = 0;
        this.percentage = 0;
    }
    submit() {
        if (this.usedCredits == 0) {
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
                let percentage = (this.usedCredits / this.totalCredits) * 100;
                this.type = 'info';
                this.percentage = percentage;
            });
        });
    }
};
SummaryComponent.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmSubmit', { static: true })
], SummaryComponent.prototype, "confirmSubmitSwal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('submitSuccess', { static: true })
], SummaryComponent.prototype, "submitSuccessSwal", void 0);
SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./summary.component.scss */ "./src/app/summary/summary.component.scss")).default]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_2__);



let SurveyComponent = class SurveyComponent {
    constructor() {
        this.resultEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    set json(value) {
        const that = this;
        const surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_2__["Model"](value);
        surveyModel.showCompletedPage = false;
        survey_angular__WEBPACK_IMPORTED_MODULE_2__["SurveyNG"].render("surveyElement", {
            model: surveyModel,
            isExpanded: true
        });
        surveyModel.onComplete.add(function (sender, options) {
            console.log(sender.data);
            that.resultEmit.emit(sender.data);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SurveyComponent.prototype, "resultEmit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SurveyComponent.prototype, "json", null);
SurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-survey',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./survey.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./survey.component.scss */ "./src/app/survey/survey.component.scss")).default]
    })
], SurveyComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");






let WelcomeComponent = class WelcomeComponent {
    constructor(gService, router, cookieService, route) {
        this.gService = gService;
        this.router = router;
        this.cookieService = cookieService;
        this.route = route;
        this.condition_one = false;
        this.condition_two = false;
        this.condition_three = false;
    }
    ngOnInit() {
        if (this.cookieService.check('user_id')) {
            let pathIndex = Number(this.cookieService.get('user_current_path_index'));
            let pathArray = JSON.parse(this.cookieService.get('user_path'));
            let type = pathArray[pathIndex]['type'];
            if (type == 'normal') {
                this.router.navigate(['likert']);
            }
            else if (type == 'qv') {
                this.router.navigate(['qv']);
            }
            else {
                this.router.navigate(['welcome']);
            }
        }
    }
    initCookie(user) {
        this.cookieService.set('user_gp', user.gp, undefined, '/');
        this.cookieService.set('user_path_id', user.path_id, undefined, '/');
        this.cookieService.set('user_current_question_index', String(0), undefined, '/');
        this.cookieService.set('user_complete_flag', String(user.complete_flag), undefined, '/');
        this.cookieService.set('user_path', JSON.stringify(user.path), undefined, '/');
        this.cookieService.set('user_id', user.userid, undefined, '/');
        this.cookieService.set('user_current_path_index', String(0), undefined, '/');
    }
    createUser() {
        this.isSubmit = true;
        if (this.condition_one && this.condition_two && this.condition_three) {
            if (!this.cookieService.check('user_id')) {
                let userGP = this.route.snapshot.paramMap.get('id');
                this.gService.getUserID(userGP).subscribe((user) => {
                    this.initCookie(user);
                    console.log(user);
                    if (user.path_id == "thank_you") {
                        this.cookieService.deleteAll('/');
                        this.router.navigate(['complete']);
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
        alert("Please close the browser.");
        //TODO jump to thank you page since closeTab function 
        //is not allowed in chrome 41+
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")).default]
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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /mnt/d/13_Bash/QV-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map