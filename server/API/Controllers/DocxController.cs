using API.Constants;
using API.Services.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DocxController : Controller
    {
        const string CONTROLLER_NAME = "Docx";

        private readonly IDocxService _docxService;
        private readonly IResultDocxStorageService _resultDocxStorageService;

        public DocxController(IDocxService docxService, IResultDocxStorageService resultDocxStorageService)
        {
            _docxService = docxService;
            _resultDocxStorageService = resultDocxStorageService;
        }

        [HttpPost]
        public async Task<IActionResult> ProcessDocx([FromForm] IFormFile file)
        {
            try
            {
                using Stream fileStream = file.OpenReadStream();
                
                byte[] processedDocxBytes = await _docxService.ProcessDocxAsync(fileStream);

                string newFileName = await _resultDocxStorageService.SaveProcessedDocxAsync(processedDocxBytes, file.FileName);

                var linkToResult = Url.Link("Download", new { FileName = newFileName, Action = "DownloadProcessedDocx", Controller = CONTROLLER_NAME });
                return Ok(linkToResult);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }
            
        }

        [HttpGet("download", Name = "Download")]
        public async Task<IActionResult> DownloadProcessedDocx(string fileName)
        {
            string pathToFile = $"{AppConstants.STANDARD_FILE_PATH}{fileName}";
            if (System.IO.File.Exists(pathToFile))
            {
                byte[] fileBytes = await System.IO.File.ReadAllBytesAsync(pathToFile);
                return File(fileBytes, "application/vnd.openxmlformats-officedocument.wordprocessingml.document", fileName);
            }
            else
            {
                return NotFound("File not found.");
            }
        }
    }
}
