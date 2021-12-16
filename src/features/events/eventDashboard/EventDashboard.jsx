import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/eventForm';
import EventList from './EventList';
import  {sampleData} from '../../../app/api/sampleData.js';

export default function EventDashboard() {

  return (
    <Grid>
<Grid.Column width={10}>
<EventList events={sampleData} />
</Grid.Column>
<Grid.Column width={6}>
<EventForm/>
</Grid.Column>

    </Grid>
  )

}

