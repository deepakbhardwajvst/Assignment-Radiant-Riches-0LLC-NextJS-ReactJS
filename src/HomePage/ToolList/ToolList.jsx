import "./ToolList.scss"
import Link from 'next/link';
const ToolButton = ({ name }) => {
    return (
        <button className="tool-button">
            <Link href="/">{name}</Link>
        </button>
    );
};

const ToolsList = () => {
    const tools = ['AWS Builder', 'Start Build', 'Build Supplies', 'Tooling', 'BlueHosting'];

    return (
        <div className="tools-list">
            {tools.map((tool, index) => (
                <ToolButton key={index} name={tool} />
            ))}
        </div>
    );
};

export default ToolsList;
