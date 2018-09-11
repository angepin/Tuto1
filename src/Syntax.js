"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var watch = require('tsc-watch/client');
module.exports = function () { return ({
    presets: [
        require("@babel/preset-stage-2"),
    ],
    plugins: [
        [require("@babel/plugin-proposal-class-properties"), { loose: true }],
        require("@babel/plugin-proposal-object-rest-spread"),
    ]
}); };
function lieu(_a) {
    var ville = _a.ville, pays = _a.pays;
    return ville + " en " + pays;
}
function whois(_a) {
    var DisplayFirstName = _a.DisplayFirstName, DisplayLastName = _a.DisplayLastName;
    return DisplayFirstName + " " + DisplayLastName;
}
function creeDate() {
    var frLocale = require('date-fns/locale/fr');
    var result = date_fns_1.format(new Date(), 'D MMMM YYYY', { locale: frLocale });
    return result;
}
var data = {
    DisplayFirstName: "Elxxffff",
    DisplayLastName: "Chapo",
    ville: "Niort",
    pays: "France"
};
var patch = {
    ville: "Porto",
    pays: "Portugal"
};
var dataPatched = __assign({}, data, patch);
function bonjour(coordonnees) {
    var partie1 = "Bonjour " + whois(coordonnees);
    var partie2 = "nous somme le " + creeDate();
    var partie3 = "et vous êtes actuellement à " + lieu(coordonnees);
    return partie1 + " " + partie2 + " " + partie3;
}
console.log(bonjour(dataPatched));
