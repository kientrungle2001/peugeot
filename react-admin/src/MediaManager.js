import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { peugeot_url } from 'peugeot_consts';

const iframeStyle = {
    width: '100%',
    height: '500px',
    border: 'none'
};

class MediaManager extends Component {
    openDialog() {
        var state = this.state || {};
        state.open = true;
        this.setState(state);
    }
    handleClose() {
        var state = this.state || {};
        state.open = false;
        this.setState(state);
    }
    
    render() {
        return (
            <span className={this.props.className}>
                <Button variant="outlined" color="primary" onClick={this.openDialog.bind(this)} className="iframe-btn">
                    Media Manager
                </Button>
                <Dialog aria-labelledby="simple-dialog-title" open={(this.state && this.state.open) || false} onClose={this.handleClose.bind(this)} maxWidth="md" fullWidth={true}>
                    <DialogTitle id="simple-dialog-title">
                        <IconButton onClick={this.handleClose.bind(this)}>
                            X
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <iframe border="0" id="fileManager" src={peugeot_url + "/test.php"} style={iframeStyle} />
                    </DialogContent>

                </Dialog>
            </span>
        );
    }

};
export default MediaManager;