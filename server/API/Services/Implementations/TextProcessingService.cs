using API.Services.Contracts;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.Text;

namespace API.Services.Implementations
{
    public class TextProcessingService: ITextProcessingService
    {
        public string ProcessText(string text)
        {
            text = text.Replace("-\n", "");
            text = text.Replace("\r\n", " ").Replace("\n", " ");
            return text;
        }
    }
}
