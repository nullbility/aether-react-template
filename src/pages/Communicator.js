import React from 'react';
import { Box, Button, Grid, Header, Input } from '../components';

const Communicator = () => {
    return (
        <Grid
            fill
            rows={['fill']}
            columns={['medium', 'flex', 'medium']}
            areas={[
                { name: 'contacts', start: [0, 0], end: [0, 0] },
                { name: 'body', start: [0, 1], end: [0, 1] },
                { name: 'details', start: [0, 2], end: [0, 2] }
            ]}
        >
            <Box
                gridArea="contacts"
            >
                <Header/>
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
                            backgroundColor='accent-2'
                            label="submit" />
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
