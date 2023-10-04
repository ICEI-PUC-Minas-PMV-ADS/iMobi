using System.ComponentModel;
using System.Reflection;

namespace IMobiApi.Helpers;

public static class EnumExtensions
{
    public static string GetDescription(this Enum value)
    {
        FieldInfo fieldInfo = value.GetType().GetField(value.ToString());

        if (fieldInfo.GetCustomAttributes(typeof(DescriptionAttribute), false) is DescriptionAttribute[] attributes && attributes.Length > 0)
        {
            return attributes[0].Description;
        }

        return value.ToString();
    }
}
