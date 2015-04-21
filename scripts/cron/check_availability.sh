#!/bin/sh

LOCAL_PATH=/Users/soniafabre/Projects/workspace/git/react-ikea-alerts-app

mongo localhost:27017/react-ikea-alerts --quiet $LOCAL_PATH/scripts/mongo/find_alerts.js | \
	awk -F\t '{system("curl -S -s \x27http://www.ikea.com/sg/en/iows/catalog/availability/"$2"\x27 | egrep -o --line-buffered \x27<availableStock>[^ ,]\+</availableStock>\x27 | mail -s \x27Ikea availability "$2"\x27 "$1)}'
	 