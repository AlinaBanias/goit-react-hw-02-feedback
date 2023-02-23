import PropTypes from 'prop-types';
import css from './Notification.module.css'

const Notification = ({message}) => {
   return (<p className={css.notificationMessage}>{message}</p>);   
}
export default Notification;

Notification.protoTypes = {
    message: PropTypes.string.isRequired,
}