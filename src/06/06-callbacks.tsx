import {ChangeEvent, MouseEvent} from 'react';

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('name changed')
    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onChange={onNameChanged}
                      onBlur={focusLostHandler}>
            </textarea>
            <input type={'number'} onChange={onAgeChanged}/>
            <button name={'delete'} onClick={deleteUser}>delete</button>
        </div>
    )
}