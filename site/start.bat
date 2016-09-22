@echo off
title IlexReactAll Guide
@echo Starting front end initialization Wizard...
@echo ��......................tips..............................��
@echo ��                                                        ��
@echo �� front execute environment,please choose one            ��
@echo ��                                                        ��
@echo �� 1.Execution in a node environment(npm run node)        ��
@echo �� 2.Enable default NPM, server is webpack-dev-server     ��
@echo �� 3.Run Mini Server with node(npm run miniServer)        ��
@echo �� 4.Empty compile directory dist(npm run clean)          ��
@echo �� 5.Complied with webpack -p(npm run build)              ��
@echo �� 6.Complied with babel-node(npm run compile)            ��
@echo ��                                                        ��
@echo ��........................................................��
@echo.
set switch=""
set /p switch=please choose:
if /I '%switch%'=='1' goto npm_run_node
if /I '%switch%'=='2' goto npm_start
if /I '%switch%'=='3' goto npm_run_miniServer
if /I '%switch%'=='4' goto npm_run_clean
if /I '%switch%'=='5' goto npm_run_build
if /I '%switch%'=='6' goto npm_run_compile
goto end

:npm_run_node
npm run node
goto end

:npm_start
npm start
goto end

:npm_run_miniServer
npm run miniServer
goto end

:npm_run_clean
npm run clean
goto end

:npm_run_build
npm run build
goto end

:npm_run_compile
npm run compile
pause

:end
