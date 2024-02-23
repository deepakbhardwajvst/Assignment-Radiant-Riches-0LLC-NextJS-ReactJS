
import React from 'react';

const BreadcrumbItem = ({ label, link, svg }) => {
    return (
        <li className="breadcrumb-item font-size1">
            {link ? <a href={link}>{label} <span>{svg}</span></a> : label}
        </li>
    );
};

const BreadcrumbBox = ({ items }) => {
    return (
        <nav className="breadcrumb">
            <ul className="breadcrumb-list">
                {items.map((item, index) => (
                    <BreadcrumbItem key={index} label={item.label} link={item.link} svg={item.svgPath} />
                ))}
            </ul>
        </nav>
    );
};

export default BreadcrumbBox;
