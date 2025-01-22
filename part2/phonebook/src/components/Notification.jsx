const Notification =( {message, type}) => {
    const basicNotificationStyle = {
        background: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        fontSize: 20,
    }

    const addedNotificationStyle = {
        ...basicNotificationStyle,
        color: 'green',
        borderColor: 'green'
    }

    const errorNotificationStyle = {
        ...basicNotificationStyle,
        color: 'red',
        borderColor: 'red'
    }
    
    
    const notificationStyle = type === 'added' ? addedNotificationStyle : errorNotificationStyle
    
    
    if (message === null) {
        return null
    }
    else {
        return (
            <div style={notificationStyle}>
                {message}
            </div>
        )
    }
}

export default Notification