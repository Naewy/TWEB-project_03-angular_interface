#!/bin/sh

echo "Building with grunt..."

grunt build >> /dev/null

result=$?

if [ $result -eq 0 ]
then
	printf "\033[0;32mBuild successful\n\033[0m"

	mkdir angular
	cp -r app/ angular
	cp index.html angular

	printf "\033[0;32mangular folder created\n\033[0m"
else
	printf "\033[0;31mBuild failed\n\033[0m"
fi



