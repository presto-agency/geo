import * as Yup from 'yup';
import message from 'constants/validationMessages';

export default Yup.object({
   email: Yup.string().email(message.email).required(message.required)
});