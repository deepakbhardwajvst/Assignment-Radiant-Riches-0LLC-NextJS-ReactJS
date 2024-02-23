import React from 'react';

const CardText = ({
  heading,
  highlightHeading,
  highlightPara,
  discount,
  mainPara,
  whyWeLoveItData,
}) => {
  return (
    <div>
      {heading && <div>Heading: {heading}</div>}
      {highlightHeading && <div>Highlight Heading: {highlightHeading}</div>}
      {highlightPara && <div>Highlight Paragraph: {highlightPara}</div>}
      {discount && <div>Discount: {discount}</div>}
      {mainPara && (
        <div>
          Main Paragraph:
          <ul>
            {mainPara.map((para, index) => (
              <li key={index}>
                {para.num && <span>Num: {para.num}</span>} {para.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {whyWeLoveItData && (
        <div>
          Why We Love It Data:
          <ul>
            {whyWeLoveItData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CardText;
