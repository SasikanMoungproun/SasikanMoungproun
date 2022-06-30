import type { BusInput, BusFormProps } from './interfaces'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Controller, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import joi from 'joi'
import Icon from '@mdi/react'
import { mdiContentSave } from '@mdi/js'


const schema = joi.object<BusInput>({
    model: joi.string().required().trim().messages({'string.empty': 'โปรดระบุรุ่น'}),
    licensePalate: joi.string().required().trim().messages({'string.empty': 'โปรดระบุเลขแผ่นป้ายทะเบียน'}),
    brand: joi.string().required().trim().messages({'string.empty': 'โปรดระบุยีาห้อ'}),
    color: joi.string().required().trim().messages({'string.empty': 'โปรดระบุสีของรถ'}),
    createdate :joi.string().required().trim().messages({'string.empty': 'โปรดระบุวันที่'}),
   })


export default function BusForm({ onSubmit }: BusFormProps) {

    const { control, handleSubmit, formState: { errors } } = useForm<BusInput>({
        defaultValues: { model: '', licensePalate: '', brand: '', color :'', createdate :'', },
        resolver: joiResolver(schema)
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-4">
            <Controller
                control={control}
                name="model"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="รุ่น" 
                        error={Boolean(errors.model)}
                        helperText={errors.model?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="licensePalate"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref}
                        {...props}
                        label="แผ่นป้ายทะเบียน"
                        error={Boolean(errors.licensePalate)}
                        helperText={errors.licensePalate?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="brand"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props} 
                        label="ยี่ห้อ" 
                        error={Boolean(errors.brand)}
                        helperText={errors.brand?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="color"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="สีของรถโดยสาร" 
                        error={Boolean(errors.color)}
                        helperText={errors.color?.message}
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
                        label="ระบุวันที่สมัคร" 
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