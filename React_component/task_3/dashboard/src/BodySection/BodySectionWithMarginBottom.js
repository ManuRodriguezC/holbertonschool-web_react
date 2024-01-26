import BodySection from "./BodySection";
import './BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types';

export default function BodySectionWithMarginBottom({ props }) {
    return <div className="bodySectionWithMargin">
                <BodySection {...props} />
            </div>
}

import PropTypes from 'prop-types';

BodySectionWithMarginBottom.propTypes = {
 title: PropTypes.string,
};
