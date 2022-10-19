import React, { FunctionComponent, ReactElement } from 'react';

export interface ComponentProps {
    title: string;
    children?: Array<ReactElement> | ReactElement | undefined;
}

const Page: FunctionComponent<ComponentProps> = (
    props: ComponentProps
): ReactElement => {
    return (
        <div className="page-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">{props.title}</h4>
                        </div>
                    </div>
                </div>

                {props.children && props.children}
            </div>
        </div>
    );
};

export default Page;
