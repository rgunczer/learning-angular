const opn = require('opn');

opn('http://localhost:4200', {app: ['chrome', '--incognito']});