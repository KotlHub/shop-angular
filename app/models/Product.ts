import { Types } from 'mongoose';

export interface IProduct {
    
    _id?: Types.ObjectId,
    name: string, 
    price: number,
    description: string,
    imageurl?: string
}