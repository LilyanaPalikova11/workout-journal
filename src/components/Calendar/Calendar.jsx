import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="container mt-3">
            <h2>Calendar</h2>
            <Calendar onChange={setDate} value={date} />
        </div>
    );
};

export default CalendarComponent;
