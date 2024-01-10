using DocumentFormat.OpenXml.Packaging;

namespace API.Services.Contracts
{
    public interface IDocxService
    {
        Task<byte[]> ProcessDocxAsync(Stream fileStream);
        WordprocessingDocument OpenWordDocument(byte[] fileBytes);
        IEnumerable<string> GetParagraphsText(WordprocessingDocument document);
        string GetFirstFontInDocument(WordprocessingDocument document);
        WordprocessingDocument FillInNewDocument(WordprocessingDocument newDocument, string text, string font);
    }
}
