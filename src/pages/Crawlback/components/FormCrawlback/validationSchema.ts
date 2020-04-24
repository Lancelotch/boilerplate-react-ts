import * as Yup from 'yup';

export default function validationSchema(){
    return Yup.object({
        project: Yup.string().required(),
        worker: Yup.string().required()
    })
}