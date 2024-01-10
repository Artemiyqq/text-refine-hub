using API.Services.Contracts;
using API.Services.Implementations;
using DocumentFormat.OpenXml.Office2016.Drawing.ChartDrawing;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);


        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddTransient<ITextProcessingService, TextProcessingService>();
        builder.Services.AddTransient<IDocxService, DocxService>();
        builder.Services.AddTransient<IStreamService, StreamService>();
        builder.Services.AddTransient<IResultDocxStorageService, ResultDocxStorageService>();
        builder.Services.AddCors();


        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

        app.UseAuthentication();

        app.UseHttpsRedirection();

        app.MapControllers();

        app.Run();
    }
}