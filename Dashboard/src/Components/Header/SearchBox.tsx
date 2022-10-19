import React, { FunctionComponent, ReactElement } from 'react';
import SearchBox from 'CommonUI/src/Components/Header/SearchBox';
import Project from 'Model/Models/Project';

export interface ComponentProps {
    onChange: (search: string) => void;
    selectedProject: Project | null;
}

const Search: FunctionComponent<ComponentProps> = (
    props: ComponentProps
): ReactElement => {
    if (!props.selectedProject) {
        return <></>;
    }

    return <SearchBox key={2} onChange={props.onChange} />;
};

export default Search;
