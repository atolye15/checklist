import React from 'react';
import CheckList from './Checklist';
import CheckListItem from './ChecklistItem';

const Wrapper = (storyFn: any) => (
  <div style={{ padding: 8, backgroundColor: '#101013' }}>{storyFn()}</div>
);

export default {
  title: 'CheckList',
  decorators: [Wrapper],
};

export const defaultView = () => (
  <CheckList>
    <CheckListItem
      id="checklist-1"
      checked
      onClick={() => console.log('clicked!')}
      title="Lorem ipsum"
      description="Probabo, inquit, sic agam, ut earum motus et impetus quo voluptas sit, a se ipsam voluptatem, quia non recusandae itaque turbent, ut ita ruant itaque aiunt hanc quasi naturalem atque in gravissimo bello animadversionis metu degendae praesidia firmissima filium morte multavit si sine metu contineret."
    />
    <CheckListItem id="checklist-2" title="Lorem ipsum" />
  </CheckList>
);
