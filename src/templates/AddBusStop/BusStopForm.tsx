import type { BusStopInput, BusStopFormProps } from './interfaces'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Controller, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import joi from 'joi'
import Icon from '@mdi/react'
import { mdiContentSave } from '@mdi/js'


const schema = joi.object<BusStopInput>({
    namebusstop: joi.string().required().trim().messages({'string.empty': 'โปรดระบุ Username'}),
    idlocation: joi.string().required().trim().messages({'string.empty': 'โปรดระบุ Password'}),
    status: joi.string().required().trim().messages({'string.empty': 'โปรดระบุ ชื่อ-นามสกุล'}),
    createdate: joi.string().required().trim().messages({'string.empty': 'โปรดระบุ E-mail'}),
})


export default function BusForm({ onSubmit }: BusStopFormProps) {

    const { control, handleSubmit, formState: { errors } } = useForm<BusStopInput>({
        defaultValues: { namebusstop: '', idlocation :'', status :'', createdate:'' },
        resolver: joiResolver(schema)
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-4">
            <Controller
                control={control}
                name="namebusstop"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="ชื่อสถานี" 
                        error={Boolean(errors.namebusstop)}
                        helperText={errors.namebusstop?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="idlocation"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props} 
                        label="ID สถานที่" 
                        error={Boolean(errors.idlocation)}
                        helperText={errors.idlocation?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="status"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="สถานะของสถานี" 
                        error={Boolean(errors.status)}
                        helperText={errors.status?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="createdate"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="ระบุวันที่" 
                        error={Boolean(errors.createdate)}
                        helperText={errors.createdate?.message}
                        fullWidth />
                )}
            />
            <Button
                variant="contained"
                type="submit"
                startIcon={<Icon path={mdiContentSave} size={1} />}
            >
                บันทึก
            </Button>
        </form>
    )
}