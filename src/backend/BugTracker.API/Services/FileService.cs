using BugTracker.API.Services.Interfaces;

namespace BugTracker.API.Services;

public class FileService : IFileService
{
    private readonly string[] suffixes = { "Bytes", "KB", "MB", "GB", "TB", "PB" };

    public string ConvertByteArrayToFile(byte[] fileData, string extension)
    {
        try
        {
            var imageBase64Data = Convert.ToBase64String(fileData);
            return string.Format($"data:{extension};base64,{imageBase64Data}");
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<byte[]> ConvertFileToByteArrayAsync(IFormFile file)
    {
        try
        {
            MemoryStream memoryStream = new();
            await file.CopyToAsync(memoryStream);
            byte[] byteFile = memoryStream.ToArray();
            memoryStream.Close();
            memoryStream.Dispose();

            return byteFile;
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            throw;
        }
    }

    public string FormatFileSize(long bytes)
    {
        int counter = 0;
        decimal fileSize = bytes;
        while (Math.Round(fileSize / 1024) >= 1)
        {
            fileSize /= bytes;
            counter++;
        }

        return string.Format("{0:n1}{1}", fileSize, suffixes[counter]);
    }

    public string GetFileIcon(string file)
    {
        string fileImage = "default";

        if (!string.IsNullOrWhiteSpace(file))
        {
            fileImage = Path.GetExtension(file).Replace(".", "");
            return $"/img/png/{fileImage}.png";
        }

        return fileImage;
    }
}