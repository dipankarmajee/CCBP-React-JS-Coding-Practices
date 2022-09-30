import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1>Alert Notifications</h1>

    <div className="notificaton-container">
      <Notification>
        <AiFillCheckCircle className="success" />
        <h3 className="success">Success</h3>
        <p>You can access all the files in the folder</p>
        <GrFormClose />
      </Notification>
    </div>

    <div className="notificaton-container">
      <Notification>
        <RiErrorWarningFill className="error" />
        <h3 className="error">Error</h3>
        <p>Sorry, you are not authorized to have access to delete the file</p>
        <GrFormClose />
      </Notification>
    </div>

    <div className="notificaton-container">
      <Notification>
        <MdWarning className="warning" />
        <h3 className="warning">Warning</h3>
        <p>Viewers of this file can see comments and suggestions</p>
        <GrFormClose />
      </Notification>
    </div>

    <div className="notificaton-container">
      <Notification>
        <MdInfo className="info" />
        <h3 className="info">Info</h3>
        <p>Anyone on the internet can view these files</p>
        <GrFormClose />
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
