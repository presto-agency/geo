import * as Yup from 'yup';
import message from 'constants/validationMessages';

export default Yup.object({
    name: Yup.string().required(message.required),
    email: Yup.string().email(message.email).required(message.required),
    message: Yup.string()
});