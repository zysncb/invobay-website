import type { APIRoute } from 'astro';
import { ALLOW_INDEXING } from '../config';

export const GET: APIRoute = () =>
  new Response(ALLOW_INDEXING ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain' } });
