@echo off
title Install Guide
@echo Starting install npm supported Wizard...
@echo ��......................tips..............................��
@echo ��                                                        ��
@echo �� ѡ��װpackage��ģ���λ��                            ��
@echo ��                                                        ��
@echo �� 1.npm install(��װ������)                              ��
@echo �� 2.npm install -g(��װ��ȫ��)                           ��
@echo ��                                                        ��
@echo ��........................................................��
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