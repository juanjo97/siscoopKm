/*Este modelo representa una sesión activa. 
Esta la utilizaremos para guardar el usuario, 
una vez logueado correctamente, y el token de 
autentificación que necesitaremos en un futuro para 
hacer peticiones al backend.*/
import { User } from'../models/user.model';

export class Session
{
	public token: string;
	public user: User;
}