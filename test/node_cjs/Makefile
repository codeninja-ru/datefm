clean:
	rm -f package-lock.json
	rm -rf node_modules/

pkg := $(wildcard ../../udate*.tgz)

install: clean
	npm install $(pkg)

test: install
	node index.js
