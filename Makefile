SHELL=/bin/bash

# TODO replace pathes with variables

clean:
	rm -rf ./build
	rm -rf ./coverage
	make -C ./test/node_cjs/ clean
	make -C ./test/node_esm/ clean
	make -C ./test/webpack/ clean
	make -C ./test/rollup/ clean
	make -C ./test/parcel/ clean

build: clean
	./node_modules/typescript/bin/tsc --project tsconfig.json
	./node_modules/typescript/bin/tsc --project tsconfig.cjs.json
	echo '{"type":"commonjs"}' > ./build/cjs/package.json

test: build
	node --experimental-vm-modules ./node_modules/jest/bin/jest.js --coverage 

package:
	cp ./src/package.udate.json ./build/package.json
	cp ./src/.npmignore ./build
	node ./scripts/fix.js
	node ./scripts/commonjs.js
	node ./scripts/update_package.js

gen:
	node ./scripts/gen_locales.js
	node ./scripts/gen.js

publish: gen build package test
	npm publish ./build --access=public --dry-run

pack: gen build package test
	npm pack ./build
	make -C ./test/node_cjs/ test
	make -C ./test/node_esm/ test
	make -C ./test/webpack/ test
	make -C ./test/rollup/ test
	make -C ./test/parcel/ test

typedoc := ./node_modules/typedoc/bin/typedoc

doc:
	$(typedoc) --out dist/docs ./src
