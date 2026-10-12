import { describe, expect, it } from 'vitest';
import { isExternal, withBase } from '@/lib/url';

describe('withBase', () => {
  it('joins paths at the domain root', () => {
    expect(withBase('/projects', '/')).toBe('/projects');
    expect(withBase('/', '/')).toBe('/');
  });

  it('joins paths under a sub-path regardless of trailing slashes', () => {
    expect(withBase('/projects', '/portfolio')).toBe('/portfolio/projects');
    expect(withBase('projects', '/portfolio/')).toBe('/portfolio/projects');
    expect(withBase('/#contact', '/portfolio')).toBe('/portfolio/#contact');
  });

  it('rejects absolute and dangerous URLs', () => {
    expect(() => withBase('https://evil.example', '/')).toThrow();
    expect(() => withBase('javascript:alert(1)', '/')).toThrow();
    expect(() => withBase('//evil.example', '/')).toThrow();
  });
});

describe('isExternal', () => {
  it('detects http(s) links', () => {
    expect(isExternal('https://github.com')).toBe(true);
    expect(isExternal('/projects')).toBe(false);
    expect(isExternal('#about')).toBe(false);
  });
});
