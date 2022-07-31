import *  as React from 'react';
import {useState} from 'react';
import { Button, Divider, Form, Grid, Segment , Header, Modal} from 'semantic-ui-react';
const axios = require('axios');

export default function UserForm () {
    function modalReducer(state, action) {
        switch (action.type) {
            case 'OPEN_MODAL':
                return { open: true, dimmer: action.dimmer }
            case 'CLOSE_MODAL':
                return { open: false }
            default:
                throw new Error()
        }
    }

    const [state, dispatch] = React.useReducer(modalReducer, {
        open: false,
        dimmer: undefined,
    })
    const { open, dimmer } = state
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [quote, setQuote] = useState();

    async function CreateQR(e)
    {
        e.preventDefault();
        await axios({
            method: 'post',
            url: '',
            data: {
                firsName: e.target.firsName.value,
                lastName: e.target.lastName.value,
                quote: e.target.target.value
            }
        });
    }

    return (
        <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Form>
                        <Button onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}>
                            Add New QR Code
                        </Button>
                        <Modal dimmer={dimmer} open={open} onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>
                            <Modal.Header>Add new Info:</Modal.Header>
                            <Modal.Content>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='First Name:'
                                    placeholder='Mickey'
                                    name='firstName'
                                />
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Last Name:'
                                    placeholder='Mouse'
                                    name='lastName'
                                />
                                <Form.TextArea
                                    icon='user'
                                    iconPosition='left'
                                    label='Quote:'
                                    placeholder='Miska Moska Mickey Mouse!!'
                                    name='quote'
                                />
                            </Modal.Content>
                            <Modal.Actions>
                                <Button negative onClick={() => {dispatch({ type: 'CLOSE_MODAL' }); console.log('test')}}>
                                    Cancel
                                </Button>
                                <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                                    Generate
                                </Button>
                            </Modal.Actions>
                        </Modal>
                    </Form>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                    <Button content='Sign up' icon='signup' size='big'/>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}