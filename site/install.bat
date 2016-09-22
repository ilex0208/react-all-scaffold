@echo off
title PowerAnalysis Guide
@echo Starting install npm supported Wizard...
@echo ¡î......................tips..............................¡î
@echo ¡î                                                        ¡î
@echo ¡î select environment                                     ¡î
@echo ¡î                                                        ¡î
@echo ¡î 1.win i586(set win32-ia32-48_binding.node)             ¡î
@echo ¡î 2.win x64(set win32-x64-48_binding.node)               ¡î
@echo ¡î                                                        ¡î
@echo ¡î........................................................¡î
@echo.
set targetVendor=""
set switch=""
set /p switch=please choose:
if /I '%switch%'=='1' goto win32
if /I '%switch%'=='2' goto win64
goto end

:win32
set SASS_BINARY_PATH=%~dp0sass_binding\win32-ia32-48\binding.node
targetVendor="\win32-ia32-48\binding.node"
goto installs

:win64
set SASS_BINARY_PATH=%~dp0sass_binding\win32-x64-48\binding.node
targetVendor="\win32-x64-48\binding.node"
goto installs

:installs
npm install
@echo please create directory at¡®%~dp0node_modules\node-sass¡¯by filesname='vendor' then copy %targetVendor% to "vendor"
pause

:end


