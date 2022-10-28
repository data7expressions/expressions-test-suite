#!/usr/bin/env bash
SOURCE_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
VERSION=$(jq -r '.version' ./package.json )

# Only execute release from develop branch
if [ $SOURCE_BRANCH == 'main' ]; then
    # push to current branch
    git add .
    git commit -m "v${VERSION}"
    git tag "v${VERSION}" -m "new version"
    git push
else
    echo "Error: The release must be executed from the develop branch and not from the ${SOURCE_BRANCH} branch."
    exit -1
fi;
