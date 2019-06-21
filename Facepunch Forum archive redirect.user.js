// ==UserScript==
// @name         Facepunch Forum archive redirect
// @namespace    https://rtm516.co.uk/
// @version      1.0
// @description  Automatically redirects you to the archived version of the forum
// @author       rtm516
// @match        https://forum.facepunch.com/*
// @grant        none
// @updateURL    https://github.com/rtm516/FPForumArchiveRedirect/raw/master/Facepunch%20Forum%20archive%20redirect.user.js
// ==/UserScript==

(function() {
    'use strict';

    window.location.replace("http://web.archive.org/web/" + window.location);
})();
