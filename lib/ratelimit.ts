import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 s'),
  analytics: true,
})