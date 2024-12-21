import { Schema, models, model } from 'mongoose';

interface IUser {
    dni: string;
    email: string,
    password: string;
    role: string;
    createdAt: Date;
}

const userSchema = new Schema<IUser>({
    dni: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const User = models.Users || model<IUser>('Users', userSchema);
export default User;
