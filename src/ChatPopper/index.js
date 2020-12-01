import React from 'react'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import { Button } from '@material-ui/core';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Lexbot from '../Lexbot';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};
const ChatPopper = () => {
  return (
    <div>
      <PopupState variant='popper' style={style} popupId='chatPop'>
        {(popupState) => (
          <div>
            <Button style={style} variant='contained' color='secondary' {...bindToggle(popupState)}>
              <ChatOutlinedIcon />
            </Button>
            <Popper {...bindPopper(popupState)}>
              {({ TransitionProps }) => (
                <Paper>
                  <Lexbot />
                </Paper>
              )}
            </Popper>
          </div>
        )
        }
      </PopupState>
    </div>
  )
}

export default ChatPopper;
