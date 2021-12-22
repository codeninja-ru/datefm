clean:
	rm -rf node_modules/
	rm -rf dist/

pkg := $(wildcard ../../udate*.tgz)

install: clean
	npm install $(pkg)

rollup:
	./node_modules/rollup/dist/bin/rollup --config rollup.config.js

test: install rollup
	ls -liah dist/bundle.*
