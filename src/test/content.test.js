import { describe, expect, test } from 'vitest';
import { siteContent } from '../data/siteContent';

describe('siteContent', () => {
  test('includes the expanded resume content sections', () => {
    expect(siteContent.hero.name).toBeTruthy();
    expect(siteContent.identitySignals).toHaveLength(8);
    expect(siteContent.summaryParagraphs).toHaveLength(2);
    expect(siteContent.experienceChapters).toHaveLength(3);
    expect(siteContent.skillGroups).toHaveLength(13);
    expect(siteContent.education).toHaveLength(2);
    expect(siteContent.contact.resumeHref).toBe('/resume.pdf');
  });
});
