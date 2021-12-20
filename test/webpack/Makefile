clean:
	rm -f package-lock.json
	rm -rf node_modules/
	rm -rf dist/

pkg := $(wildcard ../../udate*.tgz)

install: clean
	npm install $(pkg)

webpack:
	./node_modules/webpack/bin/webpack.js --config webpack.config.js

test: install webpack
	ls -liah dist/main.js
