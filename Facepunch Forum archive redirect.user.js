// ==UserScript==
// @name         Facepunch Forum archive redirect
// @namespace    https://rtm516.co.uk/
// @version      1.0
// @description  Automatically redirects you to the archived version of the forum
// @author       rtm516
// @match        https://forum.facepunch.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.replace("http://web.archive.org/web/" + window.location);
})();