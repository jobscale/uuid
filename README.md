# @jobscale/uuid

## Installation

```
npm i @jobscale/uuid
```

## Examples

```javascript
import { Logger } from '@jobscale/logger';
import { uuid } from '@jobscale/uuid';
// const { uuid } = await import('@jobscale/uuid); // CommonJs

const logger = new Logger({ logLevel: 'info' });
logger.info({ uuid: uuid() });
```
