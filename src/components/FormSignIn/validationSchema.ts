import * as Yup from 'yup';

export default function validationSchema(){
    return Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required()
    })
}