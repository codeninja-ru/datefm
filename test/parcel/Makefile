clean:
	rm -f package-lock.json
	rm -rf node_modules/
	rm -rf dist/

pkg := $(wildcard ../../udate*.tgz)

install: clean
	npm install $(pkg)

parcel:
	npx parcel build

test: install parcel
	ls -liah dist/index.*.js
