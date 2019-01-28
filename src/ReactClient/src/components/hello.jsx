"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
exports.Hello = function (props) { return <h1>Hello from {props.compiler} and {props.framework}!</h1>; };
