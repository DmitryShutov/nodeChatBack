const express = require('express');
const Rx = require('rx');
const router = express.Router();
const requests$ = new Rx.Subject();

