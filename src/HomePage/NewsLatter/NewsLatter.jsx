import "./NewsLatter.scss";
import Link from 'next/link';

const NewsLatter = () => {
    return (
        <div className="news-latter">
            <h5 className="nl-heading">Sign up and get exclusive special deals</h5>
            <div className="nl-box">
                <input type="email" name="email" id="email" autoComplete="off" />
                <button type="submit"><Link href="/">Sign Up</Link></button>
            </div>
        </div>
    );
};

export default NewsLatter;
