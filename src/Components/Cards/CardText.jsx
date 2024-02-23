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
    <div className="card-text">
      {heading && <div className="card-heading">Heading: {heading}</div>}
      {highlightHeading && <div className="highlight-heading">Highlight Heading: {highlightHeading}</div>}
      {highlightPara && <div className="highlight-para">Highlight Paragraph: {highlightPara}</div>}
      {discount && <div className="discount">Discount: {discount}</div>}
      {mainPara && (
        <div className="main-para">
          Main Paragraph:
          <ul>
            {mainPara.map((para, index) => (
              <li key={index} className="main-para-item">
                {para.num && <span className="main-para-num">Num: {para.num}</span>} {para.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {whyWeLoveItData && (
        <div className="love-it-data">
          Why We Love It Data:
          <ul>
            {whyWeLoveItData.map((item, index) => (
              <li key={index} className="love-it-item">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CardText;
