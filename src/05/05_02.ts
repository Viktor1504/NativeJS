import {CityType, GovernmentBuildings, HousesType} from '../02/02_02';

export const getStreetsTitles0fGovernmentsBuildings = (buildings: GovernmentBuildings[]) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitles0fHouses = (houses: HousesType[]) => {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: HousesType[]) => {
    let callBackFn = (h: HousesType) => {
        return `Hello guys from ${h.address.street.title}`
    }
    let newArray = houses.map(callBackFn)
    return newArray
}