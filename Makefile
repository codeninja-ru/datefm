SHELL=/bin/bash

clean:
	rm -rf ./build

build: clean
	./node_modules/typescript/bin/tsc

test: build
	node --experimental-vm-module ./node_modules/jest/bin/jest.js

index:
	node ./tools/gen.js

locales:
	node ./tools/gen_locales.js

gen: locales index
