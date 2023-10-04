using System.ComponentModel;

namespace IMobiApi.Enums;

public enum Status
{
    [Description("Lançamento")]
    Lancamento,
    [Description("Em construção")]
    EmConstrucao,
    [Description("Pronto")]
    Pronto
}