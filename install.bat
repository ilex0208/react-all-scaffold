@echo off
title Install Guide
@echo Starting install npm supported Wizard...
@echo ☆......................tips..............................☆
@echo ☆                                                        ☆
@echo ☆ 选择安装package中模块的位置                            ☆
@echo ☆                                                        ☆
@echo ☆ 1.npm install(安装到本地)                              ☆
@echo ☆ 2.npm install -g(安装到全局)                           ☆
@echo ☆                                                        ☆
@echo ☆........................................................☆
@echo.
set switch=""
set /p switch=please choose:
if /I '%switch%'=='1' goto nativePos
if /I '%switch%'=='2' goto globalPos
goto end

:nativePos
npm install
goto end

:globalPos
npm install -g
goto end
pause

:end