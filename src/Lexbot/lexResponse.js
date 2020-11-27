'use strict';

module.exports.delegate = function(sessionAttributes, slots) {
    // const message = 'Y'
    return {
        sessionAttributes,
        dialogAction : {
            type: 'Delegate',
            slots,
        },
    }
}

module.exports.elicitSlot = function(sessionAttributes, intentName, slots, slotToElicit, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'ElicitSlot',
            intentName,
            slots,
            slotToElicit,
            message,
        }
    }
}