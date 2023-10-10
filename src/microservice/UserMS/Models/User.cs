namespace UserMS.Models;
public class User{
    public int id { get; set;}
    public string nome { get; set;}
    public string email { get; set;}
    public string senha { get; set;}
    public string telefone { get; set;}
    public string cpf { get; set;}
    public string creci { get; set;}
    public DateTime createdAt { get; set;}
    public DateTime updatedAt{ get; set;}

}