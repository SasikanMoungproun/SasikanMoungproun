import type { DriverJobInput, DriverJobFormProps } from './interfaces'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Controller, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import joi from 'joi'
import Icon from '@mdi/react'
import { mdiContentSave } from '@mdi/js'


const schema = joi.object<DriverJobInput>({
    idbus: joi.string().required().trim().messages({'string.empty': 'โปรดระบุ ID รถโดยสาร'}),
    iduser: joi.string().required().trim().messages({'string.empty': 'โปรดระบุ ID ผู้ใช้'}),
    startdate: joi.string().required().trim().messages({'string.empty': 'กรุณาระบุวันที่และเวลาที่เริ่มงาน'}),
    enddate: joi.string().required().trim().messages({'string.empty': 'กรุณาระบุวันที่และเวลาที่เลิกงาน'}),
    status: joi.string().required().trim().messages({'string.empty': 'โปรดระบุสถานะการทำงาน'}),
    createdate: joi.string().required().trim().messages({'string.empty': 'จำเป็นต้องระบุวันที่'}),
})


export default function DriverJobForm({ onSubmit }: DriverJobFormProps) {

    const { control, handleSubmit, formState: { errors } } = useForm<DriverJobInput>({
        defaultValues: { idbus: '', iduser: '', startdate: '', enddate :'', status :'',createdate:'' },
        resolver: joiResolver(schema)
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-4">
            <Controller
                control={control}
                name="idbus"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="ID รถที่ใช้" 
                        error={Boolean(errors.idbus)}
                        helperText={errors.idbus?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="iduser"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref}
                        {...props}
                        label="ID User"
                        error={Boolean(errors.iduser)}
                        helperText={errors.iduser?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="startdate"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props} 
                        label="เวลาเริ่มงาน" 
                        error={Boolean(errors.startdate)}
                        helperText={errors.startdate?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="enddate"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="เวลาเลิกงาน" 
                        error={Boolean(errors.enddate)}
                        helperText={errors.enddate?.message}
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
                        label="สถานะการทำงาน" 
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