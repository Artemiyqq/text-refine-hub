using API.Constants;
using API.Services.Contracts;

namespace API.Services.Implementations
{
    public class ResultDocxStorageService : IResultDocxStorageService
    {
        public async Task<string> SaveProcessedDocxAsync(byte[] processedDocx, string originalFileName) 
        {
            string currentTime = DateTime.Now.ToString("HH.mm.ss");
            string newFileName = $"{currentTime}_{originalFileName}".Replace(" ", "_");
            string pathToFile = $"{AppConstants.STANDARD_FILE_PATH}{newFileName}";

            await File.WriteAllBytesAsync(pathToFile, processedDocx);

            return newFileName;
        }
    }
}
