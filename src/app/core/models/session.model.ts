import { User } from'../models/user.model';

export class Session
{
	public token: string;
	public user: User;
}