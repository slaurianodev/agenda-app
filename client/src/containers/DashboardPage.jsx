import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import ScheduleForm from '../components/ScheduleForm.jsx';


class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: ''
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();
  }

  processForm(event){
    event.preventDefault();

    const xhr = XMLHttpRequest();
    xhr.open('get','schedules/listAll');
    xhr.setRequestHeader('Content-type','application/json');
    xhr.responseType='json';
    xhr.addEventListener('load', () =>{
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // change the current URL to /
        this.context.router.replace('/');
      }else {
          // failure

          // change the component state
          const errors = xhr.response.errors ? xhr.response.errors : {};
          errors.summary = xhr.response.message;

          this.setState({
            errors
          });
        }
      });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return <Dashboard secretData={this.state.secretData} />;
     
  }

}

export default DashboardPage;
