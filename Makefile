SHELL=/bin/bash

clean:
	rm -rf ./build
	rm -rf ./coverage

build: clean
	./node_modules/typescript/bin/tsc --project tsconfig.json
	./node_modules/typescript/bin/tsc --project tsconfig.cjs.json

test: build
	node --experimental-vm-modules ./node_modules/jest/bin/jest.js --coverage 

index:
	node ./scripts/gen.js

locales:
	node ./scripts/gen_locales.js

gen: locales index

publish: gen build test
	cp ./src/package.udate.json ./build/package.json
	cp ./src/.npmignore ./build
	npm publish ./build --access=public --dry-run

pack: gen build test
	cp ./src/package.udate.json ./build/package.json
	cp ./src/.npmignore ./build
	npm pack ./build

