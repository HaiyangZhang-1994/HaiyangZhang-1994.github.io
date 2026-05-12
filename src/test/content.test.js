import { describe, expect, test } from 'vitest';
import { siteContent } from '../data/siteContent';

describe('siteContent', () => {
  test('includes the five required homepage sections', () => {
    expect(siteContent.hero.name).toBeTruthy();
    expect(siteContent.identitySignals).toHaveLength(5);
    expect(siteContent.experienceChapters).toHaveLength(3);
    expect(siteContent.skillGroups).toHaveLength(4);
    expect(siteContent.contact.resumeHref).toBe('/resume.pdf');
  });
});
