#!/usr/bin/env bash
watchman watch-del-all && rm -fr $TMPDIR/react-* && rm -rf node_modules/ && npm cache clean && npm install && npm start -- --reset-cache
