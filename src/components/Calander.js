import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import 'fullcalendar/dist/fullcalendar.min.css'
import 'fullcalendar-scheduler/dist/scheduler.min.css'
import App from '../App'
import '../App.css'

//import './main.scss' // webpack must be configured to do this

export default class DemoApp extends React.Component {

  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}  
       events={[
        { title: 'event 1', date: '2020-04-01T16:00:00' },
        { title: 'event 2', date: '2020-04-02T10:00:00' }
      ]}
 />
    )
  }

}