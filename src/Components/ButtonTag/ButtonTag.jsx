import "./ButtonTag.scss"
import Link from 'next/link';
const ButtonTag = ({ name }) => {
    return (
        <button type="button" className='btn-view'>
            <Link href="/">
                {name}
            </Link>
        </button>
    )
}

export default ButtonTag;