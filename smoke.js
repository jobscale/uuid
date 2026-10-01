import { createLogger } from '@jobscale/create-logger';
import { uuid } from './index.js';

const logger = createLogger({ level: 'info' });
logger.info({ uuid: uuid() });
