# Text Refine Hub

## How it works
The program can work in two modes: inserting text into the appropriate field or uploading a DOCX file. When inserting text, roughly speaking, line breaks are removed from the text. When working with DOCX, a new document is created where all the text from the original is combined into 1 paragraph. So, it's best to use the app for continuous text that needs to be merged.

## Stack
- Angular (16.2.12) is used for the client side. Accordingly, In addition to HTML/SCSS, Bootstrap (5.3.2) is also used for the layout.
- The server side is built on the basis of ASP.NET Web API (.NET 7 C#)
- It is also planned to introduce the collection of feedback, which will be stored in MS SQL Server

## Usage
1. Clone the repository:
   ``` 
   git clone https://github.com/Artemiyqq/text-refine-hub.git
   ```
   
3. Install Node packages for the client side by running the following command in the "client" folder:
   ```   
   npm install
   ```
4. Run the client side (Angular) by running the following command in the "client" folder:
   ```
   ng serve
   ```
5. Run the server side (ASP.NET Web API (C#)) by running the following command in the "server/API" folder:
   ```
   dotnet run
   ```
6. Go to [http://localhost:4200/](http://localhost:4200/)

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/Artemiyqq/text-refine-hub/blob/master/LICENSE.txt) file for details.
