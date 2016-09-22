import config from '../config';
import server from '../server/main';
import _debug from 'debug';

const debug = _debug('app:bin:server');
const port = config.server_port;
const host = config.server_host;

server.listen(port);
debug(`项目运行在 http://${host}:${port}.`);
debug(`如果你采用默认的配置文件，可通过 localhost:${port} 访问`);
