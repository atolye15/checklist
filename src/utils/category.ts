import { MarkdownRemarkFrontmatter, Maybe } from '../../graphql-types';

export type Category =
  | 'front-end'
  | 'back-end'
  | 'design'
  | 'project-management'
  | 'human-resources'
  | 'marketing'
  | 'general'
  | 'default';

export const getDescription = (title: string): string => {
  switch (title) {
    case 'Design':
      return 'These checklists ensure that we have standardized both visual design and User Experience design principals.';

    case 'Front-End':
      return 'Checklists that are mainly used by our Front-End developers.';

    case 'Back-End':
      return 'They do the hard work so our products stay steady. Server related, data driven, API based checklists.';

    case 'Project Management':
      return 'They manage the product team, they play a role as bridge between the designers and developers to well, everyone!';

    case 'Human Resources':
      return 'Ut placet, inquam tum dicere exorsus est et fortibus viris.';

    case 'Marketing':
      return 'Marketing checklists that we follow!';

    case 'General':
      return 'General checklists that we follow within the Atölye15. Could be anything!';

    default:
      return 'A checklist category!';
  }
};

export const getMostUsedTags = (
  nodes: Array<{ frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'tags'>> }>,
): string[] => {
  const items: Record<string, number> = {};

  nodes.forEach(node => {
    if (!node.frontmatter) {
      return;
    }

    (node.frontmatter.tags || []).forEach(tag => {
      const tagName = tag || '';
      if (items[tagName]) {
        items[tagName] += 1;
        return;
      }

      items[tagName] = 1;
    });
  });

  return Object.entries(items)
    .sort((i1, i2) => i2[1] - i1[1])
    .map(i => i[0])
    .slice(0, 4);
};
