import { CmsberitaModule } from './cmsberita.module';

describe('CmsberitaModule', () => {
  let cmsberitaModule: CmsberitaModule;

  beforeEach(() => {
    cmsberitaModule = new CmsberitaModule();
  });

  it('should create an instance', () => {
    expect(cmsberitaModule).toBeTruthy();
  });
});
