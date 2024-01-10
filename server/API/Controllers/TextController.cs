using API.Services.Contracts;
using Microsoft.AspNetCore.Mvc;
using API.Models;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TextController : ControllerBase
    {
        private readonly ITextProcessingService _textProcessingService;
        public TextController(ITextProcessingService textProcessingService)
        {
            _textProcessingService = textProcessingService;
        }

        [HttpPost]
        public IActionResult PostPastedText([FromBody] TextDTO textDTO)
        {
            string result = _textProcessingService.ProcessText(textDTO.Text);

            return Content(result, "text/plain");
        }
    }
}