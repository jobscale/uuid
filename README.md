# @jobscale/uuid

## Installation

```
npm i @jobscale/uuid
```

## Examples

ES Module

```javascript
import { createLogger } from '@jobscale/create-logger';
import { uuid } from '@jobscale/uuid';

const logger = createLogger({ level: 'info' });
logger.info({ uuid: uuid() });
```

CommonJs

```javascript
const main = async () => {
  const { createLogger } = await import('@jobscale/create-logger');
  const { uuid } = await import('@jobscale/uuid');

  const logger = createLogger({ level: 'info' });
  logger.info({ uuid: uuid() });
};

main();
```
