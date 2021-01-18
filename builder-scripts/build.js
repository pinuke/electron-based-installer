const process = require( 'process' );

var args = process.argv.slice(2);
var platforms = []
var allowable_platforms = ( function (){
  let node_allowable_platforms = [
    "darwin",
    "linux",
    "win32",

    "aix",
    "freebsd",
    "openbsd",
    "sunos"
  ]

  let electron_allowable_platforms = [
    "darwin",
    "linux",
    "win32"
  ]
  let n = node_allowable_platforms,
      e = electron_allowable_platforms

  return n.filter( platform => e.includes( platform ) )
})()

if( !args.length )
  args.push( process.platform )

platforms = args.filter( argument => allowable_platforms.includes( platform ) )

if( platforms.length === 0 )
  platforms = [ "darwin", "linux", "win32" ]

if( platforms.includes( "darwin" ) ){

}
if( platforms.includes( "linux" ) ){

}
if( platforms.includes( "win32" ) ){

}
