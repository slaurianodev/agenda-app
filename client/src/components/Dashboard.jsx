import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ScheduleForm from '../components/ScheduleForm.jsx';


const Dashboard = ({ 
secretData ,
onSubmit,
onChange,
errors,
sucessMessage
}) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
    
  </Card>

);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
