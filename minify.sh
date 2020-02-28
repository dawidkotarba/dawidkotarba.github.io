#!/usr/bin/env bash

echo "Processing CSS..."

CSS_FOLDER=css
yui-compressor ${CSS_FOLDER}/fonts.css > ${CSS_FOLDER}/fonts.min.css
yui-compressor ${CSS_FOLDER}/ie8.css > ${CSS_FOLDER}/ie8.min.css
yui-compressor ${CSS_FOLDER}/style.css > ${CSS_FOLDER}/style.min.css
