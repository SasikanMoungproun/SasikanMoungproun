import type { TourInput, TourFormProps } from './interfaces'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Controller, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import joi from 'joi'
import Icon from '@mdi/react'
import { mdiContentSave } from '@mdi/js'


const schema = joi.object<TourInput>({
    nametour: joi.string().required().trim().messages({'string.empty': 'โปรดระบุชื่อสถานที่ท่องเที่ยว'}),
    details: joi.string().required().trim().messages({'string.empty': 'จำเป็นต้องเพิ่มรายละเอียดของสถานที่ท่องเที่ยว'}),
    idlocation: joi.string().required().trim().messages({'string.empty': 'กรุณาระบุตำแหน่ง'}),
    vdopaths: joi.string().required().trim().messages({'string.empty': 'โปรดเพิ่ม vdo'}),
    imgpaths: joi.string().required().trim().messages({'string.empty': 'โปรดเพิ่มรูปภาพ'}),
    soundpaths: joi.string().required().trim().messages({'string.empty': 'โปรดเพิ่มไฟล์เสียง'}),
    status: joi.string().required().trim().messages({'string.empty': 'โปรดระบุสถานะ'}),
    createdate: joi.string().required().trim().messages({'string.empty': 'โปรดระบุวันที่เพิ่ม'}),
})


export default function TourForm({ onSubmit }: TourFormProps) {

    const { control, handleSubmit, formState: { errors } } = useForm<TourInput>({
        defaultValues: { nametour: '',details: '', idlocation: '', vdopaths :'', 
        imgpaths :'',soundpaths :'',status :'',createdate :'' },
        resolver: joiResolver(schema)
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-4">
            <Controller
                control={control}
                name="nametour"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="ชื่อสถานที่ท่องเที่ยว" 
                        error={Boolean(errors.nametour)}
                        helperText={errors.nametour?.message}
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
                        label="รายละเอียดของสถานที่ท่องเที่ยว"
                        error={Boolean(errors.details)}
                        helperText={errors.details?.message}
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
                        label="ID ตำแหน่งสถานที่ท่องเที่ยว" 
                        error={Boolean(errors.idlocation)}
                        helperText={errors.idlocation?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="vdopaths"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="vdo" 
                        error={Boolean(errors.vdopaths)}
                        helperText={errors.vdopaths?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="imgpaths"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="รูปภาพ" 
                        error={Boolean(errors.imgpaths)}
                        helperText={errors.imgpaths?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="soundpaths"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="ไฟล์เสียง" 
                        error={Boolean(errors.soundpaths)}
                        helperText={errors.soundpaths?.message}
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