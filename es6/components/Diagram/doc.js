import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export default (function (Diagram) {
  var DocumentedDiagram = describe(Diagram).availableAt(getAvailableAtBadge('Diagram')).description('Graphical lines between DOM elements.\n      Diagram is meant to be used with Stack.').usage("import { Diagram } from 'grommet';\n<Diagram />");

  DocumentedDiagram.propTypes = {
    connections: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      fromTarget: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
      label: PropTypes.string, // for accessibility
      offset: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
      thickness: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
      toTarget: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
      type: PropTypes.oneOf(['direct', 'curved', 'rectilinear'])
    })).description('Array of objects describing the connections.\n      The \'fromTarget\' and \'toTarget\' may be either DOM element ids or\n      React references.\n      \'offset\' can be used to shift a bit to reduce the amount of overlap\n      with other connection lines to make the lines easier to distinguish.').isRequired
  };

  return DocumentedDiagram;
});