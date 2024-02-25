import BreadcrumbBox from './BreadcrumbBox';
import "./Breadcrump.scss"
const Breadcrumb = () => {
    const breadcrumbItems = [
        {
            label: 'Home', link: '/', svgPath: (<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z" fill="#5C6874" />
            </svg>
            )
        },
        {
            label: 'Hosting for all', link: '/', svgPath: (<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z" fill="#5C6874" />
            </svg>
            )
        },
        {
            label: 'Hosting', link: '/', svgPath: (<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z" fill="#5C6874" />
            </svg>
            )
        },
        {
            label: 'Hosting6', link: '/', svgPath: (<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z" fill="#5C6874" />
            </svg>
            )
        },
        { label: 'Hosting5' },
    ];

    return (
        <div>
            <BreadcrumbBox items={breadcrumbItems} />

        </div>
    );
};

export default Breadcrumb;
