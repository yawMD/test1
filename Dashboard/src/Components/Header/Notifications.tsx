import React, { FunctionComponent, ReactElement } from 'react';
import HeaderIconDropdownButton from 'CommonUI/src/Components/Header/HeaderIconDropdownButton';
import Notifications from 'CommonUI/src/Components/Header/Notifications/Notifications';
import NotificationItem from 'CommonUI/src/Components/Header/Notifications/NotificationItem';
import { IconProp } from 'CommonUI/src/Components/Icon/Icon';

const DashboardHeader: FunctionComponent = (): ReactElement => {
    return (
        <HeaderIconDropdownButton icon={IconProp.Notification} badge={4}>
            <Notifications>
                <NotificationItem
                    title="Sample Title"
                    description="Sample Description"
                    createdAt={new Date()}
                    icon={IconProp.Home}
                />
            </Notifications>
        </HeaderIconDropdownButton>
    );
};

export default DashboardHeader;
