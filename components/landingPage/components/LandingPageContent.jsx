import { Button, Typography } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const { Paragraph, Title } = Typography;

/**
 * Function used to generate section layout content for landing page
 * @function
 * @param {String} buttonLink- the link that the button leads to
 * @param {String} buttonText- the text on the button
 * @param {Boolean} columnSection - if true, the section will be stacked
 * @param {Boolean} isButtonPresent- If true, a button is shown on that section
 * @param {Boolean} isImagePresent - if true, the image is shown
 * @param {String} imageLink- the link to an image in the section
 * @param {Number} level - The Number from 1-5 representing the header level h1-h5
 *@param {String} paragraphText- The Text of that section
 * @param {Boolean} reverseSection - if true, the image and section position is swapped
 * @param {String} title- The Title of that Section
 * @return {Object} The landing page content component which is used to populate the landing page
 */

export default function LandingPageContent(props) {
    const {
        level,
        title,
        paragraphText,
        isButtonPresent,
        buttonText,
        buttonLink,
        imageLink,
        isImagePresent,
        reverseSection,
        columnSection,
    } = props;

    let className;

    // this helps to structure the section, the section can be normalize, reversed or columnized
    if (!reverseSection && !columnSection) {
        className = 'LandingPage_hero';
    } else if (reverseSection && !columnSection) {
        className = 'LandingPage_hero reverse';
    } else if (columnSection) {
        className = 'LandingPage_hero column-section';
    }

    return (
        <section className={className}>
            <div className="LandingPage_content__text">
                <Title level={level}>{title}</Title>
                <Paragraph>{paragraphText}</Paragraph>
                {/* displays button in a section */}
                {
                    isButtonPresent ? (
                        <Button className="LandingPage_button" type="primary">
                            <Link href={buttonLink}>
                                <a>{buttonText}</a>
                            </Link>
                        </Button>
                    ) : null
                }
            </div>

            {/* displays image in a section */}
            {isImagePresent ? <img src={imageLink} alt={title} /> : null}
        </section>
    );
}
LandingPageContent.propTypes = {
    buttonLink: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    columnSection: PropTypes.bool.isRequired,
    imageLink: PropTypes.string.isRequired,
    isButtonPresent: PropTypes.bool.isRequired,
    isImagePresent: PropTypes.bool.isRequired,
    level: PropTypes.number.isRequired,
    paragraphText: PropTypes.string.isRequired,
    reverseSection: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
};
