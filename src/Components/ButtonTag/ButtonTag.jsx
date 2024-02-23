import "./ButtonTag.scss"

const ButtonTag = ({ name }) => {
    return (
        <button type="button" className='btn-view'>
            {name}
        </button>
    )
}

export default ButtonTag;