This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
import React from 'react';
import ButtonTag from '../ButtonTag/ButtonTag';
import './Cards.scss';

const StarRating = ({ rating }) => {
const filledStars = Math.floor(rating);
const decimalPart = rating - filledStars;

    const renderStars = () => {
        const stars = [];
        // Add filled stars
        for (let i = 0; i < filledStars; i++) {
            stars.push(<span key={i} className="star-filled filled">&#9733;</span>);
        }
        // Add half-filled star if there is a decimal part
        if (decimalPart >= 0.5) {
            stars.push(<span key="half" className="star-half filled">&#9733;</span>);
        }
        // Add empty stars to reach a total of 5 stars
        const remainingStars = 5 - filledStars - (decimalPart >= 0.5 ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star-empty">&#9733;</span>);
        }
        return stars;
    };

    return <div className="star-rating">{renderStars()}</div>;

};

const CardRating = ({ rating, ratingTag, star }) => {
return (
<div className="card-rating">
<div className="rating-box">
<div className="rating">{rating}</div>
<div className="ratingTag">{ratingTag}</div>
<StarRating rating={star} />
</div>
<ButtonTag name="view" />
</div>
);
};

export default CardRating;
