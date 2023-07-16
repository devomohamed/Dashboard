import { Address } from "./address"

export interface User{
    id:number,
    f_name:string,
    l_name:string,
    phone_verified_at:string,
    whatsapp_phone:string,
    password:string,
    gender:string
    status:boolean,
    email:string,
    image:string,
    address:Address
}
