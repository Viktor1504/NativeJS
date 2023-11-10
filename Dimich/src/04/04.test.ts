import {chipCourses, oldAges} from './04';

test('should take old meb older then 90', () => {
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should take courses chipper 160', () => {
    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS');
    expect(chipCourses[1].title).toBe('React');
})