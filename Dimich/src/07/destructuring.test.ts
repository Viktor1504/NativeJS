import {ManType} from './Destructuring';

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Victor',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Semenyako'
            }
        }
    }
})

test('', () => {
    //const age = man.age
    //const lessons = man.lessons
    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Semenyako')
})

test('destructuringn array', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [, , ls3] = props.lessons

    const [, ls2, ...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')


    expect(ls2.title).toBe('2')
    expect(restLessons[0].title).toBe('3')
    expect(ls3.title).toBe('3')

    expect(restLessons[0]).toStrictEqual({name: 'react', title: '3'})
})


test('destr', () => {
    const arr = [1, 2, 45, 6, 4, 3, 2, 4]

    const [, , a, ...rest] = arr
    console.log(rest)
    expect(a).toBe(45)

})
