import React, { FunctionComponent, ReactElement } from 'react';

export interface ComponentProps {
    children: ReactElement | Array<ReactElement>;
    rightContent?: undefined | ReactElement | Array<ReactElement>;
}

const Navbar: FunctionComponent<ComponentProps> = (
    props: ComponentProps
): ReactElement => {
    return (
        <React.Fragment>
            <div className="topnav active">
                <div className="container-fluid active">
                    <nav
                        className="navbar navbar-light navbar-expand-lg topnav-menu active"
                        id="navigation"
                    >
                        <div
                            id="topnav-menu-content"
                            className="navbar-collapse collapse active"
                        >
                            <ul className="navbar-nav active">
                                {props.children}
                            </ul>
                        </div>
                        {props.rightContent && (
                            <div
                                style={{ justifyContent: 'right' }}
                                id="topnav-menu-content"
                                className="navbar-collapse collapse active"
                            >
                                <ul className="navbar-nav active">
                                    {props.rightContent}
                                </ul>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
