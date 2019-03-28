import React from 'react';
import { Box, Button, Channels, Grid, Header, Input } from '../components';

const Communicator = () => {
    return (
        <Grid
            fill
            rows={['fill']}
            columns={['20%', 'flex', 'medium']}
            areas={[
                { name: 'contacts', start: [0, 0], end: [0, 0] },
                { name: 'body', start: [1, 0], end: [1, 0] },
                { name: 'details', start: [2, 0], end: [2, 0] }
            ]}
        >
            <Box
                gridArea="contacts"
            >
                <Channels
                    teamName="Team name"
                    username="Username"
                    channels={[{ id: 1, name: 'general' }, { id: 2, name: 'random' }]}
                    users={[{ id: 1, name: 'slackbot' }, { id: 2, name: 'user1' }]}
                />
            </Box>

            <Box
                background={{
                    color: 'accent-2'
                }}
                direction="column"
                gridArea="body"
                height="fit-content"
                pad="small"
                round="small"
            >
                <Grid
                    rows={['auto', 'xsmall', 'auto']}
                    columns={['flex', 'flex']}
                    areas={[
                        { name: 'fields', start: [0, 0], end: [1, 0] },
                        { name: 'buttons', start: [0, 2], end: [1, 2] }
                    ]}
                >
                    <Box gridArea="fields" gap="small">
                        <Input placeholder="username" />
                        <Input placeholder="password" type="password" />
                    </Box>

                    <Box gridArea="buttons">
                        <Button
                            primary
                            backgroundColor='accent-2'
                            label="submit" 
                        />
                    </Box>
                </Grid>
            </Box>
            <Box gridArea="details">
                <Header/>
            </Box>
        </Grid>
    );
};

export default Communicator;
