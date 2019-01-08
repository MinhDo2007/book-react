import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ notifications, handleReceivedMessage }) => {
  return (
    <Fragment>
      {notifications.map(notification => {
        return (
          <ActionCable
            key={notification.id}
            channel={{ channel: 'NotificationsChannel', notification: notification.id }}
            onReceived={handleReceivedMessage}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;
