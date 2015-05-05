#! /bin/bash

# Update git submodules
git submodule init
git submodule update

# If already in a VIRTUAL_ENV assume the person knows what they are doing,
# otherwise set up a python virtualenv with all the needed requirements.
if [ x$VIRTUAL_ENV == x"" ]; then
  cd tools/python
  source setup.sh
  cd ../..
fi

# Comment out the (function() {} ) wrapper
sed -e'17s-^-//-' -e'$s-^-//-' smil-in-javascript.js > smil-in-javascript-4lint.js

gjslint --summary --nojsdoc smil-in-javascript-4lint.js test/harness.js test/testcases/*.js test/unit-tests/*.js && rm smil-in-javascript-4lint.js
exit $?
