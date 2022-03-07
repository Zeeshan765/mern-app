import { registerStart, registerSuccess, registerFailure } from './authRedux';
import { toast } from 'react-toastify';
//import { useHistory } from 'react-router-dom';
//import { publicRequest } from '../requestMethods';
import axiosInstance from '../components/services/axiosInstance';

export const Register1 = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    // const navigate = useHistory();
    const res = await axiosInstance.post('auth/register', user);
    toast.success('Registerd Successfully');
    dispatch(registerSuccess(res.data));
    // navigate.push('/login');
  } catch (err) {
    //console.log(err.response.data);
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
