import { container } from 'tsyringe';

// import mailConfig from '@config/mail';

import ICacheProvider from './models/ICacheProvider';

import RedisCacheProvider from './implementations/RedisCacheProvider';

const providers = {
  redis: RedisCacheProvider,
};

container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);
