// eslint-disable-next-line import/prefer-default-export
export const getDescription = (title: string): string => {
  switch (title) {
    case 'Design':
      return 'These checklists ensure that we have standardized both visual design and User Experience design principals. Front-End Development';

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
