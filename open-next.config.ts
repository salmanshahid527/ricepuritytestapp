import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// No incremental-cache override: every page is prerendered at build time, and the one
// revalidating page (average score by age) only changes when the opt-in stats store is on,
// which it is not today. Add an R2 or KV cache override here if that feature is switched on.
export default defineCloudflareConfig({});
