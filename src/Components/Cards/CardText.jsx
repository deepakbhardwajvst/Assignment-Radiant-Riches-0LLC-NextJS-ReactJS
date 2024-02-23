import './Cards.scss'
const CardText = ({
  heading,
  para,
  highlightHeading,
  highlightPara,
  discount,
  mainPara,
  whyWeLoveItData,
}) => {
  return (
    <div className="card-text">
      {heading && <div className="card-heading"><span className="card-heading-span">{heading}</span><span className="card-para">{para}</span></div>}
      {discount && <div className="discount">{discount}</div>}
      {highlightHeading && <div className="highlight-heading">{highlightHeading}</div>}
      {highlightPara && <div className="highlight-para">{highlightPara}</div>}
      {mainPara && (
        <div className="main-para">
          <ul>
            {mainPara.map((para, index) => (
              <li key={index} className="main-para-item">
                {para.num && <span className="main-para-num">{para.num}</span>} {para.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {whyWeLoveItData && (
        <div className="love-it-data">
          Why We Love It :
          <ul>
            {whyWeLoveItData.map((item, index) => (
              <li key={index} className="love-it-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z" fill="#EBF5FF" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z" fill="#0855A1" />
              </svg>
                <span>{item}</span></li>
            ))}
          </ul>
        </div>
      )}
      <a href="" className="Show-more">Show more</a>
    </div>
  );
}

export default CardText;
