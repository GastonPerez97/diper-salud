document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'dayGrid' ],
        locale: 'es',
        firstDay: 1,
        fixedWeekCount: false,
        buttonText: {
        today: 'Hoy'
        },
        events: [
            {
                title: 'Gripe (6 a 24 meses)',
                start: '2020-06-22',
            },
            {
                title: 'Varicela (15 meses)',
                start: '2020-06-12'
            },
            {
                title: 'Quintuple (15-18 meses)',
                start: '2020-07-03'
            },
            {
                title: 'Triple Bact. (5-6 años)',
                start: '2020-07-15'
            },
            {
                title: 'Doble Bact. (Adultos)',
                start: '2020-08-10'
            },
            {
                title: 'Papiloma Hum. (11 años)',
                start: '2020-05-20'
            }
        ]
    });

    calendar.render();
});