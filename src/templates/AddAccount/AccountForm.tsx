import type { AccountInput, AccountFormProps } from './interfaces'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Controller, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import joi from 'joi'
import Icon from '@mdi/react'
import { mdiContentSave } from '@mdi/js'


const schema = joi.object<AccountInput>({
    username: joi.string().required().trim().messages({'string.empty': 'โปรดระบุ Username'}),
    password: joi.string().required().trim().messages({'string.empty': 'โปรดระบุ Password'}),
    fullname: joi.string().required().trim().messages({'string.empty': 'โปรดระบุ ชื่อ-นามสกุล'}),
    email: joi.string().required().trim().messages({'string.empty': 'โปรดระบุ E-mail'}),
    position: joi.string().required().trim().messages({'string.empty': 'โปรดระบุตำแหน่ง'}),
    createdate: joi.string().required().trim().messages({'string.empty': 'จำเป็นต้องระบุวันที่สมัคร'}),
})


export default function AccountForm({ onSubmit }: AccountFormProps) {

    const { control, handleSubmit, formState: { errors } } = useForm<AccountInput>({
        defaultValues: { username: '', password: '', fullname: '', email :'', position :'',createdate:'' },
        resolver: joiResolver(schema)
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-4">
            <Controller
                control={control}
                name="username"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="Username" 
                        error={Boolean(errors.username)}
                        helperText={errors.username?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="password"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref}
                        {...props}
                        label="Password"
                        type="password"
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="fullname"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props} 
                        label="ชื่อ-นามสกุล" 
                        error={Boolean(errors.fullname)}
                        helperText={errors.fullname?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="email"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="E-mail"
                        type="email" 
                        error={Boolean(errors.username)}
                        helperText={errors.email?.message}
                        fullWidth />
                )}
            />
            <Controller
                control={control}
                name="position"
                defaultValue=""
                render={({ field: { ref, ...props } }) => (
                    <TextField 
                        inputRef={ref} 
                        {...props}
                        label="ตำแหน่ง" 
                        error={Boolean(errors.username)}
                        helperText={errors.position?.message}
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
                        error={Boolean(errors.username)}
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