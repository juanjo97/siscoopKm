
export class LoginObject
{
	public usuario: string;
	public constrasenia: string;

	constructor(object: any)
	{
		this.usuario = (object.usuario) ? object.usuario: null;
		this.constrasenia = (object.contrasenia) ? object.contrasenia:null;
	}

}