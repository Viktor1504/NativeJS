import {student, StudentType} from '../02/02';
import {CityType, GovernmentBuildings, HousesType} from '../02/02_02';

export const sum = (a: number, b: number) => {
    return a + b;
}

export function sum2(a: number, b: number) {
    return a + b;
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true;
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return student.address.city.title === city;
}

export const addMoneyToBudget = (building: GovernmentBuildings, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildings, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildings, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}