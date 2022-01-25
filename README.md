# @jobscale/uuid

## Installation

```
npm i @jobscale/uuid
```

## Examples

```javascript
const { Logger } = require('@jobscale/logger');
const { uuid } = require('@jobscale/uuid');

const logger = new Logger({ logLevel: 'info' });
logger.info({ uuid: uuid() });
```
