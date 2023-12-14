FROM mcr.microsoft.com/dotnet/core/aspnet:3.1

WORKDIR /app

COPY . .

EXPOSE 5000

ENTRYPOINT ["cat", "project.csproj"]