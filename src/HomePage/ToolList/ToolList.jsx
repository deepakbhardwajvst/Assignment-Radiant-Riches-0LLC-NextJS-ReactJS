import "./ToolList.scss"
const ToolButton = ({ name }) => {
    return (
        <button className="tool-button">
            {name}
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
