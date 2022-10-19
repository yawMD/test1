import React, {
    FunctionComponent,
    ReactElement,
    useState,
    useEffect,
} from 'react';
import ProjectPicker from 'CommonUI/src/Components/Header/ProjectPicker/ProjectPicker';
import { IconProp } from 'CommonUI/src/Components/Icon/Icon';
import Project from 'Model/Models/Project';
import ModelFormModal from 'CommonUI/src/Components/ModelFormModal/ModelFormModal';
import FormFieldSchemaType from 'CommonUI/src/Components/Forms/Types/FormFieldSchemaType';
import { FormType } from 'CommonUI/src/Components/Forms/ModelForm';
import ProjectUtil from 'CommonUI/src/Utils/Project';

export interface ComponentProps {
    projects: Array<Project>;
    onProjectSelected: (project: Project) => void;
    showProjectModal: boolean;
    onProjectModalClose: () => void;
}

const DashboardProjectPicker: FunctionComponent<ComponentProps> = (
    props: ComponentProps
): ReactElement => {
    const [showModel, setShowModel] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    useEffect(() => {
        if (props.showProjectModal) {
            setShowModel(true);
        }
    }, [props.showProjectModal]);

    useEffect(() => {
        const currentProject: Project | null = ProjectUtil.getCurrentProject();
        setSelectedProject(currentProject);
        if (currentProject && props.onProjectSelected) {
            props.onProjectSelected(currentProject);
        }
    }, []);

    useEffect(() => {
        if (selectedProject) {
            ProjectUtil.setCurrentProject(selectedProject);
            if (props.onProjectSelected) {
                props.onProjectSelected(selectedProject);
            }
        }
    }, [selectedProject]);

    useEffect(() => {
        if (
            props.projects &&
            props.projects.length > 0 &&
            !selectedProject &&
            props.projects[0]
        ) {
            const currentProject: Project | null =
                ProjectUtil.getCurrentProject();

            if (!currentProject) {
                setSelectedProject(props.projects[0]);
            } else if (
                props.projects.filter((project: Project) => {
                    return project._id === currentProject._id;
                }).length > 0
            ) {
                setSelectedProject(
                    props.projects.filter((project: Project) => {
                        return project._id === currentProject._id;
                    })[0] as Project
                );
            } else {
                setSelectedProject(props.projects[0]);
            }
        }
    }, [props.projects]);

    return (
        <>
            {props.projects.length !== 0 && (
                <ProjectPicker
                    selectedProjectName={selectedProject?.name || ''}
                    selectedProjectIcon={IconProp.Folder}
                    projects={props.projects}
                    onCreateProjectButtonClicked={() => {
                        setShowModel(true);
                        props.onProjectModalClose();
                    }}
                    onProjectSelected={(project: Project) => {
                        setSelectedProject(project);
                    }}
                />
            )}
            {showModel ? (
                <ModelFormModal<Project>
                    modelType={Project}
                    title="Create New Project"
                    onClose={() => {
                        setShowModel(false);
                        props.onProjectModalClose();
                    }}
                    submitButtonText="Create Project"
                    onSuccess={(project: Project) => {
                        setSelectedProject(project);
                        if (project && props.onProjectSelected) {
                            props.onProjectSelected(project);
                        }
                        setShowModel(false);
                        props.onProjectModalClose();
                    }}
                    formProps={{
                        saveRequestOptions: {
                            isMultiTenantRequest: true, // because this is a tenant request, we do not have to incclude the header in the reqeuest
                        },
                        model: new Project(),
                        id: 'create-project-from',
                        fields: [
                            {
                                field: {
                                    name: true,
                                },
                                validation: {
                                    minLength: 6,
                                },
                                fieldType: FormFieldSchemaType.Text,
                                placeholder: 'Acme',
                                title: 'Project Name',
                                required: true,
                            },
                        ],
                        formType: FormType.Create,
                    }}
                />
            ) : (
                <></>
            )}
        </>
    );
};

export default DashboardProjectPicker;
