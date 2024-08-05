import { generateSpec } from 'tsoa';
import { compilerOptions, specOptions } from '@/openapi/config';

(async () => {
  await generateSpec(specOptions, compilerOptions);
})();