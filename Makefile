SHELL=/bin/bash

clean:
	rm -rf ./build
	rm -rf ./coverage

build: clean
	./node_modules/typescript/bin/tsc

test: build
	node --experimental-vm-modules ./node_modules/jest/bin/jest.js --coverage 

index:
	node ./scripts/gen.js

locales:
	node ./scripts/gen_locales.js

gen: locales index

publish: gen build test
	cp ./src/package-datefm.json ./build/package.json
	cp ./src/.npmignore ./build
	npm publish ./build --access=public #--dry-run
