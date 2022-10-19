import Route from 'Common/Types/API/Route';
import React, { FunctionComponent, ReactElement } from 'react';
import Link from '../Link/Link';

export interface ComponentProps {
    title: string;
    route: Route;
}

const NavBarMenuItem: FunctionComponent<ComponentProps> = (
    props: ComponentProps
): ReactElement => {
    return (
        <Link className="dropdown-item" to={props.route}>
            {props.title}
        </Link>
    );
};

export default NavBarMenuItem;
