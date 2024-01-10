namespace API.Services.Contracts
{
    public interface IStreamService
    {
        Task<byte[]> CopyReadOnlyStreamToMemory(Stream readOnlyStream);
    }
}
