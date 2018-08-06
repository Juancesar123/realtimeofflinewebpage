import { ComponentModuleModule } from './component-module.module';

describe('ComponentModuleModule', () => {
  let componentModuleModule: ComponentModuleModule;

  beforeEach(() => {
    componentModuleModule = new ComponentModuleModule();
  });

  it('should create an instance', () => {
    expect(componentModuleModule).toBeTruthy();
  });
});
