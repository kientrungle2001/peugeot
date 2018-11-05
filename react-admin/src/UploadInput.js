import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Labeled } from 'react-admin';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import {peugeot_url} from 'peugeot_consts';
import { Field } from 'redux-form';

const iframeStyle = {
    width: '100%',
    height: '500px',
    border: 'none'
};

class UploadInput extends Component {
    componentDidMount() {
        var {props} = this; 
        this.setState({
            value: props.record[props.source]
        });
    }
    
    openDialog(evt) {
        var state = this.state || {};
        state.open = true;
        this.setState(state);
    }
    handleAccept(evt) {
        var state = this.state || {};
        var {jQuery} = window;
        state.value = jQuery('#fileManager').contents().find('#fieldID').val();
        this.handleClose(evt);
    }
    handleClose(evt) {
        var state = this.state || {};
        state.open = false;
        this.setState(state);
    }
    inputOnChange (evt) {
        var state = this.state || {};
        state.value = evt.target.value;
        this.setState(state);
    }
    render() {
        return (
            <Labeled label={this.props.label} >
                <span className={this.props.className}>
                    <Field name={this.props.source} component="input" value={this.state && this.state.value || ''} onChange={this.inputOnChange.bind(this)} />
                    &nbsp;
                        <Button variant="outlined" color="primary" onClick={this.openDialog.bind(this)} className="iframe-btn">
                        Select
                        </Button>
                    <Dialog aria-labelledby="simple-dialog-title" open={(this.state && this.state.open) || false} onClose={this.handleClose.bind(this)} maxWidth="md" fullWidth={true}>
                        <DialogTitle id="simple-dialog-title">
                            <IconButton onClick={this.handleAccept.bind(this)}>
                                V
                            </IconButton>
                            <IconButton onClick={this.handleClose.bind(this)}>
                                X
                            </IconButton>
                        </DialogTitle>
                        <DialogContent>
                            <iframe border="0" id="fileManager" src={peugeot_url + "/test.php"} style={iframeStyle} />
                        </DialogContent>
                        
                    </Dialog>
                </span>
            </Labeled>
        );
    }
    
};
export default UploadInput;