import GenericService from './GenericService';

class UserService extends GenericService {
  constructor() {
    super();
  }
  register = (name, email, password) =>
    this.post('auth/register', { password, email, name });
}
let userService = new UserService();
export default userService;
