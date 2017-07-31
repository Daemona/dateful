export const UNITS = {
    MILLENNIUM  : 'Millennia',
    CENTURY     : 'Centuries',
    DECADE      : 'Decades',
    LEAP        : 'LeapYears',
    YEAR        : 'Years',
    MONTH       : 'Months',
    WEEK        : 'Weeks',
    DAY         : 'Days',
    HOUR        : 'Hours',
    MINUTE      : 'Minutes',
    SECOND      : 'Seconds',
    MILLISECOND : 'Milliseconds',
};

export const VALUES = {
    [UNITS.LEAP]     : 31622400000,
    [UNITS.YEAR]     : 31536000000,
    [UNITS.WEEK]     : 604800000,
    [UNITS.DAY]      : 86400000,
    [UNITS.HOUR]     : 3600000,
    [UNITS.MINUTE]   : 60000,
    [UNITS.SECOND]   : 1000,
};

export const DATE_PARTS = [
    UNITS.MILLENNIUM,
    UNITS.CENTURY,
    UNITS.DECADE,
    UNITS.LEAP,
    UNITS.YEAR,
    UNITS.MONTH,
    UNITS.WEEK,
    UNITS.DAY,
];

export const TIME_PARTS = [
    UNITS.HOUR,
    UNITS.MINUTE,
    UNITS.SECOND,
    UNITS.MILLISECOND,
];

export const WEEKDAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

export const MONTHS = {
    LONG : [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    SHORT : [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]
};
