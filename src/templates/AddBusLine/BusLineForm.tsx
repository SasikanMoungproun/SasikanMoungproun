import type { BusLineInput, BusLineFormProps } from './interfaces'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Controller, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import joi from 'joi'
import Icon from '@mdi/react'
import { mdiContentSave } from '@mdi/js'


const schema = joi.object<BusLineInput>({
    topic: joi.string().required().trim().messages({'string.empty': 'โปรดใส่เส้นทางเดินรถ'}),
    details: joi.string().required().trim().messages({'string.empty': 'โปรดระบุรายละเอียด'}),
    createdate: joi.string().required().trim().messages({'string.empty': 'โปรดระบุวันที่'}),
    status: joi.string().required().trim().messages({'string.empty': 'โปรดใส่เส้นทางเดินรถ'}),
})


export default function BusForm({ onSubmit }: BusLineFormProps) {

    const { control, handleSubmit, formState: { errors } } = useForm<BusLineInput>({
        defaultValues: { topic: '', details: '', status :'', createdate:'' },
        resolver: joiResolver(schema)
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-4">
            <Controller
                control={control}
                name="topic"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="เส้นทางรถโดยสาร" 
                        error={Boolean(errors.topic)}
                        helperText={errors.topic?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="details"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props} 
                        label="รายละเอียดเส้นทางรถโดยสาร" 
                        error={Boolean(errors.details)}
                        helperText={errors.details?.message}
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
                        label="ระบุสถานะของเส้นทาง" 
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
                        label="ระบุวันที่สร้าง" 
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