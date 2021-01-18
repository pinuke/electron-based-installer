const { execSync } = require( "child_process" )

const fs = require( 'fs' );
const util = require( 'util' );
const log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
const log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

console.log( "Nodejs installed. Running 'npm init @electron-based/installer' from install.js..." )

execSync( "npx @electron-based/installer" )
