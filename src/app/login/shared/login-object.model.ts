//Es una objeto que hemos typeado para tener más controlada la información que se enviará a la petición de login.
export class LoginObject
{
	//definimos las variables a usar en la peticion
	public usuario: string;
	public constrasenia: string;
	
	constructor(object: any)
	{
		this.usuario = (object.usuario) ? object.usuario: null;
		this.constrasenia = (object.contrasenia) ? object.contrasenia:null;
	}

}