#!/bin/bash

envFile='./.env'
npmrcFile='./.npmrc'

# Initialise the secret environment variable
source $envFile

# Remove .npmrc file if present
if [[ -e $npmrcFile ]]; then
  rm -f $npmrcFile
fi

# Create .npmrc file
touch $npmrcFile
echo "registry=https://npm.pkg.github.com/hippo-health" >> $npmrcFile
echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> $npmrcFile
