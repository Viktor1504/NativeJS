import {CityType, GovernmentBuildings} from '../02/02_02';

const ages = [18, 20, 22, 1, 100, 90, 14];

export const oldAges = ages.filter(age => age > 90);

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150},
]

export const chipCourses = courses.filter(course => course.price < 160)

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(hous => hous.address.street.title !== street);
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildings[], number: number) => {
    return buildings.filter(b => b.staffCount > number)
}