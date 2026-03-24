import React, { useState } from 'react'

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const startOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1)
  }

  const dayOfWeek = (date) => {
    return date.getDay()
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const renderCalendar = () => {
    const days = []
    const totalDays = daysInMonth(currentDate)
    const startDay = dayOfWeek(startOfMonth(currentDate))

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= totalDays; day++) {
      const isToday = day === new Date().getDate() && 
                      currentDate.getMonth() === new Date().getMonth() && 
                      currentDate.getFullYear() === new Date().getFullYear()
      days.push(
        <div key={day} className={`calendar-day ${isToday ? 'today' : ''}`}>
          {day}
        </div>
      )
    }

    return days
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={previousMonth}>&lt;</button>
        <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        <div className="calendar-day-header">Sun</div>
        <div className="calendar-day-header">Mon</div>
        <div className="calendar-day-header">Tue</div>
        <div className="calendar-day-header">Wed</div>
        <div className="calendar-day-header">Thu</div>
        <div className="calendar-day-header">Fri</div>
        <div className="calendar-day-header">Sat</div>
        {renderCalendar()}
      </div>
    </div>
  )
}

export default Calender
