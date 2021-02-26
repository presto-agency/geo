import * as Yup from 'yup';
import message from 'constants/validationMessages';

export default Yup.object({
    query: Yup.string().required(message.required)
});