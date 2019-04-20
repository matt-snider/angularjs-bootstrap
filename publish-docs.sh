#!/bin/bash

function important() {
    echo -e "\033[0;32m$1\033[0m";
}

# Build the project
important "Building the docs..."
npm run docs:build

# Switch to subdirectory, commit and push
important "Committing..."
cd dist/
git commit -am "Rebuilding docs (`date`)"
git push
