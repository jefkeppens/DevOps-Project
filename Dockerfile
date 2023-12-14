FROM mcr.microsoft.com/dotnet/aspnet:3.1

WORKDIR /app

COPY . .

EXPOSE 5000

CMD ["dotnet", "project.dll"]