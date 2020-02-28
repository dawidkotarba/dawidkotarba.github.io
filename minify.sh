#!/usr/bin/env bash

function minifyCss(){
    FOLDER=css
    for var in "$@"
    do
        yui-compressor ${FOLDER}/${var}.css > ${FOLDER}/${var}.min.css
        echo "Processing $var.css"
    done
}

function minifyJs(){
    FOLDER=js
    for var in "$@"
    do
        yui-compressor ${FOLDER}/${var}.js > ${FOLDER}/${var}.min.js
        echo "Processing $var.js"
    done
}

echo "Processing CSS..."
minifyCss fonts ie8 style custom
printf "\n"
echo "Processing JS..."
minifyJs global html5 jquery.scrollTo custom ga