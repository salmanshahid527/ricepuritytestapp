import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// No incremental-cache override: every page is prerendered at build time. The opt-in score
// statistics are not part of the prerendered HTML: components/organisms/LiveStats.tsx loads
// them in the browser from /api/scores, so no R2 or KV cache is needed.
export default defineCloudflareConfig({});
