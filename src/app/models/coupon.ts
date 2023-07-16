export interface Coupon{
    id:number,
    code:string,
    created_at:string,
    updated_at:string,
    start_at:string,
    end_at:string,
    discount:number,
    max_usage_count:number,
    max_usage_count_per_user:number,
    status:boolean,
}
