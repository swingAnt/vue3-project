import request from '../axios';

/**
 * User 
 */
 
interface IResponseType {
    code?: number;
    success?: boolean;
    msg?: string;
    data: IUser;
}
interface IUser {
    userName: string;
    phone: string;
}
//获取用户信息
export const getUserInfo = () => {
    return request.get<IResponseType>('/api/getUser',{
    })
};

