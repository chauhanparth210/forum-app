import { config } from 'dotenv';

config({ path: '.env.local' });

export const JWTConfig = {
  SECRET: process.env.SECRET,
  EXPIRY_TIME: process.env.EXPIRY_TIME,
};
