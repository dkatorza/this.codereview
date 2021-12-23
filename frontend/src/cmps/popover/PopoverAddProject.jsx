import { Popover } from './Popover'
import { useDispatch } from 'react-redux';
import { onSaveProject } from '../../store/actions/project.actions'
import { closePopover } from '../../store/actions/app.actions'
import { useState } from 'react';

export const PopoverAddProject = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [msg, setMsg] = useState('')

    const onClosePopover = () => {
        dispatch(closePopover())
    }

    const onCreateProject = async () => {
        if (!title || !startDate || !endDate) {
            setMsg('*All fields are required!')
            return
        }
        const projectToSave = {
            title,
            createdBy: 'testuser',
            startDate: new Date(startDate).getTime(),
            endDate: new Date(endDate).getTime()
        }
        try {
            await dispatch(onSaveProject(projectToSave))
            setTitle('')
            onClosePopover()


        } catch (err) {
            console.log('could not create project')
        }
    }

    return (
        <Popover title={'Add project'}>
            <div className="add-project-wrapper">
                <div className="add-project-field">
                    <h3>Project name:</h3>
                    <input type="text"
                        placeholder='Please enter project name.'
                        onChange={(ev) => setTitle(ev.target.value)}
                        value={title}
                        required
                    />
                </div>
                <div className="add-project-field">
                    <h3>Start date:</h3>
                    <input type="date"
                        onChange={(ev) => setStartDate(ev.target.value)}
                        value={startDate}
                        required
                    />
                </div>
                <div className="add-project-field">
                    <h3>End date:</h3>
                    <input type="date"
                        onChange={(ev) => setEndDate(ev.target.value)}
                        value={endDate}
                        required
                    />
                </div>
                <div className='add-project-bottom'>
                    <div className="button" onClick={onCreateProject}>
                        <h3>Save</h3>
                    </div>
                    {msg && <div className='error-msg'> {msg} </div>}
                </div>

            </div>
        </Popover>
    )
}