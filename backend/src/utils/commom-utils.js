"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomStringGenerator = randomStringGenerator;
function randomStringGenerator() {
    const char1 = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const char2 = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const char3 = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    return char1 + char2 + char3;
}
