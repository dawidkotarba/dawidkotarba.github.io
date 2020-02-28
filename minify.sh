#!/usr/bin/env bash

echo "Processing CSS..."

CSS_FOLDER=css
yui-compressor ${CSS_FOLDER}/fonts.css > ${CSS_FOLDER}/fonts.min.css
yui-compressor ${CSS_FOLDER}/ie8.css > ${CSS_FOLDER}/ie8.min.css
yui-compressor ${CSS_FOLDER}/style.css > ${CSS_FOLDER}/style.min.css

echo "Processing JS..."
JS_FOLDER=js
yui-compressor ${JS_FOLDER}/global.js > ${JS_FOLDER}/global.min.js
yui-compressor ${JS_FOLDER}/html5.js > ${JS_FOLDER}/html5.min.js
yui-compressor ${JS_FOLDER}/jquery.scrollTo.js > ${JS_FOLDER}/jquery.scrollTo.min.js