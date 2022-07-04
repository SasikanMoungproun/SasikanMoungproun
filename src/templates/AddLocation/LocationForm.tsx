import type { LocationInput, LocationFormProps } from './interfaces'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Controller, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import joi from 'joi'
import Icon from '@mdi/react'
import { mdiContentSave } from '@mdi/js'


const schema = joi.object<LocationInput>({
    namelocation: joi.string().required().trim().messages({ 'string.empty': 'โปรดระบุชื่อสถานที่' }),
    latitude: joi.string().required().trim().messages({ 'string.empty': 'โปรดระบุลพติจูด' }),
    longtitude: joi.string().required().trim().messages({ 'string.empty': 'โปรดระบุลองจิจูด' }),
    time: joi.string().required().trim().messages({ 'string.empty': 'โปรดระบุเวลา' }),
    status: joi.string().required().trim().messages({ 'string.empty': 'โปรดระบุสถานะ' }),
    createdate: joi.string().required().trim().messages({ 'string.empty': 'จำเป็นต้องระบุวันที่' }),
})


export default function LocationForm({ onSubmit }: LocationFormProps) {

    const { control, handleSubmit, formState: { errors } } = useForm<LocationInput>({
        defaultValues: { namelocation: '', latitude: '', longtitude: '', time: '', status: '', createdate: '' },
        resolver: joiResolver(schema)
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-4">
            <Controller
                control={control}
                name="namelocation"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField
                        inputRef={ref}
                        {...props}
                        label="ชื่อสถานที่"
                        error={Boolean(errors.namelocation)}
                        helperText={errors.namelocation?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="latitude"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField
                        inputRef={ref}
                        {...props}
                        label="ละติจูด"
                        error={Boolean(errors.latitude)}
                        helperText={errors.latitude?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="longtitude"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField
                        inputRef={ref}
                        {...props}
                        label="ลองจิจูด"
                        error={Boolean(errors.longtitude)}
                        helperText={errors.longtitude?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="time"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField
                        inputRef={ref}
                        {...props}
                        label="ระบุเวลา"
                        error={Boolean(errors.time)}
                        helperText={errors.time?.message}
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
                        label="สถานะ"
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