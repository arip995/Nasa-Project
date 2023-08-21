const launches = new Map();

const launch = {
    flight100:100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('March 30, 2025'),
    destination: 'kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success:true,
}

launches.set(launch.flightnumber, launch)

module.exports = {
    launches,
}