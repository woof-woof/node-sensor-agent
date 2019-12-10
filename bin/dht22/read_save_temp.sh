#!/bin/bash
BASEDIR=$(dirname "$0")
cd $BASEDIR
{ ./read-dht22 ; date '+%Y-%m-%d %H:%M:%S' ; } > temp
