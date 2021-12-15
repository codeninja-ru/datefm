SHELL=/bin/bash

clean:
	rm -rf ./build
	rm -rf ./coverage

build: clean
	./node_modules/typescript/bin/tsc --project tsconfig.json
	./node_modules/typescript/bin/tsc --project tsconfig.cjs.json
	echo '{"type":"commonjs"}' > ./build/cjs/package.json

test: build
	node --experimental-vm-modules ./node_modules/jest/bin/jest.js --coverage 

index:
	node ./scripts/gen.js

locales:
	node ./scripts/gen_locales.js

fix:
	node ./scripts/fix.js

commonjs:
	node ./scripts/commonjs.js

gen: locales index

build_npm_files:
	cp ./src/package.udate.json ./build/package.json
	cp ./src/.npmignore ./build

publish: gen build fix commonjs test buld_npm_files
	npm publish ./build --access=public --dry-run

pack: gen build fix commonjs test build_npm_files
	npm pack ./build
