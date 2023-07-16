#!/bin/bash
HERE=`cd $(dirname $0) && pwd`

# Set up SSH keys copied from host. 
eval "$(ssh-agent -s)"
cp -v $HERE/id_rsa* $HOME/.ssh/
ssh-add $HOME/.ssh/id_rsa

# Install app dependencies.
npm install -g npm yarn