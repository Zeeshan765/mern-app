import { registerStart, registerSuccess, registerFailure } from './authRedux';
import { toast } from 'react-toastify';

//import { publicRequest } from '../requestMethods';
import axiosInstance from '../components/services/axiosInstance';
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await axiosInstance.post('auth/register', user);
    toast.success('Registerd Successfully');
    dispatch(registerSuccess(res.data));
  } catch (err) {
    console.log(err.response.data);
    //alert(err.response.data);
    // alert(dispatch(registerFailure(err.response.data)));
    // toast.error(dispatch(registerFailure(err.response.data)), {
    // position: toast.POSITION.TOP_LEFT,
    //});
    toast.error(err.response.data, {
      position: toast.POSITION.TOP_LEFT,
    });
    //dispatch(registerFailure(err.response.data));

    //    return err.response.data;
  }
};
