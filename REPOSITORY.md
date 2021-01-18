# Clone repo and change these values as applicable (also follow instructions)

These instructions are intended as a guide. If you desire to do things differently, have at it.

## `main.js` script

This is the main script for your electron app. IT MUST HAVE THE SHEBANG LINE IF YOU INTEND TO USE IT WITH `npx/npm-init`/`setup.exe`/`setup.dmg`/`setup.deb` TO START THE SCRIPT IN ELECTRON REGARDLESS OF PLATFORM (YES, THAT INCLUDES WINDOWS)!!!

- __shebang__: `#!/usr/bin/env electron`

## `bootstrap` folder

Items inside the bootstrap folder will get the installer running on various platforms using platform-specific code. Make these changes to get the installer to work on these platforms. Remove any of the following folders for platforms that do not apply to your installer

### - `bootstrapper.js` script -

This script is the second half of the bootstrapper. The first half installs nodejs via platform-specific code. This script runs after nodejs is installed and starts electron via `npx`

##### Line 15

- __`execSync`__: command line call to either `npx <initializer>` or `npm init <initializer>`

### - `windows` folders -

These items are used for making a `setup.exe` executable for 32-bit and 64-bit windows

#### -- `plugins` directory --

contains the necessary plugins for compiling `nodejs.nsi`, such as INetC

#### -- `nodejs.nsi` nsis script --

This is a script written for the NSIS compiler. It is the core of the Windows bootstrapper, and makes the `setup.exe` file.

To use, compile nodejs.nsi with the makensis command to compile the installer

##### Lines 8 - 12

- __`Name`__: name of the installer
- __`OutFile`__: filename of the installer
- __`InstallDir`__: bootstrapper install directory - doesn't have to be same as ultimate installation directory, just a place to get the bootstrapper to run

##### Line 50

- (`inetc::get [url]`) __url__: url of the most up to date nodejs windows installer

##### Line 72

- (`inetc::get [url]`) __url__: url of the 'install.js' bootstrapper script
