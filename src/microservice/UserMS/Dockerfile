# Stage 1: Build the application
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /App

EXPOSE 5001
# Copy the project file and restore as distinct layers
COPY UserMS.csproj ./
RUN dotnet restore

# Copy the rest of the application code
COPY . ./

# Build the application in Release mode
RUN dotnet publish -c Release -o out

# Stage 2: Build the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /App

# Copy the published application from the build-env stage
COPY --from=build-env /App/out .

# Expose the desired port (e.g., 5001)

# Set the ASPNETCORE_URLS environment variable to listen on port 5001
ENV ASPNETCORE_URLS http://localhost:5001

# Set the entry point
ENTRYPOINT ["dotnet", "UserMS.dll"]
