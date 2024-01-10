namespace API.Services.Contracts
{
    public interface IResultDocxStorageService
    {
        Task<string> SaveProcessedDocxAsync(byte[] processedDocx, string originalFileName);
    }
}
