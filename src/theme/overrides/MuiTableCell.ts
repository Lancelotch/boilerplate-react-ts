import palette from '../palette';
import typography from '../typography';

export default {
  root: {
    ...typography.body1,
    borderBottom: `1px solid ${palette.divider}`
  },
  stickyHeader: {
    backgroundColor: palette.primary.light,
    zIndex: 1
  }
};
