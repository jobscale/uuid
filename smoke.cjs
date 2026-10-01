const main = async () => {
  const { createLogger } = await import('@jobscale/create-logger');
  const { uuid } = await import('./index.js');

  const logger = createLogger({ level: 'info' });
  logger.info({ uuid: uuid() });
};

main();
