#!/bin/bash
# To use this script, create a worktree of the gh-pages branch into the dist/ directory.
# $ git worktree add dist gh-pages
# When in this directory, git will work with the gh-pages branch.

function important() {
    echo -e "\033[0;32m$1\033[0m";
}

# Build the project
important "Building the docs..."
npm run build

# Switch to subdirectory, commit and push
important "Committing..."
cd dist/
git commit -am "Rebuilding docs (`date`)"
git push
